# AMC Case Engine 1.1 Final QA

Final QA date: 14 July 2026
Collection checkpoint: 15 July 2026
Scope: Exam Stem and word-for-word Full Run production engine
Excluded: reasoning layer, new-case generation and publication

## Outcome

Engine 1.1 is `AUDITED_FOR_RECONSTRUCTION`.

This is a pass for the production contract and fail-closed audit framework. The original engine QA authorised sequential reconstruction beginning with Case 1; it did not itself approve case content. Case 1 has since passed a separate current blueprint, source, clinical, AMC-level, dialogue, timing and final-QA review. The collection remains on `HOLD` while Cases 2 to 42 await reconstruction.

- Registry: `READY`
- Existing collection: `HOLD`
- Cases: 42 total, 1 `AUDITED`, 41 `HOLD`
- Generation: `BLOCKED`
- Publication: not performed
- Next authorised action: reconstruct Case 2 only

## Verification record

| Gate | Result |
| --- | --- |
| Engine tests | 78 passed, 0 failed |
| Complete repository tests | 197 passed, 0 failed |
| Independent sealed adversarial scenarios | 43 checked, 0 false passes, 0 valid false rejections |
| Canonical case syntax | 42/42 passed |
| Website checks and build | passed |
| Distribution verification | passed |
| Git whitespace/error check | passed |
| Existing case files modified | `case-001.js` only |
| Cases 2 to 42 sealed aggregate SHA-256 | `55c64befc778ac8f8c763334f4e68ce2aa96b9db86e730f34a8240a3a28e2e6a` |
| Historical pre-reconstruction 42-case-set SHA-256 | `fd244a5be2bcf6512b2d69962de143f9958ea68c0160ce57acc7c478a083c92a` |
| Release-gate behaviour | default exit 2; report-only exit 0 |

The default non-zero collection result is required. A zero exit code would be a final-QA failure because 41 legacy cases do not yet have a current v1.1 hidden blueprint and completed review package.

## Final adversarial result

The final sealed rerun verified both blocking and valid-control behaviour across:

- identity before clinical content, including direct, third-party, record/wristband and justified limitation modes;
- exact identity-bound vocatives, including valid multiword address and wrong-name rejection;
- positive scope-aware consent and rejection of refusal, restriction and non-answer;
- one substantive information request per Doctor turn, including Unicode and punctuation variants;
- immediate participant answers, exact response evidence, next-turn use and focused over-disclosure limits;
- exam-neutral Stem diagnosis, urgency and disposition controls;
- exact Examiner ownership, release order and modality;
- actor-bound Action lines, consent sequencing and full-event participant/equipment grammar;
- rejection of passive or wrong actors and observation prefixes that conceal treatment;
- exact task evidence and standalone positive-performance clauses;
- critical-action trigger, deadline and standalone positive-action clauses;
- source, clinical concept, task, marking and safety-evidence linkage;
- listened timing, line ownership, speaking rate and stale-review invalidation;
- registry provenance, reconstruction order, duplication checks and generation blocking.

The final task-polarity challenge specifically confirmed that a phrase inside “I am not saying that ...” cannot certify performance. It also confirmed that natural positive wording such as omitting jargon while genuinely explaining and recommending management is not falsely rejected.

## Case 1 semantic final QA

Independent semantic QA did not rely on the first structural pass. It identified and required correction of a disguised three-part pleuritic-pain question, an unprompted back-pain disclosure, an incorrect timing and four-minute-prompt record, delayed monitoring, delayed aspirin, glyceryl trinitrate that was discussed but not administered, and a stale handover-duration estimate.

After correction, the final Case 1 run contains 42 Doctor turns and 29 participant turns, with zero multiple-question and zero compound-question turns. Its timestamped read-through ends at 480 seconds; the focused-history summary is followed immediately by the four-minute Examiner prompt at 240 seconds, and the task review records 240, 120 and 120 seconds. The final direct audit is `AUDITED` with zero findings. Exact stable hashes and the full correction record are in `audits/CASE_001_FINAL_QA.md`.

## What the machine proves

The executable engine proves required shape, exact visible-to-hidden binding, sequence, controlled ownership, actor and participant references, catalogue membership, recorded dates, line and task linkage, reviewed-clause presence, timing arithmetic, package hashes, registry order and the tested contradiction families.

## What still requires current human review

The engine does not prove:

- that a clinical statement is accurate or safe;
- that a source exists, is current, is applicable or supports the mapped claim;
- that a source locator is correct;
- that a diagnosis-alias list is complete;
- that Stem wording lacks every possible indirect clue or urgency synonym;
- that mapped evidence is clinically intelligent merely because exact phrases are present;
- that a station is genuinely at AMC level;
- that dialogue sounds natural when performed;
- that a reviewer was competent or honest.

For every reconstructed case, the thread must therefore perform current source review, clinical-safety review, AMC-level review, Stem-neutrality line review, task-alignment review, full dialogue review, spoken listen-through and final QA. Any uncertainty produces `HOLD`.

The authoritative catalogue currently contains two AMC examination sources and two ACS clinical sources. Its clinical coverage is ACS only. Other topics require deliberate source verification and catalogue expansion before a case can release.

## Release rule

A case may become `AUDITED` only when it has exactly one valid v1.1 blueprint, exact exam-neutral visible content, completed behavioural controls, current source and clinical reviews, a passed spoken listen test, current review-scope and package hashes, an audited registry row and no executable finding.

Engine status and case status are separate. This engine may govern reconstruction while the collection remains on `HOLD`; at this checkpoint Case 1 is `AUDITED` and Cases 2 to 42 remain on `HOLD`.

## Authorised next action

Reconstruct Case 2 only. Do not generate a new case, skip ahead, publish or relabel the collection. Case 1 is `AUDITED`; Cases 2 to 42 remain untouched and on `HOLD`.
