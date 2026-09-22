/**
 * The corpus: every array that becomes part of the knowledge graph.
 *
 * `carried-*` files hold records carried over from Nuclide (CC BY-NC 4.0) and narrowed to radiopharmaceutical use.
 * The rest are written for Nuclide. See docs/corpus-guide.md before adding to either.
 */
import type { EntityInput } from "@/lib/schema";
import { carriedIndications } from "./rp/carried-indications";
import { carriedTechnologies } from "./rp/carried-technologies";
import { carriedTargets } from "./rp/carried-targets";
import { carriedAgents } from "./rp/carried-agents";
import { carriedCompanies } from "./rp/carried-companies";
import { carriedInstitutions } from "./rp/carried-institutions";
import { carriedPathways } from "./rp/carried-pathways";
import { carriedTerms } from "./rp/carried-terms";
import { carriedTrials } from "./rp/carried-trials";
import { carriedPairings } from "./rp/carried-pairings";
import { carriedRoadmaps } from "./rp/carried-roadmaps";
import { carriedIdeas } from "./rp/carried-ideas";
import { carriedCollections } from "./rp/carried-collections";
import { carriedPeople } from "./rp/carried-people";
import { carriedBottlenecks } from "./rp/carried-bottlenecks";
import { carriedPapers } from "./rp/carried-papers";
import { carriedJournals } from "./rp/carried-journals";
import { cardiacAgents } from "./rp/agents-cardiac";
import { globalPlayers } from "./rp/global-players";
import { asiaAgents } from "./rp/agents-asia";
import { diagnosticOncologyAgents } from "./rp/agents-diagnostic-oncology";
import { neuroAgents } from "./rp/agents-neuro";
import { newTherapyAgents } from "./rp/agents-therapy-new";
import { newBottlenecks } from "./rp/bottlenecks";
import { collectionsAndJournals } from "./rp/collections-journals";
import { newCompanies } from "./rp/companies-new";
import { fronts } from "./rp/fronts";
import { newIdeas } from "./rp/ideas-new";
import { nonOncologyIndications } from "./rp/indications-nononcology";
import { imagingIsotopes } from "./rp/isotopes-imaging";
import { therapyIsotopes } from "./rp/isotopes-therapy";
import { newPairings } from "./rp/pairings-new";
import { newPapers } from "./rp/papers-new";
import { newPeople } from "./rp/people-new";
import { newRoadmaps } from "./rp/roadmaps-new";
import { newTargets } from "./rp/targets-new";
import { newTechnologies } from "./rp/technologies-new";
import { clinicalTerms } from "./rp/terms-clinical";
import { physicsTerms } from "./rp/terms-physics";
import { newTrials } from "./rp/trials-new";

const RAW_INPUTS: EntityInput[] = [
  ...carriedIndications,
  ...carriedTechnologies,
  ...carriedTargets,
  ...carriedAgents,
  ...carriedCompanies,
  ...carriedInstitutions,
  ...carriedPathways,
  ...carriedTerms,
  ...carriedTrials,
  ...carriedPairings,
  ...carriedRoadmaps,
  ...carriedIdeas,
  ...carriedCollections,
  ...carriedPeople,
  ...carriedBottlenecks,
  ...carriedPapers,
  ...carriedJournals,
  ...cardiacAgents,
  ...globalPlayers,
  ...asiaAgents,
  ...diagnosticOncologyAgents,
  ...neuroAgents,
  ...newTherapyAgents,
  ...newBottlenecks,
  ...collectionsAndJournals,
  ...newCompanies,
  ...fronts,
  ...newIdeas,
  ...nonOncologyIndications,
  ...imagingIsotopes,
  ...therapyIsotopes,
  ...newPairings,
  ...newPapers,
  ...newPeople,
  ...newRoadmaps,
  ...newTargets,
  ...newTechnologies,
  ...clinicalTerms,
  ...physicsTerms,
  ...newTrials,
];

/**
 * Isotope links, derived.
 *
 * Authors declare the links they know about; this fills in the rest by reading each record for the
 * names a radionuclide goes by ("177Lu", "Lu-177", "lutetium-177"). Derived links only ever add to
 * `related`, never replace a declared one, and only point at isotope records that exist.
 */
function withIsotopeLinks(inputs: EntityInput[]): EntityInput[] {
  const patterns: Array<{ id: string; re: RegExp }> = [];
  for (const e of inputs) {
    if (e.kind !== "isotope") continue;
    const symbol = e.symbol ?? "";
    const m = /^(\d+m?)([A-Za-z]+)$/.exec(symbol);
    if (!m) continue;
    const [, mass, sym] = m;
    const element = e.element ?? sym;
    patterns.push({
      id: e.id,
      re: new RegExp(`(?:\\b${mass}[\\s-]?${sym}\\b|\\b${sym}[\\s-]?${mass}\\b|\\b${element}[\\s-]?${mass}\\b)`, "i"),
    });
  }
  return inputs.map((e) => {
    if (e.kind === "isotope") return e;
    const haystack = [e.name, e.tldr, e.summary, ...(e.aka ?? [])].join(" \n ");
    const found = patterns.filter((p) => p.re.test(haystack)).map((p) => p.id);
    if (!found.length) return e;
    const related = [...new Set([...(e.related ?? []), ...found.slice(0, 8)])];
    return { ...e, related };
  });
}

export const ALL_INPUTS: EntityInput[] = withIsotopeLinks(RAW_INPUTS);
