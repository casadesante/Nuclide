/**
 * Lung agents: the two halves of a ventilation/perfusion study, and the lung-cancer radioligand
 * programmes that sit next to them.
 *
 * Scope: Technegas and Tc-99m macroaggregated albumin are the inhaled and injected halves of the V/Q
 * scan, the oldest routine nuclear medicine test still in daily use, and MAA doubles as the simulation
 * injection before Y-90 radioembolisation. 212Pb-PSV359 is the one clinical radioligand whose trial now
 * names non-small cell lung cancer explicitly. Cyclopharm is here because it owns Technegas.
 *
 * All facts are taken from FDA labels and approval packages, ClinicalTrials.gov records, company
 * announcements and peer-reviewed sources, each linked on the record that states them. Where a figure
 * appears only in investor material, the record says so.
 */
import type { EntityInput } from "@/lib/schema";

export const lungAgents: EntityInput[] = [
  {
    id: "technegas",
    kind: "drug",
    name: "Technegas (technetium Tc-99m labelled carbon inhalation aerosol)",
    aka: ["Technegas", "Tc-99m carbon nanoparticle aerosol", "99mTc-CNP"],
    brand: "Technegas",
    status: "approved",
    modality: "Inhaled SPECT/gamma camera aerosol",
    mechanism:
      "Dried sodium pertechnetate Tc-99m is loaded into a graphite crucible and flash-heated to about 2,700 C for a few seconds in high-purity argon, which encapsulates the technetium inside carbon. The product is an ultrafine dispersion of carbon nanoparticle agglomerates with a radioactivity aerodynamic diameter under 500 nm, small enough to behave much like a gas: it follows inspired air to the alveoli rather than impacting in the large airways, then deposits and stays put, so the image is a map of where air actually reaches. Made with an argon/oxygen mix instead, the same generator yields Pertechnegas, whose technetium is not fully encased and which clears rapidly as soluble pertechnetate.",
    tldr: "A puff of radioactive carbon particles so fine they travel with the breath into the depths of the lung, where they stick. A gamma camera then photographs which parts of the lung are getting air, which is compared with a second scan showing which parts are getting blood.",
    summary:
      "Technegas is an inhaled ventilation agent generated at the bedside: a Technegas generator flash-heats dried Tc-99m pertechnetate in a carbon crucible at roughly 2,700 C in argon, producing technetium encapsulated in carbon nanoparticle agglomerates measured at 60-160 nm, themselves built from 7-23 nm primary particles, with a radioactivity aerodynamic diameter below 500 nm. That size is the point: unlike a wet aerosol such as Tc-99m DTPA, which impacts in the central airways and gives hot spots in obstructive disease, Technegas distributes to the lung periphery and holds still long enough to image in multiple projections.\n\nThe FDA approved Technegas on 29 September 2023 under NDA 022335, held by Cyclomedica Australia, after decades of use elsewhere. The approved indication is narrow and precise: used with sodium pertechnetate Tc-99m in the Technegas Plus System, it is a radioactive diagnostic agent for adults and paediatric patients aged 6 years and older for visualisation of pulmonary ventilation and evaluation of pulmonary embolism when paired with perfusion imaging. Dosing is count-rate driven rather than fixed: 400-1,000 MBq (10.8-27 mCi) is loaded in the crucible to reach a lung count rate of 1,500-2,500 counts per second for adults, 500-1,000 for children, with inhalation completed within 10 minutes of preparation.\n\nThe US registration study, CYC-009 (NCT03054870), was a phase 3 non-inferiority comparison against xenon-133 planar ventilation imaging; its ClinicalTrials.gov record shows 226 participants actually enrolled and a terminated status. The label itself specifies imaging with a gamma camera and a low-energy collimator and does not use the words SPECT or planar, though the agent's stability in the lung is exactly what makes V/Q SPECT practical, and the EANM V/Q SPECT guideline is built around it.",
    approvals: [
      { region: "US", year: 2023, indication: "Visualisation of pulmonary ventilation, and evaluation of pulmonary embolism when paired with perfusion imaging, in adults and children aged 6 and over", note: "NDA 022335, Cyclomedica Australia, approved 29 September 2023" },
    ],
    dosing: {
      route: "Oral inhalation of the generated aerosol through a mouthpiece",
      schedule: "400-1,000 MBq (10.8-27 mCi) of Tc-99m pertechnetate loaded in the crucible for adults, inhaled by slow deep breathing with a 5-second breath-hold until a lung count rate of 1,500-2,500 counts per second is reached; 500-1,000 counts per second for children aged 6 and over. Inhalation must be completed within 10 minutes of preparation.",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/022335Orig1s000lbl.pdf",
    },
    regulatoryEvents: [
      { date: "2023-09-29", type: "approval", region: "US", note: "FDA approval of NDA 022335 (Cyclomedica Australia), Type 3 new dosage form", source: "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2024/022335Orig1s000Approv.pdf" },
    ],
    indications: ["pulmonary-embolism-vq"],
    trials: ["nct03054870"],
    asOf: "2026-09-23",
    links: [
      { label: "FDA label: TECHNEGAS, kit for the preparation of technetium Tc 99m labeled carbon inhalation aerosol (NDA 022335)", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2024/022335Orig1s000lbl.pdf" },
      { label: "FDA approval package, NDA 022335, approval date 29 September 2023", url: "https://www.accessdata.fda.gov/drugsatfda_docs/nda/2024/022335Orig1s000Approv.pdf" },
      { label: "Technegas particle characterisation: nanoparticle agglomerates of 60-160 nm (review)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10144982/" },
      { label: "Cyclomedica: FDA grants approval for Technegas", url: "https://www.cyclomedica.com/2023/10/02/united-states-fda-grants-approval-for-technegas/" },
    ],
    related: ["tc-99m-maa", "tc-99m", "pulmonary-embolism-vq", "cyclopharm", "spect"],
    tags: ["ventilation", "V/Q", "technetium", "inhaled"],
  },
  {
    id: "tc-99m-maa",
    kind: "drug",
    name: "Technetium Tc-99m albumin aggregated (MAA)",
    aka: ["99mTc-MAA", "Tc-99m macroaggregated albumin", "MAA", "Pulmotech MAA", "DraxImage MAA"],
    status: "approved",
    modality: "Intravenous SPECT particle agent",
    mechanism:
      "Human albumin is heat-aggregated into particles of which more than 90% measure 10-90 micrometres, none above 150. Injected intravenously, they are carried to the lungs and physically lodge in pulmonary arterioles and capillaries in proportion to regional blood flow: over 90% are trapped within 1 to 5 minutes, occluding a tiny fraction of the pulmonary capillary bed. The blockade is temporary because the aggregates are fragile and break up, and the resulting image is a perfusion map. Injected instead into the hepatic artery, the same particles follow the route Y-90 microspheres will take, which is what makes them a usable simulation of a radioembolisation treatment.",
    tldr: "Tiny clumps of albumin, a normal blood protein, tagged with a radioactive marker and injected into a vein. They wedge briefly in the smallest blood vessels of the lung wherever blood is flowing, so the scan maps the lung's blood supply; the clumps then break up and clear.",
    summary:
      "Tc-99m macroaggregated albumin is the perfusion half of the V/Q scan and one of the oldest radiopharmaceuticals still in routine use. Two products are marketed in the US: Pulmotech MAA (BLA 210089, CIS bio International, distributed by Curium, initial US approval 2020) and DraxImage MAA (BLA 017881, Jubilant DraxImage, initial US approval 1987). Both carry the same two indications: lung scintigraphy as an adjunct in the evaluation of pulmonary perfusion in adults and paediatric patients, and peritoneovenous shunt scintigraphy as an aid in evaluating its patency.\n\nDosing is by particle count rather than activity alone. An adult dose is 200,000 to 700,000 particles, about 350,000 recommended, falling to 10,000-50,000 for neonates under four weeks, because each particle occludes a capillary and the margin of safety comes from how few of them there are relative to the pulmonary capillary bed. The labels contraindicate the agent in severe pulmonary hypertension, where deaths have been reported, and in albumin hypersensitivity.\n\nIts second life is in interventional oncology. Before yttrium-90 radioembolisation, MAA is injected into the hepatic artery and imaged to estimate the lung shunt fraction, because hepatopulmonary shunting can deliver enough dose to the lungs to cause radiation pneumonitis. The dose constraint usually applied is a lung mean dose of 30 Gy from a single treatment or 50 Gy cumulative, and a shunt fraction above 20% has traditionally contraindicated resin-microsphere treatment. MAA is used as the surrogate because its particles are close in size to the microspheres, though the correspondence is imperfect and is itself an active research question.",
    approvals: [
      { region: "US", year: 1987, indication: "Lung scintigraphy as an adjunct in the evaluation of pulmonary perfusion, and peritoneovenous shunt patency", note: "DraxImage MAA, BLA 017881, Jubilant DraxImage" },
      { region: "US", year: 2020, indication: "Lung scintigraphy as an adjunct in the evaluation of pulmonary perfusion, and peritoneovenous shunt patency", note: "Pulmotech MAA, BLA 210089, CIS bio International, distributed by Curium" },
    ],
    dosing: {
      route: "Intravenous injection for lung perfusion; intra-arterial (hepatic artery) for radioembolisation work-up",
      schedule: "Adults 200,000-700,000 particles per injection, approximately 350,000 recommended; paediatric doses reduced by age, 10,000-50,000 particles for neonates under four weeks",
      modifications: "Contraindicated in severe pulmonary hypertension and in albumin hypersensitivity; reduce particle number in right-to-left shunt",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/210089s002lbl.pdf",
    },
    indications: ["pulmonary-embolism-vq"],
    asOf: "2026-09-23",
    links: [
      { label: "FDA label: PULMOTECH MAA (BLA 210089), revised August 2023", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/210089s002lbl.pdf" },
      { label: "FDA label: DRAXIMAGE MAA (BLA 017881), revised December 2023", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2023/017881s030lbl.pdf" },
      { label: "Kappadath et al.: lung shunt fraction from 99mTc-MAA SPECT/CT for Y-90 treatment planning, with the 30 Gy single and 50 Gy cumulative lung dose constraints", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8479035/" },
    ],
    related: ["technegas", "tc-99m", "pulmonary-embolism-vq", "y-90-resin-microspheres", "y-90-glass-microspheres", "radioembolisation-tare", "curium", "jubilant-radiopharma"],
    tags: ["perfusion", "V/Q", "technetium", "radioembolisation work-up"],
  },
  {
    id: "pb-212-psv359",
    kind: "drug",
    name: "Lead-212 PSV359",
    aka: ["[212Pb]PSV359", "PSV359", "PSV377 (imaging analogue)"],
    code: "PSV359",
    status: "phase-1",
    modality: "Alpha-emitting radioligand (FAP-alpha targeted)",
    mechanism:
      "A small-molecule ligand for fibroblast activation protein alpha, the protease on the cancer-associated fibroblasts that build the stroma of most epithelial tumours, carrying lead-212 as the payload. Lead-212 decays through bismuth-212 to deliver an alpha particle, depositing its energy over a few cell diameters, so the dose lands on the stromal scaffold and the tumour cells packed against it rather than on distant marrow. The same targeting molecule labelled with lead-203 or gallium-68, designated PSV377, images FAP-alpha expression, so a patient can be selected on a scan before being treated.",
    tldr: "A drug that homes to the scaffolding cells tumours build around themselves, carrying a radioactive metal that fires alpha particles over a very short range. A matching scan version shows first whether a patient's tumour has the target.",
    summary:
      "PSV359 is Perspective Therapeutics' lead-212 radioligand against fibroblast activation protein alpha, the marker of cancer-associated fibroblasts. FAP-alpha is attractive because it is present in the stroma of most epithelial cancers and nearly absent from normal adult tissue, and because high expression tracks with poor prognosis in non-small cell lung, colorectal, pancreatic, gastric, mesothelioma, head and neck, oesophageal and ovarian cancers.\n\nThe first-in-human phase 1/2 study, NCT06710756, opened in April 2025 with a planned 112 participants and uses the pair directly: [203Pb]PSV359 to image and [212Pb]PSV359 to treat. Its original tumour list was pancreatic, gastric and gastro-oesophageal junction, oesophageal, colorectal and ovarian cancer and head and neck squamous cell carcinoma. On 14 September 2026 Perspective announced a clinical collaboration and supply agreement with Merck under which the trial is amended to add cohorts combining [212Pb]PSV359 with pembrolizumab in FAP-alpha-positive non-small cell lung cancer and colorectal cancer. That amendment is what puts an alpha-emitting radioligand into NSCLC, a tumour that radiopharmaceuticals have otherwise reached only as a diagnostic.\n\nPerspective guides initial phase 1/2a data in late 2026. Nothing has been published on activity in lung cancer, and the pipeline table still lists the programme's target disease simply as solid tumours.",
    indications: ["nsclc"],
    targets: ["fap"],
    trials: ["nct06710756"],
    asOf: "2026-09-23",
    links: [
      { label: "Perspective Therapeutics: clinical collaboration and supply agreement with Merck to evaluate [212Pb]PSV359 with Keytruda in FAP-alpha positive solid tumours, 14 September 2026", url: "https://www.perspectivetherapeutics.com/pr/perspective-therapeutics-announces-clinical-collaboration-and-supply-agreement-with-merck-to-evaluate-212pbpsv359-in-combination-with-keytruda-pembrolizumab-in-fap-a-positive-solid-tumors" },
      { label: "ClinicalTrials.gov NCT06710756: lead-212 PSV359 therapy for patients with solid tumours", url: "https://clinicaltrials.gov/study/NCT06710756" },
      { label: "Perspective Therapeutics pipeline", url: "https://www.perspectivetherapeutics.com/pipeline/" },
    ],
    related: ["perspective-therapeutics", "fap", "fapi-pet", "pb-212", "pb-212-vmt-alpha-net", "targeted-alpha-therapy", "nsclc", "merck", "pembrolizumab"],
    tags: ["FAP", "lead-212", "alpha", "NSCLC"],
  },
  {
    id: "nct03054870",
    kind: "trial",
    name: "CYC-009: Technegas versus xenon-133 ventilation imaging",
    nct: "NCT03054870",
    phase: "3",
    status: "historic",
    sponsor: "Cyclomedica Australia",
    enrolled: 226,
    setting:
      "Adults referred for ventilation scintigraphy, imaged with both Technegas and xenon-133 by planar technique, to test whether Technegas is non-inferior to xenon-133 for the distribution of pulmonary ventilation. This is the registration study behind the 2023 US approval; ClinicalTrials.gov records its status as terminated with 226 participants actually enrolled.",
    tldr: "The trial that got Technegas approved in the United States: it compared the inhaled carbon aerosol against xenon-133 gas, the agent it was meant to replace.",
    summary:
      "CYC-009 (NCT03054870) was a phase 3 non-inferiority study run by Cyclomedica Australia under IND 62660, comparing Technegas with xenon-133 planar lung imaging in patients referred for ventilation scintigraphy. Its stated primary objective was to demonstrate non-inferiority of Technegas to xenon-133 with respect to the distribution of pulmonary ventilation. The registry lists the study as terminated with an actual enrolment of 226. Cyclomedica's own history records the trial completing and the New Drug Application being submitted in 2020; the FDA approved NDA 022335 on 29 September 2023.",
    drugs: ["technegas"],
    asOf: "2026-09-23",
    links: [
      { label: "ClinicalTrials.gov NCT03054870", url: "https://clinicaltrials.gov/study/NCT03054870" },
      { label: "CYC-009 protocol and statistical analysis plan (ClinicalTrials.gov document)", url: "https://cdn.clinicaltrials.gov/large-docs/70/NCT03054870/Prot_SAP_001.pdf" },
    ],
    related: ["technegas", "cyclopharm", "pulmonary-embolism-vq"],
    tags: ["ventilation", "registration trial"],
  },
  {
    id: "cyclopharm",
    kind: "company",
    name: "Cyclopharm",
    aka: ["Cyclomedica", "Cyclomedica Australia", "Cyclopharm Limited"],
    hq: "Kingsgrove, New South Wales, Australia",
    country: "AU",
    companyType: "radiopharma",
    website: "https://www.cyclopharm.com/",
    ticker: "ASX:CYC",
    stage: "public",
    tldr: "The Australian company behind Technegas, the inhaled ventilation agent, which spent thirty years as a product the United States could not buy and is now being installed across American hospitals.",
    summary:
      "Cyclopharm Limited (ASX:CYC) develops and sells Technegas through its operating company Cyclomedica Australia, which shares its Kingsgrove registered address. Technegas is used in 65 countries by the company's own count, with direct distribution in 17 and more than 5 million patient procedures to date.\n\nThe company's defining event was the US FDA approval of Technegas on 29 September 2023 under NDA 022335, opening the last major market that had been closed to it. Its first-half 2026 results reported US Technegas revenue up 74% year on year, from A$1.2m to A$2.1m, with revenue-generating US sites doubling from 35 at 30 June 2025 to 70 at 30 June 2026 and 83 by 12 August 2026, against a stated US lung imaging market of 5,139 sites. In July 2026 it announced a commercial installation across 11 clinical locations of University Hospitals in Cleveland, Ohio. Those commercial figures come from the company's own investor material rather than an independent source.\n\nWhat makes Cyclopharm structurally unusual in this corpus is that it sells a generator and a consumable rather than a dose: the value sits in the installed base of Technegas systems, not in isotope supply, so its constraint is hospital adoption and reimbursement rather than reactor time.",
    asOf: "2026-09-23",
    links: [
      { label: "Cyclomedica: part of Cyclopharm Limited (ASX:CYC), 65 countries", url: "https://www.cyclomedica.com/company/cyclopharm/" },
      { label: "Cyclopharm first-half 2026 results summary (investor presentation: 67 countries, 83 US revenue-generating sites as at 12 August 2026)", url: "https://investor.cyclopharm.com/site/pdf/ee402a7a-7ffe-4386-9541-9d22f3e60b42/Platform/ListPage/CYC-1H2026-Results-Summary.pdf" },
      { label: "Cyclopharm ASX announcement: 11-site Technegas rollout at University Hospitals, Cleveland, 15 July 2026", url: "https://investor.cyclopharm.com/site/pdf/60334760-9465-4ad1-9ff3-1d17eb39d00c/Platform/ListPage/Immediate-11Site-Technegas-Rollout-at-University-Hospitals.pdf" },
    ],
    related: ["technegas", "pulmonary-embolism-vq", "tc-99m"],
    tags: ["ventilation", "Australia", "listed"],
  },
];
