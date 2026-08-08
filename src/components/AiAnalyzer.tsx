import React, { useState, useEffect } from 'react';
import { Sparkles, Send, BookOpen, AlertCircle, Loader2 } from 'lucide-react';

interface AiAnalyzerProps {
  initialSentence?: string;
  initialTargetWord?: string;
}

export const AiAnalyzer: React.FC<AiAnalyzerProps> = ({
  initialSentence = '',
  initialTargetWord = ''
}) => {
  const [sentence, setSentence] = useState(initialSentence);
  const [targetWord, setTargetWord] = useState(initialTargetWord);
  const [loading, setLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);

  useEffect(() => {
    if (initialSentence) {
      setSentence(initialSentence);
      setTargetWord(initialTargetWord);
      handleAnalyze(initialSentence, initialTargetWord);
    }
  }, [initialSentence, initialTargetWord]);

  const handleAnalyze = async (sentToAnalyze?: string, wordToAnalyze?: string) => {
    const querySent = sentToAnalyze || sentence;
    const queryWord = wordToAnalyze !== undefined ? wordToAnalyze : targetWord;

    if (!querySent.trim()) return;

    setLoading(true);
    setAnalysisResult(null);

    try {
      const response = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sentence: querySent,
          targetWord: queryWord
        })
      });

      const data = await response.json();
      setAnalysisResult(data.analysis || '无法获得有效解析。');
    } catch (err: any) {
      setAnalysisResult('发生网络错误或服务繁忙，请稍后再试。');
    } finally {
      setLoading(false);
    }
  };

  const presetExamples = [
    { text: '青，取之于蓝，而青于蓝。', word: '而' },
    { text: '沛公军霸上，未得与项羽相见。', word: '军' },
    { text: '师者，所以传道受业解惑也。', word: '所以' },
    { text: '谨庠序之教，申之以孝梯之义。', word: '申' }
  ];

  return (
    <div className="max-w-3xl mx-auto space-y-6 font-sans">
      {/* Header Info */}
      <div className="bg-stone-50 border border-stone-200 p-5 rounded-xl shadow-sm space-y-2">
        <div className="flex items-center space-x-2 text-amber-900 font-serif font-bold text-base">
          <Sparkles className="w-5 h-5 text-amber-600" />
          <h3>AI 文言文句法与词义深度赏析助手</h3>
        </div>
        <p className="text-xs text-stone-600 leading-relaxed">
          输入任何高中文言文例句，AI 将基于现代文言语法规则，深度解析句中实词活用（如名词作动词、使动/意动）、虚词用法、宾语前置等高考核心考点。
        </p>
      </div>

      {/* Input Form */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-md space-y-4">
        <div className="space-y-3">
          <label className="block text-xs font-serif font-bold text-stone-700">
            文言文句子 / 经典段落：
          </label>
          <textarea
            rows={3}
            value={sentence}
            onChange={(e) => setSentence(e.target.value)}
            placeholder="请输入需要剖析的文言文句子（如：青，取之于蓝，而青于蓝）..."
            className="w-full p-3 bg-stone-50 border border-stone-300 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/50 focus:border-amber-700"
          />

          <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              <span className="text-xs font-serif text-stone-600 shrink-0">
                重点关注字词（可选）：
              </span>
              <input
                type="text"
                value={targetWord}
                onChange={(e) => setTargetWord(e.target.value)}
                placeholder="如：而"
                className="w-28 px-3 py-1.5 bg-stone-50 border border-stone-300 rounded text-xs text-stone-800"
              />
            </div>

            <button
              onClick={() => handleAnalyze()}
              disabled={loading || !sentence.trim()}
              className="w-full sm:w-auto px-6 py-2.5 bg-amber-800 hover:bg-amber-900 disabled:opacity-50 text-amber-50 text-xs font-serif font-bold rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-md shrink-0"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                  <span>AI 正在研读句法中...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>提交 AI 语法赏析</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick Presets */}
        <div className="pt-3 border-t border-stone-100 space-y-2">
          <span className="text-[11px] font-serif text-stone-400 block">
            快速试用教材经典名句：
          </span>
          <div className="flex flex-wrap gap-2">
            {presetExamples.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSentence(ex.text);
                  setTargetWord(ex.word);
                  handleAnalyze(ex.text, ex.word);
                }}
                className="text-xs bg-stone-100 hover:bg-amber-50 border border-stone-200 text-stone-700 px-2.5 py-1 rounded transition-colors font-serif"
              >
                “{ex.text}”（重点：{ex.word}）
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Analysis Output Result */}
      {analysisResult && (
        <div className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-6 shadow-md space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center space-x-2 text-amber-900 font-serif font-bold text-sm border-b border-amber-200/80 pb-2">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>【AI 句法与词义深度分析报告】</span>
          </div>

          <div className="prose prose-sm prose-amber max-w-none text-stone-800 font-serif whitespace-pre-wrap leading-relaxed text-sm pt-1">
            {analysisResult}
          </div>
        </div>
      )}
    </div>
  );
};
