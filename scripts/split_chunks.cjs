const fs = require('fs');

const files = [
  'D:/Antigravity_data/public/data/scenarioPatterns/01.json',
  'D:/Antigravity_data/public/data/scenarioPatterns/02.json',
];

const NUM_CHUNKS = 4; // 4 chunks per file = 8 sub-agents total

files.forEach((filepath, fi) => {
  const data = JSON.parse(fs.readFileSync(filepath, 'utf8'));
  const topics = Object.keys(data);
  const chunkSize = Math.ceil(topics.length / NUM_CHUNKS);

  for (let ci = 0; ci < NUM_CHUNKS; ci++) {
    const start = ci * chunkSize;
    const end = Math.min(start + chunkSize, topics.length);
    const chunkTopics = topics.slice(start, end);

    const chunkData = {};
    chunkTopics.forEach(t => { chunkData[t] = data[t]; });

    const chunkFile = filepath.replace('.json', `_chunk${ci + 1}.json`);
    fs.writeFileSync(chunkFile, JSON.stringify(chunkData, null, 2), 'utf8');
    console.log(`File ${fi + 1}: chunk ${ci + 1} -> ${chunkFile} (${chunkTopics.length} topics)`);
  }
});

console.log('\nDone! Files split into chunks.');
