import os
import shutil

src_md = r'd:\Antigravity_data\src\data\user_guide.md'
data_dir = r'd:\Antigravity_data\src\data'

langs = {
    'zh-TW': '# 歡迎使用 Multi-Lang Coach！🚀\n\n(此為繁體中文版本)\n\n',
    'zh-CN': '# 欢迎使用 Multi-Lang Coach！🚀\n\n(此为简体中文版本)\n\n',
    'en': '# Welcome to Multi-Lang Coach! 🚀\n\n*(Full English translation coming soon. Displaying original text below)*\n\n',
    'ja': '# Multi-Lang Coach へようこそ！🚀\n\n*(日本語の完全な翻訳はまもなく提供されます。以下は原文です)*\n\n',
    'ko': '# Multi-Lang Coach에 오신 것을 환영합니다! 🚀\n\n*(한국어 번역이 곧 제공될 예정입니다. 아래는 원문입니다)*\n\n',
    'es': '# ¡Bienvenido a Multi-Lang Coach! 🚀\n\n*(Traducción completa al español próximamente. Texto original abajo)*\n\n',
    'fr': '# Bienvenue sur Multi-Lang Coach! 🚀\n\n*(Traduction complète en français à venir. Texte original ci-dessous)*\n\n'
}

with open(src_md, 'r', encoding='utf-8') as f:
    original_content = f.read()

# Skip the original first line for the translated ones to replace it
body_content = '\n'.join(original_content.split('\n')[1:])

for lang, header in langs.items():
    file_path = os.path.join(data_dir, f'user_guide_{lang}.md')
    if lang == 'zh-TW':
        content = original_content
    else:
        content = header + body_content
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Generated all markdown files.")
