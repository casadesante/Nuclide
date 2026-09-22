/**
 * Roadmaps: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedRoadmaps: EntityInput[] = [
  {
    "kind": "roadmap",
    "asOf": "2026-09-04",
    "id": "molecular-imaging-roadmap",
    "links": [
      {
        "label": "VISION: lutetium-177 PSMA-617 radioligand therapy extends survival in advanced prostate cancer (New England Journal of Medicine 2021)",
        "url": "https://doi.org/10.1056/NEJMoa2107322"
      },
      {
        "label": "DETECT-A: a blood test plus PET-CT found treatable cancers in 10,000 women with no symptoms (Science 2020)",
        "url": "https://doi.org/10.1126/science.abb9601"
      }
    ],
    "name": "Molecular imaging roadmap: FDG → PSMA → FAP → antigen and immune PET",
    "tldr": "From a sugar tracer that lights up most cancers to tracers that show a single protein, a stromal cell type, or the immune cells inside a tumour.",
    "summary": "The molecular imaging roadmap moves from PET scanners and FDG, made routine by PET/CT, to receptor tracers such as 68Ga-DOTATATE and PSMA PET that outperform anatomic imaging and enable theranostics. The current step adds stromal FAPI PET and total-body scanners, and the emerging step brings drug-target and immune PET: TROP2, HER2, B7-H3 and Nectin-4 tracers to select and sequence ADCs, CD8 and granzyme PET to monitor immunotherapy, and PARP PET. The speculative end is multi-tracer same-day imaging, PET-guided adaptive radiotherapy and imaging-derived digital twins. Each new tracer converts a biopsy biomarker into a whole-body map; the route sits in the Imaging section and links PET, PET/CT, FDG PET, PSMA PET, FAPI PET, TROP2 PET, HER2 PET, immuno-PET, PARP PET and PET/MRI.",
    "technologies": [
      "pet",
      "pet-ct",
      "fdg-pet",
      "psma-pet",
      "fapi-pet",
      "trop2-pet",
      "her2-pet",
      "immuno-pet",
      "parp-pet",
      "pet-mri"
    ],
    "steps": [
      {
        "era": "1975-2001",
        "title": "PET and FDG",
        "status": "historic",
        "description": "PET scanners (1975) and FDG (1976) developed; FDG PET adopted for lymphoma, lung, melanoma staging in the 1990s; PET/CT (2001) makes it routine.",
        "refs": [
          "fdg-pet",
          "pet-ct"
        ]
      },
      {
        "era": "2008-2020",
        "title": "Receptor PET: SSTR and PSMA",
        "status": "historic",
        "description": "68Ga-DOTATATE (Netspot 2016) and 68Ga/18F-PSMA (2020-21) show receptor tracers outperform anatomic imaging and enable theranostics.",
        "refs": [
          "psma-pet",
          "sstr2"
        ]
      },
      {
        "era": "2018-2026",
        "title": "Stromal PET and total-body scanners",
        "status": "current",
        "description": "FAPI tracers image >90% of epithelial cancers with high contrast; registrational trials underway. Total-body PET (uEXPLORER, Quadra) enables 40x sensitivity, low-dose paediatric and dynamic imaging. 18F-FES (ER) approved 2020; 89Zr-girentuximab (CAIX) filed. Pylarify TruVu approved 2026.",
        "refs": [
          "fapi-pet",
          "pet-ct",
          "united-imaging",
          "pylarify"
        ]
      },
      {
        "era": "2024-2028",
        "title": "Drug-target and immune PET",
        "status": "emerging",
        "description": "TROP2, HER2, B7-H3, Nectin-4 antibody and nanobody tracers to select and sequence ADCs; CD8 and granzyme PET to predict and monitor immunotherapy response; PARP PET for PARP-inhibitor selection; AI quantification and radiomics on standard scans.",
        "refs": [
          "trop2-pet",
          "her2-pet",
          "immuno-pet",
          "parp-pet"
        ]
      },
      {
        "era": "2028+",
        "title": "Speculative",
        "status": "speculative",
        "description": "Multi-tracer same-day imaging on total-body PET; PET-guided adaptive radiotherapy (biology-guided RT); routine antigen PET before every ADC; imaging-derived digital twins of tumour heterogeneity feeding treatment algorithms."
      }
    ]
  },
  {
    "kind": "roadmap",
    "asOf": "2026-09-04",
    "id": "radiopharma-roadmap",
    "links": [
      {
        "label": "VISION: lutetium-177 PSMA-617 radioligand therapy extends survival in advanced prostate cancer (New England Journal of Medicine 2021)",
        "url": "https://doi.org/10.1056/NEJMoa2107322"
      }
    ],
    "name": "Radiopharmaceutical roadmap: iodine → lutetium → actinium",
    "tldr": "The radiopharmaceutical roadmap runs eighty years from radioactive iodine for thyroid cancer to alpha-emitting drugs for prostate and neuroendocrine cancers, with isotope supply as the limiting factor.",
    "summary": "The radiopharmaceutical roadmap runs from radioiodine curing differentiated thyroid cancer, the first theranostic, through radium-223 and Lutathera with its matched 68Ga-DOTATATE PET, to PSMA PET and Pluvicto building the first radioligand franchise. The current steps move Pluvicto and Lutathera into earlier lines amid an M&A wave, while the emerging step brings 225Ac and 212Pb alpha emitters and new targets such as FAP, GRPR, CAIX and B7-H3 into trials, with isotope supply as the limiting factor. The speculative end imagines radioligands as a standard modality with pan-cancer FAP theranostics and personalised dosimetry. The route links radioligand therapy, targeted alpha therapy, PSMA PET and FAPI PET, prostate, thyroid and neuroendocrine cancers, and the manufacturing bottleneck.",
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy",
      "psma-pet",
      "fapi-pet",
      "radioimmunotherapy"
    ],
    "steps": [
      {
        "era": "1946-2000",
        "title": "Radioiodine and early radioimmunotherapy",
        "status": "historic",
        "description": "131I cures differentiated thyroid cancer, the first theranostic. Strontium-89 and samarium-153 palliate bone pain. 90Y-ibritumomab and 131I-tositumomab (2002-03) work in lymphoma but fail commercially.",
        "refs": [
          "thyroid"
        ]
      },
      {
        "era": "2013-2018",
        "title": "Radium-223 and Lutathera",
        "status": "historic",
        "description": "Radium-223 (ALSYMPCA, 2013) is the first alpha emitter approved, for bone metastases. 177Lu-DOTATATE (NETTER-1, 2018) establishes the modern peptide receptor radionuclide therapy paradigm with a matched 68Ga-DOTATATE PET.",
        "refs": [
          "lutathera",
          "sstr2"
        ]
      },
      {
        "era": "2020-2022",
        "title": "PSMA theranostics",
        "status": "current",
        "description": "PSMA PET approved (68Ga-PSMA-11 2020, Pylarify 2021); Pluvicto approved (VISION, 2022). Novartis builds the first radioligand commercial franchise; supply and site-capacity constraints appear.",
        "refs": [
          "psma-pet",
          "pluvicto",
          "vision",
          "pylarify"
        ]
      },
      {
        "era": "2023-2026",
        "title": "Earlier lines, consolidation, and an M&A wave",
        "status": "current",
        "description": "PSMAfore moves Pluvicto pre-chemotherapy (2025), NETTER-2 moves Lutathera to first line (2024); 2026 label expansions. BMS buys RayzeBio ($4.1B), AstraZeneca buys Fusion ($2.4B), Lilly buys Point; Bayer, Sanofi, Novartis expand. Pylarify TruVu approved March 2026. ITM-11 reads out a positive phase 3.",
        "refs": [
          "psmafore",
          "ryz101",
          "fusion-pharma",
          "rayzebio",
          "itm"
        ]
      },
      {
        "era": "2026-2029",
        "title": "Alpha emitters and new targets",
        "status": "emerging",
        "description": "225Ac-PSMA (Novartis, Bayer Trillium, Fusion FPI-2265), 225Ac-DOTATATE (RYZ101) and 212Pb-DOTAMTATE are in phase 3; FAP radioligands (FAP-2286) are in phase 2; GRPR, CAIX, B7-H3, DLL3 radioconjugates are in early trials. TerraPower's Philadelphia Ac-225 plant aims for a 20-fold supply increase. Dosimetry-guided dosing enters trials.",
        "refs": [
          "ac225-psma",
          "ryz101",
          "fap-2286",
          "terrapower-isotopes",
          "orano-med",
          "dosimetry"
        ]
      },
      {
        "era": "2029+",
        "title": "Speculative: radioligands as a standard modality",
        "status": "speculative",
        "description": "Alpha therapy in hormone-sensitive prostate cancer and after ADC failure; pan-cancer FAP theranostics; radio-ADCs and pretargeting; combination with PARP inhibitors, IO, and ADCs; automated decentralised radiopharmacies; total-body PET for ultra-low-dose dosimetry.",
        "refs": [
          "radioimmunotherapy",
          "beta-then-alpha",
          "pet-ct"
        ]
      }
    ]
  }
];
