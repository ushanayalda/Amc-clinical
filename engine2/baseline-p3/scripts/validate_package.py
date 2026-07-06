from pathlib import Path
import json, sys
root = Path(__file__).resolve().parents[1]
errors = []
broken = ":content" + "Reference["
opaque = "oa" + "icite"
active_old = "Active architecture:" + "\n" + "v3.3.2"
for p in root.rglob('*'):
    if p.is_file() and p.suffix in {'.md','.txt','.json','.yaml','.yml','.csv'}:
        txt = p.read_text(encoding='utf-8', errors='ignore')
        if broken in txt:
            errors.append(f'broken citation placeholder in {p}')
        if opaque in txt:
            errors.append(f'opaque citation placeholder in {p}')
        if active_old in txt:
            errors.append(f'active v3.3.2 in {p}')
for name in ['case.schema.json','status.schema.json','source-basis-map.schema.json','voice.schema.json','qa.schema.json','renderer-status.schema.json','audio-state.schema.json']:
    path = root/'schemas'/name
    if not path.exists():
        errors.append(f'missing schema {name}')
    else:
        json.loads(path.read_text(encoding='utf-8'))
if errors:
    print('\n'.join(errors))
    sys.exit(1)
print('PASS: package validation complete')
