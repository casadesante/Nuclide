/**
 * Name-matching helpers shared by the sponsor and product matchers (scripts/fetch-ctgov-pipeline.ts and
 * friends): normalise a string, and build the keys a company or a product is likely to be listed under.
 * Extracted from Nuclide (https://github.com/casadesante/Nuclide), where they backed the completeness matcher.
 */


// ---------------------------------------------------------------------------------------------------
// Normalisation
// ---------------------------------------------------------------------------------------------------

/** Lowercase, no diacritics, US spellings, punctuation to spaces. "Acute lymphoblastic leukaemia" and "Acute Lymphoblastic Leukemia" agree. */
export function norm(s: string): string {
  return s
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/aemia/g, "emia").replace(/oesophag/g, "esophag").replace(/haemat/g, "hemat").replace(/paediat/g, "pediat").replace(/gynaec/g, "gynec").replace(/tumour/g, "tumor").replace(/oedema/g, "edema")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** "Enhertu (fam-trastuzumab deruxtecan-nxki)" -> ["Enhertu", "fam-trastuzumab deruxtecan-nxki"]; "Gleolan / Gliolan" -> both. */
export function nameParts(s: string): string[] {
  const out: string[] = [];
  const outer = s.replace(/\s*\([^)]*\)\s*/g, " ").trim();
  if (outer) out.push(outer);
  for (const m of s.matchAll(/\(([^)]+)\)/g)) out.push(m[1].trim());
  return out.flatMap((p) => p.split(/\s*(?:\/|;|,\s(?=[A-Z]))\s*/)).map((p) => p.trim()).filter(Boolean);
}

const SALTS = /\b(acetate|hydrochloride|mesylate|maleate|malate|tartrate|citrate|sulfate|sulphate|phosphate|sodium|potassium|calcium|disodium|dimaleate|ditosylate|tosylate|fumarate|succinate|besylate|bromide|dihydrochloride|hydrobromide|for injection|injection|oral|tablets?|capsules?|liposomal|liposome|nanoparticle|albumin bound|albumin stabilized nanoparticle formulation)\b/g;
/** Drug keys: parts of the name, aliases, brands and codes, with and without salt words and FDA biologic suffixes. */
export function drugKeys(d: { name: string; aka: string[]; brand?: string; code?: string }): Set<string> {
  const raw = [...nameParts(d.name), ...d.aka.flatMap(nameParts), ...(d.brand ? nameParts(d.brand.replace(/\(generic\)/i, "")) : []), ...(d.code ? d.code.split(/\s*[,;]\s*/) : [])];
  return keysFrom(raw);
}

function keysFrom(raw: string[]): Set<string> {
  const keys = new Set<string>();
  for (const r of raw) {
    const n = norm(r.replace(/^fam-|^ado-/i, "").replace(/-[a-z]{4}$/, ""));
    if (n.length < 3 || /^(generic|and|the)$/.test(n)) continue;
    keys.add(n);
    const loose = n.replace(SALTS, " ").replace(/\s+/g, " ").trim();
    if (loose.length >= 3) keys.add(loose);
  }
  return keys;
}

const CORP = /\b(inc|llc|ltd|limited|corporation|corp|company|co|gmbh|lp|l l c|plc|sa|ag|nv|bv|ab|kk|kabushiki kaisha|holdings?|group|usa|us|u s|and|pharmaceuticals?|pharmaceutical|pharma|biopharma|biopharmaceuticals?|biotech|biotechnology|biologics|biosciences?|therapeutics|medicines?|medicine|oncology|research|development|r and d|international|global|healthcare|health|sciences?|laboratories|labs?|s p a|spa|srl|s r l|s a s|sas|se|kgaa|a s|ltda|pty|pte|dohme|sharp|a subsidiary of|a wholly owned subsidiary of|a [a-z ]+? company|operations|products)\b/g;
/** Well-known sponsor names that differ from the Nuclide record name. Keys and values are stripped keys (see companyKey). */
const COMPANY_ALIASES: Record<string, string> = { glaxosmithkline: "gsk", "hoffmann la roche": "roche", "f hoffmann la roche": "roche", genentech: "roche", janssen: "johnson johnson", "msd": "merck", "merck sharp dohme": "merck", "merck sharp and dohme": "merck", "bristol myers squibb": "bristol myers squibb", "kite": "gilead", "loxo": "eli lilly", "seagen": "pfizer", "immunogen": "abbvie",
  // Subsidiaries that register trials under their own name (ClinicalTrials.gov lead sponsor) but belong to a corpus company.
  "suzhou suncadia": "jiangsu hengrui", "shandong suncadia": "jiangsu hengrui", "shanghai shengdi": "jiangsu hengrui", "shanghai hengrui": "jiangsu hengrui", "biotheus": "biontech", "shanghai jmt bio": "cspc", "cspc zhongqi technology": "cspc", "cspc megalith": "cspc", "aragon": "johnson johnson", "risen suzhou tech": "shanghai junshi", "klus": "sichuan kelun", "shanghai ming ju": "jw therapeutics" };

/** Normalised company name with corporate words removed: "Merck Sharp & Dohme LLC" -> "merck"; "Eli Lilly and Company" -> "eli lilly". */
export function companyKey(s: string): string {
  const n = norm(s.replace(/&/g, " "));
  const stripped = n.replace(CORP, " ").replace(/\s+/g, " ").trim();
  const k = stripped.length >= 3 ? stripped : n;
  return COMPANY_ALIASES[k] ?? k;
}

/** Company keys: the name and aliases as written and stripped, plus the names inside "(incl. X, Y)". */
export function companyKeys(c: { name: string; aka: string[] }): Set<string> {
  const raw = [...nameParts(c.name.replace(/incl\.?\s*/i, "")), ...c.aka.flatMap(nameParts)];
  const keys = new Set<string>();
  for (const r of raw) {
    const n = norm(r.replace(/&/g, " "));
    if (n.length >= 3) keys.add(n);
    const k = companyKey(r);
    if (k.length >= 3) keys.add(k);
  }
  return keys;
}
