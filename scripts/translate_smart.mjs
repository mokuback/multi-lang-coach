/**
 * Intelligent translation of ALL curriculumData.ts meanings
 * Strategy: Extract zh-TW, generate translations directly, apply to all blocks
 */

import { writeFileSync, readFileSync } from 'fs';

const filePath = 'src/data/curriculumData.ts';
let content = readFileSync(filePath, 'utf8');

console.log('File loaded, length:', content.length);

// Translation function - generates translations based on zh-TW meaning
function translateMeaning(zhTW) {
  // Direct translation mapping - ALL possible meanings in the file
  const translations = {
    // Japanese Section Units 1-15
    '早安': { 'zh-TW': '早安', 'zh-CN': '早安', 'en': 'Good morning', 'ja': 'おはようございます', 'ko': '좋은 아침', 'es': 'Buenos días', 'fr': 'Bonjour', 'de': 'Guten Morgen' },
    '你好': { 'zh-TW': '你好', 'zh-CN': '你好', 'en': 'Hello', 'ja': 'こんにちは', 'ko': '안녕하세요', 'es': 'Hola', 'fr': 'Bonjour', 'de': 'Hallo' },
    '晚上好': { 'zh-TW': '晚上好', 'zh-CN': '晚上好', 'en': 'Good evening', 'ja': 'こんばんは', 'ko': '좋은 저녁', 'es': 'Buenas noches', 'fr': 'Bonsoir', 'de': 'Guten Abend' },
    '謝謝': { 'zh-TW': '謝謝', 'zh-CN': '謝謝', 'en': 'Thank you', 'ja': 'ありがとう', 'ko': '감사합니다', 'es': 'Gracias', 'fr': 'Merci', 'de': 'Danke' },
    '再見': { 'zh-TW': '再見', 'zh-CN': '再見', 'en': 'Goodbye', 'ja': 'さようなら', 'ko': '안녕히 가세요', 'es': 'Adiós', 'fr': 'Au revoir', 'de': 'Auf Wiedersehen' },
    '拜託': { 'zh-TW': '拜託', 'zh-CN': '拜託', 'en': 'Please', 'ja': 'お願いします', 'ko': '부탁합니다', 'es': 'Por favor', 'fr': 'S\'il vous plaît', 'de': 'Bitte' },
    '不好意思': { 'zh-TW': '不好意思', 'zh-CN': '不好意思', 'en': 'Excuse me', 'ja': 'すみません', 'ko': '죄송합니다', 'es': 'Lo siento', 'fr': 'Pardon', 'de': 'Entschuldigung' },
    '對不起': { 'zh-TW': '對不起', 'zh-CN': '對不起', 'en': 'I\'m sorry', 'ja': 'ごめんなさい', 'ko': '미안합니다', 'es': 'Lo siento', 'fr': 'Je suis désolé', 'de': 'Es tut mir leid' },
    '是': { 'zh-TW': '是', 'zh-CN': '是', 'en': 'Yes', 'ja': 'はい', 'ko': '네', 'es': 'Sí', 'fr': 'Oui', 'de': 'Ja' },
    '不是': { 'zh-TW': '不是', 'zh-CN': '不是', 'en': 'No', 'ja': 'いいえ', 'ko': '아니요', 'es': 'No', 'fr': 'Non', 'de': 'Nein' },
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
    '去': { 'zh-TW': '去', 'zh-CN': '去', 'en': 'Go', 'ja': '行く', 'ko': '가다', 'es': 'Ir', 'fr': 'Aller', 'de': 'Gehen' },
    '來': { 'zh-TW': '來', 'zh-CN': '來', 'en': 'Come', 'ja': '来る', 'ko': '오다', 'es': 'Venir', 'fr': 'Venir', 'de': 'Kommen' },
    '回去': { 'zh-TW': '回去', 'zh-CN': '回去', 'en': 'Return', 'ja': '帰る', 'ko': '돌아가다', 'es': 'Volver', 'fr': 'Retourner', 'de': 'Zurückkehren' },
    '在': { 'zh-TW': '在', 'zh-CN': '在', 'en': 'Be (at)', 'ja': 'いる', 'ko': '있다', 'es': 'Estar', 'fr': 'Être', 'de': 'Sein' },
    '吃': { 'zh-TW': '吃', 'zh-CN': '吃', 'en': 'Eat', 'ja': '食べる', 'ko': '먹다', 'es': 'Comer', 'fr': 'Manger', 'de': 'Essen' },
    '喝': { 'zh-TW': '喝', 'zh-CN': '喝', 'en': 'Drink', 'ja': '飲む', 'ko': '마시다', 'es': 'Beber', 'fr': 'Boire', 'de': 'Trinken' },
    '看': { 'zh-TW': '看', 'zh-CN': '看', 'en': 'See', 'ja': '見る', 'ko': '보다', 'es': 'Ver', 'fr': 'Voir', 'de': 'Sehen' },
    '聽': { 'zh-TW': '聽', 'zh-CN': '聽', 'en': 'Listen', 'ja': '聞く', 'ko': '듣다', 'es': 'Escuchar', 'fr': 'Écouter', 'de': 'Hören' },
    '說話': { 'zh-TW': '說話', 'zh-CN': '說話', 'en': 'Speak', 'ja': '話す', 'ko': '말하다', 'es': 'Hablar', 'fr': 'Parler', 'de': 'Sprechen' },
    '讀': { 'zh-TW': '讀', 'zh-CN': '讀', 'en': 'Read', 'ja': '読む', 'ko': '읽다', 'es': 'Leer', 'fr': 'Lire', 'de': 'Lesen' },
    '寫': { 'zh-TW': '寫', 'zh-CN': '寫', 'en': 'Write', 'ja': '書く', 'ko': '쓰다', 'es': 'Escribir', 'fr': 'Écrire', 'de': 'Schreiben' },
    '學生': { 'zh-TW': '學生', 'zh-CN': '學生', 'en': 'Student', 'ja': '学生', 'ko': '학생', 'es': 'Estudiante', 'fr': 'Étudiant', 'de': 'Student' },
    '上班族': { 'zh-TW': '上班族', 'zh-CN': '上班族', 'en': 'Office worker', 'ja': '会社員', 'ko': '회사원', 'es': 'Empleado de oficina', 'fr': 'Employé de bureau', 'de': 'Büroangestellter' },
    '老師': { 'zh-TW': '老師', 'zh-CN': '老師', 'en': 'Teacher', 'ja': '先生', 'ko': '선생님', 'es': 'Profesor', 'fr': 'Enseignant', 'de': 'Lehrer' },
    '醫生': { 'zh-TW': '醫生', 'zh-CN': '醫生', 'en': 'Doctor', 'ja': '医者', 'ko': '의사', 'es': 'Médico', 'fr': 'Médecin', 'de': 'Arzt' },
    '工程師': { 'zh-TW': '工程師', 'zh-CN': '工程師', 'en': 'Engineer', 'ja': 'エンジニア', 'ko': '엔지니어', 'es': 'Ingeniero', 'fr': 'Ingénieur', 'de': 'Ingenieur' },
    '家': { 'zh-TW': '家', 'zh-CN': '家', 'en': 'Home', 'ja': '家', 'ko': '집', 'es': 'Casa', 'fr': 'Maison', 'de': 'Haus' },
    '學校': { 'zh-TW': '學校', 'zh-CN': '學校', 'en': 'School', 'ja': '学校', 'ko': '학교', 'es': 'Escuela', 'fr': 'École', 'de': 'Schule' },
    '車站': { 'zh-TW': '車站', 'zh-CN': '車站', 'en': 'Station', 'ja': '駅', 'ko': '역', 'es': 'Estación', 'fr': 'Gare', 'de': 'Bahnhof' },
    '公司': { 'zh-TW': '公司', 'zh-CN': '公司', 'en': 'Company', 'ja': '会社', 'ko': '회사', 'es': 'Empresa', 'fr': 'Entreprise', 'de': 'Firma' },
    '醫院': { 'zh-TW': '醫院', 'zh-CN': '醫院', 'en': 'Hospital', 'ja': '病院', 'ko': '병원', 'es': 'Hospital', 'fr': 'Hôpital', 'de': 'Krankenhaus' },
    '銀行': { 'zh-TW': '銀行', 'zh-CN': '銀行', 'en': 'Bank', 'ja': '銀行', 'ko': '은행', 'es': 'Banco', 'fr': 'Banque', 'de': 'Bank' },
    '便利商店': { 'zh-TW': '便利商店', 'zh-CN': '便利商店', 'en': 'Convenience store', 'ja': 'コンビニ', 'ko': '편의점', 'es': 'Tienda de conveniencia', 'fr': 'Magasin de proximité', 'de': 'Convenience Store' },
    '水': { 'zh-TW': '水', 'zh-CN': '水', 'en': 'Water', 'ja': '水', 'ko': '물', 'es': 'Agua', 'fr': 'Eau', 'de': 'Wasser' },
    '茶': { 'zh-TW': '茶', 'zh-CN': '茶', 'en': 'Tea', 'ja': 'お茶', 'ko': '차', 'es': 'Té', 'fr': 'Thé', 'de': 'Tee' },
    '咖啡': { 'zh-TW': '咖啡', 'zh-CN': '咖啡', 'en': 'Coffee', 'ja': 'コーヒー', 'ko': '커피', 'es': 'Café', 'fr': 'Café', 'de': 'Kaffee' },
    '米飯': { 'zh-TW': '米飯', 'zh-CN': '米飯', 'en': 'Rice', 'ja': 'ご飯', 'ko': '밥', 'es': 'Arroz', 'fr': 'Riz', 'de': 'Reis' },
    '麵包': { 'zh-TW': '麵包', 'zh-CN': '麵包', 'en': 'Bread', 'ja': 'パン', 'ko': '빵', 'es': 'Pan', 'fr': 'Pain', 'de': 'Brot' },
    '人': { 'zh-TW': '人', 'zh-CN': '人', 'en': 'Person', 'ja': '人', 'ko': '사람', 'es': 'Persona', 'fr': 'Personne', 'de': 'Person' },
    '男': { 'zh-TW': '男', 'zh-CN': '男', 'en': 'Man', 'ja': '男', 'ko': '남자', 'es': 'Hombre', 'fr': 'Homme', 'de': 'Mann' },
    '女': { 'zh-TW': '女', 'zh-CN': '女', 'en': 'Woman', 'ja': '女', 'ko': '여자', 'es': 'Mujer', 'fr': 'Femme', 'de': 'Frau' },
    '小孩': { 'zh-TW': '小孩', 'zh-CN': '小孩', 'en': 'Child', 'ja': '子供', 'ko': '아이', 'es': 'Niño', 'fr': 'Enfant', 'de': 'Kind' },
    '朋友': { 'zh-TW': '朋友', 'zh-CN': '朋友', 'en': 'Friend', 'ja': '友達', 'ko': '친구', 'es': 'Amigo', 'fr': 'Ami', 'de': 'Freund' },
    '今天': { 'zh-TW': '今天', 'zh-CN': '今天', 'en': 'Today', 'ja': '今日', 'ko': '오늘', 'es': 'Hoy', 'fr': 'Aujourd\'hui', 'de': 'Heute' },
    '明天': { 'zh-TW': '明天', 'zh-CN': '明天', 'en': 'Tomorrow', 'ja': '明日', 'ko': '내일', 'es': 'Mañana', 'fr': 'Demain', 'de': 'Morgen' },
    '昨天': { 'zh-TW': '昨天', 'zh-CN': '昨天', 'en': 'Yesterday', 'ja': '昨日', 'ko': '어제', 'es': 'Ayer', 'fr': 'Hier', 'de': 'Gestern' },
    '現在': { 'zh-TW': '現在', 'zh-CN': '現在', 'en': 'Now', 'ja': '今', 'ko': '지금', 'es': 'Ahora', 'fr': 'Maintenant', 'de': 'Jetzt' },
    '時間': { 'zh-TW': '時間', 'zh-CN': '時間', 'en': 'Time', 'ja': '時間', 'ko': '시간', 'es': 'Tiempo', 'fr': 'Temps', 'de': 'Zeit' },
    '一': { 'zh-TW': '一', 'zh-CN': '一', 'en': 'One', 'ja': '一', 'ko': '하나', 'es': 'Uno', 'fr': 'Un', 'de': 'Eins' },
    '二': { 'zh-TW': '二', 'zh-CN': '二', 'en': 'Two', 'ja': '二', 'ko': '둘', 'es': 'Dos', 'fr': 'Deux', 'de': 'Zwei' },
    '三': { 'zh-TW': '三', 'zh-CN': '三', 'en': 'Three', 'ja': '三', 'ko': '셋', 'es': 'Tres', 'fr': 'Trois', 'de': 'Drei' },
    '四': { 'zh-TW': '四', 'zh-CN': '四', 'en': 'Four', 'ja': '四', 'ko': '넷', 'es': 'Cuatro', 'fr': 'Quatre', 'de': 'Vier' },
    '五': { 'zh-TW': '五', 'zh-CN': '五', 'en': 'Five', 'ja': '五', 'ko': '다섯', 'es': 'Cinco', 'fr': 'Cinq', 'de': 'Fünf' },
    '六': { 'zh-TW': '六', 'zh-CN': '六', 'en': 'Six', 'ja': '六', 'ko': '여섯', 'es': 'Seis', 'fr': 'Six', 'de': 'Sechs' },
    '七': { 'zh-TW': '七', 'zh-CN': '七', 'en': 'Seven', 'ja': '七', 'ko': '일곱', 'es': 'Siete', 'fr': 'Sept', 'de': 'Sieben' },
    '八': { 'zh-TW': '八', 'zh-CN': '八', 'en': 'Eight', 'ja': '八', 'ko': '여덟', 'es': 'Ocho', 'fr': 'Huit', 'de': 'Acht' },
    '九': { 'zh-TW': '九', 'zh-CN': '九', 'en': 'Nine', 'ja': '九', 'ko': '아홉', 'es': 'Nueve', 'fr': 'Neuf', 'de': 'Neun' },
    '十': { 'zh-TW': '十', 'zh-CN': '十', 'en': 'Ten', 'ja': '十', 'ko': '열', 'es': 'Diez', 'fr': 'Dix', 'de': 'Zehn' },
    '家族': { 'zh-TW': '家族', 'zh-CN': '家族', 'en': 'Family', 'ja': '家族', 'ko': '가족', 'es': 'Familia', 'fr': 'Famille', 'de': 'Familie' },
    '父親': { 'zh-TW': '父親', 'zh-CN': '父親', 'en': 'Father', 'ja': '父', 'ko': '아버지', 'es': 'Padre', 'fr': 'Père', 'de': 'Vater' },
    '母親': { 'zh-TW': '母親', 'zh-CN': '母親', 'en': 'Mother', 'ja': '母', 'ko': '어머니', 'es': 'Madre', 'fr': 'Mère', 'de': 'Mutter' },
    '兄弟': { 'zh-TW': '兄弟', 'zh-CN': '兄弟', 'en': 'Brother', 'ja': '兄弟', 'ko': '형제', 'es': 'Hermano', 'fr': 'Frère', 'de': 'Bruder' },
    '姐妹': { 'zh-TW': '姐妹', 'zh-CN': '姐妹', 'en': 'Sister', 'ja': '姉妹', 'ko': '자매', 'es': 'Hermana', 'fr': 'Sœur', 'de': 'Schwester' },
    '大': { 'zh-TW': '大', 'zh-CN': '大', 'en': 'Big', 'ja': '大きい', 'ko': '크다', 'es': 'Grande', 'fr': 'Grand', 'de': 'Groß' },
    '小': { 'zh-TW': '小', 'zh-CN': '小', 'en': 'Small', 'ja': '小さい', 'ko': '작다', 'es': 'Pequeño', 'fr': 'Petit', 'de': 'Klein' },
    '好': { 'zh-TW': '好', 'zh-CN': '好', 'en': 'Good', 'ja': '良い', 'ko': '좋다', 'es': 'Bueno', 'fr': 'Bon', 'de': 'Gut' },
    '壞': { 'zh-TW': '壞', 'zh-CN': '壞', 'en': 'Bad', 'ja': '悪い', 'ko': '나쁘다', 'es': 'Malo', 'fr': 'Mauvais', 'de': 'Schlecht' },
    '多': { 'zh-TW': '多', 'zh-CN': '多', 'en': 'Many', 'ja': '多い', 'ko': '많다', 'es': 'Mucho', 'fr': 'Beaucoup', 'de': 'Viel' },
    '書本': { 'zh-TW': '書本', 'zh-CN': '書本', 'en': 'Book', 'ja': '本', 'ko': '책', 'es': 'Libro', 'fr': 'Livre', 'de': 'Buch' },
    '筆': { 'zh-TW': '筆', 'zh-CN': '筆', 'en': 'Pen', 'ja': 'ペン', 'ko': '펜', 'es': 'Bolígrafo', 'fr': 'Stylo', 'de': 'Kugelschreiber' },
    '電腦': { 'zh-TW': '電腦', 'zh-CN': '電腦', 'en': 'Computer', 'ja': 'パソコン', 'ko': '컴퓨터', 'es': 'Computadora', 'fr': 'Ordinateur', 'de': 'Computer' },
  };
  
  return translations[zhTW] || null;
}

// Escape single quotes
const escape = (s) => s.replace(/'/g, "\\'");

// Find and replace ALL meanings blocks
let offset = 0;
let replacements = 0;
const replacementsList = [];

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
    const trans = translateMeaning(zhTW);
    
    if (trans) {
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
      
      replacementsList.push({ start, end, text: newBlock });
      replacements++;
    }
  }
  
  offset = end;
}

console.log(`Found ${replacements} replacements to apply`);

// Sort by start index (descending) and apply
replacementsList.sort((a, b) => b.start - a.start);
for (const rep of replacementsList) {
  content = content.substring(0, rep.start) + rep.text + content.substring(rep.end);
}

// Write back
writeFileSync(filePath, content, 'utf8');
console.log(`File updated successfully! Applied ${replacements} translations.`);
