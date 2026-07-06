# Engine 2 Adapter Contract

Status: documentation-only contract.

Encoding: ASCII-only Markdown.

Date: 2026-07-06

This document defines the future contract for an adapter between the sealed Engine 2 model under `engine2/` and the existing handcrafted live website renderer.

It does not implement the adapter.

## A. Purpose

The Engine 2 adapter is a future data transformation layer.

Its job is to read sealed Engine 2 case packages and transform only eligible learner-facing data into the shape expected by the existing live website renderer.

The adapter must:

- map sealed Engine 2 cases into the current live-site renderer contract;
- preserve the current live-site design;
- preserve the current navigation model;
- preserve the existing two live cases until an explicit migration PR changes that;
- fail closed when any required gate is missing, malformed, unknown, blocked, or not explicitly eligible;
- keep hidden Engine 2 sections hidden;
- keep learner progress separate from clinical release status;
- block public display, production release, and audio playback unless each relevant gate passes.

The adapter is not:

- a clinical approval system;
- an audio release system;
- a source-verification system by itself;
- a case migration tool by itself;
- a design replacement;
- a release authority.

The adapter cannot make a case `release_ready`. It may only read release evidence and block or allow the correct rendering mode.

## B. Non-Goals

This PR does not include:

- adapter implementation;
- live website integration;
- JavaScript renderer changes;
- CSS or design changes;
- `data/content.js` changes;
- audio manifest changes;
- audio generation;
- `dist/` changes as source work;
- case migration;
- clinical content editing;
- Case 4 generation;
- any `release_ready` status change.

## C. Source Model

The source model is the sealed Engine 2 package under `engine2/`.

Primary source roots:

- `engine2/baseline-p3/`
- `engine2/scaffold-p4/`

Per-case source package paths:

- `engine2/scaffold-p4/cases/case-001/case.json`
- `engine2/scaffold-p4/cases/case-001/status.json`
- `engine2/scaffold-p4/cases/case-001/source-basis-map.yaml`
- `engine2/scaffold-p4/cases/case-001/qa.json`
- `engine2/scaffold-p4/cases/case-001/voice.json`
- same structure for `case-002`, `case-003`, and `case-004`

Current scaffold case files are placeholders unless their gates prove otherwise. Placeholder notes must never be treated as clinical content.

Engine 2 schemas:

- `engine2/scaffold-p4/schemas/case.schema.json`
- `engine2/scaffold-p4/schemas/status.schema.json`
- `engine2/scaffold-p4/schemas/source-basis-map.schema.json`
- `engine2/scaffold-p4/schemas/source-basis-map-hold.schema.json`
- `engine2/scaffold-p4/schemas/qa.schema.json`
- `engine2/scaffold-p4/schemas/renderer-status.schema.json`
- `engine2/scaffold-p4/schemas/audio-state.schema.json`
- `engine2/scaffold-p4/schemas/voice.schema.json`
- `engine2/scaffold-p4/schemas/display-contract.schema.json`
- `engine2/scaffold-p4/schemas/section-display.schema.json`
- `engine2/scaffold-p4/schemas/design-token.schema.json`

Governance and registry inputs:

- `engine2/scaffold-p4/governance/CASE_REGISTRY.csv`
- `engine2/scaffold-p4/governance/RELEASE_RULES.md`
- `engine2/scaffold-p4/governance/CASE4_GATE.md`
- `engine2/scaffold-p4/governance/SOURCE_HIERARCHY.md`
- `engine2/scaffold-p4/governance/MASTER_BLUEPRINT.md`
- `engine2/scaffold-p4/governance/ADHD_DISPLAY_CONTRACT.md`
- `engine2/scaffold-p4/governance/DISPLAY_RELEASE_RULES.md`

Validation scripts:

- `engine2/baseline-p3/scripts/validate_package.py`
- `engine2/scaffold-p4/scripts/validate_package.py`
- `engine2/scaffold-p4/scripts/validate_scaffold.py`
- `engine2/scaffold-p4/scripts/validate_display_contract.py`
- `engine2/scaffold-p4/scripts/validate_section_display.py`
- `engine2/scaffold-p4/scripts/validate_design_tokens.py`

## D. Target Model

The target model is the existing live website.

Live app shell:

- `index.html`

Live case data:

- `data/content.js`
  - exposes `window.AMC_CONTENT`;
  - currently contains exactly 2 active live cases;
  - contains pathway, phase, pattern, warmup, and case data;
  - remains the current live-site source of truth until a future migration PR explicitly changes that.

Live audio manifest:

- `data/audio-manifest.js`
  - exposes `window.AMC_AUDIO_MANIFEST`;
  - currently maps `case-001` and `case-002` to generated MP3 paths.

Renderer and interaction files:

- `assets/js/content-store.js`
- `assets/js/router.js`
- `assets/js/renderers.js`
- `assets/js/ui.js`
- `assets/js/app.js`

Styling:

- `assets/css/styles.css`

Build and verification:

- `scripts/build-pages.js`
- `scripts/verify-dist.js`

Current live routes and panels:

- `index.html`
- `index.html#cases`
- `index.html#ignite`
- `index.html#station-stem`
- `index.html#speak-aloud`
- `index.html#timed-run`
- `index.html#mock-exam`
- `index.html#what-matters`
- `index.html#hints`

Current two-case behaviour:

- Case 1: `case-1-classic-chest-pain`
- Case 2: `case-2-sudden-tearing-chest-pain`
- Both remain live under the current handcrafted model.
- A future adapter must not replace, rewrite, or regress them unless a separate migration PR explicitly approves that move.

## E. Required Fail-Closed Gates

The adapter must read every required status gate before allowing public display, production release, or audio playback.

If a required gate is missing, unknown, malformed, `hold`, `blocked`, `fail`, `partial`, or otherwise not explicitly eligible, the adapter must block public display and/or audio as appropriate.

Gate rules:

| Gate | Eligible value for public release | Fail-closed behaviour |
|---|---|---|
| `source_status` | `pass` | Block public display and release when not pass. |
| `schema_status` | `pass` | Block all rendering modes except diagnostic parse error display. |
| `renderer_status` | `pass` for public release; `pass_with_adapter` for internal preview only | Block public release if not pass. |
| `clinical_status` | `pass` | Block learner-facing public display and release when not pass. |
| `accessibility_status` | `pass` | Block public display and release when not pass. |
| `audio_manifest_status` | `locked` when audio is present | Block production audio when not locked. |
| `audio_generation_status` | `generated` when audio is required | Block production audio when not generated. |
| `audio_dry_run_status` | `pass` when audio is generated | Block production audio when not pass. |
| `listen_test_status` | `pass` when audio is generated | Block audio release when not pass. |
| `audio_release_status` | `pass` or `not_required` | Block production audio when hold, blocked, or missing. |
| `release_status` | `release_ready` or `live` | Block public release when not eligible. |
| `last_human_reviewer` | recorded non-empty reviewer when release-ready is claimed | Block release-ready interpretation if missing or null. |
| `source_review_due` | present and not overdue when source pass is claimed | Block high-risk public release when missing or overdue. |
| `bypass_used` | `false` for release | Block release if true; allow internal draft only when specifically permitted. |

The adapter must not upgrade a failing gate. It can only read and enforce gate state.

## F. Display Eligibility Rules

Eligibility modes must remain separate.

Internal parsing:

- Allowed when files are present enough to inspect.
- Schema failure may produce a developer-facing diagnostic.
- Must not produce learner-facing case content.

Internal preview:

- May render only in explicitly internal or development contexts.
- Requires schema-valid data.
- May allow `renderer_status: pass_with_adapter`.
- Must visually label blocked or preview-only state if displayed to maintainers.
- Must not be linked as public learner flow.

Learner-facing public display:

- Requires source, schema, renderer, clinical, accessibility, and release gates to be eligible.
- Must not display hidden sections.
- Must use existing live-site renderer and CSS.
- Must not expose governance internals.

Production release:

- Requires repository evidence, source pass, schema pass, renderer pass, clinical pass, accessibility pass, audio release pass or not required, release-ready status, and a recorded human reviewer.
- `release_ready` cannot come from GPT output alone.
- `release_ready` cannot be produced by the adapter.

Audio display/playback:

- Requires audio-specific gates.
- Requires transcript availability when audio is present.
- Requires keyboard-accessible controls and speed control.
- Must not autoplay.
- Must not play draft or unapproved audio as production audio.

Specific renderer rules:

- `renderer_status: pass_with_adapter` allows internal preview only.
- `renderer_status: partial` blocks audio generation, release-ready status, and public publishing.
- `schema-valid` does not mean renderer-compatible.
- `renderer-compatible` does not mean clinically approved.
- `clinically approved` does not mean audio approved.

## G. Hidden-Content Protection

Hidden sections must never become learner-facing content.

Protected hidden fields include:

- `sections.hints_hidden`
- `sections.source_basis_map_hidden`
- `sections.sources_hidden`
- `sections.doctor_thinking_hidden`
- `sections.examiner_lines_hidden`
- any future `*_hidden` field

Fail-closed behaviour:

- If a hidden field is missing but required by the schema or display contract, block public display.
- If a hidden field is malformed, block public display.
- If an adapter mapping would place hidden content into a visible target field, block public display.
- If hidden clinical reasoning might leak into visible learner content, block public display.
- If source map internals might leak into visible learner content, block public display.
- If examiner-only lines might leak into visible learner content, block public display.
- If an unknown future `*_hidden` field is found, keep it hidden by default.

Allowed use of hidden content:

- internal validation;
- internal QA inspection;
- source governance checks;
- adapter diagnostics visible only to maintainers.

Forbidden use of hidden content:

- public learner-facing text;
- visible hints before attempt gates;
- patient conversation scripts;
- Do not miss cards;
- homepage or case index labels;
- audio transcript unless explicitly approved as patient-facing or learner-facing text.

## H. Case-Specific Blockers

Case 2:

- Engine 2 Case 2 requires a lock packet and locked canonical bundle.
- If either is missing, `source_status`, `clinical_status`, and `release_status` stay `hold`.
- Do not reconstruct Case 2 from memory.
- Existing live Case 2 in `data/content.js` does not automatically satisfy Engine 2 source-lock.

Case 3:

- Engine 2 Case 3 requires a lock packet and locked canonical bundle.
- If either is missing, `source_status`, `clinical_status`, and `release_status` stay `hold`.
- Do not reconstruct Case 3 from memory.

Case 4:

- Case 4 remains blocked unless repository gates pass or the exact phrase `BYPASS CASE 4 GATE` is present.
- The phrase must be exact.
- Bypass permits drafting only.
- Bypass does not permit release.
- Bypass must keep `clinical_status: hold` and `release_status: hold`.
- Do not generate Case 4 in adapter work.

Registry evidence:

- `engine2/scaffold-p4/governance/CASE_REGISTRY.csv` marks:
  - `CP-P1-C002` as `source_lock_required`;
  - `CP-P1-C003` as `source_lock_required`;
  - `CP-P1-C004` as `blocked`.

## I. Audio Contract

Voice Pack text manifests may exist as drafts.

Actual audio generation remains blocked until required gates pass.

Production audio playback requires:

- valid `voice.json`;
- audio manifest status eligible;
- generation status eligible;
- dry-run status pass;
- listen test status pass;
- audio release status pass or not required;
- transcript when audio is present;
- keyboard-accessible controls;
- speed control;
- no autoplay.

Rules:

- `listen_test_status: fail` forces `audio_release_status: blocked`.
- Missing audio must not appear as production playable audio.
- Unapproved audio must not appear as production playable audio.
- Draft audio text must not be treated as generated audio.
- The adapter must not synthesize audio.
- The adapter must not infer audio paths.
- The adapter must not auto-approve audio.
- The adapter must not turn a voice manifest into a live `data/audio-manifest.js` entry without explicit release approval.

## J. Field Mapping Table

| Engine 2 source field/path | Live website target field/path | Mapping rule | Required transformation | Display eligibility | Fail-closed behaviour | Notes |
|---|---|---|---|---|---|---|
| `case.json -> case_id` | `data/content.js -> cases[].id` or adapter slug | Map `CP-Px-C###` to stable live slug | Lookup table required | Internal parse always; public only after gates | Block if missing, malformed, duplicate, or unmapped | Do not invent slugs from title alone. |
| `metadata.phase` | `cases[].phaseId`, `phases[]` | Map label to existing phase ID | Normalize to live ID | Public only after source/schema pass | Block if unknown | Must not create new phase UI without approval. |
| `metadata.pattern` | `cases[].patternId`, `patterns[]` | Map label to existing pattern ID | Normalize to live ID | Public only after source/schema pass | Block if unknown | Current live pattern is `dangerous-chest-pain`. |
| `metadata.clinical_variant` | `cases[].title` or display subtitle | Use approved learner-facing title | Human-approved title mapping | Public only after clinical/accessibility pass | Block if placeholder or missing | Do not infer from registry alone for public display. |
| `metadata.station_type` | `cases[].type` | Map to existing everyday label | Normalize language | Public only after gates | Block if missing | Preserve current labels unless approved. |
| `metadata.task_recipient` | `cases[].patientLabel` or task context | Map to patient/caregiver target | Convert to live target field | Public only after gates | Block if ambiguous | Must not expose metadata jargon. |
| `metadata.setting` | `cases[].setting` | Map directly if approved | Plain-language normalization | Public only after gates | Block if missing | Current site uses concise learner labels. |
| `metadata.acuity_class` | `cases[].dangerSignal` or hidden internal state | Use only if learner-safe | Transform to simple risk cue | Public only after clinical/accessibility pass | Block if unclear | Avoid raw acuity jargon in UI. |
| `metadata.main_risk_point` | `cases[].mainRiskPoint` | Map to learner cue | Plain-language transformation | Public only after clinical pass | Block if missing | Must not alter clinical meaning. |
| `metadata.dominant_trap` | `cases[].dominantTrap` | Map to learner trap cue | Plain-language transformation | Public only after clinical pass | Block if missing | Useful for ADHD retrieval only when concise. |
| `sections.station_stem` | `cases[].stem`, `cases[].tasks` | Station stem is visible first | Split stem and task list | Required for public display | Block if missing or hidden | Stem must appear before teaching. |
| `sections.task_snapshot` | `readingMap` or stem side detail | Visible task summary before teaching | Compress into current component shape | Required if present and critical | Block if missing when required | Must not become a dashboard. |
| `sections.safety_layer` | `mustNotMiss`, `firstAction`, `doNotMissMap` | Map safety cues to Do not miss/first action | Preserve clinical wording | Public only after clinical pass | Block if hidden or malformed | Critical safety content cannot be hidden. |
| `sections.pattern_recognition_card` | `doNotMissMap` visual scene/cue cards | Map to cue cards | Chunk into See/Say/Do style if approved | Public only after display gate | Block if dense or unchunked | Must use current live design contract. |
| `sections.focused_performance_script` | `script`, `mustSay`, `speak-aloud` | Map to Start speaking practice | Convert to current script structure | Public only after clinical/accessibility pass | Block if hidden reasoning leaks | Model answer gating must be respected. |
| `sections.patient_explanation_script` | `script`, patient explanation lines | Map only patient-safe lines | Separate patient-facing vs hidden lines | Public only after clinical pass | Block if examiner/doctor-only text leaks | Must not expose hidden reasoning. |
| `sections.differential_and_trap_recovery` | `doNotMissMap`, `hints` | Map to recall/hints only | Separate visible cue vs hidden repair | Hints after attempt only | Block if shown before attempt | Must not overload first screen. |
| `sections.live_station_script` | `speak-aloud`, `timed-run` | Map to timed run transcript | Match current timed-run structure | Public only after gates | Block if missing required patient/doctor separation | Audio linkage is separate. |
| `sections.recall_check` | `runComplete`, `doNotMissMap` checklist | Map to current check UI | Convert to simple checks | Public only after display gate | Block if too dense or critical item missing | Should not mark clinical release. |
| `sections.confidence_check` | `runComplete`, progress memory | Map to learner self-check only | Keep separate from release status | Public only after gates | Block if confused with release approval | Learner progress is not clinical status. |
| `sections.hints_hidden` | `hints` after attempt | Hidden source; may transform into visible hints only if approved | Apply attempt gate | Internal only until transformed and approved | Block if raw hidden text would render | Hints must not appear before attempt. |
| `sections.source_basis_map_hidden` | No direct learner target | Keep hidden | None for public UI | Internal governance only | Block if mapped to visible content | Use `source-basis-map.yaml` for governance. |
| `sections.sources_hidden` | Optional collapsed source disclosure if approved | Keep hidden unless learner-safe source panel is approved | Transform to safe citation/disclosure | Public only after approval | Block source leakage | Raw source internals are not learner content. |
| `sections.doctor_thinking_hidden` | No learner target | Keep hidden | None | Internal QA only | Block leakage | Never render as script or hint. |
| `sections.examiner_lines_hidden` | No learner target | Keep hidden | None | Internal QA only | Block leakage | Never render as patient dialogue. |
| `status.*` | Adapter gate state, not live learner progress | Read-only gates | Validate and enforce | Controls mode eligibility | Block when missing/ineligible | Do not write release status. |
| `source-basis-map.yaml` | Governance gate; optional safe source panel only after transform | Validate claims/source state | Parse YAML and source dates | Public only when pass and safe | Block high-risk release when missing/malformed | Do not expose raw map. |
| `qa.json` | Governance gate only | Read final decision/review records | Validate QA schema | Public only when pass | Block when hold/fail/blocked/missing | QA is not learner content. |
| `voice.json` | Possible future audio manifest input | Read-only audio gate | Validate voice manifest and statuses | Audio only after audio gates pass | Block if draft/hold/fail/missing | Do not generate audio from adapter. |

## K. Adapter Error States

Expected fail-closed behaviours:

| Error state | Behaviour |
|---|---|
| Missing `case.json` | Block parsing and display; report internal adapter error. |
| Invalid `case.json` | Block display; report schema failure. |
| Missing `status.json` | Block all public display and audio. |
| Invalid `status.json` | Block all public display and audio. |
| Missing `source-basis-map.yaml` | Block high-risk public release; allow internal diagnostic only. |
| Invalid `source-basis-map.yaml` | Block source pass and public release. |
| `source_status: hold` | Block public display and release. |
| `schema_status: hold` or `blocked` | Block renderer mapping except diagnostics. |
| `renderer_status: partial` | Block public display, audio generation, and release-ready interpretation. |
| `renderer_status: pass_with_adapter` | Allow internal preview only; block public release. |
| `clinical_status: hold` | Block learner-facing public display and release. |
| `accessibility_status: hold` | Block public display and release. |
| Audio status `hold`, `fail`, or `blocked` | Block production audio playback. |
| `release_status` not `release_ready` or `live` | Block production release. |
| Missing `last_human_reviewer` | Block release-ready interpretation. |
| Overdue `source_review_due` | Block high-risk public release pending review. |
| Case 2 source lock missing | Keep source, clinical, and release gates on hold. |
| Case 3 source lock missing | Keep source, clinical, and release gates on hold. |
| Case 4 blocked | Block generation, public display, and release. |
| Unknown `engine_version` | Block adapter mapping. |
| Unknown `patch_version` | Block adapter mapping unless explicitly supported. |
| Hidden section leakage risk | Block public display. |

The adapter should prefer no learner output over unsafe learner output.

## L. Design-Preservation Requirements

Existing live-site CSS remains authoritative.

Existing live-site renderer remains authoritative.

Existing navigation remains authoritative.

Existing two live cases must not regress.

The adapter may transform data. It must not replace the UI.

Future implementation must prove:

- no visual regression to Case 1;
- no visual regression to Case 2;
- no route regression;
- no tab/navigation regression;
- no audio-control regression;
- no hint-flow regression;
- no mobile layout regression;
- no accidental introduction of dashboard-style or syllabus-style display.

The adapter must not import `engine2/scaffold-p4/styles/design-tokens.css` into the live app unless a future design PR explicitly approves that change.

## M. Required Future Tests

Proposed tests only. Do not implement in this PR.

| Proposed test name | Expected behaviour |
|---|---|
| `adapter-fails-closed-status-gates` | Any missing or ineligible status blocks public display. |
| `adapter-hidden-content-non-display` | Hidden fields never render in learner-facing sections. |
| `adapter-existing-two-cases-unchanged` | Current Case 1 and Case 2 render exactly through the existing model. |
| `adapter-case2-source-lock-blocker` | Engine 2 Case 2 remains blocked without lock packet and canonical bundle. |
| `adapter-case3-source-lock-blocker` | Engine 2 Case 3 remains blocked without lock packet and canonical bundle. |
| `adapter-case4-blocker` | Case 4 remains blocked unless gates or exact bypass phrase apply; bypass remains draft only. |
| `adapter-audio-gating` | Audio does not render/play unless audio gates pass. |
| `adapter-listen-test-fail-blocks-audio-release` | `listen_test_status: fail` blocks audio release. |
| `adapter-renderer-partial-blocks-release` | `renderer_status: partial` blocks release and public display. |
| `adapter-renderer-pass-with-adapter-preview-only` | `pass_with_adapter` allows internal preview only. |
| `adapter-release-ready-requires-human-reviewer` | `release_ready` without `last_human_reviewer` is treated as blocked. |
| `adapter-design-preservation-smoke` | Home, Cases, Stem, Timed run, Do not miss, and Hints keep current design. |
| `adapter-unknown-engine-version-blocks-display` | Unknown Engine 2 version fails closed. |
| `adapter-malformed-source-map-blocks-high-risk-release` | Malformed source map blocks high-risk public release. |
| `adapter-schema-valid-is-not-release-ready` | Schema pass alone never allows public release. |
| `adapter-clinical-pass-is-not-audio-pass` | Clinical pass alone never allows audio playback. |

## N. Future Implementation PR Boundaries

Likely touched in future implementation:

- `assets/js/content-store.js`
  - Risk: can change current case selection and pathway context.
  - Boundary: adapter must be additive and gated.
- `assets/js/renderers.js`
  - Risk: can expose hidden content or change learner flow.
  - Boundary: render only transformed learner-safe fields.
- `assets/js/router.js`
  - Risk: can break current hash routes.
  - Boundary: preserve existing routes unless explicitly approved.
- new adapter file such as `assets/js/engine2-adapter.js`
  - Risk: can become a second source of truth.
  - Boundary: read-only transform with fail-closed gates.
- new adapter test files
  - Risk: false confidence if tests do not cover hidden leakage.
  - Boundary: include explicit blocker tests.

Possibly touched in future implementation:

- `index.html`
  - Risk: loading adapter code can affect the live app shell.
  - Boundary: preview-only load path unless public integration is approved.
- `scripts/build-pages.js`
  - Risk: copying sealed Engine 2 raw files into `dist/` can expose blocked content.
  - Boundary: copy only transformed, eligible public output.
- `scripts/verify-dist.js`
  - Risk: existing verifier may miss gate regressions.
  - Boundary: add adapter-specific fail-closed checks when implementation exists.
- `.github/workflows/engine2-validation.yml`
  - Risk: workflow may imply release readiness.
  - Boundary: validation is not release approval.
- `package.json`
  - Risk: dependency churn.
  - Boundary: no dependency changes without explicit approval.

Must not touch without explicit approval:

- `data/content.js`
  - Current live two-case source of truth.
- `data/audio-manifest.js`
  - Current live audio manifest.
- `assets/css/styles.css`
  - Current live design source of truth.
- `assets/js/ui.js`
  - Current timed run, audio, hints, tab, and progress behaviour.
- `audio/`
  - Current generated audio assets.
- `dist/`
  - Build output only.
- `AGENTS.md`
  - Root project governance.
- `docs/ADHD_REHEARSAL_SYSTEM_LOCK.md`
  - Locked rehearsal-room system.
- current Case 1 or Case 2 clinical content
  - Must not be rewritten as part of adapter plumbing.
- Engine 2 case status files
  - Must not be marked `release_ready` by adapter work.

## O. Validation Checklist for a Future Implementation PR

Current required commands:

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run verify:dist
python engine2/baseline-p3/scripts/validate_package.py
python engine2/scaffold-p4/scripts/validate_package.py
```

Proposed future adapter-specific checks:

- validate Engine 2 package before adapter transform;
- validate adapter output shape before render;
- assert fail-closed status gate behaviour;
- assert hidden sections do not render;
- assert existing Case 1 and Case 2 live output is unchanged;
- assert Case 2 source-lock blocks Engine 2 public display;
- assert Case 3 source-lock blocks Engine 2 public display;
- assert Case 4 gate blocks public display and release;
- assert unknown Engine 2 version blocks display;
- assert malformed source-basis map blocks high-risk release;
- assert audio does not render without audio release gates;
- assert `listen_test_status: fail` blocks audio release;
- assert `renderer_status: partial` blocks release and public display;
- assert `renderer_status: pass_with_adapter` is internal preview only;
- assert `release_ready` requires human reviewer evidence;
- run visual smoke checks for Home, Cases, Ignite, Stem, Timed run, Do not miss, and Hints;
- ensure no `dist/` source commit unless explicitly approved.

## Next Recommended PR

Recommended next PR after this contract:

`test: add Engine 2 adapter gate fixtures`

Scope:

- tests or fixtures only;
- no live website integration;
- no case migration;
- no clinical edits;
- no design changes;
- no audio generation;
- no release-ready status.

Purpose:

Prove the fail-closed gate rules with small fixtures before writing the adapter that would touch the live renderer path.
