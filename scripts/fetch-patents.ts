/**
 * Worldwide radiopharmaceutical patent watch.
 *
 * Source: the JSON endpoint behind patents.google.com (`/xhr/query`). It is undocumented and needs no
 * key, and it is the only worldwide patent search this project could reach. Everything else was probed
 * on 2026-09-22 and rejected, so do not "fix" the endpoint below by swapping it for one of these:
 *   - USPTO Open Data Portal (api.uspto.gov, patent file wrapper + bulk datasets): HTTP 401 without an
 *     account key; the old developer.uspto.gov hub and ped.uspto.gov are decommissioned.
 *   - PatentsView (api.patentsview.org and search.patentsview.org): key required, connection refused.
 *   - EPO OPS (ops.epo.org): HTTP 403, "violation of Fair Use policy" without a registered key.
 *   - Espacenet and WIPO PATENTSCOPE: HTTP 403 to any non-interactive fetch (both work in a browser).
 *   - Lens.org: search UI is open, but its API and bulk export are key-gated.
 *
 * Coverage and language. Queries are run worldwide, newest publication first, so Chinese, Japanese,
 * Korean and Russian filings appear alongside US, EP and PCT ones; the per-country tally in the snapshot
 * is the point of the feed, not a side effect. Titles are returned in English (Google's own translation
 * of the original title) - this script does not translate anything itself. Applicant names come back in
 * the original script for CN/JP/KR/RU filings, so they are stored verbatim with a `lang` marker rather
 * than guessed at in English.
 *
 * Precision. A keyword search over patent full text is noisy (a search for "lutetium-177" returns
 * power-generation patents), so every hit outside the radiopharmaceutical CPC class must match
 * NUCLIDE_WORDS or a radionuclide name in its title or snippet to be kept. A query that finds nothing
 * reports zero.
 *
 *   public/patents/index.json  { fetched, source, window, queries: [...], total, kept, byCountry, byYear, items: [...] }
 *
 * Blocked address fallback. Google rate-limits this endpoint by IP address and a datacentre address can
 * stay blocked for hours. The same query payloads can therefore be collected from an ordinary browser
 * session and replayed with `--raw=<file>`: a JSON array of `{ id, total, patents: [...] }` carrying the
 * `results.cluster[].result[].patent` objects the endpoint returns, unaltered. The snapshot is built by
 * the code below either way, and records which route produced it in `mode`.
 *
 * Run: npx tsx scripts/fetch-patents.ts [--pages=2] [--query=cpc-radiopharm] [--raw=dump.json]
 * Weekly via .github/workflows/refresh-patents.yml.
 */
import { readFileSync } from "node:fs";
import { graph } from "../src/lib/graph";
import { NUCLIDE_WORDS, NameMatcher, RADIONUCLIDE_NAME, decodeEntities, getText, matchableFromGraph, publicPath, readJson, sleep, stripTags, today, writeJson } from "./feed-utils";

const OUT = publicPath("patents", "index.json");
const ENDPOINT = "https://patents.google.com/xhr/query";
const PER_PAGE = 100;
const DEFAULT_PAGES = 2;
const MAX_ITEMS = 400;

/**
 * `gated: false` is only for the CPC class A61K51 ("preparations containing radioactive substances for
 * use in therapy or testing in vivo"), which is itself the subject filter. Every other query is a
 * full-text search and is gated on the nuclear-medicine vocabulary.
 */
type Query = { id: string; label: string; q: string; gated: boolean };
const QUERIES: Query[] = [
  { id: "cpc-radiopharm", label: "CPC A61K51: radioactive preparations for therapy or in-vivo testing", q: "(A61K51/00)", gated: false },
  { id: "radioligand-therapy", label: '"radioligand therapy"', q: '"radioligand therapy"', gated: true },
  { id: "radiopharmaceutical-title", label: "radiopharmaceutical in the title", q: "TI=(radiopharmaceutical)", gated: true },
  { id: "theranostic", label: "theranostic in the title", q: "TI=(theranostic)", gated: true },
  { id: "targeted-alpha", label: '"targeted alpha therapy"', q: '"targeted alpha therapy"', gated: true },
  { id: "actinium-225", label: "actinium-225", q: '"actinium-225"', gated: true },
  { id: "lutetium-177", label: "lutetium-177", q: '"lutetium-177"', gated: true },
  { id: "psma-radioligand", label: "PSMA radioligand", q: '"PSMA" "radioligand"', gated: true },
  { id: "isotope-supply", label: "molybdenum-99 and technetium-99m generators", q: '("molybdenum-99" OR "technetium-99m") generator', gated: true },
];

/** Publication-number prefixes seen in radiopharmaceutical filings. WO is the PCT, EP the European Patent Office. */
const COUNTRY: Record<string, string> = {
  AR: "Argentina", AT: "Austria", AU: "Australia", BE: "Belgium", BR: "Brazil", CA: "Canada", CH: "Switzerland",
  CL: "Chile", CN: "China", CO: "Colombia", CZ: "Czechia", DE: "Germany", DK: "Denmark", EA: "Eurasian Patent Office",
  EP: "European Patent Office", ES: "Spain", FI: "Finland", FR: "France", GB: "United Kingdom", HU: "Hungary",
  ID: "Indonesia", IL: "Israel", IN: "India", IT: "Italy", JP: "Japan", KR: "South Korea", MX: "Mexico",
  MY: "Malaysia", NL: "Netherlands", NO: "Norway", NZ: "New Zealand", PE: "Peru", PH: "Philippines", PL: "Poland",
  PT: "Portugal", RU: "Russia", SE: "Sweden", SG: "Singapore", TR: "Turkey", TW: "Taiwan", UA: "Ukraine",
  US: "United States", WO: "PCT (WIPO)", ZA: "South Africa",
};
/** Scripts other than Latin: an applicant name in one of these is stored as-is and marked, never translated here. */
const NON_LATIN = /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uac00-\ud7af\u0400-\u04ff]/;

type GooglePatent = {
  title?: string; snippet?: string; filing_date?: string; grant_date?: string; publication_date?: string;
  inventor?: string; assignee?: string; publication_number?: string; language?: string; pdf?: string;
};
type GoogleResponse = { results?: { total_num_results?: number; cluster?: Array<{ result?: Array<{ patent?: GooglePatent }> }> } };

export type PatentItem = {
  publication: string;
  url: string;
  title: string;
  /** Applicant exactly as the source returns it. `applicantLang: "non-latin"` means the original script was kept. */
  applicant?: string;
  applicantLang?: "latin" | "non-latin";
  inventor?: string;
  published?: string;
  filed?: string;
  granted?: string;
  country: string;
  countryLabel: string;
  queries: string[];
  refs: { drugs: string[]; targets: string[]; indications: string[]; technologies: string[]; isotopes: string[]; companies: string[] };
};
type RawQuery = { id: string; total?: number; patents?: GooglePatent[] };

export type PatentsSnapshot = {
  fetched: string;
  source: string;
  /** "live" when this run queried the endpoint itself, "browser-replay" when a blocked address forced the fallback above. */
  mode: "live" | "browser-replay";
  note: string;
  queries: Array<{ id: string; label: string; query: string; total: number; returned: number; kept: number; error?: string }>;
  total: number;
  kept: number;
  /** Publication-date range of the items kept. */
  window?: { from: string; to: string };
  byCountry: Record<string, number>;
  byYear: Record<string, number>;
  items: PatentItem[];
  errors: string[];
};

const clean = (s?: string) => decodeEntities(stripTags(s ?? "")).replace(/\s+/g, " ").trim();
const countryOf = (pub: string) => (/^([A-Z]{2})/.exec(pub)?.[1] ?? "??");

/**
 * The endpoint rate-limits by IP: past a burst of queries it answers every request with a 1 KB
 * "Sorry..." HTML page under HTTP 503 until it cools off. So fetch politely, insist on a JSON body,
 * and back off for up to three minutes before giving up on a query.
 */
async function getQueryJson(inner: string): Promise<GoogleResponse | null> {
  const url = `${ENDPOINT}?url=${encodeURIComponent(inner)}`;
  for (let attempt = 0; attempt < 4; attempt++) {
    const body = await getText(url, { tries: 1, accept: "application/json", validate: (b) => b.trimStart().startsWith("{") });
    if (body) { try { return JSON.parse(body) as GoogleResponse; } catch { /* fall through to the wait */ } }
    await sleep(20_000 * (attempt + 1));
  }
  return null;
}

async function runQuery(q: Query, pages: number): Promise<{ patents: GooglePatent[]; total: number; error?: string }> {
  const patents: GooglePatent[] = [];
  let total = 0;
  for (let page = 0; page < pages; page++) {
    // The endpoint takes the whole search query as one encoded `url` parameter, exactly as the browser sends it.
    const inner = `q=${q.q}&sort=new&num=${PER_PAGE}${page ? `&page=${page}` : ""}`;
    const json = await getQueryJson(inner);
    await sleep(3000);
    if (!json?.results) return { patents, total, error: `rate-limited or no JSON on page ${page + 1}` };
    total = json.results.total_num_results ?? total;
    const got = (json.results.cluster ?? []).flatMap((c) => c.result ?? []).map((r) => r.patent).filter((p): p is GooglePatent => !!p?.publication_number);
    patents.push(...got);
    if (got.length < PER_PAGE) break;
  }
  return { patents, total };
}

async function main() {
  const pages = Number(process.argv.find((a) => a.startsWith("--pages="))?.slice(8) ?? DEFAULT_PAGES);
  const only = process.argv.find((a) => a.startsWith("--query="))?.slice(8);
  const rawPath = process.argv.find((a) => a.startsWith("--raw="))?.slice(6);
  const raw = rawPath ? (JSON.parse(readFileSync(rawPath, "utf8")) as RawQuery[]) : null;
  const queries = only ? QUERIES.filter((q) => q.id === only) : QUERIES;
  if (!queries.length) throw new Error(`unknown query ${only}`);

  const g = graph();
  const entities = matchableFromGraph(g.entities as never);
  const matcher = new NameMatcher(entities, ["drug", "target", "indication", "technology", "isotope"]);
  const companies = new NameMatcher(entities, ["company"]);
  const kindOf = (id: string) => g.get(id)?.kind;

  const snap: PatentsSnapshot = {
    fetched: today(),
    source: "https://patents.google.com/ (xhr/query, undocumented, no key)",
    mode: raw ? "browser-replay" : "live",
    note: `Worldwide, newest publication first. Titles are English as returned by the source (its own translation for non-English filings); applicant names are kept in the original script and are not matched to company records when they are. Queries other than the CPC class are gated on nuclear-medicine vocabulary. The counts by country and year cover every distinct publication found; \`items\` carries the newest ${MAX_ITEMS}.`,
    queries: [], total: 0, kept: 0, byCountry: {}, byYear: {}, items: [], errors: [],
  };

  // Previous snapshot: if the endpoint rate-limits this run, keep what was already published rather
  // than replacing a good snapshot with an empty one.
  const previous = readJson<PatentsSnapshot>(OUT);
  const seen = new Map<string, PatentItem>();
  for (const q of queries) {
    const replay = raw?.find((r) => r.id === q.id);
    const { patents, total, error } = raw
      ? { patents: replay?.patents ?? [], total: replay?.total ?? 0, error: replay ? undefined : "not present in the replay file" }
      : await runQuery(q, pages);
    let kept = 0;
    for (const p of patents) {
      const pub = p.publication_number!;
      const title = clean(p.title);
      const snippet = clean(p.snippet);
      if (!title) continue;
      if (q.gated && !NUCLIDE_WORDS.test(`${title} ${snippet}`) && !RADIONUCLIDE_NAME.test(`${title} ${snippet}`)) continue;
      kept++;
      const existing = seen.get(pub);
      if (existing) { if (!existing.queries.includes(q.id)) existing.queries.push(q.id); continue; }
      const ids = matcher.match(`${title} ${snippet}`);
      const applicant = clean(p.assignee) || undefined;
      const country = countryOf(pub);
      seen.set(pub, {
        publication: pub,
        url: `https://patents.google.com/patent/${pub}/en`,
        title,
        applicant,
        applicantLang: applicant ? (NON_LATIN.test(applicant) ? "non-latin" : "latin") : undefined,
        inventor: clean(p.inventor) || undefined,
        published: p.publication_date || undefined,
        filed: p.filing_date || undefined,
        granted: p.grant_date || undefined,
        country,
        countryLabel: COUNTRY[country] ?? country,
        queries: [q.id],
        refs: {
          drugs: ids.filter((i) => kindOf(i) === "drug"),
          targets: ids.filter((i) => kindOf(i) === "target"),
          indications: ids.filter((i) => kindOf(i) === "indication"),
          technologies: ids.filter((i) => kindOf(i) === "technology"),
          isotopes: ids.filter((i) => kindOf(i) === "isotope"),
          companies: applicant ? companies.match(applicant) : [],
        },
      });
    }
    snap.queries.push({ id: q.id, label: q.label, query: q.q, total, returned: patents.length, kept, error });
    if (error) snap.errors.push(`${q.id}: ${error}`);
    console.log(`patents: ${q.id} -> ${total} in index, ${patents.length} fetched, ${kept} relevant`);
  }

  const blocked = snap.queries.filter((q) => q.error).length;
  if (blocked && previous?.items?.length) {
    let carried = 0;
    for (const old of previous.items) if (!seen.has(old.publication)) { seen.set(old.publication, old); carried++; }
    snap.errors.push(`${blocked} of ${snap.queries.length} queries were rate-limited; carried ${carried} publications from the ${previous.fetched} snapshot`);
    console.log(`patents: ${blocked} queries blocked, carried ${carried} publications from ${previous.fetched}`);
  }

  const items = [...seen.values()].sort((a, b) => (b.published ?? "").localeCompare(a.published ?? "") || a.publication.localeCompare(b.publication));
  for (const it of items) {
    snap.byCountry[it.country] = (snap.byCountry[it.country] ?? 0) + 1;
    const year = it.published?.slice(0, 4);
    if (year) snap.byYear[year] = (snap.byYear[year] ?? 0) + 1;
  }
  snap.total = items.length;
  snap.kept = Math.min(items.length, MAX_ITEMS);
  snap.items = items.slice(0, MAX_ITEMS);
  const first = snap.items.at(-1)?.published, last = snap.items[0]?.published;
  snap.window = last && first ? { from: first, to: last } : undefined;

  writeJson(OUT, snap);
  const top = Object.entries(snap.byCountry).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([c, n]) => `${c} ${n}`).join(", ");
  console.log(`patents: ${snap.total} distinct publications, ${snap.items.length} kept -> ${OUT}`);
  console.log(`patents: by country ${top}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
