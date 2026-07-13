(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-007",
    globalId: "CP-C007",
    registryId: "CP-P2-C003",
    displayNumber: "Case 7",
    title: "Cough and worsening breathlessness over three days",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 2, title: "Acute Shortness of Breath" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "History Taking"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c007-stem-role",
          text: "You are a general practitioner working in a suburban medical clinic."
        },
        {
          id: "c007-stem-patient",
          text: "Mrs Margaret Wilson, a 74-year-old woman, attends because of a cough and worsening breathlessness over three days. She thinks she has a chest infection and is requesting antibiotics."
        },
        {
          id: "c007-stem-start",
          text: "No observations or examination findings are available at the start of the consultation."
        }
      ],
      tasks: [
        {
          id: "c007-task-assess",
          text: "Assess the patient, including a focused history and relevant examination findings.",
          timing: "4 minutes"
        },
        {
          id: "c007-task-explain",
          text: "Explain your most likely diagnosis and important alternative diagnoses to the patient.",
          timing: "2 minutes"
        },
        {
          id: "c007-task-management",
          text: "Address the patient's request for antibiotics and explain your management plan.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c007-run-opening",
          heading: "Opening and immediate safety check",
          turns: [
            {
              id: "c007-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c007-run-start", text: "You may begin." }]
            },
            {
              id: "c007-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-intro", text: "Hello, I am Ushana, one of the doctors here. Please confirm your full name and date of birth." }]
            },
            {
              id: "c007-turn-id",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-id", text: "Margaret Wilson, 2 May 1952." }]
            },
            {
              id: "c007-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-consent", text: "Thank you, Margaret. Is it okay if I ask focused questions about the cough, your breathing and your heart?" }]
            },
            {
              id: "c007-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-consent-answer", text: "Yes. I mainly need an antibiotic before this gets worse." }]
            },
            {
              id: "c007-turn-open",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-open", text: "Tell me what has happened from the beginning." }]
            },
            {
              id: "c007-turn-story",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-story", text: "I started coughing three days ago and thought I was getting a chest infection. Since yesterday I have become much more short of breath, even sitting still." }]
            },
            {
              id: "c007-turn-early-assessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-early-assessment", text: "I can see you are working hard to breathe. Please sit upright. While we continue, ask the nurse to record oxygen saturation, respiratory rate, pulse, blood pressure and temperature, attach cardiac monitoring and bring the emergency equipment." }]
            },
            {
              id: "c007-turn-observations",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c007-run-observations", text: "Margaret is distressed and speaks in short sentences. Respiratory rate is 30 breaths per minute, oxygen saturation is 89% on room air, pulse is 112 beats per minute and regular, blood pressure is 166/96 mmHg, and temperature is 36.8 degrees Celsius." }]
            },
            {
              id: "c007-turn-oxygen-transfer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-oxygen-transfer", text: "Your oxygen is dangerously low and you are breathless at rest. Start oxygen and titrate it to a saturation of 92% to 96%. Call Triple Zero for an ambulance now. Keep her upright, resting and monitored, and obtain intravenous access and a 12-lead ECG without delaying transfer." }]
            },
            {
              id: "c007-turn-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c007-run-action", text: "The nurse calls Triple Zero. Oxygen and monitoring are applied while the doctor continues the focused assessment." }]
            },
            {
              id: "c007-turn-ambulance-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-ambulance-question", text: "An ambulance? My husband can drive me after I get the antibiotic." }]
            },
            {
              id: "c007-turn-ambulance-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-ambulance-answer", text: "Your oxygen is low and your breathing could worsen quickly. The ambulance can monitor and treat you during transfer. Travelling by car would not be safe." }]
            }
          ]
        },
        {
          id: "c007-run-history",
          heading: "Focused history",
          turns: [
            {
              id: "c007-turn-breathing-pattern",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-breathing-pattern", text: "Is the breathlessness worse lying flat? Have you woken suddenly at night struggling to breathe?" }]
            },
            {
              id: "c007-turn-breathing-pattern-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-breathing-pattern-answer", text: "I slept sitting in a chair last night. I woke gasping twice the night before." }]
            },
            {
              id: "c007-turn-fluid",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-fluid", text: "Any ankle swelling or rapid weight change? Has your urine changed?" }]
            },
            {
              id: "c007-turn-fluid-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-fluid-answer", text: "Both ankles are swollen and I gained about two kilograms this week. I am passing less urine." }]
            },
            {
              id: "c007-turn-cough-infection",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-cough-infection", text: "Are you bringing up sputum? Any fever, chills, pleuritic pain, coughing blood or sick contacts?" }]
            },
            {
              id: "c007-turn-cough-infection-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-cough-infection-answer", text: "Only a little clear frothy sputum. No fever, chills, sharp pain, blood or sick contacts." }]
            },
            {
              id: "c007-turn-cardiac-danger",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-cardiac-danger", text: "Any chest pressure, palpitations, fainting or sudden severe pain?" }]
            },
            {
              id: "c007-turn-cardiac-danger-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-cardiac-danger-answer", text: "No." }]
            },
            {
              id: "c007-turn-vte-airways",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-vte-airways", text: "Any one-sided calf pain or swelling, recent immobility or clot? Any wheeze, asthma or choking?" }]
            },
            {
              id: "c007-turn-vte-airways-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-vte-airways-answer", text: "No." }]
            },
            {
              id: "c007-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-background", text: "Have you had heart failure, a heart attack, valve disease or kidney disease? What medicines do you take, and have any changed recently?" }]
            },
            {
              id: "c007-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-background-answer", text: "I had a heart attack three years ago and was told my heart was weaker. I take perindopril, bisoprolol, spironolactone and furosemide. I stopped the furosemide four days ago because I was tired of rushing to the toilet. I also started ibuprofen for my knee." }]
            }
          ]
        },
        {
          id: "c007-run-examination",
          heading: "Focused examination and treatment",
          turns: [
            {
              id: "c007-turn-examination-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-examination-request", text: "With consent, I assess her general appearance and perfusion, jugular venous pressure, heart sounds, both lung fields and peripheral oedema. Please provide the findings." }]
            },
            {
              id: "c007-turn-examination-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c007-run-examination-findings", text: "She has warm peripheries and is alert. Jugular venous pressure is elevated. There are fine crackles bilaterally to the mid-zones, without focal bronchial breathing. Heart sounds are normal without a new murmur. There is bilateral pitting oedema to the mid-shins." }]
            },
            {
              id: "c007-turn-ecg",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c007-run-ecg", text: "The ECG shows sinus tachycardia with old anterior Q waves and no acute ischaemic change." }]
            },
            {
              id: "c007-turn-medication-safety",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-medication-safety", text: "Do you have any medicine allergies, severe narrowing of the aortic valve, or recent sildenafil or tadalafil use?" }]
            },
            {
              id: "c007-turn-medication-safety-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-medication-safety-answer", text: "No." }]
            },
            {
              id: "c007-turn-gtn-check",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-gtn-check", text: "With systolic pressure well above 90, give glyceryl trinitrate 400 micrograms under the tongue according to local emergency protocol. Repeat every five minutes to a maximum of three doses while reassessing blood pressure and symptoms, and stop if hypotension develops." }]
            },
            {
              id: "c007-turn-diuretic",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-diuretic", text: "She has clear fluid overload and normally takes furosemide 40 milligrams daily. Under the clinic emergency protocol and within my competence, give furosemide 40 milligrams slowly intravenously while monitoring blood pressure. This must not delay the ambulance. Do not give a routine fluid bolus or morphine." }]
            },
            {
              id: "c007-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c007-run-treatment-action", text: "Oxygen, the first glyceryl trinitrate dose and slow intravenous furosemide are given while monitoring and ambulance transfer continue." }]
            },
            {
              id: "c007-turn-repeat-observations",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c007-run-repeat-observations", text: "Oxygen saturation improves to 94%, respiratory rate is 26 breaths per minute and blood pressure is 148/88 mmHg. Margaret says her breathing is beginning to ease." }]
            },
            {
              id: "c007-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c007-run-time", text: "Four minutes have elapsed. Please explain your most likely diagnosis and important alternative diagnoses to the patient." }]
            }
          ]
        },
        {
          id: "c007-run-explanation",
          heading: "Diagnosis and patient concerns",
          turns: [
            {
              id: "c007-turn-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-diagnosis", text: "Margaret, I can see why the cough made you think of an infection. Your low oxygen, difficulty lying flat, rapid weight gain, swollen legs and crackles in both lungs show that fluid is building up in your lungs because your heart is not coping. This is acute worsening of heart failure, also called pulmonary oedema." }]
            },
            {
              id: "c007-turn-heart-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-heart-question", text: "But I have no heart pain. How can it be my heart?" }]
            },
            {
              id: "c007-turn-heart-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-heart-answer", text: "Heart failure often causes breathlessness, cough and swelling rather than pain. Stopping the water tablet and taking ibuprofen may have contributed, but hospital still needs to check for a heart attack, abnormal rhythm, kidney problem or infection as a trigger." }]
            },
            {
              id: "c007-turn-differentials",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-differentials", text: "A chest infection is still possible, but you have no fever, purulent sputum or focal chest signs. The hospital will also assess for pulmonary embolism and other lung causes. The fluid and low oxygen are the immediate danger." }]
            },
            {
              id: "c007-turn-antibiotic-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-antibiotic-question", text: "So you will not give me an antibiotic?" }]
            },
            {
              id: "c007-turn-antibiotic-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-antibiotic-answer", text: "Not automatically. Antibiotics would not remove the fluid or correct the low oxygen. Hospital will check for infection and give antibiotics promptly if the findings support it." }]
            },
            {
              id: "c007-turn-hospital-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-hospital-plan", text: "Hospital will repeat the ECG and arrange blood tests for heart strain, kidney function, electrolytes and infection, a chest X-ray and an echocardiogram. If your breathing remains severe, the ambulance or hospital may use a tight-fitting mask called CPAP to push air into the lungs. A breathing tube is needed only if you become exhausted, less conscious or remain dangerously low in oxygen." }]
            },
            {
              id: "c007-turn-reassurance",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-reassurance", text: "Am I going to be all right?" }]
            },
            {
              id: "c007-turn-reassurance-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-reassurance-answer", text: "You are awake and your blood pressure is holding, which helps. This can still worsen quickly, so we are treating it now and transferring you with monitoring. We will stay with you until the ambulance team takes over." }]
            },
            {
              id: "c007-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c007-run-understanding", text: "Are you clear why the ambulance and hospital treatment are needed instead of antibiotics and a car journey?" }]
            },
            {
              id: "c007-turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c007-run-understanding-answer", text: "Yes. Fluid from my heart problem is affecting my lungs and oxygen, so I need monitored hospital treatment." }]
            },
            {
              id: "c007-turn-ambulance",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c007-run-ambulance", text: "The ambulance team arrives while oxygen, upright positioning and monitoring continue." }]
            },
            {
              id: "c007-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c007-run-handover", text: "Margaret Wilson, 74, has three days of cough with rapidly worsening breathlessness, orthopnoea, nocturnal dyspnoea, two-kilogram weight gain and bilateral oedema after stopping furosemide and starting ibuprofen. Respiratory rate is 30, oxygen saturation 89% on room air, pulse 112, blood pressure 166/96 and temperature 36.8. She has elevated JVP and bilateral crackles without focal consolidation. Suspected acute decompensated heart failure with pulmonary oedema. She is upright, monitored and receiving titrated oxygen, glyceryl trinitrate and protocol-guided intravenous furosemide. ECG shows sinus tachycardia without acute ischaemic change." }]
            },
            {
              id: "c007-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c007-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "National Heart Foundation of Australia and Cardiac Society of Australia and New Zealand",
        title: "Guidelines for the prevention, detection, and management of heart failure in Australia 2018",
        date: "Published online August 2018",
        url: "https://www.mja.com.au/journal/2018/209/8/national-heart-foundation-australia-and-cardiac-society-australia-and-new-0"
      },
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.2.10: The use of oxygen in emergencies",
        date: "Approved April 2021, current citation 2026",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies"
      },
      {
        organisation: "Australian Prescriber",
        title: "Managing acute pulmonary oedema",
        date: "April 2017",
        url: "https://australianprescriber.tg.org.au/articles/managing-acute-pulmonary-oedema.html"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Acute pulmonary oedema",
        date: "April 2017, current source accessed July 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/219095/cpg_acute-pulmonary-oedema.pdf"
      },
      {
        organisation: "Heart Foundation",
        title: "Heart failure",
        date: "Current source accessed July 2026",
        url: "https://www.heartfoundation.org.au/your-heart/heart-failure"
      }
    ]
  });

  var caseSeven = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-007"; });

  caseSeven.masteryFocus = {
    case: "Assess cough and worsening breathlessness without accepting the requested diagnosis, treat instability early and explain the final plan clearly.",
    clinical: "When a patient proposes a diagnosis, acknowledge it, test it against the observations and symptom pattern, then let the immediate danger set the next action."
  };

  caseSeven.sources = [
    {
      id: "healthdirect-breath-2025",
      title: "Shortness of breath",
      organisation: "Healthdirect Australia",
      date: "Last reviewed June 2025",
      url: "https://www.healthdirect.gov.au/shortness-of-breath"
    },
    {
      id: "hf-guideline-2018",
      title: "Guidelines for the prevention, detection, and management of heart failure in Australia",
      organisation: "National Heart Foundation of Australia and Cardiac Society of Australia and New Zealand",
      date: "Published online August 2018; accessed July 2026",
      url: "https://www.mja.com.au/journal/2018/209/8/national-heart-foundation-australia-and-cardiac-society-australia-and-new-0"
    },
    {
      id: "qas-pulmonary-oedema-2017",
      title: "Clinical practice guideline: Acute pulmonary oedema",
      organisation: "Queensland Ambulance Service",
      date: "April 2017; current source accessed July 2026",
      url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0026/219095/cpg_acute-pulmonary-oedema.pdf"
    },
    {
      id: "australian-prescriber-oedema-2017",
      title: "Managing acute pulmonary oedema",
      organisation: "Australian Prescriber",
      date: "April 2017; accessed July 2026",
      url: "https://australianprescriber.tg.org.au/articles/managing-acute-pulmonary-oedema.html"
    },
    {
      id: "anzcor-oxygen-2021",
      title: "Guideline 9.2.10: The Use of Oxygen in Emergencies",
      organisation: "Australian and New Zealand Committee on Resuscitation",
      date: "Approved April 2021; accessed July 2026",
      url: "https://www.anzcor.org/home/first-aid/guideline-9-2-10-the-use-of-oxygen-in-emergencies"
    },
    {
      id: "amc-spec-2026",
      title: "Clinical Examination Specifications V8.3",
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
      id: "acsqhc-handover-2026",
      title: "Communicating for Safety Standard",
      organisation: "Australian Commission on Safety and Quality in Health Care",
      date: "Updated April 2026",
      url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard"
    }
  ];

  caseSeven.reasoningCompass = {
    stem: {
      title: "Keep your place while reading",
      steps: [
        { time: "0 to 30 seconds", text: "Notice age, worsening breathlessness and the absence of observations. Plan an early stability check before deciding whether this is an infection." },
        { time: "30 to 60 seconds", text: "Hold the antibiotic request respectfully. Compare infection with cardiac, vascular and airway causes using onset, position, fluid symptoms, risks and examination." },
        { time: "1 to 2 minutes", text: "Set the task changes: assess with focused history and examination until minute 4, explain diagnosis and alternatives until minute 6, then address antibiotics and management until minute 8." }
      ],
      anchor: "Assessment 0 to 4 | Diagnosis and alternatives 4 to 6 | Antibiotic concern and management 6 to 8"
    },
    run: {
      title: "Keep your place during the run",
      steps: [
        { time: "0 to 1 minute", text: "Hear the first story, obtain observations in parallel and begin oxygen, monitoring and ambulance transfer if she is hypoxaemic or breathless at rest." },
        { time: "1 to 4 minutes", text: "Compare positional breathing, fluid retention, infection, cardiac danger, clot and airway features; obtain background, focused examination and ECG while treatment continues." },
        { time: "4 to 8 minutes", text: "At the prompt, explain the leading cause and alternatives, answer the antibiotic request, give hospital treatment and investigations, respond to fear and confirm understanding." }
      ],
      anchor: "Deterioration interrupts the clock. Repeat ABC, escalate treatment and transfer, then return to the unfinished task verb."
    }
  };

  function c007Hint(number, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return {
      id: "c007-hint-" + String(number).padStart(2, "0"),
      target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 },
      citationIds: citationIds,
      where: where,
      popUp: popUp,
      say: Array.isArray(say) ? say : [say],
      pause: pause,
      recap: recap,
      reorient: reorient
    };
  }

  caseSeven.hints = [
    c007Hint(1, "stem", "c007-stem-role", "suburban medical clinic", ["healthdirect-breath-2025", "amc-spec-2026"], "Reading the setting", "GP clinic. Can this stay a routine consultation?", "Only if observations and function support that. A clinic must recognise when breathing symptoms need emergency care and monitored transfer rather than completing every office-based step.", "The setting does not determine severity.", "Margaret is outside hospital with undifferentiated breathlessness.", "Read her age, trajectory and concern, then plan early observations."),
    c007Hint(2, "stem", "c007-stem-patient", "74-year-old woman", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading her age", "At 74, should I assume infection?", "No. Infection is common, but cardiac, vascular and other lung causes also become important. Age increases the need to assess broadly; it does not choose the diagnosis.", "Do not let one familiar cause own the presentation.", "Margaret has higher baseline cardiopulmonary risk.", "Look at how the symptoms developed and whether she is stable now."),
    c007Hint(3, "stem", "c007-stem-patient", "cough and worsening breathlessness over three days", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading the symptom pair", "Cough plus breathlessness sounds infectious. What else fits?", "Cough can come from airway irritation, lung infection or fluid in the lungs. Worsening breathlessness can also come from cardiac disease, clot, airway disease or anaemia. The next useful step is symptom pattern and observations, not a label.", "A symptom pair has several mechanisms.", "Her illness is progressive over three days.", "Clarify breathlessness at rest, position, night symptoms, sputum and danger features."),
    c007Hint(4, "stem", "c007-stem-patient", "requesting antibiotics", ["amc-spec-2026", "amc-tips-2024"], "Reading her request", "Should I challenge the antibiotic idea immediately?", "No. Acknowledge why cough suggested infection, then assess whether infection explains the whole picture. Address the request after you have evidence and a safe plan.", "The patient's proposed treatment is a concern to answer, not an instruction or a distraction.", "Margaret expects infection and antibiotics.", "Hold that concern while you assess stability and competing causes."),
    c007Hint(5, "stem", "c007-stem-start", "No observations or examination findings", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading what is missing", "Can I start with the full history?", "Begin with one short account, but obtain oxygen saturation, respiratory rate, pulse, blood pressure and temperature immediately. Without them, you cannot know whether the consultation is safe to continue routinely.", "Missing observations are unknown, not normal.", "The cause and severity are both unresolved.", "Plan history and observations in parallel."),
    c007Hint(6, "stem", "c007-task-assess", "focused history and relevant examination findings", ["amc-spec-2026", "amc-tips-2024"], "Reading task 1", "What fits into four minutes?", "Obtain the first story and observations, treat and transfer if unstable, then ask discriminating questions and request the focused heart, lung and fluid examination. Do not attempt a complete medical history.", "Assessment includes acting on danger as it appears.", "Task 1 has both history and examination.", "Reserve the first four minutes for evidence gathering and immediate safety."),
    c007Hint(7, "stem", "c007-task-explain", "most likely diagnosis and important alternative diagnoses", ["amc-spec-2026", "amc-tips-2024"], "Reading task 2", "How should diagnosis and alternatives differ?", "Explain the leading cause using Margaret's findings, then name only serious or plausible alternatives and what hospital will do to separate them.", "Do not turn the explanation into a long differential list.", "Minutes 4 to 6 are for clinical meaning.", "Hold the findings that argue for and against infection."),
    c007Hint(8, "stem", "c007-task-management", "request for antibiotics and explain your management plan", ["amc-spec-2026", "amc-tips-2024"], "Reading task 3", "Is saying yes or no to antibiotics enough?", "No. Explain whether antibiotics fit the findings, when they would be used, and give the immediate treatment, investigations and disposition supported by the assessment.", "A treatment decision needs a positive care plan.", "The final two minutes answer her concern and secure disposition.", "Prepare to connect every management step to a finding."),
    c007Hint(9, "run", "c007-run-start", "You may begin", ["amc-tips-2024"], "Starting the station", "What is the opening priority?", "Establish identity and consent, hear one short account and observe her breathing while staff prepare to obtain observations. Do not lead with an argument about antibiotics.", "Start with the patient and current function.", "The focused assessment begins.", "Use the first answer to decide how quickly observations are needed."),
    c007Hint(10, "run", "c007-run-consent-answer", "need an antibiotic", ["amc-tips-2024"], "Hearing her expectation", "She repeats the antibiotic request. Do I correct it now?", "Acknowledge it internally and continue. You need to know what began, what worsened and whether her oxygen and circulation are safe before discussing treatment choice.", "Concern heard; conclusion deferred.", "Margaret still believes this is a chest infection.", "Ask what happened from the beginning."),
    c007Hint(11, "run", "c007-run-story", "even sitting still", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading functional severity", "Breathless at rest. What changes now?", "That is a major deterioration from ordinary function. Stop treating this as a mild cough consultation and obtain observations and emergency equipment while you continue.", "Function can reveal severity before a diagnosis is known.", "Breathlessness has worsened sharply since yesterday.", "Sit her upright and assess oxygenation and circulation immediately."),
    c007Hint(12, "run", "c007-run-early-assessment", "working hard to breathe", ["healthdirect-breath-2025", "amc-tips-2024"], "Acting on appearance", "Should I finish the history before calling the nurse?", "No. Visible respiratory effort and breathlessness at rest justify parallel observations, monitoring and emergency preparation. History can continue in short questions.", "Do not make the patient wait for the sequence in your head.", "Margaret appears significantly unwell.", "Request the full observations and keep her upright."),
    c007Hint(13, "run", "c007-run-observations", "oxygen saturation is 89% on room air", ["healthdirect-breath-2025", "anzcor-oxygen-2021"], "Interpreting observations", "Could this still be managed after the consultation?", "No. Hypoxaemia, respiratory rate 30, short sentences and breathlessness at rest require immediate oxygen, monitoring and ambulance transfer. The preserved blood pressure does not make low oxygen safe.", "Treat instability before completing the cause analysis.", "Margaret is hypoxaemic and in respiratory distress.", "Start titrated oxygen and monitored transfer now."),
    c007Hint(14, "run", "c007-run-oxygen-transfer", "Call Triple Zero for an ambulance now", ["anzcor-oxygen-2021", "healthdirect-breath-2025"], "Escalating care", "Am I transferring before I know the diagnosis?", "Yes, because transfer is driven by oxygenation and work of breathing. Continue focused assessment and obtain an ECG while the ambulance is coming, without delaying it.", "Disposition can be decided from danger before cause is complete.", "Oxygen and monitoring are starting in the clinic.", "Explain why private car transport is unsafe."),
    c007Hint(15, "run", "c007-run-ambulance-question", "after I get the antibiotic", ["healthdirect-breath-2025", "amc-tips-2024"], "Hearing the transport concern", "She still thinks the antibiotic is the urgent step. What do I say?", "Answer the immediate risk: low oxygen and worsening breathing can deteriorate during travel, while an ambulance can monitor and treat. Promise to explain the likely cause after the focused assessment.", "Do not debate diagnosis while transfer is being secured.", "Margaret wants antibiotics and family transport.", "Keep the ambulance plan and ask positional breathing questions."),
    c007Hint(16, "run", "c007-run-breathing-pattern-answer", "slept sitting in a chair", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading positional breathlessness", "Why is sleeping upright so useful?", "Lying flat shifts blood from the legs and abdomen back toward the chest. If the heart cannot handle that volume, pressure rises in lung vessels and breathing worsens. Waking gasping adds the same concern.", "Position links the symptom to circulation, but more evidence is needed.", "Her breathing is worse flat and has disturbed sleep.", "Ask for weight, ankle swelling and urine change."),
    c007Hint(17, "run", "c007-run-fluid-answer", "gained about two kilograms this week", ["healthdirect-breath-2025", "amc-tips-2024"], "Reading fluid symptoms", "Weight gain, ankle swelling and less urine. What connects them?", "They suggest retained salt and water rather than tissue gain. Fluid can collect in the legs and raise pressure in the lung circulation, contributing to breathlessness.", "This makes a fluid-related cause more likely, but infection and other dangers still need testing.", "Positional breathlessness now sits beside systemic fluid retention.", "Ask about sputum, fever and pleuritic features."),
    c007Hint(18, "run", "c007-run-cough-infection-answer", "clear frothy sputum", ["healthdirect-breath-2025", "amc-tips-2024"], "Testing infection", "Does frothy sputum settle the cause?", "It can occur when fluid mixes with air in the lungs. The absence of fever, chills, purulent sputum and focal pleuritic symptoms makes bacterial infection less convincing, though not impossible.", "Compare the whole pattern rather than one sputum word.", "Fluid-related breathing symptoms are gaining support; infection is less supported.", "Check acute cardiac danger and clot or airway alternatives."),
    c007Hint(19, "run", "c007-run-cardiac-danger-answer", "No", ["healthdirect-breath-2025", "amc-tips-2024"], "Using absent chest symptoms", "No chest pressure. Does that exclude a heart cause?", "No. Older adults may have cardiac decompensation or myocardial ischaemia without pain. The answer reduces one typical presentation but does not override breathlessness and fluid findings.", "Absence of pain is useful, not decisive.", "No current chest pressure, palpitations, syncope or tearing pain is reported.", "Screen pulmonary embolism and airway causes briefly."),
    c007Hint(20, "run", "c007-run-vte-airways-answer", "No", ["healthdirect-breath-2025", "amc-tips-2024"], "Checking alternatives", "Are clot and airway disease now excluded?", "No. The history gives no supportive calf, immobility, wheeze or choking features, so they become less likely. Examination and hospital testing still matter if the course does not fit the leading explanation.", "A negative screen narrows attention without creating certainty.", "The symptom pattern increasingly favours fluid congestion.", "Ask about cardiac, valve and kidney history and recent medicine changes."),
    c007Hint(21, "run", "c007-run-background", "medicines do you take", ["healthdirect-breath-2025", "amc-tips-2024"], "Using the background history", "Why are medicine changes central here?", "They can reveal the known disease, what normally controls fluid and a recent precipitant. Ask what was stopped as well as what was started.", "Medication history is part of causal reasoning, not a routine list.", "The acute pattern now needs its underlying context.", "Listen for prior heart weakness, diuretics and medicines that retain fluid or affect kidneys."),
    c007Hint(22, "run", "c007-run-background-answer", "stopped the furosemide four days ago", ["healthdirect-breath-2025", "amc-tips-2024"], "Connecting medicine changes", "Both medicine changes came just before this illness. Is that enough to decide the cause?", "No. The timing makes them important possible contributors, but you still need examination evidence and hospital checks for other triggers. Explain their mechanisms only after the clinical syndrome is established.", "A plausible contributor does not replace examination.", "Known weaker heart, rapid fluid symptoms and recent medicine changes now connect.", "Request JVP, heart, lungs, perfusion and peripheral oedema."),
    c007Hint(23, "run", "c007-run-examination-request", "jugular venous pressure", ["healthdirect-breath-2025", "amc-tips-2024"], "Choosing the examination", "Why these particular findings?", "JVP and leg oedema assess systemic venous congestion; bilateral lung findings assess pulmonary fluid; heart sounds may reveal a valve trigger; perfusion helps distinguish a warm, hypertensive presentation from shock.", "Request findings that answer the competing explanations.", "History suggests fluid retention, but the physical distribution matters.", "Ask for the heart, lung and congestion findings together."),
    c007Hint(24, "run", "c007-run-examination-findings", "fine crackles bilaterally to the mid-zones", ["hf-guideline-2018", "qas-pulmonary-oedema-2017", "australian-prescriber-oedema-2017"], "Interpreting the examination", "Raised JVP, bilateral crackles and leg oedema. What does this establish?", "This is acute decompensated heart failure with pulmonary oedema. Raised cardiac filling pressure sends fluid into lung tissue and alveoli, causing crackles, low oxygen and breathlessness; systemic venous pressure contributes to JVP elevation and leg oedema.", "The findings connect both lungs and the peripheral fluid signs to one circulatory problem.", "The immediate syndrome is pulmonary congestion with preserved perfusion and high blood pressure.", "Use the ECG to look for rhythm or acute ischaemic triggers, then treat safely."),
    c007Hint(25, "run", "c007-run-ecg", "no acute ischaemic change", ["hf-guideline-2018", "qas-pulmonary-oedema-2017"], "Reading the ECG", "Does this exclude a heart attack trigger?", "No. It shows no acute change on this tracing and no arrhythmia, but hospital still needs serial ECGs and troponin because myocardial ischaemia can be dynamic or electrically subtle.", "One ECG reduces concern; it does not close the trigger search.", "Sinus tachycardia accompanies the acute stress, with old infarct evidence.", "Check contraindications before glyceryl trinitrate."),
    c007Hint(26, "run", "c007-run-medication-safety", "recent sildenafil or tadalafil use", ["qas-pulmonary-oedema-2017", "australian-prescriber-oedema-2017"], "Checking nitrate safety", "Why ask this now?", "PDE5 inhibitors combined with nitrates can cause profound hypotension. Severe aortic stenosis and low systolic pressure also change nitrate safety. This is a focused pre-treatment check.", "Ask only what can change the immediate medicine decision.", "Her systolic pressure remains high and no contraindication is reported.", "Give protocol-guided glyceryl trinitrate with frequent blood-pressure reassessment."),
    c007Hint(27, "run", "c007-run-gtn-check", "stop if hypotension develops", ["qas-pulmonary-oedema-2017", "australian-prescriber-oedema-2017"], "Using glyceryl trinitrate", "How does it help the lungs?", "Venodilation reduces blood returning under pressure to the congested heart, and arterial dilation can reduce the work of ejecting blood. Lower cardiac filling pressure can reduce pulmonary congestion, but blood pressure must support safe dosing.", "The medicine is titrated to physiology and response.", "Margaret is hypertensive with pulmonary oedema and no stated contraindication.", "Address the clear fluid overload with her known diuretic dose under local protocol."),
    c007Hint(28, "run", "c007-run-diuretic", "clear fluid overload", ["hf-guideline-2018", "qas-pulmonary-oedema-2017", "australian-prescriber-oedema-2017"], "Using furosemide", "Why give a diuretic here but not to every breathless patient?", "She has weight gain, oedema, raised JVP, bilateral crackles and a known daily furosemide dose that she stopped. Those findings support excess fluid. A routine fluid bolus would worsen lung congestion.", "Treatment follows demonstrated volume status.", "Oxygen and nitrate address immediate gas exchange and pressure; furosemide begins fluid removal.", "Reassess oxygen, respiratory rate, blood pressure and symptoms."),
    c007Hint(29, "run", "c007-run-repeat-observations", "breathing is beginning to ease", ["qas-pulmonary-oedema-2017", "australian-prescriber-oedema-2017"], "Reading treatment response", "Her oxygen and breathing improved. Can the ambulance be cancelled?", "No. Improvement supports the treatment direction, but she remains tachypnoeic after acute hypoxaemia and needs hospital investigation, continued therapy and monitored escalation if she worsens.", "Response confirms progress, not safe discharge.", "Margaret is improving while transfer continues.", "At the four-minute prompt, stop assessment and explain the diagnosis and alternatives."),
    c007Hint(30, "run", "c007-run-time", "Four minutes have elapsed", ["amc-spec-2026", "amc-tips-2024"], "Changing tasks", "I could ask more history. Should I?", "No. The examiner has moved to explanation. Use the evidence already gathered, while oxygen, monitoring and transfer continue in the background.", "Follow the new task verb instead of polishing the old task.", "Focused history, examination and immediate care are complete for this station.", "Explain the leading diagnosis in Margaret's everyday terms."),
    c007Hint(31, "run", "c007-run-diagnosis", "fluid is building up in your lungs", ["hf-guideline-2018", "qas-pulmonary-oedema-2017"], "Explaining the diagnosis", "How do I connect all the findings without a lecture?", "Start with what she feels: fluid in the lungs causes cough, breathlessness and low oxygen. Then link the positional symptoms, weight gain, oedema, raised JVP and bilateral crackles to the heart struggling with fluid.", "Use her evidence before the medical name.", "Margaret now hears why this differs from a simple chest infection.", "Answer her concern about having no heart pain."),
    c007Hint(32, "run", "c007-run-heart-question", "I have no heart pain", ["hf-guideline-2018", "amc-tips-2024"], "Hearing the concern", "Does she think heart disease must hurt?", "Yes. Correct that specific assumption: heart failure commonly presents through breathlessness, cough, orthopnoea and swelling. Pain is not required.", "Do not dismiss the question; it exposes the belief shaping her decisions.", "Margaret doubts the diagnosis because she expected chest pain.", "Explain the likely medicine contributors and the trigger search."),
    c007Hint(33, "run", "c007-run-heart-answer", "Stopping the water tablet and taking ibuprofen may have contributed", ["hf-guideline-2018", "australian-prescriber-oedema-2017"], "Explaining contributors", "How do I say this without blaming her?", "Furosemide normally helps remove salt and water. Stopping it may allow fluid to accumulate; ibuprofen may promote retention and affect kidney function. Say may have contributed, because hospital still needs to search for ischaemia, rhythm, infection, renal and valve triggers.", "Explain the mechanism, not fault.", "There is a plausible medication-related precipitant, not complete certainty about the trigger.", "Describe the important alternatives and how the current evidence compares."),
    c007Hint(34, "run", "c007-run-differentials", "chest infection is still possible", ["hf-guideline-2018", "healthdirect-breath-2025"], "Explaining alternatives", "Why keep infection after the heart failure evidence?", "Because cough can have more than one cause and older patients may lack fever. It is less supported by clear sputum, normal temperature and no focal bronchial breathing. Pulmonary embolism and other lung disease remain hospital checks if findings or response differ.", "A leading diagnosis does not require pretending alternatives are impossible.", "Pulmonary oedema explains the present physiology best.", "Move to the antibiotic request and give a positive management plan."),
    c007Hint(35, "run", "c007-run-antibiotic-answer", "Antibiotics would not remove the fluid", ["hf-guideline-2018", "amc-tips-2024"], "Addressing antibiotics", "How do I decline without sounding dismissive?", "Acknowledge that infection was reasonable to consider, then explain the mismatch: antibiotics treat bacteria, not lung fluid or low oxygen. Hospital will give them promptly if examination, imaging or blood tests support infection.", "Do not replace her requested treatment with an unexplained no.", "The antibiotic question has been answered with evidence and a contingency.", "Explain what hospital will investigate and treat instead."),
    c007Hint(36, "run", "c007-run-hospital-plan", "blood tests for heart strain, kidney function, electrolytes and infection", ["hf-guideline-2018", "australian-prescriber-oedema-2017"], "Planning investigations", "What question does each test answer?", "Serial ECG and troponin assess ischaemia; kidney function and electrolytes guide diuretic and heart medicines; infection markers test the competing cause; chest X-ray shows congestion or consolidation; echocardiography assesses cardiac structure and function.", "Name tests with a purpose, not as a shopping list.", "Transfer is already arranged because testing cannot be completed safely in clinic.", "Add the escalation option if oxygen and work of breathing remain severe."),
    c007Hint(37, "run", "c007-run-hospital-plan", "tight-fitting mask called CPAP", ["qas-pulmonary-oedema-2017", "australian-prescriber-oedema-2017"], "Explaining CPAP", "How does pressure from a mask help when there is fluid?", "Positive airway pressure helps keep fluid-affected alveoli participating in gas exchange, reduces breathing work and can reduce cardiac loading. It is considered for persistent severe distress with appropriate monitoring and blood pressure.", "Escalate support from the current response, not automatically.", "Margaret is improving but remains at risk of respiratory fatigue.", "Answer her fear with honest current strengths and remaining risk."),
    c007Hint(38, "run", "c007-run-reassurance", "Am I going to be all right", ["amc-tips-2024", "hf-guideline-2018"], "Hearing fear", "Should I promise that treatment will work?", "No. Say what is favourable now: she is alert, her blood pressure is maintained and oxygen is improving. Then say why urgency remains and what the team is doing to reduce risk.", "Reassurance should be truthful and linked to action.", "Margaret understands this is serious and wants a prognosis.", "Keep the ambulance, monitoring and treatment visible in the answer."),
    c007Hint(39, "run", "c007-run-understanding", "why the ambulance and hospital treatment are needed", ["amc-tips-2024", "amc-spec-2026"], "Checking understanding", "Is asking are you clear enough?", "The stronger check is whether Margaret can state the problem and plan herself. That reveals whether the antibiotic and private-car assumptions have actually changed.", "Agreement is not the same as understanding.", "Diagnosis, alternatives, antibiotics and management have been explained.", "Listen for her explanation in her own words."),
    c007Hint(40, "run", "c007-run-ambulance", "ambulance team arrives", ["acsqhc-handover-2026", "anzcor-oxygen-2021"], "Transferring care", "Are the three requested tasks complete now?", "Yes. If the examiner permits the actual transfer to continue, give a brief handover as real-care coordination, not as a fourth station task. Oxygen, upright positioning and monitoring continue through the changeover.", "Do not invent another task, but do not abandon safe transfer.", "Margaret accepts monitored hospital transfer.", "If permitted, give the ambulance team the clinical sequence, treatment and response."),
    c007Hint(41, "run", "c007-run-handover", "rapidly worsening breathlessness", ["acsqhc-handover-2026", "hf-guideline-2018"], "Opening the handover", "What information should lead?", "Identity, trajectory, positional symptoms, rapid fluid gain and the medicine changes establish why this is more than an uncomplicated cough.", "Begin with the current problem and decisive context.", "The receiving team hears how the illness evolved.", "Give the initial observations and examination findings next."),
    c007Hint(42, "run", "c007-run-handover", "Suspected acute decompensated heart failure", ["acsqhc-handover-2026", "qas-pulmonary-oedema-2017"], "Stating assessment and treatment", "How much detail belongs here?", "Name pulmonary oedema, give the hypoxaemia and congestion findings, then state oxygen, nitrate and protocol-guided diuretic treatment. This makes the diagnosis and immediate response auditable.", "A safe handover connects findings to action.", "The working diagnosis and treatment are explicit.", "Finish with current monitoring, ECG information and unresolved trigger checks."),
    c007Hint(43, "run", "c007-run-handover", "without acute ischaemic change", ["acsqhc-handover-2026", "hf-guideline-2018"], "Closing the handover", "Could this last phrase falsely reassure the team?", "Avoid implying that one ECG excludes ischaemia. The receiving team still needs serial ECG and troponin, renal and electrolyte assessment, chest imaging and continued respiratory monitoring.", "End with what remains unresolved.", "Responsibility can now pass with the current findings and treatment clear.", "Stop once the ambulance team accepts care."),
    c007Hint(44, "run", "c007-run-end", "The station is complete", ["amc-tips-2024"], "Releasing the station", "Should I add prevention advice?", "No. The requested explanation, antibiotic concern and management are complete. Let this case go: hear the patient's explanation, test it against physiology, treat danger and explain the safer plan.", "Do not add a new consultation after the examiner stops you.", "This station is finished.", "Take one breath and read the next stem without carrying forward the antibiotic debate.")
  ];
})();
