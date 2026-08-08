import React from 'react';
import { Sparkles, Search, BookOpen } from 'lucide-react';

interface NavbarProps {
  activeTab: 'explore' | 'ai';
  setActiveTab: (tab: 'explore' | 'ai') => void;
  stats: {
    totalWords: number;
    shiciCount: number;
    xuciCount: number;
    nanciCount: number;
  };
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  stats
}) => {
  return (
    <header className="bg-amber-950 text-amber-50 shadow-md border-b border-amber-800/50 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-3">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-700/80 border border-amber-500/30 flex items-center justify-center text-amber-200 font-serif font-bold text-xl shadow-inner">
              文
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-serif font-bold tracking-wide text-amber-100">
                高中文言实虚词整理平台
              </h1>
              <p className="text-xs text-amber-300/80 font-sans">
                常见文言实词、核心虚词及高频难词义项例句汇编
              </p>
            </div>
          </div>

          {/* Quick Stats Badges */}
          <div className="hidden lg:flex items-center space-x-2 text-xs font-serif">
            <span className="bg-amber-900/80 px-2.5 py-1 rounded border border-amber-700/60 text-amber-200">
              常见实词：<strong className="text-amber-400 font-mono">{stats.shiciCount}</strong> 词
            </span>
            <span className="bg-amber-900/80 px-2.5 py-1 rounded border border-amber-700/60 text-amber-200">
              核心虚词：<strong className="text-amber-400 font-mono">{stats.xuciCount}</strong> 词
            </span>
            <span className="bg-amber-900/80 px-2.5 py-1 rounded border border-amber-700/60 text-amber-200">
              难词短语：<strong className="text-amber-400 font-mono">{stats.nanciCount}</strong> 条
            </span>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <nav className="flex space-x-2 overflow-x-auto py-1 border-t border-amber-900/60 no-scrollbar">
          <button
            onClick={() => setActiveTab('explore')}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-t-md transition-colors whitespace-nowrap ${
              activeTab === 'explore'
                ? 'bg-amber-900/90 text-amber-200 border-t-2 border-amber-400 font-serif font-bold'
                : 'text-amber-300/80 hover:text-amber-100 hover:bg-amber-900/40'
            }`}
          >
            <Search className="w-4 h-4 text-amber-300" />
            <span>字词检索与考点研读 ({stats.totalWords}词)</span>
          </button>

          <button
            onClick={() => setActiveTab('ai')}
            className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-t-md transition-colors whitespace-nowrap ${
              activeTab === 'ai'
                ? 'bg-amber-900/90 text-amber-200 border-t-2 border-amber-400 font-serif font-bold'
                : 'text-amber-300/80 hover:text-amber-100 hover:bg-amber-900/40'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>AI 句法赏析与文言助研</span>
          </button>
        </nav>
      </div>
    </header>
  );
};
