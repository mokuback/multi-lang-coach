const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const appRouterPath = path.join(__dirname, '..', 'src', 'AppRouter.tsx');

function migrateFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('useAppState')) return;

  // We already migrated AppRouter, Settings, Sidebar
  if (filePath.includes('AppRouter') || filePath.includes('Settings') || filePath.includes('Sidebar')) return;

  // Replace import
  content = content.replace(
    /import\s+\{\s*useAppState\s*\}\s+from\s+['"]\.\.\/contexts\/AppStateContext['"];/g,
    `import { useSettingsStore } from '../store/useSettingsStore';
import { useSessionStore } from '../store/useSessionStore';
import { useVocabulary } from '../hooks/useVocabulary';
import { usePatterns } from '../hooks/usePatterns';
import { useProgress } from '../hooks/useProgress';`
  );
  
  // Dashboard.tsx
  if (filePath.includes('Dashboard.tsx')) {
    content = content.replace(
      /const\s*\{\s*state:\s*\{\s*targetLanguage,\s*userRole,\s*userCategory,\s*vocabulary,\s*progress\s*\},\s*updateProgress\s*\}\s*=\s*useAppState\(\);/g,
      `const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const userRole = useSettingsStore(s => s.userRole);
  const userCategory = useSettingsStore(s => s.userCategory);
  const { vocabulary } = useVocabulary();
  const { progress, updateProgress } = useProgress();`
    );
  }

  // Curriculum.tsx
  if (filePath.includes('Curriculum.tsx')) {
    content = content.replace(
      /const\s*\{\s*state:\s*\{\s*targetLanguage,\s*speechRate\s*\}\s*\}\s*=\s*useAppState\(\);/g,
      `const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const speechRate = useSettingsStore(s => s.speechRate);`
    );
  }

  // Notebook.tsx
  if (filePath.includes('Notebook.tsx')) {
    content = content.replace(
      /const\s*\{\s*state:\s*\{\s*vocabulary,\s*targetLanguage,\s*speechRate\s*\},\s*setVocabulary\s*\}\s*=\s*useAppState\(\);/g,
      `const { vocabulary, setVocabulary } = useVocabulary();
  const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const speechRate = useSettingsStore(s => s.speechRate);`
    );
  }

  // PatternNotebook.tsx
  if (filePath.includes('PatternNotebook.tsx')) {
    content = content.replace(
      /const\s*\{\s*state:\s*\{\s*savedPatterns,\s*targetLanguage,\s*speechRate\s*\},\s*setSavedPatterns\s*\}\s*=\s*useAppState\(\);/g,
      `const { savedPatterns, setSavedPatterns } = usePatterns();
  const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const speechRate = useSettingsStore(s => s.speechRate);`
    );
  }

  // Patterns.tsx
  if (filePath.includes('Patterns.tsx')) {
    content = content.replace(
      /const\s*\{\s*state:\s*\{\s*targetLanguage,\s*patternVersion,\s*userCategory,\s*userRole,\s*uiTheme\s*\}\s*\}\s*=\s*useAppState\(\);/g,
      `const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const patternVersion = useSettingsStore(s => s.patternVersion);
  const userCategory = useSettingsStore(s => s.userCategory);
  const userRole = useSettingsStore(s => s.userRole);
  const uiTheme = useSettingsStore(s => s.uiTheme);`
    );
  }

  // ChatWrapper.tsx
  if (filePath.includes('ChatWrapper.tsx')) {
    content = content.replace(
      /const\s*\{\s*state:\s*\{\s*userRole,\s*userLevel,\s*targetLanguage,\s*currentScenario\s*\}\s*\}\s*=\s*useAppState\(\);/g,
      `const userRole = useSettingsStore(s => s.userRole);
  const userLevel = useSettingsStore(s => s.userLevel);
  const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const currentScenario = useSessionStore(s => s.currentScenario);`
    );
  }

  // ChatLearningModal.tsx
  if (filePath.includes('ChatLearningModal.tsx')) {
    content = content.replace(
      /const\s*\{\s*state:\s*\{\s*targetLanguage\s*\},\s*setVocabulary,\s*setSavedPatterns\s*\}\s*=\s*useAppState\(\);/g,
      `const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const { setVocabulary } = useVocabulary();
  const { setSavedPatterns } = usePatterns();`
    );
  }

  // Chat.tsx
  if (filePath.includes('Chat.tsx')) {
    content = content.replace(
      /const\s*\{\s*state:\s*\{\s*apiProvider,\s*apiModel,\s*apiKey,\s*targetLanguage,\s*userCategory,\s*userRole,\s*userLevel,\s*speechRate,\s*autoRead,\s*patternVersion,\s*androidSmartSpeech,\s*correctionMode\s*\},\s*setVocabulary,\s*setSavedPatterns\s*\}\s*=\s*useAppState\(\);/g,
      `const apiProvider = useSettingsStore(s => s.apiProvider);
  const apiModel = useSettingsStore(s => s.apiModel);
  const apiKey = useSettingsStore(s => s.apiKey);
  const targetLanguage = useSettingsStore(s => s.targetLanguage);
  const userCategory = useSettingsStore(s => s.userCategory);
  const userRole = useSettingsStore(s => s.userRole);
  const userLevel = useSettingsStore(s => s.userLevel);
  const speechRate = useSettingsStore(s => s.speechRate);
  const autoRead = useSettingsStore(s => s.autoRead);
  const patternVersion = useSettingsStore(s => s.patternVersion);
  const androidSmartSpeech = useSettingsStore(s => s.androidSmartSpeech);
  const correctionMode = useSettingsStore(s => s.correctionMode);
  const { setVocabulary } = useVocabulary();
  const { setSavedPatterns } = usePatterns();`
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
}

fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    migrateFile(path.join(componentsDir, file));
  }
});
