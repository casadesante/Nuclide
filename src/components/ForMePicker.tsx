"use client";

import Link from "next/link";
import { IndicationIcon } from "./IndicationIcon";
import { useMyCancer, type MyCancerLite } from "@/lib/use-my-cancer";

/**
 * The indication picker behind the "For me" chip in the header.
 *
 * The chip, the hero button and the trials filter all read one remembered indication id out of this
 * browser's storage (src/lib/use-my-cancer.ts); this is the surface that sets it. Tiles are grouped
 * by organ system and passed in from the server page, so the list is not fetched and no graph is
 * shipped to the client. Nothing leaves the browser: there is no account and no request.
 */
export type PickerTile = MyCancerLite & { group: string; tldr?: string };

export function ForMePicker({ indications }: { indications: PickerTile[] }) {
  const { id, ready, set, clear } = useMyCancer();
  const groups = [...new Set(indications.map((i) => i.group))].sort();

  return (
    <div>
      <div className="card p-4 mb-8 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm">
          {!ready ? "Reading what this browser remembers…"
            : id ? <>Remembered: <span className="font-medium">{indications.find((i) => i.id === id)?.name ?? id}</span>. Pick another below to change it.</>
              : "Nothing remembered yet. Pick an indication and it is kept in this browser only."}
        </p>
        {ready && id && <button type="button" onClick={clear} className="chip border border-border bg-card hover:bg-foreground/5 text-sm">Forget it</button>}
      </div>

      {groups.map((group) => (
        <section key={group} className="mb-10">
          <h2 className="kicker mb-3 capitalize">{group}</h2>
          <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {indications.filter((i) => i.group === group).map((i) => (
              <li key={i.id} className={`card p-3 flex items-start gap-3 ${i.id === id ? "border-accent/50" : ""}`}>
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent"><IndicationIcon indicationId={i.id} className="h-6 w-6" /></span>
                <span className="min-w-0">
                  <Link href={i.route} className="block font-medium leading-snug hover:underline">{i.name}</Link>
                  {i.tldr && <span className="block text-xs text-muted mt-0.5 line-clamp-2">{i.tldr}</span>}
                  <button type="button" onClick={() => set(i.id)} className="mt-1.5 text-xs underline text-muted hover:text-foreground" aria-pressed={i.id === id}>
                    {i.id === id ? "Remembered" : "Remember this one"}
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
