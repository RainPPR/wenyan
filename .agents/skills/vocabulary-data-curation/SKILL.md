---
name: vocabulary-data-curation
description: Guidelines for curating, refactoring, unmerging, and validating classical Chinese vocabulary entries, textbook quotes, and translations without placeholders.
---

# Vocabulary Data Curation Skill

This skill defines the workflow and standards for maintaining classical Chinese vocabulary datasets in this repository.

## When to Use This Skill

Use this skill whenever:

- Adding new classical Chinese words (实词/虚词).
- Refactoring existing entries (unmerging combined senses/pos).
- Checking dataset integrity and supplementing missing examples, sources, or translations.

## Core Rules

1. **Unmerged Sense Rule**:
   - Each `SenseItem` in `senses` must have a single `pos` (e.g. `名词`, `动词`, `形容词`, `副词`, `介词`, `通假字`, `固定短语`) and a single `meaning`.
   - Never combine POS with slashes (e.g., NO `形容词/动词`).
   - Never combine meanings with slashes (e.g., NO `秤锤 / 权势 / 变通`). Split them into separate elements in the `senses` array.

2. **Zero Placeholder Rule**:
   - Every sense MUST have at least one authentic quote from high school textbooks or classic literature.
   - Text (`text`), Source (`source`), and Translation (`translation`) must be non-empty and must NOT contain placeholders like `（无例句）`, `N/A`, `未知`, `暂无`.

3. **Data Dataset Mapping**:
   - Source dataset files (`shiciPart1.ts`~`shiciPart6.ts`, `xuci.ts`) export `RawVocabularyEntry[]`.
   - Do NOT add `category` or `categoryLabel` in raw dataset files.
   - All entries must have unique `id` values across the entire platform.

## Verification Checklist

Run programmatic checks using `tsx` or Node scripts:

```bash
npx tsx -e '
import { ALL_VOCABULARY } from "./src/data/allVocabulary.ts";
let badSenses = 0;
let badExamples = 0;
ALL_VOCABULARY.forEach(v => {
  v.senses.forEach(s => {
    if (s.pos.includes("/") || s.meaning.includes("/")) badSenses++;
    if (!s.examples || s.examples.length === 0) badExamples++;
    else s.examples.forEach(e => {
      if (e.text.includes("无例句") || e.source.includes("N/A") || e.translation.includes("无例句")) badExamples++;
    });
  });
});
console.log("Bad senses:", badSenses, "Bad examples:", badExamples);
'
```

Ensure both counts return `0`.
