const fs = require('fs');
const path = require('path');

const srcDir = 'D:/Antigravity_data/src/data/patterns';
const enDir = path.join(srcDir, 'en');
const destDir = srcDir;

function stripLangPrefix(id) {
  return id.replace(/^(en-|ja-|ko-|zh-CN-)/, '');
}

function processFile(filename) {
  const srcPath = path.join(enDir, filename);
  const destPath = path.join(destDir, filename);
  
  const data = JSON.parse(fs.readFileSync(srcPath, 'utf8'));
  const result = {};
  
  for (const [level, items] of Object.entries(data)) {
    result[level] = items.map(item => {
      const { pattern, ...rest } = item; // remove pattern field
      return {
        ...rest,
        id: stripLangPrefix(item.id)
      };
    });
  }
  
  fs.writeFileSync(destPath, JSON.stringify(result, null, 2), 'utf8');
  console.log(`Processed: ${filename}`);
  
  // Verify
  const sample = result[Object.keys(result)[0]][0];
  console.log(`  sample id: ${sample.id}`);
  console.log(`  has pattern field: ${sample.pattern !== undefined}`);
  console.log(`  has translations field: ${sample.translations !== undefined}`);
}

// Process 5 files
const files = ['dating.json', 'default.json', 'it.json', 'management.json', 'travel.json'];
files.forEach(processFile);

console.log('\nAll files processed.');
