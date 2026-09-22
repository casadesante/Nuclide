"use client";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/layer";

/**
 * Translated and simplified TL;DR tables, loaded on demand. The plumbing is kept so a translation pass can
 * drop tables in under src/data/i18n/ without touching the components; this corpus is English-only for now,
 * so every loader resolves to an empty table and readers see the English TL;DR.
 */
export type TldrTable = Record<string, string>;
export type TableKey = Exclude<Lang, "en"> | "simple";

const LOADERS: Record<TableKey, () => Promise<TldrTable>> = {
  es: () => Promise.resolve({}),
  zh: () => Promise.resolve({}),
  pt: () => Promise.resolve({}),
  hi: () => Promise.resolve({}),
  fr: () => Promise.resolve({}),
  de: () => Promise.resolve({}),
  ja: () => Promise.resolve({}),
  ar: () => Promise.resolve({}),
  simple: () => Promise.resolve({}),
};

const loaded = new Map<TableKey, TldrTable>();
const pending = new Map<TableKey, Promise<TldrTable>>();

export function loadTable(key: TableKey): Promise<TldrTable> {
  const have = loaded.get(key);
  if (have) return Promise.resolve(have);
  let p = pending.get(key);
  if (!p) { p = LOADERS[key]().then((t) => { loaded.set(key, t); pending.delete(key); return t; }); pending.set(key, p); }
  return p;
}

/** The table for `key`, or undefined until it has loaded (English text is shown meanwhile). `null` means none is needed. */
export function useTable(key: TableKey | null): TldrTable | undefined {
  const [ready, setReady] = useState<{ key: TableKey; table: TldrTable } | null>(null);
  useEffect(() => {
    if (!key || loaded.has(key)) return;
    let live = true;
    loadTable(key).then((t) => { if (live) setReady({ key, table: t }); });
    return () => { live = false; };
  }, [key]);
  if (!key) return undefined;
  return loaded.get(key) ?? (ready && ready.key === key ? ready.table : undefined);
}

/** Which table a reader's layer needs: simplified English, a translation, or none. */
export function tableKeyFor(level: string, lang: Lang): TableKey | null {
  if (level === "simple") return "simple";
  return lang === "en" ? null : lang;
}
