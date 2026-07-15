# Case 1 Final QA

Checkpoint date: 15 July 2026

Case: `case-001` / `CP-P1-C001`

Title: Jaw discomfort while carrying groceries

Scope: Exam Stem and word-for-word Full Run only

Outcome: `AUDITED`

## Release boundary

The fresh canonical Case 1 passes Engine 1.1 with zero case-level findings. This checkpoint does not publish the case and does not approve reasoning-layer content.

The current collection remains `HOLD` only because registry Cases 2 to 42 have not yet been generated. All 42 earlier case files remain separate under **Emergency Explore** and no file in `data/cases/` was changed. The earlier Cases 2 to 42 retain aggregate SHA-256:

`55c64befc778ac8f8c763334f4e68ce2aa96b9db86e730f34a8240a3a28e2e6a`

The next production action is a fresh Case 2 from the next fixed registry slot.

## Content and package binding

| Record | SHA-256 |
| --- | --- |
| Stem | `02df997578c84393208cf858455ec3a4fd3df2365a016cab5fda2f56bc21638e` |
| Full Run | `d59fefccac254937b3bb493671dc4761a6d086d6c627a4b9fdea104d2363741e` |
| Complete visible content | `e6b05df8e4a35aad99e60cc213e6e8bdb2026ef7c4f3b05e98107e73bb935bba` |
| Review scope | `9bf7552d1fce7fd019403411716045c349fa97f2dd8f8bd096e05c5dd881b528` |
| Blueprint package | `f79bfb765990f20c8c1493ad80f4ea0856e61e01ebd565304939e4fec9185bb6` |

The Stem contains no diagnosis label, urgency instruction or disposition instruction. Later changes to the visible case, blueprint, controls, claims, sources or timing invalidate these bindings.

## Interaction review

- The Doctor introduces herself and requests identity before any clinical question.
- Mirella confirms her full name and date of birth before consultation consent.
- Each Doctor information request contains one question or one imperative request.
- All 20 mapped information requests receive one immediate controlled response and the next Doctor line follows the reviewed response-use sequence.
- Procedure consent is granted before aspirin administration.
- The Full Run contains 37 Doctor turns, 26 Patient turns, three Examiner turns and three Action turns.
- The run contains 851 spoken words under the engine metric.
- The audit found zero compound-question, multiple-question, disclosure, consent, actor or task-fidelity findings.
- No handover is present because no visible task requests one.
- No observation, examination or investigation result is invented. Vital signs and ECG are started, but their results remain unavailable.

## Clinical correction record

The pre-audit draft was not accepted as final. Review identified and corrected:

- management-directed urgency in the task wording;
- non-controlled preparation and consent language;
- repeated one-word patient answers that could release later evidence;
- delayed observations, ECG and aspirin;
- omission of a conditional nitrate plan for continuing chest heaviness;
- an over-dense focused-history section;
- a clinician-like patient teach-back; and
- stale controls inherited from the rejected Case 1.

The audited run now activates Triple Zero, vital signs, cardiac monitoring, defibrillator availability and a 12-lead ECG once the dangerous pattern is established. Aspirin 300 mg is given after allergy, bleeding and medicine checks plus consent. Glyceryl trinitrate is planned only after blood pressure, ECG and recent-medicine contraindication checks. Oxygen is not routine at saturation 90% or higher and remains conditional on hypoxaemia, heart failure or shock.

## Timing review

The complete spoken and observed-action review records 438 seconds. The four-minute Examiner prompt follows the focused-history summary at 240 seconds.

| Task | Observed seconds |
| --- | ---: |
| Focused history | 240 |
| Diagnostic explanation and differentials | 75 |
| Concerns and management | 123 |
| Total | 438 |

The three Action events total 31 seconds. The task sections contain 452, 129 and 260 spoken words respectively, with the scheduled Examiner prompt accounting for the remaining spoken words. Every Full Run line maps to exactly one task and the implied speaking pace is within the executable range.

## Source and clinical baseline

The blueprint records current source and locator review against:

- [AMC Clinical Examination Specifications V8.3, June 2026](https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf).
- [AMC Assessment Domains V1.1, November 2024](https://www.amc.org.au/wp-content/uploads/2024/12/20241112-AIPD-AssessmentDomains.pdf).
- [2025 Australian clinical guideline for acute coronary syndromes](https://www.heartfoundation.org.au/for-professionals/acs-guideline).
- [ANZCOR Guideline 14.1: Acute Coronary Syndromes—Presentation](https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-1-acute-coronary-syndromes-presentation).
- [ANZCOR Guideline 14.2: Acute Coronary Syndromes—Initial Medical Therapy](https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-2-acute-coronary-syndromes-initial-medical-therapy).

These sources support the atypical symptom pattern, prompt transfer, early vital signs and ECG, monitoring, serial testing, aspirin, nitrate and oxygen-threshold controls. Exact claim-to-source and line mappings are stored in `data/blueprints/case-001.blueprint.json`.

## Verification record

| Check | Result |
| --- | --- |
| Case 1 direct Engine 1.1 audit | `AUDITED`; zero findings |
| Engine regression suite | 79 passed, 0 failed |
| Complete repository test suite | 200 passed, 0 failed |
| Case syntax | 1 current + 42 Emergency Explore files passed |
| Website build | passed; both collections built |
| Distribution verification | passed |
| Registry | `READY`; next fixed slot is Case 2 |
| Current collection | `HOLD`; 1 `AUDITED`, 0 case-level `HOLD`, 41 registry slots pending |
| Emergency Explore diff | empty; earlier 42 files unchanged |
| Publication | not performed |

Case 1 therefore meets the Engine 1.1 `audited` contract at this exact content and blueprint package state. Collection completion and publication are separate gates.
