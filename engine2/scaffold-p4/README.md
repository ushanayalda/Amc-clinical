# AMC Clinical Pathway Engine 2 v3.3.3-P4 Scaffold Cleanup Final

Status: FINAL SCAFFOLD CLEANUP PACKAGE

Architecture baseline: v3.3.3-P3
Cleanup patch: v3.3.3-P4

This package does not change architecture.
It applies scaffold cleanup only.

Applied cleanup:
- Added placeholder case.json to case-001 through case-004.
- Added HOLD-compatible Source Basis Map validation.
- Hardened qa.schema.json with clinical, accessibility and renderer review records.
- Added scripts/validate_scaffold.py.
- Updated scaffold validation so no case is release_ready.
- Blocked Case 4 content unless repository gates pass or exact bypass phrase is recorded.

No case migration is included.
No Case 4 generation is included.
No audio generation is included.
