(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-008",
    globalId: "CP-C008",
    registryId: "CP-P2-C004",
    displayNumber: "Case 8",
    title: "Worsening breathlessness with COPD",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
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
              lines: [{ id: "c008-run-findings", text: "Peter is receiving oxygen at 10 litres per minute through a non-rebreather mask. He opens his eyes to voice and is mildly confused. Respiratory rate is 30 breaths per minute with accessory-muscle use, oxygen saturation is 99%, pulse is 116 beats per minute and regular, blood pressure is 148/84 mmHg, and temperature is 38.1 degrees Celsius. His airway is patent." }]
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
})();
