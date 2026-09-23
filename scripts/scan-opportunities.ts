/**
 * Print the opportunity scan: the places the corpus itself says an opportunity might exist.
 *
 * The lenses and the rules live in src/lib/opportunity-scan.ts, which is also what /opportunities/
 * renders, so this script and the page can never disagree. A lens with no hits prints "nothing" —
 * that is the honest answer and it is the point of running it.
 *
 *   npx tsx scripts/scan-opportunities.ts [--json] [--limit=10]
 */
import { scan, scanTotals } from "../src/lib/opportunity-scan";

const args = process.argv.slice(2);
const asJson = args.includes("--json");
const limit = Number(args.find((a) => a.startsWith("--limit="))?.split("=")[1] ?? 10);

const groups = scan();
const totals = scanTotals(groups);

if (asJson) {
  console.log(JSON.stringify({ totals, groups }, null, 2));
} else {
  console.log(`opportunity scan: ${totals.candidates} candidates across ${totals.lensesWithHits} lenses; ${totals.lensesEmpty} lenses found nothing\n`);
  for (const gr of groups) {
    console.log(`## ${gr.lens}  (${gr.hits.length} candidate${gr.hits.length === 1 ? "" : "s"}, ${gr.covered} already written up)`);
    console.log(`   ${gr.question}`);
    if (!gr.hits.length) { console.log("   nothing\n"); continue; }
    for (const h of gr.hits.slice(0, limit)) console.log(`   - ${h.name} (${h.kind}) — ${h.why}`);
    if (gr.hits.length > limit) console.log(`   … and ${gr.hits.length - limit} more`);
    console.log("");
  }
}
