# AMC Clinical Pathway Registry Narrative

Status: controlled recovered summary, not production authority

Machine authority: `registry-library/case-registry.v1.1.json`

This file preserves the readable curriculum rationale previously extracted from the uploaded Alpha, Beta, Gamma and Theta systems, plus logic recoverable from legacy Cases 41 and 42. The original uploaded-system artifacts and their hashes are not present in this repository. Patterns 1 to 12 are therefore traceable to this controlled recovered summary, not to the original files. This limitation is explicit and they remain reconstruction-only.

The machine registry controls workflow state, identifiers, pattern placement and the next permitted action. It does not by itself prove clinical validity, AMC level or the accuracy of the earlier extraction. Case-level clinical and exam validity must be earned through Engine 1.1.

Current checkpoint:

- 4 phases
- 40 fixed pattern titles
- 42 legacy cases
- 0 audited cases
- 42 cases requiring reconstruction
- 13 reconstruction-only patterns
- 27 generation-blocked patterns
- 0 generation-ready patterns
- next authorised action: reconstruct Case 1

## Learner pathway

| Phase | Learner-facing name | Internal function | Patterns | Purpose |
| ---: | --- | --- | ---: | --- |
| 1 | Can Kill Fast | Catastrophic Control | 1 to 12 | Recognise danger and act before diagnostic certainty. |
| 2 | Dangerous Mimics | Differentiation Control | 13 to 22 | Compare close alternatives without premature closure. |
| 3 | Common Stations | System Depth | 23 to 32 | Build reliable performance in common clinical stations. |
| 4 | Hard Conversations | High Communication | 33 to 40 | Communicate risk, uncertainty and difficult decisions safely. |

## Case admission logic

A proposed case completes this sentence:

> This case trains [phase purpose] through [pattern], using [station task], to prevent [failure mode], while introducing [new surprise].

Case admission is completed across the registry planning row and hidden case blueprint before `audited`. Together they identify:

1. the owning pattern;
2. the exact AMC-style task;
3. the clinical or performance failure it prevents;
4. the surprise that makes it distinct;
5. the capability the learner should retain;
6. whether an existing case already trains the same job.

Variation may come from a subtle presentation, dangerous overlap, patient resistance, falsely reassuring test, different task or recipient, time pressure, or recovery after an initially wrong direction. A reserve opens only for a genuinely different decision or a demonstrated learning gap.

The `reconstruction_authorized` registry row stores the planning subset: owning pattern, coverage slot, distinct job, primary failure mode and admission decision. The exact station task, surprise, retained capability and duplicate-case comparison are completed in the blueprint before audit.

`initialCore` is the minimum audited set required before a pattern can become `complete_audited`. `maximumWithoutExpansion` is an executable ceiling. During reconstruction the generation policy, phases and immutable pattern logic are bound by the pinned manifest policy hash. Raising a ceiling or changing recovered logic requires a deliberate registry change, controlled manifest and engine-hash renewal, and renewed registry QA.

| Phase | Initial core | Maximum without expansion |
| ---: | ---: | ---: |
| 1 | 3 | 5 |
| 2 | 2 | 4 |
| 3 | 2 | 4 |
| 4 | 1 | 3 |

Names should be varied, realistic and pronounceable in Australian practice. They must not be stereotypes or diagnostic clues. Name quality and intentional continuity remain human editorial checks.

## Recovered pattern logic

The word recovered describes provenance only. It does not mean clinically audited or endorsed by the AMC.

### Pattern 1: Dangerous Chest Pain

- Capability: distinguish immediately dangerous cardiothoracic causes and enter the correct pathway before certainty.
- Core coverage: dangerous cardiac pattern, aortic dissection, pulmonary embolism, tension pneumothorax.

### Pattern 2: Acute Shortness of Breath

- Capability: recognise respiratory deterioration and choose cause-specific first treatment.
- Core coverage: severe asthma, anaphylaxis, acute heart failure, COPD with oxygen and hypercapnia safety.

### Pattern 3: Sudden Neurological Deficit

- Capability: preserve the time anchor while checking reversible mimics and haemorrhage.
- Core coverage: wake-up stroke, hypoglycaemic mimic, intracerebral haemorrhage.

### Pattern 4: Sepsis Pattern

- Capability: recognise organ dysfunction, reassess response and account for high-risk hosts.
- Core coverage: occult-source sepsis with delirium, persistent septic shock after fluid, neutropenic sepsis.

### Pattern 5: Shock Pattern

- Capability: distinguish concealed blood loss, pump failure and loss of vascular tone before selecting resuscitation.
- Core coverage: occult pelvic haemorrhage, cardiogenic shock from myocarditis, neurogenic shock.

### Pattern 6: Unstable Gastrointestinal Bleed

- Capability: match physiology and likely source to resuscitation and source control.
- Core coverage: non-variceal upper gastrointestinal bleed, variceal haemorrhage, major haematochezia during factor-Xa inhibition.

### Pattern 7: Metabolic Collapse

- Capability: identify the controlling metabolic process and apply treatment in the correct sequence.
- Core coverage: diabetic ketoacidosis, hyperosmolar hyperglycaemic state, ECG-toxic hyperkalaemia.

### Pattern 8: Cardiac Syncope

- Capability: separate structural risk, fast rhythm and slow rhythm despite recovery between events.
- Core coverage: hypertrophic cardiomyopathy risk, intermittent ventricular tachycardia, intermittent complete heart block.

### Pattern 9: Acute Severe Abdominal Pain with Instability

- Capability: distinguish rupture, arterial occlusion and contamination while choosing imaging or surgery from physiology.
- Core coverage: ruptured abdominal aortic aneurysm, mesenteric ischaemia, perforated peptic ulcer.

### Pattern 10: Obstetric Catastrophe

- Capability: manage distinct early-pregnancy, late-pregnancy and postpartum emergencies.
- Core coverage: ruptured ectopic pregnancy, severe pre-eclampsia and eclampsia, atonic postpartum haemorrhage.

### Pattern 11: Paediatric Acute Deterioration

- Capability: recognise paediatric deterioration through circulatory, airway or neurological failure.
- Core coverage: infant septic shock, severe croup, convulsive status epilepticus.

### Pattern 12: Toxicological Emergency

- Capability: choose the first life-saving action from ventilation, elapsed time, ECG toxicity, heat production or envenoming evidence.
- Core coverage: opioid toxicity, delayed paracetamol ingestion, tricyclic antidepressant cardiotoxicity, serotonin toxicity, Australian snakebite.

### Pattern 13: Stable Chest Pain versus Unstable Chest Pain

- Capability: classify chest pain from symptom trajectory rather than the label, current pain state or one ECG.
- Core coverage: unchanged exertional symptoms needing outpatient assessment and safety-netting; changed angina pattern requiring reclassification despite no current pain and a normal first ECG.
- Provenance: legacy Cases 41 and 42.

Patterns 1 to 13 are reconstruction-only. Their case content must be rebuilt from current sources and pass Engine 1.1.

## Known titles with missing pattern-specific logic

The earlier systems preserved these titles and phase placement, but no controlled dominant capability and core ladder are traceable in this repository. The engine does not invent them from the title. Each remains `generation_blocked`.

### Phase 2

14. COPD versus Asthma versus Pneumonia
15. Peripheral Vertigo versus Central Vertigo
16. Migraine versus Subarachnoid Haemorrhage
17. Reflux versus Cardiac Chest Pain
18. Vasovagal Syncope versus Cardiac Syncope
19. Red Leg Pattern
20. Delirium versus Dementia versus Depression
21. Anaemia Interpretation
22. Acute Abdomen Localisation

### Phase 3

23. Right Upper Quadrant Pain
24. Left Iliac Fossa Pain
25. Dysmenorrhoea
26. Amenorrhoea
27. Mastalgia
28. Breast Lump
29. Knee Swelling
30. Thyroid Disorder
31. Diabetes Review
32. Hypertension Counselling

### Phase 4

33. Breaking Bad News
34. Palliative Care Discussion
35. Do Not Resuscitate Discussion
36. Domestic Violence Safety Assessment
37. Sexual Health Counselling
38. Postpartum Psychosis Risk
39. Capacity Assessment
40. Suicidal Ideation Risk Assessment

Before a blocked pattern can generate a case, the thread must define and source-review its dominant capability, core coverage, reserves and expansion rule. The pattern then needs an existing, hash-bound design record, `designed_and_source_reviewed` provenance, `generation_ready` status and an authorised machine-registry transition. Generation cannot begin while any legacy reconstruction remains pending.

## Current case status

Legacy Cases 1 to 42 remain registered for sequential reconstruction. Old labels such as published, complete, internally verified or reasoning complete do not equal Engine 1.1 audit status.

The machine registry currently authorises only:

`reconstruct case-001 in Pattern 1`

New generation remains disabled. Reconstructing out of sequence is rejected.
