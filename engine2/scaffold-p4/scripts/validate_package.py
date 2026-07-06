#!/usr/bin/env python3
from pathlib import Path
import json
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
errors = []
broken = ":content" + "Reference["
opaque = "oa" + "icite"
active_old = "Active architecture:" + "\n" + "v3.3.2"
for p in root.rglob('*'):
    if p.is_file() and p.suffix in {'.md','.txt','.json','.yaml','.yml','.csv'}:
        txt = p.read_text(encoding='utf-8', errors='ignore')
        if broken in txt:
            errors.append(f'broken citation placeholder in {p.relative_to(root)}')
        if opaque in txt:
            errors.append(f'opaque citation placeholder in {p.relative_to(root)}')
        if active_old in txt:
            errors.append(f'active v3.3.2 in {p.relative_to(root)}')
for name in ['case.schema.json','status.schema.json','source-basis-map.schema.json','source-basis-map-hold.schema.json','voice.schema.json','qa.schema.json','renderer-status.schema.json','audio-state.schema.json','display-contract.schema.json','section-display.schema.json','design-token.schema.json']:
    path = root/'schemas'/name
    if not path.exists():
        errors.append(f'missing schema {name}')
    else:
        json.loads(path.read_text(encoding='utf-8'))
if errors:
    print('\n'.join(errors))
    sys.exit(1)
scaffold = root/'scripts'/'validate_scaffold.py'
result = subprocess.run([sys.executable, str(scaffold)], cwd=str(root), text=True, capture_output=True)
if result.returncode != 0:
    print(result.stdout)
    print(result.stderr)
    sys.exit(result.returncode)
validator_outputs = []
if result.stdout.strip():
    validator_outputs.append(result.stdout.strip())
for validator_name in ['validate_display_contract.py', 'validate_section_display.py', 'validate_design_tokens.py']:
    validator = root/'scripts'/validator_name
    result = subprocess.run([sys.executable, str(validator)], cwd=str(root), text=True, capture_output=True)
    if result.returncode != 0:
        print(result.stdout)
        print(result.stderr)
        sys.exit(result.returncode)
    if result.stdout.strip():
        validator_outputs.append(result.stdout.strip())
print('PASS: package validation complete')
print('\n'.join(validator_outputs))
