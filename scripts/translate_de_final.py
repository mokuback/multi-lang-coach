import json
import time
import pickle
from googletrans import Translator

# Paths
en_file = 'src/locales/en.json'
de_file = 'src/locales/de.json'
progress_file = 'translate_progress.pkl'

# Read en.json
with open(en_file, 'r', encoding='utf-8-sig') as f:
    en_data = json.load(f)

print(f'Total keys: {len(en_data)}')

# Initialize translator
translator = Translator()

# Load existing progress
try:
    with open(progress_file, 'rb') as f:
        progress = pickle.load(f)
    print(f'Loaded progress: {len(progress)} entries')
except:
    progress = {}
    print('No existing progress')

# Translate missing entries
keys = list(en_data.keys())
values = list(en_data.values())

print(f'Need to translate: {len(keys) - len(progress)} entries')

for i, (key, value) in enumerate(zip(keys, values)):
    if key in progress:
        continue
    
    # Translate single entry with retry
    max_retries = 3
    for attempt in range(max_retries):
        try:
            # Set timeout using signal or just try
            result = translator.translate(value, src='en', dest='de')
            progress[key] = result.text
            print(f'[{len(progress)}/{len(keys)}] {value[:40]}... -> {result.text[:40]}...')
            break
        except Exception as e:
            print(f'Attempt {attempt+1} failed for entry {i}: {e}')
            if attempt < max_retries - 1:
                time.sleep(2)  # Wait before retry
            else:
                print(f'Using fallback for entry {i}')
                progress[key] = value  # Fallback to English
    
    # Save progress every 10 translations
    if len(progress) % 10 == 0:
        with open(progress_file, 'wb') as f:
            pickle.dump(progress, f)
        print(f'Saved progress: {len(progress)} entries')
    
    # Rate limiting
    time.sleep(0.5)

# Save final progress
with open(progress_file, 'wb') as f:
    pickle.dump(progress, f)

# Create de.json
de_data = {key: progress.get(key, en_data[key]) for key in keys}

with open(de_file, 'w', encoding='utf-8') as f:
    json.dump(de_data, f, ensure_ascii=False, indent=2)

print(f'Created {de_file} with {len(de_data)} entries')

# Cleanup
import os
if os.path.exists(progress_file):
    os.remove(progress_file)
    print('Cleaned up progress file')

print('Translation complete!')
