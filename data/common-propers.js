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
      reference: "Ps. 138:17, 18",
      gabc: "(c3) NI(egf)mis(f.) *(,) ho(f)no(f)rá(hfghvF'Egef)ti(g) sunt(f.) (;) a(f)mí(hf/hi'j)ci(h_f) tu(f_e)i,(gxegFE.) (,) De(e[ll:1]d/fef)us :(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) ni(hh)mis(h) con(h)for(h)tá(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')tus(f) est(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) prin(d)ci(ef)pá(f.0/[-0.5]hvGF'g)tus(e) e(f)ó(hf/h_i)rum.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHF'gwhf.1) (::) ℣. Di(f)nu(h)me(hi)rá(i)bo(ij) e(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)os :(ji..) (:) et(i) su(k.i!jw!kvJI')per(i) a(ij)ré(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)nam(f.) *(:) mul(d)ti(ef)pli(f.0/[-0.5]hvGF'g)ca(ef)bún(hf/h_i~)tur.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #148)"
    },
    alleluia: {
      title: "Nimis honorati sunt",
      latin: "Allelúia. ℣. Nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum.",
      translation: "Alleluia. ℣. Your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened.",
      mode: "Alleluia · Common of Apostles · Mode VIII",
      reference: "Ps. 138:17",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhgehf/gffe.) (::) ℣. Ni(hv.gih)mis(h) ho(h)no(hg)rá(gh!ivvHFhfg)ti(h) sunt(g.) (;) a(gf)mí(hji)ci(h) tu(gh)i,(f_e) De(hvvGE.gxfgFD./!egF'E/!fe)us :(e.) (:) ni(efeh)mis(h) con(h)for(h)tá(hfh'GE//fhF'DgxgvFEf.0/[-0.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/!g_[oh:h]egxgvFEfd)tus(e) est(d.) (;) prin(fd~)ci(e)pá(ef)tus(f) *() e(f)ó(hg/hfh)rum.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'gvE'Defe.) (,) (gxhhvF'EfgED.gyhhvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #130)"
    },
    offertory: {
      title: "Nimis honorati",
      latin: "Nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum, allelúia.",
      translation: "Your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened, alleluia.",
      mode: "Offertory · Common of Apostles · Mode IV",
      reference: "Ps. 138:17",
      gabc: "(c4) NI(ixe!fg!hv//ig/hvFD'/ewf!gvFE)mis(e.) (,) * ho(dg)no(gih)rá(h!iwj!kvJH)ti(h_g) sunt(giH'G/h.) (;) a(ef)mí(d/fgf)ci(e) tu(fgF0'/[-0.5]{ix}E0fg/hihhg)i(g./fg!hv/hV!g.) (,) De(g_[oh:h]f/hvGFgvFE)us :(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) ni(df)mis(fff//fv./fff) (,) con(df/gV!ef~)for(e)tá(ff/h)tus(h/jjj) est(ixg/jjjvH'G/hv./fh/ig/ff/ded.) (:) prin(df/gV!ef~)ci(e)pá(ff/h_g/hvGF)tus(g.) (,) e(g/jjjh)ó(hv./giH'G)rum,(gvFEf_e//g_[oh:h]f/gffe.) (:) al(f)le(e!fg/hgh)lú(hjg){ia}.(gvFEf_e//g_[oh:h]f/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #10326)"
    },
    communion: {
      title: "Vos qui secuti",
      latin: "Vos, qui secúti estis me, sedébitis super sedes, judicántes duódecim tribus Israël.",
      translation: "You who have followed me shall sit upon seats, judging the twelve tribes of Israel.",
      mode: "Communion · Common of Apostles · Mode I",
      reference: "Matt. 19:28",
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
      reference: "Ex. 15:11, 6",
      gabc: "(f3) GLo(c)ri(c)ó(ef)sus(fhf/gffe.) *(,) De(ghG'Fhv.giH'GF)us(f.) (;) in(f!gwh) san(hv.g!ijH'GF'g)ctis,(f.) (,) (ef!hhhvGFg.f!gwhhvGF'hf/gffe.) (:) mi(f!gw!hi)rá(hi)bi(ihhvGF'g)lis(f.) (,) (ef!hhhvGFg.f!gwhhvGF'hf/gffe.) (;) in(f!gwhhvGF'g) ma(ef)je(h.f!gwh)stá(hiHF'g)te,(f.) (,) (ef!hvGFh_g//e.f!gw!hvGF'hf/gffe.) (:) fá(h_[oh:h]i_[oh:h]h_[oh:h])ci(kxh.i!jwkj)ens(j) pro(jij)dí(hi'j)gi(hvGF)a.(f//gh/iffe.) (,) (ef!h/[1]{/[-1]kx}h/ij!kvJH'//ih/ihhf.) (f+::c4) ℣. Déx(dh)te(h)ra(h) tu(h)a(hg) Dó(ixhv.fh!ivHGhv.)(,)(fghjij//h!jjjvGFh./jjh/jjg/j_i)mi(h_[oh:h]i_[oh:h]h_[oh:h])ne,(h.) (;) glo(fg)ri(f)fi(gh)cá(h)ta(g./h!iw!jvIH') est(hgg) (,) in(f) vir(ghg~)tú(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiG'FghF'Dfv.e!gwhgh)te :(ixhf/higff/ded.) (:) déx(hj)te(h)ra(ghg) ma(f)nus(ghg) tu(h_f/gh!jv.ijh.1)(,)(ixjjvH'GhiGF.)(,)(hf/gh!jjvH'Gh)a,(ixhf/higff/ded.) (:) con(d)fré(dfED'fvED.)(,)(de!fg/hjIH'hgh.ixfh!ivGF'E//f!gw!hi)git(hg__) *(,) in(g)i(gh)mí(ixjhiGF'h!jjvH'G)cos.(hghF'Efg..) (,) (d!ewf!gv.fhGF'ED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #888)"
    },
    alleluia: {
      title: "Gloriosus Deus",
      latin: "Allelúia. ℣. Gloriósus Deus in sanctis ejus : mirábilis in majestáte, fáciens prodígia.",
      translation: "Alleluia. ℣. God is glorious in his saints: wondrous in majesty, working wonders.",
      mode: "Alleluia · Common of a Martyr · Mode IV",
      reference: "Ex. 15:11",
      gabc: "(c4) AL(d!ff)le(ef)lú(ghG'Fg_[uh:l]h){ia}.(hjH'G) *(,) (h_dev.fg/h_gh_dev.fg!hvGF'hgge.) (::) ℣. Glo(h)ri(h)ó(h')sus(g) De(ghG'E)us(fgfg.) (,) in(gh) san(hg/hf/ghg)ctis(gd) e(e!gfg)jus :(fe..) (:) mi(f)rá(gh)bi(gf)lis(g') in(f) ma(d')je(f)stá(fv.fffdgvFE.)(,)(df/h_f/g_[oh:h]efv.df/gef)te,(fe..) (;) fá(ef'g)ci(g)ens(gdf.) *() pro(e)dí(ef'g)gi(f!hgh)a.(hjH'G) (,) (h_dev.fg/h_gh_dev.fg!hvGF'hgge.) (::)",
      source: "Graduale Romanum (GregoBase #274)"
    },
    offertory: {
      title: "In virtute tua",
      latin: "In virtúte tua, Dómine, laetábitur justus, et super salutáre tuum exsultábit veheménter : desidérium ánimae ejus tribuísti ei.",
      translation: "In your strength, O Lord, the just man shall joy, and in your salvation he shall rejoice exceedingly: you have given him his heart's desire.",
      mode: "Offertory · Common of a Martyr · Mode VI",
      reference: "Ps. 20:2-3",
      gabc: "(c2) IN(c) vir(d)tú(ff)te(f) tu(f)a,(f.) *(,) Dó(fgf)mi(exfee)ne,(c!ece.) (;) lae(c)tá(ffg)bi(f)tur(fg/hg/h_g) ju(fg!hvGF'g)stus,(gf..) (:) et(f) su(f!gwh'!iv)per(h) sa(h)lu(h)tá(h/jjh/i_[uh:l]j)re(g_[oh:h]fg) tu(d!fff/g_[oh:h]f)um(f.) (;) ex(g)sul(f)tá(f)bit(d!ff) ve(d)he(ff/gf)mén(deD~'C~)ter :(dc..) (:) de(c)si(d)dé(ffg)ri(f)um(f.) (,) á(hj)ni(g)mae(f) e(d!fffvEDevD~C~)jus(dc..) (;) tri(c)bu(d)í(ffg)sti(f) e(f!gwhghjjh//giH'GF.)(,)(fff//fgf/ghg/hf/g_[oh:h]f)i.(f.) (::)",
      source: "Graduale Romanum (GregoBase #667)"
    },
    communion: {
      title: "Posuisti Domine",
      latin: "Posuísti, Dómine, in cápite ejus corónam de lápide pretióso.",
      translation: "You have set, O Lord, upon his head a crown of precious stone.",
      mode: "Communion · Common of a Martyr · Mode VI",
      reference: "Ps. 20:4",
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
      reference: "Ecclus. 45:14; Ps. 20:4",
      gabc: "(c3) CO(e)ró(fhg)na(h.) *(,) áu(hh//hhh.f!gwh/i_[oh:h]h//j_ijvIG)re(g)a(ig/hi/jh) (,) (hhh'ih/ihhg.) (;) su(f)per(fhg) ca(hihhf)put(hig'/hiffe.) (,) e(fhg/h_fiihhg)jus :(gv.eg/ihh/fgf.) (:) ex(f)prés(hf/ghg)sa(ge/f!hhhvFE'ec) (,) si(d_e)gno(e) san(e)cti(eg)tá(g)tis,(fgF'Ef!hh/f!hhhvGF'hee[ll:1]d.0) (:) gló(fh)ri(ef)a(f) ho(f)nó(hf/gh!ivFE')ris,(feec) (;) et(e) o(ef)pus(fef) for(fe)ti(f!hh)tú(gxfe/fgE'DefD'C)(,)(ef!hvvF'Eff//efg)di(e)nis.(c./eec//e[ll:1]d/ec..) (::) ℣. Quó(ef)ni(e)am(fh) prae(hg)ve(hi)ní(ihhgh)sti(h_g) (,) e(jji/jihhf/ig/h_[oh:h]i_[oh:h]h_[oh:h])(,)(hhhvFEhg/h_i)um(ih/ihhg.) (;) in(f) be(fi)ne(ihhf)di(f!gwh)cti(h)ó(gh/jij)ni(hg)bus(g.) (,) dul(g)cé(h_fhvGE)di(f!gwh_g)nis :(gv.eg/ihh/fgf.) (:) po(f)su(ef)í(fhf/hhfg)sti(f.) (,) in(fg~) cá(ge/f!hhhvFE'ec)pi(de)te(e.) (,) e(eg)jus(fgF'Ef!hh/f!hhhvGF'hee[ll:1]d.0) (;) co(f)ró(hf/gh!ivFE')nam(feec) (,) de(e) lá(ef)pi(f)de(fef) ()* pre(fe)ti(f!hh)ó(gxfe/fgE'DefD'C)(,)(ef!hvvF'Eff//ef/ge)so.(c./eec//e[ll:1]d/ec..) (::)",
      source: "Graduale Romanum (GregoBase #771)"
    },
    alleluia: {
      title: "Corona aurea",
      latin: "Allelúia. ℣. Coróna áurea super caput ejus, expréssa signo sanctitátis, glória honóris, et opus fortitúdinis.",
      translation: "Alleluia. ℣. A crown of gold upon his head, engraved with the seal of holiness, the glory of honor, and a work of might.",
      mode: "Alleluia · Common of a Bishop Confessor · Mode I",
      reference: "Ecclus. 45:14",
      gabc: "(c4) AL(ddc~)le(egE'Cd.0/egED'ew!fvED)lú(dV!cd~){ia}.(d.) (;) * ij.(dhhvGEfvED.ce!fg'EDffd.) (;) (c/!ee//c/!dd//ce!gvvFDee) (,) (dfegvEDffd.) (::) ℣. Co(cd)ró(dfddce//fg'EDffd)na(d) áu(dc~)re(cd)a(d.) (;) su(d)per(dh~) ca(ixhiH'GhvGEfvED)put(dfddc.) (,) e(dfe/fg!hvF'ED.ef!gvEDffd)jus :(d.) (:) ex(dfd)prés(cd)sa(d.) (,) si(cd~)gno(d) san(dh/jjggf/gh.)(,)(hggf/gh/jjggf/gh.)(,)(g.h!iwj!kvJ'IH'Gh.)(,)(hkkj/klJ'IH)cti(gh)tá(g.h!iwj/kjjvIH)tis,(gh..) (;) gló(h)ri(gh)a(h) ho(hjI'Gi!jk)nó(ih/jjh)ris,(h.) (:) et(d) o(cd)pus(d) *() for(d)ti(d_c)tú(egE'Cd.0/egED'ew!fvED'd)di(cd)nis.(d.) (;) (dhhvGEfvED.ce!fg'EDffd.) (;) (c/!ee//c/!dd//ce!gvvFDee) (,) (dfegvEDffd.) (::)",
      source: "Graduale Romanum (GregoBase #413)"
    },
    offertory: {
      title: "Sacerdotes Domini",
      latin: "Sacerdótes Dómini incénsum et panes ófferunt Deo : et ídeo sancti erunt Deo suo, et non pólluent nomen ejus, allelúia.",
      translation: "The priests of the Lord offer incense and loaves to God: and therefore shall they be holy to their God, and not pollute his name, alleluia.",
      mode: "Offertory · Common of a Bishop Confessor · Mode IV",
      reference: "Lev. 21:6",
      gabc: "(c4) SA(f)cer(d!ewf)dó(f)tes(e'fg) *() Dó(ixghf___//ih/igh)mi(e)ni(egf/gffe.) (;) in(f)cén(fgf)sum(ff) et(df~) pa(fff/ghggef)nes(e_[oh:h][ll:1]d) (,) óf(gh)fe(g/jjj)runt(hjhhg) De(gh)o :(hg..) (:) et(ixgih'ivGF') íd(g)e(f)o(f_e) (,) san(ef'g~)cti(g) e(ixhig)runt(ghF'E) (;) De(gh)o(gjh) su(ghf/ghg)o,(gvFD//ef/gfgd.) (:) et(df/gef) non(f) pól(ixef/hiHG')lu(hggfg)ent(g_[oh:h]d) (,) no(df/gef)men(f) e(f_[oh:h]g_[oh:h]f_[oh:h])jus,(f.) (;) al(f!gwhg~)le(ixh_f/ih/igh)lú(e){ia}.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #645)"
    },
    communion: {
      title: "Fidelis servus",
      latin: "Fidélis servus et prudens, quem constítuit Dóminus super famíliam suam : ut det illis in témpore trítici mensúram.",
      translation: "A faithful and wise servant, whom the Lord set over his household: to give them their measure of wheat in due season.",
      mode: "Communion · Common of a Bishop Confessor · Mode VII",
      reference: "Luke 12:42",
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
      reference: "Ps. 91:13-14, 3",
      gabc: "(c3) JU(egf)stus(f.) *(,) ut(f) pal(f)ma(f) flo(f)ré(hfghvF'Ege/fg)bit :(f.) (:) sic(f)ut(f) ce(hf/hi'j)drus(gxhffegvFE.) (,) Lí(e)ba(e[ll:1]d/fef)ni(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) mul(hh)ti(h)pli(h)cá(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')bi(f)tur(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) in(d) do(de'fhvGF'g)mo(ef) Dó(hf)mi(hi)ni.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHFgwhf.1) (::) ℣. Ad(f) an(h)nun(hi)ti(i)án(i)dum(ij~) ma(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)ne(ji..) (:) mi(i!jw!kvJI'jw!kvJI)se(i)ri(i)cór(i)di(i)am(ij~) tu(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)am,(f.) (:) et(hh) ve(h)ri(h)tá(h)tem(hi~) tu(ivH'GE//fhGEfh..)(,)(gi!jvHF)am(fhF'Efhhf//hvvGF'hee[ll:1]d.0) *(:) per(de'fhvGFgef) no(hf/h_i)ctem.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #34)"
    },
    alleluia: {
      title: "Justus ut palma",
      latin: "Allelúia. ℣. Justus ut palma florébit : et sicut cedrus, quae in Líbano est, multiplicábitur.",
      translation: "Alleluia. ℣. The just shall flourish like the palm tree: and shall grow up like the cedar that is in Lebanon.",
      mode: "Alleluia · Common of a Doctor · Mode I",
      reference: "Ps. 91:13",
      gabc: "(c4) AL(c)le(d!fdf)lú(ef!gvFEfg~){ia}.(g.) *(;) ij.(hvGFgvFEf_ghvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'EDde!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::) ℣. Ju(fhg___)stus(g_[oh:h]e//fgf/gddc.) (,) ut(cd) pal(ef'g~)ma(gv.e!g_4[uh:l]h) flo(fvED)ré(d.c!dw!evDCde)bit,(d.) (:) et(dede) sic(c)ut(e) ce(ixg_[uh:l]h/ig/h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(ixce!g_4[uh:l]h/!ig/!h_e)(,)(fvEDfe/g_[oh:h]e//fvECe[ll:1]d/fd..)(;)(gv.ef/g_[oh:h]e/f_dev.)(,)(gv.ef/g_[oh:h]e/f_dev.c!dwe'!fv)drus(e[ll:1]d..) (:) * mul(c)ti(d!fdf)pli(f)cá(ef!gvFE)bi(fg)tur.(g.) (,) (hvGFgvFEf_ghvGFgvFE'Cd.) (,) (dfE'DCddc.) (;) (ghF'EDde!f'g/ef/gddc.) (,) (e/gghF'ED//efefd.) (::)",
      source: "Graduale Romanum (GregoBase #946)"
    },
    offertory: {
      title: "Justus ut palma florebit",
      latin: "Justus ut palma florébit : sicut cedrus, quae in Líbano est, multiplicábitur.",
      translation: "The just shall flourish like the palm tree: he shall grow up like the cedar that is in Lebanon.",
      mode: "Offertory · Common of a Doctor · Mode IV",
      reference: "Ps. 91:13",
      gabc: "(c4) JU(e.f!gwhgfffdgvFE)stus(fff) *(,) ut(dge) pal(gh)ma(g!jjjvH'GF.//ixfff!gwhg/hih.) (,) flo(ghf)ré(dgF'E)bit :(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (:) sic(dg)ut(gh) ce(h!iwj!kvJH//gih)drus,(hjHG'hffe.) (,) quae(ghf) in(fe~) Lí(ghF'E//fh)ba(h_g!jjjvH'G)no(g_[oh:h]f//hvGFgvFE) est,(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (;) mul(ff)ti(dgf)pli(f)cá(ixff/hihhghvGFg_[oh:h]e//hggf/ghg')bi(e)tur.(egf/gffe.) (::)",
      source: "Graduale Romanum (GregoBase #777)"
    },
    communion: {
      title: "Fidelis servus",
      latin: "Fidélis servus et prudens, quem constítuit Dóminus super famíliam suam : ut det illis in témpore trítici mensúram.",
      translation: "A faithful and wise servant, whom the Lord set over his household: to give them their measure of wheat in due season.",
      mode: "Communion · Common of a Doctor · Mode VII",
      reference: "Luke 12:42",
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
      reference: "Ps. 44:5",
      gabc: "(c4) SPé(ff)ci(f)e(f_e/g_[uh:l]h) tu(gf)a,(fv.d!ff/ge'/fgd'/e[ll:1]ddc.) *(;) et(f) pul(f)chri(h)tú(jh/jjj)di(jh/jjj)ne(jh/jjlvKJ'k) (,) tu(kjjh/jhhf)a(fh//g!jjjh/jhh/fgf.) (:) in(f)tén(ghgh)de,(ixhg/hiGF./[-1]iyh!iwj) (,) pró(hf)spe(gf)re(f_g//d!f'g//fh!jvGF'fd//ff/ge'/fgd'/e[ll:1]ddc.) (;) pro(d)cé(fd/fff)de,(dc__) (,) et(ff) re(ixhhg/hh//ixgh!ivGFhh//f!h'j)gna.(iyjkijh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. Pro(d)pter(d) ve(d)ri(fh)tá(hv.hihhfh.)(,)(df!hvv//hihhfh./gh/ihi)tem,(hh) (;) et(d) man(d)su(d)e(fe)tú(eh)di(h)nem(ih) (,) (hhh'/ihhg./[-0.5]i/jiih.0/[-0.5]j/kjjh.0/[-0.5]i/jiig./h/ihh//fh//ghFE'e[ll:1]d.0) (;) et(d) ju(d)stí(fdfED//f_d/ef!gwhhi)ti(h)am :(hhi!kvvh_[oh:h]i_[oh:h]h._[oh:h]) (:) et(f) de(fi)dú(i)cet(ih/jkihhf/hh/ijH'Gh) te(h.) (;) mi(h)ra(h)bí(i_[oh:h]h//ghG'Fi_[oh:h]h//h'hhvFEfe//f/hhivHGh')li(h)ter(h.) *(;) déx(hh)te(h)ra(h) tu(ihhf//hh/ijH'G)a.(hhhf//hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #174)"
    },
    alleluia: {
      title: "Specie tua",
      latin: "Allelúia. ℣. Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna.",
      translation: "Alleluia. ℣. With your comeliness and your beauty, set out, proceed prosperously, and reign.",
      mode: "Alleluia · Common of a Virgin · Mode VIII",
      reference: "Ps. 44:5",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhgehf/gffe.) (::) ℣. Spé(hv.gih)ci(hg)e(g) tu(gh!ivvH'Fhf/gh)a,(g.) (;) et(g) pul(g)chri(gf)tú(hji)di(h)ne(gh) tu(f_ehvvGE.gxfgFD.1gxegF'Efe)a(e.) (:) in(e)tén(feh)de,(h.) (,) pró(hfh'GE//fhF'D//gxgvFEf.0/[-0.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/g_[oh:h]e//gvFEfd)spe(e[ll:1]d)re(d.) (;) pro(fd)cé(ef)de,(f) *() et(f) re(hg/hfh)gna.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'gvE'Defe.) (,) (gxhhvF'EfgED.gyhhvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #406)"
    },
    offertory: {
      title: "Desiderium animae",
      latin: "Desidérium ánimae ejus tribuísti ei, Dómine, et voluntáte labiórum ejus non fraudásti eum : posuísti in cápite ejus corónam de lápide pretióso.",
      translation: "You have given her her heart's desire, O Lord, and have not withheld from her the will of her lips: you have set upon her head a crown of precious stone.",
      mode: "Offertory · Common of a Virgin · Mode VI",
      reference: "Ps. 20:3-4",
      gabc: "(c4) DE(c)si(d)dé(ff)ri(fhg)um(ghff) *(`) á(d!fffg)ni(f)mae(f) e(fg!hv_G~F~)jus(gf..) (;) tri(fg)bu(f)í(g_[oh:h]f)sti(f_e) e(fg)i,(ixg!iiivG'F) (,) Dó(fg)mi(f)ne,(fggf.0) (:) et(fd~) vo(fgf)lun(gh)tá(hj)te(g) la(f)bi(f)ó(f)rum(fhg) e(fg!hv_G~F~)jus(gf..) (;) non(fh/jhj) frau(gf~)dá(fgF'D)sti(fg) e(fgF'D)um :(dfddc.) (:) po(f)su(g)í(gh/jhj)sti(g) in(f) cá(gh)pi(g)te(f) e(hf/gh)jus(g.) (;) co(f)ró(hv.fhg)nam(g.) (,) de(ixgih) lá(ixij)pi(g)de(fgF'D) (`) pre(ff)ti(gh)ó(ixhf/!gh/!jjh/!/!giH'GF.)(,)(fff//fgf/ghg/hf/g_[oh:h]f)so.(f.) (::)",
      source: "Graduale Romanum (GregoBase #722)"
    },
    communion: {
      title: "Quinque prudentes",
      latin: "Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus : média autem nocte clamor factus est : Ecce sponsus venit : exíte óbviam Christo Dómino.",
      translation: "The five wise virgins took oil in their vessels with their lamps: and at midnight there was a cry made: Behold the bridegroom comes; go out to meet Christ the Lord.",
      mode: "Communion · Common of a Virgin · Mode V",
      reference: "Matt. 25:4-6",
      gabc: "(c3) QUin(dde~)que(d) *() pru(d)dén(ef~)tes(f) vír(f!gwh)gi(e)nes(deD/B.1) (;) ac([ull:1{1]b)ce(b[ull:}])pé(ded)runt(dc~) ó(efef)le(ef)um(f.) (;) in(df~) va(f)sis(ef) su(d)is(dc) cum(e) lam(ef~)pá(d)di(de!fvED'e)bus :(e[ll:1]d..) (:) mé(f)di(e)a(d) au(e)tem(f) no(hjI'H)cte(h.) (,) cla(hi)mor(j_i) fa(h)ctus(gh) est :(hihh/fgf.) (;) Ec(f)ce(e_[oh:h][ll:1]d) spon(e)sus(f) ve(hjI'H)nit(h.) (,) ex(i)í(i!jwk)te(h.) ób(gxffg)vi(e[ll:1]d)am(d.) (,) Chri(gxd!ffg)sto(ehhh.f!gw!hvGE'fgd') Dó(d)mi(d_[oh:h]e_[oh:h]d_[oh:h])no.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1301)"
    },
  },
  "common-confessor": {
    gradual: {
      title: "Justus ut palma",
      latin: "Justus ut palma florébit : sicut cedrus Líbani multiplicábitur, in domo Dómini. ℣. Ad annuntiándum mane misericórdiam tuam, et veritátem tuam per noctem.",
      translation: "The just shall flourish like the palm tree: he shall grow up like the cedar of Lebanon, in the house of the Lord. ℣. To show forth your mercy in the morning, and your truth in the night.",
      mode: "Gradual · Common of a Confessor · Mode II",
      reference: "Ps. 91:13-14, 3",
      gabc: "(c3) JU(egf)stus(f.) *(,) ut(f) pal(f)ma(f) flo(f)ré(hfghvF'Ege/fg)bit :(f.) (:) sic(f)ut(f) ce(hf/hi'j)drus(gxhffegvFE.) (,) Lí(e)ba(e[ll:1]d/fef)ni(fd/ef!hvvF'E//f!gwh/ihh/fgf.) (:) mul(hh)ti(h)pli(h)cá(hg/hi!jvHGhhg)(,)(i_[oh:h]hivHF')bi(f)tur(fhF'Efhhf//hvvGF'hee[ll:1]d.0) (:) in(d) do(de'fhvGF'g)mo(ef) Dó(hf)mi(hi)ni.(ih/ijI'H) (,) (jh/jkIG'hvF'E//f!gwh!iv.hi'j) (,) (ijijHFgwhf.1) (::) ℣. Ad(f) an(h)nun(hi)ti(i)án(i)dum(ij~) ma(jvI'HG'hvF'E)(,)(ge/f!hh/ijij.)(,)(hj!kvIG'hvF'E//fgF'Ef.)(,)(i!jwk_[hl:1]jkvJI'j)ne(ji..) (:) mi(i!jw!kvJI'jw!kvJI)se(i)ri(i)cór(i)di(i)am(ij~) tu(j_hjvIH'hf//hhfhv.hhh_f)(,)(hi!jvIHjvIHif)am,(f.) (:) et(hh) ve(h)ri(h)tá(h)tem(hi~) tu(ivH'GE//fhGEfh..)(,)(gi!jvHF)am(fhF'Efhhf//hvvGF'hee[ll:1]d.0) *(:) per(de'fhvGFgef) no(hf/h_i)ctem.(i_[uh:l]jH'Ghi..) (,) (ef'hh'jIH'GF'gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #34)"
    },
    alleluia: {
      title: "Beatus vir qui suffert",
      latin: "Allelúia. ℣. Beátus vir, qui suffert tentatiónem : quóniam, cum probátus fúerit, accípiet corónam vitae.",
      translation: "Alleluia. ℣. Blessed is the man that endures temptation: for when he has been proved, he shall receive the crown of life.",
      mode: "Alleluia · Common of a Confessor · Mode I",
      reference: "James 1:12",
      gabc: "(c4) AL(df)le(e/ghfgvFE'D)lú(gh){ia}.(gh..) *(;) ij.(gihgiHG'gd//efED'/!dc/e/ggh.) (,) (gihgiHG'gd//efED'/!dc/de/fee[ll:1]d.0) (::) ℣. Be(c!e'g)á(ghGE'fvED.cd/fde)tus(efvfe) vir,(e.) (;) qui(e_[oh:h]c) suf(eg/fhggvFE)fert(e.) (,) ten(g.h!iwjjvIH)ta(g!igh)ti(ghe)ó(fv.efd)nem :(e[ll:1]d..) (:) quó(e_[uh:l]g!hi)ni(h)am(h) cum(h) pro(h)bá(h)tus(hg) fú(hj)e(ghggvFE'f)rit,(fe..) (;) ac(ec)cí(eg)pi(fhggvFE)et(e.) (,) co(cd'e)ró(e_0[uh:l]fvE'Cd_e)nam(e.) *() vi(e/ghfgvFE'Dgh)tae.(gh..) (;) (gihgiHG'gd//efED'/!dcevggh.) (,) (gihgiHG'gd//efED'/!dc/de/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #724)"
    },
    offertory: {
      title: "Veritas mea",
      latin: "Véritas mea et misericórdia mea cum ipso : et in nómine meo exaltábitur cornu ejus.",
      translation: "My truth and my mercy shall be with him: and in my name shall his horn be exalted.",
      mode: "Offertory · Common of a Confessor · Mode II",
      reference: "Ps. 88:25",
      gabc: "(f4) VE(hh)ri(hiH'G)tas(ggh~) me(h!jjh/jjhgih)a,(h.) *(;) et(h!jjj) mi(h)se(g)ri(h)cór(h!iwj/kj)di(j)a(jkjji) me(h!iwj)a(jkjji) (,) cum(hg) i(h!iw!jvIH'i)pso :(hg..) (:) et(h) in(jhj') nó(j)mi(kvJH)ne(j_i) me(jijg)o(e!geg.) (;) ex(d)al(e)tá(gh)bi(hg)tur(h') cor(j)nu(jkjji) e(h!iwjij)jus.(ih..) (::)",
      source: "Graduale Romanum (GregoBase #630)"
    },
    communion: {
      title: "Beatus servus",
      latin: "Beátus servus, quem, cum vénerit dóminus, invénerit vigilántem : amen, dico vobis, super ómnia bona sua constítuet eum.",
      translation: "Blessed is that servant, whom his lord, when he comes, shall find watching: amen I say to you, he will set him over all his goods.",
      mode: "Communion · Common of a Confessor · Mode III",
      reference: "Matt. 24:46-47",
      gabc: "(c2) BE(exdde)á(cf)tus(f) ser(g_[oh:h]f/g!hwihi)vus,(ih..) *(,) quem,(hj) cum(h) vé(jkj)ne(i)rit(hvGF) Dó(h_i)mi(h)nus,(h.) (,) in(fh~)vé(h)ne(ghg)rit(ef) vi(g)gi(fe)lán(df)tem :(c.) (:) a(cd)men(f) di(fe)co(d) vo(fvEC)bis,(c.) (,) su(f)per(g) ó(i)mni(h)a(g) bo(g)na(f) su(g)a(f_g) (,) con(gf~)stí(g!hwi)tu(f)et(exfgF'Efgf) e(exdfee)um.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1154)"
    },
  },
  "common-confessor-2": {
    gradual: {
      title: "Os justi",
      latin: "Os justi meditábitur sapiéntiam, et lingua ejus loquétur judícium. ℣. Lex Dei ejus in corde ipsíus : et non supplantabúntur gressus ejus.",
      translation: "The mouth of the just shall meditate wisdom, and his tongue shall speak judgment. ℣. The law of his God is in his heart: and his steps shall not be supplanted.",
      mode: "Gradual · Common of a Confessor · Mode I",
      reference: "Ps. 36:30-31",
      gabc: "(c4) OS(ddcdfffddcd) ju(dfd/fffvED)sti(dfddc.) ~*(;) me(d)di(fddc)tá(fg)bi(ixfhg/hi)tur(h.) (,) sa(hjhhg)pi(hggf)én(fh!jvH'Gh)ti(h)am,(ixhv.f.g!hwihhggf.0) (:) et(dh) lin(h_g/jij)gua(h_f/hg) (`) e(g_[oh:h]eg)jus(gvF'EDfvED) (,) (fge'/fgd'/e[ll:1]ddc.) (;) lo(fgh!jvIH'G)qué(gf)tur(f.) (,) ju(f)dí(f)ci(gvFD)um.(dc/d!ff/ghG'Efgf/!f/ded.) (::) ℣. Lex(dh) De(h)i(g) e(h!jij)jus(h.) (,) (g/hhg/hh//gh!jjjhjvvIH'jggf.0) (:) in(f) cor(ixghgh//fh!ivGE'fvDC'//d!ff//g/hhg/hh,gh!jj//jjjkvJH)de(j_i) i(j_i)psí(j_i)us(jjjvIH'jggf.0) (:) et(f) non(ixghgh//fh!ivGF'E//fg!hvhg) (`) sup(h)plan(g_[oh:h]e~)ta(fg)bún(gffvE~D~)tur(d/ffd) (,) (fge'/fgd'/e[ll:1]ddc.) *(;) gres(ff)sus(fg) e(g_[oh:h]f/hgh)jus.(hvvGF'EC//d!ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #511)"
    },
    alleluia: {
      title: "Beatus vir qui timet",
      latin: "Allelúia. ℣. Beátus vir, qui timet Dóminum : in mandátis ejus cupit nimis.",
      translation: "Alleluia. ℣. Blessed is the man that fears the Lord: he shall delight exceedingly in his commandments.",
      mode: "Alleluia · Common of a Confessor · Mode V",
      reference: "Ps. 111:1",
      gabc: "(c3) AL(d!f'h~)le(h_f)lú(fh'/ih~){ia}.(iv.hiHF'fd.) *(;) ij.(gxfgF'Egyhighf.dfe/fee[ll:1]d.0) (::) ℣. Be(d.0f!gwh)á(h_iH//E./!gxgfgE'Dd'f/h_f)tus(fh/i_[oh:h]hjvIH) vir,(h.) (;) qui(h_f) ti(gxg)met(gyf_e/highf.gxegF'Ef') Dó(d)mi(d_[oh:h]e_[oh:h]d_[oh:h])num :(d.) (:) in(d) man(d)dá(efeffefv.)(,)(h_[oh:h]i_[oh:h]h'_[oh:h]ivHF'Ef.//hiH'F)tis(gxgvFE) e(gxf@h!fg~)jus(f.) *(;) cu(de'f)pit(fhGF') ni(i)mis.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #765)"
    },
    offertory: {
      title: "In virtute tua",
      latin: "In virtúte tua, Dómine, laetábitur justus, et super salutáre tuum exsultábit veheménter : desidérium ánimae ejus tribuísti ei.",
      translation: "In your strength, O Lord, the just man shall joy, and in your salvation he shall rejoice exceedingly: you have given him his heart's desire.",
      mode: "Offertory · Common of a Confessor · Mode VI",
      reference: "Ps. 20:2-3",
      gabc: "(c2) IN(c) vir(d)tú(ff)te(f) tu(f)a,(f.) *(,) Dó(fgf)mi(exfee)ne,(c!ece.) (;) lae(c)tá(ffg)bi(f)tur(fg/hg/h_g) ju(fg!hvGF'g)stus,(gf..) (:) et(f) su(f!gwh'!iv)per(h) sa(h)lu(h)tá(h/jjh/i_[uh:l]j)re(g_[oh:h]fg) tu(d!fff/g_[oh:h]f)um(f.) (;) ex(g)sul(f)tá(f)bit(d!ff) ve(d)he(ff/gf)mén(deD~'C~)ter :(dc..) (:) de(c)si(d)dé(ffg)ri(f)um(f.) (,) á(hj)ni(g)mae(f) e(d!fffvEDevD~C~)jus(dc..) (;) tri(c)bu(d)í(ffg)sti(f) e(f!gwhghjjh//giH'GF.)(,)(fff//fgf/ghg/hf/g_[oh:h]f)i.(f.) (::)",
      source: "Graduale Romanum (GregoBase #667)"
    },
    communion: {
      title: "Amen dico vobis",
      latin: "Amen dico vobis : quod vos, qui reliquístis ómnia et secúti estis me, céntuplum accipiétis, et vitam aetérnam possidébitis.",
      translation: "Amen I say to you: that you who have left all things and followed me, shall receive a hundredfold, and shall possess life everlasting.",
      mode: "Communion · Common of a Confessor · Mode I",
      reference: "Matt. 19:28-29",
      gabc: "(c4) A(d!ewfe)men(fgf) (,) * di(f)co(fe) vo(ghghvGF'g)bis :(f_e//fvEDe[ll:1]d..) (;) quod(d!ewf) vos,(f_[oh:h]g_[oh:h]d_[oh:h]fv.) (,) qui(c) re(d)li(f)quí(fe)stis(g) ó(fg)mni(fvED)a,(d!ewf.) (;) et(c) se(d)cú(f)ti(fe) e(ghgh)stis(fg) me,(fggf.0) (:) cén(h)tu(hg)plum(h) ac(f)ci(f)pi(g)é(fvED)tis,(ff) (;) et(fh~) vi(h)tam(g) ae(fe)tér(ghghvG~F~)nam(gvFE'DCd.) (,) pos(f_e/ggh)si(fe)dé(d)bi(de!fvED'e)tis.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1337)"
    },
  },
  "common-virgin-martyr": {
    gradual: {
      title: "Dilexisti justitiam",
      latin: "Dilexísti justítiam, et odísti iniquitátem. ℣. Proptérea unxit te Deus, Deus tuus, óleo laetítiae.",
      translation: "You have loved justice, and hated iniquity. ℣. Therefore has God, your God, anointed you with the oil of gladness.",
      mode: "Gradual · Common of a Virgin Martyr · Mode VIII",
      reference: "Ps. 44:8",
      gabc: "(c4) DI(c)le(dc)xí(cg)sti(gv.fffddc.) (,) * ju(c)stí(c!geghjh___!iwj)ti(ghg___)am,(g.) (;) et(f) o(gh)dí(jj/kjk)sti(kjj) (,) in(gh)i(h)qui(hjh)tá(g)tem.(f/ghffd//gvgf/gjhhg.) (::) ℣. Pro(gf)ptér(gf)e(hj)a(jjjvHG'hjjlvKJ'Ijg..) (;) un(gh)xit(h_g) te(g) De(g_[oh:h]f/ghffd)us,(d.) (,) De(gg)us(g) tu(ghg___)us,(g.) (;) ó(g)le(fg)o(gggvED'/!eg'//hvGFg.) *(,) lae(gf)tí(gf)ti(hj)ae.(jjk//iijhhg.) (,) (ijGF.h!iwjjigjh/ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #394)"
    },
    alleluia: {
      title: "Adducentur Regi virgines",
      latin: "Allelúia. ℣. Adducéntur Regi Vírgines post eam : próximae ejus afferéntur tibi in laetítia.",
      translation: "Alleluia. ℣. After her shall virgins be brought to the King: her neighbors shall be brought to you in gladness.",
      mode: "Alleluia · Common of a Virgin Martyr · Mode III",
      reference: "Ps. 44:15-16",
      gabc: "(c4) AL(eef)le(dg)lú(g_[oh:h]i_[oh:h]g_[oh:h]/h!iwjjk){ia}.(i.) *(;) ij.(g.h!iwj_h//jh/ig.) (,) (g.h!iwj_h//jh/igge.) (,) (ef'ghghF'Ef_gffe.) (::) ℣. Ad(c.d!ewff)du(fg)cén(ixg_[oh:h]f/g/ig/hffd./fg/ighhV!gh~)tur(f.) (;) re(f.0h!iwjj)gi(ixjjvIG') vír(ixgjjh~)gi(h_[oh:h]i_[oh:h]h_[oh:h])nes(h.) (;) post(fg'hjhhfg) e(fg)am :(gv.ff/ded.) (:) pró(de!f'g)xi(ghg)mae(fg) e(ghg___)jus(g.) (;) af(f)fe(ghg)rén(ixh/ig/hh//gg/hfg.)(,)(ixgjjh/ig/hh//gg/hfg.)(,)(ixjjjh/ig/hh//gg/hfg.)(,)(ef/ghgfv.efd.1)(,)(de!fvghgfffd~)tur(ef~) ti(d_[oh:h]e_[oh:h]d_[oh:h])bi(d.) *(;) in(fc~) lae(d)tí(d!fff/g_[oh:h]f)ti(f!hgh)a.(hhf.) (,) (h_ghvFDgff'fvEC//ggf/ghdd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #208)"
    },
    offertory: {
      title: "Afferentur post eam",
      latin: "Afferéntur Regi Vírgines post eam : próximae ejus afferéntur tibi in laetítia et exsultatióne.",
      translation: "After her shall virgins be brought to the King: her neighbors shall be brought to you in gladness and rejoicing.",
      mode: "Offertory · Common of a Virgin Martyr · Mode I",
      reference: "Ps. 44:15-16",
      gabc: "(c4) AF(c)fe(d)rén(f)tur(fff/ded.) ()* re(fg)gi(fe/fggf.0) (;) vír(fgffe)gi(de!fvED'e)nes(e[ll:1]d..) (`) post(dg) e(gf)am :(f.) (:) pró(hf/gh!jjh)xi(g)mae(fggf) e(d!ew!fvED)jus(dc/ded.) (;) af(c)fe(d)rén(ffd//fgf/ge/fgd)tur(dV!cd~) ti(d)bi.(dc/d!fffc//fvED'ewfd.1) (::)",
      source: "Graduale Romanum (GregoBase #768)"
    },
    communion: {
      title: "Confundantur superbi",
      latin: "Confundántur supérbi, quia injúste iniquitátem fecérunt in me : ego autem in mandátis tuis exercébor, in tuis justificatiónibus, ut non confúndar.",
      translation: "Let the proud be confounded, because they have done unjustly towards me: but I will meditate on your commandments, on your justifications, that I be not confounded.",
      mode: "Communion · Common of a Virgin Martyr · Mode I",
      reference: "Ps. 118:78, 80",
      gabc: "(c4) COn(fe~)fun(f)dán(gh)tur(ffe) su(dc)pér(d!ewfef)bi,(e[ll:1]d..) (;) * qui(d)a(d) in(dh~)jú(h)ste(ixhg/hih.) (,) in(g)i(g)qui(ge)tá(ghgh)tem(g) fe(f)cé(g)runt(fe) in(d) me :(fddc.) (:) e(c.d!ewffg)go(f) au(ffe~)tem(ixghg/hih.) in(g) man(h)dá(jj)tis(kjjh) tu(ixh.g!hwihi)is(ih..) (,) ex(h)er(fg~)cé(g.f!gwh_g)bor,(ghG'Fg.) (;) in(f) tu(gh)is(h) ju(hf)sti(g)fi(gf)ca(fe)ti(d)ó(d!ew!fvED')ni(d)bus,(dc/ded.) (;) ut(cd) non(fg'h) con(f_e)fún(d_c/d!ewf)dar.(e[ll:1]d..) (::)",
      source: "Graduale Romanum (GregoBase #1032)"
    },
  },
  "common-several-martyrs": {
    gradual: {
      title: "Anima nostra sicut passer",
      latin: "Anima nostra, sicut passer, erépta est de láqueo venántium. ℣. Láqueus contrítus est, et nos liberáti sumus : adjutórium nostrum in nómine Dómini, qui fecit caélum et terram.",
      translation: "Our soul has been delivered as a sparrow out of the snare of the fowlers. ℣. The snare is broken, and we are delivered: our help is in the name of the Lord, who made heaven and earth.",
      mode: "Gradual · Common of Several Martyrs · Mode V",
      reference: "Ps. 123:7-8",
      gabc: "(c3) A(dd)ni(d)ma(d) no(ded//d'd)stra,(d_b/dec'/de[ull:0]b'/cbba.) *(;) sic(d)ut(f) pas(hf/hhh)ser,(h.) (,) e(h_g/i!jwk)ré(i_[oh:h]h)pta(h) est(hihh/fgf.) (;) de(h_f) lá(h)que(hi)o(i) ve(ihhf)nán(gxhfgED')ti(d!f'h)um.(gyhighf.) (,) (de/f!hh/ijghf.gxegFD.1) (::) ℣. Lá(d)que(gxf)us(fh/ih/i_[oh:h]hivFD'//fh.ivFD'f!hfg.) (,) (fh/ih/i_[oh:h]h//ivFD'e_[oh:h][ll:1]d.0ddd!f_h/ijh.1) (,) con(hi'j)trí(i_[oh:h]h)tus(h) est,(hg/i_[oh:h]hjvIH'Ghf..) (:) et(hh) nos(h) li(h)be(h)rá(ih/ij_hih/ij_ij//hi/jij)ti(jh/jkihhf.) (,) su(hf/hhh)mus :(h.f!gwh!iv.hi/jhh/iih.0) (:) ad(hhi)ju(h)tó(hi)ri(h)um(hf~) no(hi)strum(h.) (,) in(hf~) nó(hi)mi(h)ne(hh) Dó(hih/ihjvIG'hvF'Ef!hhivHG)mi(hg)ni,(h.) (;) qui(hh) fe(h)cit(h) cae(ivHF)lum(f.) *(,) et(f!h'i) ter(hgiHF)ram.(f.//de/f!hh/ijghf.gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #432)"
    },
    alleluia: {
      title: "Justi epulentur",
      latin: "Allelúia. ℣. Justi epuléntur, et exsúltent in conspéctu Dei : et delecténtur in laetítia.",
      translation: "Alleluia. ℣. Let the just feast, and rejoice before God: and be delighted with gladness.",
      mode: "Alleluia · Common of Several Martyrs · Mode I",
      reference: "Ps. 67:4",
      gabc: "(c4) AL(d/ff)le(ef!gvEDffd)lú(ixfghig/h_e/fg~){ia}.(g.) *(,) ij.(def!gvEDffd) (,) (def!gvEDhv.ghF'ED.) (,) (e_[uh:l]g//fgfdeddc.) (,) (fff/g_[uh:l]hGE'fee[ll:1]d.0) (::) ℣. Ju(dffeggvFE'fd)sti(d.) (,) e(d)pu(dh)lén(ixhv.f'!hi'GFhv.def!hvGE'fd)tur,(d.) (;) et(d) ex(d)súl(d!fff)tent(e_[oh:h][ll:1]devDCddc.) (,) in(c.d!ewf) con(fg_[uh:l]h~)spé(hvGF'fvED)ctu(dv.cd!evDC'd) De(d!ewfef)i :(e[ll:1]d..) (:) de(f)le(ghg)ctén(h'/jhhg/he/f_g//dfED.)(,)(ixdh'/jhhg/he/f_geg!ivHGhvFDfvED)(,)(hhggf/hjh___)tur(h.) *(;) in(d!ff) lae(ef!gvEDffd)tí(ixfghig/h_e)ti(fg)a.(g.) (,) (def!gvEDffd) (,) (def!gvEDhv.ghF'ED.) (,) (e_[uh:l]g//fgfdeddc.) (,) (fff/g_[uh:l]hGE'fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #896)"
    },
    offertory: {
      title: "Exsultabunt sancti",
      latin: "Exsultábunt Sancti in glória, laetabúntur in cubílibus suis : exaltatiónes Dei in fáucibus eórum.",
      translation: "The saints shall rejoice in glory, they shall be joyful in their beds: the high praises of God shall be in their mouth.",
      mode: "Offertory · Common of Several Martyrs · Mode IV",
      reference: "Ps. 149:5-6",
      gabc: "(c4) EX(d)sul(dfd~)tá(f)bunt(ef'g) *(,) san(gh)cti(ef!ghF'EfvEDe[ll:1]d..) (;) in(f) gló(ef!ghGE'f)ri(f)a,(egff/ded.) (:) lae(d)ta(dh)bún(he/f_g)tur(ixgh/if/gge.) (,) in(g) cu(gh)bí(h)li(g)bus(g) su(gh!jjh//fhf/gh)is :(g.) (:) ex(d)al(dh~)ta(h)ti(h)ó(hgh)nes(h) De(ixhiHG'hffef)i(fe..) (;) in(ef'g~) fáu(g_[oh:h]fh)ci(g)bus(fffdgvFE.) (,) e(ef/hg)ó(gv.efD'Cd)rum.(f_d/f!gwhgh//ghF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #33)"
    },
    communion: {
      title: "Dico autem vobis",
      latin: "Dico autem vobis amícis meis : Ne terreámini ab his, qui vos persequúntur.",
      translation: "But I say to you, my friends: Be not afraid of them who persecute you.",
      mode: "Communion · Common of Several Martyrs · Mode VIII",
      reference: "Luke 12:4",
      gabc: "(c4) DI(gg)co(g) au(g)tem(gh~) vo(hvGF//g.h!iwjg)bis(g.) *(,) a(gh)mí(jkjk)cis(ij) me(hjI'G)is :(g.) (;) ne(g) ter(hih)re(g)á(e)mi(ffg)ni(gvFED.) (,) ab(fg) his,(ghgh) qui(fg) vos(g.h!iwjg) per(f)se(ghg)quún(h!jj/hi~)tur.(g.) (::)",
      source: "Graduale Romanum (GregoBase #699)"
    },
  },
  "common-virgin-not-martyr": {
    gradual: {
      title: "Specie tua",
      latin: "Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna. ℣. Propter veritátem, et mansuetúdinem, et justítiam : et dedúcet te mirabíliter déxtera tua.",
      translation: "With your comeliness and your beauty, set out, proceed prosperously, and reign. ℣. Because of truth, and meekness, and justice: and your right hand shall conduct you wonderfully.",
      mode: "Gradual · Common of a Virgin · Mode V",
      reference: "Ps. 44:5",
      gabc: "(c4) SPé(ff)ci(f)e(f_e/g_[uh:l]h) tu(gf)a,(fv.d!ff/ge'/fgd'/e[ll:1]ddc.) *(;) et(f) pul(f)chri(h)tú(jh/jjj)di(jh/jjj)ne(jh/jjlvKJ'k) (,) tu(kjjh/jhhf)a(fh//g!jjjh/jhh/fgf.) (:) in(f)tén(ghgh)de,(ixhg/hiGF./[-1]iyh!iwj) (,) pró(hf)spe(gf)re(f_g//d!f'g//fh!jvGF'fd//ff/ge'/fgd'/e[ll:1]ddc.) (;) pro(d)cé(fd/fff)de,(dc__) (,) et(ff) re(ixhhg/hh//ixgh!ivGFhh//f!h'j)gna.(iyjkijh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. Pro(d)pter(d) ve(d)ri(fh)tá(hv.hihhfh.)(,)(df!hvv//hihhfh./gh/ihi)tem,(hh) (;) et(d) man(d)su(d)e(fe)tú(eh)di(h)nem(ih) (,) (hhh'/ihhg./[-0.5]i/jiih.0/[-0.5]j/kjjh.0/[-0.5]i/jiig./h/ihh//fh//ghFE'e[ll:1]d.0) (;) et(d) ju(d)stí(fdfED//f_d/ef!gwhhi)ti(h)am :(hhi!kvvh_[oh:h]i_[oh:h]h._[oh:h]) (:) et(f) de(fi)dú(i)cet(ih/jkihhf/hh/ijH'Gh) te(h.) (;) mi(h)ra(h)bí(i_[oh:h]h//ghG'Fi_[oh:h]h//h'hhvFEfe//f/hhivHGh')li(h)ter(h.) *(;) déx(hh)te(h)ra(h) tu(ihhf//hh/ijH'G)a.(hhhf//hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #174)"
    },
    alleluia: {
      title: "Adducentur Regi virgines",
      latin: "Allelúia. ℣. Adducéntur Regi Vírgines post eam : próximae ejus afferéntur tibi in laetítia.",
      translation: "Alleluia. ℣. After her shall virgins be brought to the King: her neighbors shall be brought to you in gladness.",
      mode: "Alleluia · Common of a Virgin · Mode III",
      reference: "Ps. 44:15-16",
      gabc: "(c4) AL(eef)le(dg)lú(g_[oh:h]i_[oh:h]g_[oh:h]/h!iwjjk){ia}.(i.) *(;) ij.(g.h!iwj_h//jh/ig.) (,) (g.h!iwj_h//jh/igge.) (,) (ef'ghghF'Ef_gffe.) (::) ℣. Ad(c.d!ewff)du(fg)cén(ixg_[oh:h]f/g/ig/hffd./fg/ighhV!gh~)tur(f.) (;) re(f.0h!iwjj)gi(ixjjvIG') vír(ixgjjh~)gi(h_[oh:h]i_[oh:h]h_[oh:h])nes(h.) (;) post(fg'hjhhfg) e(fg)am :(gv.ff/ded.) (:) pró(de!f'g)xi(ghg)mae(fg) e(ghg___)jus(g.) (;) af(f)fe(ghg)rén(ixh/ig/hh//gg/hfg.)(,)(ixgjjh/ig/hh//gg/hfg.)(,)(ixjjjh/ig/hh//gg/hfg.)(,)(ef/ghgfv.efd.1)(,)(de!fvghgfffd~)tur(ef~) ti(d_[oh:h]e_[oh:h]d_[oh:h])bi(d.) *(;) in(fc~) lae(d)tí(d!fff/g_[oh:h]f)ti(f!hgh)a.(hhf.) (,) (h_ghvFDgff'fvEC//ggf/ghdd[ull:1]c/da..) (,) (cd!fvvDC'd!ff/gff/ded.) (::)",
      source: "Graduale Romanum (GregoBase #208)"
    },
    offertory: {
      title: "Filiae regum",
      latin: "Fíliae regum in honóre tuo, ástitit regína a dextris tuis in vestítu deauráto, circúmdata varietáte.",
      translation: "The daughters of kings are in your honor; the queen stood on your right hand in gilded clothing, surrounded with variety.",
      mode: "Offertory · Common of a Virgin · Mode III",
      reference: "Ps. 44:10",
      gabc: "(c3) FI(e/hhh)li(h)ae(h) re(hihh'hh)gum(hihh'hh//ihh'hh_fh.) *(,) in(fh) ho(fh)nó(h_i)re(hi) tu(f!h'i)o,(ijijvIHih..) (:) á(fh/ih)sti(hhh)tit(hhh) re(h)gí(fh!ivHG'F)na(fhffe.) (,) a(ef) dex(h_f/hji)tris(hji) tu(hiH'F)is(gf..) (;) in(e) ve(f)stí(fh!ivHF)tu(f_h) (,) de(f!hhf'hvE'D)au(de/fef)rá(f!hh/ij)to,(ijiih.0) (:) cir(h)cúm(fh)da(hhh/ijH'F)ta(fhffe.) (,) va(f_e)ri(f_e)e(hhg)tá(gih./ghF'Ehv.//ghF'Ehig'hvF'E)te.(fv.efEC.) (::)",
      source: "Graduale Romanum (GregoBase #1333)"
    },
    communion: {
      title: "Quinque prudentes",
      latin: "Quinque prudéntes vírgines accepérunt óleum in vasis suis cum lampádibus : média autem nocte clamor factus est : Ecce sponsus venit : exíte óbviam Christo Dómino.",
      translation: "The five wise virgins took oil in their vessels with their lamps: and at midnight there was a cry made: Behold the bridegroom comes; go out to meet Christ the Lord.",
      mode: "Communion · Common of a Virgin · Mode V",
      reference: "Matt. 25:4-6",
      gabc: "(c3) QUin(dde~)que(d) *() pru(d)dén(ef~)tes(f) vír(f!gwh)gi(e)nes(deD/B.1) (;) ac([ull:1{1]b)ce(b[ull:}])pé(ded)runt(dc~) ó(efef)le(ef)um(f.) (;) in(df~) va(f)sis(ef) su(d)is(dc) cum(e) lam(ef~)pá(d)di(de!fvED'e)bus :(e[ll:1]d..) (:) mé(f)di(e)a(d) au(e)tem(f) no(hjI'H)cte(h.) (,) cla(hi)mor(j_i) fa(h)ctus(gh) est :(hihh/fgf.) (;) Ec(f)ce(e_[oh:h][ll:1]d) spon(e)sus(f) ve(hjI'H)nit(h.) (,) ex(i)í(i!jwk)te(h.) ób(gxffg)vi(e[ll:1]d)am(d.) (,) Chri(gxd!ffg)sto(ehhh.f!gw!hvGE'fgd') Dó(d)mi(d_[oh:h]e_[oh:h]d_[oh:h])no.(d.) (::)",
      source: "Graduale Romanum (GregoBase #1301)"
    },
  },
  "common-holy-women": {
    gradual: {
      title: "Specie tua",
      latin: "Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna. ℣. Propter veritátem, et mansuetúdinem, et justítiam : et dedúcet te mirabíliter déxtera tua.",
      translation: "With your comeliness and your beauty, set out, proceed prosperously, and reign. ℣. Because of truth, and meekness, and justice: and your right hand shall conduct you wonderfully.",
      mode: "Gradual · Common of Holy Women · Mode V",
      reference: "Ps. 44:5",
      gabc: "(c4) SPé(ff)ci(f)e(f_e/g_[uh:l]h) tu(gf)a,(fv.d!ff/ge'/fgd'/e[ll:1]ddc.) *(;) et(f) pul(f)chri(h)tú(jh/jjj)di(jh/jjj)ne(jh/jjlvKJ'k) (,) tu(kjjh/jhhf)a(fh//g!jjjh/jhh/fgf.) (:) in(f)tén(ghgh)de,(ixhg/hiGF./[-1]iyh!iwj) (,) pró(hf)spe(gf)re(f_g//d!f'g//fh!jvGF'fd//ff/ge'/fgd'/e[ll:1]ddc.) (;) pro(d)cé(fd/fff)de,(dc__) (,) et(ff) re(ixhhg/hh//ixgh!ivGFhh//f!h'j)gna.(iyjkijh.) (,) (fg/h!jj/klijh.0ixgiHF.1) (z0::c3) ℣. Pro(d)pter(d) ve(d)ri(fh)tá(hv.hihhfh.)(,)(df!hvv//hihhfh./gh/ihi)tem,(hh) (;) et(d) man(d)su(d)e(fe)tú(eh)di(h)nem(ih) (,) (hhh'/ihhg./[-0.5]i/jiih.0/[-0.5]j/kjjh.0/[-0.5]i/jiig./h/ihh//fh//ghFE'e[ll:1]d.0) (;) et(d) ju(d)stí(fdfED//f_d/ef!gwhhi)ti(h)am :(hhi!kvvh_[oh:h]i_[oh:h]h._[oh:h]) (:) et(f) de(fi)dú(i)cet(ih/jkihhf/hh/ijH'Gh) te(h.) (;) mi(h)ra(h)bí(i_[oh:h]h//ghG'Fi_[oh:h]h//h'hhvFEfe//f/hhivHGh')li(h)ter(h.) *(;) déx(hh)te(h)ra(h) tu(ihhf//hh/ijH'G)a.(hhhf//hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #174)"
    },
    alleluia: {
      title: "Specie tua",
      latin: "Allelúia. ℣. Spécie tua, et pulchritúdine tua inténde, próspere procéde, et regna.",
      translation: "Alleluia. ℣. With your comeliness and your beauty, set out, proceed prosperously, and reign.",
      mode: "Alleluia · Common of Holy Women · Mode VIII",
      reference: "Ps. 44:5",
      gabc: "(c3) AL(def)le(f_e/f!gwhg)lú(fhh'1h){ia}.(hiHF'fe.) *(;) ij.(gh//efED.f!gwhhgehf/gffe.) (::) ℣. Spé(hv.gih)ci(hg)e(g) tu(gh!ivvH'Fhf/gh)a,(g.) (;) et(g) pul(g)chri(gf)tú(hji)di(h)ne(gh) tu(f_ehvvGE.gxfgFD.1gxegF'Efe)a(e.) (:) in(e)tén(feh)de,(h.) (,) pró(hfh'GE//fhF'D//gxgvFEf.0/[-0.5]hhh/ijHF.1)(,)(g_[oh:h]i_[oh:h]g_[oh:h]ivHG'he.gxf_e/g_[oh:h]e//gvFEfd)spe(e[ll:1]d)re(d.) (;) pro(fd)cé(ef)de,(f) *() et(f) re(hg/hfh)gna.(ghFE.) (,) (df!hvF'E//d.0f!gwhghvGFg.//egf'gvE'Defe.) (,) (gxhhvF'EfgED.gyhhvF'Ef_gffe.) (::)",
      source: "Graduale Romanum (GregoBase #406)"
    },
    offertory: {
      title: "Diffusa est gratia",
      latin: "Diffúsa est grátia in lábiis tuis : proptérea benedíxit te Deus in aetérnum.",
      translation: "Grace is poured abroad upon your lips: therefore has God blessed you for ever.",
      mode: "Offertory · Common of Holy Women · Mode VIII",
      reference: "Ps. 44:3",
      gabc: "(c4) DIf(df)fú(ef!ghhghhgh)sa(fhg) est(g.) *(,) grá(hv./[-0.5]jkjkvJ'I)ti(jjj_h)a(hg..) (;) in(hggf~) lá(h_g/jjjh//jkJ'I)bi(jjjhhg)is(h.) tu(gjIH'hg)is :(ghggf.0) (:) pro(hj)ptér(jjj//jkj)e(jj/kj)a(jkjjgh.) (,) be(gihhg)ne(g)dí(hv./[-0.5]jkj)xit(j) te(jkjj) De(ji)us(j.) (;) in(jjj_ghjkj) ae(jjj_g//hj/klj)tér(jjj_g//jvIH'hg~)num,(ghggf.0) (:) et(fh) in(hjI'H) saé(gj//j'1j//jjj)cu(jj/k_[hl:1]j)lum(j.) (,) saé(jkjjg//hj/kj/kjjh//jjj_h/jj//jkj//hiH'G)cu(fg)li.(g.) (,) (jjvH'Gh_ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #177)"
    },
    communion: {
      title: "Dilexisti justitiam",
      latin: "Dilexísti justítiam, et odísti iniquitátem : proptérea unxit te Deus, Deus tuus, óleo laetítiae.",
      translation: "You have loved justice, and hated iniquity: therefore God, your God, has anointed you with the oil of gladness.",
      mode: "Communion · Common of Holy Women · Mode IV",
      reference: "Ps. 44:8",
      gabc: "(c3) DI(e)le(e)xí(gih)sti(gv.efED.) *(,) ju(h)stí(g.h!iwjij./h!iwji)ti(gihh)am,(hg..) (;) et(h) o(ij)dí(jjijjij)sti(ijii/ghg.) (,) in(h)i(gh'i)qui(h)tá(gvFEf./e!hghhvGF)tem :(f!gwh.) (:) pro(h_e)ptér(f/ggh)e(ggh)a(ggh.) (,) un(f!i'j~)xit(i) te(i) De(i_[oh:h]hjvIHivHG)us,(g.) (;) De(hhh)us(hhh) tu(hjI'HjvIHivHG)us.(g.) (::)",
      source: "Graduale Romanum (GregoBase #799)"
    },
  },
  "common-martyr-2": {
    gradual: {
      title: "Beatus vir qui timet",
      latin: "Beátus vir, qui timet Dóminum : in mandátis ejus cupit nimis. ℣. Potens in terra erit semen ejus : generátio rectórum benedicétur.",
      translation: "Blessed is the man that fears the Lord: he shall delight exceedingly in his commandments. ℣. His seed shall be mighty upon earth: the generation of the righteous shall be blessed.",
      mode: "Gradual · Common of a Martyr · Mode V",
      reference: "Ps. 111:1-2",
      gabc: "(c4) BE(d)á(ff/g_[oh:h]e/f_d//g_[oh:h]ef)tus(d/gef) vir,(f.) *(;) qui(jj) ti(j_[hl:1]k_[hl:1]j_[hl:1])met(j) Dó(ixj_hivHGivHG//f!gwhgh//gh)mi(fg)num :(fgff/ded.) (:) in(d) man(d)dá(fgfgh_g//jv.ikjjvIH)tis(hv.gj/kj) e(jjjijv_I~H~)jus(ih..) (;) cu(jjlK'J)pit(j_i/jjj_hj) ni(gh)mis.(e.f!gwhgh.//ghGF'f//f'hg/hggf.0) (z0::c3) ℣. Pot(d)ens(d) in(f) ter(h)ra(ihh'hh//f!hhhvF'ED//fvED//fvED) (,) (f!gwh/i_[oh:h]g/i_[oh:h]h//h'hhjIH'//hvGF.) (;) e(f!h'i)rit(ih/jkihhf.) se(hf/hhh)men(h) e(ihhfhv.)(,)(df/h_fhv.ihhfhv.ih/ihhghv_G~F~)jus :(gf..) (:) ge(f)ne(h)rá(h)ti(hfih)o(hhhvF'D) re(f)ctó(hv.fig'hvF'Ef.)(,)(egF'EfvED'e)rum(e[ll:1]d..) *(;) be(d)ne(ef)di(fhGF')cé(i)tur.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #153)"
    },
    alleluia: {
      title: "Posuisti Domine",
      latin: "Allelúia. ℣. Posuísti, Dómine, super caput ejus corónam de lápide pretióso.",
      translation: "Alleluia. ℣. You have set upon his head, O Lord, a crown of precious stone.",
      mode: "Alleluia · Common of a Martyr · Mode I",
      reference: "Ps. 20:4",
      gabc: "(c4) AL(cd/fg)le(edf./efd/e[ll:1]d)lú(cd~){ia}.(d.) *(;) (ixfg!hvhf//hv.giHF.1) (,) (ixhv.giH'GF.deddc) (,) (cf/g/hh//fhg'hvF'EDffd.) (::) ℣. Po(cd/fg)su(edf./efd/e[ll:1]d)í(cd)sti,(d.) (,) Dó(ixfg!hvhf//hv.giHF.1)(,)(ixhv.giH'GF.deddc)(,)(cd/fg)mi(edffd)ne,(d.) (:) su(h)per(g) ca(h)put(g) e(ixf/hhg/hh//fh!ivGFhh/fhfgvF~D~)jus(d.) (;) co(dcf)ró(ixhfhivGFhv.)(,)(ixf!gwhghivGFh)nam(hgg) (,) de(ef'g) lá(edf./efd/e[ll:1]d)pi(cd)de(d.) *(;) pre(cd/fg)ti(edf./efd/e[ll:1]d)ó(cd)so.(d.) (;) (ixfg!hvhf//hv.giHF.1) (,) (ixhv.giH'GF.deddc) (,) (cf/g/hh//fhg'hvF'EDffd.) (::)",
      source: "Graduale Romanum (GregoBase #1249)"
    },
    offertory: {
      title: "Gloria et honore",
      latin: "Glória et honóre coronásti eum : et constituísti eum super ópera mánuum tuárum, Dómine.",
      translation: "You have crowned him with glory and honor: and set him over the works of your hands, O Lord.",
      mode: "Offertory · Common of a Martyr · Mode I",
      reference: "Ps. 8:6-7",
      gabc: "(c4) GLó(f)ri(ixf.g!hwihi)a(h.) *(,) et(h) ho(h)nó(iyh!jjjvIHjjjvIH//gih)re(hggfg.) (;) co(fg'h)ro(ghG'F)ná(ghg___hvGF)sti(jvvI'G) e(jjvIH'G)um :(ghggf.0) (:) et(h) con(jjk)sti(hhg)tu(f)í(fg!hvhg)sti(jjjvIH) e(ghf___fd)um(d.) (;) su(f)per(ff) ó(ff/gfg)pe(deDC'd)ra(d_c/f!gwhg.) (;) má(h/jjjvIH//giH'G)nu(gf)um(f.) tu(f)á(fgF'E)rum,(fg!hvhg.) (;) Dó(giHG'g//fhGF'fdfv.//fff/gf/gff)mi(d)ne.(fff_[oh:h]g_[oh:h]d.1_[oh:h]) (::)",
      source: "Graduale Romanum (GregoBase #407)"
    },
    communion: {
      title: "Qui vult venire",
      latin: "Qui vult veníre post me, ábneget semetípsum, et tollat crucem suam, et sequátur me.",
      translation: "He that would come after me, let him deny himself, and take up his cross, and follow me.",
      mode: "Communion · Common of a Martyr · Mode I",
      reference: "Matt. 16:24",
      gabc: "(c4) QUI(d) vult(f) ve(fe)ní(gh)re(ixih) post(fg) me,(fvED.) *(;) áb(ixf!gwhg/hih)ne(g)get(f) se(fe)met(d)í(fg'h)psum :(e.) (:) et(h) tol(ghg)lat(ef) cru(ghgh)cem(f_d) su(gef)am,(f.) (;) et(eg/hjh) se(fg)quá(ef)tur(d!ew!fv_E~C~) me.(d.) (::)",
      source: "Graduale Romanum (GregoBase #89)"
    },
  },
  "common-martyr-3": {
    gradual: {
      title: "Justus cum ceciderit",
      latin: "Justus cum cecíderit, non collidétur : quia Dóminus suppónit manum suam. ℣. Tota die miserétur, et cómmodat : et semen ejus in benedictióne erit.",
      translation: "When the just man falls, he shall not be bruised: for the Lord puts his hand under him. ℣. He shows mercy, and lends, all the day long: and his seed shall be in blessing.",
      mode: "Gradual · Common of a Martyr · Mode V",
      reference: "Ps. 36:24, 26",
      gabc: "(c3) JU(dd/efE'Cd_[oh:h]e_[oh:h]d_[oh:h])stus(d.) *() cum(d) ce(d)cí(de)de(d)rit,(d.) (,) non(d) col(ef)li(f_dfvED'cd'e)dé(e)tur :(ded.) (:) qui(d)a(d) Dó(fd/ef!hh/ihi)mi(hgh)nus(f_e) (,) sup(f)pó(f/hhvFD.1gxgvFE'De)nit(e[ll:1]d..) (;) ma(dfe___/hgh)num(f) su(ded)am.(dfe___hv.hhhff//dfe/fee[ll:1]d.0) (::) ℣. To(d)ta(f) di(fh/ih/ijh)e(h) mi(h)se(h)ré(hi)tur,(h.) (,) et(h_g/i!jwk) cóm(i_[oh:h]h)mo(h)dat :(hg/i_[oh:h]h//jvIH'Ghf..) (:) et(hh) se(h)men(h) e(ih/ij_hih/ij_ij//hi/jij)jus(jh/jkihh/fgf.) (;) in(d) be(d)ne(d)di(d)cti(d)ó(dfE'D)ne(ef) *(,) e(fhG'Fhhh)rit.(hhf.) (,) (gxg_[oh:h]fgvED.fgED.fehv.hhhff//dfe/fee[ll:1]d.0) (::)",
      source: "Graduale Romanum (GregoBase #764)"
    },
    alleluia: {
      title: "Qui sequitur me",
      latin: "Allelúia. ℣. Qui séquitur me, non ámbulat in ténebris : sed habébit lumen vitae aetérnae.",
      translation: "Alleluia. ℣. He that follows me walks not in darkness: but shall have the light of life everlasting.",
      mode: "Alleluia · Common of a Martyr · Mode II",
      reference: "John 8:12",
      gabc: "(f3) AL(fgF'E)le(gh/ih)lú(gf~){ia}.(f.) *(,) ij.(gh!ivHFE.c!ef!hv.) (,) (gh!ijjvIH'GF//gvFEggf.0) (::) ℣. Qui(fgF'E) sé(gh/ih)qui(gf)tur(ef) me,(f/ggf.0) (;) non(fgf) ám(e)bu(g)lat(kxiji/jkJI'i) in(g!ij) té(hg)ne(fg)bris,(gf/hhg.) (:) sed(e) ha(fg)bé(gfivvH'GF'E)bit(fg) lu(efehvvGF'g)men(g.) *(,) vi(fgF'Eg)tae(g.) ae(gh/ih)tér(gf~)nae.(f.) (,) (gh!ivHFE.c!ef!hv.) (,) (gh!ijjvIH'GF//gvFEggf.0) (::)",
      source: "Graduale Romanum (GregoBase #1201)"
    },
    offertory: {
      title: "Posuisti Domine",
      latin: "Posuísti, Dómine, in cápite ejus corónam de lápide pretióso : vitam pétiit a te, et tribuísti ei.",
      translation: "You have set upon his head, O Lord, a crown of precious stone: he asked life of you, and you have given it him.",
      mode: "Offertory · Common of a Martyr · Mode VIII",
      reference: "Ps. 20:4-5",
      gabc: "(c4) PO(f)su(g)í(g./hjHG'gf/ghg___)sti(g.) *(,) Dó(hg/h!jjkvJH)mi(gfh)ne(h.) (;) in(h) cá(jhhf/!ghGF'/!fde'1c)(,)(cd!ff/gh/jh)pi(g)te(f) e(fg~)jus(g.) (;) co(g.h!iwj)ró(jj/ij_g//h!jijkljj)nam(ki/jhhg.) (;) de(g) lá(g)pi(g)de(gggvED'eg'!hvGFg.) (,) pre(g)ti(hj)ó(ig/h!jj/klK'Ijkjjh/ig)so :(g.) (:) vi(g)tam(gh~) pé(hvGFgvFEf.0/!ghffdg)ti(fg)it(g.) (,) a(h) te,(gjI'Ghh//fh!jvGF'fd/ef!ghg.) (:) tri(g)bu(g)í(gjji/jh)sti(h) e(gh)i,(h.) (;) al(h!iwji~)le(jkJH'//gi.hjIH'//g!jj/h_[oh:h]i_[oh:h]g_[oh:h])lú(ghg___){ia}.(g.) (::)",
      source: "Graduale Romanum (GregoBase #487)"
    },
    communion: {
      title: "Qui mihi ministrat",
      latin: "Qui mihi mínistrat, me sequátur : et ubi sum ego, illic et miníster meus erit.",
      translation: "He that ministers to me, let him follow me: and where I am, there also shall my minister be.",
      mode: "Communion · Common of a Martyr · Mode V",
      reference: "John 12:26",
      gabc: "(c3) QUI(d) mi(gxf!gwh)hi(h) mi(gxhf)ní(ghg)strat,(f.) *(,) me(hi) se(h)quá(hfh)tur :(fhffd.) (:) et(d) u(d)bi(fh) e(h_f/hi/kjk)go(i_[oh:h]h) sum,(hg/hf..) (;) il(f)lic(h_[oh:h]i_[oh:h]h_[oh:h]ghFE'edev'1fhffe.) (;) et(hv.ghf'hvE'D) mi(d)ní(b_[oh:h]c_[oh:h]a_[oh:h])ster(ba~) me(dfe___)us(e!fwg'!hvF'Ef) e(d_[oh:h]e_[oh:h]d_[oh:h])rit.(d.) (::)",
      source: "Graduale Romanum (GregoBase #685)"
    },
  },
  "common-martyr-bishop": {
    gradual: {
      title: "Gloria et honore",
      latin: "Glória et honóre coronásti eum. ℣. Et constituísti eum super ópera mánuum tuárum, Dómine.",
      translation: "You have crowned him with glory and honor. ℣. And set him over the works of your hands, O Lord.",
      mode: "Gradual · Common of a Martyr Bishop · Mode V",
      reference: "Ps. 8:6-7",
      gabc: "(c4) GLó(ixfh!ivHG')ri(hggfg)a(fv.eg'!hv//fg!hvF'EDef!gvgf.0) (;) * et(f) ho(ixfg/ih)nó(ii//iiivGF'gi'!jvIH'i)re(ixiv.hi'j/hig./hihig.) (;) co(f)ro(f)ná(ixhf/giif)sti(f.) (,) e(ffgffc/d_fixeg/hig)um.(g'/hi'GF//hghiyfh/ji/j_h) (,) (ixiv.hig.//ihivG'Fg.) (,) (fgf//f'ff'hg/hggf.0) (z0::c3) ℣. Et(hh) con(h)sti(h)tu(h)í(gxhihh'hf//gvFEfvEDf.0/[-0.5]hhvF'Ef)sti(f.) (,) e(h/i_[oh:h]h/i!jwkk)um(klh.1___) (:) su(i)per(h) ó(h/jk'IG'hvF'E//f!gwhhi)pe(h)ra(h.) (;) má(hh)nu(h)um(h) tu(h)á(hih)rum,(h_f) *(,) Dó(fh!ij)mi(hg)ne.(hhhf//hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #1206)"
    },
    alleluia: {
      title: "Hic est sacerdos",
      latin: "Allelúia. ℣. Hic est sacérdos, quem coronávit Dóminus.",
      translation: "Alleluia. ℣. This is the priest, whom the Lord has crowned.",
      mode: "Alleluia · Common of a Martyr Bishop · Mode II",
      reference: "",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Hic(f_e/f!gwh'!iv//jiihi) est(iv.hh/fgf.) (,) sa(f)cér(f!hh/ijHF'ivH'GEf./hfhhf/ge)dos,(e.) (;) quem(hh) co(h)ro(h)ná(h)vit(hi) * Dó(i_[oh:h]h/jij)mi(j)nus.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #1118)"
    },
    offertory: {
      title: "Inveni David",
      latin: "Invéni David servum meum, óleo sancto meo unxi eum : manus enim mea auxiliábitur ei, et bráchium meum confortábit eum.",
      translation: "I have found David my servant: with my holy oil I have anointed him: for my hand shall help him, and my arm shall strengthen him.",
      mode: "Offertory · Common of a Martyr Bishop · Mode VIII",
      reference: "Ps. 88:21-22",
      gabc: "(c3) IN(c)vé(ef'g)ni(f) *() Da(f)vid(fhffe.) (,) ser(f)vum(fiH'Gh) me(f_[oh:h]g_[oh:h]f_[oh:h])um,(f.) (:) ó(hhi)le(h)o(h) san(h)cto(hiH'GhvG'FEfe..) (,) un(hhf~)xi(hh) e(giH'G)um :(g.) (:) ma(hhi)nus(h) e(hi/ji)nim(ihh) me(f!hhhfivH'Gh)a(h.) (,) au(h)xi(h)li(h)á(hhi)bi(f)tur(e_[oh:h][ll:1]d) e(fhF'EfvED'e)i,(e[ll:1]d..) (:) et(ef~) brá(e)chi(e.f!gwhg)um(h) me(hg)um(hig'hvF'Ef.) (,) con(e)for(f)tá(f!hhhfivH'Gh)bit(g_[oh:h]f) e(efe___)um.(e.) (::)",
      source: "Graduale Romanum (GregoBase #779)"
    },
    communion: {
      title: "Posuisti Domine",
      latin: "Posuísti, Dómine, in cápite ejus corónam de lápide pretióso.",
      translation: "You have set, O Lord, upon his head a crown of precious stone.",
      mode: "Communion · Common of a Martyr Bishop · Mode VI",
      reference: "Ps. 20:4",
      gabc: "(c4) PO(c)su(d)í(ff)sti(fe/ghf') Dó(f)mi(f_[oh:h]g_[oh:h]f_[oh:h])ne(f.) *(;) in(f) cá(ixf!gwh'!iv)pi(h)te(h') e(j)jus(hhg) co(h!iwj)ró(h_ghvGF'g)nam(gf..) (;) de(fv.egf) lá(fg)pi(deDC'd)de(d_c) pre(f)ti(gfhvGF)ó(f_[oh:h]g_[oh:h]f_[oh:h])so.(f.) (::)",
      source: "Graduale Romanum (GregoBase #586)"
    },
  },
  "common-pope": {
    gradual: {
      title: "Exaltent eum in ecclesia",
      latin: "Exáltent eum in ecclésia plebis : et in cáthedra seniórum laudent eum. ℣. Confiteántur Dómino misericórdiae ejus, et mirabília ejus fíliis hóminum.",
      translation: "Let them exalt him in the church of the people: and praise him in the chair of the elders. ℣. Let them give thanks to the Lord for his mercy, and his wonderful works to the children of men.",
      mode: "Gradual · Common of a Pope · Mode V",
      reference: "Ps. 106:32, 31",
      gabc: "(c3) EX(b)ál(dd)tent(ef~) e(f_devDC[ull:0]B.e_[oh:h]c/de)um(d.) *(;) in(d) ec(d)clé(fd/ef!hh/ihi)si(hgh)a(f_e) (,) ple(f!hhvFD.1fvEDe[ll:1]d)bis :(d.) (:) et(d) in(fe~) cá(eh)the(h)dra(hfhED.) (`) (fd/ef!hh/ig/hf/hi/kkkh..) (,) se(f)ni(fi)ó(iv.hhhjvIH'hvGF'g)rum(gf..) (;) lau(hh)dent(h) e(ihhf)um.(hhhf/hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::) ℣. Con(d)fi(d)te(f)án(hf/hhf/hhf/hhh)(,)(f!hhf/hhf/hhh//ihhf/hhf/hhh)tur(h.) (,) Dó(h)mi(h)no(ih//h'hh_f//hhf/hhe//gxfgED./[-0.5]hhjvIH.) (:) mi(d)se(d)ri(fe)cór(eh)di(h)ae(ih) (,) (hhh'/ih/!hg./[-0.5]i/jiih.0/[-0.5]j/kjjh.0/[-0.5]i/jiig./h/ihh//fh//ghFE'e[ll:1]d.0) (;) e(fdfED//f_d/ef!gwh'!iv)jus :(hg/ijIH.ghGF.) (:) et(f) mi(hfh)ra(h)bí(i)li(hi)a(hh) (,) e(hh//hhjvIG'hvF'Ef!hhivHG)jus(h.) (;) fí(hh)li(hih)is(h_f) () * hó(fh!ij)mi(hg)num.(hhhf/hhhf/hhf.) (,) (de/f!hh/ijghf.0gxegFD.1) (::)",
      source: "Graduale Romanum (GregoBase #1119)"
    },
    alleluia: {
      title: "Tu es Petrus",
      latin: "Allelúia. ℣. Tu es Petrus, et super hanc petram aedificábo Ecclésiam meam.",
      translation: "Alleluia. ℣. You are Peter, and upon this rock I will build my Church.",
      mode: "Alleluia · Common of a Pope · Mode II",
      reference: "Matt. 16:18",
      gabc: "(f3) AL(e)le(f)lú(hi~){ia}.(i_[oh:h]h/iggf.0) *(,) ij.(hv.iji./[-0.5]ef/h_f//hv.ghe/hhh.f!gwhf.1) (::) ℣. Tu(hi) es(i) Pe(jiihi)trus,(iv.hh/fgf.) (;) et(f) su(fg)per(f) hanc(f) pe(f!hh/ijHF'ivH'GEf./hfhhf/ge)tram(e.) (:) ae(f)di(e)fi(f)cá(ffe/ffe/fc..)(,)(ef!hvvF'Ehhh)bo(ivH'Ghf..) (;) Ec(f)clé(hh)si(h)am(hi~) *() me(i_[oh:h]h/jij)am.(jvvIH'GE//f!gwhf.1) (::)",
      source: "Graduale Romanum (GregoBase #228)"
    },
    offertory: {
      title: "Ecce dedi verba mea",
      latin: "Ecce, dedi verba mea in ore tuo : ecce, constítui te super gentes et super regna, ut evéllas et déstruas, et aedífices et plantes.",
      translation: "Behold, I have put my words in your mouth: behold, I have set you over the nations and over kingdoms, to root up and to pull down, and to build and to plant.",
      mode: "Offertory · Common of a Pope · Mode III",
      reference: "Jer. 1:9-10",
      gabc: "(c4) EC(gh/jij)ce(i.) *() de(ikj)di(i./jjj) ver(h)ba(ghg) me(h)a(hi/jhhg.) (,) in(gh/jij) o(j_h/k_[hl:1]j)re(j) tu(ikJ'I)o :(i.) (:) ec(g)ce(hihi') con(g)stí(h!iwj)tu(jjjvIH)i(gh) te(ghggf.0) (,) su(gh/jij)per(j) gen(jjjvIHivH~G~)tes,(hg..) (,) et(g) su(hi)per(i.h!iw!jvIH) re(f_[oh:h]g_[oh:h]f_[oh:h])gna,(f.) (:) ut(e[ll:1]d) e(g)vél(gh/ihi)las(g_[uh:l]h) et(f) dé(efghgh)stru(fd)as,(d_f) (,) et(c) ae(df)dí(f_eg//hhj)fi(g)ces(g_[uh:l]h) et(e) plan(egF~'E~)tes.(e.) (::)",
      source: "Graduale Romanum (GregoBase #358)"
    },
    communion: {
      title: "Tu es Petrus",
      latin: "Tu es Petrus, et super hanc petram aedificábo Ecclésiam meam.",
      translation: "You are Peter, and upon this rock I will build my Church.",
      mode: "Communion · Common of a Pope · Mode VI",
      reference: "Matt. 16:18",
      gabc: "(c4) TU(f) es(df) Pe(fgff)trus,(cdc.) *(;) et(d) su(ffg)per(f) hanc(f) pe(f_[oh:h]g_[oh:h]f_[oh:h])tram(f.) (;) ae(f)di(fg'h)fi(h_g)cá(g)bo(fgFD.1) (,) Ec(d)clé(ffg)si(f)am(fg/hg/h_g) me(fg!hvGF'g)am.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #666)"
    },
  },
  "common-confessor-bishop-paschal": {
    alleluia: {
      title: "Tu es sacerdos",
      latin: "Allelúia. ℣. Tu es sacérdos in aetérnum, secúndum órdinem Melchísedech.",
      translation: "Alleluia. ℣. You are a priest for ever, according to the order of Melchisedech.",
      mode: "Alleluia · Common of a Bishop Confessor (Paschal Time) · Mode VIII",
      reference: "Ps. 109:4",
      gabc: "(c4) AL(d)le(d!gfg//hjh)lú(fg~){ia}.(g.) *(;) ij.(h!jhj./klJ//G.hjI'HG.) (,) (h!jhj./klJ//G.hjI'HG.) (;) (h!jij//ikJH'hg//ig/hhg.) (::) ℣. Tu(fg) es(g) sa(h)cér(ijhhg~)dos(g.) in(ih) ae(j_[hl:1]k_[hl:1]j_[hl:1])tér(jjjvIG'h)num,(h.) (;) se(hi!j'k)cún(kj~)dum(kjikJH'hg.) ór(ih/ij)di(hg)nem(gh/jkj//ikJH'hg.) (;) * Mel(d)chí(d!gfg//hjh)se(fg)dech.(g.) (;) (h!jhj./klJ//G.hjI'HG.) (,) (h!jhj./klJ//G.hjI'HG.) (;) (h!jij//ikJH'hg//ig/hhg.) (::)",
      source: "Graduale Romanum (GregoBase #477)"
    },
  },
  "common-confessor-doctor-paschal": {
    alleluia: {
      title: "Amavit eum Dominus",
      latin: "Allelúia. ℣. Amávit eum Dóminus, et ornávit eum : stolam glóriae índuit eum.",
      translation: "Alleluia. ℣. The Lord loved him, and adorned him: he clothed him with a robe of glory.",
      mode: "Alleluia · Common of a Doctor (Paschal Time) · Mode IV",
      reference: "Ecclus. 45:9",
      gabc: "(c4) AL(c)le(d!fde./fge/fddc)lú(de~){ia}.(e.) *(;) ij.(cd/fde./fge/fd/!dc/ege.) (,) (cd/fde./fge/fd/!dc/ege.) (,) (ghGF'Dee) (,) (fgF'Ededdc//fff/ghGFgvFE.) (::) ℣. A(c)má(dfd/ef)vit(f.) e(ffe)um(e[ll:1]d~) Dó(deD'C)mi(de)nus,(e.) (;) et(c) or(eg~)ná(ggf/gefvED)vit(ce) e(effe)um :(e.) (:) sto(c)lam(e) gló(ixgh!ivHG//fhGE.)(,)(ixce/ghivHG//fhGE.)(,)(gvFED'evD'C)ri(de)ae(e.) (;) ín(c)du(dfd/ef)it(e.) *() e(cd/fde./fge/fd/!dc/ege.)(,)(cd/fde./fge/fd/!dc/ege.)(,)(ghGF'Dee)(,)(fgF'Ededdc//fff/ghGFgvFE)um.(e.) (::)",
      source: "Graduale Romanum (GregoBase #14)"
    },
  },
  "common-martyr-paschal": {
    alleluia: {
      title: "Confitebuntur caeli",
      latin: "Allelúia. ℣. Confitebúntur caéli mirabília tua, Dómine : et veritátem tuam in ecclésia sanctórum.",
      translation: "Alleluia. ℣. The heavens shall confess your wonders, O Lord: and your truth in the church of the saints.",
      mode: "Alleluia · Common of a Martyr (Paschal Time) · Mode III",
      reference: "Ps. 88:6",
      gabc: "(c4) COn(fd~)fi(dfe)te(fg)bún(gffvEDef)tur(f.) *(,) cae(fhG'FhvGFgvFE)li(e.) (;) mi(g)ra(hih)bí(iji)li(hi)a(hg) tu(gh/ihi)a(h_g) (,) Dó(gh/ih/i_[oh:h]h)mi(ghg___)ne,(g.) (:) et(ge~) ve(g)ri(hih)tá(jj/ikijvI'HG'h)tem(g.) (,) tu(gv.egffdgvFE'fd.0/egF'EfvEDe)am(d/efef.) (;) in(d) ec(e)clé(gh)si(g_[oh:h]f)a(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (,) san(g)ctó(gh/ih)rum.(hv.ghGEf_g//fgFDf_h//ghGEf_g//fgFE.) (::)",
      source: "Graduale Romanum (GregoBase #156)"
    },
    offertory: {
      title: "Confitebuntur caeli",
      latin: "Confitebúntur caéli mirabília tua, Dómine : et veritátem tuam in ecclésia sanctórum, allelúja, allelúja.",
      translation: "The heavens shall confess your wonders, O Lord: and your truth in the church of the saints, alleluia, alleluia.",
      mode: "Offertory · Common of a Martyr (Paschal Time) · Mode III",
      reference: "Ps. 88:6",
      gabc: "(c4) COn(fd~)fi(dfe)te(fg)bún(gffvEDef)tur(f.) *(,) cae(fhG'FhvGFgvFE)li(e.) (;) mi(g)ra(hih)bí(iji)li(hi)a(hg) tu(gh/ihi)a(h_g) (,) Dó(gh/ih/i_[oh:h]h)mi(ghg___)ne,(g.) (:) et(ge~) ve(g)ri(hih)tá(jj/ikijvI'HG'h)tem(g.) (,) tu(gv.egffdgvFE'fd.0/egF'EfvEDe)am(d/efef.) (;) in(d) ec(e)clé(gh)si(g_[oh:h]f)a(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (,) san(g)ctó(gh/ih)rum.(hv.ghGEf_g//fgFDf_h//ghGEf_g//fgFE.) (::)",
      source: "Graduale Romanum (GregoBase #156)"
    },
    communion: {
      title: "Laetabitur justus",
      latin: "Laetábitur justus in Dómino, et sperábit in eo : et laudabúntur omnes recti corde, allelúja, allelúja.",
      translation: "The just shall rejoice in the Lord, and shall hope in him: and all the upright of heart shall be praised, alleluia, alleluia.",
      mode: "Communion · Common of a Martyr (Paschal Time) · Mode V",
      reference: "Ps. 63:11",
      gabc: "(c4) LAe(f)tá(ggh)bi(g)tur(fe~) ju(f_[oh:h]g_[oh:h]f_[oh:h])stus(f.) *(,) in(fh~) Dó(h_g!jjh/jg/h_g)mi(fg!hvGF'g)no,(gf..) (;) et(fh) spe(j)rá(jlK'J)bit(jkjj/hih.) in(j) e(ixh_[oh:h]i_[oh:h]g_[oh:h])o :(gf..) (:) et(fg) lau(fg)da(f)bún(fdev_[oh:h]D~C~)tur(dc__) (,) o(fh)mnes(g!jjk) re(j)cti(ixj.h!iw!jvIG'hw!ivHG) cor(fg!hvGF'g)de,(gf..) (:) al(fh)le(j)lú(jk){ia},(jk!mv[oll:0{1]/LJ'lv[oll:}]/KJ.) (,) al(fh)le(ixgjvjh!iw!jvIG'hw!ivHG)lú(fg!hvGF'g){ia}.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #617)"
    },
  },
  "common-martyr-2-paschal": {
    alleluia: {
      title: "Confitebuntur caeli",
      latin: "Allelúia. ℣. Confitebúntur caéli mirabília tua, Dómine : et veritátem tuam in ecclésia sanctórum.",
      translation: "Alleluia. ℣. The heavens shall confess your wonders, O Lord: and your truth in the church of the saints.",
      mode: "Alleluia · Common of a Martyr (Paschal Time) · Mode III",
      reference: "Ps. 88:6",
      gabc: "(c4) COn(fd~)fi(dfe)te(fg)bún(gffvEDef)tur(f.) *(,) cae(fhG'FhvGFgvFE)li(e.) (;) mi(g)ra(hih)bí(iji)li(hi)a(hg) tu(gh/ihi)a(h_g) (,) Dó(gh/ih/i_[oh:h]h)mi(ghg___)ne,(g.) (:) et(ge~) ve(g)ri(hih)tá(jj/ikijvI'HG'h)tem(g.) (,) tu(gv.egffdgvFE'fd.0/egF'EfvEDe)am(d/efef.) (;) in(d) ec(e)clé(gh)si(g_[oh:h]f)a(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (,) san(g)ctó(gh/ih)rum.(hv.ghGEf_g//fgFDf_h//ghGEf_g//fgFE.) (::)",
      source: "Graduale Romanum (GregoBase #156)"
    },
    offertory: {
      title: "Confitebuntur caeli",
      latin: "Confitebúntur caéli mirabília tua, Dómine : et veritátem tuam in ecclésia sanctórum, allelúja, allelúja.",
      translation: "The heavens shall confess your wonders, O Lord: and your truth in the church of the saints, alleluia, alleluia.",
      mode: "Offertory · Common of a Martyr (Paschal Time) · Mode III",
      reference: "Ps. 88:6",
      gabc: "(c4) COn(fd~)fi(dfe)te(fg)bún(gffvEDef)tur(f.) *(,) cae(fhG'FhvGFgvFE)li(e.) (;) mi(g)ra(hih)bí(iji)li(hi)a(hg) tu(gh/ihi)a(h_g) (,) Dó(gh/ih/i_[oh:h]h)mi(ghg___)ne,(g.) (:) et(ge~) ve(g)ri(hih)tá(jj/ikijvI'HG'h)tem(g.) (,) tu(gv.egffdgvFE'fd.0/egF'EfvEDe)am(d/efef.) (;) in(d) ec(e)clé(gh)si(g_[oh:h]f)a(fff/d_[oh:h]e_[oh:h]d._[oh:h]) (,) san(g)ctó(gh/ih)rum.(hv.ghGEf_g//fgFDf_h//ghGEf_g//fgFE.) (::)",
      source: "Graduale Romanum (GregoBase #156)"
    },
    communion: {
      title: "Laetabitur justus",
      latin: "Laetábitur justus in Dómino, et sperábit in eo : et laudabúntur omnes recti corde, allelúja, allelúja.",
      translation: "The just shall rejoice in the Lord, and shall hope in him: and all the upright of heart shall be praised, alleluia, alleluia.",
      mode: "Communion · Common of a Martyr (Paschal Time) · Mode V",
      reference: "Ps. 63:11",
      gabc: "(c4) LAe(f)tá(ggh)bi(g)tur(fe~) ju(f_[oh:h]g_[oh:h]f_[oh:h])stus(f.) *(,) in(fh~) Dó(h_g!jjh/jg/h_g)mi(fg!hvGF'g)no,(gf..) (;) et(fh) spe(j)rá(jlK'J)bit(jkjj/hih.) in(j) e(ixh_[oh:h]i_[oh:h]g_[oh:h])o :(gf..) (:) et(fg) lau(fg)da(f)bún(fdev_[oh:h]D~C~)tur(dc__) (,) o(fh)mnes(g!jjk) re(j)cti(ixj.h!iw!jvIG'hw!ivHG) cor(fg!hvGF'g)de,(gf..) (:) al(fh)le(j)lú(jk){ia},(jk!mv[oll:0{1]/LJ'lv[oll:}]/KJ.) (,) al(fh)le(ixgjvjh!iw!jvIG'hw!ivHG)lú(fg!hvGF'g){ia}.(gf..) (::)",
      source: "Graduale Romanum (GregoBase #617)"
    },
  },
  "common-several-martyrs-paschal": {
    alleluia: {
      title: "Sancti tui florebunt",
      latin: "Allelúia. ℣. Sancti tui, Dómine, florébunt sicut lílium : et sicut odor bálsami erunt ante te.",
      translation: "Alleluia. ℣. Your saints, O Lord, shall flourish like the lily: and shall be as the odor of balsam before you.",
      mode: "Alleluia · Common of Several Martyrs (Paschal Time) · Mode VIII",
      reference: "Cf. Osee 14:6-7",
      gabc: "(c4) AL(fg~)le(g)lú(hghvGFhh){ia}.(g.) *(;) ij.(gj/ki/jh/ijHG.) (,) (gj/ki/jh/ijHG.) (,) (gji'___/jkkvJH'Gh_ihhg.) (::) ℣. San(fg~)cti(g) tu(hghvGF)i,(hhg) Dó(h!iwjjvIH'G)mi(fg)ne,(g.) (;) flo(g)ré(i_0[uh:l]jk)bunt(jji) sic(hg)ut(hih') lí(g)li(fg)um :(g.) (:) et(g) sic(ih)ut(jk) o(kvvJH'Gh/ii//kvvJH'G)dor(hih') bál(g)sa(fg)mi(g.) (:) e(ghghvGFhh)runt(g.) *(,) an(fg~)te(ghghvGFhh) te.(g.) (;) (gj/ki/jh/ijHG.) (,) (gj/ki/jh/ijHG.) (,) (gji'___/jkkvJH'Gh_ihhg.) (::)",
      source: "Graduale Romanum (GregoBase #800)"
    },
    offertory: {
      title: "Laetamini in Domino",
      latin: "Laetámini in Dómino et exsultáte, justi : et gloriámini, omnes recti corde, allelúja, allelúja.",
      translation: "Rejoice in the Lord and exult, you just: and glory, all you upright of heart, alleluia, alleluia.",
      mode: "Offertory · Common of Several Martyrs (Paschal Time) · Mode I",
      reference: "Ps. 31:11",
      gabc: "(c4) LAe(d)tá(d!ewf!gvFD)mi(d!ewf_c)ni(c.) *(,) in(fg) Dó(gj!kvJH')mi(h)no,(h/jjj/h_[oh:h]i_[oh:h]h._[oh:h]) (;) et(fh!jvHG) ex(g_[oh:h]f)sul(fg)tá(gjIH'hg)te(g_[oh:h]f/gff/ded.) (,) ju(dff'1f/[1]{ix}f/hig'hvF'D)sti :(dfddc.) (:) et(dff'1ff/gfg) glo(d!fdf)ri(cd)á(df)mi(fhg)ni(g.) (;) o(f/hjg')mnes(f/hjG'FED'ewf.) (,) re(d!ewf/g_[oh:h]f)cti(fff/h_g/h_f) cor(fg//ffg/ffgvFE)de,(d.) (:) al(f)le(d!ewf/g_[oh:h]f)lú(fff/h_g/h_f){ia},(f.) (;) al(fg)le(f)lú(ffg/ffgvFE){ia}.(d//fff_d/fff/d_[oh:h]e_[oh:h]d._[oh:h]) (::)",
      source: "Graduale Romanum (GregoBase #870)"
    },
  },
};

