const en = require('D:/Antigravity_data/src/data/scenarioPatterns/en/01.json');
const ja = require('D:/Antigravity_data/src/data/scenarioPatterns/ja/01.json');
const ej = en['it-1'][0];
const jj = ja['it-1'][0];
console.log('en-id:', ej.id, '| ja-id:', jj.id);
console.log('en translations.en:', (ej.translations.en || '').slice(0, 60));
console.log('ja translations.en:', (jj.translations.en || '').slice(0, 60));
console.log('en translations.ja:', (ej.translations.ja || '').slice(0, 60));
console.log('ja translations.ja:', (jj.translations.ja || '').slice(0, 60));
console.log('---');
// 检查 translations 的 key 顺序
console.log('en translations keys:', Object.keys(ej.translations));
console.log('ja translations keys:', Object.keys(jj.translations));
