# AMC Case Production Engine 1.1

Implementation status: `AUDITED_FOR_CASE_GENERATION`

Collection status: `HOLD`

Generation status: `ACTIVE_CASE_BY_CASE`

This engine governs only the Exam Stem and word-for-word Full Run. The reasoning layer is outside its scope. Fresh canonical cases are generated in `data/current-cases/` from the fixed registry, beginning again at Case 1. The earlier 42 files remain byte-preserved in `data/cases/` and are presented separately as **Emergency Explore**. The registry retains the machine term `reconstruction` for consuming its recovered slots in order; it does not mean editing or republishing the Emergency Explore files.

## Controlling files

- `registry-library/case-registry.v1.1.json` is the machine authority for phases, patterns, cases and the next permitted action.
- `engine/case-registry.schema.json` controls registry shape.
- `engine/amc-case-blueprint.schema.json` controls the hidden case blueprint.
- `engine/amc-case-blueprint.template.json` is the non-releasable authoring template.
- `engine/amc-visible-case.schema.json` controls the learner-facing Exam projection.
- `engine/ENGINE_STATUS.json` records the current audited engine and collection state and is checked by the engine suite.
- `engine/legacy-case-manifest.v1.1.json` pins the 42 registry identities and the 40 pattern capacity and logic baselines while fresh canonical cases consume those slots in order.
- `engine/authoritative-source-catalog.json` is the reviewed allowlist for exact source title, authority, date, type, jurisdiction and permitted claim scope.
- `scripts/amc-engine-lib.js` performs semantic and behavioural checks.
- `scripts/audit-amc-cases.js` audits the collection. Default release-gate mode exits 2 while any case is on HOLD; `--report-only` deliberately exits 0 after producing the same report.
- `tests/amc-case-engine.test.js` contains the adversarial engine suite.
- `registry-library/AMC-Clinical-Pathway-Consolidated-Master-Registry-v1.md` supplies the hash-pinned recovered registry narrative fragments.
- `audits/AMC_CASE_ENGINE_INTERNAL_AUDIT.md` and `audits/AMC_CASE_ENGINE_FINAL_QA.md` are evidence records. They describe the tested state but cannot override code, schemas, manifest, catalogue or machine registry.

Historical prose, legacy completion labels, website display status and old system locks cannot override these files.

## Official AMC basis and project rules

The contract separates official AMC requirements from this project's production choices.

### Current official AMC basis

- Two minutes are provided for reading before an eight-minute assessed station.
- A station has one predominant assessment area: History Taking, Examination, Diagnostic Formulation, or Management/Counselling/Education.
- Tasks commonly number three or four, but this is not a universal hard limit.
- A printed time may be suggested for a main task. Every task does not need a visible time, and visible task timings do not have to add to eight minutes.
- The blueprint uses the official AMC assessment-domain vocabulary.
- The global rating has seven points. Ratings 1 to 3 fail and ratings 4 to 7 pass. The global rating alone determines the station result.
- Examiner speech, physical presence and result release depend on the station and delivery format. Opening and closing Examiner lines are optional.

### Project production rules

These rules are stricter editorial controls chosen for this product. They are not presented as universal AMC rules.

- Every station is modelled word for word, including Doctor, participant, Examiner and observable Action lines.
- Identity is completed before clinical history, with controlled exceptions for record or wristband checking and a documented inability to confirm identity.
- A Doctor turn contains one information request at a time.
- Every mapped request has one immediate controlled response, exact answer-evidence phrases and a mandatory human line review. Exact linkage alone is not treated as proof of semantic relevance.
- A Full Run may perform a handover only when a visible station task explicitly asks for one.
- A focused mapped participant response over 55 words is held for shortening or splitting before release.
- Every visible direct address has one exact participant control, and identity-bound address terms must match the confirmed recorded name.
- Consent uses a positive, scope-aware permission request and an affirmative granted response. Consultation, examination, procedure, information-sharing and sensitive-history consent are modelled when applicable.
- An internal task clock totals eight minutes even when the Stem prints no task timing.
- The complete listened Full Run must take 420 to 480 seconds.
- The primary task receives more planned and observed time than every secondary task.
- A Stem never labels urgency or tells the candidate which urgent action to take.
- Review evidence is bound to a hash of the complete hidden package, including controls, sources, claims, marking, timing and QA evidence.
- Every passing QA gate and spoken listen test also records the current review-scope SHA-256. Re-hashing the package cannot reuse an older review after reviewed content changes.
- Project safety errors are an internal clinical-safety gate. They are not an additional official AMC marking component.
- Every Action line has a controlled class, duration, exact visible actor, consent link or reviewed emergency exception. Visible action wording and its grammatical subject are cross-checked against that classification.
- Seven project failure modes guide case variation: premature closure, unsafe delay, station mismatch, cognitive overload, communication breakdown, rigidity and performance freeze.

## Registry state

The fixed learner pathway contains four phases and 40 patterns.

| Phase | Pattern range | Purpose |
| --- | ---: | --- |
| Can Kill Fast | 1 to 12 | Recognise danger and act before diagnostic certainty. |
| Dangerous Mimics | 13 to 22 | Compare close alternatives without premature closure. |
| Common Stations | 23 to 32 | Build reliable performance in common clinical stations. |
| Hard Conversations | 33 to 40 | Communicate risk, uncertainty and difficult decisions safely. |

Pattern-specific logic has three honest provenance states:

- Patterns 1 to 12: recorded from a prior extraction of the uploaded systems and preserved as a controlled recovered summary. Original source-file traceability is not present in this repository.
- Pattern 13: recovered from legacy Cases 41 and 42.
- Patterns 14 to 40: missing. Their titles and phase purposes are known, but their dominant capability and core coverage were not recoverable. They remain `generation_blocked` until deliberately designed and source-reviewed.

The fresh canonical Cases 1 and 2 are `audited`, with exact checkpoints recorded in `audits/CASE_001_FINAL_QA.md` and `audits/CASE_002_FINAL_QA.md`. Current Cases 3 to 42 do not yet exist; their fixed registry slots remain pending. The only next production action is to generate a fresh Case 3 from its slot. The earlier 42 source files remain separate under Emergency Explore; Cases 2 to 42 retain the sealed aggregate SHA-256 `55c64befc778ac8f8c763334f4e68ce2aa96b9db86e730f34a8240a3a28e2e6a`. Case 2 has not been published.

The pinned manifest also binds the registry order, phase definitions and immutable pattern logic. Changing a title, purpose, capacity, reserve or expansion rule requires a deliberate manifest renewal, a new pinned manifest hash and renewed engine QA. Editing the registry alone is insufficient.

## Case admission and variation

Case admission is completed across the registry planning record and the hidden blueprint before a case may become `audited`. Together they must answer:

1. Which pattern owns it?
2. What exact AMC-style task is tested?
3. What clinical or performance failure could occur?
4. What new surprise makes the case distinct?
5. What should the learner be able to do afterward?
6. Does an existing case already train the same job?

The registry's legacy `reconstruction_authorized` state records the controlled planning subset: pattern, coverage slot, distinct job, primary failure mode and admission decision. A fresh case is then written from zero, while its exact task, new surprise, retained capability and duplicate-case comparison are completed and evidenced in the blueprint. Duplicate distinct jobs inside one pattern are rejected. A reserve opens only for a genuinely different decision or demonstrated learning gap.

Names must be varied, realistic and pronounceable in Australian practice. Names must not be cultural stereotypes or diagnostic clues. Name quality and intentional continuity are human editorial checks.

## Hidden blueprint

A case cannot release without exactly one blueprint at either `data/blueprints/case-NNN.blueprint.json` or `engine/blueprints/case-NNN.blueprint.json` validating against the v1.1 schema. If both paths exist, loading fails closed.

The blueprint controls:

- learner-facing number, title, status label, note, phase, pattern, grammar, modality, setting and recipient;
- exact Stem lines and tasks;
- whether the diagnosis must be derived or is legitimately supplied as task context;
- diagnostic terms and aliases that must remain hidden;
- one to six tasks, optional visible timings and an eight-minute internal allocation;
- leading diagnosis, alternatives, clues, discriminators, red flags, thresholds, actions, unsafe actions and scope;
- a source-reviewed trigger and latest-permitted line for every critical action;
- an exact standalone positive-action phrase inside that trigger-to-deadline interval;
- every applicable participant, identity response, consent response, concern and disclosure trigger;
- every applicable Examiner opening, release, scheduled prompt and closing;
- official marking domains, key steps, seven-point global rating and project safety errors;
- exact information-request ownership and response use;
- exact direct-address ownership for every visible vocative;
- answered-response status and exact response-evidence phrases;
- variation, duplication and failure-mode decisions;
- line-to-task mapping and measured spoken timing;
- exact required task-evidence phrases, a standalone positive-performance phrase and an exhaustive actor-bound Action classification;
- claims, current sources and recorded section or recommendation locators;
- structured QA evidence and content hashes.

Placeholder text, example URLs, missing evidence or an expired source review date forces HOLD.
An audited learner-facing note must identify the case as original practice or simulation and state that it is not official AMC material.

## Production sequence

1. Read the machine registry and perform only its authorised next action.
2. Complete the blueprint's authoring core before writing fluent case prose.
3. Verify the pattern coverage slot, distinct job and failure mode.
4. Verify the current AMC examination sources and applicable Australian clinical sources.
5. Write the exam-neutral Stem from the blueprint.
6. Write participant and Examiner controls.
7. Build the Full Run in disclosure order.
8. Complete exact line mappings, claim evidence, task evidence and control records in the blueprint.
9. Run structural and behavioural audit.
10. Run clinical, source and AMC-level review.
11. Rehearse the entire run aloud and record per-task timing and Action durations. A human read-through is preferred; a reproducible line-by-line synthetic speech render may verify elapsed-time feasibility when it is explicitly labelled synthetic and dialogue quality is reviewed separately.
12. Bind the visible content and listen review to a visible-content hash, and bind the entire hidden blueprint package to separate review-scope and package SHA-256 hashes.
13. Run final QA. Any blocker returns the case to HOLD.

## Stem contract

The Stem may include only information legitimately available to the candidate before the station begins: role, setting, person or model, presenting information, supplied results or images, Examiner arrangements and observable tasks.

Diagnosis handling has two modes:

- `hidden_to_be_derived`: the leading diagnosis and all reviewed aliases are forbidden in the Stem.
- `provided_as_task_context`: the diagnosis appears because the task legitimately supplies it, such as counselling about an established diagnosis. A task cannot simultaneously ask the candidate to derive that same diagnosis.

Urgency handling has one project mode: `not_signalled`. Words or phrases that announce instability, triage priority, rapid transfer, resuscitation or required urgent action are blocked. The clinical facts may create urgency; the Stem must not label it.

Automated phrase detection is a guardrail, not proof against every possible synonym. The author must supply the diagnosis, acronym and common-alias set, and hash-bound `line_review` must independently check its completeness and the whole Stem for indirect diagnosis, urgency and disposition leakage.

Visible task timing is optional. If a timing is printed, it must match that task's internal allocation, and all printed timings together cannot exceed eight minutes.
Candidate-facing exam timing cannot be hidden inside Stem or task prose. Any task-text station duration must also appear in the controlled timing field and match it exactly. Clinical chronology such as “pain began 25 minutes ago” is not an exam-time instruction and remains valid Stem information.

## Full Run contract

### Identity

The supported identity modes are direct, third-party, record or wristband, not possible with positive visible evidence and a documented reason, and not applicable for a genuinely participant-free model or equipment station.

For direct and third-party confirmation:

- only a positive greeting, name and Doctor-role introduction may precede the identity request;
- only neutral preparation such as hand hygiene, privacy and approach may precede completion of identity;
- the exact identity response follows before another spoken exchange;
- no Doctor clinical content, participant disclosure, finding, result or clinical action may occur before identity is complete;
- consent follows identity;
- clinical information requests follow applicable consent.

The identity response is a separate controlled participant line containing the exact recorded name and date of birth text. Clinical history, findings, results, consent and management content cannot be smuggled into that response.
Every personal address term for an identity-controlled participant must be the confirmed given name, full name, recorded family name or a permitted honorific with that family name. Nicknames are not admitted by the current contract. Every visible vocative is mapped to exactly one participant and one line; an unknown or wrong name forces HOLD.
Record or wristband mode requires a visible positive identifier match, not merely an attempted check. Not-possible mode requires positive visible evidence, cannot use missing records alone to bypass direct confirmation with a speaking patient, and cannot describe an unconscious, unresponsive or non-verbal patient who then provides normal dialogue. A stated language barrier requires visible communication support before patient dialogue. `not_applicable` is permitted only when there is no participant.

### Consent and clinical actions

A linear Full Run continues only after the participant clearly grants the requested scope. A refusal, conditional restriction or non-answer cannot be labelled granted. Clinical questioning and action cannot precede the applicable consent. Examination tasks and visible examination actions require examination consent; procedures and non-emergency treatment require procedure consent. Sensitive topics are conservatively detected even if the author omits them from the declared list. Intimate examinations also require specific named consent and a visible chaperone offer or arrangement.

Every Action line records `actionClass`, seconds, `performedBy`, `performedByParticipantId`, `actorExactPhrase`, `consentId` or an emergency-exception rationale. The exact actor must be the grammatical subject of the visible line. A participant actor must resolve to that participant's controlled name or unique role; equipment may perform only an equipment event. Neutral preparation must match positive preparation wording. Participant-observation and equipment-event classes use closed single-event grammar: a benign observation or monitor prefix cannot conceal oxygen, medication, examination, procedure or treatment. Complex events are split into separate Action lines. Examination, procedure and treatment classes must cite a granted, correctly scoped consent that precedes the line. Emergency exceptions must link to a controlled critical-action concept. Lexical examination and procedure detection remains a backstop against false classification.

### Atomic information requests

One question mark does not prove one request. The audit also blocks compound imperatives, lists, alternatives and multiple sentence-level requests. Identity details such as full name and date of birth may be combined as one administrative identity request.

Every clinical request records:

- the exact Doctor line;
- one task;
- one declared participant who answers;
- the exact immediate response;
- `responseOutcome: answered` and exact response-evidence phrases;
- the exact next Doctor line that uses the answer.

The request must use a substantive controlled question or imperative, not a bare prompt. Duplicate request ownership, self-answered Doctor questions, bundled predicates, lists, mixed punctuation requests, refusals mislabeled as answers and unmapped answers are blocked.
A focused mapped response over 55 words is held as an over-disclosure risk. Exact evidence reserved for a later focused request cannot appear early in another controlled answer.

### Participant control

Every participant line has exactly one content-control role: identity response, consent response, initial information, disclosure or concern. A question-triggered disclosure must match the controlled request and participant. One participant is explicitly declared as the default information respondent. A request to any other participant must name that participant directly. Opening affect is either absent or every controlled descriptor must appear in its visible Action, Examiner or participant evidence line.

### Examiner control

Examiner speech is optional. When present, each Examiner line has exactly one control role: opening, closing, requested release or scheduled prompt. The opening and closing are administrative and are the first and last Full Run events. No other Examiner content may precede identity. Each release declares its finding source and permitted modalities. Results follow the defined request and the next Doctor line must use them when a next line is specified. A line cannot be controlled by two Examiner mechanisms.

### Natural language boundary

Automated checks can detect many bundled requests, long monologues, sequencing defects and unmatched answers. They cannot prove that a conversation sounds fully human or that the next line responds intelligently merely from an ID link. The structured `line_review` gate therefore requires the thread to read the exact run as dialogue before release.

That line review is part of the hash-bound hidden package. Each passing gate carries the exact current review-scope hash. A change to dialogue, controls, sources, claims, timing or any other reviewed field invalidates the prior gate approval even if someone recomputes only the top-level package hash.

## Timing contract

- Hidden task allocations total exactly eight minutes.
- The primary task receives more internal time than each secondary task.
- A complete spoken timing rehearsal records 420 to 480 seconds for the whole run, including observed Action time.
- Every Full Run line maps to exactly one task.
- Every Action line has an observed duration.
- Observed task time must remain within 40 seconds of its proportional internal allocation.
- The primary task receives more observed time than every secondary task.
- The implied speaking pace must remain plausible.
- The executable speaking-rate range is 80 to 190 words per minute after observed Action time is removed.
- A non-handover Doctor turn over 65 words, a handover over 135 words, or a participant turn over 75 words blocks release for review.
- Every critical action must occur between its source-reviewed trigger and latest-permitted line.

Word count alone is not timing evidence.
The schema field retains the legacy name `targetSpokenSeconds`, but its executable meaning is target elapsed Full Run time, not speech-only time.
The schema value `listenTest.method: spoken_readthrough` is also a legacy umbrella. Its reviewer and notes must state whether the evidence came from a human read-through or a reproducible synthetic spoken render. Synthetic evidence may verify duration only; it cannot certify natural dialogue, clinical quality or examiner authenticity.

## Marking and evidence contract

The project default requires two to five key steps and three to five official AMC domains. These are production bounds based on typical AMC station structure, not a claim that every official station must use those exact counts.

Each key step and domain maps to tasks and exact Full Run evidence. Candidate performance evidence must contain a Doctor or Action line. Every task also has exact required evidence and a human-reviewed positive-performance phrase that must appear as its own visible sentence or clause. A clinical keyword embedded inside refusal or non-performance cannot certify completion. The same standalone-clause rule binds every critical action to its reviewed deadline. All specific task subjects must be represented. Domain names cannot be invented or presented as official extensions.

The global rating decision rule is fixed. Station-specific pass and fail descriptions state observable behaviour and may not restate numerical thresholds.

Project safety errors map to Doctor or Action lines and current clinical claims. They protect the product from unsafe scripts but do not change AMC's global-rating rule.

## Source and clinical review boundary

The engine verifies source-record shape, HTTPS URLs, dates, review intervals, declared type and jurisdiction, AMC identity for examination sources, exact membership in the reviewed authoritative-source catalogue, permitted claim scope, claim links and one locator record per cited source. Host membership alone is insufficient. The catalogue is deliberately finite: a new legitimate source must first be reviewed and added to it. Obvious placeholder, reserved, unknown and non-catalogued sources are rejected. Changing the source catalogue, any source, claim or review record invalidates the complete blueprint-package hash and every prior review-scope binding.

These controls do not prove that a page exists, that a locator is accurate, or that the source supports the clinical sentence. Before a case is audited, this thread must open the current primary sources, verify identity, authority, applicability, locator accuracy and each consequential claim, then record `source_review` evidence. Structured evidence proves required type and package binding, not reviewer honesty or review quality. Unsupported, conflicting or uncertain guidance produces HOLD.

The exact catalogue currently contains eight entries: two AMC examination sources and six clinical sources covering ACS, acute aortic dissection and contextual emergency oxygen use. Other clinical topics require deliberate source review and catalogue expansion before case release. Catalogue version `1.0.0` is independent of Engine version `1.1.0`.

## Release states

- `draft`: content exists but release evidence is incomplete.
- `hold`: one or more blockers exist.
- `audited`: the blueprint, visible case, registry row, clinical review, source review, line review, listen review and content hashes all pass.

Engine implementation audit and collection release are separate. Engine 1.1 may generate individually audited cases while the incomplete collection remains HOLD. A collection audit reports `collectionStatus`, not engine implementation status.

Registry readiness is also separated into structure, provenance and executable-action evidence. An action is allowed only when all three pass through the collection audit. A caller cannot make an action executable by supplying an untrusted case-report object.

No case may be published from this contract merely because it builds, renders or passes legacy tests.
Critical, high and medium executable findings all block `AUDITED`.

## Current official references

- [AMC Clinical Examination Specifications V8.3, June 2026](https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf)
- [AMC Tips from Examiners V1.1, October 2024](https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf), used as contextual reading only and not accepted as blueprint claim evidence unless deliberately added to the exact source catalogue
- [AMC Assessment Domains V1.1, November 2024](https://www.amc.org.au/wp-content/uploads/2024/12/20241112-AIPD-AssessmentDomains.pdf)
