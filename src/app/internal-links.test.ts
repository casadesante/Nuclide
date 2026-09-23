/**
 * Every internal link in the app must resolve to something this build actually serves.
 *
 * The fork inherited links to OnCo pages that were not carried over (/sequencing/, /survival/,
 * /startups/, /for-me/ and a dozen more) and to record pages whose entity is gone. Both render as
 * 404s with no build error, so this test resolves each literal href in src/ against the routes under
 * src/app, the files under public/, and — for record pages such as /roadmaps/kras-roadmap/ — the ids
 * in the corpus. Hrefs built from a template literal are checked as far as their literal prefix.
 */
import { describe, expect, it } from "vitest";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { ALL_INPUTS } from "@/data/index";
import { KINDS, routeFor, type Kind } from "@/lib/schema";
import { apiFiles, FEEDS } from "../../scripts/api-layout";

const ROOT = process.cwd();

function walk(dir: string, hit: (path: string) => void) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next") continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, hit);
    else hit(p);
  }
}

/** Static route patterns from the app directory. The four dynamic routes (/[kind]/, /[kind]/[id]/,
 * /[kind]/[id]/changes/ and /embed/[id]/) are resolved against the corpus instead, since a dynamic
 * segment only exists for the values generateStaticParams emits. */
function routePatterns(): string[][] {
  const out: string[][] = [];
  walk(join(ROOT, "src/app"), (p) => {
    const file = p.split("/").pop()!;
    if (file !== "page.tsx" && file !== "route.ts") return;
    const segs = p
      .slice(join(ROOT, "src/app").length + 1)
      .split("/")
      .slice(0, -1)
      .filter((s) => !s.startsWith("(")); // route groups are not in the URL
    if (segs.some((s) => s.startsWith("["))) return; // dynamic: checked against the corpus below
    out.push(segs);
  });
  return out;
}

const KIND_SEGMENTS = new Set((KINDS as readonly Kind[]).map((k) => routeFor({ kind: k, id: "x" } as never).split("/")[1]));
const CORPUS_IDS = new Set((ALL_INPUTS as Array<{ id: string }>).map((e) => e.id));
const HREF = /href[=:]\s*[`"{]{1,2}(\/[a-z0-9\-/.]*)/g;
// public/api/v1 and public/feeds are gitignored: npm run build:api writes them from this declared
// layout, so a link into them resolves if the layout says the build emits it.
const GENERATED = [...apiFiles({} as never).map((f) => f.path), ...FEEDS];
/** A generated path: an exact match, a directory above one, or a per-record file whose id exists.
 * The layout writes patterns like "/api/v1/entities/<id>.json", and CI runs the tests on a clean
 * tree where public/api/v1 has not been written yet, so this cannot fall back to the file system. */
function generated(path: string, ids: Set<string>): boolean {
  if (GENERATED.includes(path)) return true;
  if (GENERATED.some((f) => f.startsWith(path))) return true;
  for (const f of GENERATED) {
    const m = /^(.*)<id>(.*)$/.exec(f);
    if (!m) continue;
    if (path.startsWith(m[1]) && path.endsWith(m[2])) {
      const id = path.slice(m[1].length, path.length - m[2].length);
      if (ids.has(id)) return true;
    }
  }
  return false;
}
// /history/index.json is written by `npm run history`, and the page links it only inside the branch
// that reads the file, so the link cannot render when the file is absent.
const CONDITIONAL = new Set(["/history/index.json"]);

function resolves(href: string, patterns: string[][]): boolean {
  const path = href.split("#")[0].split("?")[0];
  const segs = path.split("/").filter(Boolean);
  if (!segs.length) return true; // "/" is the home page
  // A file served straight out of public/, e.g. /audit.json or /survival/index.json.
  if (existsSync(join(ROOT, "public", ...segs))) return true;
  if (generated(path, CORPUS_IDS) || CONDITIONAL.has(path)) return true;
  // A record page: /drugs/pluvicto/ or /drugs/pluvicto/changes/. The id must still be in the corpus.
  if (KIND_SEGMENTS.has(segs[0])) {
    if (segs.length === 1) return true;
    if (!CORPUS_IDS.has(segs[1])) return false;
    return segs.length === 2 || (segs.length === 3 && segs[2] === "changes");
  }
  if (segs[0] === "embed") return segs.length === 2 && CORPUS_IDS.has(segs[1]);
  return patterns.some((pat) => pat.length === segs.length && pat.every((s, i) => s === segs[i]));
}

describe("internal links", () => {
  it("point at routes, records or static files this build serves", () => {
    const patterns = routePatterns();
    const dead = new Set<string>();
    for (const dir of ["src/app", "src/components", "src/lib"]) {
      walk(join(ROOT, dir), (p) => {
        if (!/\.tsx?$/.test(p) || /\.test\.tsx?$/.test(p)) return;
        for (const m of readFileSync(p, "utf8").matchAll(HREF)) {
          if (!resolves(m[1], patterns)) dead.add(`${p.slice(ROOT.length + 1)} -> ${m[1]}`);
        }
      });
    }
    expect([...dead].sort(), `dead internal links:\n${[...dead].sort().join("\n")}`).toEqual([]);
  });
});
