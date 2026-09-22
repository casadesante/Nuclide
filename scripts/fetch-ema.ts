/**
 * Regional approvals check (improvement #93): EMA (with MHRA and PMDA notes).
 *
 * EMA publishes its whole human-medicines register as a spreadsheet, regenerated daily
 * (https://www.ema.europa.eu/en/documents/report/medicines-output-medicines-report_en.xlsx). The file is a
 * plain zip of XML, so it is read here with node:zlib and no dependencies. Every row whose INN, active substance
 * or name matches a corpus product is compared with src/data/regional-approvals.ts:
 *
 *   - matching status and a live EPAR URL -> the EU row is "verified" (public/regional/verified.json, and the
 *     EPAR_CHECKED stamp in regional-approvals.ts is moved to today when every checked row passes);
 *   - no EU row, or a different status (authorised vs withdrawn, conditional vs full) -> a candidate;
 *   - radiopharmaceutical rows (ATC V09 diagnostic, V10 therapeutic, or a nuclear-medicine name, area or
 *     indication) with no corpus product -> "not in corpus".
 *
 * MHRA: products.mhra.gov.uk is a JavaScript application with no documented public API, and PMDA publishes
 * its approvals list as PDF only. Both are recorded as "manual" sources with links; their rows in
 * regional-approvals.ts remain hand-verified.
 *
 * Writes public/regional/candidates.json and public/regional/verified.json.
 * Run: npx tsx scripts/fetch-ema.ts [--no-stamp]   Weekly via .github/workflows/refresh-regional.yml.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { graph } from "../src/lib/graph";
import { REGION_META, regionalApprovals, type RegionalStatus } from "../src/data/regional-approvals";
import { NUCLIDE_WORDS, NameMatcher, getBuffer, matchableFromGraph, parseSheet, publicPath, today, writeJson, zipEntries } from "./feed-utils";

const EMA_XLSX = "https://www.ema.europa.eu/en/documents/report/medicines-output-medicines-report_en.xlsx";
const OUT = publicPath("regional", "candidates.json");
const VERIFIED_OUT = publicPath("regional", "verified.json");
const DATA_FILE = join(process.cwd(), "src", "data", "regional-approvals.ts");
const STAMP = !process.argv.includes("--no-stamp");

export type EmaRow = { name: string; productNumber?: string; status: string; generic: boolean; biosimilar: boolean; opinionStatus?: string; inn?: string; substance?: string; therapeuticArea?: string; atc?: string; conditional: boolean; authorised?: string; withdrawn?: string; refused?: string; holder?: string; url?: string; indication?: string };
export type RegionalCandidate = { region: "EU"; drugId?: string; product: string; inn?: string; reason: "missing-row" | "status-mismatch" | "year-mismatch" | "not-in-corpus"; recorded?: string; register: string; date?: string; /** Date the marketing authorisation was withdrawn, when the register records one (so a "withdrawn" row can be written without a second lookup). */ withdrawn?: string; url?: string; indication?: string };
export type RegionalVerified = { drugId: string; region: "EU"; status: string; year?: number; url?: string; verifiedOn: string };
export type RegionalSnapshot = {
  fetched: string; sources: { ema: string; mhra: { url: string; note: string }; pmda: { url: string; note: string } };
  register: { rows: number; human: number; radiopharmaceutical: number; generatedOn?: string };
  verified: RegionalVerified[]; candidates: RegionalCandidate[]; errors: string[];
};

const toIso = (s?: string) => { if (!s) return undefined; const m = s.match(/^(\d{2})\/(\d{2})\/(\d{4})/); return m ? `${m[3]}-${m[2]}-${m[1]}` : s.match(/^\d{4}-\d{2}-\d{2}/)?.[0]; };

/** The shared nuclear-medicine word list; OnCo filtered this register with an oncology word list instead. */
const NUCLIDE = NUCLIDE_WORDS;
/**
 * Rows worth looking at: ATC V09 (diagnostic radiopharmaceuticals) and V10 (therapeutic radiopharmaceuticals),
 * or a name, therapeutic area or indication that reads as nuclear medicine. OnCo used ATC L01/L02 here, the
 * cytostatics and endocrine therapy classes, which is exactly the set a radiopharmaceutical is not in.
 */
function isRadiopharmaceutical(r: EmaRow): boolean {
  return /^V(09|10)/.test(r.atc ?? "") || NUCLIDE.test(r.therapeuticArea ?? "") || NUCLIDE.test(r.indication ?? "") || NUCLIDE.test(r.name) || NUCLIDE.test(r.substance ?? "") || NUCLIDE.test(r.inn ?? "");
}

function statusOf(r: EmaRow): RegionalStatus | "other" {
  const s = r.status.toLowerCase();
  if (s.startsWith("authorised")) return r.conditional ? "conditional" : "approved";
  if (s.startsWith("withdrawn")) return "withdrawn";
  if (s.startsWith("refused")) return "rejected";
  if (s.includes("under evaluation") || s.includes("opinion")) return "under-review";
  return "other";
}

async function main() {
  const g = graph();
  // Combination regimens (FOLFOX, CAPTEM) are not EMA medicines; their components are, so they are kept out of the matcher.
  const products = g.kind("drug").filter((d) => !/regimen/i.test(d.modality ?? ""));
  const matcher = new NameMatcher(matchableFromGraph(products as never), ["drug"]);
  // An INN that is exactly a product's name beats the alias matcher.
  const normName = (s: string) => s.toLowerCase().replace(/\(.*?\)/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  const exact = new Map<string, string>();
  for (const d of products) if (!exact.has(normName(d.name))) exact.set(normName(d.name), d.id);
  const snap: RegionalSnapshot = {
    fetched: today(), register: { rows: 0, human: 0, radiopharmaceutical: 0 }, verified: [], candidates: [], errors: [],
    sources: {
      ema: EMA_XLSX,
      mhra: { url: REGION_META.UK.url, note: "MHRA's products site has no documented public API; UK rows stay hand-verified against the SmPC search." },
      pmda: { url: REGION_META.JP.url, note: "PMDA publishes its list of approved products as PDF only; Japanese rows stay hand-verified." },
    },
  };

  const buf = await getBuffer(EMA_XLSX);
  if (!buf) { snap.errors.push("EMA spreadsheet unreachable"); writeJson(OUT, snap); process.exit(0); }
  const entries = zipEntries(buf);
  const sheet = entries.get("xl/worksheets/sheet1.xml"), shared = entries.get("xl/sharedStrings.xml");
  if (!sheet) { snap.errors.push("EMA spreadsheet has no sheet1"); writeJson(OUT, snap); process.exit(0); }
  const rows = parseSheet(sheet.toString("utf8"), shared?.toString("utf8") ?? "");
  const gen = rows.find((r) => Object.values(r).some((v) => /^\d{2}\/\d{2}\/\d{4}/.test(v)) && Object.values(r).some((v) => /generated/i.test(v)));
  snap.register.generatedOn = toIso(Object.values(gen ?? {}).find((v) => /^\d{2}\/\d{2}\/\d{4}/.test(v)));
  const headerIdx = rows.findIndex((r) => Object.values(r).includes("Category") && Object.values(r).includes("Name of medicine"));
  if (headerIdx < 0) { snap.errors.push("EMA header row not found"); writeJson(OUT, snap); process.exit(0); }
  const header = rows[headerIdx];
  const col = (label: RegExp) => Object.entries(header).find(([, v]) => label.test(v))?.[0];
  const C = { cat: col(/^Category/), name: col(/^Name of medicine/), num: col(/^EMA product number/), status: col(/^Medicine status/), opinion: col(/^Opinion status/), inn: col(/^International non-proprietary/), subst: col(/^Active substance/), area: col(/^Therapeutic area/), atc: col(/^ATC code \(human\)/), ind: col(/^Therapeutic indication/), cond: col(/^Conditional approval/), generic: col(/^Generic/), biosimilar: col(/^Biosimilar/), holder: col(/^Marketing authorisation developer/), auth: col(/^Marketing authorisation date/), withdrawn: col(/^Withdrawal \/ expiry/), refused: col(/^Refusal of marketing/), url: col(/^Medicine URL/) };
  const get = (r: Record<string, string>, k?: string) => (k ? r[k] : undefined);

  const ema: EmaRow[] = [];
  for (const r of rows.slice(headerIdx + 1)) {
    if (get(r, C.cat) !== "Human") continue;
    const name = get(r, C.name); if (!name) continue;
    ema.push({ name, productNumber: get(r, C.num), status: get(r, C.status) ?? "", opinionStatus: get(r, C.opinion), inn: get(r, C.inn), substance: get(r, C.subst), therapeuticArea: get(r, C.area), atc: get(r, C.atc), conditional: /yes/i.test(get(r, C.cond) ?? ""), generic: /yes/i.test(get(r, C.generic) ?? ""), biosimilar: /yes/i.test(get(r, C.biosimilar) ?? ""), authorised: toIso(get(r, C.auth)), withdrawn: toIso(get(r, C.withdrawn)), refused: toIso(get(r, C.refused)), holder: get(r, C.holder), url: get(r, C.url), indication: get(r, C.ind)?.slice(0, 300) });
  }
  snap.register.rows = rows.length - headerIdx - 1;
  snap.register.human = ema.length;
  const nuclide = ema.filter(isRadiopharmaceutical);
  snap.register.radiopharmaceutical = nuclide.length;
  console.log(`ema: ${rows.length} rows, ${ema.length} human medicines, ${nuclide.length} radiopharmaceutical (register generated ${snap.register.generatedOn ?? "?"})`);

  const matchedIds = new Set<string>();
  const perDrug = new Map<string, EmaRow[]>();
  for (const r of nuclide) {
    const q = r.inn ?? r.substance ?? r.name;
    const id = exact.get(normName(q)) ?? matcher.best(q) ?? matcher.best(r.name);
    const st = statusOf(r);
    if (!id) {
      // Only originator medicines are worth a new record; generics and biosimilars of products we do not track are noise.
      if (!r.generic && !r.biosimilar && (st === "approved" || st === "conditional" || st === "under-review")) snap.candidates.push({ region: "EU", product: r.name, inn: r.inn, reason: "not-in-corpus", register: r.status, date: r.authorised, url: r.url, indication: r.indication });
      continue;
    }
    matchedIds.add(id);
    perDrug.set(id, [...(perDrug.get(id) ?? []), r]);
  }
  // A product is one INN but often many EU medicines (originator, generics, biosimilars). Judge the product by its
  // originator medicines when it has any, otherwise by all of them: approved if any is authorised, withdrawn only
  // when none remains, first year = earliest authorisation.
  for (const [id, meds] of perDrug) {
    const originators = meds.filter((m) => !m.generic && !m.biosimilar);
    const pool = originators.length ? originators : meds;
    const row = regionalApprovals[id]?.EU;
    // When the row cites a specific EPAR, judge by that medicine rather than by the INN's earliest product (Inaqovi, not
    // Dacogen, for decitabine-cedazuridine; Zytiga, not Akeega, for abiraterone).
    const sameUrl = (a?: string, b?: string) => !!a && !!b && a.toLowerCase().replace(/\/$/, "") === b.toLowerCase().replace(/\/$/, "");
    const cited = meds.find((m) => sameUrl(row?.source, m.url));
    const authorised = pool.filter((m) => statusOf(m) === "approved" || statusOf(m) === "conditional");
    const lead = cited ?? authorised.sort((a, b) => (a.authorised ?? "9999").localeCompare(b.authorised ?? "9999"))[0] ?? pool.sort((a, b) => (b.authorised ?? b.withdrawn ?? b.refused ?? "").localeCompare(a.authorised ?? a.withdrawn ?? a.refused ?? ""))[0];
    const st = cited ? statusOf(cited) : authorised.length ? (authorised.every((m) => m.conditional) ? "conditional" : "approved") : statusOf(lead);
    const registerText = !cited && authorised.length ? `${lead.status}${st === "conditional" ? " (conditional)" : ""}` : `${lead.status}${lead.conditional ? " (conditional)" : ""}`;
    const year = lead.authorised ? Number(lead.authorised.slice(0, 4)) : undefined;
    const base = { region: "EU" as const, drugId: id, product: lead.name, inn: lead.inn, url: lead.url, indication: lead.indication, withdrawn: lead.withdrawn };
    if (!row) { snap.candidates.push({ ...base, reason: "missing-row", register: registerText, date: lead.authorised ?? lead.refused ?? lead.withdrawn }); continue; }
    const recordedApproved = row.status === "approved" || row.status === "conditional";
    const registerApproved = st === "approved" || st === "conditional";
    if (recordedApproved !== registerApproved && st !== "other") { snap.candidates.push({ ...base, reason: "status-mismatch", recorded: row.status, register: registerText, date: lead.authorised ?? lead.withdrawn ?? lead.refused }); continue; }
    // Without a cited EPAR, the centralised register (1995 onwards) cannot contradict an earlier national approval, so only
    // an authorisation that predates the recorded year counts as a disagreement.
    if (recordedApproved && row.year && year && (cited ? Math.abs(row.year - year) > 1 : year < row.year - 1)) { snap.candidates.push({ ...base, reason: "year-mismatch", recorded: String(row.year), register: `authorised ${lead.authorised}`, date: lead.authorised }); continue; }
    if (st !== "other") snap.verified.push({ drugId: id, region: "EU", status: row.status, year: row.year, url: lead.url, verifiedOn: snap.fetched });
  }
  // One verified entry per product (a product can have several EU medicines, e.g. biosimilars).
  const seen = new Set<string>();
  snap.verified = snap.verified.filter((v) => { if (seen.has(v.drugId)) return false; seen.add(v.drugId); return true; });
  // A candidate should not also be listed as verified.
  const cand = new Set(snap.candidates.map((c) => c.drugId).filter(Boolean));
  snap.verified = snap.verified.filter((v) => !cand.has(v.drugId));
  snap.candidates.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));

  writeJson(OUT, snap);
  writeJson(VERIFIED_OUT, { fetched: snap.fetched, source: EMA_XLSX, EU: Object.fromEntries(snap.verified.map((v) => [v.drugId, v.verifiedOn])) });
  console.log(`ema: ${snap.verified.length} EU rows verified, ${snap.candidates.length} candidates (${snap.candidates.filter((c) => c.reason === "not-in-corpus").length} not in corpus) -> ${OUT}`);

  // Stamp the data file when every EU row we hold and the register both know about agrees.
  const euRows = Object.entries(regionalApprovals).filter(([, r]) => r.EU).map(([id]) => id);
  const checked = euRows.filter((id) => matchedIds.has(id));
  const disagreeing = snap.candidates.filter((c) => c.drugId && c.reason !== "not-in-corpus").length;
  if (STAMP && checked.length && disagreeing === 0) {
    const src = readFileSync(DATA_FILE, "utf8");
    const next = src.replace(/export const EPAR_CHECKED = "\d{4}-\d{2}-\d{2}";/, `export const EPAR_CHECKED = "${snap.fetched}";`);
    if (next !== src) { writeFileSync(DATA_FILE, next); console.log(`ema: stamped EPAR_CHECKED = ${snap.fetched} (${checked.length} EU rows agree with the register)`); }
  } else if (STAMP) console.log(`ema: not stamping (${disagreeing} disagreements, ${checked.length} rows checked)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
