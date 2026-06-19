"""
Fix incorrect simplified Chinese characters in scenarioPatterns translations.zh-CN
Main error: 幺 (U+5E7A) → 么 (U+4E48) in question particles
"""

import json
import os

base = r'D:\Antigravity_data'
files = ['public/data/scenarioPatterns/01.json', 'public/data/scenarioPatterns/02.json']

# Error patterns to fix
fixes = [
    ('什幺', '什么'),
    ('怎幺', '怎么'),
    ('这幺', '这么'),
    ('那幺', '那么'),
    ('多幺', '多么'),
    ('好幺', '好么'),
    ('对幺', '对么'),
    ('行幺', '行么'),
    ('可以幺', '可以么'),
]

total_fixed = 0

for filepath in files:
    full_path = os.path.join(base, filepath)
    print(f'Processing: {filepath}')
    
    with open(full_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    file_fixed = 0
    
    for topic_id, value in data.items():
        items = value if isinstance(value, list) else [value]
        for item in items:
            trans = item.get('translations', {})
            if 'zh-CN' in trans:
                original = trans['zh-CN']
                corrected = original
                for wrong, right in fixes:
                    corrected = corrected.replace(wrong, right)
                
                if corrected != original:
                    item['translations']['zh-CN'] = corrected
                    file_fixed += 1
    
    print(f'  Fixed {file_fixed} items')
    total_fixed += file_fixed
    
    # Backup and write
    backup_path = full_path + '.bak'
    if not os.path.exists(backup_path):
        with open(backup_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f'  Backup saved to {backup_path}')
    
    with open(full_path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'  Saved to {filepath}')

print(f'\nTotal fixed: {total_fixed} items')
