# ADHD Clinical Rehearsal System Lock

Status: locked for website display redesign.

Source: user-provided v1 system patch plus v1.1 patch.

## Core Contract

AMC Clinical Pathway must feel like a calm clinical rehearsal room.

Primary learner loop:

Home -> Ignite -> Start speaking -> Finish run -> Choose one Hint -> Repeat.

Core principle:

One screen = one job.

No new clinical content should be added while this display system is being implemented.

## Required Current Truth

The root URL and index page must show the same current state:

- Current pattern: Dangerous Chest Pain
- Current case: Classic Chest Pain
- Status: Ready
- Primary action: Start speaking

## Learner-Facing Labels

Use:

- Home
- Cases
- Ignite
- Current case
- Start speaking
- Hints
- Stem
- What matters
- Extra detail
- Why this matters
- Exam-safe lines
- Memory drills
- Case details
- Course index
- Safety checklist
- Do not miss
- You
- Dr Ushana

Do not use:

- Map
- Study map
- Visual case tree
- Command centre
- Level 1
- Level 2
- Door note
- Brain map
- Speak Practice
- Run station
- Full pack
- Study Notes
- How To Think
- Examiner Lines
- Practice Drill
- Case facts
- Fix one miss
- Resume Case 1
- Next hint before a missed item is selected
- No fixes saved yet
- Candidate
- Dr ___
- Repair
- Reset
- Help
- Prime
- Priming drill
- Before the Case as a learner-facing page name

## Page Jobs

Home answers: What do I do now?

Cases answers: Where do I continue?

Ignite answers: What danger am I looking for before I start?

Case 1 answers: Can I start speaking now?

## Page Requirements

Home first screen:

- AMC Clinical Pathway
- Prepared by Dr. Ushana Yalda
- Current pattern: Dangerous Chest Pain
- New here? Read Ignite first. It shows what danger you are looking for.
- Already warmed up? Start speaking Case 1.
- Primary buttons: Read Ignite, Start speaking
- Small link: Cases
- Safety card with Danger trigger and First action

Cases first screen:

- Page name: Cases
- Subtitle: Pick where to continue.
- Current case: Dangerous Chest Pain / Classic Chest Pain
- Task: Speak the station. Call the ambulance early. Do not wait for tests.
- Status: Ready
- Primary button: Start speaking
- Small links: Ignite, Hints, Case details
- Course index collapsed by default

Ignite:

- Learner-facing page name: Ignite
- Internal engine name may remain Before the Case
- Do not show both names together
- Use the concept line: Finding dangerous chest pain before looking for the exact diagnosis.
- End with: Stop here. Start Case 1.

Case 1 first screen:

- Case 1 - Classic Chest Pain
- Speak the station.
- Call the ambulance early.
- Do not wait for tests.
- Primary button: Start speaking
- Small links: Stem, What matters, Hints, Case details, Cases
- Safety strip with Danger trigger and First action

## Script Rules

Use compact dialogue blocks:

You
"Line here."

Patient
"Line here."

Opening line:

"Hello, I'm Dr Ushana, one of the doctors. How would you like me to address you?"

Do not place scoring or examiner language inside the patient conversation.

## Hints Rules

Hints appear after the learner finishes or chooses a missed item.

Default text:

Choose one thing you missed.
One Hint will open.

Each Hint must show:

- What was missed
- Why it matters
- Say this
- Practise now
- Go back to

Only one Hint should open at a time.

Hints must not use repair, reset, help, fixes, or punishment language.

## Acceptance Checklist

Before publishing any page:

1. Can a new learner understand what to do in under 3 seconds?
2. Is there only one primary action on the first screen?
3. Does the page use Cases, not Map?
4. Does the page avoid Level 1, Level 2, and command centre?
5. Does the page avoid dashboard feeling?
6. Does the learner-facing script use You, not Candidate?
7. Does the opening line use Dr Ushana?
8. Are Hints hidden until a missed item is chosen?
9. Does the page avoid repair/reset/help/fixes language?
10. Does the page avoid unavailable Case 2 progression?
11. Is the first action medically safe?
12. Does the page protect ambulance-first logic?
13. Are study layers collapsed by default?
14. Does mobile show one next action?
15. Does the page feel like a calm clinical rehearsal room?
16. Does the page avoid Door note, Prime, Full pack, Study map, and command centre?
17. Does the page avoid Tier 1 Dominance or other hype language?
18. Does the page avoid any pass or high-grade guarantee?
19. Are scoring phrases kept out of patient speech?
20. Does patient speech start with everyday language, not acute coronary syndrome jargon?
21. Is metadata hidden or compact?
22. Does the page avoid showing multiple complete versions at once?
23. Is the footer/disclaimer at the bottom?
24. Did implementation avoid inventing labels?
25. Does every learner-facing label sound like natural clinical teaching language?

If any check fails:

Reject output, revise, audit again, and publish only after all checks pass.
