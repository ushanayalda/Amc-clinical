# AMC Case Engine 1.1 Internal Audit

Audit date: 14 July 2026
Collection checkpoint: 15 July 2026
Scope: Exam Stem and word-for-word Full Run production engine
Excluded: reasoning layer, case publication and new-case generation

## Outcome

Engine 1.1 is `AUDITED_FOR_RECONSTRUCTION` as a fail-closed production contract. The original engine audit authorised sequential reconstruction beginning with Case 1; it did not itself approve any case or clinical claim. Case 1 has since passed its separate blueprint, clinical, source, interaction, timing and final-QA gates. The collection remains on `HOLD` because Cases 2 to 42 have not been reconstructed.

- Registry: `READY`
- Collection: `HOLD`
- Current cases: 42
- Cases `AUDITED`: 1
- Cases `HOLD`: 41
- Generation: `BLOCKED`
- Publication: not performed
- Visible case files changed during reconstruction: `case-001.js` only
- Cases 2 to 42 sealed aggregate SHA-256: `55c64befc778ac8f8c763334f4e68ce2aa96b9db86e730f34a8240a3a28e2e6a`
- Historical pre-reconstruction 42-case-set SHA-256: `fd244a5be2bcf6512b2d69962de143f9958ea68c0160ce57acc7c478a083c92a`

## Audit method

The engine was reconstructed and repeatedly challenged with sealed valid fixtures. Each false pass was converted into an executable regression. A fixture could reach `AUDITED` only after its case content, blueprint, registry record, review-scope hash and package hash agreed.

The final executable suite covers:

- strict visible-case, hidden-blueprint and registry schemas;
- exact registry identity, phase, pattern, modality and provenance binding;
- exam-neutral Stem wording, including hidden diagnoses, aliases, urgency and disposition leakage;
- positive identity sequencing and positive record or wristband matching;
- positive scope-aware consent and affirmative granted responses;
- examination, procedure, treatment and sensitive-history consent sequencing;
- substantive one-request Doctor turns, including punctuation, connector and list variants;
- exact immediate participant responses, answer-evidence phrases, next-turn use and a 55-word focused-response ceiling;
- identity-bound address terms and exact one-participant control for every visible vocative;
- controlled opening affect and participant, Examiner and Action line ownership;
- administrative Examiner boundaries and modality-bound result releases;
- exhaustive actor-bound Action classification, full-event low-risk grammar, duration, consent or controlled emergency exception;
- exact task evidence, all specific task subjects and a standalone positive-performance clause;
- source, claim, concept, task, marking and line linkage;
- source-reviewed critical-action trigger and deadline ordering;
- listen-through timing, per-task timing and speaking-rate limits;
- review-scope and package hashes that invalidate stale approvals;
- registry reconstruction order, manifest provenance and generation blocking;
- exact and near-duplicate collection controls.

Final verification recorded 78/78 engine tests, 197/197 repository tests and 43 independently sealed adversarial scenarios with zero false passes and zero valid false rejections.

## Corrected false-pass families

The adversarial rounds identified and corrected failures that earlier systems and the first reconstruction drafts missed:

1. Identity and clinical history could be bundled into one opening.
2. Clinical statements and actions could appear before identity using superficially neutral wording.
3. Record checking did not require a successful identifier match.
4. Consent controls accepted coercive statements, refusal, conditional restriction and non-answer.
5. Examination and procedure actions could occur under question-only consultation consent.
6. Doctor speech could conceal performed clinical actions.
7. Action classifications could be self-mislabelled as neutral or scene observations.
8. One-question detection missed shared auxiliaries, punctuation, slashes and sequential connectors.
9. Bare prompts and one-word questions could be mapped as substantive requests.
10. An unrelated or refusing response could be labelled answered.
11. Sensitive questions could be omitted from the declared consent map.
12. Stem disposition leakage survived through passive ambulance, transfer, admission and prioritisation wording.
13. Hidden-diagnosis checking relied on an incomplete canonical ACS alias set.
14. Task completion could pass through one incidental shared word or a short acronym being discarded.
15. Negated task performance could contain the expected clinical phrase and still self-certify.
16. A positive-performance phrase could survive only as a substring inside “I am not saying that ...”. Positive evidence now has to begin its own visible clause.
17. Broad negation detection falsely rejected useful wording such as omitting jargon while giving a real explanation. Clause-bound positive evidence replaced that inference.
18. A critical action could exist after its clinically reviewed deadline or be relinked to a generic or negated line.
19. An Action line could name the wrong performer, use a passive hidden performer or assign treatment to equipment or the environment.
20. A benign participant-observation or equipment-event prefix could conceal oxygen, medication, examination, procedure or treatment in the same line.
21. A Doctor could address the wrong patient name after correct identity confirmation.
22. A focused participant answer could disclose the remaining history in one data dump.
23. Telephone, video, online, third-party and model/equipment metadata could contradict visible actions.
24. Examiner findings could claim impossible direct physical action in a remote modality.
25. Duplicate blueprint paths, stale review records and untrusted action reports could bypass intended authority.
26. Registry titles, capacities and pattern logic could drift without deliberate manifest renewal.

## Case 1 independent semantic checkpoint

After Case 1 first satisfied the structural engine, an independent semantic review identified seven case-level defects that required correction before the final `AUDITED` checkpoint:

1. A pleuritic-pain turn disguised three clinical questions inside one Doctor request.
2. Back-pain information was disclosed before the Doctor asked for it.
3. The timing record and four-minute Examiner prompt did not reflect the performed run.
4. Cardiac monitoring was initiated too late for the recognised risk pattern.
5. Aspirin administration was delayed despite the reviewed indication and contraindication checks.
6. Glyceryl trinitrate was discussed but not visibly administered.
7. The handover duration remained bound to a stale timing estimate.

Each defect was corrected and re-bound to the current visible-content, review-scope and package hashes. The final timestamped read-through is 480 seconds, with the four-minute prompt immediately after the focused-history summary at 240 seconds. The final direct Case 1 audit is `AUDITED` with zero findings.

## Current collection report

Case 1 is now `AUDITED`. Cases 2 to 42 remain preserved source material. The current release-blocking report is:

| Finding | Count |
| --- | ---: |
| `compound_question_in_turn` | 226 |
| `invalid_visible_case` | 197 |
| `multiple_questions_in_turn` | 107 |
| `registry_case_not_audited` | 41 |
| `missing_blueprint` | 41 |
| `doctor_monologue` | 28 |
| `identity_response_contains_history` | 26 |
| `identity_mixed_with_clinical_content` | 22 |
| `stem_signals_urgency` | 4 |
| `registry_global_id_mismatch` | 3 |
| `identity_not_first` | 2 |

The collection also has no case currently classified with Examination as its predominant assessment area.

These counts are screening findings, not a repair checklist that can be applied mechanically. Each case must be rebuilt from its registry job and a completed hidden blueprint.

## Human and external truth boundary

The machine proves shape, dates, order, exact text binding, evidence presence, hash scope, catalogue membership and many behavioural contradictions. It does not prove:

- that a clinical statement is correct;
- that a source page exists or supports the cited claim;
- that a locator is accurate;
- that a diagnosis-alias list is complete;
- that a response is clinically intelligent merely because evidence phrases are present;
- that an affect, task requirement or clinical concept is semantically truthful merely because it is linked;
- that the dialogue sounds natural at spoken pace;
- that a reviewer was honest or competent.

Therefore current source review, clinical review, AMC-level review, Stem-neutrality line review, task-alignment review, full dialogue read-through and final QA remain mandatory thread actions for each reconstructed case. Any uncertainty returns `HOLD`.

The exact source catalogue currently contains two AMC examination sources and two ACS clinical sources. Non-ACS cases require deliberate source review and catalogue expansion.

## Authorised next action

Reconstruct Case 2 only. Do not generate a new case, skip ahead, publish, or relabel the collection. Case 1 is `AUDITED`; Cases 2 to 42 remain untouched and on `HOLD`.
