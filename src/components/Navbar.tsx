import React from 'react';
import { BookOpen, Search } from 'lucide-react';

interface NavbarProps {
  stats: {
    totalWords: number;
    shiciCount: number;
    xuciCount: number;
  };
}

export const Navbar: React.FC<NavbarProps> = ({ stats }) => {
  return (
    <header className="bg-amber-950 text-amber-50 shadow-md border-b border-amber-800/50 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-700/80 border border-amber-500/30 flex items-center justify-center text-amber-200 font-serif font-bold text-xl shadow-inner">
              文
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-serif font-bold tracking-wide text-amber-100">
                高中文言实虚词汇总平台
              </h1>
              <p className="text-xs text-amber-300/80 font-sans">
                常见文言实词与核心虚词义项例句汇编
              </p>
            </div>
          </div>

          {/* Quick Stats Badges */}
          <div className="flex items-center space-x-2 text-xs font-serif">
            <span className="bg-amber-900/80 px-2.5 py-1 rounded border border-amber-700/60 text-amber-200">
              全库字词：<strong className="text-amber-400 font-mono">{stats.totalWords}</strong> 条
            </span>
            <span className="hidden sm:inline-block bg-amber-900/80 px-2.5 py-1 rounded border border-amber-700/60 text-amber-200">
              文言实词：<strong className="text-amber-400 font-mono">{stats.shiciCount}</strong> 词
            </span>
            <span className="hidden sm:inline-block bg-amber-900/80 px-2.5 py-1 rounded border border-amber-700/60 text-amber-200">
              文言虚词：<strong className="text-amber-400 font-mono">{stats.xuciCount}</strong> 词
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
