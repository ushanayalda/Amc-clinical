# Case 2 Final QA

Checkpoint date: 15 July 2026

Case: `case-002` / `CP-P1-C002`

Title: Sudden chest and back pain

Scope: Exam Stem and word-for-word Full Run only

Outcome: `AUDITED`

## Release boundary

Revision 2 passes Engine 1.1 with zero case-level findings. The Stem and its three tasks are byte-for-byte unchanged. The Full Run was rebuilt after the rejected revision enacted emergency-department procedures and treatment that the visible task did not request.

Publication was authorised on 16 July 2026. This corrected checkpoint replaces the earlier rejected public revision. Reasoning-layer content is outside this checkpoint.

The collection remains `HOLD` only because registry Cases 3 to 42 have not yet been generated. The 42 earlier files under **Emergency Explore** remain unchanged.

## Content and package binding

| Record | SHA-256 |
| --- | --- |
| Stem | `666b2c4cdaa6118f43c06c6306ba116784afdc17c01aeee75e189543fd08995e` |
| Full Run | `154d2b6b04c3227479a60772d2c464a58298c6b0d38100f9c3c46ef55ba04ec2` |
| Complete visible content | `288eac0b05e309532a4684ebc2c6d4a731c0bb29fefaa628a248f9e5439eb149` |
| Review scope | `695ee6911cf0cd1bf44db4b06c819f2d9a67e992782279607877a524b11b9ef3` |
| Blueprint package | `94294b81de83e0374c1552804a393a68f8d26c8fc6115ab88b4e3d9c5aee28ef` |
| Timing evidence | `3e5171b05d2f9ea8ed262203c0080e2c0039505e6467fbad4d57c4d4acb60296` |

The Stem contains no diagnosis label, urgency instruction, abnormal result, treatment instruction or required disposition. Its visible timings allocate three minutes to focused assessment, one minute to diagnostic explanation and four minutes to concerns and management.

## Task-scope correction

The management task says: `Address the patient's concerns and explain your management plan.` It therefore authorises explanation, not enactment.

The corrected Full Run:

- contains one Action only: hand hygiene and approach;
- contains no enacted examination, cannulation, blood collection, drug administration, imaging, transfer or treatment;
- contains no procedure or treatment consent because no procedure or treatment is performed;
- explains IV access, blood tests, ECG, analgesia, heart-rate-first blood-pressure treatment, CT angiography and specialist involvement as future management steps;
- contains no handover because no visible task requests one; and
- binds the same rule into the engine: explanation and discussion tasks now fail if mapped to non-neutral Action lines.

## Interaction review

- The Doctor introduces herself and makes one standalone administrative request for full name and date of birth.
- Julian confirms both identifiers before consultation consent and clinical questioning.
- Every clinical Doctor request contains one question or one imperative request.
- All 17 mapped information requests receive one immediate, uniquely attributable response.
- Consultation and examination consent are separate and precede their respective scopes.
- The run contains 40 Doctor turns, 29 Patient turns, five Examiner turns and one Action turn.
- The engine counts 1,184 spoken words.
- The audit found zero multi-question, compound-question, disclosure, consent, actor, Examiner-release, task-scope or task-fidelity findings.

## Clinical and AMC-level review

This is a management/counselling-predominant station. The diagnosis is deliberately recognisable because the assessed challenge is a focused safety assessment followed by clear explanation of uncertainty, important alternatives, immediate management and patient concerns.

The audited run:

- identifies abrupt maximum-at-onset chest-to-back pain, near-syncope, marked inter-arm pressure difference and radial-pulse asymmetry;
- requests observations and one focused cardiovascular, respiratory, neurological and peripheral-vascular finding set from the Examiner;
- explains aortic dissection without claiming confirmation before imaging;
- retains acute coronary syndrome, pulmonary embolism and pneumothorax as dangerous alternatives;
- explains monitored senior and specialist review when the high-risk pattern is established;
- explains that ECG and blood tests must not delay definitive aortic imaging;
- withholds aspirin and fibrinolysis while dissection remains strongly suspected;
- explains strong analgesia and heart-rate control before careful blood-pressure reduction;
- uses urgent CT angiography while the patient is not showing circulatory collapse; and
- distinguishes likely urgent surgery for proximal dissection from initial medical management for uncomplicated descending dissection.

No routine oxygen is narrated at an oxygen saturation of 97% on room air, and no oxygen treatment is enacted.

## Timing review

A reproducible FFmpeg/libflite synthetic timing rehearsal records 417.440 seconds of rendered speech plus eight seconds for the neutral approach, for 425.440 seconds raw and 425 seconds rounded. The Examiner's three-minute prompt begins at 182.730 seconds. No human listen-through is claimed.

| Task | Whole-second allocation |
| --- | ---: |
| Focused assessment | 173 |
| Diagnostic explanation and differentials | 52 |
| Concerns and management explanation | 200 |
| Total | 425 |

Every Full Run line maps to exactly one task. The management task remains predominant, and each task's implied speaking pace remains within the executable range.

## Source baseline

The hidden blueprint records claim and locator review against:

- [AMC Clinical Examination Specifications V8.3, June 2026](https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf).
- [AMC Assessment Domains V1.1, November 2024](https://www.amc.org.au/wp-content/uploads/2024/12/20241112-AIPD-AssessmentDomains.pdf).
- [NSW Agency for Clinical Innovation: Aortic dissection clinical tool, minor revision May 2025](https://aci.health.nsw.gov.au/networks/eci/clinical/tools/aortic-dissection).
- [2025 Heart Foundation and CSANZ Australian clinical guideline for acute coronary syndromes](https://www.heartfoundation.org.au/for-professionals/acs-guideline).
- [2022 ACC/AHA Guideline for the Diagnosis and Management of Aortic Disease](https://professional.heart.org/en/science-news/2022-guideline-for-the-diagnosis-and-management-of-aortic-disease).

The NSW ACI tool is the primary Australian source for recognition, imaging and emergency management. The ACC/AHA guideline supplements heart-rate-first anti-impulse sequencing and definitive Type A/Type B management. The Heart Foundation and CSANZ guideline supports the dangerous chest-pain differential framework.

## Verification record

| Check | Result |
| --- | --- |
| Case 2 direct Engine 1.1 audit | `AUDITED`; zero findings |
| Engine regression suite | 82 passed, 0 failed |
| Complete repository test suite | 203 passed, 0 failed |
| Case syntax | 2 current + 42 Emergency Explore files passed |
| Website build | passed; both collections built |
| Distribution verification | passed |
| Registry | `READY`; next fixed generation slot is Case 3 |
| Current collection | `HOLD`; 2 `AUDITED`, 0 case-level `HOLD`, 40 registry slots pending |
| Emergency Explore diff | empty; earlier 42 files unchanged |
| Corrected revision publication | authorised for this release |

Case 2 therefore meets the Engine 1.1 `audited` contract at this exact visible-content and blueprint-package state. Case 3 generation remains a separate action.
