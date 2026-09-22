/**
 * Collections: records carried over from Nuclide.
 *
 * Carried over from the Nuclide corpus (https://github.com/casadesante/Nuclide), CC BY-NC 4.0, and narrowed to
 * radiopharmaceutical use. Facts and sources are as Nuclide held them on the `asOf` date of each record;
 * check anything that matters at the primary source each record links.
 */
import type { EntityInput } from "@/lib/schema";

export const carriedCollections: EntityInput[] = [
  {
    "kind": "collection",
    "asOf": "2026-09-04",
    "links": [
      {
        "label": "ClinicalTrials.gov",
        "url": "https://clinicaltrials.gov"
      }
    ],
    "id": "clinicaltrials-gov",
    "name": "ClinicalTrials.gov",
    "url": "https://clinicaltrials.gov",
    "holds": "Registry and results database of >500,000 clinical studies worldwide.",
    "license": "Public domain (US Government)",
    "maintainer": "NIH / NLM",
    "tldr": "ClinicalTrials.gov is the master list of clinical trials. Every trial on this site links to its record.",
    "summary": "ClinicalTrials.gov is the registry and results database of more than 500,000 clinical studies worldwide, run by the NIH National Library of Medicine and released as public domain US Government work. Registration is mandatory for US trials, and API v2 gives structured access to eligibility criteria, arms, outcome measures and posted results, which makes it the backbone of any trial-matching tool. Every trial on Nuclide links to its ClinicalTrials.gov record, and the collection is tied to the technology AI trial matching and clinical decision support. It is also cited by bottleneck records including Trials enrol too few, too slowly, Failures are hidden, Data silos and Weak real-world evidence and registries, and by ideas such as One standing umbrella trial for all rare cancers in a country."
  },
  {
    "kind": "collection",
    "asOf": "2026-09-08",
    "id": "prostate-cancer-foundation",
    "name": "Prostate Cancer Foundation (PCF)",
    "url": "https://www.pcf.org/",
    "holds": "The largest philanthropic funder of prostate cancer research (>$1 billion), Challenge Awards and Young Investigator programme, the PCF-VA Precision Oncology Program, patient guides, and the annual Scientific Retreat.",
    "maintainer": "PCF",
    "license": "Copyright PCF",
    "tldr": "Michael Milken's prostate cancer foundation, which funded the science behind abiraterone, enzalutamide and PSMA therapy and runs a precision-oncology network in US veterans' hospitals.",
    "summary": "Founded 1993 (as CaP CURE). PCF-funded research contributed to abiraterone, enzalutamide, radium-223, PSMA imaging and radioligands, and germline testing guidance; the PCF-VA network provides genomic testing and trials to veterans; the Young Investigator awards have trained a generation of researchers. Patient resources include the Prostate Cancer Patient Guide and a Black-community outreach programme; ZERO Prostate Cancer and Movember are major partner organisations for support and awareness.",
    "related": [
      "prostate",
      "psma",
      "psma-pet",
      "pluvicto",
      "abiraterone",
      "enzalutamide"
    ],
    "links": [
      {
        "label": "PCF",
        "url": "https://www.pcf.org/"
      },
      {
        "label": "ZERO Prostate Cancer",
        "url": "https://zerocancer.org/"
      },
      {
        "label": "Movember",
        "url": "https://us.movember.com/"
      }
    ],
    "tags": [
      "gap-fill",
      "patient-org"
    ]
  },
  {
    "kind": "collection",
    "asOf": "2026-09-08",
    "links": [
      {
        "label": "SNMMI Annual Meeting",
        "url": "https://www.snmmi.org/"
      }
    ],
    "id": "src-snmmi",
    "journals": [
      "journal-of-nuclear-medicine"
    ],
    "institutions": [
      "snmmi"
    ],
    "name": "SNMMI Annual Meeting",
    "url": "https://www.snmmi.org/",
    "holds": "Nuclear medicine and theranostics: new tracers, radioligand therapy data, dosimetry.",
    "license": "Abstracts free (Journal of Nuclear Medicine supplement)",
    "maintainer": "Society of Nuclear Medicine and Molecular Imaging",
    "tags": [
      "source",
      "congress"
    ],
    "tldr": "The SNMMI Annual Meeting, held each June by the Society of Nuclear Medicine and Molecular Imaging, is where new PET tracers, radioligand therapy results and dosimetry work are first presented. Abstracts are free as a Journal of Nuclear Medicine supplement, and that journal carries the field's papers through the rest of the year.",
    "summary": "The SNMMI Annual Meeting is the theranostics meeting, held each June by the Society of Nuclear Medicine and Molecular Imaging. It holds nuclear medicine and theranostics content: new tracers, radioligand therapy data and dosimetry. Abstracts are free as a Journal of Nuclear Medicine supplement, and that journal carries the field's papers through the rest of the year. On Nuclide it is tagged source and congress, and it is linked from the journal record Journal of Nuclear Medicine and the institution record Society of Nuclear Medicine and Molecular Imaging."
  },
  {
    "kind": "collection",
    "asOf": "2026-09-08",
    "links": [
      {
        "label": "UroToday",
        "url": "https://www.urotoday.com/"
      }
    ],
    "id": "src-urotoday",
    "name": "UroToday",
    "url": "https://www.urotoday.com/",
    "holds": "Genitourinary oncology abstracts, conference coverage, and expert video.",
    "license": "Free with registration",
    "maintainer": "Digital Science Press",
    "tags": [
      "source",
      "news"
    ],
    "tldr": "UroToday is the prostate, bladder, and kidney cancer feed, including PSMA and radioligand news.",
    "summary": "UroToday is the daily feed for prostate, bladder and kidney cancer, holding genitourinary oncology abstracts, conference coverage and expert video, including PSMA and radioligand news. It is published by Digital Science Press and is free with registration. Its conference coverage of ASCO GU, EAU, AUA and the PSMA conference is exhaustive, which makes it the quickest way to follow a genitourinary meeting without attending. On Nuclide it is listed as a source with the tags source and news, read for the genitourinary cancers and for radioligand therapy news."
  },
  {
    "id": "tcia",
    "kind": "collection",
    "name": "The Cancer Imaging Archive (TCIA)",
    "url": "https://www.cancerimagingarchive.net",
    "holds": "De-identified cancer imaging (CT, MRI, PET, pathology) linked to TCGA and clinical trials; the main training source for radiology models.",
    "license": "Mostly CC BY; per-collection",
    "maintainer": "NCI / University of Arkansas",
    "asOf": "2026-09-08",
    "tldr": "The public archive of cancer scans that most radiology AI is trained and tested on.",
    "summary": "The Cancer Imaging Archive (TCIA) holds de-identified cancer imaging, CT, MRI, PET and pathology, linked to TCGA and to clinical trials, and it is the main training and testing source for radiology AI models. It has over 200 collections, pairs with TCGA genomics for radiogenomics, and is accessed through the NBIA portal and the Imaging Data Commons. TCIA is run by the NCI with the University of Arkansas; most collections are CC BY, with terms set per collection. On Nuclide it is tagged data, linked to the technology AI in radiology and the institution National Cancer Institute (NIH), and cited by the idea One certified open-source de-identification pipeline for scans and slides.",
    "institutions": [
      "nci"
    ],
    "tags": [
      "data"
    ],
    "links": [
      {
        "label": "The Cancer Imaging Archive (TCIA)",
        "url": "https://www.cancerimagingarchive.net"
      }
    ]
  }
];
