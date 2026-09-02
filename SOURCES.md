# Sources & Provenance

This is the single reference for "where did everything come from" — the
chant notation, the day-to-chant assignments, the translations, and the
vendored code. README.md gives the short human-readable version of most of
this; this file is the exhaustive one.

---

## Chant notation: GregoBase

Chant notation (`gabc`) is drawn from a local snapshot of the
[GregoBase](https://gregobase.selapa.net/) chant database:
`sources/gregobase/gregobase_online.sql`. This is an on-demand SQL dump of
GregoBase's public corpus — it isn't a dated/versioned release, so no single
"pulled on" date is recorded; treat it as a snapshot current as of this
project's GregoBase-sourcing work.

The dump's `gregobase_chants` table has columns `id, cantusid, version,
incipit, initial, office-part, mode, mode_var, transcriber, commentary,
headers, gabc, gabc_verses, tex_verses, remarks, copyrighted, duplicateof`
(documented in `sources/gregobase/query.py`'s header). `version` identifies
the print edition a row was transcribed from; this project prefers rows
transcribed from the **Graduale Romanum**, mostly the 1961 Solesmes edition.

Tooling for pulling chants out of the dump:

- `sources/gregobase/query.py "<incipit>"` — search by incipit, cross-check
  version + mode.
- `sources/gregobase/getgabc.py <id>` — print clean gabc for one or more ids
  (antiphon-only by default; `--whole` for graduals/alleluias/tracts, which
  keep their verse).
- `sources/gregobase/extract.py` — batch extraction used by the `build-*.py`
  authoring scripts.

### Solesmes-vs-Vaticana fallback policy

Most chants are transcribed from Solesmes engravings. When the dump has no
Solesmes row for a needed chant, the Editio Vaticana row is used instead as a
documented fallback (see e.g. `build-easter.py`, `build-advent-christmas.py`).
This is reflected in the per-entry `source` field (see below), never silently.

### The `source` field convention (`data/*.js`)

Every chant entry carries a `source` field recording where its gabc came
from:

- Default: `"Graduale Romanum (GregoBase #<id>)"`
- Vaticana fallback: `"Graduale Romanum (GregoBase #<id>) — Vatican (no
  Solesmes engraving in the dump)"`

### Known rendering quirk

Exsurge (the gabc→SVG renderer) can hang indefinitely, rather than error, on
some 1974-Solesmes neume encodings — specifically an `[oh:h+1mm]`-style
mm-offset courtesy custos hint at a clef change. `sanitizeGabc()` in
`app.js` strips the offset; when Solesmes layout still hangs, the standing
fallback is the Editio Vaticana row of the same chant. See `ROADMAP.md` for
the fuller debugging note.

---

## Day-to-chant assignments

### Divinum Officium (sanctoral & Commons)

Saint-day and Commons-of-Saints assignments are sourced from the
[Divinum Officium](https://github.com/DivinumOfficium/divinum-officium)
project's raw liturgical text files, cached locally under
`sources/divinumofficium/raw/` (Sancti/Commune/Tempora files fetched from
`web/www/missa/Latin/...` in that repo). Individual saint/Common research is
logged in the `sources/gregobase/*-worklist.md` files.

### gregorien.info (temporal cycle, modern calendar)

Modern-calendar temporal-cycle assignments are cross-checked against
[gregorien.info](https://gregorien.info/) (hosted by the Diocese of
Rottenburg-Stuttgart), specifically its Vatican-II calendar
(`gregorien.info/calendar/id/1`). A saved local map of these assignments —
so future authoring sessions don't have to re-probe the site — lives at
`sources/gregobase/temporal-propers-map.md`, fetched 2026-06-27.

### Diocese of La Crosse

For matching days to their proper Introits, this project also references the
Diocese of La Crosse's sacred music resources:
[diolc.org/sacredworship/sacred-music](https://diolc.org/sacredworship/sacred-music/).
The `diolc_day` column in the provenance CSVs (below) records the matching
DIOLC day label.

---

## Provenance CSVs

Append-only sourcing logs under `sources/gregobase/` (and
`sources/ot-introits/`), one row per authored chant, recording which
GregoBase id backs which day/part:

| File | Columns |
| --- | --- |
| `sources/gregobase/feasts-introits.csv` | `key,gregobase_id,version,mode,incipit,diolc_day,notes` |
| `sources/gregobase/feasts-propers.csv` | `key,part,gregobase_id,version,mode,incipit,notes` |
| `sources/gregobase/feasts-introits-common.csv` | `key,gregobase_id,version,mode,incipit,diolc_day,notes` |
| `sources/gregobase/feasts-propers-common.csv` | `key,part,gregobase_id,version,mode,incipit,notes` |
| `sources/ot-introits/ot-introits.csv` | (Ordinary Time Introits; same shape as `feasts-introits.csv`) |

---

## Translations

English translations are **original renderings in the style of the
Douay-Rheims**, hand-authored per entry for this project. They are **not**
copied from the Roman Missal (ICEL) or the Gregorian Missal (Solesmes) — both
are copyrighted, and their text must never be used here. A verification pass
against the public-domain Douay-Rheims (Challoner) text is tracked as
Phase 4 in `ROADMAP.md`.

### Douay-Rheims local text dump (`sources/douay-rheims/`)

Phase 4 also added `reference:` fields (Scripture citations) to the data
entries, cross-checked against a local, one-time pull of the full
public-domain Douay-Rheims (Challoner) text — Project Gutenberg ebook #8300,
pulled 2026-07-14 — instead of a network fetch every session. Same
local-dump-over-repeated-fetches pattern as the GregoBase dump above. See
`sources/douay-rheims/README.md` for the file layout and lookup convention.

That verification pass, and the Douay-Rheims/Vulgate text itself, use
**Vulgate/Septuagint** psalm numbering. A later pass (2026-08) renumbered
every `reference:` field to **Hebrew/modern (NAB) numbering**, the
convention the site now uses throughout — see the header comment in
`data/introits.js`. So a citation lookup against `sources/douay-rheims/` or
`sources/vulgate/` needs the Hebrew→Vulgate conversion first: psalm number
shifts by 0 or +1 through most of the Psalter (Vulgate 10-112 = Hebrew
11-113, Vulgate 116-145 = Hebrew 117-146), except six psalms where Hebrew
splits or merges a Vulgate psalm — Vulgate 9 (= Hebrew 9-10), 113 (= Hebrew
114-115), 114-115 (both fold into Hebrew 116), and 146-147 (both fold into
Hebrew 147) — where the correct number depends on which verse is cited.

### Clementine Vulgate local text dump (`sources/vulgate/`)

A companion Latin-side dump, pulled 2026-07-14, so a citation's Latin chant
text can be checked directly against the cited Vulgate verse (not just the
English side via Douay-Rheims). Source: the Clementine Text Project (Michael
Tweedale et al., completed 2005), the standard plain-text digitization of the
Sixto-Clementine Vulgate, released to the public domain — the same edition
VulSearch pairs with the Douay-Rheims translation. See
`sources/vulgate/README.md` for the file layout, provenance detail, and
lookup convention.

---

## Vendored code

- `vendor/exsurge.min.js` — [Exsurge](https://github.com/frmatthew/exsurge),
  renders gabc to SVG square-note notation. MIT-licensed; full text in
  `vendor/exsurge.LICENSE` (Copyright (c) 2016 Fr. Matthew Spencer, OSJ).
- `vendor/abcjs-basic-min.js` — [abcjs](https://abcjs.net). MIT-licensed;
  full text in `vendor/abcjs.LICENSE` (Copyright (c) 2009-2024 Paul Rosen and
  Gregory Dyke). No longer loaded by `index.html` — playback is the custom
  Web Audio synth in `playback.js` — kept in the repo alongside
  `gabc-to-abc.js` from the earlier organ-playback approach.

---

## Licensing summary

Chant **melodies** are public domain. gabc scores come from GregoBase, whose
About page releases **all chant transcriptions under CC0** (public domain
dedication — no attribution requirement, no non-commercial restriction); the
per-entry `source` field is the citation. GregoBase's own `copyrighted` flag is
set on 33 of the dump's 18,762 rows, and none of the 539 distinct ids this
project uses is among them (re-verified 2026-07-25). Playback is synthesized
only; published recordings (e.g. Solesmes choir recordings) are copyrighted and
are not bundled. The calendar is computed locally, so no third-party calendar
data (e.g. `romcal`) ships with the page.

For the fuller rights analysis behind the chant-video track — the CC0
verification, the synthesized-audio point, the Solesmes rhythmic-signs residual,
the blurb-attribution residual, and the standing credits block — see
`VIDEO-LICENSING.md` (private; not ported to the public deploy repo).
