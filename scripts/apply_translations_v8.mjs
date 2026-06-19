import fs from 'fs';

const filePath = 'src/data/curriculumData.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Translation dictionary
const dict = {
  'Hello': { 'zh-TW': '你好', 'zh-CN': '你好', 'ja': 'こんにちは', 'ko': '안녕하세요', 'es': 'Hola', 'fr': 'Bonjour', 'de': 'Hallo' },
  'Good morning': { 'zh-TW': '早安', 'zh-CN': '早安', 'ja': 'おはようございます', 'ko': '좋은 아침', 'es': 'Buenos días', 'fr': 'Bonjour', 'de': 'Guten Morgen' },
  'Name': { 'zh-TW': '名字', 'zh-CN': '名字', 'ja': '名前', 'ko': '이름', 'es': 'Nombre', 'fr': 'Nom', 'de': 'Name' },
  'Nice': { 'zh-TW': '好的', 'zh-CN': '好的', 'ja': 'いい', 'ko': '좋은', 'es': 'Agradable', 'fr': 'Sympa', 'de': 'Schön' },
  'Meet': { 'zh-TW': '見面', 'zh-CN': '见面', 'ja': '会う', 'ko': '만나다', 'es': 'Conocer', 'fr': 'Rencontrer', 'de': 'Treffen' },
  'Teacher': { 'zh-TW': '老師', 'zh-CN': '老师', 'ja': '先生', 'ko': '선생님', 'es': 'Profesor', 'fr': 'Enseignant', 'de': 'Lehrer' },
  'Student': { 'zh-TW': '學生', 'zh-CN': '学生', 'ja': '学生', 'ko': '학생', 'es': 'Estudiante', 'fr': 'Étudiant', 'de': 'Student' },
  'Engineer': { 'zh-TW': '工程師', 'zh-CN': '工程师', 'ja': 'エンジニア', 'ko': '엔지니어', 'es': 'Ingeniero', 'fr': 'Ingénieur', 'de': 'Ingenieur' },
  'Taiwan': { 'zh-TW': '台灣', 'zh-CN': '台湾', 'ja': '台湾', 'ko': '대만', 'es': 'Taiwán', 'fr': 'Taïwan', 'de': 'Taiwan' },
  'America': { 'zh-TW': '美國', 'zh-CN': '美国', 'ja': 'アメリカ', 'ko': '미국', 'es': 'Estados Unidos', 'fr': 'États-Unis', 'de': 'USA' },
  'This': { 'zh-TW': '這個', 'zh-CN': '这个', 'ja': 'これ', 'ko': '이것', 'es': 'Esto', 'fr': 'Ceci', 'de': 'Dieses' },
  'That': { 'zh-TW': '那個', 'zh-CN': '那个', 'ja': 'あれ', 'ko': '저것', 'es': 'Eso', 'fr': 'Cela', 'de': 'Jenes' },
  'Pen': { 'zh-TW': '筆', 'zh-CN': '笔', 'ja': 'ペン', 'ko': '펜', 'es': 'Bolígrafo', 'fr': 'Stylo', 'de': 'Stift' },
  'Computer': { 'zh-TW': '電腦', 'zh-CN': '电脑', 'ja': 'パソコン', 'ko': '컴퓨터', 'es': 'Computadora', 'fr': 'Ordinateur', 'de': 'Computer' },
  'Phone': { 'zh-TW': '電話', 'zh-CN': '电话', 'ja': '電話', 'ko': '전화', 'es': 'Teléfono', 'fr': 'Téléphone', 'de': 'Telefon' },
  'Here': { 'zh-TW': '這裡', 'zh-CN': '这里', 'ja': 'ここ', 'ko': '여기', 'es': 'Aquí', 'fr': 'Ici', 'de': 'Hier' },
  'There': { 'zh-TW': '那裡', 'zh-CN': '那里', 'ja': 'あそこ', 'ko': '저기', 'es': 'Allí', 'fr': 'Là', 'de': 'Dort' },
  'Restroom': { 'zh-TW': '廁所', 'zh-CN': '厕所', 'ja': 'トイレ', 'ko': '화장실', 'es': 'Baño', 'fr': 'Toilettes', 'de': 'Toilette' },
  'Office': { 'zh-TW': '辦公室', 'zh-CN': '办公室', 'ja': 'オフィス', 'ko': '사무실', 'es': 'Oficina', 'fr': 'Bureau', 'de': 'Büro' },
  'Where': { 'zh-TW': '哪裡', 'zh-CN': '哪里', 'ja': 'どこ', 'ko': '어디', 'es': 'Dónde', 'fr': 'Où', 'de': 'Wo' },
  'How much': { 'zh-TW': '多少錢', 'zh-CN': '多少钱', 'ja': 'いくら', 'ko': '얼마', 'es': 'Cuánto', 'fr': 'Combien', 'de': 'Wieviel' },
  'Dollar': { 'zh-TW': '美元', 'zh-CN': '美元', 'ja': 'ドル', 'ko': '달러', 'es': 'Dólar', 'fr': 'Dollar', 'de': 'Dollar' },
  'Coffee': { 'zh-TW': '咖啡', 'zh-CN': '咖啡', 'ja': 'コーヒー', 'ko': '커피', 'es': 'Café', 'fr': 'Café', 'de': 'Kaffee' },
  'Menu': { 'zh-TW': '菜單', 'zh-CN': '菜单', 'ja': 'メニュー', 'ko': '메뉴', 'es': 'Menú', 'fr': 'Menu', 'de': 'Speisekarte' },
  'Receipt': { 'zh-TW': '收據', 'zh-CN': '收据', 'ja': '領収書', 'ko': '영수증', 'es': 'Recibo', 'fr': 'Reçu', 'de': 'Quittung' },
  'Time': { 'zh-TW': '時間', 'zh-CN': '时间', 'ja': '時間', 'ko': '시간', 'es': 'Tiempo', 'fr': 'Temps', 'de': 'Zeit' },
  'Clock': { 'zh-TW': '時鐘', 'zh-CN': '时钟', 'ja': '時計', 'ko': '시계', 'es': 'Reloj', 'fr': 'Horloge', 'de': 'Uhr' },
  'Breakfast': { 'zh-TW': '早餐', 'zh-CN': '早餐', 'ja': '朝ご飯', 'ko': '아침', 'es': 'Desayuno', 'fr': 'Petit déjeuner', 'de': 'Frühstück' },
  'Work': { 'zh-TW': '工作', 'zh-CN': '工作', 'ja': '仕事', 'ko': '일', 'es': 'Trabajo', 'fr': 'Travail', 'de': 'Arbeit' },
  'Sleep': { 'zh-TW': '睡覺', 'zh-CN': '睡觉', 'ja': '寝る', 'ko': '자다', 'es': 'Dormir', 'fr': 'Dormir', 'de': 'Schlafen' },
  'Like': { 'zh-TW': '喜歡', 'zh-CN': '喜欢', 'ja': '好き', 'ko': '좋아하다', 'es': 'Gustar', 'fr': 'Aimer', 'de': 'Mögen' },
  'Love': { 'zh-TW': '愛', 'zh-CN': '爱', 'ja': '愛', 'ko': '사랑', 'es': 'Amar', 'fr': 'Amour', 'de': 'Liebe' },
  'Hate': { 'zh-TW': '討厭', 'zh-CN': '讨厌', 'ja': '嫌い', 'ko': '싫어하다', 'es': 'Odiar', 'fr': 'Détester', 'de': 'Hassen' },
  'Food': { 'zh-TW': '食物', 'zh-CN': '食物', 'ja': '食べ物', 'ko': '음식', 'es': 'Comida', 'fr': 'Nourriture', 'de': 'Essen' },
  'Music': { 'zh-TW': '音樂', 'zh-CN': '音乐', 'ja': '音楽', 'ko': '음악', 'es': 'Música', 'fr': 'Musique', 'de': 'Musik' },
  'Can': { 'zh-TW': '可以', 'zh-CN': '可以', 'ja': 'できる', 'ko': '할 수 있다', 'es': 'Poder', 'fr': 'Pouvoir', 'de': 'Können' },
  'Speak': { 'zh-TW': '說話', 'zh-CN': '说话', 'ja': '話す', 'ko': '말하다', 'es': 'Hablar', 'fr': 'Parler', 'de': 'Sprechen' },
  'Swim': { 'zh-TW': '游泳', 'zh-CN': '游泳', 'ja': '泳ぐ', 'ko': '수영하다', 'es': 'Nadar', 'fr': 'Nager', 'de': 'Schwimmen' },
  'Play': { 'zh-TW': '玩', 'zh-CN': '玩', 'ja': '遊ぶ', 'ko': '놀다', 'es': 'Jugar', 'fr': 'Jouer', 'de': 'Spielen' },
  'English': { 'zh-TW': '英文', 'zh-CN': '英文', 'ja': '英語', 'ko': '영어', 'es': 'Inglés', 'fr': 'Anglais', 'de': 'Englisch' },
  'Yesterday': { 'zh-TW': '昨天', 'zh-CN': '昨天', 'ja': '昨日', 'ko': '어제', 'es': 'Ayer', 'fr': 'Hier', 'de': 'Gestern' },
  'Last week': { 'zh-TW': '上週', 'zh-CN': '上周', 'ja': '先週', 'ko': '지난 주', 'es': 'La semana pasada', 'fr': 'La semaine dernière', 'de': 'Letzte Woche' },
  'Went': { 'zh-TW': '去', 'zh-CN': '去', 'ja': '行った', 'ko': '갔다', 'es': 'Fui', 'fr': 'Allé', 'de': 'Ging' },
  'Saw': { 'zh-TW': '看', 'zh-CN': '看', 'ja': '見た', 'ko': '봤다', 'es': 'Vi', 'fr': 'Vu', 'de': 'Sah' },
  'Ate': { 'zh-TW': '吃', 'zh-CN': '吃', 'ja': '食べた', 'ko': '먹었다', 'es': 'Comí', 'fr': 'Mangeai', 'de': 'Aß' },
  'Tomorrow': { 'zh-TW': '明天', 'zh-CN': '明天', 'ja': '明日', 'ko': '내일', 'es': 'Mañana', 'fr': 'Demain', 'de': 'Morgen' },
  'Next year': { 'zh-TW': '明年', 'zh-CN': '明年', 'ja': '来年', 'ko': '내년', 'es': 'El próximo año', 'fr': 'L\'année prochaine', 'de': 'Nächstes Jahr' },
  'Going to': { 'zh-TW': '要去', 'zh-CN': '要去', 'ja': '行くつもり', 'ko': '갈 거야', 'es': 'Voy a', 'fr': 'Je vais', 'de': 'Ich gehe' },
  'Will': { 'zh-TW': '將', 'zh-CN': '将', 'ja': 'だろう', 'ko': '할 것이다', 'es': 'Voluntad', 'fr': 'Volonté', 'de': 'Wille' },
  'Travel': { 'zh-TW': '旅行', 'zh-CN': '旅行', 'ja': '旅行', 'ko': '여행', 'es': 'Viajar', 'fr': 'Voyager', 'de': 'Reisen' },
  'Call': { 'zh-TW': '打電話', 'zh-CN': '打电话', 'ja': '電話する', 'ko': '전화하다', 'es': 'Llamar', 'fr': 'Appeler', 'de': 'Anrufen' },
  'Message': { 'zh-TW': '訊息', 'zh-CN': '讯息', 'ja': 'メッセージ', 'ko': '메시지', 'es': 'Mensaje', 'fr': 'Message', 'de': 'Nachricht' },
  'Busy': { 'zh-TW': '忙', 'zh-CN': '忙', 'ja': '忙しい', 'ko': '바쁘다', 'es': 'Ocupado', 'fr': 'Occupé', 'de': 'Beschäftigt' },
  'Meeting': { 'zh-TW': '會議', 'zh-CN': '会议', 'ja': '会議', 'ko': '회의', 'es': 'Reunión', 'fr': 'Réunion', 'de': 'Besprechung' },
  'Borrow': { 'zh-TW': '借', 'zh-CN': '借', 'ja': '借りる', 'ko': '빌리다', 'es': 'Pedir prestado', 'fr': 'Emprunter', 'de': 'Leihen' },
  'Use': { 'zh-TW': '使用', 'zh-CN': '使用', 'ja': '使う', 'ko': '사용하다', 'es': 'Usar', 'fr': 'Utiliser', 'de': 'Benutzen' },
  'Help': { 'zh-TW': '幫助', 'zh-CN': '帮助', 'ja': '助ける', 'ko': '도와주다', 'es': 'Ayudar', 'fr': 'Aider', 'de': 'Helfen' },
  'Sure': { 'zh-TW': '當然', 'zh-CN': '当然', 'ja': 'もちろん', 'ko': '물론', 'es': 'Claro', 'fr': 'Sûr', 'de': 'Sicher' },
  'Problem': { 'zh-TW': '問題', 'zh-CN': '问题', 'ja': '問題', 'ko': '문제', 'es': 'Problema', 'fr': 'Problème', 'de': 'Problem' },
  'Better': { 'zh-TW': '更好', 'zh-CN': '更好', 'ja': 'もっと良い', 'ko': '더 좋다', 'es': 'Mejor', 'fr': 'Mieux', 'de': 'Besser' },
  'Faster': { 'zh-TW': '更快', 'zh-CN': '更快', 'ja': 'もっと速い', 'ko': '더 빠르다', 'es': 'Más rápido', 'fr': 'Plus vite', 'de': 'Schneller' },
  'Cheap': { 'zh-TW': '便宜', 'zh-CN': '便宜', 'ja': '安い', 'ko': '싸다', 'es': 'Barato', 'fr': 'Pas cher', 'de': 'Günstig' },
  'Expensive': { 'zh-TW': '貴', 'zh-CN': '贵', 'ja': '高い', 'ko': '비싸다', 'es': 'Caro', 'fr': 'Cher', 'de': 'Teuer' },
  'Than': { 'zh-TW': '比', 'zh-CN': '比', 'ja': '보다', 'ko': '보다', 'es': 'Que', 'fr': 'Que', 'de': 'Als' },
  'Should': { 'zh-TW': '應該', 'zh-CN': '应该', 'ja': 'べき', 'ko': '해야 한다', 'es': 'Debería', 'fr': 'Devrait', 'de': 'Sollte' },
  'Idea': { 'zh-TW': '想法', 'zh-CN': '想法', 'ja': 'アイデア', 'ko': '아이디어', 'es': 'Idea', 'fr': 'Idée', 'de': 'Idee' },
  'Maybe': { 'zh-TW': '也許', 'zh-CN': '也许', 'ja': '多分', 'ko': '아마', 'es': 'Quizás', 'fr': 'Peut-être', 'de': 'Vielleicht' },
  'Try': { 'zh-TW': '嘗試', 'zh-CN': '尝试', 'ja': '試す', 'ko': '시도하다', 'es': 'Intentar', 'fr': 'Essayer', 'de': 'Versuchen' },
  'Rest': { 'zh-TW': '休息', 'zh-CN': '休息', 'ja': '休む', 'ko': '휴식', 'es': 'Descansar', 'fr': 'Repos', 'de': 'Ruhen' },
  'Experience': { 'zh-TW': '經驗', 'zh-CN': '经验', 'ja': '経験', 'ko': '경험', 'es': 'Experiencia', 'fr': 'Expérience', 'de': 'Erfahrung' },
  'Feel': { 'zh-TW': '感覺', 'zh-CN': '感觉', 'ja': '感じる', 'ko': '느끼다', 'es': 'Sentir', 'fr': 'Ressentir', 'de': 'Fühlen' },
  'Tired': { 'zh-TW': '累', 'zh-CN': '累', 'ja': '疲れた', 'ko': '피곤하다', 'es': 'Cansado', 'fr': 'Fatigué', 'de': 'Müde' },
  'Excited': { 'zh-TW': '興奮', 'zh-CN': '兴奋', 'ja': '興奮', 'ko': '흥분', 'es': 'Emocionado', 'fr': 'Excité', 'de': 'Aufgeregt' },
  'Ever': { 'zh-TW': '曾經', 'zh-CN': '曾经', 'ja': 'かつて', 'ko': '한 번', 'es': 'Alguna vez', 'fr': 'Jamais', 'de': 'Jemals' }
};

console.log(`Dictionary: ${Object.keys(dict).length} words`);

// Escape single quotes
const escape = (s) => s.replace(/'/g, "\\'");

// Find en: section start and end
const enStart = content.indexOf('  en: [');
let bracketCount = 0;
let enEnd = enStart;
for (let i = enStart; i < content.length; i++) {
  if (content[i] === '[') bracketCount++;
  if (content[i] === ']') {
    bracketCount--;
    if (bracketCount === 0) {
      enEnd = i + 1;
      break;
    }
  }
}

console.log(`en: section: ${enStart} to ${enEnd}`);

// Extract the en: section
let enSection = content.substring(enStart, enEnd);

// Process enSection: for each word, find and replace the meanings block
// We need to do this carefully to avoid index shifting issues
// Approach: build a new enSection from scratch

// First, let's parse the enSection to extract the structure
// Actually, let's just do simple string replacement for each word
// For each word, the old meanings block has all languages with the same value (the Chinese translation)
// We can search for the pattern and replace it

let replaceCount = 0;

for (const [word, translations] of Object.entries(dict)) {
  // Find the word in enSection
  const wordPattern = `word: '${word}'`;
  const wordIndex = enSection.indexOf(wordPattern);
  
  if (wordIndex === -1) {
    console.log(`Warning: "${word}" not found in en section`);
    continue;
  }
  
  // Find the meanings block start
  const meaningsStart = enSection.indexOf('meanings: {', wordIndex);
  if (meaningsStart === -1) {
    console.log(`Warning: meanings block not found for "${word}"`);
    continue;
  }
  
  // Find the matching closing brace
  let braceCount = 1;
  let i = meaningsStart + 'meanings: {'.length;
  while (i < enSection.length && braceCount > 0) {
    if (enSection[i] === '{') braceCount++;
    if (enSection[i] === '}') braceCount--;
    i++;
  }
  const meaningsEnd = i;
  
  // Build the new meanings string
  const newMeanings = `meanings: {
      'zh-TW': '${escape(translations['zh-TW'])}',
      'zh-CN': '${escape(translations['zh-CN'])}',
      'en': '${escape(word)}',
      'ja': '${escape(translations['ja'])}',
      'ko': '${escape(translations['ko'])}',
      'es': '${escape(translations['es'])}',
      'fr': '${escape(translations['fr'])}',
      'de': '${escape(translations['de'])}'
    }`;
  
  // Replace
  enSection = enSection.substring(0, meaningsStart) + newMeanings + enSection.substring(meaningsEnd);
  
  replaceCount++;
  console.log(`Replaced: ${word}`);
}

console.log(`Total replacements: ${replaceCount}`);

// Replace the en: section in the content
content = content.substring(0, enStart) + enSection + content.substring(enEnd);

// Write back
fs.writeFileSync(filePath, content, 'utf8');
console.log('File updated successfully');
