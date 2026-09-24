/**
 * The radiopharmaceutical universe: shared types, links and labels for the /universe/ pages.
 *
 * The data itself is too large for the page bundle, so the build writes it to public/universe/*.json
 * (scripts/universe/ in the repo, refreshed by the universe workflow) and the browser components
 * fetch it on demand. Each row keeps only what is needed to filter it and link back to its source:
 * titles, codes, tags and the official URL. Abstract text is never republished.
 */

export type Labels = {
  targets: Record<string, string>;
  diseases: Record<string, string>;
  isotopes: Record<string, string>;
  isotopeRole: Record<string, string>;
};

export type UniverseStats = {
  generated: string;
  trials: number; trialsCTG: number; trialsCTIS: number;
  products: number; regions: number; agents: number; agentsNotInUS: number;
  papers: number; paperYears: number[]; papersCore: number;
  abstracts: number; meetings: string[];
  patents: number; patentYears: number[];
  gaps: number; ideas: number; ideaLenses: Record<string, number>;
};

const cache = new Map<string, Promise<unknown>>();

/** Fetch a universe file once per page view. */
export function loadUniverse<T>(file: string): Promise<T> {
  if (!cache.has(file)) {
    cache.set(file, fetch(`/universe/${file}`).then((r) => {
      if (!r.ok) throw new Error(`${file}: ${r.status}`);
      return r.json();
    }));
  }
  return cache.get(file) as Promise<T>;
}

export function paperUrl(id: string): string {
  const i = id.indexOf(":");
  const k = id.slice(0, i), v = id.slice(i + 1);
  if (k === "pmid") return `https://europepmc.org/article/MED/${v}`;
  if (k === "doi") return `https://doi.org/${v}`;
  return `https://europepmc.org/article/${k.toUpperCase()}/${v}`;
}
export const trialUrl = (id: string, u?: string | null) => u || `https://clinicaltrials.gov/study/${id}`;
export const patentUrl = (id: string) => `https://patents.google.com/patent/${id}/en`;

export const REGION_NAME: Record<string, string> = {
  US: "United States", EU: "European Union (EMA)", UK: "United Kingdom", IE: "Ireland", CA: "Canada", CH: "Switzerland", JP: "Japan", CN: "China",
  KR: "South Korea", TW: "Taiwan", IN: "India", AU: "Australia", BR: "Brazil", CO: "Colombia", MX: "Mexico", AR: "Argentina", CL: "Chile",
  RU: "Russia", IR: "Iran", TR: "Türkiye", SG: "Singapore", ID: "Indonesia", SA: "Saudi Arabia", MY: "Malaysia", ZA: "South Africa",
  IL: "Israel", TH: "Thailand", VN: "Vietnam", WO: "WIPO (PCT)", EP: "European Patent Office", DE: "Germany", FR: "France", ES: "Spain",
  IT: "Italy", NL: "Netherlands", BE: "Belgium", AT: "Austria", DK: "Denmark", SE: "Sweden", FI: "Finland", NO: "Norway", PL: "Poland",
  CZ: "Czechia", HU: "Hungary", PT: "Portugal", GR: "Greece", NZ: "New Zealand", HK: "Hong Kong", SI: "Slovenia", HR: "Croatia",
  RS: "Serbia", UA: "Ukraine", EA: "Eurasian Patent Office", SK: "Slovakia", LT: "Lithuania", RO: "Romania", BG: "Bulgaria", CY: "Cyprus",
  EE: "Estonia", LV: "Latvia", LU: "Luxembourg", MT: "Malta", SM: "San Marino", MA: "Morocco", EG: "Egypt", PH: "Philippines", PE: "Peru",
};

export const LENS: Record<string, { label: string; tip: string }> = {
  "unmet-need": { label: "Unmet need cluster", tip: "Many published statements of an unmet need or limitation about the same target, indication or theme." },
  "needs-vs-trials": { label: "Needs outrun trials", tip: "An indication with many published unmet needs and comparatively few radiopharmaceutical trials." },
  "companion-imaging": { label: "Therapy without imaging", tip: "Radiopharmaceutical therapy trials against a target, with no imaging agent for that target in the same indication." },
  "therapy-partner": { label: "Imaging without therapy", tip: "Imaging trials against a target, with no radiopharmaceutical therapy against it in the same indication." },
  "indication-expansion": { label: "Indication expansion", tip: "A target treated with radionuclides elsewhere, with papers in this indication but no trial here." },
  "momentum-no-trials": { label: "Literature rising, no trials", tip: "Papers on the target (and indication) grew at least 1.5x from 2019-2022 to 2023-2026, with at most one trial." },
  "congress-signal": { label: "Congress signal", tip: "Five or more 2025-2026 congress abstracts, with at most one registered trial." },
  "first-in-human": { label: "First in human", tip: "First-in-human reports since 2024, grouped by target." },
  "new-agent": { label: "New agent named", tip: "A labelled agent name first seen in 2025 or later in papers or congress abstracts." },
  "isotope-gap": { label: "Isotope never trialled", tip: "A next-generation isotope paired with a target in papers and abstracts but in no registered trial." },
  "adc-validated": { label: "ADC-validated target", tip: "A target with antibody-drug conjugate trials and few or no radiopharmaceutical trials." },
  "patent-momentum": { label: "Patent momentum", tip: "Patent publications on the target rising since 2023, with few trials." },
  "approved-abroad": { label: "Approved abroad, not in US", tip: "An agent with active registrations outside the US and no Drugs@FDA registration: an in-licensing candidate." },
  "china-only": { label: "Only in China", tip: "Clinical programmes against a target registered only at Chinese sites." },
  "academic-only": { label: "Academic sponsors only", tip: "Five or more trials against a target, none sponsored by industry: a licensing opportunity." },
  "stalled": { label: "Stopped for business reasons", tip: "A trial terminated, withdrawn or suspended for funding, strategy or business reasons rather than safety or efficacy." },
};

export const pretty = (s: string | null | undefined) => (s ? s.toLowerCase().replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase()) : "");

/** Token search: every whitespace-separated term must appear somewhere in the haystack. */
export function matches(hay: string, q: string): boolean {
  const terms = q.toLowerCase().split(/\s+/).filter(Boolean);
  return terms.every((t) => hay.includes(t));
}

export function toCsv(rows: Array<Record<string, unknown>>, cols: Array<[string, (r: never) => unknown]>): string {
  const esc = (v: unknown) => {
    const s = Array.isArray(v) ? v.join("; ") : v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  return [cols.map((c) => esc(c[0])).join(","), ...rows.map((r) => cols.map((c) => esc(c[1](r as never))).join(","))].join("\n");
}

export function download(name: string, text: string) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([text], { type: "text/csv;charset=utf-8" }));
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

/** Universe target keys that have a hand-written target page in the corpus. */
export const TARGET_PAGE: Record<string, string> = {
  psma: "psma", sstr: "sstr2", fap: "fap", grpr: "grpr", cxcr4: "cxcr4", her2: "her2", her3: "her3", caix: "caix", cd20: "cd20", "b7-h3": "b7h3",
  ceacam5: "ceacam5", trop2: "trop2", "nectin-4": "nectin4", dll3: "dll3", "cldn18-2": "cldn18-2", gpc3: "gpc3", klk2: "klk2", steap1: "steap1", parp: "parp",
  amyloid: "amyloid-beta", tau: "tau-protein", dat: "dopamine-transporter", "alpha-synuclein": "alpha-synuclein", "net-transporter": "norepinephrine-transporter",
  integrin: "integrin-avb3", cck2r: "cck2-receptor", upar: "upar", mesothelin: "mesothelin", "folate-receptor": "folr1", "5t4": "tpbg-5t4", sortilin: "sortilin",
  b1r: "bradykinin-b1-receptor", dlg4: "dlg4-psd95", "glucose-metabolism": "glut-hexokinase", "bone-mineral": "bone-hydroxyapatite", thyroid: "nis-symporter",
};

export type Idea = {
  id: string; lens: string; title: string; facts: string[]; tg: string | null; ds: string | null; iso: string[]; role: string | null;
  score: number; regions: string[]; ev: Partial<Record<"trials" | "papers" | "abstracts" | "gaps" | "products" | "patents", string[]>>;
};
/** [title or quoted sentence, year, url, source detail, source type for gaps] */
export type Ref = [string, number | null, string | null, string | null, string?];
export type IdeasFile = { ideas: Idea[]; refs: Record<string, Ref> };
