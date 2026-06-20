import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, '../src/data/curriculumData.ts');
const outDir = path.join(__dirname, '../public/data/curriculum');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const content = fs.readFileSync(dataPath, 'utf-8');
// remove export const curriculumData = 
const cleanContent = content.replace('export const curriculumData =', 'return');

try {
  const getObj = new Function(cleanContent);
  const data = getObj();
  
  for (const [lang, units] of Object.entries(data)) {
    const outFile = path.join(outDir, `${lang}.json`);
    fs.writeFileSync(outFile, JSON.stringify(units, null, 2), 'utf-8');
    console.log(`Successfully wrote ${outFile}`);
  }
} catch (e) {
  console.error("Error parsing curriculum data:", e);
}
