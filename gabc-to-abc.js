"use strict";

/*
 * gabc-to-abc.js — turns a gabc melody into an abcjs body so the same chant
 * source can drive playback. app.js's buildAbc() uses an entry's hand-baked `abc`
 * when present and falls back to this converter when it is absent — so newer
 * introits ship gabc only and rely on this.
 *
 *   window.gabcToAbc(gabc) -> "<abc body>" | null
 *
 * Scope:
 *   - do-clefs c1..c4 AND fa-clefs f1..f4. The gabc note letters a..m are absolute
 *     staff positions; the clef fixes which position is the reference. Under c4,
 *     a..m == A B C D E F G a b c d e f. A lower do-clef raises every letter by a
 *     third per line; an fa-clef's reference (fa) sits a fourth below the do-clef's
 *     on the same line, so it raises every letter by a further third (a fourth).
 *   - accidentals: gabc writes a flat as a note letter followed by 'x', a natural
 *     by 'y', a sharp by '#'. The alteration holds for that staff position until a
 *     divisio (bar line), per the gabc spec. We emit abc '_' / '=' / '^'.
 *   - Rhythm is dropped (every note an even quarter); neume ornaments are ignored.
 */

(function () {
  // ABC pitch ladder, low to high, starting where gabc 'a' lands under a c4 clef.
  // gabc a..m == A B C D E F G a b c d e f  (13 white-note steps).
  var LADDER = ["A", "B", "C", "D", "E", "F", "G", "a", "b", "c", "d", "e", "f"];

  // Diatonic step a given clef adds to every letter, relative to c4.
  // Each line lower adds a third (2 steps); an fa-clef adds a further fourth
  // (3 steps) over the do-clef on the same line — verified against the baked
  // f3 entries (Cibavit, Ecce advenit), where gabc 'c' sounds as ladder 'a'.
  var CLEF_SHIFT = {
    c4: 0, c3: 2, c2: 4, c1: 6,
    f4: 3, f3: 5, f2: 7, f1: 9
  };

  function pitchFor(letterIndex, shift) {
    var i = letterIndex + shift;
    if (i < 0) i = 0;
    if (i >= LADDER.length) {
      // Past the top of the ladder: keep climbing by octave with abc apostrophes.
      var over = i - (LADDER.length - 1);
      var oct = Math.ceil(over / 7);
      return LADDER[i - 7 * oct] + "'".repeat(oct);
    }
    return LADDER[i];
  }

  function gabcToAbc(gabc) {
    if (typeof gabc !== "string") return null;

    var clefMatch = gabc.match(/\(([cf][1-4])\)/);
    if (!clefMatch) return null;            // no recognised clef -> caller uses baked abc
    var shift = CLEF_SHIFT[clefMatch[1]];
    if (shift === undefined) return null;

    var notes = [];
    // Per-staff-position accidental state, cleared at each divisio (bar line).
    var accidentals = {};
    // Pull the contents of every (...) group after the clef.
    var re = /\(([^)]*)\)/g;
    var m;
    var sawClef = false;
    while ((m = re.exec(gabc)) !== null) {
      var inside = m[1];
      if (!sawClef && /^[cf][1-4]$/.test(inside)) { sawClef = true; continue; }
      // A divisio group (comma / half-bar / full bar) cancels any accidentals.
      if (/[,;:]/.test(inside)) { accidentals = {}; continue; }

      for (var j = 0; j < inside.length; j++) {
        var ch = inside[j].toLowerCase();
        var idx = ch.charCodeAt(0) - 97; // 'a' -> 0
        if (idx < 0 || idx > 12) continue; // not a pitch letter (markup / shape)

        // An accidental mark immediately after the letter sets this position's state.
        var next = inside[j + 1];
        if (next === "x" || next === "#") { accidentals[ch] = next; j++; }
        else if (next === "y") { accidentals[ch] = "y"; j++; }

        var state = accidentals[ch];
        var prefix = state === "x" ? "_" : state === "#" ? "^" : state === "y" ? "=" : "";
        notes.push(prefix + pitchFor(idx, shift));
      }
    }
    if (!notes.length) return null;
    return notes.join(" ") + " |]";
  }

  window.gabcToAbc = gabcToAbc;
})();
