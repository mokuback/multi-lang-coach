#!/usr/bin/env python3
"""
Translate scenarioPatterns 01.json and 02.json to add German (de) entries.
Uses googletrans (free, no API key). Processes in batches with progress saving.
"""

import json
import time
import os
from googletrans import Translator

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
FILES = [
    os.path.join(SCRIPT_DIR, 'public', 'data', 'scenarioPatterns', '01.json'),
    os.path.join(SCRIPT_DIR, 'public', 'data', 'scenarioPatterns', '02.json'),
]
PROGRESS_FILE = os.path.join(SCRIPT_DIR, 'translate_de_progress.json')
BATCH_SIZE = 20  # items per batch (each item has translations + explanations)

def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {'file_idx': 0, 'item_idx': 0, 'translated': {}}

def save_progress(progress):
    with open(PROGRESS_FILE, 'w', encoding='utf-8') as f:
        json.dump(progress, f, ensure_ascii=False, indent=2)

def translate_texts(translator, texts, src='en', dest='de'):
    """Translate a list of texts. Returns list of translated texts."""
    results = []
    for text in texts:
        try:
            result = translator.translate(text, src=src, dest=dest)
            results.append(result.text)
            time.sleep(0.1)  # Rate limiting
        except Exception as e:
            print(f"  Error translating '{text[:30]}...': {e}")
            results.append(text)  # Fallback: use original
    return results

def main():
    translator = Translator()
    progress = load_progress()
    
    print(f"Starting translation...")
    print(f"Progress: file_idx={progress['file_idx']}, item_idx={progress['item_idx']}")
    
    for file_idx in range(progress['file_idx'], len(FILES)):
        filepath = FILES[file_idx]
        print(f"\nProcessing {os.path.basename(filepath)}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        # data is an object: { topicKey: [ {id, translations, explanations}, ... ], ... }
        topics = list(data.keys())
        total_items = sum(len(data[t]) for t in topics)
        
        start_topic_idx = 0
        start_item_idx = progress['item_idx'] if file_idx == progress['file_idx'] else 0
        
        item_count = 0
        for topic_idx, topic_key in enumerate(topics):
            items = data[topic_key]
            start = start_item_idx if topic_idx == 0 else 0
            
            for item_idx in range(start, len(items)):
                item = items[item_idx]
                
                # Translate translations (use English as source)
                if 'de' not in item.get('translations', {}):
                    en_text = item['translations'].get('en', '')
                    if en_text:
                        try:
                            result = translator.translate(en_text, src='en', dest='de')
                            item['translations']['de'] = result.text
                            print(f"  [{item_count+1}/{total_items}] Translated: {en_text[:40]}...")
                            time.sleep(0.2)
                        except Exception as e:
                            print(f"  Error: {e}")
                            item['translations']['de'] = en_text  # Fallback
                
                # Translate explanations (use English as source)
                if 'de' not in item.get('explanations', {}):
                    en_exp = item['explanations'].get('en', '')
                    if en_exp:
                        try:
                            result = translator.translate(en_exp, src='en', dest='de')
                            item['explanations']['de'] = result.text
                            time.sleep(0.2)
                        except Exception as e:
                            print(f"  Error: {e}")
                            item['explanations']['de'] = en_exp  # Fallback
                
                item_count += 1
                
                # Save progress periodically
                if item_count % BATCH_SIZE == 0:
                    progress['file_idx'] = file_idx
                    progress['item_idx'] = item_idx + 1
                    save_progress(progress)
                    print(f"  Progress saved: {item_count}/{total_items}")
        
        # Save completed file
        print(f"\nSaving {os.path.basename(filepath)}...")
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Saved!")
        
        # Reset item_idx for next file
        progress['file_idx'] = file_idx + 1
        progress['item_idx'] = 0
        save_progress(progress)
    
    print("\nDone! All files translated.")
    # Clean up progress file
    if os.path.exists(PROGRESS_FILE):
        os.remove(PROGRESS_FILE)

if __name__ == '__main__':
    main()
