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

const FIXTURE_DIR = path.join(__dirname, "fixtures", "engine2-adapter");

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

function cloneCase(engineCase) {
  return JSON.parse(JSON.stringify(engineCase));
}

function expectReasons(result, reasons) {
  for (const reason of reasons) {
    assert.ok(result.blockedReasons.includes(reason), `Expected blocked reason: ${reason}`);
  }
}

function hiddenSectionValues(engineCase) {
  const sections = engineCase.sections || {};
  return Object.entries(sections)
    .filter(([key]) => key.endsWith("_hidden"))
    .map(([, value]) => String(value));
}

test("all required synthetic adapter gate fixtures exist", () => {
  assert.deepEqual(
    fixtures.map((fixture) => fixture.fixture_name).sort(),
    REQUIRED_FIXTURES.slice().sort()
  );
});

test("HOLD source status blocks public display", () => {
  const result = evaluateEngine2Gates(byName.source_status_hold_blocks_public_display.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(isEngine2PublicDisplayEligible(byName.source_status_hold_blocks_public_display.case), false);
  expectReasons(result, ["source_status_not_pass"]);
});

test("renderer_status partial blocks release and audio generation", () => {
  const result = evaluateEngine2Gates(byName.renderer_status_partial_blocks_release.case);
  assert.equal(result.releaseReady, false);
  assert.equal(result.audioGenerationAllowed, false);
  expectReasons(result, ["renderer_status_partial"]);
});

test("renderer_status pass_with_adapter allows internal preview only", () => {
  const engineCase = byName.renderer_status_pass_with_adapter_internal_preview_only.case;
  const result = evaluateEngine2Gates(engineCase);
  const preview = adaptEngine2CaseForPreview(engineCase);

  assert.equal(result.internalPreview, true);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  assert.equal(isEngine2InternalPreviewEligible(engineCase), true);
  assert.equal(isEngine2PublicDisplayEligible(engineCase), false);
  assert.equal(isEngine2ReleaseEligible(engineCase), false);
  assert.equal(preview.eligible, true);
  assert.equal(preview.case.internalPreviewOnly, true);
  expectReasons(result, ["preview_only"]);
});

test("clinical_status hold blocks release", () => {
  const result = evaluateEngine2Gates(byName.clinical_status_hold_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["clinical_status_not_pass"]);
});

test("accessibility_status hold blocks release", () => {
  const result = evaluateEngine2Gates(byName.accessibility_status_hold_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["accessibility_status_not_pass"]);
});

test("audio_manifest_status hold blocks audio", () => {
  const engineCase = byName.audio_manifest_hold_blocks_audio.case;
  const result = evaluateEngine2Gates(engineCase);
  assert.equal(result.audioPlayback, false);
  assert.equal(result.audioRelease, false);
  assert.equal(isEngine2AudioEligible(engineCase), false);
  expectReasons(result, ["audio_manifest_not_locked"]);
});

test("approved_to_generate is not generated audio and cannot play", () => {
  const engineCase = cloneCase(byName.audio_manifest_hold_blocks_audio.case);
  engineCase.status.audio_manifest_status = "locked";
  engineCase.status.audio_generation_status = "approved_to_generate";
  engineCase.status.audio_dry_run_status = "pass";
  engineCase.status.listen_test_status = "pass";
  engineCase.status.audio_release_status = "pass";

  const result = evaluateEngine2Gates(engineCase);

  assert.equal(result.audioPlayback, false);
  assert.equal(result.audioRelease, false);
  assert.equal(result.effectiveAudioReleaseStatus, "blocked");
  assert.equal(isEngine2AudioEligible(engineCase), false);
  expectReasons(result, ["audio_generation_not_generated"]);
});

test("listen_test_status fail blocks audio release", () => {
  const result = evaluateEngine2Gates(byName.listen_test_fail_blocks_audio_release.case);
  assert.equal(result.audioPlayback, false);
  assert.equal(result.audioRelease, false);
  assert.equal(result.effectiveAudioReleaseStatus, "blocked");
  expectReasons(result, ["listen_test_failed"]);
});

test("missing last_human_reviewer blocks release_ready", () => {
  const result = evaluateEngine2Gates(byName.missing_last_human_reviewer_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["missing_last_human_reviewer"]);
});

test("missing source_review_due blocks release_ready", () => {
  const result = evaluateEngine2Gates(byName.missing_source_review_due_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["missing_source_review_due"]);
});

test("Case 2 without source lock packet and canonical bundle blocks release", () => {
  const result = evaluateEngine2Gates(byName.case2_missing_source_lock_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["case2_source_lock_missing"]);
});

test("Case 3 without source lock packet and canonical bundle blocks release", () => {
  const result = evaluateEngine2Gates(byName.case3_missing_source_lock_blocks_release.case);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["case3_source_lock_missing"]);
});

test("Case 4 without gate or exact bypass phrase is blocked", () => {
  const result = evaluateEngine2Gates(byName.case4_blocked_without_gate.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  assert.equal(result.internalPreview, false);
  expectReasons(result, ["case4_gate_missing"]);
});

test("Case 4 exact bypass phrase allows preview only, not release", () => {
  const engineCase = cloneCase(byName.case4_blocked_without_gate.case);
  engineCase.case4_gate.bypass_phrase = "BYPASS CASE 4 GATE";

  const result = evaluateEngine2Gates(engineCase);
  const preview = adaptEngine2CaseForPreview(engineCase);

  assert.equal(result.internalPreview, true);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  assert.equal(preview.eligible, true);
  expectReasons(result, ["case4_bypass_preview_only"]);
});

test("renderer hard-fail statuses fail closed", () => {
  const hardFailStatuses = ["hold", "blocked", "changes_required", "build_failed", "repository_unavailable"];

  for (const rendererStatus of hardFailStatuses) {
    const engineCase = cloneCase(byName.valid_internal_preview_case.case);
    engineCase.status.renderer_status = rendererStatus;

    const result = evaluateEngine2Gates(engineCase);

    assert.equal(result.internalPreview, false, rendererStatus);
    assert.equal(result.publicDisplay, false, rendererStatus);
    assert.equal(result.releaseReady, false, rendererStatus);
    expectReasons(result, ["renderer_status_not_pass"]);
  }
});

test("hidden sections are stripped before learner-facing preview output", () => {
  const engineCase = byName.hidden_sections_must_not_render.case;
  const stripped = stripHiddenEngine2Sections(engineCase);
  const visibleOutput = JSON.stringify(stripped.case.sections || {});
  const preview = adaptEngine2CaseForPreview(engineCase);
  const previewOutput = JSON.stringify(preview.case || {});

  for (const hiddenValue of hiddenSectionValues(engineCase)) {
    assert.equal(visibleOutput.includes(hiddenValue), false, `Hidden value leaked into visible output: ${hiddenValue}`);
    assert.equal(previewOutput.includes(hiddenValue), false, `Hidden value leaked into preview output: ${hiddenValue}`);
  }

  assert.ok(visibleOutput.includes("Visible learner-safe placeholder."));
  assert.equal(preview.eligible, true);
});

test("hidden content leakage risk blocks preview and release", () => {
  const engineCase = cloneCase(byName.hidden_sections_must_not_render.case);
  engineCase.sections.visible_summary = "DO_NOT_RENDER_HIDDEN_REASONING_PLACEHOLDER";

  const result = evaluateEngine2Gates(engineCase);
  const preview = adaptEngine2CaseForPreview(engineCase);

  assert.equal(result.internalPreview, false);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  assert.equal(preview.eligible, false);
  expectReasons(result, ["hidden_content_leakage_risk"]);
});

test("malformed status fails closed", () => {
  const result = evaluateEngine2Gates(byName.malformed_status_blocks_display.case);
  const preview = adaptEngine2CaseForPreview(byName.malformed_status_blocks_display.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  assert.equal(preview.eligible, false);
  expectReasons(result, ["malformed_status"]);
});

test("unknown engine_version fails closed", () => {
  const result = evaluateEngine2Gates(byName.unknown_engine_version_blocks_display.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  assert.equal(result.internalPreview, false);
  expectReasons(result, ["unknown_engine_version"]);
});

test("unknown patch_version fails closed", () => {
  const result = evaluateEngine2Gates(byName.unknown_patch_version_blocks_display.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  assert.equal(result.internalPreview, false);
  expectReasons(result, ["unknown_patch_version"]);
});

test("missing source-basis map blocks high-risk release", () => {
  const result = evaluateEngine2Gates(byName.missing_source_basis_map_blocks_high_risk_release.case);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  expectReasons(result, ["missing_source_basis_map"]);
});

test("internal preview remains separate from public display and release", () => {
  const engineCase = byName.valid_internal_preview_case.case;
  const result = evaluateEngine2Gates(engineCase);
  const preview = adaptEngine2CaseForPreview(engineCase);

  assert.equal(result.internalPreview, true);
  assert.equal(result.publicDisplay, false);
  assert.equal(result.releaseReady, false);
  assert.equal(result.audioPlayback, false);
  assert.equal(preview.eligible, true);
  assert.equal(preview.case.internalPreviewOnly, true);
  assert.equal(preview.case.gateState.publicDisplay, false);
  assert.equal(preview.case.gateState.releaseReady, false);
});

test("no fixture produces release_ready unless every required gate is explicit and reviewed", () => {
  for (const fixture of fixtures) {
    const status = fixture.case.status;
    const result = evaluateEngine2Gates(fixture.case);

    if (!result.releaseReady) {
      continue;
    }

    assert.equal(status.source_status, "pass");
    assert.equal(status.schema_status, "pass");
    assert.equal(status.renderer_status, "pass");
    assert.equal(status.clinical_status, "pass");
    assert.equal(status.accessibility_status, "pass");
    assert.ok(status.audio_release_status === "pass" || status.audio_release_status === "not_required");
    assert.equal(status.release_status, "release_ready");
    assert.equal(typeof status.last_human_reviewer, "string");
    assert.ok(status.last_human_reviewer.trim().length > 0);
    assert.equal(typeof status.source_review_due, "string");
    assert.ok(status.source_review_due.trim().length > 0);
  }
});

test("fixture expectations match fail-closed evaluation results", () => {
  for (const fixture of fixtures) {
    const result = evaluateEngine2Gates(fixture.case);
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
