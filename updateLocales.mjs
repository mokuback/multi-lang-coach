import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const newKeys = {
  '基礎教科書版 (適合初學)': {
    en: 'Textbook Version (Beginner)',
    ja: '基礎教科書版 (初心者向け)',
    ko: '기초 교과서 버전 (초보자용)',
    es: 'Versión de libro de texto (Principiante)',
    fr: 'Version manuel scolaire (Débutant)'
  },
  '進階商務版 (母語者思維)': {
    en: 'Advanced Business (Native Thinking)',
    ja: '上級ビジネス版 (ネイティブの思考)',
    ko: '고급 비즈니스 (원어민 사고)',
    es: 'Negocios avanzado (Pensamiento nativo)',
    fr: 'Affaires avancé (Pensée native)'
  },
  '情境篩選：': {
    en: 'Scenario Filter:',
    ja: 'シチュエーションフィルター：',
    ko: '상황 필터:',
    es: 'Filtro de escenario:',
    fr: 'Filtre de scénario :'
  },
  '為您精選最關鍵的母語人士常用句型。點擊進入代換練習模式！': {
    en: 'Selected essential patterns used by native speakers. Click to enter drill mode!',
    ja: 'ネイティブスピーカーがよく使う重要な文法を厳選しました。クリックして練習モードに入ります！',
    ko: '원어민이 자주 사용하는 필수 패턴을 엄선했습니다. 클릭하여 연습 모드로 들어가세요!',
    es: 'Patrones esenciales seleccionados usados por hablantes nativos. ¡Haz clic para entrar al modo de práctica!',
    fr: 'Modèles essentiels sélectionnés utilisés par des locuteurs natifs. Cliquez pour entrer dans le mode de pratique !'
  }
};

const locales = ['en', 'ja', 'ko', 'es', 'fr'];
const targetDir = path.join(__dirname, 'src', 'locales');

locales.forEach(lang => {
  const filePath = path.join(targetDir, `${lang}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let updated = false;
    for (const [key, translations] of Object.entries(newKeys)) {
      if (!data[key] || data[key] !== translations[lang]) {
        data[key] = translations[lang];
        updated = true;
      }
    }
    if (updated) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
console.log('Update complete.');
