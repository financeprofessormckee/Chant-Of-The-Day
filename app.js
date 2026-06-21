"use strict";

/*
 * app.js — boot for "Chant of the Day".
 *
 *   today (or ?date=YYYY-MM-DD)
 *     -> RESOLVE_DAY (calendar.js)
 *     -> pick the introit (data/introits.js), with a ferial fallback
 *     -> render the gabc as square notes (Exsurge)
 *     -> wire organ playback (abcjs synth, reusing the Name That Chant pattern)
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
const audioStaff = document.getElementById("audio-staff");
const massOptions = document.getElementById("mass-options");

const INTROITS = window.INTROITS || {};

// Full General MIDI soundfont — includes the church organ (program 19). abcjs's
// built-in default soundfont is piano-only, so the organ voicing needs this one.
const SOUND_FONT_URL = "https://paulrosen.github.io/midi-js-soundfonts/FluidR3_GM/";

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

/* ---- Introit selection (with ferial fallback) ---------------------------- */

// Resolve a base feast key to an authored introit, preferring a 3-year-cycle
// variant (key + "-a/-b/-c") when the day carries a cycle letter and one exists.
// Ordinary-Time Sundays whose introit changes by lectionary year are keyed this way.
function resolveKey(baseKey, cycle) {
  if (!baseKey) return null;
  if (cycle) {
    const k = baseKey + "-" + cycle.toLowerCase();
    if (INTROITS[k]) return k;
  }
  return INTROITS[baseKey] ? baseKey : null;
}

// Try the day's own proper, then the Sunday that governs this week, then walk
// back up to two weeks to the nearest authored Sunday, then the season anchor.
function pickIntroit(day) {
  const dk = resolveKey(day.dayKey, day.cycle);
  if (dk) return { entry: INTROITS[dk], from: null };
  const sk = resolveKey(day.sundayKey, day.cycle);
  if (sk) return { entry: INTROITS[sk], from: day.isSunday ? null : describeSunday(day) };
  const base = fromIso(day.date);
  for (let i = 1; i <= 14; i++) {
    // Pass an ISO string (parsed in UTC) — handing RESOLVE_DAY a UTC-built Date
    // would be re-read with local accessors and slip back a day west of UTC.
    const prev = window.RESOLVE_DAY(toIso(addDays(base, -i)));
    const key = resolveKey(prev.dayKey, prev.cycle) || resolveKey(prev.sundayKey, prev.cycle);
    if (key) return { entry: INTROITS[key], from: prev.title };
  }
  if (day.seasonKey && INTROITS[day.seasonKey]) {
    return { entry: INTROITS[day.seasonKey], from: "this season" };
  }
  return { entry: null, from: null };
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
  seasonPill.textContent = day.rank === "Feria"
    ? capitalize(day.season) + " · " + day.color
    : day.rank + " · " + capitalize(day.season);
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

function renderChant(gabc) {
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
      });
    });
  } catch (err) {
    console.error("Exsurge render failed:", err);
    scoreEl.textContent = "Couldn't render this chant's notation.";
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

/* ---- Playback (abcjs synth, organ voicing) ------------------------------- */

let visualObj = null;
let synth = null;
let audioCtx = null;

function buildAbc(entry) {
  let body = entry.abc;
  if (!body && window.gabcToAbc) body = window.gabcToAbc(entry.gabc);
  if (!body) return null;
  // %%MIDI program 19 = church organ; it changes the sound, not the (hidden) staff.
  return "X:1\nM:none\nL:1/4\nK:C\n%%MIDI program 19\n" + body + "\n";
}

function prepareAudio(entry) {
  visualObj = null;
  const abc = buildAbc(entry);
  if (!abc) { playBtn.disabled = true; return; }
  audioStaff.innerHTML = "";
  const rendered = window.ABCJS.renderAbc(audioStaff, abc, { add_classes: false });
  visualObj = rendered && rendered[0] ? rendered[0] : null;
  playBtn.disabled = !visualObj;
}

async function stopPlayback() {
  if (synth) {
    try { synth.stop(); } catch (_) { /* ignore */ }
    synth = null;
  }
}

async function play() {
  if (!visualObj) return;
  if (!window.ABCJS.synth.supportsAudio()) {
    playNote.textContent = "Audio isn't supported in this browser.";
    return;
  }
  await stopPlayback();
  playBtn.disabled = true;
  playNote.textContent = "loading sound…";
  try {
    // Create/resume the audio context inside the click gesture (autoplay policy).
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === "suspended") await audioCtx.resume();

    synth = new window.ABCJS.synth.CreateSynth();
    await synth.init({ audioContext: audioCtx, visualObj, options: { soundFontUrl: SOUND_FONT_URL } });
    await synth.prime();
    synth.start();
    playNote.textContent = "playing (church-organ voicing)";
  } catch (err) {
    console.error("Playback failed:", err);
    const detail = err && (err.message || err.status) ? (err.message || err.status) : String(err);
    playNote.textContent = "Couldn't play: " + detail;
  } finally {
    playBtn.disabled = false;
  }
}

/* ---- Boot ---------------------------------------------------------------- */

// The entry currently on screen (the day's proper, or whichever Mass the reader
// picked from the selector). Kept so the resize re-flow re-renders the right one.
let currentEntry = null;

function renderEntry(entry, from) {
  currentEntry = entry;
  renderChant(entry.gabc);
  renderText(entry, from);
  prepareAudio(entry);
}

// Days with more than one Mass on the same date (Christmas: Midnight/Dawn/Day; the
// Assumption: two options) expose day.options. Render a pill per option; clicking
// one swaps in that authored introit directly (no ferial fallback).
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
      const entry = INTROITS[opt.key];
      if (!entry) return;
      stopPlayback();
      playNote.textContent = "";
      playBtn.disabled = false;
      Array.from(massOptions.children).forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderEntry(entry, null);
    });
    massOptions.appendChild(btn);
  });
}

function show(iso) {
  stopPlayback();
  playNote.textContent = "";
  playBtn.disabled = false;

  const day = window.RESOLVE_DAY(iso);
  renderDayCard(day);
  dateInput.value = day.date;
  renderMassOptions(day);

  const picked = pickIntroit(day);
  if (!picked.entry) { currentEntry = null; renderEmpty(day); return; }

  renderEntry(picked.entry, picked.from);
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

playBtn.addEventListener("click", play);
dateInput.addEventListener("change", () => { if (dateInput.value) show(dateInput.value); });
todayBtn.addEventListener("click", () => show(todayIso()));
prevBtn.addEventListener("click", () => step(-1));
nextBtn.addEventListener("click", () => step(1));
window.addEventListener("resize", debounce(() => {
  // Re-flow the Exsurge SVG to the new width, keeping the entry currently shown
  // (which may be a Mass the reader chose from the selector).
  if (currentEntry) renderChant(currentEntry.gabc);
}, 200));

function debounce(fn, ms) {
  let t;
  return function () { clearTimeout(t); t = setTimeout(fn, ms); };
}

show(currentIso());
