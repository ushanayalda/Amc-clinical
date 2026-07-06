# Display Release Rules

Patch:
v3.3.3-P5-ADHD-DISPLAY-GATE

Status:
DRAFT GOVERNANCE PATCH

Scope:
Nonclinical display, renderer, typography, touch target, disclosure, and audio-control gates.

This document does not change clinical content or clinical authority.

## Required Display Gate

A case or template cannot pass accessibility_status if the ADHD Display Contract fails.

A case or template cannot pass renderer_status if:

- candidate task is not visible before teaching content;
- critical safety content is hidden;
- model answer is visible before attempt where attempt gating is required;
- primary action is absent or ambiguous;
- audio autoplays;
- transcript access is missing where audio is present;
- keyboard focus is hidden or obscured;
- primary controls are below the project target size;
- learner-facing case content renders as dense unchunked text.

## Required Evidence

Display release requires evidence for:

- renderer_status;
- accessibility_status;
- clinical_status;
- source_status;
- audio_release_status when audio is present;
- human reviewer record;
- ADHD display contract result.

## Nonclinical Boundary

Passing this display gate does not mark a case release_ready.

Existing source, clinical, audio, renderer, accessibility, and human review gates still apply.

## Forbidden Display Outcomes

Do not release a display template that:

- turns the homepage into a syllabus;
- shows all notes at once before practice;
- displays full model answers before learner attempt;
- hides safety-critical instructions in disclosures;
- uses autoplay audio;
- uses hover-only hints;
- uses tiny icon-only controls;
- relies on colour alone for status;
- lets sticky UI obscure keyboard focus;
- treats ADHD support as an optional afterthought.
