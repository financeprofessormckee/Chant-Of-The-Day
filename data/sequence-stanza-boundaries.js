"use strict";

/*
 * Per-sequence stanza/timeline alignment for video.js (ROADMAP.md Phase 10).
 *
 * gabc double-bar counts do NOT equal a sequence's stanzas.length (Lauda Sion
 * 25 bars vs 24 stanzas, Dies irae 21 vs 19, Stabat Mater 22 vs 20 — measured
 * in the Phase 9 planning session), so the mapping can't be inferred at
 * runtime from bar counts. Instead each entry here is authored by hand,
 * once, against a live render: load the sequence in video.html, walk its
 * timeline, and note the groupIndex at which each stanza's first note
 * sounds. Keying to groupIndex (the same space timeline[i].groupIndex lives
 * in) means video.js needs no separate bar-counting logic at runtime, only
 * a lookup.
 *
 * Keyed "<dayKey-or-commonKey-or-votiveKey>.<part>" (matching the key
 * video.js's resolveEntry() builds as `stanzaKey`), each value an array with
 * one entry per stanzas[i] giving the groupIndex where that stanza begins
 * (values must be non-decreasing and as long as the sequence's own
 * `stanzas` array).
 *
 * All 5 real sequences (Lauda Sion/Corpus Christi, Dies irae/Requiem, Stabat
 * Mater/Our Lady of Sorrows, Veni Sancte Spiritus/Pentecost, Victimae
 * paschali/Easter) are authored below (Phase 10 follow-up, closed
 * 2026-07-25). Derived by loading each sequence in a running video.html and
 * reading window.ChantPlayback.notationGroups(svg)'s per-group <text> lyric
 * content against window.ChantVideo.timeline()'s groupIndex stream — not
 * guessed from gabc bar counts. Two of the five (Lauda Sion, Stabat Mater)
 * carry their own inline stanza numerals ("2.", "3.", ...) as literal lyric
 * text on the first syllable of each new stanza, which made those two exact
 * by construction; the other three (Dies irae, Veni Sancte Spiritus,
 * Victimae paschali) were matched by each stanza's first Latin word against
 * the ordered lyric stream. Every array's length matches its sequence's
 * stanzas.length exactly, confirmed against data/propers.js.
 */
window.SEQUENCE_STANZA_BOUNDARIES = {
  "sorrows.sequence": [
    0, 26, 53, 80, 107, 135, 163, 190, 217, 244,
    271, 298, 325, 352, 379, 407, 434, 462, 489, 516
  ],
  "cibavit.sequence": [
    0, 26, 54, 82, 110, 137, 172, 199, 228, 255,
    282, 309, 336, 363, 391, 419, 448, 476, 504, 540,
    577, 614, 650, 696
  ],
  "resurrexi.sequence": [0, 18, 46, 74, 94, 135, 156],
  "spiritus-domini.sequence": [0, 28, 56, 80, 104, 129, 154, 178, 202, 227],
  "requiem.sequence": [
    0, 28, 55, 82, 109, 136, 164, 191, 218, 246,
    275, 302, 331, 358, 386, 413, 441, 469, 507
  ]
};
