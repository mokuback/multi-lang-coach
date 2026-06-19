const fs = require('fs');
const d1 = JSON.parse(fs.readFileSync('D:/Antigravity_data/public/data/scenarioPatterns/01.json', 'utf8'));
const d2 = JSON.parse(fs.readFileSync('D:/Antigravity_data/public/data/scenarioPatterns/02.json', 'utf8'));

let c1 = 0, c2 = 0;
Object.values(d1).forEach(arr => c1 += arr.length);
Object.values(d2).forEach(arr => c2 += arr.length);

console.log('01.json topics:', Object.keys(d1).length);
console.log('01.json total items:', c1);
console.log('02.json topics:', Object.keys(d2).length);
console.log('02.json total items:', c2);

// Show one full item structure
const item = Object.values(d1)[0][0];
console.log('\nSample item keys:', Object.keys(item));
console.log('translations keys:', Object.keys(item.translations));
console.log('explanations keys:', Object.keys(item.explanations));
console.log('\nSample translations.en:', item.translations.en);
console.log('Sample explanations.en:', item.explanations.en);
