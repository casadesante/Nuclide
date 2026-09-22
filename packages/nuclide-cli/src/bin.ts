/** Executable entry: bundled to dist/nuclide.mjs by scripts/build-packages.ts. */
import { run } from "./nuclide";

run(process.argv.slice(2)).then((code) => { process.exitCode = code; }, (err: Error) => { process.stderr.write(`nuclide: ${err.message}\n`); process.exitCode = 1; });
