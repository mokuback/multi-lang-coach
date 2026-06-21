import os, sys

filepath = os.path.join(os.path.dirname(__file__), 'src', 'components', 'Chat.tsx')
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# ===== Fix 1: 在 ChatMessage interface 加入 uiSegments =====
old_iface = '  translation?: string;\n  correction?: {'
new_iface = '  translation?: string;\n  uiSegments?: string[];\n  correction?: {'
if old_iface in content:
    content = content.replace(old_iface, new_iface, 1)
    print('Fix 1: added uiSegments to ChatMessage interface')
else:
    print('Fix 1: WARNING - interface pattern not found')

# ===== Fix 2: currentMsg 改用 content 比對 =====
old_current = '    // 取得當前訊息\n    const currentMsg = chatHistory[index];'
new_current = '    // 取得當前訊息（displayHistory 索引不等於 chatHistory，改用 content 比對）\n    const currentMsg = chatHistory.find(m => m.content === text) || null;'
if old_current in content:
    content = content.replace(old_current, new_current, 1)
    print('Fix 2: fixed currentMsg to find by content')
else:
    print('Fix 2: WARNING - currentMsg pattern not found')

# ===== Fix 3: 替換 uiSegments 正則分割為手動掃描（保留 else 塊）=====
# 找到 if (currentMsg?.uiSegments ...) 的位置
marker = '    if (currentMsg?.uiSegments && currentMsg.uiSegments.length > 0) {'
idx = content.find(marker)
if idx == -1:
    print('Fix 3: WARNING - uiSegments block marker not found')
else:
    # 找到對應的 else 塊結尾（即整個 if-else 結構的結尾）
    # 從 marker 開始找最外層 }
    pos = idx
    brace = 0
    started = False
    else_found = False
    while pos < len(content):
        for ch in content[pos]:
            if ch == '{':
                brace += 1
                started = True
            elif ch == '}':
                brace -= 1
        if started and brace == 0:
            end_pos = pos
            break
        pos += 1
    
    # end_pos 現在指向 uiSegments if-else 塊的結尾 }
    # 我們要替換從 marker 到 end_pos（含）的內容
    block_start = idx
    block_end = end_pos + 1
    
    # 新內容：if 塊用手動掃描，else 塊保留原本的 fallback 邏輯
    new_block = '''    if (currentMsg?.uiSegments && currentMsg.uiSegments.length > 0) {
      // 手動掃描文字找出 uiSegments 位置（不用正則，避免特殊字元問題）
      const uiSegs = currentMsg.uiSegments.filter(s => text.includes(s));
      if (uiSegs.length > 0) {
        const ranges = [];
        for (const seg of uiSegs) {
          let pos = 0;
          while (true) {
            const idx = text.indexOf(seg, pos);
            if (idx === -1) break;
            ranges.push([idx, idx + seg.length]);
            pos = idx + 1;
          }
        }
        ranges.sort((a, b) => a[0] - b[0]);
        const merged = [];
        for (const r of ranges) {
          if (merged.length > 0 && r[0] <= merged[merged.length - 1][1]) {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], r[1]);
          } else {
            merged.push([r[0], r[1]]);
          }
        }
        const parts = [];
        let cursor = 0;
        for (const r of merged) {
          if (r[0] > cursor) parts.push({ text: text.slice(cursor, r[0]), ui: false });
          parts.push({ text: text.slice(r[0], r[1]), ui: true });
          cursor = r[1];
        }
        if (cursor < text.length) parts.push({ text: text.slice(cursor), ui: false });
        const nonEmpty = parts.filter(p => p.text.trim().length > 0);
        segments = nonEmpty.map(p => p.text);
        (window as any).__ttsSegIsUI = nonEmpty.map(p => p.ui);
        useUILangDetection = true;
      }
    } else {'''

    # 保留原本的 else 塊內容
    # 找到舊內容中 else { 的位置
    old_block = content[block_start:block_end]
    else_start = old_block.find('    } else {')
    if else_start >= 0:
        else_content = old_block[else_start + len('    } else {'):].rstrip().rstrip('}')
        # else_content 現在是 else 塊的內容（不含結尾的 }）
        # 我們要把它接在新的 if 塊後面
        new_content = new_block + else_content + '\n    }'
        content = content[:block_start] + new_content + content[block_end:]
        print('Fix 3: replaced uiSegments block with manual scanning, kept else block')
    else:
        print('Fix 3: WARNING - could not find else block in old content')
        print('Old block:')
        print(old_block[:500])

# ===== Fix 4: 分類邏輯改用 __ttsSegIsUI =====
old_classify = '        useUILang = currentMsg.uiSegments.some(us => segment === us || segment.includes(us));'
new_classify = '        useUILang = (window as any).__ttsSegIsUI?.[i] || false;'
if old_classify in content:
    content = content.replace(old_classify, new_classify, 1)
    print('Fix 4: segment classification uses __ttsSegIsUI')
else:
    # 可能還沒被 Fix 2 修改過（reset 後），搜尋原始內容
    old_classify2 = '        useUILang = currentMsg.uiSegments.some(us => segment === us);'
    if old_classify2 in content:
        content = content.replace(old_classify2, new_classify, 1)
        print('Fix 4: segment classification replaced (original version)')
    else:
        print('Fix 4: WARNING - classification pattern not found')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('All fixes applied. Run tsc to verify.')
