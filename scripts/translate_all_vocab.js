// translate_all_vocab.js
// 批量翻译 curriculumData.ts 中的所有词汇

import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'data', 'curriculumData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 翻译字典：日语单词 -> 英文翻译
const translations = {
  // Unit 1
  'おはようございます': 'good morning',
  'こんにちは': 'hello / good afternoon',
  'こんばんは': 'good evening',
  'ありがとう': 'thank you',
  'さようなら': 'goodbye',
  
  // Unit 2
  'わたし': 'I / me',
  'あなた': 'you',
  'がくせい': 'student',
  'かいしゃいん': 'company employee',
  'せんせい': 'teacher',
  
  // Unit 3
  'これ': 'this',
  'それ': 'that (near you)',
  'あれ': 'that (over there)',
  'ほん': 'book',
  'えんぴつ': 'pencil',
  
  // Unit 4
  'こうえん': 'park',
  'としょかん': 'library',
  'がっこう': 'school',
  'うち': 'house / home',
  'どこ': 'where',
  
  // Unit 5
  'いち': 'one',
  'に': 'two',
  'さん': 'three',
  'いま': 'now / current time',
  '～じ': "~ o'clock",
  '～ふん': '~ minutes',
  
  // Unit 6
  'いくら': 'how much (money)',
  'メニュー': 'menu',
  'みず': 'water',
  'コーヒー': 'coffee',
  'えん': 'Japanese yen',
  
  // Unit 7
  'たべます': 'eat',
  'のみます': 'drink',
  'みます': 'watch / see',
  'あさごはん': 'breakfast',
  'おちゃ': 'tea',
  
  // Unit 8
  'いっしょに': 'together',
  'えいが': 'movie',
  'あした': 'tomorrow',
  'いきます': 'go',
  
  // Unit 9
  'きのう': 'yesterday',
  'せんしゅう': 'last week',
  'いそがしい': 'busy',
  'ひま': 'free (time available)',
  
  // Unit 10
  'ほしい': 'want / desire',
  'くるま': 'car',
  'あたらしい': 'new',
  'かいます': 'buy',
  
  // Unit 11
  'もしもし': 'hello (on phone)',
  'でんわ': 'telephone / phone',
  'おねがいします': 'please / I request',
  'かいぎ': 'meeting / conference',
  
  // Unit 12
  'てつだいます': 'help',
  'つかいます': 'use',
  'どうぞ': 'please / go ahead',
  'いいですか': 'is it OK? / may I?',
  
  // Unit 13
  'てんき': 'weather',
  'あつい': 'hot (weather)',
  'さむい': 'cold (weather)',
  'なります': 'become / change into',
  
  // Unit 14
  'おおきい': 'big / large',
  'ちいさい': 'small / little',
  'どちら': 'which one',
  'より': 'more than / compared to',
  
  // Unit 15
  '日本': 'Japan',
  'べんきょう': 'study / learning',
  'ほうがいい': 'had better / it\'s better to',
  'あります': 'there is / there are'
};

// 替换所有未翻译的 'en' 字段
let replacedCount = 0;
for (const [japaneseWord, englishTranslation] of Object.entries(translations)) {
  // 匹配模式: 在 word: 'XXX' 之后的 meanings 对象中的 'en': 'XXX'
  const pattern = new RegExp(`(word: '${japaneseWord}'.*?meanings:\\s*\\{.*?'en':\\s*')[^']*(')`, 's');
  const newContent = content.replace(pattern, `$1${englishTranslation}$2`);
  
  if (newContent !== content) {
    content = newContent;
    replacedCount++;
    console.log(`Translated: ${japaneseWord} -> ${englishTranslation}`);
  }
}

// 写回文件
fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nTotal translations applied: ${replacedCount}`);
console.log('File updated: src/data/curriculumData.ts');
