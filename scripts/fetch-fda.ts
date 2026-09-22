/**
 * FDA approvals feed.
 *
 * One public source, no key: openFDA `drugsfda`, every application with a submission approved (status AP)
 * inside the window. Each is read twice:
 *   (a) matched to a corpus product by brand, generic and active ingredient -> an approval or supplement
 *       (new indication, label change) to record on that product's page;
 *   (b) unmatched but radiopharmaceutical by established pharmacologic class or by the nuclide in its
 *       generic name -> a "not yet in corpus" candidate, which is how a new tracer nobody told us about
 *       gets noticed.
 *
 * Fork note: OnCo read the FDA Oncology Center of Excellence approval notifications page here. That page
 * never lists an amyloid PET tracer, a myocardial perfusion agent or a bone agent, so it was dropped for the
 * Drugs@FDA sweep above, which sees every centre's approvals.
 *
 * Each item is matched to corpus product ids by name, brand, code and alias. Items that match nothing are
 * "not yet in corpus" candidates. `firstSeen` is carried over from the previous snapshot so /regulatory/ can
 * show what is new since the last build.
 *
 * Writes public/fda/recent.json. Run: npx tsx scripts/fetch-fda.ts   Weekly via .github/workflows/refresh-fda.yml.
 */
import { graph } from "../src/lib/graph";
import { NameMatcher, RADIONUCLIDE_NAME, RADIOPHARM_EPC, getJson, isoDaysAgo, matchableFromGraph, publicPath, readJson, sleep, today, writeJson } from "./feed-utils";

const WINDOW_DAYS = Number(process.argv.find((a) => a.startsWith("--days="))?.slice(7) ?? 120);
const OUT = publicPath("fda", "recent.json");

export type Approval = { date: string; title: string; url: string; summary: string; drugIds: string[]; indicationIds: string[]; firstSeen: string };
export type DrugsFdaApproval = { applicationNumber: string; sponsor?: string; brand?: string; generic?: string; submissionType: string; submissionNumber: string; classCode?: string; classDescription?: string; statusDate: string; drugIds: string[]; firstSeen: string };
export type FdaSnapshot = {
  fetched: string; previousFetched?: string; window: { from: string; to: string };
  sources: { drugsfda: string };
  approvals: Approval[];
  drugsfda: DrugsFdaApproval[];
  notInCorpus: Array<{ date: string; title: string; url: string; firstSeen: string; generic?: string; why: string }>;
  errors: string[];
};

type DrugsFdaResult = {
  application_number?: string; sponsor_name?: string;
  products?: Array<{ brand_name?: string; active_ingredients?: Array<{ name?: string }> }>;
  openfda?: { generic_name?: string[]; brand_name?: string[]; pharm_class_epc?: string[]; manufacturer_name?: string[] };
  submissions?: Array<{ submission_type?: string; submission_number?: string; submission_status?: string; submission_status_date?: string; submission_class_code?: string; submission_class_code_description?: string }>;
};


async function main() {
  const g = graph();
  const matcher = new NameMatcher(matchableFromGraph(g.entities as never), ["drug", "indication"]);
  const prev = readJson<FdaSnapshot>(OUT);
  const fetched = today();
  const from = isoDaysAgo(WINDOW_DAYS);
  const snap: FdaSnapshot = { fetched, previousFetched: prev?.fetched, window: { from, to: fetched }, sources: { drugsfda: "https://api.fda.gov/drug/drugsfda.json" }, approvals: [], drugsfda: [], notInCorpus: [], errors: [] };
  const prevApp = new Map((prev?.approvals ?? []).map((o) => [o.url, o.firstSeen]));
  const prevNic = new Map((prev?.notInCorpus ?? []).map((o) => [o.url, o.firstSeen]));
  const prevDf = new Map((prev?.drugsfda ?? []).map((o) => [`${o.applicationNumber}/${o.submissionType}${o.submissionNumber}`, o.firstSeen]));

  // openFDA drugsfda: applications with an approved submission in the window, read for both buckets.
  const fromCompact = from.replace(/-/g, ""), toCompact = fetched.replace(/-/g, "");
  const search = `submissions.submission_status_date:[${fromCompact}+TO+${toCompact}]+AND+submissions.submission_status:AP`;
  let skip = 0, pages = 0, total = 0;
  for (;;) {
    const url = `https://api.fda.gov/drug/drugsfda.json?search=${search}&limit=100&skip=${skip}`;
    const json = await getJson<{ meta?: { results?: { total?: number } }; results?: DrugsFdaResult[] }>(url);
    await sleep(400);
    if (!json) { if (pages === 0) snap.errors.push("openFDA drugsfda unreachable"); break; }
    total = json.meta?.results?.total ?? 0;
    for (const app of json.results ?? []) {
      const names = new Set<string>();
      for (const p of app.products ?? []) { if (p.brand_name) names.add(p.brand_name); for (const a of p.active_ingredients ?? []) if (a.name) names.add(a.name); }
      for (const n of app.openfda?.generic_name ?? []) names.add(n);
      for (const n of app.openfda?.brand_name ?? []) names.add(n);
      const drugIds = matcher.match([...names].join(" ; "), ["drug"]);
      const epc = app.openfda?.pharm_class_epc ?? [];
      const generic = app.openfda?.generic_name?.[0] ?? app.products?.[0]?.active_ingredients?.map((a) => a.name).join(" / ");
      const appUrl = `https://www.accessdata.fda.gov/scripts/cder/daf/index.cfm?event=overview.process&ApplNo=${(app.application_number ?? "").replace(/\D/g, "")}`;
      if (!drugIds.length) {
        // Not in the corpus: keep it only if it is a radiopharmaceutical, by class or by the nuclide in the name.
        const byClass = epc.find((c) => RADIOPHARM_EPC.some((r) => c.startsWith(r)));
        const byName = RADIONUCLIDE_NAME.test(`${generic ?? ""} ${[...names].join(" ")}`);
        if (!byClass && !byName) continue;
        const ap = (app.submissions ?? []).filter((x) => x.submission_status === "AP" && (x.submission_status_date ?? "") >= fromCompact && (x.submission_status_date ?? "") <= toCompact)
          .sort((a, b) => (b.submission_status_date ?? "").localeCompare(a.submission_status_date ?? ""))[0];
        if (!ap) continue;
        const d = ap.submission_status_date ?? "";
        snap.notInCorpus.push({
          date: `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`,
          title: `${app.products?.[0]?.brand_name ?? app.openfda?.brand_name?.[0] ?? generic ?? app.application_number} (${generic ?? "?"})`,
          url: appUrl, generic, why: byClass ? `class: ${byClass}` : "nuclide in the generic name",
          firstSeen: prevNic.get(appUrl) ?? fetched,
        });
        continue;
      }
      for (const s of app.submissions ?? []) {
        const d = s.submission_status_date ?? "";
        if (s.submission_status !== "AP" || d < fromCompact || d > toCompact) continue;
        const key = `${app.application_number}/${s.submission_type}${s.submission_number}`;
        snap.drugsfda.push({
          applicationNumber: app.application_number ?? "", sponsor: app.sponsor_name, brand: app.products?.[0]?.brand_name ?? app.openfda?.brand_name?.[0],
          generic: app.openfda?.generic_name?.[0] ?? app.products?.[0]?.active_ingredients?.map((a) => a.name).join(" / "),
          submissionType: s.submission_type ?? "", submissionNumber: s.submission_number ?? "", classCode: s.submission_class_code, classDescription: s.submission_class_code_description,
          statusDate: `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`, drugIds, firstSeen: prevDf.get(key) ?? fetched,
        });
        const date = `${d.slice(0, 4)}-${d.slice(4, 6)}-${d.slice(6, 8)}`;
        const label = s.submission_class_code_description ?? s.submission_type ?? "approval";
        snap.approvals.push({
          date, title: `${app.products?.[0]?.brand_name ?? app.openfda?.brand_name?.[0] ?? generic ?? ""} (${generic ?? "?"}): ${label}`,
          url: appUrl, summary: [app.sponsor_name, `${s.submission_type ?? ""} ${s.submission_number ?? ""}`.trim(), label].filter(Boolean).join(" · "),
          drugIds, indicationIds: [], firstSeen: prevApp.get(`${appUrl}#${date}#${s.submission_type}${s.submission_number}`) ?? fetched,
        });
      }
    }
    skip += 100; pages++;
    if (skip >= total || pages >= 30) break;
  }
  snap.drugsfda.sort((a, b) => b.statusDate.localeCompare(a.statusDate));
  snap.approvals.sort((a, b) => b.date.localeCompare(a.date));
  console.log(`fda: drugsfda ${total} applications with approvals since ${from}; ${snap.drugsfda.length} submissions for corpus products, ${snap.notInCorpus.length} radiopharmaceutical candidates not in the corpus`);

  writeJson(OUT, snap);
  console.log(`fda: wrote ${OUT}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
