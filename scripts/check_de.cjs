const fs = require('fs');
const f1 = 'D:/Antigravity_data/public/data/scenarioPatterns/01.json';
const f2 = 'D:/Antigravity_data/public/data/scenarioPatterns/02.json';

const d1 = JSON.parse(fs.readFileSync(f1, 'utf8'));
const d2 = JSON.parse(fs.readFileSync(f2, 'utf8'));

let total1 = 0, hasDe1 = 0, deEmpty1 = 0;
Object.values(d1).forEach(arr => arr.forEach(item => {
  total1++;
  if (item.translations?.de) hasDe1++;
  else deEmpty1++;
}));

let total2 = 0, hasDe2 = 0, deEmpty2 = 0;
Object.values(d2).forEach(arr => arr.forEach(item => {
  total2++;
  if (item.translations?.de) hasDe2++;
  else deEmpty2++;
}));

console.log('01.json: total=' + total1 + ', has de=' + hasDe1 + ', missing de=' + deEmpty1);
console.log('02.json: total=' + total2 + ', has de=' + hasDe2 + ', missing de=' + deEmpty2);

// Show 3 samples from 01.json
let c = 0;
Object.values(d1).forEach(arr => arr.forEach(item => {
  if (c < 3) {
    console.log('Sample ' + (c+1) + ': id=' + item.id);
    console.log('  en: ' + (item.translations.en||'').substring(0, 60));
    console.log('  de: ' + (item.translations.de||'*** MISSING ***').substring(0, 60));
    c++;
  }
}));
