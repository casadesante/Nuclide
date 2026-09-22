/**
 * Non-English and rest-of-world market watch: regulators, EU trials and research output by country,
 * reported in English.
 *
 * Every source below was probed on 2026-09-22 and returns data to a plain script with no key. The
 * blocked ones are listed too, so a later agent does not "fix" a working URL or waste a day on one
 * that cannot work:
 *   WORKS  Health Canada Drug Product Database API - JSON, carries a "Radiopharmaceutical" class.
 *   WORKS  Swissmedic authorised-medicines list (xlsx) - carries the class "Radiopharmazeutika".
 *   WORKS  NMPA English site (news.html, drugs.html) - the regulator's own English announcements.
 *   WORKS  MFDS English news board - Korea's own English press releases.
 *   WORKS  CTIS public API (POST only) - EU trials, which is where French, German, Spanish and
 *          Italian sponsors and sites show up.
 *   WORKS  Europe PMC - publication counts and newest English titles by affiliation country.
 *   WATCH  PMDA publishes its English list of approved drugs as one cumulative PDF. There is no
 *          per-year English file and no PDF parser in CI, so this script watches the file for a new
 *          edition and the Sunday review reads it when it changes.
 *   BLOCKED NMPA drug database (datasearch, HTTP 412 to a script, empty category list in a browser);
 *          ChiCTR search (HTTP 405 to a plain GET, browser only); CDSCO approved-new-drugs PDFs
 *          (WAF 403 to any script); TGA ARTG (no response to this network); ANVISA (Cloudflare 403);
 *          MHRA products search (renders results client-side, nothing in the HTML).
 *
 * Language rule: nothing here is machine-translated. NMPA and MFDS publish these items in English
 * themselves; Swissmedic product names are German or French and are stored verbatim with a `lang`
 * marker; Europe PMC titles are the English titles the publisher deposited. Where a name is not in
 * English it is marked, not guessed at.
 *
 *   public/global/index.json  { fetched, regulators: {...}, euTrials: {...}, research: {...}, errors }
 *
 * Run: npx tsx scripts/fetch-global.ts [--section=canada|switzerland|china|korea|japan|trials|research]
 * Weekly via .github/workflows/refresh-global.yml.
 */
import { NUCLIDE_WORDS, NameMatcher, RADIONUCLIDE_NAME, decodeEntities, getBuffer, getJson, getText, isoDaysAgo, matchableFromGraph, parseSheet, publicPath, readJson, sleep, stripTags, today, writeJson, zipEntries } from "./feed-utils";
import { graph } from "../src/lib/graph";

const OUT = publicPath("global", "index.json");
const RESEARCH_DAYS = 365;

const HC_API = "https://health-products.canada.ca/api/drug/drugproduct/?lang=en";
const HC_STATUS = "https://health-products.canada.ca/api/drug/status/?lang=en";
const SWISS_XLSX = "https://www.swissmedic.ch/dam/swissmedic/en/dokumente/internetlisten/zugelassene_arzneimittel_ham_ind.xlsx.download.xlsx/Zugelassene_Arzneimittel_HAM.xlsx";
const NMPA_PAGES = ["https://english.nmpa.gov.cn/news.html", "https://english.nmpa.gov.cn/drugs.html"];
const MFDS_LIST = "https://www.mfds.go.kr/eng/brd/m_61/list.do";
const PMDA_PDF = "https://www.pmda.go.jp/files/000281190.pdf";
const CTIS_SEARCH = "https://euclinicaltrials.eu/ctis-public-api/search";
const EPMC = "https://www.ebi.ac.uk/europepmc/webservices/rest/search";

/** Terms run against the CTIS public API. Each is a whole-record text match. */
const CTIS_TERMS = ["radioligand", "lutetium", "actinium", "radiopharmaceutical", "PSMA"];
/** Affiliation countries tracked in Europe PMC. The point of the list is the non-English-speaking ones. */
// Affiliation strings, checked against Europe PMC on 2026-09-22: "Korea" returns 832 papers where
// "South Korea" returns 158, because most Korean affiliations write "Republic of Korea".
const RESEARCH_COUNTRIES = ["China", "Japan", "Korea", "India", "Germany", "France", "Italy", "Spain", "Taiwan", "Brazil", "Turkey", "Russia"];
const RESEARCH_TERMS = '(radioligand OR radiopharmaceutical OR theranostic OR "nuclear medicine" OR radionuclide)';

export type ProductRow = { id?: string; name: string; company?: string; date?: string; status?: string; lang?: string; url?: string; refs?: string[] };
export type NoticeRow = { title: string; url: string; date?: string; refs?: string[] };
export type TrialRow = { ctNumber: string; title: string; sponsor?: string; phase?: string; status?: string; countries: string[]; started?: string; conditions?: string; url: string; terms: string[]; refs?: string[] };
export type CountryResearch = { country: string; count: number; newest: Array<{ title: string; journal?: string; date?: string; doi?: string; url: string }>; error?: string };

export type GlobalSnapshot = {
  fetched: string;
  note: string;
  regulators: {
    canada?: { source: string; total: number; marketed: number; rows: ProductRow[]; error?: string };
    switzerland?: { source: string; asOf?: string; total: number; rows: ProductRow[]; note: string; error?: string };
    china?: { source: string; scanned: number; latest?: string; matches: NoticeRow[]; error?: string };
    korea?: { source: string; scanned: number; matches: NoticeRow[]; error?: string };
    japan?: { source: string; bytes?: number; lastModified?: string; changed?: boolean; note: string; error?: string };
  };
  euTrials?: { source: string; terms: string[]; total: number; byCountry: Record<string, number>; items: TrialRow[]; error?: string };
  research?: { source: string; window: { from: string; to: string }; query: string; worldwide?: number; countries: CountryResearch[]; error?: string };
  errors: string[];
};

const txt = (s?: string) => decodeEntities(stripTags(s ?? "")).replace(/\s+/g, " ").trim();
const isRadio = (s: string) => NUCLIDE_WORDS.test(s) || RADIONUCLIDE_NAME.test(s);

// ---------------------------------------------------------------- Canada

type HcRow = { drug_code?: number; class_name?: string; drug_identification_number?: string; brand_name?: string; company_name?: string; last_update_date?: string };
type HcStatus = { drug_code?: number; status?: string; original_market_date?: string };

async function canada(match: (s: string) => string[]): Promise<GlobalSnapshot["regulators"]["canada"]> {
  const all = await getJson<HcRow[]>(HC_API);
  if (!Array.isArray(all)) return { source: HC_API, total: 0, marketed: 0, rows: [], error: "Drug Product Database unreachable" };
  // The product list carries no status, so the separate status table says which are still marketed.
  const statuses = await getJson<HcStatus[]>(HC_STATUS);
  const live = new Map((Array.isArray(statuses) ? statuses : []).map((r) => [r.drug_code, r.status]));
  const rows = all
    .filter((r) => r.class_name === "Radiopharmaceutical")
    .map((r) => ({
      name: txt(r.brand_name),
      company: txt(r.company_name) || undefined,
      date: r.last_update_date?.slice(0, 10),
      status: live.get(r.drug_code) ?? "unknown",
      url: `https://health-products.canada.ca/dpd-bdpp/info?lang=eng&code=${r.drug_code}`,
      refs: match(txt(r.brand_name)),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return { source: HC_API, total: rows.length, marketed: rows.filter((r) => r.status === "Marketed").length, rows };
}

// ---------------------------------------------------------------- Switzerland

async function switzerland(match: (s: string) => string[]): Promise<GlobalSnapshot["regulators"]["switzerland"]> {
  const note = "Product names are Swissmedic's own German and French listings and are not translated here; the class column 'Radiopharmazeutika' is the filter.";
  const buf = await getBuffer(SWISS_XLSX);
  if (!buf) return { source: SWISS_XLSX, total: 0, rows: [], note, error: "Swissmedic list unreachable" };
  const entries = zipEntries(buf);
  const sheet = entries.get("xl/worksheets/sheet1.xml"), shared = entries.get("xl/sharedStrings.xml");
  if (!sheet) return { source: SWISS_XLSX, total: 0, rows: [], note, error: "Swissmedic workbook has no first sheet" };
  const records = parseSheet(sheet.toString("utf8"), shared?.toString("utf8") ?? "");
  // Columns: A authorisation number, C product name, D holder, E class, H first authorisation date.
  const asOf = records.map((r) => r.D).find((v) => v?.startsWith("Stand"))?.match(/\d{4}-\d{2}-\d{2}|\d{2}\.\d{2}\.\d{4}/)?.[0];
  const rows = records
    .filter((r) => r.E === "Radiopharmazeutika")
    .map((r) => ({ id: r.A, name: r.C ?? "", company: r.D, date: r.H?.slice(0, 10), lang: "de-fr", refs: match(r.C ?? "") }))
    .filter((r) => r.name)
    .sort((a, b) => a.name.localeCompare(b.name));
  return { source: SWISS_XLSX, asOf, total: rows.length, rows, note };
}

// ---------------------------------------------------------------- China and Korea (regulator announcements, published in English by the regulator)

function links(html: string, pattern: RegExp, base: string): NoticeRow[] {
  const out: NoticeRow[] = [];
  for (const m of html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)) {
    const href = m[1], title = txt(m[2]);
    if (!pattern.test(href) || title.length < 12) continue;
    const url = href.startsWith("http") ? href : new URL(href, base).toString();
    const date = /(\d{4})-(\d{2})\/(\d{2})\//.exec(href);
    out.push({ title, url, date: date ? `${date[1]}-${date[2]}-${date[3]}` : undefined });
  }
  return out.filter((r, i, a) => a.findIndex((x) => x.url === r.url) === i);
}

async function china(match: (s: string) => string[]): Promise<GlobalSnapshot["regulators"]["china"]> {
  const seen: NoticeRow[] = [];
  for (const page of NMPA_PAGES) {
    const html = await getText(page);
    await sleep(800);
    if (!html) continue;
    seen.push(...links(html, /c_\d+\.htm/, page));
  }
  if (!seen.length) return { source: NMPA_PAGES[0], scanned: 0, matches: [], error: "NMPA English list pages unreachable" };
  const dated = seen.filter((r) => r.date).sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  const matches = seen.filter((r) => isRadio(r.title)).map((r) => ({ ...r, refs: match(r.title) }));
  return { source: NMPA_PAGES.join(" , "), scanned: seen.length, latest: dated[0]?.date, matches };
}

async function korea(match: (s: string) => string[]): Promise<GlobalSnapshot["regulators"]["korea"]> {
  const html = await getText(MFDS_LIST);
  if (!html) return { source: MFDS_LIST, scanned: 0, matches: [], error: "MFDS English board unreachable" };
  const rows = links(html, /view\.do\?seq=\d+/, MFDS_LIST);
  const matches = rows.filter((r) => isRadio(r.title)).map((r) => ({ ...r, refs: match(r.title) }));
  return { source: MFDS_LIST, scanned: rows.length, matches };
}

// ---------------------------------------------------------------- Japan (edition watch)

async function japan(previous?: GlobalSnapshot): Promise<GlobalSnapshot["regulators"]["japan"]> {
  const note = "PMDA publishes one cumulative English list of approved drugs (April 2004 onwards) as a PDF. There is no per-year English file and no PDF parser here, so a change in the file is a flag to re-read it, not an automatic corpus update.";
  try {
    const r = await fetch(PMDA_PDF, { method: "HEAD", headers: { "User-Agent": "Mozilla/5.0" } });
    if (!r.ok) return { source: PMDA_PDF, note, error: `PMDA list HTTP ${r.status}` };
    const bytes = Number(r.headers.get("content-length") ?? 0) || undefined;
    const lastModified = r.headers.get("last-modified") ?? undefined;
    const before = previous?.regulators?.japan;
    const changed = !!before?.bytes && !!bytes && before.bytes !== bytes;
    return { source: PMDA_PDF, bytes, lastModified, changed, note };
  } catch (e) {
    return { source: PMDA_PDF, note, error: `PMDA list unreachable: ${(e as Error).message}` };
  }
}

// ---------------------------------------------------------------- EU trials (CTIS)

type CtisRecord = { ctNumber?: string; ctTitle?: string; sponsor?: string; trialPhase?: string; ctStatus?: string | number; trialCountries?: string[]; startDateEU?: string; conditions?: string };

async function euTrials(match: (s: string) => string[]): Promise<GlobalSnapshot["euTrials"]> {
  const byNumber = new Map<string, TrialRow>();
  const errors: string[] = [];
  for (const term of CTIS_TERMS) {
    let ok = false;
    try {
      const r = await fetch(CTIS_SEARCH, {
        method: "POST",
        headers: { "Content-Type": "application/json", "User-Agent": "Mozilla/5.0", Accept: "application/json" },
        body: JSON.stringify({ pagination: { page: 1, size: 100 }, searchCriteria: { containAll: term } }),
      });
      if (r.ok) {
        const json = (await r.json()) as { data?: CtisRecord[] };
        for (const t of json.data ?? []) {
          const num = t.ctNumber;
          if (!num) continue;
          const existing = byNumber.get(num);
          if (existing) { if (!existing.terms.includes(term)) existing.terms.push(term); continue; }
          const title = txt(t.ctTitle);
          byNumber.set(num, {
            ctNumber: num,
            title,
            sponsor: txt(t.sponsor) || undefined,
            phase: txt(t.trialPhase) || undefined,
            status: typeof t.ctStatus === "string" ? t.ctStatus : undefined,
            countries: (t.trialCountries ?? []).map((c) => c.split(":")[0]).filter(Boolean),
            started: t.startDateEU,
            conditions: txt(t.conditions).slice(0, 200) || undefined,
            url: `https://euclinicaltrials.eu/ctis-public/view/${num}`,
            terms: [term],
            refs: match(`${title} ${txt(t.conditions)}`),
          });
        }
        ok = true;
      } else errors.push(`CTIS "${term}" HTTP ${r.status}`);
    } catch (e) { errors.push(`CTIS "${term}": ${(e as Error).message}`); }
    await sleep(1000);
    console.log(`global: CTIS ${term} ${ok ? "ok" : "failed"}, ${byNumber.size} trials so far`);
  }
  const items = [...byNumber.values()].sort((a, b) => (b.started ?? "").localeCompare(a.started ?? ""));
  const byCountry: Record<string, number> = {};
  for (const t of items) for (const c of new Set(t.countries)) byCountry[c] = (byCountry[c] ?? 0) + 1;
  return { source: CTIS_SEARCH, terms: CTIS_TERMS, total: items.length, byCountry, items, error: errors.length ? errors.join("; ") : undefined };
}

// ---------------------------------------------------------------- Research output by country (Europe PMC)

type EpmcResult = { title?: string; journalTitle?: string; firstPublicationDate?: string; doi?: string; pmid?: string; id?: string; source?: string };

/** Europe PMC answers intermittently under a burst of country queries, so a miss is retried and a
 * failure is reported as a failure - never as a count of zero. */
async function epmc(query: string, rows: number): Promise<{ count: number; items: EpmcResult[] } | null> {
  const url = `${EPMC}?query=${encodeURIComponent(query)}&format=json&pageSize=${rows}&sort=${encodeURIComponent("P_PDATE_D desc")}`;
  for (let attempt = 0; attempt < 3; attempt++) {
    const json = await getJson<{ hitCount?: number; resultList?: { result?: EpmcResult[] } }>(url);
    if (json && typeof json.hitCount === "number") return { count: json.hitCount, items: json.resultList?.result ?? [] };
    await sleep(4000 * (attempt + 1));
  }
  return null;
}

async function research(): Promise<GlobalSnapshot["research"]> {
  const from = isoDaysAgo(RESEARCH_DAYS), to = today();
  const window = `FIRST_PDATE:[${from} TO ${to}]`;
  const base = { source: EPMC, window: { from, to }, query: `${RESEARCH_TERMS} AND AFF:"<country>" AND ${window}` };
  const world = await epmc(`${RESEARCH_TERMS} AND ${window}`, 1);
  const countries: CountryResearch[] = [];
  for (const country of RESEARCH_COUNTRIES) {
    const r = await epmc(`${RESEARCH_TERMS} AND AFF:"${country}" AND ${window}`, 5);
    await sleep(700);
    if (!r) { countries.push({ country, count: 0, newest: [], error: "Europe PMC did not answer" }); console.log(`global: Europe PMC ${country} FAILED`); continue; }
    countries.push({
      country,
      count: r.count,
      newest: r.items.map((i) => ({
        title: txt(i.title),
        journal: i.journalTitle,
        date: i.firstPublicationDate,
        doi: i.doi,
        url: i.doi ? `https://doi.org/${i.doi}` : `https://europepmc.org/article/${i.source ?? "MED"}/${i.id ?? i.pmid ?? ""}`,
      })),
    });
    console.log(`global: Europe PMC ${country} ${r.count}`);
  }
  countries.sort((a, b) => b.count - a.count);
  const failed = countries.filter((c) => c.error).map((c) => c.country);
  return { ...base, worldwide: world?.count, countries, error: failed.length ? `no answer for ${failed.join(", ")}` : undefined };
}

// ---------------------------------------------------------------- main

async function main() {
  const only = process.argv.find((a) => a.startsWith("--section="))?.slice(10);
  const want = (s: string) => !only || only === s;
  const previous = readJson<GlobalSnapshot>(OUT) ?? undefined;

  const g = graph();
  const matcher = new NameMatcher(matchableFromGraph(g.entities as never), ["drug", "company", "target", "indication", "isotope", "technology"]);
  const match = (s: string) => (s ? matcher.match(s) : []);

  const snap: GlobalSnapshot = {
    fetched: today(),
    note: "Regulators, trials and research output outside the US and the English-speaking world. Nothing here is machine-translated: sources are used in the English their own publisher provides, and names that are not in English are marked.",
    regulators: {},
    errors: [],
  };

  if (want("canada")) { snap.regulators.canada = await canada(match); console.log(`global: Canada ${snap.regulators.canada?.total ?? 0} radiopharmaceutical products (${snap.regulators.canada?.marketed ?? 0} marketed)`); }
  if (want("switzerland")) { snap.regulators.switzerland = await switzerland(match); console.log(`global: Switzerland ${snap.regulators.switzerland?.total ?? 0} authorisations`); }
  if (want("china")) { snap.regulators.china = await china(match); console.log(`global: NMPA ${snap.regulators.china?.scanned ?? 0} announcements scanned, ${snap.regulators.china?.matches.length ?? 0} radiopharmaceutical`); }
  if (want("korea")) { snap.regulators.korea = await korea(match); console.log(`global: MFDS ${snap.regulators.korea?.scanned ?? 0} notices scanned, ${snap.regulators.korea?.matches.length ?? 0} radiopharmaceutical`); }
  if (want("japan")) { snap.regulators.japan = await japan(previous); console.log(`global: PMDA list ${snap.regulators.japan?.bytes ?? "?"} bytes, changed=${snap.regulators.japan?.changed ?? false}`); }
  if (want("trials")) { snap.euTrials = await euTrials(match); console.log(`global: CTIS ${snap.euTrials?.total ?? 0} trials`); }
  if (want("research")) { snap.research = await research(); }

  // Keep the sections a filtered run did not touch.
  if (only && previous) {
    snap.regulators = { ...previous.regulators, ...snap.regulators };
    snap.euTrials ??= previous.euTrials;
    snap.research ??= previous.research;
  }

  for (const [name, section] of Object.entries(snap.regulators)) if (section?.error) snap.errors.push(`${name}: ${section.error}`);
  if (snap.euTrials?.error) snap.errors.push(`euTrials: ${snap.euTrials.error}`);
  if (snap.research?.error) snap.errors.push(`research: ${snap.research.error}`);

  writeJson(OUT, snap);
  console.log(`global: ${snap.errors.length} errors -> ${OUT}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
