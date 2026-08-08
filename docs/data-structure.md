# 数据结构说明 (Data Structure Specification)

数据去重与结构设计原则：
项目对文言词条进行整理归纳，合并同一词语的多来源异义项与课文例句，保持数据准确与务实：

1. **VocabularyEntry 统一字段接口**：
   - `id`: 唯一标识符 (通过全局映射保障 ID 严格唯一，彻底消除重复 Key 警告)
   - `word`: 汉字字词（如 "安", "而", "苟", "孰与", "甫"）
   - `pinyin`: 拼音标注 (支持多音字字符串或数组，如 "fǔ", "cháo / zhāo")
   - `category`: 分类 (`'shici_120'` | `'xuci_18'` | `'gaopin_nanci'` | `'guding_jushi'`)
   - `categoryLabel`: 分类中文名称
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
