import type { EntityInput } from "@/lib/schema";

export const newTherapyAgents: EntityInput[] = [
  {
    id: "y-90-resin-microspheres",
    kind: "drug",
    name: "Yttrium-90 resin microspheres",
    aka: ["SIR-Spheres", "Y-90 resin microspheres"],
    brand: "SIR-Spheres",
    modality: "radioembolisation",
    mechanism:
      "Biocompatible resin microspheres (20-40 micron diameter) carrying yttrium-90, a pure beta emitter, infused through a catheter into the hepatic artery so they lodge preferentially in the hypervascular tumour bed and irradiate it from within while sparing most healthy liver.",
    tldr:
      "Tiny radioactive beads are injected through a small tube into the artery that feeds the liver. They lodge in the tumour and give it radiation from the inside, mostly sparing the rest of the liver.",
    summary:
      "SIR-Spheres are yttrium-90-loaded resin microspheres delivered by transarterial radioembolisation (TARE/SIRT). Yttrium-90 is a pure beta emitter with a physical half-life of about 64 hours; delivery via the hepatic artery exploits the fact that liver tumours draw most of their blood supply from that vessel while normal liver parenchyma relies more on the portal vein.\n\nThe device holds the original 2002 FDA premarket approval (PMA P990065) for unresectable metastatic liver tumours from primary colorectal cancer, given together with adjuvant intrahepatic artery chemotherapy (floxuridine, FUDR). In July 2025 the FDA approved a labelling supplement extending the indication to local tumour control of unresectable hepatocellular carcinoma (HCC) in patients with no macrovascular invasion, Child-Pugh A cirrhosis, well-compensated liver function and good performance status, making SIR-Spheres the only US radioembolisation product approved for both indications.\n\nDosing is individualised: activity is planned using body-surface-area or partition (MIRD) dosimetry models with pre-treatment angiography and a technetium-99m macroaggregated albumin scan to check lung shunting before the therapeutic infusion. SIR-Spheres also carry regulatory approval in the EU (2002), Canada (2016), Australia (1998) and other markets.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      { region: "US", year: 2002, indication: "Unresectable metastatic liver tumours from primary colorectal cancer, with adjuvant intrahepatic artery chemotherapy (FUDR)" },
      { region: "US", year: 2025, indication: "Local tumour control of unresectable hepatocellular carcinoma (no macrovascular invasion, Child-Pugh A, well-compensated liver function, good performance status)" },
    ],
    dosing: {
      route: "Intra-arterial infusion into the hepatic artery via catheter",
      schedule: "Single administration per treated liver territory; activity individualised by body-surface-area or partition-model dosimetry",
      monitoring: "Pre-treatment angiography and 99mTc-MAA lung-shunt scan; post-treatment imaging for dosimetry",
      source: "https://www.accessdata.fda.gov/cdrh_docs/pdf/P990065S014B.pdf",
    },
    companies: ["sirtex"],
    indications: ["hcc"],
    technologies: ["radioembolisation-tare"],
    tags: ["radioembolisation", "liver", "beta emitter"],
    links: [
      { label: "FDA PMA P990065/S014 approval order", url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?ID=P990065S014" },
      { label: "FDA: Summary of safety and effectiveness data (HCC supplement)", url: "https://www.accessdata.fda.gov/cdrh_docs/pdf/P990065S014B.pdf" },
      { label: "Sirtex: FDA approval for HCC indication (7 July 2025)", url: "https://www.sirtex.com/media/p1kjiw5m/sirtex-medical-announces-fda-approval-hcc-indication-us.pdf" },
      { label: "FDA: original SSED for colorectal indication (2002)", url: "https://www.accessdata.fda.gov/cdrh_docs/pdf/p990065b.pdf" },
    ],
    related: ["y-90-glass-microspheres", "ho-166-microspheres", "tc-99m-maa"],
  },
  {
    id: "y-90-glass-microspheres",
    kind: "drug",
    name: "Yttrium-90 glass microspheres",
    aka: ["TheraSphere", "Y-90 glass microspheres"],
    brand: "TheraSphere",
    modality: "radioembolisation",
    mechanism:
      "Insoluble glass microspheres (15-35 micron diameter) with yttrium-90 built into the glass matrix, infused through a hepatic artery catheter. The spheres remain permanently embedded in the liver and deliver beta radiation locally; about 95% of the yttrium-90 dose is absorbed within roughly 12 days given the isotope's short half-life.",
    tldr:
      "Microscopic glass beads containing a radioactive metal are injected into the artery that supplies a liver tumour. The beads stay in place permanently and give off radiation that fades away within about two weeks.",
    summary:
      "TheraSphere consists of yttrium-90 fused into glass microspheres and delivered by selective internal radiation therapy (SIRT) through a hepatic artery catheter. It was marketed in the US from 1999-2000 under a Humanitarian Device Exemption (HDE H980006) for unresectable hepatocellular carcinoma (HCC), which limited annual patient numbers.\n\nBoston Scientific (which acquired the product from BTG/Biocompatibles) received full FDA premarket approval (PMA P200029) on 17 March 2021, based on the LEGACY study, a retrospective single-arm, multicentre study of 162 patients with solitary unresectable HCC (1-8 cm). The approved indication is SIRT for local tumour control of solitary tumours 1-8 cm in diameter in patients with Child-Pugh A cirrhosis, no macrovascular invasion and good performance status. LEGACY reported an objective response rate of 72.2% by blinded independent central review and a 76.1% six-month duration-of-response rate.\n\nA post-approval study (multi-compartment dosimetry, MCD-HCC) is ongoing, and a further PMA supplement was cleared by FDA in February 2026. Dosing uses partition-model or MIRD dosimetry to target roughly 100 Gy to the treated liver volume; the microspheres remain permanently implanted.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      { region: "US", year: 2021, indication: "Selective internal radiation therapy (SIRT) for local tumour control of solitary unresectable HCC (1-8 cm), Child-Pugh A cirrhosis, no macrovascular invasion, good performance status" },
    ],
    dosing: {
      route: "Intra-arterial infusion into the hepatic artery via catheter",
      schedule: "Single administration per treated liver territory, individualised by partition-model dosimetry aiming for a target absorbed dose",
      source: "https://www.accessdata.fda.gov/cdrh_docs/pdf20/P200029B.pdf",
    },
    companies: ["boston-scientific"],
    indications: ["hcc"],
    technologies: ["radioembolisation-tare"],
    tags: ["radioembolisation", "liver", "beta emitter"],
    links: [
      { label: "FDA: TheraSphere P200029 approval page", url: "https://www.fda.gov/medical-devices/recently-approved-devices/theraspheretm-p200029" },
      { label: "FDA: Summary of safety and effectiveness data (P200029)", url: "https://www.accessdata.fda.gov/cdrh_docs/pdf20/P200029B.pdf" },
      { label: "Boston Scientific: FDA approval press release, 18 March 2021", url: "https://news.bostonscientific.com/2021-03-18-Boston-Scientific-Receives-FDA-Approval-for-TheraSphere-TM-Y-90-Glass-Microspheres" },
      { label: "LEGACY study, Hepatology 2021", url: "https://journals.lww.com/hep/fulltext/2021/11000/yttrium_90_radioembolization_for_the_treatment_of.9.aspx" },
    ],
    related: ["y-90-resin-microspheres", "ho-166-microspheres"],
  },
  {
    id: "ho-166-microspheres",
    kind: "drug",
    name: "Holmium-166 microspheres",
    aka: ["QuiremSpheres", "166Ho-PLLA microspheres"],
    brand: "QuiremSpheres",
    modality: "radioembolisation",
    mechanism:
      "Poly-L-lactic acid (PLLA) microspheres loaded with holmium-166 (a beta emitter that also emits an imageable gamma photon and is paramagnetic, so uptake can be checked on SPECT or MRI as well as CT), infused through a hepatic artery catheter to treat unresectable liver tumours.",
    tldr:
      "Tiny plastic beads carrying a radioactive, slightly magnetic metal are injected into the artery feeding a liver tumour. Because the metal shows up on both nuclear scans and MRI, doctors can check exactly where the beads went.",
    summary:
      "QuiremSpheres are holmium-166-labelled poly-L-lactic acid microspheres for radioembolisation (SIRT) of unresectable liver tumours, developed at University Medical Center Utrecht and commercialised by Quirem Medical (later acquired by Terumo). Holmium-166 has a physical half-life of 26.8 hours, so more than 90% of the radiation dose is delivered within the first four days after administration.\n\nThe product received CE marking as an active implantable medical device in April 2015, and a matching low-activity test dose (QuiremScout, identical size and shape) was CE-marked in 2018-2019 to predict lung shunting and biodistribution before therapy. Holmium-166 emits both beta particles (for therapy) and a gamma photon, and is paramagnetic, which allows quantitative SPECT and MRI-based dosimetry after treatment, alongside the more usual post-treatment imaging used for yttrium-90 products.\n\nQuiremSpheres has not obtained FDA approval and is used in Europe and other CE-mark-recognising markets; NICE (UK) technology appraisal TA985 reviewed its use in advanced HCC. It is one of three commercially available liver radioembolisation microsphere products, alongside the yttrium-90 resin (SIR-Spheres) and glass (TheraSphere) microspheres.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      { region: "EU", year: 2015, indication: "Treatment of unresectable liver tumours (radioembolisation)" },
    ],
    dosing: {
      route: "Intra-arterial infusion into the hepatic artery via catheter",
      schedule: "Single administration, typically with a QuiremScout test dose beforehand for dosimetry",
      source: "https://www.nice.org.uk/guidance/ta985/chapter/2-Information-about-QuiremSpheres",
    },
    indications: ["hcc"],
    technologies: ["radioembolisation-tare"],
    tags: ["radioembolisation", "liver", "beta emitter", "CE mark"],
    links: [
      { label: "Holmium-166 radioembolisation: current status and future perspectives, PMC 2022", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9626412/" },
      { label: "NICE TA985: QuiremSpheres for advanced HCC", url: "https://www.nice.org.uk/guidance/ta985/chapter/2-Information-about-QuiremSpheres" },
      { label: "Terumo: QuiremScout CE mark announcement, 2019", url: "https://www.terumo.com/newsrelease/detail/20190107/234" },
    ],
    related: ["y-90-resin-microspheres", "y-90-glass-microspheres"],
  },
  {
    id: "i-131-tositumomab",
    kind: "drug",
    name: "Iodine-131 tositumomab",
    aka: ["Bexxar", "tositumomab and I-131 tositumomab"],
    brand: "Bexxar",
    modality: "radioimmunotherapy",
    mechanism:
      "An unlabelled anti-CD20 murine monoclonal antibody (tositumomab) dosing step to saturate normal B-cell sinks, followed by the same antibody labelled with iodine-131, which delivers combined beta and gamma radiation directly to CD20-expressing lymphoma cells as well as an antibody-dependent immune effect.",
    tldr:
      "A cancer-targeting antibody carrying a radioactive form of iodine was used, as a single course, to treat a type of blood cancer called non-Hodgkin lymphoma. The manufacturer stopped selling it in 2014 because too few patients were using it.",
    summary:
      "The Bexxar therapeutic regimen combined tositumomab, an anti-CD20 murine IgG2a monoclonal antibody, with the same antibody radiolabelled with iodine-131. It was approved by the FDA in 2003 (and in Canada in 2005) for CD20-positive relapsed or refractory low-grade, follicular or transformed non-Hodgkin lymphoma in patients who had progressed during or after rituximab therapy, including rituximab-refractory disease. It was given as a single course only, comprising an unlabelled predose followed by a dosimetric and then a therapeutic dose of 131I-tositumomab, with activity individualised to deliver a specified total-body radiation dose.\n\nBexxar competed with the similar CD20-targeted radioimmunotherapy ibritumomab tiuxetan (Zevalin, labelled with yttrium-90). Despite comparable efficacy, Bexxar's use declined steadily after a 2006 peak: by 2012 only about 75 US patients received it in a year. GlaxoSmithKline announced in August 2013 that it would discontinue manufacture and sale of the regimen, citing projected declining sales and the availability of alternative therapies; marketing was formally withdrawn on 20 February 2014.\n\nBexxar is a useful cautionary example in the graph: an approved, effective radiopharmaceutical regimen withdrawn for commercial rather than safety reasons, illustrating how logistics (dosimetry visits, hospital nuclear-medicine capacity, competition from simpler agents) can end a therapy's market life even when clinical data support it.",
    status: "withdrawn",
    asOf: "2026-09-22",
    approvals: [
      { region: "US", year: 2003, indication: "CD20-positive relapsed or refractory, low-grade, follicular, or transformed non-Hodgkin lymphoma progressing during or after rituximab therapy" },
      { region: "CA", year: 2005, indication: "Same indication as the US approval" },
    ],
    regulatoryEvents: [
      {
        date: "2013-08-06",
        type: "withdrawal",
        region: "US/CA",
        note: "GlaxoSmithKline announced it would discontinue manufacture and sale of the Bexxar regimen, citing declining use (about 75 US patients in 2012) and available alternative therapies.",
        source: "https://pipelinereview.com/gsk-to-discontinue-manufacture-and-sale-of-the-bexxar-therapeutic-regimen-tositumomab-and-iodine-i-131-tositumomab/",
      },
      {
        date: "2014-02-20",
        type: "withdrawal",
        region: "US/CA",
        note: "Marketing of the Bexxar therapeutic regimen formally discontinued.",
        source: "https://openmedscience.com/the-rise-and-fall-of-iodine-131-tositumomab-bexxars-story/",
      },
    ],
    targets: ["cd20"],
    indications: ["follicular-lymphoma"],
    technologies: ["radioimmunotherapy"],
    tags: ["radioimmunotherapy", "lymphoma", "withdrawn", "beta and gamma emitter"],
    links: [
      { label: "GSK: announcement of discontinuation, 6 August 2013", url: "https://pipelinereview.com/gsk-to-discontinue-manufacture-and-sale-of-the-bexxar-therapeutic-regimen-tositumomab-and-iodine-i-131-tositumomab/" },
      { label: "JAMA Internal Medicine: Withdrawal of drugs for commercial reasons - tositumomab, 2014", url: "https://static1.squarespace.com/static/55550f38e4b0884d8d80118e/t/5565d1aae4b0660ba5b932e2/1432736170326/2014+-+Nov+-+JAMA+IM+-+Withdrawal+of+Drugs+for+Commercial+Reasons+-+Tositumomab.pdf" },
      { label: "The rise and fall of iodine-131 tositumomab: Bexxar's story", url: "https://openmedscience.com/the-rise-and-fall-of-iodine-131-tositumomab-bexxars-story/" },
    ],
    related: ["ibritumomab-tiuxetan", "rituximab"],
  },
  {
    id: "sr-89-chloride",
    kind: "drug",
    name: "Strontium-89 chloride",
    aka: ["Metastron", "Strontium89", "89SrCl2"],
    brand: "Metastron",
    modality: "radioligand therapy",
    mechanism:
      "Strontium-89 chloride is a calcium-mimetic, bone-seeking beta emitter given by intravenous injection. It behaves like calcium, clearing from blood and localising preferentially in bone mineral at sites of active osteogenesis, so blastic metastatic lesions accumulate far more strontium than normal bone and receive a higher local radiation dose that palliates pain.",
    tldr:
      "A radioactive form of strontium is injected into a vein. Because it behaves like calcium, it collects in the damaged, overactive bone around cancer that has spread to bone, and its radiation can relieve bone pain for months.",
    summary:
      "Strontium-89 chloride (branded Metastron) is indicated for the relief of bone pain in patients with painful skeletal metastases, confirmed by a prior bone scan; it is not a treatment for the underlying cancer and does not relieve pain from soft tissue disease. The FDA label recommends a fixed dose of 148 MBq (4 mCi) by slow intravenous injection over one to two minutes, or a weight-based alternative of 1.5-2.2 MBq/kg (40-60 microCi/kg); repeat dosing is generally not recommended at intervals of less than 90 days and depends on haematological recovery.\n\nStrontium-89 decays by beta emission with a physical half-life of 50.5 days; roughly two-thirds of excretion is urinary and one-third faecal in patients with bone metastases, with retention in metastatic lesions lasting much longer than the roughly 14-day turnover in normal bone. Pain relief typically begins 10-20 days after injection and can last three to six months; a transient pain flare in the first few days is common.\n\nMetastron was originally marketed by Amersham/Zeneca and later GE Healthcare; the branded product was discontinued and the compound is now supplied generically (marketed as Strontium89). It sits alongside samarium-153 lexidronam and radium-223 dichloride as FDA/EMA-approved bone-palliation radiopharmaceuticals, though 89Sr and 153Sm are not tumour-type-restricted the way radium-223's label is limited to castration-resistant prostate cancer.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      { region: "US", year: 1993, indication: "Relief of bone pain in patients with painful skeletal metastases (presence of bone metastases must be confirmed prior to therapy)" },
    ],
    dosing: {
      route: "Slow intravenous injection (1-2 minutes)",
      schedule: "148 MBq (4 mCi) fixed dose, or 1.5-2.2 MBq/kg (40-60 microCi/kg); repeat doses generally not within 90 days, based on response and haematological status",
      monitoring: "Blood counts (platelets, neutrophils) before and after treatment; confirm blastic bone metastases on bone scan before therapy",
      source: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/020134s012lbl.pdf",
    },
    indications: [],
    technologies: [],
    tags: ["bone pain palliation", "beta emitter", "calcium mimetic"],
    links: [
      { label: "FDA label: Metastron (strontium-89 chloride injection)", url: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2013/020134s012lbl.pdf" },
      { label: "SNMMI/EANM procedure guideline for palliative radionuclide bone therapies, 2023", url: "https://tech.snmjournals.org/content/51/3/176" },
    ],
    related: ["radium-223", "samarium-153-lexidronam", "bone-metastases"],
  },
  {
    id: "re-188-sct",
    kind: "drug",
    name: "Rhenium-188 skin cancer therapy",
    aka: ["Rhenium-SCT", "188Re epidermal radionuclide therapy"],
    brand: "Rhenium-SCT",
    modality: "brachytherapy source",
    mechanism:
      "A resin containing the beta- and gamma-emitting radioisotope rhenium-188 is applied directly to the skin over a thin protective foil moulded to the shape of a non-melanoma skin lesion. Beta particles penetrate only a few millimetres, delivering a high local dose to the tumour (about 92% of the dose within 2 mm) while a single outpatient application typically lasts under an hour.",
    tldr:
      "A radioactive paste is spread over a thin film placed on top of a skin cancer. The radiation only travels a few millimetres, so it treats the visible tumour without surgery, cutting, or affecting deeper tissue.",
    summary:
      "Rhenium-SCT (Skin Cancer Therapy) is a non-invasive, single-session epidermal brachytherapy for non-melanoma skin cancer (basal cell carcinoma and cutaneous squamous cell carcinoma), developed by OncoBeta. Rhenium-188 (half-life about 17 hours) is produced on demand from a tungsten-188/rhenium-188 generator and formulated as a resin that is applied to an adhesive foil placed over the lesion, so the radioactive material never directly contacts the skin. A typical prescribed dose is 50 Gy to the deepest point of the lesion (target depth up to about 3 mm).\n\nThe device and compound are registered in Australia (ARTG, class IIb, from 2020-2022) and hold CE marking, with use reported across Europe, the UK, New Zealand and South Africa; it does not have FDA approval. A single-arm, multicentre phase 4 post-marketing study (EPIC-Skin) reported, at 12 months, lesion-based complete response in 94.1% and partial response in 3.2% of 185 evaluable lesions, with no toxicities above CTCAE grade 2 and favourable cosmetic and quality-of-life outcomes; an earlier Italian series (Castellucci et al., EJNMMI Physics) reported 98% complete lesion response at 6 months in 54 evaluable lesions.\n\nBecause treatment is external and the isotope's beta range is only a few millimetres, Rhenium-SCT is positioned for lesions ≤3 mm deep and ≤8 cm2 in difficult-to-treat cosmetic or functional sites (nose, ear, lip, digits, genitals) where surgery or conventional external-beam radiotherapy is less attractive.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      { region: "EU/UK/AU/NZ/ZA", year: 2015, indication: "Shallow (≤3 mm deep) basal cell carcinoma and squamous cell carcinoma without perineural invasion or high-risk pathology", note: "CE marking and national device registrations; not FDA approved" },
    ],
    dosing: {
      route: "Topical epidermal application (resin on adhesive foil placed over the lesion)",
      schedule: "Single outpatient session, typically prescribing 50 Gy to the deepest point of the lesion",
      source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12197855/",
    },
    technologies: ["ldr-seed-brachytherapy"],
    tags: ["brachytherapy", "skin cancer", "beta emitter", "non-invasive"],
    links: [
      { label: "OncoBeta: Rhenium-SCT technology overview", url: "https://www.oncobeta.com/technology/" },
      { label: "EPIC-Skin phase 4 study, 12-month results (PMC, 2025)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12197855/" },
      { label: "Castellucci et al., high-dose brachytherapy with non-sealed 188Re for non-melanoma skin cancer, EJNMMI", url: "https://www.healthcert.com/hubfs/EJNMMI%20Castellucci%20-%20Savoia%20et%20al.%202020.pdf" },
      { label: "Australian MSAC public summary document on Rhenium-188 brachytherapy for skin cancer", url: "https://www.msac.gov.au/sites/default/files/2025-07/1657.1_final_psd_-_april_2025_-_redacted.pdf" },
    ],
    related: [],
  },
  {
    id: "lu-177-pnt2002",
    kind: "drug",
    name: "Lutetium-177 PNT2002",
    aka: ["177Lu-PNT2002", "177Lu-PSMA-I&T (POINT/Lantheus)"],
    code: "PNT2002",
    modality: "radioligand therapy",
    mechanism:
      "A PSMA-targeted small-molecule ligand (PSMA-I&T) labelled with no-carrier-added lutetium-177, a beta emitter, delivering targeted radiation to PSMA-expressing prostate cancer cells after intravenous infusion.",
    tldr:
      "A radioactive drug that homes in on a marker found on most prostate cancer cells, delivering radiation directly to the tumour, is being tested as a treatment for prostate cancer that has stopped responding to hormone therapy.",
    summary:
      "177Lu-PNT2002 is a PSMA-targeted radioligand therapy built on the PSMA-I&T ligand, labelled with beta-emitting no-carrier-added lutetium-177. POINT Biopharma developed it and Lantheus in-licensed exclusive worldwide commercial rights (excluding certain Asian territories) in December 2022; POINT was subsequently acquired by Eli Lilly. The FDA granted Fast Track designation for metastatic castration-resistant prostate cancer (mCRPC) in April 2023.\n\nThe pivotal phase 3 SPLASH trial (NCT04647526) randomised 412 patients with PSMA-expressing mCRPC who had progressed on an androgen receptor pathway inhibitor (ARPI) and refused or were ineligible for chemotherapy, 2:1 to 177Lu-PNT2002 (up to four cycles, 6.8 GBq per cycle every 8 weeks) versus a change to abiraterone or enzalutamide, with crossover allowed on progression. Topline results (December 2023) showed a statistically significant improvement in radiographic progression-free survival by blinded independent central review: median 9.5 months with 177Lu-PNT2002 versus 6.0 months with ARPI (HR 0.71, p=0.0088); overall survival was immature, with an interim HR of 1.11, and 84.6% of control-arm patients who progressed crossed over. Grade 3+ treatment-emergent adverse events, serious adverse events and discontinuations for toxicity were all numerically lower on 177Lu-PNT2002 than on ARPI.\n\nAs of the March 2026 status, 177Lu-PNT2002 has not received a marketing authorisation in any jurisdiction; further follow-up data were expected in 2024 ahead of a potential US new drug application.",
    status: "phase-3",
    asOf: "2026-09-22",
    dosing: {
      route: "Intravenous infusion",
      schedule: "Up to 4 cycles at 6.8 GBq (±10%) per cycle, every 8 weeks (SPLASH trial regimen)",
      source: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11745944/",
    },
    companies: ["lantheus", "point-biopharma", "eli-lilly"],
    targets: ["psma"],
    indications: ["prostate-mcrpc"],
    trials: ["splash"],
    technologies: ["radioligand-therapy"],
    tags: ["PSMA", "radioligand therapy", "prostate cancer", "beta emitter", "phase 3"],
    links: [
      { label: "Lantheus/POINT: positive topline SPLASH results, 18 December 2023", url: "https://lantheusholdings.gcs-web.com/news-releases/news-release-details/lantheus-and-point-biopharma-announce-positive-topline-results" },
      { label: "FDA Fast Track designation announcement, 24 April 2023", url: "https://investor.lantheus.com/node/14596/pdf" },
      { label: "Initial clinical experience with 177Lu-PNT2002 (SPLASH lead-in), PMC 2025", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11745944/" },
      { label: "ClinicalTrials.gov: SPLASH (NCT04647526)", url: "https://clinicaltrials.gov/study/NCT04647526" },
    ],
    related: ["pluvicto", "lu177-psma-it"],
  },
  {
    id: "tlx-591",
    kind: "drug",
    name: "Lutetium-177 rosopatamab tetraxetan",
    aka: ["TLX591", "TLX591-Tx", "177Lu-rosopatamab tetraxetan"],
    code: "TLX591",
    modality: "radioimmunotherapy",
    mechanism:
      "A radio-antibody-drug conjugate (rADC): a high-specificity PSMA-targeting monoclonal antibody, linked via a chelator to cytotoxic lutetium-177, given intravenously. Because it is a full antibody rather than a small molecule, it has longer tumour retention and different biodistribution to small-molecule PSMA radioligands, with lower observed uptake in kidneys, salivary and lacrimal glands.",
    tldr:
      "A cancer-targeting antibody carrying a radioactive metal is being tested as a two-dose treatment for advanced prostate cancer, on top of the usual hormone or chemotherapy drugs.",
    summary:
      "TLX591 (INN lutetium Lu 177 rosopatamab tetraxetan; also referred to as TLX591-Tx) is Telix Pharmaceuticals' lead PSMA-targeted radio-antibody-drug conjugate for metastatic castration-resistant prostate cancer (mCRPC). Unlike small-molecule PSMA ligands (e.g. PSMA-617, PSMA-I&T), TLX591 uses a full-length PSMA-targeting monoclonal antibody, given as two 76 mCi intravenous infusions 14 days apart; its hepatic (rather than renal) clearance means long-term follow-up has not shown significant acute or delayed nephrotoxicity.\n\nBy the ProstACT SELECT trial (NCT04786847), 242 patients had been treated with TLX591 across eight phase 1/2 studies; SELECT itself reported a median radiographic progression-free survival of 8.8 months in 23 evaluable mCRPC patients, and an earlier single-arm phase 2 study reported 42.3-month overall survival in 17 patients dosed under a fractionated regimen with concurrent docetaxel.\n\nThe pivotal phase 3 ProstACT Global trial (ClinicalTrials.gov NCT06520345) compares TLX591-Tx plus standard of care (abiraterone, enzalutamide or docetaxel) against standard of care alone in PSMA-positive mCRPC patients who progressed on one prior ARPI, with an initial 36-patient safety/dosimetry lead-in (Part 1) followed by a 2:1 randomised expansion (Part 2, target enrolment approximately 490). Part 1 results (reported March 2026) showed an acceptable safety and tolerability profile across all three standard-of-care combination cohorts, with no new safety signals; the main non-haematological toxicities were fatigue, nausea and dry mouth, and haematological toxicity (thrombocytopenia, neutropenia) was transient and manageable. Part 2 is enrolling in Australia, New Zealand, Canada, Türkiye, the UK and other jurisdictions; TLX591 has not yet received marketing authorisation anywhere.",
    status: "phase-3",
    asOf: "2026-09-22",
    dosing: {
      route: "Intravenous infusion",
      schedule: "Two doses of 76 mCi, 14 days apart, per treatment course",
      source: "https://telixpharma.com/wp-content/uploads/2024/05/TLX_ProstACT_SELECT_Study_of_TLX591_rADC_Therapy_Positive_rPFS.pdf",
    },
    companies: ["telix"],
    targets: ["psma"],
    indications: ["prostate-mcrpc"],
    trials: ["nct06520345"],
    technologies: ["radioimmunotherapy"],
    tags: ["PSMA", "radio-antibody-drug conjugate", "prostate cancer", "phase 3"],
    links: [
      { label: "Telix: first patient dosed in ProstACT GLOBAL Phase 3", url: "https://telixpharma.com/news-views/first-patient-dosed-in-phase-iii-prostact-global-study-of-antibody-based-prostate-cancer-therapy-candidate-tlx591/" },
      { label: "Telix: ProstACT Global Part 1 achieves primary objectives, 9 March 2026", url: "https://telixpharma.com/news-views/prostact-global-phase-3-study-part-1-achieves-primary-objectives/" },
      { label: "Telix: positive rPFS data from ProstACT SELECT trial", url: "https://telixpharma.com/wp-content/uploads/2024/05/TLX_ProstACT_SELECT_Study_of_TLX591_rADC_Therapy_Positive_rPFS.pdf" },
      { label: "ClinicalTrials.gov: ProstACT Global (NCT06520345)", url: "https://clinicaltrials.gov/study/NCT06520345" },
    ],
    related: ["illuccix", "pluvicto"],
  },
  {
    id: "pb-212-vmt-alpha-net",
    kind: "drug",
    name: "Lead-212 VMT-alpha-NET",
    aka: ["212Pb-VMT-alpha-NET", "[212Pb]VMT-α-NET", "203Pb-VMT-alpha-NET (imaging analogue)"],
    code: "VMT-alpha-NET",
    modality: "alpha therapy",
    mechanism:
      "A somatostatin receptor subtype 2 (SSTR2)-targeting peptide that can be radiolabelled either with lead-203 (a gamma emitter, for SPECT imaging and dosimetry planning) or with lead-212 (an in-vivo alpha-emitter generator via its decay chain), delivering high-linear-energy-transfer alpha radiation directly to SSTR2-expressing neuroendocrine tumour cells.",
    tldr:
      "A drug that targets a marker on neuroendocrine tumour cells is being tested with two versions of a radioactive metal: one lets doctors see where the tumour is on a scan, and the other delivers a strong, short-range dose of radiation to kill the tumour cells.",
    summary:
      "VMT-alpha-NET is Perspective Therapeutics' targeted alpha-particle therapy (TAT) programme for somatostatin receptor subtype 2 (SSTR2)-expressing neuroendocrine tumours (NETs), pheochromocytoma/paraganglioma and meningioma. The same peptide is labelled with lead-203 for SPECT/CT imaging (used to plan a patient-specific kidney radiation-dose limit) and with the alpha-emitting isotope lead-212 for therapy.\n\nThe ongoing multicentre, open-label phase 1/2a trial (ClinicalTrials.gov NCT05636618) is a dose-escalation and dose-expansion study in up to about 300 adult, PRRT-naive patients with unresectable or metastatic SSTR2-positive NETs, bronchial NETs, pheochromocytoma/paraganglioma, or meningioma; dosing is by intravenous infusion roughly every 8 weeks. The FDA granted Fast Track designation in September 2022 for SSTR2-positive NETs regardless of prior treatment. A separate single-centre phase 1 study in PRRT-refractory patients (NCT06148636) is under way at the University of Iowa.\n\nInterim data presented at ASCO-GI and AACR in 2026 (data cut-offs through April 2026) reported, across dose cohorts up to 64 patients, no dose-limiting toxicities, treatment-related discontinuations or grade 5 events, with grade 3+ adverse events in roughly a third of patients (mostly non-renal, non-myelosuppressive); in evaluable patients from the lower dose cohorts, 76% remained progression-free and alive, and an objective response rate of about 39-44% (RECIST v1.1) was reported in Cohort 2 (5 mCi per dose). VMT-alpha-NET has not received marketing authorisation in any jurisdiction; the programme is still determining its recommended phase 2 dose.",
    status: "phase-2",
    asOf: "2026-09-22",
    dosing: {
      route: "Intravenous infusion",
      schedule: "Dose-escalation cohorts from 2.5 to 6.0 mCi per dose, approximately every 8 weeks, up to 4 administrations",
      source: "https://www.globenewswire.com/news-release/2026/04/20/3276793/0/en/perspective-therapeutics-presents-updated-interim-data-of-212pb-vmt-%CE%B1-net-in-its-ongoing-phase-1-2a-clinical-trial-at-the-2026-aacr-annual-meeting.html",
    },
    companies: ["perspective-therapeutics"],
    targets: ["sstr2"],
    indications: ["neuroendocrine"],
    trials: ["nct05636618"],
    technologies: ["targeted-alpha-therapy"],
    tags: ["alpha therapy", "SSTR2", "neuroendocrine tumours", "lead-212", "phase 1/2"],
    links: [
      { label: "Perspective Therapeutics: VMT-alpha-NET pipeline page", url: "https://perspectivetherapeutics.com/pipeline/vmt-alpha-net" },
      { label: "ClinicalTrials.gov: NCT05636618", url: "https://clinicaltrials.gov/study/NCT05636618" },
      { label: "Perspective Therapeutics: updated interim data at AACR 2026", url: "https://www.globenewswire.com/news-release/2026/04/20/3276793/0/en/perspective-therapeutics-presents-updated-interim-data-of-212pb-vmt-%CE%B1-net-in-its-ongoing-phase-1-2a-clinical-trial-at-the-2026-aacr-annual-meeting.html" },
      { label: "Perspective Therapeutics: first patient dosed press release, 2023", url: "https://perspectivetherapeutics.com/pr/perspective-therapeutics-announces-first-patient-dosed-in-a-phase-1-study-of-212pbvmtnet-to-treat-refractory-or-relapsedneuroendocrine-tumors" },
    ],
    related: ["alphamedix", "itm-11", "lutathera"],
  },
  {
    id: "lu-177-dotatate-generic",
    kind: "drug",
    name: "Lutetium-177 dotatate (radioligand equivalent)",
    aka: ["Bexlutry", "generic lutetium Lu 177 dotatate"],
    brand: "Bexlutry",
    modality: "radioligand therapy",
    mechanism:
      "A somatostatin analogue (DOTATATE) labelled with beta-emitting lutetium-177, delivering targeted radiation to somatostatin receptor-positive neuroendocrine tumour cells; chemically and biologically the same active ingredient as Lutathera, approved through the FDA's 505(b)(2) route as a radioligand equivalent rather than through a new pivotal efficacy trial.",
    tldr:
      "A second, cheaper version of an already-approved radioactive drug for neuroendocrine tumours has been approved, using the same active radioactive ingredient as the original but made by a different company.",
    summary:
      "Bexlutry (lutetium Lu 177 dotatate injection), from Curium, is the first product the FDA has approved as a 'radioligand equivalent' of an existing radiopharmaceutical: it has the same active radiopharmaceutical ingredient as Novartis/Advanced Accelerator Applications' Lutathera. The FDA approved it on 14 September 2026 for adults with somatostatin receptor-positive gastroenteropancreatic neuroendocrine tumours (GEP-NETs), spanning foregut, midgut and hindgut tumours.\n\nCurium filed under the FDA's 505(b)(2) pathway in July 2024, relying on published evidence and bridging data demonstrating a similar biological and chemical profile to Lutathera rather than running a new phase 3 trial. Approval followed a June 2026 court decision that cleared Curium of patent-infringement claims brought by Novartis. Unlike Lutathera, whose US label also covers paediatric patients aged 12 and older, Bexlutry's approval is adult-only.\n\nBexlutry is immediately available for prescribing in the US. A second lutetium dotatate candidate, Lantheus's PNT2003, received FDA tentative approval in March 2026 under the abbreviated new drug application (ANDA) pathway but is not yet launched; separately, ITM's related product 177Lu-edotreotide (ITM-11) received an FDA complete response letter in August 2026 over manufacturing and third-party facility issues unrelated to its clinical data. Bexlutry's approval is the first time a radioligand therapy for cancer has faced this kind of direct, lower-cost competition in the US market.",
    status: "approved",
    asOf: "2026-09-22",
    approvals: [
      { region: "US", year: 2026, indication: "Somatostatin receptor-positive gastroenteropancreatic neuroendocrine tumours (GEP-NETs), including foregut, midgut and hindgut tumours, in adults", note: "Approved via the FDA 505(b)(2) pathway as a radioligand equivalent of Lutathera, 14 September 2026" },
    ],
    companies: ["curium"],
    targets: ["sstr2"],
    indications: ["neuroendocrine", "pancreatic-net", "small-intestinal-net"],
    technologies: ["radioligand-therapy", "prrt"],
    tags: ["radioligand therapy", "generic", "neuroendocrine tumours", "beta emitter"],
    links: [
      { label: "Curium: FDA approval of BEXLUTRY, 14 September 2026", url: "https://www.curiumpharma.com/2026/09/14/fda-approval-bexlutry/" },
      { label: "FiercePharma: FDA approves first radioligand equivalent", url: "https://www.fiercepharma.com/pharma/fda-approves-first-radioligand-equivalent-curiums-copycat-novartis-lutathera" },
      { label: "MedPath: FDA approves Curium's Bexlutry, first generic radioligand", url: "https://trial.medpath.com/news/fda-approves-curium-s-bexlutry-first-generic-radioligand-challenging-lutathera-s-gep-net-monopoly" },
    ],
    related: ["lutathera", "itm-11"],
  },
  {
    id: "i-125-seeds",
    kind: "drug",
    name: "Iodine-125 brachytherapy seeds",
    aka: ["I-125 seeds", "125I permanent seed implants"],
    modality: "brachytherapy source",
    mechanism:
      "Titanium-encapsulated seeds containing iodine-125, a low-energy gamma/X-ray emitter with a 59.4-day physical half-life, are permanently implanted (typically transperineally into the prostate under ultrasound guidance) to deliver low-dose-rate radiation from within the tumour over several months.",
    tldr:
      "Tiny metal seeds containing a mildly radioactive form of iodine are permanently placed inside a tumour, most often the prostate, where they slowly release radiation over several months and then become harmless.",
    summary:
      "Iodine-125 brachytherapy seeds are titanium-encapsulated radionuclide sources used mainly for permanent low-dose-rate (LDR) interstitial brachytherapy of localised prostate cancer, and also for other accessible tumours of the head and neck, lung, pancreas and elsewhere, either as primary treatment or for residual disease after surgery. In the US, seeds such as Theragenics' I-Seed, Implant Sciences' I-Plant and similar products are cleared through the FDA's 510(k) premarket notification pathway (product code KXK, 21 CFR 892.5730) as substantially equivalent to earlier cleared brachytherapy sources; brachytherapy as a procedure does not itself require separate FDA approval.\n\nIodine-125 has a 59.4-day physical half-life and a mean photon energy of about 28 keV. For prostate monotherapy, published series correlate a minimum dose covering 90% of the prostate volume (D90) of at least 140 Gy with improved biochemical control; when combined with external-beam radiotherapy the typical prescription is lower, around 108-110 Gy. Seeds are implanted transperineally under transrectal ultrasound (and sometimes fluoroscopic or CT) guidance, either as loose seeds or linked (so-called stranded seeds) at regular intervals, and remain permanently in place, gradually becoming inert as the isotope decays.\n\nIodine-125 competes with palladium-103 and caesium-131 as LDR prostate brachytherapy isotopes; comparative series have found no clear difference in outcomes between iodine-125 and palladium-103 at three years. Because this is a device/source category with many manufacturers rather than a single branded drug, the record here covers the isotope and its clinical use rather than one company's product.",
    status: "approved",
    asOf: "2026-09-22",
    dosing: {
      route: "Permanent transperineal interstitial implantation (typically prostate), or interstitial/surface application at other sites",
      schedule: "Single permanent implant; monotherapy target D90 approximately 140-160 Gy, or approximately 108-110 Gy when combined with external-beam radiotherapy",
      source: "https://cdn.amegroups.cn/journals/amepc/files/journals/3/articles/18019/public/18019-PB1-3327-R2.pdf",
    },
    indications: ["prostate", "prostate-high-risk"],
    technologies: ["ldr-seed-brachytherapy"],
    tags: ["brachytherapy", "prostate cancer", "gamma/X-ray emitter", "permanent implant"],
    links: [
      { label: "FDA 510(k) clearance letter: I-Plant Model 3500 iodine-125 brachytherapy seeds", url: "https://www.accessdata.fda.gov/cdrh_docs/pdf2/k023242.pdf" },
      { label: "Prostate brachytherapy review, Translational Andrology and Urology 2018", url: "https://cdn.amegroups.cn/journals/amepc/files/journals/3/articles/18019/public/18019-PB1-3327-R2.pdf" },
    ],
    related: [],
  },
  {
    id: "ac-225-fpi-2068",
    kind: "drug",
    name: "Actinium-225 FPI-2068",
    aka: ["225Ac-FPI-2068", "[225Ac]-FPI-2068"],
    code: "FPI-2068",
    modality: "alpha therapy",
    mechanism:
      "A bispecific, humanised IgG antibody (FPI-2053) that binds both EGFR and cMET, conjugated via a DOTA chelator to the alpha-emitting radioisotope actinium-225. Because it targets two receptors that are co-expressed on tumour cells but not usually together on normal tissue, the antibody is designed to internalise preferentially into tumour cells, delivering alpha particles that cause DNA double-strand breaks.",
    tldr:
      "An antibody engineered to grab onto two markers found together on some solid tumours, but not on healthy cells, carries a powerful short-range radioactive payload into the tumour to try to destroy it.",
    summary:
      "225Ac-FPI-2068 is a bispecific targeted alpha therapy (TAT) from Fusion Pharmaceuticals, developed jointly with AstraZeneca, designed for solid tumours that co-express EGFR and cMET (including head and neck squamous cell carcinoma, non-small cell lung cancer, colorectal cancer and pancreatic ductal adenocarcinoma). It combines the bispecific antibody FPI-2053 with the alpha emitter actinium-225 via a DOTA chelate; an indium-111-labelled version of the same antibody (FPI-2107) is used as a companion imaging and dosimetry tracer, and unlabelled FPI-2053 is given as a pre-dose to optimise biodistribution.\n\nPreclinical data presented at AACR-NCI-EORTC in 2023 showed FPI-2068 bound EGFR/cMET-expressing colorectal and lung cancer cell lines, internalised into tumour cells, and caused prolonged tumour regression (over 28 days) in xenograft models at doses of 370-740 kBq/kg, with evidence of DNA double-strand break formation and apoptosis consistent with its proposed mechanism. The FDA cleared investigational new drug (IND) applications for FPI-2068 and FPI-2107 in April 2023.\n\nA first-in-human phase 1, two-part, dose-escalation trial (ClinicalTrials.gov NCT06147037) opened in July 2024 across US and Canadian sites, evaluating safety, tolerability, dosimetry, biodistribution and pharmacokinetics in adults with advanced EGFR/cMET-co-expressing solid tumours; Part A optimises the FPI-2053 pre-dose and Part B escalates the actinium-225 dose. As of the most recent public update (October 2025), no human efficacy or safety results had been reported; the study's estimated primary completion is December 2026/2027.",
    status: "phase-1",
    asOf: "2026-09-22",
    companies: ["fusion-pharma", "astrazeneca"],
    technologies: ["targeted-alpha-therapy"],
    tags: ["alpha therapy", "bispecific antibody", "EGFR", "cMET", "actinium-225", "phase 1"],
    notes: [
      "EGFR and cMET are not yet represented as target records in this graph, so no targets[] link is made here; add them once those target records exist.",
    ],
    links: [
      { label: "Fusion Pharmaceuticals: AACR-NCI-EORTC 2023 preclinical poster on FPI-2068", url: "https://fusionpharma.com/wp-content/uploads/2023/10/2068_AACR-poster_2023_Final.pdf" },
      { label: "Fusion Pharmaceuticals: IND clearance for FPI-2068 and FPI-2107, April 2023", url: "https://www.pharmaceutical-technology.com/news/fusion-fda-ind-fpi-2068/" },
      { label: "ClinicalTrials.gov: NCT06147037", url: "https://clinicaltrials.gov/study/NCT06147037" },
    ],
    related: ["fpi-2265"],
  },
];
