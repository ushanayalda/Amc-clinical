# Root AGENTS.md

Project:
AMC Clinical Pathway

Active architecture:
v3.3.3

Active patch:
v3.3.3-P3

Repository role:
Only durable source of truth.

Agent role:
Implementation, validation, preview, tests, packaging.

Agents must not:
- rewrite clinical meaning
- change diagnosis
- change differential diagnosis
- change medication advice
- change escalation rules
- change transfer rules
- change warning signs
- copy raw recall wording
- mark release-ready without gate evidence
- generate actual audio without audio approval
- generate Case 4 unless gate passes or exact bypass phrase is present

Clinical changes require human clinical review.

Required before release:
- schema_status: pass
- renderer_status: pass
- clinical_status: pass
- accessibility_status: pass
- audio_release_status: pass or not_required
- last_human_reviewer recorded
