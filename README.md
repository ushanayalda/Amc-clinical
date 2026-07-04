# AMC Clinical Pathway

AMC Clinical Pathway is a static clinical pattern-training web app by Dr. Ushana Yalda.

The site is designed to stay GitHub Pages compatible. It uses plain HTML, CSS, and JavaScript.

## Publishing model

GitHub Pages should publish only the generated `dist/` artifact from the Pages workflow.

Build locally with:

```powershell
npm run build
npm run verify:dist
```

The generated artifact contains:

- `dist/index.html` as the canonical shell.
- `dist/404.html` as the same shell for fallback routing.
- `dist/version.json` with the build ID, build time, and fingerprinted asset manifest.
- Fingerprinted CSS, JavaScript, and data files.
- A build marker in the shell: `x-build-id` and `window.__BUILD_ID__`.

Do not publish source root pages such as `map.html`, `before-case.html`, or `case1.html` directly. The public routes should go through `index.html` and hash routes until the Pages artifact is active.

If the workflow builds successfully but the live root still shows old HTML, open repository Settings -> Pages and set Source to GitHub Actions. The health check intentionally fails when branch publishing is still serving the site.

## Current structure

Learning structure:

Phase
-> Pattern
-> Warm-up
-> Case
-> Speak aloud
-> Hints / Notes only when needed

Key files:

- `data/content.js` contains structured clinical content.
- `assets/js/renderers.js` renders Home, Pathway, Warm-up, and Case screens.
- `assets/js/content-store.js` provides content lookup helpers.
- `assets/js/router.js` keeps the app routed through the canonical shell.
- `assets/js/ui.js` handles floating navigation and the Tools drawer.
- `assets/css/styles.css` contains the shared mobile-first app styling.

## Adding a new case

Cases are added through structured content, not custom page design.

Learning structure:

Phase
-> Pattern
-> Warm-up
-> Case

To add a new case:

1. Add or reuse a phase in `phases`.
2. Add or reuse a pattern in `patterns`.
3. Add or reuse a warm-up in `warmups`.
4. Add the case in `cases`.
5. Link the IDs:
   - `phase.patternIds`
   - `pattern.warmupId`
   - `pattern.caseIds`
   - `case.phaseId`
   - `case.patternId`
   - `case.warmupId`

Do not create a new custom layout for each case unless a reusable component is needed.
