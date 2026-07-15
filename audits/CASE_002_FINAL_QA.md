# Case 2 Final QA

Checkpoint date: 15 July 2026

Case: `case-002` / `CP-P1-C002`

Title: Sudden chest and back pain

Scope: Exam Stem and word-for-word Full Run only

Outcome: `AUDITED`

## Release boundary

The fresh canonical Case 2 passes Engine 1.1 with zero case-level findings. This checkpoint does not publish the case and does not approve reasoning-layer content.

The current collection remains `HOLD` only because registry Cases 3 to 42 have not yet been generated. All 42 earlier case files remain separate under **Emergency Explore**, and no file in `data/cases/` was changed. The next production action is a fresh Case 3 from the next fixed registry slot.

## Content and package binding

| Record | SHA-256 |
| --- | --- |
| Stem | `666b2c4cdaa6118f43c06c6306ba116784afdc17c01aeee75e189543fd08995e` |
| Full Run | `052fad04969d530c5bd4aa2bbe25f8e29b065ea5326fbcc62c6df261cf7f9ecb` |
| Complete visible content | `8ba0025a5e3f45a5c0105d2f5063ebb9c68b8e96ce81c5a06fefb24a82c0f33e` |
| Review scope | `1ee4e0e8e8a9057d3be88492cba368c9b56525429a0f7c1a0ae2d51792c87180` |
| Blueprint package | `685099bd36e6c04ec12bf655af158ae82fa93e21129325883d091130b326347f` |
| Timing evidence | `8a5b96b8102794c4879c2bc823da6f1a845b9beb5d9cc772ac4b58e4a0288c38` |

The Stem contains no diagnosis label, urgency instruction, abnormal result, treatment instruction or required disposition. The three visible task timings allocate three minutes to focused assessment, one minute to diagnostic explanation and four minutes to concerns and management; they describe station structure, not clinical urgency.

## Interaction review

- The Doctor performs hand hygiene, introduces herself and requests identity before any clinical observation, disclosure, question or action.
- Julian confirms his full name and date of birth before consultation consent.
- Every Doctor information request contains one question or one imperative request.
- All 14 mapped information requests receive one immediate, uniquely attributable response.
- Examination and procedure consent occur before examination, cannulation, blood sampling, analgesia, beta-blockade and CT angiography.
- The run contains 39 Doctor turns, 26 Patient turns, five Examiner turns and eight Action turns.
- The engine counts 867 spoken words.
- The audit found zero multi-question, compound-question, disclosure, consent, actor, Examiner-release or task-fidelity findings.
- No handover is present because no visible task requests one.

## Clinical and task review

The station tests a distinct aortic-dissection job within the Dangerous Chest Pain pattern. The candidate must recognise abrupt maximum-at-onset chest-to-back pain, near-syncope, marked inter-arm pressure difference and radial-pulse asymmetry, then act before imaging confirms the diagnosis.

The audited run:

- starts monitoring, senior review and aortic-team involvement when the high-risk pattern is established;
- keeps the remaining history focused rather than completing an exhaustive risk-factor checklist;
- checks cardiovascular, respiratory, neurological and peripheral-perfusion findings through one focused controlled Examiner release;
- records an ECG and relevant blood tests without delaying definitive aortic imaging;
- withholds aspirin and fibrinolysis while dissection is strongly suspected;
- does not give routine oxygen at an oxygen saturation of 97% on room air;
- provides titrated analgesia and beta-blocker-first anti-impulse treatment, adding a vasodilator only after heart-rate control if pressure remains above target;
- uses immediate CT angiography while stable and a bedside heart-ultrasound pathway if instability makes CT unsafe;
- distinguishes ascending from uncomplicated descending dissection management in patient-centred language; and
- answers the patient's indigestion, artery-tear, aspirin and partner concerns.

The pre-audit draft was corrected for pre-identity clinical observation, actor-inexact consent, repeated generic negative answers, an overextended focused history, unsupported broad anticoagulation wording, artificial technical phrasing, fragmented examination requests and unmeasured timing.

## Timing review

A reproducible FFmpeg/libflite synthetic timing rehearsal records 338.750 seconds of rendered speech plus 94 seconds of reviewed Action intervals, for 432.750 seconds raw and 433 seconds rounded. The Examiner's three-minute prompt begins at 181.505 seconds, approximately three minutes into the station. No human listen-through is claimed.

The legacy `spoken_readthrough` method identifier is retained for Engine 1.1 schema compatibility. The timing evidence verifies elapsed-time feasibility only; natural dialogue, clinical quality and Examiner authenticity were reviewed separately.

| Task | Whole-second task-evidence allocation |
| --- | ---: |
| Focused assessment | 148 |
| Diagnostic explanation and differentials | 47 |
| Concerns and management, including early protection | 238 |
| Total | 433 |

Management actions are intentionally interleaved before the three-minute prompt once the high-risk aortic pattern is established. Every Full Run line maps to exactly one task, the management task remains predominant, and each task's implied speaking pace remains within the executable range.

## Source and clinical baseline

The blueprint records current source and locator review against:

- [AMC Clinical Examination Specifications V8.3, June 2026](https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf).
- [AMC Assessment Domains V1.1, November 2024](https://www.amc.org.au/wp-content/uploads/2024/12/20241112-AIPD-AssessmentDomains.pdf).
- [NSW Agency for Clinical Innovation: Aortic dissection clinical tool, minor revision May 2025](https://aci.health.nsw.gov.au/networks/eci/clinical/tools/aortic-dissection).
- [2025 Heart Foundation and CSANZ Australian clinical guideline for acute coronary syndromes](https://www.heartfoundation.org.au/for-professionals/acs-guideline).
- [2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease](https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease).
- [ANZCOR Guideline 9.2.10: The Use of Oxygen in Emergencies](https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies).

The May 2025 NSW tool is the primary Australian aortic source for presentation, stable-versus-unstable imaging, referral, haemodynamic targets and Type A/Type B disposition. The joint ACC/AHA guideline supplements beta-blocker-first sequencing. The Heart Foundation–CSANZ guideline supports the dangerous chest-pain differential set. ANZCOR is used only for the contextual normoxaemic-oxygen decision and is not treated as an aortic-management guideline.

## Verification record

| Check | Result |
| --- | --- |
| Case 2 direct Engine 1.1 audit | `AUDITED`; zero findings |
| Engine regression suite | 81 passed, 0 failed |
| Complete repository test suite | 202 passed, 0 failed |
| Case syntax | 2 current + 42 Emergency Explore files passed |
| Website build | passed; both collections built |
| Distribution verification | passed |
| Registry | `READY`; next fixed slot is Case 3 |
| Current collection | `HOLD`; 2 `AUDITED`, 0 case-level `HOLD`, 40 registry slots pending |
| Emergency Explore diff | empty; earlier 42 files unchanged |
| Publication | not performed |

Case 2 therefore meets the Engine 1.1 `audited` contract at this exact visible-content and blueprint-package state. Collection completion and publication remain separate gates.
