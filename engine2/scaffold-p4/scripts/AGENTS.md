# Scripts AGENTS.md

Scripts validate structure, status, renderer compatibility, audio contracts, and release gates.

Scripts may:
- validate JSON/YAML
- scan for forbidden placeholders
- scan for active v3.3.2 references
- test renderer requirements
- test audio status gates
- generate CI reports

Scripts must not:
- rewrite clinical content
- auto-fix medication rules
- mark clinical review as passed
- mark accessibility review as passed
