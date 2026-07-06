# P6 Engine 2 Migration Readiness Audit

Status: planning and audit only.

Date: 2026-07-06

Scope:

- Do not integrate Engine 2 with the live website.
- Do not migrate cases.
- Do not change clinical content.
- Do not alter the live design.
- Do not generate audio.
- Do not generate Case 4.
- Do not mark anything release_ready.
- Produce readiness findings only.

## Current Verified Repo State

Repository: `ushanayalda/Amc-clinical`

Branch checked: `main`

HEAD:

`744cd1d2c29472ed30ee0aafdcd9e1011e898442`

Git checks run:

```powershell
git status --short
git log --oneline --decorate -n 10
```

Result:

- `git status --short` returned no changed files before this audit document was created.
- `main`, `origin/main`, and `origin/HEAD` point to `744cd1d`.
- PR3 is merged: Engine 2 sealed scaffold exists under `engine2/`.
- PR4 is merged: P5 ADHD display gate exists under `engine2/scaffold-p4/`.

Recent log:

```text
744cd1d (HEAD -> main, origin/main, origin/HEAD) Merge pull request #4 from ushanayalda/chore/add-p5-adhd-display-gate
d608e67 chore: add P5 ADHD display gate
586ef62 Merge pull request #3 from ushanayalda/chore/add-engine2-sealed-scaffold
1b852eb chore: add Engine 2 scaffold validation requirements
eff37e1 chore: add Engine 2 sealed scaffold
e2dc525 Merge pull request #2 from ushanayalda/chore/preserve-current-rehearsal-lock
6b922c7 chore: preserve current ADHD rehearsal system lock
321c6ab Make timed run follow the guide line
73cf24e Add patient audio generation for cases 1 and 2
fe3246a Update Case 1 content and ADHD hint cards
```

Current website checks previously verified:

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run verify:dist
```

Engine 2 checks previously verified:

```powershell
python engine2/baseline-p3/scripts/validate_package.py
python engine2/scaffold-p4/scripts/validate_package.py
```

For this audit pass, `npm.cmd run check` was also run and passed. Build was not re-run during the document-only audit to avoid unnecessary `dist/` churn.

## Live Website Architecture Summary

The live website is a static GitHub Pages app shell.

Shell:

- `index.html`
  - Loads `assets/css/styles.css`.
  - Loads live data from `data/content.js`.
  - Loads audio manifest from `data/audio-manifest.js`.
  - Loads app scripts from `assets/js/`.
  - Includes service-worker cleanup.
  - Uses `main#app` as the render target.

Case data:

- `data/content.js`
  - Exposes `window.AMC_CONTENT`.
  - Current shape includes:
    - `schemaVersion`
    - `app`
    - `settings`
    - `phases`
    - `patterns`
    - `futurePathway`
    - `warmups`
    - `cases`
  - `app.totalCases` is `160`.
  - `settings.enableProgress` is `true`.
  - Current live case count is exactly `2`.

Current live cases:

```text
case-1-classic-chest-pain | Case 1 | Classic Chest Pain | phase-1 | dangerous-chest-pain
case-2-sudden-tearing-chest-pain | Case 2 | Sudden Tearing Chest Pain | phase-1 | dangerous-chest-pain
```

Live case object keys:

```text
id, phaseId, patternId, warmupId, order, displayNumber, title, setting,
duration, type, goal, patientLabel, presentingProblem, dangerSignal,
mainRiskPoint, dominantTrap, embeddedSkills, mustNotMiss, firstAction,
contextCards, stem, tasks, readingMap, mustSay, script, runComplete,
hints, notes, doNotMissMap, references, sourceBasis, status
```

Audio manifest:

- `data/audio-manifest.js`
  - Exposes `window.AMC_AUDIO_MANIFEST`.
  - Current keys:
    - `case-001`
    - `case-002`
  - Current file references point to generated MP3s under:
    - `audio/case-001/`
    - `audio/case-002/`

Rendering:

- `assets/js/content-store.js`
  - Reads `window.AMC_CONTENT`.
  - Resolves current case, phases, patterns, warmups, and pathway context.
- `assets/js/router.js`
  - Controls hash/query routing.
  - Current routes include:
    - `index.html`
    - `index.html#cases`
    - `index.html#ignite`
    - `index.html#station-stem`
    - `index.html#speak-aloud`
    - `index.html#timed-run`
    - `index.html#mock-exam`
    - `index.html#what-matters`
    - `index.html#hints`
- `assets/js/renderers.js`
  - Renders Home, Cases, Ignite, Case tabs, Stem, Start speaking, Timed run, Do not miss, Hints, source panels, and audio-backed speaking flow.
- `assets/js/ui.js`
  - Handles tab selection, hint behavior, progress memory, timed run, speech guide, audio controls, and local interaction state.
- `assets/js/app.js`
  - Bootstraps the app and re-renders on route changes.

Styling:

- `assets/css/styles.css`
  - Holds the current ADHD-friendly visual system.
  - This is the live design source of truth and must not be changed by an Engine 2 migration-readiness PR.

Build and deployment:

- `scripts/build-pages.js`
  - Builds `dist/`.
  - Fingerprints and copies app shell/assets.
- `scripts/verify-dist.js`
  - Verifies the built Pages output.
- `.github/workflows/`
  - Includes Pages deployment and Engine 2 validation workflow files.

Live architecture conclusion:

The live website still uses the existing handcrafted website data model and design. Engine 2 is present only as a sealed reference/scaffold under `engine2/`; it is not connected to the live renderer.

## Engine 2 Sealed Architecture Summary

Engine 2 lives under:

```text
engine2/
  baseline-p3/
  scaffold-p4/
```

Top-level sealed areas at max depth 4:

```text
engine2/baseline-p3/
  AGENTS.md
  README.md
  ENGINE2-v3.3.3-P3-FINAL-BASELINE.md
  AMC-Clinical-Pathway-Engine2-v3.3.3-P3-FINAL-FULL.txt
  audio/AGENTS.md
  cases/AGENTS.md
  cases/case-001/
  cases/case-002/
  cases/case-003/
  cases/case-004/
  custom-gpt/
  docs/FINAL_QA_REPORT.md
  governance/
  schemas/
  scripts/validate_package.py

engine2/scaffold-p4/
  AGENTS.md
  README.md
  requirements.txt
  ENGINE2-v3.3.3-P3-FINAL-BASELINE.md
  ENGINE2-v3.3.3-P4-SCAFFOLD-CLEANUP-FINAL.md
  audio/AGENTS.md
  cases/AGENTS.md
  cases/case-001/
  cases/case-002/
  cases/case-003/
  cases/case-004/
  custom-gpt/
  docs/
  governance/
  schemas/
  scripts/
  styles/design-tokens.css
  tests/display/
```

Baseline P3 schemas:

- `engine2/baseline-p3/schemas/case.schema.json`
- `engine2/baseline-p3/schemas/status.schema.json`
- `engine2/baseline-p3/schemas/source-basis-map.schema.json`
- `engine2/baseline-p3/schemas/qa.schema.json`
- `engine2/baseline-p3/schemas/renderer-status.schema.json`
- `engine2/baseline-p3/schemas/audio-state.schema.json`
- `engine2/baseline-p3/schemas/voice.schema.json`

Scaffold P4/P5 schemas:

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

Validation scripts:

- `engine2/baseline-p3/scripts/validate_package.py`
- `engine2/scaffold-p4/scripts/validate_package.py`
- `engine2/scaffold-p4/scripts/validate_scaffold.py`
- `engine2/scaffold-p4/scripts/validate_display_contract.py`
- `engine2/scaffold-p4/scripts/validate_section_display.py`
- `engine2/scaffold-p4/scripts/validate_design_tokens.py`

Governance files:

- `engine2/scaffold-p4/governance/MASTER_BLUEPRINT.md`
- `engine2/scaffold-p4/governance/RELEASE_RULES.md`
- `engine2/scaffold-p4/governance/SOURCE_HIERARCHY.md`
- `engine2/scaffold-p4/governance/CASE_REGISTRY.csv`
- `engine2/scaffold-p4/governance/CASE4_GATE.md`
- `engine2/scaffold-p4/governance/ADHD_DISPLAY_CONTRACT.md`
- `engine2/scaffold-p4/governance/DISPLAY_RELEASE_RULES.md`

Case scaffolds:

Each P4 case folder currently contains:

```text
case.json
case.md
qa.json
README.md
source-basis-map.yaml
status.json
voice.json
```

Status model:

`status.json` must track:

- `source_status`
- `schema_status`
- `renderer_status`
- `clinical_status`
- `accessibility_status`
- `audio_manifest_status`
- `audio_generation_status`
- `audio_dry_run_status`
- `listen_test_status`
- `audio_release_status`
- `release_status`
- `bypass_used`

Source-basis-map model:

`source-basis-map.yaml` must track jurisdiction, source status, review dates, and source-supported rules. It has explicit hold/pass semantics. A pass state requires at least one source-backed rule.

QA model:

`qa.json` must track clinical review, accessibility review, renderer review, ADHD display review, check records, and final decision.

Voice/audio model:

`voice.json` and `audio-state.schema.json` track patient voice profile, audio lines, generation state, listen-test state, and audio release state.

P5 ADHD display gate:

The P5 gate adds:

- homepage limits
- case page one-column path expectations
- station stem before teaching
- task snapshot before teaching
- model answer before attempt forbidden
- cue cards as recall prompts rather than scripts
- typography and touch target requirements
- audio controls and transcript requirements

Engine 2 architecture conclusion:

Engine 2 is not a drop-in replacement for `data/content.js`. It is a governed source package with validation, display, source, QA, and audio gates. The safe path is an adapter layer that reads Engine 2 only after validation and maps safe sections into the existing live UI model.

## Live vs Engine 2 Compatibility Matrix

| Live field/path | Engine 2 field/path | Status | Risk | Notes |
|---|---|---:|---:|---|
| `data/content.js -> window.AMC_CONTENT.cases[].id` | `engine2/scaffold-p4/cases/*/case.json -> case_id` | Adapter required | Medium | Live IDs are URL slugs. Engine 2 IDs follow `CP-P1-C001`. Adapter needs stable slug mapping. |
| `displayNumber`, `order`, `title` | `metadata`, `CASE_REGISTRY.csv` | Adapter required | Medium | Engine 2 metadata is sparse in scaffold state. Display title cannot be inferred from placeholder content. |
| `phaseId`, `patternId`, `warmupId` | `metadata.phase`, `metadata.pattern`, registry pattern | Adapter required | Medium | Live uses app-specific IDs. Engine 2 uses clinical pathway labels and case registry rows. |
| `setting`, `duration`, `type` | `metadata.setting`, `metadata.station_type`, `metadata.task_recipient` | Adapter required | Low | Conceptually compatible after mapping, but Engine 2 requires schema-validated metadata. |
| `stem`, `tasks` | `sections.station_stem` or equivalent section metadata | Adapter required | High | Station stem must display before teaching. Missing/hidden stem must block render. |
| `readingMap`, `mustSay`, `script` | Engine 2 learner sections, cue cards, script blocks | Adapter required | High | Live model is handcrafted for current UI. Engine 2 needs section-level display metadata and attempt gates. |
| `doNotMissMap` | P5 cue-card/display contract sections | Adapter required | High | Must preserve ADHD visual retrieval without accidentally teaching before attempt. |
| `hints` | Hidden hints/focus-pack style sections with `requires_attempt_before_reveal` | Adapter required | High | Hints must not appear as first-screen content. Must be gated after a run/missed item. |
| `notes`, `references`, `sourceBasis` | `source-basis-map.yaml` | Adapter required | High | Engine 2 source map has clinical governance semantics. Learner-facing display must not expose raw governance internals. |
| `status` | `status.json` and embedded `status` | Adapter required | High | Live status is lightweight. Engine 2 status controls release blocking. These must not be conflated. |
| `audioCaseId` and `data/audio-manifest.js` | `voice.json`, `audio-state.schema.json`, generated audio manifest | Adapter required | High | Audio must be blocked unless audio statuses pass or are explicitly not required. |
| `settings.enableProgress` and local progress in `ui.js` | Engine 2 release/status fields | Incompatible if conflated | High | Learner progress is not clinical release status. Keep separate. |
| `router.js` hash routes | Engine 2 section IDs/display priorities | Adapter required | Medium | Current routes should remain stable. Future Engine 2 preview can map sections into existing routes. |
| `renderers.js` components | `section-display.schema.json` render components | Adapter required | High | Existing components can be reused, but only through a controlled transform. |
| `styles.css` design system | `styles/design-tokens.css`, `display-contract.schema.json` | Adapter required | Medium | Engine 2 design tokens are sealed reference tokens, not live CSS. Do not overwrite live CSS. |
| `audio-preview.html` | Engine 2 voice/audio preview requirements | Unknown | Medium | Existing preview is for current generated audio. Engine 2 audio preview must remain gated. |
| `dist/` | Built artifact output | Compatible only after build | Low | `dist/` should never be source-edited. Future build should copy only approved files. |

## Future Adapter Requirements

A future Engine 2 adapter must be a gatekeeper, not a bulk migration script.

Required inputs per case:

- `case.json`
- `status.json`
- `qa.json`
- `source-basis-map.yaml`
- `voice.json`
- section display metadata if present
- registry row from `CASE_REGISTRY.csv`

Minimum adapter responsibilities:

- Validate Engine 2 files against the Engine 2 schemas before rendering.
- Map Engine 2 case IDs such as `CP-P1-C001` to live URL slugs such as `case-1-classic-chest-pain`.
- Convert Engine 2 metadata into the live fields the renderer expects.
- Convert safe learner-facing sections into current route panels.
- Preserve current routes unless a future PR explicitly approves route changes.
- Keep Home, Ignite, Stem, Start speaking, Timed run, Do not miss, Hints, and Cases as the learner-facing flow.
- Keep learner progress separate from Engine 2 release status.
- Never infer clinical content from placeholder scaffolds.

Required learner-facing sections:

- Station stem
- Task/questions
- Start speaking or practice run
- Timed run
- Do not miss / cue cards
- Hints after the learner selects a missed item
- Confidence/check result if approved by the current locked system
- Safe source disclosure only when designed for learners

Hidden sections that must not display as learner-facing content:

- Governance instructions
- Source map internals
- QA review records
- Renderer status internals
- Clinical reviewer notes unless explicitly transformed
- Examiner-only lines
- Doctor-thinking hidden content
- Audio generation directions
- Scaffold notes such as "do not infer clinical content"

Status gates that must block display:

- `schema_status` not `pass`
- `renderer_status` is `hold`, `partial`, `build_failed`, `repository_unavailable`, `changes_required`, or `blocked`
- `clinical_status` not `pass`
- `accessibility_status` not `pass`
- `release_status` not `release_ready`, unless the route is an explicitly labeled internal preview
- `bypass_used` true, unless the preview is explicitly internal and blocked from public release

Audio gates that must block audio:

- `audio_manifest_status` not `locked`
- `audio_generation_status` not `generated`, unless audio is not required
- `audio_dry_run_status` not `pass`
- `listen_test_status` not `pass`
- `audio_release_status` not `pass` or `not_required`
- missing transcript when audio is present
- missing keyboard controls or speed controls
- any audio file path outside the approved audio folder

Clinical/release gates that must block public release:

- source status not pass
- clinical review not pass
- QA final decision not pass
- source review due date missing or expired for a pass claim
- release status still hold or blocked
- any section required by the display contract missing
- any critical section marked hidden

Case 4 gate handling:

- Case 4 is blocked by default.
- Case 4 must remain blocked unless Cases 1 to 3 are migrated, audited, rendered, clinically reviewed, and accessibility reviewed, or the exact bypass phrase is present.
- If bypass is used, Case 4 may be draft only.
- Bypass must not allow public release.
- Do not generate Case 4 in an adapter PR.

Case 2/3 source-lock handling:

- Registry marks Case 2 and Case 3 as `source_lock_required`.
- A future adapter must not treat those cases as public-ready from scaffold presence alone.
- Source lock requires source map pass, schema pass, clinical pass, renderer pass, accessibility pass, QA pass, and release-ready status before public display.
- Existing live Case 2 remains part of the current website model. That does not automatically satisfy Engine 2 source-lock.

## Files a Future Integration PR Might Touch

Likely required:

- `assets/js/content-store.js`
  - Risk: wrong mapping could change current case selection.
  - Guardrail: adapter should be additive and feature-flagged.
- `assets/js/renderers.js`
  - Risk: route panels could accidentally display governance or hidden content.
  - Guardrail: only render transformed learner-facing fields.
- `assets/js/router.js`
  - Risk: route changes could break existing URLs.
  - Guardrail: preserve existing hash routes; add preview route only if approved.
- New adapter file, for example `assets/js/engine2-adapter.js`
  - Risk: loader can become a second source of truth.
  - Guardrail: keep it read-only and schema-gated.
- New data index, for example `engine2/index.json` or `data/engine2-preview-index.js`
  - Risk: premature public exposure.
  - Guardrail: preview-only until release gates pass.

Possibly required:

- `index.html`
  - Risk: adding scripts can affect the live app shell.
  - Guardrail: only load adapter behind an approved preview gate.
- `scripts/build-pages.js`
  - Risk: copying sealed scaffold to public `dist/` could expose blocked content.
  - Guardrail: copy only approved, transformed, public-safe output.
- `scripts/verify-dist.js`
  - Risk: current verification may not catch Engine 2 gate mistakes.
  - Guardrail: add gate checks before public Pages deployment.
- `.github/workflows/engine2-validation.yml`
  - Risk: workflow changes can create false pass/fail signals.
  - Guardrail: keep validation separate from deployment until integration is approved.
- `package.json`
  - Risk: dependency churn.
  - Guardrail: avoid app dependency changes unless a future adapter explicitly needs them.

Must not touch without explicit approval:

- `data/content.js`
  - Current live two-case source of truth.
- `data/audio-manifest.js`
  - Current live audio mapping.
- `assets/css/styles.css`
  - Current live design system.
- `assets/js/ui.js`
  - Current timed run, hints, progress, and audio behavior.
- `audio/`
  - Current generated patient audio assets.
- `dist/`
  - Build artifact only.
- `root AGENTS.md`
  - Locked project governance.
- current Case 1 and Case 2 live content
  - Clinical content must not be rewritten during Engine 2 adapter work.
- Engine 2 case clinical fields/statuses
  - Do not mark release-ready or change clinical source states as part of adapter plumbing.

## Design-Preservation Risks

Main risk:

Engine 2 has display tokens and display rules, but the current live website already has a user-approved ADHD rehearsal design. A future adapter could accidentally replace the live design with scaffold styling or generic case cards.

Specific risks:

- Importing `engine2/scaffold-p4/styles/design-tokens.css` into the live app without approval.
- Replacing the existing one-screen learner flow with source/governance-heavy panels.
- Exposing metadata labels instead of everyday learner labels.
- Adding more tabs or dashboard-style choices.
- Rendering hidden hints before the learner attempts a run.
- Treating Engine 2 placeholder scaffolds as usable clinical content.
- Changing route labels or hash behavior.
- Rebuilding current Case 1/Case 2 from scaffold placeholders.
- Letting generated `dist/` changes leak into source commits.

Recommended guardrails:

- Use an adapter that transforms Engine 2 into the current live renderer contract.
- Do not edit `assets/css/styles.css` in the first integration PR.
- Do not change existing route hashes.
- Keep Engine 2 preview behind a non-default route until release gates pass.
- Require visual checks for:
  - Home
  - Cases
  - Ignite
  - Stem
  - Timed run
  - Do not miss
  - Hints
- Require mobile checks before any public exposure.
- Keep current two cases as canonical live cases until a case-by-case migration is approved.

## Clinical Governance Blockers

Future public release must be blocked if any of these are true:

- `source_status` is not `pass`.
- `clinical_status` is not `pass`.
- `qa.final_decision` is not `pass`.
- `release_status` is not `release_ready` or `live`.
- Source review date is missing for a pass state.
- Review due date is missing for a pass state.
- Any required clinical claim lacks source support.
- Any scaffold note is the only source for learner-facing content.
- Any case has status `hold`, `changes_required`, or `blocked`.
- A bypass was used for Case 4 or any clinical gate.

## Audio Blockers

Future audio use must be blocked if any of these are true:

- `voice.json` is missing.
- `voice.json` fails schema validation.
- `audio_manifest_status` is not `locked`.
- `audio_generation_status` is not `generated`.
- `audio_dry_run_status` is not `pass`.
- `listen_test_status` is not `pass`.
- `audio_release_status` is not `pass` or `not_required`.
- Audio files are missing or zero-size.
- Audio paths point outside the approved audio folder.
- Transcript is missing.
- Learner controls lack pause, stop, keyboard access, or speed control.
- AI voice disclosure is missing.

## Case 4 Blocker

Case 4 remains blocked.

Current registry state:

```text
CP-P1-C004,4,Dangerous Chest Pain,not_generated,blocked,...,release_status=blocked,bypass_used=false
```

P6 conclusion:

No future adapter or scaffold PR should generate, render publicly, or release Case 4 until the Case 4 gate is explicitly satisfied.

## Case 2/3 Source-Lock Blockers

Current registry state:

```text
CP-P1-C002,2,Dangerous Chest Pain,Aortic dissection,source_lock_required
CP-P1-C003,3,Dangerous Chest Pain,Pulmonary embolism,source_lock_required
```

P6 conclusion:

Case 2 and Case 3 require source-lock handling before Engine 2 public display. Existing live Case 2 may remain in the current website model, but that does not automatically make the Engine 2 Case 2 scaffold release-ready.

## Validation Checklist for a Future Integration PR

Required existing checks:

```powershell
npm.cmd run check
npm.cmd run build
npm.cmd run verify:dist
python engine2/baseline-p3/scripts/validate_package.py
python engine2/scaffold-p4/scripts/validate_package.py
```

Recommended future checks, proposal only:

- Adapter schema test:
  - every Engine 2 case fails closed when status is hold/blocked.
- Hidden-content test:
  - governance, QA, source internals, and hidden examiner/doctor lines do not render in learner mode.
- Route preservation test:
  - current live URLs still resolve.
- Two-case preservation test:
  - current live `data/content.js` still exposes exactly the approved live cases unless migration is explicitly approved.
- Audio gate test:
  - no audio plays unless all audio gates pass and transcript/controls exist.
- Case 4 gate test:
  - Case 4 remains blocked without the exact approved gate condition.
- Case 2/3 source-lock test:
  - source-lock cases do not render publicly until source gates pass.
- Visual smoke test:
  - Home, Cases, Ignite, Stem, Timed run, Do not miss, and Hints remain calm, readable, mobile-safe, and aligned with the locked rehearsal system.
- Dist leak test:
  - no `dist/` files are staged unless the PR is explicitly a release artifact PR.

## Recommended Next PR Scope

Recommended next PR after P6:

`docs: define Engine 2 adapter contract`

Exact scope:

- Documentation-only.
- Create an adapter specification, not code.
- Define the adapter input/output contract.
- Define fail-closed gate behavior.
- Define hidden-section rules.
- Define current route preservation.
- Define audio gating.
- Define Case 4 and Case 2/3 source-lock behavior.
- Do not touch live website files.
- Do not touch clinical case content.
- Do not alter `data/content.js`.
- Do not alter `assets/css/styles.css`.
- Do not connect Engine 2 to the live app.

Reason:

The compatibility gap is real but manageable. The safest next move is to lock the adapter contract before any code exists. That prevents the future integration from becoming a hidden redesign or a silent clinical-content migration.

