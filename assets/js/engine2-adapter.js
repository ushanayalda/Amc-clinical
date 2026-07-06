(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.AMCEngine2Adapter = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  var SUPPORTED_ENGINE_VERSION = "v3.3.3";
  var SUPPORTED_PATCH_VERSION = "v3.3.3-P3";
  var CASE_4_BYPASS_PHRASE = "BYPASS CASE 4 GATE";

  var REQUIRED_STATUS_FIELDS = [
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

  var HARD_BLOCKERS = {
    invalid_case: true,
    unknown_engine_version: true,
    unknown_patch_version: true,
    malformed_status: true,
    source_status_not_pass: true,
    schema_status_not_pass: true,
    renderer_status_partial: true,
    renderer_status_not_pass: true,
    clinical_status_not_pass: true,
    accessibility_status_not_pass: true,
    bypass_used: true,
    release_status_not_eligible: true,
    missing_last_human_reviewer: true,
    missing_source_review_due: true,
    source_review_due_overdue: true,
    case2_source_lock_missing: true,
    case3_source_lock_missing: true,
    case4_gate_missing: true,
    case4_bypass_preview_only: true,
    missing_source_basis_map: true,
    hidden_content_leakage_risk: true,
    audio_manifest_not_locked: true,
    audio_generation_not_generated: true,
    audio_dry_run_not_pass: true,
    listen_test_failed: true,
    listen_test_not_pass: true,
    audio_release_not_pass: true,
    missing_audio_transcript: true,
    audio_controls_not_safe: true,
    preview_only: true
  };

  var PREVIEW_BLOCKERS = {
    invalid_case: true,
    unknown_engine_version: true,
    unknown_patch_version: true,
    malformed_status: true,
    schema_status_not_pass: true,
    renderer_status_partial: true,
    renderer_status_not_pass: true,
    case4_gate_missing: true,
    hidden_content_leakage_risk: true
  };

  function isObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function addReason(result, reason) {
    if (result.blockedReasons.indexOf(reason) === -1) {
      result.blockedReasons.push(reason);
    }
  }

  function hasReason(result, reason) {
    return result.blockedReasons.indexOf(reason) !== -1;
  }

  function hasAnyReason(result, reasonMap) {
    return result.blockedReasons.some(function (reason) {
      return Boolean(reasonMap[reason]);
    });
  }

  function hasHumanReviewer(status) {
    return typeof status.last_human_reviewer === "string" && status.last_human_reviewer.trim().length > 0;
  }

  function hasSourceReviewDue(status) {
    return typeof status.source_review_due === "string" && status.source_review_due.trim().length > 0;
  }

  function isSourceReviewOverdue(status, now) {
    if (!hasSourceReviewDue(status)) return false;

    var parsed = Date.parse(status.source_review_due);
    if (Number.isNaN(parsed)) return false;

    var today = now instanceof Date ? now : new Date();
    var todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();
    return parsed < todayStart;
  }

  function audioIsRequired(engine2Case) {
    return Boolean(engine2Case.audio && (engine2Case.audio.required || engine2Case.audio.has_audio));
  }

  function sourceLocksPresent(engine2Case) {
    return Boolean(
      engine2Case.source_locks &&
        engine2Case.source_locks.lock_packet === true &&
        engine2Case.source_locks.canonical_bundle === true
    );
  }

  function case4RepositoryGatePassed(engine2Case) {
    var gate = engine2Case.case4_gate || {};
    var evidence = gate.repository_gate || gate.repository_evidence || {};

    return Boolean(
      gate.gate_passed === true ||
        (
          evidence.cases_1_to_3_migrated === true &&
          evidence.cases_1_to_3_audited === true &&
          evidence.cases_1_to_3_exported === true &&
          evidence.cases_1_to_3_rendered === true &&
          evidence.cases_1_to_3_clinically_reviewed === true &&
          evidence.cases_1_to_3_accessibility_reviewed === true
        )
    );
  }

  function case4BypassPresent(engine2Case) {
    var gate = engine2Case.case4_gate || {};
    return gate.bypass_phrase === CASE_4_BYPASS_PHRASE;
  }

  function sourceBasisMapReady(engine2Case) {
    return Boolean(engine2Case.source_basis_map && engine2Case.source_basis_map.present && engine2Case.source_basis_map.valid);
  }

  function isHighRisk(engine2Case) {
    return Boolean(engine2Case.metadata && engine2Case.metadata.risk_level === "high");
  }

  function collectHiddenValues(value, output) {
    if (value == null) return;

    if (typeof value === "string") {
      if (value) output.push(value);
      return;
    }

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        collectHiddenValues(item, output);
      });
      return;
    }

    if (isObject(value)) {
      Object.keys(value).forEach(function (key) {
        collectHiddenValues(value[key], output);
      });
    }
  }

  function cloneWithoutHiddenKeys(value, hiddenValues) {
    if (Array.isArray(value)) {
      return value.map(function (item) {
        return cloneWithoutHiddenKeys(item, hiddenValues);
      });
    }

    if (!isObject(value)) return value;

    return Object.keys(value).reduce(function (copy, key) {
      if (key.endsWith("_hidden")) {
        collectHiddenValues(value[key], hiddenValues);
        return copy;
      }

      copy[key] = cloneWithoutHiddenKeys(value[key], hiddenValues);
      return copy;
    }, {});
  }

  function stripHiddenEngine2Sections(engine2Case) {
    var hiddenValues = [];
    var stripped = cloneWithoutHiddenKeys(engine2Case || {}, hiddenValues);

    return {
      case: stripped,
      hiddenValues: hiddenValues
    };
  }

  function hiddenContentLeaks(engine2Case) {
    var stripped = stripHiddenEngine2Sections(engine2Case);
    var visibleText = JSON.stringify(stripped.case.sections || {});

    return stripped.hiddenValues.some(function (hiddenValue) {
      return hiddenValue && visibleText.indexOf(hiddenValue) !== -1;
    });
  }

  function normalizeLines(value) {
    if (Array.isArray(value)) {
      return value.map(function (item) {
        return String(item);
      }).filter(Boolean);
    }

    if (typeof value === "string" && value.trim()) {
      return [value];
    }

    return [];
  }

  function slugFromCaseId(caseId) {
    return String(caseId || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function visiblePreviewSections(strippedCase) {
    var sections = isObject(strippedCase.sections) ? strippedCase.sections : {};

    return Object.keys(sections).reduce(function (visible, key) {
      if (!key.endsWith("_hidden")) visible[key] = sections[key];
      return visible;
    }, {});
  }

  function evaluateEngine2Gates(engine2Case, options) {
    options = options || {};

    var result = {
      internalPreview: false,
      publicDisplay: false,
      releaseReady: false,
      audioPlayback: false,
      audioRelease: false,
      audioGenerationAllowed: true,
      effectiveAudioReleaseStatus: "blocked",
      blockedReasons: []
    };

    if (!isObject(engine2Case)) {
      addReason(result, "invalid_case");
      result.audioGenerationAllowed = false;
      return result;
    }

    if (engine2Case.engine_version !== SUPPORTED_ENGINE_VERSION) {
      addReason(result, "unknown_engine_version");
    }

    if (engine2Case.patch_version !== SUPPORTED_PATCH_VERSION) {
      addReason(result, "unknown_patch_version");
    }

    var status = engine2Case.status;
    if (!isObject(status) || REQUIRED_STATUS_FIELDS.some(function (field) { return !(field in status); })) {
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

    if (status.release_status !== "release_ready") {
      addReason(result, "release_status_not_eligible");
    }

    if (!hasHumanReviewer(status)) {
      addReason(result, "missing_last_human_reviewer");
    }

    if (!hasSourceReviewDue(status)) {
      addReason(result, "missing_source_review_due");
    } else if (isSourceReviewOverdue(status, options.now)) {
      addReason(result, "source_review_due_overdue");
    }

    if (engine2Case.case_id === "CP-P1-C002" && !sourceLocksPresent(engine2Case)) {
      addReason(result, "case2_source_lock_missing");
    }

    if (engine2Case.case_id === "CP-P1-C003" && !sourceLocksPresent(engine2Case)) {
      addReason(result, "case3_source_lock_missing");
    }

    if (engine2Case.case_id === "CP-P1-C004") {
      if (case4RepositoryGatePassed(engine2Case)) {
        // Explicit repository evidence is enough for the case-specific gate.
      } else if (case4BypassPresent(engine2Case)) {
        addReason(result, "case4_bypass_preview_only");
      } else {
        addReason(result, "case4_gate_missing");
      }
    }

    if (isHighRisk(engine2Case) && !sourceBasisMapReady(engine2Case)) {
      addReason(result, "missing_source_basis_map");
    }

    if (hiddenContentLeaks(engine2Case)) {
      addReason(result, "hidden_content_leakage_risk");
    }

    var requiresAudio = audioIsRequired(engine2Case);
    var audio = engine2Case.audio || {};
    var audioGateReady = true;

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
    result.effectiveAudioReleaseStatus = result.audioRelease ? "pass" : "blocked";

    result.internalPreview = (
      status.schema_status === "pass" &&
      (status.renderer_status === "pass" || status.renderer_status === "pass_with_adapter") &&
      !hasAnyReason(result, PREVIEW_BLOCKERS)
    );

    result.releaseReady = !hasAnyReason(result, HARD_BLOCKERS);
    result.publicDisplay = result.releaseReady;

    return result;
  }

  function adaptEngine2CaseForPreview(engine2Case, options) {
    var gates = evaluateEngine2Gates(engine2Case, options);

    if (!gates.internalPreview) {
      return {
        eligible: false,
        case: null,
        gates: gates
      };
    }

    var stripped = stripHiddenEngine2Sections(engine2Case);
    var safeCase = stripped.case;
    var metadata = safeCase.metadata || {};
    var sections = visiblePreviewSections(safeCase);
    var caseId = safeCase.case_id;
    var previewId = "engine2-preview-" + slugFromCaseId(caseId);
    var title = metadata.clinical_variant || metadata.title || "Internal preview";
    var stem = normalizeLines(sections.station_stem || sections.visible_summary);
    var tasks = normalizeLines(sections.tasks || sections.task_snapshot);

    return {
      eligible: true,
      case: {
        id: previewId,
        sourceCaseId: caseId,
        engineVersion: safeCase.engine_version,
        patchVersion: safeCase.patch_version,
        internalPreviewOnly: true,
        displayNumber: "Engine 2 Preview",
        title: title,
        setting: metadata.setting || "",
        type: metadata.station_type || "",
        patientLabel: metadata.task_recipient || "",
        stem: stem,
        tasks: tasks,
        previewSections: sections,
        gateState: {
          internalPreview: gates.internalPreview,
          publicDisplay: gates.publicDisplay,
          releaseReady: gates.releaseReady,
          audioPlayback: gates.audioPlayback,
          blockedReasons: gates.blockedReasons.slice()
        }
      },
      gates: gates
    };
  }

  function isEngine2InternalPreviewEligible(engine2Case) {
    return evaluateEngine2Gates(engine2Case).internalPreview;
  }

  function isEngine2PublicDisplayEligible(engine2Case) {
    return evaluateEngine2Gates(engine2Case).publicDisplay;
  }

  function isEngine2AudioEligible(engine2Case) {
    return evaluateEngine2Gates(engine2Case).audioPlayback;
  }

  function isEngine2ReleaseEligible(engine2Case) {
    return evaluateEngine2Gates(engine2Case).releaseReady;
  }

  return {
    SUPPORTED_ENGINE_VERSION: SUPPORTED_ENGINE_VERSION,
    SUPPORTED_PATCH_VERSION: SUPPORTED_PATCH_VERSION,
    evaluateEngine2Gates: evaluateEngine2Gates,
    adaptEngine2CaseForPreview: adaptEngine2CaseForPreview,
    stripHiddenEngine2Sections: stripHiddenEngine2Sections,
    isEngine2InternalPreviewEligible: isEngine2InternalPreviewEligible,
    isEngine2PublicDisplayEligible: isEngine2PublicDisplayEligible,
    isEngine2AudioEligible: isEngine2AudioEligible,
    isEngine2ReleaseEligible: isEngine2ReleaseEligible
  };
});
