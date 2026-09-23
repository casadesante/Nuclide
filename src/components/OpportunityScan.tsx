import Link from "next/link";
import { scan, scanTotals } from "@/lib/opportunity-scan";
import { LENS_TIP } from "@/lib/kind-browser";

const LENS_LABEL: Record<string, string> = {
  "theranostic-gap": "Theranostic gap",
  "target-crossover": "Target crossover",
  "unmet-need-first": "Unmet need first",
  "non-us-registry": "Non-US registry",
  "maturing-preclinical": "Maturing preclinical",
  "supply-isotope": "Supply and isotope",
};

const SHOWN = 8;

/**
 * The scan panel above the opportunity table: what the corpus itself flags, lens by lens.
 *
 * Every count here is computed from the graph at build time. A lens that finds nothing says so
 * rather than loosening its rule, because a surfacing tool that always finds something is useless.
 */
export function OpportunityScan() {
  const groups = scan();
  const totals = scanTotals(groups);
  return (
    <section className="mb-8 rounded-xl border border-border bg-card p-5">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-lg font-semibold">What the scanner found in this corpus</h2>
        <p className="text-xs text-muted">
          {totals.candidates} candidate{totals.candidates === 1 ? "" : "s"} across {totals.lensesWithHits} of {groups.length} lenses
          {totals.lensesEmpty > 0 && `; ${totals.lensesEmpty} found nothing`}
        </p>
      </div>
      <p className="mt-2 max-w-3xl text-sm text-muted">
        The records below were written by hand from primary sources. These are the leads the graph flags
        on its own: targets, diseases, isotopes and registrations that fit one of the same lenses and
        have not been worked up yet. Counts are literal — a lens with no hits is left empty.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((gr) => (
          <div key={gr.lens} className="rounded-lg border border-border/70 p-3">
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold" title={LENS_TIP[gr.lens]}>{LENS_LABEL[gr.lens] ?? gr.lens}</h3>
              <span className="text-xs tabular-nums text-muted">{gr.hits.length} new · {gr.covered} written up</span>
            </div>
            <p className="mt-1 text-xs text-muted">{gr.question}</p>
            {gr.hits.length === 0 ? (
              <p className="mt-2 text-xs text-muted italic">Nothing in this corpus meets the rule today.</p>
            ) : (
              <ul className="mt-2 space-y-1">
                {gr.hits.slice(0, SHOWN).map((h) => (
                  <li key={h.id} className="text-xs leading-snug">
                    <Link href={h.href} className="font-medium underline decoration-border hover:decoration-accent">{h.name}</Link>
                    <span className="text-muted"> — {h.why}</span>
                  </li>
                ))}
                {gr.hits.length > SHOWN && <li className="text-xs text-muted">and {gr.hits.length - SHOWN} more</li>}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
