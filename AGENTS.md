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

Hints form one continuous thinking journey from the first stem phrase to the end of the station. They are not separate fact cards. Each new clue must add to the map, change its weighting or test it without silently replacing what came before. Do not reveal the diagnosis before the case evidence reaches it.

Every Hint should anticipate the thought or panic question that may naturally appear at that exact phrase, then provide:

- the thought that may pop up;
- a warm thinking-partner response;
- a short causal chain where mechanism helps memory;
- what to keep holding in the growing map;
- the next question or action;
- the current internal-clock anchor when relevant;
- reassurance that supports safe flexibility rather than certainty seeking.

Across a case, the journey must connect anatomy, physiology, mechanism, symptom meaning, differential diagnosis, discriminators, investigations, management, patient concerns, examiner logic, traps and variations. Use the memorable chain `structure → mechanism → sensation → symptom pattern → diagnostic weight → next safe thought`. Explain necessary technical terms immediately in everyday language.

Every case needs a repeated task compass:

- a three-part 2-minute reading map;
- an 8-minute task allocation derived from that station's exact task wording;
- an explicit rule that danger may interrupt the clock;
- a recovery cue that returns the doctor to the unfinished task verb after interruption or a time prompt;
- an end-of-station release cue so the previous case does not contaminate the next stem.

The clock is a compass, not a countdown or pressure device. Teach flexible evidence weighting, not cue-to-diagnosis matching.

### Thinking-partner voice

The voice should feel like an experienced consultant whose mind links clues quickly but who deliberately regulates the pace beside the learner. It notices the tempting link, pauses, explains why it matters, anchors the current map, recaps and returns to the exact task.

Use this natural rhythm:

`notice → pause → link → brief logic → so far → now`

Write like speech, not a textbook or generated study note:

- short natural sentences and occasional fragments are welcome;
- use contractions where they sound normal;
- sound like a consultant explaining what they would notice, ask or do next;
- name the actual diagnosis, finding, question or action;
- avoid diagnostic metaphors such as map, lane, open, front, weight, threshold or background;
- avoid slogans, catchphrases, motivational copy and sentences written to sound quotable;
- avoid abstract labels such as clinical weight, probability shifter, flexible move, examiner logic or pathophysiology;
- prefer “At 60, I would consider a heart-related cause early” to a clever or metaphorical version of that thought;
- do not repeat a rigid teaching template or generic reassurance sentence;
- do not praise the learner or perform motivation;
- keep one cognitive move per paragraph;
- use an arrow chain only when it genuinely makes anatomy or mechanism easier to remember.

The Hint window should read as one flowing conversation. Do not turn every reasoning component into a separate card grid.

Use warm, direct, everyday English. Never mention a learner diagnosis or label. Do not use gamification, streaks, points, countdown pressure, progress rings or competing dashboards.

## Clinical and exam integrity

- Use current primary Australian sources for clinical claims.
- Use current official AMC sources for exam-format claims.
- Keep source links clickable but collapsed by default so references never dominate the reasoning journey.
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
