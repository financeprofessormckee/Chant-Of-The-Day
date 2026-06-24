/*
 * propers.js — the other SUNG propers for "Chant of the Day".
 *
 * The Introit lives in data/introits.js (window.INTROITS). This file holds the
 * remaining propers sung from the Graduale — Gradual, Alleluia (or Tract in
 * Lent), Offertory, and Communion — so app.js can offer them as tabs above the
 * score. Keyed by the SAME feast keys calendar.js emits and introits.js uses;
 * each feast carries one sub-entry per part:
 *
 *   window.PROPERS[<feastKey>] = {
 *     gradual:   { title, latin, translation, mode, gabc, source },
 *     alleluia:  { ... },     // a Lenten day carries `tract` instead
 *     offertory: { ... },
 *     communion: { ... },
 *   }
 *
 * A sub-entry mirrors an introit entry's shape. Only `gabc` is required for
 * display + playback: app.js's buildAbc converts gabc -> abc at runtime
 * (window.gabcToAbc), so no pre-baked `abc` field is needed. app.js shows a tab
 * only for the parts that actually exist for the day, and falls back to the
 * governing Sunday's propers on ferial days exactly as it does for the introit.
 *
 * --------------------------------------------------------------------------
 * NOTE TO THE MUSICIAN: like the introits, these are pulled from the
 * authoritative gabc on GregoBase (Graduale Romanum / Solesmes). Graduals,
 * Tracts, and Alleluias are given WHOLE (respond + verse) since they are sung
 * complete; Offertories and Communions are the antiphon. The `℣` marks the
 * verse. Playback is even quarter-notes (chant is unmeasured) and may sit an
 * octave from the printed clef — flag any wrong notes; they are a quick fix.
 *
 * COVERAGE: this is a PILOT. Three Masses are populated (Christmas Day, the 1st
 * Sunday of Lent, the 2nd Sunday of Easter) to exercise every tab case; the
 * remaining feasts in INTROITS still show the Introit alone until their propers
 * are sourced the same way (see sources/gregobase/query.py).
 * --------------------------------------------------------------------------
 */

window.PROPERS = {
  /* ---- The Nativity of the Lord, Mass of the Day (puer-natus) ---------- */
  "puer-natus": {
    gradual: {
      title: "Viderunt omnes",
      latin: "Vidérunt omnes fines terræ salutáre Dei nostri : jubiláte Deo, omnis terra. ℣. Notum fecit Dóminus salutáre suum : ante conspéctum géntium revelávit justítiam suam.",
      translation: "All the ends of the earth have seen the salvation of our God: sing joyfully to God, all the earth. ℣. The Lord has made known his salvation: in the sight of the nations he has revealed his justice.",
      mode: "Gradual · The Nativity of the Lord (Mass of the Day) · Mode V",
      gabc: "(c3) VI(d)dé(d)runt(fh~) o(hiH'F//hhhjvIH)mnes(h.) *(,) fi(hi)nes(h_f) ter(hfhhf)rae(f/hhf/hg/hf..) (;) sa(f)lu(hg)tá(h_gi)re(ivHGh_f) (,) De(f_e/f!gwh/i_[oh:h]h)i(hg/ijk) no(i_[oh:h]h)stri :(hg/hf..) (:) ju(f)bi(hg)lá(h)te(hhh) De(fhee[ll:1]d)o(de!fhFD.1) (;) o(d!f'h/ijh)mnis(gxh.f!gw!hvGE'fw!gvFE) ter(ded)ra.(d!f'h//d!f'hhv'1GE//dfe/fee[ll:1]d.0) (::) ℣. No(d)tum(fe~) fe(eh)cit(hi~) Dó(ihhf/hiHG.hiFD.1)(,)(f/hhi/hhf/hiHG.hiFD.1)(,)(gxfg//e!g'h/ghghvFD.1)(,)(fdfED//fd/ef!hh/i!jwk)mi(ih)nus(hiHF.1) (;) sa(f)lu(hg)tá(hhf/hhf)re(f) su(fhf/hhf)um :(f.) (:) an(f)te(f) con(fi~)spé(i)ctum(hiH'F) gén(h.i!jwk)ti(ih)um(hiHF.1) (;) re(f!h'i/hhf)ve(f)lá(hfhhe/fd)vit(d.) *(,) ju(f)stí(f/hhfg)ti(ef)am(gxhf/ge) su(d)am.(cd/efe.) (,) (de!fhFE.gxde'f!hhe'gvFD.1) (::)",
      source: "Graduale Romanum (GregoBase #1163)"
    },
    alleluia: {
      title: "Dies sanctificatus",
      latin: "Allelúia. ℣. Dies sanctificátus illúxit nobis : veníte, gentes, et adoráte Dóminum : quia hódie descéndit lux magna super terram.",
      translation: "Alleluia. ℣. A hallowed day has dawned upon us: come, you nations, and adore the Lord: for today a great light has come down upon the earth.",
      mode: "Alleluia · The Nativity of the Lord (Mass of the Day) · Mode II",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Di(f_e/f!gwh'!iv//jiihi)es(iv.hh/fgf.) san(fg~)cti(f)fi(f)cá(fg)tus(f.) (,) il(f)lú(fg)xit(f) no(f!hh/ijHF'ivH'GEf./hfhhf/ge)bis :(e.) (:) ve(ffe/ffe/fc..)(,)(ef!hvvF'Ehhh)ní(hi)te(h) gen(hi~)tes,(h.) (,) et(h) ad(h)o(h)rá(h)te(ivH'Gh') Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])num :(f.) (:) qui(f)a(f) hó(f!h'i)di(jiihi)e(iv.hh/fgf.) (,) de(f)scén(fg~)dit(f) lux(f) ma(f!hh/ijHF'ivH'GEf./hfhhf/ge)gna(e.) (;) * su(hh)per(hi~) ter(i_[oh:h]h/jij)ram.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #324)"
    },
    offertory: {
      title: "Tui sunt caeli",
      latin: "Tui sunt cæli, et tua est terra : orbem terrárum, et plenitúdinem ejus tu fundásti : justítia et judícium præparátio sedis tuæ.",
      translation: "Yours are the heavens, and yours is the earth: the world and its fullness you have founded: justice and judgment are the preparation of your throne.",
      mode: "Offertory · The Nativity of the Lord (Mass of the Day) · Mode IV",
      gabc: "(c4) TU(f)I(ded) sunt(f) *() cae(e/fgF'EfvED)li,(fd/efe.) (;) et(fd~) tu(dfe)a(f) est(g_[oh:h]efvEDgvFE) ter(hvGFgvFE)ra :(e.) (:) or(d!g'h)bem(g) ter(fgffe)rá(egffe)rum,(fff) (;) et(dec) ple(dfe)ni(e)tú(e!gfg)di(d)nem(d.) (,) e(ff/gd/fffd/fffv_E~D~)jus(e[ll:1]d..) (,) tu(f!h'j) fun(gh)dá(egff)sti :(fe..) (:) ju(hg)stí(h_ghvGE//f!gwhgh//f!gwhgh)ti(f)a(eef.) (,) et(f.d!ewf) ju(f)dí(fffhvGF'D//gvFE'D)ci(d!ewf_d)um(d.) (;) prae(d)pa(ef)rá(gh)ti(g)o(ghGF.efED.) (,) se(fv.fffdgvFE)dis(g_[oh:h]f/hggf/ghg) tu(egff)ae.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1274)"
    },
    communion: {
      title: "Viderunt omnes",
      latin: "Vidérunt omnes fines terræ salutáre Dei nostri.",
      translation: "All the ends of the earth have seen the salvation of our God.",
      mode: "Communion · The Nativity of the Lord (Mass of the Day) · Mode I",
      gabc: "(c4) VI(fg)dé(gff)runt(de~) o(cd~)mnes(d.) *(,) fi(d!f'g)nes(gh) ter(hjjg)rae(g_[oh:h]fhvGE.) (;) sa(f)lu(ghg)tá(hv.fh!jvvH'GE'f)re(f.) (,) De(f_dfvECfhg___)i(ghF'Ef) no(d_[oh:h]e_[oh:h]d_[oh:h])stri.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1139)"
    }
  },

  /* ---- 1st Sunday of Lent (lent-1) ------------------------------------- */
  "lent-1": {
    gradual: {
      title: "Angelis suis",
      latin: "Angelis suis mandávit de te, ut custódiant te in ómnibus viis tuis. ℣. In mánibus portábunt te, ne unquam offéndas ad lápidem pedem tuum.",
      translation: "He has given his angels charge over you, to keep you in all your ways. ℣. In their hands they shall bear you up, lest you dash your foot against a stone.",
      mode: "Gradual · 1st Sunday of Lent · Mode II",
      gabc: "(c3) AN(egf)ge(f)lis(f.) *() su(hfghvF'Ege/fg)is(f.) (;) man(f)dá(hf/hi'j)vit(gxhffe!gvFE.) (`) de(e) te,(e[ll:1]d/feffd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) ut(hh) cu(h)stó(h)di(h)ant(hg/hi!jvHGhhg) (,) (i_[oh:h]hivHF) te(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) in(d) ó(de'f)mni(f)bus(f.0/[-0.5]hvGF'g) vi(e)is(f) tu(hf/h_i)is.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. In(f) má(h)ni(hi)bus(i) por(ij~)tá(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI)bunt(ji~) te,(i.) (:) ne(i) un(k.i!jw!kvJI')quam(i) of(ij)fén(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)das(f.) (:) ad(d) lá(de'f)pi(f)dem(f.0/[-0.5]hvGF'g) (,) * pe(e)dem(f) tu(hf/h_i)um.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #834)"
    },
    tract: {
      title: "Qui habitat",
      latin: "Qui hábitat in adjutório Altíssimi, in protectióne Dei cæli commorábitur. ℣. Dicet Dómino : Suscéptor meus es tu, et refúgium meum : Deus meus, sperábo in eum. ℣. Quóniam ipse liberávit me de láqueo venántium, et a verbo áspero. ℣. Scápulis suis obumbrábit tibi, et sub pennis ejus sperábis. ℣. Scuto circúmdabit te véritas ejus : non timébis a timóre noctúrno. ℣. A sagítta volánte per diem, a negótio perambulánte in ténebris, a ruína et dæmónio meridiáno. ℣. Cadent a látere tuo mille, et decem míllia a dextris tuis : tibi autem non appropinquábit. ℣. Quóniam Angelis suis mandávit de te, ut custódiant te in ómnibus viis tuis. ℣. In mánibus portábunt te, ne unquam offéndas ad lápidem pedem tuum. ℣. Super áspidem et basilíscum ambulábis, et conculcábis leónem et dracónem. ℣. Quóniam in me sperávit, liberábo eum : prótegam eum, quóniam cognóvit nomen meum. ℣. Invocábit me, et ego exáudiam eum : cum ipso sum in tribulatióne. ℣. Erípiam eum, et glorificábo eum : longitúdine diérum adimplébo eum, et osténdam illi salutáre meum.",
      translation: "Whoever dwells in the shelter of the Most High shall abide under the protection of the God of heaven. ℣. He shall say to the Lord: You are my support and my refuge: my God, in him will I trust. ℣. For he has delivered me from the snare of the hunters, and from the harsh word. ℣. He will overshadow you with his shoulders, and under his wings you shall trust. ℣. His truth shall encompass you with a shield: you shall not fear the terror of the night. ℣. Of the arrow that flies by day, of the trouble that walks about in darkness, of ruin and the noonday demon. ℣. A thousand shall fall at your side, and ten thousand at your right hand: but it shall not come near you. ℣. For he has given his angels charge over you, to keep you in all your ways. ℣. In their hands they shall bear you up, lest you dash your foot against a stone. ℣. You shall walk upon the asp and the basilisk, and shall trample the lion and the dragon. ℣. Because he hoped in me, I will deliver him: I will protect him, because he has known my name. ℣. He shall cry to me, and I will hear him: I am with him in tribulation. ℣. I will rescue him and glorify him: with length of days will I fill him, and I will show him my salvation.",
      mode: "Tract · 1st Sunday of Lent · Mode II",
      gabc: "(f3) QUI(f_) há(f_)bi(efE'C)tat(ef//ef/hghvvGFggf.0) *(;) in(g) ad(e)ju(f)tó(hi)ri(hvGF)o(f') Al(gh'i)tís(hhg)si(fe)mi,(ef/gf/ggf/gh/iffe.) (:) in(e) pro(e)te(gh)cti(f)ó(f_e/f!gwh'!iv)ne(hgh.) De(i_[oh:h])i(e) cae(f!hh//hhh)li(gf..) (,) com(hg~)mo(h)rá(i_[oh:h]f//ihhvGF)bi(ef)tur.(f/ggf.0) (::) ℣. Di(hi)cet(f) Dó(hi)mi(ivH'GhvGF'g)no :(gf..) (;) Sus(hg)cé(h)ptor(fg~) me(f!hh//hhh)us(fg) es,(fe/ggf/gh/iffe.) (:) et(e) re(f)fú(f!h_gh//gh!jvIGhvGF'g)gi(fg)um(fg) me(fg)um,(fg) (,) De(fg)us(fg) me(f_e/f!gwh'!iv)us :(hg/hiih.0) (;) spe(ehg)rá(h/ihhe)bo(fgf) (`) in(hg) e(h_f/ggf)(,)(hiH'GhiF'E//hhhvGF')um.(f/ggf.0) (::) ℣. Quó(f)ni(e)am(f) i(h/ihhf/hh/ijhhg/ihhggf!gwhgh)pse(gf..) (;) li(f)be(hfh)rá(iv.hi/ji)vit(ig~) me(giH'GhvGFgf..) (;) de(hg) lá(hi)que(hvGE)o(f') ve(gh'i)nán(hhg)ti(fe)um,(ef/gf/ggf/gh/iffe.) (:) et(e) a(f) ver(hhi~)bo(h) á(hv.gh/ihi)spe(f)ro.(f/ggf.0) (::) ℣. Scá(i)pu(hiH'F)lis(f!gwh) su(hiH'F)is(f.) (,) ob(hg)um(hi~)brá(i_[oh:h]gi)bit(hg~) ti(hvGF)bi,(fe/ggf/gh/iffe.) (:) et(e) sub(e) pen(gh)nis(f) e(f_e/f!gwh'!iv)jus(hiH'GhvG'FEf_e) (,) spe(fhf)rá(hvvGF')bis.(f/ggf.0) (::) ℣. Scu(h)to(hh//hhh) cir(f)cúm(hfh)da(iv.hi/ji)bit(ig~) te(giH'GhvGFgf..) (;) vé(hi)ri(hvGE')tas(f) e(g_[oh:h]fg)jus :(fe/ggf/gh/iffe.) (:) non(gh) ti(f)mé(f_e/f!gwh'!iv)bis(hg/hiih.0) (;) a(i) ti(e)mó(f)re(f) no(hg)ctúr(hvGF)no.(fefEC//fefggf.0) (::) ℣. A(fhg) sa(h)gít(iji___/jij)ta(f.) vo(h)lán(hi!jvIH'GhvGF'g)te(gf..) (,) per(hg~) di(h_fg)em,(fe/ggf/gh/iffe.) (:) a(c) ne(c)gó(ef)ti(fe)o(f/hhhvF'E//f_efv.) (;) per(f)am(f)bu(hg)lán(hv.gh/ihi)te(f') in(gh'i) té(hhg)ne(fe)bris,(ef/gf/ggf/gh/iffe.) (:) a(c) ru(c)í(ef)na(f/hhhvF'E//f_efv.) (;) et(f) dae(hg)mó(hv.gh/ihi)ni(fe)o(ef) (,) me(ec)ri(e)di(f)á(fih/ihh'hhvF'EDef/hf)no.(f.) (::) ℣. Ca(hi/j_i)dent(ijIH'ihh'hhvGEf_e/f!gw!hvGFgf..) (;) a(h) lá(hi'j)te(jvIH'GhvGF'g)re(g_[oh:h]f) tu(f)o(fi) (,) mil(hiHF'fe//hiHF'fe//hvGF'ihhvGF'hfgv_[oh:h]F~E~)le,(fe..) (;) et(f) de(e)cem(f) míl(f!hh/ijhhg/ihhggf!gwh_g)li(hg)a(f.) (;) a(f!gwh_g) dex(h)tris(f!gwh_g) tu(hvGF)is :(fe/ggf/gh/iffe.) (:) ti(gh)bi(f) au(f_e/f!gwh'!iv)tem(hg/hiih.0) (;) non(i) ap(e)pro(f)pin(hg~)quá(hvGF)bit.(fefEC//fefggf.0) (::) ℣. Quó(f)ni(e)am(f) An(hi)ge(hiH'F)lis(f!gwh) su(hiH'F)is(f.) (;) man(fi~)dá(i_[oh:h]gi)vit(hg) de(fg) te,(fe/ggf/gh/iffe.) (:) ut(e) cu(e)stó(gh)di(f)ant(f_e/f!gwh'!iv) te(hg/hiih.0) (;) in(i) ó(i)mni(e)bus(f) vi(h)is(g/hihi) tu(f)is.(f/ggf.0) (::) ℣. In(h) má(i)ni(jiihi)bus(iv.hh/fgf.) (;) por(hfh)tá(iv.hi/ji)bunt(ig~) te,(giH'GhvGFgf..) (;) ne(hg) un(hi)quam(hvGE') of(f)fén(g_[oh:h]fg)das(fe/ggf/gh/iffe.) (:) ad(gh~) lá(f_e/f!gwh'!iv)pi(hi)dem(ivH'GhvG'FEf_e) (`) pe(h)dem(gh/ihi) tu(f)um.(f/ggf.0) (::) ℣. Su(fhg)per(h) á(i)spi(jiihi)dem(iv.hh/fgf.) (;) et(f) ba(f)si(hfh)lí(iv.hi!jvIG)scum(giH'GhvGFgf..) (;) am(f)bu(i)lá(hiHF'fe//hiHF'fe//hvGF'ihhvGF)bis,(fhffe.) (:) et(gh~) con(fg~)cul(f)cá(f_e/f!gwh'!iv)bis(hg/hiih.0) (;) le(f)ó(fefEC//f_e/f!gw!hvGF'g)nem(gf..) (,) et(hg~) dra(h)có(hjihjIH'ihh'hhvGEf_e/f!gw!hvGF'g)nem.(gf..) (::) ℣. Quó(f_)ni(f_e)am(e) in(f) me(hi) spe(f)rá(f!hh/ijhhg/ihhggf!gwhgh)vit,(gf..) (;) li(f)be(hg)rá(h)bo(f) e(f!hh//hhh)um :(fe/ggf/gh/iffe.) (:) pró(gh)te(f)gam(f) e(f_e/f!gwh'!iv)um,(hg/hiih.0) (;) quó(hi)ni(hvGE')am(f) co(fe~)gnó(gh)vit(h) no(h)men(gh/ihi) me(f)um.(f/ggf.0) (::) ℣. In(fhg)vo(h)cá(i)bit(jiihi) me,(iv.hh/fgf.) (;) et(h) e(hi'j)go(jvIH'GhvGFgf..) (,) ex(hg)áu(hi)di(hvGE')am(f) e(g_[oh:h]fg)um :(fe/ggf/gh/iffe.) (:) cum(gh) i(f)pso(f_e/f!gwh'!iv) sum(hg/hiih.0) (;) in(hi) tri(hhg)bu(fef)la(eh)ti(gh/ihi)ó(f)ne.(f/ggf.0) (::) ℣. E(h)rí(i)pi(hiH'F)am(f.) e(f!h_gh//gh!jvIGhvGF'g)um,(gf..) (;) et(fg~) glo(f)ri(f)fi(hg)cá(h)bo(f) e(f!hh//hhh)um :(fe/ggf/gh/iffe.) (:) lon(e)gi(f)tú(f!h_gh//gh!jvIGhvGF'g)di(fg)ne(fg) di(f)é(h)rum(hh//hhh) (,) ad(f)im(hg~)plé(h)bo(f) e(f!hh//hhh)um,(fe/ggf/gh/iffe.) (:) et(e) os(e)tén(gh)dam(f) il(f_e/f!gwh'!iv)li(kxhgi.jkiih.0) (;) sa(h/ihhg)lu(fe)tá(fgf)re(g.) *() me(i_[oh:h]hivHFg.)(,)(h!jijH'GF)um.(fe/f!hh/ijI'Gh.) (,) (gh!jvIH'hvGFggf.0) (::)",
      source: "Graduale Romanum (GregoBase #889)"
    },
    offertory: {
      title: "Scapulis suis",
      latin: "Scápulis suis obumbrábit tibi Dóminus, et sub pennis ejus sperábis : scuto circúmdabit te véritas ejus.",
      translation: "The Lord will overshadow you with his shoulders, and under his wings you shall trust: his truth shall encompass you with a shield.",
      mode: "Offertory · 1st Sunday of Lent · Mode VIII",
      gabc: "(c4) SCá(h)pu(g)lis(g) su(gih)is(h.) *(,) ob(g)um(g)brá(gh/ji)bit(ih~) ti(jk)bi(hv.fhg) Dó(g)mi(ghg___)nus,(g.) (:) et(g) sub(g) pen(gh/ji)nis(j) e(j)jus(jjjvI'HGhg__) (;) spe(hih)rá(jj//hj/kjk)bis :(ji..) (:) scu(hj/kj)to(jj//jjj) cir(hg~)cúm(g.h!iwj)da(jkJ'H)bit(h_g) te(gf..) (;) vé(ixfg!ivHGh./jkj)ri(h_f)tas(fhg) e(ghg___)jus.(g.) (::)",
      source: "Graduale Romanum (GregoBase #294)"
    },
    communion: {
      title: "Scapulis suis",
      latin: "Scápulis suis obumbrábit tibi, et sub pennis ejus sperábis : scuto circúmdabit te véritas ejus.",
      translation: "He will overshadow you with his shoulders, and under his wings you shall trust: his truth shall encompass you with a shield.",
      mode: "Communion · 1st Sunday of Lent · Mode III",
      gabc: "(c4) SCá(gh/ji)pu(j)lis(j) su(jvvIH)is(ih..) *(,) ob(f)um(gh)brá(h_fh)bit(g) ti(egff)bi,(fe..) (:) et(g) sub(g) pen(jv.jjj)nis(g) e(h)jus(f.) spe(ixfghig/h_g)rá(egff)bis :(fe..) (:) scu(ixhjhhgi)to(h_[oh:h]g_[oh:h]/!h_[oh:h]i_[oh:h]h._[oh:h]) (,) cir(f)cúm(hg~)da(h_fh)bit(gvFE'fwgfg) te(gf..) (,) vé(h_f)ri(gh)tas(g) e(egff)jus.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1100)"
    }
  },

  /* ---- 2nd Sunday of Easter (easter-2) — no Gradual in Eastertide ------ */
  "easter-2": {
    alleluia: {
      title: "In die resurrectionis meae",
      latin: "Allelúia. ℣. In die resurrectiónis meæ, dicit Dóminus, præcédam vos in Galilǽam.",
      translation: "Alleluia. ℣. On the day of my resurrection, says the Lord, I will go before you into Galilee.",
      mode: "Alleluia · 2nd Sunday of Easter · Mode VII",
      gabc: "(c3) AL(e)le(e)lú(e_[uh:l]f//df!hvGFhi~){ia}.(ie..) *(,) ij.(fg!hvGFE.df!gvFE.) (;) (de!fv.gh'GFE.df!gvFE.//fgf/!ge/!ffe.) (::) ℣. In(ei) di(i)e(ihhf//h_ie.) (,) re(d)sur(f!gwh)re(hg)cti(fe)ó(fg)nis(f) me(efe___)ae,(e.) (,) di(dc)cit(de) Dó(e)mi(ef/hfg)nus,(fe..) (:) prae(i/kj/k_[uh:l]lK'JI')cé(i/kj/k_[uh:l]lK'JI'//hkkvJHivHF)dam(hi~) vos(i.) *(;) in(e) Ga(e)li(e)laé(e_[uh:l]f//df!hvGFhi)am.(ie..) (,) (fg!hvGFE.df!gvFE.) (;) (de!fv.gh'GFE.df!gvFE.//fgf/ge/ffe.) (::)",
      source: "Graduale Romanum (GregoBase #1042). On Low Sunday a second Alleluia, “Post dies octo,” follows."
    },
    offertory: {
      title: "Angelus Domini descendit",
      latin: "Angelus Dómini descéndit de cælo, et dixit muliéribus : Quem quæritis, surréxit, sicut dixit, allelúia.",
      translation: "An angel of the Lord came down from heaven, and said to the women: He whom you seek is risen, as he said, alleluia.",
      mode: "Offertory · 2nd Sunday of Easter · Mode VIII",
      gabc: "(c4) AN(fg~)ge(g.!hjHG'gf/ghg___)lus(g.) *(,) Dó(hg/h!jjkvJH)mi(gfh)ni(h.) (;) de(h)scén(jhhf/ghGF'/!fde'1c)(,)(cd!ff/gh!jvHG'gfg)dit(g.) (;) de(g.h!iwj) cae(jji/j_g//h!jijkljj)lo,(ki/jhhg.) (;) et(g) di(gggvED'eg'hvGF'g)xit(g.) (,) mu(g)li(hj)é(ig/h!jj/klK'Ijkj)ri(ij)bus :(hig.) (:) Quem(gh~) quaé(hvGFgvFEf./ghffdg)ri(fg)tis,(g.) (;) sur(h)ré(gjI'Ghh//fh!jvGF'fd/ef!ghg)xit,(g.) (;) sic(g)ut(gj) di(jji/jhhg)xit,(h.) (;) al(h!iwji~)le(jkJH'//gi. hjIH'//g!jj/h_[oh:h]i_[oh:h]g_[oh:h])lú(ghg___){ia}.(g.) (::)",
      source: "Graduale Romanum (GregoBase #789)"
    },
    communion: {
      title: "Mitte manum tuam",
      latin: "Mitte manum tuam, et cognósce loca clavórum, allelúia : et noli esse incrédulus, sed fidélis, allelúia.",
      translation: "Put in your hand, and know the place of the nails, alleluia: and be not unbelieving, but believing, alleluia.",
      mode: "Communion · 2nd Sunday of Easter · Mode VI",
      gabc: "(c4) MIt(ffg)te(f) * ma(gh)num(g) tu(f)am,(ghg.) (,) et(fvE~D~) co(f)gnó(g)sce(f) lo(f)ca(g) cla(e)vó(ixg!hwih)rum :(hg..) (:) et(fd~) no(f)li(g) es(h)se(g) in(f)cré(g)du(fe)lus(d.) (;) sed(fg) fi(f)dé(fg!hvGF'g)lis.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #589)"
    }
  },

  /* ===================================================================== *
   * ORDINARY TIME — the upcoming Sundays. Sourced per Sunday from the
   * modern Graduale Romanum / Gregorian Missal via gregorien.info's
   * Vatican-II calendar (the same repertory the diolc introits excerpt);
   * gabc from the in-repo GregoBase dump (Solesmes). The Graduale assigns
   * some OT graduals/communions by LECTIONARY YEAR, so those parts live
   * under cycle keys (ot-N-a/-b/-c, like the cycle-split introits) while
   * the cycle-independent alleluia and offertory live under the base key.
   * Picks logged in sources/gregobase/feasts-propers.csv.
   * ===================================================================== */

  /* ---- 13th Sunday in Ordinary Time (ot-13) --------------------------- *
   * Introit "Omnes gentes plaudite" (ot-13 in introits.js). Cycle-specific:
   * Gradual A "Venite filii" / C "Exaltabo te"; Communion A "Christus
   * resurgens" / B & C "Inclina aurem". Alleluia + Offertory are common.   */
  "ot-13": {
    alleluia: {
      title: "Omnes gentes plaudite",
      latin: "Allelúia. ℣. Omnes gentes pláudite mánibus : jubiláte Deo in voce exsultatiónis.",
      translation: "Alleluia. ℣. O clap your hands, all you nations: shout unto God with the voice of joy.",
      mode: "Alleluia · Ordinary Time · Mode I",
      gabc: "(c4) AL(d)le(ff)lú(gv.f!hgh){ia}.(hjh___!iw!jvIH'hg//ixhiHG'gf.0) *(;) ij.(ixfg!hihhg/h_g//hfgvF'ED') (;) (fef.hg/h_g//hfgvF'ED'ewfd.1) (::) ℣. O(ixfg'i~)mnes(i) gen(ixiiij_ggf.0)(,)(ixj_i/j_[hl:1]k_[hl:1]i_[hl:1]ig!hw!ivHG'h)tes(h_ghvGFg.) (;) pláu(ixfg/iV_[oh:h]!gh~)di(ixh.0/ijh/iggf/hjh.1)(,)(ixf.g!hwigh./ijh/iggf/hjh.1)(,)(ixj_[hl:1]k_[hl:1]j_[hl:1]jhivGF'gwhg/hi)te(i.) (;) má(ixivHF'gffd de'f)ni(gffefvED'e)bus :(e[ll:1]d..) (:) ju(f)bi(f)lá(gh)te(h/iih) De(g.h!iw!jkj)o(jvIH.) (;) in(hg~) vo(fg/hg/hhg)ce(g./fghjjg/hhghvFE.) (;) * ex(e)sul(ef'g)ta(ghG'F)ti(ghg)ó(h)nis.(hjh___!iw!jvIH'hg//ixhiHG'gf.0) (;) (ixfg!hihhg/h_g//hfgvF'ED') (;) (fef.hg/h_g//hfgvF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #77)"
    },
    offertory: {
      title: "Sicut in holocausto",
      latin: "Sicut in holocáusto aríetum et taurórum, et sicut in míllibus agnórum pínguium : sic fiat sacrifícium nostrum in conspéctu tuo hódie, ut pláceat tibi : quia non est confúsio confidéntibus in te, Dómine.",
      translation: "As in holocausts of rams and bullocks, and as in thousands of fat lambs: so let our sacrifice be in your sight this day, that it may please you: for there is no confusion for those who trust in you, O Lord.",
      mode: "Offertory · Ordinary Time · Mode V",
      gabc: "(c3) SIc(gxd!ewf'!gv)ut(f) *() in(f) ho(gxfg)lo(f)cáu(feede)sto(e_[oh:h][ll:1]d) a(d)rí(ede)e(gxfgf)tum(f.) (,) et(fh~) tau(hv_G~F~)ró(hv.ghfg)rum,(f.) (;) et(f) sic(f!hwi'!jv)ut(i) in(i) míl(iji)li(hh/i_[oh:h]h)bus(h.) (,) a(h)gnó(hih)rum(h) pín(hg~)gui(g!hw!ivH'GF'g)um :(gf..) (:) sic(fdf) fi(f!gwhhvGF'g)at(g_[oh:h]f) (,) sa(f)cri(h)fí(h)ci(g!hw!ivH'GF'g)um(g_[oh:h]f) no(f_egvFE'f)strum(e.) (;) in(e) con(ei~)spé(iji)ctu(h) tu(hih)o(h.) (,) hó(hf/hh)di(ih)e,(h.) (;) ut(fdf) plá(f!gwhg/hih)ce(f)at(efe) ti(de!fvED'e)bi :(e[ll:1]d..) (:) qui(d)a(ef) non(f!gwhg/hih) est(f) con(ef~)fú(d)si(de!fvED'e)o(e[ll:1]d..) (;) con(d)fi(ef)dén(f)ti(e)bus(f!gwhg/hih) in(f) te(ef) (,) Dó(d)mi(de!fvED'e)ne.(d!ewfe/fhf.1) (,) (d!ewfe/fhff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #675)"
    }
  },

  /* ot-13, Year A: Gradual "Venite filii", Communion "Christus resurgens" */
  "ot-13-a": {
    gradual: {
      title: "Venite filii",
      latin: "Veníte fílii, audíte me : timórem Dómini docébo vos. ℣. Accédite ad eum, et illuminámini : et fácies vestræ non confundéntur.",
      translation: "Come, O children, hearken to me: I will teach you the fear of the Lord. ℣. Come to him and be enlightened: and your faces shall not be confounded.",
      mode: "Gradual · Ordinary Time (Year A) · Mode V",
      gabc: "(c4) VE(d)ní(ff)te(ghgh) fí(h_fg)li(g)i,(f.) *(,) au(hj~)dí(j_h//jij)te(ixgjh/i_[uh:l]j) me :(ixih..) (:) ti(h)mó(hg)rem(j) Dó(j)mi(ij)ni(h_f) do(gh)cé(f)bo(ef) vos.(dec.) (,) (fhg___//jkijh.fhg/hggf.0) (z0::c3) ℣. Ac(d)cé(d)di(f)te(hvvGFhvGEff) (,) (gxde!fgF'EfvEDe.) (,) (fh/ih/ih/ijh.1) (,) ad(h) e(ih/kkh/ih/kkvIH)um,(hv.ghGF.) (;) et(h) il(h)lu(h)mi(h)ná(i!jwk)mi(ih)ni :(hihh/fgf.) (:) et(fh~) fá(h)ci(h)es(g) ve(h)strae(f.) *(,) non(df) con(e!hgh)fun(f)dén(de~)tur.(d!ewfef//highf.dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1022)"
    },
    communion: {
      title: "Christus resurgens",
      latin: "Christus resúrgens ex mórtuis, jam non móritur, allelúia : mors illi ultra non dominábitur, allelúia, allelúia.",
      translation: "Christ rising from the dead dies now no more, alleluia: death shall no longer have dominion over him, alleluia, alleluia.",
      mode: "Communion · Ordinary Time (Year A) · Mode VIII",
      gabc: "(c3) CHri(eh)stus(ggh.) *(,) re(hf)súr(hi~)gens(g) ex(f) mór(ggh)tu(fe)is,(e.) (,) jam(g) non(g) mó(gf/g_[uh:l]h)ri(e)tur,(c.) (,) al(f)le(f)lú(e!f@ec~){ia} :(c.) (:) mors(f) il(ef)li(feec) ul(eg~)tra(f.) non(hhf~) do(hi'j)mi(ij)ná(g)bi(gihh)tur,(hg..) (;) al(gj~)le(j)lú(jij){ia},(g.) (,) al(h)le(fhGF')lú(gffef){ia}.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #593)"
    }
  },

  /* ot-13, Year B: Communion "Inclina aurem" (no proper Gradual assigned) */
  "ot-13-b": {
    communion: {
      title: "Inclina aurem tuam",
      latin: "Inclína aurem tuam, accélera, ut éruas nos.",
      translation: "Incline your ear to me: make haste to deliver us.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode IV",
      gabc: "(c4) IN(f)clí(fgf)na(f_d) *() au(fe~)rem(f) tu(ghG'Fg_[uh:l]h)am,(h.) (:) ac(f)cé(h)le(gh_G'_FE'f)ra,(f_e) (,) ut(f) é(ghG'F)ru(g)as(ghG'FghG'F) nos.(e.) (::)",
      source: "Graduale Romanum (GregoBase #339)"
    }
  },

  /* ot-13, Year C: Gradual "Exaltabo te", Communion "Inclina aurem" */
  "ot-13-c": {
    gradual: {
      title: "Exaltabo te Domine",
      latin: "Exaltábo te, Dómine, quóniam suscepísti me : nec delectásti inimícos meos super me. ℣. Dómine Deus meus, clamávi ad te, et sanásti me : Dómine, abstraxísti ab ínferis ánimam meam, salvásti me a descendéntibus in lacum.",
      translation: "I will extol you, O Lord, for you have upheld me, and have not let my enemies rejoice over me. ℣. O Lord my God, I cried out to you, and you healed me: O Lord, you brought up my soul from the netherworld, you saved me from among those that go down into the pit.",
      mode: "Gradual · Ordinary Time (Year C) · Mode III",
      gabc: "(c4) EX(f)al(ffff_c~)tá(d!ewf_e)bo(f) te,(fffd/fff) (,) * Dó(e.f!gwh_g)mi(hg)ne,(ixg_[uh:l]h//e.f!gw!higff/ded.) (;) quó(f.d!ewfe)ni(e)am(ege/ghgff/ded.) (,) sus(g)ce(hih)pí(j)sti(jh/jj//jj/khhg.) me :(ig/h!jjjh/klJ'IHjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) nec(gj) de(jkjji)le(jjj_h)ctá(h!jj)sti(jjjvH'G) (;) in(h_g/h!iwj)i(h_g/h!iwj)mí(hvGF'gwh)cos(ghg) me(ghG'Fgh!jjjh)(,)(k_[hl:1]j//kvJHgjh/ij)os(i.) (;) su(jk)per(kijvH'GF.h!iwj'!kv) me.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'/[-0.5]{ix}E0f_h//ivGFghg/hgge.) (::) ℣. Dó(e[ll:1]d)mi(g)ne(hi) De(iij)us(h) me(h!jj//jjjvHGigh)us,(h.) (,) (i_j_i_2/j_[hl:1]k_[hl:1]i'_[hl:1]//kvJ'IHjvIH) (,) (jj/ki'jvHG'jh'/ihhg.) (:) cla(dg)má(gh'j)vi(j) ad(j) te,(i_[oh:h]g) (,) et(h) sa(j)ná(iki/jk_[hl:1]j//ki/jk_[hl:1]jk//ij/kjkkj)sti(j_i) me :(jh) (,) (jjjvHG'h!jjjvHGhh//gjh/ihhg.) (:) Dó(ij//j'jjvH'Gh!iwj_i)(,)(e!gh/jij//h!jj//jjjvH'Gh!iwj)mi(jjjvHG'h)ne,(hv.giHG'hffe.) (:) ab(ef)stra(dge)xí(gh//g.h!iwj)sti(jjjvH'G) (,) ab(hggf) ín(jj)fe(kjjvIH)ris(h_g//ivHG'hffe.) (;) á(ef)ni(dg)mam(g) me(hg/h!jjjhhg)am,(g.) (:) sal(dg)vá(gh'j)sti(j) me(jj//jjjh/ijHG.) (,) (jj//jjjh/!ijHG.) (,) (jj/kh/jjk/jk/ljjj'1h/ijHG.) (,) (jgjvvIH//jhjvIHjh/ihhg.) (:) a(g) de(g)scen(g)dén(ghG'Fgh/jjjhk)ti(jkJHgjh/ij)bus(i.) *(,) in(jk) la(kijvH'GF.h!iwj'!kv)cum.(i_[oh:h]g//ivHGhhf/hh) (,) (g!jj//jj//jjjvH'GF'E/!f_h/!/!ixivGFghg/hgge.) (::)",
      source: "Graduale Romanum (GregoBase #277)"
    },
    communion: {
      title: "Inclina aurem tuam",
      latin: "Inclína aurem tuam, accélera, ut éruas nos.",
      translation: "Incline your ear to me: make haste to deliver us.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode IV",
      gabc: "(c4) IN(f)clí(fgf)na(f_d) *() au(fe~)rem(f) tu(ghG'Fg_[uh:l]h)am,(h.) (:) ac(f)cé(h)le(gh_G'_FE'f)ra,(f_e) (,) ut(f) é(ghG'F)ru(g)as(ghG'FghG'F) nos.(e.) (::)",
      source: "Graduale Romanum (GregoBase #339)"
    }
  },

  /* ---- 14th Sunday in Ordinary Time (ot-14) --------------------------- *
   * Introit "Suscepimus Deus". Gradual/Offertory/Communion common; only the
   * Alleluia changes by year (A "Venite ad me" / B & C "Magnus Dominus").  */
  "ot-14": {
    gradual: {
      title: "Esto mihi in Deum protectorem",
      latin: "Esto mihi in Deum protectórem, et in locum refúgii, ut salvum me fácias. ℣. Deus, in te sperávi : Dómine, non confúndar in aetérnum.",
      translation: "Be unto me a God of protection, and a house of refuge, to save me. ℣. In you, O God, have I hoped: O Lord, let me never be confounded.",
      mode: "Gradual · Ordinary Time · Mode V",
      gabc: "(c4) E(ffg)sto(f) mi(fg)hi(f.) *(,) in(fg) De(gf)um(f) pro(ghgh)te(hgffd/ff//fg'h)ctó(gv.fgf)rem,(fv.) (,) (d!ff/ge'/fgd'/e[ll:1]ddc.) (:) et(fg) in(f) lo(ghghvGF)cum(g.) (,) re(g.h!iwji/jkj)fú(hvGF)gi(hg)i,(gv.d!f'g/fh!jvGF'fd) (,) (ff/ge'/fgd'/e[ll:1]ddc.) (:) ut(d) sal(fd/fff)vum(c_[ll:1]d) me(ff) (,) fá(ixhhg/hh//gh!ivGFhh//f!h'j)ci(j)as.(iyjkijh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. De(d)us,(d) in(f) te(fh/ih/ijh) spe(h)rá(h)vi :(hhi.) (,) Dó(i_[oh:h]h)mi(h_g)ne,(hhf//hhf//hihh/fgf.) (:) non(hh) con(h)fún(ih/ij_h ih/ij_ij//hi/jij)dar(jh/jkihh/fgf.) *(;) in(de'f) ae(f)tér(fhG'Fhhh)num.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #886)"
    },
    offertory: {
      title: "Populum humilem",
      latin: "Pópulum húmilem salvum fácies, Dómine, et óculos superbórum humiliábis : quóniam quis Deus praeter te, Dómine?",
      translation: "You will save the humble people, O Lord, and will bring down the eyes of the proud: for who is God but you, O Lord?",
      mode: "Offertory · Ordinary Time · Mode V",
      gabc: "(c4) PO(fgf)pu(fgf)lum(fg'h) hú(hjHG')mi(hggfg)lem(gf..) *(;) sal(hj)vum(jh~) fá(jlk)ci(j_i)es,(jjj//hjG'Fg.) (,) Dó(d/ff//gh/j.h!iwj)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne,(f.) (:) et(fg) ó(g.h!iw!jvIH)cu(h_[oh:h]i_[oh:h]h_[oh:h])los(h.) su(h)per(h_g~)bó(ixgiHG')rum(hggf.0) (,) hu(hf)mi(g)li(hj)á(jkJ'Hjjj_h//jkJ'H)bis :(h_[oh:h]i_[oh:h]h._[oh:h]) (:) quó(f)ni(g)am(h) quis(j_h/jjhi) De(g.h!iwj/kjjij)us(ji..) (;) prae(hi)ter(hg~) te,(jj) Dó(jkj'/ki'jvHG.jkj'/ki'jvH'Fg.)(,)(fhhgh//jki'/jh)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne?(f.) (::)",
      source: "Graduale Romanum (GregoBase #1080)"
    },
    communion: {
      title: "Gustate et videte",
      latin: "Gustáte et vidéte, quóniam suávis est Dóminus : beátus vir, qui sperat in eo.",
      translation: "Taste and see that the Lord is sweet: blessed is the man who hopes in him.",
      mode: "Communion · Ordinary Time · Mode III",
      gabc: "(c4) GU(g)stá(hj)te(j.) *(,) et(j) vi(j)dé(jjj)te,(h.) (,) quó(h/jjj)ni(gh_G'_FE'f)am(f_e) su(f)á(ef'h)vis(h) est(hggf/ghg) Dó(e)mi(egff)nus :(fe..) (:) be(ef'g)á(g)tus(ghGF'h) vir,(h.) (,) qui(hv.ghF'D) spe(fh)rat(g) in(hggf/ghg) e(egff)o.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1203)"
    }
  },

  /* ot-14, Year A: Alleluia "Venite ad me" */
  "ot-14-a": {
    alleluia: {
      title: "Venite ad me",
      latin: "Allelúia. ℣. Veníte ad me, omnes qui laborátis, et oneráti estis : et ego refíciam vos.",
      translation: "Alleluia. ℣. Come to me, all you who labor and are heavy laden: and I will refresh you.",
      mode: "Alleluia · Ordinary Time (Year A) · Mode VIII",
      gabc: "(c3) AL(ee[ll:1]d~)le(ff)lú(efe/hiHF'gffe~){ia}.(e.) *(;) ij.(de!f!gwhe./de!f!gwhe'fvED.) (;) (df!hi//hjijvHF.1) (,) (ehf___!gwh'!ivHF'EDee) (,) (fh//gh'iHF'EDee//fe/hhe.) (::) ℣. Ve(e)ní(efe/hiHF'gffe)te(e) ad(d/efd/ee) me,(d.) (;) o(df!hv//jhi)mnes(i.) (,) qui(h) la(j)bo(i)rá(jkJI'i//hji/jkii)(,)(hiHF'Ehv.gh'!ivHF'EDee)(,)(fh//gh'iHF'EDee)(,)(hji/jkJI'i//hji/jki)tis,(i.) (;) et(hjh/ii) o(e)ne(f!gwh)rá(h)ti(hhhvGF) e(fhe/fe)stis :(e.) (:) et(e) e(ef)go(e) *() re(e)fí(ef)ci(e[ll:1]d)am(df!hiHF'gffe~) vos.(e.) (;) (de!f!gwhe./de!f!gwhe'fvED.) (;) (df!hi//hjijvHF.1) (,) (ehf___!gwh'!ivHF'EDee) (,) (fh//gh'iHF'EDee//fe/hhe.) (::)",
      source: "Graduale Romanum (GregoBase #1237)"
    }
  },

  /* ot-14, Year B: Alleluia "Magnus Dominus" */
  "ot-14-b": {
    alleluia: {
      title: "Magnus Dominus",
      latin: "Allelúia. ℣. Magnus Dóminus, et laudábilis valde, in civitáte Dei, in monte sancto ejus.",
      translation: "Alleluia. ℣. Great is the Lord, and exceedingly to be praised, in the city of our God, in his holy mountain.",
      mode: "Alleluia · Ordinary Time (Years B & C) · Mode VII",
      gabc: "(c3) AL(ei)le(i)lú(hhivHFhi~){ia}.(i.) *(,) {ij.}(hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) (;) (ei!jvIH'Fg./fh!ivFE'DeegE'Dffe.) (::) ℣. Ma(ivHFhi~)gnus(i.) Dó(ikj/klm)mi(kvJI)nus,(i.) (;) et(ij~) lau(ih~)dá(fe)bi(de)lis(e.) val(ivHFhi~)de,(i.) (:) in(i) ci(hg)vi(hi)tá(i)te(hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) De(egf/gh)i,(fe..) *(;) in(e) mon(g)te(e) san(g)cto(h) e(ij)jus.(i.) (,) (hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) (;) (ei!jvIH'Fg./fh!ivFE'DeegE'Dffe.) (::)",
      source: "Graduale Romanum (GregoBase #709)"
    }
  },

  /* ot-14, Year C: Alleluia "Magnus Dominus" (shared with Year B) */
  "ot-14-c": {
    alleluia: {
      title: "Magnus Dominus",
      latin: "Allelúia. ℣. Magnus Dóminus, et laudábilis valde, in civitáte Dei, in monte sancto ejus.",
      translation: "Alleluia. ℣. Great is the Lord, and exceedingly to be praised, in the city of our God, in his holy mountain.",
      mode: "Alleluia · Ordinary Time (Years B & C) · Mode VII",
      gabc: "(c3) AL(ei)le(i)lú(hhivHFhi~){ia}.(i.) *(,) {ij.}(hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) (;) (ei!jvIH'Fg./fh!ivFE'DeegE'Dffe.) (::) ℣. Ma(ivHFhi~)gnus(i.) Dó(ikj/klm)mi(kvJI)nus,(i.) (;) et(ij~) lau(ih~)dá(fe)bi(de)lis(e.) val(ivHFhi~)de,(i.) (:) in(i) ci(hg)vi(hi)tá(i)te(hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) De(egf/gh)i,(fe..) *(;) in(e) mon(g)te(e) san(g)cto(h) e(ij)jus.(i.) (,) (hij!kvJI'Hi./hii) (,) (hij!kvJI'Hi./hii) (,) (gi!jvIH'Fg./fh!ivFE'De.) (;) (ei!jvIH'Fg./fh!ivFE'DeegE'Dffe.) (::)",
      source: "Graduale Romanum (GregoBase #709)"
    }
  },

  /* ---- 12th Sunday in Ordinary Time (ot-12) --------------------------- *
   * Introit "Dominus fortitudo". Gradual/Alleluia/Offertory common; the
   * Communion changes by year (A Circuibo / B Qui vult venire / C Quod dico). */
  "ot-12": {
    gradual: {
      title: "Convertere Domine",
      latin: "Convértere, Dómine, aliquántulum, et deprecáre super servos tuos. ℣. Dómine, refúgium factus es nobis, a generatióne et progénie.",
      translation: "Turn somewhat, O Lord, and be entreated in favor of your servants. ℣. Lord, you have been our refuge, from generation to generation.",
      mode: "Gradual · Ordinary Time · Mode V",
      gabc: "(c4) COn(d)vér(f/[1]{ix}f/g!hwi)te(gf)re(fgFD.1) *(,) Dó(dgf/gh)mi(g)ne(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) a(h)li(jj)quán(j)tu(ji)lum,(hgj.klkkj.0) (:) et(j) de(ixhi)pre(h_g)cá(h/jjjk)re(j.) (,) su(jk)per(j_h~) ser(ixjhi)vos(gh) tu(gf)os.(ixffh//giHF.1) (,) (fhg___jv.jjjhh//fhg/hggf.0) (z0::c3) ℣. Dó(h)mi(ih)ne(hvvGFhvGEff//gxde!fgF'EfvEDe.) (,) (fh/ih/ih/ijh.1) (;) re(h)fú(ih!kkh/ih!kkvIH)gi(h_ghvGF'g)um(gf..) (;) fa(h.i!jwk)ctus(ih) es(h.) no(gxfgFE.fgFD.1fvEDe[ll:1]d)bis,(d.) (:) a(d) ge(d)ne(d)ra(d)ti(d)ó(dfE'D)ne(ef) *(,) et(h) pro(h)gé(hiH'Fhhh)ni(h)e.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1046)"
    },
    alleluia: {
      title: "In te Domine speravi",
      latin: "Allelúia. ℣. In te, Dómine, sperávi, non confúndar in aetérnum : in tua justítia líbera me, et éripe me : inclína ad me aurem tuam, accélera ut erípias me.",
      translation: "Alleluia. ℣. In you, O Lord, have I hoped, let me never be confounded: in your justice deliver me and rescue me: incline your ear to me, make haste to deliver me.",
      mode: "Alleluia · Ordinary Time · Mode III",
      gabc: "(c4) AL(f)le(fgh)lú(gh!ivHG'j){ia}.(j.) *(,) {ij.}(jj//ghGF.jh/i_[oh:h]g//hg/hffe.) (;) (ef'ghghF'Ef_gffe.) (::) ℣. In(g) te(g) Dó(gh'j)mi(jijh)ne(jhhg.) (,) spe(hih)rá(jv.jjjvIHjgh)vi,(ge..) (;) non(e!fwg'!hv) con(g)fún(gh!jvH'GF'gwh'!iv)dar(hg__) (,) in(g) ae(hih)tér(ivHG'hffe//ghG'FgvFE)num :(e.) (:) in(e[ll:1]d~) tu(ghg)a(hi) ju(hg)stí(h!jj)ti(gh)a(g_[oh:h]f_[oh:h]) lí(g)be(f)ra(g) me,(e.) (;) et(e) é(e)ri(ef'g)pe(gh!jvH'GF'gwh'!iv) me :(hg..) (:) in(g)clí(gh/ji)na(jijh) ad(h) me(jhhg.) (,) au(hih~)rem(j.) tu(jjjvIHjgh)am,(ge..) (:) ac(e)cé(ef'ghiH'G)le(g.h!iw!jvIHij)ra(i.) *(,) ut(e) e(ef'g)rí(hiH'G)pi(hj)as(j) me.(jj//ghGF.) (,) (jh/i_[oh:h]g//hg/hffe.) (;) (ef'ghghF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #239)"
    },
    offertory: {
      title: "Perfice gressus meos",
      latin: "Pérfice gressus meos in sémitis tuis, ut non moveántur vestígia mea : inclína aurem tuam, et exáudi verba mea : mirífica misericórdias tuas, qui salvos facis sperántes in te, Dómine.",
      translation: "Make my steps perfect in your paths, that my footsteps be not moved: incline your ear, and hear my words: show forth your wonderful mercies, you who save those who hope in you, O Lord.",
      mode: "Offertory · Ordinary Time · Mode IV",
      gabc: "(c4) PEr(c)fi(dfe)ce(f.) *() gres(ff//fff_d)sus(cd'f) me(f_e)os(egff) (,) in(dg~) sé(gv.f!h'j)mi(g_[oh:h]e)tis(gh) tu(fdgvFE)is,(e.) (;) ut(dg) non(gfg) mo(fe)ve(d!ff)án(fff)tur(d!ff) (,) ve(d)stí(fv.ffd)gi(f)a(fhG'Fghg) me(egff)a :(fe..) (:) in(f)clí(ixef/hig)na(ghffe) au(fffd~)rem(f) tu(gf)am,(f.) (;) et(fffd) ex(f)áu(gf~)di(fg) ver(g)ba(fgff) me(d!ffd)a :(d!ewf.) (:) mi(c)rí(cd/fef)fi(f)ca(f) mi(fgf)se(f)ri(ef)cór(gh)di(g)as(ef) tu(g.f!gwhgh)as,(hg..) (;) qui(f) sal(e.f!gwh)vos(ghF'E) fa(g)cis(fff_g) (,) spe(dc)rán(df~)tes(fffddc) in(df) te,(ef'g) Dó(e)mi(egff)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #265)"
    }
  },
  "ot-12-a": {
    communion: {
      title: "Circuibo et immolabo",
      latin: "Circuíbo, et immolábo in tabernáculo ejus hóstiam jubilatiónis : cantábo, et psalmum dicam Dómino.",
      translation: "I will go around and offer in his tabernacle a sacrifice of jubilation: I will sing and recite a psalm to the Lord.",
      mode: "Communion · Ordinary Time (Year A) · Mode VI",
      gabc: "(c2) CIr(f)cu(fc)í(exegf)bo,(f.) (,) * et(f) im(h)mo(f)lá(g)bo(f.) (,) in(fc~) ta(f)ber(gi~)ná(i)cu(iii)lo(g) e(gihiv_[oh:h]H~G~)jus(hg..) (;) hó(h!iwj'!kv)sti(j)am(j) ju(j)bi(jh)la(ij)ti(h)ó(f_[oh:h]g_[oh:h]f_[oh:h])nis :(f.) (:) can(df~)tá(fef)bo,(d.) (,) et(dc~) psal(fgf)mum(fe~) di(giihivHGh_g/hff)cam(f) Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])no.(f.) (::)",
      source: "Graduale Romanum (GregoBase #1079)"
    }
  },
  "ot-12-b": {
    communion: {
      title: "Qui vult venire post me",
      latin: "Qui vult veníre post me, ábneget semetípsum : et tollat crucem suam, et sequátur me.",
      translation: "Whoever wishes to come after me, let him deny himself: and take up his cross, and follow me.",
      mode: "Communion · Ordinary Time (Year B) · Mode I",
      gabc: "(c4) QUI(d) vult(f) ve(fe)ní(gh)re(ixih) post(fg) me,(fvED.) *(;) áb(ixf!gwhg/hih)ne(g)get(f) se(fe)met(d)í(fg'h)psum :(e.) (:) et(h) tol(ghg)lat(ef) cru(ghgh)cem(f_d) su(gef)am,(f.) (;) et(eg/hjh) se(fg)quá(ef)tur(d!ew!fv_E~C~) me.(d.) (::)",
      source: "Graduale Romanum (GregoBase #89)"
    }
  },
  "ot-12-c": {
    communion: {
      title: "Quod dico vobis",
      latin: "Quod dico vobis in ténebris, dícite in lúmine, dicit Dóminus : et quod in aure audítis, praedicáte super tecta.",
      translation: "What I tell you in darkness, speak in the light, says the Lord: and what you hear whispered, proclaim upon the housetops.",
      mode: "Communion · Ordinary Time (Year C) · Mode IV",
      gabc: "(c4) QUod(d) di(e)co(f) vo(g)bis(f) *() in(fd~) té(f)ne(f)bris,(e_[oh:h]c) (,) dí(f)ci(f)te(e) in(d) lú(e)mi(f)ne,(g_[oh:h]d) di(e)cit(de) Dó(c)mi(c)nus :(c.) (;) et(e) quod(c) in(d) au(f)re(fe) au(d)dí(fg)tis,(g.) (,) prae(f)di(ef)cá(d)te(dc) su(d)per(f) te(egff)cta.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1002)"
    }
  },

  /* ---- 15th Sunday in Ordinary Time (ot-15) --------------------------- *
   * Introit "Dum clamarem". Alleluia/Offertory/Communion common; Gradual by
   * year (A & C "Custodi me" / B "Ostende nobis").                         */
  "ot-15": {
    alleluia: {
      title: "Te decet hymnus",
      latin: "Allelúia. ℣. Te decet hymnus, Deus, in Sion : et tibi reddétur votum in Jerúsalem.",
      translation: "Alleluia. ℣. A hymn befits you, O God, in Sion: and to you a vow shall be fulfilled in Jerusalem.",
      mode: "Alleluia · Ordinary Time · Mode VII",
      gabc: "(c2) AL(c)le(ce/g_[oh:h]f)lú(ef!gvFE'g){ia}.(g_[oh:h]f/g_[oh:h]e) *(,) ij.(g/iivG'Fgv.fffc..) (;) (dffe/fhGF'D//gf/gffc.) (,) (fffvD'Cd_eddc.) (::) ℣. Te(cg'!hv) de(gh)cet(g) hy(gh)mnus,(g.) (,) De(g!hw!ivHG)us,(ghf//gvFEfe..) (;) in(fg) Si(gffe//fg!iiivGFii/jiivHG')on :(g/hhg.) (:) et(g) ti(h/iji)bi(i_[oh:h]h) red(iiivHG)dé(g_[oh:h]f)tur(fgffe.) (;) vo(ef!gvFE/!fg!iiivGFii/jiivHG')tum(g/hhg.) *(;) in(g) Je(gd)rú(fe)sa(fg)lem.(ggd.) (,) (ghG'Fiii//ghG'//D) (,) (ghG'Fiii//ghg.) (,) (g//ijI'G//iivG'Fiig.) (,) (g!iifhvGF'fc.) (;) (dffe/fhGF'D//gf/gffc.) (,) (fffvD'C/!d_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #1052)"
    },
    offertory: {
      title: "Ad te Domine levavi",
      latin: "Ad te, Dómine, levávi ánimam meam : Deus meus, in te confído, non erubéscam : neque irrídeant me inimíci mei : étenim univérsi qui te exspéctant, non confundéntur.",
      translation: "To you, O Lord, I have lifted up my soul: my God, in you I trust, let me not be put to shame: neither let my enemies laugh at me: for none who wait for you shall be confounded.",
      mode: "Offertory · Ordinary Time · Mode II",
      gabc: "(f3) AD(c) te(ef//efefhhh_g) Dó(f)mi(fg!hvGF'g)ne(gf..) (;) * le(f_e/f!gwh)vá(h)vi(gf) á(hhhvF'Ef/hhh)ni(f)mam(fgef) me(f_[oh:h]g_[oh:h]f_[oh:h])am :(f.) (:) De(h)us(h) me(hihh)us,(g_[oh:h]f) (,) in(fe~) te(f) con(fe~)fí(fhG'E)do,(fe..) (;) non(hhi) e(h)ru(high)bé(h_[oh:h]i_[oh:h]h_[oh:h])scam :(h.) (:) ne(hh)que(h_g) ir(hhh)rí(f)de(e!gw!hvGF)ant(fgf) me(f.) (,) in(e)i(g)mí(i_[oh:h]h)ci(h) me(h_fgvFE'f)i :(fe..) (:) ét(fe)e(fgf)nim(fc) (,) u(efe)ni(f)vér(fih~)si(hi) qui(hg) te(f) ex(e)spé(efe)ctant,(c_[oh:h]bc.) (;) non(ef) con(ef)fun(f!gwh/ig/h_g)dén(fg!hvGF'g)tur.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #962)"
    },
    communion: {
      title: "Passer invenit sibi domum",
      latin: "Passer invénit sibi domum, et turtur nidum, ubi repónat pullos suos : altária tua, Dómine virtútum, Rex meus, et Deus meus : beáti qui hábitant in domo tua, in saéculum saéculi laudábunt te.",
      translation: "The sparrow has found herself a house, and the turtledove a nest, where she may lay her young: your altars, O Lord of hosts, my King and my God: blessed are they who dwell in your house, they shall praise you for ever and ever.",
      mode: "Communion · Ordinary Time · Mode I",
      gabc: "(c2) PAs(fi)ser(i) *() in(i)vé(i)nit(ig~) si(hj)bi(j) do(hi)mum,(hi) (,) et(gh~) tur(fg~)tur(gh~) ni(fg)dum,(g.) (;) u(g)bi(g) re(g)pó(iv.iii)nat(g_[oh:h]f) pul(f)los(exegf) su(f_[oh:h]g_[oh:h]d_[oh:h])os :(d.) (:) al(f)tá(gih)ri(h)a(h) tu(j)a(jh) Dó(jk)mi(j)ne(iih) vir(fi~)tú(iv.iii)tum,(hg..) (;) Rex(h_fh) me(ghF'D)us,(d.) (,) et(d!f'g) De(ghf)us(fef) me(deD'C)us :(c.) (:) be(fgd)á(f)ti(fg) qui(gd) há(fh)bi(gh)tant(fg/h_g) (,) in(ig~) do(ij)mo(kjk) tu(igjvIH)a,(h.) (;) in(f) saé(hih)cu(g)lum(ge~) saé(ghgh)cu(g)li(fge.) (,) lau(ef/gf/gh~)dá(d)bunt(d!ewf_d) te.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1090)"
    }
  },
  "ot-15-a": {
    gradual: {
      title: "Custodi me Domine",
      latin: "Custódi me, Dómine, ut pupíllam óculi : sub umbra alárum tuárum prótege me. ℣. De vultu tuo judícium meum pródeat : óculi tui vídeant aequitátem.",
      translation: "Keep me, O Lord, as the apple of your eye: protect me under the shadow of your wings. ℣. Let my judgment come forth from your countenance: let your eyes behold what is right.",
      mode: "Gradual · Ordinary Time (Years A & C) · Mode I",
      gabc: "(c4) CU(d)stó(d)di(cd) me,(ff//egF'EfvEDe[ll:1]d..) (,) * Dó(dfe/f_g)mi(feede)ne,(dv.cd!ffd/ffvDCfgfff'1d) (,) (ffd'e//fgdevDCdc..) (;) ut(fg) pu(f)píl(f!hgh)lam(ixhihhg) ó(f)cu(fvED)li :(d.0/[-0.5]ef'!gvF'ED.fgf'gvF'ED.) (:) sub(dcf) um(hfh)bra(h/jjh/jggf.0) (,) a(f)lá(hfhGF//hf/ghjvv)rum(hj) tu(gf)á(fv.egffvED)rum(df..) (,) (cd'f/hfh/!ghf/!f'gf/gffe.) (;) pró(f_d/f!gwhgh)te(hgffd/f/[1]{/[-1]ix}f/hiGF'hvGF')ge(gffvD'Cffc) (,) (fgfg) me.(ixhg/hiGF'ghgh'//jvHG'hvF'D//fff/d_[oh:h]e_[oh:h]d._[oh:h]) (::) ℣. De(cd) vul(ixdh'!iv)tu(h) tu(h)o(hg/hhg/hh) (,) (gh!jjjh//jvvIH'jggf.0) (;) ju(dh)dí(h/jjh)ci(h/jjh)um(h.) me(hg/h/jjjg/ihhg)um(g) pród(i)e(jvIH)at :(h_[oh:h]i_[oh:h]h._[oh:h]) (:) ó(hj)cu(h_f)li(g) tu(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiG'F//ghF'Dfv.e!gwhgh)i(ixhf/higff/ded.) (:) ví(dfED'fvED.//de!fg/hjIH'hgh.)(,)(ixfh!ivGF'E//f!gwh!ivHG)de(hg)ant(g.) *(;) ae(g)qui(gh)tá(ixjhiGF'h!jjvH'G)tem.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1088)"
    }
  },
  "ot-15-b": {
    gradual: {
      title: "Ostende nobis Domine",
      latin: "Osténde nobis, Dómine, misericórdiam tuam : et salutáre tuum da nobis. ℣. Benedixísti, Dómine, terram tuam : avertísti captivitátem Jacob.",
      translation: "Show us, O Lord, your mercy: and grant us your salvation. ℣. You have blessed your land, O Lord: you have turned away the captivity of Jacob.",
      mode: "Gradual · Ordinary Time (Year B) · Mode II",
      gabc: "(c3) OS(d)tén(ef)de(fd) no(ef)bis,(f.) *(,) Dó(f_)mi(d)ne,(b//dde/dddb) (,) (dd/ec'dvBA'//db'/cbba.) (;) mi(ba)se(de)ri(d)cór(ef)di(f)am(e[ll:1]d~) tu(ef!hh/ig'hvFEhhe/gf)am :(f.) (:) et(f) sa(hh)lu(ivHF)tá(hg)re(i_[uh:l]j) tu(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF)um(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) da(de'fhvGFgef) no(hf/h_i)bis.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Be(f)ne(h)di(hi)xí(i)sti,(ij) Dó(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI)mi(ji)ne,(i.) (:) ter(i!jw!kvJI'jw!kvJI)ram(ij~) tu(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)am :(f.) (:) a(hh)ver(hi)tí(ivH'GE//fhGEfh..)(,)(gi!jvHF)sti(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) ca(d)pti(ef)vi(f)tá(f.0/[-0.5]hvGF'g)tem(ef) () * Ja(hf/h_i)cob.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1055)"
    }
  },
  "ot-15-c": {
    gradual: {
      title: "Custodi me Domine",
      latin: "Custódi me, Dómine, ut pupíllam óculi : sub umbra alárum tuárum prótege me. ℣. De vultu tuo judícium meum pródeat : óculi tui vídeant aequitátem.",
      translation: "Keep me, O Lord, as the apple of your eye: protect me under the shadow of your wings. ℣. Let my judgment come forth from your countenance: let your eyes behold what is right.",
      mode: "Gradual · Ordinary Time (Years A & C) · Mode I",
      gabc: "(c4) CU(d)stó(d)di(cd) me,(ff//egF'EfvEDe[ll:1]d..) (,) * Dó(dfe/f_g)mi(feede)ne,(dv.cd!ffd/ffvDCfgfff'1d) (,) (ffd'e//fgdevDCdc..) (;) ut(fg) pu(f)píl(f!hgh)lam(ixhihhg) ó(f)cu(fvED)li :(d.0/[-0.5]ef'!gvF'ED.fgf'gvF'ED.) (:) sub(dcf) um(hfh)bra(h/jjh/jggf.0) (,) a(f)lá(hfhGF//hf/ghjvv)rum(hj) tu(gf)á(fv.egffvED)rum(df..) (,) (cd'f/hfh/!ghf/!f'gf/gffe.) (;) pró(f_d/f!gwhgh)te(hgffd/f/[1]{/[-1]ix}f/hiGF'hvGF')ge(gffvD'Cffc) (,) (fgfg) me.(ixhg/hiGF'ghgh'//jvHG'hvF'D//fff/d_[oh:h]e_[oh:h]d._[oh:h]) (::) ℣. De(cd) vul(ixdh'!iv)tu(h) tu(h)o(hg/hhg/hh) (,) (gh!jjjh//jvvIH'jggf.0) (;) ju(dh)dí(h/jjh)ci(h/jjh)um(h.) me(hg/h/jjjg/ihhg)um(g) pród(i)e(jvIH)at :(h_[oh:h]i_[oh:h]h._[oh:h]) (:) ó(hj)cu(h_f)li(g) tu(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiG'F//ghF'Dfv.e!gwhgh)i(ixhf/higff/ded.) (:) ví(dfED'fvED.//de!fg/hjIH'hgh.)(,)(ixfh!ivGF'E//f!gwh!ivHG)de(hg)ant(g.) *(;) ae(g)qui(gh)tá(ixjhiGF'h!jjvH'G)tem.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1088)"
    }
  },

  /* ---- 16th Sunday in Ordinary Time (ot-16) --------------------------- *
   * Introit "Ecce Deus". Alleluia/Offertory common; Gradual by year (A
   * "Domine Dominus noster" / C "Si ambulem"); Communion (A & B "Acceptabis"
   * / C "Optimam partem").                                                 */
  "ot-16": {
    alleluia: {
      title: "Eripe me de inimicis",
      latin: "Allelúia. ℣. Eripe me de inimícis meis, Deus meus : et ab insurgéntibus in me líbera me.",
      translation: "Alleluia. ℣. Deliver me from my enemies, O my God: and rescue me from those who rise up against me.",
      mode: "Alleluia · Ordinary Time · Mode II",
      gabc: "(f3) AL(ef~)le(f/hfghvGE./[-0.5]f'1//hf/gf)lú(ef~){ia}.(f'hvGF.) *(;) ij.(f'ivHG'F//g'hvGF'fe.) (,) (f'ivHG'F//e!hhhvGFggf.0) (::) ℣. E(ef)ri(f)pe(fg/h_f/g_[oh:h]e//fg!hvGF'ef~) me(f.) (,) de(fg) in(e)i(f)mí(f)cis(fi~) me(ivvHF'E)is,(f.) (;) De(i_[oh:h]h/i_[oh:h]hivHF'E)us(f.) me(h_g/h_ghvGF'E)us :(f'hvGF.) (:) et(f) ab(f) in(hg~)sur(hi~)gén(iv.hihf!gwhgh/!fgf/!fe//fg!hvGF'Ef.)(;)(fg!h'i//hihf!gwhgh/fgffe//fg!hvGF'Ef.)(,)(fg!h'i)ti(f_e)bus(e_[oh:h]c) in(ef~) me(f'hvGF.) (;) * lí(ef)be(f/hfghvGE./[-0.5]f'1//hf/gf)ra(ef~) me.(f'hvGF.) (;) (f'ivHG'F//g'hvGF'fe.) (,) (f'ivHG'F//e!hhhvGFggf.0) (::)",
      source: "Graduale Romanum (GregoBase #879)"
    },
    offertory: {
      title: "Justitiae Domini",
      latin: "Justítiae Dómini rectae, laetificántes corda, et dulcióra super mel et favum : nam et servus tuus custódiet ea.",
      translation: "The justices of the Lord are right, rejoicing hearts, and sweeter than honey and the honeycomb: for your servant keeps them.",
      mode: "Offertory · Ordinary Time · Mode IV",
      gabc: "(c4) JU(d)stí(f)ti(fff)ae(f!gwhg/h_g) Dó(f)mi(fg!hvGF'g)ni(gf..) (,) * re(fff!gwhgh)ctae,(gf..) (;) lae(fff)ti(d!ew!fvEC)fi(d)cán(f)tes(fff) cor(f!gwhghv_G~F~)da,(gf..) (:) et(fd~) dul(fg)ci(fg'h)ó(hggf/ghGF'g)ra(gf..) (;) su(f)per(d) mel(df'!gv) et(g_[oh:h]f) fa(f.d!ewf/ge//fddcd)vum :(dc..) (:) nam(c!fff) et(fe~) ser(gh)vus(f_e) tu(fhg___)us(g.) (;) cu(f)stó(h_f/hgh)di(gf)et(fv.fffcfv) e(fv.fffhvGFgvFE)a.(e.) (::)",
      source: "Graduale Romanum (GregoBase #591)"
    }
  },
  "ot-16-a": {
    gradual: {
      title: "Domine Dominus noster",
      latin: "Dómine, Dóminus noster, quam admirábile est nomen tuum in univérsa terra! ℣. Quóniam eleváta est magnificéntia tua super caelos.",
      translation: "O Lord, our Lord, how admirable is your name in all the earth! ℣. For your magnificence is exalted above the heavens.",
      mode: "Gradual · Ordinary Time (Year A) · Mode V",
      gabc: "(c4) DO(ffg)mi(f)ne(f.) (,) * Dó(ghgh)mi(gf)nus(ffhg) no(f)ster,(fffvDC'dff//h_g/hggf.0) (:) quam(ixhih) ad(hg~)mi(gj)rá(j)bi(ixkjjhi)le(i_[oh:h]h) est(fh) (,) no(h)men(g.f!gw!hvGF'g) tu(ghg___)um(g.) (;) in(h) u(hg)ni(gj)vér(j)sa(ixj.h!iw!jvIG'hw!ivHG) ter(fgf)ra!(f!h'j) (,) (fh'!jvjv'1IG//fhg/hggf.0) (z0::c3) ℣. Quó(d)ni(d)am(d) e(d)le(fe)vá(eh)ta(h) est(h_[oh:h]i_[oh:h]h_2[oh:h]//i_[oh:h]hjvHF.1) (,) (h_g/ijh'___ jvIH'jvIH'//hvGF.) (:) ma(f)gni(fe)fi(h)cén(h)ti(gh)a(f_e//fhe/f_e) tu(de!fvED'e)a(e[ll:1]d..) (;) * su(de)per(f) cae(fhG'Fhhh)los.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1205)"
    },
    communion: {
      title: "Acceptabis sacrificium",
      latin: "Acceptábis sacrifícium justítiae, oblatiónes et holocáusta, super altáre tuum, Dómine.",
      translation: "You will accept the sacrifice of justice, oblations and holocausts, upon your altar, O Lord.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode IV",
      gabc: "(c4) AC(d)ce(dh)ptá(ixhv.fg'high)bis(eef.) *(,) sa(dg)cri(g)fí(ixhig/hi)ci(h)um(h) ju(ixhv.fghig/h_g)stí(e)ti(egff)ae,(eef.) (:) ob(fd)la(fe)ti(fg)ó(g)nes(d!ewf.) et(fd) ho(ef)lo(g)cáu(ixgh/ihhg~)sta,(hg..) (;) su(ge/ghGE'f)per(d!ewf) al(cd'f~)tá(fv.fffdg)re(g) tu(ghf)um,(d!ewf) Dó(e)mi(egff)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1221)"
    }
  },
  "ot-16-b": {
    communion: {
      title: "Acceptabis sacrificium",
      latin: "Acceptábis sacrifícium justítiae, oblatiónes et holocáusta, super altáre tuum, Dómine.",
      translation: "You will accept the sacrifice of justice, oblations and holocausts, upon your altar, O Lord.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode IV",
      gabc: "(c4) AC(d)ce(dh)ptá(ixhv.fg'high)bis(eef.) *(,) sa(dg)cri(g)fí(ixhig/hi)ci(h)um(h) ju(ixhv.fghig/h_g)stí(e)ti(egff)ae,(eef.) (:) ob(fd)la(fe)ti(fg)ó(g)nes(d!ewf.) et(fd) ho(ef)lo(g)cáu(ixgh/ihhg~)sta,(hg..) (;) su(ge/ghGE'f)per(d!ewf) al(cd'f~)tá(fv.fffdg)re(g) tu(ghf)um,(d!ewf) Dó(e)mi(egff)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #1221)"
    }
  },
  "ot-16-c": {
    gradual: {
      title: "Si ambulem",
      latin: "Si ámbulem in médio umbrae mortis, non timébo mala : quóniam tu mecum es, Dómine. ℣. Virga tua, et báculus tuus, ipsa me consoláta sunt.",
      translation: "Though I should walk in the midst of the shadow of death, I will fear no evils: for you are with me, O Lord. ℣. Your rod and your staff, they have comforted me.",
      mode: "Gradual · Ordinary Time (Year C) · Mode I",
      gabc: "(c4) SI(d) ám(fg)bu(gvF'EfvED'e)lem(e[ll:1]d..) *(,) in(f) mé(ghgh)di(hjH'GF'gwhgh)o(hg..) (,) um(hv.fg'h)brae(g) mor(fv.dfe)tis,(d//ffd/fhhg.) (;) non(dh) ti(hg)mé(h'/jij)bo(hv.fh!jvH'GF'g) ma(fv.dfe)la :(d!ffd) (,) (fge'/fgd'/e[ll:1]ddc.) (:) quó(f)ni(d)am(e) tu(f) me(ghgh./gh/jj//jjj)cum(g) es,(hg/hfg) (,) Dó(d)mi(d)ne.(dc/d!ff/ghG'Efgff/ded.) (::) ℣. Vir(h_f hvhggef)ga(d.) tu(dc/d!ff/gh!jjg)(,)(ixhhghvGF./[-0.5]hiHG'hw!ivHGhi)a,(h.) (;) et(dh) bá(h/jjh)cu(h!jjh)lus(h_g) tu(hg/h!jjjg ivHG'gf/gh/j.h!iwj_h)us,(h.) (:) i(h_f//hvhggef)psa(de) me(d_c/d!ewf!gv.fg!hvFEfg!hvhg.) *(,) con(g)so(gh)lá(ixjhiGF'h!jjvH'Gh')ta(d) sunt.(dc/d!ff/ghG'Efgff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #1121)"
    },
    communion: {
      title: "Optimam partem",
      latin: "Óptimam partem elégit sibi María, quae non auferétur ab ea in aetérnum.",
      translation: "Mary has chosen the best part, which shall not be taken away from her for ever.",
      mode: "Communion · Ordinary Time (Year C) · Mode VIII",
      gabc: "(c4) OP(gg)ti(g)mam(gh~) par(hvGF//g.h!iwjg)tem(g.) *(,) e(gh)lé(jkjk)git(ij~) si(h)bi(hvGF') Ma(h)rí(hj/I'G)a,(g.) (:) quæ(g) non(hih) au(g)fe(e)ré(f/fg)tur(gvFED.) ab(fg) e(g)a(ghg'h) (,) in(f) æ(ghg)tér(h!jj/hi~)num.(g.) (::)",
      source: "Graduale Romanum (GregoBase #3316)"
    }
  },

  /* ---- 17th Sunday in Ordinary Time (ot-17) --------------------------- *
   * Introit "Deus in loco sancto". Alleluia/Offertory common; Gradual by year
   * (A "In Deo speravit" / B "Oculi omnium"); Communion by year (A "Simile
   * est", B "Honora Dominum", C "Petite et accipietis").                   */
  "ot-17": {
    alleluia: {
      title: "Exsultate Deo",
      latin: "Allelúia. ℣. Exsultáte Deo adjutóri nostro, jubiláte Deo Jacob : súmite psalmum jucúndum cum cíthara.",
      translation: "Alleluia. ℣. Rejoice in God our helper, sing aloud to the God of Jacob: take up a pleasant psalm with the harp.",
      mode: "Alleluia · Ordinary Time · Mode VII",
      gabc: "(c2) AL(c)le(cfe)lú(fg~){ia}.(g.) (,) * ij.(ffg/e!g'h//fhg___!hwi_[oh:h]g.e.[ll:1]d!ewf/gffc) (,) (fffd/!/!fe/!gf/!fvD'C/!d_ed/!dc.) (::) ℣. Ex(cd)sul(c)tá(cfe)te(fg) De(ghF'Ef_g)o(g.) (;) ad(g)ju(g)tó(g)ri(i.g!hw!ivHG) no(ghF'Ef_g)stro,(ghfgvFEfe..) (:) ju(ef)bi(e)lá(e.f!gwh)te(hghvFDgv.) (,) De(gffvE'DC)o(ddc.) Ja(c.d!ewf'!gv)cob :(ghF'Efg..) (:) sú(c)mi(cfe)te(fg) psal(g!hwi/ji/!ig!hwi_[oh:h]hivH~G~)mum(h_g) (,) ju(g)cún(g)dum(i.g!hwi_[oh:h]hivHGhg..) *(;) cum(gd~) cí(dfe)tha(fg)ra.(g.) (,) (ffg/e!g'h//fhg___!hwi_[oh:h]g.e.[ll:1]d!ewf/gffc) (,) (fffd/!/!fe/!gf/!fvD'C/!d_ed/!dc.) (::)",
      source: "Graduale Romanum (GregoBase #580)"
    },
    offertory: {
      title: "Exaltabo te Domine",
      latin: "Exaltábo te, Dómine, quóniam suscepísti me, nec delectásti inimícos meos super me : Dómine, clamávi ad te, et sanásti me.",
      translation: "I will extol you, O Lord, for you have upheld me, and have not let my enemies rejoice over me: O Lord, I cried to you, and you healed me.",
      mode: "Offertory · Ordinary Time · Mode II",
      gabc: "(c3) EX(c)al(e)tá(egf)bo(f) te(f.) *(,) Dó(f)mi(f!hhh)ne,(fefe..) (;) quó(hh)ni(fef)am(f/hhh//giH'GhvGFgf..) (,) sus(fhF'Ef')ce(d)pí(df!hvF'D)sti(d_[oh:h]e_[oh:h]d_[oh:h]) me,(d.) (:) nec(f/hhi) de(f!hhh)le(f!hhh)ctá(e/fgf)sti(fe/f!hhhvFE'ece.) (;) in(c)i(c)mí(ef)cos(fe~) me(f/hh/i_[oh:h]h)os(h.) (,) su(hi/jij)per(h_f/ih'/ihhe/f!gw!hvGFgv_[oh:h]F~E~) me :(fe..) (:) Dó(fh/ih)mi(ivHF)ne(fefvECe.) (,) cla(ec~)má(ef)vi(fe) ad(f/hh/i_[oh:h]h) te,(h.) (;) et(h) sa(f!gwhg)ná(hhhvF'Ef/hhhvF'E//fgf/gf/hhh)sti(f_[oh:h]g_[oh:h]f_[oh:h]) me.(f.) (::)",
      source: "Graduale Romanum (GregoBase #648)"
    }
  },
  "ot-17-a": {
    gradual: {
      title: "In Deo speravit",
      latin: "In Deo sperávit cor meum, et adjútus sum : et reflóruit caro mea : et ex voluntáte mea confitébor illi. ℣. Ad te, Dómine, clamávi : Deus meus, ne síleas, ne discédas a me.",
      translation: "In God has my heart hoped, and I have been helped: and my flesh has flourished again: and with my will I shall give praise to him. ℣. To you, O Lord, I have cried: my God, be not silent, depart not from me.",
      mode: "Gradual · Ordinary Time (Year A) · Mode V",
      gabc: "(c4) IN(d) De(ffg)o(f.) *(,) spe(f)rá(fg)vit(f) cor(ghgh) me(hvGF'fvED)um,(e[ll:1]d..) (;) et(fe) ad(fg~)jú(ggf)tus(g) sum :(fe/fg/hghvGFgf..) (;) et(fg) re(f)fló(gh)ru(gf)it(f.) (,) ca(f)ro(g) me(f)a :(fv.d!ff/ge'/fgd'/e[ll:1]ddc.) (:) et(h) ex(f) vo(g)lun(h)tá(hj/kjk)te(j) me(ixi_[oh:h]h)a(iii/ghg.___) (;) con(ixih~)fi(i)té(jv.ikJI'ivH'GF)bor(ggf.0) (,) il(gf/ggf/gff//gf~)li.(gv.fgff'f//f'hg/hggf.0) (z0::c3) ℣. Ad(d) te,(f) Dó(fh/ih/ijh)mi(h)ne,(h.) (,) cla(h)má(h)vi :(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___ jvIH'jvIH'//hvGF.) (:) De(f!h'i)us(ih/jkihhf.) (`) me(hf/hhh)us,(h.f!gwh!iv.hi/jhh/iih.0) (:) ne(f) sí(h_f//g_0[uh:l]h_[uh:l]i!jwk)le(i_[oh:h]hivHFhhh)as :(h.) (;) ne(d) di(d)scé(dfE'D)das(ef) *() a(fhG'Fhhh) me.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #865)"
    },
    communion: {
      title: "Simile est regnum caelorum",
      latin: "Símile est regnum caelórum hómini negotiatóri, quaerénti bonas margarítas : invénta una pretiósa margaríta, dedit ómnia sua, et comparávit eam.",
      translation: "The kingdom of heaven is like a merchant seeking good pearls: having found one precious pearl, he gave all that he had, and bought it.",
      mode: "Communion · Ordinary Time (Year A) · Mode VIII",
      gabc: "(c4) SI(ggh)mi(g)le(g) est(g) * re(g)gnum(d) cae(g)ló(giH'G)rum(g.) (;) hó(jij)mi(hg)ni(g) ne(h)go(i.h!iwj)ti(hg)a(hi)tó(hhgh)ri,(g.) (,) quae(g)rén(g_[oh:h])ti(d) bo(eg)nas(fv.efd) mar(d)ga(e)rí(gh)tas :(ghg.) (:) in(gh~)vén(jjjk~)ta(j.) (,) u(j)na(j) pre(j)ti(jh)ó(ijhi)sa(gh) mar(d)ga(e)rí(gh)ta,(gh/igh.) (;) de(e')dit(f) ó(g')mni(f)a(e') su(f)a,(efd.1) (,) et(gh) com(d)pa(g)rá(g/jjh)vit(ih) e(ghg___)am.(g.) (::)",
      source: "Graduale Romanum (GregoBase #673)"
    }
  },
  "ot-17-b": {
    gradual: {
      title: "Oculi omnium",
      latin: "Óculi ómnium in te sperant, Dómine : et tu das illis escam in témpore opportúno. ℣. Áperis tu manum tuam : et imples omne ánimal benedictióne.",
      translation: "The eyes of all hope in you, O Lord: and you give them food in due season. ℣. You open your hand: and fill every living creature with blessing.",
      mode: "Gradual · Ordinary Time (Year B) · Mode VII",
      gabc: "(c2) O(c.d!ewff)cu(gffvED)li(d_c) *(,) ó(cd/ede)mni(cd!evDC'd)um(dc..) (;) in(cf) te(fg) spe(g'hvGF')rant,(gffe~) (,) Dó(fg)mi(g)ne :(gigivvHGhg/j_i//hjii/ghg.) (:) et(f) tu(h/iji) das(i_[oh:h]h) il(iiiv_[oh:h]H~G~)lis(ghgg/efe.) (;) e(ef!gh!ivGF'Ef_g)scam(ghff'fvE'DCdc..) (;) in(cd) tém(fe/f_g)po(gefvEDef)re(e./fgf'/gd//evDCdc..) (;) op(cd)por(fe~)tú(fgf)no.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::) ℣. A(g)pe(hgge/f'/gffe/g'/hgge//f'/gff)(,)(d!fffvDC'd!ff//eg!hvFEghG'Fgh)ris(gh) tu(g.) (;) ma(gigivvHGhg/j_i)num(i_[oh:h]h) (,) tu(hjI'HG)am :(gv.d_f!g!hw!ivHF'iv//hig/hhg.) (:) et(ghG'E) im(f!gwh)ples(g'/hg'/hff'f/gddc//dc/ded.) (,) o(cd)mne(c) á(c)ni(c.d!ew!fvED'e)mal(dc..) *(;) be(cd)ne(fe)di(fgf)cti(ge)ó(fg)ne.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #1230)"
    },
    communion: {
      title: "Honora Dominum",
      latin: "Honóra Dóminum de tua substántia, et de primítiis frugum tuárum : ut impleántur hórrea tua saturitáte, et vino torculária redundábunt.",
      translation: "Honor the Lord with your substance, and with the first of your fruits: that your barns may be filled with abundance, and your presses overflow with wine.",
      mode: "Communion · Ordinary Time (Year B) · Mode VI",
      gabc: "(c4) HO(d)nó(ffg)ra(f) * Dó(ghgh)mi(gf)num(f.) (,) de(f) tu(fv.egF'D)a(d_c) sub(ixfv.eg!hvi.g!hw!ivHG')stán(f)ti(fg!hvGF'g)a,(gf..) (:) et(f) de(f) pri(hj)mí(j)ti(ixkjjhi)is(i_[oh:h]h) (,) fru(ixh.g!hwi)gum(h) tu(ghg)á(fg!hvGF'g)rum :(gf..) (:) ut(f) im(f)ple(h!iwj)án(jij)tur(h_gh.) hór(k)re(j)a(ij) tu(hjggfg)a(g_[oh:h]f_[oh:h]) (,) sa(fge)tu(e!g'h)ri(gh)tá(f_[oh:h]g_[oh:h]f_[oh:h])te,(f.) (:) et(fh~) vi(hgh)no(hg/hffg.) (,) tor(c)cu(d!ewf)lá(f)ri(ef)a(d_cd.) (,) red(fge)un(ixeg!hvi.g!hw!ivHG)dá(fg!hvGF'g)bunt.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #1145)"
    }
  },
  "ot-17-c": {
    communion: {
      title: "Petite et accipietis",
      latin: "Pétite, et accipiétis : quaérite, et inveniétis : pulsáte, et aperiétur vobis : omnis enim qui petit, áccipit : et qui quaerit, ínvenit : pulsánti aperiétur.",
      translation: "Ask, and you shall receive: seek, and you shall find: knock, and it shall be opened to you: for everyone who asks, receives: and he who seeks, finds: to him who knocks it shall be opened.",
      mode: "Communion · Ordinary Time (Year C) · Mode I",
      gabc: "(c4) PE(fg)ti(h)te,(g.) *(,) et(g) ac(ge)ci(fg)pi(fe)é(d_[oh:h]e_[oh:h]d_[oh:h])tis :(d.) (;) quaé(f)ri(ef)te,(d.) (,) et(d) in(dc~)ve(dfe)ni(f)é(f_devDC'd)tis :(dc..) (;) pul(cd)sá(d!ewf!gvFE'fwgfg)te,(gf..) (,) et(fg) a(f)pe(ffe)ri(dc)é(df)tur(ef~) vo(d_[oh:h]e_[oh:h]d_[oh:h])bis :(d.) (:) o(fg'h)mnis(g) e(gh)nim(g) qui(g) pe(g)tit,(ge) ác(fg)ci(efED'e)pit :(e[ll:1]d..) (;) et(gh) qui(g) quae(g)rit,(ge) ín(fg)ve(ef_E'_DC'd)nit :(cd/e[ll:1]d..) (:) pul(cd)sán(f.e!fwgfg)ti(gf..) (,) a(ffe)pe(fg'h)ri(f_e)é(de!fvED'e)tur.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #422)"
    }
  },

  /* ---- 18th Sunday in Ordinary Time (ot-18) --------------------------- *
   * Introit keys ot-18-a (Year A) / ot-18-b (Years B & C) in introits.js;
   * the day resolves with dayKey "ot-18" + cycle, so common propers live on
   * the base ot-18 key here. Gradual A "Oculi omnium" / B & C "Benedicam";
   * Offertory A & B "Precatus est Moyses" / C "Sanctificavit Moyses";
   * Alleluia & Communion common.                                          */
  "ot-18": {
    alleluia: {
      title: "Domine Deus salutis meae",
      latin: "Allelúia. ℣. Dómine Deus salútis meae, in die clamávi, et nocte coram te.",
      translation: "Alleluia. ℣. O Lord, the God of my salvation, I have cried in the day, and in the night before you.",
      mode: "Alleluia · Ordinary Time · Mode III",
      gabc: "(c4) AL(e)le(egfefE'Dee[ll:1]d)lú(g!hwi'!jv){ia}.(ih) *(,) ij.(jvIHjji//gh/ihhg) (;) (gh!jvvIGhh//gh/i_[oh:h]g) (,) (gh!jvvIGhhvGF//ghg/hgge.) (::) ℣. Dó(efE'D)mi(g)ne(hjj) De(j)us(ih/jkJH'Ghhg.) (,) sa(hih)lú(iji)tis(h_g/h!iwj) me(ikJ'I)ae,(i.) (:) in(g) di(g!jj)e(i_[oh:h]h) cla(i)má(g/hhf/gg//egee[ll:1]d/ef)vi,(e.) (;) et(e) no(egf)cte(ef'g) () * co(hiH'G)ram(g'hj) te.(ih) (,) (jvIHjji//gh/ihhg) (;) (gh!jvvIGhh//gh/i_[oh:h]g) (,) (gh!jvvIGhhvGF//ghg/hgge.) (::)",
      source: "Graduale Romanum (GregoBase #1082)"
    },
    communion: {
      title: "Panem de caelo",
      latin: "Panem de caelo dedísti nobis, Dómine, habéntem omne delectaméntum, et omnem sapórem suavitátis.",
      translation: "You gave us bread from heaven, O Lord, having in it all delight, and every taste of sweetness.",
      mode: "Communion · Ordinary Time · Mode V",
      gabc: "(c3) PA(dde)nem(d) de(df) cae(feede)lo(e_[oh:h][ll:1]d) (,) * de(d)dí(ef)sti(hffe) no(hhi)bis,(h) Dó(hji)mi(ihhf)ne,(f.) (;) ha(f)bén(hi~)tem(h) o(h)mne(hhh) de(fg'h)le(e_[oh:h][ll:1]d)cta(fdf)mén(fe/gf)tum,(f.) (:) et(f) o(hi~)mnem(i) sa(ih)pó(i_[oh:h]hivH'GF'g)rem(g_[oh:h]f) (,) su(fhd)a(de'f)vi(gxfhFE'fw!gvFE)tá(de!fvED'e)tis.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #388)"
    }
  },
  "ot-18-a": {
    gradual: {
      title: "Oculi omnium",
      latin: "Óculi ómnium in te sperant, Dómine : et tu das illis escam in témpore opportúno. ℣. Áperis tu manum tuam : et imples omne ánimal benedictióne.",
      translation: "The eyes of all hope in you, O Lord: and you give them food in due season. ℣. You open your hand: and fill every living creature with blessing.",
      mode: "Gradual · Ordinary Time (Year A) · Mode VII",
      gabc: "(c2) O(c.d!ewff)cu(gffvED)li(d_c) *(,) ó(cd/ede)mni(cd!evDC'd)um(dc..) (;) in(cf) te(fg) spe(g'hvGF')rant,(gffe~) (,) Dó(fg)mi(g)ne :(gigivvHGhg/j_i//hjii/ghg.) (:) et(f) tu(h/iji) das(i_[oh:h]h) il(iiiv_[oh:h]H~G~)lis(ghgg/efe.) (;) e(ef!gh!ivGF'Ef_g)scam(ghff'fvE'DCdc..) (;) in(cd) tém(fe/f_g)po(gefvEDef)re(e./fgf'/gd//evDCdc..) (;) op(cd)por(fe~)tú(fgf)no.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::) ℣. A(g)pe(hgge/f'/gffe/g'/hgge//f'/gff)(,)(d!fffvDC'd!ff//eg!hvFEghG'Fgh)ris(gh) tu(g.) (;) ma(gigivvHGhg/j_i)num(i_[oh:h]h) (,) tu(hjI'HG)am :(gv.d_f!g!hw!ivHF'iv//hig/hhg.) (:) et(ghG'E) im(f!gwh)ples(g'/hg'/hff'f/gddc//dc/ded.) (,) o(cd)mne(c) á(c)ni(c.d!ew!fvED'e)mal(dc..) *(;) be(cd)ne(fe)di(fgf)cti(ge)ó(fg)ne.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #1230)"
    },
    offertory: {
      title: "Precatus est Moyses",
      latin: "Precátus est Móyses in conspéctu Dómini Dei sui, et dixit : Quare, Dómine, irásceris in pópulo tuo? Parce irae ánimae tuae : meménto Abraham, Isaac et Jacob, quibus jurásti dare terram fluéntem lac et mel. Et placátus factus est Dóminus de malignitáte, quam dixit fácere pópulo suo.",
      translation: "Moses prayed in the sight of the Lord his God, and said: Why, O Lord, are you angry with your people? Let the anger of your soul be appeased: remember Abraham, Isaac and Jacob, to whom you swore to give a land flowing with milk and honey. And the Lord was appeased from the wrath which he had threatened against his people.",
      mode: "Offertory · Ordinary Time (Years A & B) · Mode VIII",
      gabc: "(c3) PRe(e)cá(fhe)tus(d!ewfef) est(f_e) (,) * Mó(f)y(h)ses(hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(fe..) (;) et(e) di(e!hhe/ff//df!hvED'db//cd!efe)xit.(e.) (:) Pre(e)cá(fhe/fe)tus(d!ewfef) est(f_e) (,) Mó(f)y(h)ses(hg/hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(eb..) (;) et(b) di(b!ddb//cd!efe)xit :(e.) (:) Qua(ehhi)re,(hi) Dó(h)mi(ivHF)ne,(efe.) (,) i(e)rá(e!hh//hhhffee[ll:1]d!ewf!gvFE)sce(fe)ris(e.) (;) in(d) pó(efe/fg)pu(f)lo(f) tu(e.[ll:1]d!ewfef)o?(fe..) (:) Par(de/f!hhhhi~)ce(g) i(h)rae(efe.) (,) á(hhi)ni(f)mae(efe) tu(ffeg'FEfvEDef!gvFE'f)ae :(fe..) (:) me(e)mén(ei'!jv)to(i) A(i)bra(i)ham,(i!jw!kvJI) (,) I(hi)sa(gh)ac(iih.0) (,) et(hv.hh//hhh_g/hi!kvJI) Ja(hi)cob,(i_[oh:h]e/f_[oh:h]g_[oh:h]f._[oh:h]) (;) qui(d)bus(e) ju(f)rá(fi)sti(h) da(hg)re(f) ter(h)ram(hh//hhh) (,) flu(e)én(f)tem(e[ll:1]d~) lac(e.) (`) et(e!fwgf/g_[oh:h]f/hhf/hhvFD'ew!fvEDef) mel.(e.) (:) Et(d) pla(f)cá(h)tus(hf~) fa(hi'j)ctus(i) est(hiHF.1) (,) Dó(h!iwj_i)mi(i.h!iwjij)nus(ji..) (;) de(iv.hhhh_i) ma(e)li(f)gni(g)tá(g)te,(iv.hhhh_i) (;) quam(fe~) di(h!iwj_i)xit(j) fá(ijhh)ce(hv.fh!ivHG'h)re(hg..) (;) pó(i_[oh:h]h)pu(h)lo(ihhf/hhhhv'1GE//fhfhvFD.1) (,) (ef!hvvGF'gw!hvGF) su(ef!gvFE'f)o.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #325)"
    }
  },
  "ot-18-b": {
    gradual: {
      title: "Benedicam Dominum",
      latin: "Benedícam Dóminum in omni témpore : semper laus ejus in ore meo. ℣. In Dómino laudábitur ánima mea : áudiant mansuéti, et laeténtur.",
      translation: "I will bless the Lord at all times: his praise shall ever be in my mouth. ℣. In the Lord shall my soul be praised: let the meek hear, and rejoice.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode VII",
      gabc: "(c3) BE(ef)ne(e)dí(ef!hhhffe)cam(e_[uh:l]f) (,) * Dó(ef'h)mi(hhh)num(h.0/[-0.5]ijhh'hvF'E) (,) (hhhfhvGE'fe'//hf/gffe.) (;) in(e) o(ehg~)mni(hi) tém(i)po(ihkvJIkvJI)re :(ig/hi!kvvI'H//i!jwk/lkk/iji.) (,) (hj/iji/jg/hih/ihhg.) (:) sem(gh'i)per(jki/jhhg) laus(gh!i!jwk) e(ih/ih/ijI'H)jus(hhh_e) (,) (fgf'j//iji'/jhh'ih/ihhg.) (;) in(hf) o(h!iwjij)re(jihhf/hh/jkIH'jvIH') me(ihhvF'Ehhe)(,)(hihi)o.(ji/jkIH'ijij'lvJI'jvH'F//hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (::) ℣. In(e) Dó(ef'h)mi(hhh)no(h.0/[-0.5]ijhh'hvF'E) (,) (hhhfhvGE'fe'//hf/gffe.) (;) lau(gh'i~)dá(i)bi(h)tur(h_g) á(h_g/hji)ni(ihhvGF)ma(g_[oh:h]f) (,) me(hf/hhvF'Ef!gwh_g)a :(hhhvGF'he//fvEDe[ll:1]d..) (:) áu(e)di(d.c!dwed/ef)ant(e.) man(d)su(f)é(h_0ivH'//Ef.)(,)(f!gwh'!ivH'//Ef./h_[oh:h]i_[oh:h]f.1_[oh:h])(,)(i/jg/hiH'GF.)(,)(i/jg/hiH'GF.hghFE.)(,)(ih/ijI'H)ti,(hhhvF'Effe/ff) (,) (ef!hhhf//hvvGF'he//fvEDe[ll:1]d..) (;) * et(ef) lae(hg)tén(hi)tur.(ijIH'hghv.) (,) (ijIH'hgiv.kkkh/ijIG.hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1182)"
    },
    offertory: {
      title: "Precatus est Moyses",
      latin: "Precátus est Móyses in conspéctu Dómini Dei sui, et dixit : Quare, Dómine, irásceris in pópulo tuo? Parce irae ánimae tuae : meménto Abraham, Isaac et Jacob, quibus jurásti dare terram fluéntem lac et mel. Et placátus factus est Dóminus de malignitáte, quam dixit fácere pópulo suo.",
      translation: "Moses prayed in the sight of the Lord his God, and said: Why, O Lord, are you angry with your people? Let the anger of your soul be appeased: remember Abraham, Isaac and Jacob, to whom you swore to give a land flowing with milk and honey. And the Lord was appeased from the wrath which he had threatened against his people.",
      mode: "Offertory · Ordinary Time (Years A & B) · Mode VIII",
      gabc: "(c3) PRe(e)cá(fhe)tus(d!ewfef) est(f_e) (,) * Mó(f)y(h)ses(hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(fe..) (;) et(e) di(e!hhe/ff//df!hvED'db//cd!efe)xit.(e.) (:) Pre(e)cá(fhe/fe)tus(d!ewfef) est(f_e) (,) Mó(f)y(h)ses(hg/hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(eb..) (;) et(b) di(b!ddb//cd!efe)xit :(e.) (:) Qua(ehhi)re,(hi) Dó(h)mi(ivHF)ne,(efe.) (,) i(e)rá(e!hh//hhhffee[ll:1]d!ewf!gvFE)sce(fe)ris(e.) (;) in(d) pó(efe/fg)pu(f)lo(f) tu(e.[ll:1]d!ewfef)o?(fe..) (:) Par(de/f!hhhhi~)ce(g) i(h)rae(efe.) (,) á(hhi)ni(f)mae(efe) tu(ffeg'FEfvEDef!gvFE'f)ae :(fe..) (:) me(e)mén(ei'!jv)to(i) A(i)bra(i)ham,(i!jw!kvJI) (,) I(hi)sa(gh)ac(iih.0) (,) et(hv.hh//hhh_g/hi!kvJI) Ja(hi)cob,(i_[oh:h]e/f_[oh:h]g_[oh:h]f._[oh:h]) (;) qui(d)bus(e) ju(f)rá(fi)sti(h) da(hg)re(f) ter(h)ram(hh//hhh) (,) flu(e)én(f)tem(e[ll:1]d~) lac(e.) (`) et(e!fwgf/g_[oh:h]f/hhf/hhvFD'ew!fvEDef) mel.(e.) (:) Et(d) pla(f)cá(h)tus(hf~) fa(hi'j)ctus(i) est(hiHF.1) (,) Dó(h!iwj_i)mi(i.h!iwjij)nus(ji..) (;) de(iv.hhhh_i) ma(e)li(f)gni(g)tá(g)te,(iv.hhhh_i) (;) quam(fe~) di(h!iwj_i)xit(j) fá(ijhh)ce(hv.fh!ivHG'h)re(hg..) (;) pó(i_[oh:h]h)pu(h)lo(ihhf/hhhhv'1GE//fhfhvFD.1) (,) (ef!hvvGF'gw!hvGF) su(ef!gvFE'f)o.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #325)"
    }
  },
  "ot-18-c": {
    gradual: {
      title: "Benedicam Dominum",
      latin: "Benedícam Dóminum in omni témpore : semper laus ejus in ore meo. ℣. In Dómino laudábitur ánima mea : áudiant mansuéti, et laeténtur.",
      translation: "I will bless the Lord at all times: his praise shall ever be in my mouth. ℣. In the Lord shall my soul be praised: let the meek hear, and rejoice.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode VII",
      gabc: "(c3) BE(ef)ne(e)dí(ef!hhhffe)cam(e_[uh:l]f) (,) * Dó(ef'h)mi(hhh)num(h.0/[-0.5]ijhh'hvF'E) (,) (hhhfhvGE'fe'//hf/gffe.) (;) in(e) o(ehg~)mni(hi) tém(i)po(ihkvJIkvJI)re :(ig/hi!kvvI'H//i!jwk/lkk/iji.) (,) (hj/iji/jg/hih/ihhg.) (:) sem(gh'i)per(jki/jhhg) laus(gh!i!jwk) e(ih/ih/ijI'H)jus(hhh_e) (,) (fgf'j//iji'/jhh'ih/ihhg.) (;) in(hf) o(h!iwjij)re(jihhf/hh/jkIH'jvIH') me(ihhvF'Ehhe)(,)(hihi)o.(ji/jkIH'ijij'lvJI'jvH'F//hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (::) ℣. In(e) Dó(ef'h)mi(hhh)no(h.0/[-0.5]ijhh'hvF'E) (,) (hhhfhvGE'fe'//hf/gffe.) (;) lau(gh'i~)dá(i)bi(h)tur(h_g) á(h_g/hji)ni(ihhvGF)ma(g_[oh:h]f) (,) me(hf/hhvF'Ef!gwh_g)a :(hhhvGF'he//fvEDe[ll:1]d..) (:) áu(e)di(d.c!dwed/ef)ant(e.) man(d)su(f)é(h_0ivH'//Ef.)(,)(f!gwh'!ivH'//Ef./h_[oh:h]i_[oh:h]f.1_[oh:h])(,)(i/jg/hiH'GF.)(,)(i/jg/hiH'GF.hghFE.)(,)(ih/ijI'H)ti,(hhhvF'Effe/ff) (,) (ef!hhhf//hvvGF'he//fvEDe[ll:1]d..) (;) * et(ef) lae(hg)tén(hi)tur.(ijIH'hghv.) (,) (ijIH'hgiv.kkkh/ijIG.hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1182)"
    },
    offertory: {
      title: "Sanctificavit Moyses",
      latin: "Sanctificávit Móyses altáre Dómino, ófferens super illud holocáusta, et ímmolans víctimas : fecit sacrifícium vespertínum in odórem suavitátis Dómino Deo, in conspéctu filiórum Israel.",
      translation: "Moses consecrated an altar to the Lord, offering upon it holocausts, and sacrificing victims: he made an evening sacrifice for an odor of sweetness to the Lord God, in the sight of the children of Israel.",
      mode: "Offertory · Ordinary Time (Year C) · Mode V",
      gabc: "(c4) SAn(fg)cti(f)fi(ghg)cá(ixhiH'G)vit(h_ghvGF.) (,) * Mó(f)y(h)ses(h!iwj/kjj/hih.) (;) al(f)tá(hj)re(jv.jjj_h) Dó(h)mi(h_[oh:h]i_[oh:h]h_[oh:h])no,(h.) (:) óf(hj)fe(gh)rens(gfg) su(ghG'F)per(fg) il(ixhgg'g//ggg_[oh:h]f/gih)lud(h.) (,) ho(h!iwj)lo(g/jjvHG'gfg)cáu(f.e!fwg!hvGF'g)sta,(gf..) (:) et(f.0h!iwj'!kv) ím(jk)mo(jvIH)lans(jj) ví(jk!lvKJ)cti(j_[hl:1]k_[hl:1]j_[hl:1])mas :(j.) (;) fe(jk)cit(jji) sa(jjj)cri(h!iw!jvIG')fí(h/jjj)ci(j_[hl:1]k_[hl:1]j_[hl:1])um(j.) ve(jk)sper(jvI~H~)tí(h_[oh:h]i_[oh:h]h_[oh:h])num(h.) (;) in(h) o(hf)dó(hj)rem(j'/kjj) su(j)a(j)vi(h)tá(h_g//hjg___hvGF'g)tis(gf..) (,) Dó(h!iwj)mi(g)no(fg/hgh) De(h_[oh:h]i_[oh:h]h_[oh:h])o,(h.) (:) in(h) con(j)spé(j_h/jjg/h//jjvH'Fg_[oh:h]f)ctu(fgff//df/gffgD'Cd_[oh:h]e_[oh:h]d._[oh:h]) (;) fi(c)li(d)ó(f)rum(gf~) Is(f)ra(gh)el.(hv.gh!jjvHG'ge//f_[oh:h]g_[oh:h]e_[oh:h]!fwggf.0) (::)",
      source: "Graduale Romanum (GregoBase #838)"
    }
  },

  /* ---- 19th Sunday in Ordinary Time (ot-19) --------------------------- *
   * Introit "Respice Domine in testamentum". Offertory common; Gradual A
   * "Ostende nobis" / B "Beata gens"; Alleluia A "Domine refugium" (B & C
   * not assigned); Communion A & B "Panis quem" / C "Beatus servus".       */
  "ot-19": {
    offertory: {
      title: "In te speravi Domine",
      latin: "In te sperávi, Dómine : dixi : Tu es Deus meus, in mánibus tuis témpora mea.",
      translation: "In you have I hoped, O Lord: I said: You are my God, my times are in your hands.",
      mode: "Offertory · Ordinary Time · Mode II",
      gabc: "(f3) IN(c) te(ef'g) spe(f)rá(h.f!gwh/i_[oh:h]h)vi,(hhhvGEf!gw!hvGF') (,) * Dó(f)mi(f!gwhgh)ne :(gf..) (:) di(fh)xi :(hhh/i_[uh:l]j) (,) Tu(hiH'F) es(f.) De(f!gw!hvGF)us(ef) me(f!gwh/ihhgh)us,(hg..) (:) in(hh) má(hi/jij)ni(h)bus(hhvGF) tu(hh/i_[oh:h]h)is(h.) (;) tém(h_f/hhvF'E//f!hhh)po(f_e)ra(egf) me(f_[oh:h]g_[oh:h]f_[oh:h])a.(f.) (::)",
      source: "Graduale Romanum (GregoBase #967)"
    }
  },
  "ot-19-a": {
    gradual: {
      title: "Ostende nobis Domine",
      latin: "Osténde nobis, Dómine, misericórdiam tuam : et salutáre tuum da nobis. ℣. Benedixísti, Dómine, terram tuam : avertísti captivitátem Jacob.",
      translation: "Show us, O Lord, your mercy: and grant us your salvation. ℣. You have blessed your land, O Lord: you have turned away the captivity of Jacob.",
      mode: "Gradual · Ordinary Time (Year A) · Mode II",
      gabc: "(c3) OS(d)tén(ef)de(fd) no(ef)bis,(f.) *(,) Dó(f_)mi(d)ne,(b//dde/dddb) (,) (dd/ec'dvBA'//db'/cbba.) (;) mi(ba)se(de)ri(d)cór(ef)di(f)am(e[ll:1]d~) tu(ef!hh/ig'hvFEhhe/gf)am :(f.) (:) et(f) sa(hh)lu(ivHF)tá(hg)re(i_[uh:l]j) tu(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF)um(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) da(de'fhvGFgef) no(hf/h_i)bis.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Be(f)ne(h)di(hi)xí(i)sti,(ij) Dó(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI)mi(ji)ne,(i.) (:) ter(i!jw!kvJI'jw!kvJI)ram(ij~) tu(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)am :(f.) (:) a(hh)ver(hi)tí(ivH'GE//fhGEfh..)(,)(gi!jvHF)sti(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) ca(d)pti(ef)vi(f)tá(f.0/[-0.5]hvGF'g)tem(ef) () * Ja(hf/h_i)cob.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1055)"
    },
    alleluia: {
      title: "Domine refugium",
      latin: "Allelúia. ℣. Dómine, refúgium factus es nobis a generatióne et progénie.",
      translation: "Alleluia. ℣. Lord, you have been our refuge from generation to generation.",
      mode: "Alleluia · Ordinary Time (Year A) · Mode VII",
      gabc: "(c3) AL(ef)le(e)lú(ehg/ij){ia}.(ijIG.) *(,) ij.(h!iwjij//hiH'Gh.) (;) (fh'!jv//hji/jhhvG'E//f!gwhg) (,) (ijh./ghF'Ef_gffe.) (::) ℣. Dó(e.f!gwhghvGF'fe//f!gwh_g/hihi)mi(ji)ne,(i.) (;) re(i)fú(ijh//ijIG.hiH'Gh_iH'F)gi(f!gw!hvG'FEfg)um(fe..) (;) fa(h!iwji)ctus(ihhg) es(fhGF'g) no(e/hhf/ijH'Gh.)(,)(f!gwh'!iv//gihhvGF)bis(f!gwh_fgvFEfe..) (:) a(eg/ih) ge(gh)ne(gf)ra(gh)ti(g)ó(iv//jkihjihhe.)(;)(gi//jkihjihhe.)(,)(fhg___/hif/!fe/f!gw!hvGF'g)ne(fe..) *(;) et(eg/iV!gh~) pro(h)gé(hgi)ni(ji)e.(ijIG.) (,) (h!iwjij//hiH'Gh.) (;) (fh'!jv//hji/jhhvG'E//f!gwhg) (,) (ijh./ghF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #820)"
    },
    communion: {
      title: "Panis quem ego dedero",
      latin: "Panis, quem ego dédero, caro mea est pro saéculi vita.",
      translation: "The bread that I will give is my flesh for the life of the world.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode I",
      gabc: "(c4) PA(ixdg!hih)nis,(h.) (,) * quem(h) e(hhg/hggf//{/[-2]ix}g'/igh)go(h) dé(h_fg)de(h)ro,(g.) (;) ca(h)ro(g) me(ghg'/hd//fg!hvG//D')a(d) est(d.) (:) pro(g) saé(ggf/g_[oh:h]d//ef/h_g/hfg)cu(f.e!fwgfg)li(g_[oh:h]f) (,) vi(hjh'jvG'FE.)(,)(gh/jhjvGF'fvED'ew!fvED'e)ta.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #782)"
    }
  },
  "ot-19-b": {
    gradual: {
      title: "Beata gens",
      latin: "Beáta gens, cujus est Dóminus Deus eórum : pópulus, quem elégit Dóminus in hereditátem sibi. ℣. Verbo Dómini caeli firmáti sunt : et spíritu oris ejus omnis virtus eórum.",
      translation: "Blessed is the nation whose God is the Lord: the people whom he has chosen for his inheritance. ℣. By the word of the Lord the heavens were established: and all their power by the spirit of his mouth.",
      mode: "Gradual · Ordinary Time (Year B) · Mode I",
      gabc: "(c4) BE(d)á(ff)ta(gffe//fhG'Fg_[oh:h]d) gens,(d.) *(;) cu(d)jus(d) est(ff) Dó(g_[oh:h]fh)mi(h)nus(h.) (,) De(hjhhg)us(g_[oh:h]f) e(fe)ó(ggfghvG__Fg_[oh:h]f)rum :(f.) (:) pó(hhghjjjvIH)pu(h_[oh:h]i_[oh:h]h_[oh:h])lus,(h.) (;) quem(f) e(ghg)lé(hvvG'FE'fwgfg)git(g_[oh:h]f_[oh:h]) (,) Dó(gffvED)mi(e[ll:1]d)nus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) in(f) he(d)re(e)di(f)tá(ghgh//ijii)tem(ih..) (,) si(h)bi.(ghGEf_g//fgFDf_h//ghGEf_g//fgFD.1) (::) ℣. Ver(dh)bo(h) Dó(hjhhghGF.)(,)(ixhiHG'hw!ivHGhi)mi(h)ni(iyhjH'Gh!jjh//jjjvIH'jggf.0) (;) cae(h_[hl:1]k_[hl:1]j_[hl:1]kvJH'i)li(h.) fir(hg~)má(h!iwj)ti(g) sunt :(fh/jh/ih..) (:) et(f) spí(ghghjhhggf!gwh_g)ri(h)tu(g.) (,) o(h_fh)ris(g_[oh:h]fg) e(fg)jus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) o(f_d/ff!gwhgh//jkjj'jvH'G/[-0.5]{ix}F0'gwh!iv_[oh:h]H~G~)mnis(h_g) vir(gh~)tus(g) *(,) e(gh)ó(ixjhiGF'h!jjvH'G)rum.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1044)"
    },
    communion: {
      title: "Panis quem ego dedero",
      latin: "Panis, quem ego dédero, caro mea est pro saéculi vita.",
      translation: "The bread that I will give is my flesh for the life of the world.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode I",
      gabc: "(c4) PA(ixdg!hih)nis,(h.) (,) * quem(h) e(hhg/hggf//{/[-2]ix}g'/igh)go(h) dé(h_fg)de(h)ro,(g.) (;) ca(h)ro(g) me(ghg'/hd//fg!hvG//D')a(d) est(d.) (:) pro(g) saé(ggf/g_[oh:h]d//ef/h_g/hfg)cu(f.e!fwgfg)li(g_[oh:h]f) (,) vi(hjh'jvG'FE.)(,)(gh/jhjvGF'fvED'ew!fvED'e)ta.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #782)"
    }
  },
  "ot-19-c": {
    communion: {
      title: "Beatus servus",
      latin: "Beátus servus, quem, cum vénerit Dóminus, invénerit vigilántem : amen dico vobis, super ómnia bona sua constítuet eum.",
      translation: "Blessed is that servant whom, when the Lord comes, he shall find watching: amen I say to you, he will set him over all his goods.",
      mode: "Communion · Ordinary Time (Year C) · Mode III",
      gabc: "(c2) BE(exdde)á(cf)tus(f) ser(g_[oh:h]f/g!hwihi)vus,(ih..) *(,) quem,(hj) cum(h) vé(jkj)ne(i)rit(hvGF) Dó(h_i)mi(h)nus,(h.) (,) in(fh~)vé(h)ne(ghg)rit(ef) vi(g)gi(fe)lán(df)tem :(c.) (:) a(cd)men(f) di(fe)co(d) vo(fvEC)bis,(c.) (,) su(f)per(g) ó(i)mni(h)a(g) bo(g)na(f) su(g)a(f_g) (,) con(gf~)stí(g!hwi)tu(f)et(exfgF'Efgf) e(exdfee)um.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1154)"
    }
  },

  /* ---- 20th Sunday in Ordinary Time (ot-20) --------------------------- *
   * Introit "Protector noster". Gradual/Offertory common; Alleluia A "Caro
   * mea" / C "Venite exsultemus" (B not assigned); Communion A "Domus mea",
   * B "Qui manducat carnem", C "Primum quaerite".                          */
  "ot-20": {
    gradual: {
      title: "Bonum est confidere",
      latin: "Bonum est confídere in Dómino, quam confídere in hómine. ℣. Bonum est speráre in Dómino, quam speráre in princípibus.",
      translation: "It is good to trust in the Lord, rather than to trust in man. ℣. It is good to hope in the Lord, rather than to hope in princes.",
      mode: "Gradual · Ordinary Time · Mode V",
      gabc: "(c4) BO(ff)num(fg) est(fef.) (,) * con(f)fí(ixg!hwi)de(gf)re(fgFD.1) (,) in(d) Dó(dgf/gh)mi(g)no,(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) quam(ixhih) con(hg~)fí(gj)de(jjh)re(ixhv.fhg___/hiH'GF'fhvGFgf..) (,) in(fg) hó(g)mi(gff)ne.(dec.) (,) (fhg___/jkijh.fhg/hggf.0) (z0::c3) ℣. Bo(d)num(f) est(gxfh/ih/i_[oh:h]h//ivFD'//fh.ivFD'f!hfg.) (,) (fh/ih/i_[oh:h]h//ivFD'e_[oh:h][ll:1]d.0ddd/f_h/ijh.1) (;) spe(hi)rá(h)re(hg) in(ij) Dó(i_[oh:h]h)mi(h)no,(hg/i_[oh:h]h//jvIH'Ghf..) (:) quam(hh) spe(h)rá(ih/ij_h ih/ij_ij//hi/jij)re(jh/jkihh/fgf.) (;) * in(de'f) prin(f)cí(fhGF')pi(i)bus.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff/dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #547)"
    },
    offertory: {
      title: "Immittet Angelus",
      latin: "Immíttet Angelus Dómini in circúitu timéntium eum, et erípiet eos : gustáte et vidéte, quóniam suávis est Dóminus.",
      translation: "The angel of the Lord shall encamp around those who fear him, and shall deliver them: taste and see that the Lord is sweet.",
      mode: "Offertory · Ordinary Time · Mode VIII",
      gabc: "(c4) IM(gh~)mít(hv.fhg)tet(g.) *(,) An(g!jj//jjj)ge(h)lus(ghg.) Dó(h!iwjjvIG)mi(h!iwjjvIG)ni(h!iwj/kjji.) (;) in(j) cir(hg~)cú(j'/ki'/jh')i(h)tu(f_[oh:h]g_[oh:h]f._[oh:h]) (,) ti(hg)mén(hg/jj//jjj)ti(hg)um(ixgv.fh!ivHG) e(ghg___)um,(g.) (:) et(g) e(gh/ji)rí(jjvIG)pi(h!iwji)et(j.) e(jjh/jkjkvJI)os :(j.) (:) gu(ji)stá(jv.jjj/kjk)te(h_g) (,) et(g) vi(hji)dé(jkj'/ki'jvH'GjjvIH'iwj)te,(g.) (;) quó(gh)ni(gf)am(g) su(h)á(h/jjj)vis(g) est(h_g/h!iwj/kjji.) (;) Dó(j'/kj'/ki'jvH'Fg.)(,)(fgh!jvvIH'iw!jvIH)mi(gh!ivHG'h)nus.(hg..) (::)",
      source: "Graduale Romanum (GregoBase #747)"
    }
  },
  "ot-20-a": {
    alleluia: {
      title: "Caro mea vere est cibus",
      latin: "Allelúia. ℣. Caro mea vere est cibus, et sanguis meus vere est potus : qui mandúcat meam carnem, et bibit meum sánguinem, in me manet, et ego in eo.",
      translation: "Alleluia. ℣. My flesh is true food, and my blood is true drink: he who eats my flesh and drinks my blood abides in me, and I in him.",
      mode: "Alleluia · Ordinary Time (Year A) · Mode VII",
      gabc: "(c3) AL(d)le(efdeffe)lú(df!hvGFhh){ia}.(e.) *(;) ij.(hvijj/h/ii//efE'Dffe.) (,) (h'/ig'hvF'ED'C[ull:0]B.e.f!gwhhvG'FEffe.) (::) ℣. Ca(eh)ro(h_gfge) me(fe)a(e.) (,) ve(d)re(efef) est(f) ci(hvGF'ge)bus,(e.) (;) et(ei) san(iv.jkj/!jvIHjh/ij)guis(i) me(ij)us(i.) (,) ve(ij)re(i) est(i) po(j!kwljkvJIjvIHi)tus :(i.) (:) qui(ij) man(i)dú(ij/kljkvJIjvIHi)cat(i.) (;) me(eijvIH'hvGF'E)am(fe) car(de)nem,(e/ffe.) (;) et(e) bi(ehg)bit(hi) me(i./jkj/!jvIH'Ghih)um(i.) (,) sán(hv.fhG'FE'D//fg)gui(fe)nem,(e.) (;) in(d) me(efdeffe) ma(df!hvGFhh)net,(e.) (;) et(h) e(ijj)go(h) *() in(i) e(i)o.(efE'Dffe.) (,) (h'/ig'hvF'ED'C[ull:0]B.e.f!gwhhvG'FEffe.) (::)",
      source: "Graduale Romanum (GregoBase #774)"
    },
    communion: {
      title: "Domus mea",
      latin: "Domus mea, domus oratiónis vocábitur, dicit Dóminus : in ea omnis, qui petit, áccipit : et qui quaerit, ínvenit, et pulsánti aperiétur.",
      translation: "My house shall be called a house of prayer, says the Lord: in it everyone who asks, receives: and he who seeks, finds, and to him who knocks it shall be opened.",
      mode: "Communion · Ordinary Time (Year A) · Mode V",
      gabc: "(c4) DO(g)mus(fg) me(gh!ivHG'h)a,(hg..) (,) * do(jjk)mus(j) o(f)ra(g)ti(hj)ó(j)nis(g) vo(ixi)cá(ihi)bi(f)tur,(ixg_[uh:l]i) (,) di(ixi)cit(g_[oh:h]i_[oh:h]g_[oh:h]!hw!ivHG') Dó(f)mi(fg!hvGF'g)nus :(gf..) (:) in(f) e(gh)a(h) o(ixhg/higgf~)mnis,(f) qui(f) pe(hj)tit,(j) ác(jij)ci(h_[oh:h]i_[oh:h]h_[oh:h])pit :(h.) (;) et(hj~) qui(j) quae(j)rit,(ij) ín(h)ve(ixf!gwhg/hi)nit,(h.) (;) et(h) pul(j)sán(j_hjvIG'h)ti(f_g) a(fh)pe(g!jij)ri(h)é(f_[oh:h]g_[oh:h]f_[oh:h])tur.(f.) (::)",
      source: "Graduale Romanum (GregoBase #43)"
    }
  },
  "ot-20-b": {
    communion: {
      title: "Qui manducat carnem",
      latin: "Qui mandúcat carnem meam, et bibit sánguinem meum, in me manet, et ego in eo, dicit Dóminus.",
      translation: "He who eats my flesh and drinks my blood abides in me, and I in him, says the Lord.",
      mode: "Communion · Ordinary Time (Year B) · Mode VI",
      gabc: "(c4) QUI(c) man(d)dú(ff)cat(f.) *() car(f)nem(f) me(gfhvGF)am,(f.) (;) et(f) bi(fg'h)bit(h_g) sán(hj)gui(j)nem(j) me(jhjvIH)um,(h.) (;) in(hg~) me(h!iwj) ma(ghGF'g)net,(gf..) (:) et(d) e(d!fff)go(d_c) in(fdf) e(gfg)o,(g.) (;) di(ixiihivHGh_g//hff)cit(f) Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])nus.(f.) (::)",
      source: "Graduale Romanum (GregoBase #798)"
    }
  },
  "ot-20-c": {
    alleluia: {
      title: "Venite exsultemus",
      latin: "Allelúia. ℣. Veníte, exsultémus Dómino : jubilémus Deo salutári nostro.",
      translation: "Alleluia. ℣. Come, let us rejoice in the Lord: let us sing joyfully to God our Savior.",
      mode: "Alleluia · Ordinary Time (Year C) · Mode VII",
      gabc: "(c2) AL(c)le(c)lú([oh:h{]f_eg){ia}.(ghGF'fd.) *(;) ij.(fgf___[oh}]ff'g//fff/ghffc.) (,) (fdf./efD'Cd_eddc.) (::) ℣. Ve(c)ní(cfe/gh)te,(g.) (;) ex(g)sul(gf~)té(g/iig)mus(ghfgvFEfe..) (,) Dó(f_[oh:h]g_[oh:h]e_[oh:h])mi(fgF'E)no :(f.g!hwihhg.) (:) ju(g)bi(g_[oh:h]e)lé(f!gwhgh)mus(g.) (,) De(g!iig//f_hGF'fhGF'fvE'DC)o(ddc.) (;) sa(cd)lu(c)tá(c.d!ewfef)ri(e.) (,) * no(f_[oh:h]g_[oh:h]f_[oh:h]fe/f!gwhgh)stro.(g/iig/he/f_g) (;) (d!ewf'!gv//iig/he/f_g) (,) (g/iii_[oh:h]g//jkI'GiivG'Fiig.) (,) (g/iifhvGF'fc.) (;) (dffe/fhGF'Dgf/gffc.) (,) (fffvD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #1246)"
    },
    communion: {
      title: "Primum quaerite",
      latin: "Primum quaérite regnum Dei, et ómnia adjiciéntur vobis, dicit Dóminus.",
      translation: "Seek first the kingdom of God, and all things shall be added unto you, says the Lord.",
      mode: "Communion · Ordinary Time (Year C) · Mode VIII",
      gabc: "(c4) PRi(ggh)mum(g) quaé(g)ri(fef)te(d.) (,) * re(fe~)gnum(fg~) De(giH'G)i,(g.) (:) et(j) ó(jij)mni(hg)a(g.) ad(h)ji(i)ci(j)én(h)tur(gi~) vo(hhgh)bis,(g.) (;) di(gee[ll:1]d/geg)cit(g) Dó(g)mi(ghg___)nus.(g.) (::)",
      source: "Graduale Romanum (GregoBase #868)"
    }
  },

  /* ---- 21st Sunday in Ordinary Time (ot-21) --------------------------- *
   * Introit "Inclina Domine". Gradual/Offertory/Communion (De fructu) common;
   * Alleluia A "Tu es Petrus" / B "Spiritus est" / C "Quoniam Deus magnus";
   * Year B communion "Qui manducat carnem".                                */
  "ot-21": {
    gradual: {
      title: "Bonum est confiteri",
      latin: "Bonum est confitéri Dómino, et psállere nómini tuo, Altíssime. ℣. Ad annuntiándum mane misericórdiam tuam, et veritátem tuam per noctem.",
      translation: "It is good to give praise to the Lord, and to sing to your name, O Most High. ℣. To proclaim your mercy in the morning, and your truth throughout the night.",
      mode: "Gradual · Ordinary Time · Mode V",
      gabc: "(c4) BO(ff)num(fg) est(ff//d!ff/ge'/fgd'/e[ll:1]ddc.) (;) * con(f)fi(h)té(jh/jjj)ri(j_ik) Dó(k_[hl:1]j)mi(j_i)no :(jjh) (,) (jjh//jkjj/hih.) (:) et(hj) psál(h!j'k)le(jk)re(jj) (,) nó(hj/kjk)mi(j)ni(ij) tu(hg/h!jjkvJI)o,(j.) (;) Al(jj)tís(jkJ'Hjkjk)si(j_i)me.(jjjh/jjjh/jjh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. Ad(d_) an(f)nun(d)ti(f)án(h.0/ijh)dum(h.) (,) ma(h)ne(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___//jvIH'jvIH'//hvGF.) (:) mi(hh)se(h)ri(h)cór(ih/ij_h ih/ij_ij//hi/jij)di(j)am(jh/jkihhf.) (,) tu(hf/hhh)am,(h.f!gwh!iv.hi/jhh/iih.0) (:) et(hh) ve(h)ri(h)tá(h)tem(hi~) tu(ivH'GE//fhGEfh..)(,)(gi!jvHF)am(fhF'Efhhf//hvvGF'hee[ll:1]d.0) *(:) per(hh) no(hiH'Fhihi)ctem.(hhhf/hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #1338)"
    },
    offertory: {
      title: "Exspectans exspectavi",
      latin: "Exspéctans exspectávi Dóminum, et respéxit me : et exaudívit deprecatiónem meam : et immísit in os meum cánticum novum, hymnum Deo nostro.",
      translation: "With expectation I have waited for the Lord, and he was attentive to me: and he heard my prayer: and he put a new song into my mouth, a hymn to our God.",
      mode: "Offertory · Ordinary Time · Mode V",
      gabc: "(c3) EX(f)spé(f!hhhi)ctans(hi) *(,) ex(h)spe(i)ctá(iki/j_k)vi(i) Dó(h)mi(hhh)num,(fh..) (;) et(e) re(f)spé(hv.hhh//h'ih)xit(hi!jv_I~H~) me :(ih..) (:) et(f) ex(f!h'i)au(iih~)dí(hiH'G)vit(hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (,) de(f)pre(f)ca(f!hhf)ti(e)ó(fh/i_[oh:h]h)nem(hi~) me(ihhf//hih/i.f!gwh_f)am,(f.) (:) et(e) im(f)mí(hh)sit(ijhh/fgf.) (,) in(f) os(fhhg/hgg) me(eh/ghf/ggf)um(f.) (;) cán(hh)ti(f_e)cum(fef) no(hi)vum,(hg/hiih.0) (:) hy(h)mnum(hhhffe~) De(f_d/ef!ivH'GE)o(fef) no(f/hhvF'EDe_[uh:l]fE'D)stro.(d.) (::)",
      source: "Graduale Romanum (GregoBase #182)"
    },
    communion: {
      title: "De fructu operum",
      latin: "De fructu óperum tuórum, Dómine, satiábitur terra : ut edúcas panem de terra, et vinum laetíficet cor hóminis : ut exhílaret fáciem in óleo, et panis cor hóminis confírmet.",
      translation: "The earth shall be filled with the fruit of your works, O Lord: that you may bring bread out of the earth, and that wine may cheer the heart of man: that he may make the face cheerful with oil, and that bread may strengthen man's heart.",
      mode: "Communion · Ordinary Time · Mode VI",
      gabc: "(c4) DE(f) fru(gh)ctu(h) *() ó(h)pe(g)rum(g) tu(g)ó(h)rum,(gf~) Dó(g)mi(f)ne,(f_e) (,) sa(f)ti(ghg)á(h)bi(g)tur(fe~) ter(f!gwhgh)ra :(gf..) (:) ut(f) e(f)dú(gh)cas(f) pa(g)nem(f) de(e) ter(fg)ra,(f.) (;) et(f) vi(ixfg/ihi)num(h) lae(h)tí(jhhgh)fi(f)cet(fg'h) cor(fe) hó(d)mi(de!fvED'e)nis :(e[ll:1]d..) (:) ut(fg'h) ex(h)hí(ixjhi)la(ghGF'g)ret(gf..) (,) fá(fg)ci(f)em(f) in(fd) ó(ef)le(deDC'd)o,(dc..) (;) et(ec~) pa(de'f)nis(gfg) cor(fe) hó(f)mi(ixgi)nis(hiG'F) con(f)fír(ef~)met.(f.) (::)",
      source: "Graduale Romanum (GregoBase #1245)"
    }
  },
  "ot-21-a": {
    alleluia: {
      title: "Tu es Petrus",
      latin: "Allelúia. ℣. Tu es Petrus, et super hanc petram aedificábo Ecclésiam meam.",
      translation: "Alleluia. ℣. You are Peter, and upon this rock I will build my Church.",
      mode: "Alleluia · Ordinary Time (Year A) · Mode II",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Tu(hi) es(i) Pe(jiihi)trus,(iv.hh/fgf.) (;) et(f) su(fg)per(f) hanc(f) pe(f!hh/ijHF'ivH'GEf./hfhhf/ge)tram(e.) (:) ae(f)di(e)fi(f)cá(ffe/ffe/fc..)(,)(ef!hvvF'Ehhh)bo(ivH'Ghf..) (;) Ec(f)clé(hh)si(h)am(hi~) *() me(i_[oh:h]h/jij)am.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #228)"
    }
  },
  "ot-21-b": {
    alleluia: {
      title: "Spiritus est qui vivificat",
      latin: "Allelúia. ℣. Spíritus est, qui vivíficat : caro autem non prodest quidquam.",
      translation: "Alleluia. ℣. It is the Spirit that gives life: the flesh profits nothing.",
      mode: "Alleluia · Ordinary Time (Year B) · Mode VIII",
      gabc: "(c4) AL(g)le(g)lú(gh!jvI~H~){ia}.(jkJ//G'//hvG'Fg.) *(;) (dg/hggf//h'/jh'/i_[oh:h]g.) (,) (dg/hggf//h'/ijg.) (::) ℣. Spí(gg)ri(g)tus(gi) est(ijI'G//hihhg.) (,) qui(gh) vi(gd)ví(g)fi(gh!ivHG'h)cat :(hg..) (:) ca(g)ro(g_[oh:h]e//fgF'EfvED) au(gh!ivHG'h)tem(hjg.___) (,) non(gfh) prod(hv.gjh/ih.0/g!jhi)est(hg..) *(;) quid(gh!jvI~H~)quam.(jkJ//G'//hvG'Fg.) (;) (dg/hg/!gf//h'/jh'/i_[oh:h]g.) (,) (dg/hggf//h'/ijg.) (::)",
      source: "Graduale Romanum (GregoBase #1236)"
    },
    communion: {
      title: "Qui manducat carnem",
      latin: "Qui mandúcat carnem meam, et bibit sánguinem meum, in me manet, et ego in eo, dicit Dóminus.",
      translation: "He who eats my flesh and drinks my blood abides in me, and I in him, says the Lord.",
      mode: "Communion · Ordinary Time (Year B) · Mode VI",
      gabc: "(c4) QUI(c) man(d)dú(ff)cat(f.) *() car(f)nem(f) me(gfhvGF)am,(f.) (;) et(f) bi(fg'h)bit(h_g) sán(hj)gui(j)nem(j) me(jhjvIH)um,(h.) (;) in(hg~) me(h!iwj) ma(ghGF'g)net,(gf..) (:) et(d) e(d!fff)go(d_c) in(fdf) e(gfg)o,(g.) (;) di(ixiihivHGh_g//hff)cit(f) Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])nus.(f.) (::)",
      source: "Graduale Romanum (GregoBase #798)"
    }
  },
  "ot-21-c": {
    alleluia: {
      title: "Quoniam Deus magnus Dominus",
      latin: "Allelúia. ℣. Quóniam Deus magnus Dóminus, et Rex magnus super omnem terram.",
      translation: "Alleluia. ℣. For the Lord is a great God, and a great King above all the earth.",
      mode: "Alleluia · Ordinary Time (Year C) · Mode VII",
      gabc: "(c3) AL(e)le(e)lú(ef!hh//hh/i_[uh:l]j){ia}.(i.) *(,) ij.(hi/j_h//ji/jiih//ijhhvGEffe.) (;) (f/hh/iji___/!i/g_[uh:l]hffe.) (,) (fh/ijhhvG'FEffe.) (::) ℣. Quó(ef)ni(e)am(e) De(hh)us(hi'j) ma(i/kkkvI'HG./!hi!jvIH/!i_[oh:h]h/!j_i)gnus(i.) (;) Dó(i_[oh:h]e/fhhe//fhe___e[ll:1]d.0)(,)(f_h//gh!jvIH'hvGF)mi(h.f!gw!hvG'FE'f)nus,(fe..) (:) et(eh) Rex(hi'j) ma(iv.hi!jvHGivHG)(,)(ijIH'i)gnus(ijhivHGhg..) (;) su(h)per(g.h!iwj) o(jijvH'FivH'GE)(,)(f!hgh)mnem(hiH'Ghv.f!gwh/ihhvG'FEfe..) *(,) ter(gh'i~)ram.(iv.hi!kvJIkkkh/ijIG.hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1352)"
    }
  },

  /* ---- 22nd Sunday in Ordinary Time (ot-22) --------------------------- *
   * Introit "Miserere mihi". Gradual/Alleluia/Offertory common; Communion A
   * "Qui vult venire" / B & C "Domine memorabor".                          */
  "ot-22": {
    gradual: {
      title: "Timebunt gentes",
      latin: "Timébunt gentes nomen tuum, Dómine, et omnes reges terrae glóriam tuam. ℣. Quóniam aedificávit Dóminus Sion, et vidébitur in majestáte sua.",
      translation: "The nations shall fear your name, O Lord, and all the kings of the earth your glory. ℣. For the Lord has built up Sion, and he shall be seen in his majesty.",
      mode: "Gradual · Ordinary Time · Mode V",
      gabc: "(c4) TI(d)mé(ff)bunt(gh~) gen(h_fgvFED.g_[oh:h]e/fg)tes(f.) (;) * no(hf/gh!jj/kjk)men(jij) tu(h_g/h/jjvH'GF)um,(h_g~) Dó(f)mi(fg!hvGF'g)ne,(gf..) (:) et(f) o(ghgh)mnes(jhhg) re(h!iwj)ges(j_i) (`) ter(jkJ'IH)rae(hjH'GhjjhjvvIH'jggf.0) (;) gló(fg'hfg'h)ri(gf)am(fv.ef!gvgf.0) (,) tu(f!hhh//gh!jjjhjvvIH'jg./f.0h!iw!jvIH'GF'f//hvGFgf)am.(f.) (z0::c3) ℣. Quó(d)ni(d)am(d) ae(d)di(d)fi(fe)cá(eh)vit(h.) (,) Dó(h)mi(h)nus(ihh'hh_f//hhf/hhegxfgE0/[-0.5]{/[0.5]gy}D0.0/[-0.5]hhjvIH'//hvGF.) (;) Si(hi)on,(i_[oh:h]h/i/kkh i_[oh:h]h/kkkvIH'//hvGF.) (:) et(f) vi(hf)dé(h)bi(hfh)tur(hhhvF'Ef!hhhf/hhhvGF'hee[ll:1]d.0) (;) in(d) ma(d)je(d)stá(dfE'D)te(ef) *() su(fhG'Fhhh)a.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #1173)"
    },
    alleluia: {
      title: "Cantate Domino",
      latin: "Allelúia. ℣. Cantáte Dómino cánticum novum : quia mirabília fecit Dóminus.",
      translation: "Alleluia. ℣. Sing to the Lord a new song: for the Lord has done wondrous deeds.",
      mode: "Alleluia · Ordinary Time · Mode I",
      gabc: "(c4) AL(d)le(ff)lú(gv.f!hgh){ia}.(hjH'GF.) *(;) ij.(e!gwhgh./fhg/hffvEC.) (,) (d!ewf!gv.egF'ED'ewfd.1) (::) ℣. Can(cd)tá(ixdh//gihivGF//ggf/gg//fgh!jjg)(,)(ixhhghvGF.hiHG'hw!ivHGhi)te(h.) (,) Dó(h_g/jjvH'G//ixhihi)mi(g)no(g_[oh:h]f_[oh:h]) (;) cán(f_e/f!gwhgh)ti(hg/hf/ghg)cum(gd~) no(f_e/g_[oh:h]fgvFD'ewfd)vum :(d.) (:) qui(d/ffd/ffd def!gh)a(ghg.) (,) mi(f)ra(ghg)bí(h/jjhhgh.)(,)(ixfh!ivGF'fd/ffhvGF'fvED)li(e[ll:1]d)a(d.) (;) fe(ff)cit(fg) () * Dó(g_[oh:h]f)mi(f!gwhgh)nus.(hjH'GF.) (;) (e!gwhgh./fhg/hffvEC.) (,) (d!ewf!gv.egF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1077)"
    },
    offertory: {
      title: "Domine in auxilium",
      latin: "Dómine, in auxílium meum réspice : confundántur et revereántur, qui quaerunt ánimam meam, ut áuferant eam : Dómine, in auxílium meum réspice.",
      translation: "O Lord, look down to help me: let them be confounded and put to shame who seek my life to take it away: O Lord, look down to help me.",
      mode: "Offertory · Ordinary Time · Mode VI",
      gabc: "(c4) DO(f)mi(fff)ne,(c_[ll:1]d) *(,) in(c) au(d)xí(ff)li(gf)um(fg) me(fg!hvhg)um(ghffg) ré(f)spi(f_[oh:h]g_[oh:h]f_[oh:h])ce :(f.) (:) con(fgf)fun(g_[uh:l]h)dán(hg~)tur(ghGF.) (,) et(f) re(f)ve(f)re(d)án(d!ffdced)tur,(dc/ded.) (;) qui(c) quae(ffg)runt(f) á(g)ni(fg)mam(fe~) me(d!ew!fvED)am,(d.c!dw!evDCd.) (;) ut(c) áu(ffg~)fe(f)rant(fg/hghv_G~F~) e(f)am :(f/ghF'DffvD'Cffc.) (:) Dó(f)mi(fff)ne,(c_[ll:1]d) (,) in(c) au(d)xí(ff)li(gf)um(fg) me(fg!hvhg)um(ghffg) ré(f)spi(f_[oh:h]g_[oh:h]f_[oh:h])ce.(f.) (::)",
      source: "Graduale Romanum (GregoBase #993)"
    }
  },
  "ot-22-a": {
    communion: {
      title: "Qui vult venire post me",
      latin: "Qui vult veníre post me, ábneget semetípsum : et tollat crucem suam, et sequátur me.",
      translation: "Whoever wishes to come after me, let him deny himself: and take up his cross, and follow me.",
      mode: "Communion · Ordinary Time (Year A) · Mode I",
      gabc: "(c4) QUI(d) vult(f) ve(fe)ní(gh)re(ixih) post(fg) me,(fvED.) *(;) áb(ixf!gwhg/hih)ne(g)get(f) se(fe)met(d)í(fg'h)psum :(e.) (:) et(h) tol(ghg)lat(ef) cru(ghgh)cem(f_d) su(gef)am,(f.) (;) et(eg/hjh) se(fg)quá(ef)tur(d!ew!fv_E~C~) me.(d.) (::)",
      source: "Graduale Romanum (GregoBase #89)"
    }
  },
  "ot-22-b": {
    communion: {
      title: "Domine memorabor",
      latin: "Dómine, memorábor justítiae tuae sólius : Deus, docuísti me a juventúte mea : et usque in senéctam et sénium, Deus, ne derelínquas me.",
      translation: "O Lord, I will be mindful of your justice alone: O God, you have taught me from my youth: and unto old age and gray hairs, O God, forsake me not.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode VIII",
      gabc: "(c4) DO(fg'h)mi(g)ne,(g) (,) * me(g)mo(gf)rá(ggfg)bor(d.) (,) ju(d)stí(d/gfg)ti(ge/fd)ae(d) tu(gfg)ae(g.) (,) so(fghjij)lí(jh/ig)us :(g.) (:) De(j)us,(jjj) do(ji)cu(h)í(ij'k)sti(h) me(g.) (,) a(g) ju(g)ven(g)tú(gh/ji)te(ih/jkj) me(ixh_givHF)a,(f.) (:) et(g) us(g.h!iwjjk)que(j) in(h) se(g)né(f/gfg)ctam(d.) (,) et(f) sé(ef'g)ni(ge/fd)um,(d.) (;) De(gfg)us,(ghggf.0) (,) ne(f!h'j) de(f!h'j)re(jh/ig)lín(g)quas(g.f!gwh_g) me.(g.) (::)",
      source: "Graduale Romanum (GregoBase #1318)"
    }
  },
  "ot-22-c": {
    communion: {
      title: "Domine memorabor",
      latin: "Dómine, memorábor justítiae tuae sólius : Deus, docuísti me a juventúte mea : et usque in senéctam et sénium, Deus, ne derelínquas me.",
      translation: "O Lord, I will be mindful of your justice alone: O God, you have taught me from my youth: and unto old age and gray hairs, O God, forsake me not.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode VIII",
      gabc: "(c4) DO(fg'h)mi(g)ne,(g) (,) * me(g)mo(gf)rá(ggfg)bor(d.) (,) ju(d)stí(d/gfg)ti(ge/fd)ae(d) tu(gfg)ae(g.) (,) so(fghjij)lí(jh/ig)us :(g.) (:) De(j)us,(jjj) do(ji)cu(h)í(ij'k)sti(h) me(g.) (,) a(g) ju(g)ven(g)tú(gh/ji)te(ih/jkj) me(ixh_givHF)a,(f.) (:) et(g) us(g.h!iwjjk)que(j) in(h) se(g)né(f/gfg)ctam(d.) (,) et(f) sé(ef'g)ni(ge/fd)um,(d.) (;) De(gfg)us,(ghggf.0) (,) ne(f!h'j) de(f!h'j)re(jh/ig)lín(g)quas(g.f!gwh_g) me.(g.) (::)",
      source: "Graduale Romanum (GregoBase #1318)"
    }
  },

  // ---- 23rd Sunday in Ordinary Time ----
  // Gradual splits by cycle: A & B "Beata gens" / C "Domine refugium".
  // Alleluia, offertory, communion are common to all three years.
  "ot-23": {
    alleluia: {
      title: "Exaudi orationem",
      latin: "Allelúia. ℣. Exáudi oratiónem meam, Dómine, et deprecatiónem meam : áuribus pércipe lácrimas meas : quóniam ádvena ego sum apud te, et peregrínus.",
      translation: "Alleluia. ℣. Hear my prayer, O Lord, and my supplication: give ear to my tears: for I am a sojourner with you, and a pilgrim.",
      mode: "Alleluia · Ordinary Time · Mode VII",
      gabc: "(c2) AL(cg)le(gh)lú(fef){ia}.(g.) (,) * ij.(fg/ih/ijhhg//ivHGivHG//higgfhvGF'fc.) (,) (ege/feevD'Cef!gv'1//hvGE'fddc.) (::) ℣. Ex(cg'!hv)áu(fef)di(g.) (,) o(g)ra(gh)ti(g)ó(gh!i'j)nem(j_k) me(g)am,(giHG.) (,) Dó(f_[oh:h]g_[oh:h]e_[oh:h])mi(fgF'E)ne,(f!gwh/ihhg.) (;) et(g_[oh:h]e) de(fg)pre(g)ca(gh)ti(g_[oh:h]e)ó(f!gwhgh)nem(g.) (,) me(giig//f_hGF'fhGF'fvE'DC)am :(dc..) (:) áu(cd/fef)ri(f)bus(f) pér(f.e!fwgfg)ci(hg)pe(g) (,) lá(ge)cri(fg)mas(g) me(gh/i_[oh:h]g/hi'/jh'//jvI'HGhi)as :(hg..) (:) quó(gh)ni(fe)am(fg) ád(g/h'ih)ve(gf)na(f.) (,) e(f)go(fvEDef!hvGF'fvED) sum(ff) (,) a(f)pud(df) te,(e./fgf'/gd//evDCdc..) (;) * et(c) per(cg)e(gh)grí(fef)nus.(g.) (,) (fg/ih/ijhhg//ivHGivHG//higgfhvGF'fc.) (,) (ege/feevD'Cef!gv'1//hvGE'fddc.) (::)",
      source: "Graduale Romanum (GregoBase #329)"
    },
    offertory: {
      title: "Oravi Deum",
      latin: "Orávi Deum meum ego Dániel, dicens : Exáudi, Dómine, preces servi tui : illúmina fáciem tuam super sanctuárium tuum : et propítius inténde pópulum istum, super quem invocátum est nomen tuum, Deus.",
      translation: "I, Daniel, prayed to my God, saying: Hear, O Lord, the prayers of your servant: show your face upon your sanctuary: and graciously look upon this people, upon whom your name is invoked, O God.",
      mode: "Offertory · Ordinary Time · Mode IV",
      gabc: "(c4) O(dfd)rá(eef//dgff'ffvD'C//dfD'C//dfd/ef)vi(e.) *(,) De(e.f!gwh)um(hg~) me(g)um(ddf) (;) e(eef)go(d!ewffvED'd) Dá(c)ni(dfd)el,(e./f!hgh) di(egff)cens :(fe..) (:) Ex(g)áu(iij)di,(g) Dó(h)mi(gh_G'_FE'f)ne,(fe..) (;) pre(e!fwg'!hv)ces(g) ser(ghgg)vi(f_e) tu(egF'E)i :(eef.) (:) il(d)lú(dg)mi(hg)na(g) fá(hji)ci(i)em(jkjj) tu(h.g!hwihi)am(ih..) (;) su(h!jj//jjj)per(gh) san(ef)ctu(g)á(hg/h!jj)ri(hg)um(gh) tu(gihhg)um :(g.) (:) et(g) pro(g)pí(gj)ti(kj)us(j) in(h)tén(ixfg'high)de(e.) (;) pó(e!fwg'!hv)pu(g)lum(hg/hf) i(d)stum,(fd/ff//fffg~) (,) su(cd)per(cd~) quem(c) in(c)vo(d!ewf)cá(fgF'E)tum(fg'h) est(h_g) (,) no(ghg)men(gh) tu(gv.fg/hgh)um,(hg..) (;) De(e/fhg'hvF'D//ff//ffvE'Cege.)(,)(g'//hg'hvF'D//ff//dffc)(,)(effd/ef'!gvF'E)us.(e.) (::)",
      source: "Graduale Romanum (GregoBase #652)"
    },
    communion: {
      title: "Vovete et reddite",
      latin: "Vovéte, et réddite Dómino Deo vestro, omnes qui in circúitu ejus affértis múnera : terríbili, et ei qui aufert spíritum príncipum : terríbili apud omnes reges terrae.",
      translation: "Make vows, and pay them to the Lord your God, all you who round about him bring gifts: to him who is terrible, and who takes away the spirit of princes: who is terrible to all the kings of the earth.",
      mode: "Communion · Ordinary Time · Mode II",
      gabc: "(f3) VO(ef'g)vé(f)te,(f.) *(,) et(ef'h~) réd(hhi)di(h)te(h.) (,) Dó(h)mi(hhh)no(f) De(h)o(f) ve(hih)stro,(hhh) (;) o(fgF~'E~)mnes(f_e) qui(e) in(e) cir(ehg~)cú(hi)i(i)tu(hi) e(i)jus(e.) (,) af(f)fér(hih)tis(gh) mú(f)ne(f_[oh:h]g_[oh:h]f_[oh:h])ra :(f.) (:) ter(h)rí(hj)bi(iji)li,(i.) (,) et(hg) e(h_[oh:h]i_[oh:h]f_[oh:h])i(f.) qui(hg) au(hi)fert(hvGF) (,) spí(h)ri(h)tum(g!i'j) prín(ji/jhi)ci(h.g!hwihi)pum :(ih..) (:) ter(h)rí(hgh)bi(f)li(e.) (,) a(fgef)pud(efE'C) o(ef)mnes(f_e) re(hh)ges(ig/h_g) ter(fg!hvGF'g)rae.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #1134)"
    }
  },
  "ot-23-a": {
    gradual: {
      title: "Beata gens",
      latin: "Beáta gens, cujus est Dóminus Deus eórum : pópulus, quem elégit Dóminus in hereditátem sibi. ℣. Verbo Dómini caeli firmáti sunt : et spíritu oris ejus omnis virtus eórum.",
      translation: "Blessed is the nation whose God is the Lord: the people whom he has chosen for his inheritance. ℣. By the word of the Lord the heavens were established: and all their power by the spirit of his mouth.",
      mode: "Gradual · Ordinary Time (Years A & B) · Mode I",
      gabc: "(c4) BE(d)á(ff)ta(gffe//fhG'Fg_[oh:h]d) gens,(d.) *(;) cu(d)jus(d) est(ff) Dó(g_[oh:h]fh)mi(h)nus(h.) (,) De(hjhhg)us(g_[oh:h]f) e(fe)ó(ggfghvG__Fg_[oh:h]f)rum :(f.) (:) pó(hhghjjjvIH)pu(h_[oh:h]i_[oh:h]h_[oh:h])lus,(h.) (;) quem(f) e(ghg)lé(hvvG'FE'fwgfg)git(g_[oh:h]f_[oh:h]) (,) Dó(gffvED)mi(e[ll:1]d)nus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) in(f) he(d)re(e)di(f)tá(ghgh//ijii)tem(ih..) (,) si(h)bi.(ghGEf_g//fgFDf_h//ghGEf_g//fgFD.1) (::) ℣. Ver(dh)bo(h) Dó(hjhhghGF.)(,)(ixhiHG'hw!ivHGhi)mi(h)ni(iyhjH'Gh!jjh//jjjvIH'jggf.0) (;) cae(h_[hl:1]k_[hl:1]j_[hl:1]kvJH'i)li(h.) fir(hg~)má(h!iwj)ti(g) sunt :(fh/jh/ih..) (:) et(f) spí(ghghjhhggf!gwh_g)ri(h)tu(g.) (,) o(h_fh)ris(g_[oh:h]fg) e(fg)jus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) o(f_d/ff!gwhgh//jkjj'jvH'G/[-0.5]{ix}F0'gwh!iv_[oh:h]H~G~)mnis(h_g) vir(gh~)tus(g) *(,) e(gh)ó(ixjhiGF'h!jjvH'G)rum.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1044)"
    }
  },
  "ot-23-b": {
    gradual: {
      title: "Beata gens",
      latin: "Beáta gens, cujus est Dóminus Deus eórum : pópulus, quem elégit Dóminus in hereditátem sibi. ℣. Verbo Dómini caeli firmáti sunt : et spíritu oris ejus omnis virtus eórum.",
      translation: "Blessed is the nation whose God is the Lord: the people whom he has chosen for his inheritance. ℣. By the word of the Lord the heavens were established: and all their power by the spirit of his mouth.",
      mode: "Gradual · Ordinary Time (Years A & B) · Mode I",
      gabc: "(c4) BE(d)á(ff)ta(gffe//fhG'Fg_[oh:h]d) gens,(d.) *(;) cu(d)jus(d) est(ff) Dó(g_[oh:h]fh)mi(h)nus(h.) (,) De(hjhhg)us(g_[oh:h]f) e(fe)ó(ggfghvG__Fg_[oh:h]f)rum :(f.) (:) pó(hhghjjjvIH)pu(h_[oh:h]i_[oh:h]h_[oh:h])lus,(h.) (;) quem(f) e(ghg)lé(hvvG'FE'fwgfg)git(g_[oh:h]f_[oh:h]) (,) Dó(gffvED)mi(e[ll:1]d)nus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) in(f) he(d)re(e)di(f)tá(ghgh//ijii)tem(ih..) (,) si(h)bi.(ghGEf_g//fgFDf_h//ghGEf_g//fgFD.1) (::) ℣. Ver(dh)bo(h) Dó(hjhhghGF.)(,)(ixhiHG'hw!ivHGhi)mi(h)ni(iyhjH'Gh!jjh//jjjvIH'jggf.0) (;) cae(h_[hl:1]k_[hl:1]j_[hl:1]kvJH'i)li(h.) fir(hg~)má(h!iwj)ti(g) sunt :(fh/jh/ih..) (:) et(f) spí(ghghjhhggf!gwh_g)ri(h)tu(g.) (,) o(h_fh)ris(g_[oh:h]fg) e(fg)jus(d/ffd/fge'/fgd'/e[ll:1]ddc.) (:) o(f_d/ff!gwhgh//jkjj'jvH'G/[-0.5]{ix}F0'gwh!iv_[oh:h]H~G~)mnis(h_g) vir(gh~)tus(g) *(,) e(gh)ó(ixjhiGF'h!jjvH'G)rum.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #1044)"
    }
  },
  "ot-23-c": {
    gradual: {
      title: "Domine refugium",
      latin: "Dómine, refúgium factus es nobis, a generatióne et progénie. ℣. Priúsquam montes fíerent, aut formarétur terra et orbis : a saéculo, et in saéculum tu es Deus.",
      translation: "Lord, you have been our refuge, from generation to generation. ℣. Before the mountains were made, or the earth and the world was formed: from eternity and to eternity you are God.",
      mode: "Gradual · Ordinary Time (Year C) · Mode II",
      gabc: "(c3) DO(egf)mi(f)ne,(f.) *(,) re(f)fú(hfghvF'Egef)gi(gf)um(f.) (;) fa(hf/hi'j)ctus(hvGF) es(gxfegvFE.) (,) no(e[ll:1]d/fef)bis,(fd/ef!hvvF'Ef!gwh/ihh/fgf.) (:) a(hh) ge(h)ne(h)ra(h)ti(h)ó(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF)ne(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) et(de'fhvGF'g) pro(ef)gé(hf)ni(hi)e.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Pri(f)ús(h)quam(ij~) mon(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)tes(ji..) (:) fí(i!jw!kvJI'jw!kvJI)e(i)rent,(i.) (,) aut(i) for(i)ma(i)ré(i)tur(ij~) ter(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)ra(f.) (`) et(hh) or(h)bis :(h.[ob:1;8mm]) (:) a(hi) saé(ivH'GE//fhGEfh..)(,)(gi!jvHF')cu(f)lo,(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) et(d) in(d) saé(de'f)cu(f)lum(f.0/[-0.5]hvGF'g) (,) tu(e) es(f) () * De(hf/h_i)us.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1108)"
    }
  },

  // ---- 24th Sunday in Ordinary Time ----
  // Gradual & alleluia common; offertory splits A & B "Sanctificavit" / C "Precatus";
  // communion splits A "Tollite hostias" / B "Qui vult venire" / C "Dico vobis".
  "ot-24": {
    gradual: {
      title: "Laetatus sum",
      latin: "Laetátus sum in his quae dicta sunt mihi : in domum Dómini íbimus. ℣. Fiat pax in virtúte tua : et abundántia in túrribus tuis.",
      translation: "I rejoiced at the things that were said to me: we shall go into the house of the Lord. ℣. Let peace be in your strength: and abundance in your towers.",
      mode: "Gradual · Ordinary Time · Mode VII",
      gabc: "(c2) LAe(ff)tá(g)tus(fgF'Dgfg) sum(g./hiHG'gf/ghg.___) *(;) in(fg) his(gj) quae(j) di(jii)cta(g) sunt(gj~) mi(j_)hi :(g) (,) (ihij_i//hjii/ghg.) (:) in(gh) do(gh)mum(g_[oh:h]e) Dó(f)mi(dec)ni(c.) (,) í(eggf/g_[oh:h]e//fvED'ef'gffd!ewf)bi(cdc___)mus.(c.) (::) ℣. Fi(gfg)at(gj~) pax(j_kJ'//G//ihij_i//hjii/ghg.) (;) in(f) vir(g)tú(g!ii//iikvJI'ig)te(gffd) tu(fdffd/ec)a :(c.) (:) et(g) a(c)bun(df~)dán(fv.d!gf'gjv.iiiih~)ti(ij)a(j_g//ihij_i//hjii/ghg.) (;) * in(cd) túr(fgf)ri(dgf/gh)bus(gh) tu(gf)is.(f.) (,) (hg/i_[oh:h]hgiHG'ge./fge'fvD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #1011)"
    },
    alleluia: {
      title: "Timebunt gentes",
      latin: "Allelúia. ℣. Timébunt gentes nomen tuum, Dómine : et omnes reges terrae glóriam tuam.",
      translation: "Alleluia. ℣. The nations shall fear your name, O Lord: and all the kings of the earth your glory.",
      mode: "Alleluia · Ordinary Time · Mode I",
      gabc: "(c4) AL(dfddc~)le(fgf)lú(ghggf~){ia}.(f.) *(;) ij.(ixfh!ivHGhjh'jvIG'gf.0) (;) (ixfh!ivHGhjh'jvIG'gf.0) (,) (ghGF'gd.0/e!fwgffvEC.) (,) (cd!ef/gffvED.) (::) ℣. Ti(dfddc)mé(fgf)bunt(ghg/hgg) gen(fg!hvGF'g)tes(fgf.) (;) no(fg!hvGF'gd.0/e!fwgf)men(fvEC.) tu(cd!ef/gffvED)um,(d.) (,) Dó(cb)mi(c.d!ewfd)ne :(d.) (:) et(d) o(df/dec)mnes(d.0f!gwhghvGF) re(g.h!iwjh.1)(,)(fgh!jjhh'hhvGF)ges(gh) ter(ghGF'g)rae(d/ffd/e[ll:1]ddc.) (;) gló(ccdde/!fg./!fh/!ghf.1)(,)(gf/!ghf/!fvECddv[ll:1]/CA)ri(cd)am(d.) *(,) tu(ff/dec./d!ffg//f!gh'GF)am.(f.) (;) (ixfh!ivHGhjh'jvIG'gf.0) (;) (ixfh!ivHGhjh'jvIG'gf.0) (,) (ghGF'gd.0/e!fwgffvEC.) (,) (cd!ef/gffvED.) (::)",
      source: "Graduale Romanum (GregoBase #1097)"
    }
  },
  "ot-24-a": {
    offertory: {
      title: "Sanctificavit Moyses",
      latin: "Sanctificávit Móyses altáre Dómino, ófferens super illud holocáusta, et ímmolans víctimas : fecit sacrifícium vespertínum in odórem suavitátis Dómino Deo, in conspéctu filiórum Israel.",
      translation: "Moses consecrated an altar to the Lord, offering upon it holocausts, and sacrificing victims: he made an evening sacrifice for an odor of sweetness to the Lord God, in the sight of the children of Israel.",
      mode: "Offertory · Ordinary Time (Years A & B) · Mode V",
      gabc: "(c4) SAn(fg)cti(f)fi(ghg)cá(ixhiH'G)vit(h_ghvGF.) (,) * Mó(f)y(h)ses(h!iwj/kjj/hih.) (;) al(f)tá(hj)re(jv.jjj_h) Dó(h)mi(h_[oh:h]i_[oh:h]h_[oh:h])no,(h.) (:) óf(hj)fe(gh)rens(gfg) su(ghG'F)per(fg) il(ixhgg'g//ggg_[oh:h]f/gih)lud(h.) (,) ho(h!iwj)lo(g/jjvHG'gfg)cáu(f.e!fwg!hvGF'g)sta,(gf..) (:) et(f.0h!iwj'!kv) ím(jk)mo(jvIH)lans(jj) ví(jk!lvKJ)cti(j_[hl:1]k_[hl:1]j_[hl:1])mas :(j.) (;) fe(jk)cit(jji) sa(jjj)cri(h!iw!jvIG')fí(h/jjj)ci(j_[hl:1]k_[hl:1]j_[hl:1])um(j.) ve(jk)sper(jvI~H~)tí(h_[oh:h]i_[oh:h]h_[oh:h])num(h.) (;) in(h) o(hf)dó(hj)rem(j'/kjj) su(j)a(j)vi(h)tá(h_g//hjg___hvGF'g)tis(gf..) (,) Dó(h!iwj)mi(g)no(fg/hgh) De(h_[oh:h]i_[oh:h]h_[oh:h])o,(h.) (:) in(h) con(j)spé(j_h/jjg/h//jjvH'Fg_[oh:h]f)ctu(fgff//df/gffgD'Cd_[oh:h]e_[oh:h]d._[oh:h]) (;) fi(c)li(d)ó(f)rum(gf~) Is(f)ra(gh)el.(hv.gh!jjvHG'ge//f_[oh:h]g_[oh:h]e_[oh:h]!fwggf.0) (::)",
      source: "Graduale Romanum (GregoBase #838)"
    },
    communion: {
      title: "Tollite hostias",
      latin: "Tóllite hóstias, et introíte in átria ejus : adoráte Dóminum in aula sancta ejus.",
      translation: "Bring up sacrifices, and come into his courts: adore the Lord in his holy court.",
      mode: "Communion · Ordinary Time (Year A) · Mode IV",
      gabc: "(c3) TOl(i)li(h)te(g) hó(ijij)sti(hi)as,(i_[oh:h]g) *(,) et(h) in(g)tro(hi)í(i_[oh:h]g/hih)te(g.) (,) in(h) á(h_f//hgh)tri(gf)a(f) e(fhghvG~F~)jus :(gf..) (:) ad(hg)o(h)rá(i_[oh:h]h_[oh:h])te(h_f) Dó(f_e)mi(e_[oh:h][ll:1]d)num(d.) (,) in(f) au(fhgivH~G~)la(g) san(g)cta(gih) e(fiH~'G~)jus.(g.) (::)",
      source: "Graduale Romanum (GregoBase #404)"
    }
  },
  "ot-24-b": {
    offertory: {
      title: "Sanctificavit Moyses",
      latin: "Sanctificávit Móyses altáre Dómino, ófferens super illud holocáusta, et ímmolans víctimas : fecit sacrifícium vespertínum in odórem suavitátis Dómino Deo, in conspéctu filiórum Israel.",
      translation: "Moses consecrated an altar to the Lord, offering upon it holocausts, and sacrificing victims: he made an evening sacrifice for an odor of sweetness to the Lord God, in the sight of the children of Israel.",
      mode: "Offertory · Ordinary Time (Years A & B) · Mode V",
      gabc: "(c4) SAn(fg)cti(f)fi(ghg)cá(ixhiH'G)vit(h_ghvGF.) (,) * Mó(f)y(h)ses(h!iwj/kjj/hih.) (;) al(f)tá(hj)re(jv.jjj_h) Dó(h)mi(h_[oh:h]i_[oh:h]h_[oh:h])no,(h.) (:) óf(hj)fe(gh)rens(gfg) su(ghG'F)per(fg) il(ixhgg'g//ggg_[oh:h]f/gih)lud(h.) (,) ho(h!iwj)lo(g/jjvHG'gfg)cáu(f.e!fwg!hvGF'g)sta,(gf..) (:) et(f.0h!iwj'!kv) ím(jk)mo(jvIH)lans(jj) ví(jk!lvKJ)cti(j_[hl:1]k_[hl:1]j_[hl:1])mas :(j.) (;) fe(jk)cit(jji) sa(jjj)cri(h!iw!jvIG')fí(h/jjj)ci(j_[hl:1]k_[hl:1]j_[hl:1])um(j.) ve(jk)sper(jvI~H~)tí(h_[oh:h]i_[oh:h]h_[oh:h])num(h.) (;) in(h) o(hf)dó(hj)rem(j'/kjj) su(j)a(j)vi(h)tá(h_g//hjg___hvGF'g)tis(gf..) (,) Dó(h!iwj)mi(g)no(fg/hgh) De(h_[oh:h]i_[oh:h]h_[oh:h])o,(h.) (:) in(h) con(j)spé(j_h/jjg/h//jjvH'Fg_[oh:h]f)ctu(fgff//df/gffgD'Cd_[oh:h]e_[oh:h]d._[oh:h]) (;) fi(c)li(d)ó(f)rum(gf~) Is(f)ra(gh)el.(hv.gh!jjvHG'ge//f_[oh:h]g_[oh:h]e_[oh:h]!fwggf.0) (::)",
      source: "Graduale Romanum (GregoBase #838)"
    },
    communion: {
      title: "Qui vult venire post me",
      latin: "Qui vult veníre post me, ábneget semetípsum : et tollat crucem suam, et sequátur me.",
      translation: "Whoever wishes to come after me, let him deny himself: and take up his cross, and follow me.",
      mode: "Communion · Ordinary Time (Year B) · Mode I",
      gabc: "(c4) QUI(d) vult(f) ve(fe)ní(gh)re(ixih) post(fg) me,(fvED.) *(;) áb(ixf!gwhg/hih)ne(g)get(f) se(fe)met(d)í(fg'h)psum :(e.) (:) et(h) tol(ghg)lat(ef) cru(ghgh)cem(f_d) su(gef)am,(f.) (;) et(eg/hjh) se(fg)quá(ef)tur(d!ew!fv_E~C~) me.(d.) (::)",
      source: "Graduale Romanum (GregoBase #89)"
    }
  },
  "ot-24-c": {
    offertory: {
      title: "Precatus est Moyses",
      latin: "Precátus est Móyses in conspéctu Dómini Dei sui, et dixit : Quare, Dómine, irásceris in pópulo tuo? Parce irae ánimae tuae : meménto Abraham, Isaac et Jacob, quibus jurásti dare terram fluéntem lac et mel. Et placátus factus est Dóminus de malignitáte, quam dixit fácere pópulo suo.",
      translation: "Moses prayed in the sight of the Lord his God, and said: Why, O Lord, are you angry with your people? Let the anger of your soul be appeased: remember Abraham, Isaac and Jacob, to whom you swore to give a land flowing with milk and honey. And the Lord was appeased from the wrath which he had threatened against his people.",
      mode: "Offertory · Ordinary Time (Year C) · Mode VIII",
      gabc: "(c3) PRe(e)cá(fhe)tus(d!ewfef) est(f_e) (,) * Mó(f)y(h)ses(hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(fe..) (;) et(e) di(e!hhe/ff//df!hvED'db//cd!efe)xit.(e.) (:) Pre(e)cá(fhe/fe)tus(d!ewfef) est(f_e) (,) Mó(f)y(h)ses(hg/hihhvGEf.) (;) in(b) con(b)spé(de)ctu(de) Dó(f_e/f!gw!hvGF)mi(e!gw!hvGF'g)ni(g_[oh:h]f) (,) De(f)i(e[ll:1]d) su(ef!gvFE'f)i,(eb..) (;) et(b) di(b!ddb//cd!efe)xit :(e.) (:) Qua(ehhi)re,(hi) Dó(h)mi(ivHF)ne,(efe.) (,) i(e)rá(e!hh//hhhffee[ll:1]d!ewf!gvFE)sce(fe)ris(e.) (;) in(d) pó(efe/fg)pu(f)lo(f) tu(e.[ll:1]d!ewfef)o?(fe..) (:) Par(de/f!hhhhi~)ce(g) i(h)rae(efe.) (,) á(hhi)ni(f)mae(efe) tu(ffeg'FEfvEDef!gvFE'f)ae :(fe..) (:) me(e)mén(ei'!jv)to(i) A(i)bra(i)ham,(i!jw!kvJI) (,) I(hi)sa(gh)ac(iih.0) (,) et(hv.hh//hhh_g/hi!kvJI) Ja(hi)cob,(i_[oh:h]e/f_[oh:h]g_[oh:h]f._[oh:h]) (;) qui(d)bus(e) ju(f)rá(fi)sti(h) da(hg)re(f) ter(h)ram(hh//hhh) (,) flu(e)én(f)tem(e[ll:1]d~) lac(e.) (`) et(e!fwgf/g_[oh:h]f/hhf/hhvFD'ew!fvEDef) mel.(e.) (:) Et(d) pla(f)cá(h)tus(hf~) fa(hi'j)ctus(i) est(hiHF.1) (,) Dó(h!iwj_i)mi(i.h!iwjij)nus(ji..) (;) de(iv.hhhh_i) ma(e)li(f)gni(g)tá(g)te,(iv.hhhh_i) (;) quam(fe~) di(h!iwj_i)xit(j) fá(ijhh)ce(hv.fh!ivHG'h)re(hg..) (;) pó(i_[oh:h]h)pu(h)lo(ihhf/hhhhv'1GE//fhfhvFD.1) (,) (ef!hvvGF'gw!hvGF) su(ef!gvFE'f)o.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #325)"
    },
    communion: {
      title: "Dico vobis: gaudium est",
      latin: "Dico vobis : gáudium est Angelis Dei super uno peccatóre paeniténtiam agénte.",
      translation: "I say to you: there is joy before the Angels of God upon one sinner doing penance.",
      mode: "Communion · Ordinary Time (Year C) · Mode V",
      gabc: "(c3) DI(h)co(f) vo(hi)bis,(i.) *(,) gáu(ij)di(i)um(h) est(h) An(h)ge(g)lis(i) De(h_[oh:h]i_[oh:h]f_[oh:h])i(f.) (;) su(f)per(e) u(f)no(e) pec(f)ca(d)tó(ef)re(f.) (,) pae(f)ni(h)tén(f)ti(e)am(f!gwhg/hih) a(f)gén(d_[oh:h]e_[oh:h]d~)te.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1058)"
    }
  },

  // ---- 25th Sunday in Ordinary Time ----
  // Gradual splits A "Dirigatur" / B "Quis sicut Dominus" / C "Prope est Dominus";
  // alleluia, offertory, communion common.
  "ot-25": {
    alleluia: {
      title: "Confitemini et invocate",
      latin: "Allelúia. ℣. Confitémini Dómino, et invocáte nomen ejus : annuntiáte inter gentes ópera ejus.",
      translation: "Alleluia. ℣. Give praise to the Lord, and call upon his name: declare his deeds among the nations.",
      mode: "Alleluia · Ordinary Time · Mode II",
      gabc: "(c3) AL(ef)le(f)lú(hf/hh/ihhi){ia}.(ijhhe.) *(,) ij.(hhh'j!lvI'HGF'gwhf.1) (::) ℣. Con(f)fi(hh)té(i)mi(h)ni(hjihh/fgf.) (,) Dó(hf/hh/ihhi)mi(f)no,(efe.) (;) et(fd) in(e)vo(f)cá(fih'/ig'/hf)te(efe.) (,) no(f)men(fgef) e(f!gwhgh)jus :(gf..) (:) an(g)nun(e)ti(f)á(hjIH'h//fiH'GEf./hf/hf/he)te(e.) (,) in(e)ter(e) gen(egFE'f!hhhf//ijhh)tes(g_[oh:h]fgvFEfe..) *(;) ó(fd)pe(e)ra(f) e(hf/hh/ihhi)jus.(ijhhe.) (,) (hhh'j!lvI'HGF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1192)"
    },
    offertory: {
      title: "Si ambulavero",
      latin: "Si ambulávero in médio tribulatiónis, vivificábis me, Dómine : et super iram inimicórum meórum exténdes manum tuam, et salvum me fecit déxtera tua.",
      translation: "If I shall walk in the midst of tribulation, you will revive me, O Lord: and you will stretch forth your hand against the wrath of my enemies, and your right hand has saved me.",
      mode: "Offertory · Ordinary Time · Mode VIII",
      gabc: "(c4) SI(ghg) am(f)bu(g)lá(gj/hi//hjj'1j)ve(kjjvI'HG)ro(hhg.) *(;) in(g) mé(hg/h!jjk)di(hg)o(g.) (,) tri(g!hwi_[oh:h]h)bu(hg)la(gffvED')ti(g)ó(g!hwihi)nis,(hg..) (:) vi(ghg)vi(f)fi(g)cá(gj/hi//h!jj//jjjhhggf.0)(,)(h!iwjj)bis(kj~) me,(jv.ijh'ivH'G//jjjvIH'iw!jvIH) (,) Dó(hg)mi(g!hwihi)ne :(hg..) (:) et(g!h!gh~) su(f)per(g) i(gjji!jwkj)ram(j_k) (,) in(j)i(jkJ'H)mi(ji)có(jv.ijhi)rum(hhg.) (,) me(g)ó(ghGF'gffvEDgh)rum(g.) (;) ex(h)tén(gjI'Ghh//fh!jvGF'fd/ef!ghg)des(g.) (;) ma(ig/h!jj/klKJ'jvIG)num(jj) tu(h!iw!jvI'HG'h)am,(gh/ih..) (:) et(g) sal(hi~)vum(i) me(i) fe(ij!kvJHji)cit(i.) (;) déx(ij'k)te(j)ra(kjj'jj_h) tu(jj//jjj_h//jjh//jvIGh.)(,)(fh!jvIG___//ivHGhg)a.(g.) (::)",
      source: "Graduale Romanum (GregoBase #616)"
    },
    communion: {
      title: "Tu mandasti",
      latin: "Tu mandásti mandáta tua custodíri nimis : útinam dirigántur viae meae, ad custodiéndas justificatiónes tuas.",
      translation: "You have commanded that your commandments be kept most diligently: O that my ways may be directed to keep your justifications.",
      mode: "Communion · Ordinary Time · Mode V",
      gabc: "(c3) TU(h) man(hf~)dá(hi)sti(h.) *(,) man(fe~)dá(gxfgf)ta(e) tu(f/hhh)a(h.) (,) cu(d)sto(ef)dí(gxfgF'E)ri(hh) ni(i_[oh:h]h)mis :(hiHF.1) (:) ú(gxfg)ti(f)nam(f) di(f)ri(gxgh)gán(h)tur(f) vi(ih)ae(gxgh) me(gxh)ae,(hihh/fgf.) (;) ad(d) cu(ef)sto(gxfgf')di(e)én(fgF~'E~)das(f_e) (,) ju(d)sti(gxfgf')fi(e)ca(fgf')ti(e)ó(fg!hvG'FE)nes(fe/f_e) tu(de!fvED'e)as.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #479)"
    }
  },
  "ot-25-a": {
    gradual: {
      title: "Dirigatur oratio mea",
      latin: "Dirigátur orátio mea sicut incénsum in conspéctu tuo, Dómine. ℣. Elevátio mánuum meárum sacrifícium vespertínum.",
      translation: "Let my prayer be directed as incense in your sight, O Lord. ℣. The lifting up of my hands as an evening sacrifice.",
      mode: "Gradual · Ordinary Time (Year A) · Mode VII",
      gabc: "(c2) DI(c)ri(cg)gá(g)tur(g_[oh:h]e/fgddc.) (,) * o(c)rá(c!feg)ti(gh)o(hfg) me(gh!ivHG'h)a(gh/ih..) (;) sic(f)ut(g) in(hj~)cén(j)sum(j_g/hg..) (,) in(g) con(h)spé(hj)ctu(i) tu(hfg)o,(g_[oh:h]e//fgf'/gddc.) (;) Dó(ffd/fef)mi(e)ne.(ce!ghGF'fe//ced/e[ll:1]ddc.) (::) ℣. E(f)le(g)vá(g_[uh:l]j//ij/kii'iivGF'fd)(,)(ffd/ffg)ti(g)o(g_[oh:h]f//gih/ijhhg.) (;) má(gj)nu(j_0)um(k) me(g)á(igge//fhGF'fd!ew!fvE'DC'd)rum(dc..) (:) sa(c)cri(d)fí(fgf)ci(dgf/gh)um(g.) *(,) ves(c)per(ff)tí(fv.ef/gfg)num.(gge./giHG'ivHG'ge.) (,) (fge'fvD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #44)"
    }
  },
  "ot-25-b": {
    gradual: {
      title: "Quis sicut Dominus",
      latin: "Quis sicut Dóminus Deus noster, qui in altis hábitat : humília réspicit in caelo et in terra? ℣. Súscitans a terra ínopem, et de stércore érigens páuperem.",
      translation: "Who is like the Lord our God, who dwells on high: and looks down on the lowly things in heaven and on earth? ℣. Raising up the needy from the earth, and lifting the poor out of the dunghill.",
      mode: "Gradual · Ordinary Time (Year B) · Mode V",
      gabc: "(c4) QUis(d) sic(ff)ut(gh~) Dó(h_fgvFED.g_[oh:h]e/fg)mi(f)nus(f.) *(;) De(fg'h)us(hg/h_g) no(fg!hvGF'g)ster,(gf..) (;) qui(f) in(hj) al(j)tis(h) há(jk)bi(j.i!jwkjk)tat :(kj..) (:) hu(h)mí(h)li(ixgiH'Ghf)a(f.) ré(h_g)spi(h)cit(f.) (`) in(hj~) cae(j)lo(ij) (,) et(h) in(fg~) ter(f)ra?(gffgD0'/[-0.5]{ix}C0hv.giHF.1) (,) (fhg___jv.jjjhh//fhg/hggf.0) (z0::c3) ℣. Sús(h)ci(hi)tans(ihhf/hiHG.hiFD.1) (,) (f/hhi/hhf/hiHG.hiFD.1) (,) (gxfg//e!g'h/ghghvFD.1) (,) (fdfED//fd/ef!hh/ig/hf/hi!kkkh..) (;) a(hi/j.i!jwk) ter(ikH'Gh)ra(f.) ín(fh)o(hef)pem,(d.) (:) et(d) de(fe) stér(eh)co(h)re(h_[oh:h]i_[oh:h]h_2[oh:h]//i_[oh:h]hjvIH'Ghf..) (;) é(de'f)ri(f)gens(f) *() páu(fhGF')pe(i)rem.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhf.0/dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #472)"
    }
  },
  "ot-25-c": {
    gradual: {
      title: "Prope est Dominus",
      latin: "Prope est Dóminus ómnibus invocántibus eum : ómnibus qui ínvocant eum in veritáte. ℣. Laudem Dómini loquétur os meum : et benedícat omnis caro nomen sanctum ejus.",
      translation: "The Lord is near to all who call upon him: to all who call upon him in truth. ℣. My mouth shall speak the praise of the Lord: and let all flesh bless his holy name.",
      mode: "Gradual · Ordinary Time (Year C) · Mode V",
      gabc: "(c4) PRo(f)pe(f) est(f) Dó(f_)mi(d)nus(d//ffg/fffd) (,) (ff/ge'fvDC'//fd'/e[ll:1]ddc.) (;) * ó(f)mni(gh)bus(h) in(h)vo(g)cán(fhg)ti(g)bus(g) (`) e(hg/h!jjjh)(,)(jjjvIH'jggfg)um :(gf..) (:) ó(hj)mni(gf)bus(f) qui(f) ín(f)vo(e)cant(dgf~) e(fge'/fddcd)um(dc..) (;) in(e_[oh:h]) ve(c)ri(d!ewf)tá(fgF//C'd!fff)te.(f.) (,) (ixhhg/hh//gh!ivGF/!hh//iyfh!jkijh.) (,) (fg/h!jj/klijh.ixgiHF.1) (z0::c3) ℣. Lau(hh)dem(h) Dó(h)mi(h)ni(ihh'hh_f) (,) (hhf/hhe//gxfgED./[-3]gy/[0.5]hhjvIH//hvGF.) (:) lo(f!h'i)qué(i)tur(ih/jkIH'hf.) (,) os(hf/hhh) me(h)um :(h.f!gwh!iv.hi/!jh/!h/iih.0) (:) et(d) be(d)ne(fe)dí(eh)cat(h.) (,) o(ihhg~)mnis(i'/jk) ca(i_[oh:h]h)ro(hg/i_[oh:h]h//jvIH'Ghf..) (;) no(f_e)men(gxegf'gvE'D) san(fe~)ctum(h.) *(,) e(hiH'F)jus.(f./de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #284)"
    }
  },

  // ---- 26th Sunday in Ordinary Time ----
  // Gradual splits A "Christus factus est" / B & C "Oculi omnium";
  // alleluia, offertory, communion common.
  "ot-26": {
    alleluia: {
      title: "Paratum cor meum",
      latin: "Allelúia. ℣. Parátum cor meum, Deus, parátum cor meum : cantábo, et psallam tibi, glória mea.",
      translation: "Alleluia. ℣. My heart is ready, O God, my heart is ready: I will sing, and chant a psalm to you, my glory.",
      mode: "Alleluia · Ordinary Time · Mode III",
      gabc: "(c4) AL(eef)le(dg)lú(g_[oh:h]i_[oh:h]g_[oh:h]/h!iwjjk){ia}.(i.) *(;) ij.(g.h!iwj_h//jh/ig.) (,) (g.h!iwj_h//jh/igge.) (,) (ef'ghghF'Ef_gffe.) (::) ℣. Pa(c.d!ewff)rá(f)tum(fg~) cor(g_[oh:h]f) me(ixf!gwh'!iv)um,(hg~) De(ghGF'g)us,(gf..) (;) pa(f.0h!iwjj)rá(j)tum(ixjjvIG') cor(g!jjj) me(ixj_h/iih)um :(h.) (:) can(fh)tá(h/jhhfg)bo,(gv.ff/ded.) (,) et(d) psal(ff)lam(ghGF'g) ti(ixg/hig)bi(g.) (;) gló(ixfh/ig/hh//gg/hfg.)(,)(ixgjjh/ig/hh//gg/hfg.)(,)(ixjjjh/ig/hh//gg/hfg.)(,)(ef/ghgfv.efd.1)(,)(de!fvghg)ri(f_efvED'e)a(e[ll:1]d..) *(;) me(ff/g_[oh:h]f/hgh)a.(hhf.) (,) (h_ghvFDgff'fvE'C//ggf/ghdd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #745)"
    },
    offertory: {
      title: "Super flumina Babylonis",
      latin: "Super flúmina Babylónis, illic sédimus, et flévimus, dum recordarémur tui, Sion.",
      translation: "Upon the rivers of Babylon, there we sat and wept, while we remembered you, O Sion.",
      mode: "Offertory · Ordinary Time · Mode I",
      gabc: "(c4) SU(f)per(ixgh'i) flú(h)mi(hgh)na(hf/gh/jhjvGF'fd/fddc.) *(,) Ba(d)by(dc/d!ff/g.h!iw!jvIH//ghG'F)ló(fg!hvGF'g)nis,(gf..) (:) il(fh)lic(h_g) sé(h!iwj)di(hvGF)mus,(ixg!hwih.) (;) et(h_ghvGE) flé(f!gwhg)vi(gffvED)mus,(d!ffd/fge'/fgd'/e[ll:1]ddc.) (:) dum(f) re(d)cor(e)da(f)ré(ghgh)mur(jh/jjvH'G) tu(ixgf/hiG'F)i,(ff/ghF'E) (,) Si(f)on.(f_d//f!gwhgh'jvHG'hvF'Df.) (,) (e/gwhgh'jvHG'hvF'D//f_[oh:h]g_[oh:h]f_2[oh:h]//g_[oh:h]f/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #812)"
    },
    communion: {
      title: "Memento verbi tui",
      latin: "Meménto verbi tui servo tuo, Dómine, in quo mihi spem dedísti : haec me consoláta est in humilitáte mea.",
      translation: "Remember your word to your servant, O Lord, in which you have given me hope: this has comforted me in my lowliness.",
      mode: "Communion · Ordinary Time · Mode IV",
      gabc: "(c4) ME(f)mén(gh)to(hg) *() ver(h)bi(hg) tu(h)i(hf) ser(g)vo(gd) tu(f)o,(f.) Dó(e)mi(egff)ne(eef.) (;) in(d) quo(fhg) mi(h)hi(g_[oh:h]f) spem(gh) de(g)dí(egff)sti :(fe..) (:) haec(g) me(gh!ivih) con(h)so(hg)lá(h)ta(gh_G'_FE'f) est(fe..) (;) in(efe') hu(d)mi(efe')li(d)tá(ef'g)te(f) me(egff)a.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #696)"
    }
  },
  "ot-26-a": {
    gradual: {
      title: "Christus factus est",
      latin: "Christus factus est pro nobis obédiens usque ad mortem, mortem autem crucis. ℣. Propter quod et Deus exaltávit illum, et dedit illi nomen, quod est super omne nomen.",
      translation: "Christ became for us obedient unto death, even to the death of the cross. ℣. Therefore God also has exalted him, and has given him a name which is above every name.",
      mode: "Gradual · Ordinary Time (Year A) · Mode V",
      gabc: "(c4) CHri(ffg)stus(f.) *(,) fa(fg)ctus(f) est(f') pro(f) no(ghF'ED.g_[oh:h]e/fg)bis(f.) (;) ob(f)é(hf/gh!jj/kjk)di(jij)ens(h_g) (,) us(h!jjh)que(f.) ad(ixfiH'Gh) mor(f_[oh:h]g_[oh:h]f_[oh:h])tem,(f.) (:) mor(ixf!hhi)tem(g) au(ixgjj)tem(j.h!iw!jvIG'hw!ivHG) cru(fv.ff)cis.(f_c) (,) (fg!hvGF.e!g'h//fhg/hggf.0) (z0::c3) ℣. Pro(d)pter(d) quod(d) et(fe~) De(eh)us(h.) (,) ex(h)al(h)tá(h)vit(h) il(h)lum,(ihhe./h_[oh:h]i_[oh:h]h_[oh:h]/ihhe.) (,) (hi!kv//lvKI'jvHF.1) (,) (h_g/ijh'___ jvIH'jvIH'//hvGF.) (:) et(f) de(f!h'i)dit(i) il(i)li(ih/jkihhf.) (,) no(hf/hhh)men,(h.f!gwh!iv.hi/jhh/iih.0) (;) quod(d) est(d) su(d)per(d) o(dfE'D)mne(ef) * no(fhG'Fhhh)men.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #873)"
    }
  },
  "ot-26-b": {
    gradual: {
      title: "Oculi omnium",
      latin: "Óculi ómnium in te sperant, Dómine : et tu das illis escam in témpore opportúno. ℣. Áperis tu manum tuam : et imples omne ánimal benedictióne.",
      translation: "The eyes of all hope in you, O Lord: and you give them food in due season. ℣. You open your hand: and fill every living creature with blessing.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode VII",
      gabc: "(c2) O(c.d!ewff)cu(gffvED)li(d_c) *(,) ó(cd/ede)mni(cd!evDC'd)um(dc..) (;) in(cf) te(fg) spe(g'hvGF')rant,(gffe~) (,) Dó(fg)mi(g)ne :(gigivvHGhg/j_i//hjii/ghg.) (:) et(f) tu(h/iji) das(i_[oh:h]h) il(iiiv_[oh:h]H~G~)lis(ghgg/efe.) (;) e(ef!gh!ivGF'Ef_g)scam(ghff'fvE'DCdc..) (;) in(cd) tém(fe/f_g)po(gefvEDef)re(e./fgf'/gd//evDCdc..) (;) op(cd)por(fe~)tú(fgf)no.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::) ℣. A(g)pe(hgge/f'/gffe/g'/hgge//f'/gff)(,)(d!fffvDC'd!ff//eg!hvFEghG'Fgh)ris(gh) tu(g.) (;) ma(gigivvHGhg/j_i)num(i_[oh:h]h) (,) tu(hjI'HG)am :(gv.d_f!g!hw!ivHF'iv//hig/hhg.) (:) et(ghG'E) im(f!gwh)ples(g'/hg'/hff'f/gddc//dc/ded.) (,) o(cd)mne(c) á(c)ni(c.d!ew!fvED'e)mal(dc..) *(;) be(cd)ne(fe)di(fgf)cti(ge)ó(fg)ne.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #1230)"
    }
  },
  "ot-26-c": {
    gradual: {
      title: "Oculi omnium",
      latin: "Óculi ómnium in te sperant, Dómine : et tu das illis escam in témpore opportúno. ℣. Áperis tu manum tuam : et imples omne ánimal benedictióne.",
      translation: "The eyes of all hope in you, O Lord: and you give them food in due season. ℣. You open your hand: and fill every living creature with blessing.",
      mode: "Gradual · Ordinary Time (Years B & C) · Mode VII",
      gabc: "(c2) O(c.d!ewff)cu(gffvED)li(d_c) *(,) ó(cd/ede)mni(cd!evDC'd)um(dc..) (;) in(cf) te(fg) spe(g'hvGF')rant,(gffe~) (,) Dó(fg)mi(g)ne :(gigivvHGhg/j_i//hjii/ghg.) (:) et(f) tu(h/iji) das(i_[oh:h]h) il(iiiv_[oh:h]H~G~)lis(ghgg/efe.) (;) e(ef!gh!ivGF'Ef_g)scam(ghff'fvE'DCdc..) (;) in(cd) tém(fe/f_g)po(gefvEDef)re(e./fgf'/gd//evDCdc..) (;) op(cd)por(fe~)tú(fgf)no.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::) ℣. A(g)pe(hgge/f'/gffe/g'/hgge//f'/gff)(,)(d!fffvDC'd!ff//eg!hvFEghG'Fgh)ris(gh) tu(g.) (;) ma(gigivvHGhg/j_i)num(i_[oh:h]h) (,) tu(hjI'HG)am :(gv.d_f!g!hw!ivHF'iv//hig/hhg.) (:) et(ghG'E) im(f!gwh)ples(g'/hg'/hff'f/gddc//dc/ded.) (,) o(cd)mne(c) á(c)ni(c.d!ew!fvED'e)mal(dc..) *(;) be(cd)ne(fe)di(fgf)cti(ge)ó(fg)ne.(fg!ii//g!iiivGF'fvD'C) (,) (fffdfvEC'dc'/fd/e[ll:1]ddc.) (::)",
      source: "Graduale Romanum (GregoBase #1230)"
    }
  },

  // ---- 27th Sunday in Ordinary Time ---- (all parts common to A/B/C)
  "ot-27": {
    gradual: {
      title: "Domine refugium",
      latin: "Dómine, refúgium factus es nobis, a generatióne et progénie. ℣. Priúsquam montes fíerent, aut formarétur terra et orbis : a saéculo, et in saéculum tu es Deus.",
      translation: "Lord, you have been our refuge, from generation to generation. ℣. Before the mountains were made, or the earth and the world was formed: from eternity and to eternity you are God.",
      mode: "Gradual · Ordinary Time · Mode II",
      gabc: "(c3) DO(egf)mi(f)ne,(f.) *(,) re(f)fú(hfghvF'Egef)gi(gf)um(f.) (;) fa(hf/hi'j)ctus(hvGF) es(gxfegvFE.) (,) no(e[ll:1]d/fef)bis,(fd/ef!hvvF'Ef!gwh/ihh/fgf.) (:) a(hh) ge(h)ne(h)ra(h)ti(h)ó(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF)ne(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) et(de'fhvGF'g) pro(ef)gé(hf)ni(hi)e.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Pri(f)ús(h)quam(ij~) mon(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)tes(ji..) (:) fí(i!jw!kvJI'jw!kvJI)e(i)rent,(i.) (,) aut(i) for(i)ma(i)ré(i)tur(ij~) ter(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)ra(f.) (`) et(hh) or(h)bis :(h.[ob:1;8mm]) (:) a(hi) saé(ivH'GE//fhGEfh..)(,)(gi!jvHF')cu(f)lo,(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) et(d) in(d) saé(de'f)cu(f)lum(f.0/[-0.5]hvGF'g) (,) tu(e) es(f) () * De(hf/h_i)us.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1108)"
    },
    alleluia: {
      title: "In exitu Israel",
      latin: "Allelúia. ℣. In éxitu Israel ex Aegýpto, domus Jacob de pópulo bárbaro.",
      translation: "Alleluia. ℣. When Israel went out of Egypt, the house of Jacob from a barbarous people.",
      mode: "Alleluia · Ordinary Time · Mode II",
      gabc: "(f3) AL(ef'g~)le(g./hig/hffe)lú(fg~){ia}.(g.) *(;) ij.(fiH'Fg./f!hh) (,) (f!gwh'!ivH'Fg./f!hh) (,) (g!hwi!jvIH'ivHF'gffe.) (;) (ef/hffe//gihh'hhvG'FE//g_[uh:l]hggf.0) (::) ℣. In(e!fwggf) éx(f!gwh)i(gf)tu(f.) Is(hjji)ra(gfhvF'Eg)el(g.) (;) ex(kxfji___!jw!kvJI'j) Ae(gfh)gý(ef'h)pto,(g//hiG'FhvGEf.) (:) do(fg!h'i)mus(i_[oh:h]g) Ja(hiG'Fhhg)cob(g.) (;) de(eg) pó(i_[oh:h]g/ijIG.e_[oh:h]g_[oh:h]f_[oh:h]ivGFhhg)pu(ef)lo(f.) *(,) bár(ef'g~)ba(g)ro.(gv.fiH'Fg./f!hh) (,) (f!gwh'!ivH'Fg./f!hh) (,) (g!hwi!jvIH'ivHF'gffe.) (;) (ef/hffe//gihh'hhvG'FE//g_[uh:l]hggf.0) (::)",
      source: "Graduale Romanum (GregoBase #1380)"
    },
    offertory: {
      title: "Vir erat",
      latin: "Vir erat in terra nómine Job, simplex et rectus, ac timens Deum : quem Satan pétiit, ut tentáret : et data est ei potéstas a Dómino in facultáte et in carne ejus : perdidítque omnem substántiam ipsíus, et fílios : carnem quoque ejus gravi úlcere vulnerávit.",
      translation: "There was a man in the land named Job, simple and upright, and fearing God: whom Satan besought that he might tempt: and power was given to him by the Lord over his possessions and over his flesh: and he destroyed all his substance and his children: and afflicted his flesh also with a grievous ulcer.",
      mode: "Offertory · Ordinary Time · Mode II",
      gabc: "(c3) VIR(c) e(ef'g)rat(f.) *(,) in(fe~) ter(fhvhfgv_[oh:h]F~E~)ra(fe..) (;) nó(h)mi(hi_[oh:h]H'_[oh:h]GF)ne(f.e!fw!gvFE'f) Job,(f!gwhf.1) (:) sim(h'/igh)plex(f.) et(gh'i~) re(i_[oh:h]g/hihi)ctus,(f.) (;) ac(f) ti(fe)mens(f!gwh/ig/h_g) De(fhf)um :(fe/fgf.) (:) quem(fc~) Sa(ef'g)tan(fe~) pé(hi'j)ti(jiihi)it,(i_[oh:h]h) (;) ut(hhg) ten(fe~)tá(fg!hvGF'g)ret :(gf..) (:) et(f) da(h)ta(hi) est(i) e(ij)i(i.) pot(i)é(i'/jij)stas(hih.) (,) a(f) Dó(hi)mi(ivH'GhvGF'g)no(gf..) (;) in(fe~) fa(f)cul(hg~)tá(h)te(f.) (,) et(f) in(hg~) car(h)ne(f) e(fgF~'E~)jus :(fe/fgf.) (:) per(fc~)di(e)dít(fg~)que(f.) (,) o(fgF~'E~)mnem(f_e) sub(hg)stán(hi)ti(iv.hh/i_[oh:h]h)am(h) i(h)psí(hig/hg)us,(fe..) (;) et(fhf___!gw!h!gh~) fí(f)li(fg!hvGF'g)os :(gf..) (:) car(hhg~)nem(ih~) quo(hhg)que(fe) e(fgF~'E~)jus(f_e) (;) gra(f)vi(h) úl(hhg)ce(fe)re(f.) (,) vul(f)ne(h.f!gwh_g)rá(fg!hvGF'g)vit.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #1363)"
    },
    communion: {
      title: "In salutari tuo",
      latin: "In salutári tuo ánima mea, et in verbum tuum sperávi : quando fácies de persequéntibus me judícium? iníqui persecúti sunt me, ádjuva me, Dómine Deus meus.",
      translation: "My soul has longed for your salvation, and in your word have I hoped: when will you execute judgment on those who persecute me? The wicked have persecuted me: help me, O Lord my God.",
      mode: "Communion · Ordinary Time · Mode I",
      gabc: "(c4) IN(d) sa(df)lu(fe)tá(f)ri(g) tu(g)o(g.) *(,) á(e)ni(f)ma(ef) me(d_[oh:h]e_[oh:h]d_[oh:h])a,(d.) (;) et(c) in(d) ver(f)bum(fe~) tu(ghg)um(h) spe(ghg)rá(fg!hvGF'g)vi :(gf..) (:) quan(h)do(h) fá(h)ci(gh)es(h.) de(h) per(h)se(g)quén(h)ti(g)bus(fe) me(g_[uh:l]h) (,) ju(fe)dí(d)ci(d!ew!fvED'e)um?(e[ll:1]d..) (:) in(f)í(gh)qui(h) per(h)se(h)cú(hj)ti(h) sunt(gf~) me,(f.) (;) ád(h)ju(h)va(g) me,(g) Dó(h)mi(gf)ne(f_[oh:h]g_[oh:h]e_[oh:h]e[ll:1]d.0) (,) De(d!ewf!g'h)us(f_e) me(de!fvED'e)us.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1290)"
    }
  },

  // ---- 28th Sunday in Ordinary Time ---- (all parts common to A/B/C)
  "ot-28": {
    gradual: {
      title: "Si ambulem",
      latin: "Si ámbulem in médio umbrae mortis, non timébo mala : quóniam tu mecum es, Dómine. ℣. Virga tua, et báculus tuus, ipsa me consoláta sunt.",
      translation: "Though I should walk in the midst of the shadow of death, I will fear no evils: for you are with me, O Lord. ℣. Your rod and your staff, they have comforted me.",
      mode: "Gradual · Ordinary Time · Mode I",
      gabc: "(c4) SI(d) ám(fg)bu(gvF'EfvED'e)lem(e[ll:1]d..) *(,) in(f) mé(ghgh)di(hjH'GF'gwhgh)o(hg..) (,) um(hv.fg'h)brae(g) mor(fv.dfe)tis,(d//ffd/fhhg.) (;) non(dh) ti(hg)mé(h'/jij)bo(hv.fh!jvH'GF'g) ma(fv.dfe)la :(d!ffd) (,) (fge'/fgd'/e[ll:1]ddc.) (:) quó(f)ni(d)am(e) tu(f) me(ghgh./gh/jj//jjj)cum(g) es,(hg/hfg) (,) Dó(d)mi(d)ne.(dc/d!ff/ghG'Efgff/ded.) (::) ℣. Vir(h_f hvhggef)ga(d.) tu(dc/d!ff/gh!jjg)(,)(ixhhghvGF./[-0.5]hiHG'hw!ivHGhi)a,(h.) (;) et(dh) bá(h/jjh)cu(h!jjh)lus(h_g) tu(hg/h!jjjg ivHG'gf/gh/j.h!iwj_h)us,(h.) (:) i(h_f//hvhggef)psa(de) me(d_c/d!ewf!gv.fg!hvFEfg!hvhg.) *(,) con(g)so(gh)lá(ixjhiGF'h!jjvH'Gh')ta(d) sunt.(dc/d!ff/ghG'Efgff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #1121)"
    },
    alleluia: {
      title: "Qui timent Dominum",
      latin: "Allelúia. ℣. Qui timent Dóminum, sperent in eo : adjútor et protéctor eórum est.",
      translation: "Alleluia. ℣. Let those who fear the Lord hope in him: he is their helper and protector.",
      mode: "Alleluia · Ordinary Time · Mode I",
      gabc: "(c4) AL(d)le(ff)lú(gv.f!hgh){ia}.(hjH'GF.) *(;) ij.(e!gwhgh./fhg/hffvEC.) (,) (d!ewf!gv.egF'ED'ewfd.1) (::) ℣. Qui(cd) ti(ixdh//gihivGF//ggf/gg//fgh!jjg)(,)(ixhhghvGF.hiHG'hw!ivHGhi)ment(h.) (,) Dó(h_g/jjvH'Gixhihi)mi(g)num,(ge~) (,) spe(f_e/f!gwhgh)rent(hg/hf/ghg) in(gd) e(f_e/g_[oh:h]fgvFD'ewfd)o :(d.) (:) ad(d)jú(d/ffd/ffd def!gh)tor(ghg.) (,) et(f) pro(ghg)té(h/jjhhgh.)(,)(ixfh!ivGF'fd/ffhvGF'fvED)ctor(e[ll:1]d..) (;) * e(d)ó(d/fff/g_[oh:h]f)rum(f!hgh) est.(hjH'GF.) (;) (e!gwhgh./fhg/hffvEC.) (,) (d!ewf!gv.egF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #933)"
    },
    offertory: {
      title: "Recordare mei",
      latin: "Recordáre mei, Dómine, omni potentátui dóminans : da sermónem rectum in os meum, ut pláceant verba mea in conspéctu príncipis.",
      translation: "Remember me, O Lord, you who rule over all power: put well-ordered speech in my mouth, that my words may be pleasing in the sight of the prince.",
      mode: "Offertory · Ordinary Time · Mode I",
      gabc: "(c4) RE(ddc)cor(f)dá(fhg)re(ghh) me(g)i,(g.) *(,) Dó(ixgiHG'gfgvFD)mi(d!ewfd)ne,(d.) (;) o(d!f'g)mni(g) pot(g)en(g)tá(gg/hgh)tu(f/gfg)i(d!ewf) (,) dó(d!f'g)mi(gvF'EfvED'e)nans :(e[ll:1]d..) (:) da(d!f'g) ser(g)mó(g)nem(gh~) re(ixh_ghvGFixf'g/hg/hi)ctum(h.) (,) in(h) os(hjj) me(jkJ'IH)um,(ghg.) (;) ut(gh~) plá(h)ce(giwji/jkJ'IH)ant(hhg~) (,) ver(ixgihh)ba(g_[oh:h]e) me(fgffvED)a(d/ffd/fge'/fgD'Cd.) (:) in(c) con(d)spé(ghfff'gff'ff)(,)(fd/ffvD'Cd!ffd.)(,)(ghf/!ff'gff'ff)(,)(fd/ef/ggf//gf/ge/fgefvDC)(,)(ffd/ffc//g_[oh:h]f)ctu(fe/fe/f_g) prín(d)ci(dee[ll:1]d)pis.(d.) (::)",
      source: "Graduale Romanum (GregoBase #67)"
    },
    communion: {
      title: "Aufer a me",
      latin: "Aufer a me oppróbrium et contémptum, quia mandáta tua exquisívi, Dómine : nam et testimónia tua meditátio mea est.",
      translation: "Take away from me reproach and contempt, for I have sought your commandments, O Lord: for your testimonies are my meditation.",
      mode: "Communion · Ordinary Time · Mode II",
      gabc: "(f3) AU(hi)fer(ij) a(i) me(hi!jvji.) *(,) op(i)pró(j)bri(i)um(hg) et(hj) con(ih~)tém(i)ptum.(f.) (;) qui(f)a(fe) man(fhg)dá(h)ta(f) tu(hji)a(i.) (,) ex(gh)qui(gf)sí(gi)vi,(i) Dó(gh)mi(g)ne :(f.) (:) nam(ghg') et(f) te(ghg')sti(f)mó(g')ni(f)a(fe) tu(f)a(fc) (;) me(e)di(f)tá(fhG'F)ti(ef)o(f) me(fhG'F)a(g) est.(f.) (::)",
      source: "Graduale Romanum (GregoBase #828)"
    }
  },

  // ---- 29th Sunday in Ordinary Time ---- (all parts common to A/B/C)
  "ot-29": {
    gradual: {
      title: "Salvum fac populum",
      latin: "Salvum fac pópulum tuum, Dómine, et bénedic hereditáti tuae. ℣. Ad te, Dómine, clamávi : Deus meus, ne síleas a me, et ero símilis descendéntibus in lacum.",
      translation: "Save your people, O Lord, and bless your inheritance. ℣. To you, O Lord, have I cried: my God, be not silent to me, lest I become like those who go down into the pit.",
      mode: "Gradual · Ordinary Time · Mode VII",
      gabc: "(c3) SAl(e_f_d_2//fhf___//hih)vum(hhhvF'ED'ewfef) fac(fe..) (;) * pó(e)pu(ehg)lum(h) tu(ihi)um,(i.) (,) Dó(ijij)mi(ih)ne :(hv.gh!ivih/ii) (,) (hi!kkkikvvJI'jh//ivHGhg..) (:) et(e'!hi/kjk) bé(i.h!iwj)ne(ihi)dic(ig'hvF'Effe/ff) (,) (ef!hhhfhvvGF'he//fvEDe[ll:1]d..) (;) he(d')re(e)di(f)tá(hi!kvJI)ti(ig/hjIH'hefv.) (,) tu(hv.gih.1/f!hhvFDff//e!hhe'gvF'E)ae.(hf/hhf'ivH'GE) (,) (f!gwh_g/ihh'hhvF'Ef_gffe.) (::) ℣. Ad(eh) te(h.i!jwk) Dó(klK'I)mi(i_[oh:h]h)ne(hh) (,) cla(h)má(i_[oh:h]h/i!jw!kv_[hl:1]JI'H)vi :(hiH'GhvG'FEfe..) (:) De(f)us(h) me(h)us,(hhhf/hffd.) (,) ne(f) sí(hg/h_i)le(f)as(f!gw!hvG'FEfgf.) a(d) me,(d.0f!gwhhvG'FEfe..) (:) et(eh) e(h/i'j)ro(h_g) sí(hi)mi(i)lis(i_[hl:1]k_[hl:1]i_[hl:1]!jwkkvJIji..) (;) de(ikJI')scen(i)dén(ig/hi!kvvI'HijHFhv.hhhvF'ED.)(,)(f_d/ef!gwh'!iv)ti(h)bus(hhhvFDff//e!hhe'gvFE.) *(;) in(ef) la(e.f!gwh'!iv)cum.(ijIH'hghv.) (,) (ijIH'hgiv.kkkh/ijIG.hig'hvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #296)"
    },
    alleluia: {
      title: "Lauda anima mea",
      latin: "Allelúia. ℣. Lauda, ánima mea, Dóminum : laudábo Dóminum in vita mea : psallam Deo meo, quámdiu ero.",
      translation: "Alleluia. ℣. Praise the Lord, O my soul: I will praise the Lord in my life: I will sing to my God as long as I shall be.",
      mode: "Alleluia · Ordinary Time · Mode VIII",
      gabc: "(c3) Al(d!ef)le(f_e/f!gwhg)lú(fh/hh)ia.(hi/HF/fe.) (;) (gh//ef/ED.//f!gwh/hg////ehf/gf/fe.) (::) ℣. Lau(hv_//gih)da,(h) á(h)ni(h)ma(h) me(hg)a,(g) Dó(gh!ivivHF/hfg)mi(hg)num :(g.) (;) lau(gf~)dá(hji)bo(h) Dó(gh)mi(fe)num(e.) (,) in(eh~) vi(h/hg)ta(e.) me(gxfg/FD.//eg/FE/fe)a :(e.) (:) psal(e)lam(e) De(feh)o(h.) me(hfh'/GE//fh/FD//gxgvFE//f.//hhh/ij/HF.,gig___/ivHG'/he.//gxf_e/g_e//gvFE/fd)o,(d.) (;) quám(fd~)di(ef)u(f) e(hg/hfh)ro.(gh/FE.,df/hvFE//d.f!gwhg/hvGF/g.////egf/gvE'd/efe.,gxh/hvFE/fg/ED.//gyh/hvFE/fgf/fe.) (::)",
      source: "Graduale Romanum (GregoBase #3318)"
    },
    offertory: {
      title: "Meditabor",
      latin: "Meditábor in mandátis tuis, quae diléxi valde : et levábo manus meas ad mandáta tua, quae diléxi.",
      translation: "I will meditate on your commandments, which I have greatly loved: and I will lift up my hands to your commandments, which I have loved.",
      mode: "Offertory · Ordinary Time · Mode II",
      gabc: "(c3) ME(c)di(ef)tá(f/hhe/gf)bor(f.) *(,) in(e) man(f)dá(hih)tis(hh/ih) tu(hh/ihhvGF)is,(gf..) (;) quae(hg) di(h)lé(hji)xi(hji) val(h_g_f~)de :(f.) (:) et(e) le(f)vá(hhi)bo(h.hhh) (,) ma(fhh'1hh)nus(ef) me(fh)as(hhh/ih/!ih//h'hhvF'Ef.) (,) ad(e) man(f)dá(hih)ta(high) tu(fgffe)a,(e.) (;) quae(hg) di(h)lé(hjIH'/!hf//ih/!ih//h'hhvFE'D)(,)(efE'Defef)xi.(f!gwhhvGF'gwhhvGF.) (::)",
      source: "Graduale Romanum (GregoBase #810)"
    },
    communion: {
      title: "Domine Dominus noster",
      latin: "Dómine, Dóminus noster, quam admirábile est nomen tuum in univérsa terra!",
      translation: "O Lord, our Lord, how admirable is your name in all the earth!",
      mode: "Communion · Ordinary Time · Mode II",
      gabc: "(f3) DO(f)mi(e!gw!hvGF'g)ne(gf..) *(,) Dó(hih)mi(hg)nus(fe) no(f!gwhgh)ster,(gf..) (:) quam(kxhi!jkj) ad(j)mi(ji)rá(j)bi(i)le(i_0[uh:l]) est(j) (,) no(hvGEfg)men(f.) tu(fihhvG'E//f!gw!hvGF'g)um(gf..) (;) in(c) u(ef)ni(fe)vér(f!hhhvFE'D//e!gef)sa(f) ter(fg!hvGF'g)ra!(gf..) (::)",
      source: "Graduale Romanum (GregoBase #998)"
    }
  },

  // ---- 30th Sunday in Ordinary Time ----
  // Gradual splits A & B "Unam petii" / C "Clamaverunt iusti";
  // alleluia, offertory, communion common.
  "ot-30": {
    alleluia: {
      title: "Lauda Jerusalem",
      latin: "Allelúia. ℣. Lauda, Jerúsalem, Dóminum : lauda Deum tuum, Sion.",
      translation: "Alleluia. ℣. Praise the Lord, O Jerusalem: praise your God, O Sion.",
      mode: "Alleluia · Ordinary Time · Mode IV",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) ij.(ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. Lau(h)da,(ixg'//ivHG'hffe.) (,) Je(fd)rú(ef)sa(g)lem,(ixg./hiHFhfg.) Dó(ixgh!i'j)mi(g)num :(giHG.) (:) lau(ixge/ghF'EghF'Ef_h//ivGFhvGFge~)da(e.) (,) De(ef'g)um(gh~) tu(ixhi_[oh:h]H'_[oh:h]GF)um,(ghg.___) *(;) Si(ixg!hwih)on.(hv.ghgfffd//gfg/ffdgvFE.) (::)",
      source: "Graduale Romanum (GregoBase #641)"
    },
    offertory: {
      title: "Domine vivifica me",
      latin: "Dómine, vivífica me secúndum elóquium tuum : ut sciam testimónia tua.",
      translation: "O Lord, give me life according to your word: that I may know your testimonies.",
      mode: "Offertory · Ordinary Time · Mode III",
      gabc: "(c4) DO(j)mi(h)ne,(h!iwj/k_[hl:1]jj'jhhg//i_[hl:1]k_[hl:1]i._[hl:1]) (,) * vi(e_[oh:h]g_[oh:h]e_[oh:h])ví(gh)fi(g)ca(hjhhg/h!iwjij) me(ji..) (;) se(ikj)cún(jjj)dum(h_g) e(ghe)ló(g)qui(gihhg)um(g) tu(f)um :(fgff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) ut(g) sci(h_g/h!iwj_i)am(j.) (,) te(jj//jj)sti(g)mó(h_f)ni(g)a(g/jjh/ig/h_g) tu(egff)a.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #109)"
    },
    communion: {
      title: "Laetabimur",
      latin: "Laetábimur in salutári tuo : et in nómine Dómini Dei nostri magnificábimur.",
      translation: "We will rejoice in your salvation: and in the name of the Lord our God we will be magnified.",
      mode: "Communion · Ordinary Time · Mode II",
      gabc: "(f3) LAe(f)tá(fefvEDefef)bi(g)mur(f!gwh.) *(,) in(hf~) sa(hih)lu(iji)tá(jlKJ')ri(i) tu(hg/hihi)o :(f!gwh.) (;) et(f) in(h) nó(ij)mi(i)ne(i) Dó(j)mi(ih)ni(hihh/fgf.) (,) De(hhg)i(hi/jij) no(h)stri(hv.fgFE.) (,) ma(e)gni(hg)fi(hi)cá(iv.giHG'F//e_[uh:l]f)bi(e.[ll:1]d!ewfe/fg)mur.(f.) (::)",
      source: "Graduale Romanum (GregoBase #1296)"
    }
  },
  // ot-30, Years A & B: Gradual "Unam petii"
  "ot-30-a": {
    gradual: {
      title: "Unam petii",
      latin: "Unam pétii a Dómino, hanc requíram : ut inhábitem in domo Dómini. ℣. Ut vídeam voluptátem Dómini, et prótegar a templo sancto ejus.",
      translation: "One thing I have asked of the Lord, this will I seek after: that I may dwell in the house of the Lord. ℣. That I may behold the delight of the Lord, and be protected by his holy temple.",
      mode: "Gradual · Ordinary Time (Years A & B) · Mode V",
      gabc: "(c4) U(ffg)nam(f) pé(ghgh)ti(g)i(fgFD.1) (,) * a(d) Dó(dgf/gh)mi(g)no,(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) hanc(hj~) re(j_h)quí(jhjjh)ram,(h.) (;) ut(h) in(hj)há(j)bi(ixij!kvJ'IHi)tem(ih..) (,) in(ixi) do(hhg)mo(gh) Dó(hg/hf/g_[oh:h]f)mi(ef)ni.(ixf./hiHF.) (,) (hg/hjhh/fgf.) (z0::c3) ℣. Ut(d) ví(d)de(f)am(gxfh/ih/i_[oh:h]h//ivFD'//fh.ivFD'f!hfg.) (,) (fh/ih/i_[oh:h]h//ivFD'e_[oh:h][ll:1]d.0d'dd!f_h/ijh.1) (;) vo(hi)lu(h)ptá(h)tem(hg/ij) Dó(i_[oh:h]h)mi(h)ni :(hg/i_[oh:h]h//jvIH'Ghf..) (:) et(hh) pró(ih/ij_h ih/ij_ij//hi/jij)te(j)gar(jh/jkihh/fgf.) (;) a(d) tem(d)plo(d) san(dfE'D)cto(ef) *() e(fhG'Fhhh)jus.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #229)"
    }
  },
  // ot-30, Year B: Gradual "Unam petii" (shared with Year A)
  "ot-30-b": {
    gradual: {
      title: "Unam petii",
      latin: "Unam pétii a Dómino, hanc requíram : ut inhábitem in domo Dómini. ℣. Ut vídeam voluptátem Dómini, et prótegar a templo sancto ejus.",
      translation: "One thing I have asked of the Lord, this will I seek after: that I may dwell in the house of the Lord. ℣. That I may behold the delight of the Lord, and be protected by his holy temple.",
      mode: "Gradual · Ordinary Time (Years A & B) · Mode V",
      gabc: "(c4) U(ffg)nam(f) pé(ghgh)ti(g)i(fgFD.1) (,) * a(d) Dó(dgf/gh)mi(g)no,(ixg./hiGF'fd/f_[oh:h]g_[oh:h]f._[oh:h]) (;) hanc(hj~) re(j_h)quí(jhjjh)ram,(h.) (;) ut(h) in(hj)há(j)bi(ixij!kvJ'IHi)tem(ih..) (,) in(ixi) do(hhg)mo(gh) Dó(hg/hf/g_[oh:h]f)mi(ef)ni.(ixf./hiHF.) (,) (hg/hjhh/fgf.) (z0::c3) ℣. Ut(d) ví(d)de(f)am(gxfh/ih/i_[oh:h]h//ivFD'//fh.ivFD'f!hfg.) (,) (fh/ih/i_[oh:h]h//ivFD'e_[oh:h][ll:1]d.0d'dd!f_h/ijh.1) (;) vo(hi)lu(h)ptá(h)tem(hg/ij) Dó(i_[oh:h]h)mi(h)ni :(hg/i_[oh:h]h//jvIH'Ghf..) (:) et(hh) pró(ih/ij_h ih/ij_ij//hi/jij)te(j)gar(jh/jkihh/fgf.) (;) a(d) tem(d)plo(d) san(dfE'D)cto(ef) *() e(fhG'Fhhh)jus.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #229)"
    }
  },
  // ot-30, Year C: Gradual "Clamaverunt iusti"
  "ot-30-c": {
    gradual: {
      title: "Clamaverunt iusti",
      latin: "Clamavérunt justi, et Dóminus exaudívit eos : et ex ómnibus tribulatiónibus eórum liberávit eos. ℣. Juxta est Dóminus his qui tribuláto sunt corde : et húmiles spíritu salvábit.",
      translation: "The just cried, and the Lord heard them: and delivered them out of all their troubles. ℣. The Lord is near to those who are of a contrite heart: and he will save the humble of spirit.",
      mode: "Gradual · Ordinary Time (Year C) · Mode VII",
      gabc: "(c3) CLa(e)ma(ded)vé(ef)runt(e.f!gw!hvGF'g) ju(ef/hfg)sti,(fe..) *(;) et(gh'i~) Dó(i)mi(hg/hiih/ij)nus(i.) (,) ex(i)au(ih~)dí(i/kki)vit(ij) e(i.h!iwj)os :(ji/ji/jh//ivHGhg..) (:) et(fhg) ex(hi) ó(ig/h_i)mni(ighvGF'gh)bus(g.) (,) tri(h)bu(h)la(g)ti(h)ó(i)ni(h)bus(i) e(h)ó(h)rum(hhhvF'E) (,) (ffe/ff//ef!hhhf//hvvGF'he//fvEDe[ll:1]d..) (;) li(e)be(f)rá(ggh)vit(fi!jv) e(hg)os.(g./e!hfh./ghF'Ef_gffe.) (::) ℣. Jux(e)ta(e) est(g') Dó(i/kkihjihhe.)(,)(gi/kkihjihhe.)(,)(fhg___/hhfhvF'De_[oh:h][ll:1]d)(,)(hhf/hhvF'De[ll:1]d..)(;)([oh:{]hhi/klj___//kvJIjvIHihi)mi(i)nus(i_k_i_!jwkkvJIji..) (;) his,(i) qui(i) tri(i)bu(h)lá([oll:0{0]kk/lkl[oll:}])to(lkkvJI) sunt(i_k_i_!jwkkvJIji..[oh:}]) (;) cor(i/jg/h_i//ji/jg/h_i)(,)(kkh/jijvHF'gwh!iv.giH'GE)(,)(f!hgh./fh//ghF'Dev.)(;)(i_[uh:l]jI'//Ef_e//f!gwh!iv.h!kki)(,)([oh:{]k_j/l_klvKI.[oh:}]//kjkvIH'iwj)de :(ijhivHGhg..) (:) et(g) hú(ijij)mi(jiigh)les(h_g) spí(g)ri(iggf/giG'Fg)tu(ef..) (;) * sal(ef'g~)vá(giHG'j)bit.(iig.) (,) (h_ghvFE.ghFE.gfiv.iiigg//egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #1009)"
    }
  },

  // ---- 31st Sunday in Ordinary Time ----
  // Alleluia splits A & B "Verbo Domini" / C "O quam bonus";
  // gradual, offertory, communion common.
  "ot-31": {
    gradual: {
      title: "Suscepimus Deus",
      latin: "Suscépimus, Deus, misericórdiam tuam in médio templi tui : secúndum nomen tuum, Deus, ita et laus tua in fines terrae. ℣. Sicut audívimus, ita et vídimus in civitáte Dei nostri, in monte sancto ejus.",
      translation: "We have received your mercy, O God, in the midst of your temple: according to your name, O God, so also is your praise unto the ends of the earth. ℣. As we have heard, so have we seen, in the city of our God, in his holy mountain.",
      mode: "Gradual · Ordinary Time · Mode V",
      gabc: "(c4) SUs(d)cé(ffg)pi(f)mus,(f.) *(,) De(ghg'/hg)us,(gv.fgFD.1) (,) mi(d)se(ffg)ri(f)cór(fg~)di(f)am(f) tu(fffvDC'dff/hghf)am(f.) (;) in(hj~) mé(j)di(kvJH)o(h) tem(f)pli(h) tu(gv.fhf/gh)i :(g.) (:) se(h)cún(hg~)dum(j) no(j)men(ij) tu(hhg)um,(h_g) De(fg!hvGF'g)us,(gf..) (;) i(ffg)ta(f) et(f) laus(ghg'hvG'F) tu(fv.ege/f_d)a(dc..) (;) in(fgf) fi(fg'h)nes(ixhjHG'hw!ivHG') ter(f)rae.(fffvDC.) (,) (fg!hvGF.e!g'h//fhg/hggf.0) (z0::c3) ℣. Sic(d)ut(d) au(fe~)dí(eh)vi(h)mus,(h_[oh:h]i_[oh:h]h_2[oh:h]//i_[oh:h]hjvHF.1) (,) (h_g/ijh'___ jvIH'jvIH'//hvGF.) (:) i(f!h'i)ta(ih/jkihhf.) (,) et(f) ví(hfh)di(hhh)mus(h.f!gwh!iv.hi/jhh/iih.0) (:) in(d) ci(d)vi(d)tá(d)te(d) De(d)i(d) no(de)stri,(d.) (,) in(d) mon(d)te(d) san(dfE'D)cto(ef) *() e(fhG'Fhhh)jus.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #50)"
    },
    offertory: {
      title: "Benedic anima mea",
      latin: "Bénedic, ánima mea, Dómino, et noli oblivísci omnes retributiónes ejus : et renovábitur, sicut áquilae, juvéntus tua.",
      translation: "Bless the Lord, O my soul, and forget not all his benefits: and your youth shall be renewed like the eagle's.",
      mode: "Offertory · Ordinary Time · Mode V",
      gabc: "(c3) BE(d)ne(f)dic(hh) *(,) á(hihi)ni(f)ma(fe) me(fh)a(hhi) Dó(ijI'H)mi(ih)no,(h_[oh:h]i_[oh:h]h._[oh:h]) (;) et(f) no(f!h'i)li(ih) ob(hihhg)li(fe)ví(f)sci(hh) (,) o(hf~)mnes(gxg_[oh:h]f) re(d)tri(ef)bu(fe)ti(gyf!gwh)ó(h_g)nes(hihhg) e(f!gwhgh)jus :(gf..) (:) et(g) re(e)no(f)vá(h)bi(hhh)tur,(h.) (,) sic(ivHF)ut(h.f!gwh_g) á(hf/hh//hhh)qui(fgFE'f)lae,(fe..) (;) ju(hh)vén(h_f/hhf/hhf./def!hh/ijH'FhvGEf.)(,)(f!hh//hhh.f!gwh)tus(hhh_f) tu(d_[oh:h]e_[oh:h]d_[oh:h])a.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1359)"
    },
    communion: {
      title: "Notas mihi fecisti",
      latin: "Notas mihi fecísti vias vitae : adimplébis me laetítia cum vultu tuo, Dómine.",
      translation: "You have made known to me the ways of life: you will fill me with joy with your countenance, O Lord.",
      mode: "Communion · Ordinary Time · Mode VII",
      gabc: "(c3) NO(j)tas(iji) * mi(j)hi(i) fe(h)cí(iji)sti(g.) (,) vi(h)as(f_e/f!gwh_g) vi(igh)tae :(g.f!gwh_fgvFEfe..) (:) ad(e)im(fg~)plé(g)bis(ihh) me(gf/ghg.) (,) lae(ge)tí(gi)ti(ihhgh)a(hg..) (;) cum(gf~) vul(e!fw!gvFEfg)tu(f) tu(h)o,(hvvGF'gw!hvGF') Dó(e)mi(ef!gvFE'f)ne.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #531)"
    }
  },
  // ot-31, Years A & B: Alleluia "Verbo Domini"
  "ot-31-a": {
    alleluia: {
      title: "Verbo Domini",
      latin: "Allelúia. ℣. Verbo Dómini caeli firmáti sunt, et Spíritu oris ejus omnis virtus eórum.",
      translation: "Alleluia. ℣. By the word of the Lord the heavens were established, and all their host by the spirit of his mouth.",
      mode: "Alleluia · Ordinary Time (Years A & B) · Mode VIII",
      gabc: "(c4) AL(gf~)le(defghg___)lú(fg~){ia}.(g.) *(;) (ghgfgfdeddc.) (,) (cd!ef!gv'1//hihhg.) (::) ℣. Ver(cd!e!fwg)bo(g.) Dó(fe)mi(fg)ni(g.) (,) cae(ghg___jvIHG'Efg)li(g.) fir(gvF~D~)má(evDC)ti(dc) sunt,(c.) (:) et(cd) Spí(ef/ghg___)ri(fg)tu(g.) (,) o(g)ris(g) e(ghgfgfdeddc~)jus(c.) (;) o(c)mnis(d) vir(e!fwg)tus(g.) *() e(hg)ó(fg)rum.(ghgfgfdeddc.) (,) (cd!ef!gv'1//hihhg.) (::)",
      source: "Graduale Romanum (GregoBase #635)"
    }
  },
  // ot-31, Year B: Alleluia "Verbo Domini" (shared with Year A)
  "ot-31-b": {
    alleluia: {
      title: "Verbo Domini",
      latin: "Allelúia. ℣. Verbo Dómini caeli firmáti sunt, et Spíritu oris ejus omnis virtus eórum.",
      translation: "Alleluia. ℣. By the word of the Lord the heavens were established, and all their host by the spirit of his mouth.",
      mode: "Alleluia · Ordinary Time (Years A & B) · Mode VIII",
      gabc: "(c4) AL(gf~)le(defghg___)lú(fg~){ia}.(g.) *(;) (ghgfgfdeddc.) (,) (cd!ef!gv'1//hihhg.) (::) ℣. Ver(cd!e!fwg)bo(g.) Dó(fe)mi(fg)ni(g.) (,) cae(ghg___jvIHG'Efg)li(g.) fir(gvF~D~)má(evDC)ti(dc) sunt,(c.) (:) et(cd) Spí(ef/ghg___)ri(fg)tu(g.) (,) o(g)ris(g) e(ghgfgfdeddc~)jus(c.) (;) o(c)mnis(d) vir(e!fwg)tus(g.) *() e(hg)ó(fg)rum.(ghgfgfdeddc.) (,) (cd!ef!gv'1//hihhg.) (::)",
      source: "Graduale Romanum (GregoBase #635)"
    }
  },
  // ot-31, Year C: Alleluia "O quam bonus"
  "ot-31-c": {
    alleluia: {
      title: "O quam bonus",
      latin: "Allelúia. ℣. O quam bonus et suávis est, Dómine, Spíritus tuus in nobis!",
      translation: "Alleluia. ℣. O how good and sweet, O Lord, is your Spirit within us!",
      mode: "Alleluia · Ordinary Time (Year C) · Mode I",
      gabc: "(c4) AL(c)le(d!fdf)lú(ef!gvFEfg~){ia}.(g.) *(;) ij.(hvGFgvFEf_g hvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'ED de!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::) ℣. O(h) quam(h) bo(h_g)nus(g_[oh:h]e//fgf/gddc.) (,) et(c) su(d)á(ef'g)vis(g_[oh:h]e) est,(g_[uh:l]h) Dó(fvED)mi(d.c!dw!evDCde)ne,(d.) (:) Spí(dede)ri(c)tus(e) tu(ixg_[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(ixce!g_4[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(gv.ef/g_[oh:h]e/f_dev.)(,)(gv./!ef/!g_[oh:h]e/!f_d/!ev.c!dwe'!fv)us(e[ll:1]d..) *(:) in(c) no(d!fdf)bis!(ef!gvFEfg..) (,) (hvGFgvFEf_g hvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'ED de!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::)",
      source: "Graduale Romanum (GregoBase #119)"
    }
  },

  // ---- 32nd Sunday in Ordinary Time ----
  // Alleluia & Communion split: A "Quinque prudentes" (both) / B & C
  // "Qui posuit fines" (alleluia) + "Dominus regit me" (communion).
  // Gradual & Offertory common.
  "ot-32": {
    gradual: {
      title: "Dirigatur oratio mea",
      latin: "Dirigátur orátio mea sicut incénsum in conspéctu tuo, Dómine. ℣. Elevátio mánuum meárum sacrifícium vespertínum.",
      translation: "Let my prayer be directed as incense in your sight, O Lord. ℣. The lifting up of my hands as an evening sacrifice.",
      mode: "Gradual · Ordinary Time · Mode VII",
      gabc: "(c2) DI(c)ri(cg)gá(g)tur(g_[oh:h]e/fgddc.) (,) * o(c)rá(c!feg)ti(gh)o(hfg) me(gh!ivHG'h)a(gh/ih..) (;) sic(f)ut(g) in(hj~)cén(j)sum(j_g/hg..) (,) in(g) con(h)spé(hj)ctu(i) tu(hfg)o,(g_[oh:h]e//fgf'/gddc.) (;) Dó(ffd/fef)mi(e)ne.(ce!ghGF'fe//ced/e[ll:1]ddc.) (::) ℣. E(f)le(g)vá(g_[uh:l]j//ij/kii'iivGF'fd)(,)(ffd/ffg)ti(g)o(g_[oh:h]f//gih/ijhhg.) (;) má(gj)nu(j_0)um(k) me(g)á(igge//fhGF'fd!ew!fvE'DC'd)rum(dc..) (:) sa(c)cri(d)fí(fgf)ci(dgf/gh)um(g.) *(,) ves(c)per(ff)tí(fv.ef/gfg)num.(gge./giHG'ivHG'ge.) (,) (fge'fvD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #44)"
    },
    offertory: {
      title: "Gressus meos",
      latin: "Gressus meos dírige secúndum elóquium tuum : ut non dominétur mei omnis injustítia, Dómine.",
      translation: "Direct my steps according to your word: that no iniquity may have dominion over me, O Lord.",
      mode: "Offertory · Ordinary Time · Mode VIII",
      gabc: "(c4) GRes(f)sus(fg) me(g)os(g.) *(,) dí(ghg)ri(gef)ge(d!ff) Dó(ixfh!ivHG)mi(ghg___)ne(g.) (;) se(j)cún(jjjvHG'gf/gh!jjjgivHG'gf!gwh!iv_[oh:h]H~G~)dum(hg..) (,) e(f)ló(fg!hvhg)qui(g.h!iwji)um(ih~) tu(jkj)um :(hihhg.) (:) ut(fg'h~) non(g!jj//jjj) do(h)mi(hg)né(h)tur(ge/fg!hvhg.) (;) o(ge~)mnis(fgffgD'Cd.) in(c)ju(d)stí(dg)ti(gf)a,(g.jvvIH'iw!jvIH) (,) Dó(hg)mi(gh/jhi)ne.(hg..) (::)",
      source: "Graduale Romanum (GregoBase #1099)"
    }
  },
  // ot-32, Year A: Alleluia & Communion "Quinque prudentes virgines"
  "ot-32-a": {
    alleluia: {
      title: "Quinque prudentes virgines",
      latin: "Allelúia. ℣. Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus : média autem nocte clamor factus est : Ecce sponsus venit, exíte óbviam Christo Dómino.",
      translation: "Alleluia. ℣. The five wise virgins took oil in their vessels with the lamps: and at midnight there was a cry: Behold the bridegroom comes, go forth to meet Christ the Lord.",
      mode: "Alleluia · Ordinary Time (Year A) · Mode VII",
      gabc: "(c3) AL(ef)le(ev.df!hvGF)lú(hi){ia}.(i.) (,) * ij.(jvIH'hvG'FE.fgFE.) (;) (df!hvGFhi//jvIH'hvG'FE.d/fgffe.) (::) ℣. Quin(ef)que(e.) pru(df!hvGF)dén(hi)tes(i) vír(iji)gi(hi)nes(i.) (;) ac(i)ce(ijI'H)pé(h)runt(hf) ó(gfgvFE//fhG'FEfe)le(de)um(e.) (;) in(efe) va(d)sis(fh) su(h)is(hf) (,) cum(g) lam(fg)pá(ef!gvFEfe)di(de)bus :(e.) (:) mé(f)di(e')a(d) au(e)tem(f) no(hi/hji)cte(i.) (;) cla(hik)mor(kvvJIjvIHi.) (,) (hi!kvvJIjvIHi.) (,) (jvIH'hvG'FE) fa(fe)ctus(de) est :(e.) (:) Ec(f)ce(e[ll:1]d) spon(e)sus(f) ve(hi/hji)nit :(i.) (;) ex(ijI'H)í(h)te(hf) ób(gfgvFE//fhG'FEfe)vi(de)am(e.) (;) Chri(f)sto(efE'D) ()* Dó(df!hvGF)mi(hi)no.(i.) (,) (jvIH'hvG'FE.fgFE.) (;) (df!hvGFhi//jvIH'hvG'FE.d/fgffe.) (::)",
      source: "Graduale Romanum (GregoBase #301)"
    },
    communion: {
      title: "Quinque prudentes virgines",
      latin: "Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus : média autem nocte clamor factus est : Ecce sponsus venit, exíte óbviam Christo Dómino.",
      translation: "The five wise virgins took oil in their vessels with the lamps: and at midnight there was a cry: Behold the bridegroom comes, go forth to meet Christ the Lord.",
      mode: "Communion · Ordinary Time (Year A) · Mode V",
      gabc: "(c3) QUin(dde~)que(d) *() pru(d)dén(ef~)tes(f) vír(f!gwh)gi(e)nes(deD/B.1) (;) ac([ull:1{1]b)ce(b[ull:}])pé(ded)runt(dc~) ó(efef)le(ef)um(f.) (;) in(df~) va(f)sis(ef) su(d)is(dc) cum(e) lam(ef~)pá(d)di(de!fvED'e)bus :(e[ll:1]d..) (:) mé(f)di(e)a(d) au(e)tem(f) no(hjI'H)cte(h.) (,) cla(hi)mor(j_i) fa(h)ctus(gh) est :(hihh/fgf.) (;) Ec(f)ce(e_[oh:h][ll:1]d) spon(e)sus(f) ve(hjI'H)nit(h.) (,) ex(i)í(i!jwk)te(h.) ób(gxffg)vi(e[ll:1]d)am(d.) (,) Chri(gxd!ffg)sto(ehhh.f!gw!hvGE'fgd') Dó(d)mi(d_[oh:h]e_[oh:h]d_[oh:h])no.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1301)"
    }
  },
  // ot-32, Year B: Alleluia "Qui posuit fines" + Communion "Dominus regit me"
  "ot-32-b": {
    alleluia: {
      title: "Qui posuit fines",
      latin: "Allelúia. ℣. Qui pósuit fines tuos pacem, et ádipe fruménti sátiat te.",
      translation: "Alleluia. ℣. He has made your borders peace, and fills you with the fat of corn.",
      mode: "Alleluia · Ordinary Time (Years B & C) · Mode IV",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) (ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. Qui(h) pó(h)su(g)it(ixg'//ivHG'hffe.) (,) fi(fd/ef!ghhg)nes(gh) tu(hg/hf/ghg)os(g_[oh:h]d) pa(e!gfg)cem,(fe..) (:) et(f) á(gh)di(gf)pe(g) fru(fd)mén(fv.fffdgvFE.)(,)(df/h_f/g_[oh:h]efv.df/gV!ef~)ti(fe..) *(;) sá(ef'g)ti(gdgvFE)at(fd/ef!g'h) te.(ixhiHG'gf.0) (,) (ixhiHG'ge./ghGF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #700)"
    },
    communion: {
      title: "Dominus regit me",
      latin: "Dóminus regit me, et nihil mihi déerit : in loco páscuae ibi me collocávit : super aquam refectiónis educávit me.",
      translation: "The Lord rules me, and I shall want nothing: he has set me in a place of pasture: he has brought me up on the water of refreshment.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode II",
      gabc: "(f3) DO(h)mi(gh)nus(f!gw!hvGE.) ()* re(hiH'G)git(h!iwjij) me,(ji..) (;) et(i) ni(j)hil(i) mi(hg)hi(f) dé(hgh)e(fgFE'f)rit :(ef/gf..) (:) in(ef) lo(fhhi)co(h) pá(hg/h_i)scu(f!gw!hvG'FE'f)ae(fe..) (;) i(hg/h_i)bi(i) me(hvvGF) col(h.f!gwh)lo(h)cá(gh)vit :(h.) (:) su(hg)per(h) a(ij)quam(iji) re(h)fe(hg)cti(f)ó(f)nis(ef!gvgf.0) (;) e(hg)du(hi)cá(iv.giHG'F//e_[uh:l]f)vit(e.[ll:1]d!ewfe/fg) me.(f.) (::)",
      source: "Graduale Romanum (GregoBase #278)"
    }
  },
  // ot-32, Year C: Alleluia "Qui posuit fines" + Communion "Dominus regit me" (shared with Year B)
  "ot-32-c": {
    alleluia: {
      title: "Qui posuit fines",
      latin: "Allelúia. ℣. Qui pósuit fines tuos pacem, et ádipe fruménti sátiat te.",
      translation: "Alleluia. ℣. He has made your borders peace, and fills you with the fat of corn.",
      mode: "Alleluia · Ordinary Time (Years B & C) · Mode IV",
      gabc: "(c4) AL(fd~)le(ef'g)lú(hgh){ia}.(ixhiHG'gf.0) *(,) (ixhiHG'ge./ghGF'Ef_gffe.) (::) ℣. Qui(h) pó(h)su(g)it(ixg'//ivHG'hffe.) (,) fi(fd/ef!ghhg)nes(gh) tu(hg/hf/ghg)os(g_[oh:h]d) pa(e!gfg)cem,(fe..) (:) et(f) á(gh)di(gf)pe(g) fru(fd)mén(fv.fffdgvFE.)(,)(df/h_f/g_[oh:h]efv.df/gV!ef~)ti(fe..) *(;) sá(ef'g)ti(gdgvFE)at(fd/ef!g'h) te.(ixhiHG'gf.0) (,) (ixhiHG'ge./ghGF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #700)"
    },
    communion: {
      title: "Dominus regit me",
      latin: "Dóminus regit me, et nihil mihi déerit : in loco páscuae ibi me collocávit : super aquam refectiónis educávit me.",
      translation: "The Lord rules me, and I shall want nothing: he has set me in a place of pasture: he has brought me up on the water of refreshment.",
      mode: "Communion · Ordinary Time (Years B & C) · Mode II",
      gabc: "(f3) DO(h)mi(gh)nus(f!gw!hvGE.) ()* re(hiH'G)git(h!iwjij) me,(ji..) (;) et(i) ni(j)hil(i) mi(hg)hi(f) dé(hgh)e(fgFE'f)rit :(ef/gf..) (:) in(ef) lo(fhhi)co(h) pá(hg/h_i)scu(f!gw!hvG'FE'f)ae(fe..) (;) i(hg/h_i)bi(i) me(hvvGF) col(h.f!gwh)lo(h)cá(gh)vit :(h.) (:) su(hg)per(h) a(ij)quam(iji) re(h)fe(hg)cti(f)ó(f)nis(ef!gvgf.0) (;) e(hg)du(hi)cá(iv.giHG'F//e_[uh:l]f)vit(e.[ll:1]d!ewfe/fg) me.(f.) (::)",
      source: "Graduale Romanum (GregoBase #278)"
    }
  },

  // ---- 33rd Sunday in Ordinary Time ----
  // Communion splits A & B "Amen dico vobis" / C "Domine quinque talenta";
  // gradual, alleluia, offertory common.
  "ot-33": {
    gradual: {
      title: "Liberasti nos",
      latin: "Liberásti nos, Dómine, ex affligéntibus nos : et eos qui nos odérunt, confudísti. ℣. In Deo laudábimur tota die, et in nómine tuo confitébimur in saécula.",
      translation: "You have saved us, O Lord, from those who afflict us: and you have put to shame those who hate us. ℣. In God we will glory all the day long: and in your name we will give praise for ever.",
      mode: "Gradual · Ordinary Time · Mode VII",
      gabc: "(c2) LI(d)be(ff)rá(fg)sti(fg'h) nos,(fef.) *(,) Dó(ihig)mi(fg)ne,(g_[oh:h]d//gih/ijhhg.) (;) ex(g) af(gih)fli(ij)gén(j)ti(g)bus(jh/ihig) nos :(g_[oh:h]e//fgf/gddc.) (:) et(c) e(df)os(fdf) qui(d) nos(fe) o(fg)dé(ggfgd//ef/gfg)runt,(fe..) (;) con(gih)fu(jhhggefv.dfe)dí(cdc)sti.(c!e'g) (,) (ce'!gvgv'1FD//ced/e[ll:1]ddc.) (::) ℣. In(cg) De(gv.fg!hvFD'gvF'EC'd//ffdevDCdv[ll:1]/CBc.)(,)(ff//fffc/dfD'[ull:0]BdfD'Bc.)(,)(ffg/iiivGFE./[-0.5]ghGF'Ef_g)o(g.) (;) lau(hi'j~)dá(j)bi(i)mur(i_[oh:h]h) to(i_[oh:h]h/ikj)ta(jiig) (,) di(gig/iivG'Fg!hwi_[oh:h]h)e,(iiivHG'hfgvFEfe..) (:) et(c) nó(ff)mi(d)ni(c) tu(gfg)o(gge//fgf/gddc.) (;) con(c)fi(d)té(fgf)bi(dgf/gh)mur(g.) *(,) in(cd) saé(fgf)cu(dgf/gh)la.(g.) (;) (cg/i.g!hwi_[oh:h]g/!iigffd//ceDC.) (::)",
      source: "Graduale Romanum (GregoBase #395)"
    },
    alleluia: {
      title: "De profundis",
      latin: "Allelúia. ℣. De profúndis clamávi ad te, Dómine : Dómine, exáudi vocem meam.",
      translation: "Alleluia. ℣. Out of the depths I have cried to you, O Lord: Lord, hear my voice.",
      mode: "Alleluia · Ordinary Time · Mode VII",
      gabc: "(c2) AL(cd)le(c)lú(cfe/gh){ia}.(g.) *(;) ij.(fg/ihivHGhhg//hih/ig.) (;) (fg/ihivHGhhg//hih/ig.) (;) (fg/ihivHG'hffdfv.) (,) (ef!hvGF.efDC.) (,) (e.f!gw!hvGF.efD'Cd_eddc.) (::) ℣. De(cd) pro(c)fún(cfe/gh)dis(g.) (,) cla(g)má(g!hwi/jiivHG)vi(ghfgvFEfe..) (;) ad(dg) te,(ghGF'gffvED'ew!fvED'e) Dó(c)mi(cd'e)ne :(dc..) (:) Dó(cfe/gh)mi(g)ne(g.) (,) ex(gh!i'j)áu(j_k)di(g_[oh:h]i_[oh:h]g_[oh:h]!hwi_[oh:h]hivHGhg..) (;) * vo(dfe)cem(fg) me(g)am.(g.) (,) (fg/ihivHGhhg//hih/ig.) (;) (fg/ihivHGhhg//hih/ig.) (;) (fg/ihivHG'hffdfv.) (,) (ef!hvGF.efDC.) (,) (e.f!gw!hvGF.efD'Cd_eddc.) (::)",
      source: "Graduale Romanum (GregoBase #331)"
    },
    offertory: {
      title: "De profundis",
      latin: "De profúndis clamávi ad te, Dómine : Dómine, exáudi oratiónem meam : de profúndis clamávi ad te, Dómine.",
      translation: "Out of the depths I have cried to you, O Lord: Lord, hear my prayer: out of the depths I have cried to you, O Lord.",
      mode: "Offertory · Ordinary Time · Mode II",
      gabc: "(f3) DE(c) pro(e)fún(f'/hf/hhh)dis(f_ef.) *(,) cla(e)má(e.f!gwh_f)vi(h_g) ad(hghf) te,(fgE'Defef) Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne :(f.) (:) Dó(hig'/hf)mi(ef)ne(ff) (,) ex(hji)áu(high)di(f.) (,) o(f)ra(fe)ti(gih)ó(hhhe/gf)nem(fg) me(f)am :(f//hhhe/g_[oh:h]f) (,) (f'/hg/hiG'F//g_[oh:h]fgvFEfvEC//e.f!gwh_f) (,) (h_f/hhhvFE'ec/eef.) (:) de(c) pro(e)fún(f'/hf/hhh)dis(f_ef.) (,) cla(e)má(e.f!gwh_f)vi(h_g) ad(hghf) te,(fgE'Defef) Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne.(f.) (::)",
      source: "Graduale Romanum (GregoBase #986)"
    }
  },
  // ot-33, Years A & B: Communion "Amen dico vobis quidquid orantes"
  "ot-33-a": {
    communion: {
      title: "Amen dico vobis",
      latin: "Amen dico vobis, quidquid orántes pétitis, crédite quia accipiétis, et fiet vobis.",
      translation: "Amen I say to you, whatever you ask when you pray, believe that you shall receive, and it shall be done for you.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode I",
      gabc: "(c4) A(cd)men(ixdh'!iv) di(h)co(g) vo(jijh)bis,(h.) (,) * quid(h)quid(g) o(f)rán(h)tes(f) pé(ghg)ti(fg)tis,(g.) (;) cré(ixhih)di(g)te(f) qui(fg)a(f) ac(f)ci(f)pi(f)é(ixfg!hiHF'g)tis,(f.) (;) et(hhV!gh~) fi(fg'h)et(ffe) vo(de!fvED'e)bis.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #592)"
    }
  },
  // ot-33, Year B: Communion "Amen dico vobis" (shared with Year A)
  "ot-33-b": {
    communion: {
      title: "Amen dico vobis",
      latin: "Amen dico vobis, quidquid orántes pétitis, crédite quia accipiétis, et fiet vobis.",
      translation: "Amen I say to you, whatever you ask when you pray, believe that you shall receive, and it shall be done for you.",
      mode: "Communion · Ordinary Time (Years A & B) · Mode I",
      gabc: "(c4) A(cd)men(ixdh'!iv) di(h)co(g) vo(jijh)bis,(h.) (,) * quid(h)quid(g) o(f)rán(h)tes(f) pé(ghg)ti(fg)tis,(g.) (;) cré(ixhih)di(g)te(f) qui(fg)a(f) ac(f)ci(f)pi(f)é(ixfg!hiHF'g)tis,(f.) (;) et(hhV!gh~) fi(fg'h)et(ffe) vo(de!fvED'e)bis.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #592)"
    }
  },
  // ot-33, Year C: Communion "Domine quinque talenta"
  "ot-33-c": {
    communion: {
      title: "Domine quinque talenta",
      latin: "Dómine, quinque talénta tradidísti mihi : ecce ália quinque superlucrátus sum. Euge serve fidélis, quia in pauca fuísti fidélis, supra multa te constítuam, intra in gáudium Dómini tui.",
      translation: "Lord, you delivered to me five talents: behold, I have gained five more. Well done, good and faithful servant, because you have been faithful over a few things, I will set you over many: enter into the joy of your Lord.",
      mode: "Communion · Ordinary Time (Year C) · Mode VII",
      gabc: "(c3) DO(ggh)mi(f!gwh)ne,(h_e) (,) * quin(g_[uh:l]h)que(f) ta(e)lén(ig/ij)ta(i.) (,) tra(i)di(ig)dí(ijij)sti(i) mi(gihh)hi :(hg..) (;) ec(i)ce(ig) á(ijij)li(ih)a(h) quin(hi)que(hg/hih.) (,) su(h)per(hg)lu(ge)crá(gh'i)tus(f!gw!hvG'FE'f) sum.(fe..) (:) Eu(i_[uh:l]kJ~'I~)ge(j_i) ser(jk)ve(j) fi(ih)dé(i!jw!kvJI)lis,(i!jwk.) (;) qui(h)a(h) in(ik~) pau(k)ca(kj) fu(i)í(jk)sti(j) fi(ih)dé(i!jw!kvJI'j)lis,(ji..) (;) su(ij)pra(i) mul(ij~)ta(i) te(j/kkj) con(h)stí(ji/jkj)tu(ij_I'_HG'h)am,(hg..) (:) in(ij)tra(i) in(i) gáu(ih/i_[uh:l]j)di(h)um(f!gw!hvGE.) (,) Dó(g/hhf//g!hwi'!jv)mi(i)ni(i.g!hw!ivH'GF'gw!hvGF) tu(ef!gvFE'f)i.(fe..) (::)",
      source: "Graduale Romanum (GregoBase #383)"
    }
  },

  // ===================================================================== *
  // OUR LORD JESUS CHRIST, KING OF THE UNIVERSE (christ-king) — the
  // Solemnity that closes the liturgical year (last Sunday of OT). One Mass,
  // no A/B/C split. Introit "Dignus est Agnus" lives in introits.js.
  // ===================================================================== *
  "christ-king": {
    gradual: {
      title: "Dominabitur a mari",
      latin: "Dominábitur a mari usque ad mare, et a flúmine usque ad términos orbis terrárum. ℣. Et adorábunt eum omnes reges terrae : omnes gentes sérvient ei.",
      translation: "He shall have dominion from sea to sea, and from the river to the ends of the earth. ℣. And all the kings of the earth shall adore him: all nations shall serve him.",
      mode: "Gradual · Christ the King · Mode V",
      gabc: "(c3) DO(d)mi(d)ná(efefhig'hvFE'e)bi(de)tur(e.) *(;) a(d) ma(efe)ri(f) us(f!hhh/ijhhvF'Egihh)que(f) ad(f) ma(f_[oh:h]g_[oh:h]f_[oh:h])re,(f.) (:) et(ijIHih) a(fh) flú(h)mi(feh)ne(hig'/hf.) (;) us(fh)que(h) ad(g) tér(h)mi(f)nos(d.) (,) or(dfe___/hgh)bis(f) ter(e)rá(de)rum.(d!ewfef//highf.dfe/fee[ll:1]d.0) (::) ℣. Et(d) ad(d)o(fe)rá(eh)bunt(h) e(hi)um(ihhf/hiHG.hiFD.1) (,) (f!hhi/hhf/hiHG.hiFD.1) (,) (fdfED//fd/ef/hh/ig/hf/hi/kkkh..) (;) o(f)mnes(hg) re(hih)ges(hf) ter(ffe)rae :(gxe_f_d_2//f_e/fgF'ED'dfvEDe[ll:1]d..) (:) o(fdfED)mnes(d.) Gen(fd/ef!hh/i!jwkI'H)tes(hiHF.1) (;) sér(gxgg//gg)vi(d)ent(efe/ffe.) * e(fhG'F//hhh)i.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #583)"
    },
    alleluia: {
      title: "Potestas eius",
      latin: "Allelúia. ℣. Potéstas ejus, potéstas aetérna, quae non auferétur : et regnum ejus, quod non corrumpétur.",
      translation: "Alleluia. ℣. His power is an everlasting power, that shall not be taken away: and his kingdom that shall not be destroyed.",
      mode: "Alleluia · Christ the King · Mode I",
      gabc: "(c4) AL(dc~)le(d./fgF'ED'fvED'dc)lú(ixf!gwh'!iv){ia}.(hfg.) *(,) ij.(ixhvGFg_[uh:l]i//hi!jvIHG.hvGFghhvGF'g/!/!dfddc.) (,) (cf/ghGE'Dffd.) (::) ℣. Pot(c)é(cd)stas(d) e(dc~)jus,(d./fgF'ED'//fvED'dc) (,) pot(f)é(ixghhvGFgfghg/hi)stas(hgg) (,) ae(f)tér(ixgfghvGFg_[uh:l]i//hi!jvIG'gfghg/hi)na,(h.) (;) quae(hvGF'g//dfddc.) non(cf/ghG'F) au(e[ll:1]d)fe(cd)ré(d_[oh:h]e_[oh:h]d_[oh:h])tur :(d.) (:) et(ixcf/giiiv'1HFgfghjh.1) (,) (ixcf/giiiv'1HFgfghjh.1) (,) (ixjvIHivHGhvGFg_[uh:l]h) re(hvGF)gnum(gh) e(gf~)jus,(fgffvED.) *(;) quod(d) non(dc) cor(d./fgF'ED'//fvED)rum(dc)pé(ixf!gwh'!iv)tur.(hfg.) (,) (ixhvGFg_[uh:l]i//hi!jvIHG.hvGF/!ghhvGF'g//dfddc.) (,) (cf/ghGE'Dffd.) (::)",
      source: "Graduale Romanum (GregoBase #746)"
    },
    offertory: {
      title: "Postula a me",
      latin: "Póstula a me, et dabo tibi gentes hereditátem tuam, et possessiónem tuam términos terrae.",
      translation: "Ask of me, and I will give you the nations for your inheritance, and the ends of the earth for your possession.",
      mode: "Offertory · Christ the King · Mode IV",
      gabc: "(c4) PO(c)stu(dfe)la(f) * a(e/fgF'EfvED) me,(fd/efe.) (,) et(fd~) da(dfe)bo(fg) ti(g)bi(g_[oh:h]efvEDgvFE) Gen(hvGFgvF~E~)tes(e.) (;) he(e)re(e)di(e)tá(egf/gff'fd)tem(dgF'E) tu(hgh_fhggd)am,(dgF'EfgFD.1) (:) et(d) pos(d)ses(df/gef)si(f)ó(f/[1]{ix}f/hih/ihhg)nem(gh/igh.) tu(e.f!gwhhg)am(gf/ghhg.) (;) tér(g_[oh:h]d)mi(dgF'E)nos(e.) ter(eg!hvGFghg)rae.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #390)"
    },
    communion: {
      title: "Sedebit Dominus Rex",
      latin: "Sedébit Dóminus Rex in aetérnum : Dóminus benedícet pópulo suo in pace.",
      translation: "The Lord shall sit as King for ever: the Lord will bless his people with peace.",
      mode: "Communion · Christ the King · Mode VI",
      gabc: "(c4) SE(cd)dé(f)bit(dc) * Dó(fg)mi(h)nus(gf) Rex(fgf) in(f_e) ae(ixg_[oh:h]i_[oh:h]g_[oh:h]!hwi)tér(f_[oh:h]g_[oh:h]f_[oh:h])num :(f.) (;) Dó(fg)mi(f)nus(f) be(f)ne(f)dí(ixf!gwh'!iv)cet(h.) (,) pó(hj)pu(g)lo(fg) su(gf)o(fgff/ded.) (,) in(f_e/ggh) pa(f_[oh:h]g_[oh:h]f_[oh:h])ce.(f.) (::)",
      source: "Graduale Romanum (GregoBase #1229)"
    }
  }
};
