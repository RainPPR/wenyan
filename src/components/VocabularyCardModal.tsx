import React from 'react';
import { VocabularyEntry } from '../types';
import { X, BookOpen, AlertCircle } from 'lucide-react';

interface ModalProps {
  entry: VocabularyEntry | null;
  onClose: () => void;
}

export const VocabularyCardModal: React.FC<ModalProps> = ({ entry, onClose }) => {
  if (!entry) return null;

  const pinyinStr = Array.isArray(entry.pinyin) ? entry.pinyin.join(' / ') : entry.pinyin || '';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm overflow-y-auto cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl bg-[#fdfbf7] border border-amber-900/20 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200 cursor-default"
      >
        {/* Modal Header */}
        <div className="bg-amber-950 text-amber-50 px-6 py-5 flex items-center justify-between border-b border-amber-900/60 shadow-md">
          <div className="flex items-baseline space-x-3">
            <span className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 tracking-wider">
              {entry.word}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-mono font-medium text-amber-200 bg-amber-900/80 px-2.5 py-0.5 rounded-md border border-amber-700/50 shadow-inner">
                {pinyinStr}
              </span>
              <span className="text-xs text-amber-300/90 font-serif">
                {entry.categoryLabel}
                {entry.radical ? ` · 偏旁 [${entry.radical}]` : ''}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-amber-900/60 hover:bg-amber-800 text-amber-200 hover:text-amber-50 transition-colors"
            title="关闭 (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-stone-800 font-serif">
          {/* Exam Tips / Core Warning */}
          {entry.examTips && (
            <div className="bg-amber-50/90 border-l-4 border-amber-700 p-4 rounded-r-xl shadow-sm text-amber-950 flex items-start space-x-3.5 border border-amber-200/60">
              <AlertCircle className="w-5 h-5 text-amber-800 mt-0.5 shrink-0" />
              <div className="space-y-1">
                <h4 className="font-serif font-bold text-amber-950 text-sm tracking-wide">
                  【考点探微 & 易错警示】
                </h4>
                <p className="text-sm leading-relaxed text-amber-900/90 font-sans">
                  {entry.examTips}
                </p>
              </div>
            </div>
          )}

          {/* Senses & Textbook Examples */}
          <div className="space-y-5">
            <h3 className="text-base font-serif font-bold text-amber-950 border-b border-amber-900/15 pb-2.5 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-amber-800" />
              <span>义项拆解与高中课文文言例句</span>
            </h3>

            <div className="grid gap-4">
              {(entry.senses || []).map((sense, idx) => (
                <div
                  key={idx}
                  className="bg-white/80 backdrop-blur-xs p-5 rounded-xl border border-amber-900/10 shadow-xs hover:border-amber-400/50 transition-all space-y-3"
                >
                  <div className="flex items-center space-x-2.5">
                    <span className="inline-flex items-center justify-center bg-amber-900 text-amber-100 text-xs px-2.5 py-0.5 rounded font-serif font-bold tracking-wider shadow-xs">
                      义项 {idx + 1}
                    </span>
                    <span className="text-xs font-sans font-semibold text-stone-600 bg-stone-100 px-2 py-0.5 rounded border border-stone-200/60">
                      {sense.pos}
                    </span>
                    <span className="font-serif font-bold text-stone-900 text-base sm:text-lg">
                      {sense.meaning}
                    </span>
                  </div>

                  {/* Examples */}
                  <div className="space-y-3 pl-3.5 border-l-2 border-amber-700/40">
                    {(sense.examples || []).map((ex, exIdx) => (
                      <div key={exIdx} className="space-y-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="font-serif font-bold text-stone-900 text-base sm:text-[17px] leading-relaxed">
                            “{ex.text}”
                          </p>
                          <span className="text-[11px] text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded border border-amber-300/50 font-serif shrink-0">
                            {ex.source}
                          </span>
                        </div>
                        <p className="text-stone-600 font-sans text-xs sm:text-sm leading-relaxed">
                          <span className="font-serif font-semibold text-amber-900/80 mr-1">
                            译：
                          </span>
                          {ex.translation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="bg-stone-100/90 px-6 py-3.5 border-t border-stone-200/80 flex items-center justify-between">
          <p className="text-xs text-stone-500 font-serif">文言实词虚词全义项及高中课文例句整理</p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 text-stone-100 hover:bg-stone-900 text-xs rounded-lg transition-colors font-medium shadow-xs"
          >
            关闭词条
          </button>
        </div>
      </div>
    </div>
  );
};
