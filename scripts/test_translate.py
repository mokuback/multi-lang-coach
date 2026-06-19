import json
from googletrans import Translator
import time

# Read first 10 entries from en.json
with open('src/locales/en.json', 'r', encoding='utf-8-sig') as f:
    en_data = json.load(f)

keys = list(en_data.keys())[:10]
values = list(en_data.values())[:10]

print(f'Testing translation of {len(keys)} entries...')

translator = Translator()
de_data = {}

for i, (key, value) in enumerate(zip(keys, values)):
    try:
        result = translator.translate(value, src='en', dest='de')
        de_data[key] = result.text
        print(f'{i+1}. {value[:30]}... -> {result.text[:30]}...')
    except Exception as e:
        print(f'{i+1}. Error: {e}')
        de_data[key] = value
    time.sleep(0.5)

print('\nTranslated entries:')
for k, v in de_data.items():
    print(f'{k}: {v}')
