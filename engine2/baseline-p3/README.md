# AMC Clinical Pathway
## Engine 2 v3.3.3-P3 Final Production Baseline

Status: FINAL-QA PASS
Date: 2026-07-06
Role: Repo-first production baseline for AMC Clinical Pathway.

This package supersedes:
- v3.3.2 Custom GPT transfer pack
- v3.3.3-P1
- v3.3.3-P2

This package preserves the previous Engine 2 repo-first architecture and applies final production hardening:
- active version consistency
- repo-first authority
- Custom GPT demotion to case formatter
- strict HOLD rules
- split renderer states
- split audio states
- exact Case 4 bypass phrase
- Case 2/3 source locks
- schema hardening
- CI honesty rules
- no broken citation placeholders

Core authority line:
Repository remembers. Project governs. Formatter formats. Codex builds. Clinician approves.

Current safe next step:
Create repo scaffold and commit this package.

Do not:
- migrate cases before repo scaffold, schemas, and AGENTS.md are in place
- generate Case 4 without gate pass or exact bypass phrase
- generate audio
- mark release-ready from GPT output
- upload raw recall feedback as production knowledge
