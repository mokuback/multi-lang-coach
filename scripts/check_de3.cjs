const fs = require('fs');
const f1 = 'D:/Antigravity_data/public/data/scenarioPatterns/01.json';
const f2 = 'D:/Antigravity_data/public/data/scenarioPatterns/02.json';
const d1 = JSON.parse(fs.readFileSync(f1, 'utf8'));
const d2 = JSON.parse(fs.readFileSync(f2, 'utf8'));

let needsTrans1 = 0, needsExpl1 = 0;
let needsTrans2 = 0, needsExpl2 = 0;

Object.values(d1).forEach(arr => arr.forEach(item => {
  const deTrans = item.translations.de || '';
  const deExpl = item.explanations.de || '';
  // Check if de is missing or is same as en or starts with "Erklärung"
  if (!deTrans || deTrans === item.translations.en || deTrans.includes('Erklärung')) needsTrans1++;
  if (!deExpl || deExpl === item.explanations.en || deExpl.startsWith('Erklärung')) needsExpl1++;
}));

Object.values(d2).forEach(arr => arr.forEach(item => {
  const deTrans = item.translations.de || '';
  const deExpl = item.explanations.de || '';
  if (!deTrans || deTrans === item.translations.en || deTrans.includes('Erklärung')) needsTrans2++;
  if (!deExpl || deExpl === item.explanations.en || deExpl.startsWith('Erklärung')) needsExpl2++;
}));

console.log('01.json needs translation (trans): ' + needsTrans1 + '/660');
console.log('01.json needs translation (expl): ' + needsExpl1 + '/660');
console.log('02.json needs translation (trans): ' + needsTrans2 + '/660');
console.log('02.json needs translation (expl): ' + needsExpl2 + '/660');
