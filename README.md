# AMC Clinical Mastery

A static, case-by-case learning site for original AMC-style clinical stations.

## Learner collections

The site has two deliberately separate collections:

- **New Cases** is the default production collection. Cases are generated fresh from the fixed registry and contain an exam-neutral Stem plus a complete word-for-word Full Run.
- **Emergency Explore** preserves the earlier 42 generated cases as a separate exploration library. Those source files remain unchanged and are not treated as the current production collection.

Emergency Explore retains the original staging. All 40 Phase 1 cases contain completed Reasoning layers. Cases 41 and 42 complete the initial two-case core for Phase 2, Pattern 13 and remain Exam-only.

The new collection begins again at Case 1. Its reasoning layer is produced in a separate workflow and is not part of this case-generation path.

## Current production path

```text
registry-library/case-registry.v1.1.json
  -> data/current-cases/case-NNN.js
  -> data/blueprints/case-NNN.blueprint.json
  -> scripts/amc-engine-lib.js
  -> assets/js/case-views.js
  -> assets/js/app.js
  -> scripts/build-pages.js
```

The Emergency Explore source path remains:

```text
data/cases/case-NNN.js
```

No Custom GPT or multi-engine handoff is required.

## Current checkpoint

- Fresh Cases 1 and 2: `AUDITED`
- Current collection: two audited cases, 40 fixed registry slots pending
- Registry: `READY`
- Next production case: Case 3
- Emergency Explore: 42 earlier case files, unchanged
- Publication: Case 1 remains the current public production case; Case 2 has not been published

The collection-level gate remains `HOLD` until every planned current case exists. This does not change the individual `AUDITED` results for Cases 1 and 2.

## Local checks

```bash
npm run check
npm test
npm run build
npm run verify:dist
npm run audit:amc:report
```

Open `index.html` directly for a source preview, or serve `dist/` after building to test the production artifact.

## Production rules

- The Stem must not announce the diagnosis, urgency or required disposition.
- The Full Run follows only the visible tasks.
- Identity and consent precede clinical questioning.
- Doctor information requests are asked one at a time.
- A handover is included only when a visible task requests one.
- Clinical claims use current authoritative Australian sources.
- Each full run is listened and timed against the eight-minute station.
- A new case can be individually audited while the incomplete collection remains on `HOLD`.

## Source position

Cases are original practice material aligned to current official AMC specifications. They are not AMC examination stations, official marking scripts or pass guarantees.
