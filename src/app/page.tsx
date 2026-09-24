import type { Metadata } from "next";
import Link from "next/link";
import { graph } from "@/lib/graph";
import { KIND_META, KINDS, routeFor } from "@/lib/schema";
import { Container, EntityCard, KindChip, StatusChip } from "@/components/ui";
import { SearchBox } from "@/components/SearchBox";
import { KIND_COLOR } from "@/lib/text";
import { NAV_GROUPS } from "@/lib/nav";
import { GroupText, ItemText } from "@/components/NavText";
import { FrontSchematic } from "@/components/FrontSchematic";
import { FrontIcon } from "@/components/FrontIcon";
import { NavIcon } from "@/components/NavIcon";
import { KindIcon } from "@/components/KindIcon";
import { MoleculeSlot } from "@/components/MoleculeSlot";
import { GardenBackdrop } from "@/components/Garden";
import { GardenDivider } from "@/components/GardenDivider";
import { WebSiteJsonLd } from "@/components/JsonLd";
import { pageMeta } from "@/lib/seo";

/** Short labels for the seven surfacing lenses, used on the home cards. */
const LENS_LABEL: Record<string, string> = {
  "theranostic-gap": "Theranostic gap",
  "standalone-diagnostic": "Standalone diagnostic",
  "target-crossover": "Target crossover",
  "unmet-need-first": "Unmet need first",
  "non-us-registry": "Non-US registry",
  "maturing-preclinical": "Maturing preclinical",
  "supply-isotope": "Supply and isotope",
};

const HOME_DESCRIPTION = "The open, cited map of radiopharmaceuticals: every isotope, therapy, tracer, target, trial, manufacturer and institution on one page each, therapy and diagnostic imaging alike, in plain English first, with sources.";

export const metadata: Metadata = pageMeta({ title: "Nuclide", absoluteTitle: "Nuclide: the open, cited map of radiopharmaceuticals — isotopes, therapies, tracers, trials and supply", description: HOME_DESCRIPTION, path: "/" });

const AUDIENCES: Array<{ id: string; title: string; lede: string; links: Array<{ href: string; label: string; blurb: string }> }> = [
  {
    id: "clinician", title: "Clinician or physicist", lede: "Agents, criteria and dosimetry, cited. Every number links to its source and every object to its neighbours.",
    links: [
      { href: "/drugs/", label: "Agents", blurb: "Approved therapies and tracers, with labels" },
      { href: "/isotopes/", label: "Isotopes", blurb: "Half-life, emission, range, how each is made" },
      { href: "/indications/", label: "Indications", blurb: "Where radiopharmaceuticals are used today" },
      { href: "/trials/", label: "Trials", blurb: "Landmark and current, with results as published" },
    ],
  },
  {
    id: "researcher", title: "Researcher or radiochemist", lede: "Chelators, targets, pairs and the literature behind them, linked in both directions.",
    links: [
      { href: "/technologies/", label: "Technologies", blurb: "Chemistry, hardware and imaging methods" },
      { href: "/targets/", label: "Targets", blurb: "PSMA, SSTR, FAP, CAIX and the rest" },
      { href: "/papers/", label: "Key papers", blurb: "The literature that defines each sub-field" },
      { href: "/opportunities/", label: "Opportunities", blurb: "Decisions nobody can make today, and what would settle them" },
      { href: "/universe/", label: "The universe", blurb: "Every product, trial, paper, abstract, patent and stated unmet need, searchable" },
    ],
  },
  {
    id: "builder", title: "Builder, operator or investor", lede: "Where the field is stuck: supply, capacity and the programmes aimed at it.",
    links: [
      { href: "/supply/", label: "Isotope supply", blurb: "Who makes what, and what is tight" },
      { href: "/bottlenecks/", label: "Bottlenecks", blurb: "The constraints slowing everything, ranked" },
      { href: "/companies/", label: "Companies", blurb: "Pharma, radiopharma, isotope producers, CDMOs" },
      { href: "/manufacturing/", label: "Manufacturing", blurb: "Hot cells, GMP release, same-week logistics" },
    ],
  },
];

function Heading({ title, href, label, sub }: { title: string; href: string; label: string; sub?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1 mb-5">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {sub && <p className="text-sm text-muted mt-1">{sub}</p>}
      </div>
      <Link href={href} className="text-sm font-medium text-foreground/80 hover:text-foreground underline decoration-foreground/25 underline-offset-[3px] hover:decoration-foreground">{label} <span aria-hidden>→</span></Link>
    </div>
  );
}

export default function Home() {
  const g = graph();
  const spotlight = g.kind("indication").find((c) => c.id === "prostate")!;
  const sections = g.kind("section").sort((a, b) => a.order - b.order);
  const drugs = g.kind("drug");
  const approvalYear = Math.max(...drugs.flatMap((d) => d.approvals.map((a) => a.year)));
  const approvals = drugs.filter((d) => d.approvals.some((a) => a.year === approvalYear)).sort((a, b) => a.name.localeCompare(b.name));
  const frontier = g.kind("technology").filter((t) => t.tags.includes("frontier")).slice(0, 8);
  // Six openings for the home page: the ones whose case is strongest first (a standalone use, then the
  // most advanced public work), so the first thing a reader meets is not a speculative one.
  const MATURITY_RANK: Record<string, number> = { "approved-elsewhere": 0, "being-tested-at-scale": 1, "early-clinical": 2, "preclinical-evidence": 3, speculative: 4 };
  const VERDICT_RANK: Record<string, number> = { "standalone-and-companion": 0, "standalone-only": 1, unclear: 2, "companion-only": 3 };
  const openings = [...g.kind("opportunity")]
    .sort((a, b) => {
      const av = a as unknown as { verdict: string; maturity: string }, bv = b as unknown as { verdict: string; maturity: string };
      return (VERDICT_RANK[av.verdict] ?? 9) - (VERDICT_RANK[bv.verdict] ?? 9)
        || (MATURITY_RANK[av.maturity] ?? 9) - (MATURITY_RANK[bv.maturity] ?? 9)
        || a.name.localeCompare(b.name);
    })
    .slice(0, 6);
  const roadmaps = g.kind("roadmap");
  const counts = KINDS.map((k) => ({ k, n: g.kind(k).length })).filter((c) => c.n > 0);
  const total = counts.reduce((a, c) => a + c.n, 0);

  // Latest milestone per cancer for the most recent year in any cancer's history.
  const indications = g.kind("indication");
  const milestoneYear = Math.max(...indications.flatMap((c) => c.history.map((h) => Number(h.year))).filter(Number.isFinite));
  const milestones = indications
    .map((c) => ({ c, ev: c.history.filter((h) => Number(h.year) === milestoneYear).at(-1) }))
    .filter((x): x is { c: typeof indications[number]; ev: NonNullable<typeof x.ev> } => !!x.ev)
    .sort((a, b) => a.c.name.localeCompare(b.c.name));

  const fmt = (n: number) => n.toLocaleString("en-GB");

  return (
    <>
      <WebSiteJsonLd description={HOME_DESCRIPTION} />
      {/* Hero */}
      <section className="hero relative border-b border-border">
        <GardenBackdrop variant="hero" />
        <Container className="relative pt-14 pb-10 sm:pt-20 sm:pb-12">
          <div className="max-w-3xl">
            <h1 className="display">Total information dominance on radiopharmaceuticals.</h1>
            <p className="mt-6 text-[17px] sm:text-xl text-foreground/85 leading-relaxed max-w-2xl">
              Every isotope, ligand, tracer, therapy, target, trial, manufacturer and institution in nuclear medicine, linked together — theranostics and diagnostic imaging alike. The state of the art, the history, the supply chain and what is coming, with a plain-English TL;DR on every page.
            </p>
            <div className="mt-8 max-w-2xl"><SearchBox large autoFocus={false} /></div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link href="/universe/" className="btn">Search the whole universe</Link>
              <Link href="/universe/ideas/" className="btn">Ideas from the data</Link>
              <Link href="/opportunities/" className="btn">Where the openings are</Link>
              <Link href="/isotopes/lu-177/" className="btn">Example: lutetium-177</Link>
              <Link href="/roadmaps/psma-theranostics-roadmap/" className="btn">PSMA theranostics roadmap</Link>
              <Link href="/supply/" className="btn">Isotope supply</Link>
            </div>
          </div>

          {/* By the numbers */}
          <div className="mt-14">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 mb-3">
              <p className="text-sm text-muted"><span className="font-semibold text-foreground tabular-nums">{fmt(total)}</span> linked objects, one page each. Every count is a link.</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-px rounded-xl border border-border bg-card overflow-hidden shadow-card [&>li]:border-border [&>li]:border-b [&>li]:border-r">
              {counts.map(({ k, n }) => (
                <li key={k} className="bg-card">
                  <Link href={`/${KIND_META[k].route}/`} className="flex h-full items-center gap-3 px-3.5 py-3 hover:bg-surface transition-colors">
                    <span aria-hidden className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${KIND_COLOR[k]}`}><KindIcon kind={k} className="h-5 w-5" /></span>
                    <span className="min-w-0">
                      <span className="block text-xl font-semibold tabular-nums leading-none tracking-tight">{fmt(n)}</span>
                      <span className="block text-xs text-muted capitalize mt-1 truncate">{(KIND_META[k].title ?? KIND_META[k].plural)}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Three ways in */}
      <Container className="pt-14">
        <div className="grid gap-4 md:grid-cols-3">
          {AUDIENCES.map((a) => (
            <section key={a.id} aria-labelledby={`aud-${a.id}`} className="card relative p-5 flex flex-col">
              <GardenBackdrop variant="card" seed={a.id.length * 7} />
              <h2 id={`aud-${a.id}`} className="relative text-lg font-semibold tracking-tight">{a.title}</h2>
              <p className="text-sm text-muted mt-1 leading-relaxed">{a.lede}</p>
              <ul className="mt-4 -mx-2 divide-y divide-border/70">
                {a.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="group flex items-baseline justify-between gap-3 rounded-lg px-2 py-2 hover:bg-surface transition-colors">
                      <span className="min-w-0">
                        <span className="block text-[15px] font-medium leading-snug">{l.label}</span>
                        <span className="block text-xs text-muted mt-0.5">{l.blurb}</span>
                      </span>
                      <span aria-hidden className="text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-transform shrink-0">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* The five groups */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {NAV_GROUPS.map((grp) => (
            <Link key={grp.id} href={grp.href} className="card p-4">
              <div className="flex items-center gap-2 mb-1.5"><span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent"><NavIcon id={grp.id} className="h-4.5 w-4.5" /></span><div className="kicker"><GroupText id={grp.id} /></div></div>
              <p className="text-sm text-muted line-clamp-3 leading-relaxed"><GroupText id={grp.id} field="blurb" /></p>
              <div className="mt-3 flex flex-wrap gap-1">{grp.items.slice(0, 4).map((it) => <span key={it.href} className="chip bg-surface text-foreground/80"><ItemText href={it.href} groupId={grp.id} /></span>)}{grp.items.length > 4 && <span className="chip bg-surface text-muted">+{grp.items.length - 4}</span>}</div>
            </Link>
          ))}
        </div>
      </Container>

      {/* Fronts */}
      <Container className="mt-16"><GardenDivider /></Container>
      <Container className="mt-16"><GardenDivider /></Container>
      <Container className="mt-10">
        <Heading title="Openings" sub="Each one is a decision that cannot be made today, with the evidence read, the flags that would sink it and the study that would settle it." href="/opportunities/" label="All opportunities" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {openings.map((o) => (
            <Link key={o.id} href={`/opportunities/${o.id}/`} className="card p-4 hover:border-foreground/25">
              <div className="kicker mb-1.5">{LENS_LABEL[(o as { lens: string }).lens] ?? "Opportunity"}</div>
              <div className="font-medium leading-snug">{o.name}</div>
              <p className="mt-1.5 text-sm text-muted leading-relaxed">{(o as { unmetNeed: string }).unmetNeed}</p>
            </Link>
          ))}
        </div>
      </Container>

      <Container className="mt-10">
        <Heading title="Fronts of nuclear medicine" sub="Every way a radionuclide is used to see or to treat, grouped. Each schematic is a working model, not to scale." href="/fronts/" label="All fronts" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => {
            const techs = g.incoming(s.id).get("technology") ?? [];
            return (
              <Link key={s.id} href={routeFor(s)} className="card overflow-hidden">
                <FrontSchematic sectionId={s.id} compact height="h-32" />
                <div className="p-4 border-t border-border">
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <div className="font-semibold leading-snug flex items-center gap-2.5"><span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"><FrontIcon id={s.id} className="h-5.5 w-5.5" /></span>{s.name}</div>
                    <span className="text-xs text-muted tabular-nums shrink-0">{techs.length} technologies</span>
                  </div>
                  <p className="text-sm text-muted line-clamp-2 leading-relaxed">{s.tldr}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>

      {/* What is new */}
      <Container className="mt-16"><GardenDivider /></Container>
      <Container className="mt-10">
        <Heading title="Latest updates" sub="Generated from the corpus at each build: approvals by agent, and the latest milestone recorded for each indication." href="/changelog/" label="Site changelog" />
        <div className="grid gap-4 lg:grid-cols-2">
          <section aria-labelledby="new-approvals" className="card">
            <div className="flex items-baseline justify-between gap-3 px-4 pt-4 pb-3 border-b border-border">
              <h3 id="new-approvals" className="font-semibold">Approvals in {approvalYear}</h3>
              <span className="text-xs text-muted tabular-nums">{approvals.length} products</span>
            </div>
            <ul className="divide-y divide-border">
              {approvals.slice(0, 10).map((d) => (
                <li key={d.id} className="px-4 py-2.5 flex items-start gap-3">
                  <MoleculeSlot drugId={d.id} modality={d.modality} name={d.name} className="h-11 w-11" />
                  <div className="min-w-0">
                    <Link href={routeFor(d)} className="font-medium hover:underline">{d.name}</Link>
                    <div className="text-xs text-muted mt-0.5 leading-relaxed line-clamp-2">{d.approvals.filter((a) => a.year === approvalYear).map((a) => a.indication).join("; ")}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="px-4 py-3 border-t border-border flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <Link href="/regulatory/" className="font-medium hover:underline">Regulatory timeline <span aria-hidden>→</span></Link>
              <Link href="/drugs/" className="text-muted hover:text-foreground hover:underline">All agents</Link>
            </div>
          </section>
          <section aria-labelledby="new-milestones" className="card">
            <div className="flex items-baseline justify-between gap-3 px-4 pt-4 pb-3 border-b border-border">
              <h3 id="new-milestones" className="font-semibold">Latest milestone by indication</h3>
              <span className="text-xs text-muted tabular-nums">{milestoneYear}</span>
            </div>
            <ul className="divide-y divide-border">
              {milestones.slice(0, 10).map(({ c, ev }) => (
                <li key={c.id} className="px-4 py-2.5">
                  <Link href={routeFor(c)} className="text-xs font-medium text-accent hover:underline">{c.name}</Link>
                  <div className="text-sm leading-snug mt-0.5">{ev.title}</div>
                  {ev.note && <div className="text-xs text-muted mt-0.5 leading-relaxed line-clamp-2">{ev.note}</div>}
                </li>
              ))}
            </ul>
            <div className="px-4 py-3 border-t border-border flex flex-wrap gap-x-4 gap-y-1 text-sm">
              <Link href="/calendar/" className="font-medium hover:underline">Readout calendar <span aria-hidden>→</span></Link>
              <Link href="/indications/" className="text-muted hover:text-foreground hover:underline">All indications</Link>
            </div>
          </section>
        </div>
      </Container>

      {/* Spotlight */}
      <Container className="mt-16"><GardenDivider /></Container>
      <Container className="mt-10">
        <Heading title="Spotlight on prostate cancer" sub="The indication radioligand therapy changed first, and the template every indication page is growing into." href={routeFor(spotlight)} label="Full page" />
        <div className="card p-5 sm:p-6">
          <p className="text-[15px] sm:text-base leading-relaxed max-w-3xl">{spotlight.tldr}</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-3 text-sm">
            <div><div className="kicker mb-1.5">State of the art</div><p className="text-muted leading-relaxed">{spotlight.stateOfArt[0]}</p></div>
            <div><div className="kicker mb-1.5">Newest</div><p className="text-muted leading-relaxed">{spotlight.history[spotlight.history.length - 1].title}: {spotlight.history[spotlight.history.length - 1].note}</p></div>
            <div><div className="kicker mb-1.5">Open problem</div><p className="text-muted leading-relaxed">{spotlight.openProblems[1]}</p></div>
          </div>
          <div className="mt-5 pt-4 border-t border-border">
            <div className="kicker mb-2">Pipeline</div>
            <div className="flex flex-wrap gap-1.5">
              {spotlight.pipeline.slice(0, 8).map((id) => { const e = g.must(id); return <Link key={id} href={routeFor(e)} className={`chip border ${KIND_COLOR[e.kind]}`}>{e.name}</Link>; })}
            </div>
          </div>
        </div>
      </Container>

      {/* Roadmaps */}
      <Container className="mt-16"><GardenDivider /></Container>
      <Container className="mt-10">
        <Heading title="Roadmaps" sub="History to horizon for each part of the field." href="/roadmaps/" label="All roadmaps" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {roadmaps.map((r) => (
            <Link key={r.id} href={routeFor(r)} className="card p-4">
              <div className="flex items-center gap-2 mb-1.5"><KindChip kind="roadmap" /><span className="text-xs text-muted tabular-nums">{r.steps.length} steps</span></div>
              <div className="font-semibold leading-snug text-balance">{r.name}</div>
              <p className="text-sm text-muted mt-1.5 line-clamp-2 leading-relaxed">{r.tldr}</p>
            </Link>
          ))}
        </div>
      </Container>

      {/* Frontier */}
      <Container className="mt-16"><GardenDivider /></Container>
      <Container className="mt-10">
        <Heading title="Frontier technologies" sub="Early, unproven, and worth watching." href="/technologies/" label="All technologies" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {frontier.map((t) => <EntityCard key={t.id} e={t} />)}
        </div>
        <div className="mt-3 text-xs text-muted flex flex-wrap items-center gap-2">Evidence tiers: <StatusChip status="approved" /> <StatusChip status="phase-3" /> <StatusChip status="phase-2" /> <StatusChip status="phase-1" /> <StatusChip status="concept" /></div>
      </Container>

      {/* Institutions, data, contribute */}
      <Container className="mt-16 mb-4">
        <div className="card p-6 grid gap-6 md:grid-cols-3">
          <div>
            <div className="kicker mb-1.5">Institutions</div>
            <p className="text-sm text-muted leading-relaxed">The centres that run theranostics: who they are, where they are, what they publish.</p>
            <Link href="/institutions/" className="text-sm font-medium underline underline-offset-[3px] decoration-foreground/25 hover:decoration-foreground mt-2 inline-block">Map and ranking <span aria-hidden>→</span></Link>
          </div>
          <div>
            <div className="kicker mb-1.5">Open data</div>
            <p className="text-sm text-muted leading-relaxed">The whole corpus as static JSON, plus an MCP server and a CLI.</p>
            <Link href="/api/" className="text-sm font-medium underline underline-offset-[3px] decoration-foreground/25 hover:decoration-foreground mt-2 inline-block mr-4">API <span aria-hidden>→</span></Link>
            <Link href="/collections/" className="text-sm font-medium underline underline-offset-[3px] decoration-foreground/25 hover:decoration-foreground mt-2 inline-block">Collections <span aria-hidden>→</span></Link>
          </div>
          <div>
            <div className="kicker mb-1.5">Contribute</div>
            <p className="text-sm text-muted leading-relaxed">Every object is a record in a public repo. Fix a fact, add a source, propose an idea.</p>
            <Link href="/about/" className="text-sm font-medium underline underline-offset-[3px] decoration-foreground/25 hover:decoration-foreground mt-2 inline-block mr-4">How <span aria-hidden>→</span></Link>
            <Link href="/roadmap/" className="text-sm font-medium underline underline-offset-[3px] decoration-foreground/25 hover:decoration-foreground mt-2 inline-block">Roadmap <span aria-hidden>→</span></Link>
          </div>
        </div>
      </Container>
    </>
  );
}
