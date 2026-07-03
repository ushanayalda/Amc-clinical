# AGENTS.md

## Project identity

AMC Clinical Pathway is a clinical pattern-training site by Dr. Ushana Yalda.

It teaches learners to recognise dangerous clinical patterns before diagnostic certainty.

The core learning structure is:

Phase
-> Pattern
-> Warm-up
-> Case
-> Speak aloud
-> Hints / Notes only when needed

This is not a generic case library.

## Product goal

Make the learner feel oriented, calm, and guided.

The learner must always understand:
- Where they are
- What they are learning
- What to press next
- What danger pattern matters
- What they need to say aloud

## UX problem to solve

The current site creates cognitive overload:
- too many visible buttons
- repeated full headers
- mixed labels such as Map, Cases, Warm-up, Hints, Need, Stem, Notes
- large cards that consume mobile screen space
- fragmented pages that do not feel connected

Fix structure and navigation before adding more content.

## Design rules

1. Mobile-first.
2. One main action per screen.
3. Compact headers on study pages.
4. Navigation should be reachable but visually quiet.
5. Use progressive disclosure.
6. Show the pathway as Phase -> Pattern -> Case.
7. Use drawers, sheets, accordions, and overlays for secondary tools.
8. Do not repeat the full AMC brand block on every page.
9. Do not add a layout or view selector.
10. Do not create a separate custom design for every case.

## Approved navigation labels

Use:
- Home
- Pathway
- Warm-up
- Case
- Tools
- Hints
- Notes

Avoid:
- Map
- Cases
- Need
- Stem button group
- Open what is ready
- Continue without destination

Use explicit CTAs:
- Continue Case 1
- Start Case 1
- Start speaking
- Open Pathway
- Open Warm-up

## Clinical safety rules

Preserve existing clinical meaning.

For dangerous chest pain, keep these points prominent:
- Chest pressure with danger features is dangerous.
- Possible heart problem until proven otherwise.
- Do not reassure early.
- Do not miss ACS, aortic dissection, pulmonary embolism, and tension pneumothorax.
- Call ambulance now.
- ECG only if it does not delay transfer.
- Do not wait for troponin.
- Do not let the patient drive.
- Must-say line: "This may be coming from your heart. I am arranging an ambulance now."

Do not invent new medical guidance unless explicitly asked.

## Hybrid-readiness rules

The site must remain static and GitHub Pages compatible.

Leave clean upgrade space for:
- PWA installability
- offline access
- local progress tracking
- search
- content packs
- possible native wrapper later

Do not implement heavy future features before the learning flow is stable.

## Animation rules

Use subtle animation only when it improves orientation:
- card reveal
- drawer open and close
- phase expansion
- active path movement
- smooth transitions

Avoid distracting or decorative animation.

## Accessibility rules

Use semantic HTML, accessible buttons, visible focus states, ARIA labels for drawers and navigation, Escape-to-close behavior, and reduced-motion support.
