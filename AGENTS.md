# Agent Instructions - 高中文言实虚词汇总平台

This repository contains the full-stack web application for the Classical Chinese Vocabulary Hub (高中文言实虚词汇总平台).

## Project Overview
The application is built using React 19, TypeScript, Tailwind CSS v4, Motion, Vite, and Node/Express server for Gemini API integration.

## Practical Focus & Scope
- Focus purely on clean word lookup, complete definitions, accurate senses, correct translations, and real textbook examples.
- Removed extraneous features (flashcards, quizzes, bookmark list) to emphasize core vocabulary retrieval and AI syntax analysis.
- Removed exaggerated, inaccurate, or hype-filled marketing descriptions across the UI and documentation.

## Build and Quality Verification Rules
- Always run `npm run lint` (which runs `tsc --noEmit`) to verify type safety.
- Always run `compile_applet` before completing turns.
- Keep `README.md`, `AGENTS.md`, and `/docs/*.md` up to date after design or data modifications.

## Data Maintenance Rules
- All classical Chinese vocabulary entries MUST be stored in modular TypeScript datasets under `/src/data/`.
- Ensure NO duplicate word entries exist across categories, while merging all definitions, alternate pronunciations, parts of speech, and textbook examples from source texts.
- Ensure every item in `ALL_VOCABULARY` has a strictly unique `id` to avoid React duplicate key collisions.
- Do not introduce placeholder text or dummy content in place of real classical textbook quotes (e.g. 《鸿门宴》《廉颇蔺相如列传》《过秦论》《师说》).

## Technology Stack
- **Frontend**: React 19 + TypeScript + Tailwind CSS v4 + Motion + Lucide React
- **Backend API**: Express server running on port 3000 handling `/api/ai/analyze`
- **State**: Lightweight React State for word selection, filters, search, and AI sentence analysis.
