/**
 * Companies: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedCompanies: EntityInput[] = [
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "abdera-therapeutics",
    "name": "Abdera Therapeutics",
    "hq": "Vancouver",
    "country": "CA",
    "companyType": "radiopharma",
    "stage": "startup",
    "website": "https://www.biospace.com/abdera-therapeutics-debuts-with-142-million-in-financing-to-engineer-and-advance-best-in-class-antibody-based-radiopharmaceuticals-for-cancer",
    "technologies": [
      "radioimmunotherapy",
      "targeted-alpha-therapy",
      "radioligand-therapy"
    ],
    "targets": [
      "dll3"
    ],
    "indications": [
      "sclc"
    ],
    "tldr": "Abdera Therapeutics engineered antibodies that carry a radioactive isotope to cancer cells, tuning how long they circulate so more radiation reaches the tumour and less reaches healthy tissue. Its first medicine targets a protein on small cell lung cancer.",
    "summary": "Abdera Therapeutics, based in Vancouver and Menlo Park, California, developed antibody-based radiopharmaceuticals using its ROVEr antibody engineering platform, which tunes pharmacokinetic properties so that alpha- or beta-emitting isotopes can be matched to targets with a wide range of antigen expression. Its lead programme targets DLL3 for small cell lung cancer and other solid tumours and was advancing toward the clinic at launch; founding partners were adMare BioInnovations and AbCellera. The company emerged in April 2023 with USD 142 million in combined Series A and B financing, the Series A led by Versant Ventures and Amplitude Ventures and the USD 110 million Series B led by venBio Partners with Viking Global Investors, Qiming Venture Partners USA and RTW Investments.",
    "funding": [
      {
        "round": "Series B",
        "year": 2023,
        "source": "https://endpoints.news/abdera-raises-110m-to-push-targeted-radiotherapies-where-they-havent-gone-before/",
        "amountUsd": 110000000,
        "note": "Led by venBio Partners; the company's launch release reports USD 142 million in combined Series A and B financing"
      }
    ],
    "notes": [
      "Company website abderatx.com returned HTTP 503 or no response on every attempt, so the website field points to the fetched press release copy instead. Current status is uncertain: search headlines in 2026 refer to an auction of Abdera laboratory equipment and to biotechs that closed, but no fetched primary source confirms a wind-down, so stage is left at startup. Clinical status of the DLL3 programme (a phase 1a start was reported in trade press) not confirmed from fetched pages."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.biospace.com/abdera-therapeutics-debuts-with-142-million-in-financing-to-engineer-and-advance-best-in-class-antibody-based-radiopharmaceuticals-for-cancer"
      },
      {
        "label": "Endpoints News: Abdera raises $110M Series B",
        "url": "https://endpoints.news/abdera-raises-110m-to-push-targeted-radiotherapies-where-they-havent-gone-before/"
      }
    ]
  },
  {
    "id": "abx-advanced-biochemical-compounds",
    "drugs": [
      "psma-1007-f18"
    ],
    "kind": "company",
    "name": "ABX advanced biochemical compounds",
    "aka": [
      "ABX advanced biochemical compounds GmbH",
      "ABX GmbH",
      "ABX"
    ],
    "hq": "Radeberg",
    "country": "DE",
    "companyType": "pharma",
    "website": "https://www.abx.de",
    "stage": "private-large",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-sponsor"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor websites)",
      "editedOn": "2026-09-11"
    },
    "tldr": "ABX is a German maker of the precursors and kits behind PET imaging tracers, including PSMA agents for prostate cancer, and sponsors the trials that register them.",
    "summary": "ABX advanced biochemical compounds, based in Radeberg near Dresden, manufactures radiopharmaceutical precursors, cold kits and labelling chemistry used to produce PET tracers, among them PSMA-directed agents for prostate cancer imaging developed with the German Cancer Research Center. It acts as lead sponsor of phase 3 diagnostic trials registered on ClinicalTrials.gov.",
    "indications": [
      "prostate"
    ],
    "technologies": [
      "psma-pet"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.abx.de"
      },
      {
        "label": "ClinicalTrials.gov: trials led by ABX advanced biochemical compounds",
        "url": "https://clinicaltrials.gov/search?lead=ABX%20advanced%20biochemical%20compounds"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.acrotechbiopharma.com"
      }
    ],
    "id": "acrotech-biopharma",
    "drugs": [
      "ibritumomab-tiuxetan"
    ],
    "indications": [
      "follicular-lymphoma"
    ],
    "name": "Acrotech Biopharma",
    "hq": "East Windsor, New Jersey",
    "country": "US",
    "companyType": "pharma",
    "website": "https://www.acrotechbiopharma.com",
    "tldr": "Acrotech Biopharma, part of Aurobindo, owns the former Spectrum Pharmaceuticals haematology portfolio: the radioimmunotherapy Zevalin, pralatrexate (Folotyn), belinostat (Beleodaq) and vincristine liposome (Marqibo).",
    "summary": "Acrotech Biopharma, based in East Windsor, New Jersey, and part of Aurobindo, owns the former Spectrum Pharmaceuticals haematology portfolio: the radioimmunotherapy Zevalin, pralatrexate as Folotyn, belinostat as Beleodaq and vincristine liposome as Marqibo. It acquired Spectrum's marketed products in 2019, including Zevalin, or ibritumomab tiuxetan, for follicular lymphoma, Folotyn and Beleodaq for peripheral T-cell lymphoma, Marqibo and Evomela, a melphalan formulation. Nuclide links it to the ibritumomab tiuxetan drug record. Whether the only approved radioimmunotherapy for lymphoma survives commercially in an owner focused on generics is the open question. Ibritumomab tiuxetan has its own page."
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "actinium-pharmaceuticals",
    "drugs": [
      "iomab-b"
    ],
    "name": "Actinium Pharmaceuticals",
    "hq": "New York, NY",
    "country": "US",
    "ticker": "ATNM",
    "companyType": "radiopharma",
    "stage": "public",
    "website": "https://www.actiniumpharma.com/",
    "technologies": [
      "radioimmunotherapy",
      "targeted-alpha-therapy"
    ],
    "indications": [
      "prostate"
    ],
    "tldr": "Actinium Pharmaceuticals attaches the alpha-emitting isotope actinium-225 to antibodies to treat acute myeloid leukaemia and, more recently, solid tumours such as prostate and lung cancer. It is a small listed company whose lead programme is approaching new clinical milestones.",
    "summary": "Actinium Pharmaceuticals, Inc. (NYSE American: ATNM), headquartered in New York, develops targeted radiotherapies based on actinium-225 antibody radioconjugates and holds proprietary Ac-225 manufacturing technology. The lead programme Actimab-A is a CD33-targeting, mutation-agnostic therapy for relapsed or refractory acute myeloid leukaemia, with patents extending to solid tumours via myeloid-derived suppressor cells; the company expects clinical milestones from the fourth quarter of 2026. ATNM-400 is a first-in-class Ac-225 pan-tumour radiotherapy in preclinical development for metastatic castration-resistant prostate cancer, non-small cell lung cancer and breast cancer, with 2026 SNMMI data in androgen receptor inhibitor-resistant prostate models and KRAS and EGFR mutant lung models. Iomab-ACT is a targeted conditioning programme. In 2026 the company received NYSE American listing standards notices and appointed Steffen Heeger as Chief Medical Officer.",
    "notes": [
      "Ticker, exchange and HQ confirmed via SEC EDGAR submissions data (CIK 0001388320). Public company; no private rounds listed. Founding year not sourced."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.actiniumpharma.com/"
      },
      {
        "label": "August 2026 Actimab-A and listing update",
        "url": "https://ir.actiniumpharma.com/press-releases/detail/525/actinium-pharmaceuticals-announces-actimab-a-intellectual"
      },
      {
        "label": "Press releases",
        "url": "https://ir.actiniumpharma.com/press-releases"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "advanced-accelerator-applications",
    "trials": [
      "nct05849298",
      "nct07047118",
      "nct06784752",
      "nct04939610",
      "nct05658003",
      "nct03972488",
      "nct06247995"
    ],
    "name": "Advanced Accelerator Applications (Novartis)",
    "hq": "Saint-Genis-Pouilly",
    "country": "FR",
    "companyType": "radiopharma",
    "website": "https://www.adacap.com",
    "founded": 2002,
    "tldr": "The CERN spin-out that Novartis bought in 2018 for Lutathera, which now makes Pluvicto and the Locametz and Netspot imaging kits.",
    "summary": "Advanced Accelerator Applications, based in Saint-Genis-Pouilly, France, and founded in 2002, is the CERN spin-out that Novartis bought in 2018 for Lutathera, and it now makes Pluvicto and the Locametz and Netspot imaging kits. AAA developed Lutathera, or 177Lu-DOTATATE, and the Netspot gallium-68 DOTATATE kit before its 3.9 billion dollar acquisition, and as Novartis' radioligand unit it manufactures Locametz, the gallium-68 PSMA-11 kit, and Pluvicto and runs the Novartis radioligand production network in Europe and the United States. Nuclide links it to prostate cancer and neuroendocrine tumours, to PSMA PET, somatostatin receptor PET and beta-emitter radioligand therapy, and to Novartis. Whether its production network can meet demand as radioligand indications widen is the open question. Locametz and Pluvicto have their own pages.",
    "drugs": [
      "locametz",
      "ga68-dotatate",
      "pluvicto"
    ],
    "companies": [
      "novartis"
    ],
    "technologies": [
      "psma-pet",
      "sstr-pet",
      "radioligand-therapy"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.adacap.com"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "aktis-oncology",
    "name": "Aktis Oncology",
    "hq": "Boston, MA",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.aktisoncology.com",
    "ticker": "AKTS",
    "tldr": "Miniprotein alpha-radiopharmaceutical company; the first biotech IPO of 2026 (~$365M) funds Ac-225 programmes against Nectin-4 and B7-H3.",
    "summary": "Aktis Oncology, based in Boston and listed as AKTS, is a miniprotein alpha-radiopharmaceutical company whose IPO, closed on 12 January 2026 for about 365 million dollars, was the first biotech IPO of the year and funds actinium-225 programmes against Nectin-4 and B7-H3. Its lead, 225Ac-AKY-1189 against Nectin-4, is in a US phase 1b; 225Ac-AKY-2519 against B7-H3 has an IND planned for the first half of 2026 after diagnostic imaging and dosimetry studies; an in-house cGMP radiopharmaceutical facility is due in the second half of 2026; and large pharma investors back it. Nuclide links it to bladder, small-cell lung and prostate cancer, to targeted alpha therapy and alpha-emitter nanogenerators, and to Nectin-4 and B7-H3 as targets. Whether miniproteins can deliver alpha emitters safely is the open question. The targeted alpha therapy page carries the field.",
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "targets": [
      "nectin4",
      "b7h3"
    ],
    "indications": [
      "sclc",
      "prostate"
    ],
    "tags": [
      "frontier"
    ],
    "links": [
      {
        "label": "IPO coverage",
        "url": "https://www.fiercebiotech.com/biotech/1st-biotech-ipo-2026-sees-aktis-bring-318m-upsized-offering"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "alpha-9-oncology",
    "name": "Alpha-9 Oncology",
    "hq": "Vancouver",
    "country": "CA",
    "companyType": "radiopharma",
    "stage": "growth",
    "website": "https://www.a9oncology.com/",
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy",
      "pet"
    ],
    "tldr": "Alpha-9 Oncology designs bespoke molecules that deliver radioactive isotopes to cancer cells, with early human trials under way in melanoma and in breast and other solid tumours.",
    "summary": "Alpha-9 Oncology is a clinical-stage radiopharmaceutical company with offices in Vancouver and Boston. It takes a modular approach, optimising each element of a radiotherapeutic (binder, linker, chelator and isotope) and pairing therapeutic agents with imaging companions. A9-3408, an actinium-225 radiotherapeutic targeting melanocortin 1 receptor (MC1R), began a phase 1 study in melanoma in December 2025, following the 68Ga imaging agent A9-3202 that entered the clinic in 2024. In September 2026 the company dosed the first patient in a phase 1 study of two GRPR-targeting compounds, 225Ac-A9-0642 and 177Lu-A9-0631, in breast cancer and other solid tumours, with data expected in late 2027. Alpha-9 has an actinium-225 supply agreement with ITM (April 2025). In October 2024 it closed an oversubscribed USD 175 million Series C led by Lightspeed Venture Partners and Ascenta Capital. Paul Blanchfield was appointed CEO in November 2025.",
    "funding": [
      {
        "round": "Series C",
        "year": 2024,
        "source": "https://www.a9oncology.com/alpha-9-oncology-inc-announces-175-million-oversubscribed-series-c-financing-to-advance-robust-clinical-pipeline-of-radiopharmaceuticals/",
        "amountUsd": 175000000
      }
    ],
    "notes": [
      "The older domain alpha9oncology.com is now parked; current site is a9oncology.com. Earlier rounds not fetched."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.a9oncology.com/"
      },
      {
        "label": "Series C press release",
        "url": "https://www.a9oncology.com/alpha-9-oncology-inc-announces-175-million-oversubscribed-series-c-financing-to-advance-robust-clinical-pipeline-of-radiopharmaceuticals/"
      },
      {
        "label": "GRPR phase 1 first patient dosed",
        "url": "https://www.a9oncology.com/alpha-9-oncology-doses-first-patient-in-phase-1-clinical-trial-evaluating-grpr-targeted-radiotherapeutics-across-multiple-solid-tumors/"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "id": "ansto",
    "name": "ANSTO (Australian Nuclear Science and Technology Organisation)",
    "aka": [
      "ANSTO Nuclear Medicine"
    ],
    "hq": "Lucas Heights, Sydney",
    "country": "AU",
    "companyType": "radiopharma",
    "website": "https://www.ansto.gov.au",
    "stage": "private-large",
    "founded": 1987,
    "tldr": "ANSTO runs the OPAL research reactor near Sydney and a molybdenum-99 plant that supplies Australia's nuclear medicine and exports, and produces lutetium-177 for radioligand therapy.",
    "summary": "The Australian Nuclear Science and Technology Organisation operates the OPAL reactor at Lucas Heights, commissioned in 2007, and the ANSTO Nuclear Medicine molybdenum-99 processing plant opened in 2019 to serve domestic technetium generators and export. It also produces non-carrier-added lutetium-177 and other isotopes and runs a national radiopharmaceutical distribution operation. Outages at the processing plant in its first years produced domestic shortages and imports from other processors.",
    "technologies": [
      "research-reactor-isotope-production",
      "therapy-isotope-supply-chain",
      "radiopharmacy-network"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.ansto.gov.au"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "ariceum-therapeutics",
    "name": "Ariceum Therapeutics",
    "hq": "Berlin",
    "country": "DE",
    "companyType": "radiopharma",
    "stage": "startup",
    "website": "https://www.biospace.com/press-releases/ariceum-therapeutics-appoints-david-schilansky-as-chief-executive-officer-and-announces-new-leadership-to-advance-next-phase-of-development",
    "technologies": [
      "targeted-alpha-therapy",
      "radioligand-therapy"
    ],
    "indications": [
      "sclc"
    ],
    "tldr": "Ariceum Therapeutics is a Berlin company developing a treatment that carries the alpha-emitting isotope actinium-225 to small cell lung cancer and Merkel cell skin cancer. Its first human trial began in late 2025.",
    "summary": "Ariceum Therapeutics is a Berlin-based targeted radiotherapeutics company. Its lead candidate 225Ac-SSO110 is an actinium-225 labelled radioligand for extensive-stage small cell lung cancer (ES-SCLC) and Merkel cell carcinoma (MCC); the phase 1/2 SANTANA-225 study was planned to start in the second half of 2025, with initial safety data expected in early 2026 and preliminary efficacy findings in 2027. In August 2025 David Schilansky, previously CFO, succeeded co-founder Manfred Rüdiger as CEO alongside a new executive team.",
    "notes": [
      "Company website ariceum-therapeutics.com returned a certificate error and then an HTTP 500 'Database Error' on every attempt, so the website field points to the fetched release copy. Series A (reported elsewhere as EUR 25 million in 2022) and the Theragnostics acquisition are unsourced and omitted. SSO110 target (SSTR2 antagonist per other reports) not stated in the fetched text."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.biospace.com/press-releases/ariceum-therapeutics-appoints-david-schilansky-as-chief-executive-officer-and-announces-new-leadership-to-advance-next-phase-of-development"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "artbio",
    "name": "ARTBIO",
    "hq": "Cambridge, MA",
    "country": "US",
    "founded": 2021,
    "companyType": "radiopharma",
    "stage": "startup",
    "website": "https://artbio.com/",
    "technologies": [
      "targeted-alpha-therapy",
      "radioligand-therapy"
    ],
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "tldr": "ARTBIO makes cancer treatments that deliver short-range alpha radiation from lead-212 directly to tumour cells, starting with prostate cancer. Its first medicine is in early human trials, currently paused by the company while it reviews data.",
    "summary": "ARTBIO, Inc. (Cambridge, Massachusetts, with engineering and manufacturing in Oslo) develops a new class of 212Pb alpha radioligand therapies (ARTs), together with its AlphaDirect isotope production technology and manufacturing ecosystem. The company was founded in 2021 by Roy Larsen and Øyvind Bruland, the inventors of Xofigo, with F-Prime and Radforsk. The lead asset AB001, a PSMA-targeted 212Pb radioligand for metastatic castration-resistant prostate cancer, is in the phase 1 ARTISAN trial; two cohorts (177Lu-PSMA naive and 177Lu-PSMA experienced) were dosed in January 2026, and in April 2026 the company implemented a voluntary clinical hold of ARTISAN. Jonathan Freeman was appointed interim CEO in July 2026. Further programmes include 212Pb antibody conjugates and the HEARTS discovery platform. ARTBIO raised a USD 90 million Series A in December 2023 and about USD 132 million in July 2025, according to Endpoints News.",
    "funding": [
      {
        "round": "Series A",
        "year": 2023,
        "source": "https://endpoints.news/artbio-raises-90m-as-radiopharma-field-finds-its-footing/",
        "amountUsd": 90000000
      },
      {
        "round": "Series B",
        "year": 2025,
        "source": "https://endpoints.news/artbio-attracts-132m-as-its-alpha-radioligand-program-moves-into-the-clinic/",
        "amountUsd": 132000000,
        "note": "Endpoints reports a USD 132 million raise in July 2025; the Series B label comes from the PR Newswire headline seen in search results, not from a fetched page"
      }
    ],
    "notes": [
      "Endpoints article bodies are paywalled; amounts come from the visible headline and lede."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://artbio.com/"
      },
      {
        "label": "ARTISAN cohort dosing release (PR Newswire)",
        "url": "https://www.prnewswire.com/news-releases/artbio-announces-dosing-of-two-cohorts-with-ab001-in-artisan-a-phase-1-alpha-radioligand-therapy-clinical-trial-for-metastatic-castration-resistant-prostate-cancer-302657972.html"
      },
      {
        "label": "Endpoints News: Artbio raises $90M",
        "url": "https://endpoints.news/artbio-raises-90m-as-radiopharma-field-finds-its-footing/"
      },
      {
        "label": "Endpoints News: Artbio attracts $132M",
        "url": "https://endpoints.news/artbio-attracts-132m-as-its-alpha-radioligand-program-moves-into-the-clinic/"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "astrazeneca",
    "wikipedia": "https://en.wikipedia.org/wiki/AstraZeneca",
    "trials": [
      "nct07611110",
      "nct05219500",
      "nct07590934",
      "nct06909825",
      "nct06040099"
    ],
    "aka": [
      "Acerta Pharma",
      "Alexion Pharmaceuticals",
      "MedImmune LLC",
      "MedImmune"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.astrazeneca.com"
      }
    ],
    "name": "AstraZeneca",
    "hq": "Cambridge",
    "country": "GB",
    "companyType": "pharma",
    "website": "https://www.astrazeneca.com",
    "ticker": "AZN",
    "tldr": "AstraZeneca is the most ADC-committed large pharma, co-owner of Enhertu and Datroway, with deep targeted-therapy and radiopharma bets.",
    "summary": "AstraZeneca's oncology revenue exceeds $20B. ADCs (T-DXd, Dato-DXd with Daiichi Sankyo; AZD0901 CLDN18.2; puxitatug samrotecan B7-H4; tilatamig samrotecan EGFR×MET bsADC), osimertinib, olaparib, capivasertib, durvalumab, camizestrant, saruparib, and radioconjugates via Fusion Pharma (225Ac-PSMA). Also cell therapy (Neogene, GPC3 CAR-T).",
    "drugs": [
      "olaparib",
      "durvalumab",
      "ac225-psma",
      "fpi-2265"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "companyType": "radiopharma",
    "links": [
      {
        "label": "Y Combinator profile",
        "url": "https://www.ycombinator.com/companies/atomic-alchemy"
      },
      {
        "label": "Official website",
        "url": "https://atomicalchemy.us"
      }
    ],
    "tags": [
      "isotope-supply"
    ],
    "id": "atomic-alchemy",
    "name": "Atomic Alchemy",
    "ycBatch": "W19",
    "stage": "acquired",
    "hq": "Idaho Falls, ID",
    "country": "US",
    "website": "https://atomicalchemy.us",
    "technologies": [
      "spect",
      "radioligand-therapy"
    ],
    "tldr": "Atomic Alchemy set out to build small reactors dedicated to making the radioactive isotopes used in cancer scans and treatments, so hospitals no longer depend on a handful of ageing government reactors. It was bought by the nuclear company Oklo.",
    "summary": "Atomic Alchemy planned the first privately owned reactors dedicated to radioisotope production, starting with molybdenum-99 for technetium imaging and extending to therapeutic isotopes whose scarcity holds back radiopharmaceutical trials. Its YC profile describes a supply chain reliant on six ageing research reactors abroad. The company was acquired by Oklo, an advanced fission developer, which announced the deal in late 2024 and closed it in 2025; Oklo is not an Nuclide record so the acquirer is named only here. Isotope production at scale remains a plan rather than an operating facility."
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "bayer",
    "wikipedia": "https://en.wikipedia.org/wiki/Bayer",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.bayer.com"
      }
    ],
    "name": "Bayer",
    "hq": "Leverkusen",
    "country": "DE",
    "companyType": "pharma",
    "website": "https://www.bayer.com",
    "ticker": "BAYN.DE",
    "tldr": "Bayer owns Xofigo, the only approved alpha emitter, and is developing next-generation actinium PSMA agents.",
    "summary": "Bayer, based in Leverkusen and listed as BAYN.DE, owns Xofigo, or radium-223, the only approved alpha emitter, and is developing next-generation actinium-225 PSMA agents. Its oncology portfolio includes 225Ac-PSMA-Trillium, also known as BAY 3563254, darolutamide in prostate cancer, sevabertinib for HER2-mutant non-small-cell lung cancer approved in 2025, larotrectinib, developed earlier with Lilly, and copanlisib, with the AlphaBreak and AcTION actinium trials linked in Nuclide. Nuclide also connects it to colorectal, liver, GIST and desmoid tumour pages, to the Norwegian Radium Hospital in Oslo, and to its venture arm Leaps by Bayer. Whether a targeted alpha emitter can go further than radium-223 did is the open question its PSMA programme will answer. Actinium-225 PSMA agents have their own page.",
    "drugs": [
      "ac225-psma"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-06",
    "id": "blue-earth-diagnostics",
    "trials": [
      "nct07432633",
      "nct07702292"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.blueearthdiagnostics.com"
      }
    ],
    "name": "Blue Earth Diagnostics (Bracco)",
    "hq": "Oxford",
    "country": "GB",
    "companyType": "radiopharma",
    "website": "https://www.blueearthdiagnostics.com",
    "tldr": "Blue Earth Diagnostics makes Posluma (18F-rhPSMA-7.3) and Axumin (fluciclovine) PET agents for prostate cancer.",
    "summary": "Blue Earth Diagnostics, based in Oxford and a subsidiary of Bracco, makes the PET imaging agents Posluma, or flotufolastat F-18, also written 18F-rhPSMA-7.3, and Axumin, or fluciclovine F-18, for prostate cancer. Posluma was approved in 2023 on the LIGHTHOUSE and SPOTLIGHT trials, and a therapeutic rhPSMA analogue is in development, which would extend the radiohybrid platform from imaging into treatment. Nuclide links it to prostate cancer and to both tracer records. Whether a fluorine-18 PSMA agent with a matched therapeutic can win share from the gallium-68 tracers already established is the open question. Flotufolastat and fluciclovine have their own pages.",
    "drugs": [
      "flotufolastat"
    ],
    "indications": [
      "prostate"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "bms",
    "wikipedia": "https://en.wikipedia.org/wiki/Bristol_Myers_Squibb",
    "aka": [
      "Bristol-Myers Squibb",
      "Juno Therapeutics",
      "Mirati Therapeutics",
      "Celgene",
      "American Regent, Inc.",
      "American Regent",
      "YM BioSciences"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.bms.com"
      }
    ],
    "name": "Bristol Myers Squibb",
    "hq": "Princeton, NJ",
    "country": "US",
    "companyType": "pharma",
    "website": "https://www.bms.com",
    "ticker": "BMY",
    "tldr": "Pioneer of checkpoint inhibitors (Opdivo, Yervoy), now betting on the first successful bispecific ADC and alpha radiopharmaceuticals.",
    "summary": "Bristol Myers Squibb, based in Princeton and listed as BMY, is the pioneer of checkpoint inhibitors with Opdivo and Yervoy, and it is now betting on the first successful bispecific antibody-drug conjugate and on alpha radiopharmaceuticals. Its portfolio spans nivolumab, ipilimumab and Opdualag, adagrasib from Mirati, the CAR-T products Breyanzi and Abecma, izalontamab brengitecan licensed from SystImmune for 8.4 billion dollars, actinium-225 DOTATATE from the 4.1 billion dollar RayzeBio purchase, and a PD-L1 by VEGF bispecific licensed from BioNTech for 11 billion dollars in 2025. Nuclide links it to the ten-year CheckMate 067 follow-up, CheckMate 649 and CheckMate 816 papers, to luspatercept, and to KRAS inhibitors and protein degradation. Whether its large bets on ADCs and radiopharmaceuticals pay off as the nivolumab franchise ages is the open question.",
    "drugs": [
      "ryz101"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-07",
    "id": "boston-scientific",
    "wikipedia": "https://en.wikipedia.org/wiki/Boston_Scientific",
    "trials": [
      "nct05063565"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.bostonscientific.com"
      }
    ],
    "name": "Boston Scientific",
    "hq": "Marlborough, MA",
    "country": "US",
    "companyType": "devices",
    "website": "https://www.bostonscientific.com",
    "ticker": "BSX",
    "tldr": "Medical device giant whose TheraSphere glass microspheres deliver yttrium-90 radioembolisation in liver cancer.",
    "summary": "Boston Scientific, based in Marlborough, Massachusetts, and listed as BSX, is the medical device company whose TheraSphere glass microspheres deliver yttrium-90 radioembolisation in liver cancer. TheraSphere has held FDA approval for hepatocellular carcinoma since 2021, was studied in the EPOCH trial in colorectal liver metastases, which was positive for progression-free survival, and is being tested in combination with immunotherapy, and the company also sells drug-eluting embolic beads and other interventional oncology devices. Nuclide links it to hepatocellular carcinoma and colorectal cancer and to the radioembolisation and transarterial chemoembolisation technology records. Whether device-based liver-directed therapy keeps its role as systemic options improve is the open question. The technology pages carry the trial detail.",
    "technologies": [
      "radioembolisation-tare"
    ],
    "indications": [
      "hcc"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "canon-medical",
    "wikipedia": "https://en.wikipedia.org/wiki/Canon_Medical_Systems_Corporation",
    "links": [
      {
        "label": "Official website",
        "url": "https://global.medical.canon"
      }
    ],
    "name": "Canon Medical Systems",
    "hq": "Otawara",
    "country": "JP",
    "companyType": "imaging",
    "website": "https://global.medical.canon",
    "tldr": "Canon Medical is the Japanese imaging vendor (formerly Toshiba Medical) with CT, MRI, ultrasound, and the Cartesion Prime PET/CT.",
    "summary": "Canon Medical Systems, based in Otawara, Japan, is the imaging vendor formerly known as Toshiba Medical, with CT, MRI, ultrasound and the Cartesion Prime PET/CT. Its portfolio includes Aquilion CT and photon-counting development, Vantage MRI and PET/CT with digital detectors. Nuclide links it to nuclear medicine and total-body PET hardware, CT and MRI. Whether a fourth major imaging vendor can differentiate in PET and photon-counting CT against larger rivals is the open question. The PET hardware technology page carries the wider picture.",
    "technologies": [
      "nuclear-medicine-hardware",
      "ct"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "cardinal-health",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.cardinalhealth.com"
      }
    ],
    "name": "Cardinal Health Nuclear & Precision Health Solutions",
    "hq": "Dublin, OH",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.cardinalhealth.com",
    "ticker": "CAH",
    "tldr": "Nuclear pharmacy network (>130 sites) that compounds and delivers SPECT and PET doses, and a distributor of oncology drugs to community practices.",
    "summary": "Cardinal Health Nuclear and Precision Health Solutions, based in Dublin, Ohio, and part of Cardinal Health, listed as CAH, is a nuclear pharmacy network of more than 130 sites that compounds and delivers SPECT and PET doses, and a distributor of oncology drugs to community practices. It is the largest US nuclear pharmacy chain and also a major distributor and group purchasing organisation for community oncology. Nuclide links it to radiopharmacy and cyclotron networks, PET tracer manufacturing and distribution and community oncology site networks, and to the FDG drug record. Whether its distribution reach can carry therapeutic radioligands to community practices as it does diagnostic doses is the open question. FDG has its own page.",
    "technologies": [
      "radiopharmacy-network",
      "pet-tracer-manufacturing"
    ]
  },
  {
    "id": "cellectar",
    "trials": [
      "nct02952508"
    ],
    "kind": "company",
    "name": "Cellectar Biosciences",
    "aka": [
      "Cellectar Biosciences, Inc.",
      "Cellectar"
    ],
    "hq": "Florham Park, NJ",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.cellectar.com",
    "stage": "public",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-sponsor"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor websites)",
      "editedOn": "2026-09-11"
    },
    "tldr": "Cellectar is a New Jersey radiopharmaceutical company whose iodine-131 phospholipid drug conjugate iopofosine targets the lipid rafts of cancer cells, with a pivotal trial (CLOVER-WaM) in relapsed Waldenström macroglobulinaemia.",
    "summary": "Cellectar Biosciences, based in Florham Park, New Jersey and listed on Nasdaq, develops phospholipid drug conjugates that exploit the lipid rafts abundant on cancer cell membranes to deliver radioisotopes or cytotoxics. Its lead, iopofosine I-131 (CLR 131), delivers iodine-131 and reported its pivotal CLOVER-WaM results in relapsed Waldenström macroglobulinaemia in 2024; earlier studies covered multiple myeloma and paediatric high-grade glioma. It appears on Nuclide as a lead sponsor of phase 3 cancer trials on ClinicalTrials.gov.",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.cellectar.com"
      },
      {
        "label": "ClinicalTrials.gov: trials led by Cellectar Biosciences",
        "url": "https://clinicaltrials.gov/search?lead=Cellectar%20Biosciences"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "clarity-pharmaceuticals",
    "trials": [
      "nct04868604"
    ],
    "name": "Clarity Pharmaceuticals",
    "hq": "Sydney",
    "country": "AU",
    "companyType": "radiopharma",
    "website": "https://www.claritypharmaceuticals.com",
    "ticker": "CU6.AX",
    "tldr": "Clarity Pharmaceuticals, a Sydney radiopharmaceutical company, pairs copper isotopes with SAR-bisPSMA, a molecule that binds PSMA on prostate cancer cells: copper-64 for PET imaging, in the phase 3 AMPLIFY and CLARIFY trials, and copper-67 for therapy in the SECuRE trial. The copper-67 therapy is still at the dose-finding stage.",
    "summary": "Co-PSMA head-to-head data (EAU 2026) showed Cu-64 SAR-bisPSMA more than doubled lesion and patient detection versus Ga-68 PSMA-11; FDA Fast Track in biochemical recurrence; commercial manufacturing agreement with Nucleus RadioPharma (April 2026). SECuRE therapy trial: 7 of 19 patients at 8 GBq 67Cu reached complete response or undetectable disease (July 2026).",
    "technologies": [
      "psma-pet",
      "radioligand-therapy"
    ],
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "terms": [
      "theranostics"
    ],
    "links": [
      {
        "label": "SECuRE update",
        "url": "https://www.prnewswire.com/news-releases/clarity-pharmaceuticals-announces-secure-trial-update-on-8-gbq-67cu-sar-bispsma-dose-level-with-two-additional-complete-responses-302843184.html"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "comecer",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.comecer.com"
      }
    ],
    "name": "Comecer (ATS)",
    "hq": "Castel Bolognese",
    "country": "IT",
    "companyType": "radiopharma",
    "website": "https://www.comecer.com",
    "tldr": "Comecer, of Castel Bolognese, Italy, and part of ATS Corporation, makes hot cells, isolators and dose calibrators, the shielded enclosures and automation that radiopharmacies need to handle radioactive drugs aseptically. Therapeutic radioligands need more shielding than diagnostic tracers, and whether hospitals build enough of it is the open question.",
    "summary": "Comecer, based in Castel Bolognese, Italy, and part of ATS Corporation, makes hot cells, isolators and dose calibrators for radiopharmacies. Its shielded enclosures and automation serve aseptic processing for radiopharmaceuticals and for cell therapies. Nuclide links it to medical cyclotrons, hot cells and synthesis modules. Whether hospitals build enough shielded capacity for therapeutic radioligands, which need more protection than diagnostic tracers, is the open question its products address. The cyclotron and synthesis technology page carries the wider picture.",
    "technologies": [
      "medical-cyclotrons-synthesis-modules"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "convergent-therapeutics",
    "trials": [
      "nct06549465"
    ],
    "name": "Convergent Therapeutics",
    "hq": "Cambridge, MA",
    "country": "US",
    "companyType": "radiopharma",
    "stage": "startup",
    "website": "http://convergentrx.com/",
    "technologies": [
      "radioimmunotherapy",
      "targeted-alpha-therapy"
    ],
    "targets": [
      "psma"
    ],
    "indications": [
      "prostate"
    ],
    "tldr": "Convergent Therapeutics attaches an alpha-emitting isotope to an antibody that homes in on prostate cancer cells, for men whose disease has progressed after standard radioligand treatment. Its lead medicine has reported mid-stage trial results.",
    "summary": "Convergent Therapeutics develops alpha radioantibodies: antibodies that deliver alpha-emitting payloads directly into cancer cells while limiting exposure of healthy tissue. The lead candidate CONV01-α is a PSMA-directed actinium-225 radioantibody for metastatic castration-resistant prostate cancer in patients previously treated with 177Lu-PSMA. In June 2026 the company presented what it described as the largest prospective phase 2 dataset for an alpha radiopharmaceutical at ASCO 2026, reporting anti-tumour activity, durability and favourable tolerability in Lu-PSMA-exposed mCRPC.",
    "notes": [
      "The Business Wire releases (ASCO 2026 data, Series A) returned HTTP 403, so funding is omitted; trade press headlines report a USD 90 million Series A (2023) and a USD 40 million extension, unverified here. The domains convergenttx.com and convergenttherapeutics.com are parked; convergentrx.com blocks scripted requests but was fetched via WebFetch."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "http://convergentrx.com/"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-06",
    "id": "curium",
    "trials": [
      "nct06235151"
    ],
    "name": "Curium",
    "hq": "Paris",
    "country": "FR",
    "companyType": "radiopharma",
    "website": "https://www.curiumpharma.com",
    "tldr": "Curium is one of the largest nuclear-medicine companies, developing 177Lu-PSMA-I&T (ECLIPSE) as a competitor to Pluvicto.",
    "summary": "Curium is a Paris-based private radiopharmaceutical group, one of the largest in nuclear medicine, supplying SPECT and PET isotopes and generators and developing 177Lu-PSMA-I&T as a competitor to Pluvicto in prostate cancer. Its ECLIPSE phase 3 trial of 177Lu-PSMA-I&T met its radiographic progression-free survival endpoint in taxane-naive metastatic castration-resistant prostate cancer, a Japanese registrational trial with PeptiDream and PDRadiopharma enrolled its first patient in February 2026, and the regulatory submission plan is under discussion with the FDA. Nuclide links it to DOTATATE imaging agents, samarium-153 lexidronam, radionuclide generators and the therapeutic isotope supply chain. Whether a second lutetium PSMA agent can differentiate on supply and price rather than efficacy is the open question. The manufacturing cost of radioactive medicines is the bottleneck it bears on.",
    "drugs": [
      "lu177-psma-it"
    ],
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.curiumpharma.com"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "eckert-ziegler",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.ezag.com"
      }
    ],
    "name": "Eckert & Ziegler",
    "hq": "Berlin",
    "country": "DE",
    "companyType": "radiopharma",
    "website": "https://www.ezag.com",
    "ticker": "EUZ.DE",
    "tldr": "German isotope and radiopharmaceutical services company supplying Lu-177, Ga-68 generators, Ac-225 development, and contract manufacturing.",
    "summary": "Eckert and Ziegler, based in Berlin and listed as EUZ.DE, is a German isotope and radiopharmaceutical services company supplying lutetium-177, gallium-68 generators, actinium-225 development and contract manufacturing. It makes the GalliaPharm gallium-68 generator and non-carrier-added lutetium-177, sold as Theralugand, runs actinium-225 production projects and offers CDMO services to radioligand developers. Nuclide links it to the therapeutic isotope supply chain, radiopharmacy and cyclotron networks and radionuclide generators and cold kits. Whether generator-based gallium-68 keeps its place as cyclotron production and fluorine-18 tracers spread is the open question. The isotope supply chain page carries the wider picture.",
    "technologies": [
      "therapy-isotope-supply-chain",
      "radiopharmacy-network"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "eli-lilly",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.lilly.com"
      }
    ],
    "name": "Eli Lilly (incl. Loxo)",
    "hq": "Indianapolis, IN",
    "country": "US",
    "companyType": "pharma",
    "website": "https://www.lilly.com",
    "ticker": "LLY",
    "tldr": "Eli Lilly makes Verzenio and Retevmo, as well as the oral SERD imlunestrant and the BTK inhibitor pirtobrutinib.",
    "summary": "Eli Lilly, based in Indianapolis and listed as LLY, makes Verzenio and Retevmo, the oral SERD imlunestrant and the BTK inhibitor pirtobrutinib, and its oncology unit includes Loxo Oncology. The portfolio spans abemaciclib, selpercatinib, imlunestrant, sold as Inluriyo from 2025, pirtobrutinib, olomorasib against KRAS G12C, a PI3K-alpha mutant-selective programme from Scorpion, and older products including cetuximab, gemcitabine and necitumumab. Nuclide links it to the monarchE paper on two years of adjuvant abemaciclib, to CLEAR in kidney cancer, to GLP-1 receptor agonists and obesity-related cancer risk, to ideas for trials of GLP-1 drugs with cancer as the primary outcome, and to partners including Isomorphic Labs and Innovent. Whether Lilly's GLP-1 franchise becomes an oncology story is the question its idea links raise. Abemaciclib and selpercatinib have their own pages.",
    "companies": [
      "point-biopharma"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "evergreen-theragnostics",
    "name": "Evergreen Theragnostics",
    "hq": "Springfield, NJ",
    "country": "US",
    "companyType": "radiopharma",
    "stage": "acquired",
    "acquiredBy": "lantheus",
    "website": "https://www.evergreentgn.com/",
    "technologies": [
      "radioligand-therapy",
      "pet"
    ],
    "indications": [
      "neuroendocrine",
      "sclc"
    ],
    "tldr": "Evergreen Theragnostics manufactures radioactive cancer medicines for other companies and develops its own imaging agent for neuroendocrine tumours and a treatment for small cell lung cancer. Lantheus agreed to buy it in 2025.",
    "summary": "Evergreen Theragnostics is a Springfield, New Jersey radiopharmaceutical company combining contract development and manufacturing (CDMO) services with proprietary products. Its facility, completed in October 2021, has produced clinical material for partners including Clovis Oncology (225Ac FAP-2286), Clarity (copper theranostics), MTTI and Precirix (CAM-H2). Proprietary programmes include OCTEVY, a registrational-stage PET diagnostic for neuroendocrine tumours, and EVG321, a CCK2 receptor-targeted radioligand licensed from the Medical University of Innsbruck in May 2024 for small cell lung cancer, with the CCK2-VIEW phase 2 trial opened in the EU in October 2024. In January 2025 Lantheus agreed to acquire Evergreen for USD 250 million upfront and up to USD 752.5 million in milestones, to become a fully integrated radiopharmaceutical company.",
    "funding": [
      {
        "round": "Acquisition",
        "year": 2025,
        "source": "https://www.evergreentgn.com/2025/01/28/lantheus-to-acquire-evergreen-theragnostics-for-upfront-payment-of-250-million-to-drive-strategic-evolution-into-fully-integrated-radiopharmaceutical-leader/",
        "amountUsd": 250000000,
        "note": "USD 250 million upfront plus up to USD 752.5 million in milestones; all-cash, announced 28 January 2025"
      }
    ],
    "notes": [
      "Venture financing before the acquisition not fetched and omitted. Completion of the Lantheus deal not confirmed from a fetched page, although the company site now links to Lantheus careers and pipeline."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.evergreentgn.com/"
      },
      {
        "label": "Lantheus acquisition release",
        "url": "https://www.evergreentgn.com/2025/01/28/lantheus-to-acquire-evergreen-theragnostics-for-upfront-payment-of-250-million-to-drive-strategic-evolution-into-fully-integrated-radiopharmaceutical-leader/"
      },
      {
        "label": "News",
        "url": "https://www.evergreentgn.com/news/"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "fusion-pharma",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.astrazeneca.com"
      }
    ],
    "name": "Fusion Pharmaceuticals (AstraZeneca)",
    "hq": "Hamilton, ON",
    "country": "CA",
    "companyType": "radiopharma",
    "website": "https://www.astrazeneca.com",
    "tldr": "Alpha-emitter company acquired by AstraZeneca ($2.4B, 2024); FPI-2265 (225Ac-PSMA-I&T) in phase 3.",
    "summary": "Fusion Pharmaceuticals, based in Hamilton, Ontario, is the alpha-emitter company acquired by AstraZeneca for 2.4 billion dollars in 2024, and its FPI-2265, an actinium-225 PSMA-I&T agent, is in phase 3. Its pipeline also includes FPI-2068, an EGFR by c-MET bispecific radioconjugate, and the company holds actinium-225 supply agreements. Nuclide links it to the AlphaBreak trial of FPI-2265 and the AcTION trial of 225Ac-PSMA-617, to targeted alpha therapy, to the actinium-225 PSMA agents record and to the radiopharmaceutical roadmap. Whether actinium PSMA therapy can improve on lutetium PSMA therapy is the question AlphaBreak will answer. Actinium-225 PSMA agents have their own page.",
    "drugs": [
      "ac225-psma"
    ]
  },
  {
    "id": "futurechem",
    "kind": "company",
    "name": "FutureChem",
    "aka": [],
    "hq": "Seoul",
    "country": "KR",
    "companyType": "radiopharma",
    "website": "https://www.futurechem.co.kr",
    "stage": "public",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-sponsor"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor websites)",
      "editedOn": "2026-09-11"
    },
    "tldr": "FutureChem is a South Korea-based radiopharmaceutical company running 2 late-stage cancer trials of [F-18]Florastamin in prostate cancer.",
    "summary": "FutureChem, based in Seoul, South Korea, is a radiopharmaceutical company. FUTURECHEM is a radiopharmaceutical drug-development company specialising in PET diagnostic imaging agents for neurological and oncological conditions. On ClinicalTrials.gov it is the lead sponsor of 2 recruiting or active phase 2 and phase 3 interventional cancer trials (2 in phase 3), testing [F-18]Florastamin in prostate cancer. The largest, NCT05004285 (Evaluate the Clinical Usefulness of [F-18]Florastamin PET/CT Imaging Diagnosis Compared to MRI Diagnosis), plans to enrol 398 participants. Sponsor and trial facts are from the ClinicalTrials.gov registry; company facts are from the official website.",
    "indications": [
      "prostate"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.futurechem.co.kr"
      },
      {
        "label": "ClinicalTrials.gov: trials led by FutureChem",
        "url": "https://clinicaltrials.gov/search?lead=FutureChem"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "ge-healthcare",
    "wikipedia": "https://en.wikipedia.org/wiki/GE_HealthCare",
    "trials": [
      "nct07219238"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.gehealthcare.com"
      }
    ],
    "name": "GE HealthCare",
    "hq": "Chicago, IL",
    "country": "US",
    "companyType": "imaging",
    "website": "https://www.gehealthcare.com",
    "ticker": "GEHC",
    "tldr": "GE HealthCare, of Chicago, makes PET/CT, MRI and CT scanners (Omni Legend, SIGNA, Revolution) and PET tracers through its Pharmaceutical Diagnostics business, including Cerianna, the fluoroestradiol F-18 agent that images oestrogen receptors in breast cancer. Whether receptor-imaging tracers change treatment decisions often enough to be reimbursed is its tracer business's open question.",
    "summary": "GE HealthCare, based in Chicago and listed as GEHC, makes PET/CT, MRI and CT scanners and PET tracers through its Pharmaceutical Diagnostics business. Its scanners include the Omni Legend PET/CT, SIGNA MRI and Revolution CT, and its tracer business spans flurpiridaz, cyclotrons and Cerianna, the fluoroestradiol F-18 agent for imaging oestrogen receptor expression in breast cancer. Nuclide links it to PET/CT, MRI and CT, to medical cyclotrons and total-body PET hardware, and to the fluoroestradiol F-18 drug record. Whether receptor-imaging tracers such as FES change treatment decisions often enough to be reimbursed widely is the open question for its tracer business. Fluoroestradiol F-18 has its own page.",
    "technologies": [
      "pet-ct",
      "ct"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "hamamatsu",
    "wikipedia": "https://en.wikipedia.org/wiki/Hamamatsu_Photonics",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.hamamatsu.com"
      }
    ],
    "name": "Hamamatsu Photonics",
    "hq": "Hamamatsu",
    "country": "JP",
    "companyType": "imaging",
    "website": "https://www.hamamatsu.com",
    "ticker": "6965.T",
    "tldr": "Hamamatsu is the photonics company behind the NanoZoomer slide scanners and the photodetectors inside most PET scanners.",
    "summary": "Hamamatsu Photonics, based in Hamamatsu, Japan, and listed as 6965.T, is the photonics company behind the NanoZoomer slide scanners and the photodetectors inside most PET scanners. Its NanoZoomer S360 and S60 whole-slide scanners serve digital pathology, and its silicon photomultipliers and photomultiplier tubes sit inside PET/CT and SPECT systems from many manufacturers. Nuclide links it to whole-slide scanners and image management and to nuclear medicine and total-body PET hardware. Its position as a component supplier means that advances in detector sensitivity reach the whole imaging market through it. Whether that quiet role is recognised when total-body PET costs are debated is the fair question.",
    "technologies": [
      "nuclear-medicine-hardware"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "iba",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.iba-worldwide.com"
      }
    ],
    "name": "IBA (Ion Beam Applications)",
    "hq": "Louvain-la-Neuve",
    "country": "BE",
    "companyType": "devices",
    "website": "https://www.iba-worldwide.com",
    "tldr": "IBA (Ion Beam Applications), of Louvain-la-Neuve, Belgium, is the largest supplier of proton therapy equipment: its Proteus One and Proteus Plus systems equip proton centres worldwide, and it also builds cyclotrons for PET isotope production. Proton therapy's capital cost is the problem its compact systems try to answer.",
    "summary": "IBA, Ion Beam Applications, based in Louvain-la-Neuve in Belgium, is the largest supplier of proton therapy equipment. Its Proteus One and Proteus Plus systems equip proton centres worldwide, and it also makes cyclotrons for PET isotope production and supports actinium-225 research. Nuclide links it to proton therapy and proton arc therapy, to medical cyclotrons and synthesis modules, to centres including Centre Antoine Lacassagne, Uppsala, UZ Leuven and the West German Cancer Center in Essen, and to ideas such as compact FLASH and proton systems at the price of a conventional linac and pooled coverage-with-evidence for proton therapy across all centres. Whether proton therapy can be made cheap enough to be judged on evidence rather than capital cost is the open question its compact systems address. The proton therapy page carries the trial detail."
  },
  {
    "kind": "company",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "id": "ire",
    "name": "IRE (Institut national des Radioéléments)",
    "aka": [
      "IRE ELiT"
    ],
    "hq": "Fleurus",
    "country": "BE",
    "companyType": "radiopharma",
    "website": "https://www.ire.eu",
    "stage": "private-large",
    "founded": 1971,
    "tldr": "IRE in Belgium is one of the world's few molybdenum-99 processors, taking irradiated targets from European research reactors, and its IRE ELiT arm makes the Galli Eo gallium-68 generator.",
    "summary": "The Institut national des Radioéléments at Fleurus processes uranium targets irradiated in BR2, the Petten High Flux Reactor, MARIA and LVR-15 into molybdenum-99 and iodine-131 for generator and radiopharmaceutical makers. Its subsidiary IRE ELiT produces the Galli Eo germanium-68/gallium-68 generator used for PSMA and somatostatin PET and non-carrier-added lutetium-177. It is a Belgian public-interest foundation rather than a listed company.",
    "technologies": [
      "research-reactor-isotope-production",
      "cyclotron-isotope-production",
      "radionuclide-generators-kits",
      "therapy-isotope-supply-chain"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.ire.eu"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "id": "isotopia",
    "name": "Isotopia Molecular Imaging",
    "aka": [],
    "hq": "Petah Tikva",
    "country": "IL",
    "companyType": "radiopharma",
    "website": "https://www.isotopia.co.il",
    "stage": "growth",
    "tldr": "Isotopia is an Israeli producer of non-carrier-added lutetium-177 and PET tracers that supplies several radioligand developers.",
    "summary": "Isotopia Molecular Imaging produces non-carrier-added lutetium-177 by separating it from irradiated ytterbium-176, and manufactures PET radiopharmaceuticals for Israeli hospitals. It has supply agreements with a number of companies developing lutetium-based radioligands and is one of the independent lutetium sources that grew as demand rose after lutetium-177 vipivotide tetraxetan was approved.",
    "technologies": [
      "research-reactor-isotope-production",
      "therapy-isotope-supply-chain",
      "pet-tracer-manufacturing"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.isotopia.co.il"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "itm",
    "trials": [
      "nct04919226"
    ],
    "aka": [
      "ITM Solucin GmbH"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://itm-radiopharma.com"
      }
    ],
    "name": "ITM Isotope Technologies Munich",
    "hq": "Munich",
    "country": "DE",
    "companyType": "radiopharma",
    "website": "https://itm-radiopharma.com",
    "tldr": "ITM is the largest non-carrier-added lutetium-177 supplier and the developer of ITM-11 (177Lu-edotreotide).",
    "summary": "ITM Isotope Technologies Munich is the largest supplier of non-carrier-added lutetium-177, sold as EndolucinBeta, and the developer of ITM-11, or 177Lu-edotreotide. ITM-11 was positive in the COMPETE phase 3 trial in gastroenteropancreatic neuroendocrine tumours in 2025, and the company is investing in actinium-225 supply. Nuclide links it to neuroendocrine tumours, to somatostatin receptor 2 as a target, to peptide receptor radionuclide therapy and the therapeutic isotope supply chain, to the radiopharmaceutical roadmap, and to the idea of building Western ytterbium-176 enrichment so lutetium-177 has more than one supplier. Manufacturing cost and time for radioactive medicines is the bottleneck it sits inside. Whether a supplier can also succeed as a drug developer is the open question.",
    "targets": [
      "sstr2"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "johnson-johnson",
    "wikipedia": "https://en.wikipedia.org/wiki/Johnson_%26_Johnson",
    "trials": [
      "nct04557059"
    ],
    "aka": [
      "Alza Corporation",
      "Janssen",
      "Ortho Biotech Products, L.P.",
      "Ortho Biotech",
      "Sequus Pharmaceuticals",
      "Centocor, Inc.",
      "Centocor",
      "Alza Corporation, DE, USA",
      "Cougar Biotechnology, Inc.",
      "Cougar Biotechnology",
      "McNeil Consumer & Specialty Pharmaceuticals",
      "McNeil"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.jnj.com"
      }
    ],
    "name": "Johnson & Johnson",
    "hq": "New Brunswick, NJ",
    "country": "US",
    "companyType": "pharma",
    "website": "https://www.jnj.com",
    "ticker": "JNJ",
    "tldr": "Johnson & Johnson leads in multiple myeloma (Darzalex, Carvykti, Tecvayli, Talvey) and in bispecific antibodies for lung cancer (Rybrevant).",
    "summary": "Johnson & Johnson, based in New Brunswick, New Jersey, and listed as JNJ, leads in multiple myeloma with Darzalex, Carvykti, Tecvayli and Talvey and in bispecific antibodies for lung cancer with Rybrevant. Its oncology portfolio spans daratumumab, teclistamab, talquetamab, ciltacabtagene autoleucel developed with Legend, amivantamab with lazertinib, abiraterone and apalutamide in prostate cancer, TAR-200 intravesical gemcitabine for bladder cancer approved in 2025, and pasritamig, a KLK2 by CD3 bispecific. Nuclide links it to the CARTITUDE-1 and CARTITUDE-4, MAIA, CEPHEUS and MajesTEC-1 papers, to the LEGEND-2 trial, to robotic bronchoscopy, and to the Yale Open Data Access project. Whether CAR-T and bispecifics move into first-line myeloma and displace daratumumab combinations is the question its own portfolio poses. Teclistamab, cilta-cel and amivantamab have their own pages.",
    "drugs": [
      "jnj-87189401"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "jubilant-radiopharma",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.jubilantradiopharma.com"
      }
    ],
    "name": "Jubilant Radiopharma",
    "hq": "Yardley, PA",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.jubilantradiopharma.com",
    "tldr": "Jubilant Radiopharma is a radiopharmacy network and the manufacturer of I-131 MIBG (AdreView), Ruby-Fill, and PET tracers.",
    "summary": "Jubilant Radiopharma, based in Yardley, Pennsylvania, is a radiopharmacy network and the manufacturer of iodine-131 MIBG, sold as AdreView, Ruby-Fill and PET tracers. It is part of India's Jubilant Pharmova and combines US radiopharmacies with a radiopharmaceutical manufacturing business. Nuclide links it to radiopharmacy and cyclotron networks and PET tracer manufacturing and distribution, and to Syngene International as a related company. Whether an Indian-owned network can expand from established diagnostic products into the therapeutic radioligand market is the open question. The radiopharmacy technology page carries the wider picture.",
    "technologies": [
      "radiopharmacy-network",
      "pet-tracer-manufacturing"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "lantheus",
    "trials": [
      "nct06298916",
      "nct07357519"
    ],
    "aka": [
      "Progenics Pharmaceuticals, Inc.",
      "Progenics",
      "Molecular Insight Pharmaceuticals, Inc.",
      "Molecular Insight Pharmaceuticals"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.lantheus.com"
      }
    ],
    "name": "Lantheus",
    "hq": "Bedford, MA",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.lantheus.com",
    "ticker": "LNTH",
    "tldr": "Lantheus makes Pylarify, the leading PSMA PET agent, with a new TruVu formulation approved in March 2026.",
    "summary": "Lantheus, based in Bedford, Massachusetts, and listed as LNTH, makes Pylarify, or piflufolastat F-18, the leading PSMA PET agent, with a new TruVu formulation approved in March 2026. Its portfolio also includes Neuraceq for amyloid imaging, PNT2002, a 177Lu-PSMA-I&T therapy whose SPLASH phase 3 missed overall survival, and PNT2003, a generic 177Lu-DOTATATE, and Nuclide also links it to iobenguane I-131 and samarium-153 lexidronam. It connects to prostate cancer, to PET tracer manufacturing and distribution and radionuclide generators, and to Evergreen Theragnostics. Whether an imaging leader can become a therapy company after SPLASH is the open question. Piflufolastat F-18 has its own page.",
    "drugs": [
      "pylarify",
      "i131-mibg"
    ],
    "companies": [
      "evergreen-theragnostics"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "mariana-oncology",
    "name": "Mariana Oncology",
    "hq": "Watertown, MA",
    "country": "US",
    "founded": 2021,
    "companyType": "radiopharma",
    "stage": "acquired",
    "acquiredBy": "novartis",
    "website": "https://marianaoncology.com/",
    "technologies": [
      "radioligand-therapy"
    ],
    "indications": [
      "sclc"
    ],
    "tldr": "Mariana Oncology designs small protein fragments that carry a radioactive isotope to tumours, starting with small cell lung cancer. Novartis bought the company in 2024 for 1 billion dollars up front.",
    "summary": "Mariana Oncology, founded in 2021 in Watertown, Massachusetts by Atlas Venture, Access Biotechnology and RA Capital Management, built a fully integrated radiopharmaceutical platform combining peptide discovery, radiochemistry, in-house GMP manufacturing, isotope supply and formulations to extend product shelf life. Its portfolio of peptide-based radioligand therapies addresses a range of solid tumours; the lead candidate MC-339 is a radioligand therapy for small cell lung cancer that was expected to enter the clinic in 2024. The company closed a USD 175 million Series B in September 2023 co-led by Deep Track Capital and Forbion, and in May 2024 agreed to be acquired by Novartis for USD 1 billion upfront and up to USD 750 million in milestones. As a Novartis company it announced a USD 50 million expansion of radioligand R&D facilities in June 2025.",
    "funding": [
      {
        "round": "Series B",
        "year": 2023,
        "source": "https://marianaoncology.com/news/mariana-oncology-announces-usd175-million-series-b-financing/",
        "amountUsd": 175000000
      },
      {
        "round": "Acquisition",
        "year": 2024,
        "source": "https://marianaoncology.com/news/mariana-oncology-to-be-acquired-by-novartis-to-advance-precision-radiopharmaceuticals-to-treat-cancer/",
        "amountUsd": 1000000000,
        "note": "USD 1 billion upfront plus up to USD 750 million in milestones"
      }
    ],
    "notes": [
      "MC-339 target not stated on fetched pages. Series A not fetched and omitted."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://marianaoncology.com/"
      },
      {
        "label": "Series B press release",
        "url": "https://marianaoncology.com/news/mariana-oncology-announces-usd175-million-series-b-financing/"
      },
      {
        "label": "Novartis acquisition announcement",
        "url": "https://marianaoncology.com/news/mariana-oncology-to-be-acquired-by-novartis-to-advance-precision-radiopharmaceuticals-to-treat-cancer/"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-17",
    "tags": [
      "machines-wave"
    ],
    "id": "mediso",
    "wikipedia": "https://en.wikipedia.org/wiki/Mediso",
    "name": "Mediso",
    "hq": "Budapest",
    "country": "HU",
    "companyType": "imaging",
    "website": "https://mediso.com",
    "stage": "growth",
    "founded": 1990,
    "tldr": "Mediso is a Hungarian nuclear medicine company making AnyScan SPECT/CT and PET/CT cameras for hospitals and nanoScan PET/MRI and SPECT/CT scanners for preclinical research.",
    "summary": "Founded in Budapest in 1990, Mediso is one of the few independent makers of clinical gamma cameras and SPECT/CT systems (the AnyScan family, including combined SPECT/CT/PET) and is a leader in small-animal imaging with the nanoScan PET/MRI, PET/CT and SPECT/CT systems used in radiopharmaceutical development. Nuclide links it to SPECT/CT and SPECT.",
    "technologies": [
      "spect-ct",
      "spect",
      "pet-ct"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://mediso.com"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "merck",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.merck.com"
      }
    ],
    "name": "Merck & Co. (MSD)",
    "hq": "Rahway, NJ",
    "country": "US",
    "companyType": "pharma",
    "website": "https://www.merck.com",
    "ticker": "MRK",
    "tldr": "Merck & Co. (MSD) makes Keytruda, the world's best-selling cancer drug, and is now building the next act around TROP2 ADCs and personalised vaccines.",
    "summary": "Pembrolizumab anchors >40 indications. Post-2028 patent-cliff strategy: sacituzumab tirumotecan (Kelun licence, >10 phase 3 trials), ifinatamab/patritumab/raludotatug deruxtecan (Daiichi Sankyo alliance, up to $22B), intismeran autogene (Moderna), zilovertamab vedotin, belzutifan, and a PD-1×VEGF bispecific (LaNova).",
    "drugs": [
      "pembrolizumab",
      "olaparib",
      "temozolomide"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "mim-software",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.mimsoftware.com"
      }
    ],
    "name": "MIM Software (GE HealthCare)",
    "hq": "Cleveland, OH",
    "country": "US",
    "companyType": "ai-software",
    "website": "https://www.mimsoftware.com",
    "tldr": "Contouring, image fusion, and dosimetry software (MIM Maestro, SurePlan) for radiotherapy and radioligand therapy, acquired by GE HealthCare in 2024.",
    "summary": "MIM Software, based in Cleveland and acquired by GE HealthCare in 2024, makes contouring, image fusion and dosimetry software, including MIM Maestro and SurePlan, for radiotherapy and radioligand therapy. Its Contour ProtégéAI performs auto-contouring, its PET/CT fusion supports planning, and its personalised dosimetry serves lutetium-177 and yttrium-90 therapies. Nuclide links it to AI auto-contouring and adaptive planning, SPECT and bone scan imaging, and radioligand therapy with beta emitters. Whether personalised dosimetry becomes standard for radioligand therapy, rather than fixed dosing, is the open question its tools are built for. The radioligand therapy page carries the wider evidence.",
    "technologies": [
      "spect",
      "radioligand-therapy"
    ]
  },
  {
    "id": "monopar",
    "kind": "company",
    "name": "Monopar Therapeutics",
    "aka": [
      "Monopar Therapeutics Inc.",
      "Monopar"
    ],
    "hq": "Chicago, IL",
    "country": "US",
    "companyType": "biotech",
    "website": "https://www.monopartx.com",
    "stage": "public",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-sponsor"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor websites)",
      "editedOn": "2026-09-11"
    },
    "tldr": "Monopar is a Chicago-area biotech that took the mucositis drug validive into a phase 3 trial in head and neck cancer, which failed in 2023, and now develops radiopharmaceuticals against the uPAR protein.",
    "summary": "Monopar Therapeutics, based in the Chicago area, developed validive (clonidine mucobuccal tablet) to prevent severe oral mucositis in patients having chemoradiotherapy for oropharyngeal cancer; the phase 3 VOICE trial did not meet its endpoint in 2023. The company has since focused on MNPR-101, an antibody against the urokinase receptor uPAR, as an imaging agent and radiotherapeutic, and on a Wilson disease programme. Its trials are registered on ClinicalTrials.gov under Monopar as lead sponsor.",
    "technologies": [
      "radioligand-therapy"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.monopartx.com"
      },
      {
        "label": "ClinicalTrials.gov: trials led by Monopar Therapeutics Inc.",
        "url": "https://clinicaltrials.gov/search?lead=Monopar%20Therapeutics%20Inc."
      }
    ]
  },
  {
    "id": "navidea",
    "website": "https://www.navidea.com",
    "wikipedia": "https://en.wikipedia.org/wiki/Navidea_Biopharmaceuticals",
    "kind": "company",
    "name": "Navidea Biopharmaceuticals",
    "aka": [
      "Navidea",
      "Neoprobe Corporation"
    ],
    "hq": "Dublin, OH",
    "country": "US",
    "companyType": "diagnostics",
    "stage": "public",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-sponsor"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor websites)",
      "editedOn": "2026-09-11"
    },
    "tldr": "Navidea developed technetium-99m tilmanocept (Lymphoseek), the radiotracer approved in 2013 for mapping sentinel lymph nodes in breast cancer, melanoma and head and neck cancer.",
    "summary": "Navidea Biopharmaceuticals, based in Dublin, Ohio and formerly Neoprobe, developed technetium Tc-99m tilmanocept (Lymphoseek), a receptor-targeted radiotracer that binds CD206 on macrophages in lymph nodes; the FDA approved it in 2013 for sentinel lymph node mapping in breast cancer and melanoma and in 2014 for oral cavity squamous cell carcinoma. The company sold North American rights to Cardinal Health in 2017 and later focused on macrophage imaging in rheumatoid arthritis; its listing was delisted in 2023. It appears on Nuclide as a lead sponsor of phase 3 cancer trials on ClinicalTrials.gov.",
    "drugs": [
      "tilmanocept-tc99m"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials led by Navidea Biopharmaceuticals",
        "url": "https://clinicaltrials.gov/search?lead=Navidea%20Biopharmaceuticals"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Navidea_Biopharmaceuticals"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "id": "nordion",
    "name": "Nordion (Sotera Health)",
    "aka": [],
    "hq": "Ottawa",
    "country": "CA",
    "companyType": "radiopharma",
    "website": "https://www.nordion.com",
    "stage": "public",
    "tldr": "Nordion supplies most of the world's cobalt-60, which sterilises single-use bioprocess bags and medical devices and powers Gamma Knife units, and was the largest molybdenum-99 processor until Canada's NRU reactor stopped.",
    "summary": "Nordion, an Ottawa company owned by Sotera Health, sells cobalt-60 sources harvested from Canadian CANDU power reactors operated by Bruce Power and Ontario Power Generation, used for gamma sterilisation of medical products and single-use bioprocess consumables and for Gamma Knife radiosurgery. Until the NRU reactor at Chalk River ceased isotope production in 2016 it processed a large share of the world's molybdenum-99, and its exit reshaped the supply chain described in the reactor record.",
    "technologies": [
      "research-reactor-isotope-production"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.nordion.com"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "northstar-medical-radioisotopes",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.northstarnm.com"
      }
    ],
    "name": "NorthStar Medical Radioisotopes",
    "hq": "Beloit, WI",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.northstarnm.com",
    "tldr": "NorthStar is a non-reactor producer of Mo-99 in the US and an emerging supplier of non-carrier-added Lu-177 and Ac-225 made with electron accelerators.",
    "summary": "NorthStar Medical Radioisotopes, based in Beloit, Wisconsin, is a non-reactor producer of molybdenum-99 in the United States and an emerging supplier of non-carrier-added lutetium-177 and actinium-225 made with electron accelerators. Its RadioGenix Mo-99 system was approved in 2018, its accelerator-based actinium-225 production facility came online in 2024 to 2025, and it holds lutetium-177 supply agreements. Nuclide links it to the therapeutic isotope supply chain for Mo-99, Lu-177 and Ac-225. Whether accelerator production can supply actinium-225 at the volumes the alpha therapies in phase 3 will need is the open question. The isotope supply chain page carries the wider picture.",
    "technologies": [
      "therapy-isotope-supply-chain"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "novartis",
    "wikipedia": "https://en.wikipedia.org/wiki/Novartis",
    "trials": [
      "netter-1",
      "nct05939414",
      "nct04711135",
      "nct06894511",
      "nct06004661",
      "nct05142696"
    ],
    "aka": [
      "Endocyte"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.novartis.com"
      }
    ],
    "name": "Novartis",
    "hq": "Basel",
    "country": "CH",
    "companyType": "pharma",
    "website": "https://www.novartis.com",
    "ticker": "NOVN.SW",
    "tldr": "The company that made radioligand therapy a business, with Pluvicto and Lutathera, and the maker of Kisqali and Gleevec.",
    "summary": "Novartis, based in Basel and listed as NOVN.SW, is the company that made radioligand therapy a business with Pluvicto and Lutathera, and the maker of Kisqali, Gleevec, Scemblix and Kymriah, the first approved CAR-T. Pluvicto sells more than 1.5 billion dollars a year, and the pipeline includes actinium-225 PSMA-617, FAP-2286 and the Mariana Oncology acquisition, alongside adjuvant ribociclib, imatinib and asciminib. Nuclide links it to the first imatinib trial and IRIS, to ELIANA and JULIET for tisagenlecleucel, to peptide receptor radionuclide therapy, to the AlphaBreak and AcTION actinium trials, and to ideas on Western ytterbium-176 enrichment and two-day CAR-T manufacture. Manufacturing cost and time for living and radioactive medicines is the bottleneck its two flagship modalities share. Lutetium-177 vipivotide tetraxetan and lutetium-177 dotatate have their own pages.",
    "drugs": [
      "pluvicto",
      "lutathera",
      "ac225-psma",
      "fap-2286",
      "aaa817"
    ],
    "companies": [
      "mariana-oncology"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "id": "ntp-radioisotopes",
    "name": "NTP Radioisotopes",
    "aka": [
      "NTP"
    ],
    "hq": "Pelindaba, near Pretoria",
    "country": "ZA",
    "companyType": "radiopharma",
    "website": "https://www.ntp.co.za",
    "stage": "private-large",
    "tldr": "NTP, part of South Africa's state nuclear corporation, processes molybdenum-99 and other isotopes from the SAFARI-1 reactor and was the first major producer to switch to low-enriched uranium targets.",
    "summary": "NTP Radioisotopes, a subsidiary of the South African Nuclear Energy Corporation, irradiates targets in the SAFARI-1 research reactor at Pelindaba and processes molybdenum-99, iodine-131 and lutetium-177 for export to generator makers and radiopharmacies worldwide. It converted its molybdenum production to low-enriched uranium targets ahead of other producers. Regulator-ordered shutdowns of its processing facility in 2017 and 2018 removed a large share of world molybdenum-99 supply for months and showed how few processors there are.",
    "technologies": [
      "research-reactor-isotope-production",
      "therapy-isotope-supply-chain"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.ntp.co.za"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "nucleus-radiopharma",
    "name": "Nucleus RadioPharma",
    "hq": "Rochester, MN",
    "country": "US",
    "companyType": "cro-services",
    "stage": "startup",
    "website": "https://nucleusrad.com/",
    "technologies": [
      "radioligand-therapy"
    ],
    "tldr": "Nucleus RadioPharma does not make its own cancer drugs; it manufactures and ships radioactive cancer medicines for other companies, which is hard because the drugs decay within days. It is expanding its plants in Minnesota and Pennsylvania.",
    "summary": "Nucleus RadioPharma is a Rochester, Minnesota contract development and manufacturing organisation (CDMO) dedicated to targeted radiotherapies, offering formulation and analytical development, isotope-flexible supply chain, GMP manufacturing and regulatory support. Its Rochester facility can produce around 50,000 patient doses per year and a 47,000 square foot Spring House, Pennsylvania site is planned to open in 2028. Customers include Clarity Pharmaceuticals, with a commercial manufacturing agreement for 64Cu-SAR-bisPSMA signed in April 2026, and the company has a Thermo Fisher Scientific alliance and a BWXT Medical isotope supply agreement (June 2026). Former FDA Commissioner Stephen Hahn became CEO in August 2025. In April 2026 the company secured USD 50 million from OrbiMed to expand manufacturing capacity; earlier backers listed in partner releases include Eclipse, Mayo Clinic, AstraZeneca and GE HealthCare.",
    "funding": [
      {
        "round": "Series B",
        "year": 2026,
        "source": "https://nucleusrad.com/wp-content/uploads/Nucleus-RadioPharma-Secures-50-Million-Financing-from-OrbiMed-to-Expand-Radiopharmaceutical-Manufacturing-Capacity.pdf",
        "amountUsd": 50000000,
        "note": "USD 50 million financing from OrbiMed announced 20 April 2026; the company did not name the round, labelled Series B here for schema purposes only"
      }
    ],
    "notes": [
      "Not a therapeutics developer; companyType set to cro-services. Backer list other than OrbiMed comes from the 'About Nucleus RadioPharma' boilerplate in a Clarity Pharmaceuticals PR Newswire release. Founding (2022, Eclipse and Mayo Clinic) and earlier financing not fetched from a primary page; the old domain nucleusradiopharma.com is for sale."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://nucleusrad.com/"
      },
      {
        "label": "OrbiMed financing release (PDF)",
        "url": "https://nucleusrad.com/wp-content/uploads/Nucleus-RadioPharma-Secures-50-Million-Financing-from-OrbiMed-to-Expand-Radiopharmaceutical-Manufacturing-Capacity.pdf"
      },
      {
        "label": "News and events",
        "url": "https://nucleusrad.com/news-events/"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-17",
    "tags": [
      "manufacturing-wave"
    ],
    "id": "nusano",
    "name": "Nusano",
    "aka": [],
    "hq": "West Valley City, Utah",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.nusano.com",
    "stage": "growth",
    "tldr": "Nusano is a Utah company building an isotope production plant around its own ion beam technology, aiming at actinium-225 and other therapeutic isotopes that are in short supply.",
    "summary": "Nusano has developed an ion source and accelerator platform intended to produce a range of medical isotopes at commercial scale and is building a production facility in West Valley City, Utah. Its announced targets include actinium-225 and other alpha and beta emitters for radioligand therapy, and it has signed supply agreements with radiopharmaceutical developers. It is privately funded.",
    "technologies": [
      "actinium-225-supply",
      "cyclotron-isotope-production",
      "therapy-isotope-supply-chain"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.nusano.com"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "orano-med",
    "trials": [
      "nct07278479"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.oranomed.com"
      }
    ],
    "name": "Orano Med",
    "hq": "Paris / Plano, TX",
    "country": "FR",
    "companyType": "radiopharma",
    "website": "https://www.oranomed.com",
    "tldr": "Orano Med is the leading lead-212 producer and the developer of 212Pb-DOTAMTATE (AlphaMedix).",
    "summary": "Orano Med, based in Paris and Plano, Texas, is the leading producer of lead-212 and the developer of 212Pb-DOTAMTATE, known as AlphaMedix, an alpha-emitting radioligand for somatostatin-receptor-positive neuroendocrine tumours. AlphaMedix reported a 56 percent objective response rate in its phase 2, the company builds lead-212 generators, and it works with Sanofi and RadioMedix. Nuclide links it to neuroendocrine tumours, to somatostatin receptor 2 as a target, to peptide receptor radionuclide therapy, targeted alpha therapy and the isotope supply chain, and to the idea of funding alpha emitters beyond actinium-225, including lead-212, terbium-149 and astatine-211. Manufacturing cost and time for radioactive medicines is the bottleneck it sits inside. Whether lead-212 can be delivered to enough hospitals to matter is the open question.",
    "targets": [
      "sstr2"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "perspective-therapeutics",
    "trials": [
      "nct05655312",
      "nct05636618",
      "nct06710756"
    ],
    "name": "Perspective Therapeutics",
    "hq": "Seattle, WA",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://perspectivetherapeutics.com",
    "ticker": "CATX",
    "tldr": "Lead-212 alpha-therapy company whose SSTR2 agent [212Pb]VMT-α-NET reported a 43% response rate in neuroendocrine tumours and is heading for phase 3.",
    "summary": "Phase 1/2a of [212Pb]VMT-α-NET (NCT05636618): 43% ORR in cohort 2 with 72% progression-free/alive at the 2026 update; 76 NET patients treated by July 2026; first meningioma patient dosed June 2026; EU orphan designation July 2026. Phase 3 planned at a cumulative 20 mCi dose. Also developing PSMA and melanocortin-1 receptor 212Pb agents. Its FAP-alpha agent PSV359, paired with the 203Pb/68Ga imaging analogue PSV377, is in a phase 1/2 first-in-human study (NCT06710756); on 14 September 2026 the company announced a collaboration and supply agreement with Merck to add cohorts combining [212Pb]PSV359 with pembrolizumab in FAP-alpha-positive non-small cell lung cancer and colorectal cancer, which is the first time an alpha-emitting radioligand has been taken into NSCLC. The dose-expansion part of the VMT-alpha-NET trial also enrols bronchial neuroendocrine tumours.",
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "targets": [
      "sstr2",
      "psma"
    ],
    "indications": [
      "neuroendocrine"
    ],
    "terms": [
      "alpha-vs-beta"
    ],
    "links": [
      {
        "label": "Q2 2026 highlights",
        "url": "https://www.globenewswire.com/news-release/2026/08/10/3342260/0/en/perspective-therapeutics-provides-recent-business-highlights-and-reports-2q-2026-results.html"
      },
      {
        "label": "Clinical collaboration and supply agreement with Merck to evaluate [212Pb]PSV359 with Keytruda in FAP-alpha positive solid tumours, including NSCLC (14 September 2026)",
        "url": "https://www.perspectivetherapeutics.com/pr/perspective-therapeutics-announces-clinical-collaboration-and-supply-agreement-with-merck-to-evaluate-212pbpsv359-in-combination-with-keytruda-pembrolizumab-in-fap-a-positive-solid-tumors"
      }
    ],
    "drugs": [
      "pb-212-vmt-alpha-net",
      "pb-212-psv359"
    ],
    "related": [
      "nsclc",
      "lung-net"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "petnet-solutions",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.siemens-healthineers.com/molecular-imaging/petnet"
      }
    ],
    "name": "PETNET Solutions (Siemens Healthineers)",
    "hq": "Knoxville, TN",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.siemens-healthineers.com/molecular-imaging/petnet",
    "tldr": "PETNET Solutions is the largest network of PET radiopharmacies in the US, producing FDG and PSMA tracers daily.",
    "summary": "PETNET Solutions, part of Siemens Healthineers and based in Knoxville, Tennessee, is the largest network of PET radiopharmacies in the United States, producing FDG and PSMA tracers every day. It operates about fifty cyclotron sites in the United States plus international operations and is the commercial distributor for several FDA-approved PET drugs. Nuclide links it to radiopharmacy and cyclotron networks and PET tracer manufacturing and distribution, and to the fludeoxyglucose F-18 drug record. Whether a network built for FDG can adapt to the many new PSMA, FAP and receptor tracers coming through is the open question. FDG has its own page.",
    "technologies": [
      "radiopharmacy-network",
      "pet-tracer-manufacturing"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "pfizer",
    "aka": [
      "Seagen",
      "Seagen (Pfizer)",
      "Seattle Genetics"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.pfizer.com"
      }
    ],
    "name": "Pfizer (incl. Seagen)",
    "hq": "New York, NY",
    "country": "US",
    "companyType": "pharma",
    "website": "https://www.pfizer.com",
    "ticker": "PFE",
    "tldr": "Bought Seagen for $43B to become an ADC leader; also makes Ibrance, Lorbrena, Braftovi, and the first PROTAC.",
    "summary": "Pfizer, based in New York and listed as PFE, bought Seagen for 43 billion dollars to become an antibody-drug conjugate leader, and it also makes Ibrance, Lorbrena and Braftovi and developed the first PROTAC, vepdegestrant, with Arvinas. The ADC portfolio covers Padcev, Adcetris, Tivdak, Tukysa, disitamab vedotin outside China and sigvotatug vedotin; the small-molecule side includes palbociclib, atirmociclib, lorlatinib, encorafenib and talazoparib; and a PD-1 by VEGF bispecific was licensed from 3SBio in 2025 with 1.25 billion dollars upfront. Nuclide links it to the EV-302, CROWN, BREAKWATER, ECHELON-1 and INO-VATE papers, to ponsegromab and cachexia as a treatable disease, to LIV-1 as a target and to Pfizer Ventures. Whether Seagen's platform yields new ADCs rather than only sustaining the acquired ones is the open question. Each product has its own page.",
    "drugs": [
      "dexrazoxane"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "point-biopharma",
    "name": "POINT Biopharma",
    "hq": "Indianapolis, IN",
    "country": "US",
    "companyType": "radiopharma",
    "stage": "acquired",
    "acquiredBy": "eli-lilly",
    "website": "https://www.lilly.com/",
    "technologies": [
      "radioligand-therapy"
    ],
    "targets": [
      "psma",
      "sstr2"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "tldr": "POINT Biopharma developed radioactive medicines that home in on prostate cancer and neuroendocrine tumours, and built a large manufacturing campus in Indianapolis. Eli Lilly bought the company at the end of 2023.",
    "summary": "POINT Biopharma Global Inc. (formerly Nasdaq: PNT) was an Indianapolis radiopharmaceutical company with late-stage radioligand therapies: PNT2002, a PSMA-targeted therapy for metastatic castration-resistant prostate cancer after progression on hormonal treatment, and PNT2003, a somatostatin receptor (SSTR)-targeted therapy for gastroenteropancreatic neuroendocrine tumours, both partnered with Lantheus outside certain Asian territories, plus earlier clinical and preclinical programmes. It operated a 180,000 square foot radiopharmaceutical manufacturing campus in Indianapolis and an R&D centre in Toronto. On 2 October 2023 Eli Lilly agreed to acquire POINT through a cash tender offer of USD 12.50 per share, and the merger was completed in late December 2023; the company website now redirects to lilly.com.",
    "funding": [
      {
        "round": "Acquisition",
        "year": 2023,
        "source": "https://www.sec.gov/Archives/edgar/data/1811764/000110465923106146/tm2327397d1_ex99-4.htm",
        "amountUsd": 1400000000,
        "note": "Cash tender offer at USD 12.50 per share, an aggregate of approximately USD 1.4 billion, under a merger agreement dated 2 October 2023; completion reported in an 8-K filed 27 December 2023"
      }
    ],
    "notes": [
      "pointbiopharma.com redirects to lilly.com, recorded as the website. Deal value and pipeline details come from the Lilly press release filed as exhibit 99.4 to POINT's 8-K of 3 October 2023."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.lilly.com/"
      },
      {
        "label": "Form 8-K: merger agreement with Eli Lilly",
        "url": "https://www.sec.gov/Archives/edgar/data/1811764/000110465923106146/tm2327397d1_8k.htm"
      },
      {
        "label": "Lilly press release (8-K exhibit 99.4)",
        "url": "https://www.sec.gov/Archives/edgar/data/1811764/000110465923106146/tm2327397d1_ex99-4.htm"
      },
      {
        "label": "Form 8-K: completion of merger",
        "url": "https://www.sec.gov/Archives/edgar/data/1811764/000119312523303512/d594310d8k.htm"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "precirix",
    "name": "Precirix",
    "hq": "Brussels",
    "country": "BE",
    "companyType": "radiopharma",
    "stage": "startup",
    "website": "https://www.evergreentgn.com/2023/06/08/cam-h2-production-at-evergreen-marks-the-expansion-of-precirix-clinical-trial-to-the-us/",
    "technologies": [
      "radioligand-therapy"
    ],
    "targets": [
      "her2"
    ],
    "indications": [
      "breast-her2-positive"
    ],
    "tldr": "Precirix, of Brussels, develops radiopharmaceuticals built on small single-domain antibody fragments that carry a radioactive isotope to HER2-positive cancers. Its lead, CAM-H2, is in a phase 1/2 trial in HER2-positive breast, gastric and gastro-oesophageal cancer, including patients with brain metastases, with an imaging dose given first to confirm HER2 in the lesions.",
    "summary": "Precirix is a clinical-stage Brussels biotechnology company developing precision radiopharmaceuticals in oncology based on single-domain antibody (sdAb) targeting. Its lead candidate CAM-H2 is a HER2-directed radiopharmaceutical in a phase 1/2 trial, initially in Canada, evaluating safety, tolerability and efficacy in HER2-positive metastatic breast, gastric and gastro-oesophageal cancer, including patients with brain metastases. Patients first receive an imaging dose to confirm HER2 expression in lesions before therapeutic dosing. In June 2023 Precirix announced production of a first clinical trial batch of CAM-H2 at Evergreen Theragnostics in New Jersey to support expansion of the trial to the United States.",
    "notes": [
      "Financing (a EUR 80 million Series B reported by Fierce Biotech, whose page returned HTTP 403) is omitted as unsourced. Current operating status is uncertain given the offline website."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.evergreentgn.com/2023/06/08/cam-h2-production-at-evergreen-marks-the-expansion-of-precirix-clinical-trial-to-the-us/"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "radiomedix",
    "name": "RadioMedix",
    "hq": "Houston, TX",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.radiomedix.com",
    "tldr": "RadioMedix is developing AlphaMedix (212Pb-DOTAMTATE) with Orano Med, the first targeted alpha therapy to receive FDA Breakthrough designation.",
    "summary": "RadioMedix, based in Houston, is developing AlphaMedix, or 212Pb-DOTAMTATE, with Orano Med, the first targeted alpha therapy to receive FDA Breakthrough designation. AlphaMedix met all primary efficacy endpoints in phase 2, with a 60 percent objective response rate in PRRT-naive gastroenteropancreatic neuroendocrine tumour patients reported at ESMO 2025, was licensed to Sanofi with Orano Med in 2024, and has its next trial planned for late 2026; the company marked twenty years at SNMMI 2026. Nuclide links it to neuroendocrine tumours, to targeted alpha therapy and peptide receptor radionuclide therapy, to somatostatin receptor 2 as a target, and to Orano Med and Sanofi. Whether a lead-212 alpha emitter beats existing beta-emitter PRRT in a randomised trial is the open question. 212Pb-DOTAMTATE has its own page.",
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "targets": [
      "sstr2"
    ],
    "indications": [
      "neuroendocrine"
    ],
    "companies": [
      "orano-med"
    ],
    "links": [
      {
        "label": "Sanofi licensing agreement",
        "url": "https://www.sanofi.com/en/media-room/press-releases/2024/2024-09-12-05-00-00-2944919"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "radionetics-oncology",
    "name": "Radionetics Oncology",
    "hq": "San Diego, CA",
    "country": "US",
    "founded": 2021,
    "companyType": "radiopharma",
    "stage": "startup",
    "website": "https://radionetics.com/",
    "technologies": [
      "radioligand-therapy"
    ],
    "tldr": "Radionetics Oncology makes small-molecule drugs that carry a radioactive isotope to receptors on the surface of cancer cells that have rarely been targeted before. Eli Lilly paid 140 million dollars in 2024 for the right to buy the company for 1 billion dollars.",
    "summary": "Radionetics Oncology, a San Diego company that emerged from Crinetics Pharmaceuticals in October 2021, discovers and develops small-molecule radiopharmaceuticals against G protein-coupled receptor (GPCR) targets not previously pursued by radiopharmaceuticals, identified through AI-driven multi-omics. Its first phase 1 radiopharmaceutical programme, against a novel target for adrenocortical carcinoma, was initiated in October 2023. In January 2024 the company raised a USD 52.5 million Series A led by Frazier Life Sciences, 5AM Ventures and DCVC Bio, appointing Paul Grayson as CEO. In July 2024 it entered a strategic agreement with Eli Lilly under which Radionetics received a USD 140 million upfront payment and Lilly obtained the exclusive right to acquire the company for USD 1 billion after an exercise period, during which Radionetics continues to build its GPCR-targeted pipeline.",
    "funding": [
      {
        "round": "Series A",
        "year": 2024,
        "source": "https://radionetics.com/news/radionetics-oncology-raises-52-5m-series-a",
        "amountUsd": 52500000,
        "note": "Brought total raised to USD 82.5 million"
      }
    ],
    "notes": [
      "The USD 140 million Lilly upfront payment is a strategic agreement, not an equity round, so it is described in the summary rather than in funding."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://radionetics.com/"
      },
      {
        "label": "Series A press release",
        "url": "https://radionetics.com/news/radionetics-oncology-raises-52-5m-series-a"
      },
      {
        "label": "Lilly strategic agreement release",
        "url": "https://radionetics.com/news/radionetics-oncology-enters-into-strategic-agreement-with-lilly"
      }
    ]
  },
  {
    "id": "radiopharm-theranostics",
    "kind": "company",
    "name": "Radiopharm Theranostics",
    "aka": [
      "Radiopharm Theranostics, Ltd"
    ],
    "hq": "Melbourne",
    "country": "AU",
    "companyType": "radiopharma",
    "website": "https://radiopharmtheranostics.com/",
    "ticker": "ASX:RAD, NASDAQ:RADX",
    "founded": 2021,
    "stage": "public",
    "asOf": "2026-09-17",
    "tags": [
      "ctgov-sponsor"
    ],
    "provenance": {
      "editedBy": "Nuclide orphan-trial linking round (ClinicalTrials.gov v2 + sponsor websites)",
      "editedOn": "2026-09-17"
    },
    "tldr": "Radiopharm Theranostics is an Australia-based radiopharmaceutical company that leads 3 cancer trials in Nuclide, testing the radiopharmaceuticals 161Tb-RAD402, 177Lu-BetaBart and the PET tracer RAD101 in prostate cancer, colorectal cancer, non-small-cell lung cancer and ovarian cancer.",
    "summary": "Radiopharm Theranostics is a clinical-stage company developing radiopharmaceuticals for the diagnosis and treatment of cancer, using nanobody, antibody, small-molecule and peptide platforms directed at targets other than PSMA, FAP and SSTR2. It has a joint venture with MD Anderson Cancer Center and is listed in Australia and on Nasdaq. On ClinicalTrials.gov it is the lead sponsor of 3 trials recorded in Nuclide: NCT07189871 (phase 1/2, 177Lu-BetaBart in Patients With Relapsed/Refractory, Locally Advanced Inoperable, or Me...), NCT07259213 (phase 1/2, A Study of Terbium 161 (161Tb)-RAD402 in Participants With CRPC) and NCT06777433 (phase 2, Phase 2b Imaging Study of RAD101 in Participants With Suspected Recurrent Brain Metastases). Sponsor and trial facts are from the ClinicalTrials.gov registry; company facts are from the official website.",
    "indications": [
      "prostate"
    ],
    "trials": [
      "nct07189871",
      "nct07259213",
      "nct06777433"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://radiopharmtheranostics.com/"
      },
      {
        "label": "ClinicalTrials.gov: trials led by Radiopharm Theranostics",
        "url": "https://clinicaltrials.gov/search?lead=Radiopharm%20Theranostics%2C%20Ltd"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-10",
    "id": "ratio-therapeutics",
    "name": "Ratio Therapeutics",
    "hq": "Boston, MA",
    "country": "US",
    "companyType": "radiopharma",
    "stage": "growth",
    "website": "https://ratiotx.com/",
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy"
    ],
    "targets": [
      "fap"
    ],
    "tldr": "Ratio Therapeutics, of Boston, designs small molecules that carry a radioactive isotope to fibroblast activation protein, a protein on the supporting tissue of sarcomas and other solid tumours, so radiation is delivered from inside the body. Its lead, an actinium-225 radioligand, is in the ATLAS phase 1/2 trial in advanced sarcomas.",
    "summary": "Ratio Therapeutics is a clinical-stage Boston radiopharmaceutical company whose Trillium targeting scaffold combines pharmacokinetic modulation with chelation chemistry to create small-molecule radioligands that can be paired with imaging or therapeutic isotopes (theranostics). The lead programme [Ac-225]RTX-2358 is a fibroblast activation protein (FAP)-targeted actinium-225 therapeutic in the ATLAS phase 1/2 trial in advanced sarcomas; the pipeline also includes a next-generation GRPR programme and additional mono- and bispecific radioligands, with a fifth IND filing in preparation. In July 2026 Ratio closed a USD 70 million Series C with Duquesne Family Office, Bristol Myers Squibb, Catalio Capital, Eli Lilly and Wasatch Group, taking total capital raised above USD 240 million. It has manufacturing collaborations with PharmaLogic, an actinium-225 supply agreement with PanTera (June 2026) and, in September 2026, a research collaboration and licence agreement with RayzeBio.",
    "funding": [
      {
        "round": "Series C",
        "year": 2026,
        "source": "https://ratiotx.com/2026/07/31/ratio-therapeutics-closes-70-million-series-c-financing-to-advance-clinical-development-of-targeted-radiotherapeutics-pipeline-and-expand-manufacturing-infrastructure/",
        "amountUsd": 70000000,
        "note": "Brings total capital raised to over USD 240 million"
      }
    ],
    "notes": [
      "Earlier rounds (Series A and B) not fetched and omitted."
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://ratiotx.com/"
      },
      {
        "label": "Series C press release",
        "url": "https://ratiotx.com/2026/07/31/ratio-therapeutics-closes-70-million-series-c-financing-to-advance-clinical-development-of-targeted-radiotherapeutics-pipeline-and-expand-manufacturing-infrastructure/"
      },
      {
        "label": "News",
        "url": "https://ratiotx.com/news1/"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "rayzebio",
    "trials": [
      "nct06590857",
      "nct06726161"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.rayzebio.com"
      }
    ],
    "name": "RayzeBio (BMS)",
    "hq": "San Diego, CA",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.rayzebio.com",
    "tldr": "RayzeBio is the actinium-225 radiopharma company that BMS bought for $4.1B; its RYZ101 is in phase 3.",
    "summary": "RayzeBio, based in San Diego, is the actinium-225 radiopharmaceutical company that Bristol Myers Squibb bought for 4.1 billion dollars, and its RYZ101 is in phase 3. RYZ101 is actinium-225 DOTATATE for somatostatin-receptor-positive neuroendocrine tumours, RYZ801 is an actinium-225 PSMA agent, and the company built in-house actinium-225 manufacturing. Nuclide links it to neuroendocrine tumours, to peptide receptor radionuclide therapy and targeted alpha therapy, to the actinium-225 DOTATATE drug record, and to the radiopharmaceutical roadmap from iodine through lutetium to actinium. Whether an alpha emitter can improve on lutetium-based radioligand therapy is the question RYZ101's phase 3 will answer. Actinium-225 DOTATATE has its own page.",
    "drugs": [
      "ryz101"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "shine-technologies",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.shinefusion.com"
      }
    ],
    "name": "SHINE Technologies",
    "hq": "Janesville, WI",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.shinefusion.com",
    "tldr": "SHINE Technologies is a fusion-based isotope company that produces non-carrier-added Lu-177 (Ilumira) and is building the Chrysalis Mo-99 plant.",
    "summary": "SHINE Technologies, based in Janesville, Wisconsin, is a fusion-based isotope company that produces non-carrier-added lutetium-177, sold as Ilumira, and is building the Chrysalis molybdenum-99 plant. It has supplied lutetium-177 to radiopharmaceutical developers since 2022, its large-scale Mo-99 facility is under construction, and it holds long-term fusion energy ambitions. Nuclide links it to the therapeutic isotope supply chain for Mo-99, Lu-177 and Ac-225. Whether a second Western source of lutetium-177 makes supply resilient enough for radioligand therapy to scale is the open question. The isotope supply chain page carries the wider picture.",
    "technologies": [
      "therapy-isotope-supply-chain"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "siemens-healthineers",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.siemens-healthineers.com"
      }
    ],
    "name": "Siemens Healthineers",
    "hq": "Erlangen",
    "country": "DE",
    "companyType": "imaging",
    "website": "https://www.siemens-healthineers.com",
    "tldr": "Siemens Healthineers makes the Biograph Vision Quadra total-body PET and photon-counting CT, and owns Varian.",
    "summary": "Siemens Healthineers, based in Erlangen, makes the Biograph Vision Quadra total-body PET scanner and the NAEOTOM Alpha photon-counting CT, alongside MAGNETOM MRI, and it owns the radiotherapy company Varian. Nuclide links it to PET/CT, CT and MRI as technologies, to nuclear medicine and total-body PET hardware, total-body PET for screening and ultra-low-dose imaging, AI auto-contouring and medical cyclotrons, and to ideas on total-body PET for personalised radioligand dosing and on validating and reimbursing AI contouring to expand radiotherapy capacity. Owning both imaging and radiotherapy gives it a position across the treatment pathway that few rivals share. Whether total-body PET moves from research instrument to routine clinical tool is the open question. Varian has its own page.",
    "technologies": [
      "pet-ct",
      "ct"
    ]
  },
  {
    "id": "sinotau-pharmaceutical",
    "trials": [
      "nct05459844",
      "nct06398444"
    ],
    "kind": "company",
    "name": "Sinotau Pharmaceutical",
    "aka": [
      "Sinotau Pharmaceutical Group"
    ],
    "hq": "Beijing",
    "country": "CN",
    "companyType": "radiopharma",
    "website": "https://www.sinotau.com/",
    "founded": 2014,
    "stage": "private-large",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-sponsor"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor websites)",
      "editedOn": "2026-09-11"
    },
    "tldr": "Sinotau Pharmaceutical is a China-based radiopharmaceutical company running 2 late-stage cancer trials of Octreotide LAR in neuroendocrine tumours.",
    "summary": "Sinotau Pharmaceutical, based in Beijing, China, is a radiopharmaceutical company. Sinotau specialises in the research and development, production, clinical application and academic promotion of radiopharmaceutical drugs, with therapeutic focus areas in oncology, neurology and cardiology. On ClinicalTrials.gov it is the lead sponsor of 2 recruiting or active phase 2 and phase 3 interventional cancer trials (2 in phase 3), testing Octreotide LAR in neuroendocrine tumours. The largest, NCT05459844 (A Study Comparing Treatment With Lutetium[177Lu] Oxodotreotide Injection to Octreotide LAR in Patients With GEP-NETs), plans to enrol 196 participants (actual). Sponsor and trial facts are from the ClinicalTrials.gov registry; company facts are from the official website.",
    "indications": [
      "neuroendocrine"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.sinotau.com/"
      },
      {
        "label": "ClinicalTrials.gov: trials led by Sinotau Pharmaceutical",
        "url": "https://clinicaltrials.gov/search?lead=Sinotau%20Pharmaceutical%20Group"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-07",
    "id": "sirtex",
    "name": "Sirtex Medical",
    "hq": "Woburn, MA",
    "country": "US",
    "companyType": "devices",
    "website": "https://www.sirtex.com",
    "tldr": "Sirtex makes SIR-Spheres, yttrium-90 resin microspheres used for radioembolisation of liver tumours.",
    "summary": "Sirtex Medical, based in Woburn, Massachusetts, and owned by China Grand Pharmaceutical, makes SIR-Spheres, yttrium-90 resin microspheres used for radioembolisation of liver tumours. SIR-Spheres are indicated in the United States for unresectable colorectal cancer metastatic to the liver and carry a CE mark for hepatocellular carcinoma, with the DOORwaY90 trial supporting a US indication in liver cancer, and they compete with Boston Scientific's TheraSphere glass microspheres. Nuclide links it to hepatocellular carcinoma and colorectal cancer and to the radioembolisation technology record. Whether radioembolisation earns a place alongside systemic immunotherapy combinations in liver cancer, rather than being displaced by them, is the open question. The technology page covers the evidence.",
    "technologies": [
      "radioembolisation-tare"
    ],
    "indications": [
      "hcc"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://www.sirtex.com"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "sofie-biosciences",
    "trials": [
      "nct07217704"
    ],
    "name": "SOFIE Biosciences",
    "hq": "Dulles, VA",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://sofie.com",
    "tldr": "SOFIE Biosciences is a US radiopharmacy network running two phase 3 trials of the FAP PET tracer [18F]FAPI-74 in pancreatic and gastro-oesophageal cancer.",
    "summary": "SOFIE Biosciences, based in Dulles, Virginia, is a US radiopharmacy network running two phase 3 trials of the FAP PET tracer 18F-FAPI-74 in pancreatic and gastro-oesophageal cancer. First patients were dosed in the FAPI-GO gastro-oesophageal trial in December 2025 and the pancreatic trial in February 2026, seven radiopharmacies have been cleared to manufacture 18F-FAPI-74 with twelve-hour shelf-life distribution planned in 2026, and the FAPI chemistry originated at Heidelberg. Nuclide links it to pancreatic, gastric and oesophageal cancer, to FAPI PET and PET, to FAP as a target, to Heidelberg University Hospital and the DKFZ, and to PET tracer manufacturing and radiopharmacy networks. Whether FAP imaging changes staging and treatment in cancers where FDG PET falls short is the question the phase 3 trials will answer. The FAPI PET technology page carries the evidence.",
    "technologies": [
      "fapi-pet",
      "pet"
    ],
    "targets": [
      "fap"
    ],
    "institutions": [
      "heidelberg-nct"
    ],
    "links": [
      {
        "label": "Phase 3 first patient",
        "url": "https://sofie.com/2026/02/11/sofie-biosciences-announces-first-patient-dosed-in-18ffapi-74-phase-3-study-for-pancreatic-cancer/"
      }
    ]
  },
  {
    "id": "spectrum-pharmaceuticals",
    "website": "https://www.spectrumpharm.com",
    "wikipedia": "https://en.wikipedia.org/wiki/Spectrum_Pharmaceuticals",
    "kind": "company",
    "name": "Spectrum Pharmaceuticals",
    "aka": [
      "Spectrum Pharmaceuticals, Inc",
      "Spectrum Pharmaceuticals, Inc."
    ],
    "hq": "Boston, MA",
    "country": "US",
    "companyType": "biotech",
    "stage": "acquired",
    "asOf": "2026-09-11",
    "tags": [
      "ctgov-sponsor"
    ],
    "provenance": {
      "editedBy": "Nuclide ingestion (ClinicalTrials.gov v2 + sponsor websites)",
      "editedOn": "2026-09-11"
    },
    "tldr": "Spectrum Pharmaceuticals was a US cancer company that sold its haematology portfolio to Acrotech in 2019, won approval for the long-acting G-CSF eflapegrastim (Rolvedon) in 2022, and was acquired by Assertio in 2023.",
    "summary": "Spectrum Pharmaceuticals, latterly based in Boston after years in Henderson, Nevada, marketed a haematology portfolio (Zevalin, Folotyn, Beleodaq, Marqibo and Evomela) that it sold to Acrotech Biopharma in 2019 to concentrate on two development programmes: poziotinib, an EGFR and HER2 exon 20 inhibitor that received a complete response letter in 2022, and eflapegrastim (Rolvedon), a long-acting G-CSF for chemotherapy-induced neutropenia approved by the FDA in September 2022. Assertio Holdings acquired the company in 2023. It appears on Nuclide as one of the most frequent industry sponsors of phase 3 cancer trials on the registry.",
    "companies": [
      "acrotech-biopharma"
    ],
    "links": [
      {
        "label": "ClinicalTrials.gov: trials led by Spectrum Pharmaceuticals",
        "url": "https://clinicaltrials.gov/search?lead=Spectrum%20Pharmaceuticals"
      },
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Spectrum_Pharmaceuticals"
      }
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "telix",
    "drugs": [
      "girentuximab-zr89"
    ],
    "trials": [
      "nct06520345",
      "nct07052214"
    ],
    "links": [
      {
        "label": "Official website",
        "url": "https://telixpharma.com"
      },
      {
        "label": "Telix and Regeneron announce strategic radiopharma collaboration (13 April 2026)",
        "url": "https://telixpharma.com/news-views/telix-and-regeneron-announce-strategic-radiopharma-collaboration/"
      },
      {
        "label": "Telix Q2 2026 results: the Regeneron collaboration is \"initially focused on lung cancer\" (21 July 2026)",
        "url": "https://telixpharma.com/news-views/telix-q2-2026-revenue-us247m-strong-momentum-and-pipeline-progress/"
      },
      {
        "label": "Telix asset purchase from ImaginAb, including a discovery-stage DLL3 programme for small-cell lung cancer (13 January 2025)",
        "url": "https://www.sec.gov/Archives/edgar/data/2007191/000200719125000003/frelease.htm"
      },
      {
        "label": "Telix pipeline (no lung indication listed)",
        "url": "https://telixpharma.com/our-pipeline/"
      }
    ],
    "name": "Telix Pharmaceuticals",
    "hq": "Melbourne",
    "country": "AU",
    "companyType": "radiopharma",
    "website": "https://telixpharma.com",
    "ticker": "TLX.AX",
    "tldr": "Telix is the Australian theranostics company behind Illuccix and Gozellix PSMA imaging and a broad therapeutic pipeline.",
    "summary": "Telix Pharmaceuticals, based in Melbourne and listed as TLX.AX, is the Australian theranostics company behind the Illuccix and Gozellix kits for gallium-68 PSMA-11 imaging and a broad therapeutic pipeline. TLX250-CDx, or zirconium-89 girentuximab for carbonic anhydrase IX PET in kidney cancer, received an FDA complete response letter in 2025, TLX591, or lutetium-177 rosopatamab, a PSMA antibody in the ProstACT phase 3, and TLX101 for glioma follow. Nuclide links it to prostate cancer and renal cell carcinoma, to PSMA as a target, to CAIX PET and PET tracer manufacturing, and to the idea of CAIX theranostics pairing girentuximab imaging with lutetium or actinium therapy. Whether an antibody-based PSMA therapy can compete with small-molecule ligands is the open question. Illuccix has its own page.\n\nIts lung-cancer position is entirely pre-clinical, which is worth stating plainly because the company is often named in the same breath as lung radiopharmaceuticals. No asset on the published pipeline carries a lung indication, and ClinicalTrials.gov returns no recruiting Telix lung-cancer study. What exists is two commitments. In January 2025 Telix bought a pipeline of early-stage therapeutic candidates and a biologics platform from ImaginAb for US$45 million plus up to US$185 million in milestones, including a discovery-stage programme against DLL3, the surface protein of small-cell lung cancer, with no TLX code or isotope assigned. In April 2026 it signed a collaboration with Regeneron covering four initial programmes built on Regeneron antibodies, for US$40 million upfront, an equal share of costs and profits and up to US$2.1 billion in milestones; Telix\u2019s own second-quarter 2026 results describe that collaboration as initially focused on lung cancer.",
    "targets": [
      "psma",
      "dll3"
    ],
    "related": [
      "sclc",
      "nsclc"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "terrapower-isotopes",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.terrapower.com/isotopes"
      }
    ],
    "name": "TerraPower Isotopes",
    "hq": "Bellevue, WA",
    "country": "US",
    "companyType": "radiopharma",
    "website": "https://www.terrapower.com/isotopes",
    "tldr": "Bill Gates-backed producer of actinium-225 from thorium-229, building a Philadelphia facility to raise supply 20-fold.",
    "summary": "TerraPower Isotopes, based in Bellevue, Washington, is the Bill Gates-backed producer of actinium-225 from thorium-229, building a Philadelphia facility intended to raise supply twenty-fold. It obtains actinium-225 from the decay of thorium-229 recovered from a legacy uranium-233 stockpile and holds supply agreements with Bayer, Bristol Myers Squibb and others. Nuclide links it to targeted alpha therapy, alpha-emitter nanogenerators and the therapeutic isotope supply chain, to the radiopharmaceutical roadmap from iodine to actinium, and to the idea of recovering legacy radium-226 sources worldwide as feedstock. Manufacturing cost and time for radioactive medicines is the bottleneck it exists to relieve. Whether supply can grow fast enough for the alpha therapies now in phase 3 is the open question.",
    "tags": [
      "isotope-supply"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-08",
    "tags": [
      "supporting"
    ],
    "id": "trasis",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.trasis.com"
      }
    ],
    "name": "Trasis",
    "hq": "Ans",
    "country": "BE",
    "companyType": "radiopharma",
    "website": "https://www.trasis.com",
    "tldr": "Belgian maker of radiopharmaceutical synthesis modules (AllinOne, miniAiO) and dose dispensers used in PET and therapy radiopharmacies.",
    "summary": "Trasis, based in Ans, Belgium, makes radiopharmaceutical synthesis modules, including AllinOne and miniAiO, and dose dispensers used in PET and therapy radiopharmacies. Its cassette-based automated radiochemistry and cyclotron target solutions are widely used for gallium-68, fluorine-18 and lutetium-177 labelling. Nuclide links it to medical cyclotrons, hot cells and synthesis modules. Whether synthesis automation can keep pace with the many new tracers and therapeutic ligands entering the clinic is the open question for its market. The cyclotron and synthesis technology page carries the wider picture.",
    "technologies": [
      "medical-cyclotrons-synthesis-modules"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-04",
    "id": "united-imaging",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.united-imaging.com"
      }
    ],
    "name": "United Imaging",
    "hq": "Shanghai",
    "country": "CN",
    "companyType": "imaging",
    "website": "https://www.united-imaging.com",
    "ticker": "688271.SS",
    "tldr": "Chinese imaging company that built uEXPLORER, the first total-body PET scanner.",
    "summary": "United Imaging, based in Shanghai and listed as 688271.SS, is the Chinese imaging company that built uEXPLORER, the first total-body PET scanner. The uEXPLORER has a 194 centimetre axial field of view and about forty times the sensitivity of a conventional scanner, the uMI Panorama is its other PET platform, and the company has a growing presence in the United States. Nuclide links it to PET/CT, to nuclear medicine and total-body PET hardware and total-body PET for screening and ultra-low-dose imaging, to the molecular imaging roadmap, and to ideas on total-body PET for personalised radioligand dosing and on open-hardware machines for difficult environments. Whether ultra-sensitive scanners lead to lower-dose or cheaper imaging in practice is the open question. The total-body PET technology page carries the detail.",
    "technologies": [
      "pet-ct"
    ]
  },
  {
    "kind": "company",
    "asOf": "2026-09-07",
    "id": "y-mabs",
    "links": [
      {
        "label": "Official website",
        "url": "https://www.ymabs.com"
      }
    ],
    "name": "Y-mAbs Therapeutics",
    "hq": "New York, NY",
    "country": "US",
    "companyType": "biotech",
    "website": "https://www.ymabs.com",
    "ticker": "YMAB",
    "tldr": "MSK spin-out that commercialises naxitamab, the humanised anti-GD2 antibody for relapsed neuroblastoma, and develops pretargeted radioimmunotherapy.",
    "summary": "Y-mAbs Therapeutics, based in New York and listed as YMAB, is a Memorial Sloan Kettering spin-out that commercialises naxitamab, the humanised anti-GD2 antibody for relapsed neuroblastoma, and develops pretargeted radioimmunotherapy. Naxitamab, sold as Danyelza, received accelerated approval in November 2020; omburtamab, a B7-H3 antibody carrying iodine-131, was rejected by the FDA in 2022; and the SADA pretargeted radioimmunotherapy platform, with a GD2-SADA and lutetium-177 pairing, is in phase 1. Nuclide links it to paediatric neuroblastoma, to GD2 as a target and to the bottleneck of rare and paediatric cancers without markets. Whether pretargeting can deliver radiation to paediatric tumours with less marrow toxicity than direct radioimmunotherapy is the open question. Naxitamab has its own page.",
    "indications": [
      "neuroblastoma"
    ]
  }
];
