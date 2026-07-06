#!/usr/bin/env python3
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
ERRORS = []

REQUIRED_TOKENS = {
    "--font-body",
    "--text-body-size",
    "--text-learning-size",
    "--line-height-body",
    "--content-width",
    "--case-width",
    "--touch-target-min",
    "--focus-ring-width"
}


def fail(path: Path, message: str) -> None:
    ERRORS.append(f"{path.relative_to(ROOT)}: {message}")


def load_json(path: Path):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception as exc:
        fail(path, f"invalid JSON: {exc}")
        return None


def extract_token(css: str, token: str):
    match = re.search(rf"{re.escape(token)}\s*:\s*([^;]+);", css)
    return match.group(1).strip() if match else None


def px_value(value: str):
    if not value:
        return None
    match = re.match(r"([0-9.]+)px$", value)
    return float(match.group(1)) if match else None


def rem_value(value: str):
    if not value:
        return None
    match = re.match(r"([0-9.]+)rem$", value)
    return float(match.group(1)) if match else None


def ch_value(value: str):
    if not value:
        return None
    match = re.match(r"([0-9.]+)ch$", value)
    return float(match.group(1)) if match else None


def validate_schema() -> None:
    schema = load_json(ROOT / "schemas" / "design-token.schema.json")
    if not schema:
        return
    for key in ["font", "spacing", "layout", "touch_targets", "motion", "colour"]:
        if key not in schema.get("properties", {}):
            fail(ROOT / "schemas" / "design-token.schema.json", f"missing schema property: {key}")


def validate_css() -> None:
    path = ROOT / "styles" / "design-tokens.css"
    if not path.exists():
        fail(path, "missing design tokens CSS")
        return
    css = path.read_text(encoding="utf-8", errors="ignore")
    for token in REQUIRED_TOKENS:
        if extract_token(css, token) is None:
            fail(path, f"missing CSS token: {token}")

    learning_size = rem_value(extract_token(css, "--text-learning-size"))
    if learning_size is not None and learning_size < 1.125:
        fail(path, "--text-learning-size must be at least 1.125rem")

    line_height = extract_token(css, "--line-height-body")
    if line_height is not None and float(line_height) < 1.5:
        fail(path, "--line-height-body must be at least 1.5")

    touch_target = px_value(extract_token(css, "--touch-target-min"))
    if touch_target is not None and touch_target < 44:
        fail(path, "--touch-target-min must be at least 44px")

    case_width = ch_value(extract_token(css, "--case-width"))
    if case_width is not None and case_width > 72:
        fail(path, "--case-width must not exceed 72ch")

    required_css = [
        "text-align: left",
        "min-width: var(--touch-target-min)",
        "min-height: var(--touch-target-min)",
        ":focus-visible",
        "prefers-reduced-motion: reduce"
    ]
    for snippet in required_css:
        if snippet not in css:
            fail(path, f"missing required CSS rule: {snippet}")


def main() -> int:
    validate_schema()
    validate_css()
    if ERRORS:
        print("FAIL: design token validation")
        print("\n".join(ERRORS))
        return 1
    print("PASS: design token validation complete")
    return 0


if __name__ == "__main__":
    sys.exit(main())
