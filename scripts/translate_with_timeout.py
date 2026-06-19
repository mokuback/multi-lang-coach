import json
import time
from googletrans import Translator
import signal

def timeout_handler(signum, frame):
    raise TimeoutError("Translation timed out")

# Set timeout for translation
signal.signal(signal.SIGALRM, timeout_handler)

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
        # Set alarm for timeout (10 seconds)
        signal.alarm(10)
        
        result = translator.translate(value, src='en', dest='de')
        de_data[key] = result.text
        
        # Cancel alarm
        signal.alarm(0)
        
        # Print progress
        if (i+1) % 50 == 0:
            print(f'Translated {i+1}/{len(keys)}')
        
    except TimeoutError:
        print(f'Timeout at {i+1}, using fallback')
        de_data[key] = value  # Fallback to English
        signal.alarm(0)
        
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
