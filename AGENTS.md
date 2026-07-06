# AGENTS.md

## Locked Product Contract

AMC Clinical Pathway is an ADHD-friendly clinical rehearsal system by Dr. Ushana Yalda.

The site must feel like a calm AMC rehearsal room:
- one doctor
- one patient
- one speaking task
- one missed point to improve
- one repeat run

This is not a dashboard, game, curriculum tree, command centre, progress tracker, document archive, or generic case library.

Core rule:

One screen = one job.

Primary learner loop:

Home -> Ignite -> Start speaking -> Finish run -> Choose one Hint -> Repeat.

Do not add new clinical content while this display system is being implemented.

## Product Goal

The learner must always understand:
- Where am I?
- What am I practising?
- What do I do now?
- What comes next?
- What did I improve?

Preferred learner state:

"I know what to do next."

Avoid learner states:
- "I am lost."
- "I need to decode this page."
- "I do not know which version is real."
- "I have too much to read before I can start."

## Global Language Rules

Use natural clinical teaching language. Keep wording short and everyday.

Use:
- You
- Dr Ushana
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

Do not use learner-facing:
- Candidate
- Dr ___
- Map
- Study map
- Visual case tree
- Command centre
- Level 1
- Level 2
- Prime
- Priming drill
- Before the Case
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
- Repair
- Reset
- Help

Avoid hype and grade guarantees:
- Tier 1 Dominance
- High-grade guarantee
- Guaranteed pass
- Exam killer
- Master key
- Scoring phrase
- Strict dominance
- Crush the station
- Perfect answer

Allowed performance language:
- Safe performance
- Clear first action
- Speak the case
- Do not miss
- Practise one line
- Repeat the run
- This reduces common fail risks.
- This improves clarity and timing.

## Page Jobs

Home answers:

What do I do now?

Cases answers:

Where do I continue?

Ignite answers:

What danger am I looking for before I start?

Case 1 answers:

Can I start speaking now?

## One Current Truth

The root URL and index page must show the same current state.

Visible current truth:
- Current pattern: Dangerous Chest Pain
- Current case: Classic Chest Pain
- Status: Ready
- Primary action: Start speaking

Do not show conflicting states such as demo progress, tracking not connected yet, Case 1 awaiting transfer, or current unit labels that disagree with Case 1 readiness.

## Content Exposure

Content is not deleted. Content is staged.

Visible first:
- action content
- one primary action
- safety anchors

Collapsed:
- study content
- metadata
- case details

Hidden until needed:
- Hints
- Sources
- examiner lines
- doctor thinking
- memory drills

Default path:

Start speaking -> Finish run -> Choose one Hint -> Repeat.

## Script Identity

Learner-facing scripts use:

You
"Line here."

Patient
"Line here."

Opening line:

"Hello, I'm Dr Ushana, one of the doctors. How would you like me to address you?"

Do not place examiner/scoring language inside patient conversation.

Patient speech and doctor speech must start with everyday language before medical terms.

## Clinical Safety Rules

Preserve existing clinical meaning.

For dangerous chest pain in General Practice, keep these points prominent:
- Chest pressure with danger features is dangerous.
- Possible heart problem until proven otherwise.
- Do not reassure early.
- Do not miss acute coronary syndrome, aortic dissection, pulmonary embolism, and tension pneumothorax.
- Call ambulance now.
- ECG only if it does not delay transfer.
- Do not wait for troponin.
- Do not let the patient drive.
- Aspirin if safe.
- Oxygen only if clinically needed.
- Chest pain spray or tablet only after blood pressure and medication safety check.

Do not let display order imply:
- ECG before ambulance.
- history before escalation.
- troponin before transfer.
- private car is acceptable.
- oxygen is routine.

Do not invent new medical guidance unless explicitly asked.

## Design Rules

1. Mobile-first.
2. One main action per screen.
3. Compact headers on study pages.
4. Navigation should be reachable but visually quiet.
5. Use progressive disclosure.
6. Use compact cards and avoid dashboard panels.
7. Avoid wide grids of choices.
8. Do not repeat the full AMC brand block on every page.
9. Do not add a layout or view selector.
10. Do not create a separate custom design for every case.

Desktop target:
- max content width 820 to 900 px
- body text about 16 px
- line height about 1.45
- main title 28 to 32 px
- section heading 20 to 22 px
- card padding 14 to 18 px
- gap between cards 10 to 14 px

Mobile target:
- one action per screen
- no horizontal scroll
- no multi-column layout
- large enough buttons
- collapsed study material
- safety strip visible

## Hybrid-Readiness Rules

The site must remain static and GitHub Pages compatible.

Leave clean upgrade space for:
- PWA installability
- offline access
- local progress tracking
- search
- content packs
- possible native wrapper later

Do not implement heavy future features before the learning flow is stable.

## Accessibility Rules

Use semantic HTML, accessible buttons, visible focus states, ARIA labels for drawers and navigation, Escape-to-close behavior, and reduced-motion support.

## Acceptance Gate

Before publishing, run the checklist in docs/ADHD_REHEARSAL_SYSTEM_LOCK.md.
