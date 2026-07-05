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
      enableProgress: true,
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
        caseIds: ["case-1-classic-chest-pain", "case-2-sudden-tearing-chest-pain"],
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
            title: "I used too many medical words",
            missed: "The explanation used too much hospital language.",
            why: "Mr Lewis needs clear urgent language, not terms like acute coronary syndrome, biomarkers, or risk stratification.",
            say: "The main concern is that this may be coming from your heart.",
            practise: "Try possible heart problem instead of acute coronary syndrome."
          },
          {
            id: "decision-point",
            group: "Explain and act",
            label: "I did not explain why I acted now",
            title: "I did not explain why I acted now",
            missed: "The reason for acting before confirmation was not clear yet.",
            why: "Ongoing chest pressure with spread, sweating, nausea, breathlessness, and risk factors is enough to act now.",
            say: "I am not waiting until we are 100% sure. Your symptoms are dangerous enough to act now.",
            practise: "Try the decision point in 15 seconds using Mr Lewis' features."
          },
          {
            id: "first-action",
            group: "Explain and act",
            label: "I called the ambulance too late",
            title: "I called the ambulance too late",
            missed: "The ambulance decision came too late in the run.",
            why: "In a GP consultation, you cannot safely rule this out. Transfer is the first safe action.",
            say: "I am arranging an ambulance now.",
            practise: "Try the ambulance line before the full history."
          },
          {
            id: "escalation",
            group: "Explain and act",
            label: "I made the ambulance sound optional",
            title: "I made the ambulance sound optional",
            missed: "The ambulance plan did not sound firm enough.",
            why: "The ambulance can monitor him and act quickly if his condition changes.",
            say: "You should not drive yourself.",
            practise: "Try answering Can my wife drive me? in two short sentences."
          },
          {
            id: "delayed-transfer-tests",
            group: "Explain and act",
            label: "I waited for tests",
            title: "I waited for tests",
            missed: "Tests took priority before transfer.",
            why: "Troponin and other blood tests belong in hospital and must not delay the ambulance.",
            say: "I will not delay the ambulance for blood tests that need to happen in hospital.",
            practise: "Try the ECG rule: heart tracing only if it does not delay transfer."
          },
          {
            id: "medication-safety",
            group: "Explain and act",
            label: "I missed medicine safety",
            title: "I missed medicine safety",
            missed: "Medicine safety checks were not clear yet.",
            why: "Aspirin, oxygen, and chest pain spray or tablet all need safe use.",
            say: "Before any chest pain spray or tablet under the tongue, I will check your blood pressure and make sure none of your recent medicines make it unsafe.",
            practise: "Try aspirin safety, oxygen safety, and spray safety in 30 seconds."
          },
          {
            id: "safety-net",
            group: "Safety, time, close",
            label: "I missed the warning signs",
            title: "I missed the warning signs",
            missed: "The warning signs while waiting were not clear yet.",
            why: "He can get worse before the ambulance arrives.",
            say: "Tell me immediately if the pain gets worse, you feel faint, become more breathless, feel very clammy, or feel like you might collapse.",
            practise: "Try the full warning line once, then shorten it to 15 seconds."
          },
          {
            id: "understanding-check",
            group: "Safety, time, close",
            label: "I did not check understanding",
            title: "I did not check understanding",
            missed: "The patient's understanding was not checked yet.",
            why: "Understanding reduces resistance and confirms the urgent plan.",
            say: "Can you tell me what you understand about why I am arranging an ambulance?",
            practise: "Try the understanding check and respond to Mr Lewis' answer."
          },
          {
            id: "ran-over-time",
            group: "Safety, time, close",
            label: "I ran out of time",
            title: "I ran out of time",
            missed: "The run spent too long on background history or textbook explanation.",
            why: "This case rewards early action, focused questions, short explanation, and transfer.",
            say: "Thank you. I have enough information to act safely now.",
            practise: "Try the full run with an 8-minute stop."
          },
          {
            id: "something-else",
            group: "Safety, time, close",
            label: "Something else felt off",
            title: "Something else felt off",
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
      },
      {
        id: "case-2-sudden-tearing-chest-pain",
        phaseId: "phase-1",
        patternId: "dangerous-chest-pain",
        warmupId: "warmup-dangerous-chest-pain",
        order: 2,
        displayNumber: "Case 2",
        title: "Sudden Tearing Chest Pain",
        setting: "GP",
        duration: "8 minutes",
        type: "Consultation",
        goal: "This case is for sudden severe tearing chest pain where a tear in the main blood vessel must stay front of mind.",
        patientLabel: "62-year-old man",
        presentingProblem: "Sudden severe central chest pain",
        dangerSignal: "Tearing pain through to the back after lifting",
        mustNotMiss: [
          "Aortic dissection",
          "ACS",
          "Pulmonary embolism",
          "Tension pneumothorax"
        ],
        firstAction: [
          "Call ambulance now",
          "Do not let the patient drive",
          "Check blood pressure and pulse strength in both arms",
          "Do not give routine heart attack medicines blindly"
        ],
        contextCards: [
          { label: "Patient", value: "62-year-old man" },
          { label: "Main symptom", value: "Sudden severe central chest pain" },
          { label: "Clinic", value: "GP consultation" },
          { label: "Looks risky", value: "Distressed, pale, sweaty" },
          { label: "Danger clue", value: "Tearing pain through to the back" },
          { label: "Safe first move", value: "Call ambulance now" }
        ],
        stem: [
          "You are a GP in a suburban clinic.",
          "Mr David Ward is a 62-year-old man who presents with sudden severe central chest pain.",
          "The pain started 25 minutes ago while he was lifting a heavy box from his car.",
          "He looks distressed, pale, and sweaty.",
          "Past history: Hypertension.",
          "Medication: Amlodipine.",
          "No investigation results are available at the start."
        ],
        tasks: [
          "Take a focused history.",
          "Explain your most likely dangerous working diagnosis.",
          "Explain important differential diagnoses.",
          "Outline your immediate management plan."
        ],
        mustSay: [
          "This chest pain could be serious.",
          "One serious possibility is a tear in the main blood vessel from the heart.",
          "I am arranging an ambulance now.",
          "You should not drive yourself.",
          "I will not delay the ambulance for tests that need to happen in hospital.",
          "I will not give aspirin or blood-thinning medicine automatically before hospital checks the main blood vessel."
        ],
        runComplete: [
          "Ambulance now.",
          "Do not drive yourself.",
          "This could be a tear in the main blood vessel.",
          "Sudden severe tearing pain to the back is dangerous.",
          "Check blood pressure in both arms.",
          "Check pulse strength in both arms.",
          "Check conscious state.",
          "Heart tracing only if it does not delay transfer.",
          "No waiting for blood tests.",
          "No automatic aspirin, blood-thinning medicine, or clot-dissolving medicine before hospital checks the main blood vessel.",
          "Oxygen only if needed.",
          "Blood pressure and medicine safety before chest pain spray or tablet.",
          "Keep resting while waiting.",
          "Warning signs while waiting.",
          "Check understanding."
        ],
        script: [
          {
            heading: "Open",
            purpose: "Ambulance before full history.",
            anchor: "I am arranging an ambulance now while I ask focused questions.",
            turns: [
              { speaker: "You", lines: ["Hello, I'm Ushana, one of the doctors. How would you like me to address you?"] },
              { speaker: "Patient", lines: ["David is fine."] },
              { speaker: "You", lines: ["Thank you, David. I can see you look very uncomfortable, pale, and sweaty.", "I am concerned this chest pain could be serious.", "I am arranging an ambulance now while I ask focused questions. Is that okay?"] },
              { speaker: "Patient", lines: ["An ambulance? Is it that bad?"] },
              { speaker: "You", lines: ["It may be serious. I do not want to wait in the clinic when chest pain starts suddenly and severely like this.", "Please stay seated or lying down and do not walk around."] }
            ]
          },
          {
            heading: "Hear story",
            purpose: "Find the start.",
            anchor: "Suddenly I got this awful pain in the middle of my chest.",
            turns: [
              { speaker: "You", lines: ["Tell me what happened."] },
              { speaker: "Patient", lines: ["I was lifting a heavy box from my car about 25 minutes ago. Suddenly I got this awful pain in the middle of my chest."] }
            ]
          },
          {
            heading: "Pain pattern",
            purpose: "Catch the tear pattern.",
            anchor: "It was terrible straight away and goes through to my back.",
            turns: [
              { speaker: "You", lines: ["Is the pain still there now?"] },
              { speaker: "Patient", lines: ["Yes."] },
              { speaker: "You", lines: ["How bad is it out of ten?"] },
              { speaker: "Patient", lines: ["Ten. It was terrible straight away."] },
              { speaker: "You", lines: ["Did it come on suddenly, or build up slowly?"] },
              { speaker: "Patient", lines: ["Suddenly. It hit me all at once."] },
              { speaker: "You", lines: ["How would you describe it?"] },
              { speaker: "Patient", lines: ["It feels like something tearing."] },
              { speaker: "You", lines: ["Does it spread anywhere?"] },
              { speaker: "Patient", lines: ["Yes. It goes through to my back, between my shoulder blades."] },
              { speaker: "You", lines: ["Does it go to your jaw, left arm, neck, shoulder, or upper tummy?"] },
              { speaker: "Patient", lines: ["Not really to my jaw. Mostly straight through to my back."] }
            ]
          },
          {
            heading: "Danger sweep",
            purpose: "Check brain, limb, clot, and lung danger.",
            anchor: "My left arm felt a bit weak and strange for a few minutes.",
            turns: [
              { speaker: "You", lines: ["Have you felt faint, collapsed, or nearly blacked out?"] },
              { speaker: "Patient", lines: ["I felt like I might faint when it started."] },
              { speaker: "You", lines: ["Any weakness, numbness, trouble speaking, face drooping, or vision change?"] },
              { speaker: "Patient", lines: ["My left arm felt a bit weak and strange for a few minutes. It feels better now."] },
              { speaker: "You", lines: ["Any pain, weakness, coldness, or numbness in either leg?"] },
              { speaker: "Patient", lines: ["No."] },
              { speaker: "You", lines: ["Any shortness of breath or coughing blood?"] },
              { speaker: "Patient", lines: ["A little short of breath, but no coughing blood."] },
              { speaker: "You", lines: ["Any calf pain, leg swelling, recent long travel, recent surgery, being stuck in bed, cancer, or previous blood clot?"] },
              { speaker: "Patient", lines: ["No."] },
              { speaker: "You", lines: ["Any sudden sharp one-sided chest pain?"] },
              { speaker: "Patient", lines: ["No. It is central and through to my back."] }
            ]
          },
          {
            heading: "Risk and medicine safety",
            purpose: "Avoid reflex medicines.",
            anchor: "I have high blood pressure. I used to smoke.",
            turns: [
              { speaker: "You", lines: ["Do you have high blood pressure, diabetes, high cholesterol, kidney disease, previous heart disease, or smoking history?"] },
              { speaker: "Patient", lines: ["I have high blood pressure. I used to smoke."] },
              { speaker: "You", lines: ["What medicine do you take?"] },
              { speaker: "Patient", lines: ["Amlodipine."] },
              { speaker: "You", lines: ["Any known aneurysm, valve problem, or connective tissue condition?"] },
              { speaker: "Patient", lines: ["No."] },
              { speaker: "You", lines: ["Any family history of aneurysm or major blood vessel problems?"] },
              { speaker: "Patient", lines: ["My older brother had an aneurysm in his belly."] },
              { speaker: "You", lines: ["Are you allergic to aspirin, or do you have active bleeding, previous stomach bleeding, a bleeding disorder, or blood thinner medicine?"] },
              { speaker: "Patient", lines: ["No."] }
            ]
          },
          {
            heading: "Observations",
            purpose: "Ask for both arms.",
            anchor: "Blood pressure and pulse are different between arms.",
            turns: [
              { speaker: "You", lines: ["I would like to check his blood pressure in both arms, pulse strength in both arms, oxygen saturation, breathing rate, temperature, and conscious state while the ambulance is being called."] },
              { speaker: "Examiner", lines: ["Right arm blood pressure is 190 over 105. Left arm blood pressure is 160 over 90. Pulse is 108 and regular. Oxygen saturation is 97% on room air. Respiratory rate is 24. Temperature is 36.7. AVPU is Alert. He is distressed. The right radial pulse feels stronger than the left."] }
            ]
          },
          {
            heading: "Summarise",
            purpose: "Compress the danger picture.",
            anchor: "Sudden severe tearing pain through to the back.",
            turns: [
              { speaker: "You", lines: ["David, let me summarise.", "You had sudden severe central chest pain 25 minutes ago while lifting.", "It was severe from the start, feels tearing, and goes through to your back.", "You felt like you might faint, your left arm briefly felt weak, and you have high blood pressure and past smoking history.", "Is that right?"] },
              { speaker: "Patient", lines: ["Yes."] }
            ]
          },
          {
            heading: "Name the danger",
            purpose: "Use everyday language.",
            anchor: "This could be a tear in the main blood vessel from the heart.",
            turns: [
              { speaker: "You", lines: ["The main concern is that this could be a tear in the main blood vessel from the heart.", "I cannot confirm that here, and it may turn out to be something else, but it is serious enough that we should not wait."] },
              { speaker: "You", lines: ["There are other serious causes hospital also needs to check, including a heart problem, a blood clot in the lung, or a collapsed lung.", "Indigestion or muscle pain can happen too, but I cannot safely call it that here."] }
            ]
          },
          {
            heading: "Act safely",
            purpose: "Ambulance, no car, no delay.",
            anchor: "You need an ambulance.",
            turns: [
              { speaker: "You", lines: ["This is not safe to manage in this clinic.", "I am arranging an ambulance now.", "You should not drive yourself."] },
              { speaker: "Patient", lines: ["My wife is outside. Can she just drive me?"] },
              { speaker: "You", lines: ["No. You need an ambulance because they can monitor you and act quickly if your condition changes."] }
            ]
          },
          {
            heading: "Medicine safety",
            purpose: "Do not treat blindly.",
            anchor: "Medicines are not safe for every cause of chest pain.",
            turns: [
              { speaker: "You", lines: ["While we wait, we will keep you resting and check your blood pressure, pulse, oxygen level, breathing rate, temperature, conscious state, and circulation.", "If we can do a heart tracing immediately without delaying the ambulance, we will do it.", "I will not delay the ambulance for blood tests that need to happen in hospital.", "With this pattern of pain, I will not give aspirin, blood-thinning medicine, or clot-dissolving medicine automatically before hospital checks the main blood vessel."] },
              { speaker: "Patient", lines: ["What do you mean?"] },
              { speaker: "You", lines: ["Some medicines are helpful for certain heart problems, but they are not safe for every cause of chest pain.", "With your sudden tearing pain to the back, hospital needs to check the main blood vessel urgently first.", "I will give oxygen only if your oxygen level is low or you show signs that you need it.", "Before any chest pain spray or tablet under the tongue, I will check your blood pressure and medicine safety. In this situation, I would not give it blindly."] },
              { speaker: "You", lines: ["I will arrange urgent pain relief through the ambulance or hospital team. If safe pain relief is available here and does not delay transfer, I will use it.", "In hospital, they can monitor you, repeat heart tracings, do urgent blood tests, arrange a CT scan of the main blood vessel if needed, control your blood pressure safely, and involve the right specialists quickly."] }
            ]
          },
          {
            heading: "Close",
            purpose: "Warn, check, hand over.",
            anchor: "I will stay with you and hand over clearly.",
            turns: [
              { speaker: "You", lines: ["Tell me immediately if the pain gets worse, you feel faint, become more breathless, feel very clammy, feel weak or numb anywhere, have trouble speaking, or feel like you might collapse.", "Please stay seated or lying down."] },
              { speaker: "You", lines: ["Can you tell me what you understand about why I am arranging an ambulance?"] },
              { speaker: "Patient", lines: ["You are worried this could be a tear in a main blood vessel or another serious chest problem, and I need hospital now."] },
              { speaker: "You", lines: ["That is right. I will stay with you and hand over clearly to the ambulance team."] }
            ]
          }
        ],
        hints: [
          {
            id: "tearing-pain",
            stage: "see",
            group: "See",
            label: "I missed the sudden tearing pain",
            title: "I missed the sudden tearing pain",
            missed: "Sudden severe tearing pain was not identified as a danger clue.",
            why: "That pattern raises concern for a tear in the main blood vessel.",
            say: "The pain started suddenly, was severe straight away, and feels tearing.",
            practise: "Say the summary once, then return to Start speaking."
          },
          {
            id: "back-pain",
            stage: "see",
            group: "See",
            label: "I missed pain going to the back",
            title: "I missed pain going to the back",
            missed: "The pain-through-to-the-back question was missed.",
            why: "Chest pain going to the back is a key danger clue.",
            say: "Does the pain go through to your back, between your shoulder blades?",
            practise: "Ask the question three times, then return to Start speaking."
          },
          {
            id: "neuro-or-faint",
            stage: "see",
            group: "See",
            label: "I missed faintness or brief arm weakness",
            title: "I missed faintness or brief arm weakness",
            missed: "Collapse, faintness, weakness, numbness, speech, or vision change were not checked.",
            why: "A tear in the main blood vessel can affect blood flow to the brain or limbs.",
            say: "Did you feel faint, weak, numb, or have trouble speaking or seeing?",
            practise: "Say the question once, then return to Start speaking."
          },
          {
            id: "bp-pulse-difference",
            stage: "see",
            group: "See",
            label: "I missed the blood pressure or pulse difference",
            title: "I missed the blood pressure or pulse difference",
            missed: "Blood pressure and pulse strength in both arms were not requested.",
            why: "A difference between arms can support concern for a main blood vessel problem.",
            say: "I would like to check blood pressure and pulse strength in both arms.",
            practise: "Say the observation request once, then return to Start speaking."
          },
          {
            id: "heart-attack-only",
            stage: "say",
            group: "Say",
            label: "I called it a heart attack only",
            title: "I called it a heart attack only",
            missed: "The answer focused only on heart attack and missed the tear pattern.",
            why: "Routine heart attack thinking can lead to unsafe medicine choices if a tear is possible.",
            say: "One serious possibility is a tear in the main blood vessel from the heart.",
            practise: "Say the line three times, then return to Start speaking."
          },
          {
            id: "plain-tear-language",
            stage: "say",
            group: "Say",
            label: "I did not explain the tear in everyday language",
            title: "I did not explain the tear in everyday language",
            missed: "The danger was not explained in words the patient can hold.",
            why: "The patient needs clear language without jargon.",
            say: "This could be a tear in the main blood vessel from the heart.",
            practise: "Say it slowly once, then return to Start speaking."
          },
          {
            id: "too-medical-case-2",
            stage: "say",
            group: "Say",
            label: "I used too many medical words",
            title: "I used too many medical words",
            missed: "The explanation used terms like aortic dissection, thrombolysis, anticoagulation, or reperfusion with the patient.",
            why: "Plain language is safer and easier for the patient to understand.",
            say: "One serious possibility is a tear in the main blood vessel from the heart.",
            practise: "Replace one technical word with one everyday phrase, then return to Start speaking."
          },
          {
            id: "urgent-reason",
            stage: "say",
            group: "Say",
            label: "I did not explain why this is urgent",
            title: "I did not explain why this is urgent",
            missed: "The danger clues were not connected to urgent transfer.",
            why: "The patient needs to understand why ambulance is necessary.",
            say: "Because this started suddenly, was severe straight away, and goes to your back, we should not wait.",
            practise: "Say the reason once, then return to Start speaking."
          },
          {
            id: "ambulance-late-case-2",
            stage: "act",
            group: "Act",
            label: "I called the ambulance too late",
            title: "I called the ambulance too late",
            missed: "Transfer was arranged too late.",
            why: "This is not safe to manage in the clinic.",
            say: "I am arranging an ambulance now while I ask focused questions.",
            practise: "Start the case with this line, then return to Start speaking."
          },
          {
            id: "private-transport",
            stage: "act",
            group: "Act",
            label: "I let the patient consider private transport",
            title: "I let the patient consider private transport",
            missed: "Private transport was not clearly refused.",
            why: "The patient may deteriorate on the way.",
            say: "You should not drive yourself. You need an ambulance.",
            practise: "Say it firmly once, then return to Start speaking."
          },
          {
            id: "tests-first-case-2",
            stage: "act",
            group: "Act",
            label: "I waited for tests",
            title: "I waited for tests",
            missed: "Ambulance was delayed for a heart tracing or blood tests.",
            why: "Tests should not slow urgent transfer.",
            say: "I will not delay the ambulance for tests that need to happen in hospital.",
            practise: "Say it once, then return to Start speaking."
          },
          {
            id: "aspirin-too-early",
            stage: "act",
            group: "Act",
            label: "I gave aspirin too early",
            title: "I gave aspirin too early",
            missed: "Aspirin was given before checking the tear pattern.",
            why: "Aspirin can help some heart problems, but it should not be automatic when a tear in the main blood vessel is a serious possibility.",
            say: "With this pattern of pain, I will not give aspirin automatically before hospital checks the main blood vessel.",
            practise: "Say the line once, then return to Start speaking."
          },
          {
            id: "blood-thinner-too-early",
            stage: "act",
            group: "Act",
            label: "I gave blood-thinning medicine too early",
            title: "I gave blood-thinning medicine too early",
            missed: "Routine heart attack treatment came before checking for a tear.",
            why: "Some medicines are not safe for every cause of chest pain.",
            say: "With this pattern of pain, I will not give aspirin or other blood-thinning medicine automatically before hospital checks the main blood vessel.",
            practise: "Say the line once, then return to Start speaking."
          },
          {
            id: "spray-too-early",
            stage: "act",
            group: "Act",
            label: "I gave chest pain spray too early",
            title: "I gave chest pain spray too early",
            missed: "Chest pain spray or tablet was given without safety checks.",
            why: "Chest pain spray can be unsafe in some situations.",
            say: "Before any chest pain spray or tablet, I will check your blood pressure and medicine safety.",
            practise: "Say it once, then return to Start speaking."
          },
          {
            id: "medicine-safety-case-2",
            stage: "act",
            group: "Act",
            label: "I missed medicine safety",
            title: "I missed medicine safety",
            missed: "The reason for choosing medicines carefully was not explained.",
            why: "This explains caution without frightening or confusing the patient.",
            say: "Some medicines are helpful for certain heart problems, but not safe for every cause of chest pain.",
            practise: "Say it once, then return to Start speaking."
          },
          {
            id: "warning-signs-case-2",
            stage: "close",
            group: "Close",
            label: "I missed the warning signs",
            title: "I missed the warning signs",
            missed: "The patient was not told what to report while waiting.",
            why: "The patient can deteriorate while waiting for the ambulance.",
            say: "Tell me immediately if the pain gets worse, you feel faint, become more breathless, feel very clammy, feel weak or numb, have trouble speaking, or feel like you might collapse.",
            practise: "Say the warning line once, then return to Start speaking."
          },
          {
            id: "check-understanding-case-2",
            stage: "close",
            group: "Close",
            label: "I did not check understanding",
            title: "I did not check understanding",
            missed: "The patient was not asked to explain the plan back.",
            why: "Check-back confirms the patient understands the urgency.",
            say: "Can you tell me what you understand about why I am arranging an ambulance?",
            practise: "Ask the check-back once, then return to Start speaking."
          },
          {
            id: "time-case-2",
            stage: "close",
            group: "Close",
            label: "I ran out of time",
            title: "I ran out of time",
            missed: "Too much time was spent proving the diagnosis.",
            why: "The station rewards safe action before you are 100% sure.",
            say: "Sudden severe tearing pain to the back means ambulance first.",
            practise: "Do the 30-second opening and decision point, then return to Timed run."
          },
          {
            id: "something-else-case-2",
            stage: "close",
            group: "Close",
            label: "Something else",
            title: "Something else",
            missed: "Choose the closest missed point.",
            why: "One correction at a time is how the station improves.",
            say: "I will fix one thing, then repeat the case.",
            practise: "Choose one exact line to improve."
          }
        ],
        notes: [
          {
            title: "Do not miss",
            items: [
              "Sudden severe tearing pain through to the back is the anchor clue.",
              "A tear in the main blood vessel must stay ahead of routine heart attack treatment.",
              "Ambulance now, no private transport, no delay for tests."
            ]
          },
          {
            title: "Exam-safe lines",
            items: [
              "One serious possibility is a tear in the main blood vessel from the heart.",
              "I am arranging an ambulance now.",
              "You should not drive yourself.",
              "I will not give aspirin or blood-thinning medicine automatically before hospital checks the main blood vessel."
            ]
          },
          {
            title: "Memory drills",
            items: [
              "Sudden, severe, tearing, back spread: ambulance first.",
              "Both arms: blood pressure and pulse strength.",
              "Medicine safety before reflex chest pain treatment."
            ]
          }
        ],
        doNotMissMap: {
          prime: [
            "Forget the diagnosis.",
            "See the danger.",
            "Act safely."
          ],
          scenes: [
            {
              tone: "black",
              color: "Black",
              icon: "\u26a1",
              title: "Tear",
              clinical: "Tear in the main blood vessel",
              see: [
                "Sudden",
                "Severe from the start",
                "Tearing",
                "Through to the back",
                "Faint feeling",
                "Arm weakness or strange feeling",
                "Different blood pressure between arms",
                "Different pulse strength between arms"
              ],
              say: [
                "One serious possibility is a tear in the main blood vessel from the heart."
              ],
              do: [
                { mark: "\u2713", text: "Ambulance now" },
                { mark: "\u2713", text: "Keep resting" },
                { mark: "\u00d7", text: "No driving" },
                { mark: "\u00d7", text: "No automatic aspirin or blood-thinning medicine" }
              ]
            },
            {
              tone: "red",
              color: "Red",
              icon: "\u2764\ufe0f",
              title: "Heart",
              clinical: "Heart problem",
              see: [
                "Pressure",
                "Sweating",
                "Nausea",
                "Breathless",
                "Arm or jaw spread",
                "Heart risk factors"
              ],
              say: [
                "Hospital also needs to check for a heart problem."
              ],
              do: [
                { mark: "\u2713", text: "Heart tracing if ready now" },
                { mark: "\u00d7", text: "Do not delay transfer" }
              ]
            },
            {
              tone: "blue",
              color: "Blue",
              icon: "\ud83e\udec1",
              title: "Clot",
              clinical: "Blood clot in the lung",
              see: [
                "Sharp pain",
                "Sudden breathlessness",
                "Coughing blood",
                "Swollen calf",
                "Travel",
                "Surgery",
                "Cancer",
                "Previous clot"
              ],
              say: [
                "Hospital also needs to check for a blood clot in the lung."
              ],
              do: [
                { mark: "\u2713", text: "Ask clot-risk questions" },
                { mark: "\u2713", text: "Escalate if unsafe" }
              ]
            },
            {
              tone: "green",
              color: "Green",
              icon: "\ud83c\udf2c",
              iconImage: "assets/img/collapsed-lung.png",
              iconAlt: "Collapsed lung visual anchor",
              title: "Collapsed lung",
              clinical: "Collapsed lung",
              see: [
                "Sudden",
                "One-sided",
                "Sharp",
                "Breathless",
                "Trauma",
                "One-sided chest signs"
              ],
              say: [
                "Hospital also needs to check for a collapsed lung."
              ],
              do: [
                { mark: "\u2713", text: "Check breathing" },
                { mark: "\u2713", text: "Escalate urgently if severe" }
              ]
            }
          ],
          safe: {
            title: "While waiting",
            items: [
              { mark: "\ud83d\udecc", text: "Rest" },
              { mark: "\ud83e\ude7a", text: "BP both arms" },
              { mark: "\u2764\ufe0f", text: "Pulse both arms" },
              { mark: "\ud83e\udec1", text: "Oxygen level" },
              { mark: "\ud83d\udc40", text: "Stay with patient" }
            ]
          },
          medicines: [
            {
              title: "Aspirin",
              items: [
                { mark: "\u00d7", text: "Not automatic in strong tear pattern" }
              ]
            },
            {
              title: "Blood-thinning medicine",
              items: [
                { mark: "\u00d7", text: "Do not give blindly" }
              ]
            },
            {
              title: "Oxygen",
              items: [
                { mark: "\ud83e\udec1", text: "Only if needed" }
              ]
            },
            {
              title: "Chest pain spray/tablet",
              items: [
                { mark: "\ud83e\ude7a", text: "BP first" },
                { mark: "\ud83d\udc8a", text: "Medicine safety first" }
              ]
            }
          ],
          finishCheck: [
            "Possible tear in main blood vessel",
            "Ambulance now",
            "Do not drive",
            "Rest while waiting",
            "Check blood pressure in both arms",
            "Check pulse strength in both arms",
            "Check conscious state",
            "Heart tracing only if no delay",
            "No waiting for blood tests",
            "No automatic aspirin or blood-thinning medicine",
            "Oxygen only if needed",
            "Blood pressure and medicine safety before chest pain spray",
            "Warning signs",
            "Check understanding"
          ],
          oneLine: [
            "This could be a tear in the main blood vessel from the heart.",
            "I am arranging an ambulance now.",
            "You should not drive yourself."
          ]
        },
        references: [],
        status: "active"
      }
    ]
  };
})();
