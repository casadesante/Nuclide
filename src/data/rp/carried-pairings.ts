/**
 * Pairings: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedPairings: EntityInput[] = [
  {
    "kind": "pairing",
    "asOf": "2026-09-04",
    "id": "beta-then-alpha",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT06402331: AlphaBreak (FPI-2265) & AcTION (225Ac-PSMA-617)",
        "url": "https://clinicaltrials.gov/study/NCT06402331"
      }
    ],
    "name": "Beta radioligand → alpha radioligand",
    "a": "radioligand-therapy",
    "b": "targeted-alpha-therapy",
    "pairingType": "sequence",
    "tldr": "After lutetium therapy stops working, an actinium version of the same drug can still produce responses.",
    "summary": "This sequence pairing follows Radioligand therapy (beta emitters) with Targeted alpha therapy using the same targeting molecule: after lutetium stops working, an actinium version of the same drug can still produce responses. Alpha particles cause oxygen-independent clustered DNA damage that beta-resistant, hypoxic or small-volume disease cannot repair, as explained in the Alpha vs beta emitters entry. In Prostate cancer, Actinium-225 PSMA agents after Lutetium-177 vipivotide tetraxetan produced PSA responses in retrospective series, and phase 3 trials (AcTION, AlphaBreak) are ongoing. In Neuroendocrine tumours, Actinium-225 DOTATATE (RYZ101) is being tested in ACTION-1 after Lutetium-177 dotatate, so the evidence is retrospective and phase 1/2 with phase 3 pending.",
    "rationale": "Alpha particles cause oxygen-independent clustered DNA damage that beta-resistant, hypoxic, or small-volume disease cannot repair.",
    "evidence": "Retrospective and phase 1/2; phase 3 pending.",
    "drugs": [
      "pluvicto",
      "ac225-psma",
      "lutathera",
      "ryz101"
    ],
    "indications": [
      "prostate",
      "neuroendocrine"
    ],
    "terms": [
      "alpha-vs-beta"
    ]
  },
  {
    "kind": "pairing",
    "asOf": "2026-09-07",
    "id": "prrt-then-alpha-net",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT05153772: ALPHAMEDIX-02",
        "url": "https://clinicaltrials.gov/study/NCT05153772"
      },
      {
        "label": "ClinicalTrials.gov NCT05477576: ACTION-1",
        "url": "https://clinicaltrials.gov/study/NCT05477576"
      }
    ],
    "name": "Beta PRRT → alpha PRRT",
    "a": "lutathera",
    "b": "alphamedix",
    "pairingType": "sequence",
    "tldr": "When lutetium radioligand therapy stops working, alpha-emitting versions can still control the disease.",
    "summary": "This sequence moves from beta-emitting lutetium-177 dotatate to an alpha-emitting radioligand, 212Pb-DOTAMTATE, when beta PRRT stops controlling a neuroendocrine tumour. Alpha particles deliver oxygen-independent clustered DNA damage that beta-resistant clones cannot repair, so the same somatostatin receptor target can be attacked again with a more destructive payload. The phase 2 ALPHAMEDIX-02 trial included a PRRT-exposed cohort in which disease control was maintained in most patients, and ACTION-1 is the randomised phase 3 test of 225Ac-DOTATATE after 177Lu. The pairing belongs to the wider topic of alpha versus beta emitters and targeted alpha therapy.",
    "rationale": "Alpha particles deliver oxygen-independent clustered DNA damage that beta-resistant clones cannot repair.",
    "evidence": "Phase 2 (AlphaMedix); phase 3 pending (ACTION-1).",
    "trials": [
      "alphamedix-02",
      "action-1"
    ],
    "indications": [
      "neuroendocrine"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "terms": [
      "alpha-vs-beta"
    ]
  },
  {
    "kind": "pairing",
    "asOf": "2026-09-04",
    "id": "psma-pet-to-rlt",
    "links": [
      {
        "label": "VISION: lutetium-177 PSMA-617 radioligand therapy extends survival in advanced prostate cancer (New England Journal of Medicine 2021)",
        "url": "https://doi.org/10.1056/NEJMoa2107322"
      },
      {
        "label": "ClinicalTrials.gov NCT03392428: TheraP (ANZUP 1603)",
        "url": "https://clinicaltrials.gov/study/NCT03392428"
      }
    ],
    "name": "PSMA PET → PSMA radioligand therapy",
    "a": "psma-pet",
    "b": "radioligand-therapy",
    "pairingType": "diagnostic-therapeutic",
    "tldr": "The scan shows whether the target is there; the treatment uses the same address. Only patients whose tumours light up are treated.",
    "summary": "This diagnostic-therapeutic pairing links PSMA PET to Radioligand therapy (beta emitters) against PSMA in Prostate cancer: the scan shows whether the target is there, the treatment uses the same address, and only patients whose tumours light up are treated. Identical ligand chemistry means imaging biodistribution predicts therapeutic biodistribution and enables dosimetry. VISION and PSMAfore required PSMA PET positivity, so the pairing is embedded in phase 3 design and drug labels, and the standardised uptake value predicts response. The linked agents are Piflufolastat F-18 / Pylarify TruVu and Lutetium-177 vipivotide tetraxetan, and the pairing is the archetype of Theranostics now being copied for FAP, TROP2, HER2 and CAIX.",
    "rationale": "Identical ligand chemistry means imaging biodistribution predicts therapeutic biodistribution; also enables dosimetry.",
    "evidence": "Embedded in phase 3 design and labels.",
    "drugs": [
      "pylarify",
      "pluvicto"
    ],
    "indications": [
      "prostate"
    ],
    "targets": [
      "psma"
    ],
    "terms": [
      "theranostics"
    ]
  },
  {
    "kind": "pairing",
    "asOf": "2026-09-07",
    "id": "sstr-pet-to-prrt",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03049189: COMPETE",
        "url": "https://clinicaltrials.gov/study/NCT03049189"
      }
    ],
    "name": "SSTR PET → PRRT",
    "a": "sstr-pet",
    "b": "prrt",
    "pairingType": "diagnostic-therapeutic",
    "tldr": "SSTR PET followed by PRRT is the original theranostic pair: the scan with the diagnostic isotope decides who gets the same molecule with the therapeutic isotope.",
    "summary": "This diagnostic-therapeutic pairing links somatostatin receptor PET, using gallium-68 or copper-64 DOTATATE, to peptide receptor radionuclide therapy with lutetium-177 dotatate or 177Lu-edotreotide in neuroendocrine tumours. Because the imaging and therapeutic agents share identical peptide chemistry, the biodistribution seen on the scan predicts where the therapy will be delivered, which is the founding logic of theranostics. Every pivotal PRRT trial, including NETTER-1, NETTER-2 and COMPETE, required SSTR-avid disease on imaging, and both the intensity of uptake, graded on the Krenning scale, and the absence of FDG-avid lesions lacking SSTR predict benefit. The same template was later copied by PSMA theranostics in prostate cancer.",
    "rationale": "Identical peptide chemistry means imaging biodistribution predicts therapy delivery.",
    "evidence": "Embedded in all pivotal PRRT trials.",
    "indications": [
      "neuroendocrine"
    ],
    "targets": [
      "sstr2"
    ],
    "drugs": [
      "lutathera",
      "itm-11"
    ],
    "terms": [
      "theranostics"
    ]
  }
];
