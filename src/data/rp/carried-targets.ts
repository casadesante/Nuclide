/**
 * Targets: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedTargets: EntityInput[] = [
  {
    "id": "b7h3",
    "kind": "target",
    "name": "B7-H3",
    "symbol": "CD276",
    "hgnc": "HGNC:19137",
    "ensembl": "ENSG00000103855",
    "uniprot": "Q5ZPR3",
    "entrez": "80381",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/CD276",
    "tldr": "B7-H3 is an immune checkpoint-like surface protein found on 60 to 70% of small-cell lung cancers and 80 to 90% of castration-resistant prostate cancers, with little on normal tissue. It is used as an ADC address, chiefly by ifinatamab deruxtecan, now in phase 3 in small-cell lung cancer; whether blocking its immune-dampening role adds anything beyond payload delivery is unresolved.",
    "summary": "B7-H3 (CD276) is an immune checkpoint-like molecule broadly overexpressed in solid tumours with limited normal expression; its function is debated, inhibiting T-cell activation and promoting tumour cell migration. Expression is more homogeneous than many ADC targets, found in 60-70% of small-cell lung cancer and 80-90% of castration-resistant prostate cancer by IHC, as well as head and neck and paediatric solid tumours. Ifinatamab deruxtecan (I-DXd) has shown high response rates in small-cell lung cancer and is in phase 3. B7-H3 is also pursued with radioligands and CAR-T. Whether its immune-dampening role means antibodies against it add an immunological benefit beyond payload delivery is unresolved. The simple version is a widely present tumour surface protein now used mainly as an address for ADCs.",
    "biology": "Function debated: inhibits T-cell activation, promotes tumour cell migration. Expression is more homogeneous than many ADC targets.",
    "whereFound": [
      "Small-cell lung cancer",
      "Prostate",
      "Head and neck",
      "Paediatric solid tumours"
    ],
    "indications": [
      "sclc",
      "prostate"
    ],
    "tags": [
      "adc-target"
    ],
    "prevalence": [
      {
        "indicationId": "sclc",
        "pct": "60-70",
        "measure": "IHC, any expression",
        "source": "https://en.wikipedia.org/wiki/CD276"
      },
      {
        "indicationId": "prostate",
        "pct": "80-90",
        "measure": "IHC, any expression",
        "source": "https://en.wikipedia.org/wiki/CD276",
        "note": "Castration-resistant disease"
      }
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/CD276"
      }
    ]
  },
  {
    "id": "cd20",
    "kind": "target",
    "name": "CD20",
    "symbol": "MS4A1",
    "hgnc": "HGNC:7315",
    "ensembl": "ENSG00000156738",
    "uniprot": "P11836",
    "entrez": "931",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/CD20",
    "tldr": "CD20 is a B-cell marker; rituximab against it was the first antibody approved for cancer, in 1997.",
    "summary": "CD20 (MS4A1) is a B-cell tetraspanin that regulates calcium flux; it is not internalised, which favours effector-based antibodies and T-cell engagers over ADCs, and it is present on over 95% of DLBCL and, more dimly, over 90% of CLL. It is the target of rituximab, the first antibody approved for cancer in 1997, and of obinutuzumab. The CD20×CD3 bispecifics glofitamab, epcoritamab, mosunetuzumab, and odronextamab now offer off-the-shelf T-cell redirection in lymphoma without the manufacturing wait of CAR-T. Loss of CD20 expression is a recognised escape route after repeated anti-CD20 therapy, and the best sequencing of bispecifics versus CAR-T is still being worked out. The simple version is the B-cell marker that started antibody therapy for cancer and now anchors the newest T-cell engagers.",
    "biology": "CD20 is a tetraspanin regulating B-cell calcium flux; it is not internalised, favouring effector-based antibodies over ADCs.",
    "whereFound": [
      "DLBCL",
      "Follicular lymphoma",
      "CLL",
      "Mantle cell lymphoma"
    ],
    "indications": [
      "dlbcl"
    ],
    "tags": [
      "antibody-target"
    ],
    "prevalence": [
      {
        "indicationId": "dlbcl",
        "pct": ">95",
        "measure": "Surface expression",
        "source": "https://en.wikipedia.org/wiki/CD20"
      }
    ],
    "drugs": [
      "ibritumomab-tiuxetan"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/CD20"
      }
    ]
  },
  {
    "id": "ceacam5",
    "kind": "target",
    "name": "CEACAM5",
    "symbol": "CEACAM5",
    "hgnc": "HGNC:1817",
    "ensembl": "ENSG00000105388",
    "uniprot": "P06731",
    "entrez": "1048",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Carcinoembryonic_antigen",
    "tldr": "The classic 'CEA' tumour marker measured in blood, also present on the cell surface where ADCs can reach it.",
    "summary": "CEACAM5 is carcinoembryonic antigen, a GPI-anchored adhesion molecule that is shed into circulation as the serum CEA marker and also sits on the cell surface where ADCs and T-cell engagers can reach it. It is overexpressed in colorectal (80-90% moderate-to-high by IHC), gastric (50-60%), lung adenocarcinoma, and pancreatic cancers; only 20-25% of non-squamous NSCLC met the high-expression threshold used in CARMEN. Tusamitamab ravtansine failed in phase 3 NSCLC (CARMEN-LC03), a setback that raised questions about payload choice and patient selection rather than the target itself. CEACAM5 remains pursued with T-cell engagers and next-generation ADCs. The simple version is the classic CEA blood marker, now also being used as a surface target for drug delivery.",
    "biology": "GPI-anchored adhesion molecule; shed into circulation as the serum CEA marker.",
    "whereFound": [
      "Colorectal",
      "Gastric",
      "Lung adenocarcinoma",
      "Pancreatic"
    ],
    "tags": [
      "adc-target",
      "biomarker"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Carcinoembryonic_antigen"
      }
    ]
  },
  {
    "kind": "target",
    "asOf": "2026-09-08",
    "id": "cxcr4",
    "name": "CXCR4",
    "symbol": "CXCR4",
    "hgnc": "HGNC:2561",
    "ensembl": "ENSG00000121966",
    "uniprot": "P61073",
    "entrez": "7852",
    "targetClass": "other",
    "wikipedia": "https://en.wikipedia.org/wiki/CXCR4",
    "tldr": "A chemokine receptor that anchors blood cells in the marrow and helps cancer cells home to it; mutated in a third of Waldenström patients and targeted by plerixafor for stem-cell mobilisation.",
    "summary": "CXCR4 binds CXCL12 (SDF-1) to retain haematopoietic stem cells in the marrow niche and guides metastasis of solid tumours to bone. Plerixafor (2008) blocks it to mobilise stem cells for autologous transplant; motixafortide (2023) does the same in myeloma. WHIM-like CXCR4 mutations in ~30-40% of Waldenström macroglobulinaemia slow BTK-inhibitor response; mavorixafor is in trials. CXCR4 is also imaged with Ga-68 pentixafor and treated with Lu-177 pentixather in marginal zone lymphoma and myeloma (theranostic, experimental). Balixafortide and ulocuplumab failed in solid tumours.",
    "biology": "G-protein-coupled receptor; CXCL12 binding activates Gαi, PI3K/AKT and MAPK, promoting chemotaxis, survival and retention in stromal niches; truncating C-terminal mutations impair receptor internalisation (WHIM syndrome).",
    "whereFound": [
      "Waldenström macroglobulinaemia (30-40% mutation)",
      "Myeloma, lymphoma, AML (expression)",
      "Breast, prostate and other solid tumours (metastatic homing)"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "terms": [
      "theranostics"
    ],
    "links": [
      {
        "label": "CXCR4 in WM (Blood 2014)",
        "url": "https://doi.org/10.1182/blood-2014-01-550905"
      }
    ],
    "tags": [
      "gap-fill"
    ]
  },
  {
    "id": "dll3",
    "kind": "target",
    "name": "DLL3",
    "symbol": "DLL3",
    "hgnc": "HGNC:2909",
    "ensembl": "ENSG00000090932",
    "uniprot": "Q9NYJ7",
    "entrez": "10683",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/DLL3",
    "tldr": "A protein that appears on the surface of small-cell lung cancer cells, now hit by a drug that pulls T cells onto them.",
    "summary": "Delta-like ligand 3 is an inhibitory Notch ligand aberrantly surface-expressed in ~85% of small-cell lung cancer and neuroendocrine prostate cancer. The first DLL3 ADC (rovalpituzumab tesirine) failed; the T-cell engager tarlatamab (Imdelltra) succeeded, with a survival benefit in second-line SCLC (DeLLphi-304). Trispecifics and CAR-T follow. For radiopharmaceuticals it is a target in waiting rather than in use: no DLL3 radioligand is in the clinic, and the nearest commitment is the discovery-stage DLL3 programme Telix acquired from ImaginAb in January 2025, which carries no candidate code or isotope. A surface antigen present on most small-cell lung cancers, in a disease where a scan-then-treat pair does not yet exist, is the obvious place for one.",
    "biology": "Normally intracellular Golgi protein; ASCL1-driven neuroendocrine lineage exposes it on the membrane.",
    "whereFound": [
      "Small-cell lung cancer",
      "Neuroendocrine prostate cancer",
      "Large-cell neuroendocrine carcinoma"
    ],
    "indications": [
      "sclc",
      "prostate"
    ],
    "tags": [
      "t-cell-engager-target"
    ],
    "prevalence": [
      {
        "indicationId": "sclc",
        "pct": "80-85",
        "measure": "IHC, any expression",
        "source": "https://en.wikipedia.org/wiki/DLL3"
      },
      {
        "indicationId": "prostate",
        "pct": "70-80",
        "measure": "Neuroendocrine prostate cancer only",
        "source": "https://en.wikipedia.org/wiki/DLL3",
        "note": "Rare in adenocarcinoma"
      }
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/DLL3"
      }
    ],
    "companies": [
      "abdera-therapeutics"
    ]
  },
  {
    "id": "fap",
    "kind": "target",
    "name": "FAP",
    "symbol": "FAP",
    "hgnc": "HGNC:3590",
    "ensembl": "ENSG00000078098",
    "uniprot": "Q12884",
    "entrez": "2191",
    "targetClass": "stroma",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Fibroblast_activation_protein,_alpha",
    "tldr": "FAP (fibroblast activation protein) sits on the cancer-associated fibroblasts that scaffold more than 90% of epithelial cancers and is almost absent from normal adult tissue. FAPI PET tracers therefore light up tumours with high contrast, including pancreatic, gastric and low-grade cancers where FDG PET is weak, and FAP-targeted radioligands are in development.",
    "summary": "Fibroblast activation protein is expressed on cancer-associated fibroblasts in >90% of epithelial cancers, with minimal expression in normal adult tissue. FAPI PET tracers (68Ga-FAPI-46, 18F-FAPI-74) offer high tumour-to-background contrast, including in cancers where FDG is weak (pancreatic, gastric, low-grade). FAP-targeted radioligands (177Lu/225Ac-FAP-2286) are in development.",
    "biology": "Serine protease on activated fibroblasts; a stromal target rather than a tumour-cell target, so it is pan-cancer but does not report on the malignant cell itself.",
    "whereFound": [
      "Pancreatic",
      "Gastric",
      "Breast",
      "Sarcoma",
      "Almost all desmoplastic tumours"
    ],
    "tags": [
      "theranostic",
      "pet-target",
      "stroma"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Fibroblast_activation_protein,_alpha"
      }
    ],
    "companies": [
      "ratio-therapeutics"
    ]
  },
  {
    "id": "folr1",
    "kind": "target",
    "name": "Folate receptor alpha",
    "symbol": "FOLR1",
    "hgnc": "HGNC:3791",
    "ensembl": "ENSG00000110195",
    "uniprot": "P15328",
    "entrez": "2348",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Folate_receptor_1",
    "tldr": "Folate receptor alpha is a vitamin receptor that ovarian cancer cells carry in large numbers, used as the docking site for the ADC mirvetuximab.",
    "summary": "FRα is overexpressed in high-grade serous ovarian cancer, endometrial cancer, and lung adenocarcinoma. Mirvetuximab soravtansine (Elahere) is approved in FRα-high platinum-resistant ovarian cancer (MIRASOL). Next-generation FRα ADCs with topoisomerase-I payloads (ZW191, luveltamab tazevibulin, rinatabart sesutecan) target lower-expressing tumours.",
    "biology": "GPI-anchored folate transporter; limited to apical surfaces in normal kidney, lung, and choroid plexus.",
    "whereFound": [
      "High-grade serous ovarian (~80% any expression)",
      "Endometrial",
      "NSCLC adenocarcinoma",
      "TNBC (subset)"
    ],
    "tags": [
      "adc-target"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Folate_receptor_1"
      }
    ]
  },
  {
    "id": "gpc3",
    "kind": "target",
    "name": "Glypican-3",
    "symbol": "GPC3",
    "hgnc": "HGNC:4451",
    "ensembl": "ENSG00000147257",
    "uniprot": "P51654",
    "entrez": "2719",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Glypican_3",
    "tldr": "Glypican-3 is a fetal liver protein that reappears in liver cancer, giving CAR-T and bispecifics a clean target.",
    "summary": "Glypican-3 is a heparan sulfate proteoglycan that modulates Wnt and Hedgehog signalling; it is a fetal liver protein expressed in 70-80% of hepatocellular carcinoma and essentially absent from normal adult liver, which gives cell and bispecific therapies a clean target. It is also found in hepatoblastoma and yolk-sac tumours. Antibodies failed as monotherapy (codrituzumab), suggesting that simply binding GPC3 is not enough. GPC3 CAR-T, including armoured constructs from AstraZeneca/Neogene and Chinese groups, and GPC3×CD3 bispecifics are showing responses, though durability and the hostile liver microenvironment remain concerns. The simple version is a liver-development protein that reappears in liver cancer, letting engineered immune cells recognise the tumour.",
    "biology": "Glypican-3 is a heparan sulfate proteoglycan modulating Wnt and Hedgehog signalling.",
    "whereFound": [
      "Hepatocellular carcinoma",
      "Hepatoblastoma",
      "Yolk-sac tumours"
    ],
    "indications": [
      "hcc"
    ],
    "tags": [
      "car-t-target"
    ],
    "prevalence": [
      {
        "indicationId": "hcc",
        "pct": "70-80",
        "measure": "IHC, any expression",
        "source": "https://en.wikipedia.org/wiki/Glypican_3"
      }
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Glypican_3"
      }
    ]
  },
  {
    "kind": "target",
    "asOf": "2026-09-06",
    "id": "grpr",
    "name": "GRPR (gastrin-releasing peptide receptor)",
    "symbol": "GRPR",
    "hgnc": "HGNC:4609",
    "ensembl": "ENSG00000126010",
    "uniprot": "P30550",
    "entrez": "2925",
    "targetClass": "surface-antigen",
    "wikipedia": "https://en.wikipedia.org/wiki/Gastrin-releasing_peptide_receptor",
    "tldr": "GRPR is a hormone receptor abundant in early and hormone-sensitive prostate cancer, imaged and treated with bombesin-like radioligands.",
    "summary": "The gastrin-releasing peptide receptor (GRPR) is a G-protein-coupled receptor for bombesin and GRP whose expression is high in hormone-sensitive prostate cancer and falls with castration resistance. It is overexpressed in primary and hormone-naive prostate cancer, often in PSMA-negative tumours, as well as in ER-positive breast cancer and GIST, which makes it a complementary theranostic target to PSMA. Bombesin-like radioligands exploit it: 68Ga-RM2 PET for imaging and 177Lu-NeoB (Novartis) for therapy are in clinical trials. Because expression declines as disease becomes castration-resistant, GRPR agents may suit earlier disease or PSMA-negative patients rather than replacing PSMA therapy. A newcomer can think of GRPR as a second radioactive address on prostate cancer, useful where PSMA is dim.",
    "biology": "G-protein-coupled receptor for bombesin/GRP; expression falls with castration resistance.",
    "whereFound": [
      "Hormone-sensitive prostate cancer",
      "ER+ breast cancer",
      "GIST"
    ],
    "prevalence": [
      {
        "indicationId": "prostate",
        "pct": 100,
        "measure": "Receptor autoradiography, GRPR in 30 of 30 invasive prostate carcinomas",
        "source": "https://pubmed.ncbi.nlm.nih.gov/10070977/",
        "note": "Markwalder and Reubi 1999 (Cancer Res); receptor density was high in carcinoma and PIN and low or absent in normal and hyperplastic prostate"
      }
    ],
    "indications": [
      "prostate"
    ],
    "technologies": [
      "radioligand-therapy",
      "pet"
    ],
    "tags": [
      "theranostic"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Gastrin-releasing_peptide_receptor"
      }
    ]
  },
  {
    "id": "her2",
    "trials": [
      "nct06369831"
    ],
    "kind": "target",
    "name": "HER2",
    "symbol": "ERBB2",
    "hgnc": "HGNC:3430",
    "ensembl": "ENSG00000141736",
    "uniprot": "P04626",
    "entrez": "2064",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/HER2/neu",
    "tldr": "A growth-signal receptor. Some cancers make far too much of it, and drugs that block it or use it as a docking site have transformed those cancers.",
    "summary": "Human epidermal growth factor receptor 2 is a receptor tyrosine kinase amplified in ~15-20% of breast cancers and a subset of gastric, colorectal, lung (mutations), and biliary cancers. Trastuzumab (1998) was the first targeted antibody in solid tumours. Trastuzumab deruxtecan redefined the target by working in 'HER2-low' tumours that older drugs ignored, and in 2026 gained approval in early-stage disease.",
    "biology": "Ligand-less receptor that heterodimerises with HER3/EGFR to drive PI3K and MAPK signalling. Amplification is a true oncogenic driver; low expression is merely a delivery address for ADCs.",
    "whereFound": [
      "HER2+ breast cancer (~15-20%)",
      "HER2-low breast cancer (~50%)",
      "Gastric/GEJ (~15-20%)",
      "HER2-mutant NSCLC (~2-3%)",
      "Colorectal (~3-5%)",
      "Biliary tract"
    ],
    "indications": [
      "breast-her2-positive"
    ],
    "tags": [
      "adc-target",
      "driver"
    ],
    "prevalence": [
      {
        "indicationId": "breast-her2-positive",
        "pct": 100,
        "measure": "IHC 3+ or ISH-amplified (defining)",
        "source": "https://www.nature.com/articles/s41591-025-03981-4"
      }
    ],
    "companies": [
      "precirix"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/HER2/neu"
      }
    ]
  },
  {
    "kind": "target",
    "asOf": "2026-09-06",
    "id": "klk2",
    "name": "KLK2 (kallikrein-2)",
    "symbol": "KLK2",
    "hgnc": "HGNC:6363",
    "ensembl": "ENSG00000167751",
    "uniprot": "P20151",
    "entrez": "3817",
    "targetClass": "surface-antigen",
    "wikipedia": "https://en.wikipedia.org/wiki/KLK2",
    "tldr": "A relative of PSA that stays attached to prostate cancer cells, used as a T-cell engager address by J&J.",
    "summary": "Human kallikrein-2 (KLK2) is an androgen-regulated serine protease that activates PSA; unlike PSA it is retained on the prostate cell membrane, which makes it a usable address for cell-surface therapies. Expression is nearly universal in prostate cancer and prostate-restricted elsewhere, so a KLK2-directed drug can engage T cells against the tumour with little on-target damage to other tissues. The lead agent is Johnson & Johnson's pasritamig (JNJ-78278343, a KLK2 x CD3 bispecific), which showed low cytokine release and PSA responses in phase 1 and is in phase 3 (KLK2-P3-01) in metastatic castration-resistant prostate cancer. Open questions are whether KLK2 expression persists in neuroendocrine or AR-independent disease and how it compares with PSMA as an engager target. The plain version: KLK2 is a cousin of PSA that stays stuck to cancer cells, so drugs can grab it.",
    "biology": "Serine protease activating PSA; androgen-regulated.",
    "whereFound": [
      "Prostate cancer (nearly universal)"
    ],
    "notes": [
      "Prevalence not recorded: no peer-reviewed KLK2 expression series with a stated denominator was found for prostate cancer; 'nearly universal' rests on KLK2 being an androgen-regulated, prostate-restricted gene rather than on a published positivity rate."
    ],
    "indications": [
      "prostate"
    ],
    "tags": [
      "t-cell-engager-target"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/KLK2"
      }
    ]
  },
  {
    "id": "nectin4",
    "kind": "target",
    "name": "Nectin-4",
    "symbol": "NECTIN4",
    "hgnc": "HGNC:19688",
    "ensembl": "ENSG00000143217",
    "uniprot": "Q96NY8",
    "entrez": "81607",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Nectin-4",
    "tldr": "Nectin-4 is an adhesion protein plentiful on bladder cancer cells, used as the docking site for the ADC enfortumab vedotin.",
    "summary": "Nectin-4 is expressed at high levels in urothelial carcinoma and also in breast, lung, and pancreatic cancers. Enfortumab vedotin plus pembrolizumab is first-line standard in advanced urothelial cancer (EV-302). Next-generation Nectin-4 ADCs with topoisomerase-I payloads (MK-3120) and Nectin-4×TROP2 bispecific ADCs (AK146D1, AVZO-103) are in development.",
    "biology": "Nectin-4 is a cell adhesion molecule and also a receptor for measles virus. Skin expression explains the rash seen with enfortumab.",
    "whereFound": [
      "Urothelial carcinoma (>80%)",
      "TNBC",
      "NSCLC",
      "Pancreatic"
    ],
    "tags": [
      "adc-target"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Nectin-4"
      }
    ]
  },
  {
    "id": "parp",
    "aka": [
      "PARP1/2",
      "Poly [ADP-ribose] polymerase 2"
    ],
    "kind": "target",
    "name": "PARP",
    "symbol": "PARP1",
    "hgnc": "HGNC:270",
    "ensembl": "ENSG00000143799",
    "uniprot": "P09874",
    "entrez": "142",
    "targetClass": "enzyme",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/PARP_inhibitor",
    "tldr": "PARP is a DNA repair enzyme. Cancers that have already lost one repair system (BRCA) die when this second one is blocked; healthy cells survive.",
    "summary": "PARP inhibitors (olaparib, niraparib, rucaparib, talazoparib) exploit synthetic lethality with BRCA1/2 mutations and homologous recombination deficiency in ovarian, breast, prostate, and pancreatic cancer. Olaparib is approved in adjuvant germline-BRCA breast cancer (OlympiA). PARP1-selective inhibitors (saruparib) and PARP PET tracers are the next step.",
    "biology": "Poly(ADP-ribose) polymerase 1 senses single-strand breaks; trapping on DNA is the key cytotoxic mechanism.",
    "whereFound": [
      "BRCA/HRD ovarian, breast, prostate, pancreatic cancers"
    ],
    "indications": [
      "prostate"
    ],
    "tags": [
      "synthetic-lethality"
    ],
    "prevalence": [
      {
        "indicationId": "prostate",
        "pct": "20-25",
        "measure": "HRR gene alteration (mCRPC)",
        "source": "https://www.cbioportal.org/study/summary?id=prad_tcga_pan_can_atlas_2018",
        "note": "BRCA2 ~8-10%"
      }
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/PARP_inhibitor"
      }
    ]
  },
  {
    "id": "psma",
    "trials": [
      "nct07567521",
      "nct06383052",
      "nct05381103",
      "nct06906471",
      "nct07258407"
    ],
    "drugs": [
      "aaa817",
      "jnj-87189401",
      "hrs-4357",
      "fpi-2265"
    ],
    "kind": "target",
    "name": "PSMA",
    "symbol": "FOLH1",
    "hgnc": "HGNC:3788",
    "ensembl": "ENSG00000086205",
    "uniprot": "Q04609",
    "entrez": "2346",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Glutamate_carboxypeptidase_II",
    "tldr": "A protein on prostate cancer cells that lets doctors both see the cancer on a PET scan and hit it with a radioactive drug.",
    "summary": "Prostate-specific membrane antigen is the archetypal theranostic target. PSMA PET (Pylarify, Illuccix, Locametz, Pylarify TruVu) is standard for staging; 177Lu-PSMA-617 (Pluvicto) is approved before and after chemotherapy in metastatic castration-resistant prostate cancer. Alpha-emitting 225Ac-PSMA agents and PSMA-targeted bispecifics and CAR-T are in trials.",
    "biology": "PSMA is a type II transmembrane glutamate carboxypeptidase; expression increases with grade and castration resistance. Also expressed in tumour neovasculature of other cancers.",
    "whereFound": [
      "Prostate cancer (>90%)",
      "Neovasculature of RCC, glioma, others"
    ],
    "indications": [
      "prostate"
    ],
    "tags": [
      "theranostic",
      "pet-target"
    ],
    "prevalence": [
      {
        "indicationId": "prostate",
        "pct": ">90",
        "measure": "PSMA PET positivity, metastatic disease",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12796145/",
        "note": "~10% PSMA-negative or low"
      },
      {
        "indicationId": "rcc",
        "pct": "60-80",
        "measure": "Neovascular PSMA expression",
        "source": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12796145/",
        "note": "Clear-cell; imaging studies"
      }
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Glutamate_carboxypeptidase_II"
      }
    ],
    "pathways": [
      "prostate-cancer-signalling"
    ],
    "companies": [
      "artbio",
      "convergent-therapeutics",
      "point-biopharma"
    ]
  },
  {
    "id": "sstr2",
    "kind": "target",
    "name": "Somatostatin receptor 2",
    "symbol": "SSTR2",
    "hgnc": "HGNC:11331",
    "ensembl": "ENSG00000180616",
    "uniprot": "P30874",
    "entrez": "6752",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "wikipedia": "https://en.wikipedia.org/wiki/Somatostatin_receptor_2",
    "tldr": "Somatostatin receptor 2 is a hormone receptor densely present on neuroendocrine tumours, and was the first theranostic target to reach routine care.",
    "summary": "Somatostatin receptor 2 is a G-protein-coupled receptor overexpressed on well-differentiated neuroendocrine tumours, which internalise bound somatostatin analogues and so can be both imaged and treated with the same peptide. 68Ga-DOTATATE PET (Netspot) and 177Lu-DOTATATE (Lutathera, NETTER-1 and NETTER-2) established the theranostic paradigm, in which a diagnostic scan selects patients for a matched radioligand. SSTR PET is positive in 80-90% of well-differentiated neuroendocrine tumours but lower in grade 3, and the receptor is also expressed in meningioma, 30-50% of small-cell lung cancer, and some breast cancers. Alpha-emitting 225Ac-DOTATATE (RYZ101) and 212Pb-DOTAMTATE are in phase 3, testing whether alpha particles outperform beta. The simple version is a hormone receptor that lets doctors see and treat neuroendocrine tumours with the same molecule.",
    "biology": "G-protein-coupled receptor; also expressed in meningioma, small-cell lung cancer, and some breast cancers.",
    "whereFound": [
      "Neuroendocrine tumours",
      "Meningioma",
      "Small-cell lung cancer (subset)"
    ],
    "indications": [
      "neuroendocrine",
      "sclc"
    ],
    "tags": [
      "theranostic"
    ],
    "prevalence": [
      {
        "indicationId": "neuroendocrine",
        "pct": "80-90",
        "measure": "SSTR PET positivity (well-differentiated)",
        "source": "https://en.wikipedia.org/wiki/Somatostatin_receptor_2",
        "note": "Lower in grade 3"
      },
      {
        "indicationId": "sclc",
        "pct": "30-50",
        "measure": "IHC/imaging",
        "source": "https://en.wikipedia.org/wiki/Somatostatin_receptor_2"
      }
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Somatostatin_receptor_2"
      }
    ],
    "companies": [
      "point-biopharma"
    ]
  },
  {
    "kind": "target",
    "asOf": "2026-09-06",
    "id": "steap1",
    "name": "STEAP1",
    "symbol": "STEAP1",
    "hgnc": "HGNC:11378",
    "ensembl": "ENSG00000164647",
    "uniprot": "Q9UHE8",
    "entrez": "26872",
    "targetClass": "surface-antigen",
    "wikipedia": "https://en.wikipedia.org/wiki/STEAP1",
    "tldr": "STEAP1 is a protein on the surface of most prostate cancer cells, now the address for a T-cell engager in phase 3.",
    "summary": "Six-transmembrane epithelial antigen of the prostate 1 is expressed in most prostate cancers including PSMA-low and neuroendocrine-like disease, with limited normal expression. Xaluritamig (STEAP1×CD3 XmAb 2+1) produced PSA50 in ~half of heavily pretreated mCRPC patients at target doses in phase 1 and is in two phase 3 trials (XALute post-taxane; XALience with abiraterone chemo-naive). Also an ADC target historically (vandortuzumab vedotin, discontinued).",
    "biology": "STEAP1 is a metalloreductase at cell junctions, upregulated by androgen receptor signalling; its expression is partly independent of PSMA, making it complementary.",
    "whereFound": [
      "Prostate cancer (most cases)",
      "Ewing sarcoma",
      "Bladder (subset)"
    ],
    "notes": [
      "Prevalence not recorded: no peer-reviewed STEAP1 expression series with a stated denominator was found for prostate cancer; the widely repeated '>80%' figure could not be traced to a series with an n, so it has been removed."
    ],
    "indications": [
      "prostate"
    ],
    "tags": [
      "t-cell-engager-target"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/STEAP1"
      }
    ]
  },
  {
    "id": "trop2",
    "kind": "target",
    "name": "TROP2",
    "symbol": "TACSTD2",
    "hgnc": "HGNC:11530",
    "ensembl": "ENSG00000184292",
    "uniprot": "P09758",
    "entrez": "4070",
    "targetClass": "surface-antigen",
    "asOf": "2026-09-04",
    "tldr": "TROP2 is a surface glycoprotein present at high levels on most epithelial cancers (breast, lung, urothelial, gastric, pancreatic) and at low levels on normal tissue. It does not drive the cancer; it is a delivery address, used by the approved ADCs sacituzumab govitecan and datopotamab deruxtecan and by sacituzumab tirumotecan, with a TROP2 PET tracer in development to pick patients.",
    "summary": "Trophoblast cell-surface antigen 2 is a transmembrane glycoprotein overexpressed in most epithelial cancers (breast, lung, urothelial, gastric, pancreatic) with low normal-tissue expression. It is not an oncogenic driver; it is a delivery address. Three TROP2 ADCs are approved or in registration (sacituzumab govitecan, datopotamab deruxtecan, sacituzumab tirumotecan) and a TROP2 PET tracer is in development to select patients.",
    "biology": "Regulates calcium signalling and cell adhesion; overexpression correlates with poor prognosis. Expression is heterogeneous within tumours, which limits the value of IHC selection. Internalises on antibody binding and traffics to lysosomes, which is what makes it a good ADC target.",
    "whereFound": [
      "Triple-negative breast cancer (~80-90% express)",
      "HR+ breast cancer",
      "NSCLC",
      "Urothelial carcinoma",
      "Gastric, pancreatic, endometrial cancers"
    ],
    "tags": [
      "adc-target",
      "pet-target"
    ],
    "links": [
      {
        "label": "UniProt P09758: TACSTD2 (TROP2)",
        "url": "https://www.uniprot.org/uniprotkb/P09758/entry"
      }
    ]
  }
];
