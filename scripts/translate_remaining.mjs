import { readFileSync, writeFileSync } from 'fs';

const filePath = 'src/data/curriculumData.ts';
let content = readFileSync(filePath, 'utf8');

const dict = {
  '早餐': { 'zh-TW': '早餐', 'zh-CN': '早餐', 'en': 'Breakfast', 'ja': '朝食', 'ko': '아침 식사', 'es': 'Desayuno', 'fr': 'Petit-déjeuner', 'de': 'Frühstück' },
  '電影': { 'zh-TW': '電影', 'zh-CN': '电影', 'en': 'Movie', 'ja': '映画', 'ko': '영화', 'es': 'Película', 'fr': 'Film', 'de': 'Film' },
  '忙碌的': { 'zh-TW': '忙碌的', 'zh-CN': '忙碌的', 'en': 'Busy', 'ja': '忙しい', 'ko': '바쁜', 'es': 'Ocupado', 'fr': 'Occupé', 'de': 'Beschäftigt' },
  '閒暇的': { 'zh-TW': '閒暇的', 'zh-CN': '闲暇的', 'en': 'Free time', 'ja': '暇な', 'ko': '여유로운', 'es': 'Libre', 'fr': 'Libre', 'de': 'Frei' },
  '想要的': { 'zh-TW': '想要的', 'zh-CN': '想要的', 'en': 'Wanted', 'ja': '欲しい', 'ko': '원하는', 'es': 'Deseado', 'fr': 'Voulu', 'de': 'Gewollt' },
  '車子': { 'zh-TW': '車子', 'zh-CN': '车子', 'en': 'Car', 'ja': '車', 'ko': '자동차', 'es': 'Coche', 'fr': 'Voiture', 'de': 'Auto' },
  '新的': { 'zh-TW': '新的', 'zh-CN': '新的', 'en': 'New', 'ja': '新しい', 'ko': '새로운', 'es': 'Nuevo', 'fr': 'Nouveau', 'de': 'Neu' },
  '買': { 'zh-TW': '買', 'zh-CN': '买', 'en': 'Buy', 'ja': '買う', 'ko': '사다', 'es': 'Comprar', 'fr': 'Acheter', 'de': 'Kaufen' },
  '喂': { 'zh-TW': '喂', 'zh-CN': '喂', 'en': 'Hello (phone)', 'ja': 'もしもし', 'ko': '여보세요', 'es': 'Aló', 'fr': 'Allô', 'de': 'Hallo' },
  '電話': { 'zh-TW': '電話', 'zh-CN': '电话', 'en': 'Phone', 'ja': '電話', 'ko': '전화', 'es': 'Teléfono', 'fr': 'Téléphone', 'de': 'Telefon' },
  '麻煩您了': { 'zh-TW': '麻煩您了', 'zh-CN': '麻烦您了', 'en': 'Thank you for your trouble', 'ja': 'お手数をおかけします', 'ko': '신세 집니다', 'es': 'Gracias por su molestia', 'fr': 'Merci de votre aide', 'de': 'Danke für die Mühe' },
  '會議': { 'zh-TW': '會議', 'zh-CN': '会议', 'en': 'Meeting', 'ja': '会議', 'ko': '회의', 'es': 'Reunión', 'fr': 'Réunion', 'de': 'Besprechung' },
  '幫忙': { 'zh-TW': '幫忙', 'zh-CN': '帮忙', 'en': 'Help', 'ja': '手伝い', 'ko': '도움', 'es': 'Ayuda', 'fr': 'Aide', 'de': 'Hilfe' },
  '使用': { 'zh-TW': '使用', 'zh-CN': '使用', 'en': 'Use', 'ja': '使う', 'ko': '사용', 'es': 'Usar', 'fr': 'Utiliser', 'de': 'Benutzen' },
  '請': { 'zh-TW': '請', 'zh-CN': '请', 'en': 'Please', 'ja': 'ください', 'ko': '제발', 'es': 'Por favor', 'fr': 'S\'il vous plaît', 'de': 'Bitte' },
  '可以嗎': { 'zh-TW': '可以嗎', 'zh-CN': '可以吗', 'en': 'May I?', 'ja': 'いいですか？', 'ko': '되나요?', 'es': '¿Puedo?', 'fr': 'Puis-je?', 'de': 'Darf ich?' },
  '熱的': { 'zh-TW': '熱的', 'zh-CN': '热的', 'en': 'Hot', 'ja': '暑い', 'ko': '더운', 'es': 'Caliente', 'fr': 'Chaud', 'de': 'Heiß' },
  '冷的': { 'zh-TW': '冷的', 'zh-CN': '冷的', 'en': 'Cold', 'ja': '寒い', 'ko': '추운', 'es': 'Frío', 'fr': 'Froid', 'de': 'Kalt' },
  '變成': { 'zh-TW': '變成', 'zh-CN': '变成', 'en': 'Become', 'ja': 'なる', 'ko': '되다', 'es': 'Convertirse en', 'fr': 'Devenir', 'de': 'Werden' },
  '哪一邊': { 'zh-TW': '哪一邊', 'zh-CN': '哪一边', 'en': 'Which side', 'ja': 'どちら', 'ko': '어느 쪽', 'es': 'Qué lado', 'fr': 'Quel côté', 'de': 'Welche Seite' },
  '比...': { 'zh-TW': '比...', 'zh-CN': '比...', 'en': 'Compared to...', 'ja': '…より', 'ko': '…보다', 'es': 'Comparado con...', 'fr': 'Comparé à...', 'de': 'Im Vergleich zu...' },
  '學習': { 'zh-TW': '學習', 'zh-CN': '学习', 'en': 'Study', 'ja': '勉強', 'ko': '공부', 'es': 'Estudio', 'fr': 'Étude', 'de': 'Studium' },
  '比較好': { 'zh-TW': '比較好', 'zh-CN': '比较好', 'en': 'Better', 'ja': 'より良い', 'ko': '더 낫다', 'es': 'Mejor', 'fr': 'Meilleur', 'de': 'Besser' },
  '有': { 'zh-TW': '有', 'zh-CN': '有', 'en': 'Have', 'ja': 'ある', 'ko': '있다', 'es': 'Tener', 'fr': 'Avoir', 'de': 'Haben' },
  '名字': { 'zh-TW': '名字', 'zh-CN': '名字', 'en': 'Name', 'ja': '名前', 'ko': '이름', 'es': 'Nombre', 'fr': 'Nom', 'de': 'Name' },
  '好的/高興的': { 'zh-TW': '好的/高興的', 'zh-CN': '好的/高兴的', 'en': 'Good / Happy', 'ja': '良い / 嬉しい', 'ko': '좋은 / 기쁜', 'es': 'Bueno / Feliz', 'fr': 'Bon / Heureux', 'de': 'Gut / Glücklich' },
  '遇見': { 'zh-TW': '遇見', 'zh-CN': '遇见', 'en': 'Meet', 'ja': '会う', 'ko': '만나다', 'es': 'Conocer', 'fr': 'Rencontrer', 'de': 'Treffen' },
  '台灣': { 'zh-TW': '台灣', 'zh-CN': '台湾', 'en': 'Taiwan', 'ja': '台湾', 'ko': '대만', 'es': 'Taiwán', 'fr': 'Taïwan', 'de': 'Taiwan' },
  '美國': { 'zh-TW': '美國', 'zh-CN': '美国', 'en': 'America', 'ja': 'アメリカ', 'ko': '미국', 'es': 'Estados Unidos', 'fr': 'Amérique', 'de': 'Amerika' },
  '辦公室': { 'zh-TW': '辦公室', 'zh-CN': '办公室', 'en': 'Office', 'ja': 'オフィス', 'ko': '사무실', 'es': 'Oficina', 'fr': 'Bureau', 'de': 'Büro' },
  '收據': { 'zh-TW': '收據', 'zh-CN': '收据', 'en': 'Receipt', 'ja': 'レシート', 'ko': '영수증', 'es': 'Recibo', 'fr': 'Reçu', 'de': 'Quittung' },
  '時鐘': { 'zh-TW': '時鐘', 'zh-CN': '时钟', 'en': 'Clock', 'ja': '時計', 'ko': '시계', 'es': 'Reloj', 'fr': 'Horloge', 'de': 'Uhr' },
  '睡覺': { 'zh-TW': '睡覺', 'zh-CN': '睡觉', 'en': 'Sleep', 'ja': '寝る', 'ko': '자다', 'es': 'Dormir', 'fr': 'Dormir', 'de': 'Schlafen' },
  '喜歡': { 'zh-TW': '喜歡', 'zh-CN': '喜欢', 'en': 'Like', 'ja': '好き', 'ko': '좋아하다', 'es': 'Gustar', 'fr': 'Aimer', 'de': 'Mögen' },
  '愛/很喜歡': { 'zh-TW': '愛/很喜歡', 'zh-CN': '爱/很喜欢', 'en': 'Love', 'ja': '大好き', 'ko': '사랑하다', 'es': 'Amar', 'fr': 'Aimer beaucoup', 'de': 'Lieben' },
  '討厭': { 'zh-TW': '討厭', 'zh-CN': '讨厌', 'en': 'Dislike', 'ja': '嫌い', 'ko': '싫다', 'es': 'No gustar', 'fr': 'Détester', 'de': 'Nicht mögen' },
  '食物': { 'zh-TW': '食物', 'zh-CN': '食物', 'en': 'Food', 'ja': '食べ物', 'ko': '음식', 'es': 'Comida', 'fr': 'Nourriture', 'de': 'Essen' },
  '音樂': { 'zh-TW': '音樂', 'zh-CN': '音乐', 'en': 'Music', 'ja': '音楽', 'ko': '음악', 'es': 'Música', 'fr': 'Musique', 'de': 'Musik' },
  '會/能夠': { 'zh-TW': '會/能夠', 'zh-CN': '会/能够', 'en': 'Can', 'ja': 'できる', 'ko': '할 수 있다', 'es': 'Poder', 'fr': 'Pouvoir', 'de': 'Können' },
  '說': { 'zh-TW': '說', 'zh-CN': '说', 'en': 'Say', 'ja': '言う', 'ko': '말하다', 'es': 'Decir', 'fr': 'Dire', 'de': 'Sagen' },
  '游泳': { 'zh-TW': '游泳', 'zh-CN': '游泳', 'en': 'Swim', 'ja': '泳ぐ', 'ko': '수영하다', 'es': 'Nadar', 'fr': 'Nager', 'de': 'Schwimmen' },
  '玩/演奏': { 'zh-TW': '玩/演奏', 'zh-CN': '玩/演奏', 'en': 'Play', 'ja': '遊ぶ / 演奏する', 'ko': '놀다 / 연주하다', 'es': 'Jugar / Tocar', 'fr': 'Jouer', 'de': 'Spielen' },
  '英文': { 'zh-TW': '英文', 'zh-CN': '英文', 'en': 'English', 'ja': '英語', 'ko': '영어', 'es': 'Inglés', 'fr': 'Anglais', 'de': 'Englisch' },
  '去(過去式)': { 'zh-TW': '去(過去式)', 'zh-CN': '去(过去式)', 'en': 'Went', 'ja': '行った', 'ko': '갔다', 'es': 'Fui', 'fr': 'Suis allé', 'de': 'Ging' },
  '看(過去式)': { 'zh-TW': '看(過去式)', 'zh-CN': '看(过去式)', 'en': 'Saw', 'ja': '見た', 'ko': '봤다', 'es': 'Vi', 'fr': 'Ai vu', 'de': 'Sah' },
  '吃(過去式)': { 'zh-TW': '吃(過去式)', 'zh-CN': '吃(过去式)', 'en': 'Ate', 'ja': '食べた', 'ko': '먹었다', 'es': 'Comí', 'fr': 'Ai mangé', 'de': 'Aß' },
  '明年': { 'zh-TW': '明年', 'zh-CN': '明年', 'en': 'Next year', 'ja': '来年', 'ko': '내년', 'es': 'El próximo año', 'fr': 'L\'année prochaine', 'de': 'Nächstes Jahr' },
  '將要': { 'zh-TW': '將要', 'zh-CN': '将要', 'en': 'Will', 'ja': '～するつもり', 'ko': '～할 것이다', 'es': 'Voy a', 'fr': 'Vais', 'de': 'Werde' },
  '將會': { 'zh-TW': '將會', 'zh-CN': '将会', 'en': 'Will', 'ja': '～だろう', 'ko': '～할 것이다', 'es': 'Será', 'fr': 'Sera', 'de': 'Wird' },
  '旅行': { 'zh-TW': '旅行', 'zh-CN': '旅行', 'en': 'Travel', 'ja': '旅行', 'ko': '여행', 'es': 'Viaje', 'fr': 'Voyage', 'de': 'Reise' },
  '打電話': { 'zh-TW': '打電話', 'zh-CN': '打电话', 'en': 'Make a phone call', 'ja': '電話をかける', 'ko': '전화를 걸다', 'es': 'Hacer una llamada', 'fr': 'Passer un appel', 'de': 'Anrufen' },
  '訊息/留言': { 'zh-TW': '訊息/留言', 'zh-CN': '讯息/留言', 'en': 'Message', 'ja': 'メッセージ', 'ko': '메시지', 'es': 'Mensaje', 'fr': 'Message', 'de': 'Nachricht' },
  '借(入)': { 'zh-TW': '借(入)', 'zh-CN': '借(入)', 'en': 'Borrow', 'ja': '借りる', 'ko': '빌리다', 'es': 'Pedir prestado', 'fr': 'Emprunter', 'de': 'Leihen' },
  '幫助': { 'zh-TW': '幫助', 'zh-CN': '帮助', 'en': 'Help (verb)', 'ja': '助ける', 'ko': '돕다', 'es': 'Ayudar', 'fr': 'Aider', 'de': 'Helfen' },
  '當然': { 'zh-TW': '當然', 'zh-CN': '当然', 'en': 'Of course', 'ja': 'もちろん', 'ko': '물론', 'es': 'Claro', 'fr': 'Bien sûr', 'de': 'Natürlich' },
  '問題': { 'zh-TW': '問題', 'zh-CN': '问题', 'en': 'Question', 'ja': '質問', 'ko': '질문', 'es': 'Pregunta', 'fr': 'Question', 'de': 'Frage' },
  '更好的': { 'zh-TW': '更好的', 'zh-CN': '更好的', 'en': 'Better', 'ja': 'もっと良い', 'ko': '더 나은', 'es': 'Mejor', 'fr': 'Meilleur', 'de': 'Besser' },
  '更快的': { 'zh-TW': '更快的', 'zh-CN': '更快的', 'en': 'Faster', 'ja': 'もっと速い', 'ko': '더 빠른', 'es': 'Más rápido', 'fr': 'Plus rapide', 'de': 'Schneller' },
  '便宜的': { 'zh-TW': '便宜的', 'zh-CN': '便宜的', 'en': 'Cheap', 'ja': '安い', 'ko': '싼', 'es': 'Barato', 'fr': 'Bon marché', 'de': 'Billig' },
  '昂貴的': { 'zh-TW': '昂貴的', 'zh-CN': '昂貴的', 'en': 'Expensive', 'ja': '高い', 'ko': '비싼', 'es': 'Caro', 'fr': 'Cher', 'de': 'Teuer' },
  '比': { 'zh-TW': '比', 'zh-CN': '比', 'en': 'Than', 'ja': 'より', 'ko': '보다', 'es': 'Que', 'fr': 'Que', 'de': 'Als' },
  '應該': { 'zh-TW': '應該', 'zh-CN': '应该', 'en': 'Should', 'ja': 'べき', 'ko': '해야 한다', 'es': 'Debería', 'fr': 'Devrait', 'de': 'Sollte' },
  '主意': { 'zh-TW': '主意', 'zh-CN': '主意', 'en': 'Idea', 'ja': 'アイデア', 'ko': '아이디어', 'es': 'Idea', 'fr': 'Idée', 'de': 'Idee' },
  '嘗試': { 'zh-TW': '嘗試', 'zh-CN': '尝试', 'en': 'Try', 'ja': '試す', 'ko': '시도하다', 'es': 'Intentar', 'fr': 'Essayer', 'de': 'Versuchen' },
  '休息': { 'zh-TW': '休息', 'zh-CN': '休息', 'en': 'Rest', 'ja': '休む', 'ko': '쉬다', 'es': 'Descansar', 'fr': 'Se reposer', 'de': 'Ruhe' },
  '經驗': { 'zh-TW': '經驗', 'zh-CN': '经验', 'en': 'Experience', 'ja': '経験', 'ko': '경험', 'es': 'Experiencia', 'fr': 'Expérience', 'de': 'Erfahrung' },
  '感覺': { 'zh-TW': '感覺', 'zh-CN': '感觉', 'en': 'Feel', 'ja': '感じる', 'ko': '느끼다', 'es': 'Sentir', 'fr': 'Sentir', 'de': 'Fühlen' },
  '疲倦的': { 'zh-TW': '疲倦的', 'zh-CN': '疲倦的', 'en': 'Tired', 'ja': '疲れた', 'ko': '피곤한', 'es': 'Cansado', 'fr': 'Fatigué', 'de': 'Müde' },
  '興奮的': { 'zh-TW': '興奮的', 'zh-CN': '兴奋的', 'en': 'Excited', 'ja': '興奮した', 'ko': '흥분한', 'es': 'Emocionado', 'fr': 'Excité', 'de': 'Aufgeregt' },
  '曾經': { 'zh-TW': '曾經', 'zh-CN': '曾经', 'en': 'Ever', 'ja': '～たことがある', 'ko': '～한 적이 있다', 'es': 'Alguna vez', 'fr': 'Déjà', 'de': 'Schon einmal' },
};

console.log('Dictionary size:', Object.keys(dict).length);

const esc = (s) => s.replace(/'/g, "\\'");

let replacements = [];
let offset = 0;

while (offset < content.length) {
  const start = content.indexOf('meanings: {', offset);
  if (start === -1) break;

  let braceCount = 1;
  let i = start + 'meanings: {'.length;
  while (i < content.length && braceCount > 0) {
    if (content[i] === '{') braceCount++;
    if (content[i] === '}') braceCount--;
    i++;
  }
  const end = i;
  const block = content.substring(start, end);
  const zhTW = block.match(/'zh-TW':\s*'([^']+)'/);
  const fr = block.match(/'fr':\s*'([^']+)'/);

  if (zhTW && dict[zhTW[1]] && fr && /[\u4e00-\u9fff]/.test(fr[1])) {
    const t = dict[zhTW[1]];
    const newBlock = `meanings: {
      'zh-TW': '${esc(t['zh-TW'])}',
      'zh-CN': '${esc(t['zh-CN'])}',
      'en': '${esc(t['en'])}',
      'ja': '${esc(t['ja'])}',
      'ko': '${esc(t['ko'])}',
      'es': '${esc(t['es'])}',
      'fr': '${esc(t['fr'])}',
      'de': '${esc(t['de'])}'
    }`;
    replacements.push({ start, end, text: newBlock });
  }
  offset = end;
}

console.log('Replacements to apply:', replacements.length);

replacements.sort((a, b) => b.start - a.start);
for (const r of replacements) {
  content = content.substring(0, r.start) + r.text + content.substring(r.end);
}

writeFileSync(filePath, content, 'utf8');
console.log('Done! Applied', replacements.length, 'translations.');
