"use strict";

/*
 * gabc-to-abc.js — a small helper that turns a gabc melody into an abcjs body so
 * the same chant source can drive playback. It is a CONVENIENCE, not the source
 * of truth: every introit in data/introits.js ships a hand-baked `abc` incipit
 * (so playback is reliable and sits in a sane octave). app.js only falls back to
 * this converter when an entry has no baked `abc`.
 *
 *   window.gabcToAbc(gabc) -> "<abc body>" | null
 *
 * Scope (deliberately small for V1):
 *   - Handles do-clefs c1..c4. Under c4 the gabc letters a..m equal the absolute
 *     white-note pitches A..f' (per the gabc spec); lower do-clefs transpose by a
 *     third per line. Semitones therefore land naturally at E-F and B-C.
 *   - f-clefs and accidentals are not converted — returns null so the caller uses
 *     the baked `abc` instead.
 *   - Rhythm is dropped (every note an even quarter); neume ornaments are ignored.
 */

(function () {
  // ABC pitch ladder, low to high, starting where gabc 'a' lands under a c4 clef.
  // gabc a..m == A B C D E F G a b c d e f  (13 white-note steps).
  var LADDER = ["A", "B", "C", "D", "E", "F", "G", "a", "b", "c", "d", "e", "f"];

  // Diatonic step a given clef adds to every letter, relative to c4.
  var CLEF_SHIFT = { c4: 0, c3: 2, c2: 4, c1: 6 };

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

    var clefMatch = gabc.match(/\((c[1-4])\)/);
    if (!clefMatch) return null;            // no do-clef -> let caller use baked abc
    var shift = CLEF_SHIFT[clefMatch[1]];
    if (shift === undefined) return null;

    var notes = [];
    // Pull the contents of every (...) group after the clef and read note letters.
    var re = /\(([^)]*)\)/g;
    var m;
    var sawClef = false;
    while ((m = re.exec(gabc)) !== null) {
      var inside = m[1];
      if (!sawClef && /^c[1-4]$/.test(inside)) { sawClef = true; continue; }
      // letters a-m (lower or upper) are pitches; everything else is markup.
      var letters = inside.replace(/[^a-mA-M]/g, "");
      for (var j = 0; j < letters.length; j++) {
        var ch = letters[j].toLowerCase();
        var idx = ch.charCodeAt(0) - 97; // 'a' -> 0
        if (idx >= 0 && idx <= 12) notes.push(pitchFor(idx, shift));
      }
    }
    if (!notes.length) return null;
    return notes.join(" ") + " |]";
  }

  window.gabcToAbc = gabcToAbc;
})();
