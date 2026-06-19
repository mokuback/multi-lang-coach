#!/usr/bin/env python3
"""
Translate scenarioPatterns 01.json and 02.json to add German (de) entries.
Uses deep-translator (free, no API key, uses web scraping).
Processes in batches with progress saving.
"""

import json
import time
import os
from deep_translator import GoogleTranslator

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
FILES = [
    os.path.join(SCRIPT_DIR, 'public', 'data', 'scenarioPatterns', '01.json'),
    os.path.join(SCRIPT_DIR, 'public', 'data', 'scenarioPatterns', '02.json'),
]
PROGRESS_FILE = os.path.join(SCRIPT_DIR, 'translate_de_progress.json')
BATCH_SIZE = 50  # items per batch

def load_progress():
    default = {'file_idx': 0, 'topic_idx': 0, 'item_idx': 0}
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
        # Merge with default to handle missing keys
        for k, v in default.items():
            if k not in data:
                data[k] = v
        return data
    return default

def save_progress(progress):
    with open(PROGRESS_FILE, 'w', encoding='utf-8') as f:
        json.dump(progress, f, ensure_ascii=False)

def translate_batch(translator, texts, batch_size=20):
    """Translate a list of texts in batches."""
    results = []
    for i in range(0, len(texts), batch_size):
        batch = texts[i:i+batch_size]
        try:
            batch_results = translator.translate_batch(batch)
            results.extend(batch_results)
            print(f"  Translated batch {i//batch_size + 1}/{(len(texts)+batch_size-1)//batch_size}")
            time.sleep(0.5)  # Rate limiting
        except Exception as e:
            print(f"  Error translating batch: {e}")
            # Fallback: translate one by one
            for text in batch:
                try:
                    results.append(translator.translate(text))
                    time.sleep(0.2)
                except:
                    results.append(text)
    return results

def main():
    translator = GoogleTranslator(source='en', target='de')
    
    # Load progress
    progress = load_progress()
    print(f"Progress: file_idx={progress['file_idx']}, topic_idx={progress['topic_idx']}, item_idx={progress['item_idx']}")
    
    for file_idx in range(progress['file_idx'], len(FILES)):
        filepath = FILES[file_idx]
        print(f"\nProcessing {os.path.basename(filepath)}...")
        
        with open(filepath, 'r', encoding='utf-8') as f:
            data = json.load(f)
        
        topics = list(data.keys())
        total_items = sum(len(data[t]) for t in topics)
        print(f"  Total items: {total_items}")
        
        start_topic_idx = progress['topic_idx'] if file_idx == progress['file_idx'] else 0
        start_item_idx = progress['item_idx'] if file_idx == progress['file_idx'] and start_topic_idx == 0 else 0
        
        item_count = 0
        for topic_idx in range(start_topic_idx, len(topics)):
            topic_key = topics[topic_idx]
            items = data[topic_key]
            start = start_item_idx if topic_idx == start_topic_idx else 0
            
            # Collect all texts that need translation for this topic
            texts_to_translate = []
            item_indices = []
            
            for item_idx in range(start, len(items)):
                item = items[item_idx]
                
                # Check if translation is needed
                need_trans = False
                if 'de' not in item.get('translations', {}):
                    need_trans = True
                if 'de' not in item.get('explanations', {}):
                    need_trans = True
                
                if need_trans:
                    en_text = item['translations'].get('en', '')
                    en_exp = item['explanations'].get('en', '')
                    texts_to_translate.append(('trans', en_text))
                    texts_to_translate.append(('exp', en_exp))
                    item_indices.append(item_idx)
            
            if texts_to_translate:
                # Translate in batch
                print(f"  Topic {topic_idx+1}/{len(topics)}: Translating {len(texts_to_translate)//2} items...")
                texts = [t[1] for t in texts_to_translate]
                try:
                    translated = translator.translate_batch(texts)
                except Exception as e:
                    print(f"  Batch translation failed: {e}")
                    # Fallback: translate one by one
                    translated = []
                    for text in texts:
                        try:
                            translated.append(translator.translate(text))
                            time.sleep(0.3)
                        except:
                            translated.append(text)
                
                # Assign translations back to items
                for idx, (trans_type, _) in enumerate(texts_to_translate):
                    item_idx = item_indices[idx // 2]  # 2 texts per item
                    if idx % 2 == 0:  # trans
                        if 'de' not in items[item_idx].get('translations', {}):
                            items[item_idx]['translations']['de'] = translated[idx]
                    else:  # exp
                        if 'de' not in items[item_idx].get('explanations', {}):
                            items[item_idx]['explanations']['de'] = translated[idx]
            
            # Update progress
            progress['file_idx'] = file_idx
            progress['topic_idx'] = topic_idx
            progress['item_idx'] = len(items)
            save_progress(progress)
        
        print(f"\nSaving {os.path.basename(filepath)}...")
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"Saved!")
        
        # Reset for next file
        progress['file_idx'] = file_idx + 1
        progress['topic_idx'] = 0
        progress['item_idx'] = 0
        save_progress(progress)
    
    print("\nDone! All files translated.")
    if os.path.exists(PROGRESS_FILE):
        os.remove(PROGRESS_FILE)

if __name__ == '__main__':
    main()
