/**
 * Readout calendar: regulatory dates, advisory committees, expected trial readouts, congresses.
 * `confidence: "confirmed"` needs a source URL. `"expected"` means our editorial estimate of timing
 * based on trial registrations and sponsor statements; treat as a guess until confirmed.
 * Dates may be a day (YYYY-MM-DD), a month (YYYY-MM), or a quarter (YYYY-Qn).
 *
 * Fork note: OnCo's calendar listed ESMO, SABCS, ASH, AACR, ASCO and a multi-cancer-screening
 * advisory committee. Those were removed on 2026-09-22 and replaced with the nuclear medicine
 * meeting year. Every date below was read from the society's own congress page on that day - no
 * aggregator sites, no inferred dates. Meetings whose next edition has not been announced by the
 * society (ASNC 2027, EANM 2027, ACNM 2027, the 15th WFNMB World Congress) are deliberately absent
 * rather than guessed; the entry appears when the society publishes it.
 *
 * Note for maintainers: scripts/freshness.ts treats an event still listed 30 days after its date as
 * critically stale, so past congresses must be replaced with the next edition, not left to rot.
 */
export type CalendarKind = "pdufa" | "adcom" | "readout-expected" | "congress" | "policy";
export type CalendarEvent = {
  date: string;
  title: string;
  kind: CalendarKind;
  refs: string[];
  note: string;
  source?: string;
  confidence: "confirmed" | "expected";
};

export const calendar: CalendarEvent[] = [
  {
    date: "2026-10-17", kind: "congress", confidence: "confirmed",
    title: "EANM'26, 39th Annual Congress of the European Association of Nuclear Medicine, Vienna (17 to 21 October)",
    refs: ["eanm", "prrt", "lu177-radioligand-therapy", "radioligand-dosimetry"],
    note: "Europe's largest nuclear medicine congress, with dedicated radiopharmacy, dosimetry and theranostics tracks. European first-in-human radioligand data and the EANM guideline updates land here.",
    source: "https://eanm.org/congress-scientific-events/eanm26/",
  },
  {
    date: "2026-11-04", kind: "congress", confidence: "confirmed",
    title: "SNMMI Theranostics Conference 2026, Bethesda, Maryland (4 to 7 November)",
    refs: ["snmmi", "radioligand-therapy", "radioligand-dosimetry", "lu177-radioligand-therapy"],
    note: "SNMMI's conference devoted to theranostics alone: dosimetry practice, alpha-emitter programmes, supply and reimbursement rather than broad nuclear medicine.",
    source: "https://snmmi.org/Theranostics/",
  },
  {
    date: "2026-11-06", kind: "congress", confidence: "confirmed",
    title: "65th Annual Meeting of the Korean Society of Nuclear Medicine with the 25th ARCCNM, Seoul (6 to 7 November)",
    refs: ["ksnm", "futurechem", "cellbion"],
    note: "Korea's national nuclear medicine meeting, held with the Asian Regional Cooperative Council for Nuclear Medicine. Where Korean radioligand programmes (FutureChem, CellBion) report domestically before Western congresses.",
    source: "https://www.ksnm.or.kr/eng/",
  },
  {
    date: "2026-11-19", kind: "congress", confidence: "confirmed",
    title: "66th Annual Scientific Meeting of the Japanese Society of Nuclear Medicine, Himeji (19 to 21 November)",
    refs: ["jsnm", "pdradiopharma", "nihon-medi-physics"],
    note: "Japan's national nuclear medicine meeting. Japanese approvals and supply questions (domestic Mo-99 production, PDRadiopharma's product line) are discussed here first.",
    source: "https://jsnm.org/english/meetings_and_events/",
  },
  {
    date: "2027-02-04", kind: "congress", confidence: "confirmed",
    title: "SNMMI Mid-Winter Meeting 2027, San Francisco (4 to 6 February)",
    refs: ["snmmi", "radiopharmaceutical-gmp-release", "radiopharmacy-network"],
    note: "The practice-side SNMMI meeting: radiopharmacy operations, dosimetry workshops, regulatory and coding sessions.",
    source: "https://snmmi.org/AM/Web/Education-and-Meetings/Upcoming-Events.aspx",
  },
  {
    date: "2027-02-11", kind: "congress", confidence: "confirmed",
    title: "ASCO Genitourinary Cancers Symposium 2027, San Francisco (11 to 13 February)",
    refs: ["prostate-mcrpc", "prostate-mhspc", "pluvicto", "lu177-psma-it", "psma-pet"],
    note: "Where PSMA radioligand therapy trials are first presented. The abstracts are deposited as Journal of Clinical Oncology supplements and are harvested by scripts/fetch-abstracts.ts.",
    source: "https://www.asco.org/gu",
  },
  {
    date: "2027-03-11", kind: "congress", confidence: "confirmed",
    title: "9th Theranostics World Congress (TWC2027), Osaka (11 to 14 March)",
    refs: ["radioligand-therapy", "ac225-psma", "alphamedix", "radioligand-dosimetry"],
    note: "Theranostics-only congress with a dedicated targeted alpha therapy track; the 2027 edition is in Japan, which makes it the main meeting point for Asian alpha-emitter programmes.",
    source: "https://www.theranostics-world-congress.org/",
  },
  {
    date: "2027-04-30", kind: "congress", confidence: "confirmed",
    title: "57th Annual Scientific Meeting of the Australian and New Zealand Society of Nuclear Medicine, Gold Coast (30 April to 2 May)",
    refs: ["ansto", "clarity-pharmaceuticals", "telix"],
    note: "Australia and New Zealand's nuclear medicine meeting. Australian developers (Telix, Clarity) and ANSTO's isotope supply report here.",
    source: "https://www.anzsnm.org.au/news-events/2027-annual-scientific-meeting/",
  },
  {
    date: "2027-06-05", kind: "congress", confidence: "confirmed",
    title: "SNMMI Annual Meeting 2027, Washington, DC (5 to 8 June)",
    refs: ["snmmi", "radioligand-therapy", "psma-pet", "prrt"],
    note: "The largest nuclear medicine meeting in the United States: new tracers, radiochemistry, dosimetry and the year's radioligand trial updates across oncology, cardiology and neurology.",
    source: "https://snmmi.org/AM/Web/Education-and-Meetings/Upcoming-Events.aspx",
  },
  {
    date: "2027-11-11", kind: "congress", confidence: "confirmed",
    title: "67th Annual Scientific Meeting of the Japanese Society of Nuclear Medicine, Omiya (11 to 13 November)",
    refs: ["jsnm"],
    note: "The 2027 edition of Japan's national nuclear medicine meeting, announced on the society's English meetings page.",
    source: "https://jsnm.org/english/meetings_and_events/",
  },
];
