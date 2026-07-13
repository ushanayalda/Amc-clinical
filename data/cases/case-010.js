(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-010",
    globalId: "CP-C010",
    registryId: "CP-P3-C002",
    displayNumber: "Case 10",
    title: "Sudden slurred speech, weakness and confusion",
    status: "exam_complete",
    statusLabel: "Exam case complete",
    reasoningAvailable: false,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 3, title: "Sudden Neurological Deficit" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Adult emergency medicine"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c010-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c010-stem-patient",
          text: "Mr Min-jae Park, a 64-year-old man with type 2 diabetes, has presented with sudden slurred speech, left-sided weakness and confusion. His wife, Soo-jin, is present."
        },
        {
          id: "c010-stem-start",
          text: "Min-jae is drowsy but responds to voice. The examiner will provide findings when requested."
        }
      ],
      tasks: [
        {
          id: "c010-task-assess",
          text: "Assess Min-jae and discuss your initial management.",
          timing: "4 minutes"
        },
        {
          id: "c010-task-interpret",
          text: "Interpret the information provided and obtain a focused history from Min-jae and Soo-jin.",
          timing: "2 minutes"
        },
        {
          id: "c010-task-explain",
          text: "Explain your assessment and management plan to Min-jae and Soo-jin.",
          timing: "2 minutes"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c010-run-immediate",
          heading: "Rapid neurological assessment and glucose correction",
          turns: [
            {
              id: "c010-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c010-run-start", text: "You may begin." }]
            },
            {
              id: "c010-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c010-run-first-action", text: "The doctor performs hand hygiene, asks the nurse to prepare the resuscitation equipment and approaches the patient." }]
            },
            {
              id: "c010-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-intro", text: "Hello, I am Ushana, one of the emergency doctors. Min-jae, please tell me your full name and what feels wrong." }]
            },
            {
              id: "c010-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c010-run-opening", text: "Min-jae... Park. My left side... strange." }]
            },
            {
              id: "c010-turn-assessment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-assessment", text: "I assess airway, breathing, circulation and conscious state. Attach cardiac and oxygen-saturation monitoring, record blood pressure and temperature, obtain intravenous access and check capillary blood glucose immediately. At the same time, assess facial movement, arm drift, speech, pupils and both legs. Please provide all findings." }]
            },
            {
              id: "c010-turn-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c010-run-findings", text: "Min-jae opens his eyes to voice, is confused and follows one-step commands. His airway is patent. Respiratory rate is 16 breaths per minute, oxygen saturation is 97% on room air, pulse is 98 beats per minute and regular, blood pressure is 154/88 mmHg and temperature is 36.4 degrees Celsius. He is pale and clammy. Speech is slurred, there is left lower facial droop, left arm power is 1 out of 5 and left leg power is 3 out of 5. Pupils are equal and reactive. Capillary blood glucose is 2.1 mmol/L." }]
            },
            {
              id: "c010-turn-treatment",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-treatment", text: "This is clinically important hypoglycaemia with an unsafe swallow and altered conscious state. Do not give food, drink or glucose by mouth. Give glucose 10%, 15 grams, which is 150 millilitres, intravenously now. Recheck blood glucose, conscious state and the complete neurological examination in 5 minutes. If glucose remains below 4 mmol/L, repeat glucose 10%, 10 grams, which is 100 millilitres, and reassess every 5 minutes until it is at least 4 mmol/L. If intravenous access cannot be obtained promptly, give glucagon 1 milligram intramuscularly. His oxygen saturation is adequate, so do not give routine oxygen. Call the senior emergency doctor and activate the acute stroke pathway while we correct the glucose. Soo-jin, while treatment is being given, what exact time was Min-jae last completely normal and when did these signs begin?" }]
            },
            {
              id: "c010-turn-treatment-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c010-run-treatment-action", text: "Intravenous glucose is given while monitoring, stroke-pathway activation and repeated assessment continue." }]
            },
            {
              id: "c010-turn-early-onset-answer",
              speaker: "Wife",
              kind: "spoken",
              lines: [{ id: "c010-run-early-onset-answer", text: "He was completely normal at 11:40. At noon he suddenly became sweaty and confused, then his speech slurred and his left arm dropped." }]
            },
            {
              id: "c010-turn-wife-question",
              speaker: "Wife",
              kind: "spoken",
              lines: [{ id: "c010-run-wife-question", text: "Can low sugar really make only one side weak? I thought this was a stroke." }]
            },
            {
              id: "c010-turn-wife-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-wife-answer", text: "Low glucose can disturb brain function and sometimes closely imitate a stroke, including one-sided weakness. We are correcting it immediately because the brain needs glucose. We will repeat the examination after correction. A low result does not automatically exclude a simultaneous stroke." }]
            },
            {
              id: "c010-turn-repeat-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c010-run-repeat-findings", text: "Five minutes later, blood glucose is 4.8 mmol/L. Min-jae is alert and oriented. His speech is clear, facial movement is symmetrical, and power and sensation are normal in all four limbs." }]
            },
            {
              id: "c010-turn-response-interpretation",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-response-interpretation", text: "The complete neurological recovery immediately after glucose strongly supports hypoglycaemia as a stroke mimic. I will still document the original focal findings, repeat glucose and neurological observations, and review the timeline and vascular risk. Any persistent, recurrent or unexplained focal deficit requires immediate continuation of the acute stroke imaging pathway." }]
            }
          ]
        },
        {
          id: "c010-run-history",
          heading: "Cause, recurrence risk and alternative diagnoses",
          turns: [
            {
              id: "c010-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-consent", text: "Min-jae, you are much clearer now. Is it okay if Soo-jin helps with the history while I ask you both questions?" }]
            },
            {
              id: "c010-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c010-run-consent-answer", text: "Yes. I do not remember much of what happened." }]
            },
            {
              id: "c010-turn-onset",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-onset", text: "Soo-jin, before this started, did Min-jae have any seizure, severe headache, collapse, head injury or loss of consciousness?" }]
            },
            {
              id: "c010-turn-onset-answer",
              speaker: "Wife",
              kind: "spoken",
              lines: [{ id: "c010-run-onset-answer", text: "No seizure, headache, fall or blackout." }]
            },
            {
              id: "c010-turn-trigger-history",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-trigger-history", text: "What diabetes medicines did you take today? Did you take any extra, intentionally or accidentally? What have you eaten? Any vomiting, diarrhoea, fever, alcohol, unusual exercise, kidney or liver problem?" }]
            },
            {
              id: "c010-turn-trigger-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c010-run-trigger-answer", text: "I took my usual metformin and gliclazide MR 60 milligrams at seven. I have had diarrhoea for two days and ate almost nothing today. I did not take extra medicine or drink alcohol. I have stage 3 kidney disease." }]
            },
            {
              id: "c010-turn-background",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-background", text: "Any previous severe low glucose, impaired warning symptoms, stroke, transient ischaemic attack, atrial fibrillation or migraine? What other medicines and allergies do you have?" }]
            },
            {
              id: "c010-turn-background-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c010-run-background-answer", text: "Only mild hypos before. No stroke, heart rhythm problem or migraine. I also take perindopril and atorvastatin. No allergies." }]
            },
            {
              id: "c010-turn-investigations",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-investigations", text: "Check serial blood glucose and ketones, electrolytes, kidney and liver function, full blood count and inflammatory markers, and obtain an ECG. Review his medication supply and recent renal results. Investigate infection or another precipitant from the history and examination. Discuss the focal presentation with the senior and stroke team before de-escalating imaging." }]
            },
            {
              id: "c010-turn-recurrence",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c010-run-recurrence", text: "Forty-five minutes later Min-jae becomes sweaty again. He remains neurologically normal, but blood glucose has fallen to 3.1 mmol/L." }]
            },
            {
              id: "c010-turn-recurrence-management",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-recurrence-management", text: "His glucose is falling again. Ongoing gliclazide effect, poor intake, acute illness and chronic kidney disease, with possible acute kidney injury, increase the risk of recurrence. He is alert and has passed a swallowing screen, so give 15 to 20 grams of oral glucose and recheck his glucose and symptoms in 10 to 15 minutes. Once corrected, give longer-acting carbohydrate when tolerated. Continue close glucose checks, hold gliclazide, and seek urgent toxicology and diabetes advice. If hypoglycaemia keeps recurring, discuss octreotide for a sulfonylurea effect. If oral treatment becomes unsafe or ineffective, use intravenous glucose according to protocol." }]
            },
            {
              id: "c010-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c010-run-time", text: "Please explain the likely diagnosis, remaining concerns and ongoing management plan." }]
            }
          ]
        },
        {
          id: "c010-run-explanation",
          heading: "Explanation and ongoing safety plan",
          turns: [
            {
              id: "c010-turn-diagnosis",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-diagnosis", text: "Min-jae and Soo-jin, the low blood glucose temporarily stopped parts of Min-jae's brain from working normally. That caused confusion, slurred speech and one-sided weakness that looked like a stroke. All of those signs resolved after glucose, so hypoglycaemia is the most likely explanation." }]
            },
            {
              id: "c010-turn-cause",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-cause", text: "Gliclazide makes the pancreas release insulin. Taking it while eating very little, combined with kidney disease and diarrhoea, can make glucose fall and then fall again after initial treatment. We must not treat this as one corrected number and send you home." }]
            },
            {
              id: "c010-turn-stroke-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c010-run-stroke-question", text: "So you are certain I did not have a stroke?" }]
            },
            {
              id: "c010-turn-stroke-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-stroke-answer", text: "The rapid and complete recovery with glucose makes a stroke much less likely, but I will not use the low glucose alone to dismiss it. We will repeat neurological examinations and involve the stroke team. If weakness or speech difficulty returns, or any finding remains abnormal, urgent brain and vessel imaging continues immediately." }]
            },
            {
              id: "c010-turn-home-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c010-run-home-question", text: "I feel normal now. Can Soo-jin drive me home after lunch?" }]
            },
            {
              id: "c010-turn-home-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-home-answer", text: "No. Your glucose has already fallen again, and gliclazide can cause recurrent episodes. You need monitored hospital care, repeated glucose checks, assessment of kidney function and illness, and review of your diabetes medicines. Do not drive until your treating team has reviewed the episode and given you advice." }]
            },
            {
              id: "c010-turn-understanding",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c010-run-understanding", text: "Please tell me why the first improvement did not make it safe to go home." }]
            },
            {
              id: "c010-turn-understanding-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c010-run-understanding-answer", text: "The gliclazide can keep lowering my glucose, and the stroke-like signs must be checked again if they return." }]
            },
            {
              id: "c010-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c010-run-handover", text: "Min-jae Park, 64, presented with confusion, dysarthria and left face, arm and leg weakness. He was last known well at 11:40 and symptoms began at noon. Initial glucose was 2.1 with GCS 13. Oxygen saturation was 97% on room air and other observations were stable. Because swallowing was unsafe, he received glucose 10%, 15 grams intravenously. At 5 minutes glucose was 4.8, GCS 15 and the neurological examination normalised completely. He took gliclazide MR 60 milligrams despite minimal intake during two days of diarrhoea and has stage 3 kidney disease. Glucose fell again to 3.1 at 45 minutes without recurrent focal deficit. Oral glucose and longer-acting carbohydrate were given after a safe swallow assessment. Gliclazide is held. He requires monitored admission, serial glucose and neurological checks, renal and trigger assessment, medication review, and senior stroke, toxicology and diabetes input." }]
            },
            {
              id: "c010-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c010-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian and New Zealand Committee on Resuscitation",
        title: "Guideline 9.2.9: First Aid Management of a Diabetic Emergency",
        date: "Approved November 2024, current citation 2026",
        url: "https://www.anzcor.org/home/first-aid/guideline-9-2-9-first-aid-management-of-a-diabetic-emergency"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical Practice Guideline: Diabetic emergency, Hypoglycaemia",
        date: "June 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0024/219048/CPG_Diabetic-emergency-Hypoglycaemia.pdf"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Drug Therapy Protocol: Glucose 10%",
        date: "June 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0025/219337/DTP_Glucose-10.pdf"
      },
      {
        organisation: "Stroke Foundation",
        title: "Australian and New Zealand Living Clinical Guidelines for Stroke Management",
        date: "Living guideline current July 2026",
        url: "https://informme.org.au/guidelines/living-clinical-guidelines-for-stroke-management"
      }
    ]
  });
})();
