# Case 4 Gate

Case 4 is blocked by default.

Allowed only if:

1. Repository registry proves Cases 1 to 3 are migrated, audited, exported, rendered, clinically reviewed, and accessibility reviewed.

OR

2. Exact bypass phrase is present:
BYPASS CASE 4 GATE

If bypass is used:

```yaml
bypass_used: true
clinical_status: hold
release_status: hold
reason: "user bypassed sequencing gate"
```

Bypass allows draft only.
Bypass does not allow release.
