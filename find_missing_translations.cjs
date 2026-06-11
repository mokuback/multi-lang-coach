const fs = require('fs');
const path = require('path');

const translationsStr = fs.readFileSync('d:/Antigravity_data/src/contexts/translations.js', 'utf8');
const enBlockMatch = translationsStr.match(/en:\s*{([^}]+)}/);

const keys = new Set();
if (enBlockMatch) {
  const enBlock = enBlockMatch[1];
  const re = /'([^']+)':/g;
  let match;
  while ((match = re.exec(enBlock)) !== null) {
    keys.add(match[1]);
  }
}

const allFiles = [];
function findFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) findFiles(full);
    else if (full.endsWith('.jsx') || full.endsWith('.js')) allFiles.push(full);
  });
}
findFiles('d:/Antigravity_data/src');

const missing = new Set();
allFiles.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const tRe = /t\(['"`](.+?)['"`]\)/g;
  let match;
  while ((match = tRe.exec(content)) !== null) {
    if (!keys.has(match[1])) {
      missing.add(match[1]);
    }
  }
});

console.log(Array.from(missing).join('\n'));
