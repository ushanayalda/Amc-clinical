#!/usr/bin/env python3
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
ERRORS = []

CRITICAL_SECTIONS = {
    "station_stem",
    "task_snapshot",
    "safety_layer",
    "must_say_lines",
    "primary_practice_action"
}

FORBIDDEN_LEARNER_WORDS = {
    "repair card",
    "repair layer",
    "reset"
}

REQUIRED_CONTRACT_PHRASES = [
    "One task per view",
    "One dominant action",
    "Candidate task before teaching",
    "Critical safety content always visible",
    "No autoplay"
]

REQUIRED_RELEASE_PHRASES = [
    "ADHD Display Contract",
    "accessibility_status",
    "renderer_status",
    "critical safety content is hidden",
    "audio autoplays"
]


def fail(path: Path, message: str) -> None:
    ERRORS.append(f"{path.relative_to(ROOT)}: {message}")


def count_words(text: str) -> int:
    return len(re.findall(r"\b[\w'-]+\b", text or ""))


def load_json(path: Path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        fail(path, f"invalid JSON: {exc}")
        return None


def validate_required_text(path: Path, phrases) -> None:
    if not path.exists():
        fail(path, "missing required file")
        return
    text = path.read_text(encoding="utf-8", errors="ignore")
    for phrase in phrases:
        if phrase not in text:
            fail(path, f"missing required phrase: {phrase}")


def validate_schema_files() -> None:
    for name in [
        "display-contract.schema.json",
        "section-display.schema.json",
        "design-token.schema.json"
    ]:
        schema = load_json(ROOT / "schemas" / name)
        if not schema:
            continue
        if schema.get("$schema") != "https://json-schema.org/draft/2020-12/schema":
            fail(ROOT / "schemas" / name, "schema must use JSON Schema draft 2020-12")
        if not schema.get("$id"):
            fail(ROOT / "schemas" / name, "schema must define $id")


def validate_case_json(path: Path) -> None:
    data = load_json(path)
    if not data:
        return
    sections = data.get("sections", {})
    if not isinstance(sections, dict):
        fail(path, "sections must be an object")
        return

    for key, value in sections.items():
        text = value if isinstance(value, str) else json.dumps(value)
        lower = text.lower()

        for forbidden in FORBIDDEN_LEARNER_WORDS:
            if forbidden in lower:
                fail(path, f"forbidden learner-facing wording found: {forbidden}")

        display = value.get("display") if isinstance(value, dict) else None
        if isinstance(display, dict):
            critical = display.get("critical")
            hidden_allowed = display.get("hidden_allowed")
            if critical is True and hidden_allowed is not False:
                fail(path, f"critical section cannot be hidden: {key}")
            if key in CRITICAL_SECTIONS and hidden_allowed is True:
                fail(path, f"required critical section cannot allow hiding: {key}")

        if "autoplay" in lower and "autoplay: false" not in lower and '"autoplay": false' not in lower:
            fail(path, "audio autoplay must be false")

        if key == "pattern_recognition_card" and count_words(text) > 120:
            fail(path, "pattern_recognition_card is too dense")

        if key == "hints_hidden" and count_words(text) > 250:
            fail(path, "hints_hidden is too dense; split into smaller hints")


def main() -> int:
    validate_required_text(ROOT / "governance" / "ADHD_DISPLAY_CONTRACT.md", REQUIRED_CONTRACT_PHRASES)
    validate_required_text(ROOT / "governance" / "DISPLAY_RELEASE_RULES.md", REQUIRED_RELEASE_PHRASES)
    validate_required_text(ROOT / "governance" / "RELEASE_RULES.md", ["ADHD Display Gate"])
    validate_schema_files()

    for path in sorted((ROOT / "cases").glob("case-*/case.json")):
        validate_case_json(path)

    if ERRORS:
        print("FAIL: ADHD display contract validation")
        print("\n".join(ERRORS))
        return 1

    print("PASS: ADHD display contract validation complete")
    return 0


if __name__ == "__main__":
    sys.exit(main())
