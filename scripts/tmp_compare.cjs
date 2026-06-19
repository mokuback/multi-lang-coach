const en = require('D:/Antigravity_data/src/data/scenarioPatterns/en/01.json');
const ja = require('D:/Antigravity_data/src/data/scenarioPatterns/ja/01.json');
const enKeys = Object.keys(en).sort();
const jaKeys = Object.keys(ja).sort();
console.log('en count:', enKeys.length, 'ja count:', jaKeys.length);
console.log('keys match:', JSON.stringify(enKeys) === JSON.stringify(jaKeys));
let diff = 0;
for (const k of enKeys) {
  if (en[k].length !== ja[k].length) {
    diff++;
    console.log('diff:', k, en[k].length, ja[k].length);
  }
}
console.log('diff item counts:', diff);
console.log('en trans keys:', Object.keys(en['it-1'][0].translations));
console.log('ja trans keys:', Object.keys(ja['it-1'][0].translations));