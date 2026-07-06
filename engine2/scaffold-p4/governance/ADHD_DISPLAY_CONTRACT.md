# ADHD Display Contract

Patch:
v3.3.3-P5-ADHD-DISPLAY-GATE

Status:
DRAFT GOVERNANCE PATCH

Scope:
Website display, typography, interaction, renderer behaviour, and accessibility behaviour.

This patch does not change clinical content.
This patch does not change diagnosis, differential diagnosis, medication advice, escalation rules, transfer rules, or warning signs.

## Principle

The default website display must be ADHD-safe.

The interface must behave like a calm practice console, not a dense content portal.

Primary rule:
One task per view.
One dominant action.
Candidate task before teaching.
Retrieval before model answer.
Critical safety content always visible.

## Design Model

The website must follow:

1. Calm visual system.
2. Single-column primary reading path.
3. Mobile-first layout.
4. Cue-card-based practice.
5. Plain Australian clinical language.
6. Accessible audio controls.
7. Optional hints and transcript disclosure.
8. No hidden safety-critical instructions.
9. No decorative interruption.
10. No autoplay.

## Hard Display Rules

### First Viewport

The first viewport must show:

- clear page title;
- station or case identity where relevant;
- one dominant primary action;
- current task;
- progress or orientation cue where relevant.

The first viewport must not show:

- multiple equal-weight primary actions;
- dense syllabus-style grids;
- rotating banners;
- autoplay media;
- decorative animation;
- full model answer before learner attempt.

### Case Page Order

Renderer must display case sections in this order:

1. station_stem
2. task_snapshot
3. primary_practice_action
4. safety_layer
5. pattern_recognition_card
6. focused_performance_script
7. patient_explanation_script or examiner_student_script
8. differential_and_trap_recovery
9. recall_check
10. confidence_check
11. hints_hidden
12. source_basis_map_hidden

Candidate-facing task content must appear before teaching explanation.

### Hidden Content

Allowed hidden content:

- hints_hidden
- source_basis_map_hidden
- sources_hidden
- transcript
- glossary
- deeper_rationale
- model_structure after attempt

Forbidden hidden content:

- station_stem
- task_snapshot
- safety_layer
- warning signs
- escalation rules
- transfer rules
- medication safety rules
- primary action
- candidate instruction

Any section marked critical=true must not render inside an accordion, tooltip, hover card, collapsed drawer, or hidden panel.

### Cue Cards

Cue cards must:

- contain one idea;
- have one clear heading;
- include one action prompt;
- stay short;
- prompt recall rather than replace performance.

Cue cards must not become full scripts.

### Audio

Audio controls must:

- never autoplay;
- expose play, pause, restart, seek, and speed control where audio exists;
- include transcript access;
- be keyboard-operable;
- keep visible focus;
- remain near the prompt they control.

Audio release rules remain governed by existing audio status gates.

## Typography Contract

Default body text:

- minimum 16 CSS px;
- preferred learning content size 18 CSS px;
- line height minimum 1.5;
- left aligned;
- not justified;
- maximum readable content width 75ch;
- conventional sans serif system stack;
- no decorative body fonts;
- no all-caps paragraph blocks;
- no text effects for learner-facing content.

Cue cards:

- title maximum 8 words;
- body maximum 45 words;
- one idea per card;
- one action prompt per card.

Paragraphs:

- target maximum 3 visible lines;
- no dense walls of text;
- break long explanations into cards, steps, or short sections.

## Touch And Control Contract

Primary interactive controls:

- minimum 44 x 44 CSS px project target;
- must not rely on colour alone;
- must show visible focus;
- must be reachable by keyboard;
- must not be obscured by sticky header or footer.

WCAG technical minimum:
Do not fall below WCAG 2.2 target-size minimum unless a documented exception applies.

## Colour And Contrast Contract

- Dark text on light background for primary learning flow.
- One primary action colour.
- Statuses must use text labels, not colour alone.
- No patterned backgrounds behind text.
- Buttons and input boundaries must have visible non-text contrast.
- Focus state must be obvious.

## Release Impact

A case or template cannot pass accessibility_status if the ADHD Display Contract fails.

A case or template cannot pass renderer_status if required sections render in the wrong order, safety-critical content is hidden, or the primary task cannot be reached cleanly.

This patch does not permit release_ready status by itself.
Existing release gates still apply.
