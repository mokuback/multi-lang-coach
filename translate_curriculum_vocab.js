/**
 * 批量翻译 curriculumData.ts 中的词汇解释
 * 
 * 使用方式: node translate_curriculum_vocab.js
 * 输出: 更新后的 curriculumData.ts
 */

const fs = require('fs');
const path = require('path');

const INPUT_FILE = path.join(__dirname, 'src', 'data', 'curriculumData.ts');
const OUTPUT_FILE = path.join(__dirname, 'src', 'data', 'curriculumData_translated.ts');

// 读取原文件
let content = fs.readFileSync(INPUT_FILE, 'utf-8');

// 翻译映射表 ( zh-TW -> 其他语言 )
// 格式: { 'zh-TW': { zh-CN, en, ja, ko, es, fr, de } }
const translations = {
  // 单元 1: 基本打招呼
  '早安': { zhCN: '早安', en: 'good morning', ja: 'おはようございます（朝の挨拶）', ko: '좋은 아침', es: 'buenos días', fr: 'bonjour', de: 'guten Morgen' },
  '你好': { zhCN: '你好', en: 'hello', ja: 'こんにちは（昼間の挨拶）', ko: '안녕하세요', es: 'hola', fr: 'bonjour', de: 'hallo' },
  '晚安': { zhCN: '晚安', en: 'good evening', ja: 'こんばんは（夜の挨拶）', ko: '안녕하세요 (저녁)', es: 'buenas noches', fr: 'bonsoir', de: 'guten Abend' },
  '謝謝': { zhCN: '谢谢', en: 'thank you', ja: 'ありがとう（感謝の表現）', ko: '감사합니다', es: 'gracias', fr: 'merci', de: 'danke' },
  '再見': { zhCN: '再见', en: 'goodbye', ja: 'さようなら（別れの挨拶）', ko: '안녕히 가세요', es: 'adiós', fr: 'au revoir', de: 'auf Wiedersehen' },
  
  // 单元 2: 自我介绍
  '我': { zhCN: '我', en: 'I / me', ja: '私（わたし）', ko: '나 / 저', es: 'yo', fr: 'je / moi', de: 'ich' },
  '你': { zhCN: '你', en: 'you', ja: 'あなた（貴方）', ko: '너 / 당신', es: 'tú / usted', fr: 'tu / vous', de: 'du / Sie' },
  '學生': { zhCN: '学生', en: 'student', ja: '学生（がくせい）', ko: '학생', es: 'estudiante', fr: 'étudiant(e)', de: 'Student(in)' },
  '上班族': { zhCN: '上班族', en: 'company employee', ja: '会社員（かいしゃいん）', ko: '회사원', es: 'empleado de empresa', fr: 'employé(e) de société', de: 'Unternehmensmitarbeiter' },
  '老師': { zhCN: '老师', en: 'teacher / professor', ja: '先生（せんせい）', ko: '선생님', es: 'profesor(a)', fr: 'professeur', de: 'Lehrer(in)' },
};

/**
 * 替换 meanings 对象中的翻译
 * @param {string} content - 文件内容
 * @returns {string} - 更新后的内容
 */
function translateMeanings(content) {
  let result = content;
  
  // 正则匹配 meanings 对象
  const meaningsRegex = /meanings:\s*\{[\s\S]*?'zh-TW':\s*'([^']+)'[\s\S]*?\}/g;
  
  result = result.replace(meaningsRegex, (match, zhTW) => {
    const translation = translations[zhTW];
    if (!translation) {
      console.log(`⚠️  未找到翻译: ${zhTW}`);
      return match; // 保持原样
    }
    
    // 构造新的 meanings 对象
    const newMeanings = `meanings: {
      'zh-TW': '${zhTW}',
      'zh-CN': '${translation.zhCN}',
      'en': '${translation.en}',
      'ja': '${translation.ja}',
      'ko': '${translation.ko}',
      'es': '${translation.es}',
      'fr': '${translation.fr}',
      'de': '${translation.de}'
    }`;
    
    return newMeanings;
  });
  
  return result;
}

/**
 * 主函数
 */
function main() {
  console.log('🚀 开始批量翻译词汇...\n');
  
  // 统计需要翻译的词汇数
  const zhTWMatches = content.match(/'zh-TW':\s*'([^']+)'/g);
  const totalWords = zhTWMatches ? zhTWMatches.length : 0;
  console.log(`📊 找到 ${totalWords} 个词汇需要翻译\n`);
  
  // 执行翻译
  const translatedContent = translateMeanings(content);
  
  // 写入新文件
  fs.writeFileSync(OUTPUT_FILE, translatedContent, 'utf-8');
  
  console.log(`✅ 翻译完成！`);
  console.log(`📝 输出文件: ${OUTPUT_FILE}`);
  console.log(`\n⚠️  请检查翻译结果，然后手动替换原文件。`);
}

main();
