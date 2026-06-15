const fs = require('fs');
const path = require('path');

// Load reference data
const en = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/scenarioPatterns/en/01.json'), 'utf8'));
const ja = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/scenarioPatterns/ja/01.json'), 'utf8'));

const uiLangs = ['zh-TW', 'zh-CN', 'en', 'ja', 'ko', 'es', 'fr', 'de'];

function buildLangFile(targetLang, sourceFile, outDir) {
  const topics = Object.keys(sourceFile);
  const result = {};

  for (const topic of topics) {
    result[topic] = sourceFile[topic].map((item, idx) => {
      const translations = {};
      const explanations = {};

      for (const lang of uiLangs) {
        // translation: use targetLang translation if available, else fallback to source
        translations[lang] = item.translations?.[lang] || item.pattern;
        explanations[lang] = item.explanations?.[lang] || '';
      }

      // For the target language itself, use the source pattern as the canonical form
      // e.g., for zh-CN target, pattern = zh-CN translation from source
      const targetTrans = item.translations?.[targetLang] || item.pattern;
      const targetExpl = item.explanations?.[targetLang] || item.explanations?.['zh-TW'] || '';

      return {
        id: item.id.replace(/^[a-z]{2}-/, `${targetLang}-`),
        pattern: targetTrans,
        translations,
        explanations
      };
    });
  }

  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, '01.json'), JSON.stringify(result, null, 2), 'utf8');
  console.log(`Created ${outDir}/01.json with ${Object.keys(result).length} topics`);
}

// Build zh-CN from ja patterns (ja already has good zh-CN translations)
buildLangFile('zh-CN', ja, path.join(__dirname, 'src/data/scenarioPatterns/zh-CN'));

// Build ko from en patterns (use en as source, ko translations may need manual fill)
const koSource = JSON.parse(JSON.stringify(en)); // deep clone
const koOut = {};
for (const topic of Object.keys(koSource)) {
  koOut[topic] = koSource[topic].map((item, idx) => {
    const translations = {};
    const explanations = {};
    for (const lang of uiLangs) {
      translations[lang] = item.translations?.[lang] || item.pattern;
      explanations[lang] = item.explanations?.[lang] || '';
    }
    const koTrans = item.translations?.['ko'] || `[KO] ${item.pattern}`;
    const koExpl = item.explanations?.['ko'] || item.explanations?.['en'] || '';
    translations['ko'] = koTrans;
    explanations['ko'] = koExpl;
    return {
      id: item.id.replace(/^en-/, 'ko-'),
      pattern: koTrans,
      translations,
      explanations
    };
  });
}
fs.mkdirSync(path.join(__dirname, 'src/data/scenarioPatterns/ko'), { recursive: true });
fs.writeFileSync(path.join(__dirname, 'src/data/scenarioPatterns/ko/01.json'), JSON.stringify(koOut, null, 2), 'utf8');
console.log(`Created ko/01.json with ${Object.keys(koOut).length} topics`);
