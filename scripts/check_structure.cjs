const en01 = require('D:/Antigravity_data/src/data/scenarioPatterns/en/01.json');
const ja01 = require('D:/Antigravity_data/src/data/scenarioPatterns/ja/01.json');
const en02 = require('D:/Antigravity_data/src/data/scenarioPatterns/en/02.json');
const ja02 = require('D:/Antigravity_data/src/data/scenarioPatterns/ja/02.json');

console.log('=== 01.json ===');
console.log('en topics:', Object.keys(en01).length, '| items:', Object.values(en01).flat().length);
console.log('ja topics:', Object.keys(ja01).length, '| items:', Object.values(ja01).flat().length);
console.log('en sample id:', en01[Object.keys(en01)[0]][0].id);
console.log('ja sample id:', ja01[Object.keys(ja01)[0]][0].id);
console.log('en has pattern field:', en01[Object.keys(en01)[0]][0].pattern !== undefined);
console.log('ja has pattern field:', ja01[Object.keys(ja01)[0]][0].pattern !== undefined);
console.log('en sample translations keys:', Object.keys(en01[Object.keys(en01)[0]][0].translations || {}));
console.log('ja sample translations keys:', Object.keys(ja01[Object.keys(ja01)[0]][0].translations || {}));

console.log('=== 02.json ===');
console.log('en topics:', Object.keys(en02).length, '| items:', Object.values(en02).flat().length);
console.log('ja topics:', Object.keys(ja02).length, '| items:', Object.values(ja02).flat().length);
console.log('en sample id:', en02[Object.keys(en02)[0]][0].id);
console.log('ja sample id:', ja02[Object.keys(ja02)[0]][0].id);
console.log('en has pattern field:', en02[Object.keys(en02)[0]][0].pattern !== undefined);
console.log('ja has pattern field:', ja02[Object.keys(ja02)[0]][0].pattern !== undefined);
