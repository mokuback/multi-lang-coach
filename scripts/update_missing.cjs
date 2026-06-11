const fs = require('fs');

const path = 'd:/Antigravity_data/src/contexts/translations.js';
let content = fs.readFileSync(path, 'utf8');

const key = "'各單元提供的單字與句型僅是拋磚引玉的起點。在與 AI 對話實戰時，它會根據您的回答給予更豐富的道地用法建議。請務必善用「收錄至筆記本」功能，將那些對您有幫助的新字彙與句型存下來，建立專屬於您的個人語言庫！'";

const trans = {
  ja: "'各ユニットで提供される単語や文法は、ほんの始まりに過ぎません。AIとの実践的な会話では、あなたの回答に基づいてより豊かで自然な表現を提案します。「ノートに保存」機能を活用して、役立つ新しい語彙や文法を保存し、あなた専用の言語ライブラリを作成してください！'",
  ko: "'각 단원에서 제공하는 단어와 패턴은 단지 시작점에 불과합니다. AI와 실전 대화를 할 때, 여러분의 답변을 바탕으로 더 풍부하고 자연스러운 표현을 제안할 것입니다. \"노트에 저장\" 기능을 잘 활용하여 도움이 되는 새로운 어휘와 패턴을 저장하고, 여러분만의 개인 언어 라이브러리를 구축하세요!'",
  es: "'El vocabulario y los patrones proporcionados en cada unidad son solo el punto de partida. Durante las conversaciones prácticas con la IA, esta le sugerirá expresiones más ricas y auténticas basadas en sus respuestas. ¡Asegúrese de usar la función \"Guardar en la libreta\" para guardar las nuevas palabras y patrones útiles y crear su propia biblioteca de idiomas personal!'",
  fr: "'Le vocabulaire et les modèles de phrases fournis dans chaque unité ne sont qu\\'un point de départ. Lors des conversations pratiques avec l\\'IA, celle-ci vous suggérera des expressions plus riches et authentiques en fonction de vos réponses. Assurez-vous d\\'utiliser la fonction \"Enregistrer dans le carnet\" pour conserver les nouveaux mots et modèles utiles, et créer votre propre bibliothèque de langues personnalisée !'"
};

// Check and replace for each language
for (const [lang, translation] of Object.entries(trans)) {
  if (!content.includes(translation)) {
    // We look for the last entry in the block which is usually '載入中...'
    // But since the regex might be tricky, we can just replace `'載入中...': `
    // based on the language's specific loading string.
    let loadingStr = '';
    if (lang === 'ja') loadingStr = "'載入中...': '読み込み中...',";
    if (lang === 'ko') loadingStr = "'載入中...': '로딩 중...',";
    if (lang === 'es') loadingStr = "'載入中...': 'Cargando...',";
    if (lang === 'fr') loadingStr = "'載入中...': 'Chargement...',";

    if (content.includes(loadingStr)) {
      content = content.replace(loadingStr, `    ${key}: ${translation},\n    ${loadingStr}`);
      console.log(`Added missing translation for ${lang}`);
    } else {
      console.log(`Could not find loading string for ${lang}`);
    }
  } else {
    console.log(`${lang} translation already exists.`);
  }
}

fs.writeFileSync(path, content, 'utf8');
console.log('Update complete.');
