import os

filepath = os.path.join(os.path.dirname(__file__), 'src', 'components', 'Chat.tsx')
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 1: currentMsg - index from displayHistory != index in chatHistory
old1 = '    // 取得當前訊息\n    const currentMsg = chatHistory[index];'
new1 = '    // 取得當前訊息（displayHistory 已過濾 system，index 不對應 chatHistory）\n    const currentMsg = chatHistory.find(m => m.content === text) || null;'

if old1 in content:
    content = content.replace(old1, new1)
    print('Fix 1 applied: currentMsg now found by content match')
else:
    print('Fix 1: old text not found, searching...')
    for i, line in enumerate(content.split('\n')):
        if 'currentMsg' in line:
            print(f'  L{i+1}: {repr(line)}')

# Fix 2: uiSegments 判斷改為 includes（正則分割可能失效時的備援）
old2 = '        useUILang = currentMsg.uiSegments.some(us => segment === us);'
new2 = '        useUILang = currentMsg.uiSegments.some(us => segment === us || segment.includes(us));'

if old2 in content:
    content = content.replace(old2, new2)
    print('Fix 2 applied: segment includes check added')
else:
    print('Fix 2: old text not found')
    for i, line in enumerate(content.split('\n')):
        if 'useUILang = currentMsg.uiSegments' in line:
            print(f'  L{i+1}: {repr(line)}')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
