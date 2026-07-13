(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-010",
    globalId: "CP-C010",
    registryId: "CP-P3-C002",
    displayNumber: "Case 10",
    title: "Sudden slurred speech, weakness and confusion",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 3, title: "Sudden Neurological Deficit" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
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
          text: "The examiner will provide findings and investigation results when requested."
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

  var caseTen = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-010"; });
  caseTen.masteryFocus = {
    case: "Assess sudden focal neurological symptoms, preserve the treatment window and use bedside results plus repeat examination to decide what remains urgent.",
    clinical: "In any neurological emergency, check reversible physiology early, treat it, reassess the original deficit and continue investigating anything that persists or returns."
  };
  caseTen.sources = [
    { id: "c010-anzcor-diabetes", title: "Guideline 9.2.9: First Aid Management of a Diabetic Emergency", organisation: "Australian and New Zealand Committee on Resuscitation", date: "Approved November 2024; accessed July 2026", url: "https://www.anzcor.org/home/first-aid/guideline-9-2-9-first-aid-management-of-a-diabetic-emergency" },
    { id: "c010-qas-hypo", title: "Clinical Practice Guideline: Diabetic emergency, Hypoglycaemia", organisation: "Queensland Ambulance Service", date: "June 2026", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0024/219048/CPG_Diabetic-emergency-Hypoglycaemia.pdf" },
    { id: "c010-qas-glucose", title: "Drug Therapy Protocol: Glucose 10%", organisation: "Queensland Ambulance Service", date: "June 2026", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0025/219337/DTP_Glucose-10.pdf" },
    { id: "c010-stroke-guideline", title: "Australian and New Zealand Living Clinical Guidelines for Stroke Management", organisation: "Stroke Foundation", date: "Living guideline accessed July 2026", url: "https://informme.org.au/guidelines/living-clinical-guidelines-for-stroke-management" },
    { id: "c010-amc-spec", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "c010-amc-tips", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "c010-communication", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Accessed July 2026", url: "https://www.safetyandquality.gov.au/standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseTen.reasoningCompass = {
    stem: {
      title: "Keep physiology beside neurology",
      steps: [
        { time: "0 to 30 seconds", text: "Recognise a sudden focal neurological syndrome in a drowsy patient. Prepare ABCDE, glucose and a rapid neurological assessment together." },
        { time: "30 to 60 seconds", text: "Plan to treat any immediate reversible abnormality, then repeat the same conscious-state and neurological findings to see what changed." },
        { time: "1 to 2 minutes", text: "Fix the switches: assess and manage until minute 4, interpret and take focused history until minute 6, then explain the assessment and plan." }
      ],
      anchor: "Assess and manage 0 to 4 | Interpret and focused history 4 to 6 | Explain 6 to 8"
    },
    run: {
      title: "Treat, repeat, then decide",
      steps: [
        { time: "0 to 4 minutes", text: "Assess ABCDE, glucose and focal neurology. Treat any dangerous reversible finding immediately while preserving onset time and the stroke pathway." },
        { time: "4 to 6 minutes", text: "Compare the repeat examination with the original, identify medicine, intake, illness and kidney factors, then watch for recurrence." },
        { time: "6 to 8 minutes", text: "At the prompt, explain the likely cause, what the treatment response proves, what remains uncertain and why continued monitoring is needed." }
      ],
      anchor: "If consciousness falls, swallowing becomes unsafe or focal signs return, interrupt the task, stabilise and reassess, then return to the unfinished task verb."
    }
  };

  function c010Hint(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient, clock) {
    var hint = { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
    if (clock) hint.clock = clock;
    return hint;
  }
  caseTen.hints = [
    c010Hint("c010-hint-01", "stem", "c010-stem-role", "emergency department", ["c010-amc-spec", "c010-amc-tips"], "Reading the setting", "What should the emergency setting make available immediately?", "Monitoring, intravenous access, bedside glucose, resuscitation equipment and rapid imaging pathways. Use them in parallel rather than waiting for a complete history.", "The first result may require treatment before the history is finished.", "This begins as an emergency neurological assessment.", "Read the symptoms and the medical background together."),
    c010Hint("c010-hint-02", "stem", "c010-stem-patient", "64-year-old man with type 2 diabetes", ["c010-amc-tips", "c010-stroke-guideline"], "Reading the background", "Does diabetes settle the cause?", "No. Diabetes increases vascular risk and its treatment can also cause metabolic emergencies. Glucose, timing and examination must separate those possibilities.", "A risk factor can support more than one cause.", "Min-jae has diabetes, but no medicines, intake or glucose result yet.", "Now place the three sudden neurological symptoms together."),
    c010Hint("c010-hint-03", "stem", "c010-stem-patient", "sudden slurred speech, left-sided weakness and confusion", ["c010-stroke-guideline", "c010-amc-tips"], "Reading the presenting syndrome", "This looks like stroke. Should I activate the pathway?", "Treat it as a time-critical focal neurological syndrome. Obtain onset time, perform ABCDE and check glucose immediately. A reversible mimic must be corrected, but that should not make you ignore persistent focal findings.", "Recognition comes before certainty about cause.", "Speech, unilateral weakness and confusion demand urgent neurological and physiological assessment.", "Notice who can provide collateral while Min-jae is drowsy."),
    c010Hint("c010-hint-04", "stem", "c010-stem-patient", "His wife, Soo-jin, is present", ["c010-communication", "c010-amc-tips"], "Planning collateral", "When should I use Soo-jin?", "Ask Min-jae directly first, then use Soo-jin for exact onset, medicines, intake, illness and baseline function. In an emergency, brief consent is enough if he can give it.", "Collateral supports him; it does not erase him from the conversation.", "Soo-jin can fill treatment-critical gaps.", "Read the conscious-state information."),
    c010Hint("c010-hint-05", "stem", "c010-stem-start", "findings and investigation results when requested", ["c010-stroke-guideline", "c010-amc-tips"], "Working with missing findings", "The stem gives symptoms but no conscious state or observations. What is my first move?", "Do not assume either stability or deterioration. Begin ABCDE, obtain observations and check glucose immediately; then decide how much direct history is safe and useful.", "Missing data is a request cue, not permission to fill it in.", "Min-jae has focal symptoms; his current physiology and conscious state remain unknown.", "Anchor the first four-minute task."),
    c010Hint("c010-hint-06", "stem", "c010-task-assess", "Assess Min-jae and discuss your initial management", ["c010-amc-spec", "c010-amc-tips"], "Anchoring task one", "What must fit before minute 4?", "ABCDE, observations, immediate glucose, rapid focal examination, onset time, treatment of a dangerous abnormality and simultaneous senior and stroke-pathway involvement.", "Assessment and management are one sequence here.", "The first four minutes should show action and repeated assessment.", "Leave a deliberate switch to interpretation and focused history.", "0 to 4 minutes"),
    c010Hint("c010-hint-07", "stem", "c010-task-interpret", "Interpret the information provided", ["c010-amc-spec", "c010-amc-tips"], "Anchoring task two", "What comparison will matter most?", "Compare glucose, conscious state and the complete neurological examination before and after treatment. Then explain whether the response supports a mimic and what would keep urgent imaging active.", "Do not interpret a glucose number without the clinical response.", "Minute 4 to 6 combines interpretation with a focused cause and recurrence history.", "Keep the final two minutes for Min-jae and Soo-jin.", "4 to 6 minutes"),
    c010Hint("c010-hint-08", "stem", "c010-task-explain", "assessment and management plan", ["c010-amc-spec", "c010-amc-tips", "c010-communication"], "Anchoring task three", "What does the explanation need to resolve?", "Explain what temporarily disrupted brain function, why the focal signs still require repeated examination, why glucose may fall again and why normal appearance now does not make discharge safe.", "Do not give a generic diabetes lecture.", "The final task is cause, remaining uncertainty and safety plan.", "Begin the run with bedside physiology beside neurology.", "6 to 8 minutes"),
    c010Hint("c010-hint-09", "run", "c010-run-start", "You may begin", ["c010-amc-spec", "c010-amc-tips"], "Starting the run", "What is the first internal instruction?", "Assess conscious state, airway and glucose while observing the focal deficit. Ask for emergency equipment without delaying contact with Min-jae.", "Do not decide the diagnosis from the stem.", "The first task is assess and manage.", "Listen to Min-jae's first answer."),
    c010Hint("c010-hint-10", "run", "c010-run-opening", "My left side... strange", ["c010-stroke-guideline"], "Hearing the first answer", "He cannot describe it well. What now?", "Move to observable findings: face, arm, leg, speech, pupils and conscious state. At the same time, obtain observations and glucose.", "Do not force a detailed symptom narrative from a drowsy patient.", "There is a current left-sided focal complaint with impaired speech.", "Use one assessment request to gather physiology and neurology."),
    c010Hint("c010-hint-11", "run", "c010-run-assessment", "check capillary blood glucose immediately", ["c010-stroke-guideline", "c010-amc-tips"], "Testing a reversible cause", "Why is glucose part of the first neurological assessment?", "The brain depends on continuous glucose delivery. Low glucose can cause confusion, seizures and sometimes focal deficits, and it can be treated at once.", "Check it early without delaying the stroke response.", "A rapid reversible cause is being tested alongside the focal examination.", "Read the glucose with conscious state and swallow safety."),
    c010Hint("c010-hint-12", "run", "c010-run-findings", "left leg power is 3 out of 5", ["c010-stroke-guideline"], "Reading the autonomic and focal signs", "Focal weakness with pale, clammy skin. Does that settle the cause?", "No. The sympathetic response suggests metabolic stress but is not specific, and the face, arm and leg findings still require a time-critical neurological response. The bedside glucose is the decisive next result.", "Do not let a suggestive sign replace measurement.", "Min-jae has focal deficits, altered consciousness and autonomic activation.", "Now read the glucose value."),
    c010Hint("c010-hint-13", "run", "c010-run-findings", "blood glucose is 2.1 mmol/L", ["c010-anzcor-diabetes", "c010-qas-hypo", "c010-qas-glucose"], "Recognising the immediate diagnosis", "Two-point-one. Has the evidence earned a diagnosis?", "Yes. This is clinically important hypoglycaemia with neuroglycopenia, meaning the brain lacks enough glucose to function normally. It can explain confusion and may mimic a focal stroke.", "Treat immediately, but preserve the original neurological findings and onset time.", "Hypoglycaemia is confirmed; simultaneous stroke is not yet excluded.", "Choose treatment by conscious state and swallowing safety."),
    c010Hint("c010-hint-14", "run", "c010-run-treatment", "unsafe swallow and altered conscious state", ["c010-qas-hypo", "c010-qas-glucose", "c010-anzcor-diabetes"], "Choosing the treatment route", "Why not give juice or glucose gel?", "Drowsiness and focal weakness make swallowing unsafe. Intravenous glucose treats rapidly without aspiration risk. If intravenous access is not obtained promptly, intramuscular glucagon is an alternative while help continues.", "Do not put anything in the mouth until swallowing is safe.", "Glucose 10% is given intravenously with monitoring.", "Repeat glucose, conscious state and the full neurological examination after five minutes."),
    c010Hint("c010-hint-15", "run", "c010-run-treatment", "activate the acute stroke pathway while we correct the glucose", ["c010-stroke-guideline", "c010-qas-hypo"], "Keeping both risks active", "If glucose is low, why keep the stroke pathway?", "A low glucose can be the mimic, coexist with stroke or reveal only part of the problem. Correction and repeat examination provide fast evidence; any persistent or recurrent focal deficit keeps urgent imaging active.", "Treating the reversible cause must not erase the neurological emergency.", "Glucose correction and stroke readiness continue together.", "Use Soo-jin to secure the onset time while treatment runs."),
    c010Hint("c010-hint-16", "run", "c010-run-early-onset-answer", "completely normal at 11:40", ["c010-stroke-guideline", "c010-communication"], "Preserving the timeline", "Will this time still matter if he recovers?", "Yes. Document last known well, symptom onset and treatment time. If focal findings persist or return, the stroke team needs an accurate timeline immediately.", "Do not discard time data because an early treatment seems successful.", "The focal syndrome began around noon after sweating and confusion.", "Answer Soo-jin's question about one-sided weakness."),
    c010Hint("c010-hint-17", "run", "c010-run-wife-question", "make only one side weak", ["c010-qas-hypo", "c010-stroke-guideline", "c010-communication"], "Explaining the mimic", "Is focal weakness from low glucose plausible?", "Yes. The mechanism is not simply one nerve failing; inadequate glucose can disrupt brain networks unevenly and sometimes produce a stroke-like focal deficit. The proof in this case will be the repeat examination after correction.", "Say possible, then test it.", "Hypoglycaemia can mimic stroke, but response and recurrence matter.", "Compare every original finding after five minutes."),
    c010Hint("c010-hint-18", "run", "c010-run-repeat-findings", "power and sensation are normal in all four limbs", ["c010-qas-hypo", "c010-stroke-guideline"], "Interpreting response", "Everything normalised with glucose. What does that prove?", "The rapid complete recovery strongly supports hypoglycaemia as the cause of the focal syndrome. It makes stroke much less likely, but does not justify ignoring a later recurrent or persistent deficit.", "The before-and-after examination is more informative than the glucose correction alone.", "This was most likely a hypoglycaemic stroke mimic.", "Document the original deficit and continue serial glucose and neurological checks."),
    c010Hint("c010-hint-19", "run", "c010-run-response-interpretation", "Any persistent, recurrent or unexplained focal deficit", ["c010-stroke-guideline", "c010-qas-hypo"], "Setting the safety condition", "When does urgent imaging remain necessary?", "If weakness, speech difficulty or another focal finding persists, returns or no longer follows the glucose level, continue acute brain and vessel imaging immediately with the stroke team.", "Do not make a permanent decision from one recovered examination.", "Current recovery supports the mimic, with a clear condition for renewed stroke action.", "Now that Min-jae is clearer, obtain consent and seek the trigger."),
    c010Hint("c010-hint-20", "run", "c010-run-consent", "much clearer now", ["c010-communication", "c010-qas-hypo"], "Returning control to Min-jae", "Why ask consent again?", "His conscious state has improved, so involve him directly in the cause history. Soo-jin can still help with the period he cannot remember.", "Capacity and communication can change during treatment.", "Min-jae can now participate more fully.", "Screen briefly for seizure, trauma and headache before focusing on medicine and intake."),
    c010Hint("c010-hint-21", "run", "c010-run-onset-answer", "No seizure, headache, fall or blackout", ["c010-stroke-guideline"], "Checking alternatives", "Can I stop thinking about other causes?", "These negatives reduce seizure with postictal weakness, haemorrhagic warning symptoms and trauma, but the repeat neurological examination remains the stronger evidence.", "Negative history supports; it does not prove.", "No clear alternative event preceded the deficit.", "Ask exactly what glucose-lowering medicine he took and what he ate."),
    c010Hint("c010-hint-22", "run", "c010-run-trigger-history", "What diabetes medicines did you take today", ["c010-qas-hypo"], "Finding the cause", "Why ask medicine before a broad systems history?", "The drug, dose and timing determine how long glucose may keep falling. Pair that with food intake, vomiting or diarrhoea, exercise, alcohol and kidney or liver function.", "Cause finding should predict recurrence, not merely label it.", "The next question is whether insulin effect exceeded available glucose.", "Listen for a long-acting secretagogue and impaired clearance."),
    c010Hint("c010-hint-23", "run", "c010-run-trigger-answer", "stage 3 kidney disease", ["c010-qas-hypo"], "Connecting the trigger", "Usual gliclazide, almost no food and kidney disease. Why did this happen?", "Gliclazide stimulates pancreatic insulin release. Modified release can keep acting while poor intake supplies little glucose. Diarrhoea and kidney dysfunction can prolong vulnerability through illness, reduced intake and impaired medicine handling.", "A correct usual dose can become unsafe when physiology and intake change.", "Gliclazide, minimal food, diarrhoea and kidney disease explain high recurrence risk.", "Check prior severe episodes, warning symptoms and other medicines."),
    c010Hint("c010-hint-24", "run", "c010-run-investigations", "serial blood glucose and ketones", ["c010-qas-hypo", "c010-stroke-guideline"], "Planning investigations", "What is the main question now?", "First, is glucose stable or falling again? Then look for kidney or liver dysfunction, infection, medicine error and cardiac effects. Continue neurological observations because the original deficit was focal.", "Investigations should explain recurrence and protect against missed stroke.", "Serial glucose is the immediate trend; renal and trigger tests explain why.", "Watch the next result rather than assuming correction is permanent."),
    c010Hint("c010-hint-25", "run", "c010-run-recurrence", "fallen to 3.1 mmol/L", ["c010-qas-hypo", "c010-anzcor-diabetes"], "Recognising recurrence", "He is neurologically normal. Is 3.1 still urgent?", "Yes. He is symptomatic and glucose is below the safe range again. The recurrent fall confirms ongoing drug effect and makes discharge unsafe even though focal deficits have not returned.", "A normal neurological examination does not make recurrent hypoglycaemia harmless.", "The first correction did not outlast the cause.", "Treat by mouth now only because he is alert and has passed a swallowing screen."),
    c010Hint("c010-hint-26", "run", "c010-run-recurrence-management", "longer-acting carbohydrate", ["c010-qas-hypo", "c010-anzcor-diabetes"], "Preventing another fall", "Why add carbohydrate after fast glucose?", "Fast glucose corrects the current level; longer-acting carbohydrate helps sustain it. Continued monitoring, holding gliclazide and specialist advice address the ongoing sulfonylurea effect.", "Do not mistake a rescue dose for removal of the cause.", "Recurrent hypoglycaemia is being treated and monitored in hospital.", "Use the examiner prompt to switch to explanation."),
    c010Hint("c010-hint-27", "run", "c010-run-time", "Please explain the likely diagnosis", ["c010-amc-spec", "c010-amc-tips"], "Changing tasks", "Should I finish every investigation first?", "No. The task has changed. Explain the diagnosis, why it looked like stroke, the recurrence risk, what still needs watching and why he cannot go home.", "Leave unrequested technical detail behind.", "The cause and immediate safety plan are clear enough to explain.", "Speak to Min-jae and Soo-jin.", "6 to 8 minutes"),
    c010Hint("c010-hint-28", "run", "c010-run-diagnosis", "looked like a stroke", ["c010-qas-hypo", "c010-stroke-guideline", "c010-communication"], "Explaining the diagnosis", "How do I say this without claiming certainty?", "His brain temporarily lacked enough glucose, producing confusion, speech change and one-sided weakness. Complete recovery after glucose makes hypoglycaemia the most likely explanation, while repeated examinations protect against a coexisting stroke.", "Most likely is accurate; certain is not.", "This was a hypoglycaemic stroke mimic with complete initial recovery.", "Explain why the glucose fell again."),
    c010Hint("c010-hint-29", "run", "c010-run-cause", "makes the pancreas release insulin", ["c010-qas-hypo", "c010-communication"], "Explaining recurrence", "What mechanism will he remember?", "Gliclazide keeps asking the pancreas to release insulin. With almost no food and reduced kidney reserve during illness, glucose can fall again after the first treatment wears off.", "Do not blame Min-jae for taking his prescribed dose.", "The medicine became risky in the setting of poor intake and illness.", "Answer his question about stroke honestly."),
    c010Hint("c010-hint-30", "run", "c010-run-stroke-question", "certain I did not have a stroke", ["c010-stroke-guideline", "c010-communication"], "Handling uncertainty", "Can I reassure him completely?", "No. Say that rapid complete recovery with glucose makes stroke much less likely. Then name the safety condition: any returning or persistent focal symptom triggers immediate imaging and stroke-team action.", "Calm uncertainty is safer than false certainty.", "Current evidence supports hypoglycaemia, with ongoing neurological observation.", "Address why feeling normal does not allow discharge."),
    c010Hint("c010-hint-31", "run", "c010-run-home-question", "Can Soo-jin drive me home", ["c010-qas-hypo", "c010-communication"], "Explaining admission", "What is the clearest reason to say no?", "His glucose has already fallen again while the modified-release medicine is still active. He needs serial glucose, renal and illness assessment, medicine review and rapid treatment if another episode occurs.", "Feeling normal between episodes is not stable recovery.", "Monitored admission is required; driving is unsafe pending review.", "Check that he understands why the first improvement was not enough."),
    c010Hint("c010-hint-32", "run", "c010-run-understanding", "why the first improvement did not make it safe", ["c010-communication", "c010-qas-hypo"], "Checking understanding", "What should his answer contain?", "He should say that gliclazide can keep lowering glucose, poor intake and kidney disease increase recurrence, and any return of focal symptoms needs immediate reassessment.", "Correct only what is missing rather than repeating the whole explanation.", "Min-jae understands both recurrence and neurological safety.", "If time remains and the examiner permits, give a brief real-care handover after completing the requested explanation."),
    c010Hint("c010-hint-33", "run", "c010-run-handover", "senior stroke, toxicology and diabetes input", ["c010-qas-hypo", "c010-stroke-guideline", "c010-communication"], "Optional real-care handover", "If permitted, what does the next team need first?", "The station did not request handover, so complete the three tasks first. If time remains, give the initial focal findings and times, glucose and treatment response, recurrence, gliclazide and poor intake, kidney disease, current swallowing status and the plan for monitored admission and renewed stroke action if deficits return.", "Preserve the before-and-after neurological examination.", "The next team can manage recurrence without losing the original stroke concern.", "Finish and wait for the examiner."),
    c010Hint("c010-hint-34", "run", "c010-run-end", "The station is complete", ["c010-amc-spec", "c010-amc-tips"], "Leaving the station", "Should I keep deciding whether it was stroke?", "No. The case has ended. One breath, then let the next presentation earn its own explanation.", "Do not carry either stroke or hypoglycaemia automatically into the next stem.", "Case 10 is finished.", "Read the next role, symptoms and tasks from the beginning.")
  ];
})();
