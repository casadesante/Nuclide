# nuclide-mcp

A [Model Context Protocol](https://modelcontextprotocol.io) server that gives Claude, Cursor and other MCP clients structured, cited access to [Nuclide](https://nuclide.cc), the public knowledge graph of radiopharmaceuticals. It reads the static API at `https://nuclide.cc/api/v1/` (see https://nuclide.cc/api/), so it needs no checkout, database or key. Stdio transport, Node 20 or later.

```sh
npx -y nuclide-mcp
```

Every tool result is JSON with an `attribution` field: `Data from Nuclide (nuclide.cc), CC BY-NC 4.0; commercial use needs a licence`. Ask answers also carry `disclaimer: Nuclide is an orientation tool, not medical advice.`

## Configure

Claude Desktop (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "nuclide": { "command": "npx", "args": ["-y", "nuclide-mcp"] }
  }
}
```

Claude Code:

```sh
claude mcp add nuclide -- npx -y nuclide-mcp
```

Cursor (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "nuclide": { "command": "npx", "args": ["-y", "nuclide-mcp"] }
  }
}
```

To point at another copy of the API (a mirror, or a local `out/api/v1` after building the site), add `"env": { "NUCLIDE_API": "/path/to/out/api/v1" }` to the server entry, or pass `--api <url|path>` in `args`.

## Tools

| Tool | Input | What it returns |
|---|---|---|
| `search` | `query`, `kind?`, `limit?` | Records by name or meaning: word search plus concept search fused as on the site, with why each hit matched. |
| `get_entity` | `id` (or route or URL) | The full record, page URL, Markdown context URL, connected records by kind with URLs. |
| `list_kind` | `kind`, `filter?` (`["status=approved", "targets=trop2"]`), `limit?` | id, name, status, TL;DR and URL for every matching record. |
| `ask` | `question`, `region?`, `pin?` | The Ask Nuclide answer: intent, cited sentences, numbered sources with URLs, follow-ups, read-more links, method. Same pipeline as https://nuclide.cc/ask/; nothing generated. |
| `context` | `id` | The record as clean Markdown (`/api/v1/context/<id>.md`). |
| `compare` | `a`, `b` | Two records side by side: each field with both values and a `differs` flag, the differing fields, shared neighbours, and whether they link directly. |

Errors (unknown id, unreachable API) come back as `isError` results with an `error` message and the attribution, never as crashes.

## Resources

- `nuclide://kinds`: the nineteen kinds with counts, routes and one-line descriptions.
- `nuclide://kinds/{kind}`: every record of one kind (id, name, status, TL;DR, URL). Completion on the kind name.

## Prompt

- `nuclide-brief(id, audience?)`: a brief on one record for a `patient` (plain words, what it means for them, three questions for the clinic) or a `clinician` (mechanism, pivotal numbers, approvals, grade 3+ toxicity, open trials). It tells the assistant which tools to call, to cite an Nuclide URL after every fact, to add nothing that is not in a tool result, and to close with the not-medical-advice line and the attribution.

## Relation to the repository server

The Nuclide repository also ships `mcp/server.ts`, a larger server (biomarker matching, regimens, calendar, toxicity comparison, graph paths, live ClinicalTrials.gov lookup) that computes from the corpus on disk and therefore needs a checkout. This package is the zero-install route and covers lookup, cited answers and comparison. Both use the same data.

Licence: code MIT; data as stated on https://nuclide.cc/api/. Source and issues: https://github.com/casadesante/Nuclide (`packages/nuclide-mcp`).
