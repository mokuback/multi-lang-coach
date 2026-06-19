/**
 * Complete translation - ALL 181 unique meanings
 * Based on PowerShell extraction results
 */

import { writeFileSync, readFileSync } from 'fs';

const filePath = 'src/data/curriculumData.ts';
let content = readFileSync(filePath, 'utf8');

console.log('File loaded, length:', content.length);

// COMPLETE translation dictionary - ALL 181 unique meanings
const dict = {
  // From PowerShell output (first 20)
  '～分': { 'zh-TW': '～分', 'zh-CN': '～分', 'en': '~ minutes', 'ja': '～分', 'ko': '～분', 'es': '~ minutos', 'fr': '~ minutes', 'de': '~ Minuten' },
  '～點': { 'zh-TW': '～點', 'zh-CN': '～點', 'en': '~ o\'clock', 'ja': '～時', 'ko': '～시', 'es': '~ en punto', 'fr': '~ heures', 'de': '~ Uhr' },
  '一': { 'zh-TW': '一', 'zh-CN': '一', 'en': 'One', 'ja': '一', 'ko': '하나', 'es': 'Uno', 'fr': 'Un', 'de': 'Eins' },
  '一起': { 'zh-TW': '一起', 'zh-CN': '一起', 'en': 'Together', 'ja': '一緒に', 'ko': '함께', 'es': 'Juntos', 'fr': 'Ensemble', 'de': 'Zusammen' },
  '二': { 'zh-TW': '二', 'zh-CN': '二', 'en': 'Two', 'ja': '二', 'ko': '둘', 'es': 'Dos', 'fr': 'Deux', 'de': 'Zwei' },
  '三': { 'zh-TW': '三', 'zh-CN': '三', 'en': 'Three', 'ja': '三', 'ko': '셋', 'es': 'Tres', 'fr': 'Trois', 'de': 'Drei' },
  '上班族': { 'zh-TW': '上班族', 'zh-CN': '上班族', 'en': 'Office worker', 'ja': '会社員', 'ko': '회사원', 'es': 'Empleado de oficina', 'fr': 'Employé de bureau', 'de': 'Büroangestellter' },
  '上週': { 'zh-TW': '上週', 'zh-CN': '上週', 'en': 'Last week', 'ja': '先週', 'ko': '지난 주', 'es': 'La semana pasada', 'fr': 'La semaine dernière', 'de': 'Letzte Woche' },
  '也許': { 'zh-TW': '也許', 'zh-CN': '也許', 'en': 'Maybe', 'ja': '多分', 'ko': '아마', 'es': 'Quizás', 'fr': 'Peut-être', 'de': 'Vielleicht' },
  '大的': { 'zh-TW': '大的', 'zh-CN': '大的', 'en': 'Big', 'ja': '大きい', 'ko': '큰', 'es': 'Grande', 'fr': 'Grand', 'de': 'Groß' },
  '小的': { 'zh-TW': '小的', 'zh-CN': '小的', 'en': 'Small', 'ja': '小さい', 'ko': '작은', 'es': 'Pequeño', 'fr': 'Petit', 'de': 'Klein' },
  '工作': { 'zh-TW': '工作', 'zh-CN': '工作', 'en': 'Work', 'ja': '仕事', 'ko': '일', 'es': 'Trabajo', 'fr': 'Travail', 'de': 'Arbeit' },
  '工程師': { 'zh-TW': '工程師', 'zh-CN': '工程師', 'en': 'Engineer', 'ja': 'エンジニア', 'ko': '엔지니어', 'es': 'Ingeniero', 'fr': 'Ingénieur', 'de': 'Ingenieur' },
  '元': { 'zh-TW': '元', 'zh-CN': '元', 'en': 'Yuan', 'ja': '元', 'ko': '위안', 'es': 'Yuan', 'fr': 'Yuan', 'de': 'Yuan' },
  '公司': { 'zh-TW': '公司', 'zh-CN': '公司', 'en': 'Company', 'ja': '会社', 'ko': '회사', 'es': 'Empresa', 'fr': 'Entreprise', 'de': 'Firma' },
  '分享做過的事並給予他人建議。': { 'zh-TW': '分享做過的事並給予他人建議。', 'zh-CN': '分享做过的事并给予他人建议。', 'en': 'Share experiences and give advice to others.', 'ja': '経験を共有し、他者にアドバイスを与える。', 'ko': '경험을 공유하고 다른 사람에게 조언을 제공합니다.', 'es': 'Comparte experiencias y da consejos a otros.', 'fr': 'Partagez des expériences et donnez des conseils aux autres.', 'de': 'Erfahrungen teilen und anderen Ratschläge geben.' },
  '天氣': { 'zh-TW': '天氣', 'zh-CN': '天氣', 'en': 'Weather', 'ja': '天気', 'ko': '날씨', 'es': 'Clima', 'fr': 'Temps', 'de': 'Wetter' },
  '日本': { 'zh-TW': '日本', 'zh-CN': '日本', 'en': 'Japan', 'ja': '日本', 'ko': '일본', 'es': 'Japón', 'fr': 'Japon', 'de': 'Japan' },
  '日常動作': { 'zh-TW': '日常動作', 'zh-CN': '日常動作', 'en': 'Daily actions', 'ja': '日常動作', 'ko': '일상 동작', 'es': 'Acciones diarias', 'fr': 'Actions quotidiennes', 'de': 'Tägliche Handlungen' },
  '日圓': { 'zh-TW': '日圓', 'zh-CN': '日圓', 'en': 'Yen', 'ja': '円', 'ko': '엔', 'es': 'Yen', 'fr': 'Yen', 'de': 'Yen' },
  
  // I need to add ALL 181 entries...
  // This is tedious. Let me try a different approach.
};

console.log(`Dictionary: ${Object.keys(dict).length} meanings`);

// Check: how many meanings blocks can we translate?
let translatable = 0;
let offset = 0;

while (offset < content.length) {
  const start = content.indexOf('meanings: {', offset);
  if (start === -1) break;
  
  let braceCount = 1;
  let i = start + 'meanings: {'.length;
  while (i < content.length && braceCount > 0) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    i++;
  }
  const end = i;
  
  const block = content.substring(start, end);
  const zhTWMatch = block.match(/'zh-TW':\s*'([^']+)'/);
  
  if (zhTWMatch && dict[zhTWMatch[1]]) {
    translatable++;
  }
  
  offset = end;
}

console.log(`Translatable blocks: ${translatable}`);
console.log('Need to add more entries to dictionary...');
