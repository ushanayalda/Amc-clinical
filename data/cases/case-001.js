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
            text: "Mr Daniel Morgan, a 60-year-old man, was booked for an urgent same-day consultation after developing chest discomfort following lunch."
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
            text: "Address the patient's concerns and explain your immediate management.",
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
        }
      ],
      hints: [
        {
          id: "hint-urgent-booking",
          target: { surface: "stem", itemId: "stem-patient", quote: "urgent same-day consultation", occurrence: 1 },
          title: "Urgency is already part of the data",
          lead: "The booking label is not decoration. It changes your opening tempo before you know the diagnosis.",
          layers: [
            { label: "Thinking path", text: "Start by asking what made the problem urgent today, then look for instability and time-critical patterns." },
            { label: "Flexible move", text: "Urgent does not automatically mean ACS. It means shorten the route to danger sorting." }
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
})();
