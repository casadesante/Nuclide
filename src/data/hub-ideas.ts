/**
 * Ideas for making Nuclide the central hub for radiopharmaceuticals — therapy and diagnostic imaging alike.
 * These are product and community ideas, distinct from the scientific ideas in the corpus (kind `idea`).
 *
 * Status is editorial and is meant to be honest about this repository, not aspirational:
 *   shipped   the page or feed exists in this repo and works off the corpus
 *   building  partly there: the surface exists but the data behind it is thin
 *   planned   agreed, not built
 *   proposed  an idea worth arguing about
 *
 * The Roadmap page cross-checks a "shipped" claim against a corpus-health gauge (src/lib/health.ts) where
 * one measures it, and shows the idea as "needs work" when the gauge is under target, whatever the status says.
 */
export type HubIdea = {
  n: number;
  title: string;
  why: string;
  status: "shipped" | "building" | "planned" | "proposed";
  theme: string;
  /** Id of a corpus-health metric (src/lib/health.ts) that measures whether the claim holds. */
  metric?: string;
};

export const hubIdeas: HubIdea[] = [
  // Knowledge graph
  { n: 1, title: "Page per object, backlinks everywhere", why: "Every isotope, agent, target, trial, company, institution and term has a URL and shows what links to it. That is what makes a hub rather than a list.", status: "shipped", theme: "Knowledge graph", metric: "orphans" },
  { n: 2, title: "Isotope as a first-class object", why: "Radiopharmacy starts with the nuclide: half-life, emission, tissue range, how it is made and whether anyone can get it. Every isotope is a record, and agents link to the isotope they carry.", status: "shipped", theme: "Knowledge graph", metric: "kind-size" },
  { n: 3, title: "Plain-English TL;DR on every page", why: "Patients, families, journalists and investors should get the point in one sentence before the physics.", status: "shipped", theme: "Knowledge graph", metric: "tldr" },
  { n: 4, title: "Public JSON API of the whole corpus", why: "Let others build on the data: dose calculators, trial matchers, supply dashboards. Published as static JSON under /api/v1/.", status: "shipped", theme: "Knowledge graph" },
  { n: 5, title: "Graph explorer", why: "Navigate visually from an isotope to its agents to their targets, trials and manufacturers.", status: "shipped", theme: "Knowledge graph" },
  { n: 6, title: "'As of' dates and a change log on every fact", why: "Approvals, supply and trial status move monthly. Show when each fact was checked and what changed, like a package changelog.", status: "shipped", theme: "Knowledge graph", metric: "stale" },
  { n: 7, title: "Evidence tiers as a visual language", why: "Colour and badge every claim by evidence level — approved, phase 3, phase 2, first-in-human, preclinical, concept — so hype is visible at a glance.", status: "shipped", theme: "Knowledge graph" },
  { n: 8, title: "A primary source on every record", why: "A label, approval letter, EPAR, registry entry, guideline or paper for each record, so a reader can check the claim rather than trust us.", status: "shipped", theme: "Knowledge graph", metric: "sources" },
  { n: 9, title: "Wikidata and Wikipedia cross-linking", why: "Push structured nuclide and agent facts to Wikidata, pull summaries back, so the hub and the commons improve each other.", status: "proposed", theme: "Knowledge graph", metric: "term-wikipedia" },

  // Theranostics
  { n: 10, title: "Theranostic pairs as a first-class relation", why: "The field's central idea is see-and-treat: 68Ga with 177Lu, 64Cu with 67Cu, 124I with 131I. Pairs are recorded on the isotope and shown on both pages.", status: "shipped", theme: "Theranostics" },
  { n: 11, title: "Target-by-isotope matrix", why: "One grid of what has been tried against each target with each nuclide — PSMA with 177Lu, 225Ac, 161Tb — and where the gaps are.", status: "planned", theme: "Theranostics" },
  { n: 12, title: "Dosimetry method registry", why: "Trials quote absorbed dose in incompatible ways. Record the method (SPECT/CT time points, planar, hybrid, software) per trial so numbers can be compared honestly.", status: "planned", theme: "Theranostics", metric: "trial-outcomes" },
  { n: 13, title: "Alpha-emitter tracker", why: "225Ac, 211At, 212Pb, 227Th and 223Ra each have their own supply, chemistry and recoil problems. One page per nuclide and one comparison across them.", status: "building", theme: "Theranostics" },
  { n: 14, title: "Pairings and anti-pairings", why: "Combinations that work (radioligand plus PARP inhibitor, plus immune checkpoint), sequences that work, and cautions, each with its rationale and evidence.", status: "shipped", theme: "Theranostics" },

  // Diagnostics and imaging
  { n: 15, title: "Diagnostic agents treated as equals, not footnotes", why: "PET and SPECT tracers are the larger half of nuclear medicine by patient numbers. Every approved tracer gets a record with its indication, label and evidence.", status: "shipped", theme: "Diagnostics", metric: "regional-approvals" },
  { n: 16, title: "Reporting-criteria pages (PSMA-RADS, Krenning, Deauville, PERCIST)", why: "A scan means nothing without the criteria used to read it. Each criterion gets a glossary record linked from the agents that use it.", status: "building", theme: "Diagnostics" },
  { n: 17, title: "Scanner and detector technology pages", why: "Long-axial-field-of-view PET, CZT SPECT, total-body imaging and dose-reduction reconstruction decide what is clinically possible; they belong in the graph beside the tracers.", status: "shipped", theme: "Diagnostics", metric: "schematics" },
  { n: 18, title: "Beyond oncology: cardiac, neurology, infection, endocrine", why: "Amyloid and tau PET, myocardial perfusion and amyloidosis tracers, infection imaging and thyroid therapy are nuclear medicine too, and most radiopharma coverage ignores them.", status: "shipped", theme: "Diagnostics" },

  // Supply chain and manufacturing
  { n: 19, title: "Isotope supply page with the real constraints", why: "Reactor campaigns, cyclotron capacity, generator parents, enrichment and 68Ge or 99Mo shortages are the field's binding constraint. One page that says who makes what and what is tight.", status: "shipped", theme: "Supply" },
  { n: 20, title: "Half-life-aware logistics explainer", why: "A 68-minute nuclide cannot be shipped like a 6.6-day one. Make the distribution radius and the cold-chain-free reality explicit on every agent page.", status: "planned", theme: "Supply" },
  { n: 21, title: "Manufacturer and CDMO directory", why: "Who can label, fill and release a clinical batch, in which country, at what activity — the question every programme asks in year two.", status: "shipped", theme: "Supply", metric: "logos" },
  { n: 22, title: "Bottleneck pages with named ideas against them", why: "Each bottleneck (225Ac supply, chelator patents, dosimetry standards, scanner time, authorised-user shortage) gets a page listing what could unblock it.", status: "shipped", theme: "Supply", metric: "bottleneck-ideas" },
  { n: 23, title: "Live generator and reactor outage feed", why: "An outage at a research reactor moves clinics worldwide within days. A dated feed of announced outages and campaign schedules would be read every week.", status: "proposed", theme: "Supply" },
];

export const hubIdeas2: HubIdea[] = [
  // Clinical practice
  { n: 24, title: "Guideline and appropriate-use index", why: "SNMMI, EANM and specialty-society guidance per agent and per indication, linked from the agent page with the year each was issued.", status: "building", theme: "Practice" },
  { n: 25, title: "Radiation-protection and release-criteria reference", why: "The practical questions after a therapy — waste, family contact, travel, pregnancy, breastfeeding — differ by nuclide and jurisdiction and are badly documented online.", status: "planned", theme: "Practice" },
  { n: 26, title: "Authorised-user and licensing map", why: "Who may hold and administer therapeutic activity differs by country and by state; it is the quiet limit on how fast therapy scales.", status: "proposed", theme: "Practice" },
  { n: 27, title: "Centre directory for theranostics", why: "Which centres run radioligand therapy and which trials they host, so a clinician or patient can find the nearest one.", status: "shipped", theme: "Practice", metric: "institution-people" },

  // Pipeline and evidence
  { n: 28, title: "Trial tracker with structured outcomes", why: "Every trial record carries its registry id, phase, design and the outcome numbers as published, not as press-released.", status: "shipped", theme: "Pipeline", metric: "trial-outcomes" },
  { n: 29, title: "Automated ClinicalTrials.gov ingestion", why: "A scheduled job pulls phase 2/3 trials for every agent and target in the corpus and flags new ones for review.", status: "shipped", theme: "Pipeline", metric: "trials-snapshot" },
  { n: 30, title: "Readout and regulatory calendar", why: "Expected readouts, PDUFA dates, CHMP opinions and advisory committees for radiopharmaceuticals on one timeline.", status: "shipped", theme: "Pipeline" },
  { n: 31, title: "Failure museum", why: "Programmes that stopped — and why — are the most useful and least published data in the field.", status: "shipped", theme: "Pipeline" },
  { n: 32, title: "Conference digests (SNMMI, EANM, ASCO GU, ESMO)", why: "Within a week of each meeting, update the affected records and publish the diff.", status: "building", theme: "Pipeline" },
  { n: 33, title: "Key-paper library with citation counts", why: "The twenty papers that define each sub-field, with DOIs, so a newcomer can read the actual literature rather than a summary of it.", status: "shipped", theme: "Pipeline", metric: "citations" },

  // Openness
  { n: 34, title: "Everything under version control, corrections welcome", why: "Records are TypeScript files in a public repo: anyone can open an issue or a pull request against a specific claim.", status: "shipped", theme: "Openness", metric: "provenance" },
  { n: 35, title: "Named expert review per page", why: "A radiochemist, a nuclear-medicine physician and a medical physicist signing off the pages in their area, with the date and their conflicts declared.", status: "planned", theme: "Openness", metric: "reviewed" },
  { n: 36, title: "MCP server and CLI", why: "The corpus should be usable by an AI assistant or a terminal without scraping the site.", status: "shipped", theme: "Openness" },
  { n: 37, title: "Published gaps list", why: "Say out loud what is missing — kinds with too few records, records with no source, isotopes with no agent — instead of hiding it.", status: "shipped", theme: "Openness", metric: "backlinks" },
];

export const hubIdeas3: HubIdea[] = [
  { n: 38, title: "Patient-facing explainers per therapy", why: "What the treatment day looks like, how many cycles, what the scan shows, what the side effects actually are — in plain language, sourced to the label.", status: "planned", theme: "Patients" },
  { n: 39, title: "Translated TL;DRs", why: "Nuclear medicine is global and supply is not. Translate the one-sentence layer first, where the value is highest and the cost lowest.", status: "proposed", theme: "Patients" },
  { n: 40, title: "Cost and access notes where a source states them", why: "List price, reimbursement status and per-cycle cost decide who gets treated; record them only where a public source says so.", status: "proposed", theme: "Patients" },
  { n: 41, title: "Chelator and linker chemistry reference", why: "DOTA, DOTAGA, macropa, sarcophagine, HYNIC: which nuclide each holds, at what temperature, under what patent.", status: "building", theme: "Chemistry", metric: "molecules" },
  { n: 42, title: "Target prevalence with sources", why: "Expression frequency per indication decides who is eligible; each number needs a citation, not a round figure.", status: "building", theme: "Chemistry", metric: "target-prevalence" },
  { n: 43, title: "Deep dives per indication", why: "For the indications where radiopharmaceuticals matter most — prostate, NET, thyroid, glioma, bone metastases — a longer state-of-the-art page rather than a stub.", status: "building", theme: "Knowledge graph", metric: "indication-depth" },
  { n: 44, title: "Who's who of the field", why: "The people whose papers and programmes moved the field, linked to their institutions and their key papers.", status: "shipped", theme: "Community", metric: "people-papers" },
  { n: 45, title: "Newsletter and dated digests", why: "A short, dated summary of what changed in the corpus, so a reader can follow the field by following the diff.", status: "shipped", theme: "Community" },
];
