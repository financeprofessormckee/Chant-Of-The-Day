"use strict";

/*
 * data/common-introits.js — the Introit of each Common-of-Saints Mass
 * formulary (Graduale Romanum, modern calendar only). Unlike
 * data/introits.js, these keys are never resolved by date — RESOLVE_DAY
 * never emits a "common-*" dayKey. They're browsed directly from a picker
 * (app.js's Commons mode), driven by window.COMMON_CATEGORIES below. See
 * sources/gregobase/build-common-of-saints.py and
 * common-of-saints-worklist.md for provenance.
 */

window.COMMON_CATEGORIES = [
  { key: "common-apostles", label: "Common of Apostles (Mihi autem)", group: "Apostles" },
  { key: "common-martyr", label: "Common of a Martyr (In virtute tua)", group: "Martyrs" },
  { key: "common-confessor-bishop", label: "Common of a Bishop (Statuit ei Dominus)", group: "Confessors & Doctors" },
  { key: "common-confessor-doctor", label: "Common of a Doctor / Confessor (In medio Ecclesiae)", group: "Confessors & Doctors" },
  { key: "common-virgin", label: "Common of a Virgin (Specie tua)", group: "Virgins & Holy Women" },
];


window.COMMON_INTROITS = {
  "common-apostles": {
    title: "Mihi autem nimis",
    latin: "Mihi autem nimis honoráti sunt amíci tui, Deus : nimis confortátus est principátus eórum.",
    translation: "But to me your friends, O God, are made exceedingly honorable: their principality is exceedingly strengthened.",
    mode: "Introit · Common of Apostles · Mode II",
    gabc: "(f3) MI(e)HI(f) au(f)tem(hh) * ni(ihi)mis(ihi_[oh:h]f) (,) ho(fi)no(i)rá(ij)ti(ih) sunt(hv.gih.) (,) a(f)mí(ege)ci(f) tu(f)i,(hhi) De(fgF'E)us :(e.) (:) ni(h)mis(hhh) con(f)for(fi~)tá(i)tus(h) est(hji.) (,) prin(hihh)ci(ef)pá(hhi)tus(h) e(h)ó(hjI'H)rum.(hhh/f_[oh:h]g_[oh:h]f._[oh:h]) (::)",
    source: "Graduale Romanum (GregoBase #475)"
  },
  "common-martyr": {
    title: "In virtute tua",
    latin: "In virtúte tua, Dómine, laetábitur justus : et super salutáre tuum exsultábit veheménter : desidérium ánimae ejus tribuísti ei.",
    translation: "In your strength, O Lord, the just man shall joy: and in your salvation he shall rejoice exceedingly: you have given him his heart's desire.",
    mode: "Introit · Common of a Martyr · Mode VII",
    gabc: "(c3) IN(e) vir(ef~)tú(f)te(f) tu(fdfe)a(e.) (,) * Dó(fh)mi(hhh)ne,(h.) (;) lae(hg)tá(hji)bi(ihhg)tur(h.f!gwh) ju(efe___)stus,(e.) (:) et(e) su(ef/hgh)per(h) sa(h)lu(h)tá(h)re(fh) tu(hg/hif)um(fe..) (;) ex(ef/hg)sul(h)tá(gh'i)bit(i) ve(ijh)he(f!gwh)mén(hi~)ter :(h.) (:) de(hg)si(h)dé(hji)ri(h)um(h') á(h)ni(hhh)mae(e) e(ghffd~)jus(d.) (;) tri(ef)bu(e)í(e.f!gwh/ihi)sti(ihh) e(efe___)i.(e.) (::)",
    source: "Graduale Romanum (GregoBase #316)"
  },
  "common-confessor-bishop": {
    title: "Statuit ei Dominus",
    latin: "Státuit ei Dóminus testaméntum pacis, et príncipem fecit eum : ut sit illi sacerdótii dígnitas in aetérnum.",
    translation: "The Lord made a covenant of peace with him, and made him a prince: that the dignity of priesthood should be to him for ever.",
    mode: "Introit · Common of a Bishop Confessor · Mode I",
    gabc: "(c4) STá(ixdh'!iv)tu(h)it(h') *() e(h)i(h) Dó(hjjh)mi(ixihig)nus(hg..) (;) te(ixhig)sta(f)mén(fg)tum(ghF'Ef) pa(d_[oh:h]e_[oh:h]d_[oh:h])cis,(d.) (:) et(d) prín(df!gh~)ci(g)pem(g) fe(ixhig)cit(f') e(fg'h)um :(h.) (;) ut(h) sit(jj) il(jk)li(h.) (,) sa(jj)cer(j)dó(j)ti(j')i(kvJ'Ij') dí(h)gni(h_[oh:h]i_[oh:h]h_[oh:h])tas(h.) (;) in(de!fg//ef'h) ae(hghfgvFE)tér(d!ewfef)num.(e[ll:1]d..) (::)",
    source: "Graduale Romanum (GregoBase #456)"
  },
  "common-confessor-doctor": {
    title: "In medio Ecclesiae",
    latin: "In médio Ecclésiae apéruit os ejus : et implévit eum Dóminus spíritu sapiéntiae, et intelléctus : stolam glóriae índuit eum.",
    translation: "In the midst of the Church he opened his mouth: and the Lord filled him with the spirit of wisdom and understanding: he clothed him with a robe of glory.",
    mode: "Introit · Common of a Doctor · Mode VI",
    gabc: "(c4) IN(df~) mé(fff)di(f)o(f) *() Ec(f)clé(gfg)si(f)ae(fff) (,) a(cd)pé(fff)ru(f)it(f) os(g_[oh:h]f) e(f_[oh:h]g_[oh:h]f_[oh:h])jus :(f.) (:) et(f) im(f)plé(ixf!gwh'!iv)vit(h) e(hjjh)um(h.) Dó(gh)mi(gf)nus(f.) (,) spí(fh)ri(g)tu(f) sa(fgf)pi(ef'g)én(gh~)ti(f)ae,(fgf.) (,) et(f) in(ef'g)tel(hghf)lé(f)ctus :(fffc..) (:) sto(fdf)lam(f) gló(ghf)ri(f_d)ae(d_c) (,) ín(ff)du(f)it(ff) e(f_[oh:h]g_[oh:h]f_[oh:h])um.(f.) (::)",
    source: "Graduale Romanum (GregoBase #233)"
  },
  "common-virgin": {
    title: "Me exspectaverunt",
    latin: "Me exspectavérunt peccatóres ut pérderent me : testimónia tua, Dómine, intelléxi : omnis consummatiónis vidi finem : latum mandátum tuum nimis.",
    translation: "The wicked have waited for me to destroy me: but I have understood your testimonies, O Lord: I have seen an end of all perfection: your commandment is exceedingly broad.",
    mode: "Introit · Common of a Virgin · Mode II",
    gabc: "(f3) ME(hf/hhh) ex(h)spe(h)cta(h)vé(hih)runt(hhh) *() pec(hih)ca(f)tó(f/hhf)res,(f.) (,) ut(fef) pér(h.f!gw!hi)de(h)rent(hiH'Gh) me :(f.) (:) te(f)sti(h)mó(hi)ni(i)a(i) tu(i)a,(i) Dó(ij)mi(ih)ne,(h.) (,) in(h)tel(h)lé(gh!ijIG'h)xi :(h.) (;) o(fi)mnis(i) con(i)sum(ih~)ma(h!jij)ti(h)ó(f!hgh)nis(f.) (,) vi(fhg)di(hi) fi(fgF'E)nem :(e.) (:) la(h)tum(gihh) man(ef)dá(hhi)tum(h) tu(h_f)um(i) ni(hiH'F)mis.(f.) (::)",
    source: "Graduale Romanum (GregoBase #938)"
  },
};

