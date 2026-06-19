import fs from 'fs';

const filePath = 'src/data/curriculumData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Extract the ja curriculum section to get translations
const jaStart = content.indexOf('  ja: [');
const enStart = content.indexOf('  en: [');
const jaSection = content.substring(jaStart, enStart);

// Build a mapping: English translation -> full meanings object from ja curriculum
// This allows us to reuse translations from the ja curriculum
const enToMeanings = {};

// Parse ja curriculum to extract word -> meanings mapping
const jaWordPattern = /word: '([^']+)',\s*meanings: (\{[^}]+\})/g;
let m;
while ((m = jaWordPattern.exec(jaSection)) !== null) {
  const word = m[1];
  const meaningsStr = m[2];
  // Extract the 'en' translation from meanings
  const enMatch = meaningsStr.match(/'en': '([^']+)'/);
  if (enMatch) {
    const enTranslation = enMatch[1].toLowerCase();
    enToMeanings[enTranslation] = meaningsStr;
  }
}

console.log('Built mapping for', Object.keys(enToMeanings).length, 'words');

// Now process the en curriculum section
// For each word in en curriculum, find its translations
const enSectionStart = content.indexOf('  en: [');
const enSectionEnd = content.indexOf('\n};\n', enSectionStart) + 4;
let enSection = content.substring(enSectionStart, enSectionEnd);

// For each English word, we need to create the meanings object
// The meanings should be: translation of the English word into each language
// For now, let's create a basic dictionary for common words

const basicTranslations = {
  'Hello': { 'zh-TW': '你好', 'zh-CN': '你好', 'ja': 'こんにちは', 'ko': '안녕하세요', 'es': 'Hola', 'fr': 'Bonjour', 'de': 'Hallo' },
  'Good morning': { 'zh-TW': '早安', 'zh-CN': '早安', 'ja': 'おはようございます', 'ko': '좋은 아침', 'es': 'Buenos días', 'fr': 'Bonjour', 'de': 'Guten Morgen' },
  'Name': { 'zh-TW': '名字', 'zh-CN': '名字', 'ja': '名前', 'ko': '이름', 'es': 'Nombre', 'fr': 'Nom', 'de': 'Name' },
  'Nice': { 'zh-TW': '好的', 'zh-CN': '好的', 'ja': 'いい', 'ko': '좋은', 'es': 'Agradable', 'fr': 'Nice', 'de': 'Schön' },
  'Meet': { 'zh-TW': '見面', 'zh-CN': '见面', 'ja': '会う', 'ko': '만나다', 'es': 'Conocer', 'fr': 'Rencontrer', 'de': 'Treffen' },
  'Teacher': { 'zh-TW': '老師', 'zh-CN': '老师', 'ja': '先生', 'ko': '선생님', 'es': 'Profesor', 'fr': 'Enseignant', 'de': 'Lehrer' },
  'Student': { 'zh-TW': '學生', 'zh-CN': '学生', 'ja': '学生', 'ko': '학생', 'es': 'Estudiante', 'fr': 'Étudiant', 'de': 'Student' },
  'Engineer': { 'zh-TW': '工程師', 'zh-CN': '工程师', 'ja': 'エンジニア', 'ko': '엔지니어', 'es': 'Ingeniero', 'fr': 'Ingénieur', 'de': 'Ingenieur' },
  'Taiwan': { 'zh-TW': '台灣', 'zh-CN': '台湾', 'ja': '台湾', 'ko': '대만', 'es': 'Taiwán', 'fr': 'Taïwan', 'de': 'Taiwan' },
  'America': { 'zh-TW': '美國', 'zh-CN': '美国', 'ja': 'アメリカ', 'ko': '미국', 'es': 'Estados Unidos', 'fr': 'États-Unis', 'de': 'Amerika' },
};

console.log('Basic translations dictionary created with', Object.keys(basicTranslations).length, 'words');

// Write the dictionary to a file for reference
fs.writeFileSync('en_vocab_translations.json', JSON.stringify(basicTranslations, null, 2));
console.log('Translations saved to en_vocab_translations.json');
