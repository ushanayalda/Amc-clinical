#!/usr/bin/env python3
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
ERRORS = []

REQUIRED_FIELDS = {
    "section_id",
    "display_label",
    "display_priority",
    "critical",
    "hidden_allowed",
    "primary_path",
    "max_visible_words"
}


def fail(path: Path, message: str) -> None:
    ERRORS.append(f"{path.relative_to(ROOT)}: {message}")


def load_json(path: Path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        fail(path, f"invalid JSON: {exc}")
        return None


def count_words(text: str) -> int:
    return len(re.findall(r"\b[\w'-]+\b", text or ""))


def validate_schema() -> None:
    path = ROOT / "schemas" / "section-display.schema.json"
    schema = load_json(path)
    if not schema:
        return
    required = set(schema.get("required", []))
    missing = REQUIRED_FIELDS - required
    if missing:
        fail(path, f"missing required display fields: {', '.join(sorted(missing))}")
    if not schema.get("allOf"):
        fail(path, "critical=true rule must be expressed in allOf")


def validate_display_object(path: Path, section_id: str, display: dict, text: str) -> None:
    missing = REQUIRED_FIELDS - set(display.keys())
    if missing:
        fail(path, f"{section_id} display missing fields: {', '.join(sorted(missing))}")
        return
    if display.get("critical") is True and display.get("hidden_allowed") is not False:
        fail(path, f"{section_id} critical display cannot allow hiding")
    max_visible_words = display.get("max_visible_words")
    if isinstance(max_visible_words, int) and count_words(text) > max_visible_words:
        fail(path, f"{section_id} exceeds max_visible_words")
    if display.get("render_component") == "disclosure" and not display.get("disclosure_label"):
        fail(path, f"{section_id} disclosure component requires disclosure_label")


def validate_case(path: Path) -> None:
    data = load_json(path)
    if not data:
        return
    sections = data.get("sections", {})
    if not isinstance(sections, dict):
        return
    for section_id, value in sections.items():
        if not isinstance(value, dict):
            continue
        display = value.get("display")
        if not isinstance(display, dict):
            continue
        text = json.dumps(value)
        validate_display_object(path, section_id, display, text)


def main() -> int:
    validate_schema()
    for path in sorted((ROOT / "cases").glob("case-*/case.json")):
        validate_case(path)

    if ERRORS:
        print("FAIL: section display validation")
        print("\n".join(ERRORS))
        return 1

    print("PASS: section display validation complete")
    return 0


if __name__ == "__main__":
    sys.exit(main())
