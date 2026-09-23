/**
 * The scanner behind /opportunities/.
 *
 * Reads the corpus and lists the places where the graph itself says an opportunity might exist, using
 * the same lenses the opportunity records carry. It is deliberately mechanical: it finds candidates,
 * it does not judge them. A lens that finds nothing reports nothing — the counts on the page are the
 * real counts, never widened to look productive.
 *
 * Whether a drug is a radiopharmaceutical is decided by whether it links to an isotope (every record
 * gets its isotope links added in src/data/index.ts), not by keyword. Imaging versus therapy is read
 * from the modality and mechanism text, because those fields are free prose in this corpus; a drug
 * can be both (a theranostic pair described in one record) or neither (a companion chemotherapy or
 * antibody carried for context).
 */
import { graph } from "./graph";
import { KIND_META, type Entity, type Kind } from "./schema";

export type ScanLens =
  | "theranostic-gap"
  | "target-crossover"
  | "unmet-need-first"
  | "non-us-registry"
  | "maturing-preclinical"
  | "supply-isotope";

export type ScanHit = {
  id: string;
  kind: Kind;
  name: string;
  href: string;
  /** Why the scanner flagged it, in one line, with whatever counts it used. */
  why: string;
};

export type ScanGroup = {
  lens: ScanLens;
  /** What the lens looks for, in the words of the rule it implements. */
  question: string;
  /** What a hit means and what to do with it. */
  reading: string;
  hits: ScanHit[];
  /** How many records already exist for this lens, so a hit that has been worked is not re-flagged as new. */
  covered: number;
};

const IMAGING = /\b(pet|spect|imaging|scintigra|tracer|radiotracer|diagnostic|gamma camera|lymphatic mapping|immunopet)\b/i;
const THERAPY = /\b(therapy|therapeutic|radioimmunotherapy|radioembolisation|radioembolization|brachytherapy|palliation|ablation)\b/i;

function href(e: Entity): string {
  return `/${KIND_META[e.kind].route}/${e.id}/`;
}

/** Imaging/therapy role of a drug record, read from its modality and mechanism prose. */
function role(d: Entity): { imaging: boolean; therapy: boolean } {
  const text = [d.name, (d as { modality?: string }).modality ?? "", (d as { mechanism?: string }).mechanism ?? ""].join(" ");
  return { imaging: IMAGING.test(text), therapy: THERAPY.test(text) };
}

/** A drug is treated as a radiopharmaceutical when it links to an isotope. */
function isRadio(g: ReturnType<typeof graph>, d: Entity): boolean {
  return (g.neighbours(d.id).get("isotope") ?? []).length > 0;
}

export function scan(): ScanGroup[] {
  const g = graph();
  const drugs = g.kind("drug");
  const radio = new Map<string, { imaging: boolean; therapy: boolean }>();
  for (const d of drugs) if (isRadio(g, d)) radio.set(d.id, role(d));

  /** Radiopharmaceuticals linked to an entity, split by role. */
  const linked = (id: string) => {
    const ds = g.neighbours(id).get("drug") ?? [];
    let imaging = 0, therapy = 0, total = 0;
    for (const d of ds) {
      const r = radio.get(d.id);
      if (!r) continue;
      total++;
      if (r.imaging) imaging++;
      if (r.therapy) therapy++;
    }
    return { imaging, therapy, total };
  };

  const opportunities = g.kind("opportunity");
  const coveredBy = (lens: string) => opportunities.filter((o) => (o as { lens?: string }).lens === lens).length;
  /** Ids any opportunity record already points at, so worked candidates drop out of the new-candidate lists. */
  const worked = new Set<string>();
  for (const o of opportunities) for (const [k, list] of g.neighbours(o.id)) if (k === "target" || k === "indication" || k === "isotope") for (const n of list) worked.add(n.id);

  const groups: ScanGroup[] = [];

  // 1. Theranostic gap: a therapy exists against the target and no imaging agent does.
  {
    const hits: ScanHit[] = [];
    for (const t of g.kind("target")) {
      const l = linked(t.id);
      if (l.therapy > 0 && l.imaging === 0 && !worked.has(t.id)) {
        hits.push({ id: t.id, kind: t.kind, name: t.name, href: href(t), why: `${l.therapy} therapeutic radiopharmaceutical${l.therapy === 1 ? "" : "s"} against this target in the corpus, no imaging agent` });
      }
    }
    groups.push({
      lens: "theranostic-gap",
      question: "Which targets have a therapy in the clinic and no diagnostic paired with it?",
      reading: "A therapy without an imaging agent either selects patients some other way or does not select them at all. Either is a place a diagnostic could go.",
      hits,
      covered: coveredBy("theranostic-gap"),
    });
  }

  // 2. Target crossover: validated by a non-radioactive modality, no radioligand of any kind.
  {
    const hits: ScanHit[] = [];
    for (const t of g.kind("target")) {
      const l = linked(t.id);
      if (l.total > 0 || worked.has(t.id)) continue;
      const nonRadio = (g.neighbours(t.id).get("drug") ?? []).filter((d) => !radio.has(d.id));
      if (nonRadio.length === 0) continue;
      hits.push({ id: t.id, kind: t.kind, name: t.name, href: href(t), why: `${nonRadio.length} non-radioactive agent${nonRadio.length === 1 ? "" : "s"} against this target, no radioligand` });
    }
    groups.push({
      lens: "target-crossover",
      question: "Which targets are validated by an antibody, ADC or bispecific with no radioligand against them?",
      reading: "If a target is druggable with an antibody it is usually imageable, with the exception of targets that are only tractable via an antibody rather than a small molecule.",
      hits,
      covered: coveredBy("target-crossover"),
    });
  }

  // 3. Unmet need first: diseases the corpus carries with no radiopharmaceutical at all.
  {
    const hits: ScanHit[] = [];
    for (const i of g.kind("indication")) {
      const l = linked(i.id);
      if (l.total > 0 || worked.has(i.id)) continue;
      hits.push({ id: i.id, kind: i.kind, name: i.name, href: href(i), why: "no radiopharmaceutical linked to this disease in the corpus" });
    }
    groups.push({
      lens: "unmet-need-first",
      question: "Which diseases in the corpus have no radiopharmaceutical at all?",
      reading: "The most productive evaluations start from a decision nobody can make and then look for a target, rather than starting from a molecule.",
      hits,
      covered: coveredBy("unmet-need-first"),
    });
  }

  // 4. Non-US registry: work registered somewhere other than ClinicalTrials.gov.
  {
    const hits: ScanHit[] = [];
    for (const t of g.kind("trial")) {
      const reg = String((t as { nct?: string }).nct ?? "");
      if (!reg || /^NCT/i.test(reg)) continue;
      hits.push({ id: t.id, kind: t.kind, name: t.name, href: href(t), why: `registered as ${reg}, outside ClinicalTrials.gov` });
    }
    groups.push({
      lens: "non-us-registry",
      question: "What is registered outside ClinicalTrials.gov and therefore invisible to US-centred pipeline tracking?",
      reading: "China, Japan, Korea and Australia run their own registries, and assets appear there that never reach ClinicalTrials.gov. A low count here is a statement about this corpus, not about the world.",
      hits,
      covered: coveredBy("non-us-registry"),
    });
  }

  // 5. Maturing preclinical: preclinical agents whose target has nothing in the clinic.
  {
    const hits: ScanHit[] = [];
    for (const d of drugs) {
      if (d.status !== "preclinical" || !radio.has(d.id)) continue;
      hits.push({ id: d.id, kind: d.kind, name: d.name, href: href(d), why: "preclinical radiopharmaceutical; worth watching for the point it becomes clinical-stage" });
    }
    groups.push({
      lens: "maturing-preclinical",
      question: "Which preclinical agents are close enough to the clinic to belong in a clinical-stage funnel?",
      reading: "Preclinical assets score nothing on clinical evidence, so they are usually dropped and then rediscovered late. The useful thing is a standing list that feeds forward automatically.",
      hits,
      covered: coveredBy("maturing-preclinical"),
    });
  }

  // 6. Supply and isotope: isotopes carried with no agent using them.
  {
    const hits: ScanHit[] = [];
    for (const iso of g.kind("isotope")) {
      const ds = (g.neighbours(iso.id).get("drug") ?? []).length;
      if (ds > 0 || worked.has(iso.id)) continue;
      hits.push({ id: iso.id, kind: iso.kind, name: iso.name, href: href(iso), why: "no agent in the corpus uses this isotope" });
    }
    groups.push({
      lens: "supply-isotope",
      question: "Which isotopes have no agent using them, so the opportunity is production or delivery rather than the molecule?",
      reading: "An isotope with properties and no ligand is a chemistry opportunity; an isotope with ligands and no supply is a manufacturing one. This lens finds the first kind.",
      hits,
      covered: coveredBy("supply-isotope"),
    });
  }

  return groups;
}

/** Totals for the page header and for the CLI. */
export function scanTotals(groups: ScanGroup[] = scan()): { candidates: number; lensesWithHits: number; lensesEmpty: number } {
  const candidates = groups.reduce((n, gr) => n + gr.hits.length, 0);
  const lensesWithHits = groups.filter((gr) => gr.hits.length > 0).length;
  return { candidates, lensesWithHits, lensesEmpty: groups.length - lensesWithHits };
}
