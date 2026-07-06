# Case 1 Lock Packet

case_id: CP-P1-C001
case_number: 1
pattern: Dangerous Chest Pain
clinical_variant: Classic ACS
dominant_trap: indigestion or test-delay trap
source_status: locked_source_provided
source_authority: current live website Case 1 text in data/content.js
locked_canonical_bundle_path: engine2/scaffold-p4/source-locks/case-001/LOCKED_CANONICAL_BUNDLE.md
allowed_migration_target: engine2/scaffold-p4/cases/case-001/

## Migration Instruction

Migration must preserve clinical meaning. Do not infer missing clinical content.

## Scope

- Source-intake only.
- Case 1 only.
- Do not migrate Case 1 in this PR.
- Do not edit Engine 2 Case 1 scaffold files in this PR.
- Do not generate audio.
- Do not mark release_ready.
