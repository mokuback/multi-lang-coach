import React from 'react';
import { createPortal } from 'react-dom';
import { Lightbulb, Loader2, Wand2, CheckCircle, X } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { useAppState } from '../contexts/AppStateContext';

interface VocabItem {
  word: string;
  meanings?: Record<string, string>;
  zh?: string;
  example?: string;
  phonetic?: string;
  partOfSpeech?: string;
  checked?: boolean;
}

interface PatternItem {
  pattern: string;
  explanation: string;
  explanations?: Record<string, string>;
  checked?: boolean;
}

interface GrammarItem {
  grammar: string;
}

interface LearningData {
  isSuggestion?: boolean;
  vocab?: VocabItem[];
  patterns?: PatternItem[];
  grammar?: string;
}

interface Props {
  learningModalData: LearningData | null;
  setLearningModalData: (data: LearningData | null) => void;
  isAnalyzing: boolean;
  setIsAnalyzing: (v: boolean) => void;
  closeModal: () => void;
  isPolishing: boolean;
}

const ChatLearningModal = ({
  learningModalData,
  setLearningModalData,
  isAnalyzing,
  setIsAnalyzing,
  closeModal,
  isPolishing
}: Props) => {
  const { t, getLocalizedContent } = useI18n();
  const { state: { targetLanguage }, setVocabulary, setSavedPatterns } = useAppState();

  if (!learningModalData) return null;

  return createPortal(
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
      background: 'rgba(0,0,0,0.85)', zIndex: 9999,
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      backdropFilter: 'blur(10px)', overflow: 'hidden'
    }}>
      <div className="glass-panel animate-slide-in" style={{
        maxWidth: '700px', width: '95%', maxHeight: '85vh',
        overflowY: 'auto', padding: '30px',
        borderRadius: '24px',
        border: '1px solid var(--glass-border)',
        boxShadow: '0 0 40px rgba(0, 0, 0, 0.5)',
        position: 'relative'
      }}>
        {/* Close button */}
        <button
          onClick={closeModal}
          style={{
            position: 'absolute', top: '16px', right: '16px',
            background: 'rgba(255,255,255,0.1)', border: 'none',
            borderRadius: '50%', width: '32px', height: '32px',
            cursor: 'pointer', display: 'flex', alignItems: 'center',
            justifyContent: 'center', color: 'var(--text-primary)'
          }}
        >
          <X size={18} />
        </button>

        {isAnalyzing && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <Loader2 size={48} className="text-accent" style={{ animation: 'spinChat 2s linear infinite' }} />
            <p style={{ marginTop: '24px', fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
              {isPolishing ? t('AI 正在為您潤飾句子...') : t('AI 正在分析句子...')}
            </p>
          </div>
        )}

        {!isAnalyzing && learningModalData && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '4px', color: 'var(--text-primary)' }}>
              {learningModalData.isSuggestion ? '✨' : '📖'} {t('AI 分析建議')}
            </h3>

            {learningModalData.vocab && learningModalData.vocab.length > 0 && (
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>
                  📚 {t('實用單字')}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {learningModalData.vocab.map((v, i) => (
                    <label key={i} style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      background: 'var(--panel-bg-light)', padding: '12px 16px',
                      borderRadius: '8px', cursor: 'pointer'
                    }}>
                      <input
                        type="checkbox"
                        checked={v.checked !== false}
                        onChange={() => {
                          setLearningModalData({
                            ...learningModalData,
                            vocab: learningModalData.vocab!.map((item, idx) =>
                              idx === i ? { ...item, checked: !(item.checked !== false) } : item
                            )
                          });
                        }}
                        style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: 'var(--accent-color)' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', flexWrap: 'wrap' }}>
                          <span style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '1.1rem' }}>
                            {v.word}
                          </span>
                          <span style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '1rem' }}>
                            {v.meanings ? getLocalizedContent(v.meanings) : v.zh || ''}
                          </span>
                          {v.phonetic && (
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                              [{v.phonetic}]
                            </span>
                          )}
                          {v.partOfSpeech && (
                            <span style={{
                              fontSize: '0.8rem',
                              background: 'rgba(255,255,255,0.1)', padding: '2px 8px',
                              borderRadius: '4px', color: 'var(--text-muted)'
                            }}>{v.partOfSpeech}</span>
                          )}
                        </div>
                        {v.example && (
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
                            {v.example}
                          </div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {learningModalData.patterns && learningModalData.patterns.length > 0 && (
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>
                  ✨ {t('實用句型')}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {learningModalData.patterns.map((p, i) => (
                    <label key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px',
                      background: 'var(--panel-bg-light)', padding: '16px',
                      borderRadius: '8px', cursor: 'pointer'
                    }}>
                      <input
                        type="checkbox"
                        checked={p.checked !== false}
                        onChange={() => {
                          setLearningModalData({
                            ...learningModalData,
                            patterns: learningModalData.patterns!.map((item, idx) =>
                              idx === i ? { ...item, checked: !(item.checked !== false) } : item
                            )
                          });
                        }}
                        style={{ width: '18px', height: '18px', cursor: 'pointer', marginTop: '4px', accentColor: 'var(--accent-color)' }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', flexWrap: 'wrap', marginBottom: '4px' }}>
                          <span style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.05rem' }}>
                            {p.pattern}
                          </span>
                          <span style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontWeight: 400 }}>
                            {getLocalizedContent(p.explanations || { 'zh-TW': p.explanation || '' })}
                          </span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {learningModalData.grammar && (
              <div>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontSize: '1.2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '8px' }}>
                  💡 {t('實戰文法語感')}
                </h4>
                <div style={{
                  background: 'var(--panel-bg-light)', padding: '20px',
                  borderRadius: '8px', lineHeight: '1.8',
                  color: 'var(--text-secondary)', fontSize: '0.95rem'
                }}>
                  {learningModalData.grammar}
                </div>
              </div>
            )}

            {(!learningModalData.isSuggestion &&
              ((learningModalData.vocab && learningModalData.vocab.length > 0) ||
               (learningModalData.patterns && learningModalData.patterns.length > 0))) && (
              <div style={{ marginTop: '16px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => {
                    if (learningModalData.vocab) {
                      const newVocab = learningModalData.vocab
                        .filter(v => v.checked !== false)
                        .map(v => ({ 
                          term: v.word, 
                          meaning: v.meanings ? getLocalizedContent(v.meanings) : (v.zh || ''), 
                          example: v.example || '', 
                          phonetic: v.phonetic || '', 
                          partOfSpeech: v.partOfSpeech || '', 
                          lang: targetLanguage 
                        }));
                      setVocabulary(prev => {
                        const existing = [...prev];
                        for (const item of newVocab) {
                          if (!existing.some((v: any) => v.term.toLowerCase() === item.term.toLowerCase() && v.lang === item.lang)) {
                            existing.unshift(item);
                          }
                        }
                        return existing;
                      });
                    }
                    if (learningModalData.patterns) {
                      const newPatterns = learningModalData.patterns
                        .filter(p => p.checked !== false)
                        .map(p => ({ pattern: p.pattern, explanation: p.explanation, lang: targetLanguage }));
                      setSavedPatterns(prev => {
                        const existing = [...prev];
                        for (const item of newPatterns) {
                          if (!existing.some((p: any) => p.pattern === item.pattern && p.lang === item.lang)) {
                            existing.unshift(item);
                          }
                        }
                        return existing;
                      });
                    }
                    setIsAnalyzing(false);
                    closeModal();
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
    </div>,
    document.body
  );
};

export default ChatLearningModal;

