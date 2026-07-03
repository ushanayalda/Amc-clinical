# Upgrade path

## Current state

AMC Clinical Pathway is currently a static GitHub Pages clinical learning web app.

It is structured as a hybrid-ready app shell:
- shared layout
- structured content
- reusable renderers
- compact mobile-first UI
- floating navigation
- Tools drawer

## Future upgrade options

### 1. PWA installability

Future work:
- Add manifest.webmanifest
- Add app icons
- Add safe service worker
- Cache the app shell
- Test cache invalidation carefully

Do not add a service worker until it is tested. A stale or broken service worker can make the site harder to fix.

### 2. Local progress tracking

Future work:
- Store completed warm-ups in localStorage
- Store completed cases in localStorage
- Store last opened case
- Track ready/not-ready status

Keep this optional and privacy-preserving.

### 3. Search

Future work:
- Add client-side search over phases, patterns, cases, hints, and notes
- Keep search hidden until there is enough content to justify it

### 4. Content packs

Future work:
- Split content by phase
- Load active phase first
- Keep schemaVersion for migrations
- Allow new case packs without changing layout code

### 5. Native wrapper

Future work:
- Consider only after the web app is stable
- Possible wrapper options can be evaluated later
- Do not add native tooling now

## Rule

Do not add complexity before the learning flow is stable.
