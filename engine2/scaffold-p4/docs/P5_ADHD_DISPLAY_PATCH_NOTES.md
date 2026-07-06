# P5 ADHD Display Patch Notes

Patch:
v3.3.3-P5-ADHD-DISPLAY-GATE

Status:
DRAFT NONCLINICAL PATCH

## Purpose

This patch closes the ADHD display, typography, touch target, disclosure, audio-control, and renderer-accessibility governance gap.

It does not change clinical meaning.
It does not migrate cases.
It does not generate Case 4.
It does not generate audio.
It does not mark any case release_ready.

## Added

- ADHD Display Contract.
- Display release rules.
- Display contract schema.
- Section display metadata schema.
- Design token schema.
- Reference CSS design tokens.
- Lightweight validators for display contract, section metadata, and design tokens.
- Playwright smoke-test stubs for future renderer checks.

## Enforced Defaults

- ADHD-safe display is the default mode.
- One task per view.
- One dominant primary action.
- Candidate task before teaching.
- Retrieval before model answer.
- Critical safety content cannot be hidden.
- No autoplay.
- No hover-only content.
- Primary controls target at least 44 x 44 CSS px.
- Body text must remain resizable and readable.

## Release Impact

This patch adds display and accessibility guardrails only.

Passing P5 does not override existing source, clinical, renderer, accessibility, audio, or human review gates.

Existing release-ready rules remain stricter than this patch.
