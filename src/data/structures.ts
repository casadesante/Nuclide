/**
 * Which 3D structure to show on each agent page.
 *
 *  - pubchem: resolved by compound name (or "cid:12345") to a PubChem 3D conformer SDF
 *             (falls back to the 2D record if no conformer exists).
 *  - pdb:     an RCSB entry; only the C-alpha backbone is kept (antibodies, proteins).
 *
 * `scripts/fetch-structures.ts` resolves these and writes public/structures/*; the viewer never calls an
 * external service at runtime.
 *
 * A radiopharmaceutical is a ligand, a linker and a chelator holding a radionuclide. PubChem holds the
 * cold ligand, not the labelled product, so each label below says which part is drawn. Every CID here was
 * resolved from PubChem by name on 2026-09-22 and its title checked against the molecule named in the
 * label; agents whose molecule PubChem does not hold (microspheres, colloids, seeds, salts of a bare
 * nuclide, antibodies and most clinical-stage candidates) are deliberately absent and show an explained
 * placeholder instead.
 */
export type StructureDef = { label: string; source: "pubchem" | "pdb"; query: string; note?: string };

const pc = (label: string, query: string, note?: string): StructureDef => ({ label, source: "pubchem", query, note });
const pdb = (label: string, id: string, note?: string): StructureDef => ({ label: `${label} (PDB ${id})`, source: "pdb", query: id, note });

/**
 * Solved structures of the receptor with a ligand of the same chemical class caught in the pocket. Titles were read
 * from RCSB on 2026-09-22. These appear on the agent page and, through the target page, as "solved structures with a
 * drug bound", so each label names what is actually in the crystal or the map.
 */
const PSMA_1007_BOUND = pdb("PSMA-1007 bound to PSMA (glutamate carboxypeptidase II)", "5O5T");
const PSMA_UREA_BOUND = pdb("A urea-based PSMA inhibitor (DCIBzL) bound to PSMA (glutamate carboxypeptidase II)", "3D7H", "Same urea-based binding motif as the PSMA-617 and PSMA-11 ligands; not those molecules themselves.");
const SSTR2_BOUND = pdb("Somatostatin-14 bound to the somatostatin receptor 2 with Gi3 (cryo-EM)", "7T10", "The natural peptide in the receptor the dotatate and dotatoc analogues bind.");

const COLD = "PubChem holds the unlabelled ligand, so the radionuclide itself is not in this drawing.";

/** The PSMA-617 ligand shared by the Lu-177 product and its Ac-225 analogues. */
const PSMA_617 = pc("Vipivotide tetraxetan (PSMA-617) ligand", "cid:122706786", COLD);
/** DOTATATE: the octreotate peptide with its DOTA chelator, shared by the Lu-177, Ga-68, Cu-64 and Ac-225 products. */
const DOTATATE = pc("Dotatate (DOTA-TATE) peptide and chelator", "cid:11170867", COLD);
/** DOTATOC / edotreotide, the octreotide analogue used with Ga-68 and Lu-177. */
const EDOTREOTIDE = pc("Edotreotide (DOTA-TOC) peptide and chelator", "cid:158782", COLD);
/** Iobenguane: meta-iodobenzylguanidine, the noradrenaline analogue behind the I-123 and I-131 products. */
const MIBG = pc("Iobenguane (meta-iodobenzylguanidine)", "cid:60860", "PubChem holds the molecule with stable iodine; the products carry I-123 or I-131 at the same position.");

export const structures: Record<string, StructureDef[]> = {
  // Therapy: PSMA
  pluvicto: [PSMA_617, PSMA_UREA_BOUND],
  "ac225-psma": [PSMA_617],
  // Therapy and imaging: somatostatin-receptor peptides
  lutathera: [DOTATATE, SSTR2_BOUND],
  "lu-177-dotatate-generic": [DOTATATE],
  ryz101: [DOTATATE],
  "ga68-dotatate": [DOTATATE, SSTR2_BOUND],
  "cu-64-dotatate": [DOTATATE],
  "itm-11": [EDOTREOTIDE],
  "ga-68-dotatoc": [EDOTREOTIDE],
  "in-111-pentetreotide": [pc("Pentetreotide (DTPA-octreotide)", "cid:72128", COLD)],
  // MIBG
  "i-123-mibg": [MIBG],
  "i-123-mibg-cardiac": [MIBG],
  "i131-mibg": [MIBG],
  "iobenguane-i-131": [MIBG],
  // PSMA imaging
  pylarify: [pc("Piflufolastat F-18", "cid:52950901")],
  "ga68-psma-11": [pc("Gozetotide (PSMA-11) ligand", "cid:60143283", COLD), PSMA_UREA_BOUND],
  "psma-1007-f18": [pc("PSMA-1007 ligand", "cid:153327302", COLD), PSMA_1007_BOUND],
  // Neurology imaging
  "f-18-florbetapir": [pc("Florbetapir F-18", "cid:24822371")],
  "f-18-florbetaben": [pc("Florbetaben F-18", "cid:11501341")],
  "f-18-flutemetamol": [pc("Flutemetamol F-18", "cid:10107393")],
  "f-18-flortaucipir": [pc("Flortaucipir F-18", "cid:71059746")],
  "f-18-fdopa": [pc("Fluorodopa F-18", "cid:107730")],
  "i-123-ioflupane": [pc("Ioflupane I-123", "cid:3086674")],
  "f-18-fet": [pc("Floretyrosine, O-(2-fluoroethyl)-L-tyrosine (FET)", "cid:54255856")],
  "tc-99m-hmpao-brain": [pc("Exametazime (HMPAO) chelator", "cid:9552071", COLD)],
  // Cardiology imaging
  "f-18-flurpiridaz": [pc("Flurpiridaz F-18", "cid:11405965")],
  "tc-99m-sestamibi": [pc("Technetium-99m sestamibi", "cid:22617237")],
  "tc-99m-tetrofosmin": [pc("Tetrofosmin ligand", "cid:4274", COLD)],
  // Oncology imaging, metabolic and other tracers
  "fludeoxyglucose-f18": [pc("Fludeoxyglucose, 2-deoxy-2-fluoro-D-glucose (FDG)", "cid:170049")],
  "f-18-fdg-brain": [pc("Fludeoxyglucose, 2-deoxy-2-fluoro-D-glucose (FDG)", "cid:170049")],
  "fluciclovine-f18": [pc("Fluciclovine F-18", "cid:10820564")],
  "fluoroestradiol-f18": [pc("Fluoroestradiol F-18 (FES)", "cid:10401972")],
  "f-18-fluorothymidine": [pc("Fluorothymidine (FLT)", "cid:33039")],
  "f-18-naf": [pc("Sodium fluoride", "cid:5235")],
  // Bone-targeted therapy
  "samarium-153-lexidronam": [pc("Lexidronam (EDTMP) chelator", "cid:15025", COLD)],
  "tc-99m-mdp": [pc("Medronic acid (MDP) chelator", "cid:16124", COLD)],
};
