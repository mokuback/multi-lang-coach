const fs = require('fs');
const content = fs.readFileSync('src/data/curriculumData.ts', 'utf8');

// Find the "en: [...]" section
const enStart = content.indexOf('  en: [');
const nextLangStart = content.indexOf('\n};\n', enStart); // Find end of curriculumData
const enSection = content.substring(enStart, nextLangStart > enStart ? nextLangStart : undefined);

// Extract all word fields
const words = [];
const re = /word: '([^']+)'/g;
let m;
while ((m = re.exec(enSection)) !== null) {
  words.push(m[1]);
}

console.log(`Found ${words.length} English vocab words:`);
console.log(JSON.stringify(words, null, 2));
