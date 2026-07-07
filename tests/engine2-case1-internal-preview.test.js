const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const adapter = require("../assets/js/engine2-adapter.js");

const {
  adaptEngine2CaseForPreview,
  evaluateEngine2Gates,
  isEngine2AudioEligible,
  isEngine2InternalPreviewEligible,
  isEngine2PublicDisplayEligible,
  isEngine2ReleaseEligible,
  stripHiddenEngine2Sections
} = adapter;

const CASE_PATH = path.join(
  __dirname,
  "..",
  "engine2",
  "scaffold-p4",
  "cases",
  "case-001",
  "case.json"
);

function loadCase() {
  return JSON.parse(fs.readFileSync(CASE_PATH, "utf8"));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function hiddenValues(engineCase) {
  const sections = engineCase.sections || {};
  return Object.entries(sections)
    .filter(([key]) => key.endsWith("_hidden"))
    .flatMap(([, value]) => JSON.stringify(value));
}

test("Case 1 Engine 2 migration is internal preview only", () => {
  const engineCase = loadCase();
  const gates = evaluateEngine2Gates(engineCase);
  const preview = adaptEngine2CaseForPreview(engineCase);

  assert.equal(engineCase.case_id, "CP-P1-C001");
  assert.equal(engineCase.metadata.pattern, "Dangerous Chest Pain");
  assert.equal(engineCase.metadata.clinical_variant, "Classic ACS");
  assert.equal(engineCase.metadata.dominant_trap, "indigestion or test-delay trap");

  assert.equal(engineCase.status.schema_status, "pass");
  assert.equal(engineCase.status.renderer_status, "pass_with_adapter");
  assert.equal(engineCase.status.source_status, "hold");
  assert.equal(engineCase.status.clinical_status, "hold");
  assert.equal(engineCase.status.accessibility_status, "hold");
  assert.equal(engineCase.status.audio_release_status, "hold");
  assert.equal(engineCase.status.release_status, "hold");
  assert.equal(engineCase.status.last_human_reviewer, null);
  assert.equal(engineCase.status.source_review_due, null);

  assert.equal(gates.internalPreview, true);
  assert.equal(gates.publicDisplay, false);
  assert.equal(gates.releaseReady, false);
  assert.equal(gates.audioPlayback, false);
  assert.equal(gates.audioRelease, false);
  assert.equal(gates.effectiveAudioReleaseStatus, "blocked");
  assert.equal(isEngine2InternalPreviewEligible(engineCase), true);
  assert.equal(isEngine2PublicDisplayEligible(engineCase), false);
  assert.equal(isEngine2ReleaseEligible(engineCase), false);
  assert.equal(isEngine2AudioEligible(engineCase), false);

  assert.equal(preview.eligible, true);
  assert.equal(preview.case.internalPreviewOnly, true);
  assert.equal(preview.case.gateState.publicDisplay, false);
  assert.equal(preview.case.gateState.releaseReady, false);
  assert.equal(preview.case.gateState.audioPlayback, false);
  assert.equal(preview.case.title, "Classic ACS");
  assert.deepEqual(preview.case.stem, engineCase.sections.station_stem);
  assert.deepEqual(preview.case.tasks, engineCase.sections.tasks);
  assert.ok(preview.gates.blockedReasons.includes("preview_only"));
  assert.ok(preview.gates.blockedReasons.includes("source_status_not_pass"));
  assert.ok(preview.gates.blockedReasons.includes("clinical_status_not_pass"));
  assert.ok(preview.gates.blockedReasons.includes("accessibility_status_not_pass"));
  assert.ok(preview.gates.blockedReasons.includes("release_status_not_eligible"));
  assert.ok(preview.gates.blockedReasons.includes("audio_release_not_pass"));
});

test("Case 1 hidden sections are stripped from preview output", () => {
  const engineCase = loadCase();
  const stripped = stripHiddenEngine2Sections(engineCase);
  const preview = adaptEngine2CaseForPreview(engineCase);
  const strippedOutput = JSON.stringify(stripped.case.sections || {});
  const previewOutput = JSON.stringify(preview.case || {});

  assert.equal(preview.eligible, true);
  assert.equal("hints_hidden" in preview.case.previewSections, false);
  assert.equal("source_basis_map_hidden" in preview.case.previewSections, false);
  assert.equal("sources_hidden" in preview.case.previewSections, false);
  assert.equal("doctor_thinking_hidden" in preview.case.previewSections, false);
  assert.equal("examiner_lines_hidden" in preview.case.previewSections, false);

  for (const value of hiddenValues(engineCase)) {
    assert.equal(strippedOutput.includes(value), false, "hidden value leaked after stripping");
    assert.equal(previewOutput.includes(value), false, "hidden value leaked into preview output");
  }

  assert.ok(previewOutput.includes("Central chest pressure"));
  assert.ok(previewOutput.includes("I am arranging an ambulance now."));
});

test("Case 1 preview closes when required adapter gates fail", () => {
  const engineCase = loadCase();
  const noSchema = clone(engineCase);
  noSchema.status.schema_status = "hold";
  noSchema.status.renderer_status = "pass_with_adapter";

  const partialRenderer = clone(engineCase);
  partialRenderer.status.renderer_status = "partial";

  const hiddenLeak = clone(engineCase);
  hiddenLeak.sections.visible_summary.push("HIDDEN_DOCTOR_THINKING_FOR_CASE_001");

  assert.equal(adaptEngine2CaseForPreview(noSchema).eligible, false);
  assert.equal(adaptEngine2CaseForPreview(partialRenderer).eligible, false);
  assert.equal(adaptEngine2CaseForPreview(hiddenLeak).eligible, false);
});

test("Case 1 migration does not produce release_ready", () => {
  const engineCase = loadCase();
  const gates = evaluateEngine2Gates(engineCase);

  assert.notEqual(engineCase.status.release_status, "release_ready");
  assert.equal(gates.releaseReady, false);
  assert.equal(gates.publicDisplay, false);
  assert.equal(gates.audioPlayback, false);
});
