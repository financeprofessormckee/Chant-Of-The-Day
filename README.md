# Chant of the Day

A small devotional web page that works out where *today* falls in the liturgical
calendar and shows the Gregorian chant propers for the day in real square-note
notation, with Latin text, English translation, and synthesized playback that
highlights the notation as it sounds.

The app carries the **full set of sung propers** — Introit, Gradual, Alleluia
(or Tract), Offertory, and Communion — for the whole temporal cycle of both the
**modern General Roman Calendar** and the **1962 calendar**, plus proper Masses
for the major feasts and an eleven-category **Common of Saints**. Remaining
gaps are a handful of Common sub-variants and the lesser saints they would
unlock.

The Introit is the antiphon that opens the Mass and often names the day itself:
*Gaudete*, *Laetare*, *Rorate*, *Resurrexi*, *Requiem*, and others.

It grew out of earlier chant-and-organ web projects, especially [*Cantus & Chronicle*](https://github.com/financeprofessormckee/Cantus-and-Chronicle)
and [*Name That Organ Piece*](https://github.com/financeprofessormckee/Name-That-Organ-Piece). It reuses some of the same zero-build, fully static
approach and source code, but Chant of the Day is a larger devotional and
liturgical-calendar project rather than a quiz.

**Try it live:** <https://financeprofessormckee.github.io/Chant-Of-The-Day/>

---

## Project status

This project is under active development.

Currently solid:

- modern General Roman Calendar and 1962 calendar date resolution
- full sung propers (Introit, Gradual, Alleluia/Tract, Offertory, Communion)
  for the entire temporal cycle of both calendars
- proper Masses for the major sanctoral feasts, and an eleven-category
  Common of Saints for lesser saints
- a starter set of the Mass Ordinary (Kyriale Masses VIII, XI, XVII and XVIII,
  plus Credo I and III)
- gabc rendering with Exsurge
- synthesized chant playback (a small Web Audio voice in `playback.js`) that
  highlights each syllable as it sounds

In progress:

- remaining Common-of-Saints sub-variants and the lesser saints they unblock

---

## How to use it

- Open the page; it shows today's date, its place in the calendar — season and
  rank — and the proper chants available for that day, with a tab per proper
  (Introit, Gradual, Alleluia or Tract, Offertory, Communion).
- The **Calendar** toggle switches between the modern and 1962 calendars; the
  **Browse** toggle switches to the Common of Saints picker, to Votive
  Masses (e.g. the Requiem, Mass for the Dead), or to the **Mass Ordinary** —
  the Kyrie, Gloria, Sanctus, Agnus Dei and dismissal of a chosen Kyriale
  setting, plus the Credos. All are browsable on demand rather than only on
  the date they're assigned; the Ordinary has no assigned date at all.
- **▶ Hear it** plays the chant in a synthesized voice, highlighting the
  notation as it sounds. Everything is generated locally in the browser — no
  internet connection or instrument download is needed.
- **See another day** lets you pick any date; **Today** returns to the current
  day; **Next** and **Previous** move the day forward or backwards 1 day respectively.
- You can also link directly to a specific day with: ?date=YYYY-MM-DD, a
  Common of Saints category with ?common=KEY, a votive Mass with ?votive=KEY,
  or a Kyriale setting with ?ordinary=KEY

---

## Coverage

Both calendars carry the **full sung propers** — Introit, Gradual, Alleluia (or
Tract in Lent), Offertory, and Communion — across their entire temporal cycles:

- **Modern calendar**: Advent, Christmas and Epiphany, Lent and Holy Week
  through Holy Thursday (with the Scrutiny-Mass year variants), all of
  Eastertide through Pentecost, Trinity, Corpus Christi, Sacred Heart, all of
  Ordinary Time, and Christ the King. Ordinary-Time days whose propers vary by
  lectionary cycle carry `-a`/`-b`/`-c` variants.
- **1962 calendar**: Advent through Epiphanytide, Septuagesima, Lent, Passiontide
  and Holy Week, Eastertide, and every Sunday after Pentecost, plus Trinity,
  Corpus Christi, Sacred Heart, and Christ the King.

Both calendars also carry proper Masses for the major sanctoral feasts
(Candlemas, St Joseph, the Annunciation, St John the Baptist, Sts Peter and
Paul, the Assumption, All Saints, the Immaculate Conception, a Requiem, and
many more), and a fifteen-category **Common of Saints** (five with a distinct
Eastertide Alleluia variant) used both by the lesser saints' days and as a
browsable section of its own.

**Every day of both calendars renders a chant** — verified by a full-year
audit of each calendar's day-resolution logic (2026-07-14). Good Friday and
the Easter Vigil are the sole exception: they have no Introit in either
Missal by design, not a gap. A small number of individual saints (Sylvester
I, the Chair of St. Peter, Ignatius of Antioch, Nicholas) still need their
proper texts hand-authored rather than resolving through a Common.

Both calendars intentionally reuse a single authored chant under more than one
key/Sunday where the Graduale itself repeats the same text (e.g. modern
`ot-28`/`ot-30`, 1962 `epiph-3` covering the 3rd–6th Sundays after Epiphany) —
that's correct liturgical practice, not a missing entry.

---

## How it works

The page is plain HTML + vanilla JS. There is no build step — everything runs
in the browser.

| File | Role |
| --- | --- |
| [`calendar.js`](calendar.js) | Computes the liturgical day in pure JS for the modern General Roman Calendar. |
| [`calendar-1962.js`](calendar-1962.js) | The same, for the 1962 missal. `app.js` swaps between the two resolvers. |
| [`data/introits.js`](data/introits.js), [`data/propers.js`](data/propers.js) | The authored modern-calendar chants, keyed by the feast keys the resolver emits. |
| [`data/introits-1962.js`](data/introits-1962.js), [`data/propers-1962.js`](data/propers-1962.js) | The same, for the 1962 calendar. |
| [`data/common-introits.js`](data/common-introits.js), [`data/common-propers.js`](data/common-propers.js) | The Common of Saints (11 categories). |
| [`data/ordinary.js`](data/ordinary.js) | The Mass Ordinary (Kyriale) — generated by `sources/gregobase/build-ordinary.py`, browsed by setting rather than by date, and shared by both calendars. |
| [`playback.js`](playback.js) | A small Web Audio chant voice: reads pitches straight from the Exsurge score, plays them in free rhythm, and highlights each syllable's notation as it sounds. |
| [`app.js`](app.js) | Boot: resolve today → pick the day's propers (with ferial fallback) → render with Exsurge → wire playback. |

### Run it locally

It's static, so any web server works. A launch config is included:

```
python -m http.server 8767
```

then open <http://localhost:8767/>. (Opening `index.html` straight from disk also
works, since the data is loaded as scripts, not fetched.)

---

## Adding or fixing chant data

All chant content lives in the `data/*.js` files. Entries are keyed to match
the output of the calendar resolvers.

A chant entry includes:

- `gabc` — the square-note source, in the format used by
  [Gregorio](https://gregorio-project.github.io/gabc/) and
  [GregoBase](https://gregobase.selapa.net/); Exsurge renders it, and
  `playback.js` plays it from the rendered score (no separate playback data is
  needed).
- `latin` — the Latin chant text.
- `translation` — an English translation (an original rendering after the
  Douay-Rheims; see below).
- `mode` — the Gregorian mode, where known.
- `source` — source or attribution for the chant data.

---

## Sources

The chant notation is drawn largely from the
[GregoBase](https://gregobase.selapa.net/) corpus, with reference to the
*Graduale Romanum*, mostly the 1961 edition.

For matching days to their proper Introits, I have used the Diocese of La Crosse
sacred music resources as a reference:

- [Diocese of La Crosse — Sacred Music](https://diolc.org/sacredworship/sacred-music/)

For additional matching, especially as the project expands beyond Introits to
Graduals, Alleluias, Tracts, Offertories, and Communions, I have also used
[gregorien.info](https://gregorien.info/), hosted by the Diocese of
Rottenburg-Stuttgart.

Ordinary-Time Sundays whose Introit varies by the three-year lectionary cycle use
`-a`, `-b`, and `-c` keys, chosen according to the day’s cycle letter.

The English translations are **original renderings in the style of the
Douay-Rheims**, written for this project — they are not taken from the Roman
Missal (ICEL) or the Gregorian Missal (Solesmes), whose translations are
copyrighted. The translations have been verified against the public-domain
Douay-Rheims text.

See [SOURCES.md](SOURCES.md) for full provenance detail — the GregoBase dump
schema, the Solesmes-vs-Vaticana fallback policy, the `source` field
convention, the provenance CSVs, and vendored-library licenses.

---

## Found a mistake?

If you find a typo, wrong translation, broken chant notation, bad playback, or a
chant assigned to the wrong day, please
[open an issue](https://github.com/financeprofessormckee/Chant-Of-The-Day/issues).

Helpful details include:

- the date or feast where you saw the problem
- what looks wrong
- what you expected to see instead
- the source you are comparing against, if you have one
- a screenshot, especially for broken notation/rendering issues

Examples of useful reports:

- “The Introit for the 3rd Sunday of Advent has a typo in the Latin text.”
- “The sheet music does not render on Christmas Day.”
- “The playback jumps an octave here.”
- “This feast seems to have the wrong proper assigned.”
- “The English translation is missing or incorrect.”

Small corrections are very welcome. The chant data is plain text, so typo fixes,
source corrections, and wrong-note reports are all useful.

---

## What's bundled

- `vendor/exsurge.min.js` — [Exsurge](https://github.com/frmatthew/exsurge), which
  renders gabc to SVG square-note notation. **MIT-licensed** (see
  `vendor/exsurge.LICENSE`).
- `vendor/abcjs-basic-min.js` — [abcjs](https://abcjs.net), **MIT-licensed** (see
  `vendor/abcjs.LICENSE`). No longer loaded by the page — playback is now the
  custom Web Audio voice in `playback.js` — but kept in the repo alongside
  `gabc-to-abc.js` from the earlier organ-playback approach.

---

## Licensing

Chant **melodies** are public domain. gabc scores adapted from GregoBase are
mostly Creative Commons — the `source` field cites them. Playback is **synthesized
only**; published recordings (Solesmes etc.) are copyrighted and are not bundled.
The calendar is computed locally, so no `romcal` data ships with the page.
