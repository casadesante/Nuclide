/**
 * Europe PMC query builders (REST search API, CORS-open, no key).
 * https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=...&format=json&resultType=lite&sort=P_PDATE_D desc
 *
 * Shared by the client LatestPapers component and the weekly snapshot script.
 */
import type { Entity } from "./schema";

export const EPMC_REST = "https://www.ebi.ac.uk/europepmc/webservices/rest/search";
export const EPMC_SEARCH = "https://europepmc.org/search";

/**
 * Topical guard for technology names that are too vague on their own ("PET", "CT"). It carried only cancer words
 * from the fork, which quietly hid the cardiac, neurology and infection literature this corpus covers, so the
 * nuclear medicine words are in it too. Widening a guard only adds hits; nothing that matched before stops matching.
 */
const NUCLIDE = "(radiopharmaceutical OR radioligand OR radionuclide OR theranostic OR \"nuclear medicine\" OR \"molecular imaging\" OR radiotracer OR scintigraphy OR cancer OR tumor OR tumour OR oncology OR carcinoma OR lymphoma OR leukemia OR leukaemia OR myeloma OR sarcoma OR melanoma OR glioma)";

const q = (s: string) => `"${s.replace(/"/g, "").trim()}"`;
const inTitleAbstract = (terms: string[]) => "(" + terms.map((t) => `TITLE:${q(t)} OR ABSTRACT:${q(t)}`).join(" OR ") + ")";

/** Curated queries for technologies whose names alone are too vague or too broad. */
export const TECH_QUERIES: Record<string, string> = {
  "radioligand-therapy": `${inTitleAbstract(["radioligand therapy", "peptide receptor radionuclide therapy", "lutetium-177", "177Lu"])}`,
  "targeted-alpha-therapy": `${inTitleAbstract(["targeted alpha therapy", "actinium-225", "225Ac", "lead-212", "212Pb"])}`,
  radioimmunotherapy: `${inTitleAbstract(["radioimmunotherapy", "radioimmunoconjugate", "radiolabeled antibody"])} AND ${NUCLIDE}`,
  "psma-pet": `${inTitleAbstract(["PSMA PET", "PSMA PET/CT", "68Ga-PSMA", "18F-DCFPyL"])}`,
  "fapi-pet": `${inTitleAbstract(["FAPI PET", "FAP inhibitor PET", "68Ga-FAPI", "fibroblast activation protein PET"])}`,
  "trop2-pet": `${inTitleAbstract(["TROP2 PET", "TROP2 imaging", "Trop-2 PET"])}`,
  "her2-pet": `${inTitleAbstract(["HER2 PET", "89Zr-trastuzumab", "HER2 imaging PET"])}`,
  "immuno-pet": `${inTitleAbstract(["immuno-PET", "immunoPET", "CD8 PET", "89Zr-labeled antibody"])}`,
  "parp-pet": `${inTitleAbstract(["PARP PET", "18F-FluorThanatrace", "PARP imaging"])}`,
  "fdg-pet": `${inTitleAbstract(["FDG PET", "18F-FDG PET/CT"])} AND ${NUCLIDE}`,
  pet: `${inTitleAbstract(["positron emission tomography"])} AND ${NUCLIDE}`,
  "pet-ct": `${inTitleAbstract(["PET/CT", "total-body PET"])} AND ${NUCLIDE}`,
  "pet-mri": `${inTitleAbstract(["PET/MRI", "PET-MRI"])} AND ${NUCLIDE}`,
  ct: `${inTitleAbstract(["computed tomography", "photon-counting CT"])} AND ${NUCLIDE} AND (staging OR screening OR response)`,
  spect: `${inTitleAbstract(["SPECT/CT", "bone scan", "dosimetry SPECT"])} AND ${NUCLIDE}`,
  "peptide-drug-conjugate": `${inTitleAbstract(["peptide-drug conjugate", "peptide drug conjugate", "bicycle toxin conjugate"])}`,
  "site-specific-conjugation": `${inTitleAbstract(["site-specific conjugation", "drug-to-antibody ratio", "ADC linker"])}`,
};

function escapeTerm(s: string): string {
  return s.replace(/[()"\\]/g, " ").replace(/\s+/g, " ").trim();
}

/** Strip parenthetical qualifiers like "Triple-negative breast cancer (TNBC)" → ["Triple-negative breast cancer", "TNBC"]. */
function nameVariants(name: string): string[] {
  const m = name.match(/^(.*?)\s*\((.*?)\)\s*$/);
  const out = m ? [m[1], m[2]] : [name];
  return out.map(escapeTerm).filter((s) => s.length >= 3);
}

/** Build a Europe PMC query for an entity. Returns undefined for kinds without a sensible literature query. */
export function paperQuery(e: Pick<Entity, "id" | "kind" | "name" | "aka"> & Partial<{ brand: string; code: string; symbol: string }>): string | undefined {
  switch (e.kind) {
    case "drug": {
      const terms = [...nameVariants(e.name), ...(e.brand ? e.brand.split(/[\/,(]/).map(escapeTerm).filter((s) => s.length >= 4 && !/^\(|SC\)?$/.test(s)) : []), ...(e.code ? e.code.split(/[,;\/]/).map(escapeTerm).filter((s) => s.length >= 4) : []), ...e.aka.map(escapeTerm)]
        .filter((t, i, a) => t && a.indexOf(t) === i).slice(0, 6);
      if (!terms.length) return undefined;
      return `${inTitleAbstract(terms)} AND ${NUCLIDE}`;
    }
    case "target": {
      const terms = [...nameVariants(e.name), ...(e.symbol ? e.symbol.split(/[,\/]/).map(escapeTerm) : []), ...e.aka.map(escapeTerm)].filter((t, i, a) => t.length >= 2 && a.indexOf(t) === i).slice(0, 6);
      if (!terms.length) return undefined;
      return `${inTitleAbstract(terms)} AND ${NUCLIDE}`;
    }
    case "indication": {
      const terms = [...nameVariants(e.name), ...e.aka.map(escapeTerm)].filter((t, i, a) => t.length >= 3 && a.indexOf(t) === i).slice(0, 6);
      if (!terms.length) return undefined;
      return `${inTitleAbstract(terms)} AND (treatment OR therapy OR trial OR survival OR diagnosis)`;
    }
    case "technology": {
      if (TECH_QUERIES[e.id]) return TECH_QUERIES[e.id];
      const terms = [...nameVariants(e.name), ...e.aka.map(escapeTerm)].filter((t, i, a) => t.length >= 4 && a.indexOf(t) === i).slice(0, 4);
      if (!terms.length) return undefined;
      return `${inTitleAbstract(terms)} AND ${NUCLIDE}`;
    }
    case "pathway":
    case "term":
    case "idea": {
      const terms = nameVariants(e.name).slice(0, 3);
      if (!terms.length) return undefined;
      return `${inTitleAbstract(terms)} AND ${NUCLIDE}`;
    }
    default:
      return undefined;
  }
}

export type PaperLite = {
  id: string; source: string; pmid?: string; pmcid?: string; doi?: string; title: string; authorString?: string; journalTitle?: string;
  pubYear?: string; firstPublicationDate?: string; isOpenAccess?: string; citedByCount?: number; pubType?: string;
};

export function restUrl(query: string, opts: { pageSize?: number; preprints?: boolean; resultType?: "lite" | "idlist"; sort?: string } = {}): string {
  const full = opts.preprints ? `(${query}) AND SRC:PPR` : query;
  const p = new URLSearchParams({ query: full, format: "json", resultType: opts.resultType ?? "lite", pageSize: String(opts.pageSize ?? 10), sort: opts.sort ?? "P_PDATE_D desc" });
  return `${EPMC_REST}?${p.toString()}`;
}

export function searchPageUrl(query: string): string {
  return `${EPMC_SEARCH}?query=${encodeURIComponent(query)}&sortBy=FIRST_PDATE_D%2Bdesc`;
}

export function paperLink(p: PaperLite): string {
  if (p.doi) return `https://doi.org/${p.doi}`;
  if (p.pmid) return `https://europepmc.org/article/MED/${p.pmid}`;
  return `https://europepmc.org/article/${p.source}/${p.id}`;
}

export function firstAuthor(authorString?: string): string {
  if (!authorString) return "";
  const first = authorString.split(",")[0]?.trim() ?? "";
  return authorString.includes(",") ? `${first} et al.` : first;
}
