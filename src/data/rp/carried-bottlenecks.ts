/**
 * Bottlenecks: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedBottlenecks: EntityInput[] = [
  {
    "kind": "bottleneck",
    "asOf": "2026-09-08",
    "id": "b-dose-optimisation",
    "name": "Wrong doses",
    "stage": "trials",
    "severity": "major",
    "tldr": "Most drug doses were chosen as the highest a person can tolerate, which is often more than they need.",
    "summary": "Oncology inherited from cytotoxic chemotherapy the assumption that more drug is better, so phase 1 trials escalate to the maximum tolerated dose over a few weeks in a few dozen patients and that dose becomes the label. Targeted agents, antibodies, ADCs and immunotherapies saturate their targets far below toxicity, and chronic dosing exposes patients to months of grade 2 toxicity that the 28-day dose-limiting-toxicity window never measured. The consequences are dose reductions and discontinuations in a third or more of patients on many oral targeted agents, avoidable cost, and occasionally drugs that fail because nobody can stay on them. The FDA's Project Optimus (2021) and its 2024 guidance now require randomised comparison of at least two doses before registration, and trials such as PERSEPHONE show that duration can be halved without loss of efficacy. Dosimetry-based individualisation is the parallel challenge in radioligand therapy.",
    "metrics": [
      {
        "label": "Patients requiring dose reduction of abemaciclib for adverse events in first-line MONARCH 3",
        "value": "~43%",
        "source": "Goetz et al., JCO 2017",
        "url": "https://doi.org/10.1200/JCO.2017.75.6155"
      },
      {
        "label": "Six vs twelve months of adjuvant trastuzumab in HER2-positive breast cancer (PERSEPHONE): 4-year disease-free survival",
        "value": "89.4% vs 89.8% (non-inferior)",
        "source": "Earl et al., Lancet 2019",
        "url": "https://doi.org/10.1016/S0140-6736(19)30650-6"
      }
    ],
    "causes": [
      "Phase 1 designs optimise for speed and identify the maximum tolerated dose rather than the optimal biological dose.",
      "Dose-limiting toxicity is assessed in one cycle, missing cumulative and chronic toxicities.",
      "Sponsors have no commercial incentive to study lower doses or shorter durations after approval.",
      "Regulators historically accepted a single dose in registration trials.",
      "Pharmacokinetic variability between patients is large but dosing is rarely individualised."
    ],
    "currentEfforts": [
      "FDA Project Optimus and the 2024 final guidance on dose optimisation require sponsors to compare multiple doses before registration.",
      "PERSEPHONE, SOLD and Short-HER established that shorter adjuvant trastuzumab is non-inferior for many patients.",
      "The CodeBreaK 100 randomised 960 mg vs 240 mg sotorasib comparison, required by the FDA, is the model for post-approval dose re-evaluation.",
      "Dosimetry-personalised PRRT and radioligand therapy trials replace fixed activity with absorbed-dose-based dosing.",
      "Intermittent and stop-and-restart dosing is being tested for nirogacestat in desmoid tumours and for venetoclax in AML.",
      "Finaldose and academic pharmacometrics groups apply model-informed precision dosing to oncology drugs."
    ],
    "successLooksLike": "Every new oncology drug is registered with a dose chosen by randomised comparison, the rate of dose reductions and discontinuations for toxicity on oral targeted agents falls below 20%, and duration of therapy is tested rather than assumed.",
    "links": [
      {
        "label": "FDA Oncology Center of Excellence, Project Optimus",
        "url": "https://www.fda.gov/about-fda/oncology-center-excellence/project-optimus"
      },
      {
        "label": "Shah, Rahman, Theoret & Pazdur, The drug-dosing conundrum in oncology: when less is more (NEJM 2021)",
        "url": "https://doi.org/10.1056/NEJMp2109826"
      },
      {
        "label": "Earl et al., 6 versus 12 months of adjuvant trastuzumab (PERSEPHONE, Lancet 2019)",
        "url": "https://doi.org/10.1016/S0140-6736(19)30650-6"
      }
    ],
    "indications": [
      "breast-her2-positive",
      "neuroendocrine"
    ],
    "technologies": [
      "radioligand-therapy",
      "prrt"
    ],
    "terms": [
      "dosimetry",
      "alpha-vs-beta"
    ],
    "related": [
      "idea-net-dosimetry-prrt",
      "idea-total-body-pet-dosimetry"
    ]
  },
  {
    "kind": "bottleneck",
    "asOf": "2026-09-08",
    "id": "b-manufacturing-cell-therapy",
    "name": "Manufacturing cost and time for living and radioactive medicines",
    "stage": "regulation-manufacturing",
    "severity": "major",
    "tldr": "Cell therapies take weeks to make for one patient and cost hundreds of thousands of dollars. Isotopes run short.",
    "summary": "Autologous CAR-T, TIL and TCR-T are one-batch-per-patient manufacturing: leukapheresis, shipping, transduction, expansion, release testing and return take several weeks, during which some patients progress or die, a proportion of products fail specification, and list prices run to several hundred thousand dollars before hospital costs. Only a small fraction of eligible patients receive approved CAR-T because of slot availability, referral and cost. Radioligand therapy has a different supply problem: lutetium-177 depends on a handful of reactors and enrichment sources, and actinium-225 for alpha therapy has been limited to a few curies a year worldwide from thorium-229 stocks, with accelerator and thorium-based production only now scaling. ADCs and bispecifics have complex biologics supply chains with a small number of contract manufacturers. In vivo CAR generation, allogeneic products, point-of-care and automated manufacturing, and new isotope production routes are the technical answers.",
    "metrics": [
      {
        "label": "Estimated total cost of CAR-T therapy including list price and management of adverse events (2018 US analysis)",
        "value": "Up to ~US$500,000 per patient",
        "source": "Hernandez, Prasad & Gellad, JAMA Oncology 2018",
        "url": "https://doi.org/10.1001/jamaoncol.2018.0977"
      },
      {
        "label": "Patients in ELIANA for whom tisagenlecleucel could not be manufactured",
        "value": "7 of 92 enrolled",
        "source": "Maude et al., NEJM 2018",
        "url": "https://doi.org/10.1056/NEJMoa1709866"
      },
      {
        "label": "Historic global actinium-225 supply from thorium-229 stockpiles",
        "value": "~63 GBq (1.7 Ci) per year",
        "source": "Robertson et al., Current Radiopharmaceuticals 2018",
        "url": "https://doi.org/10.2174/1874471011666180416161908"
      }
    ],
    "causes": [
      "Autologous products are bespoke batches with no economies of scale.",
      "Viral vector and GMP capacity are limited and expensive.",
      "Actinium-225 has historically come only from decay of legacy thorium-229 held by a few government laboratories.",
      "Lutetium-177 production depends on reactor time and enriched target material from few suppliers.",
      "Release testing, cold-chain logistics and hospital accreditation add weeks and cost that no design optimisation removes."
    ],
    "currentEfforts": [
      "Umoja, Interius and Orna are developing in vivo CAR-T that programmes T cells inside the patient, removing manufacturing entirely.",
      "Allogene, Caribou, Sana and Fate build off-the-shelf allogeneic CAR-T and CAR-NK products from healthy donor or iPSC sources.",
      "Novartis' T-Charge and point-of-care manufacturing programmes at academic centres cut vein-to-vein time to days.",
      "The US Department of Energy Isotope Program is producing accelerator-based actinium-225, and TerraPower Isotopes and Orano Med are scaling thorium-derived and accelerator-based supply.",
      "ITM and Curium have expanded non-carrier-added lutetium-177 production, and Novartis has built dedicated radioligand plants.",
      "Automated closed-system cell manufacturing platforms (for example, Miltenyi CliniMACS Prodigy and Lonza Cocoon) reduce labour and cleanroom needs."
    ],
    "successLooksLike": "A CAR-T or equivalent cell therapy is available within a week of decision at a cost comparable to a course of biologic therapy, the majority of eligible patients actually receive it, and isotope supply is no longer the limiting factor for any approved radioligand.",
    "links": [
      {
        "label": "Hernandez, Prasad & Gellad, Total costs of chimeric antigen receptor T-cell immunotherapy (JAMA Oncology 2018)",
        "url": "https://doi.org/10.1001/jamaoncol.2018.0977"
      },
      {
        "label": "Maude et al., Tisagenlecleucel in children and young adults with B-cell lymphoblastic leukemia (ELIANA, NEJM 2018)",
        "url": "https://doi.org/10.1056/NEJMoa1709866"
      },
      {
        "label": "US Department of Energy Isotope Program",
        "url": "https://www.isotopes.gov/"
      }
    ],
    "indications": [
      "dlbcl",
      "prostate",
      "neuroendocrine"
    ],
    "technologies": [
      "radioligand-therapy",
      "targeted-alpha-therapy"
    ],
    "terms": [
      "alpha-vs-beta",
      "dosimetry",
      "theranostics"
    ],
    "trials": [
      "vision"
    ],
    "drugs": [
      "pluvicto",
      "lutathera",
      "ac225-psma"
    ],
    "companies": [
      "novartis",
      "terrapower-isotopes",
      "orano-med",
      "itm",
      "curium"
    ],
    "related": [
      "radiopharma-roadmap",
      "idea-reg-legacy-radium-recovery-ac225",
      "idea-reg-ac225-accelerator-pharmacopoeia",
      "idea-reg-yb176-enrichment-capacity",
      "idea-reg-medical-isotope-reactor-reserve",
      "idea-reg-alpha-emitter-portfolio",
      "idea-reg-regional-radiopharmacy-hubs",
      "idea-reg-isotope-supply-observatory"
    ]
  }
];
