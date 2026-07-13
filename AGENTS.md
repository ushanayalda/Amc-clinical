# AMC Clinical Mastery site contract

This repository is a static GitHub Pages site for original AMC-style clinical practice cases.

## Product model

Each case is authored once and rendered as four views:

1. Exam / Stem
2. Exam / Full Run
3. Reasoning / Stem
4. Reasoning / Full Run

The Exam and Reasoning views must use the exact same case wording. Reasoning mode may only add quiet `(*)` marker buttons. It must never keep a second annotated copy of the stem or run.

The Stem contains the role, setting, essential scenario details, tasks, predominant assessment area and any task timing. It must not contain teaching or disclose the diagnosis unless the station itself requires it.

The Full Run is a high-standard model encounter from the first station line to the final line. It includes doctor, patient, examiner and station-audio speech, plus clearly labelled actions, findings and investigations. It is not described as an official AMC script or a guarantee of a pass.

## Hints

Use the learner-facing word `Hints`.

Every Hint targets an exact phrase in one canonical text item using:

- surface
- item ID
- exact quote
- occurrence

Clicking `(*)` opens one contextual window beside the source phrase on desktop and near it on mobile. Only one window may be open. Closing it returns focus to the marker and must not move the reader to another page.

Hints are a thinking partner. Across a case they should connect anatomy, physiology, pathophysiology, symptom meaning, differential diagnosis, discriminators, investigations, management, patient concerns, examiner logic, traps and variations. Teach flexible evidence weighting, not cue-to-diagnosis matching.

Use warm, direct, everyday English. Never mention a learner diagnosis or label. Do not use gamification, streaks, points, countdown pressure, progress rings or competing dashboards.

## Clinical and exam integrity

- Use current primary Australian sources for clinical claims.
- Use current official AMC sources for exam-format claims.
- Keep source links visible and clickable inside relevant Hints.
- Do not reproduce confidential or copyrighted AMC station material. Cases are original and exam-faithful.
- Keep asked-for tasks in control. Do not reward unrequested generic rituals.
- Treat patient and examiner information as request-dependent where the scenario requires it.
- Mark clinical inference or local-protocol decisions honestly.

## Accessibility and presentation

- Mobile first, calm, readable and low distraction.
- One screen has one job.
- Use semantic HTML and visible keyboard focus.
- Markers require accessible labels.
- Escape, close button and outside click close a Hint.
- Respect reduced-motion preferences.
- Never use colour as the only meaning cue.

## Required checks

Before publishing:

```text
npm run check
npm test
npm run build
npm run verify:dist
```

Tests must prove exact-text parity, anchor integrity, four-view routing, citation integrity, one-window behaviour and build integrity.

## Delivery flow

Build and publish one reviewable case. Revise that same case from user feedback. Proceed to the next case only after the current case is approved. Do not add Custom GPT handoffs, model APIs, package locks, hash approvals, migration gates or multi-agent governance to the production path.
