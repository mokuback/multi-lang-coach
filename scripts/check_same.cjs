const en = require('D:/Antigravity_data/src/data/scenarioPatterns/en/01.json');
const ja = require('D:/Antigravity_data/src/data/scenarioPatterns/ja/01.json');
let same = 0, diff = 0;
const enKeys = Object.keys(en);
const jaKeys = Object.keys(ja);
console.log('01.json en topics:', enKeys.length, '| ja topics:', jaKeys.length);

for (const topic of enKeys) {
  const eItems = en[topic] || [];
  const jItems = ja[topic] || [];
  for (let i = 0; i < eItems.length; i++) {
    const e = eItems[i];
    const j = jItems[i];
    if (!j) { diff++; continue; }
    const eClean = { ...e, id: e.id.replace(/^(en-|ja-)/, '') };
    const jClean = { ...j, id: j.id.replace(/^(en-|ja-)/, '') };
    if (eClean.id === jClean.id && JSON.stringify(e.translations) === JSON.stringify(j.translations) && JSON.stringify(e.explanations) === JSON.stringify(j.explanations)) {
      same++;
    } else {
      diff++;
    }
  }
}
console.log('01.json: same=' + same + ' diff=' + diff);
