const fs = require('fs');

const path = 'd:/Antigravity_data/src/contexts/translations.js';
let content = fs.readFileSync(path, 'utf8');

const key = "'各單元提供的單字與句型僅是拋磚引玉的起點。在與 AI 對話實戰時，它會根據您的回答給予更豐富的道地用法建議。請務必善用「收錄至筆記本」功能，將那些對您有幫助的新字彙與句型存下來，建立專屬於您的個人語言庫！'";
const translation = "'Le vocabulaire et les modèles de phrases fournis dans chaque unité ne sont qu\\'un point de départ. Lors des conversations pratiques avec l\\'IA, celle-ci vous suggérera des expressions plus riches et authentiques en fonction de vos réponses. Assurez-vous d\\'utiliser la fonction \"Enregistrer dans le carnet\" pour conserver les nouveaux mots et modèles utiles, et créer votre propre bibliothèque de langues personnalisée !'";

if (content.includes("'載入中...': 'Chargement...'")) {
  content = content.replace("'載入中...': 'Chargement...'", `${key}: ${translation},\n    '載入中...': 'Chargement...'`);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Update complete.');
} else {
  console.log('Target string not found.');
}
