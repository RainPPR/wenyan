import React, { useState } from 'react';
import { ALL_VOCABULARY, STATS } from './data/allVocabulary';
import { VocabularyEntry } from './types';
import { Navbar } from './components/Navbar';
import { VocabularyList } from './components/VocabularyList';
import { AiAnalyzer } from './components/AiAnalyzer';
import { VocabularyCardModal } from './components/VocabularyCardModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'explore' | 'ai'>('explore');

  // Selected entry modal state
  const [selectedEntry, setSelectedEntry] = useState<VocabularyEntry | null>(null);

  // Initial params for AI analyzer when navigating from a modal or card
  const [aiSentence, setAiSentence] = useState('');
  const [aiTargetWord, setAiTargetWord] = useState('');

  const handleOpenAiAnalyze = (sentence: string, targetWord: string) => {
    setAiSentence(sentence);
    setAiTargetWord(targetWord);
    setActiveTab('ai');
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-900 flex flex-col selection:bg-amber-200 selection:text-amber-950">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        stats={STATS}
      />

      {/* Main Content Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === 'explore' && (
          <VocabularyList
            vocabulary={ALL_VOCABULARY}
            onSelectEntry={(entry) => setSelectedEntry(entry)}
            onOpenAiAnalyze={handleOpenAiAnalyze}
          />
        )}

        {activeTab === 'ai' && (
          <AiAnalyzer
            initialSentence={aiSentence}
            initialTargetWord={aiTargetWord}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-6 text-center text-xs border-t border-stone-800 font-serif">
        <div className="max-w-7xl mx-auto px-4 space-y-1">
          <p className="text-stone-300 font-bold">
            高中文言实虚词检索与学习助手
          </p>
          <p className="text-stone-500">
            包含文言常用实词、虚词与常见短语义项说明及高中课文文言例句参考
          </p>
        </div>
      </footer>

      {/* Vocabulary Detail Modal */}
      <VocabularyCardModal
        entry={selectedEntry}
        onClose={() => setSelectedEntry(null)}
        onOpenAiAnalyze={handleOpenAiAnalyze}
      />
    </div>
  );
}
