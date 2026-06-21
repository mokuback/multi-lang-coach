import os

filepath = os.path.join(os.path.dirname(__file__), 'src', 'components', 'Chat.tsx')
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 在 handleSpeak 中 let useUILangDetection = false; 後插入 currentMsg + uiSegments 手動掃描區塊
# 並將原本的 // 取得 UI 語言的 title 和 desc 開始的邏輯包進 else {}

marker = '    let useUILangDetection = false;\n\n    // 取得 UI 語言的 title 和 desc'
if marker not in content:
    print('ERROR: marker not found')
    # 嘗試搜尋變體
    import re
    m = re.search(r'let useUILangDetection = false;', content)
    if m:
        print(f'Found at pos {m.start()}, context: {repr(content[m.start()-30:m.start()+80])}')
    exit(1)

insertion = '''    let useUILangDetection = false;

    // 取得當前訊息（displayHistory 索引不等於 chatHistory，改用 content 比對）
    const currentMsg = chatHistory.find(m => m.content === text) || null;

    // 優先使用 uiSegments 手動掃描切割（ChatWrapper 傳入的 UI 語言字串，不用正則）
    if (currentMsg?.uiSegments && currentMsg.uiSegments.length > 0) {
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
    } else {
    // 取得 UI 語言的 title 和 desc'''

# 注意：insertion 結尾是 '{\n    // 取得 UI 語言的 title 和 desc'
# 原本的 marker 是 '    let useUILangDetection = false;\n\n    // 取得 UI 語言的 title 和 desc'
# 我們要把 marker 替換成 insertion（insertion 已包含 marker 的開頭部分）

new_marker = '    let useUILangDetection = false;\n\n    // 取得 UI 語言的 title 和 desc'
content = content.replace(new_marker, insertion, 1)

# 現在要找到這段 else 的結尾（即整個 fallback 邏輯的結尾），補上閉合的 }
# 找到 fallback 邏輯的結尾：在 'if (!useUILangDetection && scenario && scenario.title) {' 之後的閉合 }
# 我們需要在 forEach 之前加上一個 } 來關閉 else 塊

# 找 'segments.forEach' 的位置，在它前面插入 '  } // end else (no uiSegments)\n\n'
old_foreach = '    segments.forEach((segment, i) => {'
new_foreach = '    } // end else (no uiSegments)\n\n    segments.forEach((segment, i) => {'
content = content.replace(old_foreach, new_foreach, 1)

# 現在修改 forEach 內的分類邏輯：改用 __ttsSegIsUI
old_classify = '''      let useUILang = false;
      if (useUILangDetection) {
        // 檢查此片段是否為 UI 語言字串（包含各種包裝形式）
        useUILang = (titleStr && (
                      segment === titleStr || 
                      segment === `"${titleStr}"` || 
                      segment === `「${titleStr}」`
                    )) ||
                     (descStr && (
                       segment === descStr ||
                       segment === `. ${descStr}` ||
                       segment === `。${descStr}`
                     ));
      } else {'''

new_classify = '''      let useUILang = false;
      if (useUILangDetection) {
        // uiSegments 模式：使用手動掃描結果判斷
        useUILang = (window as any).__ttsSegIsUI?.[i] || false;
      } else {'''

if old_classify in content:
    content = content.replace(old_classify, new_classify, 1)
    print('Fix classification: done')
else:
    print('WARNING: classification block not found, searching...')
    idx = content.find('useUILangDetection')
    if idx >= 0:
        print(repr(content[idx-50:idx+300]))

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('All fixes applied')
