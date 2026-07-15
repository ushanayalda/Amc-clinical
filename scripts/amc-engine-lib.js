"use strict";

const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const Ajv2020 = require("ajv/dist/2020");
const addFormats = require("ajv-formats");

const blueprintSchema = require("../engine/amc-case-blueprint.schema.json");
const registrySchema = require("../engine/case-registry.schema.json");
const visibleCaseSchema = require("../engine/amc-visible-case.schema.json");
const authoritativeSourceCatalog = require("../engine/authoritative-source-catalog.json");
const legacyCaseManifest = require("../engine/legacy-case-manifest.v1.1.json");

const ENGINE_VERSION = "1.1.0";
const LEGACY_MANIFEST_RAW_SHA256 = "952ea6eaadcde8127a64b5a24a5cc917316affd78ded88ac5bb8513d9f47fb8f";
const ACTION_EVIDENCE_TOKEN = Symbol("trusted-run-audit-action-evidence");
const QA_FIELDS = [
  "blueprint",
  "stemNeutrality",
  "taskAlignment",
  "conversation",
  "participantDisclosure",
  "examinerRelease",
  "amcLevel",
  "timing",
  "clinical",
  "sources",
  "finalQa"
];

const CLINICAL_GRAMMARS = new Set([
  "consultation",
  "history",
  "diagnostic_formulation",
  "acute_resuscitation",
  "mental_state_risk",
  "mixed"
]);

const PLACEHOLDER_PATTERN = /\[\[[^\]]+\]\]|\b(?:todo|tbd|lorem ipsum|placeholder|replace this|not run)\b|https:\/\/example\.(?:org|com)\b/i;
const STEM_URGENCY_PATTERN = /\b(?:urgent|urgently|immediate(?:ly)?|without delay|straight away|as soon as possible|expedit\w*|fast[- ]track\w*|prompt assessment|prompt hospital|rapid (?:assessment|review)|moved to the front of the queue(?: for assessment)?|prioriti[sz](?:e|ed|ing)\w*(?:\s+\w+){0,4}\s+(?:rapid|prompt|urgent)\s+(?:assessment|review)|emergency department (?:assessment|review|transfer)|same[- ]day (?:assessment|review|appointment|emergency department assessment)|priority (?:appointment|review|assessment|transfer)|triage(?:d)? (?:as )?category\s*(?:[1-3]|one|two|three)|sent directly|go(?:es)? straight to (?:hospital|the emergency department)|acutely unwell|deteriorat\w*|emergency management|emergency transfer|hospital transfer|transferr?\w*(?:\s+\w+){0,4}\s+now|resuscitat\w*|life[- ]threatening|critically ill|unstable|time[- ]critical|high[- ]risk|must (?:(?:be seen straight away)|(?:go straight to (?:hospital|the emergency department))|(?:be )?(?:assessed|reviewed|treated|transferred|admitted))|needs? (?:assessment|review|treatment|transfer|admission)|requires? treatment|activate emergency|call (?:an )?ambulance|triple zero)\b/i;
const TASK_DIRECTED_URGENCY_PATTERN = /\b(?:(?:arrange|organise|refer|send|transfer|admit|activate|call)\b[^.]{0,80}\b(?:emergency department|hospital|ambulance|triple zero|resuscitation|immediate treatment|urgent care)|expedit\w*|fast[- ]track\w*)\b/i;
const DIRECTED_TREATMENT_TASK_PATTERN = /\b(?:administer|give|start|commence|prescribe|infuse|inject|intubate|defibrillate|cardiovert)\b/i;
const HOSPITAL_DISPOSITION_PATTERN = /\b(?:(?:need|needs|require|requires|required|must|should)\s+(?:(?:him|her|them|the patient)\s+)?(?:to\s+)?(?:go|attend|be sent|be transferred|receive)\s+(?:straight\s+)?(?:to\s+)?(?:hospital|(?:the\s+)?emergency department|ED)|(?:has been|was|is being|is|be)\s+(?:sent|transferred|referred)\s+to\s+(?:hospital|(?:the\s+)?emergency department|ED)|(?:get|send|take|transfer)\s+(?:him|her|them|the patient)\s+to\s+(?:hospital|(?:the\s+)?emergency department|ED)(?:\s+now)?|requires?\s+(?:urgent\s+)?hospital care(?:\s+now)?)\b/i;
const EMERGENCY_DISPOSITION_PATTERN = /\b(?:(?:sent|send|taken|take|brought|bring|conveyed|convey|transported|transport|transferred|transfer|referred|refer|directed|direct)\s+(?:(?:him|her|them|the patient)\s+)?(?:directly\s+|straight\s+)?to\s+(?:hospital|(?:the\s+)?emergency department|ED)|(?:advised|told|instructed|directed|asked)\s+(?:(?:him|her|them|the patient)\s+)?to\s+(?:attend|present\s+to|go\s+to|go\s+straight\s+to)\s+(?:hospital|(?:the\s+)?emergency department|ED)|(?:awaiting|waiting\s+for)\s+(?:an\s+)?(?:ambulance|paramedics?|paramedic\s+transport)|paramedics?\s+(?:are|is)\s+on\s+(?:their|the)\s+way|(?:an\s+)?ambulance\s+(?:has\s+)?(?:already\s+)?(?:been\s+)?(?:arranged|booked|called|requested)|(?:arranged|booked|called|requested)\s+(?:an\s+)?(?:ambulance|paramedic\s+transport)|(?:placed|moved)\s+(?:(?:him|her|them|the patient)\s+)?(?:in|into)\s+(?:resus|the\s+resuscitation\s+(?:area|bay|room))|accepted\s+for\s+(?:(?:urgent|emergency)\s+)?admission|emergency\s+(?:assessment|evaluation|referral|review|transfer|admission))\b/i;
const SENSITIVE_TOPIC_PATTERN = /\b(?:sexual\s+(?:activity|history|partner|partners|assault|abuse)|sexually\s+assaulted|rape|domestic\s+(?:violence|abuse)|family\s+violence|partner\s+(?:violence|abuse)|physically\s+abused|hit\s+you|hurt\s+you|suicid(?:e|al)|self[- ]harm|kill\s+yourself|end\s+your\s+life|illicit\s+drugs?|recreational\s+drugs?)\b/i;
const NONANSWER_RESPONSE_PATTERN = /\b(?:do not understand|don't understand|cannot understand|can't understand|not sure what you mean|that is private|it's private|it is private|keep (?:that|this|it) private|will not answer|won't answer|won't tell you|refuse(?: to answer)?|decline(?: to answer)?|rather (?:keep (?:that|this|it) private|not answer)|prefer not to answer|none of your business|no comment)\b/i;
const EXAMINATION_ACTION_PATTERN = /\b(?:palpat(?:e|es|ing)|auscultat(?:e|es|ing)|percuss(?:es|ing)?|examin(?:e|es|ing)|inspect(?:s|ing)?|perform(?:s|ing)? (?:a |the )?(?:physical|rectal|pelvic|breast|genital|prostate|neurological|cardiovascular|respiratory|abdominal) examination|(?:check|checks|checking|feel|feels|feeling|take|takes|taking|measure|measures|measuring)\s+(?:(?:the patient|him|her|them|[\p{L}'’-]+)'?s?\s+)?(?:radial )?(?:pulse|blood pressure)|expos(?:e|es|ing)\s+(?:(?:the patient|him|her|them|[\p{L}'’-]+)'?s?\s+)?(?:chest|abdomen|breast|genitals?)|(?:abdomen|chest|lungs?|heart|pulse|blood pressure|calves?)\s+(?:is|are|was|were)\s+(?:palpated|auscultated|percussed|examined|inspected|checked|measured))\b/iu;
const PROCEDURE_ACTION_PATTERN = /\b(?:insert(?:s|ing)?|remov(?:e|es|ing)|inject(?:s|ing)?|administer(?:s|ing)?|catheteri[sz](?:e|es|ing)|cannulat(?:e|es|ing)|mak(?:e|es|ing) (?:an )?incision|perform(?:s|ing)? (?:a |the )?(?:procedure|venepuncture)|draw(?:s|ing)? blood|obtain(?:s|ing)? (?:a )?(?:venous )?blood sample|(?:plac|gain)(?:e|es|ing|s)? (?:an? )?(?:intravenous|IV) (?:line|access|cannula)|connect(?:s|ing)? (?:an? )?(?:intravenous|IV) infusion|attach(?:es|ing)? (?:defibrillator )?(?:pads?|electrodes?)|swab(?:s|bing)? and sutur(?:e|es|ing) (?:the )?wound|blood\s+(?:is|was)\s+drawn|(?:a\s+)?cannula\s+(?:is|was)\s+inserted|(?:an\s+)?intravenous infusion\s+(?:is|was)\s+connected|(?:the\s+)?wound\s+(?:is|was)\s+swabbed and sutured)\b/i;
const TREATMENT_ACTION_PATTERN = /\b(?:(?:give|gives|giving|administer|administers|administering)\b[^.]{0,60}\b(?:aspirin|medicine|medication|drug|milligrams?|micrograms?|grams?)|appl(?:y|ies|ying)\b[^.]{0,50}\b(?:oxygen|nasal prongs?|mask)|(?:aspirin|oxygen|medication|medicine)\s+(?:is|was)\s+(?:given|administered|applied)|start(?:s|ing)?\s+(?:an? )?(?:intravenous )?infusion)\b/i;
const DOCTOR_ACTOR_PATTERN = /\b(?:the\s+doctor|dr\.?\s+[\p{L}'’-]+)\b/iu;
const ACTION_CLAUSE_SEPARATOR_PATTERN = /(?:[;:–—…]|\n|\b(?:while|before|after|then|and then|followed by|at the same time)\b)/i;
const LOW_RISK_ACTION_INTERVENTION_PATTERN = /\b(?:oxygen|nasal prongs?|mask|infusion|tablet|capsule|aspirin|glyceryl trinitrate|GTN|milligrams?|micrograms?|grams?|litres?|catheter|cannula|needle|injection|anaesthetic|defibrillat\w*|cardiovert\w*|CPR|resuscitat\w*|irrigat\w*|sutur\w*|drain\w*|speculum|pelvic|rectal|wound)\b/i;
const NEGATED_PERFORMANCE_PATTERN = /(?:\b(?:(?:i|we|the doctor)\s+(?:(?:am|are|is|have)\s+)?(?:will\s+)?(?:not going to|unable to|unwilling to|declin(?:e|es|ed) to|refus(?:e|es|ed) to|choos(?:e|es|ing) (?:not to|against)|decid(?:e|es|ed) (?:not to|against)|avoid(?:s|ed|ing)?|omit(?:s|ted|ting)?|forego(?:es|ing)?|withhold(?:s|ing)?|leav(?:e|es|ing)\b[^.!?,;]{0,20}\bundone)|(?:will not|won't|do not|don't|cannot|can't))\b[^.!?,;]{0,60}\b(?:explain(?:ing)?|assess(?:ing)?|arrang(?:e|es|ing)|provid(?:e|es|ing)|giv(?:e|es|ing)|discuss(?:ing)?|address(?:ing)?|perform(?:ing)?|request(?:ing)?|order(?:ing)?|interpret(?:ing)?|review(?:ing)?|manag(?:e|es|ing)|treat(?:ing)?|transferr?(?:ing)?|refer(?:ring)?)\b|\bno\b[^.!?;]{0,100}\b(?:will be|are|is)\s+(?:arranged|provided|given|performed|requested|ordered|reviewed|treated|transferred|referred)|\b(?:assessment|treatment|care|investigation|transfer|explanation|monitoring)\b[^.!?;]{0,40}\b(?:is|are)\s+being\s+(?:withheld|omitted|avoided))\b/i;
const LEARNER_METADATA_MISREPRESENTATION_PATTERN = /\b(?:official|real|actual|leaked|recalled)\s+(?:AMC\s+)?(?:clinical\s+)?(?:exam(?:ination)?|station|case|marking script)\b|\bAMC\s+(?:official|leaked|recalled)\b/i;
const NEGATIVE_RESPONSE_USE_PATTERN = /\b(?:ignore[sd]?|disregard[sd]?|unrelated|without using|changes? topic without|does not use)\b/i;
const GLOBAL_STANDARD_THRESHOLD_PATTERN = /\b(?:rating|ratings|score|scores|one|two|three|four|five|six|seven)\b|[0-9]/i;
const EMBEDDED_MINUTES_PATTERN = /\b([0-9]+(?:\.[0-9]+)?)\s*(?:minutes?|mins?)\b/gi;
const AUTHORITATIVE_SOURCE_HOSTS = {
  exam_specification: ["amc.org.au"],
  assessment_domains: ["amc.org.au"],
  australian_clinical_guideline: [
    "health.gov.au",
    "healthdirect.gov.au",
    "safetyandquality.gov.au",
    "heartfoundation.org.au",
    "anzcor.org",
    "racgp.org.au",
    "rch.org.au",
    "eviq.org.au",
    "health.nsw.gov.au",
    "health.vic.gov.au",
    "health.qld.gov.au",
    "sahealth.sa.gov.au",
    "health.wa.gov.au",
    "health.tas.gov.au",
    "health.nt.gov.au",
    "act.gov.au",
    "australianprescriber.tg.org.au"
  ],
  australian_regulation: ["health.gov.au", "tga.gov.au", "medicalboard.gov.au", "ahpra.gov.au", "legislation.gov.au"],
  product_information: ["tga.gov.au", "medicines.org.au"],
  international_guideline: ["who.int", "nice.org.uk", "escardio.org", "heart.org"],
  primary_research: [
    "pubmed.ncbi.nlm.nih.gov",
    "ncbi.nlm.nih.gov",
    "bmj.com",
    "jamanetwork.com",
    "nejm.org",
    "thelancet.com",
    "cochranelibrary.com"
  ]
};
const ALLOWED_BLUEPRINT_REFS = new Set([
  "station",
  "stem",
  "tasks",
  "clinicalTruth",
  "participants",
  "examiner",
  "marking.keySteps",
  "marking.domains",
  "marking.globalRating",
  "interaction",
  "performance",
  "sourceBasis"
]);

function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function isText(value) {
  return typeof value === "string" && value.replace(/\p{Cf}/gu, "").trim().length > 0;
}

function normalizeRegistryText(value) {
  return String(value || "")
    .normalize("NFKC")
    .replace(/\p{Cf}/gu, "")
    .replace(/\s+/gu, " ")
    .trim()
    .toLowerCase();
}

const CLINICAL_EVIDENCE_STOP_WORDS = new Set([
  "about", "after", "again", "also", "before", "brought", "could", "doctor", "does", "from", "have",
  "into", "most", "patient", "please", "should", "that", "their", "there", "these", "they", "this",
  "today", "what", "when", "where", "which", "with", "would", "your"
]);
const TASK_SEMANTIC_GENERIC_WORDS = new Set([
  "address", "assess", "assessment", "candidate", "concern", "concerns", "diagnosis", "differential", "differentials",
  "discuss", "examination", "examine", "explain", "findings", "focused", "history", "important", "likely", "management",
  "most", "patient", "plan", "present", "proposed", "request", "take", "their", "your"
]);
const MEANINGFUL_SHORT_CLINICAL_TERMS = new Set([
  "abg", "ami", "bgl", "bmi", "bp", "ct", "cxr", "ecg", "ekg", "fbc", "hba1c", "hiv", "inr", "lft",
  "mi", "mri", "pe", "pft", "tft", "uec", "uti"
]);

function meaningfulClinicalTokens(value) {
  return new Set((String(value || "").normalize("NFKC").toLowerCase().match(/[a-z][a-z0-9'-]*/g) || [])
    .map(function (token) { return token.replace(/['’]s$/i, ""); })
    .filter(function (token) {
      return (token.length >= 4 || MEANINGFUL_SHORT_CLINICAL_TERMS.has(token)) &&
        !CLINICAL_EVIDENCE_STOP_WORDS.has(token);
    }));
}

function hasMeaningfulClinicalOverlap(left, right) {
  const leftTokens = meaningfulClinicalTokens(left);
  const rightTokens = meaningfulClinicalTokens(right);
  return Array.from(leftTokens).some(function (token) { return rightTokens.has(token); });
}

function textContainsControlledTerm(text, term) {
  if (!isText(term)) return false;
  const normalizedTerm = String(term).normalize("NFKC").replace(/\p{Cf}/gu, "").trim();
  const escaped = /^[A-Za-z]{2,6}$/.test(normalizedTerm) ?
    normalizedTerm.split("").map(regexEscape).join("[^\\p{L}\\p{N}]*") + "[^\\p{L}\\p{N}]*" :
    (normalizedTerm.match(/[\p{L}\p{N}]+/gu) || []).map(regexEscape).join("[^\\p{L}\\p{N}]+");
  if (!escaped) return false;
  return new RegExp("(^|[^\\p{L}\\p{N}])" + escaped + "(?=$|[^\\p{L}\\p{N}])", "iu")
    .test(String(text || "").normalize("NFKC").replace(/\p{Cf}/gu, ""));
}

function learnerMetadataMisrepresents(value) {
  const withoutNegativeDisclaimers = String(value || "").replace(/\b(?:is|are|was|were)?\s*not\b[^.!?]{0,180}(?:[.!?]|$)/gi, " ");
  return LEARNER_METADATA_MISREPRESENTATION_PATTERN.test(withoutNegativeDisclaimers);
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function wordCount(value) {
  return String(value || "").trim().split(/\s+/).filter(Boolean).length;
}

function questionMarkCount(value) {
  return (String(value || "").match(/[?？]/g) || []).length;
}

function parseMinutes(value) {
  const match = String(value || "").match(/([0-9]+(?:\.[0-9]+)?)/);
  return match ? Number(match[1]) : null;
}

function unique(values) {
  return new Set(values).size === values.length;
}

function requireUniqueObjectIds(items, label, errors) {
  const ids = asArray(items).filter(isObject).map(function (item) { return item.id; }).filter(isText);
  if (!unique(ids)) errors.push(label + " IDs must be unique");
}

function requireUniqueFieldValues(items, field, label, errors) {
  const values = asArray(items).filter(isObject).map(function (item) { return item[field]; }).filter(isText);
  if (!unique(values)) errors.push(label + " " + field + " values must be unique");
}

function contentHash(caseData) {
  const source = {
    id: caseData && caseData.id,
    globalId: caseData && caseData.globalId,
    registryId: caseData && caseData.registryId,
    displayNumber: caseData && caseData.displayNumber,
    title: caseData && caseData.title,
    status: caseData && caseData.status,
    statusLabel: caseData && caseData.statusLabel,
    note: caseData && caseData.note,
    modality: caseData && caseData.modality,
    phase: caseData && caseData.phase,
    pattern: caseData && caseData.pattern,
    format: caseData && caseData.format,
    stem: caseData && caseData.stem,
    run: caseData && caseData.run
  };
  return crypto.createHash("sha256").update(JSON.stringify(source)).digest("hex");
}

function clinicalContentProjection(caseData, blueprint) {
  if (!isObject(caseData)) return null;
  const excludedLineIds = new Set();
  const replacements = [];
  if (isObject(blueprint)) {
    const identity = blueprint.interaction && blueprint.interaction.identity;
    if (identity && isText(identity.verificationLineId)) excludedLineIds.add(identity.verificationLineId);
    asArray(blueprint.participants).filter(isObject).forEach(function (participant) {
      if (participant.identityResponse && isText(participant.identityResponse.lineId)) {
        excludedLineIds.add(participant.identityResponse.lineId);
        replacements.push(participant.identityResponse.fullName);
      }
      replacements.push.apply(replacements, asArray(participant.addressTerms));
    });
    asArray(blueprint.interaction && blueprint.interaction.consents).filter(isObject).forEach(function (consent) {
      excludedLineIds.add(consent.requestLineId);
      excludedLineIds.add(consent.responseLineId);
    });
    if (blueprint.examiner && blueprint.examiner.opening) excludedLineIds.add(blueprint.examiner.opening.lineId);
    if (blueprint.examiner && blueprint.examiner.closing) excludedLineIds.add(blueprint.examiner.closing.lineId);
    replacements.push(blueprint.station && blueprint.station.recipient);
  }
  const controlledReplacements = replacements.filter(isText).map(function (value) { return value.trim(); })
    .sort(function (left, right) { return right.length - left.length; });
  function normalize(value) {
    let result = String(value || "").normalize("NFKC").replace(/\p{Cf}/gu, "").toLowerCase();
    controlledReplacements.forEach(function (replacement) {
      result = result.replace(new RegExp(regexEscape(replacement.normalize("NFKC")), "gi"), " participant ");
    });
    return result.replace(/[^\p{L}\p{N}]+/gu, " ").replace(/\s+/gu, " ").trim();
  }
  const stemPurposeById = new Map(asArray(blueprint && blueprint.stem && blueprint.stem.lines).filter(isObject)
    .map(function (line) { return [line.id, line.purpose]; }));
  const stem = asArray(caseData.stem && caseData.stem.lines).filter(isObject).filter(function (line) {
    return !["examiner_arrangement"].includes(stemPurposeById.get(line.id));
  }).map(function (line) { return normalize(line.text); });
  const tasks = asArray(caseData.stem && caseData.stem.tasks).filter(isObject).map(function (task) {
    return normalize(task.text);
  });
  const run = flattenLines(caseData).filter(function (line) {
    return !excludedLineIds.has(line.id) && !(line.speaker === "Action" && isNeutralPreIdentityAction(line.text));
  }).map(function (line) {
    const participant = asArray(blueprint && blueprint.participants).find(function (item) {
      return item && item.speakerLabel === line.speaker;
    });
    const speakerRole = participant ? participant.role : line.speaker;
    return normalize(speakerRole + " " + line.text);
  });
  const source = { stem, tasks, run };
  return source;
}

function clinicalContentFingerprint(caseData, blueprint) {
  const source = clinicalContentProjection(caseData, blueprint);
  return source ? crypto.createHash("sha256").update(JSON.stringify(source)).digest("hex") : null;
}

function clinicalContentShingles(caseData, blueprint) {
  const source = clinicalContentProjection(caseData, blueprint);
  if (!source) return [];
  const tokens = JSON.stringify(source).match(/[a-z0-9]+/gi) || [];
  const shingles = new Set();
  const width = 5;
  if (tokens.length < width) return tokens.length ? [tokens.join(" ")] : [];
  for (let index = 0; index <= tokens.length - width; index += 1) {
    shingles.add(tokens.slice(index, index + width).join(" "));
  }
  return Array.from(shingles).map(function (shingle) {
    return crypto.createHash("sha256").update(shingle).digest("hex").slice(0, 16);
  }).sort().slice(0, 128);
}

function shingleSimilarity(left, right) {
  const leftSet = new Set(asArray(left));
  const rightSet = new Set(asArray(right));
  if (leftSet.size === 0 || rightSet.size === 0) return 0;
  let intersection = 0;
  leftSet.forEach(function (item) { if (rightSet.has(item)) intersection += 1; });
  return intersection / (leftSet.size + rightSet.size - intersection);
}

function canonicalise(value) {
  if (Array.isArray(value)) return value.map(canonicalise);
  if (!isObject(value)) return value;
  return Object.keys(value).sort().reduce(function (result, key) {
    result[key] = canonicalise(value[key]);
    return result;
  }, {});
}

function blueprintPackageHash(blueprint) {
  if (!isObject(blueprint)) return null;
  const projection = JSON.parse(JSON.stringify(blueprint));
  if (isObject(projection.qa)) delete projection.qa.blueprintPackageSha256;
  return crypto.createHash("sha256").update(JSON.stringify(canonicalise({
    blueprint: projection,
    authoritativeSourceCatalog
  }))).digest("hex");
}

function blueprintReviewScopeHash(blueprint) {
  if (!isObject(blueprint)) return null;
  const projection = JSON.parse(JSON.stringify(blueprint));
  delete projection.qa;
  if (isObject(projection.performance) && isObject(projection.performance.listenTest)) {
    delete projection.performance.listenTest.reviewScopeSha256;
  }
  return crypto.createHash("sha256").update(JSON.stringify(canonicalise({
    blueprint: projection,
    authoritativeSourceCatalog
  }))).digest("hex");
}

function embeddedMinutes(text) {
  const values = [];
  const value = String(text || "");
  EMBEDDED_MINUTES_PATTERN.lastIndex = 0;
  let match;
  while ((match = EMBEDDED_MINUTES_PATTERN.exec(value)) !== null) values.push(Number(match[1]));
  return values;
}

function embeddedInstructionalMinutes(text) {
  const value = String(text || "");
  const patterns = [
    /\b(?:you (?:have|will have|get)|candidate (?:has|will have)|allow|allocate|spend|use)\s+([0-9]+(?:\.[0-9]+)?)\s*(?:minutes?|mins?)\b/gi,
    /\b([0-9]+(?:\.[0-9]+)?)\s*(?:minutes?|mins?)\s+(?:to|for this task|for the station|remaining)\b/gi,
    /\b(?:complete|finish|perform|assess|explain|discuss)\b[^.]{0,50}\b(?:within|in)\s+([0-9]+(?:\.[0-9]+)?)\s*(?:minutes?|mins?)\b/gi
  ];
  const values = [];
  patterns.forEach(function (pattern) {
    let match;
    while ((match = pattern.exec(value)) !== null) values.push(Number(match[1]));
  });
  return values;
}

function hostMatches(hostname, allowedRoot) {
  return hostname === allowedRoot || hostname.endsWith("." + allowedRoot);
}

function addIssue(issues, severity, code, location, message, excerpt) {
  issues.push({
    severity,
    code,
    location: String(location || ""),
    message,
    excerpt: String(excerpt || "").slice(0, 240)
  });
}

function createValidators() {
  const ajv = new Ajv2020({ allErrors: true, strict: true });
  addFormats(ajv);
  return {
    blueprint: ajv.compile(blueprintSchema),
    registry: ajv.compile(registrySchema),
    visibleCase: ajv.compile(visibleCaseSchema)
  };
}

const schemaValidators = createValidators();

function formatSchemaErrors(errors) {
  return asArray(errors).map(function (error) {
    const location = error.instancePath || "/";
    return location + " " + error.message;
  });
}

function scanStrings(value, onText, location) {
  const at = location || "$";
  if (typeof value === "string") {
    onText(value, at);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach(function (item, index) {
      scanStrings(item, onText, at + "[" + index + "]");
    });
    return;
  }
  if (isObject(value)) {
    Object.keys(value).forEach(function (key) {
      scanStrings(value[key], onText, at + "." + key);
    });
  }
}

function unresolvedFields(value) {
  const matches = [];
  scanStrings(value, function (text, location) {
    if (PLACEHOLDER_PATTERN.test(text)) matches.push(location + ": " + text.slice(0, 100));
  });
  return matches;
}

function allClinicalConcepts(clinicalTruth) {
  if (!isObject(clinicalTruth)) return [];
  const concepts = [];
  if (isObject(clinicalTruth.leadingDiagnosis)) concepts.push(clinicalTruth.leadingDiagnosis);
  [
    "differentials",
    "essentialClues",
    "discriminators",
    "redFlags",
    "safetyThresholds",
    "criticalActions",
    "unsafeActions"
  ].forEach(function (field) {
    concepts.push.apply(concepts, asArray(clinicalTruth[field]).filter(isObject));
  });
  if (isObject(clinicalTruth.scopeBoundary)) concepts.push(clinicalTruth.scopeBoundary);
  return concepts;
}

function validateBlueprint(blueprint, options) {
  const errors = [];
  const blockers = [];
  const now = options && options.today ? new Date(options.today) : new Date();

  try {
    if (!schemaValidators.blueprint(blueprint)) {
      errors.push.apply(errors, formatSchemaErrors(schemaValidators.blueprint.errors));
    }
  } catch (error) {
    errors.push("schema validation failed safely: " + error.message);
  }

  if (!isObject(blueprint)) {
    blockers.push("A hidden blueprint is required");
    return { errors, blockers, blueprintReady: false, ready: false };
  }

  scanStrings(blueprint, function (value, location) {
    if (!isText(value)) errors.push("blank or invisible-only text at " + location);
  });

  const placeholders = unresolvedFields(blueprint);
  placeholders.forEach(function (match) {
    blockers.push("unresolved authoring field at " + match);
  });

  const encodedCaseNumber = Number((String(blueprint.caseId || "").match(/^case-([0-9]{3})$/) || [])[1]);
  if (Number.isInteger(encodedCaseNumber) && isObject(blueprint.station) &&
      blueprint.station.displayNumber !== "Case " + encodedCaseNumber) {
      errors.push("station.displayNumber must be derived from caseId");
  }
  if (isObject(blueprint.station)) {
    const learnerMetadata = [blueprint.station.title, blueprint.station.statusLabel, blueprint.station.note].filter(isText).join(" ");
    if (learnerMetadataMisrepresents(learnerMetadata)) {
      errors.push("learner-facing metadata cannot claim that original practice content is official, real, recalled or leaked AMC material");
    }
    if (blueprint.releaseStatus === "audited" &&
        (!/\b(?:original|simulated|practice|synthetic)\b/i.test(String(blueprint.station.note || "")) ||
         !/\bnot\b[^.]{0,120}\b(?:official|AMC\s+(?:exam(?:ination)?|station|material)|marking script)\b/i.test(String(blueprint.station.note || "")))) {
      errors.push("an audited case note must identify the station as original practice or simulation and state that it is not official AMC material");
    }
  }

  const tasks = asArray(blueprint.tasks).filter(isObject);
  const taskIds = tasks.map(function (task) { return task.id; }).filter(isText);
  if (!unique(taskIds)) errors.push("task IDs must be unique");
  const stemLines = asArray(blueprint.stem && blueprint.stem.lines).filter(isObject);
  const stemLineIds = stemLines.map(function (item) { return item.id; }).filter(isText);
  const stemPurposes = stemLines.map(function (item) { return item.purpose; }).filter(isText);
  if (!unique(stemLineIds)) errors.push("Stem line IDs must be unique");
  if (!stemPurposes.includes("role_setting")) errors.push("Stem lines must include purpose role_setting");
  if (asArray(blueprint.participants).length > 0 && !stemPurposes.includes("person_presentation")) {
    errors.push("a participant station must include a person_presentation Stem line");
  }
  if (asArray(blueprint.participants).length === 0 &&
      !stemPurposes.some(function (purpose) { return ["person_presentation", "provided_information", "task_context"].includes(purpose); })) {
    errors.push("a participant-free station needs provided information or task context in the Stem");
  }
  if (tasks.length) {
    const totalMinutes = tasks.reduce(function (sum, task) {
      return sum + (typeof task.internalMinutes === "number" ? task.internalMinutes : 0);
    }, 0);
    if (Math.abs(totalMinutes - 8) > 0.001) errors.push("task internalMinutes must total exactly 8");
    const visibleMinutes = tasks.filter(function (task) { return isText(task.visibleTiming); }).map(function (task) {
      return parseMinutes(task.visibleTiming);
    });
    if (visibleMinutes.some(function (minutes) { return minutes === null || minutes <= 0; })) {
      errors.push("visible task timings must contain a positive duration");
    }
    if (visibleMinutes.reduce(function (sum, minutes) { return sum + (minutes || 0); }, 0) > 8.001) {
      errors.push("visible task timings cannot total more than eight minutes");
    }
    tasks.filter(function (task) { return isText(task.visibleTiming); }).forEach(function (task) {
      if (Math.abs(parseMinutes(task.visibleTiming) - task.internalMinutes) > 0.001) {
        errors.push(task.id + " visible timing must match its internal timing allocation");
      }
    });
    tasks.forEach(function (task) {
      const stated = embeddedMinutes(task.text);
      if (stated.length > 1) {
        errors.push(task.id + " task text contains more than one timing instruction");
      } else if (stated.length === 1) {
        if (!isText(task.visibleTiming)) {
          errors.push(task.id + " task text contains an uncontrolled timing instruction");
        } else if (Math.abs(stated[0] - parseMinutes(task.visibleTiming)) > 0.001) {
          errors.push(task.id + " task-text timing must match visibleTiming");
        }
      }
      const taskText = String(task.text || "").trim();
      const actionVerb = String(task.actionVerb || "").trim();
      if (actionVerb && !new RegExp("^" + regexEscape(actionVerb) + "(?:\\b|\\s)", "i").test(taskText)) {
        errors.push(task.id + " actionVerb must exactly describe the opening action in its task text");
      }
      const taskRecipient = normalizeRegistryText(task.recipient);
      const stationRecipient = normalizeRegistryText(blueprint.station && blueprint.station.recipient);
      const normalizedTaskText = normalizeRegistryText(taskText);
      if (taskRecipient && !normalizedTaskText.includes(taskRecipient) &&
          !(stationRecipient && (stationRecipient === taskRecipient || stationRecipient.split(" ").includes(taskRecipient)))) {
        errors.push(task.id + " recipient is neither named in the task nor consistent with the station recipient");
      }
    });
    stemLines.forEach(function (line) {
      if (embeddedInstructionalMinutes(line.text).length > 0) {
        errors.push(line.id + " Stem line contains an uncontrolled timing instruction");
      }
    });
    const primary = tasks.filter(function (task) { return task.primary === true; });
    if (primary.length !== 1) errors.push("exactly one task must be primary");
    if (primary.length === 1 && isObject(blueprint.station)) {
      if (primary[0].assessmentArea !== blueprint.station.predominantArea) {
        errors.push("the primary task assessmentArea must equal station.predominantArea");
      }
      const primaryMinutes = primary[0].internalMinutes;
      if (tasks.length > 1 && tasks.some(function (task) { return !task.primary && task.internalMinutes >= primaryMinutes; })) {
        errors.push("the primary task must receive more internal time than every secondary task");
      }
    }
  }

  const clinicalConcepts = allClinicalConcepts(blueprint.clinicalTruth);
  const clinicalIds = clinicalConcepts.map(function (concept) { return concept.id; }).filter(isText);
  const safetyConceptIds = ["redFlags", "safetyThresholds", "criticalActions", "unsafeActions"].flatMap(function (field) {
    return asArray(blueprint.clinicalTruth && blueprint.clinicalTruth[field]).filter(isObject)
      .map(function (concept) { return concept.id; }).filter(isText);
  });
  const safetyConceptIdSet = new Set(safetyConceptIds);
  if (!unique(clinicalIds)) errors.push("clinical concept IDs must be unique");
  if (isObject(blueprint.station) && CLINICAL_GRAMMARS.has(blueprint.station.grammar)) {
    if (asArray(blueprint.clinicalTruth && blueprint.clinicalTruth.differentials).length < 2) {
      errors.push("clinicalTruth.differentials needs at least two alternatives for this station grammar");
    }
  }

  const participants = asArray(blueprint.participants).filter(isObject);
  const participantIds = participants.map(function (item) { return item.id; }).filter(isText);
  const speakerLabels = participants.map(function (item) { return item.speakerLabel; }).filter(isText);
  const allAddressTerms = participants.flatMap(function (item) {
    return asArray(item.addressTerms).filter(isText).map(function (term) { return term.trim().toLowerCase(); });
  });
  if (!unique(participantIds)) errors.push("participant IDs must be unique");
  if (!unique(speakerLabels)) errors.push("participant speakerLabel values must be unique");
  if (!unique(allAddressTerms)) errors.push("participant addressTerms must be unique across participants");
  if (speakerLabels.some(function (label) { return ["Doctor", "Examiner", "Action"].includes(label); })) {
    errors.push("participant speakerLabel cannot collide with Doctor, Examiner, or Action");
  }
  if (isObject(blueprint.station) &&
      ["consultation", "history", "diagnostic_formulation", "management_counselling_education", "procedure_consent", "mental_state_risk", "telephone_third_party", "mixed"].includes(blueprint.station.grammar) &&
      participants.length === 0) {
    errors.push("this station grammar requires at least one declared participant");
  }
  const participantIdSet = new Set(participantIds);
  const clinicalIdSet = new Set(clinicalIds);
  const defaultInformationParticipantId = blueprint.interaction && blueprint.interaction.defaultInformationParticipantId;
  if (participants.length === 0 && defaultInformationParticipantId !== null) {
    errors.push("a participant-free station requires a null default information participant");
  } else if (participants.length > 0 && !participantIdSet.has(defaultInformationParticipantId)) {
    errors.push("the default information participant must be a declared participant");
  }
  participants.forEach(function (participant) {
    if (participant.identityRequired === true && !isObject(participant.identityResponse)) {
      errors.push(participant.id + " requires an identityResponse");
    }
    if (isObject(participant.identityResponse) && !identityResponseIsAdministrative(participant.identityResponse)) {
      errors.push(participant.id + " identityResponse must contain only the controlled name and date of birth");
    }
    if (isObject(participant.identityResponse)) {
      asArray(participant.addressTerms).filter(isText).forEach(function (addressTerm) {
        if (!addressTermMatchesIdentity(addressTerm, participant.identityResponse.fullName)) {
          errors.push(participant.id + " address term " + JSON.stringify(addressTerm) + " does not match the controlled identity name");
        }
      });
    }
    asArray(participant.disclosures).forEach(function (disclosure) {
      asArray(disclosure && disclosure.factIds).forEach(function (factId) {
        if (!clinicalIdSet.has(factId)) {
          errors.push("disclosure " + disclosure.id + " refers to unknown clinical concept " + factId);
        }
      });
      if (disclosure && NEGATIVE_RESPONSE_USE_PATTERN.test(String(disclosure.responseUse || ""))) {
        errors.push(disclosure.id + " describes non-use of the response");
      }
      if (disclosure && ["open_question", "specific_question"].includes(disclosure.triggerType) && !isText(disclosure.nextDoctorLineId)) {
        errors.push(disclosure.id + " requires a nextDoctorLineId for a question-triggered response");
      }
    });
    requireUniqueObjectIds(participant.concerns, participant.id + " concern", errors);
    requireUniqueObjectIds(participant.disclosures, participant.id + " disclosure", errors);
  });

  const identity = blueprint.interaction && blueprint.interaction.identity;
  const identityParticipantIds = asArray(identity && identity.participantIds);
  if (identity && ["direct", "third_party"].includes(identity.mode) && identityParticipantIds.length === 0) {
    errors.push(identity.mode + " identity requires at least one responding participant");
  }
  if (identity && ["direct", "third_party"].includes(identity.mode) &&
      !isAdministrativeIdentityRequest(identity.verificationText)) {
    errors.push(identity.mode + " identity verification must use the controlled administrative name-and-date-of-birth grammar");
  }
  if (identity && identity.mode === "record_or_wristband" &&
      !isRecordOrWristbandIdentityEvidence(identity.verificationText)) {
    errors.push("record_or_wristband identity requires positive record, wristband or identifier-check evidence");
  }
  if (identity && identity.mode === "not_possible_with_reason" &&
      !isNotPossibleIdentityEvidence(identity.verificationText)) {
    errors.push("not_possible_with_reason identity requires positive visible evidence of why identity cannot be established");
  }
  if (identity && identity.mode === "not_applicable" && participants.length > 0) {
    errors.push("identity can be not_applicable only when the station has no participants");
  }
  if (participants.length === 0 && identity && identity.mode !== "not_applicable") {
    errors.push("a participant-free station must use not_applicable identity mode");
  }
  asArray(identity && identity.participantIds).forEach(function (participantId) {
    if (!participantIdSet.has(participantId)) {
      errors.push("identity refers to unknown participant " + participantId);
      return;
    }
    if (identity && ["direct", "third_party"].includes(identity.mode)) {
      const participant = participants.find(function (item) { return item.id === participantId; });
      if (!participant || participant.identityRequired !== true || !isObject(participant.identityResponse)) {
        errors.push(identity.mode + " identity participant " + participantId + " requires an exact identity response");
      }
    }
  });
  if (identity && identity.mode === "direct" && isObject(blueprint.station)) {
    const directParticipant = participants.find(function (participant) {
      return participant.id === defaultInformationParticipantId;
    });
    const fullNameParts = normalizeRegistryText(directParticipant && directParticipant.identityResponse &&
      directParticipant.identityResponse.fullName).split(" ").filter(Boolean);
    const recipientParts = normalizeRegistryText(blueprint.station.recipient).split(" ")
      .filter(function (part) { return part && !["mr", "mrs", "ms", "miss", "dr"].includes(part); });
    const compatibleName = recipientParts.length >= 2 && fullNameParts.length >= 2 &&
      recipientParts[0] === fullNameParts[0] && recipientParts[recipientParts.length - 1] === fullNameParts[fullNameParts.length - 1] &&
      recipientParts.every(function (part) { return fullNameParts.includes(part); });
    if (!directParticipant || !isObject(directParticipant.identityResponse) || !compatibleName) {
      errors.push("direct identity fullName must match the station recipient, allowing recorded middle names");
    }
    const statedAgeMatch = asArray(blueprint.stem && blueprint.stem.lines).map(function (line) { return line && line.text; })
      .join(" ").match(/\b([0-9]{1,3})[- ]year[- ]old\b/i);
    const birthDate = calendarDateFromText(directParticipant && directParticipant.identityResponse &&
      directParticipant.identityResponse.dateOfBirthText);
    if (statedAgeMatch && birthDate) {
      const today = new Date();
      let calculatedAge = today.getUTCFullYear() - birthDate.getUTCFullYear();
      const birthdayPassed = today.getUTCMonth() > birthDate.getUTCMonth() ||
        (today.getUTCMonth() === birthDate.getUTCMonth() && today.getUTCDate() >= birthDate.getUTCDate());
      if (!birthdayPassed) calculatedAge -= 1;
      if (Math.abs(Number(statedAgeMatch[1]) - calculatedAge) > 1) {
        errors.push("the age stated in the Stem conflicts with the controlled date of birth");
      }
    }
  }
  asArray(blueprint.interaction && blueprint.interaction.consents).forEach(function (consent) {
    if (consent && !participantIdSet.has(consent.participantId)) {
      errors.push("consent " + consent.id + " refers to unknown participant " + consent.participantId);
    }
  });
  const directAddresses = asArray(blueprint.interaction && blueprint.interaction.directAddresses).filter(isObject);
  directAddresses.forEach(function (address) {
    const participant = participants.find(function (item) { return item.id === address.participantId; });
    if (!participant) {
      errors.push("direct address refers to unknown participant " + address.participantId);
    } else if (!asArray(participant.addressTerms).includes(address.addressTerm)) {
      errors.push("direct address term " + JSON.stringify(address.addressTerm) + " is not controlled for " + address.participantId);
    }
  });
  if (!unique(directAddresses.map(function (address) {
    return [address.lineId, address.participantId, normalizeRegistryText(address.addressTerm)].join("|");
  }))) errors.push("direct address controls must be unique");
  const consentControls = asArray(blueprint.interaction && blueprint.interaction.consents);
  const informationRequests = asArray(blueprint.interaction && blueprint.interaction.informationRequests);
  const examinerReleases = asArray(blueprint.examiner && blueprint.examiner.releases);
  const examinerPrompts = asArray(blueprint.examiner && blueprint.examiner.scheduledPrompts);
  requireUniqueObjectIds(consentControls, "consent", errors);
  requireUniqueFieldValues(consentControls, "requestLineId", "consent", errors);
  requireUniqueFieldValues(consentControls, "responseLineId", "consent", errors);
  requireUniqueObjectIds(informationRequests, "information request", errors);
  requireUniqueFieldValues(informationRequests, "lineId", "information request", errors);
  requireUniqueFieldValues(informationRequests, "expectedResponseLineId", "information request", errors);
  informationRequests.forEach(function (request) {
    if (!participantIdSet.has(request && request.addressedParticipantId)) {
      errors.push((request && request.id || "information request") + " refers to unknown addressed participant " + (request && request.addressedParticipantId));
    }
    if (!participantIdSet.has(request && request.responseParticipantId)) {
      errors.push((request && request.id || "information request") + " refers to unknown response participant " + (request && request.responseParticipantId));
    }
    if (request && request.addressedParticipantId !== request.responseParticipantId) {
      errors.push(request.id + " response participant must be the addressed participant");
    }
    if (request && NEGATIVE_RESPONSE_USE_PATTERN.test(String(request.responseUse || ""))) {
      errors.push(request.id + " describes non-use of the response");
    }
  });
  requireUniqueObjectIds(examinerReleases, "Examiner release", errors);
  requireUniqueFieldValues(examinerReleases, "requestLineId", "Examiner release", errors);
  requireUniqueFieldValues(examinerReleases, "responseLineId", "Examiner release", errors);
  requireUniqueObjectIds(examinerPrompts, "Examiner prompt", errors);
  requireUniqueFieldValues(examinerPrompts, "responseLineId", "Examiner prompt", errors);
  requireUniqueObjectIds(blueprint.marking && blueprint.marking.keySteps, "marking key step", errors);
  requireUniqueObjectIds(blueprint.marking && blueprint.marking.projectSafetyErrors, "project safety error", errors);
  const domainNames = asArray(blueprint.marking && blueprint.marking.domains)
    .filter(isObject).map(function (domain) { return domain.name; }).filter(isText);
  if (!unique(domainNames)) errors.push("marking domain names must be unique");
  const predominantDomainOptions = {
    "History Taking": ["History"],
    "Examination": ["Choice and technique of examination, organisation and sequence", "Accuracy of examination", "Familiarity with test equipment", "Performance of procedure"],
    "Diagnostic Formulation": ["Diagnosis/differential diagnoses"],
    "Management/Counselling/Education": ["Management plan", "Patient counselling/education", "Explanation of procedure"]
  };
  const requiredPredominantDomains = predominantDomainOptions[blueprint.station && blueprint.station.predominantArea] || [];
  if (requiredPredominantDomains.length && !requiredPredominantDomains.some(function (name) { return domainNames.includes(name); })) {
    errors.push("marking domains do not represent the station's predominant assessment area");
  }
  asArray(blueprint.marking && blueprint.marking.domains).forEach(function (domain) {
    asArray(domain && domain.taskIds).forEach(function (taskId) {
      if (!taskIds.includes(taskId)) errors.push(domain.name + " domain refers to unknown task " + taskId);
    });
  });
  const consultationStation = isObject(blueprint.station) &&
    ["consultation", "history", "diagnostic_formulation", "management_counselling_education", "mental_state_risk", "telephone_third_party", "mixed"].includes(blueprint.station.grammar);
  const procedureStation = isObject(blueprint.station) && blueprint.station.grammar === "procedure_consent";
  if (consultationStation && !asArray(blueprint.interaction && blueprint.interaction.consents).some(function (consent) {
    return consent && consent.scope === "consultation";
  })) {
    errors.push("this station grammar requires a consultation consent control");
  }
  if (procedureStation && !asArray(blueprint.interaction && blueprint.interaction.consents).some(function (consent) {
    return consent && consent.scope === "procedure";
  })) {
    errors.push("a procedure-consent station requires a procedure consent control");
  }
  if ((consultationStation || procedureStation) &&
      asArray(blueprint.interaction && blueprint.interaction.informationRequests).length === 0) {
    errors.push("this station grammar requires mapped information requests");
  }

  const sources = asArray(blueprint.sourceBasis && blueprint.sourceBasis.sources).filter(isObject);
  const claims = asArray(blueprint.sourceBasis && blueprint.sourceBasis.claimMap).filter(isObject);
  const sourceCatalogueByUrl = new Map(asArray(authoritativeSourceCatalog.entries).filter(isObject).map(function (entry) {
    return [entry.url, entry];
  }));
  const sourceIds = sources.map(function (source) { return source.id; }).filter(isText);
  if (!unique(sourceIds)) errors.push("source IDs must be unique");
  const sourceIdSet = new Set(sourceIds);
  if (!sources.some(function (source) {
    return source.sourceType === "exam_specification" &&
      source.organisation === "Australian Medical Council" &&
      /^https:\/\/(?:www\.)?amc\.org\.au\//i.test(String(source.url || ""));
  })) {
    blockers.push("an authoritative AMC exam specification source is required");
  }
  if (!sources.some(function (source) {
    return source.sourceType === "assessment_domains" &&
      source.organisation === "Australian Medical Council" &&
      /^https:\/\/(?:www\.)?amc\.org\.au\//i.test(String(source.url || ""));
  })) {
    blockers.push("the authoritative AMC assessment-domains source is required");
  }
  const hasClinicalClaims = claims.some(function (claim) { return claim.claimType !== "exam_standard"; });
  if (hasClinicalClaims && !sources.some(function (source) {
    return source.jurisdiction === "Australia" &&
      ["australian_clinical_guideline", "australian_regulation", "product_information"].includes(source.sourceType);
  })) {
    blockers.push("an authoritative Australian clinical source is required");
  }
  sources.forEach(function (source) {
    if (!isText(source.reviewDue)) return;
    const due = new Date(source.reviewDue + "T23:59:59Z");
    if (!Number.isNaN(due.valueOf()) && due < now) {
      blockers.push(source.id + " is past its source review due date");
    }
    const accessed = isText(source.accessed) ? new Date(source.accessed + "T00:00:00Z") : null;
    if (accessed && !Number.isNaN(accessed.valueOf()) && !Number.isNaN(due.valueOf()) && due < accessed) {
      errors.push(source.id + " reviewDue precedes its accessed date");
    }
    if (accessed && !Number.isNaN(accessed.valueOf()) && accessed > now) {
      errors.push(source.id + " accessed date is in the future");
    }
    if (source.publishedOrUpdated !== "undated") {
      const published = new Date(source.publishedOrUpdated + "T00:00:00Z");
      if (!Number.isNaN(published.valueOf()) && published > now) {
        errors.push(source.id + " publication or update date is in the future");
      }
      if (accessed && !Number.isNaN(published.valueOf()) && !Number.isNaN(accessed.valueOf()) && published > accessed) {
        errors.push(source.id + " publication or update date follows its accessed date");
      }
    }
    if (accessed && !Number.isNaN(accessed.valueOf()) && !Number.isNaN(due.valueOf()) &&
        (due.valueOf() - accessed.valueOf()) > 550 * 24 * 60 * 60 * 1000) {
      errors.push(source.id + " review interval exceeds 550 days");
    }
    try {
      const hostname = new URL(source.url).hostname.toLowerCase();
      if (!hostname.includes(".") || /(?:^|\.)(?:invalid|example|test|localhost)(?:\.|$)/.test(hostname)) {
        errors.push(source.id + " uses a non-verifiable source host");
      }
      const allowedHosts = AUTHORITATIVE_SOURCE_HOSTS[source.sourceType] || [];
      if (!allowedHosts.some(function (allowedRoot) { return hostMatches(hostname, allowedRoot); })) {
        errors.push(source.id + " source host is not in the reviewed authority catalogue for " + source.sourceType);
      }
      const catalogueEntry = sourceCatalogueByUrl.get(source.url);
      if (!catalogueEntry) {
        errors.push(source.id + " URL is not an exact entry in the reviewed source catalogue");
      } else if (catalogueEntry.sourceType !== source.sourceType || catalogueEntry.organisation !== source.organisation ||
          catalogueEntry.title !== source.title || catalogueEntry.publishedOrUpdated !== source.publishedOrUpdated ||
          catalogueEntry.jurisdiction !== source.jurisdiction) {
        errors.push(source.id + " metadata does not match its reviewed source-catalogue entry");
      }
    } catch (error) {
      errors.push(source.id + " has an invalid source URL");
    }
  });

  const claimIds = claims.map(function (claim) { return claim.id; }).filter(isText);
  if (!unique(claimIds)) errors.push("source claim IDs must be unique");
  const claimIdSet = new Set(claimIds);
  const claimByIdForConcept = new Map(claims.map(function (claim) { return [claim.id, claim]; }));
  function requireConceptClaimTypes(concepts, allowedTypes, label) {
    asArray(concepts).filter(isObject).forEach(function (concept) {
      if (!asArray(concept.sourceClaimIds).some(function (claimId) {
        const claim = claimByIdForConcept.get(claimId);
        return claim && allowedTypes.includes(claim.claimType);
      })) {
        errors.push(concept.id + " " + label + " must cite an applicable clinical claim type, not exam-standard evidence alone");
      }
    });
  }
  requireConceptClaimTypes(isObject(blueprint.clinicalTruth && blueprint.clinicalTruth.leadingDiagnosis) ?
    [blueprint.clinicalTruth.leadingDiagnosis] : [], ["diagnosis"], "leading diagnosis");
  requireConceptClaimTypes(blueprint.clinicalTruth && blueprint.clinicalTruth.differentials,
    ["diagnosis", "differential"], "differential");
  requireConceptClaimTypes([].concat(asArray(blueprint.clinicalTruth && blueprint.clinicalTruth.essentialClues),
    asArray(blueprint.clinicalTruth && blueprint.clinicalTruth.discriminators)),
  ["diagnosis", "differential", "investigation"], "diagnostic evidence");
  requireConceptClaimTypes(blueprint.clinicalTruth && blueprint.clinicalTruth.redFlags,
    ["diagnosis", "differential", "threshold", "disposition"], "red flag");
  requireConceptClaimTypes(blueprint.clinicalTruth && blueprint.clinicalTruth.safetyThresholds,
    ["threshold", "treatment", "contraindication", "disposition"], "safety threshold");
  requireConceptClaimTypes(blueprint.clinicalTruth && blueprint.clinicalTruth.criticalActions,
    ["investigation", "treatment", "dose", "contraindication", "disposition", "communication"], "critical action");
  requireConceptClaimTypes(blueprint.clinicalTruth && blueprint.clinicalTruth.unsafeActions,
    ["threshold", "treatment", "dose", "contraindication", "disposition"], "unsafe action");
  requireConceptClaimTypes(isObject(blueprint.clinicalTruth && blueprint.clinicalTruth.scopeBoundary) ?
    [blueprint.clinicalTruth.scopeBoundary] : [],
  ["diagnosis", "differential", "threshold", "investigation", "treatment", "dose", "contraindication", "disposition", "communication"],
  "scope boundary");
  claims.forEach(function (claim) {
    const locatorSourceIds = asArray(claim.sourceLocators).filter(isObject).map(function (item) { return item.sourceId; }).filter(isText);
    if (!unique(locatorSourceIds) || locatorSourceIds.length !== asArray(claim.sourceIds).length ||
        asArray(claim.sourceIds).some(function (sourceId) { return !locatorSourceIds.includes(sourceId); })) {
      errors.push(claim.id + " must provide exactly one locator for every cited source");
    }
    if (asArray(claim.sourceLocators).some(function (item) { return !item || !isText(item.locator); })) {
      errors.push(claim.id + " source locators must contain non-blank section, recommendation or page references");
    }
    asArray(claim.sourceIds).forEach(function (sourceId) {
      if (!sourceIdSet.has(sourceId)) errors.push(claim.id + " refers to unknown source " + sourceId);
    });
    asArray(claim.clinicalConceptIds).forEach(function (clinicalId) {
      if (!clinicalIdSet.has(clinicalId)) errors.push(claim.id + " refers to unknown clinical concept " + clinicalId);
    });
    asArray(claim.taskIds).forEach(function (taskId) {
      if (!taskIds.includes(taskId)) errors.push(claim.id + " refers to unknown task " + taskId);
    });
    if (claim.claimType === "exam_standard" && !asArray(claim.sourceIds).some(function (sourceId) {
      const source = sources.find(function (item) { return item.id === sourceId; });
      return source && source.sourceType === "exam_specification" &&
        source.organisation === "Australian Medical Council" &&
        /^https:\/\/(?:www\.)?amc\.org\.au\//i.test(String(source.url || ""));
    })) {
      errors.push(claim.id + " is an exam-standard claim without an exam-specification source");
    }
    if (claim.claimType !== "exam_standard" && !asArray(claim.sourceIds).some(function (sourceId) {
      const source = sources.find(function (item) { return item.id === sourceId; });
      return source && source.jurisdiction === "Australia" &&
        ["australian_clinical_guideline", "australian_regulation", "product_information"].includes(source.sourceType);
    })) {
      errors.push(claim.id + " is a clinical claim without an applicable Australian clinical source");
    }
    const compatibleClinicalSourceTypes = {
      diagnosis: ["australian_clinical_guideline", "australian_regulation"],
      differential: ["australian_clinical_guideline", "australian_regulation"],
      threshold: ["australian_clinical_guideline", "australian_regulation", "product_information"],
      investigation: ["australian_clinical_guideline", "australian_regulation"],
      treatment: ["australian_clinical_guideline", "australian_regulation", "product_information"],
      dose: ["australian_clinical_guideline", "australian_regulation", "product_information"],
      contraindication: ["australian_clinical_guideline", "australian_regulation", "product_information"],
      disposition: ["australian_clinical_guideline", "australian_regulation"],
      communication: ["australian_clinical_guideline", "australian_regulation"]
    };
    if (claim.claimType !== "exam_standard" && !asArray(claim.sourceIds).some(function (sourceId) {
      const source = sources.find(function (item) { return item.id === sourceId; });
      return source && asArray(compatibleClinicalSourceTypes[claim.claimType]).includes(source.sourceType);
    })) {
      errors.push(claim.id + " has no source type applicable to its clinical claim type");
    }
    const citedSources = asArray(claim.sourceIds).map(function (sourceId) {
      return sources.find(function (source) { return source.id === sourceId; });
    }).filter(Boolean);
    if (citedSources.some(function (source) {
      const catalogueEntry = sourceCatalogueByUrl.get(source.url);
      return !catalogueEntry || !asArray(catalogueEntry.approvedClaimTypes).includes(claim.claimType);
    })) {
      errors.push(claim.id + " cites a source outside that source's reviewed claim scope");
    }
    if (claim.claimType !== "exam_standard" && asArray(claim.taskIds).length === 0) {
      errors.push(claim.id + " is a clinical claim without controlled task evidence");
    }
    asArray(claim.blueprintRefs).forEach(function (reference) {
      if (!ALLOWED_BLUEPRINT_REFS.has(reference)) errors.push(claim.id + " uses unknown blueprint reference " + reference);
    });
    if (claim.claimType !== "exam_standard" &&
        (asArray(claim.runLineIds).length === 0 || asArray(claim.clinicalConceptIds).length === 0)) {
      errors.push(claim.id + " is a clinical claim without run-line and clinical-concept evidence");
    }
  });
  clinicalConcepts.forEach(function (concept) {
    asArray(concept.sourceClaimIds).forEach(function (claimId) {
      if (!claimIdSet.has(claimId)) errors.push(concept.id + " refers to unknown source claim " + claimId);
    });
  });

  asArray(blueprint.marking && blueprint.marking.keySteps).forEach(function (step) {
    asArray(step && step.taskIds).forEach(function (taskId) {
      if (!taskIds.includes(taskId)) errors.push(step.id + " refers to unknown task " + taskId);
    });
    asArray(step && step.sourceClaimIds).forEach(function (claimId) {
      if (!claimIdSet.has(claimId)) errors.push(step.id + " refers to unknown source claim " + claimId);
    });
  });
  asArray(blueprint.marking && blueprint.marking.sourceClaimIds).forEach(function (claimId) {
    if (!claimIdSet.has(claimId)) errors.push("marking refers to unknown source claim " + claimId);
  });
  if (!asArray(blueprint.marking && blueprint.marking.sourceClaimIds).some(function (claimId) {
    const claim = claims.find(function (item) { return item.id === claimId; });
    return claim && claim.claimType === "exam_standard";
  })) {
    errors.push("marking must cite an AMC-sourced exam_standard claim");
  }
  asArray(blueprint.marking && blueprint.marking.domains).forEach(function (domain) {
    asArray(domain && domain.sourceClaimIds).forEach(function (claimId) {
      if (!claimIdSet.has(claimId)) errors.push(domain.name + " domain refers to unknown source claim " + claimId);
    });
    if (!asArray(domain && domain.sourceClaimIds).some(function (claimId) {
      const claim = claims.find(function (item) { return item.id === claimId; });
      return claim && claim.claimType === "exam_standard";
    })) {
      errors.push(domain.name + " domain must cite an AMC-sourced exam_standard claim");
    }
    if (!asArray(domain && domain.sourceClaimIds).some(function (claimId) {
      const claim = claims.find(function (item) { return item.id === claimId; });
      return claim && claim.claimType === "exam_standard" && asArray(claim.sourceIds).some(function (sourceId) {
        const source = sources.find(function (item) { return item.id === sourceId; });
        return source && source.sourceType === "assessment_domains" && source.organisation === "Australian Medical Council";
      });
    })) {
      errors.push(domain.name + " domain must cite the AMC assessment-domains source");
    }
  });
  asArray(blueprint.marking && blueprint.marking.projectSafetyErrors).forEach(function (item) {
    asArray(item && item.safetyConceptIds).forEach(function (conceptId) {
      if (!safetyConceptIdSet.has(conceptId)) {
        errors.push(item.id + " refers to an unknown or non-safety clinical concept " + conceptId);
      }
    });
    asArray(item && item.sourceClaimIds).forEach(function (claimId) {
      if (!claimIdSet.has(claimId)) errors.push(item.id + " refers to unknown source claim " + claimId);
    });
    if (!asArray(item && item.sourceClaimIds).some(function (claimId) {
      const claim = claims.find(function (candidate) { return candidate.id === claimId; });
      return claim && claim.claimType !== "exam_standard";
    })) {
      errors.push(item.id + " must cite at least one applicable clinical claim");
    }
  });
  const globalRating = blueprint.marking && blueprint.marking.globalRating;
  if (globalRating && (GLOBAL_STANDARD_THRESHOLD_PATTERN.test(String(globalRating.passStandard || "")) ||
      GLOBAL_STANDARD_THRESHOLD_PATTERN.test(String(globalRating.failStandard || "")))) {
    errors.push("station-specific global standards must describe behaviour without restating or contradicting rating thresholds");
  }

  const taskEvidence = asArray(blueprint.performance && blueprint.performance.taskEvidence).filter(isObject);
  const evidenceTaskIds = taskEvidence.map(function (item) { return item.taskId; }).filter(isText);
  if (!unique(evidenceTaskIds)) errors.push("performance.taskEvidence task IDs must be unique");
  taskIds.forEach(function (taskId) {
    if (!evidenceTaskIds.includes(taskId)) errors.push("performance.taskEvidence is missing " + taskId);
  });
  evidenceTaskIds.forEach(function (taskId) {
    if (!taskIds.includes(taskId)) errors.push("performance.taskEvidence refers to unknown task " + taskId);
  });

  if (blueprint.releaseStatus !== "audited") blockers.push("releaseStatus is not audited");
  const qa = blueprint.qa;
  const currentReviewScopeSha256 = blueprintReviewScopeHash(blueprint);
  const latestSourceMoment = sources.reduce(function (latest, source) {
    const candidates = [source.accessed, source.publishedOrUpdated === "undated" ? null : source.publishedOrUpdated]
      .filter(isText).map(function (date) { return new Date(date + "T00:00:00Z").valueOf(); })
      .filter(Number.isFinite);
    return candidates.length ? Math.max(latest, Math.max.apply(Math, candidates)) : latest;
  }, 0);
  const requiredQaEvidenceTypes = {
    blueprint: ["automated_test"],
    stemNeutrality: ["automated_test", "line_review"],
    taskAlignment: ["automated_test", "line_review"],
    conversation: ["line_review"],
    participantDisclosure: ["line_review"],
    examinerRelease: ["line_review"],
    amcLevel: ["line_review", "source_review"],
    timing: ["listen_test"],
    clinical: ["source_review"],
    sources: ["source_review"],
    finalQa: ["audit_report"]
  };
  QA_FIELDS.forEach(function (field) {
    const gate = qa && qa[field];
    if (!isObject(gate) || gate.status !== "pass") {
      blockers.push("QA gate " + field + " has not passed");
      return;
    }
    if (!isText(gate.method) || !isText(gate.reviewer) || !isText(gate.reviewedAt) || asArray(gate.evidence).length === 0) {
      blockers.push("QA gate " + field + " lacks reviewer, method, time, or evidence");
    }
    if (gate.reviewScopeSha256 !== currentReviewScopeSha256) {
      blockers.push("QA gate " + field + " is not bound to the current review scope");
    }
    const evidenceTypes = asArray(gate.evidence).filter(isObject).map(function (item) { return item.type; });
    if (asArray(gate.evidence).some(function (item) { return !item || !isText(item.reference); })) {
      blockers.push("QA gate " + field + " contains a blank evidence reference");
    }
    if (!asArray(requiredQaEvidenceTypes[field]).some(function (type) { return evidenceTypes.includes(type); })) {
      blockers.push("QA gate " + field + " lacks the required structured evidence type");
    }
    if (isText(gate.reviewedAt)) {
      const reviewedAt = new Date(gate.reviewedAt);
      if (!Number.isNaN(reviewedAt.valueOf()) && reviewedAt > now) {
        blockers.push("QA gate " + field + " has a future review time");
      }
      if (!Number.isNaN(reviewedAt.valueOf()) && latestSourceMoment && reviewedAt.valueOf() < latestSourceMoment) {
        blockers.push("QA gate " + field + " predates the current source package");
      }
    }
  });
  const finalQaMoment = qa && qa.finalQa && isText(qa.finalQa.reviewedAt) ? new Date(qa.finalQa.reviewedAt).valueOf() : NaN;
  QA_FIELDS.filter(function (field) { return field !== "finalQa"; }).forEach(function (field) {
    const gateMoment = qa && qa[field] && isText(qa[field].reviewedAt) ? new Date(qa[field].reviewedAt).valueOf() : NaN;
    if (Number.isFinite(finalQaMoment) && Number.isFinite(gateMoment) && finalQaMoment < gateMoment) {
      blockers.push("QA gate finalQa predates " + field);
    }
  });
  if (asArray(qa && qa.blockers).length) blockers.push("qa.blockers is not empty");
  if (!qa || !isText(qa.caseContentSha256)) blockers.push("qa.caseContentSha256 is missing");
  if (!qa || !isText(qa.reviewScopeSha256)) {
    blockers.push("qa.reviewScopeSha256 is missing");
  } else if (qa.reviewScopeSha256 !== currentReviewScopeSha256) {
    blockers.push("qa.reviewScopeSha256 does not match the content reviewed by the QA gates");
  }
  if (!qa || !isText(qa.blueprintPackageSha256)) {
    blockers.push("qa.blueprintPackageSha256 is missing");
  } else if (qa.blueprintPackageSha256 !== blueprintPackageHash(blueprint)) {
    blockers.push("qa.blueprintPackageSha256 does not match the reviewed blueprint package");
  }

  const listen = blueprint.performance && blueprint.performance.listenTest;
  if (!listen || listen.status !== "pass" || listen.method !== "spoken_readthrough") {
    blockers.push("listen-through has not passed");
  } else if (!isText(listen.reviewer) || !isText(listen.performedAt) ||
      !Number.isInteger(listen.observedSeconds) || !isText(listen.caseContentSha256)) {
    blockers.push("listen-through lacks reviewer, time, duration, or content hash");
  } else if (listen.reviewScopeSha256 !== currentReviewScopeSha256) {
    blockers.push("listen-through is not bound to the current review scope");
  } else if (new Date(listen.performedAt) > now) {
    blockers.push("listen-through has a future review time");
  } else if (latestSourceMoment && new Date(listen.performedAt).valueOf() < latestSourceMoment) {
    blockers.push("listen-through predates the current source package");
  }
  if (listen && isText(listen.performedAt) && qa && qa.timing && isText(qa.timing.reviewedAt) &&
      new Date(qa.timing.reviewedAt).valueOf() < new Date(listen.performedAt).valueOf()) {
    blockers.push("QA gate timing predates the listen-through");
  }
  if (listen && isText(listen.performedAt) && Number.isFinite(finalQaMoment) &&
      finalQaMoment < new Date(listen.performedAt).valueOf()) {
    blockers.push("QA gate finalQa predates the listen-through");
  }
  if (taskEvidence.some(function (item) { return item.completed !== true; })) {
    blockers.push("all task evidence must be marked completed");
  }
  const actionDurationIds = asArray(blueprint.performance && blueprint.performance.actionDurations)
    .filter(isObject).map(function (item) { return item.lineId; }).filter(isText);
  if (!unique(actionDurationIds)) errors.push("performance.actionDurations line IDs must be unique");
  if (listen && Number.isInteger(listen.observedSeconds)) {
    const mappedSeconds = taskEvidence.reduce(function (sum, item) {
      return sum + (Number.isInteger(item.observedSeconds) ? item.observedSeconds : 0);
    }, 0);
    if (mappedSeconds !== listen.observedSeconds) {
      errors.push("performance.taskEvidence observedSeconds must total the listen-through duration");
    }
  }
  if (qa && listen && isText(qa.caseContentSha256) && isText(listen.caseContentSha256) &&
      qa.caseContentSha256 !== listen.caseContentSha256) {
    errors.push("QA and listen-through content hashes must match");
  }

  const dedupedErrors = Array.from(new Set(errors));
  const dedupedBlockers = Array.from(new Set(blockers));
  const ready = dedupedErrors.length === 0 && dedupedBlockers.length === 0 && blueprint.releaseStatus === "audited";
  return {
    errors: dedupedErrors,
    blockers: dedupedBlockers,
    blueprintReady: ready,
    ready
  };
}

function markdownHasAnchor(content, fragment) {
  const target = String(fragment || "").toLowerCase();
  return String(content || "").split(/\r?\n/).some(function (line) {
    const heading = line.match(/^#{1,6}\s+(.+?)\s*#*\s*$/);
    if (!heading) return false;
    const slug = heading[1].trim().toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    return slug === target;
  });
}

function legacyCaseIdentity(item) {
  return {
    caseId: item && item.caseId,
    globalId: item && item.globalId,
    registryId: item && item.registryId,
    phaseId: item && item.phaseId,
    patternId: item && item.patternId
  };
}

function patternLockProjection(pattern) {
  return {
    id: pattern && pattern.id,
    phaseId: pattern && pattern.phaseId,
    initialCore: pattern && pattern.initialCore,
    maximumWithoutExpansion: pattern && pattern.maximumWithoutExpansion,
    logicProvenance: pattern && pattern.logicProvenance,
    dominantCapability: pattern && pattern.dominantCapability,
    coreCoverage: asArray(pattern && pattern.coreCoverage)
  };
}

function registryPolicyProjection(registry) {
  return {
    generationPolicy: registry && registry.generationPolicy,
    phases: asArray(registry && registry.phases),
    patterns: asArray(registry && registry.patterns).map(function (pattern) {
      return {
        id: pattern && pattern.id,
        phaseId: pattern && pattern.phaseId,
        title: pattern && pattern.title,
        initialCore: pattern && pattern.initialCore,
        maximumWithoutExpansion: pattern && pattern.maximumWithoutExpansion,
        objective: pattern && pattern.objective,
        dominantCapability: pattern && pattern.dominantCapability,
        coreCoverage: asArray(pattern && pattern.coreCoverage),
        reserves: asArray(pattern && pattern.reserves),
        expansionRule: pattern && pattern.expansionRule,
        logicProvenance: pattern && pattern.logicProvenance
      };
    })
  };
}

function registryPolicyHash(registry) {
  return crypto.createHash("sha256").update(JSON.stringify(canonicalise(registryPolicyProjection(registry)))).digest("hex");
}

function validatePinnedLegacyManifest(root, errors) {
  if (!root) return false;
  try {
    const rootPath = fs.realpathSync(root);
    const manifestPath = path.join(rootPath, "engine", "legacy-case-manifest.v1.1.json");
    if (!fs.existsSync(manifestPath) || !fs.statSync(manifestPath).isFile()) {
      errors.push("the pinned legacy-case manifest is missing");
      return false;
    }
    const content = fs.readFileSync(manifestPath);
    const hash = crypto.createHash("sha256").update(content).digest("hex");
    if (hash !== LEGACY_MANIFEST_RAW_SHA256) {
      errors.push("the legacy-case manifest does not match the engine-pinned review hash");
      return false;
    }
    const parsed = JSON.parse(content.toString("utf8"));
    if (JSON.stringify(canonicalise(parsed)) !== JSON.stringify(canonicalise(legacyCaseManifest))) {
      errors.push("the loaded legacy-case manifest differs from the engine control copy");
      return false;
    }
    if (parsed.manifestVersion !== "1.1.0" || parsed.legacyCount !== 42 ||
        !/^[a-f0-9]{64}$/.test(String(parsed.registryPolicySha256 || "")) ||
        asArray(parsed.legacyCases).length !== 42 || asArray(parsed.patternLocks).length !== 40 ||
        !Array.isArray(parsed.allowedLegacyRetirements)) {
      errors.push("the legacy-case manifest has an invalid controlled shape");
      return false;
    }
    return true;
  } catch (error) {
    errors.push("the pinned legacy-case manifest could not be verified: " + error.message);
    return false;
  }
}

function validateRegistryAgainstLegacyManifest(registry, cases, patterns, errors) {
  const manifestCases = asArray(legacyCaseManifest.legacyCases).filter(isObject);
  const caseById = new Map(cases.map(function (item) { return [item.caseId, item]; }));
  manifestCases.forEach(function (manifestCase) {
    const current = caseById.get(manifestCase.caseId);
    if (!current || JSON.stringify(canonicalise(legacyCaseIdentity(current))) !==
        JSON.stringify(canonicalise(legacyCaseIdentity(manifestCase)))) {
      errors.push("legacy identity does not match the pinned manifest for " + manifestCase.caseId);
    }
  });
  if (registry.productionMode === "reconstruction" && cases.length !== legacyCaseManifest.legacyCount) {
    errors.push("reconstruction mode must contain exactly the 42 pinned legacy case rows");
  }
  const legacyIdSet = new Set(manifestCases.map(function (item) { return item.caseId; }));
  if (registry.productionMode === "reconstruction" && cases.some(function (item) { return !legacyIdSet.has(item.caseId); })) {
    errors.push("new case rows cannot be added during legacy reconstruction");
  }
  const patternById = new Map(patterns.map(function (item) { return [item.id, item]; }));
  if (registryPolicyHash(registry) !== legacyCaseManifest.registryPolicySha256) {
    errors.push("registry generation policy, phases or pattern logic differ from the pinned reconstruction baseline");
  }
  asArray(legacyCaseManifest.patternLocks).filter(isObject).forEach(function (lock) {
    const pattern = patternById.get(lock.id);
    if (!pattern || JSON.stringify(canonicalise(patternLockProjection(pattern))) !==
        JSON.stringify(canonicalise(patternLockProjection(lock)))) {
      errors.push("pattern " + lock.id + " differs from the pinned capacity or logic baseline");
    }
  });
  const allowedRetirements = new Set(asArray(legacyCaseManifest.allowedLegacyRetirements));
  cases.filter(function (item) { return legacyIdSet.has(item.caseId) && item.status === "retired"; })
    .forEach(function (item) {
      if (!allowedRetirements.has(item.caseId)) {
        errors.push(item.caseId + " retirement is not authorised by the pinned legacy manifest");
      }
    });
}

function validateRegistrySourceRef(root, sourceRef, label, errors) {
  if (!isObject(sourceRef) || !isText(sourceRef.path) || !isText(sourceRef.contentSha256)) return false;
  const parts = sourceRef.path.split("#");
  const fileRef = parts[0];
  const fragment = parts[1] || null;
  if (parts.length > 2 || path.isAbsolute(fileRef) || /^(?:[a-z]+:)?\/\//i.test(fileRef) ||
      fileRef.split(/[\\/]/).includes("..")) {
    errors.push(label + " uses an unsafe or non-local source path");
    return false;
  }
  if (!root) return false;
  try {
    const rootPath = fs.realpathSync(root);
    const unresolvedSourcePath = path.resolve(rootPath, fileRef);
    if (!fs.existsSync(unresolvedSourcePath) || !fs.statSync(unresolvedSourcePath).isFile()) {
      errors.push(label + " refers to a missing source file " + fileRef);
      return false;
    }
    const sourcePath = fs.realpathSync(unresolvedSourcePath);
    if (sourcePath !== rootPath && !sourcePath.startsWith(rootPath + path.sep)) {
      errors.push(label + " resolves outside the repository after realpath resolution");
      return false;
    }
    const content = fs.readFileSync(sourcePath);
    const actualHash = crypto.createHash("sha256").update(content).digest("hex");
    if (actualHash !== sourceRef.contentSha256) {
      errors.push(label + " source content hash does not match " + fileRef);
      return false;
    }
    if (fragment && !markdownHasAnchor(content.toString("utf8"), fragment)) {
      errors.push(label + " refers to a missing source fragment #" + fragment);
      return false;
    }
    return true;
  } catch (error) {
    errors.push(label + " could not be provenance-verified: " + error.message);
    return false;
  }
}

function headingSlug(value) {
  return String(value || "").trim().toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function validateLogicSourceBinding(logicSource, pattern, errors) {
  if (!logicSource || !pattern) return;
  const refs = asArray(logicSource.sourceRefs).filter(isObject);
  if (logicSource.basis === "uploaded_systems") {
    const expected = "registry-library/AMC-Clinical-Pathway-Consolidated-Master-Registry-v1.md#pattern-" +
      pattern.id + "-" + headingSlug(pattern.title);
    if (refs.length !== 1 || refs[0].path !== expected) {
      errors.push("pattern " + pattern.id + " uploaded-system logic must use its exact controlled narrative heading");
    }
  }
  if (logicSource.basis === "legacy_cases") {
    const expected = asArray(legacyCaseManifest.legacyCases).filter(function (item) {
      return item && item.patternId === pattern.id;
    }).map(function (item) { return "data/cases/" + item.caseId + ".js"; }).sort();
    const actual = refs.map(function (ref) { return ref.path; }).sort();
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
      errors.push("pattern " + pattern.id + " legacy-case logic must cite its exact pinned legacy case files");
    }
  }
  if (logicSource.basis === "designed_pattern_logic") {
    const prefix = "registry-library/pattern-designs/pattern-" + String(pattern.id).padStart(3, "0") + ".md#pattern-" + pattern.id + "-";
    if (refs.length !== 1 || !refs[0].path.startsWith(prefix)) {
      errors.push("pattern " + pattern.id + " designed logic requires its dedicated controlled pattern-design record");
    }
  }
}

function validateRegistry(registry, options) {
  const errors = [];
  const blockers = [];
  const root = options && options.root ? options.root : null;
  try {
    if (!schemaValidators.registry(registry)) {
      errors.push.apply(errors, formatSchemaErrors(schemaValidators.registry.errors));
    }
  } catch (error) {
    errors.push("registry schema validation failed safely: " + error.message);
  }
  if (!isObject(registry)) {
    blockers.push("A machine registry is required");
    return { errors, blockers, registryReady: false, ready: false };
  }
  scanStrings(registry, function (value, location) {
    if (!isText(value)) errors.push("blank or invisible-only registry text at " + location);
  });
  unresolvedFields(registry).forEach(function (match) {
    blockers.push("unresolved registry field at " + match);
  });
  if (isText(registry.updatedAt) && new Date(registry.updatedAt) > new Date()) {
    errors.push("registry updatedAt cannot be in the future");
  }

  const phases = asArray(registry.phases).filter(isObject);
  const patterns = asArray(registry.patterns).filter(isObject);
  const patternLogicSources = asArray(registry.patternLogicSources).filter(isObject);
  const cases = asArray(registry.cases).filter(isObject);
  const syntheticFixture = !root && cases.length === 1 && cases[0].caseId === "case-000" &&
    registry.productionMode === "paused" && registry.nextAction && registry.nextAction.mode === "none";
  const productionRegistry = !syntheticFixture;
  if (productionRegistry) validateRegistryAgainstLegacyManifest(registry, cases, patterns, errors);
  const pinnedManifestReady = productionRegistry ? validatePinnedLegacyManifest(root, errors) : true;
  let sourceProvenanceReady = !productionRegistry || Boolean(root);
  const phaseIds = phases.map(function (item) { return item.id; });
  const patternIds = patterns.map(function (item) { return item.id; });
  const caseIds = cases.map(function (item) { return item.caseId; });
  const globalIds = cases.map(function (item) { return item.globalId; });
  const registryIds = cases.map(function (item) { return item.registryId; });
  const logicSourcePatternIds = patternLogicSources.map(function (item) { return item.patternId; });
  if (!unique(phaseIds)) errors.push("registry phase IDs must be unique");
  if (!unique(patternIds)) errors.push("registry pattern IDs must be unique");
  if (!unique(logicSourcePatternIds)) errors.push("pattern logic-source pattern IDs must be unique");
  if (!unique(caseIds) || !unique(globalIds) || !unique(registryIds)) errors.push("registry case identifiers must be unique");
  const phaseById = new Map(phases.map(function (item) { return [item.id, item]; }));
  const patternById = new Map(patterns.map(function (item) { return [item.id, item]; }));
  if (phaseIds.slice().sort(function (a, b) { return a - b; }).join(",") !== "1,2,3,4") {
    errors.push("registry phase IDs must cover exactly 1 through 4");
  }
  if (patternIds.slice().sort(function (a, b) { return a - b; }).join(",") !==
      Array.from({ length: 40 }, function (_, index) { return index + 1; }).join(",")) {
    errors.push("registry pattern IDs must cover exactly 1 through 40");
  }
  patterns.forEach(function (pattern) {
    const phase = phaseById.get(pattern.phaseId);
    if (!phase) {
      errors.push("pattern " + pattern.id + " refers to unknown phase " + pattern.phaseId);
    } else if (!asArray(phase.patternIds).includes(pattern.id)) {
      errors.push("phase " + phase.id + " does not list pattern " + pattern.id);
    }
    if (Number.isInteger(pattern.initialCore) && Number.isInteger(pattern.maximumWithoutExpansion) &&
        pattern.initialCore > pattern.maximumWithoutExpansion) {
      errors.push("pattern " + pattern.id + " initialCore exceeds maximumWithoutExpansion");
    }
    if (phase && pattern.objective !== phase.purpose) {
      errors.push("pattern " + pattern.id + " objective does not match its phase purpose");
    }
    if (pattern.logicProvenance === "missing") {
      if (pattern.dominantCapability !== null || asArray(pattern.coreCoverage).length !== 0 ||
          pattern.generationStatus !== "generation_blocked") {
        errors.push("pattern " + pattern.id + " with missing logic must remain empty and generation_blocked");
      }
    }
    const logicSource = patternLogicSources.find(function (item) { return item.patternId === pattern.id; });
    if (pattern.logicProvenance === "missing" && logicSource) {
      errors.push("pattern " + pattern.id + " has missing logic but also claims a logic source");
    }
    if (pattern.logicProvenance !== "missing" && !logicSource) {
      errors.push("pattern " + pattern.id + " lacks a controlled logic-source record");
    }
    if (logicSource && pattern.logicProvenance === "recovered_from_uploaded_systems" && logicSource.basis !== "uploaded_systems") {
      errors.push("pattern " + pattern.id + " logic provenance and source basis disagree");
    }
    if (logicSource && pattern.logicProvenance === "recovered_from_cases" && logicSource.basis !== "legacy_cases") {
      errors.push("pattern " + pattern.id + " logic provenance and source basis disagree");
    }
    if (logicSource && pattern.logicProvenance === "designed_and_source_reviewed" && logicSource.basis !== "designed_pattern_logic") {
      errors.push("pattern " + pattern.id + " designed logic requires a designed_pattern_logic source record");
    }
    if (logicSource) {
      validateLogicSourceBinding(logicSource, pattern, errors);
      asArray(logicSource.sourceRefs).forEach(function (sourceRef, sourceIndex) {
        const verified = validateRegistrySourceRef(root, sourceRef, "pattern " + pattern.id + " source " + (sourceIndex + 1), errors);
        if (productionRegistry && !verified) sourceProvenanceReady = false;
      });
    }
    if (pattern.generationStatus === "generation_ready" &&
        (pattern.logicProvenance === "missing" || !isText(pattern.dominantCapability) || asArray(pattern.coreCoverage).length === 0)) {
      errors.push("pattern " + pattern.id + " cannot be generation_ready without controlled pattern logic");
    }
    if (pattern.status === "active_generation" && pattern.generationStatus !== "generation_ready") {
      errors.push("active pattern " + pattern.id + " is not generation_ready");
    }
    if (pattern.status === "legacy_reconstruction_required" && pattern.generationStatus !== "reconstruction_only") {
      errors.push("legacy reconstruction pattern " + pattern.id + " must remain reconstruction_only");
    }
    if (pattern.status === "complete_audited" && pattern.generationStatus !== "generation_blocked") {
      errors.push("complete pattern " + pattern.id + " must block further generation until explicitly reopened");
    }
  });
  phases.forEach(function (phase) {
    asArray(phase.patternIds).forEach(function (patternId) {
      const pattern = patternById.get(patternId);
      if (!pattern || pattern.phaseId !== phase.id) {
        errors.push("phase " + phase.id + " has an inconsistent pattern reference " + patternId);
      }
    });
  });
  cases.forEach(function (item) {
    const pattern = patternById.get(item.patternId);
    if (!pattern) errors.push(item.caseId + " refers to unknown pattern " + item.patternId);
    if (pattern && pattern.phaseId !== item.phaseId) errors.push(item.caseId + " phase does not match its pattern");
    const registryMatch = String(item.registryId).match(/^CP-P([0-9]+)-C([0-9]{3})$/) || [];
    const encodedPattern = Number(registryMatch[1]);
    if (encodedPattern !== item.patternId) errors.push(item.caseId + " registryId encodes the wrong pattern");
    const encodedGlobal = Number((String(item.globalId).match(/^CP-C([0-9]{3})$/) || [])[1]);
    const encodedCase = Number((String(item.caseId).match(/^case-([0-9]{3})$/) || [])[1]);
    if (encodedGlobal !== encodedCase) errors.push(item.caseId + " globalId encodes a different case number");
    const orderedPatternCases = cases.filter(function (candidate) { return candidate.patternId === item.patternId; })
      .slice().sort(function (left, right) {
        return Number(String(left.caseId).slice(-3)) - Number(String(right.caseId).slice(-3));
      });
    const expectedPatternCaseNumber = item.caseId === "case-000" ? 0 : orderedPatternCases.findIndex(function (candidate) {
      return candidate.caseId === item.caseId;
    }) + 1;
    if (Number(registryMatch[2]) !== expectedPatternCaseNumber) {
      errors.push(item.caseId + " registryId encodes the wrong within-pattern case number");
    }
    if (item.status === "reconstruction_required" &&
        (item.contentSha256 !== null || item.coverageSlot !== null || item.distinctJob !== null ||
         item.primaryFailureMode !== null || item.admissionDecision !== "pending_reconstruction")) {
      errors.push(item.caseId + " reconstruction-required state contains premature admission or content data");
    }
    if (item.status !== "retired" &&
        ((item.retirementReason !== null && item.retirementReason !== undefined) ||
         (item.mergedIntoCaseId !== null && item.mergedIntoCaseId !== undefined))) {
      errors.push(item.caseId + " non-retired state cannot contain retirement or merge data");
    }
    if (item.status === "reconstruction_authorized" &&
        (item.contentSha256 !== null || item.admissionDecision !== "admitted")) {
      errors.push(item.caseId + " reconstruction-authorized state requires admitted planning data and no content hash");
    }
    if (item.status === "audited" && !isText(item.contentSha256)) {
      errors.push(item.caseId + " is audited without a content hash");
    }
    if (item.status === "audited" && item.admissionDecision !== "admitted") {
      errors.push(item.caseId + " is audited without an admitted decision");
    }
    if (item.status === "retired") {
      if (!isText(item.retirementReason) || !["merged", "rejected"].includes(item.admissionDecision)) {
        errors.push(item.caseId + " retirement requires a controlled reason and merged or rejected disposition");
      }
      if (item.admissionDecision === "merged") {
        const target = cases.find(function (candidate) { return candidate.caseId === item.mergedIntoCaseId; });
        if (!target || target.caseId === item.caseId || target.status === "retired" || target.patternId !== item.patternId) {
          errors.push(item.caseId + " has an invalid same-pattern active merge target");
        }
      } else if (item.mergedIntoCaseId !== null) {
        errors.push(item.caseId + " rejected retirement cannot name a merge target");
      }
    }
    if (["audited", "reconstruction_authorized"].includes(item.status)) {
      if (!isText(item.coverageSlot) || !pattern || !asArray(pattern.coreCoverage).includes(item.coverageSlot)) {
        errors.push(item.caseId + " lacks a controlled pattern coverage slot");
      }
      if (!isText(item.distinctJob) || !isText(item.primaryFailureMode) || item.admissionDecision !== "admitted") {
        errors.push(item.caseId + " lacks an admitted distinct job and failure-mode decision");
      }
    }
  });
  patterns.forEach(function (pattern) {
    const activeCases = cases.filter(function (item) { return item.patternId === pattern.id && item.status !== "retired"; });
    if (activeCases.length > pattern.maximumWithoutExpansion) {
      errors.push("pattern " + pattern.id + " case count exceeds maximumWithoutExpansion");
    }
  });
  const admittedJobs = cases.filter(function (item) { return item.admissionDecision === "admitted" && isText(item.distinctJob); });
  admittedJobs.forEach(function (item, index) {
    if (admittedJobs.slice(0, index).some(function (earlier) {
      return earlier.patternId === item.patternId && normalizeRegistryText(earlier.distinctJob) === normalizeRegistryText(item.distinctJob);
    })) {
      errors.push(item.caseId + " duplicates an admitted distinct job in its pattern");
    }
  });
  patterns.filter(function (pattern) { return pattern.status === "complete_audited"; }).forEach(function (pattern) {
    const patternCases = cases.filter(function (item) { return item.patternId === pattern.id && item.status !== "retired"; });
    if (patternCases.length < pattern.initialCore || patternCases.some(function (item) { return item.status !== "audited"; })) {
      errors.push("complete pattern " + pattern.id + " does not have an audited core case set");
    }
  });
  if (productionRegistry) {
    patterns.forEach(function (pattern) {
      const legacyIds = new Set(asArray(legacyCaseManifest.legacyCases).filter(function (item) {
        return item && item.patternId === pattern.id;
      }).map(function (item) { return item.caseId; }));
      if (legacyIds.size === 0) return;
      const legacyPatternCases = cases.filter(function (item) { return legacyIds.has(item.caseId); });
      const hasPending = legacyPatternCases.some(function (item) {
        return ["reconstruction_required", "reconstruction_authorized"].includes(item.status);
      });
      if (hasPending && (pattern.status !== "legacy_reconstruction_required" || pattern.generationStatus !== "reconstruction_only")) {
        errors.push("pattern " + pattern.id + " must remain reconstruction-only while a legacy case is pending");
      }
      if (!hasPending && registry.productionMode === "generation") {
        const auditedCount = legacyPatternCases.filter(function (item) { return item.status === "audited"; }).length;
        if (auditedCount < pattern.initialCore) {
          errors.push("pattern " + pattern.id + " lacks its audited legacy core for generation mode");
        }
      }
    });
  }
  if (registry.productionMode === "reconstruction" && registry.nextAction && registry.nextAction.newGenerationAllowed !== false) {
    blockers.push("new case generation must remain disabled during reconstruction");
  }
  const pendingReconstruction = cases.filter(function (item) {
    return ["reconstruction_required", "reconstruction_authorized"].includes(item.status);
  }).slice().sort(function (left, right) {
    return Number(String(left.caseId).slice(-3)) - Number(String(right.caseId).slice(-3));
  });
  const expresslyAuthorised = pendingReconstruction.filter(function (item) { return item.status === "reconstruction_authorized"; });
  if (expresslyAuthorised.length > 1) errors.push("only one case may be reconstruction_authorized at a time");
  const expectedReconstruction = pendingReconstruction[0] || null;
  if (expresslyAuthorised.length === 1 && expectedReconstruction && expresslyAuthorised[0].caseId !== expectedReconstruction.caseId) {
    errors.push("only the next sequential pending case " + expectedReconstruction.caseId + " may be reconstruction_authorized");
  }
  if (registry.productionMode === "generation" && pendingReconstruction.length > 0) {
    errors.push("generation cannot begin while legacy reconstruction remains pending");
  }
  if (registry.nextAction) {
    const action = registry.nextAction;
    const actionCase = cases.find(function (item) { return item.caseId === action.caseId; });
    const actionPattern = patternById.get(action.patternId);
    if (action.mode === "reconstruct") {
      if (!action.caseId || !actionCase) errors.push("a reconstruct nextAction requires an existing caseId");
      if (!actionPattern || (actionCase && actionCase.patternId !== action.patternId)) {
        errors.push("a reconstruct nextAction requires the case's exact patternId");
      }
      if (action.newGenerationAllowed !== false) errors.push("a reconstruct nextAction cannot authorise new generation");
      if (registry.productionMode !== "reconstruction") errors.push("a reconstruct nextAction requires reconstruction mode");
      if (actionCase && !["reconstruction_required", "reconstruction_authorized"].includes(actionCase.status)) {
        errors.push("a reconstruct nextAction cannot target an audited or retired case");
      }
      if (actionPattern && (actionPattern.status !== "legacy_reconstruction_required" || actionPattern.generationStatus !== "reconstruction_only")) {
        errors.push("a reconstruct nextAction requires a legacy reconstruction pattern");
      }
      if (expectedReconstruction && action.caseId !== expectedReconstruction.caseId) {
        errors.push("a reconstruct nextAction must target the next sequential pending case " + expectedReconstruction.caseId);
      }
    }
    if (action.mode === "generate") {
      if (!action.caseId || actionCase) errors.push("a generate nextAction requires a new, unused caseId");
      if (!actionPattern || actionPattern.generationStatus !== "generation_ready" || actionPattern.status !== "active_generation") {
        errors.push("a generate nextAction requires an active_generation, generation_ready pattern");
      }
      if (registry.productionMode !== "generation" || action.newGenerationAllowed !== true) {
        errors.push("a generate nextAction requires generation mode and explicit generation authority");
      }
      const actionPatternCases = actionPattern ? cases.filter(function (item) {
        return item.patternId === actionPattern.id && item.status !== "retired";
      }) : [];
      if (actionPattern && actionPatternCases.length + 1 > actionPattern.maximumWithoutExpansion) {
        errors.push("a generate nextAction would exceed pattern " + actionPattern.id + " maximumWithoutExpansion");
      }
      const nextCaseNumber = cases.reduce(function (maximum, item) {
        const number = Number(String(item.caseId).slice(-3));
        return Number.isInteger(number) ? Math.max(maximum, number) : maximum;
      }, -1) + 1;
      if (action.caseId !== "case-" + String(nextCaseNumber).padStart(3, "0")) {
        errors.push("a generate nextAction must use the next sequential case ID");
      }
    }
    if (action.mode === "none" &&
        (action.caseId !== null || action.patternId !== null || action.newGenerationAllowed !== false)) {
      errors.push("a none nextAction cannot name a case, pattern or generation authority");
    }
    if (registry.productionMode === "paused" && action.mode !== "none") errors.push("paused production requires nextAction mode none");
    if (registry.productionMode === "reconstruction" && action.mode !== "reconstruct") errors.push("reconstruction mode requires a reconstruct nextAction");
    if (registry.productionMode === "generation" && action.mode !== "generate") errors.push("generation mode requires a generate nextAction");
  }
  const dedupedErrors = Array.from(new Set(errors));
  const dedupedBlockers = Array.from(new Set(blockers));
  const structuralReady = dedupedErrors.length === 0 && dedupedBlockers.length === 0;
  const provenanceReady = !productionRegistry || (Boolean(root) && pinnedManifestReady && sourceProvenanceReady);
  const registryReady = structuralReady && provenanceReady;
  const actionBlockers = [];
  if (productionRegistry) {
    if (!registryReady) actionBlockers.push("registry structure and provenance must pass before a production action");
    const trustedActionEvidence = Boolean(options && options.actionEvidenceToken === ACTION_EVIDENCE_TOKEN);
    const reports = trustedActionEvidence ? asArray(options.caseReports) : [];
    const reportByCaseId = new Map(reports.map(function (report) { return [report.caseId, report]; }));
    const action = registry.nextAction;
    if (registry.productionMode === "reconstruction" && action && action.mode === "reconstruct") {
      if (root && !fs.existsSync(path.join(root, "data", "cases", action.caseId + ".js"))) {
        actionBlockers.push("the reconstruction target has no visible case file");
      }
      const actionNumber = Number(String(action.caseId).slice(-3));
      asArray(legacyCaseManifest.legacyCases).filter(function (item) {
        return Number(String(item.caseId).slice(-3)) < actionNumber;
      }).forEach(function (manifestCase) {
        const row = cases.find(function (item) { return item.caseId === manifestCase.caseId; });
        if (row && row.status === "audited") {
          const report = reportByCaseId.get(row.caseId);
          if (!report || report.status !== "AUDITED" || report.contentSha256 !== row.contentSha256) {
            actionBlockers.push(row.caseId + " is declared audited without a matching current AUDITED case report");
          }
        } else if (!row || row.status !== "retired" ||
            !asArray(legacyCaseManifest.allowedLegacyRetirements).includes(row.caseId)) {
          actionBlockers.push(manifestCase.caseId + " has not completed controlled reconstruction before the target");
        }
      });
    } else if (registry.productionMode === "generation" && action && action.mode === "generate") {
      asArray(legacyCaseManifest.legacyCases).forEach(function (manifestCase) {
        const row = cases.find(function (item) { return item.caseId === manifestCase.caseId; });
        const report = reportByCaseId.get(manifestCase.caseId);
        if (!row || row.status !== "audited" || !report || report.status !== "AUDITED" ||
            report.contentSha256 !== row.contentSha256) {
          actionBlockers.push(manifestCase.caseId + " lacks a matching current AUDITED report required for generation");
        }
      });
    } else if (registry.productionMode === "paused") {
      actionBlockers.push("production is paused and has no executable next action");
    }
  }
  const dedupedActionBlockers = Array.from(new Set(actionBlockers));
  const actionReady = productionRegistry ? registryReady && dedupedActionBlockers.length === 0 : false;
  return {
    errors: dedupedErrors,
    blockers: dedupedBlockers,
    structuralReady,
    provenanceReady,
    registryReady,
    actionBlockers: dedupedActionBlockers,
    actionReady,
    ready: registryReady
  };
}

function visibleCaseProjection(caseData) {
  if (!isObject(caseData)) return caseData;
  return {
    id: caseData.id,
    globalId: caseData.globalId,
    registryId: caseData.registryId,
    displayNumber: caseData.displayNumber,
    title: caseData.title,
    status: caseData.status,
    statusLabel: caseData.statusLabel,
    note: caseData.note,
    modality: caseData.modality,
    phase: caseData.phase,
    pattern: caseData.pattern,
    format: caseData.format,
    stem: caseData.stem,
    run: caseData.run
  };
}

function validateVisibleCase(caseData) {
  const errors = [];
  try {
    const allowedRootKeys = new Set([
      "id", "globalId", "registryId", "displayNumber", "title", "status", "statusLabel", "note", "modality",
      "phase", "pattern", "format", "stem", "run",
      "clinicalSources", "essentialHintIds", "hints", "masteryFocus", "reasoningAvailable", "reasoningCompass", "sources"
    ]);
    if (isObject(caseData)) {
      Object.keys(caseData).filter(function (key) { return !allowedRootKeys.has(key); }).forEach(function (key) {
        errors.push("visible case contains an unrecognised root property " + key);
      });
    }
    const projection = visibleCaseProjection(caseData);
    if (!schemaValidators.visibleCase(projection)) {
      errors.push.apply(errors, formatSchemaErrors(schemaValidators.visibleCase.errors));
    }
  } catch (error) {
    errors.push("visible case schema validation failed safely: " + error.message);
  }
  return { errors: Array.from(new Set(errors)), valid: errors.length === 0 };
}

function loadCases(root) {
  const currentDirectory = path.join(root, "data", "current-cases");
  const directory = fs.existsSync(currentDirectory) ? currentDirectory : path.join(root, "data", "cases");
  if (!fs.existsSync(directory)) return [];
  const files = fs.readdirSync(directory).filter(function (file) {
    return /^case-[0-9]{3}\.js$/.test(file);
  }).sort();
  const collectionName = directory === currentDirectory ? "AMC_CURRENT_CASES" : "AMC_CASES";
  const context = { window: { AMC_CASES: [], AMC_CURRENT_CASES: [] } };
  files.forEach(function (file) {
    const before = context.window[collectionName].length;
    const source = fs.readFileSync(path.join(directory, file), "utf8");
    vm.runInNewContext(source, context, { filename: file, timeout: 1000 });
    const added = context.window[collectionName].slice(before);
    if (added.length !== 1) {
      throw new Error(file + " must register exactly one case object");
    }
    const expectedId = file.replace(/\.js$/, "");
    if (!added[0] || added[0].id !== expectedId) {
      throw new Error(file + " must register case id " + expectedId);
    }
  });
  return Array.from(context.window[collectionName] || []);
}

function loadBlueprint(root, caseId) {
  const candidates = [
    path.join(root, "data", "blueprints", caseId + ".blueprint.json"),
    path.join(root, "engine", "blueprints", caseId + ".blueprint.json")
  ];
  const existing = candidates.filter(function (candidate) { return fs.existsSync(candidate); });
  if (existing.length === 0) return null;
  if (existing.length > 1) {
    return { __loadError: "duplicate canonical blueprint paths exist for " + caseId };
  }
  const file = existing[0];
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    return { __loadError: error.message };
  }
}

function loadRegistry(root) {
  const file = path.join(root, "registry-library", "case-registry.v1.1.json");
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    return { __loadError: error.message };
  }
}

function flattenTurns(caseData) {
  const turns = [];
  asArray(caseData && caseData.run && caseData.run.sections).forEach(function (section) {
    asArray(section && section.turns).forEach(function (turn) {
      const text = asArray(turn && turn.lines).map(function (line) { return line && line.text; }).filter(isText).join(" ");
      turns.push({
        id: turn && turn.id,
        speaker: turn && turn.speaker,
        kind: turn && turn.kind,
        text,
        lines: asArray(turn && turn.lines),
        sectionId: section && section.id
      });
    });
  });
  return turns;
}

function flattenLines(caseData) {
  const lines = [];
  flattenTurns(caseData).forEach(function (turn) {
    turn.lines.forEach(function (line) {
      lines.push({
        id: line && line.id,
        text: line && line.text,
        speaker: turn.speaker,
        kind: turn.kind,
        turnId: turn.id,
        sectionId: turn.sectionId
      });
    });
  });
  return lines;
}

function isAdministrativeIdentityRequest(text) {
  let value = String(text || "").trim();
  if (questionMarkCount(value) !== 1 || !/\?\s*$/.test(value)) return false;
  value = value.replace(/^(?:(?:hello|hi|good (?:morning|afternoon|evening))[,!]?\s*)?(?:i am|i'm|my name is)\s+(?:dr\.?\s+)?[\p{L}'’-]+(?:\s+[\p{L}'’-]+){0,3},?\s+(?:one of the doctors|a doctor|the doctor)(?:\s+here)?[.!]\s*/iu, "");
  return /^(?:(?:for (?:safety|identification),?\s*)|(?:before we begin,?\s*))?(?:(?:could|can|would) you\s+)?(?:please\s+)?(?:confirm|provide|tell me)\s+(?:(?:your|their|the patient'?s)\s+)?(?:full\s+)?name\s+(?:and|,)\s+(?:(?:your|their|the patient'?s)\s+)?(?:date of birth|dob)\?$/i.test(value);
}

function isRecordOrWristbandIdentityEvidence(text) {
  const value = String(text || "");
  if (/\b(?:no|not|never|cannot|can't|doesn't|does not|didn't|did not|mismatch(?:es|ed)?|do not match|does not match|differ(?:s|ed)?|wrong patient|someone else|another person(?:'s)?|identifiers? conflict|details? conflict)\b/i.test(value)) {
    return false;
  }
  const source = /\b(?:record|wristband|identity band|label|documentation)\b/i.test(value);
  const identifiers = /\b(?:identity|name|date of birth|dob|details|identifiers)\b/i.test(value);
  const positiveResult = /\b(?:match|matches|matched)\b/i.test(value) ||
    /\b(?:verify|verifies|verified|confirm|confirms|confirmed)\b[^.]{0,100}\b(?:against|with|using|from)\b/i.test(value);
  return source && identifiers && positiveResult;
}

function isPositiveDoctorIntroduction(text) {
  const value = String(text || "").trim();
  return /^(?:(?:hello|hi|good (?:morning|afternoon|evening))[,!.]?\s*)?(?:i am|i'm|my name is)\s+(?:dr\.?\s+)?[\p{L}'’-]+(?:\s+[\p{L}'’-]+){0,3},?\s+(?:one of the doctors|a doctor|the doctor)(?:\s+here)?[.!]?$/iu.test(value);
}

function isPositiveConsentRequest(text, scope) {
  const value = String(text || "").trim();
  if (questionMarkCount(value) !== 1 || !/\?\s*$/.test(value)) return false;
  const permission = /\b(?:is it (?:okay|ok|all right|alright|acceptable) if (?:i|we)|may i|can i|could i|do i have your permission to|do you (?:consent|agree) to|would you (?:be comfortable|mind|agree)|are you (?:comfortable|happy) (?:for me|if i|to))\b/i.test(value);
  if (!permission) return false;
  const scopePatterns = {
    consultation: /\b(?:ask|questions?|talk|discuss|history|consultation)\b/i,
    examination: /\b(?:examin|examination|listen|feel|check|look at)\w*\b/i,
    procedure: /\b(?:procedure|perform|insert|remove|take|give|administer|treat|operate)\w*\b/i,
    sensitive_history: /\b(?:ask|questions?|talk|discuss|history)\b/i,
    information_sharing: /\b(?:share|release|send|speak|talk|discuss|contact)\w*\b/i
  };
  return !scopePatterns[scope] || scopePatterns[scope].test(value);
}

function isAffirmativeConsentResponse(text) {
  const value = String(text || "").trim();
  return /^(?:yes(?:,\s*(?:that is fine|please|you may|of course))?|sure|okay|ok|all right|alright|fine|certainly|of course|i (?:consent|agree)|you may|please do)[.!]?$/i.test(value);
}

function isNotPossibleIdentityEvidence(text) {
  const value = String(text || "");
  return /\b(?:cannot|can't|unable|not possible|could not)\b/i.test(value) &&
    /\b(?:confirm|check|verify|establish)\b[^.]{0,80}\b(?:identity|name|date of birth|dob|identifiers)\b/i.test(value) &&
    /\b(?:unconscious|unresponsive|confused|non-verbal|no (?:record|wristband|identifier)|unknown|language barrier|impaired capacity)\b/i.test(value);
}

function isNeutralExaminerOpening(text) {
  const value = String(text || "").trim();
  return /^(?:(?:you have (?:eight|8) minutes[.!]\s*)?(?:you may|please) (?:begin|start)|(?:begin|start) when you are ready|your time (?:starts|begins) now|the station (?:starts|begins) now)[.!]?$/i.test(value);
}

function isNeutralExaminerClosing(text) {
  const value = String(text || "").trim();
  return /^(?:(?:thank you[.!]\s*)?(?:the station is (?:complete|over)|that is the end of the station|time is up|please stop|stop now)|thank you)[.!]?$/i.test(value);
}

function hasCompoundQuestion(text) {
  const value = String(text || "").trim();
  const withoutVocative = value.replace(/^(?:(?:Mr|Mrs|Ms|Miss|Mx|Dr)\.?\s+)?[\p{Lu}][\p{L}'’-]+(?:\s+[\p{Lu}][\p{L}'’-]+){0,2},\s+/u, "");
  if (!value || isAdministrativeIdentityRequest(value)) return false;
  if (questionMarkCount(value) > 1) return true;
  if (/\?\s*\S/.test(value)) return true;
  if (questionMarkCount(value) > 0 && /(?:&|\b(?:and|or)\b)/i.test(value)) return true;
  const controlledBundlingConnector = /(?:&|\bplus\b|\bas well as\b|\balong with\b|\btogether with\b|\bin addition to\b|\balongside\b|\bfollowed by\b|\bversus\b|\bcompared with\b)/i;
  if (questionMarkCount(value) > 0 && controlledBundlingConnector.test(value)) return true;
  if (questionMarkCount(value) > 0 && /[\p{L}\p{N}]\s*\/\s*[\p{L}\p{N}]/u.test(value)) return true;
  if (questionMarkCount(value) > 0 && /\S\s+\b(?:then|but|before|while)\b\s+\S/i.test(value)) return true;
  const startsWithInterrogative = /^(?:what|when|where|why|how|which|who|any|do|does|did|have|has|are|is|can|could|would|will)\b/iu.test(withoutVocative);
  if (questionMarkCount(value) > 0 && startsWithInterrogative &&
      /(?:[.:–—…]|\n)\s*(?:what|when|where|why|how|which|who|any|do|does|did|have|has|are|is|can|could|would|will)\b/i.test(value)) return true;
  if (questionMarkCount(value) > 0 && /^(?:have|has)\b[^?]*\b(?:nor|with)\b[^?]*\?/iu.test(withoutVocative)) return true;
  if (questionMarkCount(value) > 0 &&
      /\b(?:do|does|did|are|is|was|were|have|has|had|can|could|would|will)\s+(?:you|it|they|he|she)\b[^?]*,\s*[a-z][a-z'-]*\b/i.test(withoutVocative)) {
    return true;
  }

  const requestPrefix = "(?:(?:please|i(?:'d| would) like you to|i (?:need|want) you to)\\s+)?";
  const requestVerb = "(?:tell me|describe|outline|list|share|talk about|give me(?: an account of)?|run me through|walk me through|talk me through|take me through|take me back to|let me know|recount|go over|say more about|explain|show me|point to|confirm|could you (?:describe|share)|can you (?:describe|share)|i need(?: to know| details of| information about)?|i want to know|i(?:'d| would) like to (?:know|hear)|i wonder|help me understand)";
  const requestLead = new RegExp("^" + requestPrefix + requestVerb + "\\b", "i");
  const laterRequest = new RegExp("[.!?]\\s*" + requestPrefix + requestVerb + "\\b", "i");
  if (/;/.test(value) && (questionMarkCount(value) > 0 || requestLead.test(value))) return true;
  if (laterRequest.test(value)) return true;
  if (questionMarkCount(value) === 0) {
    return requestLead.test(value) && /(?:,|&|\band\b|\bor\b|\bplus\b|\bas well as\b|\balong with\b|\btogether with\b|\bin addition to\b|\balongside\b|\bfollowed by\b)/i.test(value);
  }
  if (/\band\s+(?:you\s+)?(?:tell|describe|outline|list|explain|confirm|show|give|recount|go over|say more)\b/i.test(value)) return true;
  if (/\b(?:tell|describe|outline|list|explain|confirm|show|give|recount|go over|say more)\b[^?]*\band\s+(?:whether|what|when|where|why|how|who|which)\b/i.test(value)) return true;
  if (/\b(?:and|or)\s+(?:what|when|where|why|how|whether|which|who|do|does|did|have|has|are|is|can|could|would|will)\b/i.test(value)) return true;
  if (/,\s*(?:what|when|where|why|how|whether|which|who)\b/i.test(withoutVocative)) return true;
  if (/\b(?:do you|have you|are you|any)\b[^?]*\bor\b[^?]*\?/i.test(value)) return true;
  if (/\b(?:any|what|which)\b[^?]*(?:,[^?]*)?\b(?:and|or)\b[^?]*\?/i.test(value)) return true;
  if (/\b(?:what|which|when|where|why|how|do|does|did|have|has|are|is|can|could|would|will)\b[^?]*,[^?]*,[^?]*\?/i.test(value)) return true;
  if (requestLead.test(value) && /[.]\s*(?:what|when|where|why|how|any|do|did|have|has|is|are|can|could|would)\b/i.test(value)) return true;
  return false;
}

function detectInformationRequest(text) {
  const value = String(text || "").trim();
  if (!value) return false;
  if (questionMarkCount(value) > 0) return true;
  return /^(?:(?:please|i(?:'d| would) like you to|i (?:need|want) you to)\s+)?(?:tell me|describe|outline|list|share|talk about|give me(?: an account of)?|run me through|walk me through|talk me through|take me through|take me back to|let me know|recount|go over|say more about|explain|show me|point to|confirm|could you (?:describe|share)|can you (?:describe|share)|i need(?: to know| details of| information about)?|i want to know|i(?:'d| would) like to (?:know|hear)|i wonder|help me understand)\b/i.test(value);
}

function isSubstantiveInformationRequest(text, requestType) {
  let value = String(text || "").trim();
  value = value.replace(/^this (?:next )?question is for (?:(?:Mr|Mrs|Ms|Miss|Mx|Dr)\.?\s+)?[\p{L}'’-]+(?:\s+[\p{L}'’-]+){0,2}[.!]\s*/iu, "");
  value = value.replace(/^(?:(?:Mr|Mrs|Ms|Miss|Mx|Dr)\.?\s+)?[\p{Lu}][\p{L}'’-]+(?:\s+[\p{Lu}][\p{L}'’-]+){0,2},\s+/u, "");
  if (requestType === "question") {
    if (questionMarkCount(value) !== 1 || !/\?\s*$/.test(value) || wordCount(value) < 3) return false;
    return /^(?:(?:what|when|where|why|how|which|who|whom|whose)\b\s+\S+|(?:do|does|did|have|has|had|is|are|was|were|can|could|would|will|may)\b\s+\S+\s+\S+|any\b\s+\S+)/i.test(value);
  }
  if (requestType === "imperative_request") {
    if (questionMarkCount(value) !== 0) return false;
    const lead = /^(?:(?:please|i(?:'d| would) like you to|i (?:need|want) you to)\s+)?(?:tell me|describe|outline|list|share|talk about|give me(?: an account of)?|run me through|walk me through|talk me through|take me through|take me back to|let me know|recount|go over|say more about|explain|show me|point to|confirm|could you (?:describe|share)|can you (?:describe|share)|i need(?: to know| details of| information about)?|i want to know|i(?:'d| would) like to (?:know|hear)|i wonder|help me understand)\b/i;
    const match = value.match(lead);
    if (!match) return false;
    const remainder = value.slice(match[0].length).replace(/^[\s,:-]+/, "").replace(/[.!]+$/, "").trim();
    return wordCount(remainder) >= 1 && meaningfulClinicalTokens(remainder).size >= 1;
  }
  return false;
}

function lineIndex(lines) {
  return new Map(lines.map(function (line, index) { return [line.id, index]; }));
}

function nextLine(lines, startIndex, predicate) {
  for (let index = startIndex + 1; index < lines.length; index += 1) {
    if (predicate(lines[index])) return lines[index];
  }
  return null;
}

function exactLine(linesById, id, speaker, text, issues, code, location) {
  const line = linesById.get(id);
  if (!line) {
    addIssue(issues, "critical", code, location, "The blueprint refers to missing Full Run line " + id + ".");
    return null;
  }
  if (speaker && line.speaker !== speaker) {
    addIssue(issues, "critical", code, id, "The line has speaker " + line.speaker + " but the blueprint requires " + speaker + ".", line.text);
  }
  if (typeof text === "string" && line.text !== text) {
    addIssue(issues, "critical", code, id, "The visible text does not exactly match the blueprint.", line.text);
  }
  return line;
}

function clinicalContentPattern() {
  return /\b(?:pain|chest|pressure|discomfort|symptom|shak\w*|sweat\w*|vomit\w*|diarrhoea|medicine|medication|dose|allerg\w*|operation\w*|surg\w*|smok\w*|alcohol|drink\w*|drug\w*|substance\w*|medical condition\w*|past medical|family history|history|happen\w*|brought|begin|began|start\w*|today|breath\w*|fever|cough\w*|bleed\w*|weak\w*|dizz\w*|collapse\w*|noticed|feel\w*|unwell|injur\w*|urine|stool|headache|nausea|agitat\w*|restless\w*)\b/i;
}

const IDENTITY_BOILERPLATE_WORDS = new Set([
  "my", "name", "is", "i", "am", "and", "date", "of", "birth", "recorded", "full", "complete", "legal",
  "was", "born", "the", "dob", "it", "s", "yes", "correct", "that"
]);
const NEUTRAL_PRE_IDENTITY_ACTION_WORDS = new Set([
  "the", "doctor", "performs", "perform", "hand", "hygiene", "cleans", "washes", "their", "hands", "checks",
  "check", "ensures", "ensure", "that", "room", "is", "private", "privacy", "closes", "close", "door", "draws",
  "draw", "curtain", "and", "approaches", "approach", "the", "seated", "patient", "person", "sits", "sit", "at",
  "eye", "level", "moves", "move", "a", "chair", "before", "speaking"
]);

function calendarDateFromText(value) {
  const text = String(value || "").trim();
  const months = {
    january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
    july: 7, august: 8, september: 9, october: 10, november: 11, december: 12
  };
  let day;
  let month;
  let year;
  let match = text.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (match && months[match[2].toLowerCase()]) {
    day = Number(match[1]);
    month = months[match[2].toLowerCase()];
    year = Number(match[3]);
  } else if ((match = text.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/))) {
    day = Number(match[1]);
    month = Number(match[2]);
    year = Number(match[3]);
  } else if ((match = text.match(/^(\d{4})-(\d{2})-(\d{2})$/))) {
    year = Number(match[1]);
    month = Number(match[2]);
    day = Number(match[3]);
  } else return null;
  if (year < 1000 || year > 2999 || month < 1 || month > 12 || day < 1 || day > 31) return null;
  const date = new Date(Date.UTC(year, month - 1, day));
  return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day ? date : null;
}

function validCalendarDateText(value) {
  const date = calendarDateFromText(value);
  return Boolean(date) && date <= new Date();
}

function identityResponseIsAdministrative(identityResponse) {
  if (!isObject(identityResponse) || !isText(identityResponse.text) || !isText(identityResponse.fullName) ||
      !isText(identityResponse.dateOfBirthText)) return false;
  const fullName = identityResponse.fullName.trim();
  const nameParts = fullName.match(/[\p{L}][\p{L}'’-]*/gu) || [];
  if (nameParts.length < 2 || nameParts.length > 5 || nameParts.join(" ") !== fullName.replace(/\s+/gu, " ") ||
      clinicalContentPattern().test(fullName)) return false;
  const dateOfBirth = identityResponse.dateOfBirthText.trim();
  const writtenDate = /^(?:0?[1-9]|[12][0-9]|3[01])\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+[12][0-9]{3}$/i;
  const numericDate = /^(?:(?:0?[1-9]|[12][0-9]|3[01])[/-](?:0?[1-9]|1[0-2])[/-][12][0-9]{3}|[12][0-9]{3}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01]))$/;
  if ((!writtenDate.test(dateOfBirth) && !numericDate.test(dateOfBirth)) || !validCalendarDateText(dateOfBirth)) return false;
  let remaining = identityResponse.text.toLowerCase();
  const name = fullName.toLowerCase();
  const controlledDate = dateOfBirth.toLowerCase();
  if (!remaining.includes(name) || !remaining.includes(controlledDate)) return false;
  remaining = remaining.split(name).join(" ").split(controlledDate).join(" ");
  const tokens = remaining.match(/[\p{L}\p{N}]+/gu) || [];
  return tokens.every(function (token) {
    return /^[a-z]+$/i.test(token) && IDENTITY_BOILERPLATE_WORDS.has(token.toLowerCase());
  });
}

function addressTermMatchesIdentity(addressTerm, fullName) {
  const termTokens = normalizeRegistryText(addressTerm).split(" ").filter(Boolean);
  const nameTokens = normalizeRegistryText(fullName).split(" ").filter(Boolean);
  if (termTokens.length === 0 || nameTokens.length < 2) return false;
  const honorifics = new Set(["mr", "mrs", "ms", "miss", "mx", "dr"]);
  if (honorifics.has(termTokens[0])) {
    return termTokens.length === 2 && termTokens[1] === nameTokens[nameTokens.length - 1];
  }
  if (termTokens.length > nameTokens.length) return false;
  return nameTokens.some(function (_token, start) {
    return termTokens.every(function (token, offset) { return nameTokens[start + offset] === token; });
  });
}

function isNeutralPreIdentityAction(text) {
  const value = normalizeRegistryText(text);
  if (!value || /[0-9]/.test(value) || clinicalContentPattern().test(value)) return false;
  let remainder = value.replace(/\bthe doctor\b/g, " ");
  [
    /\bperforms? hand hygiene\b/g,
    /\b(?:cleans?|washes?) (?:their|his|her) hands\b/g,
    /\b(?:checks?|ensures?) (?:that )?(?:the )?room is private\b/g,
    /\b(?:closes?|shuts?) (?:the )?door\b/g,
    /\b(?:draws?|closes?) (?:the )?curtain\b/g,
    /\bapproaches? (?:the )?(?:seated )?(?:patient|person)\b/g,
    /\bsits? at eye level\b/g,
    /\bmoves? a chair\b/g,
    /\bbefore speaking\b/g
  ].forEach(function (pattern) { remainder = remainder.replace(pattern, " "); });
  remainder = remainder.replace(/\b(?:and|then)\b/g, " ").replace(/[^a-z]+/g, "").trim();
  return remainder.length === 0;
}

function regexEscape(value) {
  return String(value || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

const NON_NAME_VOCATIVE_WORDS = new Set([
  "yes", "no", "please", "however", "instead", "today", "now", "first", "second", "finally",
  "so", "well", "okay", "ok", "sure", "certainly", "fortunately", "unfortunately", "i", "we", "you",
  "what", "when", "where", "why", "how", "which", "who", "whom", "whose", "does", "do", "did",
  "have", "has", "had", "is", "are", "was", "were", "can", "could", "would", "will", "may"
]);

function explicitVocativeCandidates(text) {
  const value = String(text || "").trim();
  const candidates = [];
  const name = "((?:(?:Mr|Mrs|Ms|Miss|Mx|Dr)\\.?\\s+)?[\\p{Lu}][\\p{L}'’-]+(?:\\s+[\\p{Lu}][\\p{L}'’-]+){0,2})";
  const greeted = value.match(new RegExp("^(?:hello|hi|thank you|thanks|good morning|good afternoon|good evening)\\s*,?\\s+" + name + "(?=[,.:!?])", "iu"));
  if (greeted) candidates.push(greeted[1]);
  const startsWithGreeting = /^(?:hello|hi|thank you|thanks|good morning|good afternoon|good evening)\b/i.test(value);
  if (!startsWithGreeting) {
    const leading = value.match(new RegExp("^" + name + "\\s*(?:,|:)", "u"));
    if (leading) candidates.push(leading[1]);
  }
  const explicitRecipient = value.match(new RegExp("\\b(?:question|request)\\s+(?:is\\s+)?for\\s+" + name + "(?=[,.:!?]|\\s+(?:to|about|regarding)\\b)", "iu"));
  if (explicitRecipient) candidates.push(explicitRecipient[1]);
  return Array.from(new Set(candidates.map(function (candidate) { return candidate.trim(); }).filter(function (candidate) {
    const first = normalizeRegistryText(candidate).split(" ")[0];
    return first && !NON_NAME_VOCATIVE_WORDS.has(first);
  })));
}

function actionLineStartsWithActor(text, actorExactPhrase) {
  const line = normalizeRegistryText(text);
  const actor = normalizeRegistryText(actorExactPhrase);
  return Boolean(line && actor && (line === actor || line.startsWith(actor + " ")));
}

function hasStandaloneReviewedPhrase(text, phrase) {
  const source = String(text || "").normalize("NFKC").replace(/\p{Cf}/gu, "").toLowerCase();
  const target = String(phrase || "").normalize("NFKC").replace(/\p{Cf}/gu, "").trim().toLowerCase();
  if (!target || wordCount(target) < 3) return false;
  let offset = 0;
  while (offset <= source.length - target.length) {
    const index = source.indexOf(target, offset);
    if (index < 0) return false;
    const before = source.slice(0, index);
    const after = source.slice(index + target.length);
    const startsClause = before.trim().length === 0 || /[.!?;:,–—]\s*$/.test(before);
    const endsAtBoundary = after.length === 0 || /^(?:\s|[.!?;:,–—])/.test(after);
    if (startsClause && endsAtBoundary) return true;
    offset = index + 1;
  }
  return false;
}

function genericRoleActorTerms(role) {
  const normalizedRole = normalizeRegistryText(role);
  if (!normalizedRole) return [];
  return [normalizedRole, "the " + normalizedRole];
}

function actorPhraseMatchesParticipant(participant, actorExactPhrase) {
  if (!participant || !isText(actorExactPhrase)) return false;
  const actor = normalizeRegistryText(actorExactPhrase);
  const controlled = asArray(participant.addressTerms).filter(isText).map(normalizeRegistryText)
    .concat(genericRoleActorTerms(participant.role));
  return controlled.includes(actor);
}

function isControlledParticipantObservation(text, actorExactPhrase) {
  const value = String(text || "").trim().replace(/[.!?]+$/, "").trim();
  if (!actionLineStartsWithActor(value, actorExactPhrase) || wordCount(value) > 16 ||
      ACTION_CLAUSE_SEPARATOR_PATTERN.test(value) || /\b(?:as|with|during|plus)\b/i.test(value) ||
      LOW_RISK_ACTION_INTERVENTION_PATTERN.test(value) ||
      EXAMINATION_ACTION_PATTERN.test(value) || PROCEDURE_ACTION_PATTERN.test(value) || TREATMENT_ACTION_PATTERN.test(value)) return false;
  const actor = regexEscape(String(actorExactPhrase || "").trim());
  const state = "(?:alert|drowsy|agitated|restless|pale|clammy|unresponsive|motionless)";
  const posture = "(?:sitting|standing|lying|pacing|crying|grimacing|coughing|vomiting|retching|trembling|shaking|sweating|breathing|wheezing|struggling)";
  const place = "(?:on|in|beside|near|by|at)\\s+(?:the\\s+)?(?:bed|chair|trolley|door|room|floor)";
  const simple = new RegExp("^" + actor + "\\s+(?:(?:is|was)\\s+(?:" + state + "(?:\\s+and\\s+" + state + ")*|" + posture + "(?:\\s+(?:quietly|still|upright|rapidly|heavily|continuously))?(?:\\s+" + place + ")?)|(?:paces?|cries?|grimaces?|coughs?|vomits?|retches?|trembles?|shakes?|collapses?|falls?)(?:\\s+(?:once|repeatedly|suddenly))?|(?:is|was)\\s+(?:holding|clutching)\\s+(?:his|her|their|the)\\s+(?:chest|abdomen|head|arm|leg))$", "iu");
  return simple.test(value);
}

function isControlledEquipmentEvent(text, actorExactPhrase) {
  const value = String(text || "").trim().replace(/[.!?]+$/, "").trim();
  if (!actionLineStartsWithActor(value, actorExactPhrase) || wordCount(value) > 16 ||
      ACTION_CLAUSE_SEPARATOR_PATTERN.test(value) || /\b(?:and|as|with|during|plus)\b/i.test(value) ||
      LOW_RISK_ACTION_INTERVENTION_PATTERN.test(value) ||
      EXAMINATION_ACTION_PATTERN.test(value) || PROCEDURE_ACTION_PATTERN.test(value) || TREATMENT_ACTION_PATTERN.test(value)) return false;
  const actor = regexEscape(String(actorExactPhrase || "").trim());
  const event = "(?:alarms?|sounds?|flashes?|beeps?)(?:\\s+(?:once|repeatedly|continuously))?";
  const number = "[0-9]+(?:\\.[0-9]+)?";
  const vital = "(?:a\\s+)?(?:pulse|heart rate|respiratory rate|oxygen saturation|temperature)\\s+(?:of|at|is|reads?)\\s+" + number + "(?:\\s+(?:beats per minute|breaths per minute|percent|degrees celsius))?";
  const pressure = "(?:a\\s+)?blood pressure\\s+(?:of|at|is|reads?)\\s+" + number + "\\s+over\\s+" + number;
  const rhythm = "(?:a\\s+)?(?:sinus rhythm|atrial fibrillation|ventricular tachycardia|asystole)(?:\\s+at\\s+" + number + "\\s+beats per minute)?";
  const status = "(?:lead disconnected|low battery|signal lost|measurement complete)";
  const display = "(?:displays?|shows?|reads?)\\s+(?:" + vital + "|" + pressure + "|" + rhythm + "|" + status + ")";
  return new RegExp("^" + actor + "\\s+(?:" + event + "|" + display + ")$", "iu").test(value);
}

function directlyAddressedParticipantIds(participants, text) {
  const value = String(text || "").trim();
  return participants.filter(isObject).filter(function (participant) {
    return asArray(participant.addressTerms).filter(isText).some(function (term) {
      const escaped = regexEscape(term.trim());
      const vocative = new RegExp("^(?:(?:hello|hi)\\s+)?" + escaped + "\\s*(?:,|:|\\b(?=\\s+(?:can|could|would|will|do|did|have|has|are|is|please|tell|describe|explain|what|when|where|why|how|which)\\b))", "i");
      const explicitRecipient = new RegExp("\\b(?:(?:this|that|my|the|next)\\s+)?(?:question|request)\\s+(?:is\\s+)?for\\s+" + escaped + "\\b", "i");
      const askedToAnswer = new RegExp("\\b(?:i(?:'d| would) like|i want|please ask)\\s+" + escaped + "\\s+to\\s+(?:answer|respond)\\b", "i");
      return vocative.test(value) || explicitRecipient.test(value) || askedToAnswer.test(value);
    });
  }).map(function (participant) { return participant.id; });
}

function auditVisibleMetadata(caseData, blueprint, registryRow, registry, issues) {
  if (!isObject(caseData)) return;

  function compare(actual, expected, code, location) {
    if (actual !== expected) {
      addIssue(issues, "critical", code, location, "Visible value " + JSON.stringify(actual) + " does not match controlled value " + JSON.stringify(expected) + ".");
    }
  }

  const encodedCaseNumber = Number((String(caseData.id || "").match(/^case-([0-9]{3})$/) || [])[1]);
  if (Number.isInteger(encodedCaseNumber)) {
    compare(caseData.displayNumber, "Case " + encodedCaseNumber, "display_number_identity_mismatch", "case.displayNumber");
  }

  if (registryRow) {
    compare(caseData.id, registryRow.caseId, "registry_case_id_mismatch", "case.id");
    compare(caseData.globalId, registryRow.globalId, "registry_global_id_mismatch", "case.globalId");
    compare(caseData.registryId, registryRow.registryId, "registry_id_mismatch", "case.registryId");
    compare(caseData.title, registryRow.title, "registry_title_mismatch", "case.title");
    compare(caseData.modality, registryRow.modality, "registry_modality_mismatch", "case.modality");
    compare(caseData.phase && caseData.phase.id, registryRow.phaseId, "registry_phase_mismatch", "case.phase.id");
    compare(caseData.pattern && caseData.pattern.id, registryRow.patternId, "registry_pattern_mismatch", "case.pattern.id");
    compare(caseData.format && caseData.format.predominantArea, registryRow.predominantArea, "registry_area_mismatch", "case.format.predominantArea");

    const phase = asArray(registry && registry.phases).find(function (item) { return item && item.id === registryRow.phaseId; });
    const pattern = asArray(registry && registry.patterns).find(function (item) { return item && item.id === registryRow.patternId; });
    if (phase) compare(caseData.phase && caseData.phase.title, phase.title, "registry_phase_title_mismatch", "case.phase.title");
    if (pattern) compare(caseData.pattern && caseData.pattern.title, pattern.title, "registry_pattern_title_mismatch", "case.pattern.title");
  }

  if (!blueprint || blueprint.__loadError) return;
  compare(caseData.id, blueprint.caseId, "blueprint_case_id_mismatch", "case.id");
  compare(caseData.registryId, blueprint.registryId, "blueprint_registry_id_mismatch", "case.registryId");
  compare(caseData.displayNumber, blueprint.station && blueprint.station.displayNumber, "blueprint_display_number_mismatch", "case.displayNumber");
  compare(caseData.title, blueprint.station && blueprint.station.title, "blueprint_title_mismatch", "case.title");
  compare(caseData.status, blueprint.station && blueprint.station.visibleStatus, "blueprint_visible_status_mismatch", "case.status");
  compare(caseData.statusLabel, blueprint.station && blueprint.station.statusLabel, "blueprint_status_label_mismatch", "case.statusLabel");
  compare(caseData.note, blueprint.station && blueprint.station.note, "blueprint_note_mismatch", "case.note");
  compare(caseData.modality, blueprint.station && blueprint.station.modality, "blueprint_modality_mismatch", "case.modality");
  compare(caseData.phase && caseData.phase.id, blueprint.station && blueprint.station.phase && blueprint.station.phase.id, "blueprint_phase_mismatch", "case.phase.id");
  compare(caseData.phase && caseData.phase.title, blueprint.station && blueprint.station.phase && blueprint.station.phase.title, "blueprint_phase_title_mismatch", "case.phase.title");
  compare(caseData.pattern && caseData.pattern.id, blueprint.station && blueprint.station.pattern && blueprint.station.pattern.id, "blueprint_pattern_mismatch", "case.pattern.id");
  compare(caseData.pattern && caseData.pattern.title, blueprint.station && blueprint.station.pattern && blueprint.station.pattern.title, "blueprint_pattern_title_mismatch", "case.pattern.title");
  compare(caseData.format && caseData.format.predominantArea, blueprint.station && blueprint.station.predominantArea, "blueprint_area_mismatch", "case.format.predominantArea");
  compare(parseMinutes(caseData.format && caseData.format.readingTime), blueprint.station && blueprint.station.readingMinutes, "blueprint_reading_time_mismatch", "case.format.readingTime");
  compare(parseMinutes(caseData.format && caseData.format.assessmentTime), blueprint.station && blueprint.station.assessmentMinutes, "blueprint_assessment_time_mismatch", "case.format.assessmentTime");

  if (registryRow) {
    compare(blueprint.variation && blueprint.variation.coverageSlot, registryRow.coverageSlot,
      "registry_coverage_slot_mismatch", "blueprint.variation.coverageSlot");
    compare(blueprint.variation && blueprint.variation.distinctJob, registryRow.distinctJob,
      "registry_distinct_job_mismatch", "blueprint.variation.distinctJob");
    compare(blueprint.variation && blueprint.variation.primaryFailureMode, registryRow.primaryFailureMode,
      "registry_failure_mode_mismatch", "blueprint.variation.primaryFailureMode");
    if (blueprint.releaseStatus === "audited" && registryRow.admissionDecision !== "admitted") {
      addIssue(issues, "critical", "registry_admission_mismatch", registryRow.caseId,
        "An audited blueprint requires an admitted registry decision.");
    }
    const comparedCaseIds = asArray(blueprint.variation && blueprint.variation.duplicateCheck &&
      blueprint.variation.duplicateCheck.comparedCaseIds);
    comparedCaseIds
      .forEach(function (comparedCaseId) {
        const compared = asArray(registry && registry.cases).find(function (item) { return item && item.caseId === comparedCaseId; });
        if (!compared) {
          addIssue(issues, "critical", "duplicate_comparison_case_missing", comparedCaseId,
            "The duplicate check refers to a case absent from the machine registry.");
        } else if (compared.caseId === caseData.id) {
          addIssue(issues, "critical", "duplicate_comparison_is_self", comparedCaseId,
            "A case cannot use itself as duplicate-comparison evidence.");
        } else if (compared.patternId !== registryRow.patternId) {
          addIssue(issues, "critical", "duplicate_comparison_pattern_mismatch", comparedCaseId,
            "Duplicate-comparison cases must belong to the same pattern.");
        }
      });
    const currentNumber = Number(String(registryRow.caseId).slice(-3));
    asArray(registry && registry.cases).filter(function (item) {
      return item && item.patternId === registryRow.patternId && item.status === "audited" &&
        Number(String(item.caseId).slice(-3)) < currentNumber;
    }).forEach(function (earlier) {
      if (!comparedCaseIds.includes(earlier.caseId)) {
        addIssue(issues, "critical", "duplicate_comparison_incomplete", registryRow.caseId,
          "Duplicate review must compare every earlier audited active case in the same pattern, including " + earlier.caseId + ".");
      }
    });
  }

  const visibleStemLines = asArray(caseData.stem && caseData.stem.lines);
  const controlledStemLines = asArray(blueprint.stem && blueprint.stem.lines);
  if (visibleStemLines.length !== controlledStemLines.length) {
    addIssue(issues, "critical", "blueprint_stem_count_mismatch", "case.stem.lines", "Visible and controlled Stem line counts differ.");
  }
  const stemCount = Math.max(visibleStemLines.length, controlledStemLines.length);
  for (let index = 0; index < stemCount; index += 1) {
    const visible = visibleStemLines[index];
    const controlled = controlledStemLines[index];
    if (!visible || !controlled || visible.id !== controlled.id || visible.text !== controlled.text) {
      addIssue(issues, "critical", "blueprint_stem_mismatch", "case.stem.lines[" + index + "]", "Stem line ID, text, and order must exactly match the blueprint.", visible && visible.text);
    }
  }

  const visibleTasks = asArray(caseData.stem && caseData.stem.tasks);
  const controlledTasks = asArray(blueprint.tasks);
  if (visibleTasks.length !== controlledTasks.length) {
    addIssue(issues, "critical", "blueprint_task_count_mismatch", "case.stem.tasks", "Visible and controlled task counts differ.");
  }
  const taskCount = Math.max(visibleTasks.length, controlledTasks.length);
  for (let index = 0; index < taskCount; index += 1) {
    const visible = visibleTasks[index];
    const controlled = controlledTasks[index];
    const timingMatches = visible && controlled &&
      ((controlled.visibleTiming === null && !Object.prototype.hasOwnProperty.call(visible, "timing")) ||
       (typeof controlled.visibleTiming === "string" && visible.timing === controlled.visibleTiming));
    if (!visible || !controlled || visible.id !== controlled.id || visible.text !== controlled.text || !timingMatches) {
      addIssue(issues, "critical", "blueprint_task_mismatch", "case.stem.tasks[" + index + "]", "Task ID, text, timing, and order must exactly match the blueprint.", visible && visible.text);
    }
  }
}

function auditStem(caseData, blueprint, issues) {
  const lines = asArray(caseData && caseData.stem && caseData.stem.lines);
  const tasks = asArray(caseData && caseData.stem && caseData.stem.tasks);
  if (lines.length < 2 || lines.some(function (line) { return !isObject(line) || !isText(line.id) || !isText(line.text); })) {
    addIssue(issues, "critical", "invalid_stem_structure", caseData && caseData.id, "The Stem requires at least two complete lines.");
  }
  if (tasks.length < 1 || tasks.length > 6) {
    addIssue(issues, "high", "task_count", caseData && caseData.id, "The Stem must contain one to six observable tasks.");
  }
  if (!unique(lines.map(function (line) { return line && line.id; }).filter(isText))) {
    addIssue(issues, "critical", "duplicate_stem_line_id", caseData && caseData.id, "Stem line IDs must be unique.");
  }
  if (!unique(tasks.map(function (task) { return task && task.id; }).filter(isText))) {
    addIssue(issues, "critical", "duplicate_task_id", caseData && caseData.id, "Visible task IDs must be unique.");
  }
  tasks.filter(function (task) { return task && Object.prototype.hasOwnProperty.call(task, "timing"); }).forEach(function (task) {
    const minutes = parseMinutes(task.timing);
    if (minutes === null || minutes <= 0 || minutes > 8) {
      addIssue(issues, "high", "task_timing", task.id, "Any timing stated in the Stem must be a positive duration no greater than eight minutes.");
    }
  });
  lines.forEach(function (line) {
    if (line && embeddedInstructionalMinutes(line.text).length > 0) {
      addIssue(issues, "high", "uncontrolled_stem_timing", line.id, "Stem narrative lines cannot contain a hidden timing instruction; use the controlled station format or task timing field.", line.text);
    }
  });

  tasks.forEach(function (task) {
    if (!task) return;
    const stated = embeddedMinutes(task.text);
    if (stated.length > 0 && !Object.prototype.hasOwnProperty.call(task, "timing")) {
      addIssue(issues, "high", "uncontrolled_task_timing", task.id, "Task text contains a timing instruction that is absent from the controlled timing field.", task.text);
    } else if (stated.length === 1 && Math.abs(stated[0] - parseMinutes(task.timing)) > 0.001) {
      addIssue(issues, "high", "task_text_timing_mismatch", task.id, "Task text and controlled task timing disagree.", task.text);
    } else if (stated.length > 1) {
      addIssue(issues, "high", "multiple_task_timings", task.id, "Task text contains more than one timing instruction.", task.text);
    }
    if (TASK_DIRECTED_URGENCY_PATTERN.test(String(task.text || ""))) {
      addIssue(issues, "high", "stem_signals_urgency", task.id,
        "The task directs the candidate toward an urgent disposition instead of neutrally assessing the assigned capability.", task.text);
    }
    if (blueprint && blueprint.stem && blueprint.stem.diagnosisVisibility === "hidden_to_be_derived" &&
        DIRECTED_TREATMENT_TASK_PATTERN.test(String(task.text || ""))) {
      addIssue(issues, "high", "stem_directs_treatment", task.id,
        "A hidden-diagnosis task must assess management without naming the critical treatment action.", task.text);
    }
  });
  const stemTaskText = lines.map(function (line) { return line && line.text; })
    .concat(tasks.map(function (task) { return task && task.text; })).filter(isText).join(" ");
  const learnerMetadataText = [caseData && caseData.title, caseData && caseData.statusLabel, caseData && caseData.note]
    .filter(isText).join(" ");
  const stemText = [learnerMetadataText, stemTaskText].filter(isText).join(" ");
  if (learnerMetadataMisrepresents(learnerMetadataText)) {
    addIssue(issues, "critical", "learner_metadata_misrepresentation", caseData && caseData.id,
      "Learner-facing metadata cannot claim that this original practice case is official, real, recalled or leaked AMC material.", learnerMetadataText);
  }
  if (STEM_URGENCY_PATTERN.test(stemText) || HOSPITAL_DISPOSITION_PATTERN.test(stemText) ||
      EMERGENCY_DISPOSITION_PATTERN.test(stemText)) {
    addIssue(issues, "high", "stem_signals_urgency", caseData && caseData.id, "The Stem discloses urgency or the intended management response.", stemText);
  }
  if (blueprint) {
    asArray(blueprint.stem && blueprint.stem.forbiddenTerms).forEach(function (term) {
      if (textContainsControlledTerm(stemText, term)) {
        addIssue(issues, "high", "stem_contains_forbidden_term", caseData && caseData.id, "The Stem or tasks disclose the controlled term " + JSON.stringify(term) + ".", stemText);
      }
    });
    const diagnosis = blueprint.clinicalTruth && blueprint.clinicalTruth.leadingDiagnosis && blueprint.clinicalTruth.leadingDiagnosis.text;
    const diagnosisTerms = asArray(blueprint.stem && blueprint.stem.diagnosisTerms).filter(isText);
    if (isText(diagnosis) && !diagnosisTerms.some(function (term) {
      return term.trim().toLowerCase() === diagnosis.trim().toLowerCase();
    })) {
      addIssue(issues, "critical", "leading_diagnosis_term_missing", "blueprint.stem.diagnosisTerms", "The diagnosis term list must include the exact leading diagnosis.");
    }
    const diagnosisForbidden = isText(diagnosis) && asArray(blueprint.stem && blueprint.stem.forbiddenTerms).some(function (term) {
      return isText(term) && term.trim().toLowerCase() === diagnosis.trim().toLowerCase();
    });
    if (blueprint.stem && blueprint.stem.diagnosisVisibility === "hidden_to_be_derived" &&
        isText(diagnosis) && !diagnosisForbidden) {
      addIssue(issues, "critical", "leading_diagnosis_not_guarded", "blueprint.stem.forbiddenTerms", "A diagnosis that must be derived must be an exact forbidden Stem term.");
    }
    if (blueprint.stem && blueprint.stem.diagnosisVisibility === "hidden_to_be_derived") {
      diagnosisTerms.forEach(function (term) {
        if (!asArray(blueprint.stem.forbiddenTerms).some(function (forbidden) {
          return isText(forbidden) && forbidden.trim().toLowerCase() === term.trim().toLowerCase();
        })) {
          addIssue(issues, "critical", "diagnosis_alias_not_guarded", "blueprint.stem.forbiddenTerms", "Hidden diagnosis term " + JSON.stringify(term) + " is not forbidden in the Stem.");
        }
      });
    }
    if (blueprint.stem && blueprint.stem.diagnosisVisibility === "provided_as_task_context" && isText(diagnosis)) {
      if (!textContainsControlledTerm(stemTaskText, diagnosis)) {
        addIssue(issues, "critical", "provided_diagnosis_missing", caseData && caseData.id, "The blueprint says the diagnosis is provided, but it is absent from the Stem and tasks.");
      }
      if (diagnosisForbidden) {
        addIssue(issues, "critical", "provided_diagnosis_forbidden", "blueprint.stem.forbiddenTerms", "A diagnosis intentionally provided in the Stem cannot also be forbidden.");
      }
      if (tasks.some(function (task) {
        const text = String(task && task.text || "");
        return /\bdiagnose\b/i.test(text) ||
          /\b(?:choose|select|nominate|formulate|identify|determine|decide|work out|establish|clarify|reach|state)\b[^.]{0,100}\b(?:the )?(?:most likely )?(?:cause|condition|diagnosis|differential(?: diagnosis| diagnoses)?|aetiology|underlying (?:problem|cause)|explanation)\b/i.test(text) ||
          /\bwhat is causing\b/i.test(text) ||
          /\b(?:what is|name)\b[^.]{0,80}\b(?:likely|most likely)?\s*(?:cause|condition|diagnosis|aetiology|underlying problem|explanation)\b/i.test(text) ||
          /\binterpret\b[^.]*\b(?:diagnos|cause|condition)\w*\b/i.test(text);
      })) {
        addIssue(issues, "critical", "provided_diagnosis_task_conflict", caseData && caseData.id, "The Stem provides the diagnosis while a task asks the candidate to derive it.");
      }
    }
  }
}

function auditConversation(caseData, blueprint, issues) {
  const turns = flattenTurns(caseData);
  const lines = flattenLines(caseData);
  const linesById = new Map();
  const indices = lineIndex(lines);
  const sections = asArray(caseData && caseData.run && caseData.run.sections).filter(isObject);
  if (!unique(sections.map(function (section) { return section.id; }).filter(isText))) {
    addIssue(issues, "critical", "duplicate_run_section_id", caseData && caseData.id, "Full Run section IDs must be unique.");
  }
  if (!unique(turns.map(function (turn) { return turn.id; }).filter(isText))) {
    addIssue(issues, "critical", "duplicate_run_turn_id", caseData && caseData.id, "Full Run turn IDs must be unique.");
  }

  lines.forEach(function (line) {
    if (!isText(line.id) || !isText(line.text) || !isText(line.speaker) || !isText(line.kind)) {
      addIssue(issues, "critical", "malformed_run_line", line && line.turnId, "Every Full Run line requires an ID, text, speaker, and kind.");
      return;
    }
    if (linesById.has(line.id)) {
      addIssue(issues, "critical", "duplicate_run_line_id", line.id, "Full Run line IDs must be unique.");
    }
    linesById.set(line.id, line);
    if (line.speaker === "Action" && line.kind !== "action") {
      addIssue(issues, "high", "action_kind_mismatch", line.id, "Action lines must use kind action.");
    }
    if (line.speaker !== "Action" && line.kind === "action") {
      addIssue(issues, "high", "spoken_kind_mismatch", line.id, "Only Action lines may use kind action.");
    }
    const participantSpeaker = !["Doctor", "Examiner", "Action"].includes(line.speaker);
    const allowedKinds = line.speaker === "Action" ? ["action"] :
      line.speaker === "Doctor" ? ["spoken", "handover"] :
      line.speaker === "Examiner" ? ["spoken", "finding", "investigation", "handover"] :
      participantSpeaker ? ["spoken"] : [];
    if (allowedKinds.length && !allowedKinds.includes(line.kind)) {
      addIssue(issues, "high", "speaker_kind_mismatch", line.id,
        line.speaker + " lines cannot use kind " + line.kind + ".", line.text);
    }
  });

  const handoverLines = lines.filter(function (line) { return line.kind === "handover"; });
  const visibleTaskText = asArray(caseData && caseData.stem && caseData.stem.tasks)
    .map(function (task) { return task && task.text; }).filter(isText).join(" ");
  if (handoverLines.length && !/\bhand[ -]?over\b/i.test(visibleTaskText)) {
    handoverLines.forEach(function (line) {
      addIssue(issues, "high", "handover_not_requested_by_task", line.id,
        "The Full Run performs a handover, but no visible station task asks for one.", line.text);
    });
  }

  const modality = blueprint && blueprint.station && blueprint.station.modality;
  if (["telephone", "video", "online"].includes(modality)) {
    lines.filter(function (line) { return line.speaker === "Action"; }).forEach(function (line) {
      const directInRoomAction = /\b(?:approaches?|seated beside|at the trolley|enters? the room|palpates?|auscultates?|performs? (?:a |the )?(?:physical |cardiovascular |respiratory |abdominal |neurological )?examination|checks? the room|positions? the patient)\b/i.test(line.text);
      const remotePhysicalAction = /\b(?:palpates?|auscultates?|takes? (?:the )?blood pressure|examines? (?:the )?(?:chest|abdomen|limbs?|patient))\b/i.test(line.text);
      if (directInRoomAction || (["telephone", "video", "online"].includes(modality) && remotePhysicalAction)) {
        addIssue(issues, "critical", "modality_action_contradiction", line.id,
          "The visible action cannot be performed through the declared station modality.", line.text);
      }
    });
  }

  const declaredParticipants = new Set(asArray(blueprint && blueprint.participants).map(function (item) {
    return item && item.speakerLabel;
  }).filter(isText));
  const allowedSpeakers = new Set(["Doctor", "Examiner", "Action"]);
  declaredParticipants.forEach(function (speaker) { allowedSpeakers.add(speaker); });
  lines.forEach(function (line) {
    if (blueprint && isText(line.speaker) && !allowedSpeakers.has(line.speaker)) {
      addIssue(issues, "critical", "undeclared_run_speaker", line.id, "Speaker " + line.speaker + " is not declared in the blueprint.");
    }
  });

  const doctorTurns = turns.filter(function (turn) { return turn.speaker === "Doctor"; });
  doctorTurns.forEach(function (turn) {
    const marks = questionMarkCount(turn.text);
    if (marks > 1) {
      addIssue(issues, "high", "multiple_questions_in_turn", turn.id, "Doctor turn contains " + marks + " question marks.", turn.text);
    }
    if (hasCompoundQuestion(turn.text)) {
      addIssue(issues, "high", "compound_question_in_turn", turn.id, "Doctor turn contains more than one information request.", turn.text);
    }
    const handover = /handover|isbar/i.test(String(turn.id) + " " + turn.text);
    const limit = handover ? 135 : 65;
    if (wordCount(turn.text) > limit) {
      addIssue(issues, "medium", "doctor_monologue", turn.id, "Doctor turn contains " + wordCount(turn.text) + " words and is unlikely to sound like natural turn-taking.", turn.text);
    }
  });
  turns.filter(function (turn) { return declaredParticipants.has(turn.speaker); }).forEach(function (turn) {
    if (wordCount(turn.text) > 75) {
      addIssue(issues, "medium", "participant_information_block", turn.id, "Participant turn contains " + wordCount(turn.text) + " words and may disclose too much at once.", turn.text);
    }
  });

  if (!blueprint || blueprint.__loadError) {
    const firstDoctor = doctorTurns[0];
    if (!firstDoctor) {
      addIssue(issues, "critical", "missing_doctor_turn", caseData && caseData.id, "The Full Run contains no Doctor turn.");
      return { turns, lines, linesById, indices };
    }
    const hasIdentity = /\b(?:confirm|check|tell me|provide)\b[^.?!]*\b(?:name|date of birth|dob|identity)\b/i.test(firstDoctor.text);
    if (!hasIdentity) {
      addIssue(issues, "critical", "identity_not_first", firstDoctor.id, "Identity must be completed before clinical history begins.", firstDoctor.text);
    }
    if (hasIdentity && clinicalContentPattern().test(firstDoctor.text)) {
      addIssue(issues, "critical", "identity_mixed_with_clinical_content", firstDoctor.id, "Identity and clinical history are combined in one Doctor turn.", firstDoctor.text);
    }
    const firstParticipant = nextLine(lines, indices.get(firstDoctor.lines[0] && firstDoctor.lines[0].id) || -1, function (line) {
      return line.kind !== "action" && line.speaker !== "Examiner" && line.speaker !== "Doctor";
    });
    if (firstParticipant && clinicalContentPattern().test(firstParticipant.text)) {
      addIssue(issues, "critical", "identity_response_contains_history", firstParticipant.id, "The identity reply also discloses clinical history.", firstParticipant.text);
    }
    return { turns, lines, linesById, indices };
  }

  const participants = asArray(blueprint.participants).filter(isObject);
  const participantById = new Map(participants.map(function (item) { return [item.id, item]; }));
  const directAddressControls = asArray(blueprint.interaction && blueprint.interaction.directAddresses).filter(isObject);
  const directAddressControlKeys = new Map();
  directAddressControls.forEach(function (address) {
    const line = linesById.get(address.lineId);
    const participant = participantById.get(address.participantId);
    const key = [address.lineId, address.participantId, normalizeRegistryText(address.addressTerm)].join("|");
    directAddressControlKeys.set(key, (directAddressControlKeys.get(key) || 0) + 1);
    if (!line || line.speaker !== "Doctor" || line.kind === "action") {
      addIssue(issues, "critical", "direct_address_line_mismatch", address.lineId,
        "A direct-address control must refer to a spoken Doctor line.");
      return;
    }
    if (!participant || !asArray(participant.addressTerms).includes(address.addressTerm)) {
      addIssue(issues, "critical", "direct_address_participant_mismatch", address.lineId,
        "The controlled address term must belong to the declared participant.", address.addressTerm);
      return;
    }
    const visibleCandidates = explicitVocativeCandidates(line.text).map(normalizeRegistryText);
    if (!visibleCandidates.includes(normalizeRegistryText(address.addressTerm))) {
      addIssue(issues, "critical", "direct_address_text_mismatch", address.lineId,
        "The exact controlled address term is not used as a visible vocative on this line.", line.text);
    }
  });
  directAddressControlKeys.forEach(function (count, key) {
    if (count > 1) addIssue(issues, "critical", "duplicate_direct_address_control", key,
      "A visible direct address must have exactly one control.");
  });
  lines.filter(function (line) { return line.speaker === "Doctor"; }).forEach(function (line) {
    explicitVocativeCandidates(line.text).forEach(function (candidate) {
      const normalizedCandidate = normalizeRegistryText(candidate);
      const matchingParticipants = participants.filter(function (participant) {
        return asArray(participant.addressTerms).some(function (term) {
          return normalizeRegistryText(term) === normalizedCandidate;
        });
      });
      if (matchingParticipants.length === 0) {
        addIssue(issues, "critical", "unknown_direct_address", line.id,
          "The Doctor directly addresses a name or title not controlled for any participant.", candidate);
      } else if (matchingParticipants.length > 1) {
        addIssue(issues, "critical", "ambiguous_direct_address", line.id,
          "The visible address term resolves to more than one participant.", candidate);
      } else {
        const key = [line.id, matchingParticipants[0].id, normalizedCandidate].join("|");
        if (directAddressControlKeys.get(key) !== 1) {
          addIssue(issues, "critical", "unmapped_direct_address", line.id,
            "Every visible direct address must have one exact participant control.", candidate);
        }
      }
    });
  });
  if (modality === "third_party") {
    const defaultParticipant = participantById.get(blueprint.interaction && blueprint.interaction.defaultInformationParticipantId);
    if (!defaultParticipant || defaultParticipant.role === "patient") {
      addIssue(issues, "critical", "third_party_modality_without_informant", "station.modality",
        "A third-party station requires a declared non-patient default informant.");
    }
  }
  if (modality === "model_equipment" && participants.length > 0 && blueprint.station.grammar !== "mixed") {
    addIssue(issues, "critical", "model_modality_with_direct_participant", "station.modality",
      "A model/equipment station cannot retain a direct participant consultation unless it is explicitly designed as mixed.");
  }
  const mappedParticipantLines = new Set();
  const participantControlCounts = new Map();
  function controlParticipantLine(lineId) {
    mappedParticipantLines.add(lineId);
    participantControlCounts.set(lineId, (participantControlCounts.get(lineId) || 0) + 1);
  }
  const mappedExaminerLines = new Set();
  const examinerControlCounts = new Map();
  function controlExaminerLine(lineId) {
    mappedExaminerLines.add(lineId);
    examinerControlCounts.set(lineId, (examinerControlCounts.get(lineId) || 0) + 1);
  }
  const identity = blueprint.interaction && blueprint.interaction.identity;
  const identityLine = identity && identity.mode === "not_applicable" ? null : exactLine(linesById, identity && identity.verificationLineId,
    identity && ["direct", "third_party"].includes(identity.mode) ? "Doctor" : null,
    identity && identity.verificationText, issues, "identity_verification_mismatch", "interaction.identity.verificationLineId");

  if (identityLine && ["record_or_wristband", "not_possible_with_reason"].includes(identity.mode) &&
      !["Doctor", "Action"].includes(identityLine.speaker)) {
    addIssue(issues, "critical", "identity_verification_mode_mismatch", identityLine.id, "This identity mode requires Doctor or Action evidence.", identityLine.text);
  }
  if (identityLine && identity.mode === "record_or_wristband" && !isRecordOrWristbandIdentityEvidence(identityLine.text)) {
    addIssue(issues, "critical", "identity_record_check_missing", identityLine.id,
      "Record or wristband mode requires visible evidence that identifiers were checked against the record or band.", identityLine.text);
  }
  if (identityLine && identity.mode === "not_possible_with_reason" && !isNotPossibleIdentityEvidence(identityLine.text)) {
    addIssue(issues, "critical", "identity_impossibility_evidence_missing", identityLine.id,
      "The visible identity line must state why identity cannot be established.", identityLine.text);
  }
  if (identity && identity.mode === "not_possible_with_reason" &&
      /\b(?:unconscious|unresponsive|non-verbal)\b/i.test(String(identity.verificationText || ""))) {
    const speakingPatient = lines.find(function (line) {
      const participant = participants.find(function (item) { return item.speakerLabel === line.speaker; });
      return participant && participant.role === "patient" && line.kind === "spoken";
    });
    if (speakingPatient) {
      addIssue(issues, "critical", "identity_incapacity_contradicts_dialogue", speakingPatient.id,
        "A patient described as unconscious, unresponsive or non-verbal cannot then provide the station dialogue.", speakingPatient.text);
    }
  }
  if (identity && identity.mode === "not_possible_with_reason" &&
      /\b(?:no (?:record|wristband|identifier)|identifiers? (?:are )?unknown)\b/i.test(String(identity.verificationText || "")) &&
      !/\b(?:unconscious|unresponsive|non-verbal|confused|language barrier|impaired capacity)\b/i.test(String(identity.verificationText || ""))) {
    const speakingPatient = lines.find(function (line) {
      const participant = participants.find(function (item) { return item.speakerLabel === line.speaker; });
      return participant && participant.role === "patient" && line.kind === "spoken";
    });
    if (speakingPatient) {
      addIssue(issues, "critical", "identity_not_possible_without_patient_reason", speakingPatient.id,
        "Missing records or a wristband do not justify skipping direct identity confirmation with a speaking patient.", identity.verificationText);
    }
  }
  if (identity && identity.mode === "not_possible_with_reason" &&
      /\blanguage barrier\b/i.test(String(identity.verificationText || ""))) {
    const firstPatientLine = lines.find(function (line) {
      const participant = participants.find(function (item) { return item.speakerLabel === line.speaker; });
      return participant && participant.role === "patient" && line.kind === "spoken";
    });
    const interpreterBridge = lines.find(function (line) {
      const participant = participants.find(function (item) { return item.speakerLabel === line.speaker; });
      return participant && participant.role === "interpreter" && (!firstPatientLine || indices.get(line.id) < indices.get(firstPatientLine.id));
    });
    if (firstPatientLine && !interpreterBridge) {
      addIssue(issues, "critical", "identity_language_barrier_without_support", firstPatientLine.id,
        "A stated language barrier requires visible interpreter or communication support before patient dialogue.", firstPatientLine.text);
    }
  }
  if (identity && identity.mode === "not_possible_with_reason" &&
      (wordCount(identity.rationale) < 5 || PLACEHOLDER_PATTERN.test(identity.rationale))) {
    addIssue(issues, "critical", "identity_rationale_inadequate", "interaction.identity.rationale", "A meaningful reason is required when identity cannot be confirmed.");
  }

  const identityParticipantIds = asArray(identity && identity.participantIds);
  identityParticipantIds.forEach(function (participantId) {
    const participant = participantById.get(participantId);
    if (!participant) return;
    if (participant.identityRequired && !participant.identityResponse) {
      addIssue(issues, "critical", "participant_identity_response_missing", participant.id, "An identity-required participant needs an exact identity response.");
      return;
    }
    if (participant.identityResponse) {
      const reply = exactLine(linesById, participant.identityResponse.lineId, participant.speakerLabel,
        participant.identityResponse.text, issues, "participant_identity_mismatch", participant.id);
      if (reply) controlParticipantLine(reply.id);
      if (reply && clinicalContentPattern().test(reply.text)) {
        addIssue(issues, "critical", "identity_response_contains_history", reply.id, "The identity response also discloses clinical history.", reply.text);
      }
      if (identityLine && reply && indices.get(reply.id) <= indices.get(identityLine.id)) {
        addIssue(issues, "critical", "identity_response_order", reply.id, "The identity response must follow the identity request.");
      }
    }
  });
  participants.filter(function (participant) { return participant.identityRequired; }).forEach(function (participant) {
    if (!identityParticipantIds.includes(participant.id)) {
      addIssue(issues, "critical", "identity_required_participant_omitted", participant.id, "This participant requires identity confirmation but is not included in the identity control.");
    }
  });

  const identityResponseLines = identityParticipantIds.map(function (participantId) {
    const participant = participantById.get(participantId);
    return participant && participant.identityResponse && linesById.get(participant.identityResponse.lineId);
  }).filter(Boolean);
  const identityResponseIndices = identityResponseLines.map(function (line) {
    return indices.get(line.id);
  }).filter(Number.isInteger);
  const identityCompleteAt = identityResponseIndices.length ? Math.max.apply(Math, identityResponseIndices) :
    (identityLine ? indices.get(identityLine.id) : -1);
  if (identityLine && ["direct", "third_party"].includes(identity.mode)) {
    const nextNonActionLines = lines.slice(indices.get(identityLine.id) + 1).filter(function (line) {
      return line.kind !== "action";
    }).slice(0, identityResponseLines.length);
    if (nextNonActionLines.length !== identityResponseLines.length || nextNonActionLines.some(function (line, index) {
      return line.id !== identityResponseLines[index].id;
    })) {
      addIssue(issues, "critical", "identity_response_not_immediate", identityLine.id, "Identity confirmation must be completed before another spoken exchange.");
    }
  }
  if (identityLine && identityCompleteAt >= 0) {
    const identityResponseIds = new Set(identityResponseLines.map(function (line) { return line.id; }));
    lines.forEach(function (line) {
      const index = indices.get(line.id);
      if (index > identityCompleteAt) return;
      if (line.speaker === "Doctor" && line.id !== identityLine.id) {
        const beforeIdentityRequest = index < indices.get(identityLine.id);
        const neutralIntroduction = beforeIdentityRequest && isPositiveDoctorIntroduction(line.text);
        if (!neutralIntroduction) {
          addIssue(issues, "critical", "clinical_content_before_identity", line.id, "No Doctor clinical content or additional request may occur before identity confirmation is complete.", line.text);
        }
      }
      if (declaredParticipants.has(line.speaker) && !identityResponseIds.has(line.id)) {
        addIssue(issues, "critical", "participant_content_before_identity", line.id, "Only the defined identity response may be spoken before identity confirmation is complete.", line.text);
      }
      const neutralExaminerOpening = blueprint.examiner && blueprint.examiner.opening &&
        line.id === blueprint.examiner.opening.lineId && line.text === blueprint.examiner.opening.text &&
        isNeutralExaminerOpening(line.text);
      if (line.speaker === "Examiner" && line.id !== identityLine.id && !neutralExaminerOpening) {
        addIssue(issues, "critical", "clinical_content_before_identity", line.id,
          "Only the controlled administrative opening may be spoken by the Examiner before identity confirmation.", line.text);
      }
      if (line.speaker === "Action" && line.id !== identityLine.id && !isNeutralPreIdentityAction(line.text)) {
        addIssue(issues, "critical", "clinical_action_before_identity", line.id, "Only neutral preparation such as hand hygiene, privacy and approach may occur before identity confirmation.", line.text);
      }
    });
  }
  const firstDoctorRequest = lines.find(function (line) {
    return line.speaker === "Doctor" && detectInformationRequest(line.text);
  });
  if (identityLine && firstDoctorRequest) {
    if (["direct", "third_party"].includes(identity.mode) && firstDoctorRequest.id !== identityLine.id) {
      addIssue(issues, "critical", "identity_not_first", firstDoctorRequest.id, "The first Doctor information request is not identity verification.", firstDoctorRequest.text);
    }
    if (["record_or_wristband", "not_possible_with_reason"].includes(identity.mode) &&
        indices.get(identityLine.id) >= indices.get(firstDoctorRequest.id)) {
      addIssue(issues, "critical", "identity_not_first", firstDoctorRequest.id, "The defined identity limitation or record check must appear before clinical questions.", firstDoctorRequest.text);
    }
  }
  if (identityLine && ["direct", "third_party"].includes(identity.mode) && !isAdministrativeIdentityRequest(identityLine.text)) {
    addIssue(issues, "critical", "identity_mixed_with_clinical_content", identityLine.id, "Identity and clinical history are combined in one Doctor line.", identityLine.text);
  }
  const consents = asArray(blueprint.interaction && blueprint.interaction.consents).filter(isObject);
  const consentRequestIds = new Set();
  const consentResponseIds = new Set();
  consents.forEach(function (consent) {
    consentRequestIds.add(consent.requestLineId);
    consentResponseIds.add(consent.responseLineId);
    const participant = participantById.get(consent.participantId);
    const request = exactLine(linesById, consent.requestLineId, "Doctor", consent.requestText, issues, "consent_request_mismatch", consent.id);
    const response = exactLine(linesById, consent.responseLineId, participant && participant.speakerLabel,
      consent.responseText, issues, "consent_response_mismatch", consent.id);
    if (response) controlParticipantLine(response.id);
    directAddressControls.filter(function (address) { return address.lineId === consent.requestLineId; })
      .forEach(function (address) {
        if (address.participantId !== consent.participantId) {
          addIssue(issues, "critical", "consent_addressee_mismatch", consent.id,
            "A directly addressed consent request must name the controlled consenting participant.", address.addressTerm);
        }
      });
    if (request && response) {
      if (indices.get(request.id) <= identityCompleteAt) {
        addIssue(issues, "critical", "consent_before_identity", consent.id, "Consent must be requested after identity confirmation is complete.");
      }
      if (hasCompoundQuestion(request.text)) {
        addIssue(issues, "critical", "consent_bundled_with_information_request", consent.id, "The consent request also contains a separate clinical information request.", request.text);
      }
      if (!isPositiveConsentRequest(request.text, consent.scope)) {
        addIssue(issues, "critical", "consent_request_not_permission", consent.id,
          "The consent line must make a clear, scope-appropriate request for permission.", request.text);
      }
      if (!isAffirmativeConsentResponse(response.text)) {
        addIssue(issues, "critical", "consent_not_granted", consent.id,
          "A linear Full Run may continue only after the participant clearly grants the requested consent.", response.text);
      }
      const immediate = nextLine(lines, indices.get(request.id), function (line) { return line.kind !== "action"; });
      if (!immediate || immediate.id !== response.id) {
        addIssue(issues, "critical", "consent_response_not_immediate", consent.id, "Consent must receive the defined immediate response.");
      }
    }
  });
  const consultationNeedsConsent = participants.length > 0 &&
    ["consultation", "history", "diagnostic_formulation", "management_counselling_education", "mental_state_risk", "telephone_third_party", "mixed"]
      .includes(blueprint.station && blueprint.station.grammar);
  if (consultationNeedsConsent && !consents.some(function (consent) { return consent.scope === "consultation"; })) {
    addIssue(issues, "critical", "consultation_consent_missing", "interaction.consents", "This station requires a mapped consultation consent exchange.");
  }
  if (blueprint.station && blueprint.station.grammar === "procedure_consent" &&
      !consents.some(function (consent) { return consent.scope === "procedure"; })) {
    addIssue(issues, "critical", "procedure_consent_missing", "interaction.consents", "This station requires a mapped procedure consent exchange.");
  }
  const examinationConsentControl = consents.find(function (consent) { return consent.scope === "examination"; });
  const procedureConsentControl = consents.find(function (consent) { return consent.scope === "procedure"; });
  lines.filter(function (line) {
    return (line.speaker === "Action" ||
      (line.speaker === "Doctor" && questionMarkCount(line.text) === 0 && !consentRequestIds.has(line.id))) &&
      EXAMINATION_ACTION_PATTERN.test(line.text);
  }).forEach(function (line) {
    if (line.speaker === "Doctor") {
      addIssue(issues, "critical", "spoken_clinical_action", line.id,
        "A performed examination must be represented as an Action line, not hidden inside Doctor speech.", line.text);
    }
    if (!examinationConsentControl) {
      addIssue(issues, "critical", "examination_action_without_consent", line.id,
        "A visible physical examination requires explicit examination consent.", line.text);
    } else if (indices.get(examinationConsentControl.responseLineId) >= indices.get(line.id)) {
      addIssue(issues, "critical", "examination_before_consent", line.id,
        "Physical examination cannot begin before examination consent is granted.", line.text);
    }
    if (/\b(?:rectal|pelvic|breast|genital|prostate)\b/i.test(line.text)) {
      const requestText = examinationConsentControl && examinationConsentControl.requestText;
      const specificConsent = requestText && /\b(?:rectal|pelvic|breast|genital|prostate)\b/i.test(requestText);
      const chaperone = lines.slice(0, indices.get(line.id)).some(function (candidate) {
        return /\bchaperone\b/i.test(candidate.text) && /\b(?:offer|offered|present|would you like|arrange)\b/i.test(candidate.text);
      });
      if (!specificConsent) {
        addIssue(issues, "critical", "intimate_examination_specific_consent_missing", line.id,
          "An intimate examination requires consent that names the proposed examination.", line.text);
      }
      if (!chaperone) {
        addIssue(issues, "critical", "intimate_examination_chaperone_missing", line.id,
          "An intimate examination requires a visible chaperone offer or arrangement.", line.text);
      }
    }
  });
  if (blueprint.station && blueprint.station.grammar !== "acute_resuscitation") {
    lines.filter(function (line) {
      return (line.speaker === "Action" ||
        (line.speaker === "Doctor" && questionMarkCount(line.text) === 0 && !consentRequestIds.has(line.id))) &&
        PROCEDURE_ACTION_PATTERN.test(line.text);
    }).forEach(function (line) {
      if (line.speaker === "Doctor") {
        addIssue(issues, "critical", "spoken_clinical_action", line.id,
          "A performed procedure must be represented as an Action line, not hidden inside Doctor speech.", line.text);
      }
      if (!procedureConsentControl) {
        addIssue(issues, "critical", "procedure_action_without_consent", line.id,
          "A visible procedure requires explicit procedure consent outside acute resuscitation.", line.text);
      } else if (indices.get(procedureConsentControl.responseLineId) >= indices.get(line.id)) {
        addIssue(issues, "critical", "procedure_before_consent", line.id,
          "A procedure cannot begin before procedure consent is granted.", line.text);
      }
    });
  }
  const examinationTasks = asArray(blueprint.tasks).filter(function (task) {
    return task && task.assessmentArea === "Examination";
  });
  const examinationConsent = consents.find(function (consent) { return consent.scope === "examination"; });
  if (participants.length > 0 && examinationTasks.length > 0 && !examinationConsent) {
    addIssue(issues, "critical", "examination_consent_missing", "interaction.consents",
      "A participant examination task requires explicit examination consent.");
  }
  if (examinationConsent) {
    const consentIndex = indices.get(examinationConsent.responseLineId);
    const examinationTaskIds = new Set(examinationTasks.map(function (task) { return task.id; }));
    asArray(blueprint.performance && blueprint.performance.taskEvidence).filter(function (mapping) {
      return mapping && examinationTaskIds.has(mapping.taskId);
    }).forEach(function (mapping) {
      asArray(mapping.runLineIds).forEach(function (lineId) {
        const line = linesById.get(lineId);
        const administrative = line && (line.id === (identityLine && identityLine.id) ||
          (line.speaker === "Doctor" && isPositiveDoctorIntroduction(line.text)) ||
          (line.speaker === "Action" && isNeutralPreIdentityAction(line.text)) || consentRequestIds.has(line.id));
        if (line && !administrative && ["Doctor", "Action"].includes(line.speaker) && Number.isInteger(consentIndex) &&
            indices.get(lineId) < consentIndex) {
          addIssue(issues, "critical", "examination_before_consent", lineId,
            "Examination-task performance cannot occur before examination consent is granted.", line.text);
        }
      });
    });
  }
  const sensitiveConsent = consents.find(function (consent) { return consent.scope === "sensitive_history"; });
  const declaredSensitiveLineIds = new Set(asArray(blueprint.interaction && blueprint.interaction.sensitiveTopicLineIds));
  lines.filter(function (line) {
    return line.speaker === "Doctor" && SENSITIVE_TOPIC_PATTERN.test(String(line.text || ""));
  }).forEach(function (line) {
    if (!declaredSensitiveLineIds.has(line.id)) {
      addIssue(issues, "critical", "sensitive_history_not_declared", line.id,
        "An inherently sensitive question must be declared and protected by the sensitive-history consent control.", line.text);
    }
  });
  declaredSensitiveLineIds.forEach(function (lineId) {
    if (!sensitiveConsent) {
      addIssue(issues, "critical", "sensitive_history_consent_missing", lineId, "Sensitive history requires prior mapped consent.");
    } else if (indices.get(sensitiveConsent.responseLineId) >= indices.get(lineId)) {
      addIssue(issues, "critical", "sensitive_history_before_consent", lineId, "Sensitive history appears before consent is completed.");
    }
  });

  const informationRequests = asArray(blueprint.interaction && blueprint.interaction.informationRequests).filter(isObject);
  const consultationConsentCompleteAt = consents.filter(function (consent) { return consent.scope === "consultation"; })
    .map(function (consent) { return indices.get(consent.responseLineId); }).filter(Number.isInteger)
    .reduce(function (latest, index) { return Math.max(latest, index); }, -1);
  if (consultationNeedsConsent && consultationConsentCompleteAt >= 0) {
    lines.forEach(function (line) {
      const index = indices.get(line.id);
      if (index <= identityCompleteAt || index > consultationConsentCompleteAt ||
          consentRequestIds.has(line.id) || consentResponseIds.has(line.id)) return;
      if (["Doctor", "Action"].includes(line.speaker)) {
        addIssue(issues, "critical", "clinical_content_before_consent", line.id,
          "Clinical questioning, examination or treatment cannot begin before consultation consent is granted.", line.text);
      }
    });
  }
  const requestByLineId = new Map(informationRequests.map(function (item) { return [item.lineId, item]; }));
  const examinerRequestIds = new Set(asArray(blueprint.examiner && blueprint.examiner.releases).map(function (item) {
    return item && item.requestLineId;
  }));
  const excludedRequestIds = new Set([identity && identity.verificationLineId].concat(Array.from(consentRequestIds), Array.from(examinerRequestIds)));
  lines.filter(function (line) {
    return line.speaker === "Doctor" && detectInformationRequest(line.text) && !excludedRequestIds.has(line.id);
  }).forEach(function (line) {
    if (!requestByLineId.has(line.id)) {
      addIssue(issues, "critical", "unmapped_information_request", line.id, "Every Doctor information request must be mapped in the blueprint.", line.text);
    }
  });
  informationRequests.forEach(function (request) {
    const line = exactLine(linesById, request.lineId, "Doctor", request.requestText, issues, "information_request_mismatch", request.id);
    const addressedParticipant = participantById.get(request.addressedParticipantId);
    const responseParticipant = participantById.get(request.responseParticipantId);
    const response = exactLine(linesById, request.expectedResponseLineId, responseParticipant && responseParticipant.speakerLabel, request.responseText,
      issues, "information_response_mismatch", request.id);
    if (!response) {
      addIssue(issues, "critical", "information_response_missing", request.id, "The mapped response line is missing.");
    }
    if (line && !isSubstantiveInformationRequest(line.text, request.requestType)) {
      addIssue(issues, "critical", "information_request_grammar_unrecognised", line.id,
        "A mapped information request must use a substantive controlled question or imperative-request grammar.", line.text);
    }
    if (line) {
      directAddressControls.filter(function (address) { return address.lineId === request.lineId; })
        .forEach(function (address) {
          if (address.participantId !== request.addressedParticipantId) {
            addIssue(issues, "critical", "information_request_addressee_mismatch", line.id,
              "The direct-address control conflicts with the request's controlled addressee.", address.addressTerm);
          }
        });
      const directAddressees = directlyAddressedParticipantIds(participants, line.text);
      if (directAddressees.some(function (participantId) { return participantId !== request.addressedParticipantId; })) {
        addIssue(issues, "critical", "information_request_addressee_mismatch", line.id,
          "The request directly addresses a participant other than its controlled addressee.", line.text);
      }
      const defaultAddressee = blueprint.interaction && blueprint.interaction.defaultInformationParticipantId;
      if (participants.length > 1 && request.addressedParticipantId !== defaultAddressee &&
          !directAddressees.includes(request.addressedParticipantId)) {
        addIssue(issues, "critical", "information_request_addressee_unproven", line.id,
          "A request to a non-default participant needs an explicit vocative naming that participant.", line.text);
      }
      if (directAddressees.length === 0 && request.addressedParticipantId !== defaultAddressee) {
        addIssue(issues, "critical", "information_request_addressee_mismatch", line.id,
          "An unaddressed request belongs to the controlled default participant.", line.text);
      }
      if (addressedParticipant && request.responseParticipantId !== addressedParticipant.id) {
        addIssue(issues, "critical", "information_response_addressee_mismatch", request.id,
          "The controlled respondent is not the participant addressed by the request.");
      }
      if (indices.get(line.id) <= identityCompleteAt) {
        addIssue(issues, "critical", "information_request_before_identity", line.id, "Clinical information cannot be requested before identity confirmation is complete.", line.text);
      }
      if (consultationNeedsConsent && consultationConsentCompleteAt >= 0 && indices.get(line.id) <= consultationConsentCompleteAt) {
        addIssue(issues, "critical", "information_request_before_consent", line.id, "Clinical information cannot be requested before consultation consent is complete.", line.text);
      }
      if (request.requestType === "question" && questionMarkCount(line.text) !== 1) {
        addIssue(issues, "high", "question_plan_is_not_single_question", line.id, "A mapped question must contain exactly one question mark.", line.text);
      }
      if (request.requestType === "imperative_request" && questionMarkCount(line.text) !== 0) {
        addIssue(issues, "high", "question_plan_is_not_single_question", line.id, "An imperative request cannot also contain a question.", line.text);
      }
      if (hasCompoundQuestion(line.text)) {
        addIssue(issues, "high", "question_plan_is_not_single_question", line.id, "The mapped request contains more than one information request.", line.text);
      }
    }
    if (line && response) {
      if (wordCount(response.text) > 55) {
        addIssue(issues, "high", "information_response_overdisclosure_risk", request.id,
          "A focused participant answer over 55 words must be split or shortened before release.", response.text);
      }
      if (request.responseOutcome === "answered" && NONANSWER_RESPONSE_PATTERN.test(response.text)) {
        addIssue(issues, "critical", "information_response_outcome_contradiction", request.id,
          "A response labelled answered cannot contain refusal, privacy, or non-understanding language without a recovery branch.", response.text);
      }
      asArray(request.responseEvidencePhrases).forEach(function (phrase) {
        if (!normalizeRegistryText(response.text).includes(normalizeRegistryText(phrase))) {
          addIssue(issues, "critical", "information_response_evidence_missing", request.id,
            "Each reviewed response-evidence phrase must occur exactly in the controlled participant answer.", phrase);
        }
      });
      const immediate = nextLine(lines, indices.get(line.id), function (item) { return item.kind !== "action"; });
      if (!immediate || immediate.id !== response.id) {
        addIssue(issues, "critical", "information_response_not_immediate", request.id, "The defined response must immediately follow the request.");
      }
      const followingDoctor = nextLine(lines, indices.get(response.id), function (item) { return item.speaker === "Doctor"; });
      if (!followingDoctor || followingDoctor.id !== request.nextDoctorLineId) {
        addIssue(issues, "critical", "answer_not_used_by_next_doctor_turn", request.id, "The next Doctor line does not match the response-use plan.");
      }
    }
  });
  const responsePhraseOwners = new Map();
  informationRequests.forEach(function (request) {
    asArray(request.responseEvidencePhrases).forEach(function (phrase) {
      const normalized = normalizeRegistryText(phrase);
      if (responsePhraseOwners.has(normalized) && responsePhraseOwners.get(normalized) !== request.id) {
        addIssue(issues, "critical", "response_evidence_phrase_reused", request.id,
          "Response-evidence phrases must uniquely identify one controlled answer.", phrase);
      } else responsePhraseOwners.set(normalized, request.id);
    });
  });
  informationRequests.forEach(function (request) {
    const response = linesById.get(request.expectedResponseLineId);
    const requestIndex = indices.get(request.lineId);
    if (!response || !Number.isInteger(requestIndex)) return;
    informationRequests.filter(function (other) {
      return other.id !== request.id && Number.isInteger(indices.get(other.lineId)) && indices.get(other.lineId) > requestIndex;
    }).forEach(function (future) {
      asArray(future.responseEvidencePhrases).forEach(function (phrase) {
        if (normalizeRegistryText(response.text).includes(normalizeRegistryText(phrase))) {
          addIssue(issues, "high", "participant_answer_releases_future_evidence", request.id,
            "The answer releases exact evidence reserved for a later focused request.", phrase);
        }
      });
    });
  });

  participants.forEach(function (participant) {
    const affectLineId = participant.openingAffect && participant.openingAffect.evidenceLineId;
    if (affectLineId) {
      const affectLine = linesById.get(affectLineId);
      if (!affectLine) {
        addIssue(issues, "critical", "opening_affect_evidence_missing", participant.id, "Opening affect refers to a missing Full Run line.");
      } else if (!participant.speakerLabel || !["Action", "Examiner", participant.speakerLabel].includes(affectLine.speaker)) {
        addIssue(issues, "critical", "opening_affect_evidence_source", participant.id, "Opening affect must be observable in an Action, Examiner, or participant line.");
      } else {
        const affectTokens = meaningfulClinicalTokens(participant.openingAffect.text);
        const visibleTokens = meaningfulClinicalTokens(affectLine.text);
        if (Array.from(affectTokens).some(function (token) { return !visibleTokens.has(token); })) {
          addIssue(issues, "critical", "opening_affect_evidence_mismatch", participant.id,
            "Every controlled opening-affect descriptor must be present in its visible evidence line.", participant.openingAffect.text);
        }
      }
    }
    if (participant.initialVoluntary) {
      const trigger = exactLine(linesById, participant.initialVoluntary.triggerLineId, "Doctor", undefined,
        issues, "initial_voluntary_trigger_mismatch", participant.id);
      const response = exactLine(linesById, participant.initialVoluntary.responseLineId, participant.speakerLabel,
        participant.initialVoluntary.text, issues, "initial_voluntary_response_mismatch", participant.id);
      if (response) controlParticipantLine(response.id);
      if (trigger && response && indices.get(trigger.id) >= indices.get(response.id)) {
        addIssue(issues, "critical", "initial_voluntary_before_trigger", participant.id, "Initial voluntary information appears before its trigger.");
      }
    }
    asArray(participant.disclosures).filter(isObject).forEach(function (disclosure) {
      const trigger = linesById.get(disclosure.triggerLineId);
      const response = exactLine(linesById, disclosure.responseLineId, participant.speakerLabel,
        disclosure.responseText, issues, "participant_disclosure_mismatch", disclosure.id);
      if (!trigger) addIssue(issues, "critical", "disclosure_trigger_missing", disclosure.id, "The disclosure trigger line is missing.");
      if (response) controlParticipantLine(response.id);
      if (trigger && response && indices.get(trigger.id) >= indices.get(response.id)) {
        addIssue(issues, "critical", "disclosure_before_trigger", disclosure.id, "Participant disclosure appears before its trigger.");
      }
      if (response && disclosure.nextDoctorLineId) {
        const followingDoctor = nextLine(lines, indices.get(response.id), function (item) { return item.speaker === "Doctor"; });
        if (!followingDoctor || followingDoctor.id !== disclosure.nextDoctorLineId) {
          addIssue(issues, "critical", "participant_response_not_used", disclosure.id, "The next Doctor line does not match the disclosure-use plan.");
        }
      }
    });
    asArray(participant.concerns).filter(isObject).forEach(function (concern) {
      const response = exactLine(linesById, concern.responseLineId, participant.speakerLabel,
        concern.responseText, issues, "participant_concern_mismatch", concern.id);
      if (response) controlParticipantLine(response.id);
      if (response) {
        const followingDoctor = nextLine(lines, indices.get(response.id), function (item) { return item.speaker === "Doctor"; });
        if (!followingDoctor || followingDoctor.id !== concern.nextDoctorLineId) {
          addIssue(issues, "critical", "concern_not_answered", concern.id, "The participant's concern is not followed by the defined Doctor answer.");
        }
      }
    });
  });

  informationRequests.forEach(function (request) {
    if (!mappedParticipantLines.has(request.expectedResponseLineId)) {
      addIssue(issues, "critical", "information_response_without_participant_control", request.id, "Each information response must also be controlled as initial information, a disclosure, or a concern.");
    }
  });
  participants.forEach(function (participant) {
    if (participant.initialVoluntary) {
      const request = requestByLineId.get(participant.initialVoluntary.triggerLineId);
      if (!request || request.expectedResponseLineId !== participant.initialVoluntary.responseLineId ||
          request.responseParticipantId !== participant.id) {
        addIssue(issues, "critical", "initial_voluntary_request_mismatch", participant.id, "Initial voluntary information must be the immediate controlled answer to its mapped opening request.");
      }
    }
    asArray(participant.disclosures).filter(function (disclosure) {
      return disclosure && ["open_question", "specific_question"].includes(disclosure.triggerType);
    }).forEach(function (disclosure) {
      const request = requestByLineId.get(disclosure.triggerLineId);
      if (!request || request.expectedResponseLineId !== disclosure.responseLineId || request.responseParticipantId !== participant.id) {
        addIssue(issues, "critical", "question_disclosure_request_mismatch", disclosure.id, "A question-triggered disclosure must exactly match the controlled information request and participant.");
      }
    });
  });

  participantControlCounts.forEach(function (count, lineId) {
    if (count > 1) {
      addIssue(issues, "critical", "duplicate_participant_line_control", lineId, "A participant line is controlled by more than one identity, consent, disclosure, initial-information, or concern rule.");
    }
  });
  lines.filter(function (line) { return declaredParticipants.has(line.speaker); }).forEach(function (line) {
    if (!mappedParticipantLines.has(line.id)) {
      addIssue(issues, "critical", "unmapped_participant_line", line.id, "Every participant line must be controlled by identity, consent, initial information, concern, or disclosure.", line.text);
    }
  });

  const opening = blueprint.examiner && blueprint.examiner.opening;
  const openingLine = opening && exactLine(linesById, opening.lineId, "Examiner", opening.text,
    issues, "examiner_opening_mismatch", "examiner.opening");
  if (openingLine) controlExaminerLine(openingLine.id);
  if (openingLine && !isNeutralExaminerOpening(openingLine.text)) {
    addIssue(issues, "critical", "examiner_opening_discloses_clinical_content", openingLine.id,
      "An Examiner opening before identity must be administrative and cannot disclose clinical findings or results.", openingLine.text);
  }
  const closing = blueprint.examiner && blueprint.examiner.closing;
  const closingLine = closing && exactLine(linesById, closing.lineId, "Examiner", closing.text,
    issues, "examiner_closing_mismatch", "examiner.closing");
  if (closingLine) controlExaminerLine(closingLine.id);
  if (closingLine && !isNeutralExaminerClosing(closingLine.text)) {
    addIssue(issues, "critical", "examiner_closing_discloses_clinical_content", closingLine.id,
      "An Examiner closing must be administrative and cannot disclose a finding, outcome or diagnosis.", closingLine.text);
  }
  const firstSpoken = lines.find(function (line) { return line.kind !== "action"; });
  const lastSpoken = lines.slice().reverse().find(function (line) { return line.kind !== "action"; });
  if (openingLine && firstSpoken && openingLine.id !== firstSpoken.id) {
    addIssue(issues, "high", "examiner_opening_not_first", openingLine.id, "The examiner opening must be the first spoken line.");
  }
  if (openingLine && lines[0] && openingLine.id !== lines[0].id) {
    addIssue(issues, "high", "examiner_opening_not_first_event", openingLine.id,
      "When an Examiner opening is defined, it must be the first Full Run event.");
  }
  if (closingLine && lastSpoken && closingLine.id !== lastSpoken.id) {
    addIssue(issues, "high", "examiner_closing_not_last", closingLine.id, "The examiner closing must be the final spoken line.");
  }
  if (closingLine && lines[lines.length - 1] && closingLine.id !== lines[lines.length - 1].id) {
    addIssue(issues, "high", "examiner_closing_not_last_event", closingLine.id,
      "When an Examiner closing is defined, it must be the final Full Run event.");
  }
  asArray(blueprint.examiner && blueprint.examiner.availableAtStartStemLineIds).forEach(function (stemLineId) {
    if (!asArray(caseData.stem && caseData.stem.lines).some(function (line) { return line && line.id === stemLineId; })) {
      addIssue(issues, "critical", "examiner_start_information_mismatch", stemLineId, "Examiner information said to be available at the start is absent from the Stem.");
    }
  });
  asArray(blueprint.examiner && blueprint.examiner.releases).filter(isObject).forEach(function (release) {
    const request = exactLine(linesById, release.requestLineId, "Doctor", release.requestExactText,
      issues, "examiner_request_mismatch", release.id);
    const response = exactLine(linesById, release.responseLineId, "Examiner", release.responseText,
      issues, "examiner_release_mismatch", release.id);
    if (!asArray(release.permittedModalities).includes(modality)) {
      addIssue(issues, "critical", "examiner_release_modality_mismatch", release.id,
        "This Examiner release has not been source-reviewed for the declared station modality.");
    }
    if (response && ["telephone", "video", "online"].includes(modality) &&
        /\byou\s+(?:directly\s+)?(?:palpate|auscultate|examine|percuss|take|measure|feel|inspect)\b/i.test(response.text)) {
      addIssue(issues, "critical", "examiner_remote_physical_action", release.id,
        "An Examiner release cannot claim that the candidate directly performed a physical action through a remote modality.", response.text);
    }
    if (response) controlExaminerLine(response.id);
    if (request && response) {
      const immediate = nextLine(lines, indices.get(request.id), function (line) { return line.kind !== "action"; });
      if (!immediate || immediate.id !== response.id) {
        addIssue(issues, "critical", "examiner_release_not_immediate", release.id, "The defined Examiner result must immediately follow its request.");
      }
      if (release.nextDoctorLineId) {
        const followingDoctor = nextLine(lines, indices.get(response.id), function (line) { return line.speaker === "Doctor"; });
        if (!followingDoctor || followingDoctor.id !== release.nextDoctorLineId) {
          addIssue(issues, "critical", "examiner_result_not_used", release.id, "The next Doctor line does not match the result-use plan.");
        }
      }
    }
  });
  asArray(blueprint.examiner && blueprint.examiner.scheduledPrompts).filter(isObject).forEach(function (prompt) {
    const response = exactLine(linesById, prompt.responseLineId, prompt.speaker, prompt.responseText,
      issues, "examiner_prompt_mismatch", prompt.id);
    if (response && prompt.speaker === "Examiner") controlExaminerLine(response.id);
    if (prompt.triggerLineId) {
      if (!linesById.has(prompt.triggerLineId) || (response && indices.get(prompt.triggerLineId) >= indices.get(response.id))) {
        addIssue(issues, "critical", "examiner_prompt_trigger_mismatch", prompt.id, "Scheduled prompt trigger is missing or follows the prompt.");
      }
    } else if (!/\b(?:time|minute|after|remaining)\b/i.test(prompt.triggerDescription)) {
      addIssue(issues, "critical", "examiner_prompt_trigger_undefined", prompt.id, "A scheduled prompt without a line trigger needs an explicit time trigger.");
    }
  });
  lines.filter(function (line) { return line.speaker === "Examiner"; }).forEach(function (line) {
    if (!mappedExaminerLines.has(line.id)) {
      addIssue(issues, "critical", "unmapped_examiner_line", line.id, "Every Examiner line must be declared in the blueprint.", line.text);
    }
  });
  examinerControlCounts.forEach(function (count, lineId) {
    if (count > 1) {
      addIssue(issues, "critical", "duplicate_examiner_line_control", lineId, "An Examiner line is controlled by more than one opening, closing, release, or scheduled-prompt rule.");
    }
  });

  return { turns, lines, linesById, indices };
}

function auditEvidenceAndPerformance(caseData, blueprint, conversation, registryRow, issues) {
  if (!blueprint || blueprint.__loadError) return;
  const lines = conversation.lines;
  const linesById = conversation.linesById;
  const indices = conversation.indices;
  const stationModality = blueprint.station && blueprint.station.modality;
  const lineIds = new Set(lines.map(function (line) { return line.id; }).filter(isText));
  const taskEvidence = asArray(blueprint.performance && blueprint.performance.taskEvidence).filter(isObject);
  const lineTaskCounts = new Map();
  const lineTaskIds = new Map();
  taskEvidence.forEach(function (mapping) {
    asArray(mapping.runLineIds).forEach(function (lineId) {
      lineTaskCounts.set(lineId, (lineTaskCounts.get(lineId) || 0) + 1);
      if (!lineTaskIds.has(lineId)) lineTaskIds.set(lineId, mapping.taskId);
      if (!lineIds.has(lineId)) {
        addIssue(issues, "critical", "task_evidence_line_missing", mapping.taskId, "Task evidence refers to missing Full Run line " + lineId + ".");
      }
    });
  });

  const clinicalConcepts = allClinicalConcepts(blueprint.clinicalTruth);
  const conceptById = new Map(clinicalConcepts.map(function (concept) { return [concept.id, concept]; }));
  const claims = asArray(blueprint.sourceBasis && blueprint.sourceBasis.claimMap).filter(isObject);
  const claimById = new Map(claims.map(function (claim) { return [claim.id, claim]; }));
  const administrativeLineIds = new Set();
  const identity = blueprint.interaction && blueprint.interaction.identity;
  if (identity && isText(identity.verificationLineId)) administrativeLineIds.add(identity.verificationLineId);
  asArray(blueprint.participants).filter(isObject).forEach(function (participant) {
    if (participant.identityResponse && isText(participant.identityResponse.lineId)) {
      administrativeLineIds.add(participant.identityResponse.lineId);
    }
  });
  asArray(blueprint.interaction && blueprint.interaction.consents).filter(isObject).forEach(function (consent) {
    administrativeLineIds.add(consent.requestLineId);
    administrativeLineIds.add(consent.responseLineId);
  });
  if (blueprint.examiner && blueprint.examiner.opening) administrativeLineIds.add(blueprint.examiner.opening.lineId);
  if (blueprint.examiner && blueprint.examiner.closing) administrativeLineIds.add(blueprint.examiner.closing.lineId);
  function isSubstantiveClinicalLine(lineId) {
    const line = linesById.get(lineId);
    return Boolean(line) && !administrativeLineIds.has(lineId) &&
      !(line.speaker === "Action" && isNeutralPreIdentityAction(line.text));
  }
  const taskById = new Map(asArray(blueprint.tasks).filter(isObject).map(function (task) { return [task.id, task]; }));
  taskEvidence.forEach(function (mapping) {
    const task = taskById.get(mapping.taskId);
    if (!task) return;
    const candidateLines = asArray(mapping.runLineIds).map(function (lineId) { return linesById.get(lineId); })
      .filter(function (line) {
        return line && ["Doctor", "Action"].includes(line.speaker) && isSubstantiveClinicalLine(line.id);
      });
    if (candidateLines.length === 0) {
      addIssue(issues, "critical", "task_without_candidate_evidence", task.id,
        "A completed task needs substantive Doctor or Action evidence.");
      return;
    }
    const recipientTokens = meaningfulClinicalTokens(task.recipient);
    const actionTokens = meaningfulClinicalTokens(task.actionVerb);
    const specificTokens = Array.from(meaningfulClinicalTokens(task.text)).filter(function (token) {
      const baseToken = token.replace(/['’]s$/i, "");
      return !TASK_SEMANTIC_GENERIC_WORDS.has(baseToken) && !recipientTokens.has(baseToken) && !actionTokens.has(baseToken);
    });
    const requiredEvidence = asArray(mapping.requiredEvidence).filter(isObject);
    const requirementTokens = meaningfulClinicalTokens(requiredEvidence.map(function (item) { return item.requirement; }).join(" "));
    if (specificTokens.some(function (token) { return !requirementTokens.has(token); })) {
      addIssue(issues, "critical", "task_semantic_control_mismatch", task.id,
        "Every specific task subject must be named in its reviewed semantic-evidence requirements.", task.text);
    }
    requiredEvidence.forEach(function (evidence) {
      const evidenceLine = linesById.get(evidence.lineId);
      if (!asArray(mapping.runLineIds).includes(evidence.lineId) || !evidenceLine ||
          !["Doctor", "Action"].includes(evidenceLine.speaker) || !isSubstantiveClinicalLine(evidence.lineId)) {
        addIssue(issues, "critical", "task_required_evidence_line_mismatch", task.id,
          "Required task evidence must be a substantive mapped Doctor or Action line.", evidence.lineId);
      } else {
        if (!normalizeRegistryText(evidenceLine.text).includes(normalizeRegistryText(evidence.exactPhrase))) {
          addIssue(issues, "critical", "task_required_evidence_phrase_missing", task.id,
            "The reviewed exact evidence phrase is absent from its controlled line.", evidence.exactPhrase);
        }
        if (!hasStandaloneReviewedPhrase(evidenceLine.text, evidence.positivePerformancePhrase)) {
          addIssue(issues, "critical", "task_positive_performance_phrase_missing", task.id,
            "The reviewed positive-performance phrase is absent as a standalone visible clause.", evidence.positivePerformancePhrase);
        }
        if (NEGATED_PERFORMANCE_PATTERN.test(evidence.positivePerformancePhrase)) {
          addIssue(issues, "critical", "task_positive_performance_phrase_negated", task.id,
            "A reviewed positive-performance phrase cannot itself state non-performance.", evidence.positivePerformancePhrase);
        }
      }
    });
    if (specificTokens.length > 0) {
      const evidenceTokens = meaningfulClinicalTokens(candidateLines.map(function (line) { return line.text; }).join(" "));
      if (specificTokens.some(function (token) { return !evidenceTokens.has(token); })) {
        addIssue(issues, "critical", "task_semantic_evidence_mismatch", task.id,
          "Every specific subject in the task must be present in its mapped Doctor or Action evidence.", task.text);
      }
    }
  });

  clinicalConcepts.forEach(function (concept) {
    if (!asArray(concept.runLineIds).some(isSubstantiveClinicalLine)) {
      addIssue(issues, "critical", "clinical_concept_without_substantive_evidence", concept.id,
        "Every clinical concept needs at least one non-administrative Full Run evidence line.");
    }
    asArray(concept.runLineIds).forEach(function (lineId) {
      if (!lineIds.has(lineId)) {
        addIssue(issues, "critical", "clinical_concept_line_missing", concept.id, "Clinical concept refers to missing Full Run line " + lineId + ".");
      }
    });
    asArray(concept.sourceClaimIds).forEach(function (claimId) {
      const claim = claimById.get(claimId);
      if (claim && !asArray(claim.clinicalConceptIds).includes(concept.id)) {
        addIssue(issues, "critical", "clinical_claim_reverse_link_missing", concept.id, "Claim " + claimId + " does not link back to this clinical concept.");
      }
      if (claim && !asArray(concept.runLineIds).some(function (lineId) { return asArray(claim.runLineIds).includes(lineId); })) {
        addIssue(issues, "critical", "clinical_claim_line_evidence_disconnected", concept.id, "Claim " + claimId + " and this clinical concept do not share any Full Run evidence line.");
      }
    });
  });
  claims.forEach(function (claim) {
    if (claim.claimType !== "exam_standard" && !asArray(claim.runLineIds).some(isSubstantiveClinicalLine)) {
      addIssue(issues, "critical", "clinical_claim_without_substantive_evidence", claim.id,
        "Every clinical claim needs at least one non-administrative Full Run evidence line.");
    }
    asArray(claim.runLineIds).forEach(function (lineId) {
      if (!lineIds.has(lineId)) {
        addIssue(issues, "critical", "source_claim_line_missing", claim.id, "Source claim refers to missing Full Run line " + lineId + ".");
      } else if (claim.claimType !== "exam_standard" && !asArray(claim.taskIds).includes(lineTaskIds.get(lineId))) {
        addIssue(issues, "critical", "source_claim_task_mismatch", claim.id,
          "Clinical claim evidence line " + lineId + " is not assigned to one of the claim's tasks.");
      }
    });
    if (claim.claimType !== "exam_standard") {
      asArray(claim.taskIds).forEach(function (taskId) {
        if (!asArray(claim.runLineIds).some(function (lineId) { return lineTaskIds.get(lineId) === taskId; })) {
          addIssue(issues, "critical", "source_claim_task_without_line", claim.id,
            "Clinical claim task " + taskId + " has no claim evidence line assigned to it.");
        }
      });
    }
    asArray(claim.clinicalConceptIds).forEach(function (conceptId) {
      const concept = conceptById.get(conceptId);
      if (concept && !asArray(concept.sourceClaimIds).includes(claim.id)) {
        addIssue(issues, "critical", "source_claim_reverse_link_missing", claim.id, "Clinical concept " + conceptId + " does not link back to this claim.");
      }
    });
  });

  asArray(blueprint.clinicalTruth && blueprint.clinicalTruth.criticalActions).filter(isObject).forEach(function (concept) {
    if (!asArray(concept.runLineIds).some(function (lineId) {
      const line = linesById.get(lineId);
      return line && ["Doctor", "Action"].includes(line.speaker) &&
        !(line.speaker === "Action" && isNeutralPreIdentityAction(line.text));
    })) {
      addIssue(issues, "critical", "critical_action_without_candidate_evidence", concept.id, "A critical action needs visible Doctor or Action evidence.");
    }
  });
  const criticalActions = asArray(blueprint.clinicalTruth && blueprint.clinicalTruth.criticalActions).filter(isObject);
  const criticalActionById = new Map(criticalActions.map(function (concept) { return [concept.id, concept]; }));
  const criticalActionTimings = asArray(blueprint.clinicalTruth && blueprint.clinicalTruth.criticalActionTimings).filter(isObject);
  const timingConceptIds = criticalActionTimings.map(function (timing) { return timing.criticalActionConceptId; });
  if (!unique(criticalActionTimings.map(function (timing) { return timing.id; })) || !unique(timingConceptIds)) {
    addIssue(issues, "critical", "critical_action_timing_duplicate", "clinicalTruth.criticalActionTimings",
      "Critical-action timing controls require unique IDs and one control per critical action.");
  }
  criticalActions.forEach(function (concept) {
    if (!timingConceptIds.includes(concept.id)) {
      addIssue(issues, "critical", "critical_action_timing_missing", concept.id,
        "Every critical action requires a source-reviewed trigger and latest-permitted line.");
    }
  });
  criticalActionTimings.forEach(function (timing) {
    const concept = criticalActionById.get(timing.criticalActionConceptId);
    const triggerIndex = indices.get(timing.triggerLineId);
    const latestIndex = indices.get(timing.latestPermittedLineId);
    if (!concept) {
      addIssue(issues, "critical", "critical_action_timing_concept_missing", timing.id,
        "The timing control refers to an unknown critical action.");
      return;
    }
    if (!Number.isInteger(triggerIndex) || !Number.isInteger(latestIndex) || triggerIndex > latestIndex) {
      addIssue(issues, "critical", "critical_action_timing_interval_invalid", timing.id,
        "The trigger and latest-permitted lines must define a valid visible interval.");
      return;
    }
    if (!asArray(timing.sourceClaimIds).every(function (claimId) {
      return asArray(concept.sourceClaimIds).includes(claimId) && claimById.has(claimId);
    })) {
      addIssue(issues, "critical", "critical_action_timing_claim_mismatch", timing.id,
        "The timing rationale must cite claims already linked to the controlled critical action.");
    }
    const timelyCandidate = asArray(concept.runLineIds).some(function (lineId) {
      const line = linesById.get(lineId);
      const index = indices.get(lineId);
      return line && ["Doctor", "Action"].includes(line.speaker) && Number.isInteger(index) &&
        index >= triggerIndex && index <= latestIndex &&
        !(line.speaker === "Action" && isNeutralPreIdentityAction(line.text)) &&
        hasStandaloneReviewedPhrase(line.text, timing.positiveActionPhrase) &&
        !NEGATED_PERFORMANCE_PATTERN.test(timing.positiveActionPhrase) &&
        hasMeaningfulClinicalOverlap(line.text, concept.text);
    });
    if (!timelyCandidate) {
      addIssue(issues, "critical", "critical_action_outside_deadline", timing.id,
        "The critical action has no visible candidate action within its reviewed trigger-to-deadline interval.");
    }
  });

  const keySteps = asArray(blueprint.marking && blueprint.marking.keySteps).filter(isObject);
  const keyStepSignatures = new Map();
  keySteps.forEach(function (step) {
    const signature = asArray(step.runLineIds).slice().sort().join("|");
    if (keyStepSignatures.has(signature)) {
      addIssue(issues, "critical", "duplicate_marking_step_evidence", step.id,
        "Key steps " + keyStepSignatures.get(signature) + " and " + step.id + " use the same evidence set.");
    } else keyStepSignatures.set(signature, step.id);
    asArray(step.runLineIds).forEach(function (lineId) {
      if (!lineIds.has(lineId)) addIssue(issues, "critical", "marking_step_line_missing", step.id, "Key step refers to missing Full Run line " + lineId + ".");
      else if (!asArray(step.taskIds).includes(lineTaskIds.get(lineId))) {
        addIssue(issues, "critical", "marking_step_task_mismatch", step.id, "Key-step evidence line " + lineId + " is not assigned to one of the key step's tasks.");
      }
    });
    if (!asArray(step.runLineIds).some(function (lineId) {
      const line = linesById.get(lineId);
      return line && ["Doctor", "Action"].includes(line.speaker) &&
        !(line.speaker === "Action" && isNeutralPreIdentityAction(line.text));
    })) {
      addIssue(issues, "critical", "marking_step_without_candidate_evidence", step.id, "A key step needs visible Doctor or Action evidence.");
    }
    if (!asArray(step.sourceClaimIds).some(function (claimId) {
      const claim = claimById.get(claimId);
      return claim && claim.claimType !== "exam_standard" && asArray(step.runLineIds).some(function (lineId) {
        const taskId = lineTaskIds.get(lineId);
        return asArray(claim.runLineIds).includes(lineId) && asArray(step.taskIds).includes(taskId) &&
          asArray(claim.taskIds).includes(taskId);
      });
    })) {
      addIssue(issues, "critical", "marking_step_claim_mismatch", step.id,
        "A key step must share an exact evidence line and task with a cited clinical claim.");
    }
  });
  const markingDomains = asArray(blueprint.marking && blueprint.marking.domains).filter(isObject);
  const domainSignatures = new Map();
  markingDomains.forEach(function (domain) {
    const signature = asArray(domain.runLineIds).slice().sort().join("|");
    if (domainSignatures.has(signature)) {
      addIssue(issues, "critical", "duplicate_marking_domain_evidence", domain.name,
        "Marking domains " + domainSignatures.get(signature) + " and " + domain.name + " use the same evidence set.");
    } else domainSignatures.set(signature, domain.name);
    asArray(domain.runLineIds).forEach(function (lineId) {
      if (!lineIds.has(lineId)) addIssue(issues, "critical", "marking_domain_line_missing", domain.name, "Domain refers to missing Full Run line " + lineId + ".");
      else if (!asArray(domain.taskIds).includes(lineTaskIds.get(lineId))) {
        addIssue(issues, "critical", "marking_domain_task_mismatch", domain.name, "Domain evidence line " + lineId + " is not assigned to one of the domain's tasks.");
      }
    });
    if (!asArray(domain.runLineIds).some(function (lineId) {
      const line = linesById.get(lineId);
      return line && ["Doctor", "Action"].includes(line.speaker) &&
        !(line.speaker === "Action" && isNeutralPreIdentityAction(line.text));
    })) {
      addIssue(issues, "critical", "marking_domain_without_candidate_evidence", domain.name, "A marking domain needs visible Doctor or Action evidence.");
    }
    const approachDomain = domain.name === "Approach to patient/relative/carer/other health professional";
    if (approachDomain && !asArray(domain.runLineIds).some(function (lineId) {
      const line = linesById.get(lineId);
      return line && line.speaker === "Doctor" && line.kind !== "action";
    })) {
      addIssue(issues, "critical", "approach_domain_without_interpersonal_evidence", domain.name,
        "The Approach domain needs spoken interpersonal evidence, not preparation alone.");
    }
    if (!approachDomain && !asArray(domain.sourceClaimIds).some(function (claimId) {
      const claim = claimById.get(claimId);
      return claim && claim.claimType !== "exam_standard" && asArray(domain.runLineIds).some(function (lineId) {
        const taskId = lineTaskIds.get(lineId);
        return asArray(claim.runLineIds).includes(lineId) && asArray(domain.taskIds).includes(taskId) &&
          asArray(claim.taskIds).includes(taskId);
      });
    })) {
      addIssue(issues, "critical", "marking_domain_claim_mismatch", domain.name,
        "A non-Approach domain must share an exact evidence line and task with a cited clinical claim.");
    }
  });
  asArray(blueprint.marking && blueprint.marking.projectSafetyErrors).filter(isObject).forEach(function (item) {
    asArray(item.preventedByLineIds).forEach(function (lineId) {
      if (!lineIds.has(lineId)) addIssue(issues, "critical", "project_safety_error_line_missing", item.id, "Project safety control refers to missing Full Run line " + lineId + ".");
      else if (!["Doctor", "Action"].includes(linesById.get(lineId).speaker)) {
        addIssue(issues, "critical", "project_safety_error_wrong_speaker", item.id, "Project safety prevention must be evidenced by a Doctor or Action line.");
      }
    });
    const preventionLineIds = asArray(item.preventedByLineIds);
    const referencedSafetyConcepts = asArray(item.safetyConceptIds).map(function (conceptId) { return conceptById.get(conceptId); })
      .filter(Boolean);
    const linkedClinicalClaims = asArray(item.sourceClaimIds).map(function (claimId) { return claimById.get(claimId); })
      .filter(function (claim) { return claim && claim.claimType !== "exam_standard"; });
    if (!preventionLineIds.some(function (lineId) {
      const line = linesById.get(lineId);
      const taskId = lineTaskIds.get(lineId);
      const substantive = line && ["Doctor", "Action"].includes(line.speaker) &&
        !(line.speaker === "Action" && isNeutralPreIdentityAction(line.text));
      const safetyContext = [item.description]
        .concat(referencedSafetyConcepts.map(function (concept) { return concept.text; }))
        .concat(linkedClinicalClaims.map(function (claim) { return claim.claim; })).join(" ");
      return substantive && referencedSafetyConcepts.some(function (concept) {
        return asArray(concept.runLineIds).includes(lineId);
      }) && linkedClinicalClaims.some(function (claim) {
        return asArray(claim.runLineIds).includes(lineId) && asArray(claim.taskIds).includes(taskId);
      }) && hasMeaningfulClinicalOverlap(line.text, safetyContext);
    })) {
      addIssue(issues, "critical", "project_safety_error_claim_mismatch", item.id,
        "A project safety control must share a substantive prevention line and task with its safety concept and clinical claim.");
    }
  });

  const actionLines = lines.filter(function (line) { return line.speaker === "Action" && line.kind === "action"; });
  const actionDurations = asArray(blueprint.performance && blueprint.performance.actionDurations).filter(isObject);
  const actionConsentById = new Map(asArray(blueprint.interaction && blueprint.interaction.consents).filter(isObject)
    .map(function (consent) { return [consent.id, consent]; }));
  const actionParticipantById = new Map(asArray(blueprint.participants).filter(isObject)
    .map(function (participant) { return [participant.id, participant]; }));
  const criticalActionLineIds = new Set(asArray(blueprint.clinicalTruth && blueprint.clinicalTruth.criticalActions)
    .filter(isObject).flatMap(function (concept) { return asArray(concept.runLineIds); }));
  const durationIds = actionDurations.map(function (item) { return item.lineId; });
  if (!unique(durationIds)) {
    addIssue(issues, "critical", "duplicate_action_duration", "performance.actionDurations", "Action duration line IDs must be unique.");
  }
  actionLines.forEach(function (line) {
    if (!durationIds.includes(line.id)) {
      addIssue(issues, "high", "action_duration_missing", line.id, "Every Action line needs an observed duration.");
    }
  });
  actionDurations.forEach(function (item) {
    const line = linesById.get(item.lineId);
    if (!line) {
      addIssue(issues, "critical", "action_duration_line_missing", item.lineId, "Action duration refers to a missing line.");
    } else if (line.speaker !== "Action" || line.kind !== "action") {
      addIssue(issues, "critical", "action_duration_on_spoken_line", item.lineId, "Action duration can only be attached to an Action line.");
    } else {
      const actorParticipant = actionParticipantById.get(item.performedByParticipantId);
      const actorStartsLine = actionLineStartsWithActor(line.text, item.actorExactPhrase);
      if (!actorStartsLine) {
        addIssue(issues, "critical", "action_actor_text_mismatch", item.lineId,
          "The exact controlled actor must be the visible grammatical subject of the Action line.", item.actorExactPhrase);
      }
      if (item.performedBy === "doctor" &&
          (!DOCTOR_ACTOR_PATTERN.test(item.actorExactPhrase) || !actorStartsLine)) {
        addIssue(issues, "critical", "action_actor_control_mismatch", item.lineId,
          "A Doctor-performed Action must begin with the exact controlled Doctor actor.", item.actorExactPhrase);
      }
      if (["participant", "third_party"].includes(item.performedBy)) {
        if (!actorParticipant || !actorPhraseMatchesParticipant(actorParticipant, item.actorExactPhrase)) {
          addIssue(issues, "critical", "action_actor_control_mismatch", item.lineId,
            "The visible Action actor must resolve to the controlled participant or third party.", item.actorExactPhrase);
        } else {
          const genericTerms = genericRoleActorTerms(actorParticipant.role);
          if (genericTerms.includes(normalizeRegistryText(item.actorExactPhrase)) &&
              asArray(blueprint.participants).filter(function (participant) {
                return participant && participant.role === actorParticipant.role;
              }).length !== 1) {
            addIssue(issues, "critical", "action_actor_control_mismatch", item.lineId,
              "A generic role actor is permitted only when it resolves to one participant.", item.actorExactPhrase);
          }
        }
      }
      if (item.performedBy === "third_party" && actorParticipant && actorParticipant.role === "patient") {
        addIssue(issues, "critical", "action_actor_control_mismatch", item.lineId,
          "A patient cannot be relabelled as a third-party performer.", item.actorExactPhrase);
      }
      if (item.performedBy === "equipment") {
        const equipmentActor = /^(?:the\s+)?(?:monitor|alarm|device|machine|screen|telephone|phone|pulse oximeter|ECG monitor)$/i;
        if (!equipmentActor.test(String(item.actorExactPhrase || "").trim()) || item.actionClass !== "equipment_event") {
          addIssue(issues, "critical", "action_actor_control_mismatch", item.lineId,
            "Equipment may only perform a controlled equipment event.", item.actorExactPhrase);
        }
      }
      if (item.actionClass === "neutral_preparation" && !isNeutralPreIdentityAction(line.text)) {
        addIssue(issues, "critical", "action_class_text_mismatch", item.lineId,
          "A neutral-preparation classification requires positive hand-hygiene, privacy, safety, equipment-check or approach wording.", line.text);
      }
      if (["participant", "third_party"].includes(item.performedBy) && !actorParticipant) {
        addIssue(issues, "critical", "action_actor_control_mismatch", item.lineId,
          "The controlled Action actor must be a declared participant.", item.performedByParticipantId);
      }
      if (DOCTOR_ACTOR_PATTERN.test(line.text) && item.performedBy !== "doctor") {
        addIssue(issues, "critical", "action_class_text_mismatch", item.lineId,
          "A line visibly performed by the Doctor cannot be assigned to another controlled actor.", line.text);
      }
      if (item.actionClass === "neutral_preparation" && item.performedBy !== "doctor") {
        addIssue(issues, "critical", "action_actor_control_mismatch", item.lineId,
          "Neutral clinical preparation is controlled as a Doctor action.", line.text);
      }
      if (item.actionClass === "participant_observation" &&
          (item.performedBy !== "participant" || !actorParticipant ||
           !isControlledParticipantObservation(line.text, item.actorExactPhrase))) {
        addIssue(issues, "critical", "action_class_text_mismatch", item.lineId,
          "A participant observation must use the controlled observable-state grammar and identify the participant actor.", line.text);
      }
      if (item.actionClass === "equipment_event" &&
          (item.performedBy !== "equipment" || !isControlledEquipmentEvent(line.text, item.actorExactPhrase))) {
        addIssue(issues, "critical", "action_class_text_mismatch", item.lineId,
          "An equipment event must use the controlled device-event grammar and equipment actor.", line.text);
      }
      if (EXAMINATION_ACTION_PATTERN.test(line.text) && !["examination", "emergency"].includes(item.actionClass)) {
        addIssue(issues, "critical", "action_class_text_mismatch", item.lineId,
          "The visible examination action conflicts with its controlled action class.", line.text);
      }
      if (PROCEDURE_ACTION_PATTERN.test(line.text) && !["procedure", "treatment", "emergency"].includes(item.actionClass)) {
        addIssue(issues, "critical", "action_class_text_mismatch", item.lineId,
          "The visible procedure or treatment action conflicts with its controlled action class.", line.text);
      }
      if (TREATMENT_ACTION_PATTERN.test(line.text) && !["treatment", "emergency"].includes(item.actionClass)) {
        addIssue(issues, "critical", "action_class_text_mismatch", item.lineId,
          "The visible treatment action conflicts with its controlled action class.", line.text);
      }
      if (["examination", "procedure", "treatment", "emergency"].includes(item.actionClass) && item.performedBy === "equipment") {
        addIssue(issues, "critical", "action_actor_control_mismatch", item.lineId,
          "Equipment cannot be the performer of an examination, procedure, treatment or emergency intervention.", line.text);
      }
      if (["telephone", "video", "online"].includes(stationModality) && item.performedBy === "doctor" &&
          ["examination", "procedure", "treatment", "emergency"].includes(item.actionClass)) {
        addIssue(issues, "critical", "remote_doctor_action_contradiction", item.lineId,
          "A remote station cannot show the Doctor directly performing an in-room clinical action.", line.text);
      }
      if (["examination", "procedure", "treatment"].includes(item.actionClass)) {
        const consent = actionConsentById.get(item.consentId);
        const requiredScope = item.actionClass === "examination" ? "examination" : "procedure";
        if (!consent || consent.scope !== requiredScope || consent.outcome !== "granted") {
          addIssue(issues, "critical", "action_consent_control_mismatch", item.lineId,
            "The action must cite a granted consent control with the correct scope.", item.consentId);
        } else if (!Number.isInteger(indices.get(consent.responseLineId)) || indices.get(consent.responseLineId) >= indices.get(line.id)) {
          addIssue(issues, "critical", "action_before_controlled_consent", item.lineId,
            "The cited consent must be granted before the controlled action.", line.text);
        }
      }
      if (item.actionClass === "emergency" && (!isText(item.exceptionRationale) || !criticalActionLineIds.has(line.id))) {
        addIssue(issues, "critical", "emergency_action_control_mismatch", item.lineId,
          "An emergency consent exception requires a rationale and exact linkage to a critical-action concept.", line.text);
      }
      if (item.actionClass === "neutral_preparation" && item.seconds > 30) {
        addIssue(issues, "high", "neutral_pre_identity_action_too_long", item.lineId,
          "Neutral preparation cannot consume more than 30 seconds of the station.", line.text);
      }
    }
  });

  lines.forEach(function (line) {
    const count = lineTaskCounts.get(line.id) || 0;
    if (count === 0) {
      addIssue(issues, "critical", "run_line_not_mapped_to_task", line.id, "Every Full Run line must belong to exactly one task.", line.text);
    } else if (count > 1) {
      addIssue(issues, "critical", "run_line_mapped_to_multiple_tasks", line.id, "A Full Run line belongs to more than one task.");
    }
  });
  asArray(blueprint.interaction && blueprint.interaction.informationRequests).filter(isObject).forEach(function (request) {
    if (lineTaskIds.get(request.lineId) !== request.taskId) {
      addIssue(issues, "critical", "information_request_task_mismatch", request.id, "The information request is not mapped to its declared task.");
    }
    if (lineTaskIds.get(request.expectedResponseLineId) !== request.taskId) {
      addIssue(issues, "critical", "information_response_task_mismatch", request.id,
        "The controlled response is not mapped to the information request's task.");
    }
    if (lineTaskIds.get(request.nextDoctorLineId) !== request.taskId) {
      addIssue(issues, "critical", "information_next_doctor_task_mismatch", request.id,
        "The next Doctor line that uses the response is not mapped to the information request's task.");
    }
  });

  const listen = blueprint.performance && blueprint.performance.listenTest;
  const observedSeconds = listen && listen.observedSeconds;
  const evidenceSeconds = taskEvidence.reduce(function (sum, item) {
    return sum + (Number.isInteger(item.observedSeconds) ? item.observedSeconds : 0);
  }, 0);
  if (Number.isInteger(observedSeconds) && evidenceSeconds !== observedSeconds) {
    addIssue(issues, "high", "task_time_does_not_match_listen_test", "performance.taskEvidence", "Task evidence totals " + evidenceSeconds + " seconds but the listen-through records " + observedSeconds + " seconds.");
  }
  if (Number.isInteger(observedSeconds) && (observedSeconds < 420 || observedSeconds > 480)) {
    addIssue(issues, "high", "listen_duration_outside_station_window", "performance.listenTest.observedSeconds", "The complete listened Full Run must take between 420 and 480 seconds.");
  }
  if (Number.isInteger(observedSeconds)) {
    const taskById = new Map(asArray(blueprint.tasks).filter(isObject).map(function (task) { return [task.id, task]; }));
    taskEvidence.forEach(function (evidence) {
      const task = taskById.get(evidence.taskId);
      if (!task) return;
      const expected = observedSeconds * task.internalMinutes / 8;
      if (Math.abs(evidence.observedSeconds - expected) > 40) {
        addIssue(issues, "high", "task_time_allocation_mismatch", evidence.taskId,
          "Observed task time differs materially from the hidden internal allocation.");
      }
    });
    const primaryTask = asArray(blueprint.tasks).find(function (task) { return task && task.primary; });
    const primaryEvidence = primaryTask && taskEvidence.find(function (item) { return item.taskId === primaryTask.id; });
    if (primaryEvidence && taskEvidence.some(function (item) {
      return item.taskId !== primaryTask.id && item.observedSeconds >= primaryEvidence.observedSeconds;
    })) {
      addIssue(issues, "high", "primary_task_not_dominant_in_listen_test", primaryTask.id, "The primary task must receive more observed time than every secondary task.");
    }
  }
  const actionSecondsByLineId = new Map(actionDurations.map(function (item) { return [item.lineId, item.seconds || 0]; }));
  taskEvidence.forEach(function (evidence) {
    if (!Number.isInteger(evidence.observedSeconds)) return;
    const evidenceLines = asArray(evidence.runLineIds).map(function (lineId) { return linesById.get(lineId); }).filter(Boolean);
    const taskActionSeconds = evidenceLines.reduce(function (sum, line) {
      return sum + (line.kind === "action" ? (actionSecondsByLineId.get(line.id) || 0) : 0);
    }, 0);
    const taskSpokenWords = evidenceLines.filter(function (line) { return line.kind !== "action"; })
      .reduce(function (sum, line) { return sum + wordCount(line.text); }, 0);
    const taskSpeakingSeconds = evidence.observedSeconds - taskActionSeconds;
    if (taskSpokenWords === 0) {
      if (taskActionSeconds !== evidence.observedSeconds) {
        addIssue(issues, "high", "task_time_without_evidence", evidence.taskId,
          "The task's observed duration is not accounted for by spoken lines or mapped Action durations.");
      }
      return;
    }
    if (taskActionSeconds >= evidence.observedSeconds) {
      addIssue(issues, "high", "task_action_duration_exceeds_observed", evidence.taskId,
        "Mapped Action durations leave no time for the task's spoken lines.");
      return;
    }
    const taskWordsPerMinute = taskSpokenWords / taskSpeakingSeconds * 60;
    if (taskWordsPerMinute < 80 || taskWordsPerMinute > 190) {
      addIssue(issues, "high", "implausible_task_pace", evidence.taskId,
        "This task has " + taskSpokenWords + " spoken words and " + taskActionSeconds +
        " action seconds, implying " + taskWordsPerMinute.toFixed(1) + " words per minute.");
    }
  });
  if (Number.isInteger(observedSeconds) && isObject(blueprint.performance) &&
      Math.abs(observedSeconds - blueprint.performance.targetSpokenSeconds) > 30) {
    addIssue(issues, "high", "listen_duration_outside_target", "performance.listenTest.observedSeconds", "Listen-through duration is not within 30 seconds of the station target.");
  }
  const actionSeconds = actionDurations.reduce(function (sum, item) { return sum + (item.seconds || 0); }, 0);
  const spokenWords = lines.filter(function (line) { return line.kind !== "action"; }).reduce(function (sum, line) {
    return sum + wordCount(line.text);
  }, 0);
  if (Number.isInteger(observedSeconds)) {
    const speakingSeconds = observedSeconds - actionSeconds;
    const wordsPerMinute = speakingSeconds > 0 ? spokenWords / speakingSeconds * 60 : Infinity;
    if (wordsPerMinute < 80 || wordsPerMinute > 190) {
      addIssue(issues, "high", "implausible_listen_pace", "performance.listenTest.observedSeconds",
        "The run has " + spokenWords + " spoken words and " + actionSeconds + " action seconds, which implies " +
        (Number.isFinite(wordsPerMinute) ? wordsPerMinute.toFixed(1) : "an invalid") + " words per minute.");
    }
  }

  const hash = contentHash(caseData);
  if (!blueprint.qa || blueprint.qa.caseContentSha256 !== hash) {
    addIssue(issues, "critical", "qa_content_hash_mismatch", "qa.caseContentSha256", "QA content hash does not match the visible case.");
  }
  if (!blueprint.qa || blueprint.qa.blueprintPackageSha256 !== blueprintPackageHash(blueprint)) {
    addIssue(issues, "critical", "blueprint_package_hash_mismatch", "qa.blueprintPackageSha256",
      "The reviewed package hash does not match the hidden blueprint, sources, evidence and controls.");
  }
  if (!listen || listen.caseContentSha256 !== hash) {
    addIssue(issues, "critical", "listen_content_hash_mismatch", "performance.listenTest.caseContentSha256", "Listen-through hash does not match the visible case.");
  }
  if (registryRow && registryRow.status === "audited" && registryRow.contentSha256 !== hash) {
    addIssue(issues, "critical", "registry_content_hash_mismatch", registryRow.caseId, "Audited registry hash does not match the visible case.");
  }

  const tasks = asArray(caseData.stem && caseData.stem.tasks);
  const needsUnderstandingCheck = tasks.some(function (task) {
    return /\b(?:explain|discuss|counsel|address|management|concerns)\b/i.test(task && task.text);
  });
  const doctorText = lines.filter(function (line) { return line.speaker === "Doctor"; })
    .map(function (line) { return line.text; }).join(" ");
  if (needsUnderstandingCheck &&
      !/\b(?:what questions|any questions|does that make sense|tell me (?:what|how)|what have you understood|check your understanding|what concerns|what worries)\b/i.test(doctorText)) {
    addIssue(issues, "high", "missing_understanding_or_concern_check", caseData.id, "A communication task is present, but the Full Run does not check understanding, questions, or concern.");
  }
}

function severityCounts(issues) {
  return issues.reduce(function (counts, issue) {
    counts[issue.severity] = (counts[issue.severity] || 0) + 1;
    return counts;
  }, { critical: 0, high: 0, medium: 0, low: 0 });
}

function auditCase(caseData, blueprint, registry, options) {
  const issues = [];
  if (!isObject(caseData)) {
    addIssue(issues, "critical", "malformed_case", "case", "Case data must be an object.");
    return {
      caseId: null,
      contentSha256: null,
      clinicalContentFingerprint: null,
      clinicalContentShingles: [],
      registryId: null,
      title: null,
      phase: null,
      pattern: null,
      predominantArea: null,
      modality: null,
      status: "HOLD",
      metrics: { doctorTurns: 0, participantTurns: 0, multiQuestionTurns: 0, compoundQuestionTurns: 0, spokenWords: 0 },
      severityCounts: severityCounts(issues),
      issues
    };
  }

  validateVisibleCase(caseData).errors.forEach(function (message) {
    addIssue(issues, "critical", "invalid_visible_case", caseData.id, message);
  });

  let registryRow = null;
  if (!registry) {
    addIssue(issues, "critical", "missing_registry", caseData.id, "The machine registry is required.");
  } else {
    const validation = validateRegistry(registry, options);
    validation.errors.forEach(function (message) {
      addIssue(issues, "critical", "invalid_registry", caseData.id, message);
    });
    validation.blockers.forEach(function (message) {
      addIssue(issues, "critical", "registry_blocker", caseData.id, message);
    });
    if (!validation.registryReady) {
      addIssue(issues, "critical", "registry_not_ready", caseData.id,
        "The machine registry has not passed both structural and provenance validation.");
    }
    registryRow = asArray(registry.cases).find(function (item) { return item && item.caseId === caseData.id; }) || null;
    if (!registryRow) {
      addIssue(issues, "critical", "case_missing_from_registry", caseData.id, "The visible case has no machine-registry row.");
    } else if (registryRow.status !== "audited") {
      addIssue(issues, "critical", "registry_case_not_audited", caseData.id, "Registry status is " + registryRow.status + ", not audited.");
    }
  }

  if (!blueprint) {
    addIssue(issues, "critical", "missing_blueprint", caseData.id, "A hidden v1.1 blueprint is required.");
  } else if (blueprint.__loadError) {
    addIssue(issues, "critical", "malformed_blueprint", caseData.id, "Blueprint JSON could not be loaded: " + blueprint.__loadError);
  } else {
    const validation = validateBlueprint(blueprint);
    validation.errors.forEach(function (message) {
      addIssue(issues, "critical", "invalid_blueprint", caseData.id, message);
    });
    validation.blockers.forEach(function (message) {
      addIssue(issues, "critical", "blueprint_release_blocker", caseData.id, message);
    });
  }

  auditVisibleMetadata(caseData, blueprint, registryRow, registry, issues);
  auditStem(caseData, blueprint, issues);
  const conversation = auditConversation(caseData, blueprint, issues);
  auditEvidenceAndPerformance(caseData, blueprint, conversation, registryRow, issues);

  const blockingBeforeStatus = issues.some(function (issue) {
    return ["critical", "high", "medium"].includes(issue.severity);
  });
  if (blueprint && blueprint.releaseStatus === "audited" && blockingBeforeStatus) {
    addIssue(issues, "critical", "false_audited_status", caseData.id, "The blueprint says audited, but executable release checks fail.");
  }
  const counts = severityCounts(issues);
  const ready = counts.critical === 0 && counts.high === 0 && counts.medium === 0 &&
    blueprint && validateBlueprint(blueprint).blueprintReady &&
    registryRow && registryRow.status === "audited" &&
    registryRow.contentSha256 === contentHash(caseData);

  const turns = conversation.turns;
  return {
    caseId: caseData.id,
    contentSha256: contentHash(caseData),
    clinicalContentFingerprint: clinicalContentFingerprint(caseData, blueprint),
    clinicalContentShingles: clinicalContentShingles(caseData, blueprint),
    registryId: caseData.registryId || null,
    title: caseData.title || null,
    phase: caseData.phase || null,
    pattern: caseData.pattern || null,
    predominantArea: caseData.format && caseData.format.predominantArea,
    modality: caseData.modality,
    status: ready ? "AUDITED" : "HOLD",
    metrics: {
      doctorTurns: turns.filter(function (turn) { return turn.speaker === "Doctor"; }).length,
      participantTurns: turns.filter(function (turn) {
        return !["Doctor", "Examiner", "Action"].includes(turn.speaker);
      }).length,
      multiQuestionTurns: issues.filter(function (issue) { return issue.code === "multiple_questions_in_turn"; }).length,
      compoundQuestionTurns: issues.filter(function (issue) { return issue.code === "compound_question_in_turn"; }).length,
      spokenWords: conversation.lines.filter(function (line) { return line.kind !== "action"; }).reduce(function (sum, line) {
        return sum + wordCount(line.text);
      }, 0)
    },
    severityCounts: counts,
    issues
  };
}

function countBy(items, reader) {
  return items.reduce(function (counts, item) {
    const key = String(reader(item) || "unspecified");
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {});
}

function auditCollection(cases, reports, registry, registryValidation) {
  const warnings = [];
  const areas = countBy(cases, function (item) { return item && item.format && item.format.predominantArea; });
  const modalities = countBy(cases, function (item) { return item && item.modality; });
  const visibleIds = new Set(cases.map(function (item) { return item && item.id; }).filter(isText));
  function duplicates(values) {
    const seen = new Set();
    const repeated = new Set();
    values.filter(isText).forEach(function (value) {
      if (seen.has(value)) repeated.add(value);
      seen.add(value);
    });
    return Array.from(repeated);
  }
  const duplicateVisibleCaseIds = duplicates(cases.map(function (item) { return item && item.id; }));
  const duplicateVisibleGlobalIds = duplicates(cases.map(function (item) { return item && item.globalId; }));
  const duplicateVisibleRegistryIds = duplicates(cases.map(function (item) { return item && item.registryId; }));
  const fingerprintGroups = new Map();
  reports.forEach(function (report) {
    if (!report || !isText(report.clinicalContentFingerprint)) return;
    if (!fingerprintGroups.has(report.clinicalContentFingerprint)) fingerprintGroups.set(report.clinicalContentFingerprint, []);
    fingerprintGroups.get(report.clinicalContentFingerprint).push(report.caseId);
  });
  const duplicateClinicalFingerprints = Array.from(fingerprintGroups.entries()).filter(function (entry) {
    return entry[1].length > 1;
  }).map(function (entry) { return { fingerprint: entry[0], caseIds: entry[1] }; });
  const auditedReports = reports.filter(function (report) {
    return report && report.status === "AUDITED" && asArray(report.clinicalContentShingles).length > 0;
  });
  const nearDuplicateClinicalPairs = [];
  auditedReports.forEach(function (left, index) {
    auditedReports.slice(index + 1).forEach(function (right) {
      const similarity = shingleSimilarity(left.clinicalContentShingles, right.clinicalContentShingles);
      if (similarity >= 0.94) {
        nearDuplicateClinicalPairs.push({ caseIds: [left.caseId, right.caseId], similarity: Number(similarity.toFixed(4)) });
      }
    });
  });
  const registryIds = new Set(asArray(registry && registry.cases).map(function (item) { return item && item.caseId; }).filter(isText));
  const orphanVisible = Array.from(visibleIds).filter(function (id) { return !registryIds.has(id); });
  const registryOnly = Array.from(registryIds).filter(function (id) { return !visibleIds.has(id); });
  if (orphanVisible.length) warnings.push("visible cases missing from registry: " + orphanVisible.join(", "));
  if (registryOnly.length) warnings.push("registry cases missing from visible files: " + registryOnly.join(", "));
  if (duplicateVisibleCaseIds.length) warnings.push("duplicate visible case IDs: " + duplicateVisibleCaseIds.join(", "));
  if (duplicateVisibleGlobalIds.length) warnings.push("duplicate visible global IDs: " + duplicateVisibleGlobalIds.join(", "));
  if (duplicateVisibleRegistryIds.length) warnings.push("duplicate visible registry IDs: " + duplicateVisibleRegistryIds.join(", "));
  duplicateClinicalFingerprints.forEach(function (entry) {
    warnings.push("duplicate clinical content fingerprint across: " + entry.caseIds.join(", "));
  });
  nearDuplicateClinicalPairs.forEach(function (entry) {
    warnings.push("near-duplicate audited clinical content across: " + entry.caseIds.join(", ") +
      " (similarity " + entry.similarity + ")");
  });
  if (!Object.keys(areas).some(function (area) { return /Examination/i.test(area); })) {
    warnings.push("no case is classified with Examination as its predominant assessment area");
  }
  asArray(registryValidation && registryValidation.errors).forEach(function (message) {
    warnings.push("registry error: " + message);
  });
  asArray(registryValidation && registryValidation.blockers).forEach(function (message) {
    warnings.push("registry blocker: " + message);
  });
  asArray(registryValidation && registryValidation.actionBlockers).forEach(function (message) {
    warnings.push("registry action blocker: " + message);
  });
  const audited = reports.filter(function (report) { return report.status === "AUDITED"; }).length;
  return {
    totalCases: cases.length,
    auditedCases: audited,
    holdCases: reports.length - audited,
    predominantAreas: areas,
    modalities,
    orphanVisibleCases: orphanVisible,
    registryOnlyCases: registryOnly,
    duplicateVisibleCaseIds,
    duplicateVisibleGlobalIds,
    duplicateVisibleRegistryIds,
    duplicateClinicalFingerprints,
    nearDuplicateClinicalPairs,
    registryStructuralReady: Boolean(registryValidation && registryValidation.structuralReady),
    registryProvenanceReady: Boolean(registryValidation && registryValidation.provenanceReady),
    registryReady: Boolean(registryValidation && registryValidation.registryReady),
    registryActionReady: Boolean(registryValidation && registryValidation.actionReady),
    releaseReady: audited === cases.length && cases.length > 0 &&
      Boolean(registryValidation && registryValidation.registryReady) &&
      orphanVisible.length === 0 && registryOnly.length === 0 &&
      duplicateVisibleCaseIds.length === 0 && duplicateVisibleGlobalIds.length === 0 && duplicateVisibleRegistryIds.length === 0 &&
      duplicateClinicalFingerprints.length === 0 && nearDuplicateClinicalPairs.length === 0,
    warnings
  };
}

function runAudit(root) {
  let cases = [];
  let registry = null;
  const fatalErrors = [];
  try {
    cases = loadCases(root);
  } catch (error) {
    fatalErrors.push("case loading failed safely: " + error.message);
  }
  try {
    registry = loadRegistry(root);
  } catch (error) {
    fatalErrors.push("registry loading failed safely: " + error.message);
  }
  let registryValidation = validateRegistry(registry, { root });
  const reports = cases.map(function (caseData) {
    let blueprint = null;
    try {
      blueprint = loadBlueprint(root, caseData.id);
    } catch (error) {
      blueprint = { __loadError: error.message };
    }
    return auditCase(caseData, blueprint, registry, { root });
  });
  registryValidation = validateRegistry(registry, {
    root,
    caseReports: reports,
    actionEvidenceToken: ACTION_EVIDENCE_TOKEN
  });
  const issueTotals = reports.reduce(function (counts, report) {
    report.issues.forEach(function (issue) {
      counts[issue.code] = (counts[issue.code] || 0) + 1;
    });
    return counts;
  }, {});
  const collection = auditCollection(cases, reports, registry, registryValidation);
  if (fatalErrors.length) collection.releaseReady = false;
  return {
    generatedAt: new Date().toISOString(),
    engineVersion: ENGINE_VERSION,
    collectionStatus: collection.releaseReady ? "AUDITED" : "HOLD",
    fatalErrors,
    registry: registryValidation,
    collection,
    issueTotals,
    cases: reports
  };
}

module.exports = {
  ENGINE_VERSION,
  QA_FIELDS,
  auditCase,
  auditCollection,
  blueprintPackageHash,
  blueprintReviewScopeHash,
  clinicalContentFingerprint,
  contentHash,
  detectInformationRequest,
  flattenLines,
  flattenTurns,
  hasCompoundQuestion,
  loadBlueprint,
  loadCases,
  loadRegistry,
  questionMarkCount,
  runAudit,
  validateBlueprint,
  validateRegistry,
  validateVisibleCase,
  wordCount
};
