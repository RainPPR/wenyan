/**
 * Classical Chinese Vocabulary & Study Types
 */

export type CategoryType = 'shici' | 'xuci';

export interface ExampleItem {
  text: string;          // 文言原文例句
  source: string;        // 课文/典籍出处，如《鸿门宴》《廉颇蔺相如列传》
  translation?: string;  // 现代汉语翻译
}

export interface SenseItem {
  pos: string;           // 词性：动词/名词/形容词/副词/介词/连词/代词/兼词/助词等
  meaning: string;       // 核心释义
  examples: ExampleItem[];
  note?: string;         // 补充技巧或对比
}

export interface VocabularyEntry {
  id: string;
  word: string;                   // 汉字/词语
  pinyin: string | string[];     // 拼音（字符串或多音字数组）
  category: CategoryType;
  categoryLabel: string;         // '文言实词' | '文言虚词'
  radical?: string;              // 部首/首字
  strokes?: number;              // 笔画数（可选）
  senses: SenseItem[];
  examTips?: string;             // 高考考点玄机/易错辨析/记忆口诀
  phoneticVariants?: string;     // 通假字或异读字说明
  isHighFrequency?: boolean;      // 是否高频考查词
}

export interface QuizQuestion {
  id: string;
  wordId: string;
  word: string;
  type: 'meaning' | 'xuci_usage' | 'fill_blank' | 'grammar_type';
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  sourceText?: string;
}

export interface FilterState {
  keyword: string;
  category: 'all' | CategoryType;
  pinyinLetter: string; // 'ALL' | 'A' | 'B' ...
  bookmarkedOnly: boolean;
  selectedSource: string; // 'ALL' | '鸿门宴' | '廉颇蔺相如列传' ...
}
