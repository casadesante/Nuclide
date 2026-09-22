"use client";

import { useLayer, type Lang } from "@/lib/layer";
import { type TldrTable } from "@/lib/tldr-tables";

/** The TL;DR for `id` from the loaded table when there is one, else the English text. For tables and cards. */
export function tldrFor(id: string, tldr: string, _lang: Lang, table?: TldrTable): string {
  return table?.[id] ?? tldr;
}

/**
 * Renders the TL;DR for an entity at the reader's chosen level. At level "simple" the simplified text
 * is used where a record carries one. Translations are not yet part of this corpus.
 */
export function TldrText({ id, tldr, simple: simpleProp, className = "" }: { id: string; tldr: string; simple?: string; className?: string }) {
  const [layer] = useLayer();
  void id;
  const text = layer.level === "simple" && simpleProp ? simpleProp : tldr;
  return <span className={className} lang="en">{text}</span>;
}

/** Languages in which this id's translation has a named review. None yet. */
export function reviewedLangs(_id: string): Lang[] {
  return [];
}
