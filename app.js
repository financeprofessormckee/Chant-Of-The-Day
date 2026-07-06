"use strict";

/*
 * app.js — boot for "Chant of the Day".
 *
 *   today (or ?date=YYYY-MM-DD)
 *     -> RESOLVE_DAY (calendar.js)
 *     -> pick the introit (data/introits.js), with a ferial fallback
 *     -> render the gabc as square notes (Exsurge)
 *     -> wire playback (playback.js: a synth + a highlight that follows the notes)
 */

/* ---- Elements ------------------------------------------------------------ */

const scoreEl = document.getElementById("score");
const seasonPill = document.getElementById("season-pill");
const dayDate = document.getElementById("day-date");
const dayTitle = document.getElementById("day-title");
const fallbackNote = document.getElementById("fallback-note");
const latinEl = document.getElementById("introit-latin");
const translationEl = document.getElementById("introit-translation");
const modeEl = document.getElementById("introit-mode");
const sourceNote = document.getElementById("source-note");
const playBtn = document.getElementById("play-btn");
const playNote = document.getElementById("play-note");
const dateInput = document.getElementById("date-input");
const todayBtn = document.getElementById("today-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const massOptions = document.getElementById("mass-options");
const propersTabs = document.getElementById("propers-tabs");
const calendarVersion = document.getElementById("calendar-version");
const modeToggle = document.getElementById("mode-toggle");
const dayCard = document.getElementById("day-card");
const jumpSection = document.getElementById("jump-section");
const commonsPicker = document.getElementById("commons-picker");
const commonsSelect = document.getElementById("commons-select");

// The active introit/propers tables and the calendar resolver. selectVersion()
// repoints these at the modern or the 1962 dataset; everything below reads them
// indirectly so a version switch needs no other changes.
let INTROITS = window.INTROITS || {};
let PROPERS = window.PROPERS || {};

// The sung propers, in the order the tabs present them. "alleluia" and "tract"
// occupy the same slot (Lent carries the Tract); only the one authored shows.
// "sequence" (sung after the Alleluia, before the Gospel) is authored only on the
// handful of feasts that have one and, like alleluia/tract, never falls back.
const PART_ORDER = ["introit", "gradual", "alleluia", "tract", "sequence", "offertory", "communion"];
function partLabel(part) { return part.charAt(0).toUpperCase() + part.slice(1); }

/* ---- Date helpers -------------------------------------------------------- */

function pad2(n) { return String(n).padStart(2, "0"); }
function toIso(d) { return d.getUTCFullYear() + "-" + pad2(d.getUTCMonth() + 1) + "-" + pad2(d.getUTCDate()); }
function fromIso(s) { const p = s.split("-"); return new Date(Date.UTC(+p[0], +p[1] - 1, +p[2])); }
function addDays(d, n) { return new Date(d.getTime() + n * 86400000); }

function todayIso() {
  const n = new Date();
  return n.getFullYear() + "-" + pad2(n.getMonth() + 1) + "-" + pad2(n.getDate());
}

const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July",
  "August", "September", "October", "November", "December"];
function prettyDate(iso) {
  const d = fromIso(iso);
  return WEEKDAYS[d.getUTCDay()] + ", " + MONTHS[d.getUTCMonth()] + " " + d.getUTCDate() + ", " + d.getUTCFullYear();
}

/* ---- Proper selection (with ferial fallback) ----------------------------- */

// The introit lives in INTROITS; every other sung part lives in PROPERS, nested
// one level under the feast key. getPart unifies the two so the fallback walk
// below is identical for all parts.
function getPart(key, part) {
  if (part === "introit") return INTROITS[key] || (window.COMMON_INTROITS && window.COMMON_INTROITS[key]) || null;
  return (PROPERS[key] && PROPERS[key][part]) ||
    (window.COMMON_PROPERS && window.COMMON_PROPERS[key] && window.COMMON_PROPERS[key][part]) || null;
}

// Resolve a base feast key to an authored `part`, preferring a 3-year-cycle
// variant (key + "-a/-b/-c") when the day carries a cycle letter and one exists.
// Ordinary-Time Sundays whose chants change by lectionary year are keyed this way.
function resolveKeyFor(baseKey, cycle, part) {
  if (!baseKey) return null;
  if (cycle) {
    const k = baseKey + "-" + cycle.toLowerCase();
    if (getPart(k, part)) return k;
  }
  return getPart(baseKey, part) ? baseKey : null;
}

// Try the day's own proper, then the Sunday that governs this week, then walk
// back up to two weeks to the nearest authored Sunday, then (introit only) the
// season anchor. Same logic for every part — a ferial day inherits the governing
// Sunday's offertory/communion just as it inherits the introit.
function pickPart(day, part) {
  const dk = resolveKeyFor(day.dayKey, day.cycle, part);
  if (dk) return { entry: getPart(dk, part), from: null };
  const sk = resolveKeyFor(day.sundayKey, day.cycle, part);
  if (sk) return { entry: getPart(sk, part), from: day.isSunday ? null : describeSunday(day) };
  const base = fromIso(day.date);
  for (let i = 1; i <= 14; i++) {
    // Pass an ISO string (parsed in UTC) — handing RESOLVE_DAY a UTC-built Date
    // would be re-read with local accessors and slip back a day west of UTC.
    const prev = window.RESOLVE_DAY(toIso(addDays(base, -i)));
    // Never let the walk-back cross a season boundary. Within a season it degrades
    // gracefully (e.g. an OT Sunday with no proper Gradual this lectionary year
    // falls back to the previous Sunday's), but a part absent from a season's own
    // formulary must stay absent rather than be pulled from the prior season:
    // an Eastertide Sunday has no Gradual (it must not borrow a Lenten one), and
    // Holy Thursday — the start of the Triduum — has no Offertory (it must not
    // borrow Palm Sunday's). Seasons are contiguous, so the first day of a
    // different season ends the walk.
    if (prev.season !== day.season) break;
    const key = resolveKeyFor(prev.dayKey, prev.cycle, part) || resolveKeyFor(prev.sundayKey, prev.cycle, part);
    if (key) return { entry: getPart(key, part), from: prev.title };
  }
  if (part === "introit" && day.seasonKey && INTROITS[day.seasonKey]) {
    return { entry: INTROITS[day.seasonKey], from: "this season" };
  }
  return { entry: null, from: null };
}

// The ordered parts available for a day, each with its ferial-fallback note.
function partsForDay(day) {
  // A day whose own dayKey authors any sung proper is a self-contained Mass.
  // For such a day the Alleluia/Tract slot shows only what that Mass itself
  // authors and never borrows across days — the two share one slot, so a Mass
  // sings one or the other, never both. This keeps the Mass for the Dead on its
  // Tract (not a neighbouring feast's Alleluia) and a feast vigil from showing
  // the governing Sunday's Alleluia. Gradual/Offertory/Communion keep the
  // ferial fallback, so ferial days still inherit the governing Sunday's chants.
  const selfContained = PART_ORDER.some(function (p) {
    return p !== "introit" && resolveKeyFor(day.dayKey, day.cycle, p);
  });
  const out = [];
  PART_ORDER.forEach(function (part) {
    // The Sequence belongs to a specific feast's own Mass — it never falls back
    // to a governing Sunday or a neighbouring day, so a ferial within an octave
    // (dayKey null) shows none. Only a day that authors its own sequence sings it.
    if (part === "sequence") {
      const k = resolveKeyFor(day.dayKey, day.cycle, part);
      if (k) out.push({ part: part, label: partLabel(part), entry: getPart(k, part), from: null });
      return;
    }
    if (selfContained && (part === "alleluia" || part === "tract")) {
      const k = resolveKeyFor(day.dayKey, day.cycle, part);
      if (k) out.push({ part: part, label: partLabel(part), entry: getPart(k, part), from: null });
      return;
    }
    const picked = pickPart(day, part);
    if (picked.entry) out.push({ part: part, label: partLabel(part), entry: picked.entry, from: picked.from });
  });
  return out;
}

// The ordered parts for one explicit Mass key (used by the same-day Mass
// selector). A specific Mass shows only its own authored chants — no fallback.
function partsForKey(key) {
  const out = [];
  PART_ORDER.forEach(function (part) {
    const entry = getPart(key, part);
    if (entry) out.push({ part: part, label: partLabel(part), entry: entry, from: null });
  });
  return out;
}

// Common of Saints entries live outside INTROITS/PROPERS (window.COMMON_INTROITS
// / window.COMMON_PROPERS) so a Common key can never collide with a real dayKey.
// They're browsed by category, never resolved by date, so this mirrors
// partsForKey exactly but reads the Commons tables instead.
function getCommonPart(key, part) {
  if (part === "introit") return (window.COMMON_INTROITS && window.COMMON_INTROITS[key]) || null;
  return (window.COMMON_PROPERS && window.COMMON_PROPERS[key] && window.COMMON_PROPERS[key][part]) || null;
}

function partsForCommonKey(key) {
  const out = [];
  PART_ORDER.forEach(function (part) {
    const entry = getCommonPart(key, part);
    if (entry) out.push({ part: part, label: partLabel(part), entry: entry, from: null });
  });
  return out;
}

function describeSunday(day) {
  // sundayKey like "ot-11" -> a readable "11th Sunday in Ordinary Time" comes from
  // the governing Sunday's own resolution; cheap to recompute.
  const base = fromIso(day.date);
  const sunday = addDays(base, -base.getUTCDay());
  return window.RESOLVE_DAY(toIso(sunday)).title;
}

/* ---- Rendering ----------------------------------------------------------- */

function renderDayCard(day) {
  document.body.className = "season-" + day.season + (day.color ? " color-" + day.color : "");
  // The 1962 resolver supplies a `seasonLabel` (e.g. "Septuagesima", "Time after
  // Pentecost") for display; the modern resolver omits it, so the pill is unchanged.
  const seasonName = day.seasonLabel || capitalize(day.season);
  seasonPill.textContent = day.rank === "Feria"
    ? seasonName + " · " + day.color
    : day.rank + " · " + seasonName;
  dayDate.textContent = prettyDate(day.date);
  dayTitle.textContent = day.title;
}

function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

// Target on-screen size of one Exsurge layout unit, in CSS pixels. Exsurge's
// native units are small (a staff line-space is ~6 units), so at the container's
// pixel width it would pack a whole antiphon onto one line and the notes would be
// an illegible smear. We hand Exsurge a layout width in *its* units
// (container px / SCALE) so it wraps lines at a readable density, then map units
// back to px at this scale — keeping note size constant as the screen changes.
const CHANT_SCALE = 1.2;
// Floor on the layout width (Exsurge units): if a line is narrower than a single
// neume, Exsurge's line-fill loop never advances and the page hangs. This keeps
// very narrow screens safe.
const MIN_LAYOUT_WIDTH = 220;

// Exsurge sometimes leaves a neume's aggregate bounds.height as NaN even though
// its own notes measured fine. That single NaN poisons everything downstream:
// the line's height, the lyric baseline (lyricVerticalOffset), and the vertical
// stacking of wrapped lines — so the lyrics land on top of the notes and every
// line after the first collapses to y=0. Rebuild any bad height from the notes
// before layoutChantLines consumes it.
function repairNotationBounds(score) {
  score.notations.forEach(function (n) {
    if (isFinite(n.bounds.height)) return;
    var top = Infinity, bottom = -Infinity;
    (n.notes || []).forEach(function (note) {
      if (isFinite(note.bounds.y)) {
        top = Math.min(top, note.bounds.y);
        bottom = Math.max(bottom, note.bounds.y + (note.bounds.height || 0));
      }
    });
    if (isFinite(top) && isFinite(bottom)) {
      if (!isFinite(n.bounds.y)) n.bounds.y = top;
      n.bounds.height = bottom - top;
    } else {
      n.bounds.height = 0;
    }
  });
}

// Exsurge fully justifies every non-final chant line by default, spreading the
// leftover width across its divisiones. On short lines that slack collapses into
// large blank gaps with the custos stranded at the right margin. Render
// ragged-right (the Graduale's natural look) by neutralizing justification — the
// sole justification entry point is ChantLine.justifyElements.
if (window.exsurge && window.exsurge.ChantLine) {
  window.exsurge.ChantLine.prototype.justifyElements = function () {};
}

// Exsurge's minified bundle defines its AccidentalType enum in one module scope
// but references it as a free (global) name in convertGabcStaffPositionToScribamPitch,
// so any chant whose pitches force an accidental decision throws "AccidentalType
// is not defined" and fails to render (e.g. the Lenten tracts and a couple of
// Ordinary-Time introits). Re-export the enum globally with Exsurge's own values
// so that lookup resolves.
if (typeof window.AccidentalType === "undefined") {
  window.AccidentalType = { Flat: -1, Natural: 0, Sharp: 1 };
}

// Renders the gabc into #score. Exsurge's layout is async (it fires callbacks), so
// the finished score + svg are handed back through onReady(score, svg) once the SVG
// is in the DOM — playback.js drives audio and the follow-along highlight off that
// same score object, so the two can never drift.
function renderChant(gabc, onReady) {
  scoreEl.innerHTML = "";
  try {
    const ctxt = new window.exsurge.ChantContext();
    const score = window.exsurge.Gabc.loadChantScore(ctxt, gabc, true);
    const containerPx = scoreEl.clientWidth || 660;
    const layoutWidth = Math.max(MIN_LAYOUT_WIDTH, containerPx / CHANT_SCALE);
    score.performLayout(ctxt, function () {
      // performLayout has now set every notation's bounds; fix the NaN ones
      // before layoutChantLines derives line heights and the lyric baseline.
      repairNotationBounds(score);
      score.layoutChantLines(ctxt, layoutWidth, function () {
        scoreEl.innerHTML = score.createDrawable(ctxt);
        const svg = scoreEl.querySelector("svg");
        if (svg) {
          // Exsurge emits width/height but no viewBox. Derive a viewBox from the
          // content that actually rendered (getBBox also captures the drop-cap,
          // which spills left of x=0) so the score scales uniformly.
          const PAD = 4;
          const bb = svg.getBBox();
          const vbW = bb.width + PAD * 2;
          const vbH = bb.height + PAD * 2;
          svg.setAttribute("viewBox", (bb.x - PAD) + " " + (bb.y - PAD) + " " + vbW + " " + vbH);
          svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
          svg.removeAttribute("height");
          // Render at CHANT_SCALE px per unit; CSS max-width:100% reins it in on
          // screens narrower than that, and height:auto keeps the ratio.
          svg.setAttribute("width", Math.round(vbW * CHANT_SCALE));
        }
        if (onReady) onReady(score, svg);
      });
    });
  } catch (err) {
    console.error("Exsurge render failed:", err);
    scoreEl.textContent = "Couldn't render this chant's notation.";
    if (onReady) onReady(null, null);
  }
}

function renderText(entry, fallbackFrom) {
  latinEl.textContent = entry.latin || "";
  translationEl.textContent = entry.translation || "";
  modeEl.textContent = entry.mode || "";
  sourceNote.textContent = entry.source ? "Source: " + entry.source : "";
  if (fallbackFrom) {
    fallbackNote.hidden = false;
    fallbackNote.textContent =
      "No proper chant of its own today — showing " + entry.title + " (" + fallbackFrom + ").";
  } else {
    fallbackNote.hidden = true;
    fallbackNote.textContent = "";
  }
}

function renderEmpty(day) {
  scoreEl.textContent = "No chant authored yet for this day.";
  latinEl.textContent = "";
  translationEl.textContent = "";
  modeEl.textContent = "";
  sourceNote.textContent = "";
  fallbackNote.hidden = false;
  fallbackNote.textContent = "Today is " + day.title + ". An introit for it hasn't been added yet.";
  playBtn.disabled = true;
}

/* ---- Playback (playback.js: synth + follow-along highlight) --------------- */

const PLAY_LABEL = "▶ Hear it";
const PAUSE_LABEL = "⏸ Pause";

// The engine reports state through this one callback (text for the status line);
// the button label just mirrors whether it is actually sounding.
function onPlaybackStatus(text) {
  playNote.textContent = text || "";
  playBtn.textContent = window.ChantPlayback.isPlaying() ? PAUSE_LABEL : PLAY_LABEL;
}

// Hand the freshly rendered score to the engine. Called from renderChant's onReady,
// so the SVG is already in the DOM (its notation groups are what light up).
function prepareAudio(score, svg) {
  const playable = window.ChantPlayback.load(score, svg, onPlaybackStatus, null);
  playBtn.textContent = PLAY_LABEL;
  playBtn.disabled = !playable;
}

async function onPlayClick() {
  // Unlock/resume the AudioContext inside the click gesture (autoplay policy), then
  // play/pause. The engine's status callback updates the label and status line.
  try { await window.ChantPlayback.resumeContext(); } catch (_) { /* ignore */ }
  window.ChantPlayback.toggle();
}

/* ---- Boot ---------------------------------------------------------------- */

// The entry currently on screen (the selected part of the day's — or the chosen
// Mass's — propers). Kept so the resize re-flow re-renders the right one.
let currentEntry = null;
// The proper currently selected ("introit", "communion", …) and the parts on
// offer. Tracked so switching Mass keeps the same part when that Mass has it.
let currentPart = "introit";
let currentParts = [];

function renderEntry(entry, from) {
  currentEntry = entry;
  // renderChant lays out asynchronously; prepareAudio (its onReady) wires playback
  // once the SVG exists. Disable the button until then so a click can't race the load.
  playBtn.disabled = true;
  renderChant(entry.gabc, prepareAudio);
  renderText(entry, from);
}

// Reset playback state — shared by both selectors before they swap the score.
function resetPlayback() {
  window.ChantPlayback.stop();
  playNote.textContent = "";
  playBtn.textContent = PLAY_LABEL;
  playBtn.disabled = false;
}

// Render one tab per available part (Introit / Gradual / Alleluia|Tract /
// Offertory / Communion) and render `selected` (or the first part). The strip
// hides when only the introit exists, so un-populated feasts look unchanged.
function renderProperTabs(parts, selected) {
  propersTabs.innerHTML = "";
  const sel = parts.find(function (p) { return p.part === selected; }) || parts[0];
  if (!sel) { propersTabs.hidden = true; return; }
  currentPart = sel.part;
  if (parts.length < 2) { propersTabs.hidden = true; }
  else {
    propersTabs.hidden = false;
    parts.forEach(function (p) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = p.label;
      if (p.part === sel.part) btn.classList.add("active");
      btn.addEventListener("click", function () {
        resetPlayback();
        Array.from(propersTabs.children).forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        currentPart = p.part;
        renderEntry(p.entry, p.from);
      });
      propersTabs.appendChild(btn);
    });
  }
  renderEntry(sel.entry, sel.from);
}

// Days with more than one Mass on the same date (Christmas: Midnight/Dawn/Day; the
// Assumption: two options) expose day.options. Render a pill per option; clicking
// one rebuilds the proper tabs for that Mass's own chants (no ferial fallback),
// keeping the current part if that Mass has it.
function renderMassOptions(day) {
  massOptions.innerHTML = "";
  if (!day.options || day.options.length < 2) { massOptions.hidden = true; return; }
  massOptions.hidden = false;
  day.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = opt.label;
    if (opt.key === day.dayKey) btn.classList.add("active");
    btn.addEventListener("click", () => {
      const parts = partsForKey(opt.key);
      if (!parts.length) return;
      resetPlayback();
      Array.from(massOptions.children).forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentParts = parts;
      renderProperTabs(parts, currentPart);
    });
    massOptions.appendChild(btn);
  });
}

function show(iso) {
  resetPlayback();

  const day = window.RESOLVE_DAY(iso);
  renderDayCard(day);
  dateInput.value = day.date;
  renderMassOptions(day);

  const parts = partsForDay(day);
  if (!parts.length) {
    currentEntry = null;
    currentParts = [];
    propersTabs.hidden = true;
    renderEmpty(day);
    return;
  }
  currentParts = parts;
  // A fresh day always opens on the Introit.
  renderProperTabs(parts, "introit");
}

function currentIso() {
  const param = new URLSearchParams(location.search).get("date");
  return param && /^\d{4}-\d{2}-\d{2}$/.test(param) ? param : todayIso();
}

// Step one day from whatever's currently shown. show() keeps dateInput.value in
// sync with the day on screen, so it's the source of truth for "where we are".
function step(n) {
  const base = dateInput.value || currentIso();
  show(toIso(addDays(fromIso(base), n)));
}

/* ---- Calendar version (modern / 1962) ----------------------------------- */

// Each version names its resolver and its proper tables. 1962 propers are a
// pilot batch (Lent only so far); days without an entry fall back to {} and
// the propers-tab strip auto-hides for them.
const VERSIONS = {
  modern: { resolve: window.RESOLVE_DAY_MODERN, introits: window.INTROITS || {}, propers: window.PROPERS || {} },
  "1962": { resolve: window.RESOLVE_DAY_1962, introits: window.INTROITS_1962 || {}, propers: window.PROPERS_1962 || {} },
};

function readVersion() {
  const param = new URLSearchParams(location.search).get("cal");
  if (param && VERSIONS[param]) return param;
  let saved = null;
  try { saved = localStorage.getItem("chant-calendar"); } catch (_) { /* private mode */ }
  return saved && VERSIONS[saved] ? saved : "modern";
}

// Point the resolver + data tables at the chosen version, reflect it in the toggle,
// the URL (?cal=), and localStorage, then re-render the day on screen. `silent`
// skips the re-render for the one-time boot call (show() runs right after).
function selectVersion(v, silent) {
  if (!VERSIONS[v]) v = "modern";
  const cfg = VERSIONS[v];
  window.RESOLVE_DAY = cfg.resolve;
  INTROITS = cfg.introits;
  PROPERS = cfg.propers;
  if (calendarVersion) {
    Array.from(calendarVersion.querySelectorAll("button")).forEach((b) =>
      b.classList.toggle("active", b.dataset.version === v));
  }
  try { localStorage.setItem("chant-calendar", v); } catch (_) { /* private mode */ }
  const url = new URL(location.href);
  if (v === "modern") url.searchParams.delete("cal"); else url.searchParams.set("cal", v);
  history.replaceState(null, "", url);
  if (!silent) show(dateInput.value || currentIso());
}

if (calendarVersion) {
  calendarVersion.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-version]");
    if (btn) selectVersion(btn.dataset.version);
  });
}

playBtn.addEventListener("click", onPlayClick);
dateInput.addEventListener("change", () => { if (dateInput.value) show(dateInput.value); });
todayBtn.addEventListener("click", () => show(todayIso()));
prevBtn.addEventListener("click", () => step(-1));
nextBtn.addEventListener("click", () => step(1));
window.addEventListener("resize", debounce(() => {
  // Re-flow the Exsurge SVG to the new width, keeping the entry currently shown
  // (which may be a Mass the reader chose from the selector). The re-render throws
  // away the old SVG, so stop playback and re-wire it to the new one.
  if (currentEntry) {
    window.ChantPlayback.stop();
    renderChant(currentEntry.gabc, prepareAudio);
  }
}, 200));

function debounce(fn, ms) {
  let t;
  return function () { clearTimeout(t); t = setTimeout(fn, ms); };
}

/* ---- Common of Saints (browse by category, not by date) ------------------ */

// window.COMMON_CATEGORIES (data/common-introits.js) is an ordered list of
// { key, label, group }; group becomes an <optgroup>, in the order categories
// first appear (each cluster is authored together, so insertion order is
// display order).
function populateCommonsSelect() {
  const categories = window.COMMON_CATEGORIES || [];
  commonsSelect.innerHTML = "";
  const groups = [];
  const byGroup = {};
  categories.forEach((c) => {
    if (!byGroup[c.group]) { byGroup[c.group] = []; groups.push(c.group); }
    byGroup[c.group].push(c);
  });
  groups.forEach((groupName) => {
    const og = document.createElement("optgroup");
    og.label = groupName;
    byGroup[groupName].forEach((c) => {
      const opt = document.createElement("option");
      opt.value = c.key;
      opt.textContent = c.label;
      og.appendChild(opt);
    });
    commonsSelect.appendChild(og);
  });
}

function isCommonKey(key) {
  return (window.COMMON_CATEGORIES || []).some((c) => c.key === key);
}

function showCommon(key) {
  const parts = partsForCommonKey(key);
  if (!parts.length) return;
  resetPlayback();
  currentParts = parts;
  massOptions.hidden = true;
  renderProperTabs(parts, "introit");
}

function syncCommonUrl(key) {
  const url = new URL(location.href);
  url.searchParams.set("common", key);
  url.searchParams.delete("date");
  history.replaceState(null, "", url);
}

// Switches between the date-driven calendar view and the Commons picker.
// `silent` skips the render (the boot call renders separately once it knows
// whether to open on a date or a deep-linked Common).
function selectMode(m, silent) {
  const mode = m === "commons" ? "commons" : "calendar";
  if (modeToggle) {
    Array.from(modeToggle.querySelectorAll("button[data-mode]")).forEach((b) =>
      b.classList.toggle("active", b.dataset.mode === mode));
  }
  dayCard.hidden = mode === "commons";
  jumpSection.hidden = mode === "commons";
  if (calendarVersion) calendarVersion.hidden = mode === "commons";
  commonsPicker.hidden = mode !== "commons";
  const url = new URL(location.href);
  if (mode === "commons") url.searchParams.delete("date"); else url.searchParams.delete("common");
  history.replaceState(null, "", url);
  if (!silent) {
    if (mode === "commons") { showCommon(commonsSelect.value); syncCommonUrl(commonsSelect.value); }
    else show(dateInput.value || currentIso());
  }
}

if (modeToggle) {
  modeToggle.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-mode]");
    if (btn) selectMode(btn.dataset.mode);
  });
}
commonsSelect.addEventListener("change", () => {
  showCommon(commonsSelect.value);
  syncCommonUrl(commonsSelect.value);
});

selectVersion(readVersion(), true);
populateCommonsSelect();
const initialCommon = new URLSearchParams(location.search).get("common");
if (initialCommon && isCommonKey(initialCommon)) {
  commonsSelect.value = initialCommon;
  selectMode("commons", true);
  showCommon(initialCommon);
} else {
  selectMode("calendar", true);
  show(currentIso());
}
