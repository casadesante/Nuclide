/**
 * Radiopharmaceuticals approved in Asia and nowhere else.
 *
 * Both agents here were approved in 2026 by a regulator whose register cannot be queried by script
 * (the NMPA's database rejects automated requests, the MFDS publishes only a news board), so every
 * fact below was read on 22 September 2026 from a named source: China's National Natural Science
 * Foundation for the approval it funded, the companies' own announcements as carried by the English
 * editions of Korean financial press, and the peer-reviewed clinical papers. Where a source is in
 * Chinese or Korean the English wording here is a translation made at the time of writing and is
 * marked as such; the original product names are given as the manufacturer romanises them.
 */
import type { EntityInput } from "@/lib/schema";

export const asiaAgents: EntityInput[] = [
  {
    id: "pexiretide-tc99m",
    kind: "drug",
    name: "Technetium (99mTc) pexiretide",
    aka: ["99mTc-3PRGD2", "technetium [99mTc] pexiretide injection", "Jilunte", "3PRGD2", "锝[99mTc]佩昔瑞特加肽注射液"],
    brand: "Jilunte",
    code: "99mTc-3PRGD2",
    status: "approved",
    modality: "Integrin αvβ3-targeted SPECT imaging agent (RGD peptide dimer)",
    mechanism:
      "A technetium-99m-labelled dimeric RGD peptide with three polyethylene glycol spacers that binds integrin αvβ3 on tumour neovasculature and tumour cells, so an ordinary SPECT/CT camera can image the lesion.",
    tldr: "A Chinese-invented injection that makes tumours visible on the cheap, widely available type of scanner (SPECT) rather than the expensive one (PET). It was approved in China in April 2026 to check whether lung cancer has spread to the lymph nodes.",
    summary:
      "Pexiretide is a dimeric RGD peptide carrying three PEG spacers, labelled with technetium-99m, that targets integrin αvβ3 — a receptor expressed on new tumour blood vessels and on many tumour cells. It was developed by Professor Wang Fan's group at Peking University's Medical Isotope Research Centre on National Natural Science Foundation grants, and China's NMPA approved it on 2 April 2026 under the trade name Jilunte, for SPECT/CT assessment of regional lymph-node metastasis in patients with suspected lung cancer.\n\nThe funder's own announcement calls it the first Class 1 innovative radiopharmaceutical developed independently in China and the world's first broad-spectrum tumour imaging agent for SPECT — a claim about the modality, not the molecule: PET agents dominate general tumour imaging, while SPECT has been confined to bone, thyroid and perfusion work for decades. That distinction is the commercial point. China's installed base of SPECT/CT scanners is roughly two to three times its PET/CT base (Securities Times, citing industry estimates), and a SPECT scan costs a fraction of a PET scan, so a broad tumour agent that runs on the cheaper machine reaches district hospitals that will never own a cyclotron.\n\nThe registrational claim reported in Chinese coverage is that in phase 3 there was no statistically significant difference from 18F-FDG PET/CT in telling benign from malignant lung lesions, while for lung cancer lymph-node metastasis the specificity and accuracy of 99mTc-3PRGD2 SPECT/CT were significantly higher than PET/CT's. The trial report itself is not public in English; the closest peer-reviewed evidence is a prospective head-to-head study in 26 patients with primary malignant lung tumours (Korean Journal of Radiology, 2023), which compared the two scans across 42 metastatic and 136 benign lymph-node stations with histopathology as the reference.\n\nCommercially the agent sits with Ridio (Foshan), a company founded in 2012 out of the Peking University group, whose controlling shareholder is Beijing Jilunte Pharmaceutical; Baiyang Pharmaceutical invested in 2022 and holds the mainland commercialisation rights. An earlier filing was withdrawn in February 2025 and resubmitted before this approval.",
    approvals: [
      {
        region: "China",
        year: 2026,
        indication: "SPECT/CT assessment of regional lymph-node metastasis in patients with suspected lung cancer",
        note: "NMPA approval 2 April 2026; described by its funder as China's first independently developed Class 1 innovative radiopharmaceutical",
      },
    ],
    regulatoryEvents: [
      { date: "2026-04-02", type: "approval", region: "China", note: "NMPA marketing approval (priority review), trade name Jilunte", source: "https://www.nsfc.gov.cn/p1/3381/2825/121910.html" },
      { date: "2025-02", type: "withdrawal", region: "China", note: "An earlier new drug application for the same product was withdrawn before being resubmitted; reported by Chinese trade press, not by the regulator", source: "https://www.163.com/dy/article/K0V13Q6H05118K9D.html" },
    ],
    asOf: "2026-09-22",
    links: [
      { label: "National Natural Science Foundation of China: the world's first integrin-targeted innovative radiopharmaceutical approved, 2 April 2026 (Chinese)", url: "https://www.nsfc.gov.cn/p1/3381/2825/121910.html" },
      { label: "Securities Times: approval, phase 3 comparison with FDG PET/CT and the SPECT installed base (Chinese)", url: "https://stcn.com/article/detail/3725436.html" },
      { label: "99mTc-3PRGD2 SPECT/CT for diagnosing lymph node metastasis of primary malignant lung tumours (Korean Journal of Radiology, 2023)", url: "https://doi.org/10.3348/kjr.2023.0411" },
      { label: "Advances in clinical oncology research on 99mTc-3PRGD2 SPECT imaging (Frontiers in Oncology, 2022)", url: "https://doi.org/10.3389/fonc.2022.898764" },
    ],
    tags: ["diagnostic", "china", "spect", "integrin"],
    related: ["integrin-avb3", "tc-99m", "spect", "csnm", "china-isotope-radiation", "chinese-journal-of-nuclear-medicine-and-molecular-imaging"],
  },
];
