/**
 * Journals: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedJournals: EntityInput[] = [
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "annals-of-oncology",
    "name": "Annals of Oncology",
    "aka": [
      "Ann Oncol",
      "src-annals-oncology"
    ],
    "matchNames": [
      "Annals of Oncology",
      "Ann Oncol"
    ],
    "publisher": "Elsevier",
    "society": "European Society for Medical Oncology",
    "url": "https://www.annalsofoncology.org",
    "issn": "0923-7534",
    "scope": "clinical oncology",
    "access": "hybrid",
    "founded": 1990,
    "impactFactor": {
      "value": 56.7,
      "year": 2023,
      "source": "Clarivate Journal Citation Reports 2024 (2023 JIF)"
    },
    "tldr": "Annals of Oncology is ESMO's flagship journal, publishing European phase 3 trials, the ESMO Clinical Practice Guidelines and the abstract books for the ESMO Congress.",
    "summary": "Annals of Oncology appears monthly and publishes the ESMO Clinical Practice Guidelines (free to read), ESMO-MCBS benefit scores, trial results often presented at ESMO Congress, translational biomarker studies and the ESMO congress abstract supplements. Published by Elsevier since 2019 (previously Oxford University Press). Hybrid access.",
    "links": [
      {
        "label": "ESMO Guidelines",
        "url": "https://www.esmo.org/guidelines"
      }
    ],
    "notes": [
      "Holds: ESMO journal: trials, ESMO guidelines, ESMO-MCBS scorecards and congress abstracts. Access: Paywalled; guidelines and abstracts free."
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-10",
    "id": "cancer-biotherapy-and-radiopharmaceuticals",
    "name": "Cancer biotherapy & radiopharmaceuticals",
    "aka": [
      "Cancer Biotherapy & Radiopharmaceuticals",
      "Cancer Biotherapy and Radiopharmaceuticals",
      "Cancer Biother Radiopharm"
    ],
    "matchNames": [
      "Cancer Biother Radiopharm",
      "Cancer biotherapy & radiopharmaceuticals",
      "Cancer Biotherapy & Radiopharmaceuticals",
      "Cancer Biotherapy and Radiopharmaceuticals"
    ],
    "publisher": "SAGE Publications (formerly Mary Ann Liebert)",
    "url": "https://journals.sagepub.com/home/cbr",
    "issn": "1084-9785",
    "scope": "cancer biotherapy and radiopharmaceuticals",
    "founded": 1996,
    "tldr": "Cancer Biotherapy and Radiopharmaceuticals covers immunotherapy, targeted biological agents and radiolabelled drugs for cancer imaging and treatment, read by nuclear medicine and biotherapy researchers.",
    "summary": "Cancer Biotherapy & Radiopharmaceuticals has been published since 1996 and, according to the NLM catalogue, is issued from 2026 by SAGE Publications in Thousand Oaks, California, following its long run with Mary Ann Liebert; Crossref lists SAGE Publications as the publisher. As its title indicates, its two subjects are cancer biotherapy, meaning biological agents used to treat cancer, and radiopharmaceuticals, meaning radiolabelled compounds used to image and treat it. The NLM record lists it as a United States serial that is indexed in MEDLINE; it is not listed in DOAJ.",
    "links": [
      {
        "label": "Homepage",
        "url": "https://journals.sagepub.com/home/cbr"
      },
      {
        "label": "NLM Catalog",
        "url": "https://www.ncbi.nlm.nih.gov/nlmcatalog/9605408"
      }
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-10",
    "id": "cancer-imaging",
    "name": "Cancer imaging",
    "aka": [
      "Cancer imaging : the official publication of the International Cancer Imaging Society",
      "Cancer Imaging"
    ],
    "matchNames": [
      "Cancer Imaging",
      "Cancer imaging"
    ],
    "publisher": "BMC (Springer Nature)",
    "society": "International Cancer Imaging Society",
    "url": "https://cancerimagingjournal.biomedcentral.com/",
    "issn": "1470-7330",
    "scope": "cancer imaging",
    "access": "open-access",
    "founded": 2000,
    "tldr": "Cancer Imaging is the open-access journal of the International Cancer Imaging Society, covering CT, MRI, PET and other imaging of cancer. Read by radiologists and nuclear medicine specialists working in oncology.",
    "summary": "Cancer Imaging is the official publication of the International Cancer Imaging Society (ICIS), published by BMC, part of Springer Nature. It is an open access, peer-reviewed journal publishing original articles, reviews and editorials by radiologists specialising in oncology, covering CT, MR, PET, ultrasound, radionuclide and multimodal imaging across tumour sites, including breast, chest, gastrointestinal, hepatobiliary and pancreatic, neuro-oncology, paediatric oncology and theranostics. DOAJ records CC BY and CC0 licences, an article processing charge with waivers, and that authors retain copyright. The journal began in 2000 (originally published by e-med), with the first issue of each early volume carrying the annual ICIS conference; it has been fully open access with BMC since 2014. Indexed in MEDLINE and deposited in PubMed Central.",
    "links": [
      {
        "label": "Homepage",
        "url": "https://cancerimagingjournal.biomedcentral.com/"
      },
      {
        "label": "NLM Catalog",
        "url": "https://www.ncbi.nlm.nih.gov/nlmcatalog/101172931"
      },
      {
        "label": "DOAJ record",
        "url": "https://doaj.org/toc/1470-7330"
      }
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "clinical-cancer-research",
    "name": "Clinical Cancer Research",
    "aka": [
      "Clin Cancer Res",
      "CCR",
      "src-clinical-cancer-research"
    ],
    "matchNames": [
      "Clinical Cancer Research",
      "Clin Cancer Res",
      "CCR"
    ],
    "publisher": "American Association for Cancer Research",
    "society": "American Association for Cancer Research",
    "url": "https://aacrjournals.org/clincancerres",
    "issn": "1078-0432",
    "scope": "clinical oncology",
    "access": "hybrid",
    "founded": 1995,
    "impactFactor": {
      "value": 10,
      "year": 2023,
      "source": "Clarivate Journal Citation Reports 2024 (2023 JIF)"
    },
    "tldr": "AACR's clinical journal: phase 1 dose-escalation trials, biomarker studies, pharmacodynamics and the FDA approval summaries written by agency reviewers.",
    "summary": "Clinical Cancer Research appears twice a month and is the main venue for phase 1 trials of new oncology drugs, translational biomarker and pharmacokinetic analyses, and the FDA Oncology Center of Excellence approval summaries that explain the evidence behind each new indication. Hybrid access; free after 12 months.",
    "links": [
      {
        "label": "AACR Journals",
        "url": "https://aacrjournals.org"
      }
    ],
    "notes": [
      "Holds: Phase 1 and 2 trials, biomarker studies and CCR Translations commentaries. Access: Paywalled."
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "european-urology",
    "name": "European Urology",
    "aka": [
      "Eur Urol"
    ],
    "matchNames": [
      "European Urology",
      "Eur Urol"
    ],
    "publisher": "Elsevier",
    "society": "European Association of Urology",
    "url": "https://www.europeanurology.com",
    "issn": "0302-2838",
    "scope": "urology",
    "access": "hybrid",
    "founded": 1975,
    "impactFactor": {
      "value": 25.2,
      "year": 2023,
      "source": "Clarivate Journal Citation Reports 2024 (2023 JIF)"
    },
    "tldr": "European Urology is the European Association of Urology's journal and the most cited urology title, publishing prostate, bladder and kidney cancer trials, the EAU guidelines and PSMA imaging studies.",
    "summary": "Publishes the EAU guidelines, prostate-cancer screening and active-surveillance cohorts, PSMA PET and radioligand studies, and secondary analyses of the large phase 3 trials in bladder and kidney cancer. Hybrid access via Elsevier; sister titles include European Urology Oncology and European Urology Open Science.",
    "links": [
      {
        "label": "EAU Guidelines",
        "url": "https://uroweb.org/guidelines"
      }
    ],
    "indications": [
      "prostate"
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "jama",
    "name": "JAMA",
    "aka": [
      "Journal of the American Medical Association",
      "JAMA"
    ],
    "matchNames": [
      "JAMA",
      "Journal of the American Medical Association"
    ],
    "publisher": "American Medical Association (JAMA Network)",
    "society": "American Medical Association",
    "url": "https://jamanetwork.com/journals/jama",
    "issn": "0098-7484",
    "scope": "general medicine",
    "access": "hybrid",
    "founded": 1883,
    "impactFactor": {
      "value": 63.1,
      "year": 2023,
      "source": "Clarivate Journal Citation Reports 2024 (2023 JIF)"
    },
    "wikipedia": "https://en.wikipedia.org/wiki/JAMA",
    "tldr": "JAMA is the American Medical Association's flagship journal. It is strong on cancer screening, prevention, health-services and patient-reported-outcome research, and on the USPSTF recommendations.",
    "summary": "JAMA is a weekly general-medicine journal. In oncology it carries screening and prevention trials, the US Preventive Services Task Force recommendation statements, health-policy and drug-pricing analyses, and landmark care-delivery studies such as Basch's 2017 electronic symptom-monitoring survival result. Hybrid access; research articles are free to read after 12 months.",
    "links": [
      {
        "label": "JAMA Network oncology",
        "url": "https://jamanetwork.com/collections/5644/oncology"
      }
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "jco",
    "name": "Journal of Clinical Oncology",
    "aka": [
      "JCO",
      "J Clin Oncol",
      "src-jco"
    ],
    "matchNames": [
      "Journal of Clinical Oncology",
      "JCO",
      "J Clin Oncol",
      "Journal of Clinical Oncology (ASCO Annual Meeting abstract)"
    ],
    "publisher": "American Society of Clinical Oncology",
    "society": "American Society of Clinical Oncology",
    "url": "https://ascopubs.org/journal/jco",
    "issn": "0732-183X",
    "scope": "clinical oncology",
    "access": "hybrid",
    "founded": 1983,
    "impactFactor": {
      "value": 42.1,
      "year": 2023,
      "source": "Clarivate Journal Citation Reports 2024 (2023 JIF)"
    },
    "wikipedia": "https://en.wikipedia.org/wiki/Journal_of_Clinical_Oncology",
    "tldr": "The Journal of Clinical Oncology is ASCO's flagship journal and the workhorse of clinical oncology, publishing trials, ASCO guidelines, and the abstract supplements for the ASCO Annual Meeting.",
    "summary": "JCO publishes three issues a month, carrying phase 2 and 3 trials across all tumour types, ASCO clinical practice guidelines (for example on immune-related adverse events), health-services and survivorship research, and the annual-meeting abstract supplements that make it the most cited oncology journal by volume. Hybrid access; guidelines are free. Sister titles include JCO Precision Oncology, JCO Oncology Practice and JCO Global Oncology.",
    "links": [
      {
        "label": "ASCO guidelines",
        "url": "https://www.asco.org/practice-patients/guidelines"
      }
    ],
    "notes": [
      "Holds: ASCO flagship journal: trials, guidelines (including living guidelines) and long-term follow-up of cooperative-group studies. Access: Paywalled; guidelines and many trials free."
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-10",
    "id": "journal-of-medical-imaging-and-radiation-oncology",
    "name": "Journal of medical imaging and radiation oncology",
    "aka": [
      "J Med Imaging Radiat Oncol",
      "JMIRO"
    ],
    "matchNames": [
      "J Med Imaging Radiat Oncol",
      "Journal of medical imaging and radiation oncology",
      "Journal of Medical Imaging and Radiation Oncology",
      "JMIRO"
    ],
    "publisher": "Wiley",
    "society": "Royal Australian and New Zealand College of Radiologists",
    "url": "https://onlinelibrary.wiley.com/journal/17549485",
    "issn": "1754-9477",
    "scope": "radiology and radiation oncology",
    "founded": 2008,
    "tldr": "The journal of the Australian and New Zealand college for radiologists and radiation oncologists, covering diagnostic imaging, nuclear medicine and radiotherapy. Read by radiologists and radiation oncologists in Australasia and beyond.",
    "summary": "The Journal of Medical Imaging and Radiation Oncology, also known as JMIRO, is recorded by NLM as the official journal of the Royal Australian and New Zealand College of Radiologists. It is published by Wiley (NLM lists Wiley-Blackwell Publishing Asia) and catalogued from 2008 as an Australian bimonthly, indexed for MEDLINE under Diagnostic Imaging, Neoplasms, Nuclear Medicine and Radiation Oncology. Crossref confirms Wiley as the publisher.",
    "links": [
      {
        "label": "Homepage",
        "url": "https://onlinelibrary.wiley.com/journal/17549485"
      },
      {
        "label": "NLM Catalog",
        "url": "https://www.ncbi.nlm.nih.gov/nlmcatalog/101469340"
      }
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "journal-of-nuclear-medicine",
    "name": "Journal of Nuclear Medicine",
    "aka": [
      "JNM",
      "J Nucl Med"
    ],
    "matchNames": [
      "Journal of Nuclear Medicine",
      "JNM",
      "J Nucl Med",
      "The Journal of Nuclear Medicine"
    ],
    "publisher": "Society of Nuclear Medicine and Molecular Imaging",
    "society": "Society of Nuclear Medicine and Molecular Imaging",
    "url": "https://jnm.snmjournals.org",
    "issn": "0161-5505",
    "scope": "nuclear medicine",
    "access": "hybrid",
    "founded": 1960,
    "tldr": "The Journal of Nuclear Medicine is the SNMMI's journal and the core venue for PET tracers and radioligand therapy: PSMA and somatostatin imaging, lutetium and actinium dosimetry, and theranostics trials.",
    "summary": "The Journal of Nuclear Medicine appears monthly and publishes first-in-human tracer studies, PSMA PET diagnostic accuracy trials, radioligand-therapy dosimetry and outcomes (lutetium-177 PSMA and DOTATATE, actinium-225), and SNMMI procedure standards. Articles become free to read after a delay; the SNMMI annual meeting abstracts are published as a supplement.",
    "links": [
      {
        "label": "SNMMI",
        "url": "https://www.snmmi.org"
      }
    ],
    "related": [
      "src-snmmi"
    ],
    "technologies": [
      "radioligand-therapy"
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "lancet",
    "name": "The Lancet",
    "aka": [
      "Lancet"
    ],
    "matchNames": [
      "The Lancet",
      "Lancet"
    ],
    "publisher": "Elsevier",
    "url": "https://www.thelancet.com/journals/lancet/home",
    "issn": "0140-6736",
    "scope": "general medicine",
    "access": "hybrid",
    "founded": 1823,
    "impactFactor": {
      "value": 98.4,
      "year": 2023,
      "source": "Clarivate Journal Citation Reports 2024 (2023 JIF)"
    },
    "wikipedia": "https://en.wikipedia.org/wiki/The_Lancet",
    "tldr": "The Lancet is Britain's leading general medical journal and the other main home of practice-changing cancer trials, with a stronger global-health and policy voice than NEJM.",
    "summary": "The Lancet appears weekly and publishes practice-changing oncology phase 3 trials (CheckMate 649, KEYNOTE-048, CARTITUDE-1, TRANSFORM), the Global Burden of Disease series, and Lancet Commissions that shape cancer policy. Elsevier hybrid model: subscription with an open-access option; abstracts free. Known for editorial campaigning on health inequality and for the HPV-vaccination and cancer-survival population studies that appear in this corpus.",
    "links": [
      {
        "label": "Oncology collection",
        "url": "https://www.thelancet.com/clinical/diseases/cancer"
      }
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "lancet-oncology",
    "name": "The Lancet Oncology",
    "aka": [
      "Lancet Oncol",
      "src-lancet-oncology"
    ],
    "matchNames": [
      "Lancet Oncology",
      "The Lancet Oncology",
      "Lancet Oncol"
    ],
    "publisher": "Elsevier",
    "url": "https://www.thelancet.com/journals/lanonc/home",
    "issn": "1470-2045",
    "scope": "clinical oncology",
    "access": "hybrid",
    "founded": 2000,
    "impactFactor": {
      "value": 41.6,
      "year": 2023,
      "source": "Clarivate Journal Citation Reports 2024 (2023 JIF)"
    },
    "wikipedia": "https://en.wikipedia.org/wiki/The_Lancet_Oncology",
    "tldr": "The Lancet Oncology is the leading specialist cancer journal for clinical trials. It publishes phase 2 and 3 trials, long-term follow-up, quality-of-life analyses and global-oncology policy Commissions.",
    "summary": "The Lancet Oncology appears monthly plus online-first and publishes a large share of randomised oncology trials that do not go to NEJM, with particular strength in radiotherapy, surgery, supportive care and health-system studies (IBIS-I tamoxifen prevention, MASAI AI mammography, GAP70 geriatric assessment in this corpus). Its Commissions and Series drive policy debates on drug pricing, radiotherapy access and cancer in low-income countries. Elsevier hybrid model; abstracts free.",
    "links": [
      {
        "label": "Lancet Oncology Commissions",
        "url": "https://www.thelancet.com/journals/lanonc/commissions"
      }
    ],
    "notes": [
      "Holds: Phase 2 and 3 trials, meta-analyses, global oncology policy and the ESMO-aligned commentaries. Access: Paywalled; abstracts free."
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "nature-medicine",
    "name": "Nature Medicine",
    "aka": [
      "Nat Med",
      "src-nature-medicine"
    ],
    "matchNames": [
      "Nature Medicine",
      "Nat Med"
    ],
    "publisher": "Springer Nature",
    "url": "https://www.nature.com/nm/",
    "issn": "1078-8956",
    "scope": "translational medicine",
    "access": "hybrid",
    "founded": 1995,
    "impactFactor": {
      "value": 58.7,
      "year": 2023,
      "source": "Clarivate Journal Citation Reports 2024 (2023 JIF)"
    },
    "tldr": "Nature Medicine is Nature's clinical journal and now a top venue for early-phase and biomarker-rich cancer trials, medical AI studies and cell-therapy reports.",
    "summary": "Nature Medicine appears monthly and publishes phase 1 and 2 trials with deep translational analysis (MagnetisMM-3 elranatamab in this corpus), circulating tumour DNA and multi-cancer early-detection studies, large medical-AI validations and consensus reporting guidelines for AI in medicine. Hybrid access with a Springer Nature open-access option.",
    "links": [
      {
        "label": "Nature Medicine cancer",
        "url": "https://www.nature.com/nm/research-articles?subject=cancer"
      }
    ],
    "notes": [
      "Holds: Translational medicine including cancer vaccines, AI diagnostics and phase 1 to 3 trials with mechanistic depth. Access: Paywalled; abstracts free; some open access."
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "nejm",
    "name": "New England Journal of Medicine",
    "aka": [
      "NEJM",
      "N Engl J Med",
      "src-nejm"
    ],
    "matchNames": [
      "NEJM",
      "N Engl J Med",
      "New England Journal of Medicine",
      "The New England Journal of Medicine"
    ],
    "publisher": "NEJM Group / Massachusetts Medical Society",
    "society": "Massachusetts Medical Society",
    "url": "https://www.nejm.org",
    "issn": "0028-4793",
    "scope": "general medicine",
    "access": "subscription",
    "founded": 1812,
    "impactFactor": {
      "value": 96.2,
      "year": 2023,
      "source": "Clarivate Journal Citation Reports 2024 (2023 JIF)"
    },
    "wikipedia": "https://en.wikipedia.org/wiki/The_New_England_Journal_of_Medicine",
    "tldr": "NEJM is the most influential medical journal. When a cancer drug trial changes how patients are treated, the paper is usually here, often published the same day it is presented at ASCO, ESMO or ASH.",
    "summary": "Weekly general-medicine journal with the highest bar for randomised evidence and the largest share of practice-changing oncology phase 3 trials (IRIS imatinib, KEYNOTE-189, DESTINY-Breast04, CheckMate 067, ZUMA-1 and dozens more in this corpus). Editorials and correspondence often carry the critical reading of a trial. Paywalled, with abstracts free and many trial papers free six months after publication; requires a data-sharing statement for clinical trials under ICMJE rules.",
    "links": [
      {
        "label": "Hematology/Oncology specialty page",
        "url": "https://www.nejm.org/browse/specialty/hematology-oncology"
      }
    ],
    "notes": [
      "Holds: The practice-changing phase 3 trials, most published simultaneously with ASCO, ESMO and ASH presentations. Access: Paywalled; abstracts free; many trial papers free after 6 months."
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "radiology",
    "name": "Radiology",
    "aka": [
      "Radiology (RSNA)"
    ],
    "matchNames": [
      "Radiology"
    ],
    "publisher": "Radiological Society of North America",
    "society": "Radiological Society of North America",
    "url": "https://pubs.rsna.org/journal/radiology",
    "issn": "0033-8419",
    "scope": "radiology",
    "access": "hybrid",
    "founded": 1923,
    "tldr": "Radiology is the RSNA's flagship journal, publishing imaging research including cancer screening performance, AI image analysis and response assessment.",
    "summary": "Radiology appears monthly. In oncology it publishes mammography and lung CT screening performance studies, AI reader studies, contrast and radiation-dose research and imaging-based response and prognosis work. Hybrid access via RSNA; sister titles include Radiology: Artificial Intelligence and Radiology: Imaging Cancer.",
    "links": [
      {
        "label": "RSNA",
        "url": "https://www.rsna.org"
      }
    ]
  },
  {
    "kind": "journal",
    "asOf": "2026-09-09",
    "id": "science-translational-medicine",
    "name": "Science Translational Medicine",
    "aka": [
      "Sci Transl Med"
    ],
    "matchNames": [
      "Science Translational Medicine",
      "Sci Transl Med"
    ],
    "publisher": "American Association for the Advancement of Science",
    "society": "American Association for the Advancement of Science",
    "url": "https://www.science.org/journal/stm",
    "issn": "1946-6234",
    "scope": "translational medicine",
    "founded": 2009,
    "tldr": "Science Translational Medicine is AAAS's translational journal, publishing the bench-to-bedside cancer papers on liquid biopsy, CAR-T engineering, tumour-immune biology and new imaging agents.",
    "summary": "Science Translational Medicine (Sci Transl Med) is the translational journal of the American Association for the Advancement of Science (AAAS), founded in 2009, appearing weekly and available by subscription with delayed free access. It publishes bench-to-bedside studies with strong mechanistic grounding, including early circulating tumour DNA detection methods, CAR-T design and toxicity work, tumour-immune biology and PET tracer development. Its readers are translational researchers moving discoveries toward the clinic. Within Nuclide it is linked from the biographies of Lecia Sequist, Jeanne Tie, Michel Sadelain, Marcela Maus, Marie-Catherine Vozenin and Constance Lehman, and a reader would use it for the liquid biopsy, CAR-T and imaging papers that precede trials.",
    "links": [
      {
        "label": "Science journals",
        "url": "https://www.science.org"
      }
    ]
  }
];
