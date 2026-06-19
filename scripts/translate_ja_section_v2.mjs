/**
 * Translate curriculumData.ts ja: section vocab meanings
 * Extended dictionary with 20 most common Japanese words
 */

import { writeFileSync, readFileSync } from 'fs';

const filePath = 'src/data/curriculumData.ts';
let content = readFileSync(filePath, 'utf8');

console.log('File loaded, length:', content.length);

// Extended translation dictionary
const dict = {
  // Unit 1: Basic greetings
  'おはようございます': { 'zh-TW': '早安', 'zh-CN': '早安', 'en': 'Good morning', 'ko': '좋은 아침', 'es': 'Buenos días', 'fr': 'Bonjour', 'de': 'Guten Morgen' },
  'こんにちは': { 'zh-TW': '你好', 'zh-CN': '你好', 'en': 'Hello', 'ko': '안녕하세요', 'es': 'Hola', 'fr': 'Bonjour', 'de': 'Hallo' },
  'こんばんは': { 'zh-TW': '晚上好', 'zh-CN': '晚上好', 'en': 'Good evening', 'ko': '좋은 저녁', 'es': 'Buenas noches', 'fr': 'Bonsoir', 'de': 'Guten Abend' },
  'さようなら': { 'zh-TW': '再見', 'zh-CN': '再见', 'en': 'Goodbye', 'ko': '안녕히 가세요', 'es': 'Adiós', 'fr': 'Au revoir', 'de': 'Auf Wiedersehen' },
  'ありがとう': { 'zh-TW': '謝謝', 'zh-CN': '谢谢', 'en': 'Thank you', 'ko': '감사합니다', 'es': 'Gracias', 'fr': 'Merci', 'de': 'Danke' },
  'お願いします': { 'zh-TW': '拜託', 'zh-CN': '拜托', 'en': 'Please', 'ko': '부탁합니다', 'es': 'Por favor', 'fr': 'S\'il vous plaît', 'de': 'Bitte' },
  'すみません': { 'zh-TW': '不好意思', 'zh-CN': '不好意思', 'en': 'Excuse me', 'ko': '죄송합니다', 'es': 'Lo siento', 'fr': 'Pardon', 'de': 'Entschuldigung' },
  'ごめんなさい': { 'zh-TW': '對不起', 'zh-CN': '对不起', 'en': 'I\'m sorry', 'ko': '미안합니다', 'es': 'Lo siento', 'fr': 'Je suis désolé', 'de': 'Es tut mir leid' },
  'はい': { 'zh-TW': '是', 'zh-CN': '是', 'en': 'Yes', 'ko': '네', 'es': 'Sí', 'fr': 'Oui', 'de': 'Ja' },
  'いいえ': { 'zh-TW': '不是', 'zh-CN': '不是', 'en': 'No', 'ko': '아니요', 'es': 'No', 'fr': 'Non', 'de': 'Nein' },
  // Unit 2: Pronouns
  '私': { 'zh-TW': '我', 'zh-CN': '我', 'en': 'I', 'ko': '나', 'es': 'Yo', 'fr': 'Je', 'de': 'Ich' },
  'あなた': { 'zh-TW': '你', 'zh-CN': '你', 'en': 'You', 'ko': '너', 'es': 'Tú', 'fr': 'Tu', 'de': 'Du' },
  '彼': { 'zh-TW': '他', 'zh-CN': '他', 'en': 'He', 'ko': '그', 'es': 'Él', 'fr': 'Il', 'de': 'Er' },
  '彼女': { 'zh-TW': '她', 'zh-CN': '她', 'en': 'She', 'ko': '그녀', 'es': 'Ella', 'fr': 'Elle', 'de': 'Sie' },
  '私たち': { 'zh-TW': '我們', 'zh-CN': '我们', 'en': 'We', 'ko': '우리', 'es': 'Nosotros', 'fr': 'Nous', 'de': 'Wir' },
  'これ': { 'zh-TW': '這個', 'zh-CN': '这个', 'en': 'This', 'ko': '이것', 'es': 'Esto', 'fr': 'Ceci', 'de': 'Dieses' },
  'それ': { 'zh-TW': '那個', 'zh-CN': '那个', 'en': 'That', 'ko': '저것', 'es': 'Eso', 'fr': 'Cela', 'de': 'Jenes' },
  'あれ': { 'zh-TW': '那個（遠稱）', 'zh-CN': '那个（远称）', 'en': 'That over there', 'ko': '저기', 'es': 'Aquello', 'fr': 'Ça', 'de': 'Dort drüben' },
  'この': { 'zh-TW': '這個的', 'zh-CN': '这个的', 'en': 'This (adj)', 'ko': '이', 'es': 'Este', 'fr': 'Ce', 'de': 'Dieser' },
  'その': { 'zh-TW': '那個的', 'zh-CN': '那个的', 'en': 'That (adj)', 'ko': '그', 'es': 'Ese', 'fr': 'Ce', 'de': 'Jener' },
  // Unit 3: Verb basics
  '行きます': { 'zh-TW': '去', 'zh-CN': '去', 'en': 'Go', 'ko': '가다', 'es': 'Ir', 'fr': 'Aller', 'de': 'Gehen' },
  '来ます': { 'zh-TW': '來', 'zh-CN': '来', 'en': 'Come', 'ko': '오다', 'es': 'Venir', 'fr': 'Venir', 'de': 'Kommen' },
  '帰ります': { 'zh-TW': '回去', 'zh-CN': '回去', 'en': 'Return', 'ko': '돌아가다', 'es': 'Volver', 'fr': 'Retourner', 'de': 'Zurückkehren' },
  'います': { 'zh-TW': '在', 'zh-CN': '在', 'en': 'Be (at)', 'ko': '있다', 'es': 'Estar', 'fr': 'Être', 'de': 'Sein' },
  '食べます': { 'zh-TW': '吃', 'zh-CN': '吃', 'en': 'Eat', 'ko': '먹다', 'es': 'Comer', 'fr': 'Manger', 'de': 'Essen' },
  '飲みます': { 'zh-TW': '喝', 'zh-CN': '喝', 'en': 'Drink', 'ko': '마시다', 'es': 'Beber', 'fr': 'Boire', 'de': 'Trinken' },
  '見ます': { 'zh-TW': '看', 'zh-CN': '看', 'en': 'See', 'ko': '보다', 'es': 'Ver', 'fr': 'Voir', 'de': 'Sehen' },
  '聞きます': { 'zh-TW': '聽', 'zh-CN': '听', 'en': 'Listen', 'ko': '듣다', 'es': 'Escuchar', 'fr': 'Écouter', 'de': 'Hören' },
  '話します': { 'zh-TW': '說話', 'zh-CN': '说话', 'en': 'Speak', 'ko': '말하다', 'es': 'Hablar', 'fr': 'Parler', 'de': 'Sprechen' },
  '読みます': { 'zh-TW': '讀', 'zh-CN': '读', 'en': 'Read', 'ko': '읽다', 'es': 'Leer', 'fr': 'Lire', 'de': 'Lesen' },
  // Unit 4: Occupations
  '会社員': { 'zh-TW': '公司職員', 'zh-CN': '公司职员', 'en': 'Company employee', 'ko': '회사원', 'es': 'Empleado de empresa', 'fr': 'Employé de société', 'de': 'Unternehmensmitarbeiter' },
  '先生': { 'zh-TW': '老師', 'zh-CN': '老师', 'en': 'Teacher', 'ko': '선생님', 'es': 'Profesor', 'fr': 'Enseignant', 'de': 'Lehrer' },
  '学生': { 'zh-TW': '學生', 'zh-CN': '学生', 'en': 'Student', 'ko': '학생', 'es': 'Estudiante', 'fr': 'Étudiant', 'de': 'Student' },
  '医者': { 'zh-TW': '醫生', 'zh-CN': '医生', 'en': 'Doctor', 'ko': '의사', 'es': 'Médico', 'fr': 'Médecin', 'de': 'Arzt' },
  '工程师': { 'zh-TW': '工程師', 'zh-CN': '工程师', 'en': 'Engineer', 'ko': '엔지니어', 'es': 'Ingeniero', 'fr': 'Ingénieur', 'de': 'Ingenieur' },
  // Unit 5: Numbers
  '一': { 'zh-TW': '一', 'zh-CN': '一', 'en': 'One', 'ko': '하나', 'es': 'Uno', 'fr': 'Un', 'de': 'Eins' },
  '二': { 'zh-TW': '二', 'zh-CN': '二', 'en': 'Two', 'ko': '둘', 'es': 'Dos', 'fr': 'Deux', 'de': 'Zwei' },
  '三': { 'zh-TW': '三', 'zh-CN': '三', 'en': 'Three', 'ko': '셋', 'es': 'Tres', 'fr': 'Trois', 'de': 'Drei' },
  '四': { 'zh-TW': '四', 'zh-CN': '四', 'en': 'Four', 'ko': '넷', 'es': 'Cuatro', 'fr': 'Quatre', 'de': 'Vier' },
  '五': { 'zh-TW': '五', 'zh-CN': '五', 'en': 'Five', 'ko': '다섯', 'es': 'Cinco', 'fr': 'Cinq', 'de': 'Fünf' }
};

console.log(`Dictionary: ${Object.keys(dict).length} words`);

// Escape single quotes
const escape = (s) => s.replace(/'/g, "\\'");

// Find ja: section
const jaStart = content.indexOf('  ja: [');
const enStart = content.indexOf('  en: [');
const jaEnd = enStart;

console.log(`ja: section: ${jaStart} to ${jaEnd}`);

// Extract ja section
let jaSection = content.substring(jaStart, jaEnd);

// Process replacements
const replacements = [];

for (const [word, translations] of Object.entries(dict)) {
  const wordPattern = `word: '${word}'`;
  let wordIndex = jaSection.indexOf(wordPattern);
  
  while (wordIndex !== -1) {
    const meaningsStart = jaSection.indexOf('meanings: {', wordIndex);
    if (meaningsStart === -1) {
      wordIndex = jaSection.indexOf(wordPattern, wordIndex + 1);
      continue;
    }
    
    let braceCount = 1;
    let i = meaningsStart + 'meanings: {'.length;
    while (i < jaSection.length && braceCount > 0) {
      if (jaSection[i] === '{') braceCount++;
      if (jaSection[i] === '}') braceCount--;
      i++;
    }
    const meaningsEnd = i;
    
    const newMeanings = `meanings: {
      'zh-TW': '${escape(translations['zh-TW'])}',
      'zh-CN': '${escape(translations['zh-CN'])}',
      'en': '${escape(translations['en'])}',
      'ja': '${escape(word)}',
      'ko': '${escape(translations['ko'])}',
      'es': '${escape(translations['es'])}',
      'fr': '${escape(translations['fr'])}',
      'de': '${escape(translations['de'])}'
    }`;
    
    replacements.push({ start: meaningsStart, end: meaningsEnd, text: newMeanings });
    
    wordIndex = jaSection.indexOf(wordPattern, wordIndex + 1);
  }
}

console.log(`Found ${replacements.length} replacements`);

// Sort by start index (descending) and apply
replacements.sort((a, b) => b.start - a.start);
for (const rep of replacements) {
  jaSection = jaSection.substring(0, rep.start) + rep.text + jaSection.substring(rep.end);
}

// Replace in content
content = content.substring(0, jaStart) + jaSection + content.substring(jaEnd);

// Write back
writeFileSync(filePath, content, 'utf8');
console.log('File updated successfully');
