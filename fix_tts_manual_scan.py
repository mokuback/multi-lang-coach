import os, sys

filepath = os.path.join(os.path.dirname(__file__), 'src', 'components', 'Chat.tsx')
with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 找到 uiSegments if 塊的起始與結束行號
start = None
for i, line in enumerate(lines):
    if 'currentMsg?.uiSegments && currentMsg.uiSegments.length > 0' in line and '// 優先使用 uiSegments' not in line:
        # 找最外層的 if（不是 else if 裡的那個）
        # 檢查前面幾行是否有 '// 優先' 標記
        if i > 0 and '// 優先使用 uiSegments' in lines[i-1]:
            continue
        start = i
        break

if start is None:
    print('ERROR: could not find uiSegments if-block start')
    sys.exit(1)

# 計算括號找到結束位置
brace = 0
started = False
end = start
for i in range(start, len(lines)):
    for ch in lines[i]:
        if ch == '{':
            brace += 1
            started = True
        elif ch == '}':
            brace -= 1
    if started and brace == 0:
        end = i
        break

print(f'uiSegments block: lines {start+1}-{end+1}')
print(''.join(lines[start:end+1]))

# 新區塊：手動掃描
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
    }'''

# 替換
lines[start:end+1] = [new_block + '\n']

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(lines)

print('Fix 3 applied: manual scanning for uiSegments')

# 現在修改分類邏輯（line ~460）
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

old_classify = '        useUILang = currentMsg.uiSegments.some(us => segment === us || segment.includes(us));'
new_classify = '        useUILang = (window as any).__ttsSegIsUI?.[i] || false;'

if old_classify in content:
    content = content.replace(old_classify, new_classify)
    print('Fix 4 applied: segment classification now uses __ttsSegIsUI')
else:
    print('Fix 4: old classification text not found, searching...')
    for i, line in enumerate(content.split('\n')):
        if '__ttsSegIsUI' in line or 'uiSegments.some' in line:
            print(f'  L{i+1}: {line.strip()}')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print('All done')
