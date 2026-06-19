const fs = require('fs');
const f1 = 'D:/Antigravity_data/public/data/scenarioPatterns/01.json';
const d1 = JSON.parse(fs.readFileSync(f1, 'utf8'));

// Check translations.de and explanations.de for 10 random items
const allItems = [];
Object.values(d1).forEach(arr => arr.forEach((item, i) => allItems.push({topic: Object.keys(d1)[Math.floor(i/5)], item})));

// Sample items at positions 0, 100, 200, 300, 500
[0, 100, 200, 300, 500].forEach(idx => {
  const item = allItems[idx].item;
  console.log('\n--- Item ' + (idx+1) + ' (' + allItems[idx].topic + ') ---');
  console.log('en (trans): ' + (item.translations.en||'').substring(0, 80));
  console.log('de (trans): ' + (item.translations.de||'***MISSING***').substring(0, 80));
  console.log('en (expl): ' + (item.explanations.en||'').substring(0, 80));
  console.log('de (expl): ' + (item.explanations.de||'***MISSING***').substring(0, 80));
});

// Also check 02.json
const f2 = 'D:/Antigravity_data/public/data/scenarioPatterns/02.json';
const d2 = JSON.parse(fs.readFileSync(f2, 'utf8'));
const allItems2 = [];
Object.values(d2).forEach(arr => arr.forEach(item => allItems2.push(item)));

[0, 100, 300, 500, 659].forEach(idx => {
  const item = allItems2[idx];
  console.log('\n--- 02.json Item ' + (idx+1) + ' ---');
  console.log('en (trans): ' + (item.translations.en||'').substring(0, 80));
  console.log('de (trans): ' + (item.translations.de||'***MISSING***').substring(0, 80));
  console.log('en (expl): ' + (item.explanations.en||'').substring(0, 80));
  console.log('de (expl): ' + (item.explanations.de||'***MISSING***').substring(0, 80));
});
