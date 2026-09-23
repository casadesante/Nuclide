/**
 * Deal and licensing map: the licences, acquisitions and co-development agreements that moved
 * radiopharmaceutical assets between companies.
 *
 * Scope: a deal belongs here when what changed hands is a radiopharmaceutical, the isotope supply behind
 * one, or the network that delivers one. The fork arrived with 56 antibody-drug conjugate, checkpoint and
 * cell-therapy deals; they described a different field and were removed rather than re-labelled (they are
 * in the upstream OnCo repository and in this file's git history).
 *
 * Rules: dates are the announcement date at the finest resolution we can source (YYYY-MM-DD, YYYY-MM or
 * YYYY). Money is as stated in the announcement: `upfront` is cash paid at signing (plus any stated
 * non-contingent payments), `total` is the headline "up to" figure including milestones. Where a number is
 * not public the field is left empty; nothing is estimated. Parties are company ids when the company is in
 * the corpus, otherwise a name with an ISO country code so the flow diagram can place it. `assets` are
 * product ids in the corpus; `assetText` names the assets in words for deals whose products are not (yet)
 * objects here.
 */
export type DealType = "licence" | "acquisition" | "co-development" | "option";
export type Party = { id?: string; name: string; /** ISO 3166-1 alpha-2, used when the party is not a corpus company. */ country?: string };
export type Deal = {
  id: string;
  date: string;
  type: DealType;
  /** Seller, licensor or acquired company. */
  from: Party;
  /** Buyer, licensee or acquirer. */
  to: Party;
  assets: string[];
  assetText: string;
  upfront?: string;
  total?: string;
  territories: string;
  refs?: string[];
  note?: string;
  source: string;
  status?: "announced" | "closed" | "terminated";
};

const c = (id: string, name: string): Party => ({ id, name });
const x = (name: string, country: string): Party => ({ name, country });

export const deals: Deal[] = [
  { id: "d-2017-novartis-aaa", date: "2017-10-30", type: "acquisition", from: x("Advanced Accelerator Applications", "FR"), to: c("novartis", "Novartis"),
    assets: ["lutathera"], assetText: "Lutathera (lutetium-177 dotatate) and the NETSPOT/SomaKit imaging kits", upfront: "$41 per ordinary share and $82 per ADS, in cash", total: "$3.9bn equity value", territories: "Company acquisition; tender offer completed 22 January 2018", refs: ["sstr2", "radioligand-therapy"],
    source: "https://www.novartis.com/news/media-releases/novartis-announces-planned-acquisition-advanced-accelerator-applications-strengthen-oncology-portfolio", status: "closed" },
  { id: "d-2018-novartis-endocyte", date: "2018-10-18", type: "acquisition", from: x("Endocyte", "US"), to: c("novartis", "Novartis"),
    assets: ["pluvicto"], assetText: "177Lu-PSMA-617, later Pluvicto", upfront: "$24.00 per share in cash", total: "$2.1bn equity value", territories: "Company acquisition", refs: ["psma", "radioligand-therapy"],
    source: "https://www.novartis.com/news/media-releases/novartis-announces-planned-acquisition-endocyte-expand-expertise-radiopharmaceuticals-and-build-commitment-transformational-therapeutic-platforms", status: "closed" },
  { id: "d-2023-lilly-point", date: "2023-10-03", type: "acquisition", from: x("POINT Biopharma", "US"), to: c("eli-lilly", "Eli Lilly"),
    assets: [], assetText: "PNT2002 (177Lu-PNT2002, PSMA) and PNT2003 (SSTR), radioligand pipeline and manufacturing", upfront: "$12.50 per share in cash", total: "about $1.4bn in aggregate", territories: "Company acquisition; closed December 2023", refs: ["psma", "radioligand-therapy"],
    source: "https://investor.lilly.com/news-releases/news-release-details/lilly-acquire-point-biopharma-expand-oncology-capabilities-next", status: "closed" },
  { id: "d-2023-bms-rayzebio", date: "2023-12-26", type: "acquisition", from: c("rayzebio", "RayzeBio"), to: c("bms", "Bristol Myers Squibb"),
    assets: ["ryz101"], assetText: "RYZ101 (actinium-225 DOTATATE) and an actinium-based radiopharmaceutical platform", upfront: "$62.50 per share in cash", total: "about $4.1bn equity value, $3.6bn net of estimated cash acquired", territories: "Company acquisition; closed February 2024", refs: ["sstr2", "targeted-alpha-therapy"],
    source: "https://news.bms.com/news/details/2023/Bristol-Myers-Squibb-Adds-Premier-Radiopharmaceutical-Platform-with-Acquisition-of-RayzeBio/default.aspx", status: "closed" },
  { id: "d-2024-az-fusion", date: "2024-03-19", type: "acquisition", from: c("fusion-pharma", "Fusion Pharmaceuticals"), to: c("astrazeneca", "AstraZeneca"),
    assets: ["ac225-psma"], assetText: "FPI-2265 (actinium-225 PSMA) and the Fusion targeted alpha therapy platform", upfront: "$21.00 per share in cash, about $2.0bn", total: "up to about $2.4bn including a $3.00 per share contingent value right", territories: "Company acquisition; closed June 2024", refs: ["psma", "targeted-alpha-therapy"],
    source: "https://www.astrazeneca.com/media-centre/press-releases/2024/astrazeneca-to-acquire-fusion.html", status: "closed" },
  { id: "d-2024-novartis-mariana", date: "2024-05-02", type: "acquisition", from: x("Mariana Oncology", "US"), to: c("novartis", "Novartis"),
    assets: [], assetText: "Preclinical radioligand pipeline including MC-339 (actinium-225, small-cell lung cancer)", upfront: "$1.0bn", total: "up to $1.75bn", territories: "Company acquisition", refs: ["radioligand-therapy", "targeted-alpha-therapy"],
    source: "https://www.novartis.com/news", status: "closed" },
  { id: "d-2024-sanofi-radiomedix-alphamedix", date: "2024-09-12", type: "licence", from: c("radiomedix", "RadioMedix and Orano Med"), to: x("Sanofi", "FR"),
    assets: ["alphamedix"], assetText: "AlphaMedix (lead-212 DOTAMTATE), targeted alpha therapy for neuroendocrine tumours",
    territories: "Worldwide commercialisation rights", refs: ["sstr2", "targeted-alpha-therapy"],
    upfront: "\u20ac100m", total: "up to \u20ac220m in sales milestones plus tiered royalties",
    note: "Three-party licence: Sanofi took worldwide rights to the first lead-212 therapy to reach pivotal data.",
    source: "https://www.sanofi.com/en/media-room/press-releases/2024/2024-09-12-05-00-00-2944919", status: "closed" },
  { id: "d-2024-telix-rls", date: "2024-09-23", type: "acquisition", from: x("RLS (USA) Inc.", "US"), to: c("telix", "Telix Pharmaceuticals"),
    assets: [], assetText: "RLS Radiopharmacies, a network of 31 licensed US radiopharmacies distributing PET, SPECT and therapeutic radiopharmaceuticals",
    upfront: "$230m in cash", total: "up to $250m including up to $20m in deferred consideration", territories: "Company acquisition; completed 27 January 2025", refs: ["radiopharmacy-network", "pet"],
    note: "Distribution, not a molecule: a therapy is only as good as the network that can deliver a short-lived dose on time.",
    source: "https://telixpharma.com/news-views/telix-to-acquire-rls-to-expand-north-american-manufacturing-and-distribution-platform/", status: "closed" },
  { id: "d-2024-sanofi-oranomed", date: "2024-10-17", type: "co-development", from: c("orano-med", "Orano Med"), to: x("Sanofi", "FR"),
    assets: [], assetText: "Co-development of lead-212 alpha-emitting radioligand therapies, built on Orano Med's 212Pb production and the AlphaMedix programme",
    upfront: "\u20ac300m for about 16% of the entity, valued at \u20ac1.9bn", territories: "Joint entity, worldwide", refs: ["pb-212", "targeted-alpha-therapy"],
    note: "Five weeks after licensing AlphaMedix, Sanofi bought into the supply itself: lead-212 is limited by how much thorium-228 exists.",
    source: "https://www.sanofi.com/en/media-room/press-releases/2024/2024-10-17-05-30-00-2964590", status: "announced" },
  { id: "d-2025-lantheus-lmi", date: "2025-01-13", type: "acquisition", from: x("Life Molecular Imaging", "DE"), to: c("lantheus", "Lantheus"),
    assets: ["f-18-florbetaben"], assetText: "Neuraceq (florbetaben F-18), an approved amyloid PET agent, with Life Molecular Imaging's pipeline and commercial infrastructure",
    upfront: "$350m in cash at closing", total: "up to $750m including $400m in earn-out and milestone payments", territories: "Company acquisition; completed 22 July 2025", refs: ["amyloid-beta", "pet"],
    note: "Diagnostics beyond cancer: the buyer of PSMA imaging bought amyloid imaging, as anti-amyloid drugs made PET a gate to treatment.",
    source: "https://investor.lantheus.com/node/15966/pdf", status: "closed" },
  { id: "d-2025-telix-imaginab", date: "2025-01-13", type: "acquisition", from: x("ImaginAb", "US"), to: c("telix", "Telix Pharmaceuticals"),
    assets: [], assetText: "Early-stage therapeutic candidates against DLL3 and integrin alpha-v beta-6, a biologics technology platform and a protein engineering and discovery facility",
    upfront: "$45m: $10m cash and $31m equity at closing, plus up to $4m deferred equity", total: "up to $185m in development and commercial milestones, with low single-digit royalties", territories: "Asset purchase", refs: ["dll3", "sclc"],
    note: "The DLL3 candidate is aimed at small-cell lung cancer, and is the closest Telix has to a lung programme: discovery stage, with no TLX code or isotope assigned and no place on the published pipeline.",
    source: "https://www.sec.gov/Archives/edgar/data/2007191/000200719125000003/frelease.htm", status: "closed" },
  { id: "d-2026-telix-regeneron", date: "2026-04-13", type: "co-development", from: x("Regeneron Pharmaceuticals", "US"), to: c("telix", "Telix Pharmaceuticals"),
    assets: [], assetText: "Four initial radiopharmaceutical therapy programmes built on Regeneron antibodies from VelocImmune mice, plus jointly developed diagnostics; Telix contributes radiolabelling, manufacturing and supply",
    upfront: "$40m non-refundable payment to Telix", total: "equal share of global commercialisation costs and profits, or up to $2.1bn in aggregate milestones plus low double-digit royalties if Telix opts out of co-funding", territories: "Global, with an option to expand to four further programmes", refs: ["nsclc", "radioligand-therapy"],
    note: "Telix's second-quarter 2026 results describe the collaboration as initially focused on lung cancer. No target, isotope or candidate code has been disclosed and nothing is in the clinic.",
    source: "https://telixpharma.com/news-views/telix-and-regeneron-announce-strategic-radiopharma-collaboration/", status: "announced" },
];

export const DEAL_TYPE_LABEL: Record<DealType, string> = { licence: "Licence", acquisition: "Acquisition", "co-development": "Co-development", option: "Option" };

export const dealsFor = (id: string) => deals.filter((d) => d.from.id === id || d.to.id === id || d.assets.includes(id));
