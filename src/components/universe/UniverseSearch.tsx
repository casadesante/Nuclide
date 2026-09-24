"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import stats from "@/data/universe-stats.json";
import { LENS, loadUniverse, matches, paperUrl, pretty, REGION_NAME, trialUrl, type IdeasFile, type Labels } from "@/lib/universe";

/* eslint-disable @typescript-eslint/no-explicit-any */
type Row = Record<string, any>;
type Sets = { ideas: IdeasFile; gaps: Row[]; trials: Row[]; products: Row[]; abstracts: Row[]; labels: Labels };

const EXAMPLES = ["resistance prostate", "patient selection", "dosimetry kidney", "glioblastoma", "fibrosis", "pancreatic detection", "alpha breast", "claudin"];
const SHOW = 6;

/** One result group on the search page. */
function Section({ title, n, href, children }: { title: string; n: number; href: string; children: React.ReactNode }) {
  return (
  <section className="rounded-xl border border-border bg-card p-4">
    <div className="flex items-baseline justify-between gap-2">
      <h3 className="font-semibold">{title} <span className="tabular-nums text-muted font-normal">{n.toLocaleString()}</span></h3>
      {n > 0 && <Link href={href} className="text-sm text-accent hover:underline">See all</Link>}
    </div>
    {n === 0 ? <p className="mt-2 text-sm text-muted">Nothing matches.</p> : <ul className="mt-2 space-y-2 text-sm">{children}</ul>}
  </section>
  );
}

/** One box over the whole universe: type a clinical need or a target and see ideas, stated needs, trials, registrations and abstracts together. */
export function UniverseSearch() {
  const [q, setQ] = useState("");
  const [sets, setSets] = useState<Sets | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => { const v = new URLSearchParams(window.location.search).get("q"); if (v) setQ(v); });
    return () => cancelAnimationFrame(raf);
  }, []);
  useEffect(() => {
    const t = setTimeout(() => window.history.replaceState(null, "", q ? `?q=${encodeURIComponent(q)}` : window.location.pathname), 300);
    return () => clearTimeout(t);
  }, [q]);
  useEffect(() => {
    if (!q || sets || loading) return;
    const raf = requestAnimationFrame(() => setLoading(true));
    Promise.all([loadUniverse<IdeasFile>("ideas.json"), loadUniverse<Row[]>("gaps.json"), loadUniverse<Row[]>("trials.json"), loadUniverse<Row[]>("products.json"), Promise.all(stats.abstractYears.map((y) => loadUniverse<Row[]>(`abstracts-${y}.json`))).then((parts) => parts.flat()), loadUniverse<Labels>("labels.json")])
      .then(([ideas, gaps, trials, products, abstracts, labels]) => setSets({ ideas, gaps, trials, products, abstracts, labels }))
      .catch((e) => setError(String(e)))
      .finally(() => { cancelAnimationFrame(raf); setLoading(false); });
  }, [q, sets, loading]);

  const res = useMemo(() => {
    if (!sets || q.trim().length < 2) return null;
    const L = sets.labels;
    const tags = (r: Row) => [...(r.tg ?? []).map((v: string) => L.targets[v] ?? v), ...(r.ds ?? []).map((v: string) => L.diseases[v] ?? v), ...(r.iso ?? [])].join(" ");
    const ideas = sets.ideas.ideas.filter((i) => matches([i.title, ...i.facts, i.tg && L.targets[i.tg], i.ds && L.diseases[i.ds]].join(" ").toLowerCase(), q));
    const gaps = sets.gaps.filter((g) => matches(`${g.s} ${g.t} ${tags(g)} ${(g.th ?? []).join(" ")}`.toLowerCase(), q)).sort((a, b) => (b.y ?? 0) - (a.y ?? 0));
    const trials = sets.trials.filter((t) => matches(`${t.t} ${t.id} ${t.sp} ${(t.ag ?? []).join(" ")} ${tags(t)}`.toLowerCase(), q)).sort((a, b) => (b.y ?? 0) - (a.y ?? 0));
    const products = sets.products.filter((p) => matches(`${p.b} ${p.i} ${p.o} ${p.h} ${p.ag} ${p.ind} ${tags(p)}`.toLowerCase(), q));
    const abstracts = sets.abstracts.filter((a) => matches(`${a.t} ${a.au} ${(a.ag ?? []).join(" ")} ${tags(a)}`.toLowerCase(), q)).sort((a, b) => (b.y ?? 0) - (a.y ?? 0));
    return { ideas, gaps, trials, products, abstracts };
  }, [sets, q]);

  const enc = encodeURIComponent(q);

  return (
    <div>
      <input type="search" value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off"
        placeholder="Type a clinical need, target, indication, isotope or agent"
        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-base" />
      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <span className="text-muted">Try:</span>
        {EXAMPLES.map((e) => <button key={e} type="button" className="rounded-full border border-border px-2.5 py-0.5 hover:bg-accent-soft" onClick={() => setQ(e)}>{e}</button>)}
      </div>
      {error && <p className="mt-3 text-sm text-rose-600">Could not load the data: {error}</p>}
      {q && !res && !error && <p className="mt-4 text-sm text-muted">{loading ? "Loading the universe…" : "Type at least two letters."}</p>}
      {res && (
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <Section title="Ideas" n={res.ideas.length} href={`/universe/ideas/?q=${enc}`}>
            {res.ideas.slice(0, SHOW).map((i) => <li key={i.id}><span className="mr-1.5 rounded-full bg-accent-soft px-1.5 py-0.5 text-[11px]">{LENS[i.lens]?.label ?? i.lens}</span>{i.title}<div className="text-xs text-muted">{i.facts[0]}</div></li>)}
          </Section>
          <Section title="Unmet needs stated in the literature" n={res.gaps.length} href={`/universe/gaps/?q=${enc}`}>
            {res.gaps.slice(0, SHOW).map((g, n) => <li key={n} className="border-l-2 border-accent pl-2">&ldquo;{g.s}&rdquo; <a href={g.u || paperUrl(g.id)} target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:underline">{g.y}</a></li>)}
          </Section>
          <Section title="Trials" n={res.trials.length} href={`/universe/trials/?q=${enc}`}>
            {res.trials.slice(0, SHOW).map((t) => <li key={t.id}><a href={trialUrl(t.id, t.u)} target="_blank" rel="noopener noreferrer" className="hover:underline">{t.t}</a><div className="text-xs text-muted">{[t.id, t.ph && `phase ${t.ph}`, pretty(t.st), t.y].filter(Boolean).join(" · ")}</div></li>)}
          </Section>
          <Section title="Approved or registered products" n={res.products.length} href={`/universe/products/?q=${enc}`}>
            {res.products.slice(0, SHOW).map((p) => <li key={p.id}><a href={p.u ?? undefined} target="_blank" rel="noopener noreferrer" className="hover:underline">{p.b || p.i}</a><div className="text-xs text-muted">{[REGION_NAME[p.rg] ?? p.rg, p.i, p.a].filter(Boolean).join(" · ")}</div></li>)}
          </Section>
          <Section title="Congress abstracts" n={res.abstracts.length} href={`/universe/abstracts/?q=${enc}&${stats.abstractYears.map((y) => `years=${y}`).join("&")}`}>
            {res.abstracts.slice(0, SHOW).map((a) => <li key={a.id}><a href={a.u ?? undefined} target="_blank" rel="noopener noreferrer" className="hover:underline">{a.t}</a><div className="text-xs text-muted">{a.m}</div></li>)}
          </Section>
          <section className="rounded-xl border border-border bg-card p-4">
            <h3 className="font-semibold">Papers and patents</h3>
            <p className="mt-2 text-sm text-muted">These are split by year to keep pages fast. Open the same search there:</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link href={`/universe/papers/?q=${enc}`} className="btn">Search papers</Link>
              <Link href={`/universe/patents/?q=${enc}`} className="btn">Search patents</Link>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
