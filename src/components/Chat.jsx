import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Send, AlertCircle, CheckCircle, Info, Lightbulb, X, Wand2, Volume2, Mic, Square, RefreshCw, Download, Loader2 } from 'lucide-react';
import { callGeminiAPI, analyzeSentenceAPI, polishSentenceAPI, analyzeConversationAPI, transcribeAudioWithGemini } from '../utils/llmClient';
import { exportToPDF } from '../utils/pdfExporter';
import { useI18n } from '../contexts/I18nContext';
import confetti from 'canvas-confetti';

import scenarioPatterns01 from '../data/scenarioPatterns_01.json';
import scenarioPatterns02 from '../data/scenarioPatterns_02.json';

const Chat = ({ scenario, chatHistory, setChatHistory, apiKey, addVocabulary, addPattern, correctionMode, targetLanguage, userCategory, userRole, userLevel, speechRate = 5, autoRead = false, patternVersion = '02', androidSmartSpeech = true }) => {
  const { t } = useI18n();
  const [input, setInput] = useState('');
  const [showPatternHints, setShowPatternHints] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [translatedIndexes, setTranslatedIndexes] = useState(new Set());
  const messagesEndRef = useRef(null);
  const isAndroid = /Android/i.test(navigator.userAgent);
  
  // States for Learning Modal & Dynamic Text Selection
  const [learningModalData, setLearningModalData] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isPolishing, setIsPolishing] = useState(false);
  const [selectedTextData, setSelectedTextData] = useState({ index: null, text: '' });

  // Export State
  const [showExportModal, setShowExportModal] = useState(false);
  const [isExporting, setIsExporting] = useState(false);

  // TTS State
  const [playingIndex, setPlayingIndex] = useState(null);

  // STT State & Ref
  const [isRecording, setIsRecording] = useState(false);
  const [isGeminiRecording, setIsGeminiRecording] = useState(false);
  const recognitionRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const transcriptBuffer = useRef('');
  const lastFinalTranscriptRef = useRef('');
  const [hasSeenMockWarning, setHasSeenMockWarning] = useState(false);

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const closeMockModal = () => {
    setHasSeenMockWarning(true);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory, isTyping]);

  // Handle Auto Read
  const prevHistoryLength = useRef(chatHistory.length);
  useEffect(() => {
    if (autoRead && chatHistory.length > prevHistoryLength.current) {
      const lastMsg = chatHistory[chatHistory.length - 1];
      if (lastMsg.role === 'assistant' && lastMsg.content && !lastMsg.isError) {
        const displayIndex = chatHistory.filter((msg) => msg.role !== 'system').length - 1;
        // Small timeout to ensure DOM update won't interfere
        setTimeout(() => handleSpeak(lastMsg.content, displayIndex), 100);
      }
    }
    prevHistoryLength.current = chatHistory.length;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatHistory, autoRead]);

  // Clean up global listeners and TTS/STT on unmount
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      const selected = window.getSelection().toString().trim();
      if (!selected) {
        setSelectedTextData({ index: null, text: '' });
      }
    };
    document.addEventListener('mouseup', handleGlobalMouseUp);

    // Initialize Web Speech API (STT)
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = targetLanguage === 'ja' ? 'ja-JP' : 'en-US'; 

      recognitionRef.current.onresult = (event) => {
        let interimTranscript = '';
        let newFinalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            // Android Chrome workaround: it sometimes duplicates identical phrases in the results array
            if (transcript.trim() && transcript.trim() === lastFinalTranscriptRef.current.trim()) {
              continue;
            }
            lastFinalTranscriptRef.current = transcript;
            newFinalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        if (newFinalTranscript) {
          transcriptBuffer.current += newFinalTranscript;
        }

        setInput(transcriptBuffer.current + interimTranscript);
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech Recognition Error", event.error);
        // Remove disruptive alerts for QQ and Edge
        if (event.error === 'not-allowed' || event.error === 'network' || event.error === 'aborted') {
          setIsRecording(false);
        }
      };

      recognitionRef.current.onend = () => {
        setIsRecording(false);
      };
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      window.speechSynthesis.cancel();
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, [targetLanguage]);

  const handleTextSelection = (index) => {
    setTimeout(() => {
      const selected = window.getSelection().toString().trim();
      if (selected) {
        setSelectedTextData({ index, text: selected });
      }
    }, 50);
  };

  const handleLearnClick = async (sentence) => {
    if (!apiKey) {
      alert(t("請先在「設定與 API」中輸入 Gemini API Key，才能解鎖智能解析功能。"));
      return;
    }
    
    setLearningModalData(null);
    setIsAnalyzing(true);
    try {
      const result = await analyzeSentenceAPI(sentence, apiKey, targetLanguage);
      
      // Initialize check state for vocab and patterns
      if (result.vocab) {
        result.vocab = result.vocab.map(v => ({ ...v, checked: true }));
      }
      if (result.patterns) {
        result.patterns = result.patterns.map(p => ({ ...p, checked: true }));
      }
      
      setLearningModalData(result);
      
      // 🎉 Trigger Confetti!
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#d946ef', '#2ed573', '#FFD700'],
        zIndex: 9999
      });
    } catch (error) {
      console.error(error);
      alert(t(`解析發生錯誤: `) + error.message + t(`，請確認網路連線或金鑰是否正確。`));
      setIsAnalyzing(false);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handlePolish = async () => {
    if (!input.trim()) return;
    if (!apiKey) {
      alert(t("請先在「設定與 API」中輸入 Gemini API Key，才能使用 AI 潤飾/翻譯功能。"));
      return;
    }

    setIsPolishing(true);
    try {
      const result = await polishSentenceAPI(input, chatHistory, apiKey, targetLanguage);
      if (result && result.polished) {
        setInput(result.polished);
      }
    } catch (error) {
      console.error(error);
      alert(t(`修飾發生錯誤: `) + error.message);
    } finally {
      setIsPolishing(false);
    }
  };

  const handleSuggestClick = async (text, realIndex) => {
    if (!apiKey) {
      alert(t("請先在「設定與 API」中輸入 Gemini API Key，才能使用此功能。"));
      return;
    }
    
    setLearningModalData(null);
    setIsAnalyzing(true);
    try {
      const historyContext = chatHistory.slice(0, realIndex + 1);
      const result = await polishSentenceAPI(text, historyContext, apiKey, targetLanguage);
      if (result && result.polished) {
        setLearningModalData({
          isSuggestion: true,
          original: text,
          suggestion: result.polished
        });
      }
    } catch (error) {
      console.error(error);
      alert(t(`建議發生錯誤: `) + error.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleExport = async (withAnalysis) => {
    setIsExporting(true);
    try {
      const historyToExport = chatHistory.filter(msg => msg.role !== 'system');
      let analysisText = null;
      
      if (withAnalysis) {
        analysisText = await analyzeConversationAPI(chatHistory, apiKey, targetLanguage);
      }
      
      const title = `${t(scenario.title)} - ${t('對話紀錄')}`;
      exportToPDF('chat', historyToExport, title, analysisText);
      setShowExportModal(false);
    } catch (error) {
      console.error(error);
      alert(t('匯出失敗：') + error.message);
    } finally {
      setIsExporting(false);
    }
  };

  // TTS Function
  const handleSpeak = (text, index) => {
    if (playingIndex === index) {
      window.speechSynthesis.cancel();
      setPlayingIndex(null);
      return;
    }

    window.speechSynthesis.cancel();
    setPlayingIndex(index);

    const isJa = targetLanguage === 'ja';
    const voices = window.speechSynthesis.getVoices();

    // 如果是學習英文，為了避免英文語音引擎硬唸中文，我們將中英文切開，依序放入播放佇列
    let segments = [text];
    if (!isJa) {
      // 根據中文漢字與全形標點符號進行切割
      segments = text.split(/([\u4e00-\u9fa5\u3000-\u303F\uFF00-\uFFEF]+)/g).filter(s => s.trim().length > 0);
    } else if (scenario && scenario.title) {
      // 日文模式：只針對「情境標題」進行切割，使其能用中文語音朗讀
      const translatedTitle = t(scenario.title);
      if (text.includes(translatedTitle)) {
        // 使用 split 切割，保留情境標題作為獨立片段
        segments = text.split(new RegExp(`(${translatedTitle})`, 'g')).filter(s => s.trim().length > 0);
      }
    }

    segments.forEach((segment, i) => {
      const utterance = new SpeechSynthesisUtterance(segment);
      
      let isChineseSegment = false;
      if (!isJa) {
        isChineseSegment = /[\u4e00-\u9fa5]/.test(segment);
      } else if (scenario && scenario.title) {
        // 日文模式下，只有完全等於情境標題的片段，才判定為中文
        isChineseSegment = (segment === t(scenario.title));
      }

      if (isChineseSegment) {
        utterance.lang = 'zh-TW';
        const zhVoice = voices.find(v => v.lang.includes('zh') && (v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Yating') || v.name.includes('Hanhan') || v.name.includes('Hsiao'))) || voices.find(v => v.lang.includes('zh'));
        if (zhVoice) utterance.voice = zhVoice;
      } else {
        utterance.lang = isJa ? 'ja-JP' : 'en-US';
        const langPrefix = isJa ? 'ja' : 'en';
        const optimalVoice = 
          voices.find(v => v.lang.startsWith(langPrefix) && (v.name.includes('Google') || v.name.includes('Microsoft') || v.name.includes('Siri') || v.name.includes('Nanami') || v.name.includes('Keita') || v.name.includes('Ayumi'))) || 
          voices.find(v => v.lang.startsWith(langPrefix));
          
        if (optimalVoice) {
          utterance.voice = optimalVoice;
        }
      }

      utterance.rate = 0.5 + (speechRate * 0.1);
      utterance.pitch = 1.0;

      // 只有最後一段唸完時，才清除播放狀態
      if (i === segments.length - 1) {
        utterance.onend = () => setPlayingIndex(null);
        utterance.onerror = () => setPlayingIndex(null);
      }

      window.speechSynthesis.speak(utterance);
    });
  };

  // STT Toggle
  const toggleRecording = async () => {
    const shouldUseGeminiSTT = isAndroid && androidSmartSpeech && apiKey;

    if (shouldUseGeminiSTT) {
      if (isRecording) {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === "recording") {
          mediaRecorderRef.current.stop();
        }
        setIsRecording(false);
      } else {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          mediaRecorderRef.current = new MediaRecorder(stream);
          audioChunksRef.current = [];

          mediaRecorderRef.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
              audioChunksRef.current.push(event.data);
            }
          };

          mediaRecorderRef.current.onstop = async () => {
            setIsGeminiRecording(true);
            try {
              const audioBlob = new Blob(audioChunksRef.current, { type: mediaRecorderRef.current.mimeType || 'audio/webm' });
              const base64Audio = await blobToBase64(audioBlob);
              const transcribedText = await transcribeAudioWithGemini(apiKey, base64Audio, audioBlob.type, targetLanguage);
              if (transcribedText) {
                setInput(prev => (prev + (prev.endsWith(' ') ? '' : ' ') + transcribedText).trim());
              }
            } catch (err) {
              console.error("Gemini STT Error:", err);
              alert("語音辨識發生錯誤：" + err.message);
            } finally {
              setIsGeminiRecording(false);
              stream.getTracks().forEach(track => track.stop());
            }
          };

          mediaRecorderRef.current.start();
          setIsRecording(true);
        } catch (err) {
          console.error("Microphone access denied:", err);
          alert("無法存取麥克風，請確認您的瀏覽器麥克風權限是否開啟。");
        }
      }
    } else {
      if (isRecording) {
        try {
          recognitionRef.current?.stop();
        } catch (error) {
          console.error("Failed to stop recording:", error);
        }
        setIsRecording(false);
      } else {
        if (!recognitionRef.current) {
          alert(t("您的瀏覽器尚不支援語音輸入功能。建議使用 Chrome 或 Edge 以獲取完整體驗。"));
          return;
        }
        lastFinalTranscriptRef.current = ''; 
        
        try {
          transcriptBuffer.current = input ? input + (input.endsWith(' ') ? '' : ' ') : '';
          recognitionRef.current.start();
          setIsRecording(true);
        } catch (error) {
          console.error("Failed to start recording:", error);
          setIsRecording(true);
        }
      }
    }
  };

  // Mock conversation tree based on typical IT scenario responses
  const getMockAIResponse = (userText) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let aiMessage = { role: 'assistant', content: '' };
        let extractedVocab = null;

        if (targetLanguage === 'ja') {
          if (userText.includes('進捗') || userText.includes('しんちょく') || userText.toLowerCase().includes('progress')) {
            aiMessage.content = "進捗の共有ありがとうございます。しかし、ブロッカーとなっている詳細を共有してください。また、文法に少し不自然なところがありました。";
            aiMessage.translation = "謝謝您分享進度。不過，請您分享造成阻礙的詳細原因。另外，文法上有一點不自然的地方。";
            aiMessage.correction = {
              original: userText,
              error: "進捗を報告するつもりです...",
              fixed: "進捗を報告いたします...",
              explanation: "對上司或客戶報告時，使用謙讓語「いたします」會更專業且禮貌。"
            };
            extractedVocab = { term: "ブロッカー (Blocker)", meaning: "阻礙 / 障礙物", example: "リリースを妨げている重大なブロッカーがあります。", phonetic: "blɒk.ər", partOfSpeech: "n." };
          } else if (userText.includes('データベース') || userText.includes('サーバー') || userText.toLowerCase().includes('database') || userText.toLowerCase().includes('server')) {
             aiMessage.content = "バックエンドの問題のようですね。非技術者の上司や顧客に説明するときは、『インフラストラクチャーの遅延が発生しています』と伝えると分かりやすいです。";
             aiMessage.translation = "聽起來像是後端的問題。向非技術主管或客戶說明時，可以說『我們遇到了基礎設施的延遲』會更容易理解。";
             extractedVocab = { term: "インフラ (Infrastructure)", meaning: "基礎設施 / 架構", example: "当社のITインフラにはアップグレードが必要です。", phonetic: "ɪn.frəˌstrʌk.tʃər", partOfSpeech: "n." };
          } else {
             aiMessage.content = "なるほど。あなたが焦点を当てている「特定のソフトウェア要件」や「スケジュール」について、もう少し詳しく説明していただけますか？";
             aiMessage.translation = "原來如此。關於您正在關注的「特定軟體需求」或「時程」，能請您再稍微詳細說明一下嗎？";
             aiMessage.correction = null;
             extractedVocab = { term: "詳しく説明する", meaning: "詳細說明", example: "その点について、詳しく説明していただけますか？", phonetic: "kuwashiku setsumei suru", partOfSpeech: "v." };
          }
          aiMessage.content += "\n\n(💡【系統提示】這是供體驗用的模擬回覆。若要讓 AI 根據您的話語動態回應，強烈建議您參考左側「使用說明」，快速申請**免費**的 Gemini API 金鑰！)";
          aiMessage.translation += "\n\n(💡【系統提示】這是供體驗用的模擬回覆。若要讓 AI 根據您的話語動態回應，強烈建議您參考左側「使用說明」，快速申請**免費**的 Gemini API 金鑰！)";
        } else {
          // English mock logic
          if (userText.toLowerCase().includes('progress')) {
             aiMessage.content = "Great context on the progress. However, make sure to detail any blockers. Also, I noticed a minor grammar mistake.";
             aiMessage.translation = "太好了，了解進度的狀態。不過，請確保您有詳細說明任何可能遇到的阻礙 (Blockers)。另外，我注意到一個小小的文法錯誤。";
             aiMessage.correction = {
               original: userText,
               error: "I am report the progress...",
               fixed: "I am reporting the progress...",
               explanation: "對於正在進行的動作，請使用現在進行式 'reporting'。"
             };
             extractedVocab = { term: "Blocker", meaning: "阻礙 / 障礙物", example: "We have a critical blocker preventing the release.", phonetic: "ˈblɑː.kɚ", partOfSpeech: "n." };
          } else if (userText.toLowerCase().includes('database') || userText.toLowerCase().includes('server')) {
             aiMessage.content = "That sounds like a backend issue. When explaining this to a non-technical boss or client, you might want to simplify it. You can say 'We are experiencing infrastructure delays'.";
             aiMessage.translation = "聽起來像是後端基礎設施的問題。在向非技術背景的老闆或客戶解釋時，您可以簡化說法。例如您可以說 'We are experiencing infrastructure delays'。";
             extractedVocab = { term: "Infrastructure", meaning: "基礎設施 / 架構", example: "Our IT infrastructure needs an upgrade.", phonetic: "ˈɪn.frəˌstrʌk.tʃɚ", partOfSpeech: "n." };
          } else {
             aiMessage.content = "I understand. Could you elaborate more on the specific software requirements or timelines you are focusing on?";
             aiMessage.translation = "我明白。您能針對特定的軟體需求或專案時程「進一步詳細說明」嗎？";
             aiMessage.correction = {
               original: userText,
               error: "I will do it until tomorrow.",
               fixed: "I will do it by tomorrow.",
               explanation: "'By' 用於說明截止期限，而 'until' 則是用於表示持續的一段期間。"
             };
             extractedVocab = { term: "Elaborate", meaning: "詳細說明", example: "Could you elaborate on that point?", phonetic: "iˈlæb.ə.reɪt", partOfSpeech: "vi." };
          }
          aiMessage.content += "\n\n(💡 [System Note] This is a static demo response. To experience dynamic AI conversations, please refer to the User Guide to easily get your **FREE** Gemini API key!)";
          aiMessage.translation += "\n\n(💡【系統提示】這是供體驗用的模擬回覆。若要讓 AI 根據您的話語動態回應，強烈建議您參考左側「使用說明」，快速申請**免費**的 Gemini API 金鑰！)";
        }

        resolve({ aiMessage, extractedVocab });
      }, 1500);
    });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isRecording || isPolishing) return;

    const userMsg = { role: 'user', content: input };
    const newHistory = [...chatHistory, userMsg];
    
    setChatHistory(newHistory);
    setInput('');
    setIsTyping(true);

    if (!apiKey) {
      // Mock mode
      const { aiMessage, extractedVocab } = await getMockAIResponse(input);
      setChatHistory(prev => [...prev, aiMessage]);
      if (extractedVocab) {
        addVocabulary(extractedVocab.term, extractedVocab.meaning, extractedVocab.example, extractedVocab.phonetic, extractedVocab.partOfSpeech);
      }
    } else {
      // Genuine API Call implementation
      try {
        const parsedResult = await callGeminiAPI(newHistory, apiKey, correctionMode, targetLanguage, userCategory, userRole, userLevel);
        
        let aiMessage = { role: 'assistant', content: parsedResult.content };
        if (parsedResult.translation) {
           aiMessage.translation = parsedResult.translation;
        }
        if (parsedResult.correction) {
           aiMessage.correction = parsedResult.correction;
        }
        if (parsedResult.extractedVocab) {
           aiMessage.extractedVocab = parsedResult.extractedVocab;
        }
        
        setChatHistory(prev => [...prev, aiMessage]);
      } catch (error) {
        console.error("API Call failed:", error);
        setChatHistory(prev => [...prev, { 
          role: 'assistant', 
          content: t(`抱歉，呼叫 AI 發生錯誤：`) + `${error.message}。` + t(`請確認您的網路連線或 API 金鑰是否正確。`),
          isError: true
        }]);
      }
    }
    
    setIsTyping(false);
  };

  const handleRetry = async (errorIndex) => {
    const historyToRetry = chatHistory.slice(0, errorIndex);
    setChatHistory(historyToRetry);
    setIsTyping(true);

    try {
      const parsedResult = await callGeminiAPI(historyToRetry, apiKey, correctionMode, targetLanguage, userCategory, userRole, userLevel);
      
        let aiMessage = { role: 'assistant', content: parsedResult.content };
      if (parsedResult.translation) {
         aiMessage.translation = parsedResult.translation;
      }
      if (parsedResult.correction) {
         aiMessage.correction = parsedResult.correction;
      }
      if (parsedResult.extractedVocab) {
         aiMessage.extractedVocab = parsedResult.extractedVocab;
      }
      
      setChatHistory(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error("API Call failed during retry:", error);
      setChatHistory(prev => [...prev, { 
        role: 'assistant', 
        content: t(`抱歉，呼叫 AI 發生錯誤：`) + `${error.message}。` + t(`請確認您的網路連線或 API 金鑰是否正確。`),
        isError: true
      }]);
    }
    
    setIsTyping(false);
  };

  // Filter out system messages for display
  const displayHistory = chatHistory.filter(msg => msg.role !== 'system');

  if (!scenario) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', flexDirection: 'column', gap: '20px' }}>
        <Info size={48} className="text-muted" />
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>{t('請先從「每日任務」中選擇一個情境。')}</h2>
      </div>
    );
  }

  // Inject a small animation for recording pulse
  const pulseKeyframes = `
    @keyframes pulseRecording {
      0% { box-shadow: 0 0 0 0 rgba(255, 71, 87, 0.4); }
      70% { box-shadow: 0 0 0 10px rgba(255, 71, 87, 0); }
      100% { box-shadow: 0 0 0 0 rgba(255, 71, 87, 0); }
    }
    @keyframes spin {
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', height: '100%', maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
      <style>{pulseKeyframes}</style>

      {/* Chat header */}
      <header className="glass-panel" style={{ padding: '16px 24px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>{t(scenario.title)}</h2>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>{t(scenario.desc)}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {apiKey && chatHistory.filter(m => m.role !== 'system').length > 1 && (
            <button 
              onClick={() => setShowExportModal(true)}
              className="glass-button"
              style={{ padding: '4px 12px', borderRadius: '16px', fontSize: '0.8rem', color: 'var(--text-primary)' }}
              title={t("匯出對話紀錄")}
            >
              <Download size={14} /> {t("匯出")}
            </button>
          )}
          <span style={{ 
            background: 'rgba(255, 255, 255, 0.1)', 
            padding: '4px 12px', 
            borderRadius: '16px',
            fontSize: '0.8rem',
            color: 'var(--text-primary)'
          }}>
            {apiKey ? t('API 對話模式') : t('模擬對話體驗')}
          </span>
        </div>
      </header>

      {/* Export Options Modal */}
      {showExportModal && createPortal(
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.85)', zIndex: 9999,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="glass-panel animate-slide-in" style={{
            maxWidth: '400px', width: '90%', padding: '30px',
            textAlign: 'center', borderRadius: '24px',
            border: '1px solid var(--glass-border)',
            boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)'
          }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
              {t('匯出對話紀錄')}
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem', lineHeight: '1.5' }}>
              {t('您可以直接匯出對話紀錄，或是讓 AI 先針對您整場的表現進行總評估，再一併匯出成 PDF。')}
            </p>
            
            {isExporting ? (
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <Loader2 size={36} className="text-accent" style={{ animation: 'spin 2s linear infinite' }} />
                <span className="text-accent" style={{ fontWeight: '500' }}>{t('AI 正在仔細分析您的對話表現，請稍候...')}</span>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button 
                  className="glass-button" 
                  onClick={() => handleExport(true)}
                  style={{ width: '100%', padding: '12px', fontSize: '1.05rem', fontWeight: 'bold', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}
                >
                  <Wand2 size={18} /> {t('匯出並請 AI 解析')}
                </button>
                <button 
                  className="glass-button" 
                  onClick={() => handleExport(false)}
                  style={{ width: '100%', padding: '12px', fontSize: '1.05rem' }}
                >
                  <Download size={18} /> {t('僅匯出對話紀錄')}
                </button>
                <button 
                  className="glass-button" 
                  onClick={() => setShowExportModal(false)}
                  style={{ width: '100%', padding: '12px', fontSize: '1.05rem', marginTop: '8px', background: 'var(--panel-bg-light)' }}
                >
                  {t('取消')}
                </button>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* Mock Mode Reminder Modal */}
      {!apiKey && !hasSeenMockWarning && createPortal(
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.85)', zIndex: 9999,
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <div className="glass-panel animate-slide-in" style={{
            maxWidth: '500px', width: '90%', padding: '40px',
            textAlign: 'center', borderRadius: '24px',
            border: '1px solid #FFD700',
            boxShadow: '0 0 40px rgba(255, 215, 0, 0.2)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
              💡 {t('溫馨提醒：目前為「模擬對話體驗」')}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '32px' }}>
              {t('您現在體驗的是內建的固定情境腳本。若希望 AI 根據您的實際發言給予動態、真實的回應與糾錯，請參考左側的')}<strong>「{t('使用說明')}」</strong>，{t('只要 1 分鐘即可快速申請')}<strong>{t('免費的')}</strong> {t('Gemini API 金鑰！')}
            </p>
            <button 
              className="glass-button active" 
              onClick={closeMockModal}
              style={{ width: '100%', padding: '16px', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
              {t('我知道了')}
            </button>
          </div>
        </div>,
        document.body
      )}

      {/* Pattern Hints Collapsible Panel (Hidden in free-mode and pattern-drill) */}
      {scenario?.id !== 'free-mode' && scenario?.id !== 'pattern-drill' && (
        <div style={{ marginBottom: '20px' }}>
          <button
            onClick={() => setShowPatternHints(!showPatternHints)}
            style={{
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px',
              padding: '12px 20px',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontWeight: 500,
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'var(--glass-bg)'}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Lightbulb size={18} className="text-accent" />
              {scenario?.id === 'curriculum-drill' 
                ? t('本課單字與句型') 
                : `${t('本情境推薦句型')} (${patternVersion === '01' ? t('基礎教科書版') : t('進階商務版')})`
              }
            </div>
            <span>{showPatternHints ? '▲ ' + t('收合') : '▼ ' + t('展開')}</span>
          </button>

          {showPatternHints && (() => {
            if (scenario?.id === 'curriculum-drill') {
               const vocab = scenario.unit?.vocab || [];
               const patterns = scenario.unit?.patterns || [];
               
               if (vocab.length === 0 && patterns.length === 0) return null;

               return (
                  <div className="glass-panel animate-slide-in" style={{ 
                    marginTop: '8px', 
                    padding: '16px 20px', 
                    background: 'rgba(255,255,255,0.02)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    {vocab.length > 0 && (
                      <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1rem' }}>🎯 {t('本課單字')}</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '8px' }}>
                          {vocab.map((v, idx) => (
                            <div key={idx} style={{ 
                              background: 'rgba(0,0,0,0.2)', 
                              padding: '8px', 
                              borderRadius: '6px',
                              borderLeft: '2px solid var(--accent-color)'
                            }}>
                              <div style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>{v.word}</div>
                              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t(v.zh)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {patterns.length > 0 && (
                      <div>
                        <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px', fontSize: '1rem' }}>✨ {t('核心句型')}</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '8px' }}>
                          {patterns.map((p, idx) => (
                            <div key={idx} style={{ 
                              background: 'rgba(0,0,0,0.2)', 
                              padding: '12px', 
                              borderRadius: '8px',
                              borderLeft: '2px solid var(--accent-color)'
                            }}>
                              <div style={{ fontWeight: 'bold', color: 'var(--text-primary)', marginBottom: '4px' }}>{p.pattern}</div>
                              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t(p.explanation)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
               );
            }

            const currentPatterns = patternVersion === '01' ? scenarioPatterns01 : scenarioPatterns02;
            const scenarioData = currentPatterns[scenario?.id] || currentPatterns['default'];
            const patterns = scenarioData ? (scenarioData[targetLanguage] || scenarioData['en'] || []) : [];

            if (patterns.length === 0) return null;

            return (
              <div className="glass-panel animate-slide-in" style={{ 
                marginTop: '8px', 
                padding: '16px 20px', 
                background: 'rgba(255,255,255,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                  {t('在對話中試著運用以下句型，讓您的表達更自然：')}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
                  {patterns.slice(0, 4).map((p, idx) => (
                    <div key={idx} style={{ 
                      background: 'rgba(0,0,0,0.2)', 
                      padding: '12px', 
                      borderRadius: '8px',
                      borderLeft: '2px solid var(--accent-color)'
                    }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '4px', color: 'var(--text-primary)' }}>{p.pattern}</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t(p.explanation)}</div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Messages area */}
      <div className="glass-panel" style={{ 
        flex: 1, 
        padding: '24px', 
        overflowY: 'auto', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px',
        marginBottom: '20px'
      }}>
        {displayHistory.map((msg, index) => {
          const isUser = msg.role === 'user';
          return (
            <div key={index} className="animate-slide-in" style={{ 
              display: 'flex', 
              flexDirection: 'row',
              alignSelf: isUser ? 'flex-end' : 'flex-start',
              maxWidth: '85%',
              gap: '12px',
              alignItems: 'flex-start'
            }}>
              {!isUser && (
                <img 
                  src="/ai_tutor_avatar.png" 
                  alt="AI Tutor" 
                  style={{ 
                    width: '40px', 
                    height: '40px', 
                    borderRadius: '50%', 
                    border: '2px solid var(--accent-color)',
                    background: 'var(--panel-bg-light)',
                    boxShadow: '0 4px 10px rgba(0, 240, 255, 0.15)',
                    flexShrink: 0,
                    marginTop: '4px'
                  }} 
                />
              )}
              <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
              
              <div 
                style={{
                  background: isUser ? 'var(--accent-color)' : 'var(--message-ai)',
                  color: isUser ? 'var(--bg-primary)' : 'var(--text-primary)',
                  padding: '16px 20px',
                  borderRadius: isUser ? '20px 20px 0 20px' : '20px 20px 20px 0',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  border: isUser ? 'none' : '1px solid var(--glass-border)',
                  position: 'relative'
                }}
                onMouseUp={!isUser ? () => handleTextSelection(index) : undefined}
                onTouchEnd={!isUser ? () => handleTextSelection(index) : undefined}
              >
                <p style={{ fontWeight: isUser ? 500 : 400, fontSize: '1.05rem', lineHeight: '1.5', whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' }}>
                  {(!isUser && translatedIndexes.has(index) && msg.translation) ? t(msg.translation) : msg.content}
                </p>

                {isUser && msg.content && (
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px', gap: '8px' }}>
                    <button 
                      onClick={() => handleSuggestClick(msg.content, chatHistory.indexOf(msg))}
                      style={{
                        background: 'var(--magic-bg)',
                        border: '1px solid var(--magic-border)',
                        color: 'var(--magic-color)',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'var(--magic-bg-hover)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'var(--magic-bg)'}
                      title={t("讓 AI 提供更道地、專業的說法建議")}
                    >
                      <Wand2 size={14} /> {t('AI 潤飾建議')}
                    </button>
                  </div>
                )}

                {!isUser && msg.content && !msg.isError && scenario?.id !== 'pattern-drill' && (
                  <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '12px', gap: '8px', flexWrap: 'wrap' }}>
                    
                    {/* TTS Read Aloud */}
                    <button 
                      onClick={() => handleSpeak(msg.content, index)}
                      style={{
                        background: playingIndex === index ? 'rgba(46, 213, 115, 0.2)' : 'rgba(46, 213, 115, 0.1)',
                        border: '1px solid #2ed573',
                        color: '#2ed573',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      onMouseEnter={(e) => {
                        if(playingIndex !== index) e.currentTarget.style.background = 'rgba(46, 213, 115, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        if(playingIndex !== index) e.currentTarget.style.background = 'rgba(46, 213, 115, 0.1)';
                      }}
                    >
                      {playingIndex === index ? <Square fill="currentColor" size={14} /> : <Volume2 size={14} />}
                      {playingIndex === index ? t("停止") : t("朗讀")}
                    </button>

                    {msg.translation && (
                      <button 
                        onClick={() => {
                          setTranslatedIndexes(prev => {
                            const next = new Set(prev);
                            if (next.has(index)) next.delete(index);
                            else next.add(index);
                            return next;
                          });
                        }}
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid var(--glass-border)',
                          color: 'var(--text-secondary)',
                          padding: '4px 12px',
                          borderRadius: '16px',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = 'var(--text-primary)';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = 'var(--text-secondary)';
                          e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        }}
                      >
                        {translatedIndexes.has(index) ? t("原文") : t("翻譯")}
                      </button>
                    )}

                    <button 
                      onClick={() => handleLearnClick(msg.content)}
                      style={{
                        background: 'rgba(0, 240, 255, 0.1)',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--accent-color)',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 240, 255, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)';
                      }}
                    >
                      {t('當句解析')}
                    </button>
                    
                    {/* Dynamic highlighted text parsing button */}
                    {selectedTextData.index === index && selectedTextData.text && (
                      <button 
                        onClick={() => handleLearnClick(selectedTextData.text)}
                        style={{
                          background: 'rgba(255, 171, 0, 0.1)',
                          border: '1px solid #FFAB00',
                          color: '#FFAB00',
                          padding: '4px 12px',
                          borderRadius: '16px',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 171, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 171, 0, 0.1)';
                        }}
                      >
                        {t('標記解析')}
                      </button>
                    )}
                    
                  </div>
                )}

                {!isUser && msg.isError && (
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px', gap: '8px' }}>
                    <button 
                      onClick={() => handleRetry(chatHistory.indexOf(msg))}
                      style={{
                        background: 'rgba(255, 171, 0, 0.1)',
                        border: '1px solid #FFAB00',
                        color: '#FFAB00',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 171, 0, 0.2)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 171, 0, 0.1)'}
                      title={t("重新產生回應")}
                    >
                      <RefreshCw size={14} /> {t('重新產生')}
                    </button>
                  </div>
                )}
              </div>

              {/* Correction UI */}
              {!isUser && msg.correction && (
                <div style={{
                  marginTop: '12px',
                  background: 'rgba(255, 71, 87, 0.05)',
                  border: '1px solid rgba(255, 71, 87, 0.2)',
                  borderRadius: '12px',
                  padding: '16px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--error-color)', fontWeight: 600 }}>
                    <AlertCircle size={18} /> {t('文法與錯誤糾正')}
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <span className="text-error" style={{ textDecoration: 'line-through', padding: '4px 8px', background: 'var(--error-bg)', borderRadius: '4px' }}>
                        {msg.correction.error}
                      </span>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <CheckCircle size={18} className="text-success" style={{ marginTop: '2px' }} />
                      <span className="text-success" style={{ padding: '4px 8px', background: 'var(--success-bg)', borderRadius: '4px', fontWeight: 500 }}>
                        {msg.correction.fixed}
                      </span>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', marginTop: '4px' }}>
                    <Lightbulb size={18} className="text-accent" style={{ marginTop: '2px' }} />
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{t(msg.correction.explanation)}</p>
                  </div>
                </div>
              )}

              {/* Extracted Vocab Inline UI */}
              {!isUser && msg.extractedVocab && (
                <div style={{
                  marginTop: '12px',
                  background: 'rgba(0, 240, 255, 0.05)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-color)', fontWeight: 600 }}>
                      <Lightbulb size={16} /> {t('發現新單字')}
                    </div>
                    <button
                      onClick={(e) => {
                        e.currentTarget.disabled = true;
                        e.currentTarget.innerHTML = `✓ ${t('已收錄')}`;
                        e.currentTarget.style.background = 'var(--success-bg)';
                        e.currentTarget.style.color = 'var(--success-color)';
                        e.currentTarget.style.borderColor = 'var(--success-color)';
                        addVocabulary(
                          msg.extractedVocab.term, 
                          msg.extractedVocab.meaning, 
                          msg.extractedVocab.example,
                          msg.extractedVocab.phonetic || '',
                          msg.extractedVocab.partOfSpeech || ''
                        );
                      }}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--accent-color)',
                        padding: '4px 12px',
                        borderRadius: '16px',
                        fontSize: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                      onMouseEnter={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.background = 'rgba(0, 240, 255, 0.1)'; }}
                      onMouseLeave={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.background = 'transparent'; }}
                    >
                      <CheckCircle size={14} /> {t('收錄至筆記本')}
                    </button>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'baseline' }}>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>{msg.extractedVocab.term}</strong>
                    {msg.extractedVocab.phonetic && <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>[{msg.extractedVocab.phonetic}]</span>}
                    {msg.extractedVocab.partOfSpeech && <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', background: 'rgba(0,240,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>{msg.extractedVocab.partOfSpeech}</span>}
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{msg.extractedVocab.meaning}</div>
                </div>
              )}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="animate-slide-in" style={{ 
            display: 'flex', 
            flexDirection: 'row',
            alignSelf: 'flex-start',
            maxWidth: '85%',
            gap: '12px',
            alignItems: 'flex-start'
          }}>
            <img 
              src="/ai_tutor_avatar.png" 
              alt="AI Tutor" 
              style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                border: '2px solid var(--accent-color)',
                background: 'var(--panel-bg-light)',
                boxShadow: '0 4px 10px rgba(0, 240, 255, 0.15)',
                flexShrink: 0,
                marginTop: '4px'
              }} 
            />
            <div style={{ alignSelf: 'flex-start', background: 'var(--message-ai)', padding: '16px 20px', borderRadius: '20px 20px 20px 0', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Wand2 size={16} className="text-accent" style={{ animation: 'typingGlow 2s infinite' }} />
              <div style={{ display: 'flex', gap: '6px' }}>
                <div className="typing-dot" style={{ width: '8px', height: '8px', background: 'var(--accent-color)', borderRadius: '50%', animation: 'typingGlow 1.5s infinite alternate' }}></div>
                <div className="typing-dot" style={{ width: '8px', height: '8px', background: 'var(--accent-color)', borderRadius: '50%', animation: 'typingGlow 1.5s infinite alternate 0.2s' }}></div>
                <div className="typing-dot" style={{ width: '8px', height: '8px', background: 'var(--accent-color)', borderRadius: '50%', animation: 'typingGlow 1.5s infinite alternate 0.4s' }}></div>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginLeft: '4px' }}>{t('AI 教練思考中...')}</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <form onSubmit={handleSend} className="glass-panel chat-input-container" style={{ padding: '16px', display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("聽打輸入中...或輸入中文草稿並點擊右側魔法棒 ✨")} 
          className="glass-input chat-input-wrapper" 
          style={{ flex: 1, padding: '16px 20px', fontSize: '1.05rem', minWidth: '200px' }}
          disabled={isTyping || isPolishing}
        />
        
        <div className="chat-buttons-wrapper" style={{ display: 'flex', gap: '8px' }}>
          {/* Magic Wand Polish Button */}
          <button 
            type="button" 
            onClick={handlePolish}
            className="glass-button" 
            style={{ 
              padding: '0 20px', 
              borderRadius: '12px', 
              background: isPolishing ? 'var(--panel-bg-light)' : 'var(--magic-bg)',
              border: '1px solid var(--magic-border)',
              color: 'var(--magic-color)',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            disabled={!input.trim() || isTyping || isPolishing || isRecording}
            title={t(`幫我翻譯成道地的 IT ${targetLanguage === 'en' ? '英文' : '日文'}`)}
          >
            {isPolishing ? (
              <div className="typing-dot" style={{ width: '8px', height: '8px', background: 'var(--magic-color)', borderRadius: '50%', animation: 'fadeIn 0.5s infinite alternate' }}></div>
            ) : (
              <>
                <Wand2 size={20} />
                <span style={{ fontWeight: 600 }}>{t('AI 潤飾')}</span>
              </>
            )}
          </button>

          {/* STT Dictation Button */}
          <button 
            type="button" 
            onClick={toggleRecording}
            className="glass-button" 
            style={{ 
              padding: '0 20px', 
              borderRadius: '12px', 
              background: isRecording ? 'rgba(255, 71, 87, 0.2)' : 'rgba(255, 71, 87, 0.1)',
              border: '1px solid rgba(255, 71, 87, 0.5)',
              color: '#ff4757',
              height: '56px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              animation: isRecording ? 'pulseRecording 2s infinite' : 'none',
              opacity: isGeminiRecording ? 0.7 : 1
            }}
            disabled={isTyping || isPolishing || isGeminiRecording}
            title={t("點擊切換麥克風語音輸入")}
          >
            {isGeminiRecording ? <Loader2 className="text-accent" style={{ animation: 'spin 2s linear infinite' }} size={20} /> : (isRecording ? <Square fill="currentColor" size={20} /> : <Mic size={20} />)}
            <span style={{ fontWeight: 600 }}>{isGeminiRecording ? t('正在聽寫...') : (isRecording ? t('停止錄音') : t('口說輸入'))}</span>
          </button>

          {/* Send Button */}
          <button 
            type="submit" 
            className="glass-button active" 
            style={{ padding: '0 24px', borderRadius: '12px', height: '56px' }}
            disabled={!input.trim() || isTyping || isPolishing || isRecording}
          >
            <Send size={20} />
          </button>
        </div>
      </form>

      {/* Learning Modal */}
      {(isAnalyzing || learningModalData) && (
        <div className="animate-fade-in" style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000,
          padding: '20px'
        }}>
          <div className="glass-panel animate-slide-in" style={{
            width: '100%', maxWidth: '600px',
            maxHeight: '85vh', overflowY: 'auto',
            padding: '32px', position: 'relative',
            background: 'rgba(15, 23, 42, 0.95)',
            boxShadow: '0 20px 40px rgba(0, 240, 255, 0.15)'
          }}>
            <button 
              onClick={() => { setIsAnalyzing(false); setLearningModalData(null); }}
              style={{ position: 'absolute', top: '16px', right: '16px', background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: '8px' }}
            >
              <X size={24} />
            </button>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Lightbulb className="text-accent" />
              職場實戰解析
            </h3>

            {isAnalyzing ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 0', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div className="typing-dot" style={{ width: '12px', height: '12px', background: 'var(--accent-color)', borderRadius: '50%', animation: 'fadeIn 1s infinite alternate' }}></div>
                  <div className="typing-dot" style={{ width: '12px', height: '12px', background: 'var(--accent-color)', borderRadius: '50%', animation: 'fadeIn 1s infinite alternate 0.2s' }}></div>
                  <div className="typing-dot" style={{ width: '12px', height: '12px', background: 'var(--accent-color)', borderRadius: '50%', animation: 'fadeIn 1s infinite alternate 0.4s' }}></div>
                </div>
                <p className="text-muted">AI 正在深度處理中...</p>
              </div>
            ) : learningModalData && learningModalData.isSuggestion ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h4 style={{ color: 'var(--text-secondary)', marginBottom: '8px', fontSize: '1rem' }}>您的原始輸入：</h4>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', color: 'var(--text-primary)' }}>
                    {learningModalData.original}
                  </div>
                </div>
                <div>
                  <h4 style={{ color: 'var(--accent-color)', marginBottom: '8px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Wand2 size={18} /> AI 道地建議說法：
                  </h4>
                  <div style={{ background: 'var(--analysis-bg)', border: '1px solid var(--analysis-border)', padding: '20px', borderRadius: '8px', color: 'var(--analysis-text)', fontSize: '1.1rem', fontWeight: 500, lineHeight: 1.6 }}>
                    {learningModalData.suggestion}
                  </div>
                </div>
              </div>
            ) : learningModalData && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                
                {learningModalData.vocab && learningModalData.vocab.length > 0 && (
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>🎯 重要生詞</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {learningModalData.vocab.map((v, i) => (
                        <label key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--panel-bg-light)', padding: '12px 16px', borderRadius: '8px', borderLeft: '3px solid var(--accent-color)', cursor: 'pointer' }}>
                          <input 
                            type="checkbox" 
                            checked={v.checked !== false} 
                            onChange={() => {
                              setLearningModalData(prev => {
                                const newVocab = [...prev.vocab];
                                newVocab[i] = { ...newVocab[i], checked: !(newVocab[i].checked !== false) };
                                return { ...prev, vocab: newVocab };
                              });
                            }}
                            style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-color)' }}
                          />
                          <div style={{ flex: 1 }}>
                            <span style={{ color: 'var(--text-primary)', fontWeight: 600, marginRight: '8px', fontSize: '1.1rem' }}>{v.word}</span>
                            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginRight: '12px', fontStyle: 'italic' }}>{v.partOfSpeech}</span>
                            <span style={{ color: 'var(--text-secondary)' }}>{v.zh}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {learningModalData.patterns && learningModalData.patterns.length > 0 && (
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>✨ 實用句型</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {learningModalData.patterns.map((p, i) => (
                        <label key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', background: 'var(--panel-bg-light)', padding: '16px', borderRadius: '8px', cursor: 'pointer' }}>
                          <input 
                            type="checkbox" 
                            checked={p.checked !== false} 
                            onChange={() => {
                              setLearningModalData(prev => {
                                const newPatterns = [...prev.patterns];
                                newPatterns[i] = { ...newPatterns[i], checked: !(newPatterns[i].checked !== false) };
                                return { ...prev, patterns: newPatterns };
                              });
                            }}
                            style={{ width: '18px', height: '18px', cursor: 'pointer', marginTop: '4px', accentColor: 'var(--accent-color)' }}
                          />
                          <div style={{ flex: 1 }}>
                            <div style={{ color: 'var(--accent-color)', fontWeight: 600, marginBottom: '4px', fontSize: '1.05rem' }}>{p.pattern}</div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>{p.explanation}</div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {learningModalData.grammar && (
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>💡 實戰文法語感</h4>
                    <div style={{ background: 'var(--panel-bg-light)', padding: '20px', borderRadius: '8px', lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      {learningModalData.grammar}
                    </div>
                  </div>
                )}

                {/* Save Button for Learning Modal */}
                {(!learningModalData.isSuggestion && (learningModalData.vocab?.length > 0 || learningModalData.patterns?.length > 0)) && (
                  <div style={{ marginTop: '16px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => {
                        if (learningModalData.vocab) {
                          learningModalData.vocab.filter(v => v.checked !== false).forEach(v => {
                            addVocabulary(v.word, v.zh, v.example || '', v.phonetic || '', v.partOfSpeech || '');
                          });
                        }
                        if (learningModalData.patterns && addPattern) {
                          learningModalData.patterns.filter(p => p.checked !== false).forEach(p => {
                            addPattern(p.pattern, p.explanation);
                          });
                        }
                        setIsAnalyzing(false);
                        setLearningModalData(null);
                      }}
                      className="glass-button active"
                      style={{ padding: '12px 24px', fontSize: '1.1rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      <CheckCircle size={18} /> {t('收錄勾選項目並關閉')}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Chat;
