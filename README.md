# AMC Clinical Mastery

A static, case-by-case learning site for original AMC-style clinical stations.

The active checkpoint is Case 1: **Chest discomfort after lunch**.

## Four views from one source

Every case has two versions and two screens:

| Version | Stem | Full Run |
|---|---|---|
| Exam | Clean candidate stem | Complete high-standard encounter |
| Reasoning | Identical stem with `(*)` Hints | Identical encounter with `(*)` Hints |

The canonical Case 1 wording is stored once in `data/cases/case-001.js`. Reasoning mode uses exact-phrase anchors to add marker buttons at render time. It does not keep a second annotated copy.

Each Hint opens in one contextual window, shows the phrase it came from, and provides connected reasoning with clickable primary sources.

## Active production path

```text
data/cases/case-001.js
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

Case 1 remains a review checkpoint until the user approves it. Revisions are made to the same canonical case and redeployed. Case 2 begins only after Case 1 approval.

## Source position

Cases are original practice material aligned to current official AMC specifications. They are not AMC examination stations, official marking scripts or pass guarantees. Clinical guidance uses current Australian primary sources linked inside the Hints.

Legacy Engine 2 and audio material remains in the repository history and is not loaded by the active site. It can be removed after the Case 1 checkpoint is accepted.
