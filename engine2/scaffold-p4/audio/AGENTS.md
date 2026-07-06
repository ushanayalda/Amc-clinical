# Audio AGENTS.md

Audio is HOLD by default.

Allowed before approval:
- Voice Pack text manifest drafting
- filename validation
- trigger validation
- transcript parity check

Not allowed before approval:
- audio generation
- audio release
- public audio publishing

Audio release requires:
- audio_manifest_status: locked
- audio_generation_status: generated
- audio_dry_run_status: pass
- listen_test_status: pass
- audio_release_status: pass
