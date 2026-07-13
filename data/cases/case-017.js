(function () {
  "use strict";

  window.AMC_CASES = window.AMC_CASES || [];
  window.AMC_CASES.push({
    id: "case-017",
    globalId: "CP-C017",
    registryId: "CP-P5-C003",
    displayNumber: "Case 17",
    title: "Neck pain and limb weakness after a diving injury",
    status: "reasoning_complete",
    statusLabel: "Exam and reasoning complete",
    reasoningAvailable: true,
    modality: "in_person",
    phase: { id: 1, title: "Can Kill Fast" },
    pattern: { id: 5, title: "Shock Pattern" },
    format: {
      readingTime: "2 minutes",
      assessmentTime: "8 minutes",
      predominantArea: "Management/Counselling/Education"
    },
    note: "Original practice station aligned to the current AMC format. It is not an AMC examination station or official marking script.",
    stem: {
      lines: [
        {
          id: "c017-stem-role",
          text: "You are a doctor working in the emergency department."
        },
        {
          id: "c017-stem-patient",
          text: "Mr Arlo Sayeed, a 29-year-old man, has been brought in after striking his head while diving into a swimming pool. He reports neck pain and weakness in his arms and legs."
        },
        {
          id: "c017-stem-start",
          text: "Arlo is awake and able to answer questions. The examiner will provide findings and investigation results when requested."
        }
      ],
      tasks: [
        {
          id: "c017-task-assess",
          text: "Assess Arlo and discuss your initial management.",
          timing: "3 minutes"
        },
        {
          id: "c017-task-neurology",
          text: "Perform a focused neurological assessment, interpret the information provided and discuss your next steps.",
          timing: "3 minutes"
        },
        {
          id: "c017-task-explain",
          text: "Explain your assessment and management plan to Arlo.",
          timing: "1 minute"
        },
        {
          id: "c017-task-handover",
          text: "Provide a concise clinical handover to the senior clinician.",
          timing: "1 minute"
        }
      ]
    },
    run: {
      sections: [
        {
          id: "c017-run-primary",
          heading: "Primary assessment and circulation",
          turns: [
            {
              id: "c017-turn-start",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c017-run-start", text: "You may begin." }]
            },
            {
              id: "c017-turn-first-action",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c017-run-first-action", text: "The doctor performs hand hygiene, confirms that manual head support and spinal motion restriction are maintained, and approaches Arlo from the front." }]
            },
            {
              id: "c017-turn-intro",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-intro", text: "Hello Arlo, I am Ushana, one of the emergency doctors. Please keep your head still. Can you confirm your full name and tell me whether your breathing feels different?" }]
            },
            {
              id: "c017-turn-opening",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-opening", text: "Arlo Sayeed. My breathing feels shallow, and I cannot move my legs. My hands are very weak." }]
            },
            {
              id: "c017-turn-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-consent", text: "I am going to assess and treat you while keeping your neck protected. Is that okay?" }]
            },
            {
              id: "c017-turn-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-consent-answer", text: "Yes." }]
            },
            {
              id: "c017-turn-primary-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-primary-request", text: "I assess airway, breathing, circulation and conscious state while maintaining spinal alignment. Attach cardiac, oxygen-saturation and frequent blood-pressure monitoring. Check glucose and temperature. Expose him with active warming and examine for external bleeding, chest injury, abdominal tenderness, pelvic injury and long-bone injury. Please provide the findings." }]
            },
            {
              id: "c017-turn-primary-findings",
              speaker: "Examiner",
              kind: "finding",
              lines: [{ id: "c017-run-primary-findings", text: "Arlo's airway is patent and his voice is soft. Respiratory rate is 22 and shallow, oxygen saturation is 94% on room air, and air entry is equal without chest injury. Pulse is 52 beats per minute and regular, blood pressure is 78/42 mmHg, capillary refill is two seconds and his skin is warm and dry. Temperature is 35.8 degrees Celsius, GCS is 15 and glucose is 5.9 mmol/L. There is midline lower-cervical tenderness. No external bleeding, abdominal tenderness, pelvic instability or long-bone injury is found." }]
            },
            {
              id: "c017-turn-recognition",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-recognition", text: "He has shock after trauma. Hypotension with relative bradycardia, warm skin and limb weakness suggests loss of sympathetic tone from a cervical cord injury, but that pattern does not exclude bleeding or another traumatic cause. Activate the trauma response and call the senior emergency, spinal surgery, anaesthetic and intensive-care teams now." }]
            },
            {
              id: "c017-turn-actions",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-actions", text: "Give oxygen to maintain adequate saturation, establish two large-bore intravenous lines and keep him warm. Take a blood gas with lactate, full blood count, electrolytes, coagulation studies and group and crossmatch. Arrange ECG, extended focused trauma ultrasound and portable chest and pelvic X-rays. Give a measured 250-millilitre bolus of warmed Hartmann's while assessing the response, rather than repeated large fluid loads." }]
            },
            {
              id: "c017-turn-actions-done",
              speaker: "Action",
              kind: "action",
              lines: [{ id: "c017-run-actions-done", text: "Monitoring, oxygen, active warming and intravenous access are established. The trauma, spinal, anaesthetic and intensive-care teams are contacted, and the measured fluid bolus begins." }]
            }
          ]
        },
        {
          id: "c017-run-neurology",
          heading: "Neurological assessment and cause",
          turns: [
            {
              id: "c017-turn-mechanism",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-mechanism", text: "Arlo, what happened from the moment you entered the water? Did you lose consciousness, and could you move or feel your limbs immediately afterwards?" }]
            },
            {
              id: "c017-turn-mechanism-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-mechanism-answer", text: "My head hit the bottom and I felt an electric pain down my body. I stayed awake. I could not move my legs, and my arms became weak straight away." }]
            },
            {
              id: "c017-turn-symptoms",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-symptoms", text: "Any chest or abdominal pain, bleeding, severe headache or vomiting? Can you feel when I touch your chest, arms and legs?" }]
            },
            {
              id: "c017-turn-symptoms-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-symptoms-answer", text: "No chest or stomach pain and no vomiting. I can feel my shoulders, but everything becomes numb lower down." }]
            },
            {
              id: "c017-turn-neuro-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-neuro-request", text: "I examine cranial nerves, breathing strength, limb tone and reflexes, key muscle groups and light-touch and pinprick sensation." }]
            },
            {
              id: "c017-turn-intimate-consent",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-intimate-consent", text: "Arlo, the formal cord examination includes checking sensation around the anus and whether those muscles contract. It is an intimate examination and a chaperone will be present. Is that okay?" }]
            },
            {
              id: "c017-turn-intimate-consent-answer",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-intimate-consent-answer", text: "Yes." }]
            },
            {
              id: "c017-turn-sacral-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-sacral-request", text: "With a chaperone, I assess sacral sensation and voluntary anal contraction and document the complete findings on the international spinal-cord injury chart. Please provide the findings and initial results." }]
            },
            {
              id: "c017-turn-neuro-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c017-run-neuro-results", text: "Cranial nerves are normal. Shoulder abduction and elbow flexion are preserved, wrist extension is weak, and there is no useful movement in the fingers or legs. Tone and reflexes are reduced. Sensation is preserved to the upper chest and impaired below it, with no sacral sparing. Extended trauma ultrasound is negative, chest and pelvic X-rays show no acute injury, and haemoglobin is 142 g/L. ECG shows sinus bradycardia. Lactate is 3.6 mmol/L. After 250 millilitres of Hartmann's, blood pressure is 80/44 and pulse 50, with clear lungs." }]
            },
            {
              id: "c017-turn-interpret",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-interpret", text: "The examination supports a severe cervical spinal cord injury. The flaccidity and absent reflexes describe spinal shock; the hypotension, bradycardia and warm skin describe neurogenic shock. They are different problems and can occur together. The trauma search has not found bleeding, but observations and serial examinations must continue because a normal first haemoglobin does not exclude recent blood loss." }]
            },
            {
              id: "c017-turn-circulation-plan",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-circulation-plan", text: "Start noradrenaline through monitored proximal peripheral access under the local critical-care protocol while central access is arranged. For Arlo, agree and document the lower MAP boundary with spinal and intensive care, usually 75 to 80, and avoid augmentation beyond 90 to 95. Individualise the target and its three-to-seven-day duration because the evidence is weak. Avoid further fluid unless reassessment shows a separate volume need. Treat worsening symptomatic bradycardia under the advanced-life-support protocol and have pacing available." }]
            },
            {
              id: "c017-turn-imaging-request",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-imaging-request", text: "Once circulation is supported, arrange CT of the head and whole spine with trauma imaging as indicated. MRI can define the cord and soft tissues, but it must not delay urgent reduction, decompression and stabilisation. Please provide the imaging and repeat respiratory findings." }]
            },
            {
              id: "c017-turn-imaging-results",
              speaker: "Examiner",
              kind: "investigation",
              lines: [{ id: "c017-run-imaging-results", text: "CT shows an unstable C5 to C6 fracture-dislocation with spinal canal compromise and no intracranial, chest, abdominal or pelvic bleeding. On noradrenaline, blood pressure is 102/64 with a mean arterial pressure of 77 and pulse 58. His cough has weakened, respiratory rate is 28 and vital capacity is falling." }]
            },
            {
              id: "c017-turn-respiratory",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-respiratory", text: "His respiratory function is deteriorating. The anaesthetic team should secure the airway in a controlled manner while maintaining cervical alignment, before exhaustion or secretion retention causes collapse. Continue oxygenation, repeated gas and respiratory measurements, pressure-area care, urinary drainage and venous-thromboembolism prevention when bleeding risk permits. Spinal surgery should proceed with urgent reduction, decompression and stabilisation, ideally within 24 hours when medically feasible." }]
            },
            {
              id: "c017-turn-patient-question",
              speaker: "Patient",
              kind: "spoken",
              lines: [{ id: "c017-run-patient-question", text: "Does this mean I will never walk again?" }]
            },
            {
              id: "c017-turn-patient-answer",
              speaker: "Doctor",
              kind: "spoken",
              lines: [{ id: "c017-run-patient-answer", text: "You have a serious spinal cord injury, but it is too early to predict your recovery. Right now we are protecting your neck, breathing and blood flow to the cord. The spinal team will explain the scan, treatment options and what we learn from repeated examinations." }]
            },
            {
              id: "c017-turn-time",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c017-run-time", text: "Please provide your handover." }]
            }
          ]
        },
        {
          id: "c017-run-handover-section",
          heading: "Clinical handover",
          turns: [
            {
              id: "c017-turn-handover",
              speaker: "Doctor",
              kind: "handover",
              lines: [{ id: "c017-run-handover", text: "Arlo Sayeed is 29 after an axial-load diving injury. He has an unstable C5 to C6 fracture-dislocation, severe motor and sensory deficit without sacral sparing, and neurogenic shock. Initial pressure was 78/42 with pulse 52, warm skin and lactate 3.6. No bleeding or other traumatic cause has been found on serial examination, ultrasound or CT. He had little response to 250 millilitres of Hartmann's and is now 102/64, MAP 77, on protocol-guided noradrenaline. His cough and vital capacity are worsening. Spinal alignment is maintained; anaesthetics are preparing controlled airway support, and spinal surgery is attending for urgent reduction, decompression and stabilisation without MRI delay." }]
            },
            {
              id: "c017-turn-end",
              speaker: "Examiner",
              kind: "spoken",
              lines: [{ id: "c017-run-end", text: "Thank you. The station is complete." }]
            }
          ]
        }
      ]
    },
    clinicalSources: [
      {
        organisation: "Australian Commission on Safety and Quality in Health Care",
        title: "Recognising and Responding to Acute Deterioration Standard",
        date: "Current standard accessed July 2026",
        url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard"
      },
      {
        organisation: "Queensland Ambulance Service",
        title: "Clinical practice guideline: Spinal cord injury",
        date: "Current guideline accessed July 2026",
        url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0022/219145/cpg-spinal-cord-injury.pdf"
      },
      {
        organisation: "Agency for Clinical Innovation, NSW",
        title: "Adult ECAT protocol: Traumatic injury",
        date: "Current NSW protocol accessed July 2026",
        url: "https://aci.health.nsw.gov.au/ecat/adult/traumatic-injury"
      },
      {
        organisation: "AO Spine and Praxis Spinal Cord Institute",
        title: "Clinical Practice Guideline for Acute Spinal Cord Injury: Recommendations on Hemodynamic Management",
        date: "2024",
        url: "https://journals.sagepub.com/doi/10.1177/21925682231202348"
      }
    ]
  });

  var caseSeventeen = window.AMC_CASES.find(function (caseData) { return caseData.id === "case-017"; });
  function buildHint17(id, surface, itemId, quote, citationIds, where, popUp, say, pause, recap, reorient) {
    return { id: id, target: { surface: surface, itemId: itemId, quote: quote, occurrence: 1 }, citationIds: citationIds, where: where, popUp: popUp, say: [say], pause: pause, recap: recap, reorient: reorient };
  }
  caseSeventeen.masteryFocus = {
    case: "Assess neck pain and four-limb weakness after diving, protect life and spine, then use the focused examination and repeat findings to plan escalation.",
    clinical: "After trauma, name each physiological problem separately, exclude competing causes and let serial respiratory and perfusion findings determine escalation."
  };
  caseSeventeen.sources = [
    { id: "amc-spec-2026", title: "Clinical Examination Specifications V8.3", organisation: "Australian Medical Council", date: "June 2026", url: "https://www.amc.org.au/wp-content/uploads/2026/06/2026-04-08-Clinical-Exam-Spec-V8-3.pdf" },
    { id: "amc-tips-2024", title: "Tips from Examiners V1.1", organisation: "Australian Medical Council", date: "October 2024", url: "https://www.amc.org.au/wp-content/uploads/2024/10/2024-10-03-Tips-From-Examiners.pdf" },
    { id: "acsqhc-deterioration-2026", title: "Recognising and Responding to Acute Deterioration Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Current July 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/recognising-and-responding-acute-deterioration-standard" },
    { id: "qas-spinal-injury-2026", title: "Clinical practice guideline: Spinal cord injury", organisation: "Queensland Ambulance Service", date: "Current July 2026", url: "https://www.ambulance.qld.gov.au/__data/assets/pdf_file/0022/219145/cpg-spinal-cord-injury.pdf" },
    { id: "aci-traumatic-injury-2026", title: "Adult ECAT protocol: Traumatic injury", organisation: "Agency for Clinical Innovation, NSW", date: "Current July 2026", url: "https://aci.health.nsw.gov.au/ecat/adult/traumatic-injury" },
    { id: "aospine-haemodynamic-2024", title: "Clinical Practice Guideline for Acute Spinal Cord Injury: Recommendations on Hemodynamic Management", organisation: "AO Spine and Praxis Spinal Cord Institute", date: "2024", url: "https://journals.sagepub.com/doi/10.1177/21925682231202348" },
    { id: "acsqhc-communication-2026", title: "Communicating for Safety Standard", organisation: "Australian Commission on Safety and Quality in Health Care", date: "Updated April 2026", url: "https://www.safetyandquality.gov.au/national-standards/nsqhs-standards/communicating-safety-standard" }
  ];
  caseSeventeen.reasoningCompass = {
    stem: {
      title: "Protect first, then separate the problems",
      steps: [
        { time: "0 to 30 seconds", text: "Fix the diving mechanism, neck pain and four-limb weakness. Plan spinal alignment and trauma ABCDE before the detailed neurological examination." },
        { time: "30 to 60 seconds", text: "Prepare to assess breathing strength, circulation and other bleeding sources, then motor, sensory, reflex and sacral function." },
        { time: "1 to 2 minutes", text: "Hold the switches: initial assessment to minute 3, focused neurology and next steps to minute 6, explanation to minute 7, handover to minute 8." }
      ],
      anchor: "Initial assessment 0 to 3 | Neurology and next steps 3 to 6 | Explain 6 to 7 | Handover 7 to 8"
    },
    run: {
      title: "Keep breathing, circulation and neurology distinct",
      steps: [
        { time: "0 to 3 minutes", text: "Maintain spinal alignment, obtain trauma ABCDE findings, support current physiology, activate help and continue searching for associated injury." },
        { time: "3 to 6 minutes", text: "Perform and document motor, sensory, reflex and sacral findings. Interpret neurological and circulatory findings separately, then choose tests and treatment from the evidence available." },
        { time: "6 to 8 minutes", text: "Reassess breathing and perfusion, explain what is known and uncertain, then hand over the mechanism, deficits, changes, treatment and immediate risks." }
      ],
      anchor: "If breathing, circulation or conscious state worsens, interrupt the neurological sequence, repeat ABCDE and escalate; then return to the unfinished task verb."
    }
  };
  caseSeventeen.hints = [
    buildHint17("c017-hint-01", "stem", "c017-stem-role", "emergency department", ["amc-spec-2026", "amc-tips-2024"], "Reading the setting", "What must happen in parallel?", "Spinal protection, trauma assessment, monitoring and team activation can begin while you obtain the mechanism and neurological history.", "This is not a neurological history before resuscitation.", "The ED can provide immediate trauma support.", "Read the mechanism and deficits, then prepare ABCDE."),
    buildHint17("c017-hint-02", "stem", "c017-stem-patient", "29-year-old man", ["amc-tips-2024", "acsqhc-deterioration-2026"], "Reading age", "Young and awake. Is that reassuring?", "Only partly. Young adults may compensate, and alertness does not protect against spinal cord, respiratory or circulatory failure.", "Age and speech cannot clear trauma.", "Arlo may have severe injury despite being awake.", "Use mechanism and function to set urgency."),
    buildHint17("c017-hint-03", "stem", "c017-stem-patient", "striking his head while diving", ["qas-spinal-injury-2026", "aci-traumatic-injury-2026"], "Reading mechanism", "Why is diving especially concerning?", "An axial load through the head can force the cervical vertebrae and injure the cord. Maintain alignment from the first contact.", "Mechanism predicts what must be protected, not the exact level.", "Cervical structural injury is possible.", "Read the symptoms for cord and breathing involvement."),
    buildHint17("c017-hint-04", "stem", "c017-stem-patient", "weakness in his arms and legs", ["qas-spinal-injury-2026", "acsqhc-deterioration-2026"], "Reading four-limb weakness", "What level could affect all four limbs?", "A cervical cord lesion can affect arms, legs and respiratory muscles. The exact pattern requires motor, sensory and sacral examination.", "Do not jump from weakness to prognosis.", "A serious cervical cord injury is suspected.", "Assess breathing and circulation before detailed neurology."),
    buildHint17("c017-hint-05", "stem", "c017-stem-start", "awake and able to answer questions", ["acsqhc-deterioration-2026", "amc-tips-2024"], "Using current alertness", "Can I start the cord examination now?", "First confirm airway, breathing and circulation while keeping alignment. A high cord injury can weaken ventilation and alter sympathetic circulation even when GCS is 15.", "Neurology does not replace ABCDE.", "Conscious state is intact; respiratory reserve and perfusion are unknown.", "Plan a trauma survey before the formal cord chart."),
    buildHint17("c017-hint-06", "stem", "c017-task-assess", "Assess Arlo and discuss your initial management", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task one", "What is initial management here?", "Spinal alignment, trauma ABCDE, monitoring, oxygen, access, warming, bleeding search and early trauma, spinal, anaesthetic and intensive-care calls.", "The first three minutes protect life and cord.", "Detailed neurology belongs to the next task.", "Keep the tasks separate without delaying danger treatment."),
    buildHint17("c017-hint-07", "stem", "c017-task-neurology", "focused neurological assessment", ["amc-spec-2026", "qas-spinal-injury-2026"], "Anchoring task two", "What makes the neurological assessment focused?", "Breathing strength, key muscle groups, tone, reflexes, sensory level and sacral sparing, documented systematically. Interpret those findings beside circulation and imaging.", "A focused exam can still be complete for the decision.", "Minutes 3 to 6 cover neurology, interpretation and next steps.", "Remember consent and a chaperone for sacral assessment."),
    buildHint17("c017-hint-task-explain", "stem", "c017-task-explain", "Explain your assessment and management plan", ["amc-spec-2026", "amc-tips-2024"], "Anchoring task three", "What changes at minute six?", "Stop the formal interpretation and speak to Arlo for one minute. Explain what is known, what remains uncertain, what is being protected and the urgent next treatment.", "Do not turn prognosis into certainty.", "Minute 6 to 7 belongs to explanation.", "Keep the final minute for clinical handover."),
    buildHint17("c017-hint-08", "stem", "c017-task-handover", "concise clinical handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Anchoring the final minute", "Which facts must be handed over?", "Mechanism, neurological level and sacral findings, shock pattern, exclusion of bleeding, response to fluid and vasopressor, imaging, respiratory trend and urgent spinal plan.", "Transfer current risks, not the whole examination script.", "The final minute is a clinical handover.", "Keep the changing respiratory and pressure findings available."),
    buildHint17("c017-hint-09", "run", "c017-run-start", "You may begin", ["amc-spec-2026", "amc-tips-2024"], "Starting the encounter", "What is the first visible priority?", "Confirm spinal support and approach from where Arlo can see you without asking him to turn his head.", "Protection begins before the diagnosis is complete.", "The first task is initial assessment and management.", "Introduce yourself and ask about breathing while observing his voice."),
    buildHint17("c017-hint-10", "run", "c017-run-first-action", "manual head support and spinal motion restriction", ["qas-spinal-injury-2026", "aci-traumatic-injury-2026"], "Maintaining alignment", "Do I need perfect immobility?", "The aim is to minimise unnecessary movement while airway, breathing and circulation are treated. Life-saving care still proceeds with alignment maintained as well as possible.", "Spinal protection must not block resuscitation.", "A cervical injury is strongly suspected.", "Approach and assess speech and breathing."),
    buildHint17("c017-hint-11", "run", "c017-run-intro", "whether your breathing feels different", ["qas-spinal-injury-2026", "acsqhc-deterioration-2026"], "Asking the first danger question", "Why breathing before pain details?", "Cervical cord injury can weaken respiratory muscles and cough. A change in voice or breathing may require early anaesthetic support.", "The first question follows the immediate threat.", "Neck and limb symptoms already suggest cord involvement.", "Hear whether breathing is shallow and whether limb function changed."),
    buildHint17("c017-hint-12", "run", "c017-run-opening", "breathing feels shallow", ["qas-spinal-injury-2026", "acsqhc-deterioration-2026"], "Hearing respiratory weakness", "He is talking. Can this wait?", "No. Speech shows a patent airway now, but shallow breathing may signal reduced inspiratory strength. Obtain oxygenation, respiratory rate, cough and later vital capacity while preparing escalation.", "Current speech does not guarantee respiratory reserve.", "Breathing and four-limb weakness may share a cervical cause.", "Obtain consent, then request trauma ABCDE."),
    buildHint17("c017-hint-13", "run", "c017-run-consent", "keeping your neck protected", ["acsqhc-communication-2026", "qas-spinal-injury-2026"], "Explaining simultaneous care", "Why mention neck protection?", "It tells Arlo why he must stay still and why several people may assess and treat him at once.", "Brief explanation reduces unexpected movement and fear.", "Arlo consents to urgent assessment.", "Proceed to ABCDE without moving the neck unnecessarily."),
    buildHint17("c017-hint-14", "run", "c017-run-primary-request", "examine for external bleeding", ["aci-traumatic-injury-2026", "acsqhc-deterioration-2026"], "Keeping trauma causes in view", "The pattern looks spinal. Why search for bleeding?", "Trauma can cause more than one injury, and blood loss is common and immediately treatable. A suspected cord cause must not end the trauma survey.", "A convincing pattern does not exclude a second cause.", "Spinal injury and occult bleeding are both under assessment.", "Read respiratory, circulatory and skin findings together."),
    buildHint17("c017-hint-15", "run", "c017-run-primary-findings", "voice is soft", ["qas-spinal-injury-2026", "acsqhc-deterioration-2026"], "Reading breathing risk", "Soft voice after shallow breathing. What does that suggest?", "It may reflect reduced respiratory muscle strength from a high cord lesion. Serial respiratory findings will show whether reserve is falling.", "Current speech does not guarantee sustained ventilation.", "Breathing is currently maintained but vulnerable.", "Keep reading for respiratory rate, saturation, air entry and chest injury."),
    buildHint17("c017-hint-16", "run", "c017-run-primary-findings", "skin is warm and dry", ["acsqhc-deterioration-2026", "aci-traumatic-injury-2026"], "Reading the circulation pattern", "Why is this trauma shock pattern unusual?", "Blood loss usually drives tachycardia and cool vasoconstricted skin. Here severe hypotension with relative bradycardia and warm dry skin suggests loss of sympathetic vascular and cardiac drive.", "The pattern suggests a cord-related mechanism, but bleeding is not yet excluded.", "Arlo has shock with an unusual warm, slow-pulse pattern.", "Combine it with limb weakness and name the leading shock type."),
    buildHint17("c017-hint-17", "run", "c017-run-recognition", "loss of sympathetic tone from a cervical cord injury", ["qas-spinal-injury-2026", "aospine-haemodynamic-2024"], "Naming neurogenic shock", "Do the clues now earn it?", "Yes. Cervical trauma, four-limb weakness, hypotension, bradycardia and warm skin support neurogenic shock. Keep it provisional until the bleeding search and imaging are complete.", "Name the leading cause without closing the trauma assessment.", "Neurogenic shock is the leading circulatory diagnosis.", "Activate trauma, spinal, anaesthetic and intensive-care teams now."),
    buildHint17("c017-hint-18", "run", "c017-run-recognition", "does not exclude bleeding", ["aci-traumatic-injury-2026", "acsqhc-deterioration-2026"], "Preventing premature closure", "If the pattern is classic, why keep looking?", "Because mixed shock can occur. Continue serial examination, ultrasound, imaging, haemoglobin and clinical trend while treating the likely sympathetic failure.", "One diagnosis does not cancel another traumatic cause.", "Neurogenic shock leads; haemorrhage remains an active exclusion.", "Use a small measured fluid trial and prepare vasopressor support."),
    buildHint17("c017-hint-19", "run", "c017-run-actions", "250-millilitre bolus of warmed Hartmann's", ["qas-spinal-injury-2026", "aospine-haemodynamic-2024"], "Testing volume carefully", "Why give any fluid if this is neurogenic?", "A small measured bolus checks for a volume component while avoiding repeated large loads that will not correct lost vascular tone. Reassess pressure, pulse, lungs and perfusion.", "Use response to refine the mechanism.", "Circulation support has begun without assuming simple blood loss.", "Continue the neurological history while teams and tests arrive."),
    buildHint17("c017-hint-20", "run", "c017-run-mechanism", "could you move or feel your limbs immediately afterwards", ["qas-spinal-injury-2026", "amc-tips-2024"], "Returning to the unfinished history", "Why does immediate function matter?", "Immediate deficit after impact supports primary cord injury; delayed change could suggest evolving compression, swelling or a secondary event.", "Timing helps explain mechanism and progression.", "Immediate threats have been supported.", "Establish loss of consciousness, electric pain and onset of weakness."),
    buildHint17("c017-hint-21", "run", "c017-run-mechanism-answer", "electric pain down my body", ["qas-spinal-injury-2026"], "Connecting sensation to the cord", "What does electric pain mean?", "A sudden shock-like sensation down the body after neck impact suggests direct irritation of cervical neural tissue. It supports the cord concern but does not define level or completeness.", "A vivid symptom still needs formal examination.", "The neurological deficit began immediately after axial impact.", "Screen other trauma symptoms, then examine motor and sensory function."),
    buildHint17("c017-hint-22", "run", "c017-run-symptoms", "chest or abdominal pain, bleeding", ["aci-traumatic-injury-2026"], "Continuing the bleeding search", "Am I repeating the primary survey?", "You are adding symptoms to the examination already performed. Negative answers reduce but do not eliminate occult injury, so serial findings still matter.", "History and examination test each other.", "No alternate bleeding source has yet appeared.", "Locate the sensory change before the formal examination."),
    buildHint17("c017-hint-23", "run", "c017-run-symptoms-answer", "numb lower down", ["qas-spinal-injury-2026"], "Hearing a sensory level", "Can I call the level from this sentence?", "No. It suggests a level below the shoulders, but formal dermatomal testing and key muscle groups are needed. Sacral sparing determines completeness.", "Patient description guides the exam; it does not replace it.", "There is a major motor and sensory deficit.", "Perform the structured neurological assessment."),
    buildHint17("c017-hint-24", "run", "c017-run-neuro-request", "key muscle groups", ["qas-spinal-injury-2026", "aospine-haemodynamic-2024"], "Structuring the examination", "What am I trying to document?", "Motor level, sensory level, tone, reflexes and respiratory strength. A standard sequence makes changes detectable and the handover usable.", "In spinal injury, documentation is part of monitoring.", "The deficit must be localised and repeated over time.", "Explain the intimate sacral component and obtain consent."),
    buildHint17("c017-hint-25", "run", "c017-run-intimate-consent", "a chaperone will be present", ["acsqhc-communication-2026", "qas-spinal-injury-2026"], "Handling sacral assessment", "Why is this examination necessary?", "Sacral sensation and voluntary contraction help determine whether any cord pathway remains below the injury. Explain this clearly, use a chaperone and obtain consent.", "Clinical importance does not remove dignity.", "The intimate examination has a specific diagnostic purpose.", "Proceed only after Arlo agrees."),
    buildHint17("c017-hint-26", "run", "c017-run-sacral-request", "voluntary anal contraction", ["qas-spinal-injury-2026", "aospine-haemodynamic-2024"], "Assessing completeness", "What does sacral sparing tell me?", "Preserved sacral function means some pathways cross the injured segment and the injury is incomplete. Its absence supports a more severe complete pattern on the current examination.", "Do not predict final recovery from one early exam.", "Sacral findings refine severity and prognosis discussions.", "Interpret the complete motor, sensory, reflex and trauma results together."),
    buildHint17("c017-hint-27", "run", "c017-run-neuro-results", "no sacral sparing", ["qas-spinal-injury-2026", "aospine-haemodynamic-2024"], "Reading neurological severity", "Does no sacral sparing mean recovery is impossible?", "No. It supports a severe complete pattern on this examination, but early swelling and spinal shock can alter findings. Repeat standardised examinations and avoid absolute prognosis.", "Severity is clear; outcome is not.", "A severe cervical cord injury is strongly supported.", "Separate spinal shock from the circulatory problem."),
    buildHint17("c017-hint-28", "run", "c017-run-interpret", "spinal shock", ["qas-spinal-injury-2026", "aospine-haemodynamic-2024"], "Separating two similar terms", "Spinal shock and neurogenic shock sound interchangeable. Are they?", "No. Spinal shock is temporary loss of reflexes and flaccid tone below the cord injury. Neurogenic shock is hypotension and often bradycardia from lost sympathetic tone. They can occur together.", "Name the neurological and circulatory problems separately.", "Arlo currently has both patterns.", "Support circulation with vasopressor while continuing trauma surveillance."),
    buildHint17("c017-hint-29", "run", "c017-run-circulation-plan", "agree and document the lower MAP boundary", ["aospine-haemodynamic-2024", "qas-spinal-injury-2026"], "Setting a perfusion target", "Why not use one universal number?", "The guideline supports avoiding hypotension but recognises weak evidence for the exact target and duration. Agree the range with spinal and intensive care and follow clinical perfusion.", "Be precise about uncertainty instead of inventing certainty.", "Noradrenaline replaces lost vascular tone while fluid is limited.", "Arrange imaging once circulation is supported."),
    buildHint17("c017-hint-30", "run", "c017-run-imaging-request", "MRI can define the cord and soft tissues", ["qas-spinal-injury-2026", "aospine-haemodynamic-2024"], "Choosing imaging without delay", "CT or MRI first?", "CT rapidly defines fracture and dislocation in trauma. MRI adds cord and ligament detail, but it must not delay urgent reduction, decompression or stabilisation when those are already indicated.", "Choose tests by the decision they change and the delay they cause.", "Structural definition and urgent treatment planning are underway.", "Read the CT and repeat respiratory findings together."),
    buildHint17("c017-hint-31", "run", "c017-run-imaging-results", "unstable C5 to C6 fracture-dislocation with spinal canal compromise and no intracranial, chest, abdominal or pelvic bleeding", ["qas-spinal-injury-2026", "aospine-haemodynamic-2024"], "Confirming the structure", "What now becomes certain?", "There is an unstable cervical injury compromising the canal, and CT has not found another major bleeding source.", "A confirmed structural diagnosis does not end reassessment.", "The spinal injury is defined and the bleeding search is currently negative.", "Keep reading for the response to noradrenaline and the respiratory trend."),
    buildHint17("c017-hint-32", "run", "c017-run-imaging-results", "vital capacity is falling", ["qas-spinal-injury-2026", "acsqhc-deterioration-2026"], "Recognising respiratory trend", "His oxygen level may still look acceptable. Why intervene?", "Vital capacity and cough reveal ventilatory reserve and secretion clearance. A falling trend can precede sudden fatigue, carbon dioxide retention or aspiration.", "Trend can be more important than the current saturation.", "Arlo is approaching respiratory failure.", "Ask anaesthetics for controlled airway support with alignment maintained."),
    buildHint17("c017-hint-33", "run", "c017-run-respiratory", "before exhaustion or secretion retention causes collapse", ["qas-spinal-injury-2026", "aospine-haemodynamic-2024"], "Acting before collapse", "Could I wait for the gas to worsen?", "No. Weakening cough, higher respiratory rate and falling vital capacity are enough to prepare controlled intubation. Emergency airway collapse would make spinal protection harder.", "Anticipatory escalation is safer than rescue after exhaustion.", "Airway support and urgent spinal treatment now proceed together.", "Continue pressure care, urinary drainage and thrombosis prevention when safe."),
    buildHint17("c017-hint-34", "run", "c017-run-patient-question", "will never walk again", ["acsqhc-communication-2026", "qas-spinal-injury-2026"], "Answering prognosis", "How do I answer without avoiding him?", "Acknowledge that the injury is serious, say it is too early to predict recovery and explain what the team is doing now to prevent further harm.", "Do not give certainty that the evidence cannot support.", "Arlo needs honesty, orientation and an immediate plan.", "Keep the answer short because respiratory support is urgent."),
    buildHint17("c017-hint-35", "run", "c017-run-patient-answer", "too early to predict", ["acsqhc-communication-2026", "qas-spinal-injury-2026"], "Using bounded uncertainty", "Does this sound evasive?", "Not when you add what is known: serious cord injury, urgent breathing and perfusion protection, spinal treatment and repeated examinations that will clarify recovery.", "Uncertainty is clearer when its boundary and next evidence are named.", "The prognosis is uncertain; immediate priorities are clear.", "At the prompt, stop explanation and provide the handover."),
    buildHint17("c017-hint-36", "run", "c017-run-time", "Please provide your handover", ["amc-spec-2026", "acsqhc-communication-2026"], "Recovering at the task switch", "What comes first?", "Lead with axial-load mechanism, unstable C5 to C6 injury and severe deficit. Then give neurogenic shock, exclusion of bleeding, vasopressor response, worsening respiratory function and urgent airway and spinal plans.", "Do not continue prognosis counselling after the prompt.", "The final required task is a clinical transfer of risk.", "Use the current problems and actions, not every normal result."),
    buildHint17("c017-hint-37", "run", "c017-run-handover", "cough and vital capacity are worsening", ["acsqhc-communication-2026", "qas-spinal-injury-2026"], "Closing with the immediate threat", "Why highlight breathing after the scan diagnosis?", "Because it is the next problem that can kill quickly and changes what the receiving team must do now. The handover should end with controlled airway support and urgent spinal treatment already mobilised.", "Handover priority follows current risk.", "Structure, neurology, circulation and respiratory trend have been transferred.", "Stop and wait for the examiner."),
    buildHint17("c017-hint-38", "run", "c017-run-end", "The station is complete", ["amc-tips-2024"], "Releasing the station", "Should I keep predicting recovery?", "No. The station has ended. Take one breath and begin the next case from its own evidence and task verbs.", "Do not carry this spinal pattern into the next patient.", "Case 17 is complete.", "Read the next stem from the first line." )
  ];
  caseSeventeen.hints.forEach(function (hint, index) { hint.id = "c017-hint-" + String(index + 1).padStart(2, "0"); });
})();
