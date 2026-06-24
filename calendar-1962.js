"use strict";

/*
 * calendar-1962.js — a resolver for the 1962 Missal (Extraordinary Form) temporal
 * cycle, a sibling to calendar.js. It exposes window.RESOLVE_DAY_1962 with the same
 * output contract as the modern RESOLVE_DAY, so app.js can swap calendars by pointing
 * window.RESOLVE_DAY at one or the other — nothing else in the app changes.
 *
 * Two deliberate differences from the modern resolver:
 *   - No lectionary `cycle`. The 1962 propers repeat every year (a one-year cycle),
 *     so the cycle letter the modern Ordinary-Time Sundays carry is simply omitted;
 *     app.js's resolveKeyFor already no-ops when `cycle` is undefined.
 *   - An extra `seasonLabel`. The 1962 seasons (Septuagesima, Time after Epiphany,
 *     Time after Pentecost, Passiontide…) don't map onto the five season *words*
 *     styles.css themes by. So `season` stays one of advent|christmas|lent|easter|
 *     ordinary (purely for the body theme + color), while `seasonLabel` carries the
 *     human season name for the day-card pill. The modern resolver sets no
 *     seasonLabel, so its pill is unchanged.
 *
 * V1 scope (mirrors the modern resolver's documented simplifications):
 *   - Temporal cycle Sundays + the marquee movable feasts only. The 1962 *sanctoral*
 *     (saints' days), octaves, commemorations, and impeded-feast transfers are out of
 *     scope — intentional gaps, not bugs.
 *   - Epiphany fixed to Jan 6; Ascension on Thursday; Corpus Christi on its Thursday;
 *     Christ the King on the last Sunday of October (the 1962 date).
 *
 * The KEYS it emits match data/introits-1962.js (window.INTROITS_1962).
 */

(function () {
  var DAY = 86400000;

  function ymd(y, m, d) { return new Date(Date.UTC(y, m - 1, d)); } // m is 1-based
  function addDays(date, n) { return new Date(date.getTime() + n * DAY); }
  function dow(date) { return date.getUTCDay(); } // 0 = Sunday
  function daysBetween(a, b) { return Math.round((b - a) / DAY); }
  function weeksBetween(a, b) { return Math.round((b - a) / DAY / 7); }
  function iso(date) {
    return (
      date.getUTCFullYear() + "-" +
      String(date.getUTCMonth() + 1).padStart(2, "0") + "-" +
      String(date.getUTCDate()).padStart(2, "0")
    );
  }
  function sameDay(a, b) { return iso(a) === iso(b); }
  function sundayOnOrBefore(date) { return addDays(date, -dow(date)); }
  function nextSunday(date) { // strictly after `date`
    var off = 7 - dow(date);
    return addDays(date, off === 0 ? 7 : off);
  }

  // Gregorian Easter — Meeus/Jones/Butcher algorithm (same as calendar.js).
  function easter(year) {
    var a = year % 19, b = Math.floor(year / 100), c = year % 100;
    var d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
    var g = Math.floor((b - f + 1) / 3);
    var h = (19 * a + b - d - g + 15) % 30;
    var i = Math.floor(c / 4), k = c % 4;
    var l = (32 + 2 * e + 2 * i - h - k) % 7;
    var mm = Math.floor((a + 11 * h + 22 * l) / 451);
    var month = Math.floor((h + l - 7 * mm + 114) / 31);
    var day = ((h + l - 7 * mm + 114) % 31) + 1;
    return ymd(year, month, day);
  }

  var ORDINAL = [
    "", "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth",
    "Ninth", "Tenth", "Eleventh", "Twelfth", "Thirteenth", "Fourteenth", "Fifteenth",
    "Sixteenth", "Seventeenth", "Eighteenth", "Nineteenth", "Twentieth",
    "Twenty-first", "Twenty-second", "Twenty-third", "Twenty-fourth", "Twenty-fifth",
    "Twenty-sixth", "Twenty-seventh", "Twenty-eighth"
  ];
  function ordinal(n) { return ORDINAL[n] || (n + "th"); }
  var WEEKDAY = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Anchor dates for one civil year's worth of the 1962 calendar.
  function anchors(year) {
    var e = easter(year);
    var adventFour = sundayOnOrBefore(ymd(year, 12, 24));
    var adventOne = addDays(adventFour, -21);
    // Sunday within the Octave of the Nativity (Dec 26–31). If Christmas is itself a
    // Sunday there is no such Sunday, so its Mass moves to Dec 30.
    var sundayOctave = sundayOnOrBefore(ymd(year, 12, 31));
    if (sameDay(sundayOctave, ymd(year, 12, 25))) sundayOctave = ymd(year, 12, 30);
    // The Most Holy Name of Jesus: the Sunday falling Jan 2–5 (between the
    // Circumcision and the Epiphany). Some years no Sunday lands there.
    var holyName = nextSunday(ymd(year, 1, 1)); // first Sunday strictly after Jan 1
    if (daysBetween(ymd(year, 1, 1), holyName) > 4) holyName = null;
    return {
      year: year,
      easter: e,
      septuagesima: addDays(e, -63),
      sexagesima: addDays(e, -56),
      quinquagesima: addDays(e, -49),
      ashWednesday: addDays(e, -46),
      lentOne: nextSunday(addDays(e, -46)),  // first Sunday of Lent (Easter − 42)
      palmSunday: addDays(e, -7),
      easterSun: e,
      ascension: addDays(e, 39),            // Thursday
      sundayAfterAscension: addDays(e, 42),
      pentecost: addDays(e, 49),
      trinity: addDays(e, 56),
      corpusChristi: addDays(e, 60),        // Thursday after Trinity
      sacredHeart: addDays(e, 68),          // Friday after the octave of Corpus Christi
      epiphany: ymd(year, 1, 6),
      christmas: ymd(year, 12, 25),
      holyFamily: nextSunday(ymd(year, 1, 6)), // Sunday within the octave of Epiphany
      sundayOctaveNativity: sundayOctave,
      holyName: holyName,
      adventOne: adventOne,
      adventFour: adventFour,
      lastAfterPentecost: addDays(adventOne, -7),
      christKing: sundayOnOrBefore(ymd(year, 10, 31)) // last Sunday of October
    };
  }

  function resolve(input) {
    var date;
    if (input instanceof Date) {
      date = ymd(input.getFullYear(), input.getMonth() + 1, input.getDate());
    } else if (typeof input === "string") {
      var p = input.split("-");
      date = ymd(Number(p[0]), Number(p[1]), Number(p[2]));
    } else {
      var now = new Date();
      date = ymd(now.getFullYear(), now.getMonth() + 1, now.getDate());
    }

    var Y = date.getUTCFullYear();
    var A = anchors(Y);
    var isSun = dow(date) === 0;

    function out(o) {
      o.date = iso(date);
      o.isSunday = isSun;
      if (!o.rank) o.rank = isSun ? "Sunday" : "Feria";
      if (o.dayKey === undefined) o.dayKey = null;
      if (o.sundayKey === undefined) o.sundayKey = null;
      return o;
    }

    // ---- Fixed marquee feasts ----
    if (sameDay(date, A.christmas)) {
      return out({ title: "The Nativity of the Lord", season: "christmas", seasonLabel: "Christmastide",
        color: "white", rank: "Solemnity", dayKey: "puer-natus", seasonKey: "season-christmas",
        options: [{ label: "Midnight", key: "dominus-dixit" }, { label: "Dawn", key: "lux-fulgebit" },
          { label: "Day", key: "puer-natus" }] });
    }
    if (date.getUTCMonth() === 11 && date.getUTCDate() === 24) { // Dec 24
      return out({ title: "The Nativity of the Lord (Vigil)", season: "christmas", seasonLabel: "Advent",
        color: "white", rank: "Solemnity", dayKey: "christmas-vigil", seasonKey: "season-christmas" });
    }
    if (date.getUTCMonth() === 0 && date.getUTCDate() === 1) { // Jan 1
      return out({ title: "The Circumcision of the Lord", season: "christmas", seasonLabel: "Christmastide",
        color: "white", rank: "Solemnity", dayKey: "puer-natus", seasonKey: "season-christmas" });
    }
    if (sameDay(date, A.epiphany)) {
      return out({ title: "The Epiphany of the Lord", season: "christmas", seasonLabel: "Christmastide",
        color: "white", rank: "Solemnity", dayKey: "ecce-advenit", seasonKey: "season-christmas" });
    }

    // ---- Advent (Advent I .. Dec 23) ----
    if (date >= A.adventOne && date <= ymd(Y, 12, 24)) {
      var aw = 1 + weeksBetween(A.adventOne, sundayOnOrBefore(date));
      var akey = "ad-te-levavi", acolor = "violet";
      if (aw === 2) akey = "populus-sion";
      else if (aw === 3) { akey = "gaudete"; acolor = "rose"; }
      else if (aw === 4) akey = "rorate";
      return out({ title: ferial(aw, "of Advent", date, isSun), season: "advent", seasonLabel: "Advent",
        color: acolor, dayKey: isSun ? akey : null, sundayKey: akey, seasonKey: "season-advent" });
    }

    // ---- Christmastide (Dec 25 .. Jan 6); Jan 1 & Jan 6 handled above ----
    if (date >= A.christmas || date <= A.epiphany) {
      if (sameDay(date, A.sundayOctaveNativity)) {
        return out({ title: "Sunday within the Octave of the Nativity", season: "christmas",
          seasonLabel: "Christmastide", color: "white", rank: "Sunday",
          dayKey: "sunday-octave-nativity", seasonKey: "season-christmas" });
      }
      if (A.holyName && sameDay(date, A.holyName)) {
        return out({ title: "The Most Holy Name of Jesus", season: "christmas",
          seasonLabel: "Christmastide", color: "white", rank: "Feast",
          dayKey: "holy-name", seasonKey: "season-christmas" });
      }
      return out({ title: "Christmastide", season: "christmas", seasonLabel: "Christmastide",
        color: "white", sundayKey: "puer-natus", seasonKey: "season-christmas" });
    }

    // ---- Time after Epiphany (Jan 7 .. Septuagesima eve) ----
    if (date > A.epiphany && date < A.septuagesima) {
      if (sameDay(date, A.holyFamily)) {
        return out({ title: "The Holy Family (First Sunday after Epiphany)", season: "ordinary",
          seasonLabel: "Time after Epiphany", color: "white", rank: "Feast",
          dayKey: "holy-family", seasonKey: "season-ordinary" });
      }
      var es = sundayOnOrBefore(date);
      var en = 1 + weeksBetween(A.holyFamily, es); // Holy Family is the 1st after Epiphany
      var ekey = en <= 2 ? "epiph-2" : "epiph-3"; // 2nd = Omnis terra; 3rd–6th = Adorate Deum
      return out({ title: ferial(en, "Sunday after Epiphany", date, isSun, true), season: "ordinary",
        seasonLabel: "Time after Epiphany", color: "green",
        dayKey: isSun ? ekey : null, sundayKey: ekey, seasonKey: "season-ordinary" });
    }

    // ---- Septuagesima (pre-Lent, violet, 3 Sundays) ----
    if (date >= A.septuagesima && date < A.ashWednesday) {
      var skey, sname;
      if (date < A.sexagesima) { skey = "septuagesima"; sname = "Septuagesima"; }
      else if (date < A.quinquagesima) { skey = "sexagesima"; sname = "Sexagesima"; }
      else { skey = "quinquagesima"; sname = "Quinquagesima"; }
      return out({ title: isSun ? sname + " Sunday" : WEEKDAY[dow(date)] + " after " + sname,
        season: "lent", seasonLabel: "Septuagesima", color: "violet",
        dayKey: isSun ? skey : null, sundayKey: skey, seasonKey: "season-lent" });
    }

    // ---- Lent & Passiontide (Ash Wednesday .. Holy Saturday) ----
    if (date >= A.ashWednesday && date < A.easterSun) {
      if (sameDay(date, A.ashWednesday)) {
        return out({ title: "Ash Wednesday", season: "lent", seasonLabel: "Lent", color: "violet",
          rank: "Feria", dayKey: "misereris", seasonKey: "season-lent" });
      }
      if (date < A.lentOne) { // Thu–Sat after Ash Wednesday
        return out({ title: WEEKDAY[dow(date)] + " after Ash Wednesday", season: "lent",
          seasonLabel: "Lent", color: "violet", sundayKey: "misereris", seasonKey: "season-lent" });
      }
      var ls = sundayOnOrBefore(date);
      var lw = 1 + weeksBetween(A.lentOne, ls); // Lent I = first Sunday of Lent
      var isPalm = sameDay(ls, A.palmSunday);
      var lkey, ltitle, lcolor = "violet", llabel = "Lent";
      if (isPalm) { lkey = "palm"; ltitle = "Palm Sunday"; llabel = "Passiontide"; }
      else if (lw === 5) { lkey = "passion"; ltitle = "Passion Sunday (First Sunday of the Passion)"; llabel = "Passiontide"; }
      else if (lw === 4) { lkey = "laetare"; ltitle = "Laetare Sunday (Fourth Sunday of Lent)"; lcolor = "rose"; }
      else { lkey = "lent-" + lw; ltitle = ordinal(lw) + " Sunday of Lent"; }
      if (!isSun) {
        ltitle = WEEKDAY[dow(date)] + " of the " + ordinal(lw) + " Week of Lent";
        if (lw >= 5) llabel = "Passiontide";
      }
      return out({ title: ltitle, season: "lent", seasonLabel: llabel, color: lcolor,
        dayKey: isSun ? lkey : null, sundayKey: lkey, seasonKey: "season-lent" });
    }

    // ---- Eastertide (Easter .. Pentecost) ----
    if (date >= A.easterSun && date <= A.pentecost) {
      if (sameDay(date, A.easterSun)) {
        return out({ title: "Easter Sunday of the Resurrection", season: "easter", seasonLabel: "Eastertide",
          color: "white", rank: "Solemnity", dayKey: "resurrexi", seasonKey: "season-easter" });
      }
      if (sameDay(date, A.pentecost)) {
        return out({ title: "Pentecost Sunday", season: "easter", seasonLabel: "Eastertide",
          color: "red", rank: "Solemnity", dayKey: "spiritus-domini", seasonKey: "season-easter" });
      }
      if (sameDay(date, A.ascension)) {
        return out({ title: "The Ascension of the Lord", season: "easter", seasonLabel: "Eastertide",
          color: "white", rank: "Solemnity", dayKey: "viri-galilaei", seasonKey: "season-easter" });
      }
      if (sameDay(date, A.sundayAfterAscension)) {
        return out({ title: "Sunday after the Ascension", season: "easter", seasonLabel: "Eastertide",
          color: "white", rank: "Sunday", dayKey: "sunday-after-ascension", seasonKey: "season-easter" });
      }
      // Eastertide Sundays/ferias by week index from Easter.
      var ew = weeksBetween(A.easterSun, sundayOnOrBefore(date));
      var EASTER_SUN = ["resurrexi", "quasimodo", "easter-misericordia", "easter-jubilate",
        "easter-cantate", "easter-vocem"];
      var EASTER_TITLE = ["Easter", "Low Sunday (Quasimodo)", "Second Sunday after Easter",
        "Third Sunday after Easter", "Fourth Sunday after Easter", "Fifth Sunday after Easter"];
      var ekey2 = EASTER_SUN[ew] || "resurrexi";
      var etitle = isSun ? (EASTER_TITLE[ew] || "Eastertide")
        : WEEKDAY[dow(date)] + (ew === 0 ? " in the Octave of Easter" : " after " + (EASTER_TITLE[ew] || "Easter"));
      return out({ title: etitle, season: "easter", seasonLabel: "Eastertide", color: "white",
        dayKey: isSun ? ekey2 : null, sundayKey: ekey2, seasonKey: "season-easter" });
    }

    // ---- Time after Pentecost (after Pentecost .. Advent I eve) ----
    if (sameDay(date, A.trinity)) {
      return out({ title: "Trinity Sunday", season: "ordinary", seasonLabel: "Time after Pentecost",
        color: "white", rank: "Solemnity", dayKey: "trinity", seasonKey: "season-ordinary" });
    }
    if (sameDay(date, A.corpusChristi)) {
      return out({ title: "Corpus Christi", season: "ordinary", seasonLabel: "Time after Pentecost",
        color: "white", rank: "Feast", dayKey: "cibavit", seasonKey: "season-ordinary" });
    }
    if (sameDay(date, A.sacredHeart)) {
      return out({ title: "The Most Sacred Heart of Jesus", season: "ordinary",
        seasonLabel: "Time after Pentecost", color: "white", rank: "Feast",
        dayKey: "sacred-heart", seasonKey: "season-ordinary" });
    }
    if (sameDay(date, A.christKing)) {
      return out({ title: "The Kingship of Our Lord Jesus Christ (Christ the King)", season: "ordinary",
        seasonLabel: "Time after Pentecost", color: "white", rank: "Solemnity",
        dayKey: "christ-king", seasonKey: "season-ordinary" });
    }

    // Numbered Sundays after Pentecost (and resumed Sundays after Epiphany).
    var gs = sundayOnOrBefore(date);
    var w = weeksBetween(A.pentecost, gs);   // Pentecost = 0, Trinity = 1, …
    var key, title, label = "Time after Pentecost";
    if (sameDay(gs, A.lastAfterPentecost)) {
      key = "pent-23"; // the Last Sunday repeats the 23rd Sunday's introit (Dicit Dominus)
      title = "Last Sunday after Pentecost";
    } else if (w <= 23) {
      key = "pent-" + w;
      title = ordinal(w) + " Sunday after Pentecost";
    } else {
      // Resumed Sundays after Epiphany fill weeks 24 .. (last − 1); the one nearest
      // the Last Sunday takes the Sixth Sunday after Epiphany, counting down. Those
      // Sundays (3rd–6th) all share the "Adorate Deum" introit; the 2nd is "Omnis terra".
      var lastW = weeksBetween(A.pentecost, A.lastAfterPentecost);
      var ei = 6 - (lastW - 1 - w);
      if (ei < 2) ei = 2;
      key = ei <= 2 ? "epiph-2" : "epiph-3";
      title = "Resumed " + ordinal(ei) + " Sunday after Epiphany";
    }
    if (!isSun) {
      title = WEEKDAY[dow(date)] + " after the " + (w === 1 ? "First Sunday" : ordinal(w) + " Sunday") + " after Pentecost";
    }
    return out({ title: title, season: "ordinary", seasonLabel: label, color: "green",
      dayKey: isSun ? key : null, sundayKey: key, seasonKey: "season-ordinary" });

    // ---- helpers ----
    function ferial(weekNo, seasonWord, d, isSunday, sundayWord) {
      if (isSunday) {
        return sundayWord ? ordinal(weekNo) + " " + seasonWord
          : ordinal(weekNo) + " Sunday " + seasonWord;
      }
      return WEEKDAY[dow(d)] + " of the " + ordinal(weekNo) + " Week " +
        (sundayWord ? "after Epiphany" : seasonWord);
    }
  }

  window.RESOLVE_DAY_1962 = resolve;
})();
