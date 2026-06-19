const fs = require('fs');
const path = require('path');

function stripLangPrefix(id) {
  return id.replace(/^(en-|ja-|ko-|zh-CN-)/, '');
}

function mergeOneFile(srcEnPath, destPath) {
  const data = require(srcEnPath);
  const result = {};

  for (const [topic, items] of Object.entries(data)) {
    result[topic] = items.map(item => {
      const { pattern, ...rest } = item; // remove pattern field
      return {
        ...rest,
        id: stripLangPrefix(item.id)
      };
    });
  }

  fs.writeFileSync(destPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Done: ${destPath}`);
  console.log(`  topics: ${Object.keys(result).length}, items: ${Object.values(result).flat().length}`);
  console.log(`  sample id: ${result[Object.keys(result)[0]][0].id}`);
  console.log(`  has pattern field: ${result[Object.keys(result)[0]][0].pattern !== undefined}`);
}

mergeOneFile(
  'D:/Antigravity_data/src/data/scenarioPatterns/en/01.json',
  'D:/Antigravity_data/src/data/scenarioPatterns/01.json'
);

mergeOneFile(
  'D:/Antigravity_data/src/data/scenarioPatterns/en/02.json',
  'D:/Antigravity_data/src/data/scenarioPatterns/02.json'
);

console.log('\nAll done.');
