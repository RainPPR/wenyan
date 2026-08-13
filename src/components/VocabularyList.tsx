import React, { useState, useMemo } from 'react';
import { VocabularyEntry } from '../types';
import { Search, Filter, ChevronRight, BookOpen } from 'lucide-react';

interface VocabularyListProps {
  vocabulary: VocabularyEntry[];
  onSelectEntry: (entry: VocabularyEntry) => void;
}

/**
 * Normalizes pinyin strings by removing tone diacritics and converting to lowercase.
 * e.g., "wàng" -> "wang", "cháo" -> "chao"
 */
function normalizePinyin(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

/**
 * Calculates a multi-tier relevance score for a vocabulary entry given a search query.
 * Higher score = higher priority in search results.
 */
function calculateRelevanceScore(entry: VocabularyEntry, rawQuery: string): number {
  const query = rawQuery.trim().toLowerCase();
  if (!query) return 0;

  // Support multi-keyword searches split by whitespace
  const tokens = query.split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return 0;

  let totalScore = 0;

  for (const q of tokens) {
    const qPinyinNorm = normalizePinyin(q);
    const word = (entry.word || '').toLowerCase();
    let tokenScore = 0;

    // 1. Word Name Match (Highest priority)
    if (word === q) {
      tokenScore += 10000;
    } else if (word.startsWith(q)) {
      tokenScore += 7500;
    } else if (word.includes(q)) {
      tokenScore += 5000;
    }

    // 2. Pinyin Match (Exact, Prefix, Substring with tone-stripping support)
    const pinyinList = Array.isArray(entry.pinyin) ? entry.pinyin : [entry.pinyin || ''];
    for (const py of pinyinList) {
      const pyLower = (py || '').toLowerCase();
      const pyNorm = normalizePinyin(pyLower);

      if (pyLower === q || pyNorm === qPinyinNorm) {
        tokenScore += 4500;
      } else if (pyLower.startsWith(q) || pyNorm.startsWith(qPinyinNorm)) {
        tokenScore += 3500;
      } else if (pyLower.includes(q) || pyNorm.includes(qPinyinNorm)) {
        tokenScore += 2500;
      }
    }

    // 3. Core Definition & Part of Speech Match
    if (Array.isArray(entry.senses)) {
      for (const sense of entry.senses) {
        const meaning = (sense.meaning || '').toLowerCase();
        const pos = (sense.pos || '').toLowerCase();

        if (meaning === q) {
          tokenScore += 3000;
        } else if (meaning.startsWith(q)) {
          tokenScore += 2200;
        } else if (meaning.includes(q)) {
          tokenScore += 1600;
        }

        if (pos.includes(q)) {
          tokenScore += 1400;
        }

        // Examples inside sense
        if (Array.isArray(sense.examples)) {
          for (const ex of sense.examples) {
            const source = (ex.source || '').toLowerCase();
            const text = (ex.text || '').toLowerCase();
            const translation = (ex.translation || '').toLowerCase();

            // Textbook / Article Title Match (e.g., 《鸿门宴》)
            if (source.includes(q)) {
              tokenScore += 1300;
            }
            // Classical Sentence Quote Match
            if (text.includes(q)) {
              tokenScore += 800;
            }
            // Modern Translation Match
            if (translation.includes(q)) {
              tokenScore += 400;
            }
          }
        }
      }
    }

    // 4. Radical, Category Label, and Exam Tips Match
    if (entry.radical && entry.radical.toLowerCase().includes(q)) {
      tokenScore += 1800;
    }
    if (entry.categoryLabel && entry.categoryLabel.toLowerCase().includes(q)) {
      tokenScore += 1000;
    }
    if (entry.examTips && entry.examTips.toLowerCase().includes(q)) {
      tokenScore += 1500;
    }

    // If a token matches nowhere, entire multi-token match fails
    if (tokenScore === 0) {
      return 0;
    }
    totalScore += tokenScore;
  }

  // 5. High Frequency Bonus
  if (totalScore > 0 && entry.isHighFrequency) {
    totalScore += 50;
  }

  // 6. Word Compactness Bonus (shorter words rank higher when matching substring, e.g. "望" vs "望洋兴叹")
  const wordLower = (entry.word || '').toLowerCase();
  if (totalScore >= 5000 && wordLower.includes(query)) {
    totalScore += Math.max(0, 100 - wordLower.length * 10);
  }

  return totalScore;
}

export const VocabularyList: React.FC<VocabularyListProps> = ({ vocabulary, onSelectEntry }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyHighFreq, setOnlyHighFreq] = useState(false);

  // Filtered and prioritized dataset based on weighted relevance scoring
  const filteredList = useMemo(() => {
    const query = searchTerm.trim();

    return vocabulary
      .map((item) => {
        // Category filter
        if (selectedCategory !== 'all' && item.category !== selectedCategory) {
          return { item, score: -1 };
        }

        // High frequency filter
        if (onlyHighFreq && !item.isHighFrequency) {
          return { item, score: -1 };
        }

        // If no search term, score is 0
        if (!query) {
          return { item, score: 0 };
        }

        // Calculate relevance score
        const score = calculateRelevanceScore(item, query);
        return { item, score };
      })
      .filter((entry) => entry.score >= 0)
      .sort((a, b) => {
        // If searching, sort primarily by relevance score descending
        if (query) {
          if (b.score !== a.score) {
            return b.score - a.score;
          }
        }
        // Secondary sort: High frequency entries first
        if (b.item.isHighFrequency !== a.item.isHighFrequency) {
          return (b.item.isHighFrequency ? 1 : 0) - (a.item.isHighFrequency ? 1 : 0);
        }
        return 0;
      })
      .map((entry) => entry.item);
  }, [vocabulary, searchTerm, selectedCategory, onlyHighFreq]);

  return (
    <div className="space-y-6">
      {/* Search and Filters Control Panel */}
      <div className="bg-stone-50 border border-stone-200 p-4 sm:p-5 rounded-xl shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          {/* Search Input Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="搜索字词、拼音、义项或例句（如：望、ài、通假、鸿门宴）..."
              className="w-full pl-10 pr-16 py-2.5 bg-white border border-stone-300 rounded-lg text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/50 focus:border-amber-700 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-600 bg-stone-100 hover:bg-stone-200 px-2 py-1 rounded transition-colors"
              >
                清空
              </button>
            )}
          </div>

          {/* High Frequency Filter Toggle */}
          <button
            onClick={() => setOnlyHighFreq(!onlyHighFreq)}
            className={`flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-lg text-xs font-serif font-bold transition-all border ${
              onlyHighFreq
                ? 'bg-amber-900 text-amber-100 border-amber-800 shadow-sm'
                : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-100'
            }`}
          >
            <span>只看高频重点字词</span>
          </button>
        </div>

        {/* Category Pills Filter */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-1 text-xs font-serif no-scrollbar">
          <span className="text-stone-500 font-sans flex items-center mr-1 shrink-0">
            <Filter className="w-3.5 h-3.5 mr-1" /> 分类：
          </span>

          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-md transition-colors shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-amber-800 text-amber-50 font-bold'
                : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
            }`}
          >
            全部汇总 ({vocabulary.length})
          </button>

          <button
            onClick={() => setSelectedCategory('shici')}
            className={`px-3 py-1.5 rounded-md transition-colors shrink-0 ${
              selectedCategory === 'shici'
                ? 'bg-amber-800 text-amber-50 font-bold'
                : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
            }`}
          >
            文言实词
          </button>

          <button
            onClick={() => setSelectedCategory('xuci')}
            className={`px-3 py-1.5 rounded-md transition-colors shrink-0 ${
              selectedCategory === 'xuci'
                ? 'bg-amber-800 text-amber-50 font-bold'
                : 'bg-stone-200/80 text-stone-700 hover:bg-stone-300'
            }`}
          >
            文言虚词
          </button>
        </div>
      </div>

      {/* Results Header Info */}
      <div className="flex items-center justify-between text-xs text-stone-500 px-1 font-serif">
        <span>
          共检索到{' '}
          <strong className="text-amber-900 font-bold font-mono text-sm">
            {filteredList.length}
          </strong>{' '}
          条无重复文言词条
          {searchTerm.trim() && (
            <span className="ml-1 text-amber-800 font-sans font-medium">
              （按字词精准度与关联权重智能排序）
            </span>
          )}
        </span>
        <span>点击卡片查看高中必修课文经典例句与考点解析</span>
      </div>

      {/* Grid of Vocabulary Cards */}
      {filteredList.length === 0 ? (
        <div className="text-center py-16 bg-stone-50 border border-stone-200 rounded-xl space-y-3">
          <BookOpen className="w-12 h-12 mx-auto text-stone-300" />
          <p className="text-stone-600 font-serif font-bold text-base">未检索到匹配的词条</p>
          <p className="text-xs text-stone-400">尝试更换搜索关键字，或清除高频过滤条件</p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
              setOnlyHighFreq(false);
            }}
            className="px-4 py-1.5 bg-amber-800 text-amber-50 rounded text-xs font-serif hover:bg-amber-900 transition-colors"
          >
            重置所有检索条件
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredList.map((item) => {
            const pinyinStr = Array.isArray(item.pinyin) ? item.pinyin.join(' / ') : item.pinyin;

            return (
              <div
                key={item.id}
                className="group relative bg-white border border-stone-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-amber-400 transition-all flex flex-col justify-between cursor-pointer"
                onClick={() => onSelectEntry(item)}
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-2xl font-serif font-bold text-amber-950 group-hover:text-amber-800 transition-colors">
                        {item.word}
                      </span>
                      <span className="text-xs text-stone-500 font-sans font-medium">
                        [{pinyinStr}]
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-serif bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-200/80">
                        {item.categoryLabel}
                      </span>
                      {item.isHighFrequency && (
                        <span className="text-[10px] bg-red-50 text-red-700 px-1.5 py-0.5 rounded border border-red-200 font-bold">
                          高频考点
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Senses Preview */}
                  <div className="space-y-1.5 text-xs text-stone-700 line-clamp-3">
                    {(item.senses || []).slice(0, 3).map((s, idx) => (
                      <p key={idx} className="flex items-start">
                        <span className="text-amber-800 font-serif font-bold mr-1 shrink-0">
                          [{s.pos}]
                        </span>
                        <span className="text-stone-800">{s.meaning}</span>
                      </p>
                    ))}
                    {(item.senses || []).length > 3 && (
                      <span className="text-[10px] text-stone-400 block pt-0.5">
                        ……（共 {item.senses.length} 项义项，点击查看完整）
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-serif text-[11px] text-stone-400 truncate max-w-[200px]">
                    例句：{item.senses[0]?.examples[0]?.text || '详见词条'}
                  </span>
                  <span className="text-amber-800 group-hover:translate-x-1 transition-transform flex items-center font-serif text-[11px]">
                    详解 <ChevronRight className="w-3 h-3 ml-0.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
