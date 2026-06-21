# Chant of the Day

A small devotional web page: it works out where *today* falls in the modern
General Roman Calendar and shows the **Introit** proper to that day — in real
square-note (neume) notation, with a church-organ playback. The introit is the
antiphon that opens the Mass and often names the day itself: *Gaudete*, *Laetare*,
*Rorate*, *Resurrexi*, *Requiem*.

It is a companion to *Name That Chant* and *Name That Organ Piece* — same
zero-build, fully static page (no backend, no build step) — but devotional rather
than a quiz.

## How to use it

- Open the page; it shows today's date, its place in the calendar (season and
  rank), and the introit proper to it.
- **▶ Hear it** plays the opening in a church-organ voicing (needs an internet
  connection the first time, to fetch the instrument sounds).
- **See another day** — pick any date to read its introit; **Today** returns to
  the current day. You can also link a specific day with `?date=YYYY-MM-DD`.
- On a ferial weekday with no proper of its own, the page falls back to the
  governing Sunday's introit and says so.

No accounts, no sign-in, nothing leaves your browser.

## How it works

The page is plain HTML + vanilla JS with two vendored libraries. There is no
build step — everything runs in the browser.

| File | Role |
| --- | --- |
| [`calendar.js`](calendar.js) | `window.RESOLVE_DAY(date)` — computes the General Roman Calendar in pure JS (Easter by computus, then all the moveable + fixed feasts). One function, so a richer backend (e.g. romcal data, or the 1962 Missal) can replace the guts later. |
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

## Adding or fixing an introit

All content lives in [`data/introits.js`](data/introits.js) — one block per feast,
keyed to match `calendar.js`. Each block has:

- `gabc` — the square-note source (the format used by [Gregorio](https://gregorio-project.github.io/gabc/)
  and [GregoBase](https://gregobase.selapa.net/)); Exsurge renders it.
- `abc` — a pre-baked playback incipit ([ABC notation](https://abcnotation.com/),
  `M:none L:1/4 K:C` body) so playback is reliable and sits in a sane octave.
- `latin`, `translation`, `mode`, `source`.

> **Coverage.** Every Sunday of the temporal cycle is authored — Advent through
> Christ the King, including all of Ordinary Time — plus the marquee feasts. The
> gabc is pulled from the [GregoBase](https://gregobase.selapa.net/) corpus
> (*Graduale Romanum*, mostly the 1961 edition); the Sunday-to-introit assignment
> for Ordinary Time follows the *Graduale Romanum* / Gregorian Missal (the Diocese
> of La Crosse introit booklets). Ordinary-Time Sundays whose introit varies by the
> 3-year lectionary cycle carry `-a` / `-b` / `-c` keys, chosen by the day's cycle
> letter. Still verify against the *Graduale*; flag any wrong notes — it's just text.

Newer entries ship **gabc only** — `gabc-to-abc.js` synthesizes playback (it
handles do- and fa-clefs and flats), so no hand-baked `abc` is needed. To add a
day: give `calendar.js` a key for it (most Sundays already resolve to `ot-N`,
`lent-N`, etc.) and add a matching block here.

## What's bundled

- `vendor/exsurge.min.js` — [Exsurge](https://github.com/frmatthew/exsurge), which
  renders gabc to SVG square-note notation. **MIT-licensed** (see
  `vendor/exsurge.LICENSE`).
- `vendor/abcjs-basic-min.js` — [abcjs](https://abcjs.net), used here only to
  synthesize organ playback. **MIT-licensed** (see `vendor/abcjs.LICENSE`).

## Licensing

Chant **melodies** are public domain. gabc scores adapted from GregoBase are
mostly Creative Commons — the `source` field cites them. Playback is **synthesized
only**; published recordings (Solesmes etc.) are copyrighted and are not bundled.
The calendar is computed locally, so no `romcal` data ships with the page.
