# Migration Commands v3.3.3-P3

## Case 1

Migrate Case 1 into v3.3.3-P3.
Use the Case 1 canonical bundle and Case 1 lock packet as the only source of truth.
Do not change clinical meaning.
Do not generate Case 2.
Do not generate Case 4.
Set all statuses to HOLD unless repository evidence proves otherwise.
Output repo-ready files only.

## Case 2

Migrate Case 2 into v3.3.3-P3.
Required source:
- Case 2 lock packet
- Case 2 locked canonical bundle
If either source is missing:
source_status: HOLD
Do not migrate.
Ask for the missing locked source.
Do not reconstruct from memory.
Do not create a new dissection case under Case 2 label.
Preserve clinical meaning.
All statuses HOLD.

## Case 3

Migrate Case 3 into v3.3.3-P3.
Required source:
- Case 3 lock packet
- Case 3 locked canonical bundle
If either source is missing:
source_status: HOLD
Do not migrate.
Ask for the missing locked source.
Do not reconstruct from memory.
Do not create a new PE case under Case 3 label.
Do not convert the case into GERD.
Preserve clinical meaning.
All statuses HOLD.

## Case 4 Gate Check

Confirm whether Case 4 can be generated.
Check repository registry first.
If Cases 1 to 3 are not migrated, audited, exported, rendered, clinically reviewed, and accessibility reviewed:
Do not generate.
Only bypass if exact phrase appears:
BYPASS CASE 4 GATE
If bypass used:
bypass_used: true
clinical_status: hold
release_status: hold
