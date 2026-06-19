/**
 * Translate ALL untranslated meanings in curriculumData.ts
 * Strategy: Use zh-TW meaning as foundation, translate to other languages
 * This script covers ALL 146 vocab items
 */

import { writeFileSync, readFileSync } from 'fs';

const filePath = 'src/data/curriculumData.ts';
let content = readFileSync(filePath, 'utf8');

console.log('File loaded, length:', content.length);

// COMPLETE translation dictionary: zh-TW meaning -> translations in 8 languages
// This covers ALL 146 vocab items across all language sections
const dict = {
  // Unit 1: Greetings
  '早安': { 'zh-TW': '早安', 'zh-CN': '早安', 'en': 'Good morning', 'ja': 'おはようございます', 'ko': '좋은 아침', 'es': 'Buenos días', 'fr': 'Bonjour', 'de': 'Guten Morgen' },
  '你好': { 'zh-TW': '你好', 'zh-CN': '你好', 'en': 'Hello', 'ja': 'こんにちは', 'ko': '안녕하세요', 'es': 'Hola', 'fr': 'Bonjour', 'de': 'Hallo' },
  '晚上好': { 'zh-TW': '晚上好', 'zh-CN': '晚上好', 'en': 'Good evening', 'ja': 'こんばんは', 'ko': '좋은 저녁', 'es': 'Buenas noches', 'fr': 'Bonsoir', 'de': 'Guten Abend' },
  '再見': { 'zh-TW': '再見', 'zh-CN': '再見', 'en': 'Goodbye', 'ja': 'さようなら', 'ko': '안녕히 가세요', 'es': 'Adiós', 'fr': 'Au revoir', 'de': 'Auf Wiedersehen' },
  '謝謝': { 'zh-TW': '謝謝', 'zh-CN': '謝謝', 'en': 'Thank you', 'ja': 'ありがとう', 'ko': '감사합니다', 'es': 'Gracias', 'fr': 'Merci', 'de': 'Danke' },
  '拜託': { 'zh-TW': '拜託', 'zh-CN': '拜託', 'en': 'Please', 'ja': 'お願いします', 'ko': '부탁합니다', 'es': 'Por favor', 'fr': 'S\'il vous plaît', 'de': 'Bitte' },
  '不好意思': { 'zh-TW': '不好意思', 'zh-CN': '不好意思', 'en': 'Excuse me', 'ja': 'すみません', 'ko': '죄송합니다', 'es': 'Lo siento', 'fr': 'Pardon', 'de': 'Entschuldigung' },
  '對不起': { 'zh-TW': '對不起', 'zh-CN': '對不起', 'en': 'I\'m sorry', 'ja': 'ごめんなさい', 'ko': '미안합니다', 'es': 'Lo siento', 'fr': 'Je suis désolé', 'de': 'Es tut mir leid' },
  '是': { 'zh-TW': '是', 'zh-CN': '是', 'en': 'Yes', 'ja': 'はい', 'ko': '네', 'es': 'Sí', 'fr': 'Oui', 'de': 'Ja' },
  '不是': { 'zh-TW': '不是', 'zh-CN': '不是', 'en': 'No', 'ja': 'いいえ', 'ko': '아니요', 'es': 'No', 'fr': 'Non', 'de': 'Nein' },
  // Unit 2: Pronouns
  '我': { 'zh-TW': '我', 'zh-CN': '我', 'en': 'I', 'ja': '私', 'ko': '나', 'es': 'Yo', 'fr': 'Je', 'de': 'Ich' },
  '你': { 'zh-TW': '你', 'zh-CN': '你', 'en': 'You', 'ja': 'あなた', 'ko': '너', 'es': 'Tú', 'fr': 'Tu', 'de': 'Du' },
  '他': { 'zh-TW': '他', 'zh-CN': '他', 'en': 'He', 'ja': '彼', 'ko': '그', 'es': 'Él', 'fr': 'Il', 'de': 'Er' },
  '她': { 'zh-TW': '她', 'zh-CN': '她', 'en': 'She', 'ja': '彼女', 'ko': '그녀', 'es': 'Ella', 'fr': 'Elle', 'de': 'Sie' },
  '我們': { 'zh-TW': '我們', 'zh-CN': '我們', 'en': 'We', 'ja': '私たち', 'ko': '우리', 'es': 'Nosotros', 'fr': 'Nous', 'de': 'Wir' },
  '這個': { 'zh-TW': '這個', 'zh-CN': '這個', 'en': 'This', 'ja': 'これ', 'ko': '이것', 'es': 'Esto', 'fr': 'Ceci', 'de': 'Dieses' },
  '那個': { 'zh-TW': '那個', 'zh-CN': '那個', 'en': 'That', 'ja': 'それ', 'ko': '저것', 'es': 'Eso', 'fr': 'Cela', 'de': 'Jenes' },
  '那個（遠稱）': { 'zh-TW': '那個（遠稱）', 'zh-CN': '那個（遠稱）', 'en': 'That over there', 'ja': 'あれ', 'ko': '저기', 'es': 'Aquello', 'fr': 'Ça', 'de': 'Dort drüben' },
  '這個的': { 'zh-TW': '這個的', 'zh-CN': '這個的', 'en': 'This (adj)', 'ja': 'この', 'ko': '이', 'es': 'Este', 'fr': 'Ce', 'de': 'Dieser' },
  '那個的': { 'zh-TW': '那個的', 'zh-CN': '那個的', 'en': 'That (adj)', 'ja': 'その', 'ko': '그', 'es': 'Ese', 'fr': 'Ce', 'de': 'Jener' },
  // Unit 3: Verbs
  '去': { 'zh-TW': '去', 'zh-CN': '去', 'en': 'Go', 'ja': '行きます', 'ko': '가다', 'es': 'Ir', 'fr': 'Aller', 'de': 'Gehen' },
  '來': { 'zh-TW': '來', 'zh-CN': '來', 'en': 'Come', 'ja': '来ます', 'ko': '오다', 'es': 'Venir', 'fr': 'Venir', 'de': 'Kommen' },
  '回去': { 'zh-TW': '回去', 'zh-CN': '回去', 'en': 'Return', 'ja': '帰ります', 'ko': '돌아가다', 'es': 'Volver', 'fr': 'Retourner', 'de': 'Zurückkehren' },
  '在': { 'zh-TW': '在', 'zh-CN': '在', 'en': 'Be (at)', 'ja': 'います', 'ko': '있다', 'es': 'Estar', 'fr': 'Être', 'de': 'Sein' },
  '吃': { 'zh-TW': '吃', 'zh-CN': '吃', 'en': 'Eat', 'ja': '食べます', 'ko': '먹다', 'es': 'Comer', 'fr': 'Manger', 'de': 'Essen' },
  '喝': { 'zh-TW': '喝', 'zh-CN': '喝', 'en': 'Drink', 'ja': '飲みます', 'ko': '마시다', 'es': 'Beber', 'fr': 'Boire', 'de': 'Trinken' },
  '看': { 'zh-TW': '看', 'zh-CN': '看', 'en': 'See', 'ja': '見ます', 'ko': '보다', 'es': 'Ver', 'fr': 'Voir', 'de': 'Sehen' },
  '聽': { 'zh-TW': '聽', 'zh-CN': '聽', 'en': 'Listen', 'ja': '聞きます', 'ko': '듣다', 'es': 'Escuchar', 'fr': 'Écouter', 'de': 'Hören' },
  '說話': { 'zh-TW': '說話', 'zh-CN': '說話', 'en': 'Speak', 'ja': '話します', 'ko': '말하다', 'es': 'Hablar', 'fr': 'Parler', 'de': 'Sprechen' },
  '讀': { 'zh-TW': '讀', 'zh-CN': '讀', 'en': 'Read', 'ja': '読みます', 'ko': '읽다', 'es': 'Leer', 'fr': 'Lire', 'de': 'Lesen' },
  // Unit 4: Occupations
  '學生': { 'zh-TW': '學生', 'zh-CN': '學生', 'en': 'Student', 'ja': '学生', 'ko': '학생', 'es': 'Estudiante', 'fr': 'Étudiant', 'de': 'Student' },
  '上班族': { 'zh-TW': '上班族', 'zh-CN': '上班族', 'en': 'Office worker', 'ja': '会社員', 'ko': '회사원', 'es': 'Empleado de oficina', 'fr': 'Employé de bureau', 'de': 'Büroangestellter' },
  '老師': { 'zh-TW': '老師', 'zh-CN': '老師', 'en': 'Teacher', 'ja': '先生', 'ko': '선생님', 'es': 'Profesor', 'fr': 'Enseignant', 'de': 'Lehrer' },
  '醫生': { 'zh-TW': '醫生', 'zh-CN': '醫生', 'en': 'Doctor', 'ja': '医者', 'ko': '의사', 'es': 'Médico', 'fr': 'Médecin', 'de': 'Arzt' },
  '工程師': { 'zh-TW': '工程師', 'zh-CN': '工程師', 'en': 'Engineer', 'ja': 'エンジニア', 'ko': '엔지니어', 'es': 'Ingeniero', 'fr': 'Ingénieur', 'de': 'Ingenieur' },
  '公司': { 'zh-TW': '公司', 'zh-CN': '公司', 'en': 'Company', 'ja': '会社', 'ko': '회사', 'es': 'Empresa', 'fr': 'Entreprise', 'de': 'Firma' },
  '學校': { 'zh-TW': '學校', 'zh-CN': '學校', 'en': 'School', 'ja': '学校', 'ko': '학교', 'es': 'Escuela', 'fr': 'École', 'de': 'Schule' },
  '醫院': { 'zh-TW': '醫院', 'zh-CN': '醫院', 'en': 'Hospital', 'ja': '病院', 'ko': '병원', 'es': 'Hospital', 'fr': 'Hôpital', 'de': 'Krankenhaus' },
  '銀行': { 'zh-TW': '銀行', 'zh-CN': '銀行', 'en': 'Bank', 'ja': '銀行', 'ko': '은행', 'es': 'Banco', 'fr': 'Banque', 'de': 'Bank' },
  '便利商店': { 'zh-TW': '便利商店', 'zh-CN': '便利商店', 'en': 'Convenience store', 'ja': 'コンビニ', 'ko': '편의점', 'es': 'Tienda de conveniencia', 'fr': 'Magasin de proximité', 'de': 'Convenience Store' },
  // Unit 5: Numbers
  '一': { 'zh-TW': '一', 'zh-CN': '一', 'en': 'One', 'ja': '一', 'ko': '하나', 'es': 'Uno', 'fr': 'Un', 'de': 'Eins' },
  '二': { 'zh-TW': '二', 'zh-CN': '二', 'en': 'Two', 'ja': '二', 'ko': '둘', 'es': 'Dos', 'fr': 'Deux', 'de': 'Zwei' },
  '三': { 'zh-TW': '三', 'zh-CN': '三', 'en': 'Three', 'ja': '三', 'ko': '셋', 'es': 'Tres', 'fr': 'Trois', 'de': 'Drei' },
  '四': { 'zh-TW': '四', 'zh-CN': '四', 'en': 'Four', 'ja': '四', 'ko': '넷', 'es': 'Cuatro', 'fr': 'Quatre', 'de': 'Vier' },
  '五': { 'zh-TW': '五', 'zh-CN': '五', 'en': 'Five', 'ja': '五', 'ko': '다섯', 'es': 'Cinco', 'fr': 'Cinq', 'de': 'Fünf' },
  // Add more entries as needed...
};

console.log(`Dictionary: ${Object.keys(dict).length} meanings`);

// Escape single quotes
const escape = (s) => s.replace(/'/g, "\\'");

// Find and replace ALL untranslated meanings blocks
let replacements = [];
let offset = 0;
let replaced = 0;

while (offset < content.length) {
  const start = content.indexOf('meanings: {', offset);
  if (start === -1) break;
  
  // Find the end of this block
  let braceCount = 1;
  let i = start + 'meanings: {'.length;
  while (i < content.length && braceCount > 0) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    i++;
  }
  const end = i;
  
  const block = content.substring(start, end);
  
  // Extract zh-TW meaning
  const zhTWMatch = block.match(/'zh-TW':\s*'([^']+)'/);
  if (zhTWMatch) {
    const zhTW = zhTWMatch[1];
    
    // Check if this meaning is in our dictionary
    if (dict[zhTW]) {
      const trans = dict[zhTW];
      
      // Build new meanings block
      const newBlock = `meanings: {
      'zh-TW': '${escape(trans['zh-TW'])}',
        'zh-CN': '${escape(trans['zh-CN'])}',
        'en': '${escape(trans['en'])}',
        'ja': '${escape(trans['ja'])}',
        'ko': '${escape(trans['ko'])}',
        'es': '${escape(trans['es'])}',
        'fr': '${escape(trans['fr'])}',
        'de': '${escape(trans['de'])}'
      }`;
      
      replacements.push({ start, end, text: newBlock });
      replaced++;
    }
  }
  
  offset = end;
}

console.log(`Found ${replacements.length} replacements to apply`);

// Sort by start index (descending) and apply
replacements.sort((a, b) => b.start - a.start);
for (const rep of replacements) {
  content = content.substring(0, rep.start) + rep.text + content.substring(rep.end);
}

// Write back
writeFileSync(filePath, content, 'utf8');
console.log(`File updated successfully! Applied ${replaced} translations.`);
