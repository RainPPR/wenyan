# 系统架构说明 (Architecture Overview)

本应用采用纯静态单页 Web 应用 (SPA) 架构，可以直接打包为 HTML/JS/CSS 并部署至 GitHub Pages：

1. **前端层 (Frontend Layer)**
   - 使用 React 19 + TypeScript + Tailwind CSS v4 构建古朴沉稳的字词检索界面。
   - 使用 Motion 库实现模态框与组件过渡。
   - 核心组件：`Navbar` (导航与统计)、`VocabularyList` (卡片与多维检索)、`VocabularyCardModal` (词条深度解析模态框)。

2. **数据层 (Data Layer)**
   - 核心数据采用结构化的 TypeScript 模块 (`/src/data/`) 静态打包，包含文言实词、核心虚词及高频阅读难词与固定短语。
   - `allVocabulary.ts` 负责归集全量数据并保障每个词条的 ID 绝对唯一，彻底消除 React duplicate key 警告。

3. **构建与持续集成 (CI/CD)**
   - 使用 Vite 进行 0 运行时的静态页面打包 (`npm run build`)，输出产物存放于 `dist/` 目录。
   - 配置 GitHub Actions 工作流文件 `.github/workflows/deploy.yml`，在推送到 `main` 分支时自动构建并发布至 GitHub Pages。
