/**
 * Pathways: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedPathways: EntityInput[] = [
  {
    "kind": "pathway",
    "asOf": "2026-09-10",
    "id": "choline-metabolism-in-cancer",
    "name": "Choline metabolism in cancer",
    "aka": [
      "KEGG hsa05231",
      "Choline metabolism in cancer"
    ],
    "tldr": "This KEGG map shows how cancer cells rewire the handling of choline, a nutrient used to build cell membranes, so that growth signals and membrane building feed each other. It matters because the resulting build-up of phosphocholine is visible on MR spectroscopy and PET scans and is one of the metabolic hallmarks of cancer.",
    "summary": "Abnormal choline metabolism is a metabolic hallmark associated with oncogenesis and tumour progression. KEGG map hsa05231 draws how oncogenic signalling through RAS-ERK and PI3K-AKT, together with transcription factors such as hypoxia-inducible factor 1 (HIF1), raises the expression and activity of choline cycle enzymes. Choline enters through transporters (CHT1, CTL1, OCT2), is phosphorylated by choline kinase alpha (CHKA) to phosphocholine, and is built into phosphatidylcholine by the Kennedy pathway. Phospholipases C and D and the phosphatidylcholine-specific enzymes then break membrane phosphatidylcholine back down to phosphocholine, diacylglycerol (DAG) and phosphatidic acid. These products act as second messengers: DAG activates protein kinase C and phosphatidic acid supports the RAS-RAF1-MAPK cascade and mTOR, so membrane turnover and growth signalling reinforce each other.\n\nGlunde, Bhujwalla and Ronen, Nature Reviews Cancer, 2011 (doi:10.1038/nrc3162) review the field: the increase in total choline-containing compounds, and in particular the shift from glycerophosphocholine to phosphocholine, is seen across breast, prostate, brain and other cancers, is driven by CHKA over-expression and increased transporter activity, and can be imaged non-invasively by magnetic resonance spectroscopy and by choline PET. Response to targeted drugs (for example PI3K or MAPK inhibitors) lowers phosphocholine, making it a pharmacodynamic marker.\n\nWhat can be done: choline kinase inhibitors have been developed and one (TCD-717) reached a phase 1 trial, but none is approved. Today the choline pathway is used as a read-out rather than a target: choline imaging helps diagnose and monitor tumours, and drugs against the upstream drivers (PI3K/AKT/mTOR inhibitors such as alpelisib, capivasertib and everolimus; MEK inhibitors such as trametinib) lower choline metabolite levels as they work.",
    "analogy": "A building site where the bricks (choline) are also the walkie-talkies. The cell orders far more bricks than it needs for walls, keeps knocking finished walls down and rebuilding them, and every knocked-down brick sends a message telling the foreman to build faster. The pile of loose bricks is what the scanner sees.",
    "nodes": [
      {
        "id": "rtk",
        "label": "Growth factor receptors (EGFR, HER2)",
        "x": 50,
        "y": 5
      },
      {
        "id": "ras",
        "label": "RAS / RAF / MAPK",
        "x": 25,
        "y": 22
      },
      {
        "id": "pi3k",
        "label": "PI3K / AKT / mTOR",
        "x": 75,
        "y": 22
      },
      {
        "id": "hif",
        "label": "HIF1",
        "x": 90,
        "y": 42
      },
      {
        "id": "transport",
        "label": "Choline transporters (CHT1, CTL1)",
        "x": 10,
        "y": 45
      },
      {
        "id": "chka",
        "label": "Choline kinase alpha (CHKA)",
        "x": 40,
        "y": 45
      },
      {
        "id": "pcho",
        "label": "Phosphocholine (PCho)",
        "x": 40,
        "y": 65
      },
      {
        "id": "ptdcho",
        "label": "Phosphatidylcholine (membrane)",
        "x": 70,
        "y": 65
      },
      {
        "id": "plc",
        "label": "PLC / PLD",
        "x": 90,
        "y": 80
      },
      {
        "id": "dag",
        "label": "DAG / phosphatidic acid",
        "x": 55,
        "y": 85
      },
      {
        "id": "pkc",
        "label": "Protein kinase C",
        "x": 25,
        "y": 85
      },
      {
        "id": "out",
        "label": "Proliferation, survival",
        "x": 50,
        "y": 98
      }
    ],
    "edges": [
      {
        "from": "rtk",
        "to": "ras"
      },
      {
        "from": "rtk",
        "to": "pi3k"
      },
      {
        "from": "ras",
        "to": "chka"
      },
      {
        "from": "pi3k",
        "to": "chka"
      },
      {
        "from": "pi3k",
        "to": "hif"
      },
      {
        "from": "hif",
        "to": "chka"
      },
      {
        "from": "hif",
        "to": "transport"
      },
      {
        "from": "transport",
        "to": "chka"
      },
      {
        "from": "chka",
        "to": "pcho"
      },
      {
        "from": "pcho",
        "to": "ptdcho"
      },
      {
        "from": "plc",
        "to": "ptdcho",
        "type": "inhibits"
      },
      {
        "from": "plc",
        "to": "dag"
      },
      {
        "from": "dag",
        "to": "pkc"
      },
      {
        "from": "dag",
        "to": "ras"
      },
      {
        "from": "pkc",
        "to": "out"
      },
      {
        "from": "pcho",
        "to": "out"
      }
    ],
    "interventions": [
      "Choline imaging (MR spectroscopy, choline PET) to diagnose tumours and read out response to therapy",
      "Cut the upstream drivers: PI3K/AKT/mTOR inhibitors (alpelisib, capivasertib, everolimus) and MEK inhibitors (trametinib) lower phosphocholine as they act",
      "Choline kinase alpha inhibitors (TCD-717 reached phase 1), no approved agent",
      "HIF2 inhibition (belzutifan) where hypoxia signalling drives metabolic rewiring, approved in VHL-related and renal cancers"
    ],
    "drugs": [
      "everolimus"
    ],
    "pathways": [
      "hif-vhl"
    ],
    "related": [
      "hif-vhl"
    ],
    "links": [
      {
        "label": "KEGG map hsa05231",
        "url": "https://www.kegg.jp/pathway/hsa05231"
      },
      {
        "label": "Review: Choline metabolism in malignant transformation",
        "url": "https://doi.org/10.1038/nrc3162"
      }
    ]
  },
  {
    "kind": "pathway",
    "asOf": "2026-09-04",
    "id": "hif-vhl",
    "name": "VHL / HIF oxygen sensing",
    "wikipedia": "https://en.wikipedia.org/wiki/Hypoxia-inducible_factor",
    "tldr": "The VHL/HIF pathway is how cells sense oxygen (the 2019 Nobel Prize). VHL destroys HIF when oxygen is present. Kidney cancers lose VHL, so HIF-2α is permanently on and drives blood vessel growth and proliferation.",
    "summary": "In normoxia, prolyl hydroxylases (PHD) hydroxylate HIF-α, allowing the VHL E3 ligase to ubiquitinate it for proteasomal degradation. In hypoxia (or with VHL loss in ~90% of clear-cell RCC), HIF-α accumulates, dimerises with HIF-1β (ARNT), and transcribes VEGF, PDGF, GLUT1, CAIX, cyclin D1, and EPO. HIF-2α is the oncogenic paralogue in RCC; belzutifan blocks its dimerisation. CAIX is a PET and radioligand target (89Zr-girentuximab).",
    "analogy": "VHL is the shredder that destroys the 'we are suffocating' memo whenever there is oxygen around. Kidney cancer breaks the shredder, so the memo piles up and the cell keeps ordering new blood vessels and sugar.",
    "nodes": [
      {
        "id": "o2",
        "label": "Oxygen",
        "x": 20,
        "y": 8
      },
      {
        "id": "phd",
        "label": "PHD hydroxylases",
        "x": 20,
        "y": 28
      },
      {
        "id": "vhl",
        "label": "VHL E3 ligase",
        "x": 20,
        "y": 48
      },
      {
        "id": "hif",
        "label": "HIF-2α",
        "x": 55,
        "y": 48
      },
      {
        "id": "arnt",
        "label": "HIF-1β (ARNT)",
        "x": 85,
        "y": 35
      },
      {
        "id": "genes",
        "label": "VEGF, CAIX, GLUT1, cyclin D1",
        "x": 55,
        "y": 72
      },
      {
        "id": "out",
        "label": "Angiogenesis, glycolysis, growth",
        "x": 55,
        "y": 92
      }
    ],
    "edges": [
      {
        "from": "o2",
        "to": "phd"
      },
      {
        "from": "phd",
        "to": "vhl"
      },
      {
        "from": "vhl",
        "to": "hif",
        "type": "inhibits"
      },
      {
        "from": "arnt",
        "to": "hif"
      },
      {
        "from": "hif",
        "to": "genes"
      },
      {
        "from": "genes",
        "to": "out"
      }
    ],
    "interventions": [
      "Belzutifan (HIF-2α) in VHL disease and RCC, adjuvant with pembrolizumab (2026)",
      "VEGF-directed therapy downstream",
      "CAIX-targeted imaging (89Zr-girentuximab) and radioligands in development"
    ],
    "indications": [
      "rcc"
    ],
    "links": [
      {
        "label": "Wikipedia",
        "url": "https://en.wikipedia.org/wiki/Hypoxia-inducible_factor"
      }
    ]
  },
  {
    "kind": "pathway",
    "asOf": "2026-09-09",
    "tags": [
      "mechanism",
      "mechanics-atlas"
    ],
    "id": "lineage-plasticity-neuroendocrine",
    "name": "Lineage plasticity & neuroendocrine transformation",
    "wikipedia": "https://en.wikipedia.org/wiki/Neuroendocrine_tumor",
    "tldr": "Under pressure from a drug that blocks its identity (the androgen receptor in prostate cancer, EGFR in lung cancer), a tumour can change what kind of cell it is, becoming a small-cell neuroendocrine cancer that no longer needs the blocked signal. It is the ultimate escape: not a new mutation in the engine, but a new engine.",
    "summary": "Lineage plasticity requires loss of the gatekeepers TP53 and RB1 (Ku et al., Mu et al. 2017), which unlocks SOX2, EZH2-mediated repression of lineage genes, and reactivation of neural programmes (ASCL1, NEUROD1, INSM1, BRN2), producing AR-indifferent neuroendocrine prostate cancer in 15-20% of castration-resistant cases after potent AR inhibitors, and small-cell transformation in ~5-15% of EGFR-mutant NSCLC on osimertinib (also after ALK inhibitors and in immunotherapy-treated adenocarcinoma). Related transitions: squamous transdifferentiation of adenocarcinoma, sarcomatoid dedifferentiation in RCC and mesothelioma, MITF-low neural-crest states in melanoma under BRAF inhibitors, and blast/Richter transformation in lymphoid cancers. The new state expresses DLL3, SEZ6, B7-H3, CEACAM5 and loses PSMA or EGFR dependence, is transiently sensitive to platinum-etoposide, and is detected by biopsy at progression (recommended when PSA is low relative to disease burden or ctDNA shows TP53/RB1 loss) and by DLL3 PET. Therapeutics: DLL3 engagers (tarlatamab), EZH2 inhibitors (mevrometostat + enzalutamide, tazemetostat) to block or reverse the switch, Aurora A inhibitors for MYCN/ASCL1 states, and B7-H3 or SEZ6 ADCs.",
    "analogy": "A shop that sells hats is fined every time it sells a hat (AR blockade). One day it reopens as a bakery. The fine no longer applies, the old inspectors (PSA, PSMA scans) see nothing, and only a new set of tools works against the new business.",
    "nodes": [
      {
        "id": "adeno",
        "label": "Adenocarcinoma (AR / EGFR)",
        "x": 12,
        "y": 15
      },
      {
        "id": "drug",
        "label": "ARPI or EGFR TKI pressure",
        "x": 12,
        "y": 48
      },
      {
        "id": "loss",
        "label": "TP53 + RB1 loss",
        "x": 45,
        "y": 15
      },
      {
        "id": "sox2",
        "label": "SOX2, EZH2, ASCL1/NEUROD1",
        "x": 45,
        "y": 48
      },
      {
        "id": "ne",
        "label": "Neuroendocrine / small-cell",
        "x": 78,
        "y": 30
      },
      {
        "id": "dll3",
        "label": "DLL3, B7-H3, SEZ6 surface",
        "x": 78,
        "y": 62,
        "targetId": "dll3"
      },
      {
        "id": "indiff",
        "label": "AR / EGFR indifferent",
        "x": 45,
        "y": 82
      },
      {
        "id": "tx",
        "label": "Tarlatamab, platinum-etoposide",
        "x": 78,
        "y": 92
      },
      {
        "id": "ezh2i",
        "label": "EZH2 inhibitors block switch",
        "x": 12,
        "y": 82
      }
    ],
    "edges": [
      {
        "from": "adeno",
        "to": "ne"
      },
      {
        "from": "drug",
        "to": "sox2"
      },
      {
        "from": "loss",
        "to": "sox2"
      },
      {
        "from": "sox2",
        "to": "ne"
      },
      {
        "from": "ne",
        "to": "dll3"
      },
      {
        "from": "ne",
        "to": "indiff"
      },
      {
        "from": "drug",
        "to": "adeno",
        "type": "inhibits"
      },
      {
        "from": "tx",
        "to": "ne",
        "type": "inhibits"
      },
      {
        "from": "ezh2i",
        "to": "sox2",
        "type": "inhibits"
      }
    ],
    "interventions": [
      "Re-biopsy at progression when the clinical picture and markers diverge; ctDNA TP53/RB1 loss as a warning",
      "DLL3 T-cell engager tarlatamab (SCLC; trials in neuroendocrine prostate cancer); B7-H3 and SEZ6 ADCs",
      "EZH2 inhibitors (mevrometostat with enzalutamide, tazemetostat) to prevent or reverse plasticity; Aurora A inhibitors for MYCN/ASCL1-high states",
      "Platinum-etoposide gives transient responses in transformed disease"
    ],
    "targets": [
      "dll3",
      "b7h3",
      "ceacam5",
      "psma"
    ],
    "drugs": [
      "enzalutamide"
    ],
    "indications": [
      "prostate",
      "sclc"
    ],
    "links": [
      {
        "label": "Ku et al., Rb1 and Trp53 cooperate to suppress prostate cancer lineage plasticity, metastasis, and antiandrogen resistance (Science 2017)",
        "url": "https://doi.org/10.1126/science.aah4199"
      },
      {
        "label": "Beltran et al., Divergent clonal evolution of castration-resistant neuroendocrine prostate cancer (Nat Med 2016)",
        "url": "https://doi.org/10.1038/nm.4045"
      }
    ]
  },
  {
    "kind": "pathway",
    "asOf": "2026-09-10",
    "id": "prostate-cancer-signalling",
    "name": "Prostate cancer (KEGG map)",
    "aka": [
      "KEGG hsa05215",
      "Prostate cancer"
    ],
    "tldr": "KEGG's prostate cancer map centres on the androgen receptor, the hormone switch that prostate cells depend on, plus loss of PTEN and NKX3.1 that lets PI3K/AKT growth signalling run free. Hormone therapy, AR antagonists and now AKT inhibitors act on these two arms.",
    "summary": "The KEGG prostate cancer map (hsa05215) draws the androgen receptor (AR) as the central node. Testosterone is converted by SRD5A2 to dihydrotestosterone, which releases AR from HSP90 chaperones so it enters the nucleus and, with co-activators (CREBBP, EP300, NCOA family), switches on target genes such as KLK3 (PSA), TMPRSS2 and, through the TMPRSS2-ERG fusion, the ERG oncogene. During androgen deprivation the map shows how AR signalling is re-established: AR gene amplification, AR mutations that respond to other ligands, altered co-activator activity and growth-factor cross-talk. The second arm is growth-factor signalling: EGFR, ERBB2, IGF1R, FGFR and PDGFR feed PI3K to AKT to mTOR, and AKT both stabilises AR output and inhibits FOXO and BAD. PTEN loss, which is very common, and NKX3.1 loss lower p27 (CDKN1B) and remove restraint on the cell cycle, while MDM2 activation by AKT lowers p53. KEGG also draws GSTP1 silencing, which removes carcinogen detoxification in prostatic intraepithelial neoplasia, and FOLH1 (PSMA), the surface protein now used for imaging and radioligand therapy. Watson, Arora and Sawyers, Nat Rev Cancer, 2015 (doi:10.1038/nrc4016) review how castration-resistant tumours restore AR signalling through amplification, ligand-binding-domain mutations (such as F877L under enzalutamide), constitutively active splice variants like AR-V7, intratumoural androgen synthesis and glucocorticoid receptor substitution, and how PTEN loss and lineage plasticity provide AR-independent escape.\n\nWhat drugs do about it: androgen deprivation (GnRH agonists or antagonists) removes the ligand; abiraterone blocks CYP17-dependent androgen synthesis; the AR antagonists enzalutamide, apalutamide and darolutamide stop AR binding DNA even when amplified; the AKT inhibitor capivasertib with abiraterone is approved for PTEN-deficient metastatic castration-resistant disease; and the PSMA radioligand lutetium-177 vipivotide tetraxetan (Pluvicto) delivers radiation to FOLH1-expressing cells after AR pathway inhibitors.",
    "analogy": "The androgen receptor is an engine that runs on testosterone. Cutting the fuel (androgen deprivation) works until the tumour fits a bigger tank (AR amplification) or an engine that runs on anything (AR mutations and splice variants). Enzalutamide and its cousins clamp the engine itself; capivasertib deals with the separate PI3K/AKT motor that PTEN loss switches on.",
    "nodes": [
      {
        "id": "androgen",
        "label": "Testosterone to DHT (SRD5A2)",
        "x": 20,
        "y": 6
      },
      {
        "id": "ar",
        "label": "Androgen receptor (amplified, mutated)",
        "x": 20,
        "y": 30
      },
      {
        "id": "coact",
        "label": "Co-activators (CBP/p300, NCOA)",
        "x": 50,
        "y": 20
      },
      {
        "id": "argenes",
        "label": "KLK3 (PSA), TMPRSS2-ERG",
        "x": 20,
        "y": 56
      },
      {
        "id": "rtk",
        "label": "EGFR, IGF1R, FGFR, PDGFR",
        "x": 80,
        "y": 6
      },
      {
        "id": "pten",
        "label": "PTEN, NKX3.1 (lost)",
        "x": 95,
        "y": 30
      },
      {
        "id": "pi3k",
        "label": "PI3K / AKT / mTOR",
        "x": 75,
        "y": 40
      },
      {
        "id": "p27",
        "label": "p27 (CDKN1B)",
        "x": 75,
        "y": 62
      },
      {
        "id": "mdm2",
        "label": "MDM2 to p53",
        "x": 95,
        "y": 62
      },
      {
        "id": "psma",
        "label": "FOLH1 (PSMA)",
        "x": 50,
        "y": 78,
        "targetId": "psma"
      },
      {
        "id": "out",
        "label": "Growth, survival, castration resistance",
        "x": 50,
        "y": 95
      }
    ],
    "edges": [
      {
        "from": "androgen",
        "to": "ar"
      },
      {
        "from": "coact",
        "to": "ar"
      },
      {
        "from": "ar",
        "to": "argenes"
      },
      {
        "from": "argenes",
        "to": "out"
      },
      {
        "from": "rtk",
        "to": "pi3k"
      },
      {
        "from": "pten",
        "to": "pi3k",
        "type": "inhibits"
      },
      {
        "from": "pi3k",
        "to": "ar"
      },
      {
        "from": "pi3k",
        "to": "p27",
        "type": "inhibits"
      },
      {
        "from": "pi3k",
        "to": "mdm2"
      },
      {
        "from": "p27",
        "to": "out",
        "type": "inhibits"
      },
      {
        "from": "mdm2",
        "to": "out"
      },
      {
        "from": "psma",
        "to": "out"
      }
    ],
    "interventions": [
      "Androgen deprivation (GnRH agonists or antagonists) combined with an AR pathway inhibitor: enzalutamide, apalutamide, darolutamide or abiraterone (CYP17 inhibitor)",
      "AKT inhibitor capivasertib plus abiraterone for PTEN-deficient metastatic castration-resistant prostate cancer",
      "PSMA radioligand therapy (lutetium-177 vipivotide tetraxetan, Pluvicto) for PSMA-positive disease after AR pathway inhibitors",
      "PARP inhibitors (olaparib, niraparib, talazoparib) with an AR pathway inhibitor for BRCA-altered disease",
      "Docetaxel or cabazitaxel chemotherapy; radiotherapy or prostatectomy for localised disease"
    ],
    "targets": [
      "psma"
    ],
    "drugs": [
      "enzalutamide",
      "abiraterone",
      "pluvicto",
      "olaparib"
    ],
    "indications": [
      "prostate"
    ],
    "pathways": [
      "lineage-plasticity-neuroendocrine"
    ],
    "links": [
      {
        "label": "KEGG map hsa05215",
        "url": "https://www.kegg.jp/pathway/hsa05215"
      },
      {
        "label": "Review: Emerging mechanisms of resistance to AR inhibitors in prostate cancer",
        "url": "https://doi.org/10.1038/nrc4016"
      }
    ]
  }
];
