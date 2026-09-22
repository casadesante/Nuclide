/**
 * Bundles the publishable packages with esbuild so they ship without a checkout:
 *
 *   npm run cli:build   -> packages/nuclide-cli/dist/nuclide.mjs      (no runtime dependencies)
 *   npm run mcp:build   -> packages/nuclide-mcp/dist/nuclide-mcp.mjs  (depends on @modelcontextprotocol/sdk and zod)
 *
 * The site's browser-safe modules (src/lib/ask-*.ts, semantic.ts, schema.ts) are bundled in, so `nuclide ask`
 * and the MCP `ask` tool run exactly the code behind https://nuclide.cc/ask/. Version numbers are read from
 * each package.json and injected as NUCLIDE_PACKAGE_VERSION.
 */
import { build } from "esbuild";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const which = process.argv.slice(2).filter((a) => !a.startsWith("-"));
const targets = (which.length ? which : ["cli", "mcp"]).map((t) => t.replace(/^nuclide-/, ""));

const PACKAGES: Record<string, { dir: string; entry: string; outfile: string; external: string[] }> = {
  cli: { dir: "packages/nuclide-cli", entry: "src/bin.ts", outfile: "dist/nuclide.mjs", external: [] },
  mcp: { dir: "packages/nuclide-mcp", entry: "src/bin.ts", outfile: "dist/nuclide-mcp.mjs", external: ["@modelcontextprotocol/sdk", "@modelcontextprotocol/sdk/*", "zod"] },
};

async function main() {
  for (const t of targets) {
    const p = PACKAGES[t];
    if (!p) throw new Error(`Unknown package "${t}". Use cli or mcp.`);
    const pkg = JSON.parse(readFileSync(join(root, p.dir, "package.json"), "utf8")) as { version: string };
    const result = await build({
      entryPoints: [join(root, p.dir, p.entry)],
      outfile: join(root, p.dir, p.outfile),
      bundle: true, platform: "node", format: "esm", target: "node20",
      banner: { js: "#!/usr/bin/env node" },
      alias: { "@": join(root, "src") },
      external: p.external,
      define: { "process.env.NUCLIDE_PACKAGE_VERSION": JSON.stringify(pkg.version) },
      legalComments: "none", minify: false, sourcemap: false, logLevel: "warning", metafile: true,
    });
    const bytes = Object.values(result.metafile.outputs).reduce((s, o) => s + o.bytes, 0);
    console.log(`packages: ${p.dir}/${p.outfile} (${(bytes / 1024).toFixed(0)} KB, v${pkg.version})`);
  }
}

main().catch((err) => { console.error(err instanceof Error ? err.message : err); process.exit(1); });
