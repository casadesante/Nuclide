/**
 * Automated research pulse (improvement #96): the latest items from the leading journals, regulators and
 * news outlets, matched to Nuclide entity ids by name and alias. Sits beside the hand-curated themes on /pulse/.
 *
 * Sources are public RSS or Atom feeds, every one of them fetched and checked on 2026-09-22 (the count of
 * items each returned is in the commit that added it). General-interest feeds (NEJM, Nature Medicine, STAT,
 * Endpoints, World Nuclear News, FDA press releases) are filtered with NUCLIDE_WORDS so only nuclear-medicine
 * items are kept; the specialist journals are taken whole.
 *
 * Fork note: OnCo read NEJM, Lancet Oncology, JCO and Nature Medicine behind a cancer keyword filter, plus the
 * FDA Oncology Center of Excellence approvals page. The oncology-only sources were replaced by the nuclear
 * medicine literature; Lancet Oncology stays because prostate and neuroendocrine theranostics publish there.
 *
 *   public/pulse/auto.json  { fetched, feeds: [{ id, name, homepage, url, ok, count, error? }], items: [{ feedId, title, url, date, refs }] }
 *
 * Run: npx tsx scripts/fetch-pulse.ts   Weekly via .github/workflows/refresh-pulse.yml.
 */
import { graph } from "../src/lib/graph";
import { NameMatcher, NUCLIDE_WORDS, getJson, getText, isoDaysAgo, matchableFromGraph, parseFeed, publicPath, readJson, sleep, today, writeJson, type FeedItem, looksLikeFeed } from "./feed-utils";

const OUT = publicPath("pulse", "auto.json");
const KEEP_DAYS = 60;
const MAX_PER_FEED = 40;

type FeedDef = {
  id: string; name: string; homepage: string; url: string; kind: "journal" | "regulator" | "news"; sourceId?: string;
  /** Keep only items that mention nuclear medicine: for general journals and news wires. */ filtered?: boolean;
  /** Crossref ISSN, used as a fallback when the publisher blocks the RSS URL (Springer serves a bot
   * challenge to this IP range some days). Crossref has no such gate, so the journal still reports. */
  crossrefIssn?: string;
  /** Read Crossref first. Theranostics' RSS returns its whole archive stamped 2021-01-01, so the
   * publication dates are unusable; Crossref carries the real issue dates. */
  preferCrossref?: boolean;
};

const MAILTO = "casa@casadesante.com";

/** Recent works for a journal from Crossref, shaped like feed items. Used when an RSS URL is blocked. */
async function crossrefRecent(issn: string, from: string): Promise<FeedItem[] | null> {
  type Work = { DOI: string; title?: string[]; URL?: string; issued?: { "date-parts": number[][] }; created?: { "date-time": string } };
  const url = `https://api.crossref.org/journals/${issn}/works?filter=from-pub-date:${from}&sort=published&order=desc&rows=${MAX_PER_FEED}&select=DOI,title,URL,issued,created&mailto=${MAILTO}`;
  const j = await getJson<{ message?: { items?: Work[] } }>(url);
  const items = j?.message?.items;
  if (!items?.length) return null;
  return items
    .filter((w) => w.title?.[0])
    .map((w) => {
      const dp = w.issued?.["date-parts"]?.[0];
      const date = dp && dp[0] ? [dp[0], dp[1] ?? 1, dp[2] ?? 1].map((n, i) => (i ? String(n).padStart(2, "0") : String(n))).join("-") : w.created?.["date-time"]?.slice(0, 10);
      return { title: (w.title as string[])[0], link: w.URL ?? `https://doi.org/${w.DOI}`, date };
    });
}

/** `sourceId` links to the Nuclide record for the source where one exists: a collection in src/data/sources.ts or a journal record. */
const FEEDS: FeedDef[] = [
  { id: "jnm", name: "Journal of Nuclear Medicine", homepage: "https://jnm.snmjournals.org/", url: "https://jnm.snmjournals.org/rss/current.xml", kind: "journal", sourceId: "journal-of-nuclear-medicine" },
  { id: "jnm-ahead", name: "Journal of Nuclear Medicine (ahead of print)", homepage: "https://jnm.snmjournals.org/content/early/recent", url: "https://jnm.snmjournals.org/rss/ahead.xml", kind: "journal", sourceId: "journal-of-nuclear-medicine" },
  { id: "ejnmmi", name: "European Journal of Nuclear Medicine and Molecular Imaging", homepage: "https://link.springer.com/journal/259", url: "https://link.springer.com/search.rss?facet-journal-id=259&channel-name=European+Journal+of+Nuclear+Medicine+and+Molecular+Imaging", kind: "journal", crossrefIssn: "1619-7070" },
  { id: "mib", name: "Molecular Imaging and Biology", homepage: "https://link.springer.com/journal/11307", url: "https://link.springer.com/search.rss?facet-journal-id=11307", kind: "journal", crossrefIssn: "1536-1632" },
  // Society journals from outside the English-speaking world, plus nuclear cardiology. None of the
  // three publishes an RSS feed this project could read (checked 2026-09-22), so all three are read
  // from Crossref by ISSN. Their content is published in English by the societies themselves.
  { id: "jnc", name: "Journal of Nuclear Cardiology (ASNC)", homepage: "https://www.asnc.org/news-publications/journal-of-nuclear-cardiology/", url: "https://www.sciencedirect.com/journal/journal-of-nuclear-cardiology/rss", kind: "journal", sourceId: "journal-of-nuclear-cardiology", crossrefIssn: "1071-3581", preferCrossref: true },
  { id: "annals-nuclear-medicine", name: "Annals of Nuclear Medicine (JSNM, Japan)", homepage: "https://link.springer.com/journal/12149", url: "https://link.springer.com/search.rss?facet-journal-id=12149", kind: "journal", sourceId: "annals-of-nuclear-medicine", crossrefIssn: "0914-7187", preferCrossref: true },
  { id: "nmmi", name: "Nuclear Medicine and Molecular Imaging (KSNM, Korea)", homepage: "https://link.springer.com/journal/13139", url: "https://link.springer.com/search.rss?facet-journal-id=13139", kind: "journal", sourceId: "nuclear-medicine-and-molecular-imaging", crossrefIssn: "1869-3474", preferCrossref: true },
  { id: "jnmt", name: "Journal of Nuclear Medicine Technology", homepage: "https://tech.snmjournals.org/", url: "https://tech.snmjournals.org/rss/current.xml", kind: "journal" },
  { id: "theranostics", name: "Theranostics", homepage: "https://www.thno.org/", url: "https://www.thno.org/rss/current.xml", kind: "journal", filtered: true, crossrefIssn: "1838-7640", preferCrossref: true },
  { id: "lancet-oncology", name: "The Lancet Oncology", homepage: "https://www.thelancet.com/journals/lanonc/home", url: "https://www.thelancet.com/rssfeed/lanonc_current.xml", kind: "journal", sourceId: "lancet-oncology", filtered: true, crossrefIssn: "1470-2045" },
  { id: "nejm", name: "New England Journal of Medicine", homepage: "https://www.nejm.org/", url: "https://www.nejm.org/action/showFeed?type=etoc&feed=rss&jc=nejm", kind: "journal", sourceId: "nejm", filtered: true, crossrefIssn: "0028-4793" },
  { id: "fda-press", name: "FDA press releases", homepage: "https://www.fda.gov/news-events/fda-newsroom/press-announcements", url: "https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/press-releases/rss.xml", kind: "regulator", sourceId: "fda-approvals", filtered: true },
  { id: "world-nuclear-news", name: "World Nuclear News", homepage: "https://www.world-nuclear-news.org/", url: "https://www.world-nuclear-news.org/rss", kind: "news", filtered: true },
  { id: "endpoints", name: "Endpoints News", homepage: "https://endpts.com/", url: "https://endpts.com/feed/", kind: "news", sourceId: "src-endpoints-news", filtered: true },
  { id: "stat", name: "STAT", homepage: "https://www.statnews.com/", url: "https://www.statnews.com/feed/", kind: "news", sourceId: "src-stat-news", filtered: true },
];

export type AutoPulseFeed = { id: string; name: string; homepage: string; url: string; kind: string; sourceId?: string; ok: boolean; count: number; error?: string };
export type AutoPulseItem = { feedId: string; title: string; url: string; date?: string; refs: string[] };
export type AutoPulseSnapshot = { fetched: string; feeds: AutoPulseFeed[]; items: AutoPulseItem[] };

async function main() {
  const g = graph();
  const matcher = new NameMatcher(matchableFromGraph(g.entities as never), ["drug", "target", "indication", "technology", "trial", "company"]);
  const prev = readJson<AutoPulseSnapshot>(OUT);
  const fetched = today();
  const cutoff = isoDaysAgo(KEEP_DAYS);
  const snap: AutoPulseSnapshot = { fetched, feeds: [], items: [] };
  const seen = new Set<string>();

  for (const f of FEEDS) {
    let items: FeedItem[] | null = null;
    let via: string | undefined;
    if (f.preferCrossref && f.crossrefIssn) {
      items = await crossrefRecent(f.crossrefIssn, cutoff);
      if (items?.length) via = `${items.length} items via Crossref ISSN ${f.crossrefIssn}: the publisher's RSS carries unusable dates`;
      await sleep(500);
    }
    if (!items?.length) {
      const text = await getText(f.url, { accept: "application/rss+xml, application/atom+xml, application/xml, text/xml", validate: looksLikeFeed });
      await sleep(500);
      items = text ? parseFeed(text) : null;
    }
    if (!items?.length && f.crossrefIssn) {
      items = await crossrefRecent(f.crossrefIssn, cutoff);
      if (items?.length) via = `RSS blocked by the publisher; ${items.length} items via Crossref ISSN ${f.crossrefIssn}`;
      await sleep(500);
    }
    if (!items) { snap.feeds.push({ ...f, ok: false, count: 0, error: "unreachable or blocked" }); console.warn(`pulse: ${f.id} failed`); continue; }
    if (f.filtered) items = items.filter((i) => NUCLIDE_WORDS.test(`${i.title} ${i.summary ?? ""}`));
    items = items.filter((i) => !i.date || i.date >= cutoff).slice(0, MAX_PER_FEED);
    let n = 0;
    for (const it of items) {
      if (seen.has(it.link)) continue;
      seen.add(it.link);
      snap.items.push({ feedId: f.id, title: it.title, url: it.link, date: it.date, refs: matcher.match(`${it.title}. ${it.summary ?? ""}`).slice(0, 8) });
      n++;
    }
    snap.feeds.push({ ...f, ok: true, count: n, error: via });
    console.log(`pulse: ${f.id} ${n} items${via ? " (via Crossref)" : ""}`);
  }

  // Keep items from feeds that failed this run, from the previous snapshot, so a blocked publisher does not blank its column.
  for (const pf of prev?.feeds ?? []) {
    const now = snap.feeds.find((x) => x.id === pf.id);
    if (now?.ok) continue;
    const carried = (prev?.items ?? []).filter((i) => i.feedId === pf.id && (!i.date || i.date >= cutoff) && !seen.has(i.url));
    for (const c of carried) { seen.add(c.url); snap.items.push(c); }
    if (now && carried.length) { now.count = carried.length; now.error = `${now.error}; showing ${carried.length} items from ${prev?.fetched}`; }
  }

  snap.items.sort((a, b) => (b.date ?? "").localeCompare(a.date ?? ""));
  writeJson(OUT, snap);
  console.log(`pulse: ${snap.items.length} items from ${snap.feeds.filter((f) => f.ok).length}/${snap.feeds.length} feeds -> ${OUT}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
