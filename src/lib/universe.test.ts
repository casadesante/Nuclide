import { describe, expect, it } from "vitest";
import { matches, societyOf, societySummary } from "./universe";

describe("universe search matcher", () => {
  it("finds bladder rows under either name", () => {
    expect(matches("Nectin-4 PET in urothelial carcinoma", "bladder")).toBe(true);
    expect(matches("Muscle-invasive bladder cancer (MIBC)", "bladder")).toBe(true);
    expect(matches("Bladder cancer staging", "urothelial")).toBe(true);
  });

  it("does not treat the gallbladder as the bladder", () => {
    expect(matches("Liver metastases from gallbladder carcinoma", "bladder")).toBe(false);
    expect(matches("Gall bladder cancer (GBCa) is aggressive", "bladder")).toBe(false);
    expect(matches("Gall-bladder carcinoma", "bladder")).toBe(false);
  });

  it("maps clinical shorthand and needs every term", () => {
    expect(matches("CEACAM5 imaging in colorectal cancer", "crc")).toBe(true);
    expect(matches("PSMA PET in prostate cancer", "mcrpc")).toBe(true);
    expect(matches("FAP in colorectal cancer", "fap bladder")).toBe(false);
    expect(matches("PSMA-617 Ac-225 therapy", "alpha")).toBe(true);  // rows carry isotope tags in the Ac-225 form
  });

  it("matches at word starts, so short terms do not hit inside other words", () => {
    expect(matches("Sentinel node mapping", "net")).toBe(false);
    expect(matches("Pancreatic NET treated with PRRT", "net")).toBe(true);
  });
});

describe("congress societies", () => {
  it("groups meeting labels under their society", () => {
    expect(societyOf("ASCO GU 2023")).toBe("ASCO");
    expect(societyOf("AACR-NCI-EORTC 2023")).toBe("AACR");
    expect(societyOf("AACR special conferences 2024")).toBe("AACR");
    expect(societyOf("ESMO Asia 2024")).toBe("ESMO");
    expect(societyOf("Italian National Congress of Medical Oncology 2016")).toBe("Italian National Congress of Medical Oncology");
    expect(societyOf(null)).toBeNull();
  });
  it("summarises year spans with nuclear medicine societies first", () => {
    expect(societySummary(["ASCO 2016", "SNMMI 2015", "ASCO GI 2020", "EANM 2022", "JSMO 2019"])).toBe("SNMMI 2015, EANM 2022, ASCO 2016–2020, JSMO 2019");
  });
});
