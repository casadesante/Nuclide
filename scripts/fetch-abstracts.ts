/**
 * Congress and supplement harvest (improvement #94).
 *
 * What is actually available, checked against Crossref on 2026-09-22 rather than assumed:
 *   - The SNMMI Annual Meeting and EANM Congress abstract books are NOT deposited with DOIs. JNM
 *     (ISSN 0161-5505) has 263 works in 2026 and its only supplement issue is "Supplement 2", a
 *     September theranostics review supplement; EJNMMI (1619-7070) has no supplement issue at all
 *     in the autumn 2025 congress window. So a Crossref sweep cannot return SNMMI or EANM abstracts,
 *     and this script does not pretend to: for those two it harvests the journal's supplement issues
 *     over the whole year, which is the review content published around each congress.
 *   - ASCO GU does deposit its abstracts, as Journal of Clinical Oncology supplements (979 works in
 *     the 2026 window, 890 of them abstracts), and that is where most PSMA radioligand data is first
 *     presented, so the ASCO GU sweep is additionally gated on a nuclear-medicine keyword.
 *
 * Titles are matched against Nuclide product, trial, target and indication names; a run that finds
 * nothing reports zero rather than widening its filter.
 *
 * Fork note: OnCo harvested ASCO, ESMO, ASH and SABCS. ASCO GU is kept because prostate theranostics
 * is presented there; the other three were replaced by the nuclear-medicine journals.
 *
 *   public/digests/candidates.json  { fetched, congress: { id, label, year, window, source }, total, items: [...] }
 *
 * Run: npx tsx scripts/fetch-abstracts.ts [--congress=snmmi|eanm|asco-gu] [--year=2026]
 * Weekly via .github/workflows/refresh-pulse.yml; the script picks the most recent window by default.
 */
import { graph } from "../src/lib/graph";
import { NUCLIDE_WORDS, NameMatcher, getJson, matchableFromGraph, publicPath, sleep, stripTags, today, writeJson } from "./feed-utils";

const MAILTO = "casa@casadesante.com";
const OUT = publicPath("digests", "candidates.json");
const MAX_PAGES = 12; // 1,000 records per page
const MAX_ITEMS = 400; // kept in the snapshot after ranking

type Congress = { id: string; label: string; issn: string; journal: string; /** month-day window inside the year */ from: string; to: string; accept: (issue: string | undefined, title: string, doi: string) => boolean };

const isSuppl = (issue?: string) => !!issue && /suppl/i.test(issue);
const CONGRESSES: Congress[] = [
  // Whole-year windows: JNM and EJNMMI publish their supplements around their congresses, but not to a date we can predict.
  { id: "snmmi", label: "Journal of Nuclear Medicine supplements (SNMMI)", issn: "0161-5505", journal: "Journal of Nuclear Medicine", from: "01-01", to: "12-31", accept: (i) => isSuppl(i) },
  { id: "eanm", label: "EJNMMI supplements (EANM Congress)", issn: "1619-7070", journal: "European Journal of Nuclear Medicine and Molecular Imaging", from: "01-01", to: "12-31", accept: (i) => isSuppl(i) },
  { id: "asco-gu", label: "ASCO Genitourinary Cancers Symposium", issn: "0732-183X", journal: "Journal of Clinical Oncology", from: "01-15", to: "03-10", accept: (i, title) => isSuppl(i) && NUCLIDE_WORDS.test(title) },
];

export type AbstractCandidate = { doi: string; url: string; title: string; issue?: string; date?: string; lba: boolean; refs: { drugs: string[]; trials: string[]; targets: string[]; indications: string[]; technologies: string[] } };
export type AbstractsSnapshot = { fetched: string; congress: { id: string; label: string; year: number; journal: string; window: { from: string; to: string }; source: string }; total: number; considered: number; matched: number; items: AbstractCandidate[]; errors: string[] };

type Work = { DOI: string; title?: string[]; issued?: { "date-parts"?: number[][] }; issue?: string; URL?: string };

function candidates(): Array<{ c: Congress; year: number }> {
  const want = process.argv.find((a) => a.startsWith("--congress="))?.slice(11);
  const yearArg = process.argv.find((a) => a.startsWith("--year="))?.slice(7);
  const now = today();
  if (want) { const c = CONGRESSES.find((x) => x.id === want); if (!c) throw new Error(`unknown congress ${want}`); return [{ c, year: Number(yearArg ?? now.slice(0, 4)) }]; }
  // Most recent windows first (this year, then last year). A window that has opened but not yet filled (the
  // supplement is published during the congress) falls through to the previous congress.
  const y = Number(now.slice(0, 4));
  return [y, y - 1].flatMap((yy) => CONGRESSES.map((c) => ({ c, year: yy, start: `${yy}-${c.from}` }))).filter((o) => o.start <= now).sort((a, b) => b.start.localeCompare(a.start));
}

const MIN_ABSTRACTS = 25;

async function harvest(matcher: NameMatcher, kindOf: (id: string) => string | undefined, c: Congress, year: number): Promise<AbstractsSnapshot> {
  const from = `${year}-${c.from}`, to = `${year}-${c.to}`;
  const snap: AbstractsSnapshot = { fetched: today(), congress: { id: c.id, label: c.label, year, journal: c.journal, window: { from, to }, source: "https://api.crossref.org/" }, total: 0, considered: 0, matched: 0, items: [], errors: [] };
  console.log(`abstracts: ${c.label} ${year}, ${c.journal} ${from}..${to}`);

  let cursor = "*";
  for (let page = 0; page < MAX_PAGES; page++) {
    const url = `https://api.crossref.org/journals/${c.issn}/works?filter=from-pub-date:${from},until-pub-date:${to}&rows=1000&cursor=${encodeURIComponent(cursor)}&select=DOI,title,issued,issue,URL&mailto=${MAILTO}`;
    const json = await getJson<{ message?: { "total-results"?: number; "next-cursor"?: string; items?: Work[] } }>(url);
    await sleep(600);
    if (!json?.message) { snap.errors.push(`Crossref page ${page + 1} failed`); break; }
    snap.total = json.message["total-results"] ?? snap.total;
    const items = json.message.items ?? [];
    for (const w of items) {
      const title = stripTags(w.title?.[0] ?? "");
      if (!title || !c.accept(w.issue, title, w.DOI)) continue;
      snap.considered++;
      const ids = matcher.match(title);
      if (!ids.length) continue;
      const refs = { drugs: ids.filter((i) => kindOf(i) === "drug"), trials: ids.filter((i) => kindOf(i) === "trial"), targets: ids.filter((i) => kindOf(i) === "target"), indications: ids.filter((i) => kindOf(i) === "indication"), technologies: ids.filter((i) => kindOf(i) === "technology") };
      // A congress abstract is only interesting if it names a product or a trial. The journal-supplement
      // sweeps (SNMMI, EANM) are review content, where a match on a target or a technology is the point.
      const anyRef = Object.values(refs).some((r) => r.length);
      if (c.id === "asco-gu" ? !refs.drugs.length && !refs.trials.length : !anyRef) continue;
      const dp = w.issued?.["date-parts"]?.[0];
      const date = dp ? `${dp[0]}-${String(dp[1] ?? 1).padStart(2, "0")}-${String(dp[2] ?? 1).padStart(2, "0")}` : undefined;
      snap.items.push({ doi: w.DOI, url: w.URL ?? `https://doi.org/${w.DOI}`, title, issue: w.issue, date, lba: /^LBA\b|\bLBA\d/i.test(title) || /LBA/i.test(w.DOI), refs });
    }
    console.log(`  page ${page + 1}: ${items.length} records, ${snap.items.length} candidates so far`);
    cursor = json.message["next-cursor"] ?? "";
    if (!cursor || items.length < 1000) break;
  }

  // Most-connected first: late-breaking abstracts, then by number of linked objects.
  snap.items.sort((a, b) => Number(b.lba) - Number(a.lba) || (b.refs.drugs.length + b.refs.trials.length) - (a.refs.drugs.length + a.refs.trials.length) || a.title.localeCompare(b.title));
  console.log(`abstracts: ${snap.total} works in window, ${snap.considered} abstracts, ${snap.items.length} matched`);
  snap.matched = snap.items.length;
  snap.items = snap.items.slice(0, MAX_ITEMS);
  return snap;
}

async function main() {
  const g = graph();
  const matcher = new NameMatcher(matchableFromGraph(g.entities as never), ["drug", "trial", "target", "indication", "technology"]);
  const kindOf = (id: string) => g.get(id)?.kind;
  let snap: AbstractsSnapshot | null = null;
  for (const { c, year } of candidates().slice(0, 3)) {
    snap = await harvest(matcher, kindOf, c, year);
    if (snap.considered >= MIN_ABSTRACTS || process.argv.some((a) => a.startsWith("--congress="))) break;
    console.log(`abstracts: only ${snap.considered} abstracts for ${c.label} ${year}; trying the previous congress`);
  }
  if (!snap) throw new Error("no congress window");
  writeJson(OUT, snap);
  console.log(`abstracts: ${snap.congress.label} ${snap.congress.year}, ${snap.items.length} candidates -> ${OUT}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
