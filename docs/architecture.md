# 系统架构说明 (Architecture Overview)

本应用采用标准的单页 Web 交互应用 (SPA) 架构，并集成 Express 服务端 API Proxy 处理 GEMINI AI 请求：

1. **前端层 (Frontend Layer)**
   - 使用 React 19 + TypeScript + Tailwind CSS v4 构建古朴沉稳的交互界面。
   - 使用 Motion 库实现模态框与视图平滑过渡。
   - 主要页面与组件：`Navbar` (导航栏与检索统计)、`VocabularyList` (卡片与多维检索)、`VocabularyCardModal` (词条深度解析模态框)、`AiAnalyzer` (AI 句法赏析助手)。

2. **数据层 (Data Layer)**
   - 核心数据采用结构化的 TypeScript 模块 (`/src/data/`) 存储，包含文言实词、核心虚词及高频阅读难词与固定短语。
   - `allVocabulary.ts` 负责归集全量数据并保障每个词条的 ID 绝对唯一，防止 key 冲突。

3. **后端 API 层 (Server API Layer)**
   - 使用 Express 服务端监听 3000 端口，代理 `/api/ai/analyze` 智能文言句子剖析请求，确保 GEMINI API Key 安全保密。
