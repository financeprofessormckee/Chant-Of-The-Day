/*
 * orations-1962.js — the spoken propers (Collect, Secret, Postcommunion) of the
 * 1962 (Extraordinary Form) Mass. Phase 7 pilot batch: the four Advent Sundays.
 * Second batch (Christmastide + Epiphanytide, 11 keys) continues the same
 * method. Third batch (Septuagesima, Sexagesima, Quinquagesima — the 3-Sunday
 * pre-Lent season) sourced entirely from files already cached locally, no live
 * fetches needed; two of its Secrets are exact-Latin-text reuses of Secrets
 * already authored above ("circumcision" for Septuagesima's `@Commune/C2a`,
 * "epiph-3" for Quinquagesima's `@Tempora/Epi3-0:Secreta`) — same
 * cross-file-reuse policy Phase 4 used for citations. Fourth batch (Lent &
 * Passiontide, 8 keys: misereris/Ash Wed, lent-1..3, laetare, passion, palm,
 * nos-autem/Holy Thu) sourced mostly from files already cached locally
 * (`Quadp3-3.txt`, `Quad1-0.txt`..`Quad6-0.txt`); two live fetches needed —
 * `Quadp3-4.txt` (Ember Friday of Lent, for lent-2/laetare's shared
 * `@Tempora/Quadp3-4:Secreta` Secret) and `Quad6-4m2.txt` (Holy Thursday's
 * Mass of the Lord's Supper — confirmed via its `[Officium]`/`[Rule]` headers
 * against the sibling `Quad6-4m1.txt`, which is the alternative Chrism Mass,
 * not this Mass). Three exact-Latin-text reuses this batch: lent-3's Secret is
 * (again) `@Tempora/Epi3-0:Secreta`, reusing "epiph-3"'s translation a third
 * time; lent-2/laetare's shared Postcommunion is word-for-word "sexagesima"'s;
 * palm's Postcommunion is word-for-word "sunday-octave-nativity"'s (only
 * punctuation differs). Two near-misses deliberately NOT treated as reuses,
 * since the policy requires exact text: lent-2/laetare's Secret
 * ("Sacrificiis praesentibus, Domine, quaesumus, intende placatus...") is the
 * same prayer as "rorate"'s Secret but with two words transposed — DO's own
 * transcription carries a minor word-order variant between the two source
 * files, so it's translated fresh rather than assumed identical; palm's Secret
 * closely parallels "sunday-octave-nativity"'s ("Concede quaesumus... ut
 * oculis tuae majestatis munus oblatum...") but differs by two words
 * (omits "omnipotens"/"piae"), a common shared-template-with-variation shape
 * in the Missal, not a literal match. Fifth batch (Eastertide, 9 keys:
 * resurrexi/Easter through spiritus-domini/Pentecost) sourced from
 * Pasc0-0.txt..Pasc7-0.txt plus Pasc5-4.txt (Ascension), all already cached
 * locally except one live fetch — Pasc0-2.txt (Tuesday of the Easter Octave),
 * resolving easter-vocem's `@Tempora/Pasc0-2:Secreta` cross-reference, now
 * cached alongside the rest. No exact-Latin-text reuses this batch (checked
 * all 27 prayers against every already-authored entry); one near-miss not
 * treated as a reuse: easter-vocem's Secret ("Suscipe, Domine, fidelium
 * preces cum oblationibus hostiarum...") opens the same way as resurrexi's
 * own Secret but diverges completely after that, so translated fresh. Sixth
 * batch (Time after Pentecost, 26 keys: trinity, cibavit/Corpus Christi,
 * sacred-heart, pent-2..pent-23, christ-king) sourced from Pent01-0.txt
 * (Trinity), Pent01-4.txt (Corpus Christi), Pent02-5.txt (Sacred Heart), and
 * Pent02-0.txt..Pent23-0.txt, all already cached locally; "pent-3" is the
 * one exception — its own file (Pent03-0.txt) carries only a commemoration
 * of the Sacred Heart octave, with its actual Collect/Secret/Postcommunion
 * held in the sibling "resource" file Pent03-0r.txt referenced at the top of
 * Pent03-0.txt (the same @-include indirection Trinity Sunday's Introit
 * alone uses elsewhere). Two live fetches, both now cached alongside the
 * rest: Quad1-6.txt (Ember Saturday of Lent), resolving pent-17's
 * `@Tempora/Quad1-6:Postcommunio` cross-reference, and Sancti-10-DU.txt
 * (Christ the King, filed under DO's "10-DU" = last Sunday of October, found
 * by grepping the live repo's file tree for its known proper hymns rather
 * than guessing a path). No `[Commemoratio ...]` blocks were authored this
 * batch even though several source files carry one (pent-2 falls within the
 * Corpus Christi octave, pent-3 within the Sacred Heart octave) — same
 * single-bundle-per-Mass omission as every prior batch. No exact-Latin-text
 * reuse hits this batch; two near-misses deliberately not treated as reuses:
 * pent-2's Postcommunion ("Sumptis muneribus sacris...") is rorate's own
 * Postcommunion plus one word ("sacris"); pent-18's Secret is easter-cantate's
 * own Secret with one verb's tense changed (effecisti/perfect vs. efficis/
 * present) — both translated fresh, landing on wording naturally close to the
 * existing entry given how close the underlying Latin is (the same outcome
 * batch 4's rorate/lent-2 near-miss pair had). christ-king's Postcommunion
 * opens identically to pent-21's own ("Immortalitatis alimoniam consecuti...")
 * but the two diverge completely after that opening clause — not a reuse.
 * That batch closed out the full temporal cycle (Advent I through the Last
 * Sunday after Pentecost, 61 keys). Seventh batch (SANCTORAL_1962, all 38
 * fixed-date entries in calendar-1962.js) closes out the sanctoral half of
 * this file's other big table: 37 new keys (dedication-lateran covers both
 * its 11-9/11-18 dates with one entry). Six of those 37 are orationsKey-only
 * entries (matthias, barnabas, james-apostle, bartholomew, luke, simon-jude)
 * for the six Apostles who share calendar-1962.js's "common-apostles" dayKey
 * for their sung propers but each have a genuinely distinct Collect/Secret/
 * Postcommunion in their own Sancti-MM-DD.txt file — same orationsKey shape
 * the circumcision entry above already established, now also threaded
 * through all seven of app.js's resolve()-internal fixedFeast(date) call
 * sites (a fixed date can land in a different seasonal branch depending on
 * the year). dedication-lateran (also reused twice) needed no such override
 * — both its dates draw their entire Collect/Secret/Postcommunion from
 * Commune/C8's base text with no per-saint customization. Two exact-text
 * reuses: peter-paul-vigil's Postcommunion is peter-paul's own (bare
 * @Sancti/06-29 cross-reference); nativity-mary's Postcommunion is
 * visitation's own (bare @Sancti/07-02 cross-reference). See ROADMAP.md's
 * Phase 7 section and sources/gregobase/orations-1962-worklist.md for the
 * full writeup and the remaining backlog (LESSER_1962 and the open
 * Commons-orations question).
 *
 * Modern-calendar-only ICEL translations are copyrighted and out of scope
 * (ROADMAP.md Phase 7 note) — this file is 1962-only, mirroring
 * data/propers-1962.js.
 *
 * Latin sourced verbatim from the Divinum Officium 1962 Missal text files
 * already cached at sources/divinumofficium/raw/ (Adv1-0.txt..Adv4-0.txt for
 * the pilot; Sancti-12-24/25m1/25m2/25m3/01-01/01-06.txt, Nat1-0.txt,
 * Nat2-0.txt, Epi1-0/2-0/3-0.txt for this batch). Advent IV's Secret is a
 * @Tempora/Adv3-6 cross-reference, live-fetched from
 * github.com/DivinumOfficium/divinum-officium since not locally cached; this
 * batch needed no live fetches. Each prayer's text is given up to its closing
 * colon/period; the standard Trinitarian closing formula the source
 * abbreviates as a "$Qui vivis" / "$Qui tecum" / "$Per Dominum" / "$Per
 * eundem" / "$Per eumdem" cross-reference is boilerplate common to nearly
 * every collect (not distinctive to this feast) and is omitted here, the same
 * way this project's chant files don't spell out shared material. Likewise, a
 * source file's secondary "[Commemoratio Oratio/Secreta/Postcommunio]" block
 * (a second saint or Sunday commemorated within the same Mass under
 * pre-1960 rubrics — first seen in this batch, e.g. lux-fulgebit's
 * commemoration of St. Anastasia, holy-family's of the Sunday within the
 * Octave of the Epiphany) is omitted entirely: pickOrations (app.js) is
 * explicitly a single bundle per Mass, no per-part variation, mirroring the
 * closing-formula omission above.
 *
 * "circumcision" is a new key distinct from "puer-natus": Circumcision (Jan 1)
 * shares Christmas Day's dayKey "puer-natus" for its sung propers (textually
 * identical @Tempora/Nat30 Introit/Gradual/Offertory/Communion), but its own
 * Collect is genuinely different (Sancti-01-01.txt), and its Secret/
 * Postcommunion cross-reference different Commons (Commune/C2a "Laetabitur",
 * Commune/C10b "Sancta Maria Sabbato...") than Christmas Day's own spelled-out
 * prayers — authoring it under "puer-natus" would have silently shown
 * Christmas Day's Collect on Jan 1. calendar-1962.js's Jan 1 branch carries a
 * new optional `orationsKey: "circumcision"` field that pickOrations (app.js)
 * checks ahead of dayKey for exactly this case; dayKey itself is untouched.
 *
 * English translations are original renderings in the same traditional-missal
 * register as the rest of this site's translations — hand-authored from the
 * Latin, not copied from any missal (mirrors the "original renderings" policy
 * already stated for the sung texts; see README / data/introits.js header).
 *
 * Keyed by the same feast keys calendar-1962.js / data/propers-1962.js use,
 * except "circumcision" (see above).
 */

window.ORATIONS_1962 = {
  "ad-te-levavi": {
    collect: {
      latin: "Excita, quǽsumus, Dómine, poténtiam tuam, et veni: ut ab imminéntibus peccatórum nostrórum perículis, te mereámur protegénte éripi, te liberánte salvári.",
      translation: "Stir up thy power, we beseech thee, O Lord, and come: that from the dangers which threaten us by reason of our sins, we may deserve to be rescued by thy protection and saved by thy deliverance."
    },
    secret: {
      latin: "Hæc sacra nos, Dómine, poténti virtúte mundátos ad suum fáciant purióres veníre princípium.",
      translation: "May these holy gifts, O Lord, cleanse us by their mighty power, and bring us more pure to him who is their source."
    },
    postcommunion: {
      latin: "Suscipiámus, Dómine, misericórdiam tuam in médio templi tui: ut reparatiónis nostræ ventúra sollémnia cóngruis honóribus præcedámus.",
      translation: "May we receive thy mercy, O Lord, in the midst of thy temple: that we may go forth to meet the coming solemn feast of our redemption with fitting honor."
    }
  },
  "populus-sion": {
    collect: {
      latin: "Excita, Dómine, corda nostra ad præparándas Unigéniti tui vias: ut, per ejus advéntum, purificátis tibi méntibus servíre mereámur.",
      translation: "Stir up our hearts, O Lord, to make ready the ways of thy Only-begotten Son: that through his coming we may be found worthy to serve thee with minds made pure."
    },
    secret: {
      latin: "Placáre, quǽsumus, Dómine, humilitátis nostræ précibus et hóstiis: et, ubi nulla suppétunt suffrágia meritórum, tuis nobis succúrre præsídiis.",
      translation: "Be appeased, we beseech thee, O Lord, by the prayers and offerings of our humility: and where the merits of our own bring no help, come to our aid by the succor of thy own."
    },
    postcommunion: {
      latin: "Repléti cibo spirituális alimóniæ, súpplices te, Dómine, deprecámur: ut, hujus participatióne mystérii, dóceas nos terréna despícere et amáre cœléstia.",
      translation: "Filled with the food of spiritual nourishment, we humbly beseech thee, O Lord: that by our sharing in this mystery, thou wouldst teach us to despise the things of earth and to love the things of heaven."
    }
  },
  "gaudete": {
    collect: {
      latin: "Aurem tuam, quǽsumus, Dómine, précibus nostris accómmoda: et mentis nostræ ténebras, grátia tuæ visitatiónis illústra.",
      translation: "Incline thine ear, we beseech thee, O Lord, to our prayers: and by the grace of thy visitation, shed light upon the darkness of our minds."
    },
    secret: {
      latin: "Devotiónis nostræ tibi, quǽsumus, Dómine, hóstia júgiter immolétur: quæ et sacri péragat institúta mystérii, et salutáre tuum in nobis mirabíliter operétur.",
      translation: "May the offering of our devotion, we beseech thee, O Lord, be ever sacrificed to thee: that it may fulfil the ordinance of the sacred mystery, and work thy saving power in us in wondrous ways."
    },
    postcommunion: {
      latin: "Implorámus, Dómine, cleméntiam tuam: ut hæc divína subsídia, a vítiis expiátos, ad festa ventúra nos prǽparent.",
      translation: "We implore thy mercy, O Lord: that these divine helps, having cleansed us from our sins, may prepare us for the feasts that are to come."
    }
  },
  "rorate": {
    collect: {
      latin: "Excita, quǽsumus, Dómine, poténtiam tuam, et veni: et magna nobis virtúte succúrre; ut per auxílium grátiæ tuæ, quod nostra peccáta præpédiunt, indulgéntia tuæ propitiatiónis accéleret.",
      translation: "Stir up thy power, we beseech thee, O Lord, and come: and succor us with great might; that through the help of thy grace, what our sins hinder may be hastened by the forgiveness of thy mercy."
    },
    secret: {
      latin: "Sacrifíciis præséntibus, quǽsumus, Dómine, placátus inténde: ut et devotióni nostræ profíciant et salúti.",
      translation: "Look with favor, we beseech thee, O Lord, upon these present sacrifices: that they may profit both our devotion and our salvation."
    },
    postcommunion: {
      latin: "Sumptis munéribus, quǽsumus, Dómine: ut, cum frequentatióne mystérii, crescat nostræ salútis efféctus.",
      translation: "Having received these gifts, we beseech thee, O Lord: that by the frequent celebration of this mystery, the effect of our salvation may increase."
    }
  },

  "christmas-vigil": {
    collect: {
      latin: "Deus, qui nos redemptiónis nostræ ánnua exspectatióne lætíficas: præsta; ut Unigénitum tuum, quem Redemptórem læti suscípimus, veniéntem quoque Júdicem secúri videámus, Dóminum nostrum Jesum Christum, Fílium tuum.",
      translation: "O God, who dost gladden us with the yearly expectation of our redemption: grant that we, who joyfully receive thine Only-begotten Son as our Redeemer, may also without fear behold him coming as our Judge, even our Lord Jesus Christ, thy Son."
    },
    secret: {
      latin: "Da nobis, quǽsumus, omnípotens Deus: ut, sicut adoránda Fílii tui natalítia prævenímus, sic ejus múnera capiámus sempitérna gaudéntes.",
      translation: "Grant us, we beseech thee, almighty God: that as we go before to keep the birthday festival of thy Son which we must adore, so we may with gladness receive his everlasting gifts."
    },
    postcommunion: {
      latin: "Da nobis, quǽsumus, Dómine: unigéniti Fílii tui recensíta nativitáte respiráre; cujus cœlésti mystério páscimur et potámur.",
      translation: "Grant us, we beseech thee, O Lord: to draw new breath at the recalling of the birth of thine only-begotten Son, by whose heavenly mystery we are fed and given drink."
    }
  },
  "dominus-dixit": {
    collect: {
      latin: "Deus, qui hanc sacratíssimam noctem veri lúminis fecísti illustratióne claréscere: da, quǽsumus; ut, cujus lucis mystéria in terra cognóvimus, ejus quoque gáudiis in cœlo perfruámur.",
      translation: "O God, who hast made this most holy night to shine with the brightness of the true Light: grant, we beseech thee, that as we have known the mysteries of that Light on earth, we may also come to the fullness of its joys in heaven."
    },
    secret: {
      latin: "Accépta tibi sit, Dómine, quǽsumus, hodiérnæ festivitátis oblátio: ut, tua gratia largiénte, per hæc sacrosáncta commércia, in illíus inveniámur forma, in quo tecum est nostra substántia.",
      translation: "May the offering of this day's festival, we beseech thee, O Lord, be acceptable to thee: that, by thy bestowing grace, through this most sacred exchange, we may be found in the likeness of him in whom our very nature is united with thee."
    },
    postcommunion: {
      latin: "Da nobis, quǽsumus, Dómine, Deus noster: ut, qui Nativitátem Dómini nostri Jesu Christi mystériis nos frequentáre gaudémus; dignis conversatiónibus ad ejus mereámur perveníre consórtium.",
      translation: "Grant us, we beseech thee, O Lord our God: that we, who rejoice to keep with these mysteries the Nativity of our Lord Jesus Christ, may by worthy lives deserve to come to his fellowship."
    }
  },
  "lux-fulgebit": {
    collect: {
      latin: "Da nobis, quǽsumus, omnípotens Deus: ut, qui nova incarnáti Verbi tui luce perfúndimur; hoc in nostro respléndeat ópere, quod per fidem fulget in mente.",
      translation: "Grant us, we beseech thee, almighty God: that we, who are bathed in the new light of thy incarnate Word, may show forth in our deeds what by faith shines in our minds."
    },
    secret: {
      latin: "Múnera nostra, quǽsumus, Dómine, Nativitátis hodiérnæ mystériis apta provéniant, et pacem nobis semper infúndant: ut, sicut homo génitus idem refúlsit et Deus, sic nobis hæc terréna substántia cónferat, quod divínum est.",
      translation: "May our gifts, we beseech thee, O Lord, come forth fitted to the mysteries of this day's Nativity, and ever pour peace into us: that, as he who was born as man shone forth as God also, so may this earthly substance confer upon us what is divine."
    },
    postcommunion: {
      latin: "Hujus nos, Dómine, sacraménti semper nóvitas natális instáuret: cujus Natívitas singuláris humánam réppulit vetustátem.",
      translation: "May the ever-renewing newness of this sacrament, O Lord, restore us, whose singular Nativity has driven away the old age of mankind."
    }
  },
  "puer-natus": {
    collect: {
      latin: "Concéde, quǽsumus, omnípotens Deus: ut nos Unigéniti tui nova per carnem Natívitas líberet; quos sub peccáti jugo vetústa sérvitus tenet.",
      translation: "Grant, we beseech thee, almighty God: that the new birth in the flesh of thine Only-begotten Son may set us free, whom the ancient bondage holds fast beneath the yoke of sin."
    },
    secret: {
      latin: "Obláta, Dómine, múnera, nova Unigéniti tui Nativitáte sanctífica: nosque a peccatórum nostrórum máculis emúnda.",
      translation: "Sanctify, O Lord, the gifts here offered, by the new Nativity of thine Only-begotten Son: and cleanse us from the stains of our sins."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut natus hódie Salvátor mundi, sicut divínæ nobis generatiónis est auctor; ita et immortalitátis sit ipse largítor.",
      translation: "Grant, we beseech thee, almighty God: that the Savior of the world, born this day, who is for us the author of divine birth, may himself also be the bestower of immortality."
    }
  },
  "sunday-octave-nativity": {
    collect: {
      latin: "Omnípotens sempitérne Deus, dírige actus nostros in beneplácito tuo: ut in nómine dilécti Fílii tui mereámur bonis opéribus abundáre.",
      translation: "Almighty and everlasting God, direct our actions according to thy good pleasure: that in the name of thy beloved Son we may deserve to abound in good works."
    },
    secret: {
      latin: "Concéde, quǽsumus, omnípotens Deus: ut óculis tuæ majestátis munus oblátum, et grátiam nobis piæ devotiónis obtineat, et efféctum beátæ perennitátis acquírat.",
      translation: "Grant, we beseech thee, almighty God: that this gift offered before the eyes of thy majesty may obtain for us the grace of devout piety, and win for us the blessing of unending life."
    },
    postcommunion: {
      latin: "Per hujus, Dómine, operatiónem mystérii, et vitia nostra purgéntur, et justa desidéria compleántur.",
      translation: "By the working of this mystery, O Lord, may both our sins be purged away and our righteous desires fulfilled."
    }
  },
  "holy-name": {
    collect: {
      latin: "Deus, qui unigénitum Fílium tuum constituísti humáni géneris Salvatórem, et Jesum vocári jussísti: concéde propítius; ut, cujus sanctum nomen venerámur in terris, ejus quoque aspéctu perfruámur in cœlis.",
      translation: "O God, who didst appoint thine only-begotten Son to be the Savior of mankind, and didst command that he be called Jesus: mercifully grant that we, who venerate his holy name on earth, may also enjoy the sight of him in heaven."
    },
    secret: {
      latin: "Benedíctio tua, clementíssime Deus, qua omnis viget creatúra, sanctíficet, quǽsumus, hoc sacrifícium nostrum, quod ad glóriam nóminis Fílii tui, Dómini nostri Jesu Christi, offérimus tibi: ut majestáti tuæ placére possit ad laudem, et nobis profícere ad salútem.",
      translation: "May thy blessing, most merciful God, by which every creature flourishes, sanctify, we beseech thee, this our sacrifice, which we offer thee to the glory of the name of thy Son, our Lord Jesus Christ: that it may be pleasing to thy majesty unto praise, and profit us unto salvation."
    },
    postcommunion: {
      latin: "Omnípotens ætérne Deus, qui creásti et redemísti nos, réspice propítius vota nostra: et sacrifícium salutáris hóstiæ, quod in honórem nóminis Fílii tui, Dómini nostri Jesu Christi, majestáti tuæ obtúlimus, plácido et benígno vultu suscípere dignéris; ut grátia tua nobis infúsa, sub glorióso nómine Jesu, ætérnæ prædestinatiónis titulo gaudeámus nómina nostra scripta esse in cœlis.",
      translation: "Almighty and eternal God, who hast created and redeemed us, look mercifully upon our prayers: and deign to receive with a calm and gracious countenance the sacrifice of this saving Victim, which we have offered to thy majesty in honor of the name of thy Son, our Lord Jesus Christ; that, thy grace being poured into us, we may rejoice, under the glorious name of Jesus, in the title of eternal predestination, that our names are written in heaven."
    }
  },
  "circumcision": {
    collect: {
      latin: "Deus, qui salútis ætérnæ, beátæ Maríæ virginitáte fecúnda, humáno generi præmia præstitísti: tríbue, quǽsumus; ut ipsam pro nobis intercédere sentiámus, per quam merúimus auctórem vitæ suscípere, Dóminum nostrum Jesum Christum, Fílium tuum.",
      translation: "O God, who through the fruitful virginity of blessed Mary didst bestow upon the human race the rewards of eternal salvation: grant, we beseech thee, that we may feel her interceding for us, through whom we were made worthy to receive the author of life, our Lord Jesus Christ, thy Son."
    },
    secret: {
      latin: "Accépta sit in conspéctu tuo, Dómine, nostra devótio: et ejus nobis fiat supplicatióne salutáris, pro cujus sollemnitáte defértur.",
      translation: "May our devotion be accepted in thy sight, O Lord: and, by the intercession of her for whose festival it is offered, become for us a source of salvation."
    },
    postcommunion: {
      latin: "Hæc nos commúnio, Dómine, purget a crímine: et, intercedénte beáta Vírgine Dei Genetríce María, cœléstis remédii fáciat esse consórtes.",
      translation: "May this communion, O Lord, cleanse us from sin: and, through the intercession of the Blessed Virgin Mary, Mother of God, make us partakers of the heavenly remedy."
    }
  },
  "ecce-advenit": {
    collect: {
      latin: "Deus, qui hodiérna die Unigénitum tuum géntibus stella duce revelásti: concéde propítius; ut, qui jam te ex fide cognóvimus, usque ad contemplándam spéciem tuæ celsitúdinis perducámur.",
      translation: "O God, who on this day didst reveal thine only-begotten Son to the Gentiles by the guidance of a star: mercifully grant that we, who already know thee by faith, may be led on even to contemplate the beauty of thy majesty."
    },
    secret: {
      latin: "Ecclésiæ tuæ, quǽsumus, Dómine, dona propítius intuere: quibus non jam aurum, thus et myrrha profertur; sed quod eisdem munéribus declarátur, immolátur et súmitur, Jesus Christus, Fílius tuus, Dóminus noster.",
      translation: "Look with favor, we beseech thee, O Lord, upon the gifts of thy Church: to whom is now offered no longer gold, frankincense, and myrrh, but he who by those very gifts is declared, is immolated, and is received — Jesus Christ thy Son, our Lord."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut, quæ sollémni celebrámus officio, purificátæ mentis intellegéntia consequámur.",
      translation: "Grant, we beseech thee, almighty God: that with minds made pure we may attain the understanding of what we celebrate with this solemn service."
    }
  },
  "holy-family": {
    collect: {
      latin: "Dómine Jesu Christe, qui, Maríæ et Joseph súbditus, domésticam vitam ineffabílibus virtútibus consecrásti: fac nos, utriúsque auxílio, Famíliæ sanctæ tuæ exémplis ínstrui; et consórtium cónsequi sempitérnum.",
      translation: "O Lord Jesus Christ, who, being subject to Mary and Joseph, didst consecrate home life with virtues beyond our telling: grant that, with the help of them both, we may be instructed by the example of thy holy Family, and attain to its everlasting fellowship."
    },
    secret: {
      latin: "Placatiónis hóstiam offérimus tibi, Dómine, supplíciter ut, per intercessiónem Deíparæ Vírginis cum beáto Joseph, famílias nostras in pace et grátia tua fírmiter constítuas.",
      translation: "We humbly offer thee, O Lord, this sacrifice of atonement: that, through the intercession of the Virgin Mother of God together with blessed Joseph, thou wouldst firmly establish our families in thy peace and grace."
    },
    postcommunion: {
      latin: "Quos cœléstibus réficis sacraméntis, fac, Dómine Jesu, sanctæ Famíliæ tuæ exémpla júgiter imitári: ut in hora mortis nostræ, occurrénte gloriósa Vírgine Matre tua cum beáto Joseph; per te in ætérna tabernácula récipi mereámur.",
      translation: "Grant, O Lord Jesus, that we whom thou dost refresh with heavenly sacraments may ever imitate the example of thy holy Family: that at the hour of our death, thy glorious Virgin Mother meeting us together with blessed Joseph, we may deserve through thee to be received into the everlasting dwellings."
    }
  },
  "epiph-2": {
    collect: {
      latin: "Omnípotens sempitérne Deus, qui cœléstia simul et terréna moderáris: supplicatiónes pópuli tui cleménter exáudi; et pacem tuam nostris concéde tempóribus.",
      translation: "Almighty and everlasting God, who governest heaven and earth alike: mercifully hear the supplications of thy people, and grant thy peace in our times."
    },
    secret: {
      latin: "Oblata, Dómine, múnera sanctífica: nosque a peccatórum nostrórum máculis emúnda.",
      translation: "Sanctify, O Lord, the gifts here offered: and cleanse us from the stains of our sins."
    },
    postcommunion: {
      latin: "Augeátur in nobis, quǽsumus, Dómine, tuæ virtútis operátio: ut divínis vegetáti sacraméntis, ad eórum promíssa capiénda, tuo múnere præparémur.",
      translation: "May the working of thy power, we beseech thee, O Lord, be increased in us: that, quickened by these divine sacraments, we may by thy gift be made ready to receive what they promise."
    }
  },
  "epiph-3": {
    collect: {
      latin: "Omnípotens sempitérne Deus, infirmitátem nostram propítius réspice: atque, ad protegéndum nos, déxteram tuæ majestátis exténde.",
      translation: "Almighty and everlasting God, look mercifully upon our weakness: and stretch forth the right hand of thy majesty to protect us."
    },
    secret: {
      latin: "Hæc hóstia, Dómine, quǽsumus, emúndet nostra delícta: et, ad sacrifícium celebrándum, subditórum tibi córpora mentésque sanctíficet.",
      translation: "May this offering, we beseech thee, O Lord, cleanse away our sins: and sanctify, for the celebration of this sacrifice, the bodies and minds of those subject to thee."
    },
    postcommunion: {
      latin: "Quos tantis, Dómine, largíris uti mystériis: quǽsumus; ut efféctibus nos eórum veráciter aptáre dignéris.",
      translation: "We beseech thee, O Lord, that thou wouldst grant us truly to be conformed to the effects of these great mysteries which thou dost bestow on us to use."
    }
  },

  "septuagesima": {
    collect: {
      latin: "Preces pópuli tui, quǽsumus, Dómine, cleménter exáudi: ut, qui juste pro peccátis nostris afflígimur, pro tui nóminis glória misericórditer liberémur.",
      translation: "Mercifully hear the prayers of thy people, we beseech thee, O Lord: that we, who are justly afflicted for our sins, may for the glory of thy name be mercifully delivered."
    },
    secret: {
      latin: "Accépta sit in conspéctu tuo, Dómine, nostra devótio: et ejus nobis fiat supplicatióne salutáris, pro cujus sollemnitáte defértur.",
      translation: "May our devotion be accepted in thy sight, O Lord: and, by the intercession of her for whose festival it is offered, become for us a source of salvation."
    },
    postcommunion: {
      latin: "Fidéles tui, Deus, per tua dona firméntur: ut eadem et percipiéndo requírant, et quæréndo sine fine percípiant.",
      translation: "May thy faithful, O God, be strengthened by thy gifts: that in receiving them they may still seek them, and in seeking them may receive them without end."
    }
  },
  "sexagesima": {
    collect: {
      latin: "Deus, qui cónspicis, quia ex nulla nostra actióne confídimus: concéde propítius; ut, contra advérsa ómnia, Doctóris géntium protectióne muniámur.",
      translation: "O God, who seest that we put no confidence in anything we do: grant in thy mercy that, against all adversity, we may be defended by the protection of the Teacher of the Gentiles."
    },
    secret: {
      latin: "Oblátum tibi, Dómine, sacrifícium, vivíficet nos semper et múniat.",
      translation: "May the sacrifice offered to thee, O Lord, ever quicken and defend us."
    },
    postcommunion: {
      latin: "Súpplices te rogámus, omnípotens Deus: ut, quos tuis réficis sacraméntis, tibi étiam plácitis móribus dignánter deservíre concédas.",
      translation: "We humbly beseech thee, almighty God: that thou wouldst grant those whom thou dost refresh with thy sacraments to serve thee worthily also with lives pleasing to thee."
    }
  },
  "quinquagesima": {
    collect: {
      latin: "Preces nostras, quǽsumus, Dómine, cleménter exáudi: atque, a peccatórum vínculis absolútos, ab omni nos adversitáte custódi.",
      translation: "Mercifully hear our prayers, we beseech thee, O Lord: and, having loosed us from the bonds of our sins, keep us safe from all adversity."
    },
    secret: {
      latin: "Hæc hóstia, Dómine, quǽsumus, emúndet nostra delícta: et, ad sacrifícium celebrándum, subditórum tibi córpora mentésque sanctíficet.",
      translation: "May this offering, we beseech thee, O Lord, cleanse away our sins: and sanctify, for the celebration of this sacrifice, the bodies and minds of those subject to thee."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut, qui coeléstia aliménta percépimus, per hæc contra ómnia adversa muniámur.",
      translation: "We beseech thee, almighty God: that we, who have received this heavenly food, may through it be defended against all adversity."
    }
  },

  "misereris": {
    collect: {
      latin: "Præsta, Dómine, fidélibus tuis: ut jejuniórum veneránda sollémnia, et cóngrua pietáte suscípiant, et secúra devotióne percúrrant.",
      translation: "Grant to thy faithful, O Lord: that they may undertake the venerable solemn fast with fitting piety, and carry it through with untroubled devotion."
    },
    secret: {
      latin: "Fac nos, quǽsumus, Dómine, his munéribus offeréndis conveniénter aptári: quibus ipsíus venerábilis sacraménti celebrámus exórdium.",
      translation: "Make us, we beseech thee, O Lord, fittingly prepared to offer these gifts: by which we keep the beginning of this venerable sacred season."
    },
    postcommunion: {
      latin: "Percépta nobis, Dómine, prǽbeant sacraménta subsídium: ut tibi grata sint nostra jejúnia, et nobis profíciant ad medélam.",
      translation: "May the sacraments we have received, O Lord, afford us their help: that our fasts may be pleasing to thee, and may profit us unto healing."
    }
  },
  "lent-1": {
    collect: {
      latin: "Deus, qui Ecclésiam tuam ánnua quadragesimáli observatióne puríficas: præsta famíliæ tuæ; ut, quod a te obtinére abstinéndo nítitur, hoc bonis opéribus exsequátur.",
      translation: "O God, who dost purify thy Church by the yearly observance of Lent: grant to thy family; that what it strives to obtain from thee by abstinence, it may carry out by good works."
    },
    secret: {
      latin: "Sacrifícium quadragesimális inítii sollémniter immolámus, te, Dómine, deprecántes: ut, cum epulárum restrictióne carnálium, a noxiis quoque voluptátibus temperémus.",
      translation: "We solemnly offer the sacrifice that marks the beginning of Lent, beseeching thee, O Lord: that as we restrain ourselves from carnal feasting, we may also abstain from harmful pleasures."
    },
    postcommunion: {
      latin: "Tui nos, Dómine, sacraménti libátio sancta restáuret: et a vetustáte purgátos, in mystérii salutáris fáciat transíre consórtium.",
      translation: "May the holy libation of thy sacrament restore us, O Lord: and, having cleansed us from our old ways, bring us to share in the fellowship of this saving mystery."
    }
  },
  "lent-2": {
    collect: {
      latin: "Deus, qui cónspicis omni nos virtúte destítui: intérius exteriúsque custódi; ut ab ómnibus adversitátibus muniámur in córpore, et a pravis cogitatiónibus mundémur in mente.",
      translation: "O God, who seest that we are destitute of all strength: keep us within and without; that we may be defended in body from every adversity, and cleansed in mind from wicked thoughts."
    },
    secret: {
      latin: "Sacrifíciis præséntibus, Dómine, quǽsumus, inténde placátus: ut et devotióni nostræ profíciant et salúti.",
      translation: "Look with favor, we beseech thee, O Lord, upon these present sacrifices: that they may profit both our devotion and our salvation."
    },
    postcommunion: {
      latin: "Súpplices te rogámus, omnípotens Deus: ut quos tuis réficis sacraméntis, tibi étiam plácitis móribus dignánter deservíre concédas.",
      translation: "We humbly beseech thee, almighty God: that thou wouldst grant those whom thou dost refresh with thy sacraments to serve thee worthily also with lives pleasing to thee."
    }
  },
  "lent-3": {
    collect: {
      latin: "Quǽsumus, omnípotens Deus, vota humílium réspice: atque, ad defensiónem nostram, déxteram tuæ majestátis exténde.",
      translation: "We beseech thee, almighty God, look upon the prayers of the humble: and stretch forth the right hand of thy majesty for our defense."
    },
    secret: {
      latin: "Hæc hóstia, Dómine, quǽsumus, emúndet nostra delícta: et, ad sacrifícium celebrándum, subditórum tibi córpora mentésque sanctíficet.",
      translation: "May this offering, we beseech thee, O Lord, cleanse away our sins: and sanctify, for the celebration of this sacrifice, the bodies and minds of those subject to thee."
    },
    postcommunion: {
      latin: "A cunctis nos, quǽsumus, Dómine, reátibus et perículis propitiátus absólve: quos tanti mystérii tríbuis esse partícipes.",
      translation: "Mercifully absolve us, we beseech thee, O Lord, from all guilt and danger: whom thou dost grant to be partakers of so great a mystery."
    }
  },
  "laetare": {
    collect: {
      latin: "Concéde, quǽsumus, omnípotens Deus: ut, qui ex mérito nostræ actiónis afflígimur, tuæ grátiæ consolatióne respirémus.",
      translation: "Grant, we beseech thee, almighty God: that we, who are afflicted by the just deserts of our own deeds, may find relief in the consolation of thy grace."
    },
    secret: {
      latin: "Sacrifíciis præséntibus, Dómine, quǽsumus, inténde placátus: ut et devotióni nostræ profíciant et salúti.",
      translation: "Look with favor, we beseech thee, O Lord, upon these present sacrifices: that they may profit both our devotion and our salvation."
    },
    postcommunion: {
      latin: "Da nobis, quǽsumus, miséricors Deus: ut sancta tua, quibus incessánter explémur, sincéris tractémus obséquiis, et fidéli semper mente sumámus.",
      translation: "Grant us, we beseech thee, merciful God: that we may handle with sincere devotion, and ever receive with faithful mind, thy holy gifts, with which we are unceasingly filled."
    }
  },
  "passion": {
    collect: {
      latin: "Quǽsumus, omnípotens Deus, famíliam tuam propítius réspice: ut, te largiénte, regátur in córpore; et, te servánte, custodiátur in mente.",
      translation: "We beseech thee, almighty God, look mercifully upon thy family: that by thy bounty it may be governed in body; and by thy keeping, guarded in mind."
    },
    secret: {
      latin: "Hæc múnera, quǽsumus Dómine, et víncula nostræ pravitátis absólvant, et tuæ nobis misericórdiæ dona concílient.",
      translation: "May these gifts, we beseech thee, O Lord, both loose us from the bonds of our wickedness, and win for us the gifts of thy mercy."
    },
    postcommunion: {
      latin: "Adésto nobis, Dómine, Deus noster: et, quos tuis mystériis recreásti, perpétuis defénde subsídiis.",
      translation: "Be present with us, O Lord our God: and defend with thy unfailing help those whom thou hast refreshed with thy mysteries."
    }
  },
  "palm": {
    collect: {
      latin: "Omnípotens sempitérne Deus, qui humáno géneri, ad imitándum humilitátis exémplum, Salvatórem nostrum carnem súmere et crucem subíre fecísti: concéde propítius; ut et patiéntiæ ipsíus habére documénta et resurrectiónis consórtia mereámur.",
      translation: "Almighty and everlasting God, who, that mankind might follow the example of his humility, didst cause our Savior to take flesh and undergo the Cross: mercifully grant that we may both hold fast the lessons of his patience, and deserve a share in his resurrection."
    },
    secret: {
      latin: "Concéde, quǽsumus, Dómine: ut óculis tuæ majestátis munus oblátum, et grátiam nobis devotiónis obtíneat, et efféctum beátæ perennitátis acquírat.",
      translation: "Grant, we beseech thee, O Lord: that this gift offered before the eyes of thy majesty may obtain for us the grace of devotion, and win for us the blessing of unending life."
    },
    postcommunion: {
      latin: "Per hujus, Dómine, operatiónem mystérii: et vitia nostra purgéntur, et justa desidéria compleántur.",
      translation: "By the working of this mystery, O Lord, may both our sins be purged away and our righteous desires fulfilled."
    }
  },
  "nos-autem": {
    collect: {
      latin: "Deus, a quo et Judas reátus sui pœnam, et confessiónis suæ latro prǽmium sumpsit, concéde nobis tuæ propitiatiónis efféctum: ut, sicut in passióne sua Jesus Christus, Dóminus noster, divérsa utrísque íntulit stipéndia meritórum; ita nobis, abláto vetustátis erróre, resurrectiónis suæ grátiam largiátur.",
      translation: "O God, from whom both Judas received the punishment of his guilt, and the thief the reward of his confession: grant unto us the effect of thy loving-kindness; that, as our Lord Jesus Christ in his Passion gave to each a different recompense according to his merit, so, our former error being taken away, he may bestow upon us the grace of his resurrection."
    },
    secret: {
      latin: "Ipse tibi, quǽsumus, Dómine sancte, Pater omnípotens, ætérne Deus, sacrifícium nostrum reddat accéptum, qui discípulis suis in sui commemoratiónem hoc fíeri hodiérna traditióne monstrávit, Jesus Christus, Fílius tuus, Dóminus noster.",
      translation: "May he himself, we beseech thee, O holy Lord, almighty Father, eternal God, render our sacrifice acceptable to thee, who on this day taught his disciples by his own tradition to do this in remembrance of him — Jesus Christ, thy Son, our Lord."
    },
    postcommunion: {
      latin: "Refécti vitálibus aliméntis, quǽsumus, Dómine, Deus noster: ut, quod témpore nostræ mortalitátis exséquimur, immortalitátis tuæ múnere consequámur.",
      translation: "Refreshed with the food of life, we beseech thee, O Lord our God: that what we now carry out in the time of our mortality, we may attain to by the gift of thy immortality."
    }
  },

  "resurrexi": {
    collect: {
      latin: "Deus, qui hodiérna die per Unigénitum tuum æternitátis nobis áditum, devícta morte, reserásti: vota nostra, quæ præveniéndo aspíras, étiam adjuvándo proséquere.",
      translation: "O God, who on this day, through thine Only-begotten Son, hast conquered death and thrown open for us the gate of eternity: follow with thy help the prayers which thou dost first inspire in us."
    },
    secret: {
      latin: "Súscipe, quǽsumus, Dómine, preces pópuli tui cum oblatiónibus hostiárum: ut, Paschálibus initiáta mystériis, ad æternitátis nobis medélam, te operánte, profíciant.",
      translation: "Receive, we beseech thee, O Lord, the prayers of thy people together with these offered sacrifices: that, begun in the Paschal mysteries, they may, by thy working, avail us unto the remedy of eternity."
    },
    postcommunion: {
      latin: "Spíritum nobis, Dómine, tuæ caritátis infúnde: ut, quos sacraméntis paschálibus satiásti, tua fácias pietáte concordes.",
      translation: "Pour into us, O Lord, the spirit of thy charity: that thou mayest make those whom thou hast filled with the Paschal sacraments to be of one mind in thy loving-kindness."
    }
  },
  "quasimodo": {
    collect: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut, qui paschália festa perégimus, hæc, te largiénte, móribus et vita teneámus.",
      translation: "Grant, we beseech thee, almighty God: that we, who have kept the Paschal festival, may, by thy bounty, hold fast to it in our conduct and in our lives."
    },
    secret: {
      latin: "Súscipe múnera, Dómine, quǽsumus, exsultántis Ecclésiæ: et, cui causam tanti gáudii præstitísti, perpétuæ fructum concéde lætítiæ.",
      translation: "Receive, we beseech thee, O Lord, the gifts of thy rejoicing Church: and to her, for whom thou hast provided cause for such great joy, grant the fruit of unending gladness."
    },
    postcommunion: {
      latin: "Quǽsumus, Dómine, Deus noster: ut sacrosáncta mystéria, quæ pro reparatiónis nostræ munímine contulísti; et præsens nobis remédium esse fácias et futúrum.",
      translation: "We beseech thee, O Lord our God: that the most holy mysteries which thou hast bestowed for the strengthening of our restoration mayest thou make to be for us a remedy both present and to come."
    }
  },
  "easter-misericordia": {
    collect: {
      latin: "Deus, qui in Fílii tui humilitáte jacéntem mundum erexísti: fidélibus tuis perpétuam concéde lætítiam; ut, quos perpétuæ mortis eripuísti cásibus, gáudiis fácias pérfrui sempitérnis.",
      translation: "O God, who through the lowliness of thy Son didst raise up a fallen world: grant unending gladness to thy faithful people; that those whom thou hast rescued from the perils of everlasting death thou mayest cause to enjoy the delights of life everlasting."
    },
    secret: {
      latin: "Benedictiónem nobis, Dómine, cónferat salutárem sacra semper oblátio: ut, quod agit mystério, virtúte perfíciat.",
      translation: "May this sacred offering, O Lord, ever bring us a saving blessing: that what it enacts in mystery it may accomplish in power."
    },
    postcommunion: {
      latin: "Præsta nobis, quǽsumus, omnípotens Deus: ut, vivificatiónis tuæ grátiam consequéntes, in tuo semper múnere gloriémur.",
      translation: "Grant us, we beseech thee, almighty God: that, obtaining the grace of thy life-giving power, we may ever glory in thy gift."
    }
  },
  "easter-jubilate": {
    collect: {
      latin: "Deus, qui errántibus, ut in viam possint redíre justítiæ, veritátis tuæ lumen osténdis: da cunctis, qui christiána professióne censéntur, et illa respúere, quæ huic inimíca sunt nómini; et ea, quæ sunt apta, sectári.",
      translation: "O God, who dost show forth the light of thy truth to those that go astray, that they may be able to return to the path of righteousness: grant to all who are numbered among the Christian profession, both to reject whatsoever is opposed to that name, and to follow after whatsoever is fitting to it."
    },
    secret: {
      latin: "His nobis, Dómine, mystériis conferátur, quo, terréna desidéria mitigántes, discámus amáre cœléstia.",
      translation: "By these mysteries, O Lord, may that be granted us whereby, tempering our earthly desires, we may learn to love the things of heaven."
    },
    postcommunion: {
      latin: "Sacraménta quæ súmpsimus, quǽsumus, Dómine: et spirituálibus nos instáurent aliméntis, et corporálibus tueántur auxíliis.",
      translation: "May the sacraments we have received, we beseech thee, O Lord, both renew us with spiritual food and guard us with bodily help."
    }
  },
  "easter-cantate": {
    collect: {
      latin: "Deus, qui fidélium mentes uníus éfficis voluntátis: da pópulis tuis id amáre quod prǽcipis, id desideráre quod promíttis; ut inter mundánas varietátes ibi nostra fixa sint corda, ubi vera sunt gáudia.",
      translation: "O God, who makest the minds of the faithful to be of one will: grant to thy people to love what thou dost command, and to desire what thou dost promise; that amid the changes of this world our hearts may be fixed there where true joys are found."
    },
    secret: {
      latin: "Deus, qui nos, per hujus sacrifícii veneránda commércia, uníus summæ divinitátis partícipes effecísti: præsta, quǽsumus; ut, sicut tuam cognóscimus veritátem, sic eam dignis móribus assequámur.",
      translation: "O God, who through the venerable exchange of this sacrifice hast made us partakers of thy one supreme divinity: grant, we beseech thee, that as we come to know thy truth, so we may attain it by worthy lives."
    },
    postcommunion: {
      latin: "Adésto nobis, Dómine, Deus noster: ut per hæc, quæ fidéliter súmpsimus, et purgémur a vítiis et a perículis ómnibus eruámur.",
      translation: "Be present with us, O Lord our God: that through these gifts which we have faithfully received, we may both be cleansed from our sins and delivered from every danger."
    }
  },
  "easter-vocem": {
    collect: {
      latin: "Deus, a quo bona cuncta procédunt, largíre supplícibus tuis: ut cogitémus, te inspiránte, quæ recta sunt; et, te gubernánte, éadem faciámus.",
      translation: "O God, from whom all good things proceed, grant unto thy suppliants: that by thy inspiration we may think what is right, and by thy guidance may do the same."
    },
    secret: {
      latin: "Súscipe, Dómine, fidélium preces cum oblatiónibus hostiárum: ut, per hæc piæ devotiónis offícia, ad cœléstem glóriam transeámus.",
      translation: "Receive, O Lord, the prayers of thy faithful together with these offered sacrifices: that through these offices of devout piety we may pass over to the glory of heaven."
    },
    postcommunion: {
      latin: "Tríbue nobis, Dómine, cæléstis mensæ virtúte satiátis: et desideráre, quæ recta sunt, et desideráta percípere.",
      translation: "Grant us, O Lord, who are filled with the power of this heavenly table: both to desire what is right, and to obtain what we have desired."
    }
  },
  "viri-galilaei": {
    collect: {
      latin: "Concéde, quǽsumus, omnípotens Deus: ut, qui hodiérna die Unigénitum tuum, Redemptórem nostrum, ad cœlos ascendísse crédimus; ipsi quoque mente in cœléstibus habitémus.",
      translation: "Grant, we beseech thee, almighty God: that we, who believe that on this day thine Only-begotten Son, our Redeemer, ascended into the heavens, may ourselves also dwell in mind amid the things of heaven."
    },
    secret: {
      latin: "Súscipe, Dómine, múnera, quæ pro Fílii tui gloriósa Ascensióne deférimus: et concéde propítius; ut a præséntibus perículis liberémur, et ad vitam perveniámus ætérnam.",
      translation: "Receive, O Lord, the gifts which we offer for the glorious Ascension of thy Son: and mercifully grant that we may be freed from present dangers and come to life everlasting."
    },
    postcommunion: {
      latin: "Præsta nobis, quǽsumus, omnípotens et miséricors Deus: ut, quæ visibílibus mystériis suménda percépimus, invisíbili consequámur efféctu.",
      translation: "Grant us, we beseech thee, almighty and merciful God: that what we have received in visible mysteries we may obtain by their unseen effect."
    }
  },
  "sunday-after-ascension": {
    collect: {
      latin: "Omnípotens sempitérne Deus: fac nos tibi semper et devótam gérere voluntátem; et majestáti tuæ sincéro corde servíre.",
      translation: "Almighty and everlasting God: make us ever to bear toward thee a devout will, and to serve thy majesty with a sincere heart."
    },
    secret: {
      latin: "Sacrifícia nos, Dómine, immaculáta puríficent: et méntibus nostris supérnæ grátiæ dent vigórem.",
      translation: "May these unspotted sacrifices purify us, O Lord: and give to our minds the strength of thy grace from on high."
    },
    postcommunion: {
      latin: "Repléti, Dómine, munéribus sacris: da, quǽsumus; ut in gratiárum semper actióne maneámus.",
      translation: "Filled, O Lord, with these sacred gifts: grant, we beseech thee, that we may ever continue in the giving of thanks."
    }
  },
  "spiritus-domini": {
    collect: {
      latin: "Deus, qui hodiérna die corda fidélium Sancti Spíritus illustratióne docuísti: da nobis in eódem Spíritu recta sápere; et de ejus semper consolatióne gaudére.",
      translation: "O God, who on this day didst teach the hearts of thy faithful people by the light of the Holy Spirit: grant us in that same Spirit to relish what is right, and ever to rejoice in his consolation."
    },
    secret: {
      latin: "Múnera, quǽsumus, Dómine, obláta sanctífica: et corda nostra Sancti Spíritus illustratióne emúnda.",
      translation: "Sanctify, we beseech thee, O Lord, the gifts here offered: and cleanse our hearts by the light of the Holy Spirit."
    },
    postcommunion: {
      latin: "Sancti Spíritus, Dómine, corda nostra mundet infúsio: et sui roris íntima aspersióne fecúndet.",
      translation: "May the infusion of the Holy Spirit, O Lord, cleanse our hearts: and make them fruitful with the inward sprinkling of his dew."
    }
  },

  "trinity": {
    collect: {
      latin: "Omnípotens sempitérne Deus, qui dedísti fámulis tuis in confessióne veræ fídei, ætérnæ Trinitátis glóriam agnóscere, et in poténtia majestátis adoráre Unitátem: quǽsumus; ut, ejúsdem fídei firmitáte, ab ómnibus semper muniámur advérsis.",
      translation: "Almighty and everlasting God, who hast granted to thy servants, in the confession of the true faith, to acknowledge the glory of the eternal Trinity, and in the power of thy majesty to adore the Unity: we beseech thee, that by steadfastness in that same faith we may ever be defended from all adversity."
    },
    secret: {
      latin: "Sanctífica, quǽsumus, Dómine, Deus noster, per tui sancti nóminis invocatiónem, hujus oblatiónis hóstiam: et per eam nosmetípsos tibi pérfice munus ætérnum.",
      translation: "Sanctify, we beseech thee, O Lord our God, by the invocation of thy holy name, this victim of our offering: and through it make of us ourselves an everlasting gift to thee."
    },
    postcommunion: {
      latin: "Profíciat nobis ad salútem córporis et ánimæ, Dómine, Deus noster, hujus sacraménti suscéptio: et sempitérnæ sanctæ Trinitátis ejusdémque indivíduæ Unitátis conféssio.",
      translation: "May the receiving of this sacrament, O Lord our God, avail us unto the health of body and soul: together with the confession of the everlasting holy Trinity and of the selfsame undivided Unity."
    }
  },
  "cibavit": {
    collect: {
      latin: "Deus, qui nobis sub Sacraménto mirábili passiónis tuæ memóriam reliquísti: tríbue, quǽsumus, ita nos Córporis et Sánguinis tui sacra mystéria venerári; ut redemptiónis tuæ fructum in nobis júgiter sentiámus:",
      translation: "O God, who under a wonderful Sacrament hast left us a memorial of thy Passion: grant us, we beseech thee, so to venerate the sacred mysteries of thy Body and Blood, that we may ever feel within us the fruit of thy redemption."
    },
    secret: {
      latin: "Ecclésiæ tuæ, quǽsumus, Dómine, unitátis et pacis propítius dona concéde: quæ sub oblátis munéribus mýstice designántur.",
      translation: "Grant mercifully to thy Church, we beseech thee, O Lord, the gifts of unity and peace: which are mystically signified beneath the offerings here presented."
    },
    postcommunion: {
      latin: "Fac nos, quǽsumus, Dómine, divinitátis tuæ sempitérna fruitióne repléri: quam pretiósi Corporis et Sanguinis tui temporalis percéptio præfigúrat:",
      translation: "Grant us, we beseech thee, O Lord, to be filled with the everlasting enjoyment of thy divinity: which the temporal receiving of thy precious Body and Blood does foreshadow."
    }
  },
  "sacred-heart": {
    collect: {
      latin: "Deus, qui nobis in Corde Fílii tui, nostris vulneráto peccátis, infinítos dilectiónis thesáuros misericórditer largíri dignáris: concéde, quǽsumus; ut, illi devótum pietátis nostræ præstántes obséquium, dignæ quoque satisfactiónis exhibeámus offícium.",
      translation: "O God, who in the Heart of thy Son, wounded by our sins, dost mercifully vouchsafe to bestow upon us the boundless treasures of thy love: grant, we beseech thee; that, rendering to him the devout homage of our piety, we may also offer him the office of worthy reparation."
    },
    secret: {
      latin: "Réspice, quǽsumus, Dómine, ad ineffábilem Cordis dilécti Fílii tui caritátem: ut quod offérimus sit tibi munus accéptum et nostrórum expiátio delictórum.",
      translation: "Look, we beseech thee, O Lord, upon the ineffable love of the Heart of thy beloved Son: that what we offer may be to thee an acceptable gift and an atonement for our sins."
    },
    postcommunion: {
      latin: "Prǽbeant nobis, Dómine Jesu, divínum tua sancta fervórem: quo dulcíssimi Cordis tui suavitáte percépta; discámus terréna despícere, et amáre cœléstia:",
      translation: "May thy holy gifts, O Lord Jesus, afford us divine fervor: whereby, having tasted the sweetness of thy most loving Heart, we may learn to despise the things of earth, and to love the things of heaven."
    }
  },
  "pent-2": {
    collect: {
      latin: "Sancti nóminis tui, Dómine, timórem páriter et amórem fac nos habére perpétuum: quia numquam tua gubernatióne destítuis, quos in soliditáte tuæ dilectiónis instítuis.",
      translation: "Grant us, O Lord, ever to hold both the fear and the love of thy holy name: for thou dost never forsake in thy guidance those whom thou dost establish in the firmness of thy love."
    },
    secret: {
      latin: "Oblátio nos, Dómine, tuo nómini dicánda puríficet: et de die in diem ad cœléstis vitæ tránsferat actiónem.",
      translation: "May this offering, made holy to thy name, O Lord, purify us: and day by day translate our lives into the ways of heaven."
    },
    postcommunion: {
      latin: "Sumptis munéribus sacris, quǽsumus, Dómine: ut cum frequentatióne mystérii, crescat nostræ salútis efféctus.",
      translation: "Having received these sacred gifts, we beseech thee, O Lord: that through the frequent renewal of this mystery, the fruit of our salvation may increase."
    }
  },
  "pent-3": {
    collect: {
      latin: "Protéctor in te sperántium, Deus, sine quo nihil est válidum, nihil sanctum: multíplica super nos misericórdiam tuam; ut, te rectóre, te duce, sic transeámus per bona temporália, ut non amittámus ætérna.",
      translation: "O God, the protector of them that hope in thee, without whom nothing is strong, nothing is holy: multiply upon us thy mercy; that, with thee for our ruler and our guide, we may so pass through the good things of this world as not to lose those that are eternal."
    },
    secret: {
      latin: "Réspice, Dómine, múnera supplicántis Ecclésiæ: et salúti credéntium perpétua sanctificatióne suménda concéde.",
      translation: "Look, O Lord, upon the offerings of thy suppliant Church: and grant that they may be received unto the salvation of believers by their unending sanctification."
    },
    postcommunion: {
      latin: "Sancta tua nos, Dómine, sumpta vivíficent: et misericórdiæ sempitérnæ prǽparent expiátos.",
      translation: "May thy holy gifts, O Lord, which we have received, give us life: and, having cleansed us, prepare us for thine everlasting mercy."
    }
  },
  "pent-4": {
    collect: {
      latin: "Da nobis, quǽsumus, Dómine: ut et mundi cursus pacífice nobis tuo órdine dirigátur; et Ecclésia tua tranquílla devotióne lætétur.",
      translation: "Grant us, we beseech thee, O Lord: that the course of this world may be peaceably guided for us by thy ordinance; and that thy Church may rejoice in tranquil devotion."
    },
    secret: {
      latin: "Oblatiónibus nostris, quǽsumus, Dómine, placáre suscéptis: et ad te nostras étiam rebélles compélle propítius voluntátes.",
      translation: "Be appeased, we beseech thee, O Lord, by the offerings we have brought thee: and mercifully compel toward thyself even our rebellious wills."
    },
    postcommunion: {
      latin: "Mystéria nos, Dómine, quǽsumus, sumpta puríficent: et suo múnere tueántur.",
      translation: "May the mysteries we have received, we beseech thee, O Lord, purify us: and by their own power defend us."
    }
  },
  "pent-5": {
    collect: {
      latin: "Deus, qui diligéntibus te bona invisibília præparásti: infúnde córdibus nostris tui amóris afféctum; ut te in ómnibus et super ómnia diligéntes, promissiónes tuas, quæ omne desidérium súperant, consequámur.",
      translation: "O God, who hast prepared for them that love thee good things which are unseen: pour into our hearts such love toward thee, that, loving thee in all things and above all things, we may attain to thy promises, which exceed all that we can desire."
    },
    secret: {
      latin: "Propitiáre, Dómine, supplicatiónibus nostris: et has oblatiónes famulórum famularúmque tuárum benígnus assúme; ut, quod sínguli obtulérunt ad honórem nóminis tui, cunctis profíciat ad salútem.",
      translation: "Be appeased, O Lord, by our supplications: and graciously accept these offerings of thy servants and handmaids; that what each has offered to the honor of thy name may profit all unto salvation."
    },
    postcommunion: {
      latin: "Quos cœlésti, Dómine, dono satiásti: præsta, quǽsumus; ut a nostris mundémur occúltis et ab hóstium liberémur insídiis.",
      translation: "Grant, we beseech thee, O Lord, that we whom thou hast satisfied with thy heavenly gift, may be cleansed from our hidden faults, and freed from the snares of our enemies."
    }
  },
  "pent-6": {
    collect: {
      latin: "Deus virtútum, cujus est totum quod est óptimum: ínsere pectóribus nostris amórem tui nóminis, et præsta in nobis religiónis augméntum; ut, quæ sunt bona, nútrias, ac pietátis stúdio, quæ sunt nutríta, custódias.",
      translation: "O God of hosts, to whom belongeth whatsoever is best: implant in our hearts the love of thy name, and grant increase within us of true religion; that thou mayest nourish what is good, and by our zeal for holiness guard what thou hast nourished."
    },
    secret: {
      latin: "Propitiáre, Dómine, supplicatiónibus nostris, et has pópuli tui oblatiónes benígnus assúme: et, ut nullíus sit írritum votum, nullíus vácua postulátio, præsta; ut, quod fidéliter pétimus, efficáciter consequámur.",
      translation: "Be appeased, O Lord, by our supplications, and graciously accept these offerings of thy people: and grant that no one's vow be in vain, no one's petition empty; that what we faithfully ask, we may effectually obtain."
    },
    postcommunion: {
      latin: "Repléti sumus, Dómine, munéribus tuis: tríbue, quǽsumus; ut eórum et mundémur efféctu et muniámur auxílio.",
      translation: "We have been filled, O Lord, with thy gifts: grant, we beseech thee; that we may both be cleansed by their working and defended by their help."
    }
  },
  "pent-7": {
    collect: {
      latin: "Deus, cujus providéntia in sui dispositióne non fállitur: te súpplices exorámus; ut nóxia cuncta submóveas, et ómnia nobis profutúra concédas.",
      translation: "O God, whose providence in its ordinance cannot fail: we humbly beseech thee to remove from us all that is harmful, and to grant us all that will be to our profit."
    },
    secret: {
      latin: "Deus, qui legálium differéntiam hostiárum unius sacrifícii perfectione sanxísti: accipe sacrifícium a devótis tibi fámulis, et pari benedictióne, sicut múnera Abel, sanctífica; ut, quod sínguli obtulérunt ad majestátis tuæ honórem, cunctis profíciat ad salútem.",
      translation: "O God, who by the perfection of one sacrifice didst put an end to the diversity of the sacrifices of the Law: accept the sacrifice of thy devoted servants, and sanctify it with the same blessing wherewith thou didst sanctify the offering of Abel; that what each has offered to the honor of thy majesty may profit all unto salvation."
    },
    postcommunion: {
      latin: "Tua nos, Dómine, medicinális operátio, et a nostris perversitátibus cleménter expédiat, et ad ea, quæ sunt recta, perdúcat.",
      translation: "May thy healing work, O Lord, mercifully free us from our own perversity, and lead us to those things that are right."
    }
  },
  "pent-8": {
    collect: {
      latin: "Largíre nobis, quǽsumus, Dómine, semper spíritum cogitándi quæ recta sunt, propítius et agéndi: ut, qui sine te esse non póssumus, secúndum te vívere valeámus.",
      translation: "Grant us, we beseech thee, O Lord, ever mercifully to think and to do the things that are right: that we, who cannot exist without thee, may be enabled to live according to thy will."
    },
    secret: {
      latin: "Súscipe, quǽsumus, Dómine, múnera, quæ tibi de tua largitáte deférimus: ut hæc sacrosáncta mystéria, grátiæ tuæ operánte virtúte, et præséntis vitæ nos conversatióne sanctíficent, et ad gáudia sempitérna perdúcant.",
      translation: "Receive, we beseech thee, O Lord, the gifts which we bring thee out of thy own bounty: that these most holy mysteries, by the working power of thy grace, may sanctify us in our conduct of this present life, and bring us to joys everlasting."
    },
    postcommunion: {
      latin: "Sit nobis, Dómine, reparátio mentis et córporis cæléste mystérium: ut, cujus exséquimur cultum, sentiámus efféctum.",
      translation: "May this heavenly mystery, O Lord, be to us the renewal of mind and body: that, whose worship we perform, we may also feel its effect."
    }
  },
  "pent-9": {
    collect: {
      latin: "Páteant aures misericórdiæ tuæ, Dómine, précibus supplicántium: et, ut peténtibus desideráta concédas; fac eos quæ tibi sunt plácita, postuláre.",
      translation: "Let the ears of thy mercy, O Lord, be open to the prayers of thy suppliants: and, that thou mayest grant to them that ask what they desire, make them to ask what is pleasing to thee."
    },
    secret: {
      latin: "Concéde nobis, quǽsumus, Dómine, hæc digne frequentáre mystéria: quia, quóties hujus hóstiæ commemorátio celebrátur, opus nostræ redemptiónis exercétur.",
      translation: "Grant us, we beseech thee, O Lord, worthily to celebrate these mysteries: for as often as the memorial of this sacrifice is offered, the work of our redemption is carried on."
    },
    postcommunion: {
      latin: "Tui nobis, quǽsumus, Dómine, commúnio sacraménti, et purificatiónem cónferat, et tríbuat unitátem.",
      translation: "May the communion of thy sacrament, we beseech thee, O Lord, both bestow upon us purification and grant us unity."
    }
  },
  "pent-10": {
    collect: {
      latin: "Deus, qui omnipoténtiam tuam parcéndo máxime et miserándo maniféstas: multíplica super nos misericórdiam tuam; ut, ad tua promíssa curréntes, cœléstium bonórum fácias esse consórtes.",
      translation: "O God, who dost show forth thine almighty power most of all in sparing and in showing mercy: multiply thy mercy upon us; that, running toward thy promises, thou mayest make us partakers of the good things of heaven."
    },
    secret: {
      latin: "Tibi, Dómine, sacrifícia dicáta reddántur: quæ sic ad honórem nóminis tui deferénda tribuísti, ut eadem remédia fíeri nostra præstáres.",
      translation: "May the sacrifices dedicated to thee, O Lord, be rendered thee: which thou hast granted us to bring to the honor of thy name in such wise that thou wouldst make them also our remedy."
    },
    postcommunion: {
      latin: "Quǽsumus, Dómine, Deus noster: ut, quos divínis reparáre non désinis sacraméntis, tuis non destítuas benígnus auxíliis.",
      translation: "We beseech thee, O Lord our God: that thou wouldst not, in thy goodness, withhold thy help from those whom thou dost not cease to restore by thy divine sacraments."
    }
  },
  "pent-11": {
    collect: {
      latin: "Omnípotens sempitérne Deus, qui, abundántia pietátis tuæ, et mérita súpplicum excédis et vota: effúnde super nos misericórdiam tuam; ut dimíttas quæ consciéntia métuit, et adícias quod orátio non præsúmit.",
      translation: "Almighty and everlasting God, who in the abundance of thy loving-kindness dost exceed both the merits and the desires of thy suppliants: pour out thy mercy upon us; that thou wouldst forgive what our conscience is afraid of, and grant what our prayer dares not presume to ask."
    },
    secret: {
      latin: "Réspice, Dómine, quǽsumus, nostram propítius servitútem: ut, quod offérimus, sit tibi munus accéptum, et sit nostræ fragilitátis subsidium.",
      translation: "Look, we beseech thee, O Lord, with favor upon our service: that what we offer may be an acceptable gift to thee, and a help to our weakness."
    },
    postcommunion: {
      latin: "Sentiámus, quǽsumus, Dómine, tui perceptióne sacraménti, subsídium mentis et córporis: ut, in utróque salváti, cæléstis remédii plenitúdine gloriémur.",
      translation: "May we feel, we beseech thee, O Lord, through the receiving of thy sacrament, the help of mind and body: that, saved in both, we may glory in the fullness of this heavenly remedy."
    }
  },
  "pent-12": {
    collect: {
      latin: "Omnípotens et miséricors Deus, de cujus múnere venit, ut tibi a fidélibus tuis digne et laudabíliter serviátur: tríbue, quǽsumus, nobis; ut ad promissiónes tuas sine offensióne currámus.",
      translation: "Almighty and merciful God, by whose gift it comes to pass that thou art worthily and laudably served by thy faithful people: grant us, we beseech thee, that we may run without stumbling toward thy promises."
    },
    secret: {
      latin: "Hóstias, quǽsumus, Dómine, propítius inténde, quas sacris altáribus exhibémus: ut, nobis indulgéntiam largiéndo, tuo nómini dent honórem.",
      translation: "Look with favor, we beseech thee, O Lord, upon the offerings which we present at thy holy altars: that, granting us pardon, they may give honor to thy name."
    },
    postcommunion: {
      latin: "Vivíficet nos, quǽsumus, Dómine, hujus participátio sancta mystérii: et páriter nobis expiatiónem tríbuat et múnimen.",
      translation: "May our sharing in this holy mystery, we beseech thee, O Lord, give us life: and grant us alike both cleansing and protection."
    }
  },
  "pent-13": {
    collect: {
      latin: "Omnípotens sempitérne Deus, da nobis fídei, spei et caritátis augméntum: et, ut mereámur asséqui quod promíttis, fac nos amáre quod prǽcipis.",
      translation: "Almighty and everlasting God, give us increase of faith, hope, and charity: and, that we may deserve to obtain what thou dost promise, make us to love what thou dost command."
    },
    secret: {
      latin: "Propitiáre, Dómine, pópulo tuo, propitiáre munéribus: ut, hac oblatióne placátus, et indulgéntiam nobis tríbuas et postuláta concedas.",
      translation: "Be appeased, O Lord, toward thy people, be appeased by these gifts: that, being propitiated by this offering, thou mayest grant us pardon, and give us what we ask."
    },
    postcommunion: {
      latin: "Sumptis, Dómine, cœléstibus sacraméntis: ad redemptiónis ætérnæ, quǽsumus, proficiámus augméntum.",
      translation: "Having received, O Lord, these heavenly sacraments: may we advance, we beseech thee, toward the increase of our everlasting redemption."
    }
  },
  "pent-14": {
    collect: {
      latin: "Custódi, Dómine, quǽsumus, Ecclésiam tuam propitiatióne perpétua: et quia sine te lábitur humána mortálitas; tuis semper auxíliis et abstrahátur a nóxiis et ad salutária dirigátur.",
      translation: "Guard thy Church, O Lord, we beseech thee, by thine unfailing mercy: and because without thee human mortality must fall, may it, by thy help, ever be withdrawn from what is harmful and guided toward what brings salvation."
    },
    secret: {
      latin: "Concéde nobis, Dómine, quǽsumus, ut hæc hóstia salutáris et nostrórum fiat purgátio delictórum, et tuæ propitiátio potestátis.",
      translation: "Grant us, O Lord, we beseech thee, that this saving victim may become both a cleansing of our sins and a propitiation of thy power."
    },
    postcommunion: {
      latin: "Puríficent semper et múniant tua sacraménta nos, Deus: et ad perpétuæ ducant salvatiónis efféctum.",
      translation: "May thy sacraments, O God, ever purify and defend us: and lead us to the effect of everlasting salvation."
    }
  },
  "pent-15": {
    collect: {
      latin: "Ecclésiam tuam, Dómine, miserátio continuáta mundet et múniat: et quia sine te non potest salva consístere; tuo semper múnere gubernétur.",
      translation: "May thy continuing mercy, O Lord, cleanse and defend thy Church: and, because without thee she cannot remain safe, may she ever be governed by thy gift."
    },
    secret: {
      latin: "Tua nos, Dómine, sacramenta custodiant: et contra diabólicos semper tueántur incúrsus.",
      translation: "May thy sacraments, O Lord, keep us safe: and ever defend us against the assaults of the devil."
    },
    postcommunion: {
      latin: "Mentes nostras et córpora possídeat, quǽsumus, Dómine, doni cœléstis operátio: ut non noster sensus in nobis, sed júgiter ejus prævéniat efféctus.",
      translation: "May the working of this heavenly gift, we beseech thee, O Lord, take possession of our minds and bodies: that not our own understanding, but its effect, may ever go before us."
    }
  },
  "pent-16": {
    collect: {
      latin: "Tua nos, quǽsumus, Dómine, grátia semper et prævéniat et sequátur: ac bonis opéribus júgiter præstet esse inténtos.",
      translation: "May thy grace, we beseech thee, O Lord, ever go before us and follow after us: and make us continually intent upon good works."
    },
    secret: {
      latin: "Munda nos, quǽsumus, Dómine, sacrifícii præséntis efféctu: et pérfice miserátus in nobis; ut ejus mereámur esse partícipes.",
      translation: "Cleanse us, we beseech thee, O Lord, by the effect of this present sacrifice: and mercifully bring it to pass in us that we may deserve to be partakers of it."
    },
    postcommunion: {
      latin: "Purífica, quǽsumus, Dómine, mentes nostras benígnus, et rénova cœléstibus sacraméntis: ut consequénter et córporum præsens páriter et futúrum capiámus auxílium.",
      translation: "Graciously purify our minds, we beseech thee, O Lord, and renew them with these heavenly sacraments: that we may accordingly receive help for our bodies, both for the present and for the time to come."
    }
  },
  "pent-17": {
    collect: {
      latin: "Da, quǽsumus, Dómine, pópulo tuo diabólica vitáre contágia: et te solum Deum pura mente sectári.",
      translation: "Grant, we beseech thee, O Lord, to thy people, to avoid the contagion of the devil: and with a pure mind to follow thee, the only God."
    },
    secret: {
      latin: "Majestátem tuam, Dómine, supplíciter deprecámur: ut hæc sancta, quæ gérimus, et a prætéritis nos delictis éxuant et futúris.",
      translation: "We humbly entreat thy majesty, O Lord: that these holy mysteries which we perform may free us from our past sins and from those to come."
    },
    postcommunion: {
      latin: "Sanctificatiónibus tuis, omnípotens Deus, et vítia nostra curéntur, et remédia nobis ætérna provéniant.",
      translation: "By thy sanctifying gifts, almighty God, may both our faults be healed, and everlasting remedies come to us."
    }
  },
  "pent-18": {
    collect: {
      latin: "Dírigat corda nostra, quǽsumus, Dómine, tuæ miseratiónis operátio: quia tibi sine te placére non póssumus.",
      translation: "May the working of thy mercy, we beseech thee, O Lord, direct our hearts: for without thee we cannot be pleasing to thee."
    },
    secret: {
      latin: "Deus, qui nos, per hujus sacrifícii veneránda commércia, uníus summæ divinitátis partícipes éfficis: præsta, quǽsumus; ut, sicut tuam cognóscimus veritátem, sic eam dignis móribus assequámur.",
      translation: "O God, who through the venerable exchange of this sacrifice dost make us partakers of thy one supreme divinity: grant, we beseech thee, that as we come to know thy truth, we may attain it by worthy lives."
    },
    postcommunion: {
      latin: "Grátias tibi reférimus, Dómine, sacro múnere vegetáti: tuam misericórdiam deprecántes; ut dignos nos ejus participatióne perfícias.",
      translation: "We give thee thanks, O Lord, refreshed by this sacred gift: beseeching thy mercy, that thou wouldst make us worthy of its partaking."
    }
  },
  "pent-19": {
    collect: {
      latin: "Omnípotens et miséricors Deus, univérsa nobis adversántia propitiátus exclúde: ut mente et córpore páriter expedíti, quæ tua sunt, líberis méntibus exsequámur.",
      translation: "Almighty and merciful God, mercifully shut out from us all things adverse to us: that, unhindered alike in mind and body, we may carry out with unfettered minds the things that are thine."
    },
    secret: {
      latin: "Hæc múnera, quǽsumus, Dómine, quæ óculis tuæ majestátis offérimus, salutária nobis esse concéde.",
      translation: "Grant, we beseech thee, O Lord, that these gifts which we offer before the eyes of thy majesty may be to our salvation."
    },
    postcommunion: {
      latin: "Tua nos, Dómine, medicinális operátio, et a nostris perversitátibus cleménter expédiat, et tuis semper fáciat inhærére mandátis.",
      translation: "May thy healing work, O Lord, mercifully free us from our own perversity, and ever make us cleave to thy commandments."
    }
  },
  "pent-20": {
    collect: {
      latin: "Largíre, quǽsumus, Dómine, fidélibus tuis indulgéntiam placátus et pacem: ut páriter ab ómnibus mundéntur offénsis, et secúra tibi mente desérviant.",
      translation: "Bestow, we beseech thee, O Lord, in thy mercy, pardon and peace upon thy faithful people: that they may alike be cleansed from every offense, and serve thee with untroubled mind."
    },
    secret: {
      latin: "Cœléstem nobis prǽbeant hæc mystéria, quǽsumus, Dómine, medicínam: et vítia nostri cordis expúrgent.",
      translation: "May these mysteries afford us, we beseech thee, O Lord, a heavenly remedy: and purge away the faults of our hearts."
    },
    postcommunion: {
      latin: "Ut sacris, Dómine, reddámur digni munéribus: fac nos, quǽsumus, tuis semper obœdíre mandátis.",
      translation: "That we may be made worthy, O Lord, of thy sacred gifts: grant us, we beseech thee, ever to obey thy commandments."
    }
  },
  "pent-21": {
    collect: {
      latin: "Famíliam tuam, quǽsumus, Dómine, contínua pietáte custódi: ut a cunctis adversitátibus, te protegénte, sit líbera, et in bonis áctibus tuo nómini sit devóta.",
      translation: "Keep thy family, we beseech thee, O Lord, with unceasing kindness: that, under thy protection, it may be free from all adversity, and devoted to thy name in the doing of good works."
    },
    secret: {
      latin: "Suscipe, Dómine, propítius hóstias: quibus et te placári voluísti, et nobis salútem poténti pietáte restítui.",
      translation: "Accept, O Lord, in thy mercy, these offerings: by which thou hast willed both to be appeased, and by thy powerful loving-kindness to restore salvation to us."
    },
    postcommunion: {
      latin: "Immortalitátis alimóniam consecúti, quǽsumus, Dómine: ut, quod ore percépimus, pura mente sectémur.",
      translation: "Having obtained the food of immortality, we beseech thee, O Lord: that what we have received with our mouth, we may follow after with a pure mind."
    }
  },
  "pent-22": {
    collect: {
      latin: "Deus, refúgium nostrum et virtus: adésto piis Ecclésiæ tuæ précibus, auctor ipse pietátis, et præsta; ut, quod fidéliter pétimus, efficáciter consequámur.",
      translation: "O God, our refuge and our strength: be present to the devout prayers of thy Church, thou who art thyself the author of all godliness, and grant that what we faithfully ask we may effectually obtain."
    },
    secret: {
      latin: "Da, miséricors Deus: ut hæc salutáris oblátio et a própriis nos reátibus indesinénter expédiat, et ab ómnibus tueátur advérsis.",
      translation: "Grant, merciful God: that this saving offering may unceasingly free us from our own guilt, and defend us from all adversity."
    },
    postcommunion: {
      latin: "Súmpsimus, Dómine, sacri dona mystérii, humíliter deprecántes: ut, quæ in tui commemoratiónem nos fácere præcepísti, in nostræ profíciant infirmitátis auxílium:",
      translation: "We have received, O Lord, the gifts of this sacred mystery, humbly beseeching thee: that what thou hast commanded us to do in remembrance of thee may avail to the help of our weakness."
    }
  },
  "pent-23": {
    collect: {
      latin: "Absólve, quǽsumus, Dómine, tuórum delícta populórum: ut a peccatórum néxibus, quæ pro nostra fragilitáte contráximus, tua benignitáte liberémur.",
      translation: "Absolve, we beseech thee, O Lord, the offenses of thy people: that by thy goodness we may be freed from the bonds of those sins which through our own frailty we have contracted."
    },
    secret: {
      latin: "Pro nostræ servitútis augménto sacrifícium tibi, Dómine, laudis offérimus: ut, quod imméritis contulísti, propítius exsequáris.",
      translation: "For the increase of our service, we offer thee, O Lord, this sacrifice of praise: that what thou hast bestowed upon the undeserving, thou wouldst mercifully bring to fulfillment."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut, quos divína tríbuis participatióne gaudére, humánis non sinas subjacére perículis.",
      translation: "We beseech thee, almighty God: that thou wouldst not suffer those to whom thou grantest to rejoice in this divine participation, to lie subject to human perils."
    }
  },
  "christ-king": {
    collect: {
      latin: "Omnípotens sempitérne Deus, qui in dilécto Fílio tuo, universórum Rege, ómnia instauráre voluísti: concéde propítius; ut cunctæ famíliæ géntium, peccáti vúlnere disgregátæ, ejus suavissímo subdántur império:",
      translation: "Almighty and everlasting God, who didst will to restore all things in thy beloved Son, the King of all: grant in thy mercy, that all the families of nations, sundered by the wound of sin, may be made subject to his most gentle rule."
    },
    secret: {
      latin: "Hóstiam tibi, Dómine, humánæ reconciliatiónis offérimus: præsta, quǽsumus; ut, quem sacrifíciis præséntibus immolámus, ipse cunctis géntibus unitátis et pacis dona concédat, Jesus Christus Fílius tuus, Dóminus noster:",
      translation: "We offer thee, O Lord, this victim of mankind's reconciliation: grant, we beseech thee; that he whom we immolate in this present sacrifice may himself bestow upon all nations the gifts of unity and peace — even Jesus Christ, thy Son, our Lord."
    },
    postcommunion: {
      latin: "Immortalitátis alimóniam consecúti, quǽsumus, Dómine: ut, qui sub Christi Regis vexíllis militáre gloriámur, cum ipso, in cœlésti sede, júgiter regnáre possímus:",
      translation: "Having obtained the food of immortality, we beseech thee, O Lord: that we who glory to fight beneath the standards of Christ our King, may with him ever reign in his heavenly kingdom."
    }
  },

  "fabian-sebastian": {
    collect: {
      latin: "Infirmitátem nostram réspice, omnípotens Deus: et, quia pondus própriæ actiónis gravat, beatórum Mártyrum tuórum Fabiáni et Sebastiáni intercéssio gloriósa nos prótegat.",
      translation: "Look upon our weakness, almighty God: and, since the weight of our own doing presses us down, may the glorious intercession of thy blessed Martyrs Fabian and Sebastian protect us."
    },
    secret: {
      latin: "Hóstias tibi, Dómine, beatórum Mártyrum tuórum Fabiáni et Sebastiáni dicátas méritis, benígnus assúme: et ad perpétuum nobis tríbue proveníre subsídium.",
      translation: "Graciously accept, O Lord, these offerings dedicated to thee by the merits of thy blessed Martyrs Fabian and Sebastian: and grant that they may prove to us an unfailing help."
    },
    postcommunion: {
      latin: "Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus noster: ut, cujus exséquimur cultum, intercedéntibus sanctis Martýribus tuis Fabiáno et Sebastiáno, sentiámus efféctum.",
      translation: "Refreshed by our partaking of this sacred gift, we beseech thee, O Lord our God: that, through the intercession of thy holy Martyrs Fabian and Sebastian, we may feel the effect of that worship which we perform."
    }
  },

  "candlemas": {
    collect: {
      latin: "Omnípotens sempitérne Deus, majestátem tuam súpplices exorámus: ut, sicut unigénitus Fílius tuus hodiérna die cum nostræ carnis substántia in templo est præsentátus; ita nos fácias purificátis tibi méntibus præsentári.",
      translation: "Almighty and everlasting God, we humbly entreat thy majesty: that, as thine only-begotten Son was this day presented in the temple in the substance of our flesh, so thou wouldst grant that we may be presented unto thee with minds made pure."
    },
    secret: {
      latin: "Exáudi, Dómine, preces nostras: et, ut digna sint múnera, quæ óculis tuæ majestátis offérimus, subsídium nobis tuæ pietátis impénde.",
      translation: "Hear our prayers, O Lord: and, that the gifts which we offer in the sight of thy majesty may be worthy, grant us the help of thy loving-kindness."
    },
    postcommunion: {
      latin: "Quǽsumus, Dómine, Deus noster: ut sacrosáncta mystéria, quæ pro reparatiónis nostræ munímine contulísti, intercedénte beáta María semper Vírgine, et præsens nobis remédium esse fácias et futúrum.",
      translation: "We beseech thee, O Lord our God: that these most holy mysteries, which thou hast bestowed for the safeguard of our restoration, may, through the intercession of blessed Mary ever Virgin, be to us a remedy both for this present life and for that which is to come."
    }
  },

  "seven-founders": {
    collect: {
      latin: "Dómine Jesu Christe, qui, ad recoléndam memóriam dolórum sanctíssimæ Genetrícis tuæ, per septem beátos Patres nova Servórum ejus família Ecclésiam tuam fœcundásti: concéde propítius; ita nos eórum consociári flétibus, ut perfruámur et gáudiis.",
      translation: "O Lord Jesus Christ, who, to renew the memory of the sorrows of thy most holy Mother, didst make thy Church fruitful through seven blessed Fathers with a new family of her Servants: grant in thy mercy, that as we are united to their weeping, we may likewise share in their joys."
    },
    secret: {
      latin: "Accipe, quǽsumus, Dómine, hóstias quas tibi offérimus: et præsta; ut, intercedéntibus Sanctis tuis, libera tibi mente serviámus, et perdoléntis Vírginis Genetrícis Fílii tui amóre inflammémur.",
      translation: "Accept, we beseech thee, O Lord, these offerings which we bring thee: and grant that, through the intercession of thy Saints, we may serve thee with a free mind, and be set aflame with love for the sorrowing Virgin Mother of thy Son."
    },
    postcommunion: {
      latin: "Cœléstibus refécti mystériis te, Dómine, deprecámur: ut, quorum festa percólimus imitántes exémpla; juxta Crucem Jesu cum María Matre ejus fidéliter astémus, et ejúsdem redemptiónis fructum percípere mereámur.",
      translation: "Refreshed by these heavenly mysteries, we beseech thee, O Lord: that, imitating the example of those whose feast we keep, we may stand faithfully beside the Cross of Jesus with Mary his Mother, and may deserve to receive the fruit of that same redemption."
    }
  },

  "matthias": {
    collect: {
      latin: "Deus, qui beátum Matthíam Apostolórum tuórum collégio sociásti: tríbue, quǽsumus; ut, ejus interventióne, tuæ circa nos pietátis semper víscera sentiámus.",
      translation: "O God, who didst join blessed Matthias to the college of thine Apostles: grant, we beseech thee; that, by his intercession, we may ever feel the tender mercy of thy loving-kindness toward us."
    },
    secret: {
      latin: "Hóstias tibi, Dómine, quas nómini tuo sacrándas offérimus, sancti Matthíæ Apóstoli tui prosequátur orátio: per quam nos expiári fácias et deféndi.",
      translation: "May the prayer of thy holy Apostle Matthias attend these offerings, O Lord, which we bring to be consecrated to thy name: that through it thou mayest cause us to be cleansed and defended."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut per hæc sancta, quæ súmpsimus, interveniénte beáto Matthía Apóstolo tuo, véniam consequámur et pacem.",
      translation: "Grant, we beseech thee, almighty God: that through these holy things which we have received, by the intercession of thy blessed Apostle Matthias, we may obtain pardon and peace."
    }
  },

  "joseph": {
    collect: {
      latin: "Sanctíssimæ Genetrícis tuæ Sponsi, quǽsumus, Dómine, méritis adjuvémur: ut, quod possibílitas nostra non óbtinet, ejus nobis intercessióne donétur.",
      translation: "May we be helped, we beseech thee, O Lord, by the merits of the Spouse of thy most holy Mother: that what our own power cannot obtain, may be granted us through his intercession."
    },
    secret: {
      latin: "Débitum tibi, Dómine, nostræ réddimus servitútis, supplíciter exorántes: ut, suffrágiis beáti Joseph, Sponsi Genetrícis Fílii tui Jesu Christi, Dómini nostri, in nobis tua múnera tueáris, ob cujus venerándam festivitátem laudis tibi hóstias immolámus.",
      translation: "We render thee, O Lord, the debt of our service, humbly entreating thee: that, by the prayers of blessed Joseph, the Spouse of the Mother of thy Son Jesus Christ our Lord, thou wouldst guard in us thy gifts, for whose venerable feast we offer thee sacrifices of praise."
    },
    postcommunion: {
      latin: "Adésto nobis, quǽsumus, miséricors Deus: et, intercedénte pro nobis beáto Joseph Confessóre, tua circa nos propitiátus dona custódi.",
      translation: "Be present with us, we beseech thee, merciful God: and, with blessed Joseph the Confessor interceding for us, graciously guard thy gifts within us."
    }
  },

  "annunciation": {
    collect: {
      latin: "Deus, qui de beátæ Maríæ Vírginis útero Verbum tuum, Angelo nuntiánte, carnem suscípere voluísti: præsta supplícibus tuis; ut, qui vere eam Genetrícem Dei crédimus, ejus apud te intercessiónibus adjuvémur.",
      translation: "O God, who didst will that thy Word should take flesh, at the message of an Angel, in the womb of the blessed Virgin Mary: grant to us thy suppliants; that we who believe her to be truly the Mother of God, may be helped by her intercession with thee."
    },
    secret: {
      latin: "In méntibus nostris, quǽsumus, Dómine, veræ fídei sacraménta confírma: ut, qui concéptum de Vírgine Deum verum et hóminem confitémur; per ejus salutíferæ resurrectiónis poténtiam, ad ætérnam mereámur perveníre lætítiam.",
      translation: "Confirm in our hearts, we beseech thee, O Lord, the mysteries of the true faith: that we who confess him conceived of the Virgin to be true God and true man, may, through the power of his saving resurrection, deserve to come to eternal joy."
    },
    postcommunion: {
      latin: "Grátiam tuam, quǽsumus, Dómine, méntibus nostris infúnde: ut qui, Angelo nuntiánte, Christi Fílii tui incarnatiónem cognóvimus; per passiónem ejus et crucem, ad resurrectiónis glóriam perducámur.",
      translation: "Pour forth, we beseech thee, O Lord, thy grace into our hearts: that we who have known the incarnation of Christ thy Son, at the message of an Angel, may, through his passion and cross, be brought to the glory of his resurrection."
    }
  },

  "boniface": {
    collect: {
      latin: "Deus, qui multitúdinem populórum, beáti Bonifátii Mártyris tui atque Pontíficis zelo, ad agnitiónem tui nóminis vocáre dignátus es: concéde propítius; ut, cujus sollémnia cólimus, étiam patrocínia sentiámus.",
      translation: "O God, who didst vouchsafe to call a multitude of peoples to the knowledge of thy name through the zeal of blessed Boniface, thy Martyr and Bishop: grant in thy mercy, that we who keep his feast may also feel his patronage."
    },
    secret: {
      latin: "Super has hóstias, Dómine, quǽsumus, benedíctio copiósa descéndat: quæ et sanctificatiónem nostram misericórditer operátur; et de sancti Bonifátii Mártyris tui atque Pontíficis fáciat sollemnitáte gaudére.",
      translation: "May a bountiful blessing, we beseech thee, O Lord, descend upon these offerings: which may mercifully work our sanctification, and make us rejoice in the solemn feast of thy holy Martyr and Bishop Boniface."
    },
    postcommunion: {
      latin: "Sanctificáti, Dómine, salutári mystério: quǽsumus; ut nobis sancti Bonifátii Mártyris tui atque Pontíficis pia non desit orátio, cujus nos donásti patrocínio gubernári.",
      translation: "Sanctified, O Lord, by this saving mystery: we beseech thee, that the loving prayer of thy holy Martyr and Bishop Boniface may not fail us, by whose patronage thou hast granted us to be governed."
    }
  },

  "barnabas": {
    collect: {
      latin: "Deus, qui nos beáti Bárnabæ Apóstoli tui méritis et intercessióne lætíficas: concéde propítius; ut, qui tua per eum benefícia póscimus, dono tuæ grátiæ consequámur.",
      translation: "O God, who dost gladden us by the merits and intercession of blessed Barnabas thine Apostle: grant in thy mercy, that we who ask thy blessings through him may obtain them by the gift of thy grace."
    },
    secret: {
      latin: "Múnera, Dómine, obláta sanctífica, et, intercedénte beáto Bárnaba Apóstolo tuo, nos per hæc a peccatórum nostrórum máculis emúnda.",
      translation: "Sanctify, O Lord, the gifts here offered, and, through the intercession of thy blessed Apostle Barnabas, cleanse us thereby from the stains of our sins."
    },
    postcommunion: {
      latin: "Súpplices te rogámus, omnípotens Deus: ut, quos tuis réficis sacraméntis, intercedénte beáto Bárnaba Apóstolo tuo, tibi étiam plácitis móribus dignánter tríbuas deservíre.",
      translation: "We humbly beseech thee, almighty God: that those whom thou dost refresh with thy sacraments, thou wouldst, through the intercession of thy blessed Apostle Barnabas, graciously grant to serve thee also with lives pleasing to thee."
    }
  },

  "john-baptist-vigil": {
    collect: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut família tua per viam salútis incédat; et, beáti Joánnis Præcursóris hortaménta sectándo ad eum, quem prædíxit, secúra pervéniat, Dóminum nostrum Jesum Christum, Fílium tuum.",
      translation: "Grant, we beseech thee, almighty God: that thy family may walk in the way of salvation; and, following the exhortations of blessed John the Forerunner, may come in safety to him whom he foretold, our Lord Jesus Christ, thy Son."
    },
    secret: {
      latin: "Múnera, Dómine, obláta sanctífica: et, intercedénte beáto Joánne Baptista, nos per hæc a peccatórum nostrórum máculis emúnda.",
      translation: "Sanctify, O Lord, the gifts here offered: and, through the intercession of blessed John the Baptist, cleanse us thereby from the stains of our sins."
    },
    postcommunion: {
      latin: "Beáti Joánnis Baptístæ nos, Dómine, præclára comitétur orátio: et, quem ventúrum esse prædíxit, poscat nobis fore placátum, Dóminum nostrum Jesum Christum, Fílium tuum.",
      translation: "May the glorious prayer of blessed John the Baptist accompany us, O Lord: and may he, who foretold his coming, entreat that he be favorable to us — our Lord Jesus Christ, thy Son."
    }
  },

  "john-baptist": {
    collect: {
      latin: "Deus, qui præséntem diem honorábilem nobis in beáti Joánnis nativitáte fecísti: da pópulis tuis spirituálium grátiam gaudiórum; et ómnium fidélium mentes dirige in viam salútis ætérnæ.",
      translation: "O God, who hast made this present day honorable to us in the nativity of blessed John: grant thy peoples the grace of spiritual joys; and direct the minds of all the faithful into the way of everlasting salvation."
    },
    secret: {
      latin: "Tua, Dómine, munéribus altária cumulámus: illíus nativitátem honóre débito celebrántes, qui Salvatórem mundi et cécinit ad futúrum et adésse monstrávit, Dóminum nostrum Jesum Christum, Fílium tuum.",
      translation: "We heap thine altars, O Lord, with gifts: celebrating with due honor the nativity of him who both foretold the Savior of the world as yet to come, and showed him now present — our Lord Jesus Christ, thy Son."
    },
    postcommunion: {
      latin: "Sumat Ecclésia tua, Deus, beáti Joánnis Baptístæ generatióne lætítiam: per quem suæ regeneratiónis cognóvit auctórem, Dóminum nostrum Jesum Christum, Fílium tuum.",
      translation: "May thy Church, O God, take joy in the birth of blessed John the Baptist: through whom she came to know the author of her own regeneration, our Lord Jesus Christ, thy Son."
    }
  },

  "peter-paul": {
    collect: {
      latin: "Deus, qui hodiérnam diem Apostolórum tuórum Petri et Pauli martýrio consecrásti: da Ecclésiæ tuæ, eórum in ómnibus sequi præcéptum; per quos religiónis sumpsit exórdium.",
      translation: "O God, who hast consecrated this day by the martyrdom of thine Apostles Peter and Paul: grant thy Church ever to follow the precept of those through whom she received the beginning of her religion."
    },
    secret: {
      latin: "Hóstias, Dómine, quas nómini tuo sacrándas offérimus, apostólica prosequátur orátio: per quam nos expiári tríbuas et deféndi.",
      translation: "May the prayer of thine Apostles attend these offerings, O Lord, which we bring to be consecrated to thy name: that through it thou mayest grant us to be cleansed and defended."
    },
    postcommunion: {
      latin: "Quos cœlésti, Dómine, aliménto satiásti: apostólicis intercessiónibus ab omni adversitáte custódi.",
      translation: "Those whom thou hast satisfied with heavenly food, O Lord: guard by the intercession of thine Apostles from every adversity."
    }
  },

  "peter-paul-vigil": {
    collect: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut nullis nos permíttas perturbatiónibus cóncuti; quos in apostólicæ confessiónis petra solidásti.",
      translation: "Grant, we beseech thee, almighty God: that thou wouldst not suffer us to be shaken by any disturbances, whom thou hast made firm upon the rock of the apostolic confession."
    },
    secret: {
      latin: "Munus pópuli tui, quǽsumus, Dómine, apostólica intercessióne sanctífica: nosque a peccatórum nostrórum máculis emúnda.",
      translation: "Sanctify, we beseech thee, O Lord, the offering of thy people by the intercession of thine Apostles: and cleanse us from the stains of our sins."
    },
    postcommunion: {
      latin: "Quos cœlésti, Dómine, aliménto satiásti: apostólicis intercessiónibus ab omni adversitáte custódi.",
      translation: "Those whom thou hast satisfied with heavenly food, O Lord: guard by the intercession of thine Apostles from every adversity."
    }
  },

  "visitation": {
    collect: {
      latin: "Fámulis tuis, quǽsumus, Dómine, cœléstis grátiæ munus impertíre: ut, quibus beátæ Vírginis partus éxstitit salútis exórdium; Visitatiónis ejus votíva sollémnitas, pacis tríbuat increméntum.",
      translation: "Impart, we beseech thee, O Lord, the gift of heavenly grace to thy servants: that, to whom the childbearing of the blessed Virgin was the beginning of salvation, the votive solemnity of her Visitation may grant an increase of peace."
    },
    secret: {
      latin: "Unigéniti tui, Dómine, nobis succúrrat humánitas: ut, qui, natus de Vírgine, Matris integritátem non mínuit, sed sacrávit; in Visitatiónis ejus sollémniis, nostris nos piáculis éxuens, oblatiónem nostram tibi fáciat accéptam Jesus Christus, Dóminus noster.",
      translation: "May the humanity of thine only-begotten Son, O Lord, come to our aid: that he, who, born of the Virgin, did not diminish but consecrated his Mother's purity, may, on the solemnity of her Visitation, strip us of our offenses and make our offering acceptable to thee — even Jesus Christ our Lord."
    },
    postcommunion: {
      latin: "Súmpsimus, Dómine, celebritátis ánnuæ votíva sacraménta: præsta, quǽsumus; ut et temporális vitæ nobis remédia prǽbeant et ætérnæ.",
      translation: "We have received, O Lord, the votive sacraments of this yearly feast: grant, we beseech thee; that they may afford us remedies both for this present life and for that which is everlasting."
    }
  },

  "james-apostle": {
    collect: {
      latin: "Esto, Dómine, plebi tuæ sanctificátor et custos: ut, Apóstoli tui Jacóbi muníta præsídiis, et conversatióne tibi pláceat, et secúra mente desérviat.",
      translation: "Be thou, O Lord, the sanctifier and guardian of thy people: that, fortified by the protection of thine Apostle James, it may please thee by its manner of life, and serve thee with a mind secure."
    },
    secret: {
      latin: "Oblatiónes pópuli tui, quǽsumus, Dómine, beáti Jacóbi Apóstoli pássio beáta concíliet: et, quæ nostris non aptæ sunt méritis, fiant tibi plácitæ ejus deprecatióne.",
      translation: "May the blessed passion of blessed James the Apostle commend the offerings of thy people, we beseech thee, O Lord: and may that which is unfitted to our own merits become pleasing to thee through his intercession."
    },
    postcommunion: {
      latin: "Beáti Apóstoli tui Jacóbi, quǽsumus, Dómine, intercessióne nos ádjuva: pro cujus festivitáte percépimus tua sancta lætántes.",
      translation: "Help us, we beseech thee, O Lord, by the intercession of thy blessed Apostle James: for whose feast we have received thy holy gifts with rejoicing."
    }
  },

  "abdon-sennen": {
    collect: {
      latin: "Deus, qui sanctis tuis Abdon et Sennen ad hanc glóriam veniéndi copiósum munus grátiæ contulísti: da fámulis tuis suórum véniam peccatórum; ut, Sanctórum tuórum intercedéntibus méritis, ab ómnibus mereántur adversitátibus liberári.",
      translation: "O God, who didst bestow on thy Saints Abdon and Sennen an abundant gift of grace to come to this glory: grant thy servants pardon for their sins; that, by the intercession of the merits of thy Saints, they may deserve to be delivered from all adversities."
    },
    secret: {
      latin: "Hæc hóstia, quǽsumus, Dómine, quam sanctórum Mártyrum tuórum natalítia recenséntes offérimus: et víncula nostræ pravitátis absólvat, et tuæ nobis misericórdiæ dona concíliet.",
      translation: "May this offering, we beseech thee, O Lord, which we present in commemoration of the birthday of thy holy Martyrs, both loose the bonds of our wickedness, and win for us the gifts of thy mercy."
    },
    postcommunion: {
      latin: "Per hujus, Dómine, operatiónem mystérii, et vítia nostra purgéntur: et, intercedéntibus sanctis Martýribus tuis Abdon et Sennen, justa desidéria compleántur.",
      translation: "By the working of this mystery, O Lord, may our sins be purged: and, through the intercession of thy holy Martyrs Abdon and Sennen, may our righteous desires be fulfilled."
    }
  },

  "transfiguration": {
    collect: {
      latin: "Deus, qui fídei sacraménta in Unigéniti tui gloriósa Transfiguratióne patrum testimónio roborásti, et adoptiónem filiórum perféctam, voce delápsa in nube lúcida, mirabíliter præsignásti: concéde propítius; ut ipsíus Regis glóriæ nos coherédes effícias, et ejúsdem glóriæ tríbuas esse consórtes.",
      translation: "O God, who in the glorious Transfiguration of thine only-begotten Son didst confirm the mysteries of the faith by the witness of the fathers, and didst wondrously foreshow the perfect adoption of sons by a voice that came down out of the bright cloud: grant in thy mercy, that thou wouldst make us coheirs with that King of glory, and grant us to be partakers of that same glory."
    },
    secret: {
      latin: "Obláta, quǽsumus, Dómine, múnera gloriósa Unigéniti tui Transfiguratióne sanctífica: nosque a peccatórum máculis, splendóribus ipsíus illustratiónis emúnda.",
      translation: "Sanctify, we beseech thee, O Lord, these offerings by the glorious Transfiguration of thine only-begotten Son: and cleanse us from the stains of sin by the splendors of that same brightness."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut sacrosáncta Fílii tui Transfiguratiónis mystéria, quæ sollemni celebrámus offício, purificáta mentis intellegéntia consequámur.",
      translation: "Grant, we beseech thee, almighty God: that we may attain, with a mind purified in understanding, the most holy mysteries of the Transfiguration of thy Son, which we celebrate with this solemn office."
    }
  },

  "lawrence": {
    collect: {
      latin: "Da nobis, quǽsumus, omnípotens Deus: vitiórum nostrórum flammas exstínguere; qui beáto Lauréntio tribuísti tormentórum suórum incéndia superáre.",
      translation: "Grant us, we beseech thee, almighty God: to extinguish the flames of our vices; who didst grant blessed Lawrence to overcome the flames of his torments."
    },
    secret: {
      latin: "Accipe, quǽsumus, Dómine, múnera dignánter obláta: et, beáti Lauréntii suffragántibus méritis, ad nostræ salútis auxílium proveníre concéde.",
      translation: "Accept, we beseech thee, O Lord, these gifts worthily offered: and, by the favoring merits of blessed Lawrence, grant that they may avail for the help of our salvation."
    },
    postcommunion: {
      latin: "Sacro múnere satiáti, súpplices te, Dómine, deprecámur: ut, quod débitæ servitútis celebrámus offício, intercedénte beáto Lauréntio Mártyre tuo, salvatiónis tuæ sentiámus augméntum.",
      translation: "Filled with this sacred gift, we humbly beseech thee, O Lord: that what we celebrate in the office of our bounden service, we may, through the intercession of thy blessed Martyr Lawrence, feel to be an increase of thy salvation."
    }
  },

  "assumption-vigil": {
    collect: {
      latin: "Deus, qui virginálem aulam beátæ Maríæ, in qua habitáres, elígere dignátus es: da, quǽsumus; ut, sua nos defensióne munítos, jucúndos fácias suæ interésse festivitáti.",
      translation: "O God, who didst vouchsafe to choose the virginal court of blessed Mary, wherein thou wouldst dwell: grant, we beseech thee; that, fortified by her protection, thou wouldst make us glad to share in her festivity."
    },
    secret: {
      latin: "Múnera nostra, Dómine, apud cleméntiam tuam Dei Genetrícis comméndet orátio: quam idcírco de præsénti sǽculo transtulísti; ut pro peccátis nostris apud te fiduciáliter intercédat.",
      translation: "May the prayer of the Mother of God commend our offerings before thy clemency, O Lord: whom thou didst for that very cause translate out of this present world; that she might confidently intercede with thee for our sins."
    },
    postcommunion: {
      latin: "Concéde, miséricors Deus, fragilitáti nostræ præsídium: ut, qui sanctæ Dei Genetrícis festivitátem prævenímus; intercessiónis ejus auxílio a nostris iniquitátibus resurgámus.",
      translation: "Grant, merciful God, a defense to our weakness: that we who anticipate the feast of the holy Mother of God, may, by the help of her intercession, rise again from our iniquities."
    }
  },

  "assumption": {
    collect: {
      latin: "Omnípotens sempitérne Deus, qui Immaculátam Vírginem Maríam, Fílii tui Genetrícem, córpore et ánima ad cœléstem glóriam assumpsísti: concéde, quǽsumus; ut, ad supérna semper inténti, ipsíus glóriæ mereámur esse consórtes.",
      translation: "Almighty and everlasting God, who didst assume the Immaculate Virgin Mary, Mother of thy Son, body and soul into heavenly glory: grant, we beseech thee; that, ever intent upon the things above, we may deserve to be partakers of that same glory."
    },
    secret: {
      latin: "Ascéndat ad te, Dómine, nostræ devotiónis oblátio, et, beatíssima Vírgine María in cœlum assúmpta intercedénte, corda nostra, caritátis igne succénsa, ad te júgiter ádspirent.",
      translation: "May the offering of our devotion ascend to thee, O Lord, and, with the most blessed Virgin Mary, assumed into heaven, interceding, may our hearts, kindled with the fire of charity, ever aspire to thee."
    },
    postcommunion: {
      latin: "Sumptis, Dómine, salutáribus sacraméntis: da, quǽsumus; ut, méritis et intercessióne beátæ Vírginis Maríæ in cœlum assúmptæ, ad resurrectiónis glóriam perducámur.",
      translation: "Having received, O Lord, these saving sacraments: grant, we beseech thee; that, by the merits and intercession of the blessed Virgin Mary assumed into heaven, we may be brought to the glory of the resurrection."
    }
  },

  "bartholomew": {
    collect: {
      latin: "Omnípotens sempitérne Deus, qui hujus diei venerándam sanctámque lætítiam in beáti Apóstoli tui Bartholomǽi festivitáte tribuísti: da Ecclésiæ tuæ, quǽsumus; et amáre quod crédidit, et prædicáre quod dócuit.",
      translation: "Almighty and everlasting God, who hast granted the venerable and holy joy of this day in the feast of thy blessed Apostle Bartholomew: grant thy Church, we beseech thee, both to love what he believed, and to preach what he taught."
    },
    secret: {
      latin: "Beáti Apóstoli tui Bartholomǽi sollémnia recenséntes, quǽsumus, Dómine: ut ejus auxílio tua benefícia capiámus, pro quo tibi laudis hóstias immolámus.",
      translation: "As we commemorate the solemnity of thy blessed Apostle Bartholomew, we beseech thee, O Lord: that by his help we may receive thy blessings, for whom we offer thee sacrifices of praise."
    },
    postcommunion: {
      latin: "Sumptum, Dómine, pignus redemptiónis ætérnæ: sit nobis, quǽsumus; interveniénte beáto Bartholomǽo Apóstolo tuo, vitæ præséntis auxílium páriter et futúræ.",
      translation: "May this pledge of eternal redemption which we have received, O Lord, be to us, we beseech thee, through the intercession of thy blessed Apostle Bartholomew, a help alike for this present life and for that which is to come."
    }
  },

  "nativity-mary": {
    collect: {
      latin: "Fámulis tuis, quǽsumus, Dómine, cœléstis grátiæ munus impertíre: ut, quibus beátæ Vírginis partus éxstitit salútis exórdium; Nativitátis ejus votíva sollémnitas pacis tríbuat increméntum.",
      translation: "Impart, we beseech thee, O Lord, the gift of heavenly grace to thy servants: that, to whom the childbearing of the blessed Virgin was the beginning of salvation, the votive solemnity of her Nativity may grant an increase of peace."
    },
    secret: {
      latin: "Unigéniti tui, Dómine, nobis succúrrat humánitas: ut, qui natus de Vírgine, matris integritátem non mínuit, sed sacrávit; in Nativitátis ejus sollémniis, nostris nos piáculis éxuens, oblatiónem nostram tibi fáciat accéptam Jesus Christus, Dóminus noster.",
      translation: "May the humanity of thine only-begotten Son, O Lord, come to our aid: that he, who, born of the Virgin, did not diminish but consecrated his Mother's purity, may, on the solemnity of her Nativity, strip us of our offenses and make our offering acceptable to thee — even Jesus Christ our Lord."
    },
    postcommunion: {
      latin: "Súmpsimus, Dómine, celebritátis ánnuæ votíva sacraménta: præsta, quǽsumus; ut et temporális vitæ nobis remédia prǽbeant et ætérnæ.",
      translation: "We have received, O Lord, the votive sacraments of this yearly feast: grant, we beseech thee; that they may afford us remedies both for this present life and for that which is everlasting."
    }
  },

  "triumph-cross": {
    collect: {
      latin: "Deus, qui nos hodiérna die Exaltatiónis sanctæ Crucis ánnua sollemnitáte lætíficas: præsta, quǽsumus; ut, cujus mystérium in terra cognóvimus, ejus redemptiónis prǽmia in cœlo mereámur.",
      translation: "O God, who dost gladden us this day with the yearly solemnity of the Exaltation of the holy Cross: grant, we beseech thee; that we who have known its mystery on earth, may deserve to obtain the rewards of its redemption in heaven."
    },
    secret: {
      latin: "Jesu Christi, Dómini nostri, Córpore et Sánguine saginándi, per quem Crucis est sanctificátum vexíllum: quǽsumus, Dómine, Deus noster; ut, sicut illud adoráre merúimus, ita perénniter ejus glóriæ salutáris potiámur efféctu.",
      translation: "About to be nourished by the Body and Blood of Jesus Christ our Lord, by whom the standard of the Cross was sanctified: we beseech thee, O Lord our God; that, as we have deserved to adore it, so we may forever enjoy the effect of its saving glory."
    },
    postcommunion: {
      latin: "Adésto nobis, Dómine, Deus noster: et, quos sanctæ Crucis lætári facis honóre, ejus quoque perpétuis defénde subsídiis.",
      translation: "Be present with us, O Lord our God: and defend with its perpetual aid those whom thou makest to rejoice in the honor of the holy Cross."
    }
  },

  "sorrows": {
    collect: {
      latin: "Deus, in cujus passióne, secúndum Simeónis prophetíam, dulcíssimam ánimam gloriósæ Vírginis et Matris Maríæ dolóris gladius pertransívit: concéde propítius; ut, qui transfixiónem ejus et passiónem venerándo recólimus, gloriósis méritis et précibus ómnium Sanctórum Cruci fidéliter astántium intercedéntibus, passiónis tuæ efféctum felícem consequámur.",
      translation: "O God, in whose Passion, according to the prophecy of Simeon, a sword of sorrow pierced through the most sweet soul of the glorious Virgin and Mother Mary: grant in thy mercy; that we who, in venerating, call to mind her transfixion and passion, may, through the glorious merits and prayers of all the Saints who stood faithfully beside the Cross interceding, obtain the happy effect of thy Passion."
    },
    secret: {
      latin: "Offérimus tibi preces et hóstias, Dómine Jesu Christe, humíliter supplicántes: ut, qui Transfixiónem dulcíssimi spíritus beátæ Maríæ, Matris tuæ, précibus recensémus; suo suorúmque sub Cruce Sanctórum consórtium multiplicáto piíssimo intervéntu, méritis mortis tuæ, méritum cum beátis habeámus.",
      translation: "We offer thee prayers and offerings, O Lord Jesus Christ, humbly entreating: that we who in our prayers call to mind the transfixion of the most sweet soul of blessed Mary thy Mother, may, through her manifold and most loving intercession together with that of the company of Saints who stood beneath the Cross, share by the merits of thy death a portion with the blessed."
    },
    postcommunion: {
      latin: "Sacrifícia, quæ súmpsimus, Dómine Jesu Christe, Transfixiónem Matris tuæ et Vírginis devóte celebrántes: nobis ímpetrent apud cleméntiam tuam omnis boni salutáris efféctum.",
      translation: "May the sacrifices which we have received, O Lord Jesus Christ, as we devoutly celebrate the transfixion of thy Virgin Mother, obtain for us before thy clemency the saving effect of every good."
    }
  },

  "matthew": {
    collect: {
      latin: "Beáti Apóstoli et Evangelístæ Matthǽi, Dómine, précibus adjuvémur: ut, quod possibílitas nostra non óbtinet, ejus nobis intercessióne donétur.",
      translation: "May we be helped, O Lord, by the prayers of blessed Matthew, Apostle and Evangelist: that what our own power cannot obtain, may be granted us through his intercession."
    },
    secret: {
      latin: "Supplicatiónibus beáti Matthǽi Apóstoli et Evangelístæ, quǽsumus, Dómine, Ecclésiæ tuæ commendétur oblátio: cujus magníficis prædicatiónibus erúditur.",
      translation: "May the offering of thy Church, we beseech thee, O Lord, be commended by the supplications of blessed Matthew, Apostle and Evangelist: by whose glorious preaching she is instructed."
    },
    postcommunion: {
      latin: "Percéptis, Dómine, sacraméntis, beáto Matthǽo Apóstolo tuo et Evangelísta interveniénte, deprecámur: ut, quæ pro ejus celebráta sunt glória, nobis profíciant ad medélam.",
      translation: "Having received these sacraments, O Lord, we beseech thee, with thy blessed Apostle and Evangelist Matthew interceding: that what has been celebrated in his glory may avail unto our healing."
    }
  },

  "archangels": {
    collect: {
      latin: "Deus, qui, miro ordine, Angelórum ministéria hominúmque dispénsas: concéde propítius; ut, a quibus tibi ministrántibus in cœlo semper assístitur, ab his in terra vita nostra muniátur.",
      translation: "O God, who in wondrous order dost dispense the ministries both of Angels and of men: grant in thy mercy; that our life on earth may be guarded by those who ever stand ministering to thee in heaven."
    },
    secret: {
      latin: "Hóstias tibi, Dómine, laudis offérimus, supplíciter deprecántes: ut eásdem, angélico pro nobis interveniénte suffrágio, et placátus accípias, et ad salútem nostram proveníre concédas.",
      translation: "We offer thee, O Lord, sacrifices of praise, humbly entreating: that thou, being appeased by the angelic intercession offered on our behalf, wouldst both accept them, and grant that they avail for our salvation."
    },
    postcommunion: {
      latin: "Beáti Archángeli tui Michaélis intercessióne suffúlti: súpplices te, Dómine, deprecámur; ut, quod ore proséquimur, contingámus et mente.",
      translation: "Upheld by the intercession of thy blessed Archangel Michael: we humbly beseech thee, O Lord; that we may attain in mind what we pursue with our lips."
    }
  },

  "luke": {
    collect: {
      latin: "Intervéniat pro nobis, quǽsumus, Dómine, sanctus tuus Lucas Evangelísta: qui crucis mortificatiónem júgiter in suo córpore, pro tui nóminis honóre, portávit.",
      translation: "May thy holy Evangelist Luke intercede for us, we beseech thee, O Lord: who continually bore in his body the mortification of the cross, for the honor of thy name."
    },
    secret: {
      latin: "Donis cœléstibus da nobis, quǽsumus, Dómine, líbera tibi mente servíre: ut múnera quæ deférimus, interveniénte beáto Evangelísta tuo Luca, et medélam nobis operéntur et glóriam.",
      translation: "Grant us, we beseech thee, O Lord, to serve thee with a free mind for these heavenly gifts: that the offerings which we present, through the intercession of thy blessed Evangelist Luke, may work in us both healing and glory."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut, quod de sancto altári tuo accépimus, précibus beáti Evangelístæ tui Lucæ, sanctíficet ánimas nostras, per quod tuti esse possímus.",
      translation: "Grant, we beseech thee, almighty God: that what we have received from thy holy altar may, through the prayers of thy blessed Evangelist Luke, sanctify our souls, whereby we may be kept safe."
    }
  },

  "simon-jude": {
    collect: {
      latin: "Deus, qui nos per beátos Apóstolos tuos Simónem et Judam ad agnitiónem tui nóminis veníre tribuísti: da nobis eórum glóriam sempitérnam et proficiéndo celebráre, et celebrándo profícere.",
      translation: "O God, who didst grant us, through thy blessed Apostles Simon and Jude, to come to the knowledge of thy name: grant us to celebrate their everlasting glory by growing in virtue, and to grow in virtue by celebrating it."
    },
    secret: {
      latin: "Glóriam, Dómine, sanctórum Apostolórum tuórum Simónis et Judæ perpétuam venerántes: quǽsumus; ut eam, sacris mystériis expiáti, dígnius celebrémus.",
      translation: "As we venerate the everlasting glory of thy holy Apostles Simon and Jude, O Lord: we beseech thee; that, cleansed by these sacred mysteries, we may celebrate it more worthily."
    },
    postcommunion: {
      latin: "Percéptis, Dómine, sacraméntis, supplíciter exorámus: ut, intercedéntibus beátis Apóstolis tuis Simóne et Juda, quæ pro illórum veneránda gérimus passióne, nobis profíciant ad medélam.",
      translation: "Having received these sacraments, O Lord, we humbly entreat: that, through the intercession of thy blessed Apostles Simon and Jude, what we perform in veneration of their passion may avail unto our healing."
    }
  },

  "all-saints": {
    collect: {
      latin: "Omnípotens sempitérne Deus, qui nos ómnium Sanctórum tuórum mérita sub una tribuísti celebritáte venerári: quǽsumus; ut desiderátam nobis tuæ propitiatiónis abundántiam, multiplicátis intercessóribus, largiáris.",
      translation: "Almighty and everlasting God, who hast granted us to venerate in one festival the merits of all thy Saints: we beseech thee; that, through the multitude of our intercessors, thou wouldst bestow upon us the longed-for abundance of thy mercy."
    },
    secret: {
      latin: "Múnera tibi, Dómine, nostra devotiónis offérimus: quæ et pro tuórum tibi grata sint honóre Justórum, et nobis salutária, te miseránte, reddántur.",
      translation: "We offer thee, O Lord, these gifts of our devotion: which may both be acceptable to thee in honor of thy just ones, and, by thy mercy, be made unto us a means of salvation."
    },
    postcommunion: {
      latin: "Da, quǽsumus, Dómine, fidélibus pópulis ómnium Sanctórum semper veneratióne lætári: et eórum perpétua supplicatióne muníri.",
      translation: "Grant, we beseech thee, O Lord, that thy faithful people may ever rejoice in the veneration of all thy Saints: and be fortified by their perpetual supplication."
    }
  },

  "requiem": {
    collect: {
      latin: "Fidélium, Deus, ómnium Cónditor et Redémptor: animábus famulórum famularúmque tuárum remissiónem cunctórum tríbue peccatórum; ut indulgéntiam, quam semper optavérunt, piis supplicatiónibus consequántur.",
      translation: "O God, the Creator and Redeemer of all the faithful: grant to the souls of thy servants and handmaids the remission of all their sins; that through our devout supplications they may obtain the pardon which they have always desired."
    },
    secret: {
      latin: "Hóstias, quǽsumus, Dómine, quas tibi pro animábus famulórum famularúmque tuárum offérimus, propitiátus inténde: ut, quibus fídei christiánæ méritum contulísti, dones et prǽmium.",
      translation: "Look with favor, we beseech thee, O Lord, upon the offerings which we bring thee for the souls of thy servants and handmaids: that to those on whom thou hast bestowed the merit of the Christian faith, thou wouldst also grant its reward."
    },
    postcommunion: {
      latin: "Animábus, quǽsumus, Dómine, famulórum famularúmque tuárum orátio profíciat supplicántium: ut eas et a peccátis ómnibus éxuas, et tuæ redemptiónis fácias esse partícipes.",
      translation: "May the prayer of thy suppliants, we beseech thee, O Lord, avail for the souls of thy servants and handmaids: that thou wouldst strip them of all their sins, and make them partakers of thy redemption."
    }
  },

  "dedication-lateran": {
    collect: {
      latin: "Deus, qui nobis per síngulos annos hujus sancti templi tui consecratiónis réparas diem, et sacris semper mystériis repæséntas incólumes: exáudi preces pópuli tui, et præsta; ut, quisquis hoc templum benefícia petitúrus ingréditur, cuncta se impetrásse lætétur.",
      translation: "O God, who dost renew for us year by year the day of the consecration of this thy holy temple, and dost ever bring us back unharmed to these sacred mysteries: hear the prayers of thy people, and grant; that whosoever enters this temple to seek thy blessings, may rejoice that he has obtained them all."
    },
    secret: {
      latin: "Annue, quǽsumus, Dómine, précibus nostris: ut, dum hæc vota præséntia réddimus, ad ætérna prǽmia, te adjuvánte, perveníre mereámur.",
      translation: "Grant, we beseech thee, O Lord, our prayers: that, while we render these present vows, we may, with thy help, deserve to come to everlasting rewards."
    },
    postcommunion: {
      latin: "Deus, qui de vivis et eléctis lapídibus ætérnum majestáti tuæ prǽparas habitáculum: auxiliáre pópulo tuo supplicánti; ut, quod Ecclésiæ tuæ corporálibus próficit spátiis, spirituálibus amplificétur augméntis.",
      translation: "O God, who out of living and chosen stones dost prepare an everlasting dwelling for thy majesty: help thy suppliant people; that what profits thy Church by an increase of material extent, may be enlarged by spiritual growth."
    }
  },

  "josaphat": {
    collect: {
      latin: "Excita, quǽsumus, Dómine, in Ecclésia tua Spíritum, quo replétus beátus Jósaphat Martyr et Póntifex tuus ánimam suam pro óvibus pósuit: ut, eo intercedénte, nos quoque eódem Spíritu moti ac roboráti, ánimam nostram pro frátribus pónere non vereámur.",
      translation: "Stir up in thy Church, we beseech thee, O Lord, the Spirit with which, being filled, thy blessed Martyr and Bishop Josaphat laid down his life for his sheep: that, by his intercession, we too, moved and strengthened by that same Spirit, may not fear to lay down our lives for our brethren."
    },
    secret: {
      latin: "Clementíssime Deus, múnera hæc tua benedictióne perfúnde, et nos in fide confírma: quam sanctus Jósaphat Martyr et Póntifex tuus, effúso sánguine, asséruit.",
      translation: "Most merciful God, pour forth thy blessing upon these gifts, and confirm us in that faith which thy holy Martyr and Bishop Josaphat maintained by the shedding of his blood."
    },
    postcommunion: {
      latin: "Spíritum, Dómine, fortitúdinis hæc nobis tríbuat mensa cœléstis: quæ sancti Jósaphat Mártyris tui atque Pontíficis vitam pro Ecclésiæ honóre júgiter áluit ad victóriam.",
      translation: "May this heavenly table grant us, O Lord, the spirit of fortitude: that same table which continually nourished the life of thy holy Martyr and Bishop Josaphat unto victory, for the honor of the Church."
    }
  },

  "andrew": {
    collect: {
      latin: "Majestátem tuam, Dómine, supplíciter exorámus: ut, sicut Ecclésiæ tuæ beátus Andréas Apóstolus éxstitit prædicátor et rector; ita apud te sit pro nobis perpétuus intercéssor.",
      translation: "We humbly beseech thy majesty, O Lord: that, as blessed Andrew the Apostle was a preacher and ruler to thy Church, so he may be for us a perpetual intercessor with thee."
    },
    secret: {
      latin: "Sacrifícium nostrum tibi, Dómine, quǽsumus, beáti Andréæ Apóstoli precátio sancta concíliet: ut, in cujus honóre sollémniter exhibétur, ejus méritis efficiátur accéptum.",
      translation: "May the holy prayer of blessed Andrew the Apostle commend our sacrifice to thee, we beseech thee, O Lord: that it may be made acceptable by the merits of him in whose honor it is solemnly offered."
    },
    postcommunion: {
      latin: "Súmpsimus, Dómine, divína mystéria, beáti Andréæ Apóstoli festivitáte lætántes: quæ, sicut tuis Sanctis ad glóriam, ita nobis, quǽsumus, ad véniam prodésse perfícias.",
      translation: "We have received, O Lord, these divine mysteries, rejoicing in the feast of blessed Andrew the Apostle: grant, we beseech thee, that as they availed unto glory for thy Saints, so they may avail unto pardon for us."
    }
  },

  "immaculate-conception": {
    collect: {
      latin: "Deus, qui per immaculátam Vírginis Conceptiónem dignum Fílio tuo habitáculum præparásti: quǽsumus; ut, qui ex morte ejúsdem Fílii tui prævísa eam ab omni labe præservásti, nos quoque mundos ejus intercessióne ad te perveníre concédas.",
      translation: "O God, who by the Immaculate Conception of the Virgin didst prepare a worthy dwelling for thy Son: we beseech thee; that, as thou didst preserve her from all stain by the foreseen death of that same Son, so thou wouldst grant us also, made clean through her intercession, to come unto thee."
    },
    secret: {
      latin: "Salutárem hóstiam, quam in sollemnitáte immaculátæ Conceptiónis beátæ Vírginis Maríæ tibi, Dómine, offérimus, súscipe et præsta: ut, sicut illam tua grátia præveniénte ab omni labe immúnem profitémur; ita ejus intercessióne a culpis ómnibus liberémur.",
      translation: "Receive, O Lord, this saving victim which we offer thee on the solemnity of the Immaculate Conception of the blessed Virgin Mary, and grant: that, as we profess her, by the forestalling of thy grace, to be free from every stain, so through her intercession we may be delivered from all our sins."
    },
    postcommunion: {
      latin: "Sacraménta quæ súmpsimus, Dómine, Deus noster: illíus in nobis culpæ vúlnera réparent; a qua immaculátam beátæ Maríæ Conceptiónem singuláriter præservásti.",
      translation: "May the sacraments which we have received, O Lord our God, heal in us the wounds of that fault from which thou didst singularly preserve the immaculate Conception of blessed Mary."
    }
  },

  "thomas-apostle": {
    collect: {
      latin: "Da nobis, quǽsumus, Dómine, beáti Apóstoli tui Thomæ sollemnitátibus gloriári: ut ejus semper et patrocíniis sublevémur; et fidem cóngrua devotióne sectémur.",
      translation: "Grant us, we beseech thee, O Lord, to glory in the solemnities of thy blessed Apostle Thomas: that we may ever be upheld by his patronage, and follow his faith with fitting devotion."
    },
    secret: {
      latin: "Débitum tibi, Dómine, nostræ réddimus servitútis, supplíciter exorántes: ut, suffrágiis beáti Thomæ Apóstoli, in nobis tua múnera tueáris, cujus honoránda confessióne laudis tibi hóstias immolámus.",
      translation: "We render thee, O Lord, the debt of our service, humbly entreating thee: that, by the prayers of blessed Thomas the Apostle, thou wouldst guard in us thy gifts, for whose venerable confession we offer thee sacrifices of praise."
    },
    postcommunion: {
      latin: "Adésto nobis, miséricors Deus: et, intercedénte pro nobis beáto Thoma Apóstolo, tua circa nos propitiátus dona custódi.",
      translation: "Be present with us, merciful God: and, with blessed Thomas the Apostle interceding for us, graciously guard thy gifts within us."
    }
  },

  "stephen": {
    collect: {
      latin: "Da nobis, quǽsumus, Dómine, imitári quod cólimus: ut discámus et inimícos dilígere; quia ejus natalícia celebrámus, qui novit étiam pro persecutóribus exoráre Dóminum nostrum Jesum Christum Fílium tuum.",
      translation: "Grant us, we beseech thee, O Lord, to imitate what we honor: that we may learn to love even our enemies; since we celebrate the birthday of him who knew how to pray even for his persecutors — our Lord Jesus Christ, thy Son."
    },
    secret: {
      latin: "Súscipe, Dómine, múnera pro tuórum commemoratióne Sanctórum: ut, sicut illos pássio gloriósos effécit; ita nos devótio reddat innócuos.",
      translation: "Receive, O Lord, these gifts in commemoration of thy Saints: that, as their passion made them glorious, so may our devotion render us guiltless."
    },
    postcommunion: {
      latin: "Auxiliéntur nobis, Dómine, sumpta mystéria: et, intercedénte beáto Stéphano Mártyre tuo, sempitérna protectióne confírment.",
      translation: "May the mysteries we have received help us, O Lord: and, through the intercession of thy blessed Martyr Stephen, confirm us with everlasting protection."
    }
  },

  "john-evangelist": {
    collect: {
      latin: "Ecclésiam tuam, Dómine, benígnus illústra: ut, beáti Joánnis Apóstoli tui et Evangelístæ illumináta doctrínis, ad dona pervéniat sempitérna.",
      translation: "Graciously enlighten thy Church, O Lord: that, illumined by the teachings of thy blessed Apostle and Evangelist John, she may attain to everlasting gifts."
    },
    secret: {
      latin: "Súscipe, Dómine, múnera, quæ in ejus tibi sollemnitáte deférimus, cujus nos confídimus patrocínio liberári.",
      translation: "Receive, O Lord, these gifts, which we bring thee on his solemnity, by whose patronage we trust to be set free."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "holy-innocents": {
    collect: {
      latin: "Deus, cujus hodiérna die præcónium Innocéntes Mártyres non loquéndo, sed moriéndo conféssi sunt: ómnia in nobis vitiórum mala mortífica; ut fidem tuam, quam lingua nostra lóquitur, étiam móribus vita fateátur.",
      translation: "O God, whose praise the Holy Innocents confessed this day not by speaking, but by dying: mortify in us all the evils of vice; that our life may confess by its conduct that faith which our tongue proclaims."
    },
    secret: {
      latin: "Sanctórum tuórum, Dómine, nobis pia non desit orátio: quæ et múnera nostra concíliet, et tuam nobis indulgéntiam semper obtíneat.",
      translation: "May the loving prayer of thy Saints, O Lord, not fail us: which may both commend our offerings, and ever obtain for us thy forgiveness."
    },
    postcommunion: {
      latin: "Votíva, Dómine, dona percépimus: quæ Sanctórum nobis précibus, et præséntis, quǽsumus, vitæ páriter et ætérnæ tríbue conférre subsídium.",
      translation: "We have received, O Lord, these votive gifts: which, by the prayers of thy Saints, grant, we beseech thee, to bring us help alike for this present life and for that which is everlasting."
    }
  },

  "hilary": {
    collect: {
      latin: "Deus, qui pópulo tuo ætérnæ salútis beátum Hilárium minístrum tribuísti: præsta, quǽsumus; ut, quem Doctórem vitæ habúimus in terris, intercessórem habére mereámur in cœlis.",
      translation: "O God, who didst give blessed Hilary to thy people as a minister of eternal salvation: grant, we beseech thee, that we who had him for teacher of life on earth may be found worthy to have him for our intercessor in heaven."
    },
    secret: {
      latin: "Sancti Hilárii Pontíficis tui atque Doctóris nobis, Dómine, pia non desit orátio: quæ et múnera nostra concíliet; et tuam nobis indulgéntiam semper obtíneat.",
      translation: "May the loving prayer of thy holy Bishop and Doctor Hilary never fail us, O Lord: may it both commend our offerings, and ever obtain for us thy forgiveness."
    },
    postcommunion: {
      latin: "Ut nobis, Dómine, tua sacrifícia dent salútem: beátus Hilárius Póntifex tuus et Doctor egrégius, quǽsumus, precátor accédat.",
      translation: "That thy sacrifice may bring us salvation, O Lord, we beseech thee that blessed Hilary, thy Bishop and renowned Doctor, may come to intercede for us."
    }
  },

  "marcellus": {
    collect: {
      latin: "Preces pópuli tui, quǽsumus, Dómine, cleménter exáudi: ut beáti Marcélli Mártyris tui atque Pontíficis méritis adjuvémur, cujus passióne lætámur.",
      translation: "Mercifully hear the prayers of thy people, we beseech thee, O Lord: that we may be helped by the merits of blessed Marcellus, thy Martyr and Bishop, in whose sufferings we rejoice."
    },
    secret: {
      latin: "Oblátis munéribus, quǽsumus, Dómine, Ecclésiam tuam benígnus illúmina: ut, et gregis tui profíciat ubíque succéssus, et grati fiant nómini tuo, te gubernánte, pastóres.",
      translation: "By the gifts here offered, we beseech thee, O Lord, graciously enlighten thy Church: that thy flock may everywhere prosper, and its shepherds, under thy guidance, may be pleasing to thy name."
    },
    postcommunion: {
      latin: "Refectióne sancta enutrítam gubérna, quǽsumus, Dómine, tuam placátus Ecclésiam: ut, poténti moderatióne dirécta, et increménta libertátis accípiat et in religiónis integritáte persístat.",
      translation: "Graciously govern thy Church, O Lord, we beseech thee, nourished as she is with holy refreshment: that, guided by thy mighty rule, she may both receive an increase of freedom and abide in the integrity of the faith."
    }
  },

  "vincent-anastasius": {
    collect: {
      latin: "Adésto, Dómine, supplicatiónibus nostris: ut, qui ex iniquitáte nostra reos nos esse cognóscimus, beatórum Mártyrum tuórum Vincéntii et Anastásii intercessióne liberémur.",
      translation: "Attend, O Lord, to our supplications: that we, who know ourselves guilty by reason of our iniquity, may be set free by the intercession of thy blessed Martyrs Vincent and Anastasius."
    },
    secret: {
      latin: "Múnera tibi, Dómine, nostra devotiónis offérimus: quæ et pro tuórum tibi grata sint honóre Justórum, et nobis salutária, te miseránte, reddántur.",
      translation: "We offer thee, O Lord, the gifts of our devotion: may they be acceptable to thee in honor of thy just ones, and, through thy mercy, be made a means of salvation to us."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedéntibus beátis Martýribus tuis Vincéntio et Anastásio, per hæc contra ómnia advérsa muniámur.",
      translation: "We beseech thee, almighty God: that we, who have received this heavenly food, may through the intercession of thy blessed Martyrs Vincent and Anastasius be defended by it against all adversity."
    }
  },

  "timothy": {
    collect: {
      latin: "Infirmitátem nostram réspice, omnípotens Deus: et, quia pondus própriæ actiónis gravat, beáti Timothei Mártyris tui atque Pontíficis intercéssio gloriósa nos prótegat.",
      translation: "Look upon our weakness, almighty God: and, since the burden of our own doing weighs us down, may the glorious intercession of blessed Timothy, thy Martyr and Bishop, protect us."
    },
    secret: {
      latin: "Hóstias tibi, Dómine, beáti Timothei Mártyris tui atque Pontíficis dicátas méritis, benígnus assúme: et ad perpétuum nobis tríbue proveníre subsídium.",
      translation: "Graciously accept, O Lord, these offerings dedicated through the merits of blessed Timothy, thy Martyr and Bishop: and grant that they may be a lasting help to us."
    },
    postcommunion: {
      latin: "Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus noster: ut, cujus exséquimur cultum, intercedénte beáto Timótheo Mártyre tuo atque Pontífice, sentiámus efféctum.",
      translation: "Refreshed by partaking of this sacred gift, we beseech thee, O Lord our God: that, through the intercession of blessed Timothy, thy Martyr and Bishop, whose observance we keep, we may feel its effect."
    }
  },

  "polycarp": {
    collect: {
      latin: "Deus, qui nos beáti Polycárpi Mártyris tui atque Pontíficis ánnua solemnitáte lætíficas: concéde propítius; ut, cujus natalítia cólimus, de ejúsdem étiam protectióne gaudeámus.",
      translation: "O God, who dost gladden us with the yearly solemnity of blessed Polycarp, thy Martyr and Bishop: mercifully grant that, as we keep his birthday, we may also rejoice in his protection."
    },
    secret: {
      latin: "Múnera tibi, Dómine, dicáta sanctífica: et, intercedénte beáto Polycárpo Mártyre tuo atque Pontífice, per éadem nos placátus inténde.",
      translation: "Sanctify, O Lord, the offerings dedicated to thee: and, through the intercession of blessed Polycarp, thy Martyr and Bishop, mercifully look upon us because of them."
    },
    postcommunion: {
      latin: "Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus noster: ut, cujus exséquimur cultum, intercedénte beáto Polycárpo Mártyre tuo atque Pontífice, sentiámus efféctum.",
      translation: "Refreshed by partaking of this sacred gift, we beseech thee, O Lord our God: that, through the intercession of blessed Polycarp, thy Martyr and Bishop, whose observance we keep, we may feel its effect."
    }
  },

  "peter-nolasco": {
    collect: {
      latin: "Deus, qui in tuæ caritátis exémplum ad fidélium redemptiónem sanctum Petrum Ecclésiam tuam nova prole fœcundáre divínitus docuísti: ipsíus nobis intercessióne concéde; a peccáti servitúte solútis, in cœlésti pátria perpétua libertáte gaudére.",
      translation: "O God, who didst divinely teach holy Peter to enrich thy Church with new offspring for the redemption of the faithful, as an example of thy own charity: grant us, by his intercession, that, freed from the bondage of sin, we may rejoice in perpetual liberty in our heavenly homeland."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "francis-de-sales": {
    collect: {
      latin: "Deus, qui ad animárum salútem beátum Francíscum Confessórem tuum atque Pontíficem ómnibus ómnia factum esse voluísti: concéde propítius; ut caritátis tuæ dulcédine perfúsi, ejus dirigéntibus mónitis ac suffragántibus méritis, ætérna gáudia consequámur.",
      translation: "O God, who for the salvation of souls didst will that blessed Francis, thy Confessor and Bishop, should become all things to all men: mercifully grant that, filled with the sweetness of thy charity, we may attain to everlasting joys, guided by his counsels and aided by his merits."
    },
    secret: {
      latin: "Sancti Francísci Pontíficis tui atque Doctóris nobis, Dómine, pia non desit orátio: quæ et múnera nostra concíliet; et tuam nobis indulgéntiam semper obtíneat.",
      translation: "May the loving prayer of thy holy Bishop and Doctor Francis never fail us, O Lord: may it both commend our offerings, and ever obtain for us thy forgiveness."
    },
    postcommunion: {
      latin: "Ut nobis, Dómine, tua sacrifícia dent salútem: beátus Franciscus Póntifex tuus et Doctor egrégius, quǽsumus, precátor accédat.",
      translation: "That thy sacrifice may bring us salvation, O Lord, we beseech thee that blessed Francis, thy Bishop and renowned Doctor, may come to intercede for us."
    }
  },

  "martina": {
    collect: {
      latin: "Deus, qui inter cétera poténtiæ tuæ mirácula étiam in sexu frágili victóriam martýrii contulísti: concéde propítius; ut, qui beátæ Martínæ Vírginis et Mártyris tuæ natalícia cólimus, per ejus ad te exémpla gradiámur.",
      translation: "O God, who amid the other miracles of thy power hast granted the victory of martyrdom even to the weaker sex: mercifully grant that we, who keep the birthday of blessed Martina, thy Virgin and Martyr, may advance toward thee by following her example."
    },
    secret: {
      latin: "Súscipe, Dómine, múnera, quæ in beátæ Martínæ Vírginis et Mártyris tuæ sollemnitáte deférimus: cujus nos confídimus patrocínio liberári.",
      translation: "Receive, O Lord, the gifts which we bring on the solemnity of blessed Martina, thy Virgin and Martyr: by whose patronage we trust to be set free."
    },
    postcommunion: {
      latin: "Auxiliéntur nobis, Dómine, sumpta mystéria: et, intercedénte beáta Martína Vírgine et Mártyre tua, sempitérna fáciant protectióne gaudére.",
      translation: "May the mysteries we have received help us, O Lord: and, through the intercession of blessed Martina, thy Virgin and Martyr, grant us to rejoice in everlasting protection."
    }
  },

  "blaise": {
    collect: {
      latin: "Deus, qui nos beáti Blásii Mártyris tui atque Pontíficis ánnua solemnitáte lætíficas: concéde propítius; ut, cujus natalítia cólimus, de ejúsdem étiam protectióne gaudeámus.",
      translation: "O God, who dost gladden us with the yearly solemnity of blessed Blaise, thy Martyr and Bishop: mercifully grant that, as we keep his birthday, we may also rejoice in his protection."
    },
    secret: {
      latin: "Múnera tibi, Dómine, dicáta sanctífica: et, intercedénte beáto Blásio Mártyre tuo atque Pontífice, per éadem nos placátus inténde.",
      translation: "Sanctify, O Lord, the offerings dedicated to thee: and, through the intercession of blessed Blaise, thy Martyr and Bishop, mercifully look upon us because of them."
    },
    postcommunion: {
      latin: "Hæc nos commúnio, Dómine, purget a crímine: et, intercedénte beáto Blásio Mártyre tuo atque Pontífice, cœléstis remédii fáciat esse consórtes.",
      translation: "May this communion, O Lord, cleanse us from sin: and, through the intercession of blessed Blaise, thy Martyr and Bishop, make us partakers of the heavenly remedy."
    }
  },

  "andrew-corsini": {
    collect: {
      latin: "Deus, qui in Ecclésia tua nova semper instáuras exémpla virtútum: da pópulo tuo beáti Andréæ Confessóris tui atque Pontíficis ita sequi vestígia; ut assequátur et prǽmia.",
      translation: "O God, who ever renewest new examples of virtue in thy Church: grant to thy people so to follow in the footsteps of blessed Andrew, thy Confessor and Bishop, that they may also attain to his reward."
    },
    secret: {
      latin: "Sancti tui, quǽsumus, Dómine, nos ubíque lætíficant: ut, dum eórum mérita recólimus, patrocínia sentiámus.",
      translation: "May thy Saints, we beseech thee, O Lord, ever gladden us: that, while we call to mind their merits, we may feel their patronage."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut, de percéptis munéribus grátias exhibéntes, intercedénte beáto Andréa Confessóre tuo atque Pontífice, benefícia potióra sumámus.",
      translation: "Grant, we beseech thee, almighty God: that, giving thanks for the gifts we have received, we may, through the intercession of blessed Andrew, thy Confessor and Bishop, obtain still greater blessings."
    }
  },

  "agatha": {
    collect: {
      latin: "Deus, qui inter cétera poténtiæ tuæ mirácula étiam in sexu frágili victóriam martýrii contulísti: concéde propítius; ut, qui beátæ Agathæ Vírginis et Mártyris tuæ natalícia cólimus, per ejus ad te exémpla gradiámur.",
      translation: "O God, who amid the other miracles of thy power hast granted the victory of martyrdom even to the weaker sex: mercifully grant that we, who keep the birthday of blessed Agatha, thy Virgin and Martyr, may advance toward thee by following her example."
    },
    secret: {
      latin: "Súscipe, Dómine, múnera, quæ in beátæ Agathæ Vírginis et Mártyris tuæ sollemnitáte deférimus: cujus nos confídimus patrocínio liberári.",
      translation: "Receive, O Lord, the gifts which we bring on the solemnity of blessed Agatha, thy Virgin and Martyr: by whose patronage we trust to be set free."
    },
    postcommunion: {
      latin: "Auxiliéntur nobis, Dómine, sumpta mystéria: et, intercedénte beáta Agatha Vírgine et Mártyre tua, sempitérna fáciant protectióne gaudére.",
      translation: "May the mysteries we have received help us, O Lord: and, through the intercession of blessed Agatha, thy Virgin and Martyr, grant us to rejoice in everlasting protection."
    }
  },

  "john-of-matha": {
    collect: {
      latin: "Deus, qui per sanctum Joánnem órdinem sanctíssimæ Trinitátis ad rediméndum de potestáte Saracenórum captívos cǽlitus institúere dignátus es: præsta quǽsumus; ut, ejus suffragántibus méritis, a captivitáte córporis et ánimæ, te adjuvánte, liberémur.",
      translation: "O God, who through holy John didst vouchsafe to establish from heaven the Order of the Most Holy Trinity, for the ransoming of captives from the power of the Saracens: grant, we beseech thee, that by his prevailing merits, with thy help, we may be freed from the captivity of body and soul."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "cyril-alexandria": {
    collect: {
      latin: "Deus, qui beátum Cyríllum Confessórem tuum atque Pontíficem divínæ maternitátis beatíssimæ Vírginis Maríæ assertórem invíctum effecísti: concéde, ipso intercedénte; ut, qui vere eam Genetrícem Dei crédimus, matérna ejúsdem protectióne salvémur.",
      translation: "O God, who didst make blessed Cyril, thy Confessor and Bishop, an unconquered champion of the divine motherhood of the most blessed Virgin Mary: grant, through his intercession, that we who truly believe her to be the Mother of God may be saved by her motherly protection."
    },
    secret: {
      latin: "Múnera nostra, omnípotens Deus, benígnus réspice: et, intercedénte beáto Cyríllo, præsta; ut unigénitum tuum Jesum Christum, Dóminum nostrum in tua tecum glória coætérnum, in córdibus nostris digne suscípere mereámur.",
      translation: "Graciously look upon our offerings, almighty God: and, through the intercession of blessed Cyril, grant that we may be found worthy to receive worthily into our hearts thine only-begotten Son, Jesus Christ our Lord, coeternal with thee in glory."
    },
    postcommunion: {
      latin: "Divínis, Dómine, refécti mystériis, te súpplices deprecámur: ut, exémplis et méritis beáti Cyrílli Pontíficis adjúti, sanctíssimæ Genetríci Unigéniti tui digne famulári valeámus.",
      translation: "Refreshed, O Lord, by these divine mysteries, we humbly beseech thee: that, aided by the examples and merits of blessed Cyril, thy Bishop, we may be enabled worthily to serve the most holy Mother of thine Only-begotten Son."
    }
  },

  "scholastica": {
    collect: {
      latin: "Deus, qui ánimam beátæ Vírginis tuæ Scholásticæ ad ostendéndam innocéntiæ viam in colúmbæ spécie cœlum penetráre fecísti: da nobis ejus méritis et précibus ita innocénter vívere; ut ad ætérna mereámur gáudia perveníre.",
      translation: "O God, who, to show forth the way of innocence, didst cause the soul of blessed Scholastica, thy Virgin, to enter heaven in the likeness of a dove: grant us, by her merits and prayers, so to live in innocence that we may be found worthy to attain to everlasting joys."
    },
    secret: {
      latin: "Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit auxílium.",
      translation: "May the offering of thy consecrated people be acceptable to thee, O Lord, in honor of thy Saints: by whose merits it knows that it has received help in time of trouble."
    },
    postcommunion: {
      latin: "Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos réfove, cujus sollémnia celebrámus.",
      translation: "Thou hast satisfied thy family, O Lord, with sacred gifts: refresh us always, we beseech thee, by the intercession of her whose feast we celebrate."
    }
  },

  "valentine": {
    collect: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut, qui beáti Valentíni Mártyris tui natalítia cólimus, a cunctis malis imminéntibus, ejus intercessióne, liberémur.",
      translation: "Grant, we beseech thee, almighty God: that we, who keep the birthday of blessed Valentine, thy Martyr, may by his intercession be delivered from all threatening evils."
    },
    secret: {
      latin: "Súscipe, quǽsumus, Dómine, múnera dignánter obláta: et, beáti Valentini Mártyris tui suffragántibus méritis, ad nostræ salútis auxílium proveníre concéde.",
      translation: "Graciously accept, we beseech thee, O Lord, these offered gifts: and grant, by the prevailing merits of blessed Valentine, thy Martyr, that they may profit to the help of our salvation."
    },
    postcommunion: {
      latin: "Sit nobis, Dómine, reparátio mentis et córporis cœléste mystérium: ut, cujus exséquimur actiónem, intercedénte beáto Valentíno Mártyre tuo, sentiámus efféctum.",
      translation: "May this heavenly mystery be to us, O Lord, a renewal of mind and body: that, through the intercession of blessed Valentine, thy Martyr, we may feel the effect of the rite we perform."
    }
  },

  "simeon": {
    collect: {
      latin: "Infirmitátem nostram réspice, omnípotens Deus: et, quia pondus própriæ actiónis gravat, beáti Simeónis Mártyris tui atque Pontíficis intercéssio gloriósa nos prótegat.",
      translation: "Look upon our weakness, almighty God: and, since the burden of our own doing weighs us down, may the glorious intercession of blessed Simeon, thy Martyr and Bishop, protect us."
    },
    secret: {
      latin: "Hóstias tibi, Dómine, beáti Simeónis Mártyris tui atque Pontíficis dicátas méritis, benígnus assúme: et ad perpétuum nobis tríbue proveníre subsídium.",
      translation: "Graciously accept, O Lord, these offerings dedicated through the merits of blessed Simeon, thy Martyr and Bishop: and grant that they may be a lasting help to us."
    },
    postcommunion: {
      latin: "Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus noster: ut, cujus exséquimur cultum, intercedénte beáto Simeóne Mártyre tuo atque Pontífice, sentiámus efféctum.",
      translation: "Refreshed by partaking of this sacred gift, we beseech thee, O Lord our God: that, through the intercession of blessed Simeon, thy Martyr and Bishop, whose observance we keep, we may feel its effect."
    }
  },

  "casimir": {
    collect: {
      latin: "Deus, qui inter regáles delícias et mundi illécebras sanctum Casimírum virtúte constántiæ roborásti: quǽsumus; ut ejus intercessióne fidéles tui terréna despíciant, et ad cœléstia semper aspírent.",
      translation: "O God, who amid royal delights and the enticements of the world didst strengthen holy Casimir with the virtue of constancy: we beseech thee that, by his intercession, thy faithful may despise earthly things and ever aspire to those of heaven."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "thomas-aquinas": {
    collect: {
      latin: "Deus, qui Ecclésiam tuam beáti Thomæ Confessóris tui mira eruditióne claríficas, et sancta operatióne fecúndas: da nobis, quǽsumus; et quæ dócuit, intelléctu conspícere, et quæ egit, imitatióne complére.",
      translation: "O God, who dost make glorious thy Church by the wondrous learning of blessed Thomas, thy Confessor, and dost enrich her by his holy example: grant us, we beseech thee, both to perceive with understanding what he taught, and to fulfill by imitation what he did."
    },
    secret: {
      latin: "Sancti Thomæ Pontíficis tui atque Doctóris nobis, Dómine, pia non desit orátio: quæ et múnera nostra concíliet; et tuam nobis indulgéntiam semper obtíneat.",
      translation: "May the loving prayer of thy holy Bishop and Doctor Thomas never fail us, O Lord: may it both commend our offerings, and ever obtain for us thy forgiveness."
    },
    postcommunion: {
      latin: "Ut nobis, Dómine, tua sacrifícia dent salútem: beátus Thomas Póntifex tuus et Doctor egrégius, quǽsumus, precátor accédat.",
      translation: "That thy sacrifice may bring us salvation, O Lord, we beseech thee that blessed Thomas, thy Bishop and renowned Doctor, may come to intercede for us."
    }
  },

  "john-of-god": {
    collect: {
      latin: "Deus, qui beátum Joánnem, tuo amóre succénsum, inter flammas innóxium incédere fecísti, et per eum Ecclésiam tuam nova prole fœcundásti: præsta, ipsíus suffragántibus méritis; ut igne caritátis tuæ vitia nostra curéntur, et remédia nobis ætérna provéniant.",
      translation: "O God, who, having kindled blessed John with thy love, didst cause him to walk unharmed amid the flames, and through him didst enrich thy Church with new offspring: grant, by his prevailing merits, that our vices may be healed by the fire of thy charity, and that everlasting remedies may come to us."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "gregory-great": {
    collect: {
      latin: "Deus, qui ánimæ fámuli tui Gregórii ætérnæ beatitúdinis prǽmia contulísti: concéde propítius; ut, qui peccatórum nostrórum póndere prémimur, ejus apud te précibus sublevémur.",
      translation: "O God, who didst bestow on the soul of thy servant Gregory the rewards of everlasting bliss: mercifully grant that we, who are weighed down by the burden of our sins, may be relieved through his prayers before thee."
    },
    secret: {
      latin: "Annue nobis, quǽsumus, Dómine: ut intercessióne beáti Gregórii hæc nobis prosit oblátio, quam immolándo totíus mundi tribuísti relaxári delícta.",
      translation: "Grant us, we beseech thee, O Lord: that, through the intercession of blessed Gregory, this offering may profit us, by whose immolation thou hast granted the sins of the whole world to be forgiven."
    },
    postcommunion: {
      latin: "Deus, qui beátum Gregórium Pontíficem Sanctórum tuórum méritis coæquásti: concéde propítius; ut, qui commemoratiónis ejus festa percólimus, vitæ quoque imitémur exémpla.",
      translation: "O God, who didst make blessed Gregory, thy Bishop, equal in merit to thy Saints: mercifully grant that we, who keep the feast of his commemoration, may also imitate the pattern of his life."
    }
  },

  "patrick": {
    collect: {
      latin: "Deus, qui ad prædicándam géntibus glóriam tuam beátum Patrícium Confessórem atque Pontíficem míttere dignátus es: ejus méritis et intercessióne concéde; ut, quæ nobis agénda prǽcipis, te miseránte adimplére possímus.",
      translation: "O God, who didst vouchsafe to send blessed Patrick, thy Confessor and Bishop, to preach thy glory to the nations: grant, by his merits and intercession, that, through thy mercy, we may be able to fulfill what thou dost command us to do."
    },
    secret: {
      latin: "Sancti tui, quǽsumus, Dómine, nos ubíque lætíficant: ut, dum eórum mérita recólimus, patrocínia sentiámus.",
      translation: "May thy Saints, we beseech thee, O Lord, ever gladden us: that, while we call to mind their merits, we may feel their patronage."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut, de percéptis munéribus grátias exhibéntes, intercedénte beáto Patrício Confessóre tuo atque Pontífice, benefícia potióra sumámus.",
      translation: "Grant, we beseech thee, almighty God: that, giving thanks for the gifts we have received, we may, through the intercession of blessed Patrick, thy Confessor and Bishop, obtain still greater blessings."
    }
  },

  "cyril-jerusalem": {
    collect: {
      latin: "Da nobis, quǽsumus, omnípotens Deus, beáto Cyríllo Pontífice intercedénte: te solum verum Deum, et quem misísti Jesum Christum ita cognóscere; ut inter oves, quæ vocem ejus áudiunt, perpétuo connumerári mereámur.",
      translation: "Grant us, we beseech thee, almighty God, through the intercession of blessed Cyril, thy Bishop: so to know thee the only true God, and Jesus Christ whom thou hast sent, that we may be found worthy to be numbered forever among the sheep who hear his voice."
    },
    secret: {
      latin: "Réspice, Dómine, immaculátam hóstiam, quam tibi offérimus: et præsta; ut, méritis beáti Pontíficis et Confessóris tui Cyrílli, eam mundo corde suscípere studeámus.",
      translation: "Look, O Lord, upon the immaculate victim which we offer thee: and grant that, by the merits of blessed Cyril, thy Bishop and Confessor, we may strive to receive it with a clean heart."
    },
    postcommunion: {
      latin: "Sacraménta Córporis et Sánguinis tui, quæ súmpsimus, Dómine Jesu Christe: beáti Cyrílli Pontíficis précibus, mentes et corda nostra sanctíficent; ut divínæ consórtes natúræ éffici mereámur.",
      translation: "May the Sacraments of thy Body and Blood which we have received, O Lord Jesus Christ, sanctify our minds and hearts by the prayers of blessed Cyril, thy Bishop: that we may be found worthy to become partakers of the divine nature."
    }
  },

  "francis-of-paola": {
    collect: {
      latin: "Deus, humílium celsitúdo, qui beátum Francíscum Confessórem Sanctórum tuórum glória sublimásti: tríbue, quǽsumus; ut, ejus méritis et imitatióne, promíssa humílibus præmia felíciter consequámur.",
      translation: "O God, the exaltation of the humble, who didst raise up blessed Francis, thy Confessor, to the glory of thy Saints: grant, we beseech thee, that by his merits and example we may happily attain to the rewards promised to the humble."
    },
    secret: {
      latin: "Hæc dona devótæ plebis, Dómine, quibus tua cumulámus altária, beáti Francísci méritis tibi grata nobísque salutária, te miseránte, reddántur.",
      translation: "May these gifts of thy devoted people, O Lord, with which we heap up thine altars, be made acceptable to thee through the merits of blessed Francis, and, through thy mercy, salutary to us."
    },
    postcommunion: {
      latin: "Sumpta, Dómine, sacraménta cœléstia: beáto Francísco Confessóre tuo intercedénte, precámur; ut et temporális vitæ subsídia nobis cónferant et ætérnæ.",
      translation: "We pray, O Lord, that these heavenly sacraments we have received, through the intercession of blessed Francis, thy Confessor, may bring us the help both of this present life and of life everlasting."
    }
  },

  "isidore": {
    collect: {
      latin: "Deus, qui pópulo tuo ætérnæ salútis beátum Isidórum minístrum tribuísti: præsta, quǽsumus; ut, quem Doctórem vitæ habúimus in terris, intercessórem habére mereámur in cœlis.",
      translation: "O God, who didst give blessed Isidore to thy people as a minister of eternal salvation: grant, we beseech thee, that we who had him for teacher of life on earth may be found worthy to have him for our intercessor in heaven."
    },
    secret: {
      latin: "Sancti Isidóri Pontíficis tui atque Doctóris nobis, Dómine, pia non desit orátio: quæ et múnera nostra concíliet; et tuam nobis indulgéntiam semper obtíneat.",
      translation: "May the loving prayer of thy holy Bishop and Doctor Isidore never fail us, O Lord: may it both commend our offerings, and ever obtain for us thy forgiveness."
    },
    postcommunion: {
      latin: "Ut nobis, Dómine, tua sacrifícia dent salútem: beátus Isidórus Póntifex tuus et Doctor egrégius, quǽsumus, precátor accédat.",
      translation: "That thy sacrifice may bring us salvation, O Lord, we beseech thee that blessed Isidore, thy Bishop and renowned Doctor, may come to intercede for us."
    }
  },

  "vincent-ferrer": {
    collect: {
      latin: "Deus, qui Ecclésiam tuam beáti Vincéntii Confessóris tui méritis et prædicatióne illustráre dignátus es: concéde nobis fámulis tuis; ut et ipsíus instruámur exémplis et ab ómnibus ejus patrocínio liberémur advérsis.",
      translation: "O God, who didst vouchsafe to make thy Church illustrious by the merits and preaching of blessed Vincent, thy Confessor: grant to us thy servants, that we may both be instructed by his example and be freed from all adversity by his patronage."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "anicetus": {
    collect: {
      latin: "Gregem tuum, Pastor ætérne, placátus inténde: et, per beátum Anicétum Mártyrem tuum atque Summum Pontíficem, perpétua protectióne custódi; quem totíus Ecclésiæ præstitísti esse pastórem.",
      translation: "Look with favor, O eternal Shepherd, upon thy flock: and keep it under perpetual protection through blessed Anicetus, thy Martyr and Supreme Pontiff, whom thou didst set to be shepherd of the whole Church."
    },
    secret: {
      latin: "Oblátis munéribus, quǽsumus, Dómine, Ecclésiam tuam benígnus illúmina: ut, et gregis tui profíciat ubíque succéssus, et grati fiant nómini tuo, te gubernánte, pastóres.",
      translation: "By the gifts here offered, we beseech thee, O Lord, graciously enlighten thy Church: that thy flock may everywhere prosper, and its shepherds, under thy guidance, may be pleasing to thy name."
    },
    postcommunion: {
      latin: "Refectióne sancta enutrítam gubérna, quǽsumus, Dómine, tuam placátus Ecclésiam: ut, poténti moderatióne dirécta, et increménta libertátis accípiat et in religiónis integritáte persístat.",
      translation: "Graciously govern thy Church, O Lord, we beseech thee, nourished as she is with holy refreshment: that, guided by thy mighty rule, she may both receive an increase of freedom and abide in the integrity of the faith."
    }
  },

  "anselm": {
    collect: {
      latin: "Deus, qui pópulo tuo ætérnæ salútis beátum Ansélmum minístrum tribuísti: præsta, quǽsumus; ut, quem Doctórem vitæ habúimus in terris, intercessórem habére mereámur in cœlis.",
      translation: "O God, who didst give blessed Anselm to thy people as a minister of eternal salvation: grant, we beseech thee, that we who had him for teacher of life on earth may be found worthy to have him for our intercessor in heaven."
    },
    secret: {
      latin: "Sancti Ansélmi Pontíficis tui atque Doctóris nobis, Dómine, pia non desit orátio: quæ et múnera nostra concíliet; et tuam nobis indulgéntiam semper obtíneat.",
      translation: "May the loving prayer of thy holy Bishop and Doctor Anselm never fail us, O Lord: may it both commend our offerings, and ever obtain for us thy forgiveness."
    },
    postcommunion: {
      latin: "Ut nobis, Dómine, tua sacrifícia dent salútem: beátus Ansélmus Póntifex tuus et Doctor egrégius, quǽsumus, precátor accédat.",
      translation: "That thy sacrifice may bring us salvation, O Lord, we beseech thee that blessed Anselm, thy Bishop and renowned Doctor, may come to intercede for us."
    }
  },

  "peter-canisius": {
    collect: {
      latin: "Deus, qui ad tuéndam cathólicam fidem beátum Petrum Confessórem tuum virtúte et doctrína roborásti: concéde propítius; ut ejus exémplis et mónitis errántes ad salútem resipíscant, et fidéles in veritátis confessióne persevérent.",
      translation: "O God, who didst strengthen blessed Peter, thy Confessor, with virtue and learning for the defense of the Catholic faith: mercifully grant that, by his example and counsel, those who err may come to their senses unto salvation, and the faithful may persevere in the confession of the truth."
    },
    secret: {
      latin: "Sancti Petri Pontíficis tui atque Doctóris nobis, Dómine, pia non desit orátio: quæ et múnera nostra concíliet; et tuam nobis indulgéntiam semper obtíneat.",
      translation: "May the loving prayer of thy holy Bishop and Doctor Peter never fail us, O Lord: may it both commend our offerings, and ever obtain for us thy forgiveness."
    },
    postcommunion: {
      latin: "Ut nobis, Dómine, tua sacrifícia dent salútem: beátus Petrus Póntifex tuus et Doctor egrégius, quǽsumus, precátor accédat.",
      translation: "That thy sacrifice may bring us salvation, O Lord, we beseech thee that blessed Peter, thy Bishop and renowned Doctor, may come to intercede for us."
    }
  },

  "catherine-siena": {
    collect: {
      latin: "Da, quǽsumus, omnípotens Deus: ut, qui beátæ Catharínæ Vírginis tuæ natalítia cólimus; et ánnua solemnitáte lætámur, et tantæ virtútis proficiámus exémplo.",
      translation: "Grant, we beseech thee, almighty God: that we, who keep the birthday of blessed Catherine, thy Virgin, may both rejoice in her yearly solemnity, and profit by the example of such great virtue."
    },
    secret: {
      latin: "Ascéndant ad te, Dómine, quas in beátæ Catharínæ solemnitáte offérimus, preces, et hóstia salutáris, virgíneo fragrans odóre.",
      translation: "May the prayers we offer thee, O Lord, on the solemnity of blessed Catherine, ascend to thee, together with the saving victim fragrant with virginal sweetness."
    },
    postcommunion: {
      latin: "Æternitátem nobis, Dómine, cónferat, qua pasti sumus, mensa cœléstis: quæ beátæ Catharínæ Vírginis vitam étiam áluit temporálem.",
      translation: "May the heavenly table on which we have fed bestow on us eternity, O Lord: the same table which nourished also the temporal life of blessed Catherine, thy Virgin."
    }
  },

  "stanislaus": {
    collect: {
      latin: "Deus, pro cujus honóre gloriósus Póntifex Stanisláus gládiis impiórum occúbuit: præsta, quǽsumus; ut omnes, qui ejus implórant auxílium, petitiónis suæ salutárem consequántur efféctum.",
      translation: "O God, for whose honor the glorious Bishop Stanislaus fell beneath the swords of the wicked: grant, we beseech thee, that all who implore his help may obtain the saving effect of their petition."
    },
    secret: {
      latin: "Múnera tibi, Dómine, dicáta sanctífica: et, intercedénte beáto Stanisláo Mártyre tuo atque Pontífice, per éadem nos placátus inténde.",
      translation: "Sanctify, O Lord, the offerings dedicated to thee: and, through the intercession of blessed Stanislaus, thy Martyr and Bishop, mercifully look upon us because of them."
    },
    postcommunion: {
      latin: "Hæc nos commúnio, Dómine, purget a crímine: et, intercedénte beáto Stanisláo Mártyre tuo atque Pontífice, cœléstis remédii fáciat esse consórtes.",
      translation: "May this communion, O Lord, cleanse us from sin: and, through the intercession of blessed Stanislaus, thy Martyr and Bishop, make us partakers of the heavenly remedy."
    }
  },

  "gregory-nazianzen": {
    collect: {
      latin: "Deus, qui pópulo tuo ætérnæ salútis beátum Gregórium minístrum tribuísti: præsta, quǽsumus; ut, quem Doctórem vitæ habúimus in terris, intercessórem habére mereámur in cœlis.",
      translation: "O God, who didst give blessed Gregory to thy people as a minister of eternal salvation: grant, we beseech thee, that we who had him for teacher of life on earth may be found worthy to have him for our intercessor in heaven."
    },
    secret: {
      latin: "Sancti Gregórii Pontíficis tui atque Doctóris nobis, Dómine, pia non desit orátio: quæ et múnera nostra concíliet; et tuam nobis indulgéntiam semper obtíneat.",
      translation: "May the loving prayer of thy holy Bishop and Doctor Gregory never fail us, O Lord: may it both commend our offerings, and ever obtain for us thy forgiveness."
    },
    postcommunion: {
      latin: "Ut nobis, Dómine, tua sacrifícia dent salútem: beátus Gregórius Póntifex tuus et Doctor egrégius, quǽsumus, precátor accédat.",
      translation: "That thy sacrifice may bring us salvation, O Lord, we beseech thee that blessed Gregory, thy Bishop and renowned Doctor, may come to intercede for us."
    }
  },

  "antoninus": {
    collect: {
      latin: "Sancti Antoníni, Dómine, Confessóris tui atque Pontíficis méritis adjuvémur: ut, sicut te in illo mirábilem prædicámus, ita in nos misericórdem fuísse gloriémur.",
      translation: "May we be helped, O Lord, by the merits of thy holy Confessor and Bishop Antoninus: that, as we proclaim thee wondrous in him, so we may glory that thou hast been merciful to us."
    },
    secret: {
      latin: "Sancti tui, quǽsumus, Dómine, nos ubíque lætíficant: ut, dum eórum mérita recólimus, patrocínia sentiámus.",
      translation: "May thy Saints, we beseech thee, O Lord, ever gladden us: that, while we call to mind their merits, we may feel their patronage."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut, de percéptis munéribus grátias exhibéntes, intercedénte beáto Antoníno Confessóre tuo atque Pontífice, benefícia potióra sumámus.",
      translation: "Grant, we beseech thee, almighty God: that, giving thanks for the gifts we have received, we may, through the intercession of blessed Antoninus, thy Confessor and Bishop, obtain still greater blessings."
    }
  },

  "ubaldus": {
    collect: {
      latin: "Auxílium tuum nobis, Dómine, quǽsumus, placátus impénde: et, intercessióne beáti Ubáldi Confessóris tui atque Pontíficis, contra omnes diáboli nequítias déxteram super nos tuæ propitiatiónis exténde.",
      translation: "Mercifully grant us thy help, we beseech thee, O Lord: and, through the intercession of blessed Ubaldus, thy Confessor and Bishop, stretch forth over us the right hand of thy favor against all the wiles of the devil."
    },
    secret: {
      latin: "Sancti tui, quǽsumus, Dómine, nos ubíque lætíficant: ut, dum eórum mérita recólimus, patrocínia sentiámus.",
      translation: "May thy Saints, we beseech thee, O Lord, ever gladden us: that, while we call to mind their merits, we may feel their patronage."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut, de percéptis munéribus grátias exhibéntes, intercedénte beáto Ubáldo Confessóre tuo atque Pontífice, benefícia potióra sumámus.",
      translation: "Grant, we beseech thee, almighty God: that, giving thanks for the gifts we have received, we may, through the intercession of blessed Ubaldus, thy Confessor and Bishop, obtain still greater blessings."
    }
  },

  "paschal-baylon": {
    collect: {
      latin: "Deus, qui beátum Paschálem Confessórem tuum mirífica erga Córporis et Sánguinis tui sacra mystéria dilectióne decorásti: concéde propítius; ut, quam ille ex hoc divino convívio spíritus percépit pinguédinem, eándem et nos percípere mereámur.",
      translation: "O God, who didst adorn blessed Paschal, thy Confessor, with a wondrous love for the sacred mysteries of thy Body and Blood: mercifully grant that we may be found worthy to receive that same fullness of spirit which he received from this divine banquet."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "john-baptist-de-rossi": {
    collect: {
      latin: "Deus, qui nos beáti Joánnis Baptístæ de Rossi Confessóris tui ánnua solemnitáte lætíficas: concéde propítius; ut, cujus natalítia cólimus, étiam actiónes imitémur.",
      translation: "O God, who dost gladden us with the yearly solemnity of blessed John Baptist de Rossi, thy Confessor: mercifully grant that, as we keep his birthday, we may also imitate his deeds."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "mary-magdalene-de-pazzi": {
    collect: {
      latin: "Deus, virginitátis amátor, qui beátam Maríam Magdalénam Vírginem, tuo amóre succénsam, cœléstibus donis decorásti: da; ut, quam festíva celebritáte venerámur, puritáte et caritáte imitémur.",
      translation: "O God, lover of virginity, who didst adorn with heavenly gifts blessed Mary Magdalene, thy Virgin, enkindled with thy love: grant that we may imitate in purity and charity her whom we venerate with festive celebration."
    },
    secret: {
      latin: "Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit auxílium.",
      translation: "May the offering of thy consecrated people be acceptable to thee, O Lord, in honor of thy Saints: by whose merits it knows that it has received help in time of trouble."
    },
    postcommunion: {
      latin: "Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos réfove, cujus sollémnia celebrámus.",
      translation: "Thou hast satisfied thy family, O Lord, with sacred gifts: refresh us always, we beseech thee, by the intercession of her whose feast we celebrate."
    }
  },

  "felix-i": {
    collect: {
      latin: "Gregem tuum, Pastor ætérne, placátus inténde: et, per beátum Felícem Mártyrem tuum atque Summum Pontíficem, perpétua protectióne custódi; quem totíus Ecclésiæ præstitísti esse pastórem.",
      translation: "Look with favor, O eternal Shepherd, upon thy flock: and keep it under perpetual protection through blessed Felix, thy Martyr and Supreme Pontiff, whom thou didst set to be shepherd of the whole Church."
    },
    secret: {
      latin: "Oblátis munéribus, quǽsumus, Dómine, Ecclésiam tuam benígnus illúmina: ut, et gregis tui profíciat ubíque succéssus, et grati fiant nómini tuo, te gubernánte, pastóres.",
      translation: "By the gifts here offered, we beseech thee, O Lord, graciously enlighten thy Church: that thy flock may everywhere prosper, and its shepherds, under thy guidance, may be pleasing to thy name."
    },
    postcommunion: {
      latin: "Refectióne sancta enutrítam gubérna, quǽsumus, Dómine, tuam placátus Ecclésiam: ut, poténti moderatióne dirécta, et increménta libertátis accípiat et in religiónis integritáte persístat.",
      translation: "Graciously govern thy Church, O Lord, we beseech thee, nourished as she is with holy refreshment: that, guided by thy mighty rule, she may both receive an increase of freedom and abide in the integrity of the faith."
    }
  },

  "angela-merici": {
    collect: {
      latin: "Deus, qui novum per beátam Angelam sacrárum Virginum collégium in Ecclésia tua floréscere voluísti: da nobis, ejus intercessióne, angélicis móribus vívere; ut, terrénis ómnibus abdicátis, gáudiis pérfrui mereámur ætérnis.",
      translation: "O God, who through blessed Angela didst will a new company of sacred Virgins to flourish in thy Church: grant us, by her intercession, to live with angelic conduct; that, renouncing all earthly things, we may be found worthy to enjoy everlasting joys."
    },
    secret: {
      latin: "Hóstia, Dómine, quam tibi beátæ Angelæ memóriam recoléntes offérimus, et nostræ pravitátis véniam implóret, et grátiæ tuæ nobis dona concíliet.",
      translation: "May the victim, O Lord, which we offer thee in remembrance of blessed Angela, both entreat pardon for our wickedness, and win for us the gifts of thy grace."
    },
    postcommunion: {
      latin: "Cœlésti alimónia refécti, súpplices te, Dómine, deprecámur: ut, beátæ Angelæ précibus et exémplo ab omni labe mundáti, et córpore tibi placeámus et mente.",
      translation: "Refreshed with heavenly food, we humbly beseech thee, O Lord: that, cleansed from every stain by the prayers and example of blessed Angela, we may be pleasing to thee in body and in mind."
    }
  },

  "norbert": {
    collect: {
      latin: "Deus, qui beátum Norbértum Confessórem tuum atque Pontíficem verbi tui præcónem exímium effecísti, et per eum Ecclésiam tuam nova prole fœcundásti: præsta, quǽsumus; ut, ejúsdem suffragántibus méritis, quod ore simul et ópere dócuit, te adjuvánte, exercére valeámus.",
      translation: "O God, who didst make blessed Norbert, thy Confessor and Bishop, an outstanding herald of thy word, and through him didst enrich thy Church with new offspring: grant, we beseech thee, that by his prevailing merits we may, with thy help, put into practice what he taught both by word and by deed."
    },
    secret: {
      latin: "Sancti tui, quǽsumus, Dómine, nos ubíque lætíficant: ut, dum eórum mérita recólimus, patrocínia sentiámus.",
      translation: "May thy Saints, we beseech thee, O Lord, ever gladden us: that, while we call to mind their merits, we may feel their patronage."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut, de percéptis munéribus grátias exhibéntes, intercedénte beáto Norbérto Confessóre tuo atque Pontífice, benefícia potióra sumámus.",
      translation: "Grant, we beseech thee, almighty God: that, giving thanks for the gifts we have received, we may, through the intercession of blessed Norbert, thy Confessor and Bishop, obtain still greater blessings."
    }
  },

  "anthony-padua": {
    collect: {
      latin: "Ecclésiam tuam, Deus, beáti Antónii Confessóris tui atque Doctóris sollémnitas votiva lætíficet: ut spirituálibus semper muniátur auxíliis et gáudiis pérfrui mereátur ætérnis.",
      translation: "May the votive solemnity of blessed Anthony, thy Confessor and Doctor, gladden thy Church, O God: that she may ever be fortified with spiritual help, and be found worthy to enjoy everlasting joys."
    },
    secret: {
      latin: "Præsens oblátio fiat, Dómine, pópulo tuo salutáris: pro quo dignátus es Patri tuo te vivéntem hóstiam immoláre.",
      translation: "May this offering, O Lord, be a means of salvation to thy people: for whom thou didst vouchsafe to offer thyself, the living Victim, to thy Father."
    },
    postcommunion: {
      latin: "Divínis, Dómine, munéribus satiáti: quǽsumus; ut, beáti Antónii Confessóris tui atque Doctóris méritis et intercessióne, salutáris sacrifícii sentiámus efféctum.",
      translation: "Satisfied, O Lord, with these divine gifts: we beseech thee that, by the merits and intercession of blessed Anthony, thy Confessor and Doctor, we may feel the saving effect of this sacrifice."
    }
  },

  "ephraem": {
    collect: {
      latin: "Deus, qui Ecclésiam tuam beáti Ephræm Confessóris tui et Doctóris mira eruditióne et præcláris vitæ méritis illustráre voluísti: te súpplices exorámus; ut, ipso intercedénte, eam advérsus erróris et pravitátis insídias perénni tua virtúte deféndas.",
      translation: "O God, who didst will to make thy Church illustrious by the wondrous learning and the shining merits of the life of blessed Ephraem, thy Confessor and Doctor: we humbly beseech thee that, through his intercession, thou wouldst defend her by thine unfailing power against the snares of error and wickedness."
    },
    secret: {
      latin: "Sancti Ephræm Pontíficis tui atque Doctóris nobis, Dómine, pia non desit orátio: quæ et múnera nostra concíliet; et tuam nobis indulgéntiam semper obtíneat.",
      translation: "May the loving prayer of thy holy Bishop and Doctor Ephraem never fail us, O Lord: may it both commend our offerings, and ever obtain for us thy forgiveness."
    },
    postcommunion: {
      latin: "Ut nobis, Dómine, tua sacrifícia dent salútem: beátus Ephræm Póntifex tuus et Doctor egrégius, quǽsumus, precátor accédat.",
      translation: "That thy sacrifice may bring us salvation, O Lord, we beseech thee that blessed Ephraem, thy Bishop and renowned Doctor, may come to intercede for us."
    }
  },

  "juliana-falconieri": {
    collect: {
      latin: "Deus, qui beátam Juliánam Vírginem tuam extrémo morbo laborántem, pretióso Fílii tui Córpore mirabíliter recreáre dignátus es: concéde, quǽsumus; ut, ejus intercedéntibus méritis, nos quoque eódem in mortis agóne refécti ac roboráti, ad cœléstem pátriam perducámur.",
      translation: "O God, who didst vouchsafe wondrously to restore blessed Juliana, thy Virgin, laboring under her last illness, with the precious Body of thy Son: grant, we beseech thee, that by her interceding merits we too, refreshed and strengthened by the same in the agony of death, may be brought to our heavenly homeland."
    },
    secret: {
      latin: "Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit auxílium.",
      translation: "May the offering of thy consecrated people be acceptable to thee, O Lord, in honor of thy Saints: by whose merits it knows that it has received help in time of trouble."
    },
    postcommunion: {
      latin: "Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos réfove, cujus sollémnia celebrámus.",
      translation: "Thou hast satisfied thy family, O Lord, with sacred gifts: refresh us always, we beseech thee, by the intercession of her whose feast we celebrate."
    }
  },

  "silverius": {
    collect: {
      latin: "Gregem tuum, Pastor ætérne, placátus inténde: et, per beátum Silvérium Mártyrem tuum atque Summum Pontíficem, perpétua protectióne custódi; quem totíus Ecclésiæ præstitísti esse pastórem.",
      translation: "Look with favor, O eternal Shepherd, upon thy flock: and keep it under perpetual protection through blessed Silverius, thy Martyr and Supreme Pontiff, whom thou didst set to be shepherd of the whole Church."
    },
    secret: {
      latin: "Oblátis munéribus, quǽsumus, Dómine, Ecclésiam tuam benígnus illúmina: ut, et gregis tui profíciat ubíque succéssus, et grati fiant nómini tuo, te gubernánte, pastóres.",
      translation: "By the gifts here offered, we beseech thee, O Lord, graciously enlighten thy Church: that thy flock may everywhere prosper, and its shepherds, under thy guidance, may be pleasing to thy name."
    },
    postcommunion: {
      latin: "Refectióne sancta enutrítam gubérna, quǽsumus, Dómine, tuam placátus Ecclésiam: ut, poténti moderatióne dirécta, et increménta libertátis accípiat et in religiónis integritáte persístat.",
      translation: "Graciously govern thy Church, O Lord, we beseech thee, nourished as she is with holy refreshment: that, guided by thy mighty rule, she may both receive an increase of freedom and abide in the integrity of the faith."
    }
  },

  "pius-i": {
    collect: {
      latin: "Gregem tuum, Pastor ætérne, placátus inténde: et, per beátum Pium Mártyrem tuum atque Summum Pontíficem, perpétua protectióne custódi; quem totíus Ecclésiæ præstitísti esse pastórem.",
      translation: "Look with favor, O eternal Shepherd, upon thy flock: and keep it under perpetual protection through blessed Pius, thy Martyr and Supreme Pontiff, whom thou didst set to be shepherd of the whole Church."
    },
    secret: {
      latin: "Oblátis munéribus, quǽsumus, Dómine, Ecclésiam tuam benígnus illúmina: ut, et gregis tui profíciat ubíque succéssus, et grati fiant nómini tuo, te gubernánte, pastóres.",
      translation: "By the gifts here offered, we beseech thee, O Lord, graciously enlighten thy Church: that thy flock may everywhere prosper, and its shepherds, under thy guidance, may be pleasing to thy name."
    },
    postcommunion: {
      latin: "Refectióne sancta enutrítam gubérna, quǽsumus, Dómine, tuam placátus Ecclésiam: ut, poténti moderatióne dirécta, et increménta libertátis accípiat et in religiónis integritáte persístat.",
      translation: "Graciously govern thy Church, O Lord, we beseech thee, nourished as she is with holy refreshment: that, guided by thy mighty rule, she may both receive an increase of freedom and abide in the integrity of the faith."
    }
  },

  "anacletus": {
    collect: {
      latin: "Gregem tuum, Pastor ætérne, placátus inténde: et, per beátum Anaclétum Mártyrem tuum atque Summum Pontíficem, perpétua protectióne custódi; quem totíus Ecclésiæ præstitísti esse pastórem.",
      translation: "Look with favor, O eternal Shepherd, upon thy flock: and keep it under perpetual protection through blessed Anacletus, thy Martyr and Supreme Pontiff, whom thou didst set to be shepherd of the whole Church."
    },
    secret: {
      latin: "Oblátis munéribus, quǽsumus, Dómine, Ecclésiam tuam benígnus illúmina: ut, et gregis tui profíciat ubíque succéssus, et grati fiant nómini tuo, te gubernánte, pastóres.",
      translation: "By the gifts here offered, we beseech thee, O Lord, graciously enlighten thy Church: that thy flock may everywhere prosper, and its shepherds, under thy guidance, may be pleasing to thy name."
    },
    postcommunion: {
      latin: "Refectióne sancta enutrítam gubérna, quǽsumus, Dómine, tuam placátus Ecclésiam: ut, poténti moderatióne dirécta, et increménta libertátis accípiat et in religiónis integritáte persístat.",
      translation: "Graciously govern thy Church, O Lord, we beseech thee, nourished as she is with holy refreshment: that, guided by thy mighty rule, she may both receive an increase of freedom and abide in the integrity of the faith."
    }
  },

  "vincent-de-paul": {
    collect: {
      latin: "Deus, qui, ad evangelizándum paupéribus et ecclesiástici órdinis decórem promovéndum, beátum Vincéntium apostólica virtúte roborásti: præsta, quǽsumus; ut, cujus pia mérita venerámur, virtútum quoque instruámur exémplis.",
      translation: "O God, who didst strengthen blessed Vincent with apostolic virtue for the evangelizing of the poor and the fostering of the dignity of the clerical state: grant, we beseech thee, that we who venerate his holy merits may also be instructed by the example of his virtues."
    },
    secret: {
      latin: "Præsta nobis, quǽsumus, omnípotens Deus: ut nostræ humilitátis oblátio et pro tuórum tibi grata sit honóre Sanctórum, et nos córpore páriter et mente puríficet.",
      translation: "Grant us, we beseech thee, almighty God: that the offering of our lowliness may be acceptable to thee in honor of thy Saints, and may purify us in body and in mind alike."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedénte beáto Vincéntio Confessóre tuo, per hæc contra ómnia advérsa muniámur.",
      translation: "We beseech thee, almighty God: that we, who have received this heavenly food, may through the intercession of blessed Vincent, thy Confessor, be defended by it against all adversity."
    }
  },

  "martha": {
    collect: {
      latin: "Exáudi nos, Deus, salutáris noster: ut, sicut de beátæ Marthæ Vírginis tuæ festivitáte gaudémus; ita piæ devotiónis erudiámur afféctu.",
      translation: "Graciously hear us, O God our Savior: that as we rejoice in the festival of blessed Martha, thy Virgin, so we may be instructed in the practice of holy devotion."
    },
    secret: {
      latin: "Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit auxílium.",
      translation: "May the offering of thy consecrated people be acceptable to thee, O Lord, in honor of thy Saints: by whose merits it knows that it has received help in time of trouble."
    },
    postcommunion: {
      latin: "Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos réfove, cujus sollémnia celebrámus.",
      translation: "Thou hast satisfied thy family, O Lord, with sacred gifts: refresh us always, we beseech thee, by the intercession of her whose feast we celebrate."
    }
  },

  "john-mary-vianney": {
    collect: {
      latin: "Omnípotens et miséricors Deus, qui sanctum Joánnem Maríam pastoráli stúdio et jugi oratiónis ac pœniténtiæ ardóre mirábilem effecísti: da, quǽsumus; ut, ejus exémplo et intercessióne, ánimas fratrum lucrári Christo, et cum eis ætérnam glóriam cónsequi valeámus.",
      translation: "Almighty and merciful God, who didst make holy John Mary wondrous in pastoral zeal and in the unfailing ardor of prayer and penance: grant, we beseech thee, that by his example and intercession we may be able to win the souls of our brethren for Christ, and to attain everlasting glory with them."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "clare": {
    collect: {
      latin: "Exáudi nos, Deus, salutáris noster: ut, sicut de beátæ Claræ Vírginis tuæ festivitáte gaudémus; ita piæ devotiónis erudiámur afféctu.",
      translation: "Graciously hear us, O God our Savior: that as we rejoice in the festival of blessed Clare, thy Virgin, so we may be instructed in the practice of holy devotion."
    },
    secret: {
      latin: "Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit auxílium.",
      translation: "May the offering of thy consecrated people be acceptable to thee, O Lord, in honor of thy Saints: by whose merits it knows that it has received help in time of trouble."
    },
    postcommunion: {
      latin: "Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos réfove, cujus sollémnia celebrámus.",
      translation: "Thou hast satisfied thy family, O Lord, with sacred gifts: refresh us always, we beseech thee, by the intercession of her whose feast we celebrate."
    }
  },

  "hyacinth": {
    collect: {
      latin: "Deus, qui nos beáti Hyacínthi Confessóris tui ánnua solemnitáte lætíficas: concéde propítius; ut cujus natalítia cólimus, étiam actiónes imitémur.",
      translation: "O God, who dost gladden us with the yearly solemnity of blessed Hyacinth, thy Confessor: mercifully grant that, as we keep his birthday, we may also imitate his deeds."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "john-eudes": {
    collect: {
      latin: "Deus, qui beátum Joánnem, Confessórem tuum, ad cultum sacrórum Córdium Jesu et Maríæ rite promovéndum, mirabíliter inflammásti, et per eum novas in Ecclésia tua famílias congregáre voluísti: præsta, quǽsumus; ut, cujus pia mérita venerámur, virtútum quoque instruámur exémplis.",
      translation: "O God, who didst wondrously enkindle blessed John, thy Confessor, duly to promote devotion to the sacred Hearts of Jesus and Mary, and through him didst will to gather new families in thy Church: grant, we beseech thee, that we who venerate his holy merits may also be instructed by the example of his virtues."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "philip-benizi": {
    collect: {
      latin: "Deus, qui per beátum Philippum Confessórem tuum, exímium nobis humilitátis exémplum tribuísti: da fámulis tuis próspera mundi ex ejus imitatióne despícere, et cœléstia semper inquírere.",
      translation: "O God, who through blessed Philip, thy Confessor, didst grant us an outstanding example of humility: grant thy servants, by following his example, to despise the prosperity of the world and ever to seek the things of heaven."
    },
    secret: {
      latin: "Præsta nobis, quǽsumus, omnípotens Deus: ut nostræ humilitátis oblátio et pro tuórum tibi grata sit honóre Sanctórum, et nos córpore páriter et mente puríficet.",
      translation: "Grant us, we beseech thee, almighty God: that the offering of our lowliness may be acceptable to thee in honor of thy Saints, and may purify us in body and in mind alike."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedénte beáto Philíppo Confessóre tuo, per hæc contra ómnia advérsa muniámur.",
      translation: "We beseech thee, almighty God: that we, who have received this heavenly food, may through the intercession of blessed Philip, thy Confessor, be defended by it against all adversity."
    }
  },

  "zephyrinus": {
    collect: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut beáti Zephyríni Mártyris tui atque Pontíficis, cujus gaudémus méritis, instruámur exémplis.",
      translation: "Grant, we beseech thee, almighty God: that we, who rejoice in the merits of blessed Zephyrinus, thy Martyr and Bishop, may be instructed by his example."
    },
    secret: {
      latin: "Hóstias tibi, Dómine, beáti Zephyríni Mártyris tui atque Pontíficis dicátas méritis, benígnus assúme: et ad perpétuum nobis tríbue proveníre subsídium.",
      translation: "Graciously accept, O Lord, these offerings dedicated through the merits of blessed Zephyrinus, thy Martyr and Bishop: and grant that they may be a lasting help to us."
    },
    postcommunion: {
      latin: "Refécti participatióne múneris sacri, quǽsumus, Dómine, Deus noster: ut, cujus exséquimur cultum, intercedénte beáto Zephyríno Mártyre tuo atque Pontífice, sentiámus efféctum.",
      translation: "Refreshed by partaking of this sacred gift, we beseech thee, O Lord our God: that, through the intercession of blessed Zephyrinus, thy Martyr and Bishop, whose observance we keep, we may feel its effect."
    }
  },

  "rose-of-lima": {
    collect: {
      latin: "Bonórum ómnium largítor, omnípotens Deus, qui beátam Rosam, cœléstis grátiæ rore prævéntam, virginitátis et patiéntiæ decóre Indis floréscere voluísti: da nobis fámulis tuis; ut, in odórem suavitátis ejus curréntes, Christi bonus odor éffici mereámur.",
      translation: "Giver of all good things, almighty God, who didst will that blessed Rose, prevented by the dew of thy heavenly grace, should flourish among the Indies in the beauty of virginity and patience: grant to us thy servants that, running in the odor of her sweetness, we may be found worthy to become the good odor of Christ."
    },
    secret: {
      latin: "Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit auxílium.",
      translation: "May the offering of thy consecrated people be acceptable to thee, O Lord, in honor of thy Saints: by whose merits it knows that it has received help in time of trouble."
    },
    postcommunion: {
      latin: "Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos réfove, cujus sollémnia celebrámus.",
      translation: "Thou hast satisfied thy family, O Lord, with sacred gifts: refresh us always, we beseech thee, by the intercession of her whose feast we celebrate."
    }
  },

  "raymond-nonnatus": {
    collect: {
      latin: "Deus, qui in liberándis fidélibus tuis ab impiórum captivitáte beátum Raymúndum Confessórem tuum mirábilem effecísti: ejus nobis intercessióne concéde; ut, a peccatórum vínculis absolúti, quæ tibi sunt plácita, líberis méntibus exsequámur.",
      translation: "O God, who didst make blessed Raymond, thy Confessor, wondrous in freeing thy faithful from the captivity of the wicked: grant us, by his intercession, that, freed from the bonds of sin, we may carry out with unfettered minds what is pleasing to thee."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "nicholas-tolentino": {
    collect: {
      latin: "Adésto, Dómine, supplicatiónibus nostris, quas in beáti Nicolái Confessóris tui sollemnitáte deférimus: ut, qui nostræ justítiæ fidúciam non habémus, ejus, qui tibi plácuit, précibus adjuvémur.",
      translation: "Attend, O Lord, to our supplications, which we bring thee on the solemnity of blessed Nicholas, thy Confessor: that we, who have no confidence in our own righteousness, may be helped by the prayers of him who was pleasing to thee."
    },
    secret: {
      latin: "Præsta nobis, quǽsumus, omnípotens Deus: ut nostræ humilitátis oblátio et pro tuórum tibi grata sit honóre Sanctórum, et nos córpore páriter et mente puríficet.",
      translation: "Grant us, we beseech thee, almighty God: that the offering of our lowliness may be acceptable to thee in honor of thy Saints, and may purify us in body and in mind alike."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedénte beáto Nicoláo Confessóre tuo, per hæc contra ómnia advérsa muniámur.",
      translation: "We beseech thee, almighty God: that we, who have received this heavenly food, may through the intercession of blessed Nicholas, thy Confessor, be defended by it against all adversity."
    }
  },

  "protus-hyacinth": {
    collect: {
      latin: "Beatórum Mártyrum tuórum Proti et Hyacínthi nos, Dómine, fóveat pretiósa conféssio: et pia júgiter intercéssio tueátur.",
      translation: "May the precious confession of thy blessed Martyrs Protus and Hyacinth cherish us, O Lord: and their loving intercession ever guard us."
    },
    secret: {
      latin: "Pro sanctórum Mártyrum tuórum Proti et Hyacínthi commemoratióne, múnera tibi, Dómine, quæ debémus, exsólvimus: præsta, quǽsumus; ut remédium nobis perpétuæ salútis operéntur.",
      translation: "In commemoration of thy holy Martyrs Protus and Hyacinth, we pay thee, O Lord, the offerings we owe: grant, we beseech thee, that they may work in us a remedy of everlasting salvation."
    },
    postcommunion: {
      latin: "Ut percépta nos, Dómine, tua sancta puríficent: beatórum Mártyrum tuórum Proti et Hyacínthi, quǽsumus, ímploret orátio.",
      translation: "That thy holy gifts, once received, may purify us, O Lord: may the prayer of thy blessed Martyrs Protus and Hyacinth, we beseech thee, entreat it for us."
    }
  },

  "januarius": {
    collect: {
      latin: "Deus, qui nos ánnua sanctórum Mártyrum tuórum Januárii et Sociórum ejus sollemnitáte lætíficas: concéde propítius; ut, quorum gaudémus méritis, accendámur exémplis.",
      translation: "O God, who dost gladden us with the yearly solemnity of thy holy Martyrs Januarius and his Companions: mercifully grant that we, who rejoice in their merits, may be kindled by their example."
    },
    secret: {
      latin: "Oblátis, quǽsumus, Dómine, placáre munéribus: et, intercedéntibus sanctis Martýribus tuis Januário et Sóciis ejus, a cunctis nos defénde perículis.",
      translation: "Be appeased, we beseech thee, O Lord, by the gifts here offered: and, through the intercession of thy holy Martyrs Januarius and his Companions, defend us from all dangers."
    },
    postcommunion: {
      latin: "Hæc nos commúnio, Dómine, purget a crímine: et, intercedéntibus sanctis Martýribus tuis Januário et Sóciis ejus, cœléstis remédii fáciat esse consórtes.",
      translation: "May this communion, O Lord, cleanse us from sin: and, through the intercession of thy holy Martyrs Januarius and his Companions, make us partakers of the heavenly remedy."
    }
  },

  "bruno": {
    collect: {
      latin: "Sancti Brunónis Confessóris tui, quǽsumus, Dómine, intercessiónibus adjuvémur: ut, qui majestátem tuam gráviter delinquéndo offéndimus, ejus méritis et précibus, nostrórum delictórum véniam consequámur.",
      translation: "May we be helped, we beseech thee, O Lord, by the intercession of thy holy Confessor Bruno: that we, who have gravely offended thy majesty by our sins, may obtain through his merits and prayers pardon for our transgressions."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedénte beáto Brunóne Confessóre tuo, per hæc contra ómnia advérsa muniámur.",
      translation: "We beseech thee, almighty God: that we, who have received this heavenly food, may through the intercession of blessed Bruno, thy Confessor, be defended by it against all adversity."
    }
  },

  "edward-confessor": {
    collect: {
      latin: "Deus, qui beátum regem Eduárdum Confessórem tuum æternitátis glória coronásti: fac nos, quǽsumus; ita eum venerári in terris, ut cum eo regnáre possímus in cœlis.",
      translation: "O God, who didst crown blessed King Edward, thy Confessor, with the glory of eternity: grant, we beseech thee, that we may so venerate him on earth that we may be able to reign with him in heaven."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "callistus-i": {
    collect: {
      latin: "Deus, qui nos cónspicis ex nostra infirmitáte defícere: ad amórem tuum nos misericórditer per Sanctórum tuórum exémpla restáura.",
      translation: "O God, who dost see us failing through our own weakness: mercifully restore us to thy love through the example of thy Saints."
    },
    secret: {
      latin: "Mýstica nobis, Dómine, prosit oblátio: quæ nos et a reátibus nostris expédiat, et perpétua salvatióne confírmet.",
      translation: "May this mystical offering profit us, O Lord: may it free us from our guilt, and confirm us in everlasting salvation."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut reátus nostros múnera sacráta puríficent, et recte vivéndi nobis operéntur efféctum.",
      translation: "We beseech thee, almighty God: that these sacred gifts may purify us from our guilt, and work in us the effect of right living."
    }
  },

  "teresa-avila": {
    collect: {
      latin: "Exáudi nos, Deus, salutáris noster: ut sicut de beátæ Terésiæ Vírginis tuæ festivitáte gaudémus; ita cæléstis ejus doctrínæ pábulo nutriámur, et piæ devotiónis erudiámur afféctu.",
      translation: "Graciously hear us, O God our Savior: that as we rejoice in the festival of blessed Teresa, thy Virgin, so we may be nourished with the food of her heavenly teaching, and be instructed in the practice of holy devotion."
    },
    secret: {
      latin: "Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit auxílium.",
      translation: "May the offering of thy consecrated people be acceptable to thee, O Lord, in honor of thy Saints: by whose merits it knows that it has received help in time of trouble."
    },
    postcommunion: {
      latin: "Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos réfove, cujus sollémnia celebrámus.",
      translation: "Thou hast satisfied thy family, O Lord, with sacred gifts: refresh us always, we beseech thee, by the intercession of her whose feast we celebrate."
    }
  },

  "peter-alcantara": {
    collect: {
      latin: "Deus, qui beátum Petrum Confessórem tuum admirábilis pœniténtiæ et altíssimæ contemplatiónis múnere illustráre dignátus es: da nobis, quǽsumus; ut, ejus suffragántibus méritis, carne mortificáti, facílius cœléstia capiámus.",
      translation: "O God, who didst vouchsafe to make blessed Peter, thy Confessor, illustrious by the gift of admirable penance and the loftiest contemplation: grant us, we beseech thee, that, mortified in the flesh through his prevailing merits, we may the more readily lay hold of the things of heaven."
    },
    secret: {
      latin: "Præsta nobis, quǽsumus, omnípotens Deus: ut nostræ humilitátis oblátio et pro tuórum tibi grata sit honóre Sanctórum, et nos córpore páriter et mente puríficet.",
      translation: "Grant us, we beseech thee, almighty God: that the offering of our lowliness may be acceptable to thee in honor of thy Saints, and may purify us in body and in mind alike."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedénte beáto Petro Confessóre tuo, per hæc contra ómnia advérsa muniámur.",
      translation: "We beseech thee, almighty God: that we, who have received this heavenly food, may through the intercession of blessed Peter, thy Confessor, be defended by it against all adversity."
    }
  },

  "evaristus": {
    collect: {
      latin: "Gregem tuum, Pastor ætérne, placátus inténde: et, per beátum Evarístum Mártyrem tuum atque Summum Pontíficem, perpétua protectióne custódi; quem totíus Ecclésiæ præstitísti esse pastórem.",
      translation: "Look with favor, O eternal Shepherd, upon thy flock: and keep it under perpetual protection through blessed Evaristus, thy Martyr and Supreme Pontiff, whom thou didst set to be shepherd of the whole Church."
    },
    secret: {
      latin: "Oblátis munéribus, quǽsumus, Dómine, Ecclésiam tuam benígnus illúmina: ut, et gregis tui profíciat ubíque succéssus, et grati fiant nómini tuo, te gubernánte, pastóres.",
      translation: "By the gifts here offered, we beseech thee, O Lord, graciously enlighten thy Church: that thy flock may everywhere prosper, and its shepherds, under thy guidance, may be pleasing to thy name."
    },
    postcommunion: {
      latin: "Refectióne sancta enutrítam gubérna, quǽsumus, Dómine, tuam placátus Ecclésiam: ut, poténti moderatióne dirécta, et increménta libertátis accípiat et in religiónis integritáte persístat.",
      translation: "Graciously govern thy Church, O Lord, we beseech thee, nourished as she is with holy refreshment: that, guided by thy mighty rule, she may both receive an increase of freedom and abide in the integrity of the faith."
    }
  },

  "andrew-avellino": {
    collect: {
      latin: "Deus, qui in corde beáti Andréæ Confessóris tui, per árduum cotídie in virtútibus proficiéndi votum, admirábiles ad te ascensiónes disposuísti: concéde nobis, ipsíus méritis et intercessióne, ita ejúsdem grátiæ partícipes fieri; ut, perfectióra semper exsequéntes, ad glóriæ tuæ fastígium felíciter perducámur.",
      translation: "O God, who didst dispose wondrous ascents to thyself in the heart of blessed Andrew, thy Confessor, through his daily resolve to advance in virtue, however arduous: grant us, by his merits and intercession, so to share in that same grace that, ever pursuing what is more perfect, we may be happily brought to the height of thy glory."
    },
    secret: {
      latin: "Laudis tibi, Dómine, hóstias immolámus in tuórum commemoratióne Sanctórum quibus nos et præséntibus éxui malis confídimus et futúris.",
      translation: "We offer thee, O Lord, sacrifices of praise in commemoration of thy Saints: by whom we trust to be delivered both from present and future evils."
    },
    postcommunion: {
      latin: "Refécti cibo potúque cœlésti, Deus noster, te súpplices exorámus: ut, in cujus hæc commemoratióne percépimus, ejus muniámur et précibus.",
      translation: "Refreshed with heavenly food and drink, O God, we humbly beseech thee: that we may be defended by the prayers of him in whose commemoration we have received these gifts."
    }
  },

  "martin-of-tours": {
    collect: {
      latin: "Deus, qui cónspicis, quia ex nulla nostra virtúte subsístimus: concéde propítius; ut, intercessióne beáti Martíni Confessóris tui atque Pontíficis, contra ómnia advérsa muniámur.",
      translation: "O God, who dost see that we subsist by no power of our own: mercifully grant that, through the intercession of blessed Martin, thy Confessor and Bishop, we may be defended against all adversity."
    },
    secret: {
      latin: "Sanctífica, quǽsumus, Dómine Deus, hæc múnera, quæ in sollemnitáte sancti Antístitis tui Martíni offérimus: ut per ea vita nostra inter advérsa et próspera ubíque dirigátur.",
      translation: "Sanctify, we beseech thee, O Lord God, these gifts, which we offer on the solemnity of thy holy Bishop Martin: that by them our life may everywhere be guided amid adversity and prosperity."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, Dómine, Deus noster: ut, quorum festivitáte votíva sunt sacraménta, eórum intercessióne salutária nobis reddántur.",
      translation: "Grant, we beseech thee, O Lord our God: that these sacraments, offered as a votive gift on this feast, may through his intercession become for us a means of salvation."
    }
  },

  "martin-i": {
    collect: {
      latin: "Gregem tuum, Pastor ætérne, placátus inténde: et, per beátum Martínum Mártyrem tuum atque Summum Pontíficem, perpétua protectióne custódi; quem totíus Ecclésiæ præstitísti esse pastórem.",
      translation: "Look with favor, O eternal Shepherd, upon thy flock: and keep it under perpetual protection through blessed Martin, thy Martyr and Supreme Pontiff, whom thou didst set to be shepherd of the whole Church."
    },
    secret: {
      latin: "Oblátis munéribus, quǽsumus, Dómine, Ecclésiam tuam benígnus illúmina: ut, et gregis tui profíciat ubíque succéssus, et grati fiant nómini tuo, te gubernánte, pastóres.",
      translation: "By the gifts here offered, we beseech thee, O Lord, graciously enlighten thy Church: that thy flock may everywhere prosper, and its shepherds, under thy guidance, may be pleasing to thy name."
    },
    postcommunion: {
      latin: "Refectióne sancta enutrítam gubérna, quǽsumus, Dómine, tuam placátus Ecclésiam: ut, poténti moderatióne dirécta, et increménta libertátis accípiat et in religiónis integritáte persístat.",
      translation: "Graciously govern thy Church, O Lord, we beseech thee, nourished as she is with holy refreshment: that, guided by thy mighty rule, she may both receive an increase of freedom and abide in the integrity of the faith."
    }
  },

  "didacus": {
    collect: {
      latin: "Omnípotens sempitérne Deus, qui dispositióne mirábili infírma mundi éligis, ut fórtia quæque confúndas: concéde propítius humilitáti nostræ; ut, piis beáti Dídaci Confessóris tui précibus, ad perénnem in cœlis glóriam sublimári mereámur.",
      translation: "Almighty and everlasting God, who by a wondrous disposition dost choose the weak things of the world to confound the strong: mercifully grant to our lowliness that, by the loving prayers of blessed Didacus, thy Confessor, we may be found worthy to be raised to everlasting glory in heaven."
    },
    secret: {
      latin: "Præsta nobis, quǽsumus, omnípotens Deus: ut nostræ humilitátis oblátio et pro tuórum tibi grata sit honóre Sanctórum, et nos córpore páriter et mente puríficet.",
      translation: "Grant us, we beseech thee, almighty God: that the offering of our lowliness may be acceptable to thee in honor of thy Saints, and may purify us in body and in mind alike."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedénte beáto Dídaco Confessóre tuo, per hæc contra ómnia advérsa muniámur.",
      translation: "We beseech thee, almighty God: that we, who have received this heavenly food, may through the intercession of blessed Didacus, thy Confessor, be defended by it against all adversity."
    }
  },

  "gertrude": {
    collect: {
      latin: "Deus, qui in corde beátæ Gertrúdis Vírginis jucúndam tibi mansiónem præparásti: ipsíus méritis et intercessióne; cordis nostri máculas cleménter abstérge, et ejúsdem tríbue gaudére consórtio.",
      translation: "O God, who didst prepare for thyself a pleasant dwelling in the heart of blessed Gertrude, thy Virgin: by her merits and intercession mercifully wipe away the stains of our heart, and grant us to rejoice in her fellowship."
    },
    secret: {
      latin: "Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit auxílium.",
      translation: "May the offering of thy consecrated people be acceptable to thee, O Lord, in honor of thy Saints: by whose merits it knows that it has received help in time of trouble."
    },
    postcommunion: {
      latin: "Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos réfove, cujus sollémnia celebrámus.",
      translation: "Thou hast satisfied thy family, O Lord, with sacred gifts: refresh us always, we beseech thee, by the intercession of her whose feast we celebrate."
    }
  },

  "gregory-thaumaturgus": {
    collect: {
      latin: "Da, quǽsumus, omnípotens Deus: ut beáti Gregórii Confessóris tui atque Pontíficis venerándа solémnitas, et devotiónem nobis áugeat et salútem.",
      translation: "Grant, we beseech thee, almighty God: that the venerable solemnity of blessed Gregory, thy Confessor and Bishop, may both increase our devotion and further our salvation."
    },
    secret: {
      latin: "Sancti tui, quǽsumus, Dómine, nos ubíque lætíficant: ut, dum eórum mérita recólimus, patrocínia sentiámus.",
      translation: "May thy Saints, we beseech thee, O Lord, ever gladden us: that, while we call to mind their merits, we may feel their patronage."
    },
    postcommunion: {
      latin: "Præsta, quǽsumus, omnípotens Deus: ut, de percéptis munéribus grátias exhibéntes, intercedénte beáto Gregório Confessóre tuo atque Pontífice, benefícia potióra sumámus.",
      translation: "Grant, we beseech thee, almighty God: that, giving thanks for the gifts we have received, we may, through the intercession of blessed Gregory, thy Confessor and Bishop, obtain still greater blessings."
    }
  },

  "felix-of-valois": {
    collect: {
      latin: "Deus, qui beátum Felícem Confessórem tuum ex erémo ad munus rediméndi captívos cǽlitus vocáre dignátus es: præsta, quǽsumus; ut per grátiam tuam ex peccatórum nostrórum captivitáte, ejus intercessióne, liberáti, ad cæléstem pátriam perducámur.",
      translation: "O God, who didst vouchsafe to call blessed Felix, thy Confessor, from the desert unto the task of ransoming captives: grant, we beseech thee, that, freed by thy grace through his intercession from the captivity of our sins, we may be brought to our heavenly homeland."
    },
    secret: {
      latin: "Præsta nobis, quǽsumus, omnípotens Deus: ut nostræ humilitátis oblátio et pro tuórum tibi grata sit honóre Sanctórum, et nos córpore páriter et mente puríficet.",
      translation: "Grant us, we beseech thee, almighty God: that the offering of our lowliness may be acceptable to thee in honor of thy Saints, and may purify us in body and in mind alike."
    },
    postcommunion: {
      latin: "Quǽsumus, omnípotens Deus: ut, qui cœléstia aliménta percépimus, intercedénte beáto Felíce Confessóre tuo, per hæc contra ómnia advérsa muniámur.",
      translation: "We beseech thee, almighty God: that we, who have received this heavenly food, may through the intercession of blessed Felix, thy Confessor, be defended by it against all adversity."
    }
  },

  "cecilia": {
    collect: {
      latin: "Deus, qui nos ánnua beátæ Cæcíliæ Vírginis et Mártyris tuæ sollemnitáte lætíficas: da, ut, quam venerámur offício, étiam piæ conversatiónis sequámur exémplo.",
      translation: "O God, who dost gladden us with the yearly solemnity of blessed Cecilia, thy Virgin and Martyr: grant that we may follow the example of her holy life, even as we venerate her in the sacred office."
    },
    secret: {
      latin: "Hæc hóstia, Dómine, placatiónis et laudis, quǽsumus: ut, intercedénte beáta Cæcília Vírgine et Mártyre tua, nos propitiatióne tua dignos semper effíciat.",
      translation: "May this victim of atonement and praise, O Lord, we beseech thee, through the intercession of blessed Cecilia, thy Virgin and Martyr, ever render us worthy of thy favor."
    },
    postcommunion: {
      latin: "Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos réfove, cujus sollémnia celebrámus.",
      translation: "Thou hast satisfied thy family, O Lord, with sacred gifts: refresh us always, we beseech thee, by the intercession of her whose feast we celebrate."
    }
  },

  "clement-i": {
    collect: {
      latin: "Deus, qui nos ánnua beáti Cleméntis Mártyris tui atque Pontíficis sollemnitáte lætíficas: concéde propítius; ut, cujus natalítia cólimus, virtútem quoque passiónis imitémur.",
      translation: "O God, who dost gladden us with the yearly solemnity of blessed Clement, thy Martyr and Bishop: mercifully grant that, as we keep his birthday, we may also imitate the virtue of his passion."
    },
    secret: {
      latin: "Múnera tibi, Dómine, obláta sanctífica: et, intercedénte beáto Cleménte Mártyre tuo atque Pontífice, per hæc nos a peccatórum nostrórum máculis emúnda.",
      translation: "Sanctify, O Lord, the offerings brought to thee: and, through the intercession of blessed Clement, thy Martyr and Bishop, cleanse us by them from the stains of our sins."
    },
    postcommunion: {
      latin: "Córporis sacri et pretiósi Sánguinis repléti libámine, quǽsumus, Dómine, Deus noster: ut, quod pia devotióne gérimus; intercedénte beáto Cleménte Mártyre tuo atque Pontífice, certa redemptióne capiámus.",
      translation: "Filled with the drink-offering of thy sacred Body and precious Blood, we beseech thee, O Lord our God: that what we perform in holy devotion, we may, through the intercession of blessed Clement, thy Martyr and Bishop, receive with sure redemption."
    }
  },

  "john-of-the-cross": {
    collect: {
      latin: "Deus, qui sanctum Joánnem Confessórem tuum atque Doctórem perféctæ sui abnegatiónis et Crucis amatórem exímium effecísti: concéde; ut, ejus imitatióni júgiter inhæréntes, glóriam assequámur ætérnam.",
      translation: "O God, who didst make holy John, thy Confessor and Doctor, an outstanding lover of perfect self-denial and of the Cross: grant that, ever cleaving to his example, we may attain to everlasting glory."
    },
    secret: {
      latin: "Sancti Joánnis Pontíficis tui atque Doctóris nobis, Dómine, pia non desit orátio: quæ et múnera nostra concíliet; et tuam nobis indulgéntiam semper obtíneat.",
      translation: "May the loving prayer of thy holy Bishop and Doctor John never fail us, O Lord: may it both commend our offerings, and ever obtain for us thy forgiveness."
    },
    postcommunion: {
      latin: "Ut nobis, Dómine, tua sacrifícia dent salútem: beátus Joánnes Póntifex tuus et Doctor egrégius, quǽsumus, precátor accédat.",
      translation: "That thy sacrifice may bring us salvation, O Lord, we beseech thee that blessed John, thy Bishop and renowned Doctor, may come to intercede for us."
    }
  },

  "catherine-alexandria": {
    collect: {
      latin: "Deus, qui dedísti legem Móysi in summitáte montis Sínai, et in eódem loco per sanctos Angelos tuos corpus beátæ Catharínæ Vírginis et Mártyris tuæ mirabíliter collocásti: præsta, quǽsumus; ut, ejus méritis et intercessióne, ad montem, qui Christus est, perveníre valeámus.",
      translation: "O God, who didst give the law to Moses on the summit of Mount Sinai, and in that same place didst wondrously lay, by thy holy Angels, the body of blessed Catherine, thy Virgin and Martyr: grant, we beseech thee, that by her merits and intercession we may be enabled to come to the mountain which is Christ."
    },
    secret: {
      latin: "Súscipe, Dómine, múnera, quæ in beátæ Catharínæ Vírginis et Mártyris tuæ sollemnitáte deférimus: cujus nos confídimus patrocínio liberári.",
      translation: "Receive, O Lord, the gifts which we bring on the solemnity of blessed Catherine, thy Virgin and Martyr: by whose patronage we trust to be set free."
    },
    postcommunion: {
      latin: "Auxiliéntur nobis, Dómine, sumpta mystéria: et, intercedénte beáta Catharína Vírgine et Mártyre tua, sempitérna fáciant protectióne gaudére.",
      translation: "May the mysteries we have received help us, O Lord: and, through the intercession of blessed Catherine, thy Virgin and Martyr, grant us to rejoice in everlasting protection."
    }
  },

  "ambrose": {
    collect: {
      latin: "Deus, qui pópulo tuo ætérnæ salútis beátum Ambrósium minístrum tribuísti: præsta, quǽsumus; ut, quem Doctórem vitæ habúimus in terris, intercessórem habére mereámur in cœlis.",
      translation: "O God, who didst give blessed Ambrose to thy people as a minister of eternal salvation: grant, we beseech thee, that we who had him for teacher of life on earth may be found worthy to have him for our intercessor in heaven."
    },
    secret: {
      latin: "Omnípotens sempitérne Deus, múnera tuæ majestáti obláta, per intercessiónem beáti Ambrósii Confessóris tui atque Pontíficis, ad perpétuam nobis fac proveníre salútem.",
      translation: "Almighty and everlasting God, grant that these gifts offered to thy majesty may, through the intercession of blessed Ambrose, thy Confessor and Bishop, avail to our everlasting salvation."
    },
    postcommunion: {
      latin: "Sacraménta salútis nostræ suscipiéntes, concéde, quǽsumus, omnípotens Deus: ut beáti Ambrósii Confessóris tui atque Pontíficis nos ubíque orátio ádjuvet; in cujus veneratióne hæc tuæ obtúlimus majestáti.",
      translation: "As we receive the sacraments of our salvation, grant, we beseech thee, almighty God: that the prayer of blessed Ambrose, thy Confessor and Bishop, may everywhere help us, in whose honor we have offered these gifts to thy majesty."
    }
  },

  "damasus": {
    collect: {
      latin: "Gregem tuum, Pastor ætérne, placátus inténde: et, per beátum Dámasum Summum Pontíficem, perpétua protectióne custódi; quem totíus Ecclésiæ præstitísti esse pastórem.",
      translation: "Look with favor, O eternal Shepherd, upon thy flock: and keep it under perpetual protection through blessed Damasus, thy Supreme Pontiff, whom thou didst set to be shepherd of the whole Church."
    },
    secret: {
      latin: "Oblátis munéribus, quǽsumus, Dómine, Ecclésiam tuam benígnus illúmina: ut, et gregis tui profíciat ubíque succéssus, et grati fiant nómini tuo, te gubernánte, pastóres.",
      translation: "By the gifts here offered, we beseech thee, O Lord, graciously enlighten thy Church: that thy flock may everywhere prosper, and its shepherds, under thy guidance, may be pleasing to thy name."
    },
    postcommunion: {
      latin: "Refectióne sancta enutrítam gubérna, quǽsumus, Dómine, tuam placátus Ecclésiam: ut, poténti moderatióne dirécta, et increménta libertátis accípiat et in religiónis integritáte persístat.",
      translation: "Graciously govern thy Church, O Lord, we beseech thee, nourished as she is with holy refreshment: that, guided by thy mighty rule, she may both receive an increase of freedom and abide in the integrity of the faith."
    }
  },

  "lucy": {
    collect: {
      latin: "Exáudi nos, Deus, salutáris noster: ut sicut de beátæ Lúciæ Vírginis et Mártyris tuæ festivitáte gaudémus; ita piæ devotiónis erudiámur afféctu.",
      translation: "Graciously hear us, O God our Savior: that as we rejoice in the festival of blessed Lucy, thy Virgin and Martyr, so we may be instructed in the practice of holy devotion."
    },
    secret: {
      latin: "Accépta tibi sit, Dómine, sacrátæ plebis oblátio pro tuórum honóre Sanctórum: quorum se méritis de tribulatióne percepísse cognóscit auxílium.",
      translation: "May the offering of thy consecrated people be acceptable to thee, O Lord, in honor of thy Saints: by whose merits it knows that it has received help in time of trouble."
    },
    postcommunion: {
      latin: "Satiásti, Dómine, famíliam tuam munéribus sacris: ejus, quǽsumus, semper interventióne nos réfove, cujus sollémnia celebrámus.",
      translation: "Thou hast satisfied thy family, O Lord, with sacred gifts: refresh us always, we beseech thee, by the intercession of her whose feast we celebrate."
    }
  },

  "eusebius": {
    collect: {
      latin: "Deus, qui nos beáti Eusébii Mártyris tui atque Pontíficis ánnua solemnitáte lætíficas: concéde propítius; ut, cujus natalítia cólimus, de ejúsdem étiam protectióne gaudeámus.",
      translation: "O God, who dost gladden us with the yearly solemnity of blessed Eusebius, thy Martyr and Bishop: mercifully grant that, as we keep his birthday, we may also rejoice in his protection."
    },
    secret: {
      latin: "Múnera tibi, Dómine, dicáta sanctífica: et, intercedénte beáto Eusébio Mártyre tuo atque Pontífice, per éadem nos placátus inténde.",
      translation: "Sanctify, O Lord, the offerings dedicated to thee: and, through the intercession of blessed Eusebius, thy Martyr and Bishop, mercifully look upon us because of them."
    },
    postcommunion: {
      latin: "Hæc nos commúnio, Dómine, purget a crímine: et, intercedénte beáto Eusébio Mártyre tuo atque Pontífice, cœléstis remédii fáciat esse consórtes.",
      translation: "May this communion, O Lord, cleanse us from sin: and, through the intercession of blessed Eusebius, thy Martyr and Bishop, make us partakers of the heavenly remedy."
    }
  }
};
