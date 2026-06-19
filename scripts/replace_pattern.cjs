const fs = require('fs');
const path = 'D:/Antigravity_data/src/components/ChatWrapper.tsx';

let content = fs.readFileSync(path, 'utf8');

// Replace patternItem.pattern with patternItem.translations[targetLanguage]
// This appears in template literals (9 occurrences)
content = content.replace(/patternItem\.pattern/g, 'patternItem.translations[targetLanguage]');

// Replace scenario.patternItem?.pattern in dependency array (1 occurrence)
// Should be scenario.patternItem (the whole object)
content = content.replace(/scenario\.patternItem\?\.pattern/g, 'scenario.patternItem');

fs.writeFileSync(path, content, 'utf8');
console.log('Done. Replaced patternItem.pattern with patternItem.translations[targetLanguage]');
