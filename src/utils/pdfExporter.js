import html2pdf from 'html2pdf.js';

export const exportToPDF = (type, data, titleText, extraData = null) => {
  const exportContainer = document.createElement('div');
  exportContainer.style.width = '700px'; 
  exportContainer.style.padding = '30px';
  exportContainer.style.fontFamily = 'sans-serif';
  exportContainer.style.backgroundColor = 'white';
  exportContainer.style.color = 'black';
  exportContainer.style.boxSizing = 'border-box';
  exportContainer.style.wordWrap = 'break-word';
  exportContainer.style.overflowWrap = 'break-word';

  const title = document.createElement('h1');
  title.innerText = titleText;
  title.style.textAlign = 'center';
  title.style.marginBottom = '30px';
  title.style.fontSize = '28px';
  title.style.fontWeight = 'bold';
  title.style.color = 'black';
  exportContainer.appendChild(title);

  data.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.style.marginBottom = '24px';
    itemDiv.style.borderBottom = '1px solid #eee';
    itemDiv.style.paddingBottom = '16px';

    if (type === 'vocabulary') {
      const line1 = document.createElement('div');
      line1.style.marginBottom = '8px';
      
      const termSpan = document.createElement('span');
      termSpan.innerText = item.term;
      termSpan.style.fontWeight = 'bold';
      termSpan.style.color = 'black';
      termSpan.style.fontSize = '24px';
      line1.appendChild(termSpan);

      if (item.phonetic) {
        const phoneticSpan = document.createElement('span');
        phoneticSpan.innerText = ` [${item.phonetic}]`;
        phoneticSpan.style.fontWeight = 'normal';
        phoneticSpan.style.color = 'black';
        phoneticSpan.style.fontSize = '20px';
        line1.appendChild(phoneticSpan);
      }

      if (item.partOfSpeech) {
        const posSpan = document.createElement('span');
        posSpan.innerText = ` ${item.partOfSpeech}`;
        posSpan.style.fontWeight = 'normal';
        posSpan.style.fontStyle = 'italic';
        posSpan.style.color = 'black';
        posSpan.style.fontSize = '20px';
        line1.appendChild(posSpan);
      }

      const meaningSpan = document.createElement('span');
      meaningSpan.innerText = `  —  ${item.meaning}`; 
      meaningSpan.style.fontWeight = 'normal';
      meaningSpan.style.color = 'black';
      meaningSpan.style.fontSize = '18px';
      line1.appendChild(meaningSpan);

      itemDiv.appendChild(line1);

      if (item.example) {
        const exampleDiv = document.createElement('div');
        exampleDiv.innerText = item.example;
        exampleDiv.style.fontStyle = 'italic';
        exampleDiv.style.color = 'black';
        exampleDiv.style.fontSize = '18px';
        exampleDiv.style.marginTop = '8px';
        itemDiv.appendChild(exampleDiv);
      }
    } else if (type === 'pattern') {
      const patternDiv = document.createElement('div');
      patternDiv.innerText = item.pattern;
      patternDiv.style.fontWeight = 'bold';
      patternDiv.style.color = 'black';
      patternDiv.style.fontSize = '24px';
      patternDiv.style.marginBottom = '8px';
      itemDiv.appendChild(patternDiv);

      const explanationDiv = document.createElement('div');
      explanationDiv.innerText = item.explanation;
      explanationDiv.style.fontWeight = 'normal';
      explanationDiv.style.color = 'black';
      explanationDiv.style.fontSize = '18px';
      explanationDiv.style.lineHeight = '1.6';
      itemDiv.appendChild(explanationDiv);
    } else if (type === 'chat') {
      const isUser = item.role === 'user';
      const roleName = isUser ? 'User' : 'AI';
      
      const roleDiv = document.createElement('div');
      roleDiv.innerText = `[${roleName}]`;
      roleDiv.style.fontWeight = 'bold';
      roleDiv.style.color = isUser ? '#0066cc' : '#009933';
      roleDiv.style.fontSize = '20px';
      roleDiv.style.marginBottom = '4px';
      itemDiv.appendChild(roleDiv);

      const contentDiv = document.createElement('div');
      contentDiv.innerText = item.content;
      contentDiv.style.fontSize = '18px';
      contentDiv.style.color = 'black';
      contentDiv.style.lineHeight = '1.6';
      contentDiv.style.whiteSpace = 'pre-wrap';
      contentDiv.style.wordBreak = 'break-word';
      itemDiv.appendChild(contentDiv);
    }

    exportContainer.appendChild(itemDiv);
  });

  if (type === 'chat' && extraData) {
    const analysisHeader = document.createElement('h2');
    analysisHeader.innerText = 'Conversation Analysis (整體評估與建議)';
    analysisHeader.style.marginTop = '40px';
    analysisHeader.style.marginBottom = '20px';
    analysisHeader.style.fontSize = '24px';
    analysisHeader.style.fontWeight = 'bold';
    analysisHeader.style.color = '#ff4757';
    exportContainer.appendChild(analysisHeader);

    const analysisDiv = document.createElement('div');
    analysisDiv.innerText = extraData;
    analysisDiv.style.fontSize = '18px';
    analysisDiv.style.color = 'black';
    analysisDiv.style.lineHeight = '1.8';
    analysisDiv.style.whiteSpace = 'pre-wrap';
    analysisDiv.style.wordBreak = 'break-word';
    analysisDiv.style.padding = '20px';
    analysisDiv.style.backgroundColor = '#fff5f6';
    analysisDiv.style.borderLeft = '4px solid #ff4757';
    analysisDiv.style.borderRadius = '8px';
    exportContainer.appendChild(analysisDiv);
  }

  const opt = {
    margin:       15,
    filename:     `${titleText}.pdf`,
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  
  html2pdf().set(opt).from(exportContainer.outerHTML).save();
};
