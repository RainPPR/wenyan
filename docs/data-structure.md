# 数据结构说明 (Data Structure Specification)

数据去重与结构设计原则：
项目对文言词条进行整理归纳，合并同一词语的多来源异义项与课文例句，保持数据准确与务实：

1. **分类划分标准与数据文件**：
   - 文言实词精选：划入模块化的 `/src/data/shiciPart1.ts` ~ `/src/data/shiciPart6.ts`，包含150+重点文言实词与常见难词短语（category: `'shici'`, categoryLabel: `'文言实词'`）。
   - 核心文言虚词：划入 `/src/data/xuci.ts`（涵括核心虚词及高频虚词与固定句式的完整义项、词性划分、复音虚词、高中课文权威例句与现代汉语精准译文，category: `'xuci'`, categoryLabel: `'文言虚词'`）。
   - 彻底简化分类体系，仅保留“文言实词”与“文言虚词”两大核心分类。

2. **VocabularyEntry 统一字段接口**：
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
