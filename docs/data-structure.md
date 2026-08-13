# 数据结构说明 (Data Structure Specification)

数据去重与结构设计原则：
项目对文言词条进行精细整理归纳，拆解解构同一词语的多元义项与课文例句，保持数据严谨、准确与务实：

1. **分类划分标准与数据文件**：
   - 文言实词精选：划入模块化的 shiciPart1 ~ shiciPart6 系列数据文件，按 RawVocabularyEntry 接口进行定义。
   - 核心文言虚词：划入 xuci 数据文件，涵括18大核心虚词及扩充高频虚词与固定句式的完整义项、词性划分、复音虚词、高中课文权威例句与现代汉语精准译文。
   - 分类属性 (`category: 'shici' | 'xuci'` 与 `categoryLabel: '文言实词' | '文言虚词'`) 不硬编码在数据源条目中，而是在 allVocabulary 中根据来源归属统一映射组装为完整 VocabularyEntry。

2. **义项独立解构与规范化 (Unmerged Sense Architecture)**：
   - 严格禁止在词性 (`pos`) 或核心释义 (`meaning`) 中出现斜杠 `/` 混杂合并（如禁止 `形容词/动词` 或 `秤锤 / 权势 / 变通`）。
   - 每一个独立的词性、用法与释义均精准拆解为 `senses` 数组中独立的 `SenseItem` 对象，确保词性单一清晰（如 `名词`、`动词`、`形容词`、`副词`、`介词`、`通假字`、`固定短语` 等）。
   - 每个独立义项均配有对应的典范高中课文原文出处（如《鸿门宴》《廉颇蔺相如列传》《过秦论》《师说》《劝学》等）及白话译文。

3. **数据接口与类型定义 (`src/types.ts`)**：
   - RawVocabularyEntry: 原始数据接口，仅包含词条本身的语义属性（id, word, pinyin, radical, senses, examTips, isHighFrequency 等），不包含分类。
   - VocabularyEntry: 组合型全量接口，继承 RawVocabularyEntry 并包含动态注入的 category 与 categoryLabel 属性。
   - id: 唯一标识符，通过全局映射保障 ID 严格唯一，彻底消除重复 Key 警告。
   - word: 汉字字词（如 "权", "分", "闲", "安", "而", "苟", "孰与", "甫"）。
   - pinyin: 拼音标注，支持多音字字符串或数组（如 "fǔ", "cháo / zhāo"）。
   - category: 词条分类标识（'shici' 代表实词，'xuci' 代表虚词）。
   - categoryLabel: 分类中文文本名称（'文言实词' 或 '文言虚词'）。
   - radical: 部首/笔画参考（可选）。
   - isHighFrequency: 是否为高频考查词标志（布尔值）。
   - senses: 义项列表，包含单项词性 pos、核心释义 meaning、课文例句数组 examples（原文 text、出处 source、译文 translation）。
   - examTips: 文言用法与常见易错考点提示。
