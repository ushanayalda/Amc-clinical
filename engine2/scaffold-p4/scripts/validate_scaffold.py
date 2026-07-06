#!/usr/bin/env python3
from pathlib import Path
import json
import sys

try:
    import yaml
    import jsonschema
except Exception as exc:
    print(f"Missing validation dependency: {exc}")
    sys.exit(1)

ROOT = Path(__file__).resolve().parents[1]
SCHEMAS = ROOT / "schemas"
CASES = ROOT / "cases"

REQUIRED_CASE_FILES = {
    "case.md",
    "case.json",
    "status.json",
    "source-basis-map.yaml",
    "qa.json",
    "voice.json",
}

errors = []

def load_json(path: Path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        errors.append(f"Invalid JSON: {path}: {exc}")
        return None

def load_yaml(path: Path):
    try:
        return yaml.safe_load(path.read_text(encoding="utf-8"))
    except Exception as exc:
        errors.append(f"Invalid YAML: {path}: {exc}")
        return None

def load_schema(name: str):
    path = SCHEMAS / name
    if not path.exists():
        errors.append(f"Missing schema: {name}")
        return None
    return load_json(path)

schemas = {
    "case": load_schema("case.schema.json"),
    "status": load_schema("status.schema.json"),
    "voice": load_schema("voice.schema.json"),
    "qa": load_schema("qa.schema.json"),
    "source": load_schema("source-basis-map.schema.json"),
}

def validate(data, schema, label):
    if data is None or schema is None:
        return
    try:
        jsonschema.Draft202012Validator(schema).validate(data)
    except jsonschema.ValidationError as exc:
        errors.append(f"Schema validation failed for {label}: {exc.message}")

case_dirs = sorted([p for p in CASES.glob("case-*") if p.is_dir()])
if not case_dirs:
    errors.append("No case folders found")

for cdir in case_dirs:
    present = {p.name for p in cdir.iterdir() if p.is_file()}
    missing = REQUIRED_CASE_FILES - present
    if missing:
        errors.append(f"{cdir.relative_to(ROOT)} missing files: {', '.join(sorted(missing))}")
        continue

    case_json = load_json(cdir / "case.json")
    status_json = load_json(cdir / "status.json")
    voice_json = load_json(cdir / "voice.json")
    qa_json = load_json(cdir / "qa.json")
    source_map = load_yaml(cdir / "source-basis-map.yaml")

    validate(case_json, schemas["case"], f"{cdir}/case.json")
    validate(status_json, schemas["status"], f"{cdir}/status.json")
    validate(voice_json, schemas["voice"], f"{cdir}/voice.json")
    validate(qa_json, schemas["qa"], f"{cdir}/qa.json")
    validate(source_map, schemas["source"], f"{cdir}/source-basis-map.yaml")

    if status_json and status_json.get("release_status") == "release_ready":
        errors.append(f"{cdir.relative_to(ROOT)} has release_status: release_ready")

    if source_map:
        sm_status = source_map.get("status")
        if sm_status == "pass":
            if not source_map.get("last_checked"):
                errors.append(f"{cdir.relative_to(ROOT)} source map PASS missing last_checked")
            if not source_map.get("review_due"):
                errors.append(f"{cdir.relative_to(ROOT)} source map PASS missing review_due")
            if not source_map.get("rules"):
                errors.append(f"{cdir.relative_to(ROOT)} source map PASS has no rules")
        elif sm_status == "hold":
            # HOLD-compatible scaffold may have null dates and empty rules.
            pass
        else:
            errors.append(f"{cdir.relative_to(ROOT)} source map status must be hold or pass for scaffold validation")

# Case 4 content guard
case4 = CASES / "case-004"
if case4.exists():
    status = load_json(case4 / "status.json")
    bypass_recorded = bool(status and status.get("bypass_used"))
    text = ""
    for name in ["case.md", "case.json", "README.md"]:
        p = case4 / name
        if p.exists():
            text += "\n" + p.read_text(encoding="utf-8", errors="ignore")
    exact_bypass_recorded = "BYPASS CASE 4 GATE" in text
    forbidden_content_markers = [
        "Station Stem",
        "Live AMC Station Script",
        "Pattern Trigger",
        "Patient:",
        "You:",
        "Safety Pin Block:",
        "VOICE PACK FOR ELEVENLABS",
    ]
    if not (bypass_recorded or exact_bypass_recorded):
        for marker in forbidden_content_markers:
            if marker in text:
                errors.append(f"Case 4 content marker present without gate or exact bypass phrase: {marker}")
    if status and status.get("release_status") == "release_ready":
        errors.append("Case 4 cannot be release_ready in scaffold package")

# Broken citation and legacy active-version check
broken = ":content" + "Reference["
opaque = "oa" + "icite"
active_old = "Active architecture:\nv3.3.2"
for p in ROOT.rglob("*"):
    if p.is_file() and p.suffix in {".md", ".txt", ".json", ".yaml", ".yml", ".csv"}:
        txt = p.read_text(encoding="utf-8", errors="ignore")
        if broken in txt:
            errors.append(f"Broken citation placeholder in {p.relative_to(ROOT)}")
        if opaque in txt:
            errors.append(f"Opaque citation placeholder in {p.relative_to(ROOT)}")
        if active_old in txt:
            errors.append(f"Active v3.3.2 reference in {p.relative_to(ROOT)}")

if errors:
    print("FAIL: scaffold validation")
    for err in errors:
        print(f"- {err}")
    sys.exit(1)

print("PASS: scaffold validation complete")
