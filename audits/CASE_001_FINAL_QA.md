# Case 1 Final QA

Checkpoint date: 15 July 2026
Case: `case-001` / `CP-P1-C001`
Title: Chest discomfort after lunch
Scope: Exam Stem and word-for-word Full Run only
Outcome: `AUDITED`

## Release boundary

Case 1 has completed Engine 1.1 reconstruction and passed its current machine and human review gates. This checkpoint does not publish the case, authorise bulk generation or approve any reasoning-layer content.

The collection remains `HOLD`: Case 1 is `AUDITED`; Cases 2 to 42 remain untouched and `HOLD`. Their aggregate SHA-256 before and after Case 1 reconstruction is:

`55c64befc778ac8f8c763334f4e68ce2aa96b9db86e730f34a8240a3a28e2e6a`

The next controlled production action is reconstruction of Case 2 only.

## Content and package binding

| Record | SHA-256 |
| --- | --- |
| Stem | `6bfb9fcda2a004205ddf0076b19802c2592b143129f8381ec30cadaf25058875` |
| Full Run | `848ecf9cfe383116e70416d2c2e604554d377aa068871bd8e8f42b95f8bd8c78` |
| Complete visible content | `991b1957b9f5ad32c9aebfeded76bfb420ca80ea26c8ad4791841a5aa73bf1ce` |
| Review scope | `c127fd03b2adef021c16ba809e76f3edbaa1bdd83d0ee8907238f1caad874740` |
| Blueprint package | `01015232dfe4e7e71f28b024a4f864f2118482a50760459bd4ccbba1bbca215f` |

The Stem was retained with exam-neutral presentation. Its line review found no diagnosis label, urgency instruction or disposition instruction. The Full Run and its hidden blueprint are bound to the current review-scope and package hashes; later reviewed-content changes invalidate this checkpoint.

## Interaction review

- Identity is requested before clinical history, and the participant's identity response contains identity only.
- Positive consultation, examination and aspirin-treatment consent are each visible before the corresponding content or action.
- 42 Doctor turns and 29 participant turns were reviewed as dialogue.
- All 21 mapped Doctor information requests receive one immediate controlled response and are used by a subsequent Doctor line.
- The audit found 0 multiple-question turns and 0 compound-question turns.
- The run contains 1,020 spoken words under the collection audit metric.
- Examination findings and the ECG result are released by the Examiner only after the mapped Doctor requests.

## Independent semantic correction record

The first structurally passing draft was not accepted as final. Independent semantic QA identified and resolved:

- a pleuritic-pain turn that disguised three questions inside one Doctor request;
- back-pain information disclosed before the Doctor asked for it;
- an incorrect timing record and misplaced four-minute Examiner prompt;
- monitoring initiated later than the recognised high-risk pattern required;
- aspirin administered later than the reviewed indication and contraindication checks allowed;
- glyceryl trinitrate discussed without a visible administration action; and
- a handover duration still bound to an earlier timing estimate.

The corrected run was reviewed again as dialogue, clinically rechecked and re-bound to new visible-content, review-scope and package hashes. The final direct audit returned `AUDITED` with zero findings.

## Timing review

The complete timestamped line-by-line spoken and observed-action review recorded 480 seconds. The Examiner's four-minute prompt follows the focused-history summary immediately at 240 seconds, and the final Examiner line occurs at 480 seconds.

| Task | Observed seconds |
| --- | ---: |
| Focused history | 240 |
| Diagnostic explanation and differentials | 120 |
| Concerns and management | 120 |
| Total | 480 |

Observed Action time includes neutral preparation, emergency ambulance activation, the consented examination, consented aspirin administration and consented glyceryl trinitrate administration. Every Full Run line maps to exactly one task. Before the prompt, 479 spoken words plus 26 seconds of observed Action time total 240 seconds; from the prompt onward, 541 spoken words plus 33 seconds of observed Action time total 240 seconds.

## Source and clinical baseline

The blueprint records current source and locator review against:

- [AMC Clinical Examination Specifications V8.3, June 2026](https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf), for station timing, tasks, predominant assessment area, key steps, domains and global rating.
- [AMC Assessment Domains V1.1, November 2024](https://www.amc.org.au/wp-content/uploads/2024/12/20241112-AIPD-AssessmentDomains.pdf), for official domain vocabulary and expected performance.
- [2025 Australian clinical guideline for acute coronary syndromes](https://www.heartfoundation.org.au/for-professionals/acs-guideline), for assessment, differential diagnosis, ECG, monitoring, initial treatment and primary-care transfer.
- [ANZCOR Guideline 14.2: Acute Coronary Syndromes—Initial Medical Therapy](https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-2-acute-coronary-syndromes-initial-medical-therapy), for oxygen, aspirin and nitrate treatment.

The source review supports the case's prompt transfer, ECG and monitoring, aspirin, oxygen-threshold, nitrate and single-test rule-out claims. The detailed claim-to-source and line mappings remain in `data/blueprints/case-001.blueprint.json`.

## Verification record

| Check | Result |
| --- | --- |
| Case 1 direct Engine 1.1 audit | `AUDITED`; 0 critical, high, medium or low findings |
| Engine regression suite | 78 passed, 0 failed |
| Complete repository test suite | 197 passed, 0 failed |
| Canonical case syntax | 42/42 passed |
| Website build | passed; 42 cases built |
| Distribution verification | passed |
| Collection report | `HOLD`; Registry `READY`; 1 `AUDITED`; 41 `HOLD`; no fatal errors |
| Cases 2 to 42 seal | unchanged before and after reconstruction |
| Publication | not performed |

Case 1 therefore meets the Engine 1.1 `audited` contract at this exact content and blueprint package state. The collection does not meet the publication gate.
