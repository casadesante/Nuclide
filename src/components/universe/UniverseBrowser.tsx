"use client";

import { useEffect, useMemo, useState } from "react";
import { FacetSelect, type FacetOption } from "@/components/filters/FacetSelect";
import { download, loadUniverse, matches, paperUrl, patentUrl, pretty, REGION_NAME, toCsv, trialUrl, type Labels } from "@/lib/universe";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Row = Record<string, any>;
export type Dataset = "trials" | "products" | "papers" | "abstracts" | "patents" | "gaps";

type FacetDef = { key: string; label: string; get: (r: Row) => string | string[] | number | null | undefined; name?: (v: string, L: Labels) => string; order?: "count" | "desc" };
type Cfg = {
  noun: string;
  files: (years: string[]) => string[];
  sharded?: boolean;
  facets: FacetDef[];
  hay: (r: Row, L: Labels) => string;
  row: (r: Row, L: Labels, tag: (key: string, v: string) => void) => React.ReactNode;
  csv: Array<[string, (r: Row) => unknown]>;
  sort?: (a: Row, b: Row) => number;
  summary?: (rows: Row[], L: Labels, tag: (key: string, v: string) => void) => React.ReactNode;
};

const tn = (v: string, L: Labels) => L.targets[v] ?? v;
const dn = (v: string, L: Labels) => L.diseases[v] ?? v;
const rn = (v: string) => REGION_NAME[v] ?? v;

const tagFacets: FacetDef[] = [
  { key: "target", label: "Target", get: (r) => r.tg, name: tn },
  { key: "indication", label: "Indication", get: (r) => r.ds, name: dn },
  { key: "isotope", label: "Isotope", get: (r) => r.iso },
];

function Chips({ r, L, tag }: { r: Row; L: Labels; tag: (k: string, v: string) => void }) {
  const chip = "rounded bg-accent-soft px-1.5 py-0.5 hover:underline";
  return (
    <>
      {(r.tg ?? []).slice(0, 4).map((v: string) => <button key={`t${v}`} type="button" className={chip} onClick={() => tag("target", v)}>{tn(v, L)}</button>)}
      {(r.ds ?? []).slice(0, 3).map((v: string) => <button key={`d${v}`} type="button" className={chip} onClick={() => tag("indication", v)}>{dn(v, L)}</button>)}
      {(r.iso ?? []).slice(0, 4).map((v: string) => <button key={`i${v}`} type="button" className={chip} onClick={() => tag("isotope", v)}>{v}</button>)}
    </>
  );
}

function Title({ href, children }: { href?: string | null; children: React.ReactNode }) {
  return href ? <a href={href} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">{children}</a> : <span className="font-medium">{children}</span>;
}

const CFG: Record<Dataset, Cfg> = {
  trials: {
    noun: "trials",
    files: () => ["trials.json"],
    facets: [
      { key: "studied", label: "Radiopharmaceutical is", get: (r) => (r.s ? "the agent under study" : "a tool in the trial (staging, response)") },
      ...tagFacets,
      { key: "role", label: "Role", get: (r) => r.role },
      { key: "phase", label: "Phase", get: (r) => r.ph ?? "not stated", order: "desc" },
      { key: "status", label: "Status", get: (r) => r.st, name: (v) => pretty(v) },
      { key: "country", label: "Country", get: (r) => r.cc },
      { key: "sponsor", label: "Sponsor type", get: (r) => r.sc, name: (v) => pretty(v) },
      { key: "registry", label: "Registry", get: (r) => r.r, name: (v) => (v === "CTG" ? "ClinicalTrials.gov" : "EU CTIS") },
      { key: "year", label: "Start year", get: (r) => (r.y ? String(r.y) : null), order: "desc" },
    ],
    hay: (r, L) => [r.id, r.t, r.ac, r.sp, ...(r.ag ?? []), ...(r.tg ?? []).map((v: string) => tn(v, L)), ...(r.ds ?? []).map((v: string) => dn(v, L)), ...(r.iso ?? []), r.why].join(" ").toLowerCase(),
    sort: (a, b) => (b.y ?? 0) - (a.y ?? 0),
    row: (r, L, tag) => (
      <>
        <Title href={trialUrl(r.id, r.u)}>{r.t}</Title>
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          <span className="tabular-nums">{r.id}</span>
          {r.ph && <span>Phase {r.ph}</span>}
          {r.st && <span>{pretty(r.st)}</span>}
          {r.y && <span>Start {r.y}</span>}
          {r.sp && <span>{r.sp}</span>}
          {r.n != null && <span>{r.n} patients</span>}
          {r.res && <span className="text-accent">Results posted</span>}
        </div>
        {r.ag?.length > 0 && <div className="mt-1 text-xs">{r.ag.join(" · ")}</div>}
        {r.why && <div className="mt-1 text-xs text-muted">Why stopped: {r.why}</div>}
        <div className="mt-1.5 flex flex-wrap gap-1 text-[11px]"><Chips r={r} L={L} tag={tag} /></div>
      </>
    ),
    csv: [["id", (r) => r.id], ["title", (r) => r.t], ["registry", (r) => r.r], ["phase", (r) => r.ph], ["status", (r) => r.st], ["start", (r) => r.y], ["sponsor", (r) => r.sp], ["sponsor type", (r) => r.sc], ["countries", (r) => r.cc], ["agents", (r) => r.ag], ["targets", (r) => r.tg], ["indications", (r) => r.ds], ["isotopes", (r) => r.iso], ["role", (r) => r.role], ["enrolment", (r) => r.n], ["why stopped", (r) => r.why], ["url", (r) => trialUrl(r.id, r.u)]],
  },
  products: {
    noun: "registrations",
    files: () => ["products.json"],
    facets: [
      { key: "region", label: "Country or region", get: (r) => r.rg, name: (v) => rn(v) },
      { key: "role", label: "Role", get: (r) => r.role },
      { key: "isotope", label: "Isotope", get: (r) => r.iso },
      { key: "target", label: "Target", get: (r) => r.tg, name: tn },
      { key: "agent", label: "Agent", get: (r) => r.ag },
      { key: "status", label: "Status", get: (r) => r.st, name: (v) => pretty(v) },
      { key: "year", label: "Year registered", get: (r) => (r.a ? String(r.a).slice(0, 4) : null), order: "desc" },
    ],
    hay: (r, L) => [r.b, r.i, r.o, r.h, r.ag, r.ind, rn(r.rg), ...(r.tg ?? []).map((v: string) => tn(v, L)), ...(r.iso ?? [])].join(" ").toLowerCase(),
    sort: (a, b) => String(b.a ?? "").localeCompare(String(a.a ?? "")),
    row: (r, L, tag) => (
      <>
        <Title href={r.u}>{r.b || r.i}</Title>
        {r.o && r.o !== r.b && <span className="ml-2 text-sm text-muted" lang={r.l ?? undefined}>{r.o}</span>}
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          <span>{rn(r.rg)}{r.reg ? ` · ${r.reg}` : ""}</span>
          {r.i && <span>{r.i}</span>}
          {r.h && <span>{r.h}</span>}
          {r.a && <span>Registered {r.a}</span>}
          {r.st && <span>{pretty(r.st)}</span>}
        </div>
        {r.ind && <div className="mt-1 text-xs">{r.ind}</div>}
        <div className="mt-1.5 flex flex-wrap gap-1 text-[11px]"><Chips r={r} L={L} tag={tag} /></div>
      </>
    ),
    csv: [["brand", (r) => r.b], ["ingredient", (r) => r.i], ["original name", (r) => r.o], ["region", (r) => r.rg], ["regulator", (r) => r.reg], ["holder", (r) => r.h], ["registered", (r) => r.a], ["status", (r) => r.st], ["role", (r) => r.role], ["isotopes", (r) => r.iso], ["targets", (r) => r.tg], ["agent", (r) => r.ag], ["indication", (r) => r.ind], ["source", (r) => r.u]],
  },
  papers: {
    noun: "papers",
    sharded: true,
    files: (years) => years.map((y) => `papers-${y}.json`),
    facets: [
      ...tagFacets,
      { key: "type", label: "Paper type", get: (r) => r.ty },
      { key: "role", label: "Role", get: (r) => r.role },
      { key: "core", label: "Focus", get: (r) => (r.c ? "radiopharmaceutical is the subject" : "radiopharmaceutical is mentioned") },
      { key: "oa", label: "Access", get: (r) => (r.oa ? "open access" : "subscription") },
    ],
    hay: (r, L) => [r.id, r.t, r.j, ...(r.ag ?? []), ...(r.tg ?? []).map((v: string) => tn(v, L)), ...(r.ds ?? []).map((v: string) => dn(v, L)), ...(r.iso ?? [])].join(" ").toLowerCase(),
    sort: (a, b) => (b.y ?? 0) - (a.y ?? 0) || (b.ci ?? 0) - (a.ci ?? 0),
    row: (r, L, tag) => (
      <>
        <Title href={paperUrl(r.id)}>{r.t}</Title>
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          <span>{r.j}</span><span>{r.y}</span><span>{r.ty}</span>
          {r.ci > 0 && <span>{r.ci} citations</span>}
          {r.oa ? <span>Open access</span> : null}
        </div>
        {r.ag?.length > 0 && <div className="mt-1 text-xs">{r.ag.join(" · ")}</div>}
        <div className="mt-1.5 flex flex-wrap gap-1 text-[11px]"><Chips r={r} L={L} tag={tag} /></div>
      </>
    ),
    csv: [["id", (r) => r.id], ["title", (r) => r.t], ["journal", (r) => r.j], ["year", (r) => r.y], ["type", (r) => r.ty], ["agents", (r) => r.ag], ["targets", (r) => r.tg], ["indications", (r) => r.ds], ["isotopes", (r) => r.iso], ["citations", (r) => r.ci], ["url", (r) => paperUrl(r.id)]],
  },
  abstracts: {
    noun: "abstracts",
    sharded: true,
    files: (years) => years.map((y) => `abstracts-${y}.json`),
    facets: [
      { key: "meeting", label: "Meeting", get: (r) => r.m, order: "desc" },
      ...tagFacets,
      { key: "type", label: "Abstract type", get: (r) => r.ty },
      { key: "role", label: "Role", get: (r) => r.role },
    ],
    hay: (r, L) => [r.id, r.t, r.au, r.code, r.m, ...(r.ag ?? []), ...(r.tg ?? []).map((v: string) => tn(v, L)), ...(r.ds ?? []).map((v: string) => dn(v, L)), ...(r.iso ?? [])].join(" ").toLowerCase(),
    sort: (a, b) => (b.y ?? 0) - (a.y ?? 0),
    row: (r, L, tag) => (
      <>
        <Title href={r.u}>{r.t}</Title>
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          <span>{r.m}</span>{r.code && <span>{r.code}</span>}{r.ty && <span>{r.ty}</span>}
          {r.au && <span>{r.au}</span>}
        </div>
        {r.ag?.length > 0 && <div className="mt-1 text-xs">{r.ag.join(" · ")}</div>}
        <div className="mt-1.5 flex flex-wrap gap-1 text-[11px]"><Chips r={r} L={L} tag={tag} /></div>
      </>
    ),
    csv: [["meeting", (r) => r.m], ["code", (r) => r.code], ["title", (r) => r.t], ["authors", (r) => r.au], ["type", (r) => r.ty], ["agents", (r) => r.ag], ["targets", (r) => r.tg], ["indications", (r) => r.ds], ["isotopes", (r) => r.iso], ["official link", (r) => r.u]],
  },
  patents: {
    noun: "patent publications",
    sharded: true,
    files: (years) => years.map((y) => `patents-${y}.json`),
    facets: [
      { key: "office", label: "Patent office", get: (r) => r.cc, name: (v) => rn(v) },
      ...tagFacets,
      { key: "class", label: "Patent class", get: (r) => r.cl, name: (v) => ({ A61K51: "A61K51 radioactive preparations", C07B59: "C07B59 isotope labelling", G21G1: "G21G1 isotope production", G21G4: "G21G4 radioactive sources and generators" } as Record<string, string>)[v] ?? v },
    ],
    hay: (r, L) => [r.id, r.t, r.as, ...(r.tg ?? []).map((v: string) => tn(v, L)), ...(r.ds ?? []).map((v: string) => dn(v, L)), ...(r.iso ?? [])].join(" ").toLowerCase(),
    sort: (a, b) => String(b.pub ?? "").localeCompare(String(a.pub ?? "")),
    row: (r, L, tag) => (
      <>
        <Title href={patentUrl(r.id)}>{r.t || r.id}</Title>
        <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          <span className="tabular-nums">{r.id}</span>
          {r.as && <span>{r.as}</span>}
          {r.pub && <span>Published {r.pub}</span>}
          {r.pr && <span>Priority {r.pr}</span>}
          {r.lang && r.lang !== "en" && <span>Original language: {r.lang}</span>}
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1 text-[11px]"><Chips r={r} L={L} tag={tag} /></div>
      </>
    ),
    csv: [["publication", (r) => r.id], ["title", (r) => r.t], ["office", (r) => r.cc], ["applicant", (r) => r.as], ["published", (r) => r.pub], ["priority", (r) => r.pr], ["classes", (r) => r.cl], ["targets", (r) => r.tg], ["isotopes", (r) => r.iso], ["url", (r) => patentUrl(r.id)]],
  },
  gaps: {
    noun: "unmet-need statements",
    files: () => ["gaps.json"],
    facets: [
      { key: "indication", label: "Indication", get: (r) => r.ds, name: dn },
      { key: "theme", label: "Theme", get: (r) => (r.th?.length ? r.th : ["other"]) },
      { key: "target", label: "Target", get: (r) => r.tg, name: tn },
      { key: "isotope", label: "Isotope", get: (r) => r.iso },
      { key: "kind", label: "Statement", get: (r) => r.k },
      { key: "source", label: "Source", get: (r) => (r.src === "paper" ? "journal paper" : "congress abstract") },
      { key: "year", label: "Year", get: (r) => (r.y ? String(r.y) : null), order: "desc" },
    ],
    hay: (r, L) => [r.s, r.t, ...(r.tg ?? []).map((v: string) => tn(v, L)), ...(r.ds ?? []).map((v: string) => dn(v, L)), ...(r.iso ?? []), ...(r.th ?? [])].join(" ").toLowerCase(),
    sort: (a, b) => (b.y ?? 0) - (a.y ?? 0),
    row: (r, L, tag) => (
      <>
        <blockquote className="border-l-2 border-accent pl-3 text-[15px] leading-relaxed">&ldquo;{r.s}&rdquo;</blockquote>
        <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
          <Title href={r.u || paperUrl(r.id)}>{r.t || r.id}</Title>
          {r.y && <span>{r.y}</span>}
          <span>{r.src === "paper" ? "Journal paper" : "Congress abstract"}</span>
          {(r.th ?? []).map((t: string) => <button key={t} type="button" className="hover:underline" onClick={() => tag("theme", t)}>{t}</button>)}
        </div>
        <div className="mt-1.5 flex flex-wrap gap-1 text-[11px]"><Chips r={r} L={L} tag={tag} /></div>
      </>
    ),
    csv: [["statement", (r) => r.s], ["themes", (r) => r.th], ["kind", (r) => r.k], ["indications", (r) => r.ds], ["targets", (r) => r.tg], ["isotopes", (r) => r.iso], ["year", (r) => r.y], ["source title", (r) => r.t], ["source", (r) => r.u || paperUrl(r.id)]],
    summary: (rows, L, tag) => {
      const m = new Map<string, number>();
      for (const r of rows) for (const d of r.ds ?? []) for (const t of r.th?.length ? r.th : ["other"]) m.set(`${d}|${t}`, (m.get(`${d}|${t}`) ?? 0) + 1);
      const top = [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12);
      if (!top.length) return null;
      return (
        <div className="mb-5 rounded-xl border border-border bg-card p-4">
          <p className="text-sm font-semibold">Where the stated needs cluster in this selection</p>
          <ul className="mt-2 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
            {top.map(([k, n]) => {
              const [d, t] = k.split("|");
              return (
                <li key={k}>
                  <button type="button" className="text-left hover:underline" onClick={() => { tag("indication", d); tag("theme", t); }}>
                    <span className="tabular-nums font-medium">{n}</span> {dn(d, L)}: {t}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      );
    },
  },
};

const PAGE = 50;

export function UniverseBrowser({ dataset, years = [] }: { dataset: Dataset; years?: number[] }) {
  const cfg = CFG[dataset];
  const allYears = useMemo(() => years.map(String).sort().reverse(), [years]);
  const [labels, setLabels] = useState<Labels | null>(null);
  const [rows, setRows] = useState<Row[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sel, setSel] = useState<Record<string, string[]>>({});
  const [q, setQ] = useState("");
  const [yearSel, setYearSel] = useState<string[]>(allYears.slice(0, 2));
  const [limit, setLimit] = useState(PAGE);
  const [ready, setReady] = useState(false);

  // Read filters from the address once, so a filtered view can be shared as a link.
  // Deferred a frame, as the other URL-backed views do, so the effect sets no state synchronously.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const p = new URLSearchParams(window.location.search);
      const s: Record<string, string[]> = {};
      for (const f of cfg.facets) { const v = p.getAll(f.key); if (v.length) s[f.key] = v; }
      setSel(s);
      setQ(p.get("q") ?? "");
      const ys = p.getAll("years").filter((y) => allYears.includes(y));
      if (ys.length) setYearSel(ys);
      setReady(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [cfg, allYears]);

  useEffect(() => {
    if (!ready) return;
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    for (const [k, vs] of Object.entries(sel)) for (const v of vs) p.append(k, v);
    if (cfg.sharded && yearSel.join() !== allYears.slice(0, 2).join()) for (const y of yearSel) p.append("years", y);
    const s = p.toString();
    window.history.replaceState(null, "", s ? `?${s}` : window.location.pathname);
  }, [sel, q, yearSel, ready, cfg.sharded, allYears]);

  useEffect(() => { loadUniverse<Labels>("labels.json").then(setLabels).catch((e) => setError(String(e))); }, []);
  useEffect(() => {
    if (!ready) return;
    let live = true;
    const raf = requestAnimationFrame(() => {
      setRows(null);
      Promise.all(cfg.files(yearSel).map((f) => loadUniverse<Row[]>(f).catch(() => [] as Row[])))
        .then((parts) => { const all = parts.flat(); if (cfg.sort) all.sort(cfg.sort); if (live) setRows(all); })
        .catch((e) => { if (live) setError(String(e)); });
    });
    return () => { live = false; cancelAnimationFrame(raf); };
  }, [cfg, yearSel, ready]);

  const L = labels ?? { targets: {}, diseases: {}, isotopes: {}, isotopeRole: {} };
  const hay = useMemo(() => (rows && labels ? rows.map((r) => cfg.hay(r, labels)) : []), [rows, labels, cfg]);
  const vals = useMemo(() => (rows ? cfg.facets.map((f) => rows.map((r) => { const v = f.get(r); return v == null || v === "" ? [] : Array.isArray(v) ? v.map(String) : [String(v)]; })) : []), [rows, cfg]);

  const qOk = useMemo(() => (rows ? rows.map((_, i) => !q || matches(hay[i] ?? "", q)) : []), [rows, hay, q]);
  const passes = (i: number, skip: number) => cfg.facets.every((f, fi) => fi === skip || !sel[f.key]?.length || sel[f.key].some((v) => vals[fi][i].includes(v)));
  const filtered = useMemo(() => (rows ? rows.filter((_, i) => qOk[i] && passes(i, -1)) : []),
    // eslint-disable-next-line react-hooks/exhaustive-deps -- passes() is rebuilt each render from sel and vals, both listed
    [rows, qOk, sel, vals]);

  const options = useMemo(() => {
    if (!rows) return [] as FacetOption[][];
    return cfg.facets.map((f, fi) => {
      const counts = new Map<string, number>();
      for (let i = 0; i < rows.length; i++) {
        if (!qOk[i] || !passes(i, fi)) continue;
        for (const v of vals[fi][i]) counts.set(v, (counts.get(v) ?? 0) + 1);
      }
      for (const v of sel[f.key] ?? []) if (!counts.has(v)) counts.set(v, 0);
      const opts = [...counts.entries()].map(([value, count]) => ({ value, count, label: f.name ? f.name(value, L) : value }));
      if (f.order === "desc") opts.sort((a, b) => b.value.localeCompare(a.value));
      else opts.sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
      return opts;
    });
  }, [rows, qOk, sel, vals, cfg, L]); // eslint-disable-line react-hooks/exhaustive-deps

  const tag = (key: string, v: string) => { setLimit(PAGE); setSel((s) => (s[key]?.includes(v) ? s : { ...s, [key]: [...(s[key] ?? []), v] })); };
  const active = Object.values(sel).some((v) => v.length) || q;

  return (
    <div>
      <div className="flex flex-wrap items-end gap-2">
        <label className="flex-1 min-w-[16rem]">
          <span className="sr-only">Search</span>
          <input
            type="search" value={q} onChange={(e) => { setQ(e.target.value); setLimit(PAGE); }}
            placeholder={`Search ${cfg.noun}: agent, target, sponsor, words in the title`}
            className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm"
          />
        </label>
        {cfg.sharded && (
          <FacetSelect label="Years" multi searchable={false} width="w-40" highlight={false}
            options={allYears.map((y) => ({ value: y, label: y }))} value={yearSel}
            onChange={(v) => { const a = (v as string[]) ?? []; setYearSel(a.length ? a : allYears.slice(0, 1)); setLimit(PAGE); }} />
        )}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {cfg.facets.map((f, fi) => (
          <FacetSelect key={f.key} label={f.label} multi width="w-52" options={options[fi] ?? []} value={sel[f.key] ?? []}
            onChange={(v) => { setSel((s) => ({ ...s, [f.key]: (v as string[]) ?? [] })); setLimit(PAGE); }} />
        ))}
      </div>

      <div className="mt-4 mb-3 flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="text-muted">
          {error ? <span className="text-rose-600">Could not load the data: {error}</span>
            : rows ? <><span className="font-semibold text-foreground tabular-nums">{filtered.length.toLocaleString()}</span> of {rows.length.toLocaleString()} {cfg.noun}{cfg.sharded ? ` (${yearSel.slice().sort().join(", ")})` : ""}</>
              : "Loading…"}
        </p>
        <div className="flex gap-2">
          {active && <button type="button" className="btn" onClick={() => { setSel({}); setQ(""); setLimit(PAGE); }}>Clear filters</button>}
          {rows && filtered.length > 0 && (
            <button type="button" className="btn" onClick={() => download(`nuclide-${dataset}.csv`, toCsv(filtered, cfg.csv as never))}>Download CSV</button>
          )}
        </div>
      </div>

      {labels && cfg.summary && rows && cfg.summary(filtered, L, tag)}

      <ul className="divide-y divide-border border-t border-border">
        {filtered.slice(0, limit).map((r, i) => <li key={`${r.id ?? ""}-${i}`} className="py-3">{cfg.row(r, L, tag)}</li>)}
      </ul>
      {filtered.length > limit && (
        <div className="mt-4 text-center">
          <button type="button" className="btn" onClick={() => setLimit((n) => n + PAGE * 2)}>Show more ({(filtered.length - limit).toLocaleString()} left)</button>
        </div>
      )}
    </div>
  );
}
