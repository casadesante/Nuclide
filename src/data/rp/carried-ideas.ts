/**
 * Ideas: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedIdeas: EntityInput[] = [
  {
    "kind": "idea",
    "asOf": "2026-09-04",
    "id": "idea-alpha-after-adc",
    "name": "Alpha radioligands after ADC failure",
    "maturity": "speculative",
    "tldr": "When ADCs against a surface protein stop working because the payload no longer kills, use the same protein to deliver radiation instead.",
    "summary": "When ADCs against a surface protein stop working because the payload no longer kills, this idea uses the same protein to deliver radiation instead. Antigen often persists after ADC failure with resistance at the payload level, so a 225Ac- or 177Lu-labelled anti-TROP2 or anti-HER2 antibody would bypass efflux, TOP1 mutations and SLFN11 loss, and crossfire would cover antigen-heterogeneous neighbours. The test is a phase 1 of a HER2 or TROP2 radioimmunoconjugate in ADC-refractory breast cancer, with antigen PET selection and dosimetry. Speculative in maturity, it complements Payload-class switching as the rule for ADC sequencing and draws on radio-antibody and radio-ADC, targeted alpha therapy and TROP2 PET.",
    "hypothesis": "225Ac- or 177Lu-labelled anti-TROP2 or anti-HER2 antibodies produce responses in patients progressing on TROP2 or HER2 ADCs with retained antigen expression on PET.",
    "rationale": "Radiation cytotoxicity is independent of drug efflux and payload-specific resistance; crossfire covers antigen-heterogeneous neighbours.",
    "test": "Run a phase 1 of a HER2 or TROP2 radioimmunoconjugate in ADC-refractory breast cancer with antigen PET selection and dosimetry.",
    "technologies": [
      "radioimmunotherapy",
      "targeted-alpha-therapy",
      "trop2-pet"
    ],
    "targets": [
      "trop2",
      "her2",
      "b7h3"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-06",
    "id": "idea-alpha-first-mhspc",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT04720157: PSMAddition",
        "url": "https://clinicaltrials.gov/study/NCT04720157"
      }
    ],
    "name": "Alpha-emitting PSMA therapy at first metastatic diagnosis",
    "maturity": "speculative",
    "tldr": "If Pluvicto helps at first diagnosis, an alpha version might do more against microscopic disease, when tumour burden is smallest.",
    "summary": "This speculative idea would give alpha-emitting PSMA therapy with actinium-225 at the first metastatic diagnosis of hormone-sensitive prostate cancer, alongside hormone therapy. Short-range alpha emission suits small-volume disease and is oxygen-independent, and early treatment avoids the PSMA heterogeneity of castration resistance; PSMAddition established beta-emitter therapy here. The hypothesis is deeper PSA nadirs and longer radiographic progression-free survival than lutetium-177 PSMA-617 at equal or lower salivary dose; salivary toxicity and actinium-225 supply are limiting. The test is a randomised phase 2 with PSMA PET-based dosimetry, salivary gland protection and the undetectable-PSA rate at one year as primary endpoint.",
    "hypothesis": "225Ac-PSMA added to ADT + ARPI in high-volume de novo mHSPC produces deeper PSA nadirs and longer rPFS than 177Lu-PSMA-617 at equal or lower cumulative salivary dose.",
    "rationale": "Short-range alpha emission suits small-volume disease; early treatment avoids PSMA heterogeneity that develops under castration resistance.",
    "test": "Phase 2 randomised 225Ac-PSMA vs 177Lu-PSMA-617 in mHSPC with PSMA PET-based dosimetry, salivary gland protection, and undetectable-PSA rate at 12 months as primary.",
    "technologies": [
      "targeted-alpha-therapy",
      "radioligand-therapy"
    ],
    "drugs": [
      "ac225-psma",
      "pluvicto"
    ],
    "indications": [
      "prostate"
    ],
    "trials": [
      "psmaddition"
    ],
    "terms": [
      "alpha-vs-beta",
      "dosimetry"
    ]
  },
  {
    "id": "idea-caix-theranostics",
    "links": [
      {
        "label": "Shuch et al., ZIRCON: 89Zr-girentuximab PET-CT imaging of clear-cell renal cell carcinoma (Lancet Oncology 2024)",
        "url": "https://doi.org/10.1016/S1470-2045(24)00402-9"
      }
    ],
    "kind": "idea",
    "name": "CAIX theranostics: 89Zr-girentuximab PET and 177Lu/225Ac-girentuximab therapy",
    "maturity": "early-clinical",
    "asOf": "2026-09-07",
    "tldr": "Almost every clear-cell kidney cancer carries the CAIX protein. Image it with one radioactive antibody, then treat with the same antibody carrying a therapeutic isotope.",
    "summary": "Nearly every clear-cell renal cell carcinoma expresses carbonic anhydrase IX as a direct consequence of VHL loss, so the antigen is near-universal and stable. This theranostic idea images it with 89Zr-girentuximab PET, validated for diagnosis in ZIRCON, and then treats with the same antibody carrying 177Lu for beta emission or 225Ac for targeted alpha therapy. The rationale combines a stable target, the PSMA precedent in prostate cancer, and radiation-induced immunogenic cell death in a cancer that already responds to immunotherapy. STARLITE-1 and STARLITE-2 are testing 177Lu-girentuximab with nivolumab or cabozantinib, and the proposed test is a randomised phase 2 of 177Lu-girentuximab plus nivolumab versus nivolumab alone; Telix Pharmaceuticals is the linked company.",
    "hypothesis": "177Lu- or 225Ac-girentuximab produces objective responses in ≥25% of heavily pretreated clear-cell RCC patients selected by CAIX PET, and synergises with PD-1 blockade.",
    "rationale": "Stable antigen, theranostic pairing proven in prostate cancer (PSMA), and radiation-induced immunogenic cell death in an immunotherapy-responsive tumour.",
    "test": "Randomised phase 2 of 177Lu-girentuximab + nivolumab vs nivolumab after IO-TKI progression, PET-selected.",
    "indications": [
      "rcc"
    ],
    "technologies": [
      "caix-pet",
      "radioligand-therapy",
      "targeted-alpha-therapy",
      "radioimmunotherapy"
    ],
    "companies": [
      "telix"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-04",
    "id": "idea-cd8-pet-io",
    "links": [
      {
        "label": "Farwell et al., CD8-targeted PET imaging of tumour-infiltrating T cells in patients with cancer: a phase 1 first-in-human study of 89Zr-Df-IAB22M2C (Journal of Nuclear Medicine 2021)",
        "url": "https://doi.org/10.2967/jnumed.121.262485"
      }
    ],
    "name": "CD8 PET to stop or switch immunotherapy early",
    "maturity": "early-clinical",
    "tldr": "Scan for T cells inside the tumour a few weeks after starting immunotherapy. If they have not arrived, change course.",
    "summary": "Scan for T cells inside the tumour a few weeks after starting immunotherapy, and change course if they have not arrived. Tracers such as 89Zr-crefmirlimab, a CD8 minibody, and 18F-AraG image T-cell infiltration and activation, and an early increase has tracked response in phase 2 studies. Response to checkpoint blockade requires T-cell infiltration, CT changes lag by months and pseudoprogression confounds RECIST, so an absent CD8 PET signal at week 4 could identify non-responders early. The test is a prospective trial in NSCLC or melanoma with week-4 CD8 PET, randomising PET non-responders to continue or switch. At early-clinical maturity it addresses the bottleneck No one can predict who responds to immunotherapy.",
    "hypothesis": "Absence of CD8 PET increase at week 4 identifies non-responders with >85% specificity, enabling early switch to alternative therapy.",
    "rationale": "Response to checkpoint blockade requires T-cell infiltration; CT changes lag by months; pseudoprogression confounds RECIST.",
    "test": "Run a prospective trial in NSCLC or melanoma with week-4 CD8 PET; randomise PET-non-responders to continue vs switch.",
    "technologies": [
      "immuno-pet"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-04",
    "id": "idea-fap-theranostics-pancancer",
    "links": [
      {
        "label": "Kratochwil et al., 68Ga-FAPI PET/CT: tracer uptake in 28 different kinds of cancer (Journal of Nuclear Medicine 2019)",
        "url": "https://doi.org/10.2967/jnumed.119.227967"
      }
    ],
    "name": "FAP theranostics as a pan-cancer stromal strategy",
    "maturity": "early-clinical",
    "tldr": "Instead of finding a different target for each cancer, hit the scaffolding cells that almost all solid tumours share.",
    "summary": "Rather than finding a different target for each cancer, this idea hits the cancer-associated fibroblasts that almost all solid tumours share. FAP-targeted alpha or beta radioligands such as FAP-2286 would be given to FAPI-PET-avid pancreatic, gastric and sarcoma patients irrespective of tumour-cell genotype, delivering radiation to the stroma with crossfire into adjacent tumour cells and depleting the fibroblasts that exclude T cells. Stroma is genetically stable, so resistance mutations are not expected. The test is phase 2 FAP-2286 cohorts selected by FAPI PET, with paired biopsies and a PD-1 combination in pancreatic cancer. At early-clinical maturity it addresses the bottleneck Cold tumours and the immunosuppressive microenvironment.",
    "hypothesis": "FAP-targeted alpha or beta radioligands produce disease control in FAPI-PET-avid pancreatic, gastric, and sarcoma patients irrespective of tumour-cell genotype, and sensitise to immunotherapy by depleting immunosuppressive fibroblasts.",
    "rationale": "Stroma is genetically stable (no resistance mutations); crossfire range of 177Lu (2 mm) covers adjacent tumour cells; CAF depletion relieves T-cell exclusion.",
    "test": "Phase 2 FAP-2286 cohorts with FAPI PET selection and paired biopsies for CAF depletion and T-cell infiltration; combination with PD-1 in pancreatic cancer.",
    "technologies": [
      "fapi-pet",
      "radioligand-therapy",
      "targeted-alpha-therapy"
    ],
    "targets": [
      "fap"
    ],
    "drugs": [
      "fap-2286"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-08",
    "id": "idea-fund-academic-radiopharma-pipeline",
    "name": "A university cyclotron network with shared regulatory files for new tracers",
    "maturity": "early-clinical",
    "actor": "research",
    "cost": "medium",
    "horizonYears": 4,
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "tldr": "Most new cancer imaging agents and radioactive drugs start in university hospitals. A network sharing production, quality files and regulatory paperwork would get them into multi-centre trials years faster.",
    "summary": "Academic radiopharmacy has repeatedly produced the agents the field now runs on (PSMA ligands and FAPI tracers from Heidelberg, DOTATATE from Basel and Rotterdam) but each centre re-creates production, quality control and regulatory documentation. A funded network of university cyclotrons and radiopharmacies would share drug master files, validated synthesis modules, GMP quality systems and a common clinical trial application template, so a tracer validated in one centre can be adopted in ten within months. It would also provide isotope purchasing at scale (gallium-68 generators, lutetium-177, actinium-225 allocation) for academic trials.",
    "hypothesis": "A shared network reduces the time from first-in-human of an academic tracer or radioligand to a five-centre trial from the current several years to under eighteen months, and doubles the number of academic radiopharmaceuticals entering multi-centre trials within four years.",
    "rationale": "PSMA PET spread globally because academic centres shared precursors and methods informally; formalising that with shared regulatory files removes the largest delay. Germany's and the Netherlands' academic radiopharmacy networks demonstrate feasibility within a country.",
    "test": "Fund a ten-centre network with a shared master file for two agents and measure time to multi-centre trial start and centres activated compared with agents developed without the network.",
    "technologies": [
      "psma-pet",
      "fapi-pet",
      "radioligand-therapy",
      "targeted-alpha-therapy"
    ],
    "institutions": [
      "heidelberg-nct",
      "peter-mac"
    ],
    "people": [
      "uwe-haberkorn",
      "frederik-giesel",
      "hofman-michael"
    ],
    "related": [
      "idea-fap-theranostics-pancancer",
      "radiopharma-roadmap"
    ],
    "links": [
      {
        "label": "Bottleneck evidence (The valley of death between lab and product): Butler, Translational research: crossing the valley of death (Nature 2008)",
        "url": "https://doi.org/10.1038/453840a"
      }
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-04",
    "id": "idea-mced-plus-fapi",
    "links": [
      {
        "label": "PATHFINDER: the first prospective test of a multi-cancer blood test in people without symptoms (The Lancet 2023)",
        "url": "https://doi.org/10.1016/S0140-6736(23)01700-2"
      }
    ],
    "name": "FAPI PET as the workup for MCED positives",
    "maturity": "speculative",
    "tldr": "When a blood test says 'cancer signal, origin unclear', a FAPI PET scan may find it where FDG cannot.",
    "summary": "When a blood test reports a cancer signal of unclear origin, this idea sends the patient for FAPI PET/CT rather than FDG PET as the first-line work-up. Many MCED-positive patients have no cancer found on standard imaging, which creates anxiety and cost, whereas FAPI PET is more sensitive than FDG in pancreatic, gastric, low-grade and peritoneal disease, exactly the cancers MCED promises to catch, and has low background in liver, brain and bowel. The test is a prospective diagnostic study nested in a Galleri deployment such as the NHS or a PATHFINDER-like cohort, randomising FDG versus FAPI PET. Speculative in maturity, it addresses the bottleneck The hardest cancers are found late and is linked from the ideas on a 28-day MCED-positive resolution pathway and whole-population interception.",
    "hypothesis": "FAPI PET/CT increases the cancer detection rate and reduces time to diagnosis in MCED-positive, FDG-negative or tissue-of-origin-uncertain patients.",
    "rationale": "Complementary biology (stroma vs glucose); FAPI has low background in liver, brain, and bowel.",
    "test": "Prospective diagnostic study nested in a Galleri deployment (e.g., NHS or PATHFINDER-like) randomising FDG vs FAPI PET as first-line workup.",
    "technologies": [
      "fapi-pet",
      "fdg-pet"
    ],
    "targets": [
      "fap"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-07",
    "id": "idea-mfbg-pet-replaces-mibg",
    "links": [
      {
        "label": "Pandit-Taskar et al., Biodistribution and dosimetry of 18F-meta-fluorobenzylguanidine: a first-in-human PET study (Journal of Nuclear Medicine 2017)",
        "url": "https://doi.org/10.2967/jnumed.117.193169"
      }
    ],
    "name": "18F-MFBG PET replacing 123I-MIBG scintigraphy",
    "maturity": "early-clinical",
    "tldr": "A same-day PET tracer could replace the two-day, low-resolution MIBG scan children now undergo repeatedly.",
    "summary": "Children with neuroblastoma repeatedly undergo 123I-MIBG scintigraphy, a two-day, low-resolution scan, and this idea proposes replacing it with same-day 18F-MFBG PET. 18F-meta-fluorobenzylguanidine uses the same norepinephrine-transporter biology as MIBG but gains PET resolution and 18F logistics, needs no sedation across two days, and early data show higher lesion detection. The hypothesis is that MFBG PET/CT detects more lesions than MIBG SPECT with equal specificity, and that Curie-type scoring on MFBG predicts outcome at least as well. Prospective paired comparisons are under way at MSK and in COG imaging studies and an NDA is in progress; at an early clinical stage, it sits within the paediatric oncology roadmap alongside the MIBG theranostics and PET records.",
    "hypothesis": "18F-MFBG PET/CT detects more lesions than 123I-MIBG SPECT with equal specificity, and Curie-type scoring on MFBG predicts outcome at least as well.",
    "rationale": "MFBG uses the same norepinephrine-transporter biology as MIBG but with PET resolution and 18F logistics.",
    "test": "Paired prospective comparison in newly diagnosed and relapsed patients; response prediction analysis.",
    "technologies": [
      "mibg-theranostics",
      "pet"
    ],
    "indications": [
      "neuroblastoma"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-07",
    "id": "idea-net-antagonist-ligands",
    "links": [
      {
        "label": "Reidy-Lagunes et al., Phase 1 trial of the SSTR antagonist radioligand 177Lu-satoreotide tetraxetan in neuroendocrine tumours (Clinical Cancer Research 2019)",
        "url": "https://doi.org/10.1158/1078-0432.CCR-19-1026"
      }
    ],
    "name": "SSTR antagonist radioligands to increase tumour dose",
    "maturity": "early-clinical",
    "tldr": "Radioligand therapy for neuroendocrine tumours built on somatostatin receptor antagonists rather than the agonists used today: antagonists bind the receptor in every state and are not internalised, so they occupy several times more sites per cell and deliver more radiation per dose. The test is a randomised phase 2 against agonist lutetium therapy.",
    "summary": "The idea is to build peptide receptor radionuclide therapy for neuroendocrine tumours on somatostatin receptor 2 antagonists rather than the agonists used today. Antagonists bind receptors in every conformational state and are not internalised, so they occupy several times more binding sites on each cell and deliver more radiation per dose. First-in-human studies of the antagonist 177Lu-satoreotide tetraxetan showed higher tumour uptake and dose than agonists, and early trials report responses in patients refractory to agonist PRRT. The hypothesis is higher response rates at an equivalent renal dose, including in tumours with low SSTR2 expression; the test is a randomised phase 2 of antagonist versus agonist 177Lu-PRRT in grade 1 to 2 gastroenteropancreatic NETs.",
    "hypothesis": "Antagonist PRRT achieves higher response rates than agonist PRRT at equivalent renal dose, including in low-SSTR-expressing tumours.",
    "rationale": "Antagonists bind receptors in all conformational states and are not internalised, increasing binding sites several-fold.",
    "test": "Randomised phase 2 antagonist vs agonist 177Lu-PRRT in grade 1-2 GEP-NETs.",
    "technologies": [
      "prrt"
    ],
    "targets": [
      "sstr2"
    ],
    "indications": [
      "neuroendocrine"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-07",
    "id": "idea-net-dosimetry-prrt",
    "links": [
      {
        "label": "ClinicalTrials.gov NCT03049189: COMPETE",
        "url": "https://clinicaltrials.gov/study/NCT03049189"
      }
    ],
    "name": "Dosimetry-personalised PRRT instead of four fixed cycles",
    "maturity": "early-clinical",
    "tldr": "Measure the radiation each patient's tumour and kidneys actually absorb and adjust the number and size of doses, instead of giving everyone four identical cycles.",
    "summary": "The idea is to personalise peptide receptor radionuclide therapy with lutetium-177 dotatate or 177Lu-edotreotide by measuring the radiation each patient's tumour, kidneys and marrow actually absorb on SPECT/CT after each cycle, and adjusting the number and size of doses. The standard of 7.4 GBq for four cycles leaves many patients under-dosed relative to renal and marrow limits, uptake varies widely, and retrospective dosimetry shows tumour absorbed dose correlates with response. The hypothesis is that dosimetry-guided PRRT raises cumulative tumour dose and response rate without exceeding organ limits. The test is a randomised phase 2 of individualised versus fixed activity; P-PRRT in Canada is already testing this, and the idea addresses the wrong-doses bottleneck.",
    "hypothesis": "Dosimetry-guided PRRT increases cumulative tumour dose and response rate without exceeding renal/marrow limits, versus fixed dosing.",
    "rationale": "Wide inter-patient variation in uptake; SPECT/CT after each cycle makes dosimetry feasible.",
    "test": "Randomised phase 2 of individualised vs fixed activity with ORR and PFS endpoints.",
    "technologies": [
      "prrt",
      "spect"
    ],
    "terms": [
      "dosimetry"
    ],
    "drugs": [
      "lutathera",
      "itm-11"
    ],
    "indications": [
      "neuroendocrine"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-06",
    "id": "idea-psma-pet-guided-mdt",
    "links": [
      {
        "label": "ORIOLE: observation versus stereotactic ablative radiation for oligometastatic prostate cancer (JAMA Oncology 2020)",
        "url": "https://doi.org/10.1001/jamaoncol.2020.0147"
      }
    ],
    "name": "PSMA-PET-guided metastasis-directed therapy as a curative strategy in oligorecurrent prostate cancer",
    "maturity": "being-tested-at-scale",
    "tldr": "When PSMA PET finds only a few spots after surgery, zap each spot with focused radiation and delay or avoid lifelong hormone therapy.",
    "summary": "The idea is to use PSMA PET after prostate surgery to find the few sites of recurrence and treat each with stereotactic radiotherapy plus short-course androgen deprivation. The oligometastatic state is real in prostate cancer, the radiotherapy is ablative and cheap, and PSMA PET removes the staging blind spot that undermined older trials such as ORIOLE and STOMP. The hypothesis is better metastasis-free and ADT-free survival than systemic therapy alone, though whether it changes survival or merely postpones hormone therapy is unproven. The test is a randomised phase 3 with PSMA PET at baseline and progression and ctDNA as a stratifier; PEACE V/STORM and NRG GU011 are under way, so it is being tested at scale.",
    "hypothesis": "PSMA-PET-directed SBRT to ≤5 metastases, with short-course ADT, improves metastasis-free and ADT-free survival versus systemic therapy alone in oligorecurrent disease.",
    "rationale": "Oligometastatic state is real in prostate cancer; SBRT is ablative and cheap; PSMA PET removes the staging blind spot that undermined older trials.",
    "test": "Randomised phase 3 with PSMA PET at baseline and progression, ADT-free survival and MFS endpoints, ctDNA and PSMA-PET total-volume as stratifiers.",
    "technologies": [
      "psma-pet"
    ],
    "indications": [
      "prostate"
    ],
    "terms": [
      "oligometastatic",
      "biochemical-recurrence"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-08",
    "id": "idea-reg-ac225-accelerator-pharmacopoeia",
    "name": "Regional cyclotron hubs for actinium-225 with an agreed actinium-227 impurity limit",
    "maturity": "early-clinical",
    "tldr": "Actinium-225 can be made in particle accelerators, but the product contains a trace of a long-lived impurity that regulators have not agreed how to handle. Settle the limit and build the hubs.",
    "summary": "Proton irradiation of radium-226 yields actinium-225 with a small admixture of actinium-227 (half-life 21.8 years), while electron linac photonuclear and high-energy spallation routes differ in impurity profile. Without a harmonised monograph, each producer negotiates specifications with each regulator, slowing investment. The proposal is a joint European, US and Japanese pharmacopoeia monograph setting actinium-227 and other radionuclidic impurity limits based on dosimetry and waste handling, paired with public co-investment in three to five regional cyclotron or linac hubs sized for clinical supply.",
    "hypothesis": "A harmonised monograph published within two years is followed by at least three accelerator producers reaching GMP supply, and clinical trial sponsors report isotope supply as the limiting factor in fewer than 10% of alpha therapy trials, down from the majority today.",
    "rationale": "Molybdenum-99 supply diversified only when regulators agreed specifications for non-HEU and accelerator-produced material. Investment follows regulatory certainty.",
    "test": "Commission the dosimetric analysis of actinium-227 contamination at candidate limits, convene the pharmacopoeial groups, and track producer investment decisions and trial supply reports before and after publication.",
    "actor": "regulator",
    "cost": "medium",
    "horizonYears": 3,
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "terms": [
      "alpha-vs-beta",
      "dosimetry"
    ],
    "links": [
      {
        "label": "Bottleneck evidence (Manufacturing cost and time for living and radioactive medicines): Hernandez, Prasad & Gellad, Total costs of chimeric antigen receptor T-cell immunotherapy (JAMA Oncology 2018)",
        "url": "https://doi.org/10.1001/jamaoncol.2018.0977"
      }
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-08",
    "id": "idea-reg-alpha-emitter-portfolio",
    "name": "Fund alpha emitters beyond actinium-225: lead-212, terbium-149 and astatine-211",
    "maturity": "preclinical-evidence",
    "tldr": "Almost every alpha cancer therapy in development relies on one scarce isotope. Developing several alternatives at once would stop the whole field waiting on a single supply chain.",
    "summary": "Actinium-225 dominates targeted alpha therapy pipelines, but lead-212 (from thorium-228/radium-224 generators, used by Orano Med and Perspective Therapeutics), astatine-211 (cyclotron-produced, short half-life, suited to regional supply) and terbium-149 have complementary properties and independent supply routes. The proposal is a public-private programme that funds isotope-agnostic chelator and linker chemistry, comparative dosimetry and small head-to-head clinical studies so that a given targeting ligand can be paired with whichever alpha emitter is available, and that de-risks generator and cyclotron capacity for each.",
    "hypothesis": "Within five years at least two alpha emitters other than actinium-225 reach late-stage trials with GMP supply exceeding clinical demand, and the proportion of alpha therapy trials delayed by isotope supply falls below 10%.",
    "rationale": "Diversifying supply has repeatedly been cheaper than expanding a single constrained route; lead-212 generators are already in clinical use and astatine-211 chemistry has matured at several centres.",
    "test": "Award funding to three ligand programmes to produce matched actinium-225, lead-212 and astatine-211 versions and compare biodistribution, dosimetry and manufacturability in first-in-human studies.",
    "actor": "philanthropy",
    "cost": "large",
    "horizonYears": 5,
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "technologies": [
      "targeted-alpha-therapy"
    ],
    "companies": [
      "orano-med",
      "perspective-therapeutics"
    ],
    "terms": [
      "alpha-vs-beta"
    ],
    "links": [
      {
        "label": "Bottleneck evidence (Manufacturing cost and time for living and radioactive medicines): Hernandez, Prasad & Gellad, Total costs of chimeric antigen receptor T-cell immunotherapy (JAMA Oncology 2018)",
        "url": "https://doi.org/10.1001/jamaoncol.2018.0977"
      }
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-08",
    "id": "idea-reg-isotope-supply-observatory",
    "name": "A global medical isotope supply observatory with forecasts and shortage alerts",
    "maturity": "speculative",
    "tldr": "Nobody publishes how much cancer isotope is made, where, or when supply will fall short. A public observatory would let hospitals and investors plan.",
    "summary": "Supply and demand for lutetium-177, actinium-225, iodine-131 and their precursors are opaque; producers guard volumes, and shortages surface only when clinics cancel doses. The proposal is an observatory, hosted by the IAEA or OECD NEA with WHO, that collects confidential production and capacity data from producers under aggregation rules, publishes quarterly supply-demand balances and five-year forecasts, and issues shortage alerts to clinics and regulators. It would also track trial-stage demand so producers can invest ahead of approvals.",
    "hypothesis": "Publication of forecasts is followed by earlier capacity investment decisions (measured by announced projects relative to forecast shortfalls) and a fall in unanticipated clinic-level shortages within three years.",
    "rationale": "Transparent supply data (as in energy and food markets) reduce boom-bust investment and allow health systems to plan; the molybdenum-99 experience showed that opaque supply led to repeated crises.",
    "test": "Establish the observatory for lutetium-177 first, publish two years of quarterly balances, and evaluate accuracy of forecasts and changes in shortage reports.",
    "actor": "data",
    "cost": "small",
    "horizonYears": 2,
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy"
    ],
    "links": [
      {
        "label": "Bottleneck evidence (Manufacturing cost and time for living and radioactive medicines): Hernandez, Prasad & Gellad, Total costs of chimeric antigen receptor T-cell immunotherapy (JAMA Oncology 2018)",
        "url": "https://doi.org/10.1001/jamaoncol.2018.0977"
      }
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-08",
    "id": "idea-reg-legacy-radium-recovery-ac225",
    "name": "Recover legacy radium-226 sources worldwide as the feedstock for actinium-225",
    "maturity": "early-clinical",
    "tldr": "Thousands of old radium sources sit in hospital and industrial storage. They are exactly the raw material needed to make actinium-225, the scarcest cancer isotope.",
    "summary": "Actinium-225 supply from thorium-229 generators (the legacy US and Russian stockpiles) is limited to tens of curies a year, far short of projected demand for alpha radioligand therapy. Accelerator routes (radium-226 irradiated in cyclotrons, linacs or via spallation at TRIUMF) scale with radium feedstock. Radium-226 exists in large quantities in disused brachytherapy sources, industrial gauges and uranium mill tailings, currently classed as waste and expensive to store. The proposal is a coordinated recovery, purification and target-fabrication programme run with the IAEA and national nuclear agencies, offering source holders free disposal in exchange for the material.",
    "hypothesis": "Recovered radium-226 sufficient to supply multiple accelerator producers can be secured within five years at a cost per curie of actinium-225 below the thorium-generator route, lifting global actinium-225 output by an order of magnitude.",
    "rationale": "Radium disposal is already a cost that source holders would pay to avoid, and purification chemistry is established. The binding constraint on the accelerator route is licensed feedstock, not physics.",
    "test": "Inventory recoverable radium-226 in ten countries, run a pilot recovery of 50 grams with one accelerator producer, and price the resulting actinium-225 against current generator supply.",
    "actor": "policy",
    "cost": "medium",
    "horizonYears": 4,
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "technologies": [
      "targeted-alpha-therapy",
      "radioligand-therapy"
    ],
    "drugs": [
      "ac225-psma",
      "ryz101"
    ],
    "companies": [
      "terrapower-isotopes",
      "orano-med"
    ],
    "links": [
      {
        "label": "IAEA on actinium-225 supply",
        "url": "https://www.iaea.org/newscenter/news/actinium-225-production-and-supply"
      }
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-08",
    "id": "idea-reg-medical-isotope-reactor-reserve",
    "name": "A coordinated reserve and shared schedule for the world's medical isotope reactors",
    "maturity": "early-clinical",
    "tldr": "A handful of ageing research reactors make most cancer isotopes. Coordinating their maintenance and funding reserve capacity would prevent the shortages that stop treatments.",
    "summary": "Lutetium-177, iodine-131 and molybdenum-99 depend on a few research reactors (HFR Petten, BR2, MARIA, SAFARI-1, OPAL, several in Russia and the US), most over 50 years old. The OECD Nuclear Energy Agency's High-Level Group on Medical Radioisotopes coordinated molybdenum-99 after the 2009-10 crisis. The proposal is to extend that model formally to therapeutic isotopes: shared outage scheduling, an agreed reserve capacity margin funded by a per-dose levy, and public co-financing of the next generation of producers (PALLAS in the Netherlands, accelerator-based SHINE, new irradiation positions in existing reactors).",
    "hypothesis": "Coordinated scheduling and reserve capacity reduce clinic-reported therapeutic isotope shortage weeks by at least 80% and keep lutetium-177 spot prices stable during planned reactor outages.",
    "rationale": "The molybdenum-99 experience showed that coordination, not new physics, ended a supply crisis; therapeutic isotopes now face the same concentration of supply with faster-growing demand.",
    "test": "Publish a shared outage calendar and reserve-margin target for lutetium-177 producers within a year; track clinic-reported dose cancellations and prices against the prior three years.",
    "actor": "policy",
    "cost": "large",
    "horizonYears": 5,
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "links": [
      {
        "label": "OECD NEA medical radioisotopes",
        "url": "https://www.oecd-nea.org/jcms/pl_26262/medical-radioisotopes"
      }
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-08",
    "id": "idea-reg-regional-radiopharmacy-hubs",
    "name": "Regional radiopharmacy hubs and harmonised transport rules for short-lived isotopes",
    "maturity": "early-clinical",
    "tldr": "Radioactive cancer drugs decay while they travel and get stuck at borders. Regional production and simpler transport rules would get more doses to patients on time.",
    "summary": "Radioligand therapies are often labelled centrally and shipped internationally, losing activity to decay and to customs delays; dangerous goods rules differ by country and carrier. The proposal is a network of regional GMP radiopharmacies (one per few million population) receiving bulk isotope and cold kits, labelling on demand, and delivering same-day, combined with an IAEA-brokered harmonisation of Class 7 transport paperwork and pre-clearance for medical isotopes at major airports.",
    "hypothesis": "Regional labelling and pre-clearance reduce the share of radioligand doses cancelled or postponed for supply reasons from roughly 5-10% to below 1% and reduce shipped activity per delivered dose by at least a quarter.",
    "rationale": "Nuclear medicine already runs this way for diagnostic isotopes (technetium generators, fluorine-18 cyclotron networks). Therapeutic isotopes have longer half-lives but far higher per-dose value, so the economics of regional hubs are favourable.",
    "test": "Pilot two regional hubs in a large country and measure dose cancellation rates, shipped activity per dose and cost per dose against central supply over one year.",
    "actor": "industry",
    "cost": "medium",
    "horizonYears": 3,
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "drugs": [
      "pluvicto",
      "lutathera"
    ],
    "terms": [
      "theranostics"
    ],
    "links": [
      {
        "label": "Bottleneck evidence (Manufacturing cost and time for living and radioactive medicines): Hernandez, Prasad & Gellad, Total costs of chimeric antigen receptor T-cell immunotherapy (JAMA Oncology 2018)",
        "url": "https://doi.org/10.1001/jamaoncol.2018.0977"
      }
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-08",
    "id": "idea-reg-yb176-enrichment-capacity",
    "name": "Build Western ytterbium-176 enrichment so lutetium-177 has more than one supplier",
    "maturity": "early-clinical",
    "tldr": "The lutetium used in approved prostate and neuroendocrine cancer treatments is made from an enriched metal that comes mostly from Russia. Making it elsewhere would secure supply.",
    "summary": "No-carrier-added lutetium-177 is produced by irradiating enriched ytterbium-176, most of which has historically come from Russian electromagnetic separators. Demand is rising steeply with Pluvicto, Lutathera and pipeline radioligands. Several companies (ASP Isotopes, ITM, SHINE and others) are developing laser or centrifuge enrichment in North America and Europe. The proposal is an advance market commitment by health systems and manufacturers to buy a guaranteed volume of Western-enriched ytterbium-176 at a floor price for ten years, with a strategic buffer stock, mirroring how vaccine advance commitments created capacity.",
    "hypothesis": "Advance commitments bring at least two non-Russian enrichment facilities to commercial output within four years, supplying more than half of global ytterbium-176 demand, and lutetium-177 supply interruptions to clinics fall to zero.",
    "rationale": "Enrichment is a capital-intensive, low-margin step whose investors need demand certainty; the clinical demand is now visible and growing, and geopolitical risk to a single-source supply chain is evident.",
    "test": "Model demand to 2035 with the major radioligand producers, structure a joint offtake agreement, and measure delivered enrichment capacity and supply-interruption reports over five years.",
    "actor": "industry",
    "cost": "large",
    "horizonYears": 4,
    "bottlenecks": [
      "b-manufacturing-cell-therapy"
    ],
    "technologies": [
      "radioligand-therapy"
    ],
    "drugs": [
      "pluvicto",
      "lutathera"
    ],
    "companies": [
      "itm",
      "novartis"
    ],
    "links": [
      {
        "label": "Bottleneck evidence (Manufacturing cost and time for living and radioactive medicines): Hernandez, Prasad & Gellad, Total costs of chimeric antigen receptor T-cell immunotherapy (JAMA Oncology 2018)",
        "url": "https://doi.org/10.1001/jamaoncol.2018.0977"
      }
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-04",
    "id": "idea-total-body-pet-dosimetry",
    "links": [
      {
        "label": "VISION: lutetium-177 PSMA-617 radioligand therapy extends survival in advanced prostate cancer (New England Journal of Medicine 2021)",
        "url": "https://doi.org/10.1056/NEJMoa2107322"
      }
    ],
    "name": "Total-body PET for personalised radioligand dosing",
    "maturity": "early-clinical",
    "tldr": "Ultra-sensitive whole-body scanners can measure exactly where a radioactive drug goes at tiny tracer doses, allowing each patient's therapeutic dose to be tailored.",
    "summary": "Radioligand therapy is given at fixed activity despite wide variation in tumour and kidney dose, so this idea uses ultra-sensitive total-body PET with 44Sc- or 89Zr-labelled analogues to measure each patient's pharmacokinetics before treatment and tailor the therapeutic dose. Dosimetry-guided prescription of 177Lu-PSMA is expected to raise tumour absorbed dose and response without exceeding kidney and marrow limits. Personalised dosimetry is established in radioiodine and SIRT, and total-body scanners from United Imaging and Siemens Healthineers remove the imaging-time and dose barriers. The test is a randomised trial of dosimetry-guided versus fixed-dose Pluvicto in prostate cancer with PSA50 and rPFS endpoints. At early-clinical maturity it addresses the bottleneck Wrong doses.",
    "hypothesis": "Dosimetry-guided activity prescription for 177Lu-PSMA increases tumour absorbed dose and response without exceeding kidney and marrow limits, compared with fixed 7.4 GBq.",
    "rationale": "Established in radioiodine and SIRT; total-body PET removes the imaging-time and dose barriers to pre-therapy dosimetry.",
    "test": "Randomised dosimetry-guided vs fixed-dose Pluvicto trial with PSA50 and rPFS endpoints.",
    "technologies": [
      "pet-ct",
      "radioligand-therapy",
      "spect"
    ],
    "terms": [
      "dosimetry"
    ],
    "drugs": [
      "pluvicto"
    ],
    "indications": [
      "prostate"
    ],
    "companies": [
      "united-imaging",
      "siemens-healthineers"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-08",
    "id": "idea-tr2-psma-volume-qualification",
    "name": "Qualify PSMA PET tumour volume as a validated imaging biomarker",
    "maturity": "early-clinical",
    "actor": "research",
    "cost": "medium",
    "horizonYears": 4,
    "tldr": "PSMA scans could measure prostate cancer burden and response far better than PSA, but no one has done the standardisation work to make the measurement trustworthy across scanners.",
    "summary": "Total PSMA-positive tumour volume and SUV metrics predict outcome in metastatic prostate cancer and response to radioligand therapy, but acquisition, reconstruction and segmentation vary between centres. A QIBA-style profile (phantom calibration, harmonised reconstruction, validated segmentation software) followed by biomarker qualification for defined contexts of use (prognosis, response assessment) would let PSMA volume be used as an endpoint and selection tool in trials.",
    "hypothesis": "Harmonised PSMA volumetric measurements will achieve test-retest and inter-site coefficient of variation under 15% and will predict overall survival on radioligand therapy better than PSA response.",
    "rationale": "FDG PET response criteria (PERCIST, Deauville) needed the same standardisation before adoption; PSMA PET is now widespread enough to justify it.",
    "test": "A multi-centre phantom and test-retest study followed by retrospective validation on trial imaging from VISION and PSMAfore, then a qualification submission.",
    "links": [
      {
        "label": "RSNA QIBA",
        "url": "https://www.rsna.org/research/quantitative-imaging-biomarkers-alliance"
      }
    ],
    "technologies": [
      "psma-pet",
      "pet-ct"
    ],
    "indications": [
      "prostate"
    ],
    "related": [
      "psma-pet-to-rlt",
      "idea-total-body-pet-dosimetry"
    ]
  },
  {
    "kind": "idea",
    "asOf": "2026-09-04",
    "id": "idea-trop2-pet-selection",
    "links": [
      {
        "label": "ASCENT: sacituzumab govitecan doubles survival in heavily pretreated metastatic triple-negative breast cancer (New England Journal of Medicine 2021)",
        "url": "https://doi.org/10.1056/NEJMoa2028485"
      }
    ],
    "name": "TROP2 PET to choose and sequence TROP2 ADCs",
    "maturity": "early-clinical",
    "tldr": "Use a whole-body TROP2 scan instead of a single tissue stain to decide which patients get a TROP2 ADC, which one, and when to switch.",
    "summary": "The proposal is to use a whole-body TROP2 PET scan, rather than a single tissue stain, to decide which patients receive a TROP2 ADC, which agent they get and when to switch. Baseline uptake and heterogeneity would predict benefit, and a fall in uptake at progression would signal antigen loss that should prompt a move to a non-TROP2 ADC rather than a second TROP2 agent. IHC on archival tissue failed to predict sacituzumab govitecan benefit, whereas PSMA PET already plays this role for Pluvicto and 89Zr-antibody and 68Ga-nanobody tracers image human tumours. The test is an imaging sub-study inside a first-line TNBC ADC trial, then a randomised PET-guided versus standard sequencing trial. At early-clinical maturity, it bears on the bottleneck Biomarkers are not validated or standardised.",
    "hypothesis": "Baseline TROP2 PET uptake (SUV, heterogeneity index) predicts PFS on TROP2 ADCs better than IHC, and a fall in uptake at progression indicates antigen-loss resistance that should prompt a switch to a non-TROP2 ADC rather than a second TROP2 agent.",
    "rationale": "PSMA PET does exactly this for Pluvicto. TROP2 is internalising and abundant; 89Zr-antibody and 68Ga-nanobody tracers already image human tumours.",
    "test": "Prospective imaging sub-study in a first-line TNBC ADC trial (e.g., a TROPION-Breast05 or sac-TMT cohort) correlating baseline and on-treatment TROP2 PET with response and PFS; then a randomised PET-guided vs standard sequencing trial.",
    "technologies": [
      "trop2-pet",
      "immuno-pet"
    ],
    "targets": [
      "trop2"
    ],
    "related": [
      "psma-pet-to-rlt"
    ]
  }
];
