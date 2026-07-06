const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const FIXTURE_DIR = path.join(__dirname, "fixtures", "engine2-adapter");
const SUPPORTED_ENGINE_VERSION = "v3.3.3";
const SUPPORTED_PATCH_VERSION = "v3.3.3-P3";

const REQUIRED_FIXTURES = [
  "valid_internal_preview_case",
  "source_status_hold_blocks_public_display",
  "renderer_status_partial_blocks_release",
  "renderer_status_pass_with_adapter_internal_preview_only",
  "clinical_status_hold_blocks_release",
  "accessibility_status_hold_blocks_release",
  "audio_manifest_hold_blocks_audio",
  "listen_test_fail_blocks_audio_release",
  "missing_last_human_reviewer_blocks_release",
  "missing_source_review_due_blocks_release",
  "case2_missing_source_lock_blocks_release",
  "case3_missing_source_lock_blocks_release",
  "case4_blocked_without_gate",
  "hidden_sections_must_not_render",
  "malformed_status_blocks_display",
  "unknown_engine_version_blocks_display",
  "unknown_patch_version_blocks_display",
  "missing_source_basis_map_blocks_high_risk_release"
];

const REQUIRED_STATUS_FIELDS = [
  "source_status",
  "schema_status",
  "renderer_status",
  "clinical_status",
  "accessibility_status",
  "audio_manifest_status",
  "audio_generation_status",
  "audio_dry_run_status",
  "listen_test_status",
  "audio_release_status",
  "release_status",
  "bypass_used",
  "last_human_reviewer",
  "source_review_due"
];

function isObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function loadFixtures() {
  return fs
    .readdirSync(FIXTURE_DIR)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => {
      const fullPath = path.join(FIXTURE_DIR, fileName);
      return {
        fileName,
        ...JSON.parse(fs.readFileSync(fullPath, "utf8"))
      };
    });
}

const fixtures = loadFixtures();
const byName = Object.fromEntries(fixtures.map((fixture) => [fixture.fixture_name, fixture]));

function addReason(result, reason) {
  if (!result.blockedReasons.includes(reason)) {
    result.blockedReasons.push(reason);
  }
}

function hasHumanReviewer(status) {
  return typeof status.last_human_reviewer === "string" && status.last_human_reviewer.trim().length > 0;
}

function hasSourceReviewDue(status) {
  return typeof status.source_review_due === "string" && status.source_review_due.trim().length > 0;
}

function audioIsRequired(engineCase) {
  return Boolean(engineCase.audio && (engineCase.audio.required || engineCase.audio.has_audio));
}

function sourceLocksPresent(engineCase) {
  return Boolean(
    engineCase.source_locks &&
      engineCase.source_locks.lock_packet === true &&
      engineCase.source_locks.canonical_bundle === true
  );
}

function case4GatePassed(engineCase) {
  const gate = engineCase.case4_gate || {};
  return gate.gate_passed === true || gate.bypass_phrase === "BYPASS CASE 4 GATE";
}

function sourceBasisMapReady(engineCase) {
  return Boolean(engineCase.source_basis_map && engineCase.source_basis_map.present && engineCase.source_basis_map.valid);
}

function evaluateAdapterGates(engineCase) {
  const result = {
    internalPreview: false,
    publicDisplay: false,
    releaseReady: false,
    audioPlayback: false,
    audioRelease: false,
    audioGenerationAllowed: true,
    blockedReasons: []
  };

  if (engineCase.engine_version !== SUPPORTED_ENGINE_VERSION) {
    addReason(result, "unknown_engine_version");
  }

  if (engineCase.patch_version !== SUPPORTED_PATCH_VERSION) {
    addReason(result, "unknown_patch_version");
  }

  const status = engineCase.status;
  if (!isObject(status) || REQUIRED_STATUS_FIELDS.some((field) => !(field in status))) {
    addReason(result, "malformed_status");
    result.audioGenerationAllowed = false;
    return result;
  }

  if (status.source_status !== "pass") {
    addReason(result, "source_status_not_pass");
  }

  if (status.schema_status !== "pass") {
    addReason(result, "schema_status_not_pass");
  }

  if (status.renderer_status === "partial") {
    addReason(result, "renderer_status_partial");
    result.audioGenerationAllowed = false;
  } else if (status.renderer_status === "pass_with_adapter") {
    result.internalPreview = status.source_status === "pass" && status.schema_status === "pass";
    addReason(result, "preview_only");
  } else if (status.renderer_status !== "pass") {
    addReason(result, "renderer_status_not_pass");
  }

  if (status.clinical_status !== "pass") {
    addReason(result, "clinical_status_not_pass");
  }

  if (status.accessibility_status !== "pass") {
    addReason(result, "accessibility_status_not_pass");
  }

  if (status.bypass_used === true) {
    addReason(result, "bypass_used");
  }

  if (status.release_status !== "release_ready" && status.release_status !== "live") {
    addReason(result, "release_status_not_eligible");
  }

  if (!hasHumanReviewer(status)) {
    addReason(result, "missing_last_human_reviewer");
  }

  if (!hasSourceReviewDue(status)) {
    addReason(result, "missing_source_review_due");
  }

  if (engineCase.case_id === "CP-P1-C002" && !sourceLocksPresent(engineCase)) {
    addReason(result, "case2_source_lock_missing");
  }

  if (engineCase.case_id === "CP-P1-C003" && !sourceLocksPresent(engineCase)) {
    addReason(result, "case3_source_lock_missing");
  }

  if (engineCase.case_id === "CP-P1-C004" && !case4GatePassed(engineCase)) {
    addReason(result, "case4_gate_missing");
  }

  if (engineCase.metadata && engineCase.metadata.risk_level === "high" && !sourceBasisMapReady(engineCase)) {
    addReason(result, "missing_source_basis_map");
  }

  const requiresAudio = audioIsRequired(engineCase);
  const audio = engineCase.audio || {};
  let audioGateReady = true;

  if (requiresAudio) {
    if (status.audio_manifest_status !== "locked") {
      addReason(result, "audio_manifest_not_locked");
      audioGateReady = false;
    }

    if (status.audio_generation_status !== "generated") {
      addReason(result, "audio_generation_not_generated");
      audioGateReady = false;
    }

    if (status.audio_dry_run_status !== "pass") {
      addReason(result, "audio_dry_run_not_pass");
      audioGateReady = false;
    }

    if (status.listen_test_status === "fail") {
      addReason(result, "listen_test_failed");
      audioGateReady = false;
    } else if (status.listen_test_status !== "pass") {
      addReason(result, "listen_test_not_pass");
      audioGateReady = false;
    }

    if (status.audio_release_status !== "pass") {
      addReason(result, "audio_release_not_pass");
      audioGateReady = false;
    }

    if (!audio.transcript_available) {
      addReason(result, "missing_audio_transcript");
      audioGateReady = false;
    }

    if (!audio.keyboard_controls || !audio.speed_control || audio.autoplay === true) {
      addReason(result, "audio_controls_not_safe");
      audioGateReady = false;
    }
  } else if (status.audio_release_status !== "pass" && status.audio_release_status !== "not_required") {
    addReason(result, "audio_release_not_pass");
    audioGateReady = false;
  }

  result.audioRelease = requiresAudio ? audioGateReady : status.audio_release_status === "pass" || status.audio_release_status === "not_required";
  result.audioPlayback = requiresAudio && audioGateReady;

  const hardBlockers = new Set([
    "unknown_engine_version",
    "unknown_patch_version",
    "malformed_status",
    "source_status_not_pass",
    "schema_status_not_pass",
    "renderer_status_partial",
    "renderer_status_not_pass",
    "clinical_status_not_pass",
    "accessibility_status_not_pass",
    "bypass_used",
    "release_status_not_eligible",
    "missing_last_human_reviewer",
    "missing_source_review_due",
    "case2_source_lock_missing",
    "case3_source_lock_missing",
    "case4_gate_missing",
    "missing_source_basis_map",
    "audio_manifest_not_locked",
    "audio_generation_not_generated",
    "audio_dry_run_not_pass",
    "listen_test_failed",
    "listen_test_not_pass",
    "audio_release_not_pass",
    "missing_audio_transcript",
    "audio_controls_not_safe",
    "preview_only"
  ]);

  const blocked = result.blockedReasons.some((reason) => hardBlockers.has(reason));
  result.releaseReady = !blocked;
  result.publicDisplay = result.releaseReady;

  return result;
}

function learnerOutputFor(engineCase) {
  const sections = engineCase.sections || {};
  return Object.entries(sections)
    .filter(([key]) => !key.endsWith("_hidden"))
    .map(([, value]) => String(value))
    .join("\n");
}

function hiddenSectionValues(engineCase) {
  const sections = engineCase.sections || {};
  return Object.entries(sections)
    .filter(([key]) => key.endsWith("_hidden"))
    .map(([, value]) => String(value));
}

function expectReasons(result, reasons) {
  for (const reason of reasons) {
    assert.ok(result.blockedReasons.includes(reason), `Expected blocked reason: ${reason}`);
  }
}

test("all required synthetic adapter gate fixtures exist", () => {
  assert.deepEqual(
    fixtures.map((fixture) => fixture.fixture_name).sort(),
    REQUIRED_FIXTURES.slice().sort()
  );
});

test("HOLD source status blocks public display", () => {
  const result = evaluateAdapterGates(byName.source_status_hold_blocks_public_display.case);
  assert.equal(result.publicDisplay, false);
  expectReasons(result, ["source_status_not_pass"]);
});

test("renderer_status partial blocks release and audio generation", () => {
  const result = evaluateAdapterGates(byName.renderer_status_partial_blocks_release.case);
  assert.equal(result.releaseReady, false);
  assert.equal(result.audioGenerationAllowed, false);
  expectReasons(result, ["renderer_status_partial"]);
});

test("renderer_status pass_with_adapter allows internal preview only", () => {
  const result = evaluateAdapterGates(byName.renderer_status_pass_with_adapter_internal_preview_only.case);
  assert.equal(result.internalPreview, true);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["preview_only"]);
});

test("clinical_status hold blocks release", () => {
  const result = evaluateAdapterGates(byName.clinical_status_hold_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["clinical_status_not_pass"]);
});

test("accessibility_status hold blocks release", () => {
  const result = evaluateAdapterGates(byName.accessibility_status_hold_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["accessibility_status_not_pass"]);
});

test("audio_manifest_status hold blocks audio", () => {
  const result = evaluateAdapterGates(byName.audio_manifest_hold_blocks_audio.case);
  assert.equal(result.audioPlayback, false);
  assert.equal(result.audioRelease, false);
  expectReasons(result, ["audio_manifest_not_locked"]);
});

test("listen_test_status fail blocks audio release", () => {
  const result = evaluateAdapterGates(byName.listen_test_fail_blocks_audio_release.case);
  assert.equal(result.audioPlayback, false);
  assert.equal(result.audioRelease, false);
  expectReasons(result, ["listen_test_failed"]);
});

test("missing last_human_reviewer blocks release_ready", () => {
  const result = evaluateAdapterGates(byName.missing_last_human_reviewer_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["missing_last_human_reviewer"]);
});

test("missing source_review_due blocks release_ready", () => {
  const result = evaluateAdapterGates(byName.missing_source_review_due_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["missing_source_review_due"]);
});

test("Case 2 without source lock packet and canonical bundle blocks release", () => {
  const result = evaluateAdapterGates(byName.case2_missing_source_lock_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["case2_source_lock_missing"]);
});

test("Case 3 without source lock packet and canonical bundle blocks release", () => {
  const result = evaluateAdapterGates(byName.case3_missing_source_lock_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["case3_source_lock_missing"]);
});

test("Case 4 without gate or exact bypass phrase is blocked", () => {
  const result = evaluateAdapterGates(byName.case4_blocked_without_gate.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["case4_gate_missing"]);
});

test("hidden sections are never mapped to learner-facing output", () => {
  const engineCase = byName.hidden_sections_must_not_render.case;
  const learnerOutput = learnerOutputFor(engineCase);
  for (const hiddenValue of hiddenSectionValues(engineCase)) {
    assert.equal(learnerOutput.includes(hiddenValue), false, `Hidden value leaked: ${hiddenValue}`);
  }
  assert.ok(learnerOutput.includes("Visible learner-safe placeholder."));
});

test("malformed status fails closed", () => {
  const result = evaluateAdapterGates(byName.malformed_status_blocks_display.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["malformed_status"]);
});

test("unknown engine_version fails closed", () => {
  const result = evaluateAdapterGates(byName.unknown_engine_version_blocks_display.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["unknown_engine_version"]);
});

test("unknown patch_version fails closed", () => {
  const result = evaluateAdapterGates(byName.unknown_patch_version_blocks_display.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["unknown_patch_version"]);
});

test("missing source-basis map blocks high-risk release", () => {
  const result = evaluateAdapterGates(byName.missing_source_basis_map_blocks_high_risk_release.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["missing_source_basis_map"]);
});

test("no fixture produces release_ready unless every required gate is explicit and reviewed", () => {
  for (const fixture of fixtures) {
    const status = fixture.case.status;
    const result = evaluateAdapterGates(fixture.case);

    if (!result.releaseReady) {
      continue;
    }

    assert.equal(status.source_status, "pass");
    assert.equal(status.schema_status, "pass");
    assert.equal(status.renderer_status, "pass");
    assert.equal(status.clinical_status, "pass");
    assert.equal(status.accessibility_status, "pass");
    assert.ok(status.audio_release_status === "pass" || status.audio_release_status === "not_required");
    assert.ok(status.release_status === "release_ready" || status.release_status === "live");
    assert.ok(hasHumanReviewer(status));
    assert.ok(hasSourceReviewDue(status));
  }
});

test("fixture expectations match fail-closed evaluation results", () => {
  for (const fixture of fixtures) {
    const result = evaluateAdapterGates(fixture.case);
    const expected = fixture.expected || {};

    if ("internal_preview" in expected) {
      assert.equal(result.internalPreview, expected.internal_preview, fixture.fixture_name);
    }

    if ("public_display" in expected) {
      assert.equal(result.publicDisplay, expected.public_display, fixture.fixture_name);
    }

    if ("release_ready" in expected) {
      assert.equal(result.releaseReady, expected.release_ready, fixture.fixture_name);
    }

    if ("audio_playback" in expected) {
      assert.equal(result.audioPlayback, expected.audio_playback, fixture.fixture_name);
    }

    if ("audio_release" in expected) {
      assert.equal(result.audioRelease, expected.audio_release, fixture.fixture_name);
    }

    if ("audio_generation_allowed" in expected) {
      assert.equal(result.audioGenerationAllowed, expected.audio_generation_allowed, fixture.fixture_name);
    }

    if (expected.blocked_reasons) {
      expectReasons(result, expected.blocked_reasons);
    }
  }
});
