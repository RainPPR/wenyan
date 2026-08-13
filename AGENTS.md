# Agent Instructions - 高中文言实虚词汇总平台

This repository contains the pure static frontend web application for the Classical Chinese Vocabulary Hub (高中文言实虚词汇总平台).

## Project Overview

The application is a pure React 19 + TypeScript + Tailwind CSS v4 single-page app (SPA) that compiles to static HTML/JS/CSS assets for deployment on platforms like GitHub Pages.

## Practical Focus & Scope

- Focus purely on clean word lookup, complete definitions, accurate senses, correct translations, and real textbook examples.
- Completely removed AI tools, flashcards, quizzes, and bookmark/favorites state to keep the project completely offline-ready, light, and static.
- Removed unused scripts, redundant declarations, obsolete interfaces, and marketing hype across the UI and documentation.

## Build and Quality Verification Rules

- Run `npm run typecheck` (`tsc --noEmit`) to verify TypeScript type safety.
- Run `npm run lint` (`eslint .`) and `npm run lint:fix` (`eslint . --fix`) to check and fix ESLint issues.
- Run `npm run pretty` (`prettier --check .`) and `npm run pretty:fix` (`prettier --write .`) to check and format code style.
- Always run `compile_applet` before completing turns.
- Keep `README.md`, `AGENTS.md`, and `/docs/*.md` up to date after design, tool, or data modifications.

## Deployment & CI/CD

- `.github/workflows/ci.yml` sets up Node.js environment, installs dependencies, and runs strict quality checks (`npm run typecheck`, `npm run lint`, `npm run pretty`) automatically on pushes and pull requests targeting `main`/`master`.
- `.github/workflows/deploy.yml` sets up Node.js environment, installs dependencies, builds the static site (`npm run build`), and deploys `./dist` to GitHub Pages automatically upon push to `main`/`master`.

## Data Maintenance Rules

- All classical Chinese vocabulary entries MUST be stored in modular TypeScript datasets under `/src/data/` (`shiciPart1.ts`~`shiciPart6.ts`, `xuci.ts`) as `RawVocabularyEntry[]`.
- Individual entries in dataset files MUST NOT contain inline `category` or `categoryLabel` properties. Instead, `allVocabulary.ts` dynamically maps dataset items to complete `VocabularyEntry` objects with `category` (`'shici'` | `'xuci'`) and `categoryLabel` (`'文言实词'` | `'文言虚词'`) assigned based on the source file.
- `xuci.ts` contains the core function words and fixed grammatical structures with complete senses, quotes, translations, and notes.
- High-frequency vocabulary is organized flexibly without hardcoded numeric limits, with over 150+ comprehensive content words and reading hard words consolidated into `shiciPart1.ts` ~ `shiciPart6.ts`.
- Ensure NO duplicate word entries exist across categories, while merging all definitions, alternate pronunciations, parts of speech, and textbook examples from source texts.
- Ensure every item in `ALL_VOCABULARY` has a strictly unique `id` to avoid React duplicate key collisions.
- Do not introduce placeholder text or dummy content in place of real classical textbook quotes (e.g. 《鸿门宴》《廉颇蔺相如列传》《过秦论》《师说》).

## Technology Stack

- **Frontend**: React 19 + TypeScript + Tailwind CSS v4 + Motion + Lucide React
- **Build Tool**: Vite 6
- **CI/CD**: GitHub Actions (`.github/workflows/ci.yml`, `.github/workflows/deploy.yml`)
