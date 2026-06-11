import os
import re
import json

src_dir = r'd:\Antigravity_data\src'
keys = set()
pattern = re.compile(r't\([\'"](.*?)[\'"]\)')

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.jsx') or file.endswith('.js'):
            with open(os.path.join(root, file), 'r', encoding='utf-8') as f:
                content = f.read()
                matches = pattern.findall(content)
                keys.update(matches)

# Add categoryData labels
import sys
sys.path.append(src_dir)
try:
    with open(os.path.join(src_dir, 'data', 'categoryData.js'), 'r', encoding='utf-8') as f:
        content = f.read()
        label_pattern = re.compile(r'label:\s*[\'"](.*?)[\'"]')
        keys.update(label_pattern.findall(content))
except Exception as e:
    print('Error loading categoryData.js:', e)

print('TOTAL KEYS:', len(keys))
with open(r'd:\Antigravity_data\keys.json', 'w', encoding='utf-8') as f:
    json.dump(sorted(list(keys)), f, ensure_ascii=False, indent=2)
