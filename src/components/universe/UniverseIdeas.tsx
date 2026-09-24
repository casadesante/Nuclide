"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FacetSelect, type FacetOption } from "@/components/filters/FacetSelect";
import { download, LENS, loadUniverse, matches, REGION_NAME, TARGET_PAGE, toCsv, type Idea, type IdeasFile, type Labels } from "@/lib/universe";

const PAGE = 40;
const EV_LABEL: Record<string, string> = { gaps: "Unmet-need statements", trials: "Trials", papers: "Papers", abstracts: "Congress abstracts", products: "Registrations", patents: "Patents" };
const EV_ORDER = ["gaps", "trials", "abstracts", "papers", "products", "patents"] as const;

type Key = "lens" | "target" | "indication" | "isotope" | "role" | "region";
const FACETS: Array<{ key: Key; label: string; get: (i: Idea) => string[] }> = [
  { key: "lens", label: "Lens", get: (i) => [i.lens] },
  { key: "target", label: "Target", get: (i) => (i.tg ? [i.tg] : []) },
  { key: "indication", label: "Indication", get: (i) => (i.ds ? [i.ds] : []) },
  { key: "isotope", label: "Isotope", get: (i) => i.iso ?? [] },
  { key: "role", label: "Role", get: (i) => (i.role ? [i.role] : []) },
  { key: "region", label: "Country or region", get: (i) => i.regions ?? [] },
];

function Evidence({ idea, file }: { idea: Idea; file: IdeasFile }) {
  return (
    <div className="mt-3 space-y-3 border-t border-border pt-3">
      {EV_ORDER.filter((k) => idea.ev[k]?.length).map((k) => (
        <div key={k}>
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">{EV_LABEL[k]}</p>
          <ul className="mt-1 space-y-1.5 text-sm">
            {idea.ev[k]!.map((id) => {
              const r = file.refs[id];
              if (!r) return <li key={id} className="text-muted">{id}</li>;
              const [text, year, url, meta] = r;
              const body = k === "gaps" ? <>&ldquo;{text}&rdquo;</> : text;
              return (
                <li key={id} className={k === "gaps" ? "border-l-2 border-accent pl-2" : ""}>
                  {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">{body}</a> : body}
                  <span className="ml-2 text-xs text-muted">{[k === "gaps" ? meta : meta, year].filter(Boolean).join(" · ")}</span>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function UniverseIdeas() {
  const [file, setFile] = useState<IdeasFile | null>(null);
  const [labels, setLabels] = useState<Labels | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [sel, setSel] = useState<Partial<Record<Key, string[]>>>({});
  const [q, setQ] = useState("");
  const [limit, setLimit] = useState(PAGE);
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  // Deferred a frame, as the other URL-backed views do, so the effect sets no state synchronously.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const p = new URLSearchParams(window.location.search);
      const s: Partial<Record<Key, string[]>> = {};
      for (const f of FACETS) { const v = p.getAll(f.key); if (v.length) s[f.key] = v; }
      setSel(s); setQ(p.get("q") ?? ""); setReady(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);
  useEffect(() => {
    if (!ready) return;
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    for (const [k, vs] of Object.entries(sel)) for (const v of vs ?? []) p.append(k, v);
    const s = p.toString();
    window.history.replaceState(null, "", s ? `?${s}` : window.location.pathname);
  }, [sel, q, ready]);
  useEffect(() => {
    Promise.all([loadUniverse<IdeasFile>("ideas.json"), loadUniverse<Labels>("labels.json")])
      .then(([f, l]) => { setFile(f); setLabels(l); })
      .catch((e) => setError(String(e)));
  }, []);

  const L = useMemo(() => labels ?? { targets: {}, diseases: {}, isotopes: {}, isotopeRole: {} }, [labels]);
  const name = (key: Key, v: string) =>
    key === "lens" ? LENS[v]?.label ?? v : key === "target" ? L.targets[v] ?? v : key === "indication" ? L.diseases[v] ?? v : key === "region" ? REGION_NAME[v] ?? v : v;

  const ideas = useMemo(() => file?.ideas ?? [], [file]);
  const hay = useMemo(() => ideas.map((i) => [i.title, ...i.facts, i.tg && L.targets[i.tg], i.ds && L.diseases[i.ds], ...(i.iso ?? []), LENS[i.lens]?.label].join(" ").toLowerCase()), [ideas, L]);
  const passes = (i: Idea, skip: Key | null) => FACETS.every((f) => f.key === skip || !sel[f.key]?.length || sel[f.key]!.some((v) => f.get(i).includes(v)));
  const filtered = useMemo(() => ideas.filter((i, n) => (!q || matches(hay[n], q)) && passes(i, null)), [ideas, hay, q, sel]); // eslint-disable-line react-hooks/exhaustive-deps
  const options = useMemo(() => FACETS.map((f) => {
    const m = new Map<string, number>();
    ideas.forEach((i, n) => { if ((!q || matches(hay[n], q)) && passes(i, f.key)) for (const v of f.get(i)) m.set(v, (m.get(v) ?? 0) + 1); });
    for (const v of sel[f.key] ?? []) if (!m.has(v)) m.set(v, 0);
    return [...m.entries()].map(([value, count]) => ({ value, count, label: name(f.key, value) })).sort((a, b) => b.count - a.count || a.label.localeCompare(b.label)) as FacetOption[];
  }), [ideas, hay, q, sel, L]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (id: string) => setOpen((s) => { const n = new Set(s); if (n.has(id)) n.delete(id); else n.add(id); return n; });
  const pick = (key: Key, v: string) => { setLimit(PAGE); setSel((s) => (s[key]?.includes(v) ? s : { ...s, [key]: [...(s[key] ?? []), v] })); };
  const lensCounts = useMemo(() => { const m = new Map<string, number>(); for (const i of filtered) m.set(i.lens, (m.get(i.lens) ?? 0) + 1); return m; }, [filtered]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {Object.entries(LENS).map(([k, v]) => {
          const n = lensCounts.get(k) ?? 0;
          const on = sel.lens?.includes(k);
          return (
            <button key={k} type="button" title={v.tip}
              onClick={() => setSel((s) => ({ ...s, lens: on ? (s.lens ?? []).filter((x) => x !== k) : [...(s.lens ?? []), k] }))}
              className={`rounded-full border px-3 py-1 text-xs ${on ? "border-accent bg-accent-soft" : "border-border bg-card"} ${n === 0 && !on ? "opacity-50" : ""}`}>
              {v.label} <span className="tabular-nums text-muted">{n}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap items-end gap-2">
        <input type="search" value={q} onChange={(e) => { setQ(e.target.value); setLimit(PAGE); }}
          placeholder="Search ideas: a need, a target, an indication, an isotope"
          className="flex-1 min-w-[16rem] rounded-lg border border-border bg-card px-3 py-2 text-sm" />
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {FACETS.filter((f) => f.key !== "lens").map((f) => (
          <FacetSelect key={f.key} label={f.label} multi width="w-52" options={options[FACETS.indexOf(f)] ?? []} value={sel[f.key] ?? []}
            onChange={(v) => { setSel((s) => ({ ...s, [f.key]: (v as string[]) ?? [] })); setLimit(PAGE); }} />
        ))}
      </div>
      <div className="mt-4 mb-3 flex flex-wrap items-center justify-between gap-2 text-sm">
        <p className="text-muted">
          {error ? <span className="text-rose-600">Could not load the ideas: {error}</span>
            : file ? <><span className="font-semibold text-foreground tabular-nums">{filtered.length.toLocaleString()}</span> of {ideas.length.toLocaleString()} ideas, strongest evidence first</> : "Loading…"}
        </p>
        <div className="flex gap-2">
          {(q || Object.values(sel).some((v) => v?.length)) && <button type="button" className="btn" onClick={() => { setSel({}); setQ(""); }}>Clear filters</button>}
          {file && filtered.length > 0 && (
            <button type="button" className="btn" onClick={() => download("nuclide-ideas.csv", toCsv(filtered as never, [
              ["idea", (i: Idea) => i.title], ["lens", (i: Idea) => LENS[i.lens]?.label ?? i.lens], ["facts", (i: Idea) => i.facts],
              ["target", (i: Idea) => (i.tg ? L.targets[i.tg] ?? i.tg : "")], ["indication", (i: Idea) => (i.ds ? L.diseases[i.ds] ?? i.ds : "")],
              ["isotopes", (i: Idea) => i.iso], ["regions", (i: Idea) => i.regions],
              ["evidence", (i: Idea) => EV_ORDER.flatMap((k) => (i.ev[k] ?? []).map((id) => file.refs[id]?.[2] ?? id))],
            ] as never))}>Download CSV</button>
          )}
        </div>
      </div>

      <ol className="space-y-3">
        {filtered.slice(0, limit).map((i) => (
          <li key={i.id} className="rounded-xl border border-border bg-card p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <button type="button" onClick={() => pick("lens", i.lens)} title={LENS[i.lens]?.tip} className="rounded-full bg-accent-soft px-2 py-0.5 hover:underline">{LENS[i.lens]?.label ?? i.lens}</button>
              {i.tg && <button type="button" onClick={() => pick("target", i.tg!)} className="rounded bg-foreground/5 px-1.5 py-0.5 hover:underline">{L.targets[i.tg] ?? i.tg}</button>}
              {i.ds && <button type="button" onClick={() => pick("indication", i.ds!)} className="rounded bg-foreground/5 px-1.5 py-0.5 hover:underline">{L.diseases[i.ds] ?? i.ds}</button>}
              {(i.iso ?? []).slice(0, 3).map((v) => <button key={v} type="button" onClick={() => pick("isotope", v)} className="rounded bg-foreground/5 px-1.5 py-0.5 hover:underline">{v}</button>)}
              {i.tg && TARGET_PAGE[i.tg] && <Link href={`/targets/${TARGET_PAGE[i.tg]}/`} className="ml-auto text-accent hover:underline">Target page</Link>}
            </div>
            <h3 className="mt-2 text-[17px] font-semibold leading-snug">{i.title}</h3>
            <ul className="mt-1.5 list-disc space-y-0.5 pl-5 text-sm text-foreground/85">
              {i.facts.map((f, n) => <li key={n}>{f}</li>)}
            </ul>
            {file && Object.values(i.ev).some((v) => v?.length) && (
              <button type="button" className="mt-2 text-sm text-accent hover:underline" onClick={() => toggle(i.id)}>
                {open.has(i.id) ? "Hide evidence" : `Show evidence (${EV_ORDER.reduce((n, k) => n + (i.ev[k]?.length ?? 0), 0)} sources)`}
              </button>
            )}
            {file && open.has(i.id) && <Evidence idea={i} file={file} />}
          </li>
        ))}
      </ol>
      {filtered.length > limit && (
        <div className="mt-4 text-center">
          <button type="button" className="btn" onClick={() => setLimit((n) => n + PAGE * 2)}>Show more ({(filtered.length - limit).toLocaleString()} left)</button>
        </div>
      )}
    </div>
  );
}
