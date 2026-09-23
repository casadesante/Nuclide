/**
 * Shared helpers for the intelligence-feed scripts (fetch-fda, fetch-ema, fetch-abstracts, fetch-hta,
 * fetch-pulse, fetch-citations, fetch-survival, propose-updates).
 *
 * Every feed is static-export safe: a script fetches from a public source, writes a JSON snapshot under
 * public/, and the pages read that snapshot at build time. No secrets, no keys; polite rate limits.
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { inflateRawSync } from "node:zlib";

export const UA = "Mozilla/5.0 (compatible; Nuclide/1.0; +https://github.com/casadesante/Nuclide)";
export const REPO = "https://github.com/casadesante/Nuclide";

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
export const today = () => new Date().toISOString().slice(0, 10);
export function isoDaysAgo(d: number): string { const x = new Date(); x.setUTCDate(x.getUTCDate() - d); return x.toISOString().slice(0, 10); }

/**
 * GET a URL as text with retries and backoff. Returns null on a non-retryable failure.
 *
 * Publishers disagree about who they will serve. Some (SNMMI's journal platform) answer a
 * self-identifying bot UA with 403 and only serve a browser UA; others (Springer's search.rss)
 * serve the feed to a plain client but hand a browser UA a 3 KB consent page instead. So try the
 * polite UA first, then widen the Accept header, then fall back to a browser UA, and accept the
 * first response that passes `validate` (feed callers use `looksLikeFeed`).
 */
const BROWSER_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

export const looksLikeFeed = (body: string) => /<(rss|feed|rdf:RDF)[\s>]/i.test(body);

export async function getText(
  url: string,
  opts: { tries?: number; accept?: string; timeoutMs?: number; validate?: (body: string) => boolean } = {},
): Promise<string | null> {
  const tries = opts.tries ?? 4;
  const profiles: Array<Record<string, string>> = [
    { "User-Agent": UA, Accept: opts.accept ?? "*/*" },
    { "User-Agent": UA, Accept: "*/*" },
    { "User-Agent": BROWSER_UA, Accept: opts.accept ?? "*/*", "Accept-Language": "en-GB,en;q=0.9" },
  ];
  for (const headers of profiles) {
    for (let i = 0; i < tries; i++) {
      try {
        const ctl = new AbortController();
        const t = setTimeout(() => ctl.abort(), opts.timeoutMs ?? 60_000);
        const r = await fetch(url, { headers, redirect: "follow", signal: ctl.signal });
        clearTimeout(t);
        if (r.status === 429 || r.status >= 500) { await sleep(1500 * (i + 1)); continue; }
        if (!r.ok) break; // try the next header profile rather than burning retries on a 403
        const body = await r.text();
        if (opts.validate && !opts.validate(body)) break;
        return body;
      } catch (e) {
        if (i === tries - 1) { console.warn(`  giving up ${url}: ${(e as Error).message}`); break; }
        await sleep(1000 * (i + 1));
      }
    }
  }
  return null;
}

export async function getJson<T>(url: string, opts: { tries?: number } = {}): Promise<T | null> {
  const text = await getText(url, { ...opts, accept: "application/json" });
  if (text === null) return null;
  try { return JSON.parse(text) as T; } catch { return null; }
}

export async function getBuffer(url: string, tries = 3): Promise<Buffer | null> {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
      if (r.status === 429 || r.status >= 500) { await sleep(2000 * (i + 1)); continue; }
      if (!r.ok) return null;
      return Buffer.from(await r.arrayBuffer());
    } catch (e) {
      if (i === tries - 1) { console.warn(`  giving up ${url}: ${(e as Error).message}`); return null; }
      await sleep(1500 * (i + 1));
    }
  }
  return null;
}

export const publicPath = (...parts: string[]) => join(process.cwd(), "public", ...parts);

export function readJson<T>(path: string): T | null {
  if (!existsSync(path)) return null;
  try { return JSON.parse(readFileSync(path, "utf8")) as T; } catch { return null; }
}

export function writeJson(path: string, data: unknown, pretty = false): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, pretty ? JSON.stringify(data, null, 1) : JSON.stringify(data));
}

// ---------------------------------------------------------------------------------------------------
// HTML and XML helpers (regex-level; the sources are simple, and we add no dependencies).
// ---------------------------------------------------------------------------------------------------

const NAMED: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: "\"", apos: "'", nbsp: " ", ndash: "–", mdash: "—", hellip: "…", rsquo: "’", lsquo: "‘", rdquo: "”", ldquo: "“", trade: "™", reg: "®", copy: "©", deg: "°", plusmn: "±", times: "×", micro: "µ", middot: "·", eacute: "é", auml: "ä", ouml: "ö", uuml: "ü", szlig: "ß" };

export function decodeEntities(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n: string) => NAMED[n.toLowerCase()] ?? m);
}

/** Strip tags, decode entities, collapse whitespace. */
export function stripTags(html: string): string {
  return decodeEntities(html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/gi, "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
}

/** Content of the first matching element (non-nested), or undefined. */
export function tagText(xml: string, tag: string): string | undefined {
  const m = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, "i"));
  if (!m) return undefined;
  return stripTags(m[1].replace(/^<!\[CDATA\[([\s\S]*?)\]\]>$/, "$1"));
}

export type FeedItem = { title: string; link: string; date?: string; summary?: string };

/** Parse RSS 2.0, RSS 1.0 (RDF) and Atom into a flat item list. Dates are normalised to YYYY-MM-DD when parseable. */
export function parseFeed(xml: string): FeedItem[] {
  const items: FeedItem[] = [];
  const blocks = xml.match(/<item(?:\s[^>]*)?>[\s\S]*?<\/item>|<entry(?:\s[^>]*)?>[\s\S]*?<\/entry>/gi) ?? [];
  for (const b of blocks) {
    const title = tagText(b, "title") ?? "";
    let link = tagText(b, "link") ?? "";
    if (!link) {
      const href = b.match(/<link[^>]*?href="([^"]+)"/i)?.[1] ?? b.match(/<item[^>]*rdf:about="([^"]+)"/i)?.[1];
      if (href) link = decodeEntities(href);
    }
    if (!link) { const guid = tagText(b, "guid"); if (guid && /^https?:/.test(guid)) link = guid; }
    const rawDate = tagText(b, "pubDate") ?? tagText(b, "dc:date") ?? tagText(b, "published") ?? tagText(b, "updated") ?? tagText(b, "prism:publicationDate") ?? tagText(b, "prism:coverDate");
    const summary = tagText(b, "description") ?? tagText(b, "summary") ?? tagText(b, "content");
    if (!title || !link) continue;
    items.push({ title, link: link.replace(/\?(rss|af)=[^&]*$/, ""), date: normaliseDate(rawDate), summary: summary?.slice(0, 600) });
  }
  return items;
}

export function normaliseDate(s?: string): string | undefined {
  if (!s) return undefined;
  const iso = s.match(/^(\d{4}-\d{2}-\d{2})/);
  if (iso) return iso[1];
  const t = Date.parse(s);
  return Number.isNaN(t) ? undefined : new Date(t).toISOString().slice(0, 10);
}

/** "September 9, 2026" -> "2026-09-09". */
export function parseLongDate(s: string): string | undefined {
  const m = s.match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),?\s+(\d{4})/i);
  if (!m) return undefined;
  const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
  return `${m[3]}-${String(months.indexOf(m[1].toLowerCase()) + 1).padStart(2, "0")}-${m[2].padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------------------------------
// Entity name matching: map free text (titles, abstracts, INN strings) to Nuclide entity ids.
// ---------------------------------------------------------------------------------------------------

export type MatchableEntity = { id: string; kind: string; name: string; aka?: string[]; brand?: string; code?: string };
type Term = { term: string; id: string; kind: string; cs: boolean };

/** Words that are entity names or aliases but far too generic to match on their own. */
const STOP = new Set(["indication", "tumour", "tumor", "therapy", "cells", "test", "device", "oral", "blood", "lung", "liver", "brain", "skin", "bone", "head", "neck", "assay", "panel", "score", "index", "shield", "signal", "guardian", "ascent", "destiny", "pathfinder", "monarch", "impact", "insight", "harmony", "keynote", "checkmate", "javelin", "tropion", "select", "prime", "phoenix", "summit", "atlas", "voyager", "horizon", "compass", "eagle", "unity", "alliance"]);

export function normaliseTerm(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[\u2010-\u2015]/g, "-").replace(/\s+/g, " ").trim();
}

function escapeRe(s: string): string { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

function splitName(name: string): string[] {
  const base = name.replace(/\s*\(.*?\)\s*/g, " ").trim();
  const parts = base.split(/\s*(?:\/|\s\+\s|\s&\s|;)\s*/).map((p) => p.trim()).filter(Boolean);
  return parts.length ? parts : [base];
}

export class NameMatcher {
  private terms: Term[] = [];
  private byFirstChar = new Map<string, Term[]>();

  constructor(entities: MatchableEntity[], kinds?: string[]) {
    const seen = new Set<string>();
    for (const e of entities) {
      if (kinds && !kinds.includes(e.kind)) continue;
      const raw: string[] = [...splitName(e.name), ...(e.aka ?? []).flatMap(splitName)];
      if (e.brand) raw.push(...e.brand.split(/\s*\/\s*/));
      if (e.code) raw.push(...e.code.split(/\s*[,;]\s*/).map((c) => c.replace(/\s*\(.*?\)\s*/g, "").trim()));
      for (const r of raw) {
        const t = normaliseTerm(r);
        if (t.length < 4 || STOP.has(t) || /^[0-9. %-]+$/.test(t)) continue;
        // All-caps short names (trial acronyms, codes like "MK-2870") match case-sensitively to avoid common words.
        const cs = e.kind === "trial" && /^[A-Z0-9-]+$/.test(r.trim()) && /[A-Z]{3}/.test(r);
        const key = `${e.id}|${t}`;
        if (seen.has(key)) continue;
        seen.add(key);
        const term: Term = { term: cs ? r.trim() : t, id: e.id, kind: e.kind, cs };
        this.terms.push(term);
        const fc = term.term[0].toLowerCase();
        this.byFirstChar.set(fc, [...(this.byFirstChar.get(fc) ?? []), term]);
      }
    }
    this.terms.sort((a, b) => b.term.length - a.term.length);
  }

  /** All entity ids whose name, alias, brand or code appears as a whole word or phrase in the text. */
  match(text: string, kinds?: string[]): string[] {
    const low = normaliseTerm(text);
    const found = new Map<string, number>();
    for (const t of this.terms) {
      if (kinds && !kinds.includes(t.kind)) continue;
      const hay = t.cs ? text : low;
      if (!hay.includes(t.term)) continue;
      const re = new RegExp(`(^|[^a-z0-9])${escapeRe(t.term)}(?![a-z0-9])`, t.cs ? "" : "i");
      if (re.test(hay)) found.set(t.id, Math.max(found.get(t.id) ?? 0, t.term.length));
    }
    return [...found.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id);
  }

  /** Best single match for a short string such as an INN: the entity with the longest matching term; exact equality wins. */
  best(text: string, kinds?: string[]): string | undefined {
    const low = normaliseTerm(text);
    for (const t of this.terms) if ((!kinds || kinds.includes(t.kind)) && !t.cs && t.term === low) return t.id;
    return this.match(text, kinds)[0];
  }
}

/** Build a matcher from the graph without importing it here (keeps this module test-friendly). */
export function matchableFromGraph(entities: Array<{ id: string; kind: string; name: string; aka: string[] } & Record<string, unknown>>): MatchableEntity[] {
  return entities.map((e) => ({ id: e.id, kind: e.kind, name: e.name, aka: e.aka, brand: typeof e.brand === "string" ? e.brand : undefined, code: typeof e.code === "string" ? e.code : undefined }));
}

/** Radiopharmaceutical keyword filter for general-news feeds. */
export const NUCLIDE_WORDS = /\b(radiopharmaceutical|radioligand|radionuclide|radioisotope|theranostic|radiotracer|radiolabel|nuclear medicine|molecular imaging|PET[/ -]?(?:CT|MR)?|SPECT|scintigraph|dosimetr|radioembolis|radioemboliz|brachytherap|alpha[- ]emitt|beta[- ]emitt|targeted alpha|peptide receptor radionuclide|PRRT|PSMA|SSTR|somatostatin receptor|FAPI|amyloid PET|tau PET|lutetium|actinium|radium[- ]?22[34]|iodine[- ]?131|yttrium[- ]?90|technetium|gallium[- ]?68|fluorine[- ]?18|copper[- ]?6[47]|zirconium[- ]?89|lead[- ]?212|astatine|terbium|holmium[- ]?166|rhenium[- ]?188|samarium[- ]?153|molybdenum[- ]?99|177Lu|225Ac|223Ra|99mTc|68Ga|18F|64Cu|89Zr|212Pb|131I|90Y|cyclotron|radiochemistr|hot cell|generator eluti|isotope suppl)\b/i;

/**
 * openFDA established-pharmacologic-class strings that mark a radiopharmaceutical. Checked against the
 * drugsfda index on 2026-09-22: "Radioactive Diagnostic Agent [EPC]" covers 74 applications (FDG, ioflupane,
 * Vizamyl, ammonia N-13 and the rest), "Radioligand Therapeutic Agent [EPC]" covers Pluvicto. Several therapy
 * products (Xofigo, Lutathera) carry no EPC at all, which is why the nuclide word list below is also applied
 * to the generic name.
 */
export const RADIOPHARM_EPC = ["Radioactive Diagnostic Agent", "Radioligand Therapeutic Agent"];

/** Generic-name test for a labelled product: the nuclide, written the way Drugs@FDA writes it. */
export const RADIONUCLIDE_NAME = /\b(?:(?:lu|ac|ra|y|tc|ga|ge|cu|zr|pb|sm|sr|re|in|rb|xe|kr|tl|cr|co|ho|at|tb|i|f|n|o|c)[\s-]?(?:[1-9][0-9]{1,2})m?|(?:lutetium|actinium|radium|yttrium|technetium|gallium|germanium|copper|zirconium|lead|samarium|strontium|rhenium|indium|rubidium|xenon|krypton|thallium|chromium|cobalt|holmium|astatine|terbium|iodine|fluorine|nitrogen|oxygen|carbon|fludeoxy\w*)[\s-]?(?:[a-z]{1,2}[\s-]?)?(?:[1-9][0-9]{1,2})m?|iobenguane|gozetotide|vipivotide|dotatate|dotatoc|edotreotide|pentetreotide|florbeta\w+|flutemetamol|flortaucipir|piflufolastat|flotufolastat|ioflupane|fluciclovine|fluoroestradiol|exametazime|sestamibi|tetrofosmin|medronate|lexidronam|oxidronate|mertiatide|pentetate|macroaggregated albumin|radiopharmaceutical|radioligand)\b/i;

// ---------- minimal xlsx reader ----------
// Several registers publish as .xlsx (the EMA medicines register, the Swissmedic authorised-medicines
// list). An xlsx file is a zip of XML, so it is read here with node:zlib and no dependency.

export function zipEntries(buf: Buffer): Map<string, Buffer> {
  const out = new Map<string, Buffer>();
  let eocd = buf.length - 22;
  while (eocd >= 0 && buf.readUInt32LE(eocd) !== 0x06054b50) eocd--;
  if (eocd < 0) throw new Error("not a zip file");
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  for (let i = 0; i < count; i++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) break;
    const method = buf.readUInt16LE(p + 10), csize = buf.readUInt32LE(p + 20), nlen = buf.readUInt16LE(p + 28), elen = buf.readUInt16LE(p + 30), clen = buf.readUInt16LE(p + 32), off = buf.readUInt32LE(p + 42);
    const name = buf.toString("utf8", p + 46, p + 46 + nlen);
    const lnlen = buf.readUInt16LE(off + 26), lelen = buf.readUInt16LE(off + 28);
    const start = off + 30 + lnlen + lelen;
    const data = buf.subarray(start, start + csize);
    out.set(name, method === 8 ? inflateRawSync(data) : Buffer.from(data));
    p += 46 + nlen + elen + clen;
  }
  return out;
}

const cellText = (xml: string) => decodeEntities((xml.match(/<t[^>]*>([\s\S]*?)<\/t>/g) ?? []).map((t) => t.replace(/<[^>]+>/g, "")).join(""));

/** Rows as arrays of strings keyed by column letter. Dates arrive as Excel serials when not stored as text. */
export function parseSheet(sheetXml: string, sharedXml: string): Array<Record<string, string>> {
  const shared = (sharedXml.match(/<si>[\s\S]*?<\/si>/g) ?? []).map(cellText);
  const rows: Array<Record<string, string>> = [];
  for (const row of sheetXml.match(/<row [^>]*>[\s\S]*?<\/row>/g) ?? []) {
    const rec: Record<string, string> = {};
    for (const c of row.match(/<c [^>]*?(?:\/>|>[\s\S]*?<\/c>)/g) ?? []) {
      const col = c.match(/r="([A-Z]+)\d+"/)?.[1];
      if (!col) continue;
      const type = c.match(/\st="([a-zA-Z]+)"/)?.[1];
      let v = "";
      if (type === "s") v = shared[Number(c.match(/<v>(\d+)<\/v>/)?.[1] ?? -1)] ?? "";
      else if (type === "inlineStr") v = cellText(c);
      else { const raw = c.match(/<v>([\s\S]*?)<\/v>/)?.[1]; v = raw === undefined ? "" : excelValue(raw, c); }
      if (v) rec[col] = v.trim();
    }
    if (Object.keys(rec).length) rows.push(rec);
  }
  return rows;
}

function excelValue(raw: string, cell: string): string {
  const n = Number(raw);
  // Serial dates: EMA date columns are plain numbers around 30,000-50,000 when styled as dates.
  if (!Number.isNaN(n) && n > 20000 && n < 80000 && /s="\d+"/.test(cell)) return new Date(Date.UTC(1899, 11, 30) + n * 86_400_000).toISOString().slice(0, 10);
  return decodeEntities(raw);
}

/** Prefilled GitHub issue URL. */
export function issueUrl(title: string, body: string, labels: string[] = []): string {
  const p = new URLSearchParams({ title, body });
  if (labels.length) p.set("labels", labels.join(","));
  return `${REPO}/issues/new?${p.toString()}`;
}
