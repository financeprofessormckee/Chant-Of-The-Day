"use strict";

/*
 * data/common-propers.js — the sung propers (Gradual/Alleluia/
 * Offertory/Communion) for each Common-of-Saints Mass formulary, keyed
 * the same as data/common-introits.js's window.COMMON_INTROITS. See that
 * file's header and sources/gregobase/build-common-of-saints.py for how
 * these are authored.
 */

window.COMMON_PROPERS = {
  "common-apostles": {
    gradual: {
      title: "Nimis honorati sunt",
      latin: "Nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum. ℣. Dinumerábo eos, et super arénam multiplicabúntur.",
      translation: "Your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened. ℣. I will number them, and they shall be multiplied above the sand.",
      mode: "Gradual · Common of Apostles · Mode II",
      gabc: "(c3) NI(egf)mis(f.) *(,) ho(f)no(f)rá(hfghvF'Egef)ti(g) sunt(f.) (;) a(f)mí(hf/hi'j)ci(h_f) tu(f_e)i,(gxegFE.) (,) De(e[ll:1]d/fef)us :(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) ni(hh)mis(h) con(h)for(h)tá(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')tus(f) est(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) prin(d)ci(ef)pá(f.0/[-0.5]hvGF'g)tus(e) e(f)ó(hf/h_i)rum.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Di(f)nu(h)me(hi)rá(i)bo(ij) e(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)os :(ji..) (:) et(i) su(k.i!jw!kvJI')per(i) a(ij)ré(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)nam(f.) *(:) mul(d)ti(ef)pli(f.0/[-0.5]hvGF'g)ca(ef)bún(hf/h_i~)tur.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #148)"
    },
    alleluia: {
      title: "Nimis honorati sunt",
      latin: "Allelúia. ℣. Nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum.",
      translation: "Alleluia. ℣. Your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened.",
      mode: "Alleluia · Common of Apostles · Mode VIII",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhg ehf/gffe.) (::) ℣. Ni(hv.gih)mis(h) ho(h)no(hg)rá(gh!ivvHFhfg)ti(h) sunt(g.) (;) a(gf)mí(hji)ci(h) tu(gh)i,(f_e) De(hvvGE.gxfgFD./!egF'E/!fe)us :(e.) (:) ni(efeh)mis(h) con(h)for(h)tá(hfh'GE//fhF'DgxgvFEf.0/[-0.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/!g_[oh:h]egxgvFEfd)tus(e) est(d.) (;) prin(fd~)ci(e)pá(ef)tus(f) *() e(f)ó(hg/hfh)rum.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'gvE'Defe.) (,) (gxhhvF'EfgED.gyhhvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #130)"
    },
    offertory: {
      title: "Nimis honorati",
      latin: "Nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum, allelúia.",
      translation: "Your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened, alleluia.",
      mode: "Offertory · Common of Apostles · Mode IV",
      gabc: "(c4) NI(ixe!fg!hv//ig/hvFD'/ewf!gvFE)mis(e.) (,) * ho(dg)no(gih)rá(h!iwj!kvJH)ti(h_g) sunt(giH'G/h.) (;) a(ef)mí(d/fgf)ci(e) tu(fgF0'/[-0.5]{ix}E0fg/hihhg)i(g./fg!hv/hV!g.) (,) De(g_[oh:h]f/hvGFgvFE)us :(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) ni(df)mis(fff//fv./fff) (,) con(df/gV!ef~)for(e)tá(ff/h)tus(h/jjj) est(ixg/jjjvH'G/hv./fh/ig/ff/ded.) (:) prin(df/gV!ef~)ci(e)pá(ff/h_g/hvGF)tus(g.) (,) e(g/jjjh)ó(hv./giH'G)rum,(gvFEf_e//g_[oh:h]f/gffe.) (:) al(f)le(e!fg/hgh)lú(hjg){ia}.(gvFEf_e//g_[oh:h]f/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #10326)"
    },
    communion: {
      title: "Vos qui secuti",
      latin: "Vos, qui secúti estis me, sedébitis super sedes, judicántes duódecim tribus Israël.",
      translation: "You who have followed me shall sit upon seats, judging the twelve tribes of Israel.",
      mode: "Communion · Common of Apostles · Mode I",
      gabc: "(c4) VOS,(df!gh) *(,) qui(g) se(g)cú(g)ti(ge) e(fg)stis(efED'e) me,(e[ll:1]d..) (;) se(d)dé(f)bi(fff)tis(dfddc.) (,) su(ixfg!hi)per(hg~) se(f.e!fwgfg)des,(gf..) (:) ju(f)di(ghg)cán(h)tes(g) du(f)ó(g)de(fe)cim(dfddc.) (,) tri(fffd//ef!gh)bus(f_e) Is(d)ra(de!fvED'e)el.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1028)"
    },
  },
  "common-martyr": {
    gradual: {
      title: "Gloriosus Deus",
      latin: "Gloriósus Deus in sanctis suis : mirábilis in majestáte, fáciens prodígia. ℣. Déxtera tua, Dómine, glorificáta est in virtúte : déxtera manus tua confrégit inimícos.",
      translation: "God is glorious in his saints: wondrous in majesty, working wonders. ℣. Your right hand, O Lord, is magnified in strength: your right hand has slain the enemy.",
      mode: "Gradual · Common of a Martyr · Mode I",
      gabc: "(f3) GLo(c)ri(c)ó(ef)sus(fhf/gffe.) *(,) De(ghG'Fhv.giH'GF)us(f.) (;) in(f!gwh) san(hv.g!ijH'GF'g)ctis,(f.) (,) (ef!hhhvGFg.f!gwhhvGF'hf/gffe.) (:) mi(f!gw!hi)rá(hi)bi(ihhvGF'g)lis(f.) (,) (ef!hhhvGFg.f!gwhhvGF'hf/gffe.) (;) in(f!gwhhvGF'g) ma(ef)je(h.f!gwh)stá(hiHF'g)te,(f.) (,) (ef!hvGFh_g//e.f!gw!hvGF'hf/gffe.) (:) fá(h_[oh:h]i_[oh:h]h_[oh:h])ci(kxh.i!jwkj)ens(j) pro(jij)dí(hi'j)gi(hvGF)a.(f//gh/iffe.) (,) (ef!h/[1]{/[-1]kx}h/ij!kvJH'//ih/ihhf.) (f+::c4) ℣. Déx(dh)te(h)ra(h) tu(h)a(hg) Dó(ixhv.fh!ivHGhv.)(,)(fghjij//h!jjjvGFh./jjh/jjg/j_i)mi(h_[oh:h]i_[oh:h]h_[oh:h])ne,(h.) (;) glo(fg)ri(f)fi(gh)cá(h)ta(g./h!iw!jvIH') est(hgg) (,) in(f) vir(ghg~)tú(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiG'FghF'Dfv.e!gwhgh)te :(ixhf/higff/ded.) (:) déx(hj)te(h)ra(ghg) ma(f)nus(ghg) tu(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiGF.)(,)(hf/gh!jjvH'Gh)a,(ixhf/higff/ded.) (:) con(d)fré(dfED'fvED.)(,)(de!fg/hjIH'hgh.ixfh!ivGF'E//f!gw!hi)git(hg__) *(,) in(g)i(gh)mí(ixjhiGF'h!jjvH'G)cos.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #888)"
    },
    alleluia: {
      title: "Gloriosus Deus",
      latin: "Allelúia. ℣. Gloriósus Deus in sanctis ejus : mirábilis in majestáte, fáciens prodígia.",
      translation: "Alleluia. ℣. God is glorious in his saints: wondrous in majesty, working wonders.",
      mode: "Alleluia · Common of a Martyr · Mode IV",
      gabc: "(c4) AL(d!ff)le(ef)lú(ghG'Fg_[uh:l]h){ia}.(hjH'G) *(,) (h_dev.fg/h_g h_dev.fg!hvGF'hgge.) (::) ℣. Glo(h)ri(h)ó(h')sus(g) De(ghG'E)us(fgfg.) (,) in(gh) san(hg/hf/ghg)ctis(gd) e(e!gfg)jus :(fe..) (:) mi(f)rá(gh)bi(gf)lis(g') in(f) ma(d')je(f)stá(fv.fffdgvFE.)(,)(df/h_f/g_[oh:h]efv.df/gef)te,(fe..) (;) fá(ef'g)ci(g)ens(gdf.) *() pro(e)dí(ef'g)gi(f!hgh)a.(hjH'G) (,) (h_dev.fg/h_g h_dev.fg!hvGF'hgge.) (::)",
      source: "Graduale Romanum (GregoBase #274)"
    },
    offertory: {
      title: "In virtute tua",
      latin: "In virtúte tua, Dómine, laetábitur justus, et super salutáre tuum exsultábit veheménter : desidérium ánimae ejus tribuísti ei.",
      translation: "In your strength, O Lord, the just man shall joy, and in your salvation he shall rejoice exceedingly: you have given him his heart's desire.",
      mode: "Offertory · Common of a Martyr · Mode VI",
      gabc: "(c2) IN(c) vir(d)tú(ff)te(f) tu(f)a,(f.) *(,) Dó(fgf)mi(exfee)ne,(c!ece.) (;) lae(c)tá(ffg)bi(f)tur(fg/hg/h_g) ju(fg!hvGF'g)stus,(gf..) (:) et(f) su(f!gwh'!iv)per(h) sa(h)lu(h)tá(h/jjh/i_[uh:l]j)re(g_[oh:h]fg) tu(d!fff/g_[oh:h]f)um(f.) (;) ex(g)sul(f)tá(f)bit(d!ff) ve(d)he(ff/gf)mén(deD~'C~)ter :(dc..) (:) de(c)si(d)dé(ffg)ri(f)um(f.) (,) á(hj)ni(g)mae(f) e(d!fffvEDevD~C~)jus(dc..) (;) tri(c)bu(d)í(ffg)sti(f) e(f!gwhghjjh//giH'GF.)(,)(fff//fgf/ghg/hf/g_[oh:h]f)i.(f.) (::)",
      source: "Graduale Romanum (GregoBase #667)"
    },
    communion: {
      title: "Posuisti Domine",
      latin: "Posuísti, Dómine, in cápite ejus corónam de lápide pretióso.",
      translation: "You have set, O Lord, upon his head a crown of precious stone.",
      mode: "Communion · Common of a Martyr · Mode VI",
      gabc: "(c4) PO(c)su(d)í(ff)sti(fe/ghf') Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne(f.) *(;) in(f) cá(ixf!gwh'!iv)pi(h)te(h') e(j)jus(hhg) co(h!iwj)ró(h_ghvGF'g)nam(gf..) (;) de(fv.egf) lá(fg)pi(deDC'd)de(d_c) pre(f)ti(gfhvGF)ó(f_[oh:h]g_[oh:h]f_[oh:h])so.(f.) (::)",
      source: "Graduale Romanum (GregoBase #586)"
    },
  },
  "common-confessor-bishop": {
    gradual: {
      title: "Corona aurea",
      latin: "Coróna áurea super caput ejus, expréssa signo sanctitátis, glória honóris, et opus fortitúdinis. ℣. Quóniam praevenísti eum in benedictiónibus dulcédinis : posuísti in cápite ejus corónam de lápide pretióso.",
      translation: "A crown of gold upon his head, engraved with the seal of holiness, the glory of honor, and a work of might. ℣. For you have gone before him with blessings of sweetness: you have set upon his head a crown of precious stone.",
      mode: "Gradual · Common of a Bishop Confessor · Mode III",
      gabc: "(c3) CO(e)ró(fhg)na(h.) *(,) áu(hh//hhh.f!gwh/i_[oh:h]h//j_ijvIG)re(g)a(ig/hi/jh) (,) (hhh'ih/ihhg.) (;) su(f)per(fhg) ca(hihhf)put(hig'/hiffe.) (,) e(fhg/h_fiihhg)jus :(gv.eg/ihh/fgf.) (:) ex(f)prés(hf/ghg)sa(ge/f!hhhvFE'ec) (,) si(d_e)gno(e) san(e)cti(eg)tá(g)tis,(fgF'Ef!hh/f!hhhvGF'hee[ll:1]d.0) (:) gló(fh)ri(ef)a(f) ho(f)nó(hf/gh!ivFE')ris,(feec) (;) et(e) o(ef)pus(fef) for(fe)ti(f!hh)tú(gxfe/fgE'DefD'C)(,)(ef!hvvF'Eff//efg)di(e)nis.(c./eec//e[ll:1]d/ec..) (::) ℣. Quó(ef)ni(e)am(fh) prae(hg)ve(hi)ní(ihhgh)sti(h_g) (,) e(jji/jihhf/ig/h_[oh:h]i_[oh:h]h_[oh:h])(,)(hhhvFEhg/h_i)um(ih/ihhg.) (;) in(f) be(fi)ne(ihhf)di(f!gwh)cti(h)ó(gh/jij)ni(hg)bus(g.) (,) dul(g)cé(h_fhvGE)di(f!gwh_g)nis :(gv.eg/ihh/fgf.) (:) po(f)su(ef)í(fhf/hhfg)sti(f.) (,) in(fg~) cá(ge/f!hhhvFE'ec)pi(de)te(e.) (,) e(eg)jus(fgF'Ef!hh/f!hhhvGF'hee[ll:1]d.0) (;) co(f)ró(hf/gh!ivFE')nam(feec) (,) de(e) lá(ef)pi(f)de(fef) ()* pre(fe)ti(f!hh)ó(gxfe/fgE'DefD'C)(,)(ef!hvvF'Eff//ef/ge)so.(c./eec//e[ll:1]d/ec..) (::)",
      source: "Graduale Romanum (GregoBase #771)"
    },
    alleluia: {
      title: "Corona aurea",
      latin: "Allelúia. ℣. Coróna áurea super caput ejus, expréssa signo sanctitátis, glória honóris, et opus fortitúdinis.",
      translation: "Alleluia. ℣. A crown of gold upon his head, engraved with the seal of holiness, the glory of honor, and a work of might.",
      mode: "Alleluia · Common of a Bishop Confessor · Mode I",
      gabc: "(c4) AL(ddc~)le(egE'Cd.0/egED'ew!fvED)lú(dV!cd~){ia}.(d.) (;) * ij.(dhhvGEfvED.ce!fg'EDffd.) (;) (c/!ee//c/!dd//ce!gvvFDee) (,) (dfegvEDffd.) (::) ℣. Co(cd)ró(dfddce//fg'EDffd)na(d) áu(dc~)re(cd)a(d.) (;) su(d)per(dh~) ca(ixhiH'GhvGEfvED)put(dfddc.) (,) e(dfe/fg!hvF'ED.ef!gvEDffd)jus :(d.) (:) ex(dfd)prés(cd)sa(d.) (,) si(cd~)gno(d) san(dh/jjggf/gh.)(,)(hggf/gh/jjggf/gh.)(,)(g.h!iwj!kvJ'IH'Gh.)(,)(hkkj/klJ'IH)cti(gh)tá(g.h!iwj/kjjvIH)tis,(gh..) (;) gló(h)ri(gh)a(h) ho(hjI'Gi!jk)nó(ih/jjh)ris,(h.) (:) et(d) o(cd)pus(d) *() for(d)ti(d_c)tú(egE'Cd.0/egED'ew!fvED'd)di(cd)nis.(d.) (;) (dhhvGEfvED.ce!fg'EDffd.) (;) (c/!ee//c/!dd//ce!gvvFDee) (,) (dfegvEDffd.) (::)",
      source: "Graduale Romanum (GregoBase #413)"
    },
    offertory: {
      title: "Sacerdotes Domini",
      latin: "Sacerdótes Dómini incénsum et panes ófferunt Deo : et ídeo sancti erunt Deo suo, et non pólluent nomen ejus, allelúia.",
      translation: "The priests of the Lord offer incense and loaves to God: and therefore shall they be holy to their God, and not pollute his name, alleluia.",
      mode: "Offertory · Common of a Bishop Confessor · Mode IV",
      gabc: "(c4) SA(f)cer(d!ewf)dó(f)tes(e'fg) *() Dó(ixghf___//ih/igh)mi(e)ni(egf/gffe.) (;) in(f)cén(fgf)sum(ff) et(df~) pa(fff/ghggef)nes(e_[oh:h][ll:1]d) (,) óf(gh)fe(g/jjj)runt(hjhhg) De(gh)o :(hg..) (:) et(ixgih'ivGF') íd(g)e(f)o(f_e) (,) san(ef'g~)cti(g) e(ixhig)runt(ghF'E) (;) De(gh)o(gjh) su(ghf/ghg)o,(gvFD//ef/gfgd.) (:) et(df/gef) non(f) pól(ixef/hiHG')lu(hggfg)ent(g_[oh:h]d) (,) no(df/gef)men(f) e(f_[oh:h]g_[oh:h]f_[oh:h])jus,(f.) (;) al(f!gwhg~)le(ixh_f/ih/igh)lú(e){ia}.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #645)"
    },
    communion: {
      title: "Fidelis servus",
      latin: "Fidélis servus et prudens, quem constítuit Dóminus super famíliam suam : ut det illis in témpore trítici mensúram.",
      translation: "A faithful and wise servant, whom the Lord set over his household: to give them their measure of wheat in due season.",
      mode: "Communion · Common of a Bishop Confessor · Mode VII",
      gabc: "(c3) FI(e)dé(f)lis(ge) ser(fh~)vus(h.) *() et(hg~) pru(hi)dens,(i.) (;) quem(i) con(i)stí(ijij)tu(ih)it(h) Dó(hi)mi(h)nus(hg/hih.) (;) su(h)per(hg) fa(ge)mí(gh)li(f!h'i)am(hg~) su(e.)am :(e.) (:) ut(h) det(h) il(hih)lis(e.) (,) in(ghf~) tém(hi~)po(ijiigh)re(hg..) (;) trí(i!jw!kvJI'ih//i_[oh:h]ghvGF'//gh'i!jv)ti(hf)ci(hi) men(hg~)sú(efe___)ram.(e.) (::)",
      source: "Graduale Romanum (GregoBase #1008)"
    },
  },
  "common-confessor-doctor": {
    gradual: {
      title: "Justus ut palma",
      latin: "Justus ut palma florébit : sicut cedrus Líbani multiplicábitur, in domo Dómini. ℣. Ad annuntiándum mane misericórdiam tuam, et veritátem tuam per noctem.",
      translation: "The just shall flourish like the palm tree: he shall grow up like the cedar of Lebanon, in the house of the Lord. ℣. To show forth your mercy in the morning, and your truth in the night.",
      mode: "Gradual · Common of a Doctor · Mode II",
      gabc: "(c3) JU(egf)stus(f.) *(,) ut(f) pal(f)ma(f) flo(f)ré(hfghvF'Ege/fg)bit :(f.) (:) sic(f)ut(f) ce(hf/hi'j)drus(gxhffegvFE.) (,) Lí(e)ba(e[ll:1]d/fef)ni(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) mul(hh)ti(h)pli(h)cá(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')bi(f)tur(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) in(d) do(de'fhvGF'g)mo(ef) Dó(hf)mi(hi)ni.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHFgwhf.1) (::) ℣. Ad(f) an(h)nun(hi)ti(i)án(i)dum(ij~) ma(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)ne(ji..) (:) mi(i!jw!kvJI'jw!kvJI)se(i)ri(i)cór(i)di(i)am(ij~) tu(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)am,(f.) (:) et(hh) ve(h)ri(h)tá(h)tem(hi~) tu(ivH'GE//fhGEfh..)(,)(gi!jvHF)am(fhF'Efhhf//hvvGF'hee[ll:1]d.0) *(:) per(de'fhvGFgef) no(hf/h_i)ctem.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #34)"
    },
    alleluia: {
      title: "Justus ut palma",
      latin: "Allelúia. ℣. Justus ut palma florébit : et sicut cedrus, quae in Líbano est, multiplicábitur.",
      translation: "Alleluia. ℣. The just shall flourish like the palm tree: and shall grow up like the cedar that is in Lebanon.",
      mode: "Alleluia · Common of a Doctor · Mode I",
      gabc: "(c4) AL(c)le(d!fdf)lú(ef!gvFEfg~){ia}.(g.) *(;) ij.(hvGFgvFEf_g hvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'ED de!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::) ℣. Ju(fhg___)stus(g_[oh:h]e//fgf/gddc.) (,) ut(cd) pal(ef'g~)ma(gv.e!g_4[uh:l]h) flo(fvED)ré(d.c!dw!evDCde)bit,(d.) (:) et(dede) sic(c)ut(e) ce(ixg_[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(ixce!g_4[uh:l]h/!ig/!h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(gv.ef/g_[oh:h]e/f_dev.)(,)(gv.ef/g_[oh:h]e/f_dev.c!dwe'!fv)drus(e[ll:1]d..) (:) * mul(c)ti(d!fdf)pli(f)cá(ef!gvFE)bi(fg)tur.(g.) (,) (hvGFgvFEf_g hvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'ED de!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::)",
      source: "Graduale Romanum (GregoBase #946)"
    },
    offertory: {
      title: "Justus ut palma florebit",
      latin: "Justus ut palma florébit : sicut cedrus, quae in Líbano est, multiplicábitur.",
      translation: "The just shall flourish like the palm tree: he shall grow up like the cedar that is in Lebanon.",
      mode: "Offertory · Common of a Doctor · Mode IV",
      gabc: "(c4) JU(e.f!gwhgfffdgvFE)stus(fff) *(,) ut(dge) pal(gh)ma(g!jjjvH'GF.//ixfff!gwhg/hih.) (,) flo(ghf)ré(dgF'E)bit :(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) sic(dg)ut(gh) ce(h!iwj!kvJH//gih)drus,(hjHG'hffe.) (,) quae(ghf) in(fe~) Lí(ghF'E//fh)ba(h_g!jjjvH'G)no(g_[oh:h]f//hvGFgvFE) est,(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (;) mul(ff)ti(dgf)pli(f)cá(ixff/hihhghvGFg_[oh:h]e//hggf/ghg')bi(e)tur.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #777)"
    },
    communion: {
      title: "Fidelis servus",
      latin: "Fidélis servus et prudens, quem constítuit Dóminus super famíliam suam : ut det illis in témpore trítici mensúram.",
      translation: "A faithful and wise servant, whom the Lord set over his household: to give them their measure of wheat in due season.",
      mode: "Communion · Common of a Doctor · Mode VII",
      gabc: "(c3) FI(e)dé(f)lis(ge) ser(fh~)vus(h.) *() et(hg~) pru(hi)dens,(i.) (;) quem(i) con(i)stí(ijij)tu(ih)it(h) Dó(hi)mi(h)nus(hg/hih.) (;) su(h)per(hg) fa(ge)mí(gh)li(f!h'i)am(hg~) su(e.)am :(e.) (:) ut(h) det(h) il(hih)lis(e.) (,) in(ghf~) tém(hi~)po(ijiigh)re(hg..) (;) trí(i!jw!kvJI'ih//i_[oh:h]ghvGF'//gh'i!jv)ti(hf)ci(hi) men(hg~)sú(efe___)ram.(e.) (::)",
      source: "Graduale Romanum (GregoBase #1008)"
    },
  },
  "common-virgin": {
    gradual: {
      title: "Specie tua",
      latin: "Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna. ℣. Propter veritátem, et mansuetúdinem, et justítiam : et dedúcet te mirabíliter déxtera tua.",
      translation: "With your comeliness and your beauty, set out, proceed prosperously, and reign. ℣. Because of truth, and meekness, and justice: and your right hand shall conduct you wonderfully.",
      mode: "Gradual · Common of a Virgin · Mode V",
      gabc: "(c4) SPé(ff)ci(f)e(f_e/g_[uh:l]h) tu(gf)a,(fv.d!ff/ge'/fgd'/e[ll:1]ddc.) *(;) et(f) pul(f)chri(h)tú(jh/jjj)di(jh/jjj)ne(jh/jjlvKJ'k) (,) tu(kjjh/jhhf)a(fh//g!jjjh/jhh/fgf.) (:) in(f)tén(ghgh)de,(ixhg/hiGF./[-1]iyh!iwj) (,) pró(hf)spe(gf)re(f_g//d!f'g//fh!jvGF'fd//ff/ge'/fgd'/e[ll:1]ddc.) (;) pro(d)cé(fd/fff)de,(dc__) (,) et(ff) re(ixhhg/hh//ixgh!ivGFhh//f!h'j)gna.(iyjkijh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. Pro(d)pter(d) ve(d)ri(fh)tá(hv.hihhfh.)(,)(df!hvv//hihhfh./gh/ihi)tem,(hh) (;) et(d) man(d)su(d)e(fe)tú(eh)di(h)nem(ih) (,) (hhh'/ihhg./[-0.5]i/jiih.0/[-0.5]j/kjjh.0/[-0.5]i/jiig./h/ihh//fh//ghFE'e[ll:1]d.0) (;) et(d) ju(d)stí(fdfED//f_d/ef!gwhhi)ti(h)am :(hhi!kvvh_[oh:h]i_[oh:h]h._[oh:h]) (:) et(f) de(fi)dú(i)cet(ih/jkihhf/hh/ijH'Gh) te(h.) (;) mi(h)ra(h)bí(i_[oh:h]h//ghG'Fi_[oh:h]h//h'hhvFEfe//f/hhivHGh')li(h)ter(h.) *(;) déx(hh)te(h)ra(h) tu(ihhf//hh/ijH'G)a.(hhhf//hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #174)"
    },
    alleluia: {
      title: "Specie tua",
      latin: "Allelúia. ℣. Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna.",
      translation: "Alleluia. ℣. With your comeliness and your beauty, set out, proceed prosperously, and reign.",
      mode: "Alleluia · Common of a Virgin · Mode VIII",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhg ehf/gffe.) (::) ℣. Spé(hv.gih)ci(hg)e(g) tu(gh!ivvH'Fhf/gh)a,(g.) (;) et(g) pul(g)chri(gf)tú(hji)di(h)ne(gh) tu(f_ehvvGE.gxfgFD.1gxegF'Efe)a(e.) (:) in(e)tén(feh)de,(h.) (,) pró(hfh'GE//fhF'D//gxgvFEf.0/[-0.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/g_[oh:h]e//gvFEfd)spe(e[ll:1]d)re(d.) (;) pro(fd)cé(ef)de,(f) *() et(f) re(hg/hfh)gna.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'gvE'Defe.) (,) (gxhhvF'EfgED.gyhhvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #406)"
    },
    offertory: {
      title: "Desiderium animae",
      latin: "Desidérium ánimae ejus tribuísti ei, Dómine, et voluntáte labiórum ejus non fraudásti eum : posuísti in cápite ejus corónam de lápide pretióso.",
      translation: "You have given her her heart's desire, O Lord, and have not withheld from her the will of her lips: you have set upon her head a crown of precious stone.",
      mode: "Offertory · Common of a Virgin · Mode VI",
      gabc: "(c4) DE(c)si(d)dé(ff)ri(fhg)um(ghff) *(`) á(d!fffg)ni(f)mae(f) e(fg!hv_G~F~)jus(gf..) (;) tri(fg)bu(f)í(g_[oh:h]f)sti(f_e) e(fg)i,(ixg!iiivG'F) (,) Dó(fg)mi(f)ne,(fggf.0) (:) et(fd~) vo(fgf)lun(gh)tá(hj)te(g) la(f)bi(f)ó(f)rum(fhg) e(fg!hv_G~F~)jus(gf..) (;) non(fh/jhj) frau(gf~)dá(fgF'D)sti(fg) e(fgF'D)um :(dfddc.) (:) po(f)su(g)í(gh/jhj)sti(g) in(f) cá(gh)pi(g)te(f) e(hf/gh)jus(g.) (;) co(f)ró(hv.fhg)nam(g.) (,) de(ixgih) lá(ixij)pi(g)de(fgF'D) (`) pre(ff)ti(gh)ó(ixhf/!gh/!jjh/!/!giH'GF.)(,)(fff//fgf/ghg/hf/g_[oh:h]f)so.(f.) (::)",
      source: "Graduale Romanum (GregoBase #722)"
    },
    communion: {
      title: "Quinque prudentes",
      latin: "Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus : média autem nocte clamor factus est : Ecce sponsus venit : exíte óbviam Christo Dómino.",
      translation: "The five wise virgins took oil in their vessels with their lamps: and at midnight there was a cry made: Behold the bridegroom comes; go out to meet Christ the Lord.",
      mode: "Communion · Common of a Virgin · Mode V",
      gabc: "(c3) QUin(dde~)que(d) *() pru(d)dén(ef~)tes(f) vír(f!gwh)gi(e)nes(deD/B.1) (;) ac([ull:1{1]b)ce(b[ull:}])pé(ded)runt(dc~) ó(efef)le(ef)um(f.) (;) in(df~) va(f)sis(ef) su(d)is(dc) cum(e) lam(ef~)pá(d)di(de!fvED'e)bus :(e[ll:1]d..) (:) mé(f)di(e)a(d) au(e)tem(f) no(hjI'H)cte(h.) (,) cla(hi)mor(j_i) fa(h)ctus(gh) est :(hihh/fgf.) (;) Ec(f)ce(e_[oh:h][ll:1]d) spon(e)sus(f) ve(hjI'H)nit(h.) (,) ex(i)í(i!jwk)te(h.) ób(gxffg)vi(e[ll:1]d)am(d.) (,) Chri(gxd!ffg)sto(ehhh.f!gw!hvGE'fgd') Dó(d)mi(d_[oh:h]e_[oh:h]d_[oh:h])no.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1301)"
    },
  },
};

