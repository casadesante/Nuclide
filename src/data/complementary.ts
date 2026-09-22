/**
 * Index of graded approaches, keyed by entity id: the evidence grade the Ask pipeline quotes when a reader asks
 * whether something works. Carried over from Nuclide's complementary-medicine index, which does not apply to this
 * corpus; the plumbing stays so graded entries can be added as the corpus grows.
 */
import type { EvidenceGrade, Use } from "@/lib/complementary";

export type ComplementaryEntry = {
  /** Technology id (must exist in the graph). */
  id: string;
  grade: EvidenceGrade;
  uses: Use[];
  /** One plain sentence: what it is used for and what the evidence says. */
  line: string;
  /** Shortest honest guideline position, if a guideline speaks to it. */
  guideline?: string;
};

export const COMPLEMENTARY_INDEX: ComplementaryEntry[] = [];
