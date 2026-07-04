(function () {
  window.AMC_CONTENT = {
    schemaVersion: "1.0.0",
    app: {
      title: "AMC Clinical Pathway",
      shortTitle: "AMC Pathway",
      preparedBy: "Ushana Yalda",
      tagline: "One case at a time.",
      totalCases: 160,
      currentCaseId: "case-1-classic-chest-pain"
    },
    settings: {
      defaultCaseId: "case-1-classic-chest-pain",
      enableProgress: false,
      enableOffline: false,
      enableSearch: false
    },
    phases: [
      {
        id: "phase-1",
        order: 1,
        title: "Can Kill Fast",
        purpose: "Spot emergencies before they are proven.",
        status: "active",
        patternIds: ["dangerous-chest-pain"]
      },
      {
        id: "phase-2",
        order: 2,
        title: "Dangerous Mimics",
        purpose: "Spot dangerous lookalikes.",
        status: "future",
        patternIds: []
      },
      {
        id: "phase-3",
        order: 3,
        title: "Common Stations",
        purpose: "Practise common consultations after danger patterns are stable.",
        status: "future",
        patternIds: []
      },
      {
        id: "phase-4",
        order: 4,
        title: "Hard Conversations",
        purpose: "Practise difficult conversations.",
        status: "future",
        patternIds: []
      }
    ],
    patterns: [
      {
        id: "dangerous-chest-pain",
        phaseId: "phase-1",
        order: 1,
        title: "Dangerous Chest Pain",
        purpose: "Chest pressure with danger signs. Do not wait to prove it.",
        warmupId: "warmup-dangerous-chest-pain",
        caseIds: ["case-1-classic-chest-pain"],
        status: "active"
      }
    ],
    futurePathway: [
      {
        title: "Phase 1 later patterns",
        items: [
          "Acute Shortness of Breath",
          "Sudden Neurological Deficit",
          "Sepsis Pattern",
          "Shock Pattern",
          "Unstable Gastrointestinal Bleed",
          "Metabolic Collapse",
          "Cardiac Syncope"
        ]
      },
      {
        title: "Later phases",
        items: [
          "Dangerous Mimics",
          "Common Stations",
          "Hard Conversations",
          "Expansion Patterns"
        ]
      }
    ],
    warmups: [
      {
        id: "warmup-dangerous-chest-pain",
        phaseId: "phase-1",
        patternId: "dangerous-chest-pain",
        title: "Ignite",
        subtitle: "Before the chest pain cases.",
        trigger: "Chest pressure plus danger signs.",
        dangerFeatures: [
          "Sweating",
          "Nausea",
          "Breathlessness",
          "Arm or jaw spread",
          "Collapse",
          "Heart risk factors"
        ],
        meaning: "Treat as a possible heart problem.",
        warning: "Reassurance comes later.",
        doNotMiss: [
          "Heart blood flow problem (ACS)",
          "Aortic tear",
          "Lung clot",
          "Collapsed lung"
        ],
        firstActions: [
          "Ambulance now",
          "ECG only if it does not slow transfer",
          "Do not wait for blood test",
          "No private car"
        ],
        sayAloud: [
          "This may be coming from your heart. I am arranging an ambulance now."
        ],
        readyCheck: "Enough for now: danger causes plus ambulance now.",
        reference: [
          "Chest pressure with danger signs is a possible heart problem until proven otherwise.",
          "Reassurance comes later.",
          "Do not wait to prove it when the pattern is dangerous."
        ]
      }
    ],
    cases: [
      {
        id: "case-1-classic-chest-pain",
        phaseId: "phase-1",
        patternId: "dangerous-chest-pain",
        warmupId: "warmup-dangerous-chest-pain",
        order: 1,
        displayNumber: "Case 1",
        title: "Classic Chest Pain",
        setting: "GP",
        duration: "8 minutes",
        type: "Consultation",
        goal: "This case is for the early ambulance decision in possible heart-related chest pain.",
        patientLabel: "60-year-old man",
        presentingProblem: "Central chest pressure",
        dangerSignal: "Pale, sweaty, started while walking",
        mustNotMiss: [
          "ACS",
          "Aortic dissection",
          "Pulmonary embolism",
          "Tension pneumothorax"
        ],
        firstAction: [
          "Call ambulance now",
          "ECG only if it does not delay transfer",
          "Do not wait for troponin",
          "Do not let the patient drive"
        ],
        contextCards: [
          { label: "Patient", value: "60-year-old man" },
          { label: "Main symptom", value: "Central chest pressure" },
          { label: "Clinic", value: "GP consultation" },
          { label: "Looks risky", value: "Pale, sweaty, started while walking" },
          { label: "Danger causes", value: "ACS; aortic dissection; pulmonary embolism; tension pneumothorax" },
          { label: "Safe first move", value: "Call ambulance now" }
        ],
        stem: [
          "You are a GP in a suburban clinic.",
          "Mr Peter Lewis is a 60-year-old man who presents with central chest pressure.",
          "The pain started 40 minutes ago while he was walking from the car park to your clinic.",
          "He looks pale and sweaty.",
          "Past history: Hypertension.",
          "Medication: Perindopril.",
          "No investigation results are available at the start."
        ],
        tasks: [
          "Take a focused history.",
          "Explain your most likely dangerous working diagnosis.",
          "Explain other serious possible causes.",
          "Explain what you will do now."
        ],
        mustSay: [
          "This may be coming from your heart. I am arranging an ambulance now.",
          "This is not safe to manage in this clinic.",
          "I am arranging an ambulance now.",
          "You should not drive yourself.",
          "I am treating this as a possible heart problem now.",
          "I will not delay transfer for troponin."
        ],
        script: [
          {
            heading: "Open",
            purpose: "Ambulance before full history.",
            anchor: "I am going to arrange an ambulance while I ask you a few focused questions. Is that okay?",
            turns: [
              { speaker: "You", lines: ["Hello, I'm Ushana, one of the doctors. How would you like me to address you?"] },
              { speaker: "Patient", lines: ["Call me Mr Lewis."] },
              { speaker: "You", lines: ["Thank you, Mr Lewis. I can see you look pale and sweaty.", "I am worried this may be coming from your heart.", "I am going to arrange an ambulance while I ask you a few focused questions. Is that okay?"] },
              { speaker: "Patient", lines: ["An ambulance? Is it that serious?"] },
              { speaker: "You", lines: ["It may be serious. It does not mean you definitely have a heart attack, but it is serious enough that we should not wait."] },
              { speaker: "Patient", lines: ["Okay."] }
            ]
          },
          {
            heading: "Hear story",
            purpose: "Let him tell the start.",
            anchor: "Thank you. I will keep the questions focused.",
            turns: [
              { speaker: "You", lines: ["Tell me what happened today."] },
              { speaker: "Patient", lines: ["I was walking from the car park about 40 minutes ago and felt pressure in the middle of my chest."] },
              { speaker: "You", lines: ["Thank you. I will keep the questions focused."] }
            ]
          },
          {
            heading: "Ask danger signs",
            purpose: "Ask the danger signs.",
            anchor: "Thank you. I have enough information to act safely now.",
            turns: [
              { speaker: "You", lines: ["Is the pressure still there now?"] },
              { speaker: "Patient", lines: ["Yes."] },
              { speaker: "You", lines: ["Where exactly is it?"] },
              { speaker: "Patient", lines: ["In the centre of my chest."] },
              { speaker: "You", lines: ["Does it spread anywhere?"] },
              { speaker: "Patient", lines: ["To my left arm."] },
              { speaker: "You", lines: ["Does it go to your jaw, neck, back, shoulder, or upper tummy?"] },
              { speaker: "Patient", lines: ["A bit to my jaw. Not to my back."] },
              { speaker: "You", lines: ["How bad is it out of ten?"] },
              { speaker: "Patient", lines: ["About eight."] },
              { speaker: "You", lines: ["Did it start suddenly or build up?"] },
              { speaker: "Patient", lines: ["It built up over a few minutes while I was walking."] },
              { speaker: "You", lines: ["Have you felt sweaty, sick, vomited, short of breath, faint, or had a racing heartbeat?"] },
              { speaker: "Patient", lines: ["I am sweaty and feel sick. I am a bit short of breath. I have not fainted."] },
              { speaker: "You", lines: ["Any severe tearing pain going through to your back?"] },
              { speaker: "Patient", lines: ["No."] },
              { speaker: "You", lines: ["Any coughing blood?"] },
              { speaker: "Patient", lines: ["No."] },
              { speaker: "You", lines: ["Any calf pain, leg swelling, recent long travel, recent surgery, being stuck in bed, cancer, or previous blood clot?"] },
              { speaker: "Patient", lines: ["No."] },
              { speaker: "You", lines: ["Any sudden sharp chest pain with severe breathlessness?"] },
              { speaker: "Patient", lines: ["No. It feels more like pressure."] },
              { speaker: "You", lines: ["Do you have diabetes, high cholesterol, kidney disease, previous heart disease, or smoking history?"] },
              { speaker: "Patient", lines: ["I have high blood pressure. I used to smoke but stopped five years ago."] },
              { speaker: "You", lines: ["Any close family history of heart disease?"] },
              { speaker: "Patient", lines: ["My father had a heart attack in his fifties."] },
              { speaker: "You", lines: ["What medicines do you take?"] },
              { speaker: "Patient", lines: ["Perindopril for blood pressure."] },
              { speaker: "You", lines: ["Are you allergic to aspirin?"] },
              { speaker: "Patient", lines: ["No."] },
              { speaker: "You", lines: ["Any active bleeding, stomach bleeding, bleeding disorder, or blood thinner medicine?"] },
              { speaker: "Patient", lines: ["No."] },
              { speaker: "You", lines: ["Thank you. I have enough information to act safely now."] }
            ]
          },
          {
            heading: "Name risk",
            purpose: "Say the pattern clearly.",
            anchor: "That pattern is concerning. I am treating this as urgent.",
            turns: [
              { speaker: "You", lines: ["Just to check the danger signs clearly: the pain is still there, it spreads to your left arm and jaw, and you feel sweaty, sick, and a bit short of breath. Correct?"] },
              { speaker: "Patient", lines: ["Yes."] },
              { speaker: "You", lines: ["And no severe tearing pain to the back, no collapse, no coughing blood, and no one-sided leg swelling?"] },
              { speaker: "Patient", lines: ["Correct."] },
              { speaker: "You", lines: ["That pattern is concerning. I am treating this as urgent."] }
            ]
          },
          {
            heading: "Summarise",
            purpose: "Compress the story.",
            anchor: "You developed central chest pressure about 40 minutes ago while walking. It is still there. It spreads to your left arm and jaw, and you feel sweaty, sick, and a bit short of breath.",
            turns: [
              { speaker: "You", lines: ["Let me summarise.", "You developed central chest pressure about 40 minutes ago while walking. It is still there. It spreads to your left arm and jaw, and you feel sweaty, sick, and a bit short of breath.", "You have high blood pressure, past smoking, and a family history of heart disease.", "Is that right?"] },
              { speaker: "Patient", lines: ["Yes."] }
            ]
          },
          {
            heading: "Explain heart concern",
            purpose: "Name the heart concern.",
            anchor: "The main concern is that this may be coming from your heart.",
            turns: [
              { speaker: "You", lines: ["The main concern is that this may be coming from your heart.", "That includes a possible heart attack or unstable blood flow to the heart.", "I cannot confirm that here in the clinic.", "But your symptoms are serious enough that I need to treat this as a possible heart problem now."] },
              { speaker: "Patient", lines: ["So you think it could be my heart?"] },
              { speaker: "You", lines: ["Yes. That is why I am arranging urgent hospital care."] }
            ]
          },
          {
            heading: "Explain other dangers",
            purpose: "Name the other serious causes.",
            anchor: "There are a few other serious causes of chest pain that hospital also needs to check.",
            turns: [
              { speaker: "You", lines: ["There are a few other serious causes of chest pain that hospital also needs to check.", "One is a tear in the main blood vessel from the heart.", "One is a blood clot in the lung.", "One is a collapsed lung.", "Indigestion or muscle pain can happen too, but with your symptoms I cannot safely call it that here."] },
              { speaker: "Patient", lines: ["I thought it might just be indigestion."] },
              { speaker: "You", lines: ["It may turn out to be something less serious, but we need to check the dangerous causes first."] }
            ]
          },
          {
            heading: "Act early",
            purpose: "Turn risk into action.",
            anchor: "I am arranging an ambulance now.",
            turns: [
              { speaker: "You", lines: ["Because the pressure is still there, it spreads to your arm and jaw, and you feel sweaty, sick, and short of breath, I am treating this as a possible heart problem now.", "I am not waiting until we are 100% sure. Your symptoms are dangerous enough to act now.", "This is not safe to manage in this clinic.", "I am arranging an ambulance now.", "You should not drive yourself."] },
              { speaker: "Patient", lines: ["Can my wife drive me? It is only nearby."] },
              { speaker: "You", lines: ["No. You need an ambulance because they can monitor you and act quickly if your condition changes.", "While we wait, we will keep you resting and check your blood pressure, pulse, oxygen level, breathing rate, temperature, and alertness.", "If we can do a heart tracing immediately without delaying the ambulance, we will do it.", "I will give aspirin if it is safe for you. You have no aspirin allergy and no bleeding concern, so I would give it now.", "I will give oxygen only if your oxygen level is low or you show signs that you need it.", "Before any chest pain spray or tablet under the tongue, I will check your blood pressure and make sure none of your recent medicines make it unsafe.", "I will not delay the ambulance for blood tests that need to happen in hospital.", "In hospital, they can monitor your heart, repeat heart tracings, do urgent blood tests, and give treatment if needed."] }
            ]
          },
          {
            heading: "Why now",
            purpose: "Be clear without panic.",
            anchor: "The safest plan is ambulance transfer now.",
            turns: [
              { speaker: "You", lines: ["This is urgent.", "The safest plan is ambulance transfer now."] },
              { speaker: "Patient", lines: ["I am worried."] },
              { speaker: "You", lines: ["I understand. We are acting early to keep you safe."] }
            ]
          },
          {
            heading: "While waiting",
            purpose: "Keep him safe now.",
            anchor: "Tell me immediately if the pain gets worse, you feel faint, become more breathless, feel very clammy, or feel like you might collapse.",
            turns: [
              { speaker: "You", lines: ["While we wait, tell me immediately if the pain gets worse, you feel faint, become more breathless, feel very clammy, or feel like you might collapse.", "Please stay seated or lying down.", "Do not walk around."] },
              { speaker: "Patient", lines: ["Okay."] }
            ]
          },
          {
            heading: "Close",
            purpose: "Make sure the plan landed.",
            anchor: "Can you tell me what you understand about why I am arranging an ambulance?",
            turns: [
              { speaker: "You", lines: ["Can you tell me what you understand about why I am arranging an ambulance?"] },
              { speaker: "Patient", lines: ["You are worried this could be my heart, and I need hospital urgently."] },
              { speaker: "You", lines: ["That is right. I will stay with you and hand over clearly to the ambulance team."] }
            ]
          }
        ],
        hints: [
          {
            id: "missed-diagnosis",
            group: "Recognise danger",
            label: "I did not make the heart risk clear",
            title: "I did not make the heart risk clear",
            missed: "The heart concern was not clear enough yet.",
            why: "Mr Lewis has ongoing chest pressure with arm and jaw spread, sweating, nausea, breathlessness, and heart risk factors.",
            say: "I am treating this as a possible heart problem now.",
            practise: "Try the 10-second trigger line once without medical jargon."
          },
          {
            id: "dangerous-alternatives",
            group: "Recognise danger",
            label: "I missed other serious causes",
            title: "I missed other serious causes",
            missed: "The other serious causes were not named yet.",
            why: "Chest pain can come from the heart, the main blood vessel, the lung, or a collapsed lung.",
            say: "There are a few other serious causes of chest pain that hospital also needs to check.",
            practise: "Try the four danger causes in one breath."
          },
          {
            id: "focused-danger-questions",
            group: "Recognise danger",
            label: "I missed the danger questions",
            title: "I missed the danger questions",
            missed: "The danger signs were not covered yet.",
            why: "You need to quickly check spread of pain, sweating, nausea, breathlessness, tearing back pain, clot risk, coughing blood, and sudden sharp breathlessness.",
            say: "Thank you. I will keep the questions focused.",
            practise: "Try the danger questions aloud in 45 seconds."
          },
          {
            id: "technical-language",
            group: "Explain and act",
            label: "I used too many medical words",
            title: "Plain language",
            missed: "The explanation used too much hospital language.",
            why: "Mr Lewis needs clear urgent language, not terms like acute coronary syndrome, biomarkers, or risk stratification.",
            say: "The main concern is that this may be coming from your heart.",
            practise: "Try possible heart problem instead of acute coronary syndrome."
          },
          {
            id: "decision-point",
            group: "Explain and act",
            label: "I did not explain why I acted now",
            title: "Why act now",
            missed: "The reason for acting before confirmation was not clear yet.",
            why: "Ongoing chest pressure with spread, sweating, nausea, breathlessness, and risk factors is enough to act now.",
            say: "I am not waiting until we are 100% sure. Your symptoms are dangerous enough to act now.",
            practise: "Try the decision point in 15 seconds using Mr Lewis' features."
          },
          {
            id: "first-action",
            group: "Explain and act",
            label: "I called the ambulance too late",
            title: "Ambulance first",
            missed: "The ambulance decision came too late in the run.",
            why: "In a GP consultation, you cannot safely rule this out. Transfer is the first safe action.",
            say: "I am arranging an ambulance now.",
            practise: "Try the ambulance line before the full history."
          },
          {
            id: "escalation",
            group: "Explain and act",
            label: "I made the ambulance sound optional",
            title: "Ambulance not optional",
            missed: "The ambulance plan did not sound firm enough.",
            why: "The ambulance can monitor him and act quickly if his condition changes.",
            say: "You should not drive yourself.",
            practise: "Try answering Can my wife drive me? in two short sentences."
          },
          {
            id: "delayed-transfer-tests",
            group: "Explain and act",
            label: "I waited for tests",
            title: "Do not wait for tests",
            missed: "Tests took priority before transfer.",
            why: "Troponin and other blood tests belong in hospital and must not delay the ambulance.",
            say: "I will not delay the ambulance for blood tests that need to happen in hospital.",
            practise: "Try the ECG rule: heart tracing only if it does not delay transfer."
          },
          {
            id: "medication-safety",
            group: "Explain and act",
            label: "I missed medicine safety",
            title: "Medicine safety",
            missed: "Medicine safety checks were not clear yet.",
            why: "Aspirin, oxygen, and chest pain spray or tablet all need safe use.",
            say: "Before any chest pain spray or tablet under the tongue, I will check your blood pressure and make sure none of your recent medicines make it unsafe.",
            practise: "Try aspirin safety, oxygen safety, and spray safety in 30 seconds."
          },
          {
            id: "safety-net",
            group: "Safety, time, close",
            label: "I missed the warning signs",
            title: "While waiting",
            missed: "The warning signs while waiting were not clear yet.",
            why: "He can get worse before the ambulance arrives.",
            say: "Tell me immediately if the pain gets worse, you feel faint, become more breathless, feel very clammy, or feel like you might collapse.",
            practise: "Try the full warning line once, then shorten it to 15 seconds."
          },
          {
            id: "understanding-check",
            group: "Safety, time, close",
            label: "I did not check understanding",
            title: "Understanding check",
            missed: "The patient's understanding was not checked yet.",
            why: "Understanding reduces resistance and confirms the urgent plan.",
            say: "Can you tell me what you understand about why I am arranging an ambulance?",
            practise: "Try the understanding check and respond to Mr Lewis' answer."
          },
          {
            id: "ran-over-time",
            group: "Safety, time, close",
            label: "I ran out of time",
            title: "Time control",
            missed: "The run spent too long on background history or textbook explanation.",
            why: "This case rewards early action, focused questions, short explanation, and transfer.",
            say: "Thank you. I have enough information to act safely now.",
            practise: "Try the full run with an 8-minute stop."
          },
          {
            id: "something-else",
            group: "Safety, time, close",
            label: "Something else",
            title: "Something else",
            missed: "One part still needs tightening.",
            why: "Your answer still needs urgent recognition, ambulance action, safe language, and time control.",
            say: "We are acting early to keep you safe.",
            practise: "Try the run again and choose one exact line to improve."
          }
        ],
        notes: [
          {
            title: "Do not miss",
            items: [
              "Four causes not to miss: Acute coronary syndrome, aortic dissection, pulmonary embolism, tension pneumothorax.",
              "GP consultation logic: This cannot be safely ruled out in clinic. Call ambulance. Do an ECG only if immediate and not delaying transfer. Do not wait for troponin. Do not allow private transport.",
              "Decision point: The moment central chest pressure is associated with radiation, sweating, nausea, breathlessness, ongoing symptoms, and cardiac risk factors, treat as possible acute coronary syndrome until proven otherwise."
            ]
          },
          {
            title: "Exam-safe lines",
            items: [
              "My working diagnosis is possible acute coronary syndrome until proven otherwise.",
              "I will arrange urgent ambulance transfer from the GP consultation.",
              "I will perform a 12-lead ECG immediately if available and not delaying transfer.",
              "I will not delay transfer for troponin or other hospital-only investigations.",
              "I will actively consider aortic dissection, pulmonary embolism, and tension pneumothorax."
            ]
          },
          {
            title: "Memory drills",
            items: [
              "Central chest pressure with sweating, radiation, nausea, breathlessness, or risk factors is a possible heart problem until proven otherwise.",
              "In the GP consultation, arrange an ambulance now and do an ECG only if it does not delay transfer.",
              "Reflux or muscle pain may be possible, but they do not safely explain exertional central chest pressure with arm and jaw radiation, sweating, nausea, breathlessness, and heart risk factors."
            ]
          }
        ],
        doNotMissMap: {
          prime: [
            "Do not wait for the diagnosis.",
            "See danger.",
            "Act."
          ],
          scenes: [
            {
              tone: "red",
              color: "Red",
              icon: "❤️",
              title: "Heart",
              clinical: "Heart blood flow / ACS",
              see: [
                "Chest pressure",
                "Sweating",
                "Nausea",
                "Breathless",
                "Pain to arm or jaw"
              ],
              say: [
                "This may be coming from your heart.",
                "I am arranging an ambulance now."
              ],
              do: [
                { mark: "✅", text: "Ambulance" },
                { mark: "✅", text: "ECG only if it does not delay" },
                { mark: "❌", text: "No driving" },
                { mark: "❌", text: "No waiting for blood tests" }
              ]
            },
            {
              tone: "black",
              color: "Black",
              icon: "⚡",
              title: "Tear",
              clinical: "Main vessel tear / aortic dissection",
              see: [
                "Sudden",
                "Worst pain",
                "To the back",
                "Collapse"
              ],
              say: [
                "Hospital also needs to check for a tear in the main blood vessel."
              ],
              do: [
                { mark: "✅", text: "Keep ambulance plan" },
                { mark: "👀", text: "Watch for collapse" }
              ]
            },
            {
              tone: "blue",
              color: "Blue",
              icon: "🫁",
              title: "Clot",
              clinical: "Blood clot in lung / pulmonary embolism",
              see: [
                "Sharp pain",
                "Sudden breathlessness",
                "Blood when coughing",
                "Swollen calf",
                "Travel",
                "Surgery",
                "Cancer"
              ],
              say: [
                "Hospital also needs to check for a blood clot in the lung."
              ],
              do: [
                { mark: "✅", text: "Keep ambulance plan" },
                { mark: "🫁", text: "Check oxygen level" }
              ]
            },
            {
              tone: "green",
              color: "Green",
              icon: "🌬",
              iconImage: "assets/img/collapsed-lung.png",
              iconAlt: "Collapsed lung visual anchor",
              title: "Collapsed lung",
              clinical: "Tension pneumothorax",
              see: [
                "Sudden",
                "One-sided",
                "Sharp",
                "Breathless",
                "Trauma"
              ],
              say: [
                "Hospital also needs to check for a collapsed lung."
              ],
              do: [
                { mark: "✅", text: "Keep ambulance plan" },
                { mark: "🫁", text: "Check breathing and oxygen level" }
              ]
            }
          ],
          safe: {
            title: "While waiting",
            items: [
              { mark: "🛏", text: "Rest" },
              { mark: "🩺", text: "BP" },
              { mark: "❤️", text: "Pulse" },
              { mark: "🫁", text: "Oxygen level" },
              { mark: "👀", text: "Stay with patient" }
            ]
          },
          medicines: [
            {
              title: "Aspirin",
              items: [
                { mark: "✅", text: "If safe" },
                { mark: "❌", text: "No allergy" },
                { mark: "❌", text: "No bleeding concern" }
              ]
            },
            {
              title: "Oxygen",
              items: [
                { mark: "🫁", text: "Only if needed" }
              ]
            },
            {
              title: "Chest pain spray/tablet",
              items: [
                { mark: "🩺", text: "BP first" },
                { mark: "💊", text: "Medicine safety first" }
              ]
            }
          ],
          finishCheck: [
            "Heart",
            "Ambulance",
            "No driving",
            "ECG only if no delay",
            "No waiting for blood tests",
            "Aspirin if safe",
            "Oxygen only if needed",
            "BP before spray/tablet",
            "Warning signs",
            "Check understanding"
          ],
          oneLine: [
            "This may be coming from your heart.",
            "I am arranging an ambulance now.",
            "You should not drive yourself."
          ]
        },
        references: [
          "Heart Foundation Australia - Australian Acute Coronary Syndromes Guideline, 2025.",
          "Australian Commission on Safety and Quality in Health Care - Acute Coronary Syndromes Clinical Care Standard.",
          "ANZCOR Guideline 14.1 - Acute Coronary Syndromes: Presentation.",
          "ANZCOR Guideline 14.2 - Acute Coronary Syndromes: Initial Medical Therapy."
        ],
        sourceBasis: {
          lastChecked: "5 July 2026",
          websiteRole: "layout only",
          basis: [
            {
              decision: "Chest pain pathway",
              match: "Acute chest pain with possible ACS needs immediate management through a documented chest pain pathway."
            },
            {
              decision: "Early assessment",
              match: "ECG belongs early in suspected ACS; this case keeps ambulance transfer first when clinic testing would slow safer care."
            },
            {
              decision: "Explain the urgent plan",
              match: "The learner must explain what is happening and why, without waiting to prove the diagnosis."
            },
            {
              decision: "Medicine safety",
              match: "Aspirin, oxygen, and chest pain spray or tablet stay tied to safety checks."
            }
          ],
          verifiedLinks: [
            {
              title: "ACSQHC - Acute Coronary Syndromes Clinical Care Standard",
              year: "2019",
              url: "https://www.safetyandquality.gov.au/clinical-care-standards/acute-coronary-syndromes"
            },
            {
              title: "ACSQHC - Acute Coronary Syndromes Clinical Care Standard resource page",
              year: "2019",
              url: "https://www.safetyandquality.gov.au/resources/acute-coronary-syndromes-clinical-care-standard-2019"
            }
          ]
        },
        status: "active"
      }
    ]
  };
})();
