# 数据结构说明 (Data Structure Specification)

数据去重与结构设计原则：
项目对文言词条进行整理归纳，合并同一词语的多来源异义项与课文例句，保持数据准确与务实：

1. **分类划分标准与数据文件**：
   - 文言实词精选：划入模块化的 `/src/data/shiciPart1.ts` ~ `/src/data/shiciPart6.ts`（导出的数组类型为 `RawVocabularyEntry[]`）。
   - 核心文言虚词：划入 `/src/data/xuci.ts`（涵括核心虚词及高频虚词与固定句式的完整义项、词性划分、复音虚词、高中课文权威例句与现代汉语精准译文，导出的数组类型为 `RawVocabularyEntry[]`）。
   - 分类属性 (`category: 'shici' | 'xuci'` 与 `categoryLabel: '文言实词' | '文言虚词'`) 不再写死在每个条目中，而是在 `/src/data/allVocabulary.ts` 中根据来源文件统一组装映射为完整 `VocabularyEntry`。

2. **数据接口与类型定义 (`src/types.ts`)**：
   - `RawVocabularyEntry`: 原始数据接口，仅包含词条本身的语义属性（`id`, `word`, `pinyin`, `radical`, `senses`, `examTips`, `isHighFrequency` 等），不包含分类。
   - `VocabularyEntry`: 组合型全量接口，继承 `RawVocabularyEntry` 并包含动态注入的 `category` (`'shici'` | `'xuci'`) 与 `categoryLabel` (`'文言实词'` | `'文言虚词'`)。
   - `id`: 唯一标识符 (通过全局映射保障 ID 严格唯一，彻底消除重复 Key 警告)
   - `word`: 汉字字词（如 "安", "而", "苟", "孰与", "甫"）
   - `pinyin`: 拼音标注 (支持多音字字符串或数组，如 "fǔ", "cháo / zhāo")
   - `category`: 分类 (`'shici'` | `'xuci'`)
   - `categoryLabel`: 分类中文名称 (`'文言实词'` | `'文言虚词'`)
   - `radical`: 部首/笔画参考 (可选)
   - `isHighFrequency`: 是否高频常见词 (布尔值)
   - `senses`: 义项列表 `SenseItem[]`
     - `pos`: 词性 (`动词` | `名词` | `形容词` | `副词` | `介词` | `连词` | `代词` | `兼词` 等)
     - `meaning`: 释义说明
     - `examples`: 例句数组 `ExampleItem[]`
       - `text`: 文言原文
       - `source`: 课文出处（如《鸿门宴》《廉颇蔺相如列传》《过秦论》《师说》）
       - `translation`: 现代汉语翻译
   - `examTips`: 文言用法与常见易错点提示
