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
const dayLink = document.getElementById("day-link");
const fallbackNote = document.getElementById("fallback-note");
const latinEl = document.getElementById("introit-latin");
const translationEl = document.getElementById("introit-translation");
const sequenceStanzas = document.getElementById("sequence-stanzas");
const referenceEl = document.getElementById("introit-reference");
const modeEl = document.getElementById("introit-mode");
const sourceNote = document.getElementById("source-note");
const playBtn = document.getElementById("play-btn");
const playNote = document.getElementById("play-note");
const tempoSlider = document.getElementById("tempo-slider");
const tempoValue = document.getElementById("tempo-value");
const pitchSlider = document.getElementById("pitch-slider");
const pitchValue = document.getElementById("pitch-value");
const volumeSlider = document.getElementById("volume-slider");
const volumeValue = document.getElementById("volume-value");
const verseToggle = document.getElementById("verse-toggle");
const verseBlock = document.getElementById("verse-block");
const verseLatinEl = document.getElementById("verse-latin");
const verseTranslationEl = document.getElementById("verse-translation");
const gloriaPatriLabel = document.getElementById("gloria-patri-label");
const gloriaPatriLatinEl = document.getElementById("gloria-patri-latin");
const gloriaPatriTranslationEl = document.getElementById("gloria-patri-translation");
const shareBtn = document.getElementById("share-btn");
const shareNote = document.getElementById("share-note");
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
const votivePicker = document.getElementById("votive-picker");
const votiveSelect = document.getElementById("votive-select");
const ordinaryPicker = document.getElementById("ordinary-picker");
const ordinarySelect = document.getElementById("ordinary-select");
const printView = document.getElementById("print-view");
const printSheet = document.getElementById("print-sheet");
const printBtn = document.getElementById("print-btn");
const orationsSection = document.getElementById("orations-section");
const orationsNote = document.getElementById("orations-note");
const collectLatin = document.getElementById("collect-latin");
const collectTranslation = document.getElementById("collect-translation");
const secretLatin = document.getElementById("secret-latin");
const secretTranslation = document.getElementById("secret-translation");
const postcommunionLatin = document.getElementById("postcommunion-latin");
const postcommunionTranslation = document.getElementById("postcommunion-translation");
const aboutChantSection = document.getElementById("about-chant-section");
const aboutChantMode = document.getElementById("about-chant-mode");
const aboutChantBlurb = document.getElementById("about-chant-blurb");
const aboutChantSourceEl = document.getElementById("about-chant-source");

// The active introit/propers/orations tables and the calendar resolver.
// selectVersion() repoints these at the modern or the 1962 dataset; everything
// below reads them indirectly so a version switch needs no other changes.
let INTROITS = window.INTROITS || {};
let PROPERS = window.PROPERS || {};
// Orations (Collect/Secret/Postcommunion) are 1962-only (Phase 7) — modern
// always resolves to an empty table, so the panel simply never shows there.
let ORATIONS = {};

// The sung propers, in the order the tabs present them. "alleluia" and "tract"
// occupy the same slot (Lent carries the Tract); only the one authored shows.
// "sequence" (sung after the Alleluia, before the Gospel) is authored only on the
// handful of feasts that have one and, like alleluia/tract, never falls back.
const PART_ORDER = ["introit", "gradual", "alleluia", "tract", "sequence", "offertory", "communion"];

// The Ordinary's parts (data/ordinary.js), in the order they are sung. A
// disjoint set from PART_ORDER above — an Ordinary and a day's propers are
// never shown side by side — so the two orders never have to reconcile.
const ORDINARY_PART_ORDER = ["kyrie", "gloria", "credo", "sanctus", "agnus", "ite"];
// Parts whose name isn't just the capitalized key. `ite` is the default name for
// the dismissal slot; a setting that sings Benedicamus Domino there instead
// overrides it per entry with `tabLabel` (see partsForOrdinaryKey).
const PART_LABELS = { agnus: "Agnus Dei", ite: "Ite, missa est" };
function partLabel(part) {
  return PART_LABELS[part] || part.charAt(0).toUpperCase() + part.slice(1);
}

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
// `commonKey`, when given and distinct from `key`, is a third fallback tier
// below the day's own key and that key's same-key Common lookup — the
// designated Common backstop for a day that authors only some of its parts
// under its own key (see pickPart's `day.commonKey` handling below).
function getPart(key, part, commonKey) {
  if (part === "introit") {
    return INTROITS[key] || (window.COMMON_INTROITS && window.COMMON_INTROITS[key]) ||
      (commonKey && commonKey !== key && window.COMMON_INTROITS && window.COMMON_INTROITS[commonKey]) || null;
  }
  return (PROPERS[key] && PROPERS[key][part]) ||
    (window.COMMON_PROPERS && window.COMMON_PROPERS[key] && window.COMMON_PROPERS[key][part]) ||
    (commonKey && commonKey !== key && window.COMMON_PROPERS && window.COMMON_PROPERS[commonKey] &&
      window.COMMON_PROPERS[commonKey][part]) || null;
}

// Resolve a base feast key to an authored `part`, preferring a 3-year-cycle
// variant (key + "-a/-b/-c") when the day carries a cycle letter and one exists,
// then a "-paschal" variant when `paschal` is set and one is authored (Commons
// of Saints and self-contained sanctoral propers alike — e.g. a 1962 saint whose
// feast can fall within Eastertide in some years, like St. Boniface, Jun 5).
// Ordinary-Time Sundays whose chants change by lectionary year are keyed this way.
// Nothing outside Commons/sanctoral propers authors a "-paschal" key, so the two
// suffixes can never compete for the same key.
function resolveKeyFor(baseKey, cycle, part, paschal, commonKey) {
  if (!baseKey) return null;
  if (cycle) {
    const k = baseKey + "-" + cycle.toLowerCase();
    if (getPart(k, part, commonKey)) return k;
  }
  if (paschal) {
    const pk = baseKey + "-paschal";
    if (getPart(pk, part, commonKey)) return pk;
  }
  return getPart(baseKey, part, commonKey) ? baseKey : null;
}

// Try the day's own proper, then the Sunday that governs this week, then walk
// back up to two weeks to the nearest authored Sunday, then (introit only) the
// season anchor. Same logic for every part — a ferial day inherits the governing
// Sunday's offertory/communion just as it inherits the introit.
function pickPart(day, part) {
  // Paschal time sings a second Alleluia in place of the Gradual for EVERY
  // Mass, including a Common-of-Saints Mass or a self-contained sanctoral
  // proper — not just the temporal Sundays (which already model this by simply
  // not authoring a "gradual" key). A day's own "gradual" entry stays defined
  // year-round, so it must be suppressed explicitly here rather than left to
  // fall through pickPart's usual walk-back, which would otherwise wander into
  // a neighboring day (even Easter Sunday's own Gradual) that has nothing to do
  // with this feast.
  if (part === "gradual" && day.season === "easter" && day.dayKey &&
      getPart((day.commonKey || day.dayKey) + "-paschal", "alleluia")) {
    return { entry: null, from: null };
  }
  const paschal = day.season === "easter";
  const dk = resolveKeyFor(day.dayKey, day.cycle, part, paschal, day.commonKey);
  if (dk) return { entry: getPart(dk, part, day.commonKey), from: null };
  // A day with an explicit Common backstop is a self-contained Mass: if the
  // Common itself doesn't carry this part, stop here rather than falling
  // through to the ferial/Sunday walk-back below, which would otherwise
  // borrow a neighboring day's unrelated text for a part this Mass's own
  // formulary genuinely lacks.
  if (day.commonKey) return { entry: null, from: null };
  const sk = resolveKeyFor(day.sundayKey, day.cycle, part, paschal);
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
  // A day with an explicit `commonKey` (a partial proper backed by a
  // designated Common — see pickPart) is always self-contained, even before
  // checking what its own dayKey authors on its own.
  const selfContained = !!day.commonKey || PART_ORDER.some(function (p) {
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
      // Commons of Saints are always self-contained (they author every part
      // at their own dayKey), so this is the only place a Common's Alleluia
      // is ever resolved — the paschal preference has to apply here too, not
      // just in pickPart's fallback path below. The "-paschal" sibling always
      // lives on the *Common's* own key (`day.commonKey || day.dayKey` — for
      // an existing pure Common day with no `commonKey`, that's just
      // `day.dayKey` itself, same as before), which is why it needs its own
      // resolveKeyFor call rather than reusing the day-key-with-commonKey-
      // fallback call below (that one only ever appends "-paschal" to
      // `day.dayKey`, never to `day.commonKey`).
      const cbase = day.commonKey || day.dayKey;
      const paschalKey = day.season === "easter" ? resolveKeyFor(cbase, day.cycle, part, true) : null;
      const k = paschalKey || resolveKeyFor(day.dayKey, day.cycle, part, false, day.commonKey);
      if (k) out.push({ part: part, label: partLabel(part), entry: getPart(k, part, day.commonKey), from: null });
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

// The ordered parts of one Kyriale setting (data/ordinary.js). Like the Commons,
// these are browsed by name rather than resolved by date, so there is no
// fallback walk at all — a setting shows exactly the parts it authors (Mass XVII
// and XVIII have no Gloria; only Mass XVII's dismissal is a Benedicamus Domino).
function partsForOrdinaryKey(key) {
  const mass = (window.ORDINARY && window.ORDINARY[key]) || null;
  const out = [];
  if (!mass) return out;
  ORDINARY_PART_ORDER.forEach(function (part) {
    const entry = mass[part];
    if (entry) out.push({ part: part, label: entry.tabLabel || partLabel(part), entry: entry, from: null });
  });
  return out;
}

// Resolve the day's Collect/Secret/Postcommunion set (1962 only). Unlike
// pickPart, this is a single bundle per Mass — no per-part variation, no
// 3-year lectionary cycle, no Paschal-Alleluia-style variant — so one
// existence check per candidate key replaces pickPart's per-part resolveKeyFor
// walk. Mirrors pickPart's dayKey -> sundayKey -> 14-day-within-season walk.
// `orationsKey` is an optional override for days whose spoken propers differ
// from the sung-propers dayKey they share with another day (e.g. the
// Circumcision shares Christmas Day's dayKey "puer-natus" for its identical
// sung Introit/Gradual/Offertory/Communion, but has its own distinct Collect).
function pickOrations(day) {
  const ownKey = day.orationsKey || day.dayKey;
  if (ownKey && ORATIONS[ownKey]) return { entry: ORATIONS[ownKey], from: null };
  if (day.sundayKey && ORATIONS[day.sundayKey]) {
    return { entry: ORATIONS[day.sundayKey], from: day.isSunday ? null : describeSunday(day) };
  }
  const base = fromIso(day.date);
  for (let i = 1; i <= 14; i++) {
    const prev = window.RESOLVE_DAY(toIso(addDays(base, -i)));
    if (prev.season !== day.season) break;
    const prevKey = prev.orationsKey || prev.dayKey;
    if (prevKey && ORATIONS[prevKey]) return { entry: ORATIONS[prevKey], from: prev.title };
    if (prev.sundayKey && ORATIONS[prev.sundayKey]) return { entry: ORATIONS[prev.sundayKey], from: prev.title };
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
  // The 1962 resolver supplies a `seasonLabel` (e.g. "Septuagesima", "Time after
  // Pentecost") for display; the modern resolver omits it, so the pill is unchanged.
  const seasonName = day.seasonLabel || capitalize(day.season);
  seasonPill.textContent = day.rank === "Feria"
    ? seasonName + " · " + day.color
    : day.rank + " · " + seasonName;
  dayDate.textContent = prettyDate(day.date);
  dayTitle.textContent = day.title;
  if (day.link) {
    dayLink.href = day.link;
    dayLink.hidden = false;
  } else {
    dayLink.hidden = true;
  }
}

function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

// Renders the gabc into #score, via the shared renderer in chant-render.js
// (extracted in Phase 10 so video.js can reuse the same Exsurge workarounds).
// Exsurge's layout is async (it fires callbacks), so the finished score + svg
// are handed back through onReady(score, svg) once the SVG is in the DOM —
// playback.js drives audio and the follow-along highlight off that same score
// object, so the two can never drift.
// Live view renders into #score; the print preview renders each proper into its
// own container. Both share this layout path.
function renderChant(gabc, onReady) {
  window.ChantRender.renderChantInto(scoreEl, gabc, onReady);
}

// Traditional one-word Latin "character" tags for each of the 8 church modes
// (gravis/tristis/mysticus/harmonicus/laetus/devotus/angelicus/perfectus),
// attributed to the 18th-century Abbot Poisson and still repeated in chant
// pedagogy today (e.g. chantacademy.com's "Praying with Gregorian Chant, Part
// IV"). The English gloss below is this project's own wording, not a quote —
// received tradition, not a rigid modern classification; the source article
// itself makes the same caveat.
const MODE_CHARACTER = {
  I: "Mode I (gravis, “grave”) is traditionally heard as settled and weighty — a solemn, composed strength rather than excitement.",
  II: "Mode II (tristis, “sorrowful”), the plagal partner of Mode I, is traditionally the most subdued of the eight — fitting for grief, penitence, and lament.",
  III: "Mode III (mysticus, “mystical”) is traditionally described as searching and intense — a mode of exalted, unsettled feeling.",
  IV: "Mode IV (harmonicus, “well-tempered”) is traditionally called “the mode without an end” for its lingering, unresolved, reflective quality.",
  V: "Mode V (laetus, “joyful”) is traditionally the brightest of the eight — confident and trumpet-like.",
  VI: "Mode VI (devotus, “devout”) is traditionally warm and simple — a mode of filial trust and quiet piety.",
  VII: "Mode VII (angelicus, “angelic”) is traditionally exultant — triumphant, ringing joy.",
  VIII: "Mode VIII (perfectus, “perfect”) is traditionally the voice of settled certainty — stable and majestic, often the calm “narrator’s” mode."
};

// entry.mode always ends "... Mode <roman numeral>" (verified across every
// data file — no transposed/mixed-mode variants exist in this corpus).
function modeCharacterFor(modeString) {
  // Longest-alternative-first so "VIII" doesn't get short-circuited by "V"/"VI".
  const m = /Mode (VIII|VII|VI|V|IV|III|II|I)$/.exec(modeString || "");
  return m ? MODE_CHARACTER[m[1]] : null;
}

function renderAboutChant(entry) {
  const character = entry ? modeCharacterFor(entry.mode) : null;
  const blurb = entry && entry.blurb && entry.blurb.text;
  // Every proper carries a mode, so the character line alone used to decide
  // whether this panel appears. The Kyriale doesn't: GregoBase records no mode
  // for Sanctus and Agnus XVIII, and a blurb on those would otherwise be
  // invisible. Either half is now enough to open the panel.
  if (!character && !blurb) {
    aboutChantSection.hidden = true;
    return;
  }
  aboutChantSection.hidden = false;
  aboutChantMode.hidden = !character;
  aboutChantMode.textContent = character || "";
  if (entry.blurb && entry.blurb.text) {
    aboutChantBlurb.hidden = false;
    aboutChantBlurb.textContent = entry.blurb.text;
  } else {
    aboutChantBlurb.hidden = true;
    aboutChantBlurb.textContent = "";
  }
  if (entry.blurb && entry.blurb.source) {
    aboutChantSourceEl.hidden = false;
    aboutChantSourceEl.textContent = "Source: " + entry.blurb.source;
  } else {
    aboutChantSourceEl.hidden = true;
    aboutChantSourceEl.textContent = "";
  }
}

// Sequences (Stabat Mater, Dies irae, Veni Sancte Spiritus, …) are long strophic
// poems: rendered stanza-by-stanza (Latin lines split on " / ", the English prose
// beneath) like a hand missal, so the text lines up with the numbered stanzas in
// the notation above. Only entries carrying a `stanzas` array take this path; every
// other proper keeps the flat single-paragraph latin/translation. Returns true when
// it rendered stanzas (so renderText can hide the flat paragraphs).
function renderSequenceStanzas(entry) {
  sequenceStanzas.textContent = "";
  if (!entry || !entry.stanzas || !entry.stanzas.length) {
    sequenceStanzas.hidden = true;
    return false;
  }
  entry.stanzas.forEach(function (st) {
    const block = document.createElement("div");
    block.className = "sequence-stanza";
    const la = document.createElement("p");
    la.className = "sequence-stanza-latin";
    (st.latin || "").split(" / ").forEach(function (line, i) {
      if (i > 0) la.appendChild(document.createElement("br"));
      la.appendChild(document.createTextNode(line));
    });
    block.appendChild(la);
    if (st.translation) {
      const en = document.createElement("p");
      en.className = "sequence-stanza-en";
      en.textContent = st.translation;
      block.appendChild(en);
    }
    sequenceStanzas.appendChild(block);
  });
  sequenceStanzas.hidden = false;
  return true;
}

// The doxology's text is invariant across every Introit, so it lives once
// here rather than being repeated in ~95 data entries. This project's own
// rendering after the Douay-Rheims, matching the register of the antiphon
// translations elsewhere in the corpus.
const GLORIA_PATRI = {
  latin: "Glória Patri, et Fílio, et Spirítui Sancto. Sicut erat in princípio, et nunc, et semper, et in saécula saeculórum. Amen.",
  translation: "Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen."
};

// Shows the psalm verse (+ Gloria Patri, when the entry's own gabc carries
// it -- Passiontide and Requiem Introits traditionally omit it) beneath the
// antiphon text, only when the toggle is on and the entry has one.
function renderVerseBlock(entry) {
  if (!verseOn || !entry || !entry.verse) {
    verseBlock.hidden = true;
    return;
  }
  verseBlock.hidden = false;
  verseLatinEl.textContent = entry.verse.latin || "";
  verseTranslationEl.textContent = entry.verse.translation || "";
  if (entry.verse.gloriaPatri) {
    gloriaPatriLabel.hidden = false;
    gloriaPatriLatinEl.hidden = false;
    gloriaPatriTranslationEl.hidden = false;
    gloriaPatriLatinEl.textContent = GLORIA_PATRI.latin;
    gloriaPatriTranslationEl.textContent = GLORIA_PATRI.translation;
  } else {
    gloriaPatriLabel.hidden = true;
    gloriaPatriLatinEl.hidden = true;
    gloriaPatriTranslationEl.hidden = true;
    gloriaPatriLatinEl.textContent = "";
    gloriaPatriTranslationEl.textContent = "";
  }
}

function renderText(entry, fallbackFrom) {
  const isSequence = renderSequenceStanzas(entry);
  latinEl.textContent = isSequence ? "" : (entry.latin || "");
  translationEl.textContent = isSequence ? "" : (entry.translation || "");
  latinEl.hidden = isSequence;
  translationEl.hidden = isSequence;
  renderVerseBlock(entry);
  referenceEl.textContent = entry.reference || "";
  modeEl.textContent = entry.mode || "";
  sourceNote.textContent = entry.source ? "Source: " + entry.source : "";
  renderAboutChant(entry);
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
  renderSequenceStanzas(null);
  latinEl.hidden = false;
  translationEl.hidden = false;
  latinEl.textContent = "";
  translationEl.textContent = "";
  renderVerseBlock(null);
  referenceEl.textContent = "";
  modeEl.textContent = "";
  sourceNote.textContent = "";
  renderAboutChant(null);
  fallbackNote.hidden = false;
  fallbackNote.textContent = "Today is " + day.title + ". An introit for it hasn't been added yet.";
  playBtn.disabled = true;
  verseToggle.disabled = true;
}

// Renders the Collect/Secret/Postcommunion panel. Independent of which sung-part
// tab is selected (renderProperTabs), so this has its own note element rather
// than sharing #fallback-note. Hides the whole section when nothing resolves
// (modern calendar, or a 1962 day with no oration set authored yet).
function renderOrations(entry, from) {
  if (!entry) {
    orationsSection.hidden = true;
    return;
  }
  orationsSection.hidden = false;
  collectLatin.textContent = entry.collect.latin;
  collectTranslation.textContent = entry.collect.translation;
  secretLatin.textContent = entry.secret.latin;
  secretTranslation.textContent = entry.secret.translation;
  postcommunionLatin.textContent = entry.postcommunion.latin;
  postcommunionTranslation.textContent = entry.postcommunion.translation;
  if (from) {
    orationsNote.hidden = false;
    orationsNote.textContent = "From " + from + ".";
  } else {
    orationsNote.hidden = true;
    orationsNote.textContent = "";
  }
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
// The "from" fallback note text for currentEntry, so the verse toggle can
// re-render the same entry without re-walking the calendar/Common lookup.
let currentFrom = null;
// The proper currently selected ("introit", "communion", …) and the parts on
// offer. Tracked so switching Mass keeps the same part when that Mass has it.
let currentPart = "introit";
let currentParts = [];
// Heading shown atop the print sheet, captured whenever a day or Common is shown
// (Print mode reads existing state and must not re-resolve the calendar itself).
let printContext = { title: "", subtitle: "" };
// Whether the psalm-verse + Gloria Patri toggle is on (see applyVerseToggle).
let verseOn = false;

function renderEntry(entry, from) {
  currentEntry = entry;
  currentFrom = from;
  // renderChant lays out asynchronously; prepareAudio (its onReady) wires playback
  // once the SVG exists. Disable the button until then so a click can't race the load.
  playBtn.disabled = true;
  const withVerse = verseOn && entry.fullGabc;
  renderChant(withVerse ? entry.fullGabc : entry.gabc, prepareAudio);
  renderText(entry, from);
  verseToggle.disabled = !entry.fullGabc;
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
  printContext = { title: dayTitle.textContent, subtitle: dayDate.textContent };
  renderMassOptions(day);

  // Independent of which sung-part tab ends up selected below.
  const orations = pickOrations(day);
  renderOrations(orations.entry, orations.from);

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
  modern: { resolve: window.RESOLVE_DAY_MODERN, introits: window.INTROITS || {}, propers: window.PROPERS || {}, orations: {} },
  "1962": { resolve: window.RESOLVE_DAY_1962, introits: window.INTROITS_1962 || {}, propers: window.PROPERS_1962 || {}, orations: window.ORATIONS_1962 || {} },
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
let currentVersion = "modern";

function selectVersion(v, silent) {
  if (!VERSIONS[v]) v = "modern";
  currentVersion = v;
  const cfg = VERSIONS[v];
  window.RESOLVE_DAY = cfg.resolve;
  INTROITS = cfg.introits;
  PROPERS = cfg.propers;
  ORATIONS = cfg.orations;
  if (calendarVersion) {
    Array.from(calendarVersion.querySelectorAll("button")).forEach((b) =>
      b.classList.toggle("active", b.dataset.version === v));
  }
  try { localStorage.setItem("chant-calendar", v); } catch (_) { /* private mode */ }
  const url = new URL(location.href);
  if (v === "modern") url.searchParams.delete("cal"); else url.searchParams.set("cal", v);
  history.replaceState(null, "", url);
  // Commons and Mass Ordinary mode never reach here (their calendarVersion
  // toggle is hidden and so unclickable), but Votive mode keeps the toggle
  // live, so a version switch there must re-render the votive Mass, not the
  // date-driven day.
  if (!silent) {
    if (currentMode === "votive") showVotive(votiveSelect.value);
    else show(dateInput.value || currentIso());
  }
}

if (calendarVersion) {
  calendarVersion.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-version]");
    if (btn) selectVersion(btn.dataset.version);
  });
}

/* ---- Tempo control (playback.js: setTempo) -------------------------------
 * `bpm` lives as module state inside playback.js and is never reset by
 * load()/stop()/play(), so it persists across score re-renders (date change,
 * part-tab switch, resize) on its own — this just needs to set it once at
 * boot and again on every slider move. */

function applyTempo(bpm) {
  const min = Number(tempoSlider.min), max = Number(tempoSlider.max);
  bpm = Math.min(max, Math.max(min, bpm));
  window.ChantPlayback.setTempo(bpm);
  tempoSlider.value = bpm;
  tempoValue.textContent = bpm + " bpm";
  try { localStorage.setItem("chant-tempo", bpm); } catch (_) { /* private mode */ }
}

function readTempo() {
  let saved = null;
  try { saved = Number(localStorage.getItem("chant-tempo")); } catch (_) { /* private mode */ }
  return saved && saved > 0 ? saved : window.ChantPlayback.DEFAULT_BPM;
}

tempoSlider.addEventListener("input", () => applyTempo(Number(tempoSlider.value)));

/* ---- Pitch control (playback.js: setPitch) --------------------------------
 * Same live-module-state pattern as tempo: pitchShift lives inside
 * playback.js and now applies at tick() time (see buildSteps), so this just
 * needs to set it once at boot and again on every slider move. */

function applyPitch(semitones) {
  const min = Number(pitchSlider.min), max = Number(pitchSlider.max);
  semitones = Math.min(max, Math.max(min, semitones));
  window.ChantPlayback.setPitch(semitones);
  pitchSlider.value = semitones;
  pitchValue.textContent = (semitones > 0 ? "+" : "") + semitones + " st";
  try { localStorage.setItem("chant-pitch", semitones); } catch (_) { /* private mode */ }
}

function readPitch() {
  let saved = null;
  try { saved = localStorage.getItem("chant-pitch"); } catch (_) { /* private mode */ }
  saved = saved === null ? NaN : Number(saved);
  return Number.isFinite(saved) ? saved : window.ChantPlayback.DEFAULT_PITCH;
}

pitchSlider.addEventListener("input", () => applyPitch(Number(pitchSlider.value)));

/* ---- Volume control (playback.js: setVolume) -------------------------------
 * Slider is a 0-100 percentage; playback.js's setVolume takes a 0-1 fraction. */

function applyVolume(percent) {
  const min = Number(volumeSlider.min), max = Number(volumeSlider.max);
  percent = Math.min(max, Math.max(min, percent));
  window.ChantPlayback.setVolume(percent / 100);
  volumeSlider.value = percent;
  volumeValue.textContent = percent + "%";
  try { localStorage.setItem("chant-volume", percent); } catch (_) { /* private mode */ }
}

function readVolume() {
  let saved = null;
  try { saved = localStorage.getItem("chant-volume"); } catch (_) { /* private mode */ }
  saved = saved === null ? NaN : Number(saved);
  return Number.isFinite(saved) ? saved : Math.round(window.ChantPlayback.DEFAULT_VOLUME * 100);
}

volumeSlider.addEventListener("input", () => applyVolume(Number(volumeSlider.value)));

/* ---- Psalm verse + Gloria Patri toggle ------------------------------------
 * Unlike tempo/pitch/volume (pure audio-engine params that apply live without
 * a re-render), which score renders depends on this toggle -- so applying it
 * re-renders the entry currently on screen (renderEntry stores currentEntry/
 * currentFrom for exactly this). Default off, so a fresh visitor sees the
 * antiphon-only score unchanged from before this feature existed. */

function applyVerseToggle(on) {
  verseOn = !!on;
  verseToggle.checked = verseOn;
  try { localStorage.setItem("chant-verse", verseOn ? "1" : "0"); } catch (_) { /* private mode */ }
  if (currentEntry) renderEntry(currentEntry, currentFrom);
}

function readVerseToggle() {
  let saved = null;
  try { saved = localStorage.getItem("chant-verse"); } catch (_) { /* private mode */ }
  return saved === "1";
}

verseToggle.addEventListener("change", () => applyVerseToggle(verseToggle.checked));

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

/* ---- Print --------------------------------------------------------------
 * The Orations <details> is closed by default (a reader has to opt in on
 * screen). Force it open for the print stylesheet so the Collect/Secret/
 * Postcommunion actually show up on paper, then restore whatever state the
 * reader had before printing. */
const orationsDetails = orationsSection.querySelector("details");
let orationsWasOpen = false;
// "About this chant" is the same shape (closed by default, would print as a
// bare "About this chant" heading with nothing under it otherwise).
const aboutChantDetails = aboutChantSection.querySelector("details");
let aboutChantWasOpen = false;
window.addEventListener("beforeprint", () => {
  orationsWasOpen = orationsDetails.open;
  orationsDetails.open = true;
  aboutChantWasOpen = aboutChantDetails.open;
  aboutChantDetails.open = true;
});
window.addEventListener("afterprint", () => {
  orationsDetails.open = orationsWasOpen;
  aboutChantDetails.open = aboutChantWasOpen;
});

/* ---- Common of Saints (browse by category, not by date) ------------------ */

// Fills a <select> from an ordered { key, label, group } list, one <optgroup>
// per group in the order the groups first appear (each cluster is authored
// together, so insertion order is display order). Shared by the Commons picker
// and the Mass Ordinary picker, whose lists have the same shape.
function populateGroupedSelect(selectEl, items) {
  selectEl.innerHTML = "";
  const groups = [];
  const byGroup = {};
  items.forEach((c) => {
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
    selectEl.appendChild(og);
  });
}

// window.COMMON_CATEGORIES (data/common-introits.js) is that ordered list for
// the Commons.
function populateCommonsSelect() {
  populateGroupedSelect(commonsSelect, window.COMMON_CATEGORIES || []);
}

function isCommonKey(key) {
  return (window.COMMON_CATEGORIES || []).some((c) => c.key === key);
}

function showCommon(key) {
  const parts = partsForCommonKey(key);
  if (!parts.length) return;
  resetPlayback();
  currentParts = parts;
  const opt = commonsSelect.options[commonsSelect.selectedIndex];
  printContext = { title: opt ? opt.textContent : "Common of Saints", subtitle: "Common of Saints" };
  massOptions.hidden = true;
  // Commons are browsed by category, not by date, so no oration set applies.
  orationsSection.hidden = true;
  renderProperTabs(parts, "introit");
}


/* ---- Votive Masses (browse by Mass, not by date) --------------------------
 * Unlike the Common of Saints (COMMON_INTROITS/COMMON_PROPERS: one shared
 * table, never swapped by selectVersion, never has orations), a votive Mass
 * like the Requiem lives in the ordinary versioned INTROITS/PROPERS/ORATIONS
 * tables under its own key, authored separately per calendar (the 1962 tables
 * even carry its Collect/Secret/Postcommunion) — exactly like any other day's
 * Mass. So this reuses partsForKey (already used for Christmas's Midnight/
 * Dawn/Day options) and a direct ORATIONS[key] lookup rather than inventing a
 * parallel fallback system, and — unlike Commons mode — keeps the Modern/1962
 * toggle live. VOTIVE_MASSES is a small, growable { key, label } list; adding
 * a future votive Mass is authoring-only once its propers are sourced.
 */
const VOTIVE_MASSES = [
  { key: "requiem", label: "Requiem (Mass for the Dead)" },
];

function populateVotiveSelect() {
  votiveSelect.innerHTML = "";
  VOTIVE_MASSES.forEach((m) => {
    const opt = document.createElement("option");
    opt.value = m.key;
    opt.textContent = m.label;
    votiveSelect.appendChild(opt);
  });
}

function isVotiveKey(key) {
  return VOTIVE_MASSES.some((m) => m.key === key);
}

function showVotive(key) {
  const parts = partsForKey(key);
  if (!parts.length) return;
  resetPlayback();
  currentParts = parts;
  const opt = votiveSelect.options[votiveSelect.selectedIndex];
  printContext = { title: opt ? opt.textContent : "Votive Mass", subtitle: "Votive Mass" };
  massOptions.hidden = true;
  renderOrations(ORATIONS[key], null);
  renderProperTabs(parts, "introit");
}


/* ---- Mass Ordinary (browse by Kyriale setting) ----------------------------
 * The Ordinary is the one part of the repertoire with no day at all: a schola
 * picks Mass VIII for a feast or Mass XVIII for a feria, so this browses by
 * setting the way Commons mode browses by category. Its chants live in their
 * own table (window.ORDINARY, data/ordinary.js), which — like the Commons and
 * unlike the votive Masses — is shared by both calendars and so is never
 * swapped by selectVersion; the Modern/1962 toggle is hidden here for that
 * reason. Adding the rest of the Kyriale is authoring-only: extend
 * sources/gregobase/build-ordinary.py's WANT table and re-run it.
 */
function populateOrdinarySelect() {
  populateGroupedSelect(ordinarySelect, window.ORDINARY_MASSES || []);
}

function isOrdinaryKey(key) {
  return (window.ORDINARY_MASSES || []).some((m) => m.key === key);
}

function showOrdinary(key) {
  const parts = partsForOrdinaryKey(key);
  if (!parts.length) return;
  resetPlayback();
  currentParts = parts;
  const opt = ordinarySelect.options[ordinarySelect.selectedIndex];
  printContext = { title: opt ? opt.textContent : "Mass Ordinary", subtitle: "Mass Ordinary" };
  massOptions.hidden = true;
  // Not a day's Mass, so no oration set applies (as in Commons mode).
  orationsSection.hidden = true;
  // Opens on the first part the setting authors — the Kyrie for a Mass, the
  // Credo for a standalone Credo — rather than on a fixed part name.
  renderProperTabs(parts, parts[0].part);
}

/* ---- The browse modes, as one table --------------------------------------
 * Everything that isn't the date-driven calendar picks its content from a named
 * list: a Common, a votive Mass, a Kyriale setting. They differ only in which
 * picker, URL param and show/validate functions they use, so the mode plumbing
 * below (selectMode, the picker listeners, the share link and the boot
 * deep-link) reads them off this table instead of repeating a branch per mode.
 * A fourth browse mode should need nothing but a row here plus its own show*.
 */
const BROWSE_MODES = {
  commons: { param: "common", picker: commonsPicker, select: commonsSelect, show: showCommon, isKey: isCommonKey },
  votive: { param: "votive", picker: votivePicker, select: votiveSelect, show: showVotive, isKey: isVotiveKey },
  ordinary: { param: "ordinary", picker: ordinaryPicker, select: ordinarySelect, show: showOrdinary, isKey: isOrdinaryKey },
};
const BROWSE_PARAMS = Object.keys(BROWSE_MODES).map((m) => BROWSE_MODES[m].param);

// Points the address bar at one browse mode's key, clearing every other mode's
// param (and "date") so a stale one can't survive a mode switch.
function syncBrowseUrl(mode, key) {
  const url = new URL(location.href);
  url.searchParams.delete("date");
  BROWSE_PARAMS.forEach((p) => url.searchParams.delete(p));
  url.searchParams.set(BROWSE_MODES[mode].param, key);
  history.replaceState(null, "", url);
}

// Switches between the date-driven calendar view and the browse-mode pickers.
// `silent` skips the render (the boot call renders separately once it knows
// whether to open on a date or a deep-linked Common).
let currentMode = "calendar";
let printScope = "chant";

// "Print" is a view over whatever's already loaded, not a content selector — it
// reads currentParts/printContext captured by the last show()/showCommon() and
// never re-resolves the calendar. Track the content mode we came from so leaving
// Print restores it without a spurious re-render.
let contentMode = "calendar";

function selectMode(m, silent) {
  const mode = (BROWSE_MODES[m] || m === "print") ? m : "calendar";
  const prevMode = currentMode;
  currentMode = mode;
  if (mode !== "print") contentMode = mode;
  if (modeToggle) {
    Array.from(modeToggle.querySelectorAll("button[data-mode]")).forEach((b) =>
      b.classList.toggle("active", b.dataset.mode === mode));
  }

  if (mode === "print") {
    // Swap the console for the print preview; the live sections are hidden by
    // body.print-mode CSS, leaving their state untouched so returning restores it.
    document.body.classList.add("print-mode");
    printView.hidden = false;
    buildPrintSheet();
    return;
  }

  document.body.classList.remove("print-mode");
  printView.hidden = true;
  const browse = BROWSE_MODES[mode] || null;
  dayCard.hidden = !!browse;
  jumpSection.hidden = !!browse;
  // Commons and the Mass Ordinary are calendar-version-agnostic (one shared
  // table each), so the toggle is hidden there — but a votive Mass like the
  // Requiem is authored per calendar (it even has its own 1962 orations), so
  // the toggle stays live for votive.
  if (calendarVersion) calendarVersion.hidden = mode === "commons" || mode === "ordinary";
  Object.keys(BROWSE_MODES).forEach((m) => { BROWSE_MODES[m].picker.hidden = m !== mode; });
  // "date" is deliberately left alone when landing on calendar mode — it's an
  // entry-point-only param (see currentIso()'s comment), still unread at this
  // point during boot, so deleting it here would blank out a ?date= deep link
  // before show(currentIso()) ever gets to read it.
  const url = new URL(location.href);
  if (browse) url.searchParams.delete("date");
  BROWSE_PARAMS.forEach((p) => { if (!browse || p !== browse.param) url.searchParams.delete(p); });
  history.replaceState(null, "", url);
  if (silent) return;
  // Leaving Print returns to the already-loaded content — don't re-render (which
  // would reset the selected part / Mass option). Only a genuine content-mode
  // switch re-renders.
  if (prevMode === "print") return;
  if (browse) { browse.show(browse.select.value); syncBrowseUrl(mode, browse.select.value); }
  else show(dateInput.value || currentIso());
}

// Builds the paper-like preview from currentParts. Scope "chant" prints only the
// selected part; "mass" prints every proper of the day, scores only.
function buildPrintSheet() {
  printSheet.innerHTML = "";
  const head = document.createElement("header");
  head.className = "print-masthead";
  const h2 = document.createElement("h2");
  h2.textContent = printContext.title || "Chant of the Day";
  head.appendChild(h2);
  if (printContext.subtitle) {
    const p = document.createElement("p");
    p.className = "print-subtitle";
    p.textContent = printContext.subtitle;
    head.appendChild(p);
  }
  printSheet.appendChild(head);

  const parts = printScope === "mass"
    ? currentParts
    : currentParts.filter(function (p) { return p.part === currentPart; });

  if (!parts.length) {
    const note = document.createElement("p");
    note.className = "print-empty";
    note.textContent = "No chant authored for this day.";
    printSheet.appendChild(note);
    return;
  }

  parts.forEach(function (p) {
    const block = document.createElement("div");
    block.className = "print-proper";
    const label = document.createElement("h3");
    label.className = "print-proper-label";
    label.textContent = p.label;
    block.appendChild(label);
    const scoreDiv = document.createElement("div");
    scoreDiv.className = "print-score";
    block.appendChild(scoreDiv);
    printSheet.appendChild(block);
    window.ChantRender.renderChantInto(scoreDiv, p.entry.gabc);
  });
}

if (modeToggle) {
  modeToggle.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-mode]");
    if (btn) selectMode(btn.dataset.mode);
  });
}
Object.keys(BROWSE_MODES).forEach((m) => {
  const browse = BROWSE_MODES[m];
  browse.select.addEventListener("change", () => {
    browse.show(browse.select.value);
    syncBrowseUrl(m, browse.select.value);
  });
});

// Print scope toggle + the print button (prints exactly the previewed sheet).
const printScopeGroup = printView.querySelector(".print-scope");
printScopeGroup.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-scope]");
  if (!btn) return;
  printScope = btn.dataset.scope === "mass" ? "mass" : "chant";
  Array.from(printScopeGroup.querySelectorAll("button[data-scope]")).forEach((b) =>
    b.classList.toggle("active", b === btn));
  buildPrintSheet();
});
printBtn.addEventListener("click", () => window.print());

/* ---- Share (copy a deep link to what's currently on screen) -------------- */

// Built on demand rather than kept live-synced to the address bar — the URL
// bar deliberately stays clean during normal Prev/Next/Today browsing (see
// currentIso()'s comment), so this reads current state instead of history.
function buildShareUrl() {
  const url = new URL(location.href);
  url.search = "";
  const browse = BROWSE_MODES[currentMode];
  if (browse) url.searchParams.set(browse.param, browse.select.value);
  else url.searchParams.set("date", dateInput.value || currentIso());
  if (currentVersion !== "modern") url.searchParams.set("cal", currentVersion);
  return url.toString();
}

let shareNoteTimer;
shareBtn.addEventListener("click", async () => {
  const url = buildShareUrl();
  clearTimeout(shareNoteTimer);
  try {
    await navigator.clipboard.writeText(url);
    shareNote.textContent = "Copied!";
  } catch (_) {
    prompt("Copy this link:", url);
    shareNote.textContent = "";
    return;
  }
  shareNoteTimer = setTimeout(() => { shareNote.textContent = ""; }, 1500);
});

applyTempo(readTempo());
applyPitch(readPitch());
applyVolume(readVolume());
applyVerseToggle(readVerseToggle());
selectVersion(readVersion(), true);
populateCommonsSelect();
populateVotiveSelect();
populateOrdinarySelect();
// A ?common= / ?votive= / ?ordinary= deep link boots straight into that browse
// mode; anything else (including ?date=) opens the calendar.
const initialParams = new URLSearchParams(location.search);
const initialBrowse = Object.keys(BROWSE_MODES).find((m) => {
  const key = initialParams.get(BROWSE_MODES[m].param);
  return key && BROWSE_MODES[m].isKey(key);
});
if (initialBrowse) {
  const browse = BROWSE_MODES[initialBrowse];
  const key = initialParams.get(browse.param);
  browse.select.value = key;
  selectMode(initialBrowse, true);
  browse.show(key);
} else {
  selectMode("calendar", true);
  show(currentIso());
}
