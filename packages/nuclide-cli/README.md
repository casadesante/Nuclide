# nuclide

[Nuclide](https://nuclide.cc), the public cited knowledge graph of radiopharmaceuticals, from the terminal. One binary, no runtime dependencies, Node 20 or later. It reads the same static API the site publishes at `https://nuclide.cc/api/v1/` (see https://nuclide.cc/api/), so nothing is scraped and nothing is invented.

```sh
npx nuclide search "PSMA radioligand for prostate cancer" --kind drug
npm install -g nuclide && nuclide --help
```

## Commands

| Command | What it does |
|---|---|
| `nuclide search <query> [--kind k] [--limit n]` | Word search plus concept search, fused the way the site does it. Each hit says why it matched. |
| `nuclide get <id\|route\|url>` | One record: TL;DR, summary, key fields, connected records, sources. `--json` gives the raw record with its neighbours. |
| `nuclide list <kind> [--filter key=value ...] [--limit n]` | Every record of a kind, filtered on any field (`status=approved`, `modality=ADC`, `targets=trop2`, `phase=3`). |
| `nuclide ask "<question>" [--region UK]` | Ask Nuclide: the cited, templated answer from https://nuclide.cc/ask/, built from record fields with one citation per sentence. No language model. |
| `nuclide context <id>` | The record as clean Markdown (`/api/v1/context/<id>.md`), ready to paste into a prompt. |
| `nuclide kinds` | The nineteen kinds with counts and one-line descriptions. |
| `nuclide export <kind> --csv\|--json` | The kind's published CSV (first line is the licence comment) or JSON array, to stdout. |
| `nuclide meta` | Build date, version and counts from `meta.json`. |

Ids are the last segment of a page URL: `https://nuclide.cc/drugs/pluvicto/` is `pluvicto`. Routes and full URLs are accepted wherever an id is. Kinds can be given as singular, plural or route (`drug`, `drugs`, `paper`, `key-papers`).

```sh
nuclide get prostate-mcrpc
nuclide get /drugs/pluvicto/ --json | jq '.entity.approvals'
nuclide list trial --filter status=recruiting --filter indications=prostate-mcrpc
nuclide ask "What did VISION show?"
nuclide ask "Is Pluvicto approved in the UK?" --region UK
nuclide export indication --csv > indications.csv
nuclide search NCT03511664
```

## Output and attribution

Human output ends with the line `Data from Nuclide (nuclide.cc), CC BY-NC 4.0; commercial use needs a licence`. With `--json` or `--csv` the same line goes to stderr so stdout stays machine-readable. `--quiet` drops it from the terminal; the attribution obligation stays with whoever uses the data. Exit codes: 0 success, 1 not found or network, 2 usage.

Ask Nuclide answers end with "Nuclide is an orientation tool, not medical advice." Keep that line when you pass an answer on.

## Another copy of the API

`NUCLIDE_API` (or `--api`) points the tool at any copy of `/api/v1`: a mirror, or a local directory such as `out/api/v1` after building the site, which works offline.

```sh
NUCLIDE_API=./out/api/v1 nuclide search "PSMA radioligand"
nuclide --api https://mirror.example.org/api/v1 kinds
```

## How it works

The bundle contains the site's own browser-safe modules: the MiniSearch configuration behind the search box, the TF-IDF concept index reader, the Ask Nuclide pipeline (`src/lib/ask-*.ts` in the repository) and the kind table from the schema. `nuclide ask` fetches `ask-index.json`, `search.json`, `embeddings.json` and `embeddings.bin` once, then the handful of records the question names, exactly as the page does. Files fetched once are cached for the process.

Licence: code MIT; data as stated on https://nuclide.cc/api/. Source and issues: https://github.com/casadesante/Nuclide (`packages/nuclide-cli`).
