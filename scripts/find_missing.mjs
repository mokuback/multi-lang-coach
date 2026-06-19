import { readFileSync } from 'fs';

const c = readFileSync('src/data/curriculumData.ts', 'utf8');
const re = /meanings:\s*\{([\s\S]*?)\}/g;
let m;
const missing = new Set();
while ((m = re.exec(c)) !== null) {
  const block = m[1];
  const zhTW = block.match(/'zh-TW':\s*'([^']+)'/);
  const fr = block.match(/'fr':\s*'([^']+)'/);
  if (zhTW && fr && /[\u4e00-\u9fff]/.test(fr[1])) {
    missing.add(zhTW[1]);
  }
}
console.log('Missing: ' + missing.size);
for (const v of missing) console.log(v);
