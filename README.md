# Chant of the Day

A small devotional web page that works out where *today* falls in the liturgical
calendar and shows the Gregorian chant propers for the day in real square-note
notation, with Latin text, English translation, and synthesized church-organ
playback.

At present, the app is strongest for **Introits**: every Sunday of the temporal
cycle is authored, along with a growing set of major feasts. Work is underway to
add the other Mass propers — Graduals, Alleluias, Tracts, Offertories, and
Communions — as well as support for the **1962 calendar**. A modest number of
these additional propers are already included.

The Introit is the antiphon that opens the Mass and often names the day itself:
*Gaudete*, *Laetare*, *Rorate*, *Resurrexi*, *Requiem*, and others.

It grew out of earlier chant-and-organ web projects, especially [*Name That Chant*](https://github.com/financeprofessormckee/Name-that-Chant)
and [*Name That Organ Piece*](https://github.com/financeprofessormckee/Name-That-Organ-Piece). It reuses some of the same zero-build, fully static
approach and source code, but Chant of the Day is a larger devotional and
liturgical-calendar project rather than a quiz.

---

## Project status

This project is under active development.

Currently solid:

- modern General Roman Calendar date resolution
- Introits for every Sunday of the temporal cycle
- many major feasts
- gabc rendering with Exsurge
- synthesized organ playback with abcjs

In progress:

- additional Mass propers beyond Introits
- broader feast coverage
- 1962 calendar propers
- improved source citations and verification

---

## How to use it

- Open the page; it shows today's date, its place in the calendar — season and
  rank — and the proper chants available for that day.
- Where complete data is available, the page can show multiple Mass propers.
  Introits currently have the broadest coverage.
- When data is available, the page can also switch to the 1962 calendar for those propers.
- **▶ Hear it** plays the opening in a church-organ voicing. The first playback
  may require an internet connection to fetch the instrument sounds.
- **See another day** lets you pick any date; **Today** returns to the current
  day; **Next** and **Previous** move the day forward or backwards 1 day respectively.
- You can also link directly to a specific day with: ?date=YYYY-MM-DD

---

## Coverage

The current data set includes authored Introits for every Sunday of the temporal
cycle:

- Advent
- Christmas season
- Lent
- Easter season
- Ordinary Time
- Christ the King

It also includes a growing set of major feasts.

Work is underway to expand the app beyond Introits to the other Mass propers:

- Graduals
- Alleluias
- Tracts
- Offertories
- Communions

A modest number of these additional propers are already present, but coverage is
still incomplete.

Support for the **1962 calendar** is also in progress.

---

## How it works

The page is plain HTML + vanilla JS with two vendored libraries. There is no
build step — everything runs in the browser.

| File | Role |
| --- | --- |
| [`calendar.js`](calendar.js) | `window.RESOLVE_DAY(date)` — computes the liturgical day in pure JS for the modern General Roman Calendar. | 
| [`calendar-1962.js`](calendar-1962.js) | `window.RESOLVE_DAY(date)` — computes the liturgical day in pure JS for the 1962 missal. | 
| [`data/introits.js`](data/introits.js) | The authored introits, keyed by the same feast keys `RESOLVE_DAY` emits. Each has gabc (for display) + a baked playback line. |
| [`gabc-to-abc.js`](gabc-to-abc.js) | Helper that turns gabc into an abcjs line (do-clefs only). A convenience — the baked `abc` in each introit is the source of truth for playback. |
| [`app.js`](app.js) | Boot: resolve today → pick the introit (with ferial fallback) → render with Exsurge → wire organ playback. |

### Run it locally

It's static, so any web server works. A launch config is included:

```
python -m http.server 8767
```

then open <http://localhost:8767/>. (Opening `index.html` straight from disk also
works, since the data is loaded as scripts, not fetched.)

---

## Adding or fixing chant data

All chant content lives in [`data/introits.js`](data/introits.js) and related data
files as coverage expands. Entries are keyed to match the output of
`calendar.js`.

A chant entry may include:

- `gabc` — the square-note source, in the format used by
  [Gregorio](https://gregorio-project.github.io/gabc/) and
  [GregoBase](https://gregobase.selapa.net/); Exsurge renders it.
- `abc` — a pre-baked playback incipit in
  [ABC notation](https://abcnotation.com/), used for reliable synthesized
  playback.
- `latin` — the Latin chant text.
- `translation` — an English translation.
- `mode` — the Gregorian mode, where known.
- `source` — source or attribution for the chant data.

Newer entries may ship with `gabc` only. In those cases,
[`gabc-to-abc.js`](gabc-to-abc.js) can synthesize a playback line, though a baked
`abc` incipit is preferred when available.

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

---

## Found a mistake?

If you find a typo, wrong translation, broken chant notation, bad playback, or a
chant assigned to the wrong day, please open an issue.

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
- `vendor/abcjs-basic-min.js` — [abcjs](https://abcjs.net), used here only to
  synthesize organ playback. **MIT-licensed** (see `vendor/abcjs.LICENSE`).

---

## Licensing

Chant **melodies** are public domain. gabc scores adapted from GregoBase are
mostly Creative Commons — the `source` field cites them. Playback is **synthesized
only**; published recordings (Solesmes etc.) are copyrighted and are not bundled.
The calendar is computed locally, so no `romcal` data ships with the page.
