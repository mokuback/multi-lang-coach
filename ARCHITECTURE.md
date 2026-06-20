# Multi-Lang Coach 專案架構分析（2026-06-21）

## 1. 技術棧

| 層面 | 技術 |
|------|------|
| 框架 | React 19 + TypeScript 6 + Vite 8 |
| 路由 | React Router v7（BrowserRouter，AppRouter.tsx 集中管理） |
| 狀態管理 | Zustand（設定持久化） + IndexedDB（學習資料） + localStorage |
| UI 主題 | Glassmorphism（`uiTheme` 切換） |
| AI 整合 | 自訂 LLM Provider 工廠（Gemini / Groq） |
| 測試 | Vitest + Testing Library |
| 依賴 | canvas-confetti、html2pdf.js、lucide-react、react-markdown |

---

## 2. 目錄結構

```
src/
├── AppRouter.tsx              # 路由集中管理（13條路由）
├── main.tsx                  # 入口
├── components/
│   ├── Sidebar.tsx           # 側邊欄
│   ├── Dashboard.tsx         # 學習儀表板
│   ├── ChatWrapper.tsx       # Chat 頁面容器（含 Chat.tsx + ChatLearningModal）
│   ├── Chat.tsx              # 核心對話引擎（70KB，含 TTS、語音辨識、Mock AI）
│   ├── ChatExportModal.tsx   # Chat 導出彈窗
│   ├── ChatLearningModal.tsx # 單字/句型收藏彈窗
│   ├── Notebook.tsx          # 單字筆記本
│   ├── PatternNotebook.tsx   # 句型筆記本
│   ├── Patterns.tsx          # 場景句型瀏覽頁
│   ├── Curriculum.tsx        # 課程單元頁（闖關練習入口）
│   ├── Home.tsx              # 首頁
│   ├── Guide.tsx             # 使用說明
│   ├── Settings.tsx          # 設定頁（API key / 語言 / 主題）
│   ├── GlassSelect.tsx       # 玻璃質感下拉選單
│   ├── Footer.tsx            # 頁尾
│   └── pages/                # 靜態頁面（About / Privacy / Contact）
├── contexts/
│   └── I18nContext.tsx       # i18n 提供者（import.meta.glob 自動載入 locales/）
├── hooks/
│   ├── useVocabulary.ts      # 單字筆記 CRUD（IndexedDB）
│   ├── usePatterns.ts        # 句型收藏 CRUD（IndexedDB）
│   └── useProgress.ts        # 學習進度追蹤
├── store/
│   ├── useSettingsStore.ts   # Zustand 持久化設定（localStorage）
│   └── useSessionStore.ts    # 對話 session 狀態
├── utils/
│   ├── languageMap.ts         # ⚠️ 語言參數中央管理器（BCP 47 / TTS / Whisper / 動態標籤）
│   ├── idbStorage.ts         # IndexedDB 封裝
│   ├── llmClient.ts          # LLM API 統一客戶端
│   ├── pdfExporter.ts        # PDF 導出
│   └── llm/
│       ├── BaseProvider.ts   # LLM Provider 抽象基類
│       ├── GeminiProvider.ts # Gemini API 實現
│       ├── GroqProvider.ts   # Groq API 實現
│       └── ProviderFactory.ts # Provider 工廠
├── prompts/
│   ├── chat.ts               # 對話系統提示詞（含 responseLangRule 動態化）
│   ├── analyze.ts            # 單字分析提示詞
│   ├── polish.ts             # 句型潤飾提示詞
│   ├── conversation.ts       # 對話總結提示詞
│   ├── types.ts              # PromptContext 介面
│   └── index.ts              # 統一導出
├── locales/                   # UI 翻譯（8語言，770條 key）
│   ├── zh-TW.json / zh-CN.json / en.json / ja.json / ko.json
│   └── es.json / fr.json / de.json
├── data/
│   ├── curriculumData.ts     # 課程資料獲取（fetch from public/data/curriculum/）
│   ├── scenarioPatterns/
│   │   └── index.js          # 場景句型資料獲取（fetch from public/data/scenarioPatterns/）
│   ├── categoryData.ts        # 類別/角色/難度元資料
│   ├── chatGreetings.json    # AI 開場白
│   ├── scenariosData.ts       # 場景元資料
│   └── user_guide_*.md       # 多語言使用說明文件
└── types/
    └── index.ts              # VocabularyItem / PatternItem / UserSettings 等核心介面

public/data/
├── curriculum/               # 動態載入的課程 JSON（4語言）
│   ├── en.json / ja.json / ko.json / zh-CN.json
└── scenarioPatterns/        # 場景句型（1320條，合併版）
    ├── 01.json               # 660 條（日常場景）
    └── 02.json               # 660 條（專業場景）
```

---

## 3. 語言系統（核心架構）

### 3.1 雙語言維度

| 維度 | 用途 | 實作 |
|------|------|------|
| **目標學習語言**（targetLanguage） | 使用者想要學習的語言 | Settings 設定，動態影響 AI prompt、TTS、Whisper |
| **UI 介面語言**（uiLang） | 教練回覆和 UI 的語言 | I18nContext 動態切換 |

### 3.2 支援語言矩陣

| 語言 | UI 語言 | 目標學習語言 | 備註 |
|------|---------|-------------|------|
| zh-TW | ✅ | ❌ | 繁體中文（預設） |
| zh-CN | ✅ | ✅ | 簡體中文（新增） |
| en | ✅ | ✅ | 英文 |
| ja | ✅ | ✅ | 日文 |
| ko | ✅ | ✅ | 韓文（新增） |
| es | ✅ | ❌ | 西班牙文 |
| fr | ✅ | ❌ | 法文 |
| de | ✅ | ❌ | 德文（新增） |

### 3.3 `languageMap.ts` — 中央語言參數管理器

```
LANGUAGE_MAP[langId]
  ├── ttsLangCode     → TTS BCP 47 標籤
  ├── whisperLang     → Whisper API 參數
  ├── targetLabel     → 目標語言顯示名（依 UI 語言動態化）
  ├── phoneticFormat   → 提示詞用音標格式指令
  ├── partOfSpeechFormat → 提示詞用詞性格式指令
  └── termLabel       → 術語標籤（依 UI 語言動態化）

工具函數：
  getTtsCode() / getWhisperLang() / getLangName()
  getPhoneticFormat() / getPartOfSpeechFormat()
  getTargetLanguages() / isTarget() / isUiLang()
```

---

## 4. 資料流架構

### 4.1 設定持久化（Zustand + localStorage）
```
useSettingsStore (Zustand)
  ├── apiProvider / apiModel / apiKey
  ├── targetLanguage / uiLang / patternVersion
  ├── userCategory / userRole / userLevel
  └── uiTheme / speechRate / autoRead / correctionMode
```

### 4.2 學習資料持久化（IndexedDB）
```
useVocabulary (IndexedDB: "vocabulary")
  └── VocabularyItem[]  { term, meaning, example, phonetic, partOfSpeech, lang }

usePatterns (IndexedDB: "patterns")
  └── PatternItem[]  { pattern, explanation, example, lang }

useProgress (IndexedDB: "progress")
  └── LearningProgress  { streak, completedScenarios, lastDate }
```

### 4.3 動態載入 JSON（public/data/）
```
curriculumData.ts  → fetch(`/data/curriculum/${targetLanguage}.json`)
  └── 4份 JSON（en / ja / ko / zh-CN），各含 15 個單元 × 4 種練習

scenarioPatterns/index.js → fetch(`/data/scenarioPatterns/${version}.json`)
  └── 01.json（660條日常） / 02.json（660條專業）
```

---

## 5. 路由架構（AppRouter.tsx）

```
/                    → redirect to /home
/home                → Home.tsx（歡迎頁）
/guide               → Guide.tsx（使用說明）
/curriculum          → Curriculum.tsx（課程單元 + 闖關練習入口）
/dashboard           → Dashboard.tsx（學習儀表板）
/chat                → ChatWrapper.tsx（核心對話頁）
  ├── Chat.tsx                   （AI 對話引擎 + TTS + 語音辨識）
  └── ChatLearningModal.tsx      （單字/句型收藏彈窗）
/notebook            → Notebook.tsx（單字筆記本）
/pattern-notebook    → PatternNotebook.tsx（句型筆記本）
/patterns            → Patterns.tsx（場景句型瀏覽）
/settings            → Settings.tsx（設定頁）
/about               → AboutUs.tsx
/privacy             → PrivacyPolicy.tsx
/contact             → ContactUs.tsx
```

---

## 6. AI 提示詞系統（prompts/）

### 6.1 動態化策略

所有提示詞已移除硬編碼語言判斷，改用 `languageMap.ts` 工具函數動態獲取參數：

- `buildChatSystemPrompt()` — 使用 `getLangName(uiLang)`、`getPhoneticFormat(targetLanguage)` 等
- `responseLangRule` — 依 `ctx.uiLang` 動態生成回覆語言約束（共8種分支）
- `lengthInstruction` — 依 `ctx.userLevel`（beginner / pre-intermediate / intermediate / advanced）調整回覆長度

### 6.2 提示詞類型

| 檔案 | 用途 |
|------|------|
| chat.ts | 教練對話回覆（JSON: content / translation / correction / extractedVocab） |
| analyze.ts | 單字分析 |
| polish.ts | 句型潤飾 |
| conversation.ts | 對話總結 |

### 6.3 Chat.tsx 的 Mock AI

- `getMockAIResponse()` 針對 5 種目標語言（en / ja / zh-TW / zh-CN / ko）各提供 3 種情境的 Mock 回覆
- zh-TW / zh-CN / ko Mock 回覆於 2026-06-19 新增

---

## 7. LLM Provider 工廠架構

```
llmClient.ts（統一 API）
    └── ProviderFactory
            ├── GeminiProvider  → Gemini API
            └── GroqProvider    → Groq API（Llama-3.1-8B-Instant 等）
```

---

## 8. 多語言 UI 系統（I18nContext.tsx）

- `import.meta.glob('*.json', { eager: true })` 自動載入所有 8 個語言檔
- `useI18n().t(key)` 讀取 UI 翻譯
- **與目標學習語言無關** — UI 翻譯只用於介面，不影響 AI 回覆語言

---

## 9. 測試現況

```
vitest run → 11/11 測試通過
測試檔案：
  ├── utils/llmClient.test.ts
  └── components/（未見測試檔）
```

---

## 10. 已知限制與待處理項目

| 項目 | 狀態 | 說明 |
|------|------|------|
| scenarioPatterns 德文翻譯 | ❌ 未完成 | 02_chunk2 仍在翻譯中，部分 chunk 德文翻譯質量待驗證 |
| `savedPatterns` 舊結構 | ⚠️ 已知限制 | 僅用 `{ pattern, explanation, lang }`，未使用 `explanations` 多語言物件 |
| PatternNotebook 顯示限制 | ⚠️ 已知限制 | 讀取 `item.pattern`（舊結構），保存時語言為當時語系 |
| PWA 支持 | ❌ 未執行 | Phase 5.2 |
| 臨時檔案清理 | ❌ 待清理 | `_*.py / *_output*.txt / *.bak*` 等臨時檔 |
| 02_chunk2 未翻譯 | ❌ 待處理 | 仍在等待翻譯完成 |

---

*最後更新：2026-06-21 by 代可行*
