(function () {
  "use strict";

  window.AMC_CASES = [
    {
      id: "case-001",
      displayNumber: "Case 1",
      title: "Chest discomfort after lunch",
      status: "review",
      modality: "in_person",
      format: {
        readingTime: "2 minutes",
        assessmentTime: "8 minutes",
        predominantArea: "History taking"
      },
      note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
      stem: {
        lines: [
          {
            id: "stem-role",
            text: "You are a general practitioner working in a suburban medical clinic."
          },
          {
            id: "stem-patient",
            text: "Mr Daniel Morgan, a 60-year-old man, has attended after developing chest discomfort following lunch."
          },
          {
            id: "stem-start",
            text: "No observations or investigation results are available at the start of the consultation."
          }
        ],
        tasks: [
          {
            id: "task-history",
            text: "Take a focused history.",
            timing: "4 minutes"
          },
          {
            id: "task-reasoning",
            text: "Explain your most likely diagnosis and important differential diagnoses to the patient.",
            timing: "2 minutes"
          },
          {
            id: "task-management",
            text: "Address the patient's concerns and explain your management plan.",
            timing: "2 minutes"
          }
        ]
      },
      run: {
        sections: [
          {
            id: "run-opening",
            heading: "Opening and first story",
            turns: [
              {
                id: "turn-start",
                speaker: "Examiner",
                kind: "spoken",
                lines: [{ id: "run-start", text: "You may begin." }]
              },
              {
                id: "turn-intro",
                speaker: "Doctor",
                kind: "spoken",
                lines: [
                  { id: "run-intro", text: "Hello, I am Ushana, one of the doctors here. Could I confirm your full name and date of birth?" }
                ]
              },
              {
                id: "turn-id",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-id", text: "Daniel Morgan, 14 May 1966." }]
              },
              {
                id: "turn-consent-history",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-consent-history", text: "Thank you, Daniel. Is it okay if I ask focused questions about the chest discomfort so I can keep you safe?" }]
              },
              {
                id: "turn-consent-history-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-consent-history-answer", text: "Yes. I think lunch just did not agree with me." }]
              },
              {
                id: "turn-open-question",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-open-question", text: "Tell me what happened from the beginning." }]
              },
              {
                id: "turn-opening-story",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-opening-story", text: "About 35 minutes ago, after lunch, I was walking back to the office when I felt a heavy pressure in the middle of my chest. I sat down, but it has not gone away." }]
              }
            ]
          },
          {
            id: "run-symptoms",
            heading: "Focused symptom pattern",
            turns: [
              {
                id: "turn-current",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-current", text: "Is the pressure still there now?" }]
              },
              {
                id: "turn-current-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-current-answer", text: "Yes. It is still there." }]
              },
              {
                id: "turn-site",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-site", text: "Please point to where you feel it." }]
              },
              {
                id: "turn-site-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-site-answer", text: "Right here, across the centre of my chest." }]
              },
              {
                id: "turn-radiation",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-radiation", text: "Does it travel anywhere else?" }]
              },
              {
                id: "turn-radiation-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-radiation-answer", text: "It goes into my left arm and a little into my jaw." }]
              },
              {
                id: "turn-severity",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-severity", text: "How severe is it now, from zero to ten?" }]
              },
              {
                id: "turn-severity-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-severity-answer", text: "About seven." }]
              },
              {
                id: "turn-associated",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-associated", text: "What else have you noticed with it?" }]
              },
              {
                id: "turn-associated-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-associated-answer", text: "I feel sweaty and slightly sick. I am more short of breath than usual." }]
              },
              {
                id: "turn-early-escalation",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-early-escalation", text: "Daniel, this could be coming from your heart. I am asking my colleague to call Triple Zero for an ambulance now. Please stay seated while I continue." }]
              },
              {
                id: "turn-early-escalation-action",
                speaker: "Action",
                kind: "action",
                lines: [{ id: "run-early-escalation-action", text: "The doctor calls for help, asks a staff member to phone Triple Zero, and requests the emergency equipment and defibrillator." }]
              },
              {
                id: "turn-early-escalation-response",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-early-escalation-response", text: "An ambulance? Is it really that serious?" }]
              },
              {
                id: "turn-early-escalation-explanation",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-early-escalation-explanation", text: "It may be serious, and delay is less safe. Calling now does not mean I have decided it is a heart attack." }]
              },
              {
                id: "turn-syncope",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-syncope", text: "Have you fainted or felt close to fainting?" }]
              },
              {
                id: "turn-syncope-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-syncope-answer", text: "No." }]
              },
              {
                id: "turn-previous",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-previous", text: "Have you had anything like this before?" }]
              },
              {
                id: "turn-previous-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-previous-answer", text: "Twice this week I felt a milder pressure while hurrying. It settled after a few minutes when I stopped." }]
              }
            ]
          },
          {
            id: "run-danger-alternatives",
            heading: "Dangerous alternatives",
            turns: [
              {
                id: "turn-dissection",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-dissection", text: "Did the pain reach maximum intensity instantly or feel tearing through to your back?" }]
              },
              {
                id: "turn-dissection-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-dissection-answer", text: "No. It built up over a few minutes, and there is no back pain." }]
              },
              {
                id: "turn-pe",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-pe", text: "Have you coughed up blood?" }]
              },
              {
                id: "turn-pe-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-pe-answer", text: "No." }]
              },
              {
                id: "turn-vte",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-vte", text: "Any recent leg swelling, long travel, surgery, being confined to bed, cancer, or previous blood clot?" }]
              },
              {
                id: "turn-vte-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-vte-answer", text: "No." }]
              },
              {
                id: "turn-pneumothorax",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-pneumothorax", text: "Did it begin as a sudden sharp pain that was worse when you breathed in?" }]
              },
              {
                id: "turn-pneumothorax-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-pneumothorax-answer", text: "No. It is pressure, not a sharp pain." }]
              }
            ]
          },
          {
            id: "run-background",
            heading: "Risk and medicine safety",
            turns: [
              {
                id: "turn-history",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-history", text: "What medical conditions have you been treated for?" }]
              },
              {
                id: "turn-history-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-history-answer", text: "High blood pressure and high cholesterol." }]
              },
              {
                id: "turn-cardiac-history",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-cardiac-history", text: "Have you ever had heart disease, a stroke, diabetes, or kidney disease?" }]
              },
              {
                id: "turn-cardiac-history-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-cardiac-history-answer", text: "No." }]
              },
              {
                id: "turn-smoking",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-smoking", text: "Do you smoke?" }]
              },
              {
                id: "turn-smoking-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-smoking-answer", text: "I stopped five years ago. Before that, about a packet a day." }]
              },
              {
                id: "turn-family",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-family", text: "Any close family history of early heart disease?" }]
              },
              {
                id: "turn-family-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-family-answer", text: "My father had a heart attack at 54." }]
              },
              {
                id: "turn-medicines",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-medicines", text: "What medicines do you take, including anything you have taken for this discomfort?" }]
              },
              {
                id: "turn-medicines-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-medicines-answer", text: "Perindopril and atorvastatin. I took an antacid, but it made no difference." }]
              },
              {
                id: "turn-allergy",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-allergy", text: "Do you have a true allergy to aspirin, or any active bleeding or bleeding disorder?" }]
              },
              {
                id: "turn-allergy-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-allergy-answer", text: "No." }]
              },
              {
                id: "turn-pde5",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-pde5", text: "Have you recently used sildenafil, tadalafil, vardenafil, or another medicine for erections?" }]
              },
              {
                id: "turn-pde5-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-pde5-answer", text: "No." }]
              },
              {
                id: "turn-time-prompt",
                speaker: "Examiner",
                kind: "spoken",
                lines: [{ id: "run-time-prompt", text: "Four minutes have elapsed. Please proceed to the next task." }]
              }
            ]
          },
          {
            id: "run-assessment",
            heading: "Immediate assessment and escalation",
            turns: [
              {
                id: "turn-summary",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-summary", text: "You have ongoing exertional central pressure spreading to your arm and jaw, with sweating, nausea and breathlessness, after two milder recent episodes. This concerns me." }]
              },
              {
                id: "turn-escalate",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-escalate", text: "The ambulance is on its way. I will assess and treat you here until the paramedics take over." }]
              },
              {
                id: "turn-patient-ambulance",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-patient-ambulance", text: "An ambulance? I thought it was indigestion. Can my wife just drive me?" }]
              },
              {
                id: "turn-address-concern",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-address-concern", text: "I understand why, especially because it followed lunch. Heart symptoms can feel like indigestion. The timing and antacid response cannot safely rule that out. An ambulance provides monitoring and treatment if you deteriorate." }]
              },
              {
                id: "turn-exam-consent",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-exam-consent", text: "With your permission, I will check your observations, heart and lungs while help is coming." }]
              },
              {
                id: "turn-exam-consent-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-exam-consent-answer", text: "Yes." }]
              },
              {
                id: "turn-exam-request",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-exam-request", text: "I assess airway, breathing, circulation, conscious state and perfusion; record both-arm blood pressure, pulse, respiratory rate and oxygen saturation; then examine heart, lungs, chest wall and calves." }]
              },
              {
                id: "turn-exam-findings",
                speaker: "Examiner",
                kind: "finding",
                lines: [{ id: "run-exam-findings", text: "The airway is patent. The patient is alert, pale and clammy. Pulse is 96 beats per minute and regular, blood pressure is 148/88 mmHg in both arms, respiratory rate is 20 breaths per minute, and oxygen saturation is 96% on room air. Heart sounds are normal. The chest is clear with equal air entry. There is no chest wall tenderness, calf swelling or clinical heart failure." }]
              }
            ]
          },
          {
            id: "run-diagnosis",
            heading: "Reasoned explanation",
            turns: [
              {
                id: "turn-likely-diagnosis",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-likely-diagnosis", text: "My leading diagnosis is acute coronary syndrome: reduced blood flow to heart muscle, including heart attack or unstable angina. I cannot yet tell which type, but we must act now." }]
              },
              {
                id: "turn-differentials",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-differentials", text: "Other dangerous causes are a tear in the main artery, a lung clot and a collapsed lung. Your pattern makes these less likely, but new findings could change that. Reflux and chest wall pain are possible only after danger is assessed." }]
              },
              {
                id: "turn-patient-question",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-patient-question", text: "Does that mean I am definitely having a heart attack?" }]
              },
              {
                id: "turn-uncertainty",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-uncertainty", text: "No. It is not definite, but the risk is high enough to act. Repeated heart tracings and serial blood tests will confirm or exclude it." }]
              }
            ]
          },
          {
            id: "run-management",
            heading: "Immediate management and handover",
            turns: [
              {
                id: "turn-ecg-plan",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-ecg-plan", text: "We will record a 12-lead ECG within 10 minutes if available, without delaying the ambulance. A normal first ECG would not rule out acute coronary syndrome." }]
              },
              {
                id: "turn-ecg-result",
                speaker: "Examiner",
                kind: "investigation",
                lines: [{ id: "run-ecg-result", text: "The ambulance has been called. An ECG is available immediately and does not delay transfer. It shows horizontal ST-segment depression in leads V4 to V6." }]
              },
              {
                id: "turn-ecg-response",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-ecg-response", text: "These changes increase concern for ischaemia. I begin continuous cardiac monitoring and keep the defibrillator available." }]
              },
              {
                id: "turn-aspirin",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-aspirin", text: "With no contraindication, I will give you aspirin 300 milligrams, chewed or dissolved, and record the time." }]
              },
              {
                id: "turn-oxygen",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-oxygen", text: "Your oxygen saturation is 96%, so I will not give routine oxygen. I will keep monitoring it." }]
              },
              {
                id: "turn-gtn",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-gtn", text: "For ongoing pain, I can give glyceryl trinitrate under your tongue every five minutes, up to three doses, while checking blood pressure. Relief would not prove the diagnosis." }]
              },
              {
                id: "turn-no-troponin",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-no-troponin", text: "I will not use a single clinic troponin or risk score to rule this out. You need serial testing in hospital." }]
              },
              {
                id: "turn-reassure",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-reassure", text: "I know this is frightening. Acting early is safest. I will watch for any change and explain each step." }]
              },
              {
                id: "turn-understanding",
                speaker: "Doctor",
                kind: "spoken",
                lines: [{ id: "run-understanding", text: "Before the ambulance arrives, can you tell me what you understand about the concern and the plan?" }]
              },
              {
                id: "turn-understanding-answer",
                speaker: "Patient",
                kind: "spoken",
                lines: [{ id: "run-understanding-answer", text: "You are worried it may be reduced blood flow to my heart. I need the ambulance and hospital tests even though it is not definite yet." }]
              },
              {
                id: "turn-handover",
                speaker: "Doctor",
                kind: "handover",
                lines: [{ id: "run-handover", text: "For handover: Daniel Morgan is 60 with 35 minutes of ongoing exertional central pressure radiating to the left arm and jaw, with diaphoresis, nausea and dyspnoea, after two recent exertional episodes. He is haemodynamically stable. ECG shows lateral ST depression. Aspirin 300 milligrams has been given. I will provide the ECG, observations, medicine list, allergy and bleeding history, treatments and response, and report any change during transfer." }]
              },
              {
                id: "turn-end",
                speaker: "Examiner",
                kind: "spoken",
                lines: [{ id: "run-end", text: "Thank you. The station is complete." }]
              }
            ]
          }
        ]
      },
      sources: [
        {
          id: "amc-spec-2026",
          title: "AMC Clinical Examination Specifications V8.3",
          organisation: "Australian Medical Council",
          date: "June 2026",
          url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf"
        },
        {
          id: "amc-tips-2024",
          title: "Tips from Examiners V1.1",
          organisation: "Australian Medical Council",
          date: "October 2024",
          url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf"
        },
        {
          id: "acs-guideline-2025",
          title: "Comprehensive Australian clinical guideline for diagnosing and managing acute coronary syndromes 2025",
          organisation: "National Heart Foundation of Australia and Cardiac Society of Australia and New Zealand",
          date: "2025",
          url: "https://assets.contentstack.io/v3/assets/blt8a393bb3b76c0ede/bltc58c127475ae7407/ACS-Guideline.pdf"
        },
        {
          id: "anzcor-14-1",
          title: "Guideline 14.1: Acute Coronary Syndromes: Presentation",
          organisation: "Australian and New Zealand Committee on Resuscitation",
          date: "2026",
          url: "https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-1-acute-coronary-syndromes-presentation"
        },
        {
          id: "anzcor-14-2",
          title: "Guideline 14.2: Acute Coronary Syndromes: Initial Medical Therapy",
          organisation: "Australian and New Zealand Committee on Resuscitation",
          date: "2026",
          url: "https://www.anzcor.org/home/acute-coronary-syndromes/guideline-14-2-acute-coronary-syndromes-initial-medical-therapy"
        },
        {
          id: "cardiac-pain-2015",
          title: "Mechanisms of cardiac pain",
          organisation: "Comprehensive Physiology via PubMed",
          date: "2015",
          url: "https://pubmed.ncbi.nlm.nih.gov/25880519/"
        },
        {
          id: "nausea-mi-2009",
          title: "Relation of nausea and vomiting in acute myocardial infarction to location of the infarct",
          organisation: "American Journal of Cardiology via PubMed",
          date: "2009",
          url: "https://pubmed.ncbi.nlm.nih.gov/19962467/"
        }
      ],
      reasoningCompass: {
        stem: {
          title: "Keep your place while reading",
          steps: [
            { time: "First 30 seconds", text: "Where am I? Who is this? Could it be dangerous?" },
            { time: "Next 30 seconds", text: "Which system comes first? What must stay open?" },
            { time: "Final minute", text: "What exactly must I do? Split the 8 minutes." }
          ],
          anchor: "History 0 to 4 | Explain 4 to 6 | Concern and management 6 to 8"
        },
        run: {
          title: "Keep your place during the run",
          steps: [
            { time: "0 to 4 minutes", text: "Build the story and check danger." },
            { time: "4 to 6 minutes", text: "One lead, why it fits, then key alternatives." },
            { time: "6 to 8 minutes", text: "Answer him, manage now, check understanding." }
          ],
          anchor: "If danger interrupts: act, then return to the task you left."
        }
      },
      hints: [
        {
          id: "hint-urgent-booking",
          target: { surface: "stem", itemId: "stem-patient", quote: "has attended", occurrence: 1 },
          title: "The presentation label tells you very little",
          lead: "Attending today does not tell you the cause or how unwell he is. Those answers must come from the consultation.",
          layers: [
            { label: "Thinking path", text: "Find out what changed, whether the symptom is present now and whether he appears unwell." },
            { label: "Flexible move", text: "Do not infer severity from the booking. Assess it from the history, appearance and observations." }
          ],
          citationIds: ["amc-tips-2024"]
        },
        {
          id: "hint-age",
          target: { surface: "stem", itemId: "stem-patient", quote: "60-year-old man", occurrence: 1 },
          title: "Age changes probability, not permission",
          lead: "Coronary disease becomes more plausible with age, but age and sex never prove the diagnosis.",
          layers: [
            { label: "Use it", text: "Let age increase the weight you give an ischaemic symptom pattern and vascular risk history." },
            { label: "Trap", text: "Do not use the reverse rule in a younger person or a woman. Symptoms and physiology still control the decision." }
          ],
          citationIds: ["acs-guideline-2025"]
        },
        {
          id: "hint-after-lunch",
          target: { surface: "stem", itemId: "stem-patient", quote: "following lunch", occurrence: 1 },
          title: "A time link is not a cause",
          lead: "Lunch is memorable, so the mind wants to turn it into indigestion. Keep it as a hypothesis, not a conclusion.",
          layers: [
            { label: "Ask next", text: "Find the exact activity, onset, quality, duration, radiation and associated symptoms. Those features can outweigh the meal association." },
            { label: "Mechanism", text: "A meal may provoke reflux, but digestion also increases cardiac workload. Temporal sequence alone cannot separate them." },
            { label: "Flex", text: "If pain is clearly burning, positional and regurgitant with no cardiac features, reflux rises. If it is exertional pressure with autonomic symptoms, ACS rises sharply." }
          ],
          citationIds: ["acs-guideline-2025", "anzcor-14-1"]
        },
        {
          id: "hint-discomfort",
          target: { surface: "stem", itemId: "stem-patient", quote: "chest discomfort", occurrence: 1 },
          title: "Do not wait for the word pain",
          lead: "Ischaemia may be described as pressure, heaviness, tightness, burning or indigestion rather than pain.",
          layers: [
            { label: "Map", text: "Heart muscle oxygen supply falls below demand. Metabolites and autonomic activation create pressure, breathlessness, nausea and sweating." },
            { label: "Trap", text: "A mild word can describe a dangerous process. Let the whole pattern set urgency." }
          ],
          citationIds: ["acs-guideline-2025", "anzcor-14-1"]
        },
        {
          id: "hint-focused-history",
          target: { surface: "stem", itemId: "task-history", quote: "focused history", occurrence: 1 },
          title: "Focused means adaptive",
          lead: "This is not a shorter memorised list. Each answer should decide the next question.",
          layers: [
            { label: "Route", text: "Open story, define the symptom pattern, test immediate danger, check discriminating alternatives, then obtain risk and medicine-safety details." },
            { label: "Examiner logic", text: "The AMC rewards task-relevant data gathering and warns against closed, double-barrelled and scattergun questioning." }
          ],
          citationIds: ["amc-spec-2026", "amc-tips-2024"]
        },
        {
          id: "hint-most-likely",
          target: { surface: "stem", itemId: "task-reasoning", quote: "most likely diagnosis", occurrence: 1 },
          title: "Commit, then show your update logic",
          lead: "Name one leading diagnosis and connect it to this patient's evidence. A textbook list is not reasoning.",
          layers: [
            { label: "Structure", text: "Leading diagnosis, evidence for it, dangerous alternatives, evidence against them, and what would make you change direction." },
            { label: "Flex", text: "Your diagnosis can remain provisional while your action threshold is already crossed." }
          ],
          citationIds: ["amc-tips-2024"]
        },
        {
          id: "hint-concerns",
          target: { surface: "stem", itemId: "task-management", quote: "patient's concerns", occurrence: 1 },
          title: "Concern is clinical information",
          lead: "The patient's explanation, fear or resistance tells you what could block safe action.",
          layers: [
            { label: "Three moves", text: "Name what you heard, explain the uncertainty in plain language, then connect the plan to the patient's safety goal." },
            { label: "Trap", text: "Do not give a long lecture before answering the actual concern." }
          ],
          citationIds: ["amc-tips-2024"]
        },
        {
          id: "hint-opening-story",
          target: { surface: "run", itemId: "run-opening-story", quote: "walking back to the office", occurrence: 1 },
          title: "Exertion is a probability shifter",
          lead: "Walking raises myocardial oxygen demand. Symptoms appearing with exertion fit supply-demand mismatch.",
          layers: [
            { label: "Pathophysiology", text: "A narrowed or acutely unstable coronary artery may not increase flow enough when demand rises, producing myocardial ischaemia." },
            { label: "Do not overlearn", text: "Exertion supports ACS but is not required. ACS can begin at rest." }
          ],
          citationIds: ["anzcor-14-1", "acs-guideline-2025"]
        },
        {
          id: "hint-heavy-pressure",
          target: { surface: "run", itemId: "run-opening-story", quote: "heavy pressure", occurrence: 1 },
          title: "Translate words into mechanism",
          lead: "Pressure is more compatible with visceral ischaemic discomfort than a tiny, reproducible chest-wall spot.",
          layers: [
            { label: "Compare", text: "Pleuritic pain pushes toward pleura or pericardium. Tearing maximal-at-onset pain raises dissection. Reproducible focal pain raises chest wall causes." },
            { label: "Rule", text: "Quality modifies probability. No single adjective rules ACS in or out." }
          ],
          citationIds: ["anzcor-14-1"]
        },
        {
          id: "hint-ongoing",
          target: { surface: "run", itemId: "run-current-answer", quote: "still there", occurrence: 1 },
          title: "Persistence changes the action threshold",
          lead: "Ongoing symptoms mean the myocardium may still be ischaemic and the patient can deteriorate while you talk.",
          layers: [
            { label: "Next move", text: "Escalate early and continue the focused history in parallel. Do not finish a perfect history before arranging help." },
            { label: "Variation", text: "Resolved symptoms can still represent ACS, especially with recurrent or crescendo episodes. They change monitoring details, not the need for proper risk assessment." }
          ],
          citationIds: ["acs-guideline-2025"]
        },
        {
          id: "hint-radiation",
          target: { surface: "run", itemId: "run-radiation-answer", quote: "left arm", occurrence: 1 },
          title: "Referred pain follows shared spinal pathways",
          lead: "Cardiac visceral afferents enter upper thoracic spinal segments that also receive somatic input from the chest and arm.",
          layers: [
            { label: "Anatomy", text: "The brain can mislocalise visceral input to somatic regions, producing arm, shoulder, neck, jaw or epigastric discomfort." },
            { label: "Trap", text: "No radiation does not exclude ACS, and left-sided radiation is not mandatory." }
          ],
          citationIds: ["anzcor-14-1"]
        },
        {
          id: "hint-autonomic",
          target: { surface: "run", itemId: "run-associated-answer", quote: "sweaty and slightly sick", occurrence: 1 },
          title: "Autonomic symptoms raise the stakes",
          lead: "Diaphoresis and nausea fit sympathetic and vagal activation during myocardial ischaemia.",
          layers: [
            { label: "Weight", text: "Combined with persistent exertional pressure and radiation, they strengthen the cardiac pattern more than they would alone." },
            { label: "Flex", text: "Older adults and some other groups may present mainly with breathlessness, fatigue, nausea or dizziness rather than chest pain." }
          ],
          citationIds: ["acs-guideline-2025"]
        },
        {
          id: "hint-crescendo",
          target: { surface: "run", itemId: "run-previous-answer", quote: "Twice this week", occurrence: 1 },
          title: "The timeline is evolving",
          lead: "Recent recurrent exertional episodes followed by longer pain at lower effort suggest an unstable, crescendo pattern.",
          layers: [
            { label: "Map", text: "Earlier demand-related episodes may represent transient ischaemia. Today's persistent episode suggests reduced coronary reserve or an acute plaque event." },
            { label: "Trap", text: "Do not let previous spontaneous resolution reassure you about the current episode." }
          ],
          citationIds: ["acs-guideline-2025"]
        },
        {
          id: "hint-dangerous-alternatives",
          target: { surface: "run", itemId: "run-differentials", quote: "Other dangerous causes", occurrence: 1 },
          title: "Rank alternatives by danger and fit",
          lead: "A differential is a live comparison, not a list you recite after the diagnosis.",
          layers: [
            { label: "Dissection", text: "Look for abrupt maximal pain, back radiation, pulse or blood-pressure difference, neurological deficit or aortic regurgitation." },
            { label: "Pulmonary embolism", text: "Look for pleuritic pain, sudden dyspnoea, haemoptysis, hypoxaemia and venous thromboembolism risk." },
            { label: "Pneumothorax", text: "Look for sudden pleuritic pain, unilateral reduced air entry and respiratory compromise." },
            { label: "Update rule", text: "Negative features lower probability but do not create certainty. New findings can reorder the list immediately." }
          ],
          citationIds: ["acs-guideline-2025"]
        },
        {
          id: "hint-antacid",
          target: { surface: "run", itemId: "run-medicines-answer", quote: "antacid", occurrence: 1 },
          title: "Treatment response is not a diagnostic test",
          lead: "No response to antacid does not prove ACS. Relief would not safely exclude it either.",
          layers: [
            { label: "Better question", text: "Ask what happened, then return to the symptom pattern and objective risk assessment." },
            { label: "Transferable rule", text: "Do not confuse a change after treatment with proof of mechanism unless the response is known to be diagnostically specific." }
          ],
          citationIds: ["acs-guideline-2025", "anzcor-14-1"]
        },
        {
          id: "hint-escalation",
          target: { surface: "run", itemId: "run-early-escalation", quote: "ambulance now", occurrence: 1 },
          title: "Act while reasoning continues",
          lead: "The decision is not 'Do I have proof?' It is 'Is delay less safe than transfer?'. Here, the threshold is crossed.",
          layers: [
            { label: "Guideline", text: "Suspected ACS in primary care requires prompt transfer for definitive assessment. If an ECG cannot be obtained within 10 minutes, ambulance transfer to where it can be performed is required." },
            { label: "Local inference", text: "Ambulance is the safest implementation here because symptoms are ongoing and monitoring or immediate treatment may be needed during transfer." }
          ],
          citationIds: ["acs-guideline-2025"]
        },
        {
          id: "hint-indigestion-concern",
          target: { surface: "run", itemId: "run-address-concern", quote: "especially because it followed lunch", occurrence: 1 },
          title: "Validate the logic without validating the conclusion",
          lead: "The patient's idea makes sense from the timing. You can respect that reasoning while explaining why it is not safe enough.",
          layers: [
            { label: "Communication", text: "Use: 'I understand why', then the missing safety fact, then the plan and its purpose." },
            { label: "Examiner logic", text: "Addressing the concern is not a courtesy add-on. It is part of whether the patient can follow urgent management." }
          ],
          citationIds: ["amc-tips-2024"]
        },
        {
          id: "hint-observations",
          target: { surface: "run", itemId: "run-exam-request", quote: "airway, breathing, circulation", occurrence: 1 },
          title: "Examination answers a decision question",
          lead: "The focused examination looks for instability, complications and dangerous alternatives. It does not need to prove ACS.",
          layers: [
            { label: "Positive purpose", text: "Perfusion, shock, heart failure, arrhythmia and respiratory compromise change monitoring, medicines and urgency." },
            { label: "Negative purpose", text: "Equal air entry, no heart failure and equal arm pressures reduce support for some alternatives but never erase the history." }
          ],
          citationIds: ["acs-guideline-2025", "amc-tips-2024"]
        },
        {
          id: "hint-provisional-diagnosis",
          target: { surface: "run", itemId: "run-likely-diagnosis", quote: "I cannot yet tell which type", occurrence: 1 },
          title: "Separate diagnostic precision from safe action",
          lead: "STEMI, NSTEMI and unstable angina require ECG and troponin information you do not yet have. Suspected ACS is precise enough to trigger the safe pathway.",
          layers: [
            { label: "Confidence", text: "You can be confident in the next action while remaining honest about the final label." },
            { label: "Trap", text: "Do not call it reflux because certainty is unavailable, and do not announce a definite heart attack before the evidence supports it." }
          ],
          citationIds: ["acs-guideline-2025"]
        },
        {
          id: "hint-ecg",
          target: { surface: "run", itemId: "run-ecg-plan", quote: "within 10 minutes", occurrence: 1 },
          title: "Fast ECG, zero transfer delay",
          lead: "The ECG is the key first investigation for acute coronary occlusion, but it sits inside the transfer pathway rather than in front of it.",
          layers: [
            { label: "Use it", text: "Acquire and interpret it within 10 minutes when immediately available. Repeat with persistent, changing or recurrent symptoms or uncertainty." },
            { label: "Trap", text: "A non-ischaemic ECG does not exclude ACS. More than 30% of non-ST-elevation ACS presentations may have a normal ECG." }
          ],
          citationIds: ["acs-guideline-2025", "anzcor-14-1"]
        },
        {
          id: "hint-aspirin",
          target: { surface: "run", itemId: "run-aspirin", quote: "aspirin 300 milligrams", occurrence: 1 },
          title: "Aspirin treats the platelet problem",
          lead: "Plaque disruption activates platelets and thrombus formation. Aspirin rapidly reduces thromboxane-mediated platelet activation.",
          layers: [
            { label: "Action", text: "Give 300 mg orally, chewed or dissolved, in suspected or confirmed ACS unless contraindicated." },
            { label: "Safety", text: "Check true anaphylaxis and bleeding risk. If dissection or active bleeding becomes a strong concern, reassess rather than applying aspirin mechanically." }
          ],
          citationIds: ["acs-guideline-2025", "anzcor-14-2"]
        },
        {
          id: "hint-oxygen",
          target: { surface: "run", itemId: "run-oxygen", quote: "not give routine oxygen", occurrence: 1 },
          title: "Oxygen is a drug, not a ritual",
          lead: "Supplemental oxygen has not improved outcomes in uncomplicated suspected ACS without hypoxaemia and excessive oxygen may be harmful.",
          layers: [
            { label: "Current Australian rule", text: "At SpO2 90% or above, routine oxygen is not required. If oxygen is used, avoid SpO2 above 96%. Individualise targets for known carbon-dioxide retention." },
            { label: "Trap", text: "Breathlessness alone does not mandate oxygen when saturation and perfusion are adequate." }
          ],
          citationIds: ["acs-guideline-2025"]
        },
        {
          id: "hint-gtn",
          target: { surface: "run", itemId: "run-gtn", quote: "glyceryl trinitrate", occurrence: 1 },
          title: "GTN is for symptoms, not proof",
          lead: "Venodilation reduces preload and myocardial oxygen demand, which may relieve ischaemic discomfort.",
          layers: [
            { label: "Before giving", text: "Check blood pressure, possible right ventricular infarction and recent sildenafil, vardenafil or tadalafil use." },
            { label: "Flex", text: "Relief does not diagnose ACS because other causes can also improve. No relief does not exclude it." }
          ],
          citationIds: ["acs-guideline-2025", "anzcor-14-2"]
        },
        {
          id: "hint-troponin",
          target: { surface: "run", itemId: "run-no-troponin", quote: "single clinic troponin", occurrence: 1 },
          title: "A single number cannot close an evolving event",
          lead: "Troponin release is time-dependent, and safe rule-out uses assay-specific serial testing inside a validated pathway.",
          layers: [
            { label: "Primary care", text: "Do not use one point-of-care troponin or primary-care risk score to exclude ACS. Transfer when ACS remains possible and troponin is required." },
            { label: "Trap", text: "Do not wait for a clinic blood result while ongoing ischaemia may be causing harm." }
          ],
          citationIds: ["acs-guideline-2025"]
        },
        {
          id: "hint-handover",
          target: { surface: "run", itemId: "run-handover", quote: "For handover", occurrence: 1 },
          title: "Handover preserves the reasoning chain",
          lead: "A good handover tells the next team what is happening, why you are worried, what has changed and what has already been done.",
          layers: [
            { label: "Minimum set", text: "Identity, onset and current symptoms, key positives and negatives, observations, ECG and time, medicines and doses, contraindications, response and deterioration." },
            { label: "Examiner logic", text: "Management is not complete at 'refer'. Show how care remains safe during transfer and transition." }
          ],
          citationIds: ["acs-guideline-2025", "amc-tips-2024"]
        }
      ]
    }
  ];

  var journey = {
    "hint-setting": {
      journeyPoint: "Reading map · start with the room",
      popUp: "GP clinic. Am I expected to solve everything here?",
      pal: "Start with the setting, not the diagnosis. A clinic can recognise danger, begin safe care and arrange transfer. It cannot provide serial troponins or definitive cardiac treatment.",
      flow: ["Setting tells you your limits", "Limits shape the safe plan", "They do not tell you the diagnosis"],
      hold: "You are in a clinic. Keep asking: safe to stay here, or safer to transfer?",
      next: "Now meet the person and let age adjust probability, not decide the answer.",
      clock: "First 30 seconds: role, setting, person, danger."
    },
    "hint-age": {
      journeyPoint: "Reading map · open the first system lane",
      popUp: "Sixty-year-old man plus chest discomfort. Is this already the heart?",
      pal: "That link is useful, but it is not a diagnosis. Age raises the starting chance of coronary disease. It earns the heart and circulation first place in your map, while the lungs, aorta, gut and chest wall stay open.",
      flow: ["Age raises the starting chance", "The symptom pattern adds or removes weight", "Action follows the whole pattern"],
      hold: "Heart and circulation move to the front. Nothing has been proven.",
      next: "Look at the urgency and the exact symptom word before naming anything.",
      confidence: "You are not jumping to a diagnosis. You are choosing where to look first."
    },
    "hint-urgent-booking": {
      journeyPoint: "Reading map · choose the tempo",
      popUp: "The booking says urgent. Should I panic or rush every question?",
      pal: "Neither. Urgent changes your speed, not your accuracy. Check early whether the patient is unstable, then take the shortest route to the clues that change safety.",
      hold: "Move quickly toward danger sorting, but keep the map open.",
      next: "What does the patient mean by chest discomfort?",
      clock: "Still in the first 30 seconds: notice urgency, then keep reading."
    },
    "hint-discomfort": {
      journeyPoint: "Reading map · build the problem map",
      popUp: "They said discomfort, not pain. Is it less serious? Which system leads?",
      pal: "A heart problem may feel like pressure, heaviness, tightness, burning or indigestion. The softer word does not make the process safer. With this age, start with heart and circulation, then hold the aorta and lungs as dangerous alternatives. Digestion and chest wall causes remain possible.",
      flow: ["Possible poor heart-muscle blood flow", "Possible aortic or lung danger", "Possible gut or chest wall cause"],
      hold: "Priority is not certainty: heart/circulation first, dangerous chest causes beside it, common causes still open.",
      next: "Now add the meal link without letting it erase this map.",
      clock: "Next 30 seconds: build one map, not one diagnosis."
    },
    "hint-after-lunch": {
      journeyPoint: "Reading map · add without replacing",
      popUp: "After lunch sounds like reflux. Am I overcalling the heart?",
      pal: "Good question. Put reflux into the map because the timing supports it. But a time link is not a cause. Do not delete the safer first lane until onset, activity, quality, duration, radiation and body-warning symptoms tell you how much weight the meal deserves.",
      flow: ["Meal link adds digestion", "It does not cancel heart or vascular danger", "Later clues decide which lane gains weight"],
      hold: "Two live ideas: a dangerous chest process and a digestive explanation. The history will separate them.",
      next: "Read the tasks. They tell you exactly how you are allowed to separate them.",
      confidence: "Holding two explanations is not confusion. It is controlled uncertainty."
    },
    "hint-missing-start-data": {
      journeyPoint: "Reading map · do not invent the missing pieces",
      popUp: "No observations or tests. Should I assume the patient is stable?",
      pal: "No. Missing information means you must obtain it when the task allows. Do not imagine normal findings, and do not imagine collapse. Carry the uncertainty into your first safety check.",
      hold: "Current stability is unknown. Ask, observe and request findings.",
      next: "Lock the three task verbs before the run begins."
    },
    "hint-focused-history": {
      journeyPoint: "Task lock · lane 1",
      popUp: "Focused history sounds vague. What do I ask, and what can I leave out?",
      pal: "Focused means every question helps one of three decisions: what pattern is this, is there immediate danger, and what changes safe treatment. It is not a rushed full history and not a memorised chest-pain list.",
      flow: ["Open story", "Define the pattern", "Test dangerous alternatives", "Risk and medicine safety"],
      hold: "Task 1: build and test the chest-discomfort pattern.",
      next: "After each answer, ask the question that most changes the map.",
      clock: "Run 0-4 minutes. Safety can interrupt. Act, then return to the history lane.",
      confidence: "You do not need every possible question. You need the questions that change the decision."
    },
    "hint-most-likely": {
      journeyPoint: "Task lock · lane 2",
      popUp: "Do I list every diagnosis, or do I commit to one? What if I am wrong?",
      pal: "Give one leading diagnosis and say why it fits this person. Then name the important dangerous alternatives and why they fit less well. Provisional does not mean vague. It means your view can change when the evidence changes.",
      flow: ["One leading diagnosis", "Because of this pattern", "Dangerous alternatives", "What would change my mind"],
      hold: "Task 2: explain one lead plus a short, ranked differential.",
      next: "Keep diagnosis explanation separate from the management plan.",
      clock: "Run 4-6 minutes. Explain clearly; do not recite a textbook list."
    },
    "hint-concerns": {
      journeyPoint: "Task lock · lane 3",
      popUp: "The patient thinks it is indigestion. If I explain management, will I forget the concern?",
      pal: "Treat the concern as part of the clinical problem. First show that you heard the meal link. Then explain why it is not safe enough to rely on. Finally connect the urgent plan to the patient's wish to stay safe.",
      flow: ["Hear the concern", "Answer the exact worry", "Connect it to the plan"],
      hold: "Task 3 has two jobs: answer the concern and explain what happens now.",
      next: "Management must include the clinic, the wait, the transfer and the hospital.",
      clock: "Run 6-8 minutes. Concern first, then the plan, then check understanding."
    },
    "hint-immediate-management": {
      journeyPoint: "Task lock · know the output",
      popUp: "Does a management plan mean I only say 'send to hospital'?",
      pal: "No. Referral is one decision, not the whole plan. Show what you do now, what you monitor while waiting, what treatment is safe, how the patient travels, and what the receiving team needs.",
      flow: ["Act now", "Monitor and treat", "Transfer safely", "Hand over clearly"],
      hold: "Your full task anchor: History 0-4 → Explain 4-6 → Concern and management 6-8.",
      next: "When the conversation pulls you away, silently return to the next unfinished verb.",
      confidence: "The clock is a compass, not a cage. Danger always gets priority."
    },
    "hint-opening-story": {
      journeyPoint: "Run · the map begins to move",
      popUp: "It happened after lunch, but also while walking. Which link should I believe?",
      pal: "Keep both, then weigh them. Walking raises the heart's oxygen demand. If a coronary artery cannot increase flow, symptoms can appear. Lunch keeps reflux alive, but it no longer owns the story.",
      flow: ["Walking raises demand", "Limited coronary flow may not keep up", "Pressure appears"],
      hold: "Cardiac weight rises. Reflux stays open but moves behind it.",
      next: "Ask whether the pressure is still present. Persistence changes urgency."
    },
    "hint-heavy-pressure": {
      journeyPoint: "Run · translate the patient's word",
      popUp: "Heavy pressure sounds cardiac. Can I lock the diagnosis now?",
      pal: "Not yet. Deep organs often produce broad pressure rather than a pinpoint pain. That supports a heart source, but quality alone never proves it.",
      flow: ["Pressure supports a deep visceral source", "Sharp breathing pain points more toward pleura", "Abrupt tearing pain raises the aorta"],
      hold: "The pattern is becoming cardiac, but each clue is a weight, not a gate.",
      next: "Location, radiation, body-warning symptoms and time course will strengthen or weaken it."
    },
    "hint-ongoing": {
      journeyPoint: "Run · safety interrupts the history lane",
      popUp: "The pressure is still there. Do I have to finish my 4-minute history before acting?",
      pal: "No. Ongoing possible ischaemia may still be harming heart muscle. Call for help early and continue the focused history in parallel. The examiner is watching whether you can protect the patient while still reasoning.",
      hold: "The action threshold may be crossed before the diagnostic label is complete.",
      next: "Keep asking only the questions that change danger, differential or medicine safety.",
      clock: "History lane continues, but safety has priority. Act → return → continue."
    },
    "hint-radiation": {
      journeyPoint: "Run · connect anatomy to the symptom",
      popUp: "Why does heart pain reach the left arm or jaw? Why does PE or dissection usually feel different?",
      pal: "The heart sends danger signals through nerve pathways that meet other body signals in the spinal cord and brainstem. The brain can misread the source and feel the alarm in the chest, arm, shoulder, neck or jaw. The left arm is common, not compulsory.",
      flow: ["Heart-muscle chemical alarm", "Shared nerve processing", "Brain places pain in arm, neck or jaw"],
      hold: "Cardiac referral strengthens this pattern. Its absence would not exclude it.",
      next: "PE pain is often from irritated pleura and is sharp with breathing. Dissection pain comes from the aortic wall and often shoots to the back. Either can vary, so never use radiation as an absolute rule.",
      confidence: "You now know why the pattern helps and why it cannot become a shortcut."
    },
    "hint-autonomic": {
      journeyPoint: "Run · connect the body's alarm system",
      popUp: "Why sweating and nausea? Is nausea from an inferior-wall infarct touching the diaphragm?",
      pal: "Ischaemic heart muscle releases a chemical danger signal. The brain and autonomic nerves respond as if the body is under threat. Sympathetic output helps produce pale, clammy sweating. Autonomic and vagal pathways can activate nausea and vomiting centres.",
      flow: ["Heart muscle lacks oxygen", "Chemical and nerve alarm", "Autonomic response", "Sweating, nausea, breathlessness"],
      hold: "These symptoms join the pressure, exertion and radiation into one stronger cardiac pattern.",
      next: "Inferior infarction is often taught as more vagal, but nausea does not reliably locate the infarct. It is not simply 'the heart touches the diaphragm'. Use nausea to raise concern, not to name the wall.",
      confidence: "The mechanism helps you remember the cluster without turning it into a rigid rule."
    },
    "hint-crescendo": {
      journeyPoint: "Run · read the timeline as one story",
      popUp: "The earlier episodes stopped. Is that reassuring?",
      pal: "The change is the clue. Brief exertional pressure earlier, followed by a longer episode that persists, suggests the system is becoming less stable. Improvement before today does not protect him now.",
      flow: ["Earlier demand-related episodes", "Now longer and persistent", "Risk is rising, not resetting"],
      hold: "This is an evolving pattern, not three unrelated events.",
      next: "Test the dangerous alternatives, then gather risk and medicine-safety details."
    },
    "hint-dissection-question": {
      journeyPoint: "Run · ask a question with a purpose",
      popUp: "Why ask about instant maximum pain and the back?",
      pal: "You are testing aortic dissection because missing it is dangerous and aspirin could be harmful if it becomes the leading concern. Abrupt maximal pain, back movement, pulse or blood-pressure differences, neurological signs or a new aortic murmur would raise its weight.",
      hold: "Dissection stays on the danger list, but this gradual pressure pattern gives it less weight.",
      next: "Now test lung clot and pneumothorax with equally targeted questions."
    },
    "hint-risk-factors": {
      journeyPoint: "Run · use risk without being trapped by it",
      popUp: "High blood pressure and cholesterol. Does that confirm the heart diagnosis?",
      pal: "They increase the background chance of coronary disease. They do not diagnose today's symptom, and their absence would not make a dangerous pattern safe.",
      flow: ["Risk factors set the background", "Current symptoms set today's urgency", "Both combine into probability"],
      hold: "Risk factors strengthen the map you already built; they did not create it.",
      next: "Check medicines, aspirin safety and nitrate safety because those facts change treatment."
    },
    "hint-antacid": {
      journeyPoint: "Run · do not turn response into proof",
      popUp: "The antacid did not work. Does that prove it is cardiac?",
      pal: "No. A treatment response is only useful when it is specific enough to separate causes. Antacid failure does not prove a heart cause, and relief would not safely exclude one.",
      hold: "Return to the whole pattern: exertional, persistent pressure with radiation and autonomic symptoms.",
      next: "Use the medicine history for safety, not as a shortcut to diagnosis."
    },
    "hint-escalation": {
      journeyPoint: "Run · act before certainty",
      popUp: "I have not finished the history. Will calling an ambulance now make me look premature?",
      pal: "No. The safe question is not 'Have I proved it?' It is 'Could delay cause more harm than transfer?'. Ongoing high-risk symptoms in a clinic cross that threshold.",
      flow: ["Recognise enough danger", "Call early", "Continue reasoning in parallel"],
      hold: "You can be uncertain about the final diagnosis and certain about the safest next action.",
      next: "After acting, return to the task lane. Do not let the emergency call erase the remaining history.",
      clock: "Safety interruption complete. Return to the history lane until the 4-minute transition."
    },
    "hint-time-prompt": {
      journeyPoint: "Run · recover at the task boundary",
      popUp: "The examiner says four minutes. My mind has gone blank. What now?",
      pal: "Do not replay what you may have missed. Breathe out once and find the next task verb: explain. Give one leading diagnosis, why it fits, then the important dangerous alternatives.",
      flow: ["Hear the prompt", "Release the previous lane", "Find the next verb", "Speak the first clear sentence"],
      hold: "History is complete enough to move. The current job is explanation.",
      next: "Start with: 'My leading diagnosis is… because…'",
      clock: "4:00. Move to diagnosis and differentials. This is recovery, not failure.",
      confidence: "A clean transition protects more marks than mentally chasing one missed question."
    },
    "hint-observations": {
      journeyPoint: "Run · ask what the examination changes",
      popUp: "Why this focused examination instead of a complete examination?",
      pal: "You are looking for instability, complications and clues that reorder the dangerous alternatives. Airway, breathing, circulation and perfusion decide immediate safety. Heart, lungs, both-arm pressure and calves help test heart failure, dissection, pneumothorax and PE.",
      hold: "The examination answers a decision question; it does not need to prove the diagnosis.",
      next: "Interpret normal findings as 'stable now', not 'safe to stay'."
    },
    "hint-stable-findings": {
      journeyPoint: "Run · do not let normal numbers erase the story",
      popUp: "Blood pressure and oxygen look okay. Can I slow down or cancel transfer?",
      pal: "No. These findings say he is not in shock, hypoxaemic or in obvious heart failure right now. They do not explain away 35 minutes of high-risk symptoms.",
      flow: ["Stable observations now", "Serious disease still possible", "Continue urgent pathway"],
      hold: "Stable is a current state, not a diagnosis and not a safety guarantee.",
      next: "Use the stability to choose safe treatment while transfer continues."
    },
    "hint-provisional-diagnosis": {
      journeyPoint: "Run · commit without pretending certainty",
      popUp: "Do I need to say heart attack, unstable angina or something else?",
      pal: "At this point, acute coronary syndrome is the right working family. The ECG and serial troponins are still needed to define the type. Name what you know, name what you do not know, and show that the uncertainty does not delay safety.",
      hold: "Confident action and honest uncertainty can exist together.",
      next: "Explain why this pattern leads, then compare only the important alternatives."
    },
    "hint-dangerous-alternatives": {
      journeyPoint: "Run · keep the differential short and alive",
      popUp: "How many differentials do I need? My mind can produce ten.",
      pal: "Do not unload the whole list. Use the alternatives that are dangerous or genuinely fit this patient. For each one, give the clue that would raise it and the current clue that lowers it.",
      flow: ["Aorta: abrupt maximal pain or unequal findings", "PE: pleuritic pain, sudden dyspnoea or clot risk", "Pneumothorax: sudden pleuritic pain and unequal air entry"],
      hold: "The differential is a ranked comparison, not a memory performance.",
      next: "Mention reflux and chest wall pain only after showing that danger comes first."
    },
    "hint-indigestion-concern": {
      journeyPoint: "Run · join the patient's map to yours",
      popUp: "If I say the indigestion idea makes sense, am I agreeing that it is reflux?",
      pal: "No. You are validating how the patient reached the idea, not confirming the conclusion. This lowers resistance and lets you explain the missing safety information.",
      flow: ["I understand why", "Here is what the meal link cannot exclude", "Here is why the ambulance is safer"],
      hold: "Respect the patient's reasoning while keeping the clinical threshold firm.",
      next: "Answer the private-car question with the benefit of monitored transfer, not with authority alone."
    },
    "hint-ecg": {
      journeyPoint: "Run · place the test inside the pathway",
      popUp: "Should I wait for the ECG before transfer? What if the first ECG is normal?",
      pal: "Get and interpret it within 10 minutes when immediately available, but do not put it in front of the ambulance. A normal first ECG cannot close the case because non-ST-elevation ACS may have no early ECG change.",
      flow: ["Call transfer", "ECG without delay", "Repeat if symptoms persist or change"],
      hold: "The ECG updates the map. It does not control whether you protect the patient.",
      next: "Read the result for what it adds, not for a label it cannot yet prove."
    },
    "hint-ecg-result": {
      journeyPoint: "Run · let new evidence update the map",
      popUp: "ST depression. Does this mean NSTEMI is confirmed?",
      pal: "It means myocardial ischaemia is more likely and the concern rises. It does not by itself separate NSTEMI from unstable angina because that needs troponin, and it does not tell you the full coronary anatomy.",
      flow: ["High-risk symptom pattern", "Ischaemic ECG change", "Urgency and monitoring increase"],
      hold: "The cardiac lane is now strongly supported. The final subtype remains open.",
      next: "Monitor continuously, keep the defibrillator available and continue safe initial treatment."
    },
    "hint-aspirin": {
      journeyPoint: "Run · connect treatment to the mechanism",
      popUp: "Why aspirin now, and why check dissection and bleeding first?",
      pal: "An unstable coronary plaque can activate platelets, which build a clot and reduce blood flow. Aspirin slows that platelet process. It helps when ACS is suspected, but the same anti-platelet effect can worsen bleeding, so contraindications and a strong dissection concern matter.",
      flow: ["Plaque disruption", "Platelets gather", "Clot grows", "Aspirin reduces platelet activation"],
      hold: "Give 300 mg chewed or dissolved when ACS is suspected and no contraindication is present.",
      next: "Record the dose and time, then keep following the monitored transfer plan."
    },
    "hint-oxygen": {
      journeyPoint: "Run · remove an old ritual",
      popUp: "Chest pain means oxygen, right? He is short of breath.",
      pal: "Oxygen treats low oxygen, not the feeling of fear or the label 'chest pain'. His saturation is 96%, so routine oxygen adds no proven benefit and too much oxygen may cause harm.",
      flow: ["Measure saturation", "Treat hypoxaemia when present", "Avoid unnecessary excess oxygen"],
      hold: "At 90% or above, routine oxygen is not required in suspected ACS. Keep monitoring.",
      next: "If the saturation falls or shock or heart failure appears, reassess immediately."
    },
    "hint-gtn": {
      journeyPoint: "Run · treat symptoms without using them as a test",
      popUp: "If GTN relieves the pain, does that prove it is cardiac?",
      pal: "No. GTN widens veins, reduces the load returning to the heart and may ease ischaemic discomfort. Other pain can also improve. Relief helps the patient, not the diagnosis.",
      flow: ["Check blood pressure", "Exclude right-ventricular infarction concern", "Check recent erectile-dysfunction medicines", "Give for ongoing pain if safe"],
      hold: "GTN is symptom treatment, not a diagnostic challenge test.",
      next: "Keep the transfer moving even if the pain improves."
    },
    "hint-troponin": {
      journeyPoint: "Run · do not let one number create false safety",
      popUp: "Can one clinic troponin settle this and avoid hospital?",
      pal: "No. Troponin enters the blood over time. An early single result may be normal while injury is evolving. Safe rule-out uses assay-specific serial testing inside a validated pathway.",
      flow: ["Symptoms begin", "Troponin may still be low", "Serial measurements show the change"],
      hold: "Do not delay transfer for one clinic result or use a primary-care score to close the case.",
      next: "Explain that hospital testing is needed because the process changes with time."
    },
    "hint-teach-back": {
      journeyPoint: "Run · check that your explanation landed",
      popUp: "I already explained everything. Why ask the patient to repeat it?",
      pal: "Because a clear explanation in your head may not be clear under fear. Teach-back checks your communication, not the patient's intelligence. It also reveals the exact misunderstanding you need to fix before transfer.",
      hold: "The patient should understand the concern, the uncertainty and why ambulance transfer is needed.",
      next: "Correct one gap if needed, then hand over the reasoning chain."
    },
    "hint-handover": {
      journeyPoint: "Run · carry the map into the next team",
      popUp: "What belongs in handover when time is nearly over?",
      pal: "Give the receiving team the story that controls risk: identity, onset and current symptoms, key positives and negatives, observations, ECG and time, treatments, contraindications and any change.",
      flow: ["What happened", "Why I am worried", "What I found", "What I did", "What still needs watching"],
      hold: "Management is not complete at 'refer'. Safe care continues through transfer.",
      next: "Finish with current stability and the next required action."
    },
    "hint-finish": {
      journeyPoint: "Between stations · release and restart",
      popUp: "The station ended, but I am replaying missed questions. What if I failed it?",
      pal: "The station is closed. Do not spend the next reading time marking yourself. One slow breath out, release this case, then rebuild from the next role, setting, stem and task verbs.",
      flow: ["Stop when told", "Release the old map", "Read the new evidence", "Lock the new tasks"],
      hold: "A similar age or symptom in the next station does not mean the same diagnosis.",
      next: "New station, new map. Let the actual stem lead you.",
      confidence: "Recovery between stations is an exam skill, not an afterthought."
    }
  };

  var extraHints = [
    {
      id: "hint-setting",
      target: { surface: "stem", itemId: "stem-role", quote: "general practitioner", occurrence: 1 },
      citationIds: ["amc-spec-2026", "acs-guideline-2025"]
    },
    {
      id: "hint-missing-start-data",
      target: { surface: "stem", itemId: "stem-start", quote: "No observations or investigation results", occurrence: 1 },
      citationIds: ["amc-tips-2024"]
    },
    {
      id: "hint-immediate-management",
      target: { surface: "stem", itemId: "task-management", quote: "management plan", occurrence: 1 },
      citationIds: ["amc-spec-2026", "amc-tips-2024"]
    },
    {
      id: "hint-dissection-question",
      target: { surface: "run", itemId: "run-dissection", quote: "maximum intensity instantly", occurrence: 1 },
      citationIds: ["acs-guideline-2025"]
    },
    {
      id: "hint-risk-factors",
      target: { surface: "run", itemId: "run-history-answer", quote: "High blood pressure and high cholesterol", occurrence: 1 },
      citationIds: ["acs-guideline-2025"]
    },
    {
      id: "hint-time-prompt",
      target: { surface: "run", itemId: "run-time-prompt", quote: "Four minutes have elapsed", occurrence: 1 },
      citationIds: ["amc-spec-2026", "amc-tips-2024"]
    },
    {
      id: "hint-stable-findings",
      target: { surface: "run", itemId: "run-exam-findings", quote: "blood pressure is 148/88 mmHg", occurrence: 1 },
      citationIds: ["acs-guideline-2025"]
    },
    {
      id: "hint-ecg-result",
      target: { surface: "run", itemId: "run-ecg-result", quote: "ST-segment depression", occurrence: 1 },
      citationIds: ["acs-guideline-2025", "anzcor-14-1"]
    },
    {
      id: "hint-teach-back",
      target: { surface: "run", itemId: "run-understanding", quote: "what you understand", occurrence: 1 },
      citationIds: ["amc-tips-2024"]
    },
    {
      id: "hint-finish",
      target: { surface: "run", itemId: "run-end", quote: "station is complete", occurrence: 1 },
      citationIds: ["amc-tips-2024"]
    }
  ];

  var caseOne = window.AMC_CASES[0];
  caseOne.hints = caseOne.hints.concat(extraHints).map(function (hint) {
    var content = journey[hint.id];
    if (!content) return hint;
    return {
      id: hint.id,
      target: hint.target,
      citationIds: hint.citationIds,
      journeyPoint: content.journeyPoint,
      popUp: content.popUp,
      pal: content.pal,
      flow: content.flow || [],
      hold: content.hold,
      next: content.next,
      clock: content.clock || "",
      confidence: content.confidence || ""
    };
  });

  var naturalVoice = {
    "hint-setting": {
      where: "Reading the stem",
      popUp: "GP clinic. Am I supposed to sort all of this out here?",
      say: [
        "In a GP clinic, I would assess him, recognise any immediate risk, begin treatment that is safe here and arrange transfer if needed.",
        "A full cardiac work-up, including serial blood tests, needs to happen in hospital."
      ],
      pause: "This clinic cannot complete the whole assessment.",
      recap: "The immediate job is to assess stability, identify serious causes and decide whether he needs hospital transfer.",
      reorient: "Use his age and symptom to decide which causes need attention first."
    },
    "hint-age": {
      where: "Reading the stem",
      popUp: "Sixty, with chest discomfort. Is this already the heart?",
      say: [
        "At 60, I would consider a heart-related cause early.",
        "Age makes coronary disease more likely, but age alone cannot explain today's discomfort. We still need the details of the symptom."
      ],
      pause: "Consider the heart early, but do not decide yet.",
      recap: "A heart-related cause needs early attention. I would also consider aortic dissection, pulmonary embolism, reflux and chest wall pain.",
      reorient: "Clarify what he means by chest discomfort and whether it is present now."
    },
    "hint-urgent-booking": {
      where: "Reading the stem",
      popUp: "He has attended today. Does that tell me how unwell he is?",
      say: [
        "No. The booking itself does not tell me the severity or the cause.",
        "I would look at him, ask whether the discomfort is present now and obtain his observations when the task allows."
      ],
      pause: "Do not add urgency or reassurance that the stem has not provided.",
      recap: "He has chest discomfort. Its cause, pattern and current severity are still unknown.",
      reorient: "Clarify exactly what he means by chest discomfort."
    },
    "hint-discomfort": {
      where: "Reading the stem",
      popUp: "He said discomfort, not pain. Is that less worrying?",
      say: [
        "No. A heart-related symptom may be described as pressure, heaviness, tightness, burning or indigestion rather than pain.",
        "I would also consider the aorta and lungs because those causes can be serious. Reflux and chest wall pain are possible, but less urgent."
      ],
      pause: "The word discomfort does not make this low risk.",
      recap: "First consider serious cardiac, aortic and pulmonary causes. Reflux and chest wall pain can be assessed as the history develops.",
      reorient: "Decide how much the timing after lunch changes those possibilities."
    },
    "hint-after-lunch": {
      where: "Reading the stem",
      popUp: "Ah, lunch. Reflux?",
      say: [
        "Reflux is possible because the symptom followed a meal.",
        "Meal timing alone cannot distinguish reflux from a cardiac cause. I would still ask about activity, the exact sensation, duration, radiation and associated symptoms."
      ],
      pause: "Ask about reflux, but continue checking for serious cardiac, aortic and pulmonary causes.",
      recap: "I am considering a heart-related cause, aortic dissection, pulmonary embolism, reflux and chest wall pain.",
      reorient: "Read the tasks and decide what the examiner wants you to do with these possibilities."
    },
    "hint-missing-start-data": {
      where: "Reading the stem",
      popUp: "No observations or tests. Do I assume he looks okay?",
      say: [
        "No. We have not been given his observations, so his current stability is unknown.",
        "I cannot judge his stability until I see him and check his observations."
      ],
      pause: "Do not add findings that are not in the stem.",
      recap: "The symptom may be serious, and his current observations are not yet known.",
      reorient: "Identify the exact tasks before the station begins."
    },
    "hint-focused-history": {
      where: "Reading task 1: focused history",
      popUp: "Focused history. Where do I start, and what can I leave out?",
      say: [
        "Start by letting him describe what happened. Then clarify onset, activity, sensation, site, radiation, duration and associated symptoms.",
        "Ask directly about sudden severe pain to the back, pleuritic pain, sudden breathlessness and clot risk. Then check coronary risk factors, medicines and whether aspirin or GTN could be unsafe."
      ],
      logic: ["Patient's account", "Symptom details", "Dangerous alternatives", "Risks and treatment safety"],
      pause: "Keep the questions that help you judge the cause, the urgency or treatment safety.",
      recap: "Task one is a focused chest-discomfort history, not a complete medical history.",
      reorient: "During the consultation, choose the next question from the answer you have just heard.",
      clock: "Use about 4 minutes. If he appears unstable, call for help and then return to the unfinished history."
    },
    "hint-most-likely": {
      where: "Reading task 2: explain the diagnosis",
      popUp: "Do they want one diagnosis or a whole list?",
      say: [
        "Give one most likely diagnosis and explain which findings support it.",
        "Then discuss the important alternatives. For each one, mention the finding that makes it more or less likely here."
      ],
      pause: "You may not know the exact subtype yet. Still say clearly what you think is happening.",
      recap: "Task two is the most likely diagnosis, the supporting evidence and a short relevant differential.",
      reorient: "Finish the diagnostic explanation before moving to management.",
      clock: "Use about 2 minutes, from minute 4 to minute 6."
    },
    "hint-concerns": {
      where: "Reading task 3: concerns and management",
      popUp: "Concerns and management are together. Easy to forget one.",
      say: [
        "There are two parts here. First respond to his concern about indigestion. Then explain the management plan.",
        "Acknowledge why indigestion occurred to him, then explain why the history still requires urgent assessment."
      ],
      pause: "Answer his concern before giving the plan.",
      recap: "Task three requires both a response to his concern and a management plan.",
      reorient: "After explaining the plan, check what he has understood.",
      clock: "Use the final 2 minutes for his concern, management and understanding."
    },
    "hint-immediate-management": {
      where: "Reading task 3: management plan",
      popUp: "Is saying ambulance enough for management?",
      say: [
        "No. Transfer is only one part of the plan.",
        "Include what you would do immediately, what you would monitor while waiting, which treatments are appropriate, how he should travel and what you would hand over."
      ],
      pause: "State what you will do in the clinic, while waiting for the ambulance and during handover.",
      recap: "The station order is: focused history, diagnostic explanation, patient concern, then management.",
      reorient: "If you lose your place, return to the next part of the task that you have not completed.",
      clock: "History to minute 4. Explanation to minute 6. Concern and management to minute 8."
    },
    "hint-opening-story": {
      where: "Clarifying what triggered the symptom",
      popUp: "Did walking cause it, or was it the meal?",
      say: [
        "The timing alone cannot decide the cause.",
        "Walking makes the heart work harder. If a coronary artery is narrowed, blood flow may not increase enough and discomfort can begin. Eating makes reflux possible, so I would clarify the other features before deciding."
      ],
      logic: ["Walking", "Heart works harder", "Blood flow may not keep up", "Symptoms may begin"],
      pause: "Exertion supports a heart cause. The meal supports reflux. Neither finding is diagnostic by itself.",
      recap: "A heart cause is more concerning because the symptom began with exertion. Reflux remains possible.",
      reorient: "Ask whether the pressure is still present and how long it has lasted."
    },
    "hint-heavy-pressure": {
      where: "Interpreting heavy pressure",
      popUp: "Heavy pressure sounds cardiac. Is that enough to decide?",
      say: [
        "Heavy pressure supports a heart-related cause, but it is not enough to diagnose one.",
        "Sharp pain that worsens with breathing suggests pleural irritation. Pain that is severe from the start and radiates to the back raises concern about the aorta."
      ],
      pause: "Heavy pressure matters more when it occurs with exertion, radiation, sweating or nausea.",
      recap: "Heavy pressure makes cardiac ischaemia more likely. Dissection, pulmonary embolism, reflux and chest wall pain still need to be checked.",
      reorient: "Clarify the site, radiation, duration and associated symptoms."
    },
    "hint-ongoing": {
      where: "Responding to ongoing discomfort",
      popUp: "It is still there. Must I finish the history before I act?",
      say: [
        "No. Persistent high-risk chest discomfort requires action before the history is complete.",
        "Call for help and arrange urgent transfer. While help is coming, continue only the history that affects immediate risk or treatment."
      ],
      pause: "Arrange help now, then return to the focused history.",
      recap: "The diagnosis is not complete, but waiting to finish the history could be unsafe.",
      reorient: "Ask the remaining questions about immediate risk, dangerous alternatives and treatment contraindications.",
      clock: "The history task continues while help is on the way."
    },
    "hint-radiation": {
      where: "Understanding arm and jaw radiation",
      popUp: "Why the left arm and jaw? Why do PE and dissection usually feel different?",
      say: [
        "Heart and arm pain signals enter overlapping areas of the spinal cord. The brain may therefore feel cardiac pain in the arm. Connections higher in the nervous system help explain pain felt in the neck or jaw.",
        "A pulmonary embolus often causes pleural irritation, so the pain may be sharp and worse on breathing. Aortic dissection causes pain from the aortic wall and often radiates to the back. These are usual patterns, not absolute rules."
      ],
      logic: ["Heart pain signal", "Shared spinal entry", "Pain felt in the arm, neck or jaw"],
      pause: "Arm or jaw radiation supports a heart cause, but its absence would not exclude one.",
      recap: "His radiation makes a heart-related cause more likely. The rest of the history still matters.",
      reorient: "Ask about sweating, nausea and breathlessness."
    },
    "hint-autonomic": {
      where: "Explaining sweating and nausea",
      popUp: "Why sweaty and sick? Inferior wall because it sits near the diaphragm?",
      say: [
        "When heart muscle is short of blood, it releases chemicals that activate autonomic pathways. Sympathetic activation contributes to pallor and sweating. Vagal and brainstem pathways contribute to nausea and vomiting.",
        "Nausea is associated with inferior infarction, but it also occurs with infarction in other locations. It cannot identify which wall is affected, and it is not explained simply by the heart lying near the diaphragm."
      ],
      logic: ["Reduced heart-muscle blood flow", "Chemical signals", "Autonomic response", "Sweating and nausea"],
      pause: "Nausea supports cardiac ischaemia, but it cannot tell you which wall is affected.",
      recap: "Exertional pressure with arm and jaw radiation, sweating and nausea supports reduced blood flow to the heart.",
      reorient: "Ask whether the episodes have changed over the last few days."
    },
    "hint-crescendo": {
      where: "Comparing earlier and current episodes",
      popUp: "The earlier episodes went away. Is that reassuring?",
      say: [
        "Not in this history.",
        "Earlier episodes were brief and occurred with exertion. Today's episode is longer and has not settled. That progression increases the concern."
      ],
      logic: ["Brief episodes", "Now longer", "Now persistent"],
      pause: "Compare today's episode with the earlier episodes.",
      recap: "The episodes are becoming more prolonged and now persist at rest. This is concerning for worsening myocardial ischaemia.",
      reorient: "Ask directly about aortic dissection, pulmonary embolism and pneumothorax before giving treatment."
    },
    "hint-dissection-question": {
      where: "Checking for aortic dissection",
      popUp: "Why ask whether it was instantly severe and went to the back?",
      say: [
        "Pain that is severe from the start and radiates to the back would increase concern about aortic dissection.",
        "That question matters before aspirin because antiplatelet treatment could worsen bleeding if dissection is present."
      ],
      pause: "The answer changes how likely dissection is and whether aspirin is safe.",
      recap: "Aortic dissection is less likely because the pressure developed gradually and did not radiate to the back.",
      reorient: "Ask about pleuritic pain, sudden breathlessness, clot risk and features of pneumothorax."
    },
    "hint-risk-factors": {
      where: "Checking coronary risk factors",
      popUp: "High blood pressure and cholesterol. Does that confirm the heart?",
      say: [
        "No. Hypertension and high cholesterol increase the likelihood of coronary disease, but they do not diagnose today's problem.",
        "The character and progression of today's symptoms determine the immediate concern. A serious cardiac event can also occur without recognised risk factors."
      ],
      pause: "Risk factors make coronary disease more likely, but today's symptoms determine the urgency.",
      recap: "His age, hypertension and high cholesterol make coronary disease more likely in this presentation.",
      reorient: "Check his medicines and contraindications to aspirin and nitrates."
    },
    "hint-antacid": {
      where: "Interpreting the antacid response",
      popUp: "The antacid did nothing. Does that prove it is the heart?",
      say: [
        "No. Antacid failure does not prove a heart cause. Relief would not safely exclude one either.",
        "Response to an antacid does not reliably distinguish reflux from cardiac ischaemia."
      ],
      pause: "Do not use the antacid response to confirm or exclude a cardiac cause.",
      recap: "The diagnosis still depends on the full history, examination, ECG and troponin results.",
      reorient: "Complete the medicine-safety questions, then move to the explanation when prompted."
    },
    "hint-escalation": {
      where: "Deciding on ambulance transfer",
      popUp: "I have not finished. Will calling the ambulance look premature?",
      say: [
        "No. The diagnosis is not confirmed, but keeping him in the clinic while you complete the assessment could be unsafe.",
        "Ongoing pressure with radiation, sweating and nausea is enough to arrange monitored ambulance transfer now. Continue the essential history while waiting."
      ],
      pause: "You can act before the exact diagnosis is known.",
      recap: "He requires urgent monitored transfer because a serious cardiac cause is likely and symptoms are ongoing.",
      reorient: "While waiting, complete only the history questions that affect immediate care.",
      clock: "Transfer has been arranged. Continue the remaining focused history."
    },
    "hint-time-prompt": {
      where: "Moving to the diagnosis explanation",
      popUp: "Four minutes. I still have history questions. What now?",
      say: [
        "History time has ended. Leave any missed question and start the explanation now.",
        "Begin with: 'My most likely diagnosis is…' Then state the findings that support it and the important alternatives."
      ],
      pause: "Stop taking the history and change tasks.",
      recap: "You have enough information to explain the most likely diagnosis.",
      reorient: "State the diagnosis, why it fits, then the important alternatives.",
      clock: "4 minutes. History stops. Explanation starts."
    },
    "hint-observations": {
      where: "Choosing the focused examination",
      popUp: "Why not do a complete examination?",
      say: [
        "Because the examination should answer the immediate questions in this presentation.",
        "Assess airway, breathing, circulation and perfusion. Look for heart failure, unequal arm pressures, unequal air entry and signs of deep-vein thrombosis."
      ],
      pause: "Choose findings that assess stability, complications and the dangerous alternatives.",
      recap: "Check for shock, hypoxaemia, heart failure, aortic dissection, pneumothorax and venous thrombosis.",
      reorient: "Interpret the observations together with the history."
    },
    "hint-stable-findings": {
      where: "Interpreting stable observations",
      popUp: "Blood pressure and oxygen are okay. Can I relax now?",
      say: [
        "His observations are stable at present, but the ongoing high-risk symptoms still require urgent assessment.",
        "Normal observations do not exclude a serious cause of 35 minutes of ongoing symptoms. They help you choose treatment safely while transfer continues."
      ],
      pause: "His current observations are stable, but the history remains high risk.",
      recap: "There is no shock, severe hypoxaemia or obvious heart failure. Acute coronary syndrome remains the main concern.",
      reorient: "Move to the working diagnosis and explain the uncertainty."
    },
    "hint-provisional-diagnosis": {
      where: "Stating the working diagnosis",
      popUp: "Do I call this a heart attack, unstable angina or something else?",
      say: [
        "The current working diagnosis is acute coronary syndrome.",
        "This means a sudden reduction in blood flow to heart muscle. The ECG and serial troponins are needed to determine whether this is unstable angina, NSTEMI or STEMI."
      ],
      pause: "State the working diagnosis and the remaining uncertainty separately.",
      recap: "Acute coronary syndrome is most likely. The exact subtype is not yet known.",
      reorient: "Explain which findings support acute coronary syndrome, then discuss the dangerous alternatives."
    },
    "hint-dangerous-alternatives": {
      where: "Discussing important alternatives",
      popUp: "How many differentials should I say? I can think of ten.",
      say: [
        "Mention only the alternatives that are dangerous or reasonably likely here.",
        "For dissection, mention the onset, back radiation and arm findings. For pulmonary embolism, mention pleuritic pain, sudden breathlessness and clot risk. For pneumothorax, mention sudden pleuritic pain and unequal air entry."
      ],
      pause: "For each alternative, state the finding that supports or argues against it.",
      recap: "Dissection, pulmonary embolism and pneumothorax are less likely from the current history and findings.",
      reorient: "Then mention reflux and chest wall pain as less dangerous alternatives."
    },
    "hint-indigestion-concern": {
      where: "Responding to his indigestion concern",
      popUp: "If I say his indigestion idea makes sense, am I agreeing with it?",
      say: [
        "No. You can acknowledge that symptoms after lunch may suggest indigestion.",
        "Then explain that heart symptoms can also feel like indigestion. Exertional pressure with radiation, sweating and nausea means a heart cause cannot safely be dismissed."
      ],
      pause: "Tell him you understand why the meal suggested indigestion, then explain the findings that concern you.",
      recap: "Indigestion is possible, but the current features require urgent cardiac assessment.",
      reorient: "Explain why monitored ambulance transfer is safer than his wife driving."
    },
    "hint-ecg": {
      where: "Using the ECG without delaying transfer",
      popUp: "Should I wait for the ECG? What if the first one is normal?",
      say: [
        "Call the ambulance first. Get the ECG within 10 minutes if it is ready and causes no delay.",
        "A normal first ECG does not exclude acute coronary syndrome. Some serious coronary events have no change on the initial ECG."
      ],
      pause: "Arrange transfer first. Obtain the ECG only if it does not cause delay.",
      recap: "The ECG may support the diagnosis, but a normal result would not make hospital assessment unnecessary.",
      reorient: "Interpret what the ST depression adds and what remains unknown."
    },
    "hint-ecg-result": {
      where: "Updating with new evidence",
      popUp: "ST depression. Is NSTEMI now confirmed?",
      say: [
        "No. ST depression supports myocardial ischaemia.",
        "Troponin is still needed to distinguish NSTEMI from unstable angina. The ECG supports acute coronary syndrome but does not determine the subtype."
      ],
      pause: "Use the ECG as supporting evidence. Do not call this NSTEMI without troponin evidence.",
      recap: "Acute coronary syndrome is now more likely. NSTEMI and unstable angina still need to be distinguished.",
      reorient: "Continue monitoring and begin appropriate initial treatment."
    },
    "hint-aspirin": {
      where: "Deciding whether to give aspirin",
      popUp: "Why aspirin now? Why did I check bleeding and dissection first?",
      say: [
        "Aspirin reduces platelet clotting after a coronary plaque ruptures.",
        "Because it also increases bleeding, check for allergy, active bleeding and significant concern about aortic dissection first."
      ],
      logic: ["Plaque breaks", "Platelets gather", "Clot grows", "Aspirin slows platelets"],
      pause: "Confirm that aspirin is appropriate before giving it.",
      recap: "The history and ECG support acute coronary syndrome, and the main aspirin contraindications have been checked.",
      reorient: "Give 300 mg chewed or dissolved and record the time."
    },
    "hint-oxygen": {
      where: "Deciding whether oxygen is needed",
      popUp: "Chest pain and breathlessness. Oxygen, right?",
      say: [
        "His oxygen saturation is 96%, so supplemental oxygen is not indicated now.",
        "Routine oxygen does not treat the coronary problem and may be harmful when oxygenation is already adequate."
      ],
      pause: "Continue monitoring without giving oxygen at present.",
      recap: "Oxygen is not required while his saturation remains adequate.",
      reorient: "If saturation falls, shock appears or heart failure develops, reassess."
    },
    "hint-gtn": {
      where: "Deciding whether to give GTN",
      popUp: "If GTN relieves the pain, does that prove it is cardiac?",
      say: [
        "No. GTN widens blood vessels and reduces the work the heart has to do. It may relieve cardiac pain, but the response does not confirm the diagnosis.",
        "Before giving it, check blood pressure, possible right-ventricular involvement and recent sildenafil, tadalafil or vardenafil."
      ],
      pause: "GTN may be used for pain relief, but its effect does not confirm the diagnosis.",
      recap: "His blood pressure and the contraindication checks allow GTN to be considered.",
      reorient: "Pain relief must not delay ambulance transfer."
    },
    "hint-troponin": {
      where: "Understanding an early troponin result",
      popUp: "Can one clinic troponin settle this and avoid hospital?",
      say: [
        "No. Troponin rises over time after heart-muscle injury.",
        "An early result may still be normal. One early result is not enough. Repeat troponin at the correct interval and interpret it with the history and ECG."
      ],
      logic: ["Symptoms begin", "Troponin may still be low", "Repeat tests show the change"],
      pause: "A normal early troponin does not exclude myocardial infarction.",
      recap: "He still needs hospital assessment even if a clinic result is normal.",
      reorient: "Explain why time and repeat testing matter."
    },
    "hint-teach-back": {
      where: "Checking his understanding",
      popUp: "I already explained it. Why ask him to repeat it?",
      say: [
        "Because hearing an explanation does not always mean it was understood, especially during an urgent consultation.",
        "Ask him to explain what he understands about the concern and the need for ambulance transfer. Clarify anything he has misunderstood."
      ],
      pause: "Use teach-back rather than asking only, 'Do you understand?'",
      recap: "He needs to understand the concern, the uncertainty and why ambulance transfer matters.",
      reorient: "Clarify any misunderstanding, then prepare the handover."
    },
    "hint-handover": {
      where: "Giving the ambulance handover",
      popUp: "Time is nearly over. What must go into the handover?",
      say: [
        "Tell the paramedics his age, when the symptoms began, how they have changed and what is happening now.",
        "Include the important positive and negative findings, observations, ECG and its time, treatments given, contraindications and any change in his condition."
      ],
      pause: "Include the information that affects urgency and immediate care.",
      recap: "They need to know why you are worried, what you found and what you already did.",
      reorient: "Finish with his current state and what still needs to happen."
    },
    "hint-finish": {
      where: "Moving to the next station",
      popUp: "The station is over. Should I review what I missed?",
      say: [
        "Once the station ends, you cannot change it.",
        "Use the next reading time for the next stem. A similar age or symptom may belong to a completely different clinical problem."
      ],
      pause: "Leave this station here.",
      recap: "Read the next case as a new clinical problem.",
      reorient: "Identify your role, the setting, the presenting problem and the tasks.",
      clock: "Use the changeover for the next stem."
    }
  };

  caseOne.hints = caseOne.hints.map(function (hint) {
    var voice = naturalVoice[hint.id];
    if (!voice) return hint;
    return {
      id: hint.id,
      target: hint.target,
      citationIds: hint.citationIds,
      where: voice.where,
      popUp: voice.popUp,
      say: voice.say,
      logic: voice.logic || [],
      pause: voice.pause,
      recap: voice.recap,
      reorient: voice.reorient,
      clock: voice.clock || ""
    };
  });
})();
