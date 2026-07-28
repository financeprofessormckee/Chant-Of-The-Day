# Chant of the Day

A small devotional web page that works out where *today* falls in the liturgical
calendar and shows the Gregorian chant propers for the day in real square-note
notation, with Latin text, English translation, and synthesized chant playback
that highlights the notation as it sounds.

The app carries the **full set of sung propers** — Introit, Gradual, Alleluia
(or Tract), Offertory, and Communion — for the whole temporal cycle of both the
**modern General Roman Calendar** and the **1962 calendar**, plus proper Masses
for the major feasts, an eleven-category **Common of Saints**, and Votive
Masses (e.g. the Requiem).

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

- modern General Roman Calendar and 1962 calendar date resolution
- full sung propers (Introit, Gradual, Alleluia/Tract, Offertory, Communion)
  for the entire temporal cycle of both calendars
- proper Masses for the major sanctoral feasts, and an eleven-category
  Common of Saints for lesser saints
- Votive Masses (e.g. the Requiem), browsable on demand
- gabc rendering with Exsurge
- synthesized chant playback (a small Web Audio voice) that highlights each
  syllable as it sounds

In progress:

- remaining Common-of-Saints sub-variants and the lesser saints they unblock
- improved source citations and verification

---

## How to use it

- Open the page; it shows today's date, its place in the calendar — season and
  rank — and the proper chants available for that day, with a tab per proper
  (Introit, Gradual, Alleluia or Tract, Offertory, Communion).
- The **Calendar** toggle switches between the modern and 1962 calendars; the
  **Browse** toggle switches to the Common of Saints picker, or to Votive
  Masses — browsable on demand, not just on the date they're assigned.
- **▶ Hear it** plays the chant in a synthesized voice, highlighting the
  notation as it sounds. Everything is generated locally in the browser — no
  internet connection or instrument download is needed.
- **See another day** lets you pick any date; **Today** returns to the current
  day; **Next** and **Previous** move the day forward or backwards 1 day respectively.
- You can also link directly to a specific day with: ?date=YYYY-MM-DD

---

## Coverage

The app carries authored propers for every Sunday of the temporal cycle, in
both the modern General Roman Calendar and the 1962 calendar:

- Advent
- Christmas season
- Lent
- Easter season
- Ordinary Time
- Christ the King

Each Sunday carries the **full set of Mass propers** — Introit, Gradual,
Alleluia (or Tract, in penitential seasons), Offertory, and Communion — not
just the Introit.

It also includes proper Masses for the major sanctoral feasts, an
eleven-category **Common of Saints** (for days without a proper Mass of their
own), and **Votive Masses** (e.g. the Requiem, Mass for the Dead).

Remaining gaps are a handful of Common-of-Saints sub-variants and the lesser
saints they would unlock — small, tracked additions rather than a missing
proper category.

Both calendars intentionally reuse a single authored chant under more than one
key/Sunday where the Graduale itself repeats the same text (e.g. modern
`ot-28`/`ot-30`, 1962 `epiph-3` covering the 3rd–6th Sundays after Epiphany) —
that's correct liturgical practice, not a missing entry.

---

## How it works

The page is plain HTML + vanilla JS with one vendored library (Exsurge). There
is no build step — everything runs in the browser.

| File | Role |
| --- | --- |
| [`calendar.js`](calendar.js) | `window.RESOLVE_DAY(date)` — computes the liturgical day in pure JS for the modern General Roman Calendar. | 
| [`calendar-1962.js`](calendar-1962.js) | `window.RESOLVE_DAY(date)` — computes the liturgical day in pure JS for the 1962 missal. | 
| [`data/`](data/) | The authored propers (Introit, Gradual, Alleluia/Tract, Offertory, Communion) for both calendars, plus the Common of Saints and Votive Masses, keyed by the same feast keys `RESOLVE_DAY` emits. |
| [`chant-render.js`](chant-render.js) | Renders a chant entry's gabc to notation via Exsurge and wires up the per-proper tabs. |
| [`playback.js`](playback.js) | Synthesized chant playback — a small Web Audio voice built from the same Exsurge score used for display, with note-by-note highlighting synced to the audio. |
| [`app.js`](app.js) | Boot: resolve today → pick the chant (with ferial fallback) → render → wire playback and the Calendar/Browse toggles. |

### Run it locally

It's static, so any web server works. A launch config is included:

```
python -m http.server 8767
```

then open <http://localhost:8767/>. (Opening `index.html` straight from disk also
works, since the data is loaded as scripts, not fetched.)

---

## Adding or fixing chant data

All chant content lives in [`data/`](data/), split across files by proper and
calendar (e.g. `introits.js`, `propers.js`, `propers-1962.js`). Entries are
keyed to match the output of `calendar.js` / `calendar-1962.js`.

A chant entry may include:

- `gabc` — the square-note source, in the format used by
  [Gregorio](https://gregorio-project.github.io/gabc/) and
  [GregoBase](https://gregobase.selapa.net/); Exsurge renders it, and playback
  is synthesized directly from the same rendered score.
- `latin` — the Latin chant text.
- `translation` — an English translation.
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

For additional matching across the other Mass propers — Graduals, Alleluias,
Tracts, Offertories, and Communions — I have also used
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
  `vendor/exsurge.LICENSE`). Playback is synthesized locally in `playback.js`
  from the same rendered score — no other vendored audio library is needed.

---

## Licensing

Chant **melodies** are public domain. gabc scores adapted from GregoBase are
mostly Creative Commons — the `source` field cites them. Playback is **synthesized
only**; published recordings (Solesmes etc.) are copyrighted and are not bundled.
The calendar is computed locally, so no `romcal` data ships with the page.
