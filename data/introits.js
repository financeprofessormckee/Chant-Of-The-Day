/*
 * introits.js — the authored introit propers for "Chant of the Day".
 *
 * Keyed by the same feast keys that calendar.js (window.RESOLVE_DAY) emits.
 * app.js looks up today's key here; ferial days fall back to the governing
 * Sunday's introit (and season anchors at the bottom of this file).
 *
 * Each entry:
 *   title       display title of the introit
 *   latin       the full antiphon text shown beneath the score
 *   translation an English rendering of the antiphon
 *   mode        the church mode (the "use" line)
 *   gabc        square-note source for Exsurge display (https://gregobase.selapa.net/)
 *   abc         pre-baked playback for abcjs (M:none L:1/4 K:C body only)
 *   source      provenance note / GregoBase id
 *
 * --------------------------------------------------------------------------
 * NOTE TO THE MUSICIAN: these are the FULL ANTIPHONS (no psalm verse / Gloria
 * Patri), pulled from the authoritative gabc on GregoBase (Graduale Romanum,
 * mostly the 1961 edition). The `abc` playback lines were generated from the
 * same gabc by a clef-aware converter (handles c- and f-clefs and flats), so
 * display and playback agree. Rhythm is rendered as even quarter-notes (chant
 * is unmeasured), and the playback may sit an octave from the printed clef.
 * Both fields are text — flag any wrong notes and they are a quick fix; verify
 * against the Graduale.
 * --------------------------------------------------------------------------
 */

window.INTROITS = {
  /* ---- Advent ---------------------------------------------------------- */
  "ad-te-levavi": {
    title: "Ad te levavi",
    latin: "Ad te levávi ánimam meam: Deus meus, in te confído, non erubéscam: neque irrídeant me inimíci mei: étenim univérsi qui te exspéctant, non confundéntur.",
    translation: "To you have I lifted up my soul: O my God, in you I trust, let me not be put to shame; neither let my enemies laugh at me: for none who wait for you shall be confounded.",
    mode: "Introit · 1st Sunday of Advent · Mode VIII",
    gabc: "(c4) AD(gd~) te(f) le(gh)vá(h)vi(g.) *(,) á(gjj)ni(h)mam(gh) me(fg)am :(ghggf.0) (;) De(h)us(jj) me(jj/kj)us(jk..) (,) in(fg~) te(g) con(f)fí(fh/ji)do,(i_[oh:h]h_[oh:h]) (,) non(jjj) e(hg)ru(ghfg)bé(ghg___)scam :(g.) (:) ne(j)que(jv.jjj/h_[oh:h]i_[oh:h]h_[oh:h]) ir(h)rí(jkj)de(ih)ant(jjj) me(g.) (,) in(g)i(g)mí(g.h!iwj)ci(j_h) me(h_f)i :(f.) (:) ét(fh)e(hg)nim(g.) u(g)ni(g)vér(g!ihi)si(g.) (,) qui(g) te(g) ex(hji)spé(i/jkj)ctant,(hih.) (;) non(gh~) con(h)fun(hfhg)dén(ghg___)tur.(g.) (::)",
    abc: "G D F G a a G G c c a G a F G G a G G F | a c c c c d c c d F G G F F a c b b a c c c a G G a F G G a G G | c c c c c a b a a c d c b a c c c G G G G a b c c a a F F | F a a G G G G G b a b G G G a c b b c d c a b a | G a a a F a G G a G G |]",
    source: "Graduale Romanum (GregoBase #132)"
  },
  "gaudete": {
    title: "Gaudete",
    latin: "Gaudéte in Dómino semper: íterum dico, gaudéte. Modéstia vestra nota sit ómnibus homínibus: Dóminus enim prope est. Nihil sollíciti sitis: sed in omni oratióne petitiónes vestrae innotéscant apud Deum.",
    translation: "Rejoice in the Lord always; again I say, rejoice. Let your moderation be known to all men: for the Lord is near. Have no anxiety, but in everything by prayer let your petitions be made known to God.",
    mode: "Introit · 3rd Sunday of Advent (Gaudete) · Mode I",
    gabc: "(c4) GAU(dc~)DE(ec/ed)TE(d!ewf) *(,) in(f) Dó(fgh)mi(h)no(ghg) sem(ixivHGhi)per:(h) (;) í(f)te(d)rum(ff) di(f)co,(f) (,) gau(fgFEf)dé(ded)te:(d) (:) mo(d)dé(d!fg)sti(gf)a(f) ve(ixf!gwh!iv)stra(h) (,) no(h)ta(fgf) sit(g) ó(hgh)mni(h)bus(h) ho(h)mí(ixhiHG)ni(hggfg)bus:(gf) (:) Dó(h)mi(gfg)nus(g) pro(hgh)pe(ixhg!hwihi) est.(ih) (;) Ni(jj)hil(ixhih) sol(gf~)lí(fgh)ci(h)ti(ixhiHG) si(hggfg)tis:(fg) (:) sed(c) in(d) o(d!ffd/ec~)mni(c) o(c)ra(e)ti(g)ó(ixeg/hig)ne(g) (,) pe(f)ti(f)ti(f)ó(fgf)nes(ed) ve(ded)strae(dc) (,) in(c)no(d)té(ff)scant(d) a(decd)pud(d) De(ded)um.(d) (::)",
    abc: "D C E C E D D E F F F G a a G a G _b a G a _b a | F D F F F F F G F E F D E D D | D D F G G F F F G a _b a a F G F G a G a a a a a _b a G a G G F G G F | a G F G G a G a a G a _b a _b _b a | c c a _b a G F F G a a a _b a G a G G F G F G | C D D F F D E C C C E G E G a _b G G F F F F G F E D D E D D C C D F F D D E C D D D E D D |]",
    source: "Graduale Romanum (GregoBase #1767)"
  },
  "rorate": {
    title: "Rorate caeli",
    latin: "Roráte caéli désuper, et nubes pluant justum: aperiátur terra, et gérminet Salvatórem.",
    translation: "Drop down dew, ye heavens, from above, and let the clouds rain down the Just One: let the earth be opened, and bud forth a Saviour.",
    mode: "Introit · 4th Sunday of Advent / Rorate Mass · Mode I",
    gabc: "(c4) RO(cd)rá(ixdh'!iv)te(h') (,) * cae(hjjh)li(h_g) dé(h!iwj)su(j.i!jwkjk)per,(kj..) (;) et(f) nu(ixhih)bes(g) plu(jjh)ant(h.) ju(g_[oh:h]fhvGFgf)stum :(f.) (:) a(f)pe(g)ri(h)á(h!iwj)tur(g) ter(fgF'D)ra,(d.) (;) et(dfe) gér(fg)mi(g)net(fgFD.1) Sal(d!ewf)va(ced)tó(d_[oh:h]e_[oh:h]d_[oh:h])rem.(d.) (::)",
    abc: "C D D a _b a a c c a a G a b c c b c d c d d c | F a _b a G c c a a G F a G F G F F | F G a a b c G F G F D D | D F E F G G F G F D D E F C E D D E D D |]",
    source: "Graduale Romanum (GregoBase #79)"
  },

  /* ---- Christmas / Epiphany ------------------------------------------- */
  "puer-natus": {
    title: "Puer natus est nobis",
    latin: "Puer natus est nobis, et fílius datus est nobis: cujus impérium super húmerum ejus: et vocábitur nomen ejus, magni consílii Angelus.",
    translation: "Unto us a child is born, and unto us a son is given: whose government is upon his shoulder: and his name shall be called the Angel of great counsel.",
    mode: "Introit · The Nativity of the Lord (Mass of the Day) · Mode VII",
    gabc: "(c3) PU(ei)ER(i.) *() na(iji)tus(h) est(hhh) no(ih/ji)bis,(i.) (;) et(ei~) fí(iji)li(hg)us(f) da(hhi)tus(h) est(h) no(hihh)bis :(efe.) (:) cu(e)jus(f) im(h)pé(gi!jk)ri(ih)um(h.) (,) su(h)per(h) hú(ih/ji)me(h_g)rum(hhh) e(h_f//hghvG~F~)jus :(gf..) (:) et(hg) vo(h)cá(hji)bi(h)tur(hhh) no(h)men(hhh) e(highvG~F~)jus,(gf..) (;) ma(hj)gni(i) con(eh~)sí(h)li(hhh_f)i(f) An(fhf___!gwh)ge(efe___)lus.(e.) (::)",
    abc: "G d d d e d c c c c d c e d d | G d d e d c b a c c d c c c d c c G a G | G a c b d e f d c c c c d c e d c b c c c c a c b c b a b a | c b c c e d c c c c c c c c c d b c b a b a | c e d G c c c c c a a a c a b c G a G G |]",
    source: "Graduale Romanum (GregoBase #72)"
  },
  "ecce-advenit": {
    title: "Ecce advenit",
    latin: "Ecce advénit dominátor Dóminus: et regnum in manu ejus, et potéstas, et impérium.",
    translation: "Behold, the Lord the Ruler is come: and the kingdom is in his hand, and power, and dominion.",
    mode: "Introit · The Epiphany of the Lord · Mode II",
    gabc: "(f3) EC(ce!fg)CE(f.) *(,) ad(fe~)vé(f!gwh_f)nit(f.) (,) do(e)mi(hh)ná(h)tor(h) Dó(hiHG')mi(hggfg)nus :(gf..) (:) et(eh~) re(h)gnum(hhh) (,) in(fe~) ma(f!hhf/gf)nu(ef) e(fhhfgv_[oh:h]F~E~)jus,(fe..) (:) et(f) pot(hh)é(hi)stas,(f.) (,) et(fh'!iv) im(i)pé(hiHG')ri(hggfg)um.(gf..) (::)",
    abc: "a c d e d d c d e f d d c f f f f f G' f e f e e d e e d | c f f f f f d c d f f d e d c d d f f d e d c d c | d f f f G' d d f G' G' f G' f e f e e d e e d |]",
    source: "Graduale Romanum (GregoBase #403)"
  },

  /* ---- Lent ------------------------------------------------------------ */
  "laetare": {
    title: "Laetare Jerusalem",
    latin: "Laetáre Jerúsalem: et convéntum fácite omnes qui dilígitis eam: gaudéte cum laetítia, qui in tristítia fuístis: ut exsultétis, et satiémini ab ubéribus consolatiónis vestrae.",
    translation: "Rejoice, O Jerusalem: and come together all you that love her: rejoice with joy, you that have been in sorrow: that you may exult, and be filled from the breasts of your consolation.",
    mode: "Introit · 4th Sunday of Lent (Laetare) · Mode V",
    gabc: "(c3) LAE(d)TÁ(gxdgef)RE(ed) *() Je(d)rú(e)sa(f)lem:(hh) (;) et(h) con(hf~)vén(hji)tum(hg) fá(hji)ci(hg)te(hhh/fgf) (;) o(f)mnes(hiHFfd) qui(gxg) di(gxg)lí(g)gi(egf)tis(ggvFEfw!gvFE) e(de!fvEDe)am:(ed) (:) gau(fh~)dé(h)te(f) cum(hgh) lae(e)tí(gxfgf)ti(ded)a,(d) (;) qui(d) in(e) tri(gxg)stí(f/ghf)ti(fe!fwgfg)a(gf) (,) fu(f!hhivHGF)í(gxfe!fwgfg)stis:(gf) (:) ut(f) ex(fe)sul(h)té(hji)tis,(ih) (,) et(hhh) sa(e)ti(g)é(gi/jij)mi(hiHGFg)ni(gf) (;) ab(d) u(gxeg)bé(ffg)ri(e)bus(hh) (,) con(d)so(ef)la(f)ti(h)ó(hiHEf)nis(gxfhFEfw!gvFE) ves(de!fvEDe)trae.(ed) (::)",
    abc: "F F _b G a G F F G a c c | c c a c e d c b c e d c b c c c a b a | a c d c a a F _b _b _b G _b a _b _b a G a _b a G F G a G F G G F | a c c a c b c G a _b a F G F F | F G _b a _b c a a G a _b a _b _b a a c c d c b a a G a _b a _b _b a | a a G c c e d d c c c c G b b d e d e c d c b a b b a | F G _b a a _b G c c F G a a c c d c G a a c a G a _b a G F G a G F G G F |]",
    source: "Graduale Romanum (GregoBase #1581)"
  },

  /* ---- Easter / Pentecost --------------------------------------------- */
  "resurrexi": {
    title: "Resurrexi",
    latin: "Resurréxi, et adhuc tecum sum, allelúia: posuísti super me manum tuam, allelúia: mirábilis facta est sciéntia tua, allelúia, allelúia.",
    translation: "I arose, and am still with you, alleluia: you have laid your hand upon me, alleluia: your knowledge is become wonderful, alleluia, alleluia.",
    mode: "Introit · Easter Sunday of the Resurrection · Mode IV",
    gabc: "(c4) RE(d)SUR(dfd)RÉ(f)XI,(fff/ded.) *(;) et(fe) ad(fg)huc(g) te(g)cum(f) sum,(ef/gfg.) (,) al(gv.!fff)le(dfe)lú(egff){ia} :(fe..) (:) po(fgf)su(ff)í(f!gwh)sti(ghg) su(gv.!fff)per(d!ewf/gf) me(f.) (,) ma(fff)num(d!ewf) tu(fgF'E)am,(f.) (;) al(fff)le(dfe)lú(fgff){ia} :(d//ffdf.) (:) mi(c)rá(cd/fef)bi(f)lis(f) fa(fffg)cta(deDC'd) est(dc..) (,) sci(e!fwg)én(ghg)ti(f)a(fff) tu(gfhg)a,(g.) (;) al(gf~)le(e/f'g)lú(gf~){ia},(e/fgfg.) (,) al(gv.!fff)le(dfe)lú(egff){ia}.(fe..) (::)",
    abc: "D D F D F F F F D E D | F E F G G G F E F G F G G F F F D F E E G F F F E | F G F F F F G a G a G G F F F D E F G F F F F F D E F F G F E F | F F F D F E F G F F D F F D F | C C D F E F F F F F F G D E D C D D C E F G G a G F F F F G F a G G | G F E F G G F E F G F G G F F F D F E E G F F F E |]",
    source: "Graduale Romanum (GregoBase #1043)"
  },
  "spiritus-domini": {
    title: "Spiritus Domini",
    latin: "Spíritus Dómini replévit orbem terrárum, allelúia: et hoc quod cóntinet ómnia, sciéntiam habet vocis, allelúia, allelúia, allelúia.",
    translation: "The Spirit of the Lord has filled the whole world, alleluia: and that which contains all things has knowledge of the voice, alleluia, alleluia, alleluia.",
    mode: "Introit · Pentecost Sunday · Mode VIII",
    gabc: "(c4) SPí(d)ri(fhg)tus(gh~) Dó(h)mi(ghGF'g)ni(gf..) *(,) re(fh)plé(jjk)vit(j) or(kl~)bem(j) ter(jjj)rá(g)rum,(jj) (,) al(h)le(hv.fhg)lú(ghg___){ia} :(g.) (:) et(fg) hoc(gjj) quod(g) cón(g!jij)ti(hiHG'h)net(h_g) ó(gh'j~)mni(j)a,(j.) (;) sci(i)én(jk~)ti(k_[hl:1]j)am(jjj/h_[oh:h]i_[oh:h]h._[oh:h]) ha(kl)bet(j) vo(jjj)cis,(h.) (;) al(hg~)le(fg'h)lú(hghv_G~F~){ia},(f.) (,) al(f!h'j~)le(j)lú(jijV!hj~){ia},(ijHG.) (,) al(gh~)le(hv.fhg)lú(ghg___){ia}.(g.) (::)",
    abc: "D F a G G a a G a G F G G F F a c c d c d e c c c c G c c a a F a G G a G G | F G G c c G G c b c a b a G a a G G a c c c | b c d d c c c c a b a d e c c c c a | a G F G a a G a G F F F a c c c b c a c b c a G G a a F a G G a G G |]",
    source: "Graduale Romanum (GregoBase #861)"
  },

  /* ---- Ordinary Time solemnities + Sundays ---------------------------- */
  "cibavit": {
    title: "Cibavit eos",
    latin: "Cibávit eos ex ádipe fruménti, allelúia: et de petra, melle saturávit eos, allelúia, allelúia, allelúia.",
    translation: "He fed them with the fat of wheat, alleluia: and filled them with honey out of the rock, alleluia, alleluia, alleluia.",
    mode: "Introit · The Body and Blood of Christ (Corpus Christi) · Mode II",
    gabc: "(f3) CI(c)bá(efe)vit(f) e(fhf)os(efe.) *(,) ex(f) á(h)di(hhh)pe(f) fru(e)mén(egf'/ge)ti,(c.) (,) al(eh~)le(hghf)lú(f_[oh:h]g_[oh:h]f_[oh:h]){ia} :(f.) (:) et(e) de(f) pe(hh)tra,(hi~) mel(ih~)le(hihh/fgf.) (,) sa(f)tu(fi)rá(i_[oh:h]h)vit(hi'j) e(ih)os,(h.) (;) al(hi~)le(i)lú(ihi){ia},(f.) (,) al(g!hwi)le(i_[oh:h]h)lú(hfgv_[oh:h]F~E~){ia},(fe..) (,) al(f!gwh)le(hvGF'gwh/ig/h_g)lú(fg!hvGF'g){ia}.(gf..) (::)",
    abc: "a c d c d d f d c d c d f f f f d c c e d e c a c f f e f d d e d d | c d f f f G' G' f f G' f f d e d d d G' G' f f G' a' G' f f | f G' G' G' f G' d e f G' G' f f d e d c d c d e f f e d e f G' e f e d e f e d e e d |]",
    source: "Graduale Romanum (GregoBase #715)"
  },
  "ot-11": {
    title: "Exaudi Domine",
    latin: "Exáudi, Dómine, vocem meam, qua clamávi ad te: adjútor meus esto, ne derelínquas me, neque despícias me, Deus salutáris meus.",
    translation: "Hear, O Lord, my voice, with which I have cried to you: be my helper, forsake me not, neither despise me, O God my Saviour.",
    mode: "Introit · 11th Sunday in Ordinary Time · Mode IV",
    gabc: "(c4) EX(f)áu(fg~)di(f) Dó(f_e)mi(dc)ne(c.) *(,) vo(ded)cem(d) me(ef'g)am,(g.) (;) qua(gh) cla(f_d)má(d_c)vi(e_[oh:h][ll:1]d) ad(fgf) te :(eef.) (:) ad(de)jú(ixghg/hi)tor(h) me(hg)us(g) e(gh!jj)sto,(g.) (;) ne(g) de(ghg)re(f)lín(e_[uh:l]f)quas(g_[uh:l]h) me(f.) (;) ne(e!fwg'!hv)que(g) de(g)spí(ghgh)ci(fd)as(e!gef) me,(e[ll:1]d..) (;) De(f_!h_f_g_)us(gv.ff/cdc.) (,) sa(ded)lu(dc)tá(dfe/ggh)ris(fg) me(egff)us.(fe..) (::)",
    abc: "F F G F F E D C C D E D D E F G G | G a F D D C E D F G F E E F | D E G a G a _b a a G G G a c c G | G G a G F E F G a F | E F G a G G G a G a F D E G E F E D | F a F G G F F C D C D E D D C D F E G G a F G E G F F F E |]",
    source: "Graduale Romanum (GregoBase #396)"
  },

  /* ---- Requiem (All Souls) -------------------------------------------- */
  "requiem": {
    title: "Requiem aeternam",
    latin: "Réquiem aetérnam dona eis, Dómine: et lux perpétua lúceat eis.",
    translation: "Eternal rest grant unto them, O Lord: and let perpetual light shine upon them.",
    mode: "Introit · Mass for the Dead (All Souls) · Mode VI",
    gabc: "(c4) RE(ffg)qui(f)em(f) *() ae(fg'h)tér(hggfg)nam(gf..) (;) do(fg'h)na(hg) e(h)is(ixhjHG'hw!ivHG') Dó(f)mi(fg!hvGF'g)ne :(gf..) (:) et(hg~) lux(hvGF') per(h)pé(gh)tu(gf)a(f.) (;) lú(hg)ce(h)at(ixhjHG'hw!ivHG) e(fg!hvGF'g)is.(gf..) (::)",
    abc: "F F G F F F G a a G G F G G F | F G a a G a a c a G a _b a G F F G a G F G G F | a G a G F a G a G F F | a G a a c a G a _b a G F G a G F G G F |]",
    source: "Graduale Romanum (GregoBase #766)"
  }
};

/* Season-level fallbacks: a ferial day with no proper of its own and no authored
 * Sunday within reach still shows something representative of the season. These
 * alias existing entries so there is one source of truth per chant. */
window.INTROITS["season-advent"] = window.INTROITS["rorate"];
window.INTROITS["season-christmas"] = window.INTROITS["puer-natus"];
window.INTROITS["season-lent"] = window.INTROITS["laetare"];
window.INTROITS["season-easter"] = window.INTROITS["resurrexi"];
window.INTROITS["season-ordinary"] = window.INTROITS["ot-11"];
