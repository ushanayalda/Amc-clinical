# AMC Clinical Mastery

A static, case-by-case learning site for original AMC-style clinical stations.

The site now loads a canonical case registry and lets the learner move between completed cases.

## Four views from one source

Every case has two versions and two screens:

| Version | Stem | Full Run |
|---|---|---|
| Exam | Clean station stem | Complete high-standard encounter |
| Reasoning | Identical stem with guided Hints | Identical encounter with guided Hints |

Each canonical case is stored once in `data/cases/case-NNN.js`. All 40 Phase 1 cases contain completed Reasoning layers. Cases 41 and 42 begin Phase 2 with completed Exam Stems and Full Runs; their Reasoning layers can be added separately without changing the case wording.

Each case now has a quiet 12-to-16-Hint essential journey marked `(*)`. Optional Hints remain beside their exact phrases as `(+)`, hidden until the learner asks to show them. Additional mechanism detail inside a Hint is also collapsed. A new Hint pauses at the question before revealing the consultant reasoning; opened Hints are remembered on that device until the doctor restarts the case practice. Sources remain clickable but collapsed until requested.

Reasoning mode also carries a compact authored task plan and a collapsible full plan. Reading controls never jump forward over the canonical consultation: the doctor closes each Hint and continues from the source phrase. The plan divides the 2-minute reading period and 8-minute run according to the exact station tasks. Danger can interrupt that clock; after urgent action, the doctor is returned to the question or action that was paused.

## Two mastery horizons

Every Reasoning view states two linked goals. **Case mastery** identifies what should become reliable in the current station. **Clinical mastery** identifies the reasoning that should transfer to an unfamiliar patient. The final essential Hint adds one changed-presentation question. Its answer, decision checks and case-relevant sources stay hidden until the doctor has attempted it.

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

Cases 1 to 40 complete Phase 1 across 12 clinical patterns. Cases 41 and 42 complete the initial two-case core for Phase 2, Pattern 13: Stable Chest Pain versus Unstable Chest Pain. Each case has passed clinical, timing, content-contract and build checks before publication. Production can continue in registry order without per-case approval.

## Source position

Cases are original practice material aligned to current official AMC specifications. They are not AMC examination stations, official marking scripts or pass guarantees. Current Australian clinical sources are recorded with each case and can be presented quietly by the separate Reasoning layer.

Legacy Engine 2 and audio material remains in the repository history and is not loaded by the active site.
