import json
import time
from googletrans import Translator

# Paths
en_file = 'src/locales/en.json'
de_file = 'src/locales/de.json'

# Read en.json
with open(en_file, 'r', encoding='utf-8-sig') as f:
    en_data = json.load(f)

print(f'Total keys: {len(en_data)}')

# Initialize translator
translator = Translator()

# Translate all entries
keys = list(en_data.keys())
values = list(en_data.values())
de_data = {}

print('Starting translation...')

for i, (key, value) in enumerate(zip(keys, values)):
    try:
        result = translator.translate(value, src='en', dest='de')
        de_data[key] = result.text
        
        # Print progress (only numbers to avoid encoding issues)
        if (i+1) % 20 == 0:
            print(f'Translated {i+1}/{len(keys)}')
        
    except Exception as e:
        print(f'Error at {i+1}: {e}')
        de_data[key] = value  # Fallback to English
    
    # Rate limiting
    time.sleep(0.3)

print('Translation complete!')

# Save de.json with UTF-8 encoding
with open(de_file, 'w', encoding='utf-8') as f:
    json.dump(de_data, f, ensure_ascii=False, indent=2)

print(f'Created {de_file} with {len(de_data)} entries')
