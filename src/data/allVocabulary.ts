import { VocabularyEntry } from '../types';
import { SHICI_PART1 } from './shiciPart1';
import { SHICI_PART2 } from './shiciPart2';
import { SHICI_PART3 } from './shiciPart3';
import { SHICI_PART4 } from './shiciPart4';
import { XUCI_18 } from './xuci18';
import { GAOPIN_NANCI } from './gaopinNanci';

// Deduplicate vocabulary entries while keeping comprehensive senses
const rawList: VocabularyEntry[] = [
  ...SHICI_PART1,
  ...SHICI_PART2,
  ...SHICI_PART3,
  ...SHICI_PART4,
  ...XUCI_18,
  ...GAOPIN_NANCI
];

// Combine entries with the same word if any duplicates exist
const entryMap = new Map<string, VocabularyEntry>();

rawList.forEach((entry) => {
  const key = `${entry.word}_${entry.category}`;
  if (!entryMap.has(key)) {
    entryMap.set(key, { ...entry });
  } else {
    // Merge senses without duplicates
    const existing = entryMap.get(key)!;
    const existingSenses = existing.senses;
    entry.senses.forEach((newSense) => {
      const isDuplicateSense = existingSenses.some(
        (s) => s.meaning === newSense.meaning
      );
      if (!isDuplicateSense) {
        existingSenses.push(newSense);
      }
    });
  }
});

// Ensure ALL_VOCABULARY entries have strictly unique IDs
const seenIds = new Set<string>();
export const ALL_VOCABULARY: VocabularyEntry[] = Array.from(entryMap.values()).map((item, idx) => {
  let uniqueId = item.id;
  if (seenIds.has(uniqueId)) {
    uniqueId = `${item.category}_${item.id}_${idx}`;
  }
  seenIds.add(uniqueId);
  return {
    ...item,
    id: uniqueId
  };
});

export const SHICI_120_LIST = ALL_VOCABULARY.filter(
  (item) => item.category === 'shici_120'
);

export const XUCI_18_LIST = ALL_VOCABULARY.filter(
  (item) => item.category === 'xuci_18'
);

export const GAOPIN_NANCI_LIST = ALL_VOCABULARY.filter(
  (item) => item.category === 'gaopin_nanci' || item.category === 'guding_jushi'
);

export const STATS = {
  totalWords: ALL_VOCABULARY.length,
  shiciCount: SHICI_120_LIST.length,
  xuciCount: XUCI_18_LIST.length,
  nanciCount: GAOPIN_NANCI_LIST.length
};
