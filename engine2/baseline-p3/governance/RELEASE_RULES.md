# Release Rules

No case may be marked release_ready from GPT output alone.

Required release state:

```yaml
source_status: pass
schema_status: pass
renderer_status: pass
clinical_status: pass
accessibility_status: pass
audio_release_status: pass | not_required
last_human_reviewer: recorded
release_status: release_ready
```

Blockers:
- missing Source Basis Map in high-risk case
- renderer_status: partial
- clinical_status not pass
- accessibility_status not pass
- audio_release_status hold when audio required
- listen_test_status not pass when audio generated
- Case 4 bypass without exact phrase
- Case 2/3 missing lock packet or canonical bundle
