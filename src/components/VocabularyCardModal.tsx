import React from 'react';
import { VocabularyEntry } from '../types';
import { X, BookOpen, AlertCircle } from 'lucide-react';

interface ModalProps {
  entry: VocabularyEntry | null;
  onClose: () => void;
}

export const VocabularyCardModal: React.FC<ModalProps> = ({
  entry,
  onClose
}) => {
  if (!entry) return null;

  const pinyinStr = Array.isArray(entry.pinyin)
    ? entry.pinyin.join(' / ')
    : (entry.pinyin || '');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-stone-50 border border-stone-300 rounded-xl shadow-2xl overflow-hidden my-8 animate-in fade-in duration-200">
        {/* Modal Header */}
        <div className="bg-amber-900 text-amber-50 px-6 py-4 flex items-center justify-between border-b border-amber-800">
          <div className="flex items-center space-x-3">
            <span className="text-3xl font-serif font-bold text-amber-200">
              {entry.word}
            </span>
            <div>
              <span className="text-sm font-sans font-medium text-amber-300 bg-amber-950/60 px-2.5 py-0.5 rounded border border-amber-700/50">
                {pinyinStr}
              </span>
              <span className="ml-2 text-xs text-amber-400 font-serif">
                {entry.categoryLabel}
                {entry.radical ? ` · 偏旁 [${entry.radical}]` : ''}
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-amber-800/60 hover:bg-amber-700 text-amber-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto space-y-6 text-stone-800 font-sans">
          {/* Exam Tips / Core Warning */}
          {entry.examTips && (
            <div className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg shadow-sm text-amber-950 flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-amber-700 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-serif font-bold text-amber-900 text-sm mb-1">
                  【高考必考陷阱 & 考点警示】
                </h4>
                <p className="text-sm leading-relaxed text-amber-900/90">
                  {entry.examTips}
                </p>
              </div>
            </div>
          )}

          {/* Senses & Textbook Examples */}
          <div className="space-y-4">
            <h3 className="text-base font-serif font-bold text-amber-950 border-b border-stone-200 pb-2 flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-amber-800" />
              <span>多义项拆解与高中必修课文经典例句</span>
            </h3>

            <div className="grid gap-4">
              {(entry.senses || []).map((sense, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-lg border border-stone-200 shadow-sm hover:border-amber-300 transition-colors"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-block bg-amber-100 text-amber-900 text-xs px-2 py-0.5 rounded font-serif font-bold">
                      义项 {idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                      {sense.pos}
                    </span>
                    <span className="font-serif font-bold text-stone-900 text-base">
                      {sense.meaning}
                    </span>
                  </div>

                  {/* Examples */}
                  <div className="space-y-2 mt-3 pl-3 border-l-2 border-amber-200">
                    {(sense.examples || []).map((ex, exIdx) => (
                      <div key={exIdx} className="text-sm space-y-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="font-serif font-bold text-stone-900 text-base">
                            “{ex.text}”
                          </p>
                          <span className="text-xs text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60 font-serif">
                            {ex.source}
                          </span>
                        </div>
                        <p className="text-stone-600 text-xs leading-relaxed">
                          译文：{ex.translation}
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
        <div className="bg-stone-100 px-6 py-3 border-t border-stone-200 flex items-center justify-between">
          <p className="text-xs text-stone-500 font-serif">
            文言实词虚词全义项及高中课文例句整理
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 text-stone-100 hover:bg-stone-900 text-xs rounded-md transition-colors font-medium"
          >
            关闭词条
          </button>
        </div>
      </div>
    </div>
  );
};
