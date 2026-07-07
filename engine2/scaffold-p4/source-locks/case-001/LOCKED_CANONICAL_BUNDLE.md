# Case 1 Locked Canonical Bundle

case_id: CP-P1-C001
case_number: 1
pattern: Dangerous Chest Pain
clinical_variant: Classic ACS
dominant_trap: indigestion or test-delay trap
source_authority: current live website Case 1 text in data/content.js
source_case_id: case-1-classic-chest-pain

This bundle contains extracted current live Case 1 text from data/content.js only. Missing sections are marked HOLD.

## 1. Station Stem

- You are a General Practitioner in a suburban clinic.
- Mr Peter Lewis is a 60-year-old man who presents with central chest pressure.
- The pain started 40 minutes ago while he was walking from the car park to your clinic.
- He looks pale and sweaty.
- Past history: Hypertension.
- Medication: Perindopril.
- No investigation results are available at the start of the station.
- You have 8 minutes.

## 2. Task

- Take a focused history.
- Explain your most likely dangerous working diagnosis.
- Explain important differential diagnoses.
- Outline your immediate management plan.

## 3. Learner-Facing Case Content

```json
{
  "id": "case-1-classic-chest-pain",
  "phaseId": "phase-1",
  "patternId": "dangerous-chest-pain",
  "warmupId": "warmup-dangerous-chest-pain",
  "order": 1,
  "displayNumber": "Case 1",
  "title": "Classic Chest Pain",
  "setting": "GP",
  "duration": "8 minutes",
  "type": "Consultation",
  "goal": "Do not delay ambulance transfer while trying to prove the diagnosis.",
  "patientLabel": "60-year-old man",
  "presentingProblem": "Central chest pressure",
  "dangerSignal": "Pale, sweaty, started while walking, ongoing pain",
  "mainRiskPoint": "Do not delay ambulance transfer while trying to prove the diagnosis.",
  "dominantTrap": "Calling exertional central chest pressure indigestion or waiting for tests before ambulance transfer.",
  "embeddedSkills": [
    "Danger sorting",
    "Focused history",
    "Urgent escalation",
    "Aspirin safety",
    "Transfer without delay"
  ],
  "contextCards": [
    {
      "label": "Patient",
      "value": "60-year-old man"
    },
    {
      "label": "Problem",
      "value": "Central chest pressure for 40 minutes"
    },
    {
      "label": "Clinic",
      "value": "GP consultation"
    },
    {
      "label": "Already concerning",
      "value": "Pale, sweaty, exertional onset, ongoing pain"
    },
    {
      "label": "Danger causes",
      "value": "Heart problem; main vessel tear; lung clot; collapsed lung"
    },
    {
      "label": "Safe first move",
      "value": "Ambulance transfer now"
    }
  ],
  "readingMap": {
    "setting": "General Practice",
    "patient": "60-year-old man",
    "problem": "Central chest pressure for 40 minutes",
    "alreadyConcerning": [
      "Pale",
      "Sweaty",
      "Started with walking",
      "Ongoing pain"
    ],
    "mostLikelyDangerousWorkingDiagnosis": "Heart-related chest pain",
    "firstAction": "Arrange ambulance transfer now. Do a heart tracing if available and not delaying transfer.",
    "mainRiskPoint": "Do not delay transfer while trying to prove the diagnosis.",
    "dominantTrap": "Do not wait for troponin, serial heart tracings, or a perfect diagnosis before arranging transfer.",
    "mustAsk": [
      "Where is the pain?",
      "Does it spread?",
      "Sweating, nausea, breathlessness, fainting?",
      "Severe pain to the back?",
      "Coughing blood or clot risk?",
      "Sudden sharp pain with severe breathlessness?",
      "Heart risk factors?",
      "Aspirin allergy or bleeding risk?"
    ],
    "mustSay": "This is not safe to manage in this clinic. I am arranging an ambulance now."
  },
  "mustSay": [
    "This is not safe to manage in this clinic.",
    "I am arranging an ambulance now.",
    "You should not drive yourself.",
    "I am treating this as a possible heart problem now.",
    "I am not waiting to be 100% sure before acting.",
    "I will do a heart tracing only if it does not delay transfer.",
    "I will not delay transfer for troponin.",
    "I will give aspirin if safe.",
    "I will give oxygen only if oxygen is low or there are signs it is needed.",
    "I will check blood pressure and medication safety before any chest pain spray or tablet."
  ],
  "notes": [
    {
      "title": "Do not miss",
      "items": [
        "Dangerous working diagnosis: possible acute coronary syndrome.",
        "Patient wording: possible heart problem, possible heart attack, or reduced blood flow to the heart.",
        "Why it is likely: central chest pressure, exertional onset, ongoing pain, radiation to left arm and jaw, sweating, nausea, breathlessness, age 60, hypertension, past smoking, and family history.",
        "Four causes not to miss: acute coronary syndrome, aortic dissection, pulmonary embolism, tension pneumothorax.",
        "General Practice logic: this cannot be safely ruled out in clinic. Call ambulance. Do a heart tracing only if immediate and not delaying transfer. Do not wait for troponin. Do not allow private transport.",
        "Decision point: the moment central chest pressure is associated with radiation, sweating, nausea, breathlessness, ongoing symptoms, and cardiac risk factors, treat as possible acute coronary syndrome until proven otherwise."
      ]
    },
    {
      "title": "Exam-safe lines",
      "items": [
        "My working diagnosis is possible acute coronary syndrome until proven otherwise.",
        "I will assess stability first, including observations, oxygen saturation, perfusion, and conscious state.",
        "I will arrange urgent ambulance transfer from General Practice.",
        "I will perform a 12-lead electrocardiogram immediately if available and not delaying transfer.",
        "I will not delay transfer for troponin or other hospital-only investigations.",
        "I will give aspirin 300 mg orally, chewed or dissolved, if suspected acute coronary syndrome and there is no contraindication.",
        "I will give oxygen only if the patient is hypoxic, in heart failure, in shock, severely breathless, or poorly perfused.",
        "I will check blood pressure and recent sildenafil or tadalafil before glyceryl trinitrate.",
        "I will actively consider aortic dissection, pulmonary embolism, and tension pneumothorax."
      ]
    },
    {
      "title": "Memory drills",
      "items": [
        "30-second compression: Mr Lewis has possible heart-related chest pain because he has central chest pressure for 40 minutes, spreading to the left arm and jaw, with sweating, nausea, breathlessness, exertional onset, ongoing pain, and heart risk factors. In General Practice, I will arrange an ambulance now, give aspirin if safe, do a heart tracing only if it does not delay transfer, give oxygen only if oxygen is low or there are signs it is needed, check safety before any chest pain spray or tablet, and not delay transfer for troponin.",
        "10-second trigger rule: Central chest pressure with sweating, radiation, nausea, breathlessness, or risk factors is a possible heart problem until proven otherwise.",
        "Differential ranking: most likely acute coronary syndrome; dangerous alternatives are aortic dissection, pulmonary embolism, and tension pneumothorax; main mimic is reflux or muscle pain.",
        "Why not the main mimic: Reflux or muscle pain may be possible, but they do not safely explain exertional central chest pressure with arm and jaw radiation, sweating, nausea, breathlessness, and heart risk factors.",
        "First action rule: In General Practice, arrange an ambulance now and do a heart tracing only if it does not delay transfer."
      ]
    }
  ],
  "doNotMissMap": {
    "prime": [
      "Chest pain is not one diagnosis",
      "See danger",
      "Act safely"
    ],
    "scenes": [
      {
        "tone": "red",
        "color": "Red",
        "title": "Heart",
        "clinical": "Heart problem",
        "see": [
          "Central chest pressure",
          "Pain started with walking",
          "Pain is still there",
          "Pale and sweaty",
          "Pain spreading to left arm or jaw",
          "Nausea",
          "Breathlessness",
          "Heart risk factors"
        ],
        "say": [
          "This may be coming from your heart.",
          "This is not safe to manage in this clinic.",
          "I am arranging an ambulance now."
        ],
        "do": [
          "Call ambulance now",
          "Keep him resting",
          "Do not let him drive",
          "Give aspirin if safe",
          "Do a heart tracing only if immediate and not delaying transfer",
          "Do not delay transfer for blood tests"
        ]
      },
      {
        "tone": "black",
        "color": "Black",
        "title": "Aortic dissection",
        "clinical": "Tear in the main blood vessel",
        "see": [
          "Sudden severe pain",
          "Tearing pain",
          "Pain through to the back",
          "Collapse or fainting",
          "Weakness, numbness, speech or vision change"
        ],
        "say": [
          "Hospital also needs to check for a tear in the main blood vessel from the heart."
        ],
        "do": [
          "Ask the danger questions",
          "Do not ignore this before giving chest pain medicine"
        ]
      },
      {
        "tone": "blue",
        "color": "Blue",
        "title": "Pulmonary embolism",
        "clinical": "Blood clot in the lung",
        "see": [
          "Sharp pain",
          "Sudden breathlessness",
          "Coughing blood",
          "Swollen calf",
          "Recent travel",
          "Recent surgery",
          "Immobility",
          "Cancer",
          "Previous clot"
        ],
        "say": [
          "Hospital also needs to check for a blood clot in the lung."
        ],
        "do": [
          "Ask clot-risk questions",
          "Escalate if unsafe"
        ]
      },
      {
        "tone": "green",
        "color": "Green",
        "title": "Tension pneumothorax",
        "clinical": "Collapsed lung",
        "see": [
          "Sudden one-sided sharp pain",
          "Severe breathlessness",
          "Trauma",
          "One-sided chest signs",
          "Very unwell appearance"
        ],
        "say": [
          "Hospital also needs to check for a collapsed lung."
        ],
        "do": [
          "Check breathing",
          "Escalate urgently if severe"
        ]
      }
    ],
    "safe": {
      "title": "Safe transfer",
      "items": [
        "GP setting",
        "Call ambulance now",
        "Do not wait to be 100% sure",
        "Do not let the patient drive"
      ]
    },
    "medicines": [
      {
        "title": "Aspirin",
        "items": [
          "Give if safe",
          "No aspirin allergy",
          "No active bleeding",
          "No stomach bleeding, bleeding disorder, or blood thinner medicine"
        ]
      },
      {
        "title": "Oxygen",
        "items": [
          "Only if low oxygen, heart failure, shock, severe breathing distress, or poor perfusion"
        ]
      },
      {
        "title": "Chest pain spray/tablet",
        "items": [
          "Blood pressure first",
          "Medicine safety first",
          "Do not give blindly"
        ]
      }
    ],
    "finishCheck": [
      "Possible heart problem",
      "Ambulance now",
      "Do not drive",
      "Rest while waiting",
      "Check blood pressure, pulse, oxygen level, breathing rate, temperature, and conscious state",
      "Heart tracing only if no delay",
      "No waiting for blood tests",
      "Aspirin if safe",
      "Oxygen only if needed",
      "Blood pressure and medicine safety before chest pain spray",
      "Warning signs",
      "Check understanding"
    ],
    "oneLine": [
      "This may be coming from your heart.",
      "I am arranging an ambulance now.",
      "You should not drive yourself."
    ]
  }
}
```
## 4. Safety Rules

```json
{
  "mustNotMiss": [
    "Acute coronary syndrome",
    "Aortic dissection",
    "Pulmonary embolism",
    "Tension pneumothorax"
  ],
  "firstAction": [
    "Arrange ambulance transfer now",
    "Do a heart tracing if available and not delaying transfer",
    "Do not wait for the diagnosis, troponin, or serial heart tracings",
    "Do not let the patient drive"
  ],
  "doNotMissMap": {
    "prime": [
      "Chest pain is not one diagnosis",
      "See danger",
      "Act safely"
    ],
    "scenes": [
      {
        "tone": "red",
        "color": "Red",
        "title": "Heart",
        "clinical": "Heart problem",
        "see": [
          "Central chest pressure",
          "Pain started with walking",
          "Pain is still there",
          "Pale and sweaty",
          "Pain spreading to left arm or jaw",
          "Nausea",
          "Breathlessness",
          "Heart risk factors"
        ],
        "say": [
          "This may be coming from your heart.",
          "This is not safe to manage in this clinic.",
          "I am arranging an ambulance now."
        ],
        "do": [
          "Call ambulance now",
          "Keep him resting",
          "Do not let him drive",
          "Give aspirin if safe",
          "Do a heart tracing only if immediate and not delaying transfer",
          "Do not delay transfer for blood tests"
        ]
      },
      {
        "tone": "black",
        "color": "Black",
        "title": "Aortic dissection",
        "clinical": "Tear in the main blood vessel",
        "see": [
          "Sudden severe pain",
          "Tearing pain",
          "Pain through to the back",
          "Collapse or fainting",
          "Weakness, numbness, speech or vision change"
        ],
        "say": [
          "Hospital also needs to check for a tear in the main blood vessel from the heart."
        ],
        "do": [
          "Ask the danger questions",
          "Do not ignore this before giving chest pain medicine"
        ]
      },
      {
        "tone": "blue",
        "color": "Blue",
        "title": "Pulmonary embolism",
        "clinical": "Blood clot in the lung",
        "see": [
          "Sharp pain",
          "Sudden breathlessness",
          "Coughing blood",
          "Swollen calf",
          "Recent travel",
          "Recent surgery",
          "Immobility",
          "Cancer",
          "Previous clot"
        ],
        "say": [
          "Hospital also needs to check for a blood clot in the lung."
        ],
        "do": [
          "Ask clot-risk questions",
          "Escalate if unsafe"
        ]
      },
      {
        "tone": "green",
        "color": "Green",
        "title": "Tension pneumothorax",
        "clinical": "Collapsed lung",
        "see": [
          "Sudden one-sided sharp pain",
          "Severe breathlessness",
          "Trauma",
          "One-sided chest signs",
          "Very unwell appearance"
        ],
        "say": [
          "Hospital also needs to check for a collapsed lung."
        ],
        "do": [
          "Check breathing",
          "Escalate urgently if severe"
        ]
      }
    ],
    "safe": {
      "title": "Safe transfer",
      "items": [
        "GP setting",
        "Call ambulance now",
        "Do not wait to be 100% sure",
        "Do not let the patient drive"
      ]
    },
    "medicines": [
      {
        "title": "Aspirin",
        "items": [
          "Give if safe",
          "No aspirin allergy",
          "No active bleeding",
          "No stomach bleeding, bleeding disorder, or blood thinner medicine"
        ]
      },
      {
        "title": "Oxygen",
        "items": [
          "Only if low oxygen, heart failure, shock, severe breathing distress, or poor perfusion"
        ]
      },
      {
        "title": "Chest pain spray/tablet",
        "items": [
          "Blood pressure first",
          "Medicine safety first",
          "Do not give blindly"
        ]
      }
    ],
    "finishCheck": [
      "Possible heart problem",
      "Ambulance now",
      "Do not drive",
      "Rest while waiting",
      "Check blood pressure, pulse, oxygen level, breathing rate, temperature, and conscious state",
      "Heart tracing only if no delay",
      "No waiting for blood tests",
      "Aspirin if safe",
      "Oxygen only if needed",
      "Blood pressure and medicine safety before chest pain spray",
      "Warning signs",
      "Check understanding"
    ],
    "oneLine": [
      "This may be coming from your heart.",
      "I am arranging an ambulance now.",
      "You should not drive yourself."
    ]
  },
  "sourceBasis": {
    "lastChecked": "5 July 2026",
    "websiteRole": "layout only",
    "basis": [
      {
        "decision": "Chest pain danger sorting",
        "match": "Central chest pressure with exertional onset, ongoing pain, radiation, sweating, nausea, breathlessness, and risk factors is treated as possible acute coronary syndrome until proven otherwise."
      },
      {
        "decision": "General Practice transfer",
        "match": "The clinic cannot safely rule this out. Ambulance transfer is arranged now; heart tracing is only done if immediate and not delaying transfer."
      },
      {
        "decision": "No test delay",
        "match": "Troponin and other hospital-only investigations must not delay ambulance transfer."
      },
      {
        "decision": "Medication safety",
        "match": "Aspirin, oxygen, and chest pain spray/tablet are tied to safety checks and clinical need."
      }
    ],
    "verifiedLinks": [
      {
        "title": "ACSQHC - Acute Coronary Syndromes Clinical Care Standard",
        "year": "2019",
        "url": "https://www.safetyandquality.gov.au/clinical-care-standards/acute-coronary-syndromes"
      },
      {
        "title": "ACSQHC - Acute Coronary Syndromes Clinical Care Standard resource page",
        "year": "2019",
        "url": "https://www.safetyandquality.gov.au/resources/acute-coronary-syndromes-clinical-care-standard-2019"
      }
    ]
  }
}
```

## 5. Key Clinical Traps

```json
{
  "dominantTrap": "Calling exertional central chest pressure indigestion or waiting for tests before ambulance transfer.",
  "readingMapDominantTrap": "Do not wait for troponin, serial heart tracings, or a perfect diagnosis before arranging transfer.",
  "notes": [
    {
      "title": "Do not miss",
      "items": [
        "Dangerous working diagnosis: possible acute coronary syndrome.",
        "Patient wording: possible heart problem, possible heart attack, or reduced blood flow to the heart.",
        "Why it is likely: central chest pressure, exertional onset, ongoing pain, radiation to left arm and jaw, sweating, nausea, breathlessness, age 60, hypertension, past smoking, and family history.",
        "Four causes not to miss: acute coronary syndrome, aortic dissection, pulmonary embolism, tension pneumothorax.",
        "General Practice logic: this cannot be safely ruled out in clinic. Call ambulance. Do a heart tracing only if immediate and not delaying transfer. Do not wait for troponin. Do not allow private transport.",
        "Decision point: the moment central chest pressure is associated with radiation, sweating, nausea, breathlessness, ongoing symptoms, and cardiac risk factors, treat as possible acute coronary syndrome until proven otherwise."
      ]
    },
    {
      "title": "Exam-safe lines",
      "items": [
        "My working diagnosis is possible acute coronary syndrome until proven otherwise.",
        "I will assess stability first, including observations, oxygen saturation, perfusion, and conscious state.",
        "I will arrange urgent ambulance transfer from General Practice.",
        "I will perform a 12-lead electrocardiogram immediately if available and not delaying transfer.",
        "I will not delay transfer for troponin or other hospital-only investigations.",
        "I will give aspirin 300 mg orally, chewed or dissolved, if suspected acute coronary syndrome and there is no contraindication.",
        "I will give oxygen only if the patient is hypoxic, in heart failure, in shock, severely breathless, or poorly perfused.",
        "I will check blood pressure and recent sildenafil or tadalafil before glyceryl trinitrate.",
        "I will actively consider aortic dissection, pulmonary embolism, and tension pneumothorax."
      ]
    },
    {
      "title": "Memory drills",
      "items": [
        "30-second compression: Mr Lewis has possible heart-related chest pain because he has central chest pressure for 40 minutes, spreading to the left arm and jaw, with sweating, nausea, breathlessness, exertional onset, ongoing pain, and heart risk factors. In General Practice, I will arrange an ambulance now, give aspirin if safe, do a heart tracing only if it does not delay transfer, give oxygen only if oxygen is low or there are signs it is needed, check safety before any chest pain spray or tablet, and not delay transfer for troponin.",
        "10-second trigger rule: Central chest pressure with sweating, radiation, nausea, breathlessness, or risk factors is a possible heart problem until proven otherwise.",
        "Differential ranking: most likely acute coronary syndrome; dangerous alternatives are aortic dissection, pulmonary embolism, and tension pneumothorax; main mimic is reflux or muscle pain.",
        "Why not the main mimic: Reflux or muscle pain may be possible, but they do not safely explain exertional central chest pressure with arm and jaw radiation, sweating, nausea, breathlessness, and heart risk factors.",
        "First action rule: In General Practice, arrange an ambulance now and do a heart tracing only if it does not delay transfer."
      ]
    }
  ],
  "hints": [
    {
      "id": "i-did-not-recognise-this-could-be-the-heart",
      "stage": "see",
      "group": "See",
      "label": "I did not recognise this could be the heart",
      "title": "I did not recognise this could be the heart",
      "missed": "I did not clearly recognise that this could be coming from the heart.",
      "say": "I am treating this as a possible heart problem now.",
      "why": "Mr Lewis has ongoing chest pressure with arm and jaw spread, sweating, nausea, breathlessness, and heart risk factors.",
      "practise": "Say the 10-second trigger rule once without medical jargon. Then return to Start speaking."
    },
    {
      "id": "i-used-too-many-medical-words",
      "stage": "say",
      "group": "Say",
      "label": "I used too many medical words",
      "title": "I used too many medical words",
      "missed": "I used hospital language with the patient.",
      "say": "The main concern is that this may be coming from your heart.",
      "why": "Mr Lewis needs clear urgent language, not terms like acute coronary syndrome, biomarkers, or risk stratification.",
      "practise": "Replace \"acute coronary syndrome\" with \"possible heart problem\" three times. Then return to Start speaking."
    },
    {
      "id": "i-did-not-mention-another-serious-cause",
      "stage": "see",
      "group": "See",
      "label": "I did not mention another serious cause",
      "title": "I did not mention another serious cause",
      "missed": "I did not mention the other serious causes hospital must check.",
      "say": "There are a few other serious causes of chest pain that hospital also needs to check.",
      "why": "Chest pain can come from the heart, the main blood vessel from the heart, a blood clot in the lung, or a collapsed lung.",
      "practise": "Say the four causes not to miss in one breath. Then return to Start speaking."
    },
    {
      "id": "i-did-not-ask-the-danger-questions",
      "stage": "see",
      "group": "See",
      "label": "I did not ask the danger questions",
      "title": "I did not ask the danger questions",
      "missed": "I did not ask the short danger questions.",
      "say": "Thank you. I will keep the questions focused.",
      "why": "You need to quickly check spread of pain, sweating, nausea, breathlessness, tearing back pain, clot risk, coughing blood, and sudden sharp breathlessness.",
      "practise": "Ask the Must Ask list aloud in 45 seconds. Then go back to Start speaking."
    },
    {
      "id": "i-did-not-say-why-i-acted-now",
      "stage": "say",
      "group": "Say",
      "label": "I did not say why I acted now",
      "title": "I did not say why I acted now",
      "missed": "I did not explain why I was acting before confirmation.",
      "say": "I am not waiting to be 100% sure before acting.",
      "why": "Ongoing chest pressure with spread, sweating, nausea, breathlessness, and risk factors is enough to act now.",
      "practise": "Give the decision point in 15 seconds using Mr Lewis' features. Then return to Start speaking."
    },
    {
      "id": "i-did-not-call-the-ambulance-early",
      "stage": "act",
      "group": "Act",
      "label": "I did not call the ambulance early",
      "title": "I did not call the ambulance early",
      "missed": "I did not arrange the ambulance early.",
      "say": "I am arranging an ambulance now.",
      "why": "General Practice cannot safely rule this out, and transfer is the first safe action.",
      "practise": "Start the station with ambulance action before the full history. Then return to Start speaking."
    },
    {
      "id": "i-did-not-make-ambulance-transfer-clear",
      "stage": "act",
      "group": "Act",
      "label": "I did not make ambulance transfer clear",
      "title": "I did not make ambulance transfer clear",
      "missed": "I allowed private transport or made the ambulance sound optional.",
      "say": "You should not drive yourself.",
      "why": "The ambulance can monitor him and act quickly if his condition changes.",
      "practise": "Answer \"Can my wife drive me?\" in two short sentences. Then return to Start speaking."
    },
    {
      "id": "i-waited-for-tests-before-transfer",
      "stage": "act",
      "group": "Act",
      "label": "I waited for tests before transfer",
      "title": "I waited for tests before transfer",
      "missed": "I waited for blood tests or over-investigated before transfer.",
      "say": "I will not delay the ambulance for blood tests that need to happen in hospital.",
      "why": "Troponin and other blood tests belong in hospital and must not delay the ambulance.",
      "practise": "Say the heart tracing rule: heart tracing only if it does not delay transfer. Then return to Start speaking."
    },
    {
      "id": "i-did-not-check-medicine-safety",
      "stage": "act",
      "group": "Act",
      "label": "I did not check medicine safety",
      "title": "I did not check medicine safety",
      "missed": "I gave or promised treatment without safety checks.",
      "say": "Before any chest pain spray or tablet under the tongue, I will check your blood pressure and make sure none of your recent medicines make it unsafe.",
      "why": "Aspirin, oxygen, and chest pain spray or tablet all need safe use.",
      "practise": "Say aspirin safety, oxygen safety, and spray safety in 30 seconds. Then return to Start speaking."
    },
    {
      "id": "i-did-not-give-warning-signs",
      "stage": "close",
      "group": "Close",
      "label": "I did not give warning signs",
      "title": "I did not give warning signs",
      "missed": "I did not tell Mr Lewis what to report while waiting.",
      "say": "Tell me immediately if the pain gets worse, you feel faint, become more breathless, feel very clammy, or feel like you might collapse.",
      "why": "He can get worse before the ambulance arrives.",
      "practise": "Say the full warning line once, then shorten it to 15 seconds. Then return to Start speaking."
    },
    {
      "id": "i-did-not-check-patient-understanding",
      "stage": "close",
      "group": "Close",
      "label": "I did not check patient understanding",
      "title": "I did not check patient understanding",
      "missed": "I did not check that the patient understood the ambulance decision.",
      "say": "Can you tell me what you understand about why I am arranging an ambulance?",
      "why": "Understanding reduces resistance and confirms the urgent plan.",
      "practise": "Ask the understanding check and respond to Mr Lewis' answer. Then return to Start speaking."
    },
    {
      "id": "i-ran-out-of-time",
      "stage": "close",
      "group": "Close",
      "label": "I ran out of time",
      "title": "I ran out of time",
      "missed": "I spent too long on background history or textbook explanation.",
      "say": "Thank you. I have enough information to act safely now.",
      "why": "This station rewards early action, focused questions, short explanation, and transfer.",
      "practise": "Run the timed version with a hard 8-minute stop. Then return to Timed run."
    },
    {
      "id": "something-else",
      "stage": "close",
      "group": "Close",
      "label": "Something else",
      "title": "Something else",
      "missed": "One performance point was unclear or incomplete.",
      "say": "We are acting early to keep you safe.",
      "why": "The station still needs urgent recognition, ambulance action, safe language, and time control.",
      "practise": "Repeat the full timed run and identify one exact line to improve. Then return to Timed run."
    }
  ]
}
```

## 6. Patient Explanation Script

### Diagnosis Explanation

- You:
  - The main concern is that this may be coming from your heart.
  - That includes a possible heart attack or reduced blood flow to the heart.
  - I cannot confirm that here in the clinic.
  - But your symptoms are serious enough that I need to treat this as a possible heart problem now.
- Patient:
  - So you think it could be my heart?
- You:
  - Yes.
  - That is why I am arranging urgent hospital care.

### Differential Explanation

- You:
  - There are a few other serious causes of chest pain that hospital also needs to check.
  - One is a tear in the main blood vessel from the heart.
  - One is a blood clot in the lung.
  - One is a collapsed lung.
  - Indigestion or muscle pain can happen too.
  - But with your symptoms, I cannot safely call it that here.
- Patient:
  - I thought it might just be indigestion.
- You:
  - It may turn out to be something less serious.
  - But we need to check the dangerous causes first.

### Decision Point and Management Plan

- You:
  - Because the pressure is still there, it spreads to your arm and jaw, and you feel sweaty, sick, and short of breath, I am treating this as a possible heart problem now.
  - I am not waiting to be 100% sure before acting.
- You:
  - This is not safe to manage in this clinic.
  - I am arranging an ambulance now.
  - You should not drive yourself.
- Patient:
  - Can my wife drive me? It is only nearby.
- You:
  - No.
  - You need an ambulance because they can monitor you and act quickly if your condition changes.
- You:
  - While we wait, we will keep you resting.
  - We will check your blood pressure, pulse, oxygen level, breathing rate, temperature, and conscious state.
  - If we can do a heart tracing immediately without delaying the ambulance, we will do it.
  - I will give aspirin if it is safe for you.
  - You have no aspirin allergy and no bleeding concern, so I would give it now.
  - I will give oxygen only if your oxygen level is low or you show signs that you need it.
  - Before any chest pain spray or tablet under the tongue, I will check your blood pressure and make sure none of your recent medicines make it unsafe.
  - I will not delay the ambulance for blood tests that need to happen in hospital.
  - In hospital, they can monitor your heart, repeat heart tracings, do urgent blood tests, and give treatment if needed.

### Urgency Classification

- You:
  - This is urgent.
  - The safest plan is ambulance transfer now.
- Patient:
  - I am worried.
- You:
  - I understand.
  - We are acting early to keep you safe.

### Warning Signs While Waiting

- You:
  - While we wait, tell me immediately if the pain gets worse.
  - Also tell me if you feel faint, become more breathless, feel very clammy, or feel like you might collapse.
  - Please stay seated or lying down.
  - Do not walk around.
- Patient:
  - Okay.

### Check Understanding

- You:
  - Can you tell me what you understand about why I am arranging an ambulance?
- Patient:
  - You are worried this could be my heart, and I need hospital urgently.
- You:
  - That is right.
  - I will stay with you and hand over clearly to the ambulance team.

## 7. Differential And Trap Recovery

```json
{
  "mustNotMiss": [
    "Acute coronary syndrome",
    "Aortic dissection",
    "Pulmonary embolism",
    "Tension pneumothorax"
  ],
  "differentialExplanation": [
    {
      "heading": "Differential Explanation",
      "turns": [
        {
          "speaker": "You",
          "lines": [
            "There are a few other serious causes of chest pain that hospital also needs to check.",
            "One is a tear in the main blood vessel from the heart.",
            "One is a blood clot in the lung.",
            "One is a collapsed lung.",
            "Indigestion or muscle pain can happen too.",
            "But with your symptoms, I cannot safely call it that here."
          ]
        },
        {
          "speaker": "Patient",
          "lines": [
            "I thought it might just be indigestion."
          ]
        },
        {
          "speaker": "You",
          "lines": [
            "It may turn out to be something less serious.",
            "But we need to check the dangerous causes first."
          ]
        }
      ]
    }
  ],
  "doNotMissScenes": [
    {
      "tone": "red",
      "color": "Red",
      "title": "Heart",
      "clinical": "Heart problem",
      "see": [
        "Central chest pressure",
        "Pain started with walking",
        "Pain is still there",
        "Pale and sweaty",
        "Pain spreading to left arm or jaw",
        "Nausea",
        "Breathlessness",
        "Heart risk factors"
      ],
      "say": [
        "This may be coming from your heart.",
        "This is not safe to manage in this clinic.",
        "I am arranging an ambulance now."
      ],
      "do": [
        "Call ambulance now",
        "Keep him resting",
        "Do not let him drive",
        "Give aspirin if safe",
        "Do a heart tracing only if immediate and not delaying transfer",
        "Do not delay transfer for blood tests"
      ]
    },
    {
      "tone": "black",
      "color": "Black",
      "title": "Aortic dissection",
      "clinical": "Tear in the main blood vessel",
      "see": [
        "Sudden severe pain",
        "Tearing pain",
        "Pain through to the back",
        "Collapse or fainting",
        "Weakness, numbness, speech or vision change"
      ],
      "say": [
        "Hospital also needs to check for a tear in the main blood vessel from the heart."
      ],
      "do": [
        "Ask the danger questions",
        "Do not ignore this before giving chest pain medicine"
      ]
    },
    {
      "tone": "blue",
      "color": "Blue",
      "title": "Pulmonary embolism",
      "clinical": "Blood clot in the lung",
      "see": [
        "Sharp pain",
        "Sudden breathlessness",
        "Coughing blood",
        "Swollen calf",
        "Recent travel",
        "Recent surgery",
        "Immobility",
        "Cancer",
        "Previous clot"
      ],
      "say": [
        "Hospital also needs to check for a blood clot in the lung."
      ],
      "do": [
        "Ask clot-risk questions",
        "Escalate if unsafe"
      ]
    },
    {
      "tone": "green",
      "color": "Green",
      "title": "Tension pneumothorax",
      "clinical": "Collapsed lung",
      "see": [
        "Sudden one-sided sharp pain",
        "Severe breathlessness",
        "Trauma",
        "One-sided chest signs",
        "Very unwell appearance"
      ],
      "say": [
        "Hospital also needs to check for a collapsed lung."
      ],
      "do": [
        "Check breathing",
        "Escalate urgently if severe"
      ]
    }
  ],
  "relevantHints": [
    {
      "id": "i-used-too-many-medical-words",
      "stage": "say",
      "group": "Say",
      "label": "I used too many medical words",
      "title": "I used too many medical words",
      "missed": "I used hospital language with the patient.",
      "say": "The main concern is that this may be coming from your heart.",
      "why": "Mr Lewis needs clear urgent language, not terms like acute coronary syndrome, biomarkers, or risk stratification.",
      "practise": "Replace \"acute coronary syndrome\" with \"possible heart problem\" three times. Then return to Start speaking."
    },
    {
      "id": "i-did-not-mention-another-serious-cause",
      "stage": "see",
      "group": "See",
      "label": "I did not mention another serious cause",
      "title": "I did not mention another serious cause",
      "missed": "I did not mention the other serious causes hospital must check.",
      "say": "There are a few other serious causes of chest pain that hospital also needs to check.",
      "why": "Chest pain can come from the heart, the main blood vessel from the heart, a blood clot in the lung, or a collapsed lung.",
      "practise": "Say the four causes not to miss in one breath. Then return to Start speaking."
    },
    {
      "id": "i-did-not-ask-the-danger-questions",
      "stage": "see",
      "group": "See",
      "label": "I did not ask the danger questions",
      "title": "I did not ask the danger questions",
      "missed": "I did not ask the short danger questions.",
      "say": "Thank you. I will keep the questions focused.",
      "why": "You need to quickly check spread of pain, sweating, nausea, breathlessness, tearing back pain, clot risk, coughing blood, and sudden sharp breathlessness.",
      "practise": "Ask the Must Ask list aloud in 45 seconds. Then go back to Start speaking."
    },
    {
      "id": "i-did-not-say-why-i-acted-now",
      "stage": "say",
      "group": "Say",
      "label": "I did not say why I acted now",
      "title": "I did not say why I acted now",
      "missed": "I did not explain why I was acting before confirmation.",
      "say": "I am not waiting to be 100% sure before acting.",
      "why": "Ongoing chest pressure with spread, sweating, nausea, breathlessness, and risk factors is enough to act now.",
      "practise": "Give the decision point in 15 seconds using Mr Lewis' features. Then return to Start speaking."
    }
  ]
}
```

## 8. Live Station Script

### Introduction and Immediate Safety

- You:
  - Hello, I'm Ushana, one of the doctors.
  - How would you like me to address you?
- Patient:
  - Call me Mr Lewis.
- You:
  - Thank you, Mr Lewis. I can see you look pale and sweaty.
  - I am worried this may be coming from your heart.
  - I am going to arrange an ambulance while I ask you a few focused questions. Is that okay?
- Patient:
  - An ambulance? Is it that serious?
- You:
  - It may be serious.
  - It does not mean you definitely have a heart attack, but it is serious enough that we should not wait.
- Patient:
  - Okay.

### Open Question

- You:
  - Tell me what happened today.
- Patient:
  - I was walking from the car park about 40 minutes ago and felt pressure in the middle of my chest.
- You:
  - Thank you. I will keep the questions focused.

### Focused History

- You:
  - Is the pressure still there now?
- Patient:
  - Yes.
- You:
  - Where exactly is it?
- Patient:
  - In the centre of my chest.
- You:
  - Does it spread anywhere?
- Patient:
  - To my left arm.
- You:
  - Does it go to your jaw, neck, back, shoulder, or upper tummy?
- Patient:
  - A bit to my jaw. Not to my back.
- You:
  - How bad is it out of ten?
- Patient:
  - About eight.
- You:
  - Did it start suddenly or build up?
- Patient:
  - It built up over a few minutes while I was walking.
- You:
  - Have you felt sweaty, sick, vomited, short of breath, faint, or had a racing heartbeat?
- Patient:
  - I am sweaty and feel sick.
  - I am a bit short of breath.
  - I have not fainted.
- You:
  - Any severe tearing pain going through to your back?
- Patient:
  - No.
- You:
  - Any coughing blood?
- Patient:
  - No.
- You:
  - Any calf pain, leg swelling, recent long travel, recent surgery, being stuck in bed, cancer, or previous blood clot?
- Patient:
  - No.
- You:
  - Any sudden sharp chest pain with severe breathlessness?
- Patient:
  - No. It feels more like pressure.
- You:
  - Do you have diabetes, high cholesterol, kidney disease, previous heart disease, or smoking history?
- Patient:
  - I have high blood pressure. I used to smoke but stopped five years ago.
- You:
  - Any close family history of heart disease?
- Patient:
  - My father had a heart attack in his fifties.
- You:
  - What medicines do you take?
- Patient:
  - Perindopril for blood pressure.
- You:
  - Are you allergic to aspirin?
- Patient:
  - No.
- You:
  - Any active bleeding, stomach bleeding, bleeding disorder, or blood thinner medicine?
- Patient:
  - No.
- You:
  - Thank you. I have enough information to act safely now.

### Red Flag Sweep

- You:
  - Just to check the danger signs clearly: the pain is still there, it spreads to your left arm and jaw, and you feel sweaty, sick, and a bit short of breath. Correct?
- Patient:
  - Yes.
- You:
  - And no severe tearing pain to the back, no collapse, no coughing blood, and no one-sided leg swelling?
- Patient:
  - Correct.
- You:
  - That pattern is concerning.
  - I am treating this as urgent.

### Structured Summary

- You:
  - Let me summarise.
  - You developed central chest pressure about 40 minutes ago while walking.
  - It is still there.
  - It spreads to your left arm and jaw.
  - You feel sweaty, sick, and a bit short of breath.
  - You have high blood pressure, past smoking, and a family history of heart disease.
  - Is that right?
- Patient:
  - Yes.

### Diagnosis Explanation

- You:
  - The main concern is that this may be coming from your heart.
  - That includes a possible heart attack or reduced blood flow to the heart.
  - I cannot confirm that here in the clinic.
  - But your symptoms are serious enough that I need to treat this as a possible heart problem now.
- Patient:
  - So you think it could be my heart?
- You:
  - Yes.
  - That is why I am arranging urgent hospital care.

### Differential Explanation

- You:
  - There are a few other serious causes of chest pain that hospital also needs to check.
  - One is a tear in the main blood vessel from the heart.
  - One is a blood clot in the lung.
  - One is a collapsed lung.
  - Indigestion or muscle pain can happen too.
  - But with your symptoms, I cannot safely call it that here.
- Patient:
  - I thought it might just be indigestion.
- You:
  - It may turn out to be something less serious.
  - But we need to check the dangerous causes first.

### Decision Point and Management Plan

- You:
  - Because the pressure is still there, it spreads to your arm and jaw, and you feel sweaty, sick, and short of breath, I am treating this as a possible heart problem now.
  - I am not waiting to be 100% sure before acting.
- You:
  - This is not safe to manage in this clinic.
  - I am arranging an ambulance now.
  - You should not drive yourself.
- Patient:
  - Can my wife drive me? It is only nearby.
- You:
  - No.
  - You need an ambulance because they can monitor you and act quickly if your condition changes.
- You:
  - While we wait, we will keep you resting.
  - We will check your blood pressure, pulse, oxygen level, breathing rate, temperature, and conscious state.
  - If we can do a heart tracing immediately without delaying the ambulance, we will do it.
  - I will give aspirin if it is safe for you.
  - You have no aspirin allergy and no bleeding concern, so I would give it now.
  - I will give oxygen only if your oxygen level is low or you show signs that you need it.
  - Before any chest pain spray or tablet under the tongue, I will check your blood pressure and make sure none of your recent medicines make it unsafe.
  - I will not delay the ambulance for blood tests that need to happen in hospital.
  - In hospital, they can monitor your heart, repeat heart tracings, do urgent blood tests, and give treatment if needed.

### Urgency Classification

- You:
  - This is urgent.
  - The safest plan is ambulance transfer now.
- Patient:
  - I am worried.
- You:
  - I understand.
  - We are acting early to keep you safe.

### Warning Signs While Waiting

- You:
  - While we wait, tell me immediately if the pain gets worse.
  - Also tell me if you feel faint, become more breathless, feel very clammy, or feel like you might collapse.
  - Please stay seated or lying down.
  - Do not walk around.
- Patient:
  - Okay.

### Check Understanding

- You:
  - Can you tell me what you understand about why I am arranging an ambulance?
- Patient:
  - You are worried this could be my heart, and I need hospital urgently.
- You:
  - That is right.
  - I will stay with you and hand over clearly to the ambulance team.

## 9. Recall Check

```json
{
  "runComplete": [
    "SEE: Central chest pressure with sweating, nausea, breathlessness, arm and jaw spread, exertional onset, ongoing pain, and heart risk factors.",
    "This may be coming from your heart.",
    "Ambulance now.",
    "No driving.",
    "Aspirin if safe.",
    "Oxygen only if needed.",
    "Heart tracing only if it does not delay transfer.",
    "No delay for troponin or clinic blood tests.",
    "Blood pressure and medicine safety before chest pain spray or tablet.",
    "Warning signs while waiting.",
    "Check understanding."
  ],
  "finishCheck": [
    "Possible heart problem",
    "Ambulance now",
    "Do not drive",
    "Rest while waiting",
    "Check blood pressure, pulse, oxygen level, breathing rate, temperature, and conscious state",
    "Heart tracing only if no delay",
    "No waiting for blood tests",
    "Aspirin if safe",
    "Oxygen only if needed",
    "Blood pressure and medicine safety before chest pain spray",
    "Warning signs",
    "Check understanding"
  ],
  "oneLine": [
    "This may be coming from your heart.",
    "I am arranging an ambulance now.",
    "You should not drive yourself."
  ]
}
```

## 10. Confidence Check

MISSING FROM LOCKED SOURCE - HOLD

## 11. Voice Pack Source Lines, If Any

```json
[
  {
    "section": "Introduction and Immediate Safety",
    "line": "Call me Mr Lewis."
  },
  {
    "section": "Introduction and Immediate Safety",
    "line": "An ambulance? Is it that serious?"
  },
  {
    "section": "Introduction and Immediate Safety",
    "line": "Okay."
  },
  {
    "section": "Open Question",
    "line": "I was walking from the car park about 40 minutes ago and felt pressure in the middle of my chest."
  },
  {
    "section": "Focused History",
    "line": "Yes."
  },
  {
    "section": "Focused History",
    "line": "In the centre of my chest."
  },
  {
    "section": "Focused History",
    "line": "To my left arm."
  },
  {
    "section": "Focused History",
    "line": "A bit to my jaw. Not to my back."
  },
  {
    "section": "Focused History",
    "line": "About eight."
  },
  {
    "section": "Focused History",
    "line": "It built up over a few minutes while I was walking."
  },
  {
    "section": "Focused History",
    "line": "I am sweaty and feel sick."
  },
  {
    "section": "Focused History",
    "line": "I am a bit short of breath."
  },
  {
    "section": "Focused History",
    "line": "I have not fainted."
  },
  {
    "section": "Focused History",
    "line": "No."
  },
  {
    "section": "Focused History",
    "line": "No."
  },
  {
    "section": "Focused History",
    "line": "No."
  },
  {
    "section": "Focused History",
    "line": "No. It feels more like pressure."
  },
  {
    "section": "Focused History",
    "line": "I have high blood pressure. I used to smoke but stopped five years ago."
  },
  {
    "section": "Focused History",
    "line": "My father had a heart attack in his fifties."
  },
  {
    "section": "Focused History",
    "line": "Perindopril for blood pressure."
  },
  {
    "section": "Focused History",
    "line": "No."
  },
  {
    "section": "Focused History",
    "line": "No."
  },
  {
    "section": "Red Flag Sweep",
    "line": "Yes."
  },
  {
    "section": "Red Flag Sweep",
    "line": "Correct."
  },
  {
    "section": "Structured Summary",
    "line": "Yes."
  },
  {
    "section": "Diagnosis Explanation",
    "line": "So you think it could be my heart?"
  },
  {
    "section": "Differential Explanation",
    "line": "I thought it might just be indigestion."
  },
  {
    "section": "Decision Point and Management Plan",
    "line": "Can my wife drive me? It is only nearby."
  },
  {
    "section": "Urgency Classification",
    "line": "I am worried."
  },
  {
    "section": "Warning Signs While Waiting",
    "line": "Okay."
  },
  {
    "section": "Check Understanding",
    "line": "You are worried this could be my heart, and I need hospital urgently."
  }
]
```

## 12. Source Notes, If Any

```json
{
  "references": [
    "National Heart Foundation of Australia and Cardiac Society of Australia and New Zealand - Australian clinical guideline for diagnosing and managing acute coronary syndromes, 2025.",
    "Australian Commission on Safety and Quality in Health Care - Acute Coronary Syndromes Clinical Care Standard.",
    "ANZCOR Guideline 14.1 - Acute Coronary Syndromes: Presentation.",
    "ANZCOR Guideline 14.2 - Acute Coronary Syndromes: Initial Medical Therapy.",
    "healthdirect Australia - Chest pain.",
    "healthdirect Australia - Chest tightness and discomfort.",
    "Murtagh's General Practice Companion Handbook - chest pain differential framework.",
    "AMC Handbook of Clinical Assessment - station structure, task alignment, performance domains, communication expectations."
  ],
  "sourceBasis": {
    "lastChecked": "5 July 2026",
    "websiteRole": "layout only",
    "basis": [
      {
        "decision": "Chest pain danger sorting",
        "match": "Central chest pressure with exertional onset, ongoing pain, radiation, sweating, nausea, breathlessness, and risk factors is treated as possible acute coronary syndrome until proven otherwise."
      },
      {
        "decision": "General Practice transfer",
        "match": "The clinic cannot safely rule this out. Ambulance transfer is arranged now; heart tracing is only done if immediate and not delaying transfer."
      },
      {
        "decision": "No test delay",
        "match": "Troponin and other hospital-only investigations must not delay ambulance transfer."
      },
      {
        "decision": "Medication safety",
        "match": "Aspirin, oxygen, and chest pain spray/tablet are tied to safety checks and clinical need."
      }
    ],
    "verifiedLinks": [
      {
        "title": "ACSQHC - Acute Coronary Syndromes Clinical Care Standard",
        "year": "2019",
        "url": "https://www.safetyandquality.gov.au/clinical-care-standards/acute-coronary-syndromes"
      },
      {
        "title": "ACSQHC - Acute Coronary Syndromes Clinical Care Standard resource page",
        "year": "2019",
        "url": "https://www.safetyandquality.gov.au/resources/acute-coronary-syndromes-clinical-care-standard-2019"
      }
    ]
  }
}
```
