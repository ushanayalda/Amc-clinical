(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-008",
    globalId: "CP-C008",
    registryId: "CP-P2-C004",
    displayNumber: "Case 8",
    title: "Worsening breathlessness with COPD",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 2, title: "Acute Shortness of Breath" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c008-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c008-stem-patient",
          text: "Mr Peter Lang, a 71-year-old man with chronic obstructive pulmonary disease, has presented with worsening breathlessness and cough over two days."
        },
        {
          id: "c008-stem-start",
          text: "Peter is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c008-task-assess",
          text: "Assess and manage the patient, explaining your actions as his condition permits.",
          timing: "4 minutes"
        },
        {
          id: "c008-task-interpret",
          text: "Interpret the investigation results and discuss further management.",
          timing: "2 minutes"
        },
        {
          id: "c008-task-explain",
          text: "Explain the likely diagnosis and ongoing treatment to the patient.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c008-run-immediate",
          heading: "Immediate assessment and controlled oxygen",
          turns: [
            {
              id: "c008-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c008-run-start", text: "You may begin." }]
            },
            {
              id: "c008-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c008-run-first-action", text: "The doctor performs hand hygiene, asks the nurse to bring the resuscitation trolley and approaches the patient." }]
            },
            {
              id: "c008-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-intro", text: "Hello, I am Ushana, one of the emergency doctors. Peter, can you tell me your full name and what feels worst now?" }]
            },
            {
              id: "c008-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c008-run-opening", text: "Peter Lang. I cannot get enough air, and I feel very sleepy." }]
            },
            {
              id: "c008-turn-abc",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-abc", text: "I assess his airway, breathing, bilateral air entry, circulation, conscious state and temperature. Sit him upright, attach continuous oxygen-saturation and cardiac monitoring, record frequent blood pressure, obtain intravenous access and provide the findings, including the oxygen device." }]
            },
            {
              id: "c008-turn-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c008-run-findings", text: "At triage, before oxygen was started, Peter's oxygen saturation was 82% on room air. He is now receiving oxygen at 10 litres per minute through a non-rebreather mask. He opens his eyes to voice and is mildly confused. Respiratory rate is 30 breaths per minute with accessory-muscle use, oxygen saturation is now 99%, pulse is 116 beats per minute and regular, blood pressure is 148/84 mmHg, and temperature is 38.1 degrees Celsius. His airway is patent." }]
            },
            {
              id: "c008-turn-oxygen-order",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-oxygen-order", text: "He needed oxygen at triage, but 99% is higher than the safe target for this COPD exacerbation. Do not remove oxygen. Change now to controlled oxygen through a 28% Venturi mask and titrate to an oxygen saturation target of 88% to 92%. Prescribe and record that target. Keep him monitored and call the senior emergency doctor and respiratory team." }]
            },
            {
              id: "c008-turn-oxygen-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c008-run-oxygen-action", text: "The nurse changes to controlled oxygen and continues close monitoring." }]
            },
            {
              id: "c008-turn-oxygen-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c008-run-oxygen-question", text: "Why are you turning the oxygen down when I cannot breathe?" }]
            },
            {
              id: "c008-turn-oxygen-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-oxygen-answer", text: "I am not taking oxygen away. Your level was dangerously low, so you need it. With COPD, too much oxygen can allow carbon dioxide to rise and cause drowsiness. I am giving a precise amount while we treat the cause." }]
            },
            {
              id: "c008-turn-history-open",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-history-open", text: "When did this worsening start? Has your cough, sputum amount or sputum colour changed? Any fever?" }]
            },
            {
              id: "c008-turn-history-open-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c008-run-history-open-answer", text: "Two days ago. I am coughing up much more green phlegm and felt hot overnight." }]
            },
            {
              id: "c008-turn-danger-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-danger-history", text: "Any sudden one-sided chest pain, coughing blood, calf pain, chest pressure, needing extra pillows, swollen legs, choking or allergic symptoms?" }]
            },
            {
              id: "c008-turn-danger-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c008-run-danger-answer", text: "No. It has just become harder to breathe, with more phlegm." }]
            },
            {
              id: "c008-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-background", text: "What is your usual breathing like? Do you use home oxygen? Have you needed a breathing mask or breathing tube before? What inhalers and other medicines do you take, and do you have allergies?" }]
            },
            {
              id: "c008-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c008-run-background-answer", text: "I usually walk to the letterbox. No home oxygen. I needed that tight mask in hospital last winter, never a tube. I use tiotropium and a formoterol inhaler. No allergies." }]
            },
            {
              id: "c008-turn-exam-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-exam-request", text: "With his consent, I examine both lungs, heart sounds, jugular venous pressure, peripheral oedema and both calves, and reassess his conscious state. Please provide the findings." }]
            },
            {
              id: "c008-turn-exam-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c008-run-exam-findings", text: "There is widespread expiratory wheeze and reduced air entry bilaterally. There are no focal crackles, bronchial breathing or unilateral absent breath sounds. Heart sounds are normal. Jugular venous pressure is not elevated, and there is no peripheral oedema or calf asymmetry. He remains drowsy but follows simple commands." }]
            },
            {
              id: "c008-turn-working-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-working-diagnosis", text: "This is most likely a severe infective COPD exacerbation, but I will still assess for pneumonia, pneumothorax, pulmonary embolism, heart failure and acute coronary syndrome." }]
            }
          ]
        },
        {
          id: "c008-run-investigations",
          heading: "Blood gas interpretation and initial treatment",
          turns: [
            {
              id: "c008-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-investigations", text: "Take an urgent arterial blood gas and compare it with any previous stable result. Arrange a portable chest X-ray, ECG, full blood count, electrolytes, kidney function, glucose, inflammatory markers and respiratory viral testing. Send sputum for culture if obtainable. These tests must not delay treatment." }]
            },
            {
              id: "c008-turn-abg",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c008-run-abg", text: "The arterial sample was taken while Peter was receiving 10 litres per minute oxygen. Results are pH 7.25, PaCO2 10.2 kPa, PaO2 18.0 kPa, bicarbonate 33 mmol/L and lactate 1.4 mmol/L." }]
            },
            {
              id: "c008-turn-interpret-prompt",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c008-run-interpret-prompt", text: "Please interpret the blood gas and state its immediate significance." }]
            },
            {
              id: "c008-turn-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-interpretation", text: "This shows acute-on-chronic hypercapnic respiratory failure. The high carbon dioxide with low pH is acute respiratory acidosis. The raised bicarbonate suggests pre-existing carbon dioxide retention. The very high PaO2 reflects excessive administered oxygen, not recovery. His drowsiness, acidosis and work of breathing require urgent ventilatory assessment while controlled oxygen and medical treatment continue." }]
            },
            {
              id: "c008-turn-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-treatment", text: "Give salbutamol 2.5 milligrams and ipratropium 500 micrograms by air-driven nebuliser, with controlled oxygen supplied separately and titrated to 88% to 92%. Repeat bronchodilator treatment according to response and monitor pulse and potassium. If he can swallow safely, give prednisolone 40 milligrams orally daily for five days. Because he has increased purulent sputum and fever, start an antibiotic according to the local COPD protocol after checking allergies and previous microbiology." }]
            },
            {
              id: "c008-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c008-run-treatment-action", text: "Controlled oxygen, air-driven bronchodilators and protocol-guided corticosteroid and antibiotic treatment are commenced. The senior emergency doctor and respiratory team attend." }]
            },
            {
              id: "c008-turn-repeat",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c008-run-repeat", text: "After initial treatment, oxygen saturation is 90% on a 28% Venturi mask. Respiratory rate is 32 breaths per minute and Peter is more drowsy. Repeat arterial blood gas shows pH 7.24, PaCO2 10.4 kPa, PaO2 7.8 kPa and bicarbonate 33 mmol/L." }]
            },
            {
              id: "c008-turn-niv",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-niv", text: "The respiratory acidosis and hypercapnia are worsening. I would commence bilevel non-invasive ventilation now in a monitored area with experienced staff, if there is no contraindication. Continue the 88% to 92% oxygen target, repeat the blood gas within 30 to 60 minutes and involve intensive care early. Prepare for intubation if he cannot protect his airway, becomes unconscious, is unstable or fails non-invasive ventilation." }]
            },
            {
              id: "c008-turn-mask-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c008-run-mask-question", text: "Is that the tight mask? I hated it last time. Are you putting me to sleep?" }]
            },
            {
              id: "c008-turn-mask-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-mask-answer", text: "It is the same type of mask. You stay awake and breathe for yourself while the machine supports each breath and helps remove carbon dioxide. It reduces the chance of needing a breathing tube. We will adjust the fit and watch your breathing and blood gases closely." }]
            },
            {
              id: "c008-turn-niv-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c008-run-niv-action", text: "Bilevel non-invasive ventilation is commenced with controlled oxygen entrained to the prescribed saturation target." }]
            },
            {
              id: "c008-turn-niv-response",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c008-run-niv-response", text: "Thirty minutes after non-invasive ventilation begins, Peter is more alert. Oxygen saturation is 90%. Repeat arterial blood gas shows pH 7.29, PaCO2 9.2 kPa, PaO2 8.1 kPa and bicarbonate 33 mmol/L." }]
            },
            {
              id: "c008-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c008-run-time", text: "Six minutes have elapsed. Please explain the likely diagnosis, oxygen plan and ongoing treatment to the patient." }]
            }
          ]
        },
        {
          id: "c008-run-explanation",
          heading: "Patient explanation and escalation plan",
          turns: [
            {
              id: "c008-turn-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-diagnosis", text: "Peter, this is a severe flare of your COPD, probably triggered by infection. Your narrowed airways are preventing you from breathing enough carbon dioxide out. It has made your blood acidic and caused drowsiness, so you need the breathing mask and close monitoring." }]
            },
            {
              id: "c008-turn-oxygen-concern",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c008-run-oxygen-concern", text: "Did the oxygen cause this? Should I refuse oxygen in future?" }]
            },
            {
              id: "c008-turn-oxygen-clarification",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-oxygen-clarification", text: "No. When your oxygen is low, oxygen treatment is essential. The problem is giving more than you need without a target. In future, tell staff you have COPD and may retain carbon dioxide, but never refuse oxygen in an emergency. They should monitor you and adjust it to the prescribed range." }]
            },
            {
              id: "c008-turn-differentials",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-differentials", text: "The green sputum and fever support an infective COPD flare, but we are also checking for pneumonia. The examination makes a collapsed lung and fluid from heart failure less likely. The chest X-ray, ECG and blood tests help assess those problems. We would investigate pulmonary embolism if your history, examination or progress raised concern for a clot." }]
            },
            {
              id: "c008-turn-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-plan", text: "We will continue controlled oxygen, inhaled medicines, corticosteroid and antibiotics, repeat your observations and blood gases, and treat the trigger. If the mask improves the acidity and alertness, we continue it with regular review. If you deteriorate, intensive care may need to place a breathing tube." }]
            },
            {
              id: "c008-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c008-run-understanding", text: "Please tell me what you understand about why you still need oxygen, but in a controlled amount." }]
            },
            {
              id: "c008-turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c008-run-understanding-answer", text: "I need oxygen because my level was low, but it should be adjusted to 88% to 92% while you check my carbon dioxide and help my breathing." }]
            },
            {
              id: "c008-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c008-run-handover", text: "Peter Lang, 71, has COPD with two days of worsening dyspnoea, increased purulent sputum and fever. Saturation was 82% on room air, then 99% on 10 litres through a non-rebreather mask with new drowsiness. Initial gas on high-concentration oxygen showed pH 7.25, PaCO2 10.2, PaO2 18.0 and bicarbonate 33, consistent with acute-on-chronic hypercapnic respiratory failure. High-concentration oxygen was changed, not stopped, to controlled oxygen targeting 88% to 92%. He has received air-driven salbutamol and ipratropium, corticosteroid and protocol-guided antibiotics. Repeat gas worsened to pH 7.24 and PaCO2 10.4, so bilevel non-invasive ventilation has started with respiratory and intensive-care involvement. Pneumonia and other cardiopulmonary triggers are being investigated." }]
            },
            {
              id: "c008-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c008-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Lung Foundation Australia and Thoracic Society of Australia and New Zealand",
        title: "The COPD-X Plan: Australian and New Zealand Guidelines for the management of chronic obstructive pulmonary disease, Version 2.78",
        date: "Published online December 2025",
        url: "https://copdx.org.au/copd-x-plan/"
      },
      {
        organisation: "COPD-X",
        title: "X2.2 Optimise treatment",
        date: "Version 2.78, published December 2025",
        url: "https://copdx.org.au/copd-x-plan/x-manage-exacerbations/x2-copd-acute-exacerbation-plan/x22-optimise-treatment/"
      },
      {
        organisation: "COPD-X",
        title: "X3.1 Controlled oxygen delivery",
        date: "Version 2.78, published December 2025",
        url: "https://copdx.org.au/copd-x-plan/x-manage-exacerbations/x3-refer-appropriately-to-prevent-further-deterioration-p/x31-controlled-oxygen-delivery/"
      },
      {
        organisation: "COPD-X",
        title: "X3.2 Non-invasive positive pressure ventilation",
        date: "Version 2.78, published December 2025",
        url: "https://copdx.org.au/copd-x-plan/x-manage-exacerbations/x3-refer-appropriately-to-prevent-further-deterioration-p/x32-niv/"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.2.10: The use of oxygen in emergencies",
        date: "Approved April 2021, current citation 2026",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies"
      }
    ]
  });

  var caseEight = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-008"; });
  caseEight.masteryFocus = {
    case: "Assess a breathless patient with COPD, prescribe oxygen from the findings, interpret the results and use repeated response to choose the next level of breathing support.",
    clinical: "In any breathless patient, treat low oxygen while checking whether ventilation and carbon dioxide clearance are also failing.",
    tasks: [
      "Assess, manage and explain actions",
      "Interpret results and management",
      "Explain diagnosis and treatment"
    ],
    transfer: "If Peter's saturation remained 89% on controlled oxygen but his drowsiness and respiratory acidosis worsened, which findings would control your next escalation?",
    transferAnswer: "An oxygen saturation of 89% is within the COPD target and should not be chased upward. Worsening acidosis, rising carbon dioxide, respiratory fatigue and drowsiness signal ventilatory failure: use NIV urgently if he can cooperate and protect his airway; move to intubation if airway protection, haemodynamics or NIV response are inadequate.",
    transferChecks: [
      "pH and PaCO₂ trend",
      "Alertness and airway protection",
      "Work of breathing and fatigue",
      "Haemodynamic stability and NIV response"
    ],
    transferCitationIds: ["c008-copdx-oxygen", "c008-copdx-niv"]
  };
  caseEight.sources = [
    { id: "c008-copdx-main", title: "The COPD-X Plan, Version 2.78", organisation: "Lung Foundation Australia and Thoracic Society of Australia and New Zealand", date: "December 2025", url: "https://copdx.org.au/copd-x-plan/" },
    { id: "c008-copdx-oxygen", title: "Controlled oxygen delivery", organisation: "COPD-X", date: "Version 2.78, December 2025", url: "https://copdx.org.au/copd-x-plan/x-manage-exacerbations/x3-refer-appropriately-to-prevent-further-deterioration-p/x31-controlled-oxygen-delivery/" },
    { id: "c008-copdx-niv", title: "Non-invasive positive pressure ventilation", organisation: "COPD-X", date: "Version 2.78, December 2025", url: "https://copdx.org.au/copd-x-plan/x-manage-exacerbations/x3-refer-appropriately-to-prevent-further-deterioration-p/x32-niv/" },
    { id: "c008-anzcor-oxygen", title: "Guideline 9.2.10: The Use of Oxygen in Emergencies", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Approved April 2021; accessed July 2026", url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies" },
    { id: "c008-amc-spec", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "c008-amc-tips", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "c008-communication", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Accessed July 2026", url: "https://www.safetyandquality.gov.au/standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseEight.reasoningCompass = {
    stem: {
      title: "Keep the three jobs separate",
      steps: [
        { time: "0 to 30 seconds", text: "Confirm the emergency setting, current responsiveness and the first four-minute job: assess and manage together." },
        { time: "30 to 60 seconds", text: "Prepare an immediate breathing sequence: ABCDE, monitoring, oxygen device and target, blood gas, focused trigger history and examination." },
        { time: "1 to 2 minutes", text: "Set the task change points: interpret results at minute 4, then explain the diagnosis and ongoing treatment at minute 6." }
      ],
      anchor: "Assess and manage 0 to 4 | Interpret 4 to 6 | Explain 6 to 8"
    },
    run: {
      title: "Act, interpret, then explain",
      steps: [
        { time: "0 to 4 minutes", text: "Assess breathing and conscious state, check the oxygen device, prescribe a safe target and seek senior help while focused questions continue." },
        { time: "4 to 6 minutes", text: "Read pH, carbon dioxide, oxygen and bicarbonate together. Reassess after treatment and escalate ventilatory support if acidosis or drowsiness worsens." },
        { time: "6 to 8 minutes", text: "At the prompt, explain the working diagnosis, oxygen plan, current breathing support and what happens if treatment fails." }
      ],
      anchor: "If airway protection, breathing effort or conscious state worsens, interrupt the task, stabilise first, then return to the part you paused."
    }
  };

  function c008Hint(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient, clock) {
    var hint = { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
    if (clock) hint.clock = clock;
    return hint;
  }
  caseEight.hints = [
    c008Hint("c008-hint-01", "stem", "c008-stem-role", "emergency department", ["c008-amc-spec", "c008-amc-tips"], "Reading the setting", "Emergency department. What changes first?", "You can monitor, obtain a blood gas and start respiratory support immediately. Build the first minute around instability, not around a long history.", "The setting gives you more treatment options, but the patient's physiology still decides the pace.", "This is an emergency assessment with treatment happening alongside it.", "Read who is unwell and what has changed."),
    c008Hint("c008-hint-02", "stem", "c008-stem-patient", "71-year-old man with chronic obstructive pulmonary disease", ["c008-copdx-main", "c008-amc-tips"], "Reading the background", "COPD is given. Is the answer already obvious?", "It tells you that airflow obstruction and carbon dioxide retention may matter. It does not tell you the trigger, severity or whether another heart or lung problem is present.", "Use the known disease to guide treatment, not to close the assessment.", "Peter has COPD; the cause and severity of today's deterioration are still unknown.", "Link the two-day change to breathing, cough, sputum, fever and dangerous alternatives."),
    c008Hint("c008-hint-03", "stem", "c008-stem-patient", "worsening breathlessness and cough over two days", ["c008-copdx-main"], "Reading the change", "Two days of breathlessness and cough. What should I expect to sort out?", "Clarify change from baseline, sputum amount and colour, fever and treatment response. At the same time, screen for sudden pain, haemoptysis, fluid overload and other causes that would change management.", "A familiar symptom can still have an unfamiliar cause.", "There is an acute respiratory deterioration, but no severity data yet.", "Check responsiveness and what findings are available."),
    c008Hint("c008-hint-04", "stem", "c008-stem-start", "awake and able to answer questions", ["c008-copdx-oxygen", "c008-amc-tips"], "Reading current responsiveness", "He can answer. Can I start with history?", "Yes, but only while you assess breathing and obtain observations. In respiratory illness, new sleepiness or confusion can be a sign of carbon dioxide retention, fatigue, hypoxaemia, infection or another metabolic problem.", "Being awake does not establish that ventilation is adequate.", "Peter can speak now, so brief questions can run beside ABCDE.", "Use the first task wording to decide where the first four minutes go."),
    c008Hint("c008-hint-05", "stem", "c008-task-assess", "Assess and manage the patient", ["c008-amc-spec", "c008-amc-tips", "c008-copdx-main"], "Anchoring task one", "Assess and manage. Does that mean I finish assessment before treatment?", "No. Ask for oxygen delivery, observations and conscious state early. Treat any immediate airway, breathing or circulation problem shown by those findings while the focused assessment continues.", "Assessment and treatment run together when the patient is unstable.", "Minutes 0 to 4 combine ABCDE, focused cause finding and immediate treatment.", "Keep enough time to interpret the investigation results.", "0 to 4 minutes"),
    c008Hint("c008-hint-06", "stem", "c008-task-interpret", "Interpret the investigation results", ["c008-amc-spec", "c008-amc-tips"], "Anchoring task two", "What does interpret require beyond reading numbers?", "For each result, say what it means in this patient and what it changes. Compare it with his symptoms, examination and current treatment, then state the next management decision.", "Connect every result to Peter's condition and the next decision.", "Task two is meaning, clinical context and action.", "At minute 6, leave the results and explain the overall assessment to Peter.", "Minutes 4 to 6: interpret the supplied results and adjust management."),
    c008Hint("c008-hint-07", "stem", "c008-task-explain", "ongoing treatment to the patient", ["c008-amc-spec", "c008-amc-tips", "c008-communication"], "Anchoring task three", "How much technical detail belongs in Peter's explanation?", "Start with what you think is happening. Then explain the treatment he is receiving, why it is needed and what the team will watch next. Use short sentences and check one key point with him.", "Keep the explanation centred on meaning, treatment and what happens next.", "Task three is the likely diagnosis and ongoing treatment in everyday language.", "Begin the run by judging how much Peter can comfortably hear while breathless.", "Minutes 6 to 8: explain, answer his concern and check understanding."),
    c008Hint("c008-hint-08", "run", "c008-run-start", "You may begin", ["c008-amc-spec", "c008-amc-tips"], "Starting the run", "What is my first sentence internally?", "Breathing and conscious state first. I can ask his name while the nurse brings monitoring and emergency equipment.", "Start with the clinical priority, not a memorised introduction.", "The first task is assess and manage.", "Approach Peter and observe whether he can speak and stay awake."),
    c008Hint("c008-hint-09", "run", "c008-run-first-action", "resuscitation trolley", ["c008-copdx-main", "c008-amc-tips"], "Preparing safely", "Is bringing emergency equipment excessive?", "Preparation fits the risk. Severe breathlessness and possible reduced consciousness can deteriorate quickly. Equipment nearby lets assessment continue without delay if airway or ventilation fails.", "Preparation does not replace assessment.", "Help and equipment are close while you approach.", "Hear Peter's first words before deciding what is happening."),
    c008Hint("c008-hint-10", "run", "c008-run-opening", "feel very sleepy", ["c008-copdx-oxygen", "c008-copdx-main"], "Hearing the first story", "Breathless and sleepy. Why does that combination matter?", "Breathlessness tells you breathing is difficult; sleepiness suggests the brain may not be receiving normal gas exchange. Hypoxaemia, rising carbon dioxide, fatigue, infection, medicines and metabolic causes all need rapid assessment.", "Do not assume tiredness is simply from a bad night.", "Peter is breathless with altered alertness. This is already more than a routine flare history.", "Assess ABCDE and ask exactly how oxygen is being delivered."),
    c008Hint("c008-hint-11", "run", "c008-run-abc", "including the oxygen device", ["c008-copdx-oxygen", "c008-anzcor-oxygen"], "Requesting the essentials", "Why name the device, not just the saturation?", "Pair the current saturation with the device and flow. Also ask for the saturation before oxygen was started; without that baseline, you cannot tell why oxygen was needed or how much treatment changed the number.", "A saturation needs its oxygen context: before treatment, current device and current flow.", "You are assessing breathing, circulation and conscious state while identifying treatment already given.", "Use the examiner's findings before changing anything."),
    c008Hint("c008-hint-12", "run", "c008-run-findings", "10 litres per minute through a non-rebreather mask", ["c008-copdx-oxygen"], "Reading current treatment", "Eighty-two before oxygen, now 99% on 10 litres. What do those two numbers tell me?", "The 82% room-air reading shows that oxygen was necessary. The 99% on 10 litres through a non-rebreather is now above the usual COPD target. Do not stop oxygen: change to controlled oxygen, target 88% to 92%, monitor him and obtain an arterial blood gas.", "The first number explains why oxygen was started; the second tells you to control the dose.", "Peter needed oxygen and still needs it, now within a prescribed range.", "Combine both readings with his breathing effort and conscious state."),
    c008Hint("c008-hint-13", "run", "c008-run-findings", "opens his eyes to voice and is mildly confused", ["c008-copdx-oxygen", "c008-copdx-main"], "Reading conscious state", "Could this just be fever or exhaustion?", "Possibly, but reduced alertness during a COPD deterioration raises immediate concern about carbon dioxide retention and respiratory fatigue. A blood gas is urgent, and airway protection must be watched continuously.", "Do not wait for coma before treating ventilatory failure seriously.", "Peter has abnormal conscious state during severe respiratory distress.", "Check the rest of the observations and work of breathing."),
    c008Hint("c008-hint-14", "run", "c008-run-findings", "oxygen saturation is now 99%", ["c008-copdx-oxygen"], "Putting the number in context", "Ninety-nine per cent looks excellent. Why is it concerning here?", "It is achieved with high-concentration oxygen in a patient at risk of hypercapnic respiratory failure. Excess oxygen can worsen ventilation-perfusion mismatch and the Haldane effect, increasing carbon dioxide. The exact contribution is checked with the blood gas and clinical response.", "A high saturation on treatment is not the same as recovery.", "Peter is over the usual 88% to 92% target and remains drowsy and distressed.", "Prescribe controlled oxygen and seek senior respiratory support."),
    c008Hint("c008-hint-15", "run", "c008-run-oxygen-order", "Do not remove oxygen", ["c008-copdx-oxygen", "c008-anzcor-oxygen"], "Correcting oxygen safely", "What is the safe correction?", "Switch promptly to a controlled device, target 88% to 92%, continue monitoring and obtain a blood gas. Oxygen treats hypoxaemia; the target prevents avoidable over-oxygenation while ventilation is assessed.", "The action is controlled oxygen, not no oxygen.", "Peter still needs oxygen, now with a prescribed range.", "Answer his question without making him afraid of oxygen."),
    c008Hint("c008-hint-16", "run", "c008-run-oxygen-question", "Why are you turning the oxygen down", ["c008-copdx-oxygen", "c008-communication"], "Responding to fear", "How do I explain this without sounding contradictory?", "Start with what stays true: you still need oxygen. Then explain the adjustment: I am giving the amount that keeps your level safe while we check carbon dioxide and support your breathing.", "Do not tell him that oxygen is poisonous or that he should refuse it later.", "The treatment continues; only the concentration changes.", "Return to the focused trigger history while the blood gas is prepared."),
    c008Hint("c008-hint-17", "run", "c008-run-oxygen-answer", "carbon dioxide to rise and cause drowsiness", ["c008-copdx-oxygen"], "Connecting mechanism to symptoms", "Why can too much oxygen raise carbon dioxide?", "In severe COPD, oxygen can redirect blood toward poorly ventilated lung units and reduce how much carbon dioxide haemoglobin carries. Less effective carbon dioxide removal can then worsen acidosis and drowsiness.", "Do not reduce this to the old idea that oxygen simply switches off breathing drive.", "The mechanism explains why Peter needs a target and repeat blood gases.", "Ask what changed over two days to find the trigger."),
    c008Hint("c008-hint-18", "run", "c008-run-history-open-answer", "much more green phlegm and felt hot", ["c008-copdx-main"], "Identifying the likely trigger", "Now can I name the likely problem?", "Yes. Worsening breathlessness, increased purulent sputum and fever support an infective COPD exacerbation. Infection may be viral or bacterial, and pneumonia still needs assessment.", "The trigger is likely, not microbiologically confirmed.", "An infective COPD exacerbation now explains much of the deterioration, but not yet the gas abnormality.", "Screen quickly for dangerous alternatives and establish his usual respiratory reserve."),
    c008Hint("c008-hint-19", "run", "c008-run-danger-history", "sudden one-sided chest pain", ["c008-copdx-main", "c008-amc-tips"], "Checking important alternatives", "Do I need a long chest-pain history too?", "Keep it brief. Check discriminators for pneumothorax, pulmonary embolism, acute coronary syndrome, heart failure, aspiration and allergy. Follow any positive answer rather than reciting every question.", "Focused means choosing questions that could change immediate care.", "The infective flare leads, while other acute cardiopulmonary causes are being tested.", "Ask about baseline function, home oxygen and previous ventilatory support."),
    c008Hint("c008-hint-20", "run", "c008-run-background-answer", "needed that tight mask in hospital last winter", ["c008-copdx-niv"], "Reading previous severity", "Why does prior mask treatment matter today?", "Previous non-invasive ventilation suggests limited respiratory reserve and shows Peter has tolerated this treatment before. It does not by itself mean he needs it now; current blood gas, breathing effort and conscious state decide.", "Past treatment informs preparation, not automatic treatment.", "Peter has had a severe exacerbation before and has never required intubation.", "Use the examination to test the flare and alternatives."),
    c008Hint("c008-hint-21", "run", "c008-run-exam-findings", "no peripheral oedema or calf asymmetry", ["c008-copdx-main"], "Reading the chest examination", "What do the bilateral chest findings and absent fluid or calf signs add?", "Widespread wheeze and reduced entry support airflow obstruction. The absence of unilateral lost breath sounds, focal bronchial breathing and fluid signs reduces some alternatives, but imaging is still needed because examination can miss pneumonia and other disease.", "A supportive examination is not a complete explanation for drowsiness.", "The clinical picture supports a severe COPD flare.", "State the working diagnosis, then obtain the investigation that tests ventilation."),
    c008Hint("c008-hint-22", "run", "c008-run-working-diagnosis", "severe infective COPD exacerbation", ["c008-copdx-main"], "Naming the working diagnosis", "How certain should I sound?", "Say most likely, then name the dangerous alternatives still being assessed. The fever, sputum change and obstructive chest findings support the flare; the blood gas will define the respiratory failure.", "Do not treat the differential list as equal once evidence has separated it.", "Severe infective COPD exacerbation is the working diagnosis.", "Move to the urgent blood gas and treatment without waiting for every result."),
    c008Hint("c008-hint-23", "run", "c008-run-investigations", "urgent arterial blood gas", ["c008-copdx-main", "c008-copdx-niv"], "Choosing the decisive test", "Why arterial gas now?", "It measures pH, carbon dioxide and oxygen on the current treatment. In a drowsy COPD patient, this tells you whether ventilatory failure and respiratory acidosis require assisted ventilation.", "The blood gas answers a treatment question, not a paperwork question.", "Other tests seek the trigger and alternatives; the gas guides immediate respiratory support.", "Read pH first, then carbon dioxide, bicarbonate and oxygen with the device."),
    c008Hint("c008-hint-24", "run", "c008-run-abg", "bicarbonate 33 mmol/L and lactate 1.4 mmol/L", ["c008-copdx-niv", "c008-copdx-oxygen"], "Reading the blood gas", "Where do I start with these numbers?", "pH 7.25 means clinically important acidaemia. PaCO2 10.2 is markedly high, so carbon dioxide retention is driving the acidosis. Bicarbonate 33 shows renal compensation was already present, making this acute deterioration on chronic retention.", "Do not let the high PaO2 distract from the dangerous pH and carbon dioxide.", "This is acute-on-chronic hypercapnic respiratory failure.", "Connect the gas to drowsiness and decide whether current treatment is enough."),
    c008Hint("c008-hint-25", "run", "c008-run-interpretation", "very high PaO2 reflects excessive administered oxygen, not recovery", ["c008-copdx-oxygen", "c008-copdx-niv"], "Giving the interpretation", "What makes this interpretation clinically complete?", "Name the disorder, show why it is acute-on-chronic, explain the oxygen result in context and state the consequence: controlled oxygen, immediate medical treatment and urgent ventilatory assessment.", "Numbers become useful when they change what you do next.", "Peter has acidotic hypercapnic respiratory failure with excessive oxygen exposure.", "Start bronchodilators, corticosteroid and trigger treatment while reassessing."),
    c008Hint("c008-hint-26", "run", "c008-run-treatment", "air-driven nebuliser", ["c008-copdx-main", "c008-copdx-oxygen"], "Delivering bronchodilators safely", "Why specify air-driven?", "Driving a nebuliser with high-flow oxygen can unintentionally increase oxygen exposure. Air drives the bronchodilator while controlled oxygen is supplied separately to the prescribed saturation range.", "Keep bronchodilator delivery and oxygen prescription as two deliberate treatments.", "Peter receives bronchodilators, corticosteroid and protocol-guided antibiotics without losing oxygen control.", "Recheck breathing effort, alertness, saturation and blood gas."),
    c008Hint("c008-hint-27", "run", "c008-run-repeat", "bicarbonate 33 mmol/L", ["c008-copdx-niv"], "Recognising failure of initial treatment", "Saturation is 90%. Can I be reassured?", "This is not reassuring. Saturation is in range, but respiratory rate, drowsiness, pH and carbon dioxide are worse. Oxygenation and ventilation are different; a satisfactory saturation does not prove carbon dioxide clearance.", "Treat the patient and the full gas, not one acceptable number.", "Initial treatment has not corrected ventilatory failure.", "Escalate to non-invasive ventilation now."),
    c008Hint("c008-hint-28", "run", "c008-run-niv", "commence bilevel non-invasive ventilation now", ["c008-copdx-niv"], "Escalating ventilatory support", "Why is the mask indicated now?", "Persistent respiratory acidosis, rising carbon dioxide, increased work of breathing and worsening drowsiness show that Peter needs help ventilating. Bilevel pressure supports inspiration, increases tidal ventilation and assists carbon dioxide removal.", "Use it in a monitored area with staff who can intubate if it fails.", "Non-invasive ventilation is now required alongside controlled oxygen and medical treatment.", "Explain the mask in words Peter can process while breathless."),
    c008Hint("c008-hint-29", "run", "c008-run-mask-question", "Are you putting me to sleep", ["c008-copdx-niv", "c008-communication"], "Answering the mask concern", "What does he need to hear first?", "No, the plan is for you to stay awake and breathe yourself. The machine adds pressure to each breath, and we will adjust the fit and stay close while checking your blood gas.", "Do not promise that intubation will never be needed.", "The mask is active breathing support without sedation.", "Watch his response and keep a clear failure plan."),
    c008Hint("c008-hint-30", "run", "c008-run-niv-response", "pH 7.29, PaCO2 9.2 kPa", ["c008-copdx-niv"], "Assessing response", "Is this success?", "It is an early improvement: pH is rising, carbon dioxide is falling and Peter is more alert. Continue non-invasive ventilation and repeat assessment because the gas is still abnormal and deterioration remains possible.", "Improvement supports the plan; it does not end monitoring.", "Peter is responding to assisted ventilation.", "At the time prompt, leave interpretation and return to the final task."),
    c008Hint("c008-hint-31", "run", "c008-run-time", "Six minutes have elapsed", ["c008-amc-spec", "c008-amc-tips"], "Changing tasks", "I still have more management to mention. What now?", "Stop. The examiner has moved you to explanation. Give Peter the diagnosis, oxygen plan and ongoing treatment. Add further technical detail only if it serves those requested points.", "A time prompt is permission to leave unfinished detail.", "Assessment, interpretation and escalation are complete enough to explain.", "Speak to Peter, not to the examiner.", "6 to 8 minutes"),
    c008Hint("c008-hint-32", "run", "c008-run-diagnosis", "narrowed airways are preventing you from breathing enough carbon dioxide out", ["c008-copdx-main", "c008-copdx-niv", "c008-communication"], "Explaining the diagnosis", "How do I make the physiology memorable without a lecture?", "Airflow obstruction and fatigue reduce effective ventilation. Carbon dioxide accumulates, blood becomes acidic and the brain becomes drowsy. The mask assists each breath while medicines treat the narrowed airways and infection.", "Keep the spoken version shorter than your internal explanation.", "The severe infective flare has caused acute-on-chronic hypercapnic respiratory failure.", "Address whether oxygen caused this."),
    c008Hint("c008-hint-33", "run", "c008-run-oxygen-concern", "Should I refuse oxygen in future", ["c008-copdx-oxygen", "c008-anzcor-oxygen", "c008-communication"], "Correcting a dangerous misunderstanding", "How firmly should I answer?", "Say no clearly. Oxygen is essential when his level is low. The safety issue is uncontrolled excess, so staff should prescribe a target, monitor him and obtain a blood gas when indicated.", "Do not leave Peter with fear of receiving emergency oxygen.", "He needs oxygen when hypoxaemic, given to a measured target.", "Briefly compare the important alternative diagnoses."),
    c008Hint("c008-hint-34", "run", "c008-run-differentials", "also checking for pneumonia", ["c008-copdx-main"], "Explaining alternatives", "How do I avoid listing every cause of breathlessness?", "Connect each alternative to a reason for checking it. Fever and sputum can accompany pneumonia; sudden unilateral findings would suggest pneumothorax; fluid signs suggest heart failure; clot features would renew concern for pulmonary embolism.", "Explain what is being tested and why.", "The COPD flare leads, while pneumonia remains an important trigger or coexisting diagnosis.", "Finish with ongoing treatment and the failure plan."),
    c008Hint("c008-hint-35", "run", "c008-run-plan", "If you deteriorate", ["c008-copdx-niv", "c008-copdx-main"], "Giving the ongoing plan", "What must the plan include?", "Continue controlled oxygen, non-invasive ventilation, bronchodilators, corticosteroid, antibiotics and repeated observations and gases. Name the next escalation honestly: intensive care and intubation if airway protection, stability or ventilation fails.", "A safety plan includes what would make treatment change.", "Current treatment is working early, with intensive care involved if it stops working.", "Check Peter's understanding of the oxygen target."),
    c008Hint("c008-hint-36", "run", "c008-run-understanding", "why you still need oxygen, but in a controlled amount", ["c008-communication", "c008-copdx-oxygen"], "Checking understanding", "Why ask him to explain it back?", "Breathlessness and drowsiness make information difficult to retain. Hearing Peter's explanation shows whether he understands that oxygen remains necessary and must be adjusted to a target.", "A yes answer does not show what he understood.", "Peter should leave this conversation trusting oxygen, not fearing it.", "Complete the three requested tasks first. Consider a brief real-care handover only if time remains and the examiner permits."),
    c008Hint("c008-hint-37", "run", "c008-run-handover", "being investigated", ["c008-copdx-main", "c008-copdx-niv", "c008-communication"], "Optional real-care handover", "If permitted, what is the first thing the receiving team needs?", "The station did not request a handover. After the three tasks, state only what this case has established: severity and likely trigger, the room-air and high-concentration oxygen readings, blood-gas trend, treatment given, why non-invasive ventilation began, the teams involved and what is still being investigated.", "Do not sacrifice a requested task for this handover.", "The next team hears the problem, treatment to this point and unresolved risks.", "Finish and wait for the examiner."),
    c008Hint("c008-hint-38", "run", "c008-run-end", "The station is complete", ["c008-amc-spec", "c008-amc-tips"], "Leaving the station", "Should I keep checking what I forgot?", "The case has ended. One breath, then begin the next stem from its own role, symptoms and tasks.", "Peter's oxygen target belongs to Peter's physiology.", "Case 8 is finished.", "Start the next case with no assumed diagnosis.")
  ];

  caseEight.essentialHintIds = [
    "c008-hint-03", "c008-hint-05", "c008-hint-06", "c008-hint-07",
    "c008-hint-10", "c008-hint-12", "c008-hint-15", "c008-hint-22",
    "c008-hint-24", "c008-hint-25", "c008-hint-28", "c008-hint-30",
    "c008-hint-31", "c008-hint-33", "c008-hint-35", "c008-hint-38"
  ];

  var c008Journey = {
    "c008-hint-12": { clock: "Immediate correction: control the oxygen, keep monitoring and obtain the blood gas." },
    "c008-hint-14": {
      say: ["The room-air saturation of 82% explains why oxygen was essential. Now 99% on 10 litres through a non-rebreather is above the usual 88% to 92% target while Peter remains drowsy and distressed. Keep oxygen going, but control it and check the blood gas."],
      deeper: ["Excess oxygen can worsen ventilation-perfusion mismatch and the Haldane effect, reducing effective carbon dioxide removal. It may be contributing to hypercapnia, but the COPD exacerbation, fatigue, infection and other causes still matter; this sequence does not prove oxygen is the sole cause of his drowsiness."]
    },
    "c008-hint-24": {
      say: ["Start with the pH: 7.25 means important acidaemia. The markedly raised carbon dioxide is driving it, while the raised bicarbonate shows chronic compensation was already present. This is acute-on-chronic hypercapnic respiratory failure."],
      deeper: ["The kidneys retain bicarbonate during chronic carbon dioxide elevation. That compensation cannot keep pace with this acute rise, so the pH falls."]
    },
    "c008-hint-27": { clock: "Deterioration interrupts interpretation: escalate breathing support now." },
    "c008-hint-30": { clock: "After non-invasive ventilation: reassess the patient and gas before moving on." },
    "c008-hint-31": { clock: "6 to 8 minutes: explain the diagnosis, oxygen plan and ongoing treatment." },
    "c008-hint-38": { clock: "Station closed: one breath, then leave this case here." }
  };

  caseEight.hints.forEach(function (hint) {
    var journey = c008Journey[hint.id];
    if (!journey) return;
    if (journey.clock) hint.clock = journey.clock;
    if (journey.say) hint.say = journey.say;
    if (journey.deeper) hint.deeper = journey.deeper;
  });
})();
