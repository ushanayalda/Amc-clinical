# AMC Clinical Mastery

A static, case-by-case learning site for original AMC-style clinical stations.

The site now loads a canonical case registry and lets the learner move between completed cases.

## Four views from one source

Every case has two versions and two screens:

| Version | Stem | Full Run |
|---|---|---|
| Exam | Clean candidate stem | Complete high-standard encounter |
| Reasoning | Identical stem with `(*)` Hints | Identical encounter with `(*)` Hints |

Each canonical case is stored once in `data/cases/case-NNN.js`. Case 1 contains its completed Reasoning layer. New cases are produced here as Exam Stem and Full Run only, then receive their Reasoning layer through the separate reasoning workflow without changing the case wording.

Each Hint opens in one contextual window and continues the same thinking journey: what may pop up, why the clue matters, what to keep holding, what to do next, and where the internal task clock sits. Sources remain clickable but collapsed until requested.

Reasoning mode also carries a reusable task compass. It maps the 2-minute reading period and divides the 8-minute run according to the exact station tasks. Danger can interrupt that clock; the learner is shown how to act and then return to the unfinished task lane.

## Active production path

```text
data/cases/case-NNN.js
  -> assets/js/case-views.js
  -> assets/js/app.js
  -> scripts/build-pages.js
  -> GitHub Pages
```

No Custom GPT, model API, migration gate, release lock or multi-engine handoff is required.

## Local checks

```bash
npm run check
npm test
npm run build
npm run verify:dist
```

Open `index.html` directly for a quick source preview, or serve `dist/` after building to test the production artifact.

## Case progression

Case production proceeds autonomously through the registry. Each case receives internal clinical, timing, content-contract and build checks before publication. Per-case user approval is not required.

## Source position

Cases are original practice material aligned to current official AMC specifications. They are not AMC examination stations, official marking scripts or pass guarantees. Clinical guidance uses current Australian primary sources linked inside the Hints.

Legacy Engine 2 and audio material remains in the repository history and is not loaded by the active site. It can be removed after the Case 1 checkpoint is accepted.
