# 系统架构说明 (Architecture Overview)

本应用采用纯静态单页 Web 应用 (SPA) 架构，可以直接打包为静态 HTML/JS/CSS 并部署至 GitHub Pages：

1. **前端展现层 (Frontend Layer)**
   - 使用 React 19 + TypeScript + Tailwind CSS v4 构建古朴沉稳的字词检索界面。
   - 使用 Motion 库实现模态框与组件过渡。
   - 核心组件构成：
     - Navbar: 顶部导航与全库字词统计展示。
     - VocabularyList: 字词多维加权智能检索（内置词头精准度 > 拼音无调匹配 > 义项释义/词性 > 课文出处的加权算法）、高频筛选、分类切分与词条卡片网格。
     - VocabularyCardModal: 词条深度解析模态框，包含宣纸风衬面、义项拆解、课文例句对译与考点易错警示。具备背景页面滚动锁与滚动条位移补偿机制，彻底消除双滚动条与画面抖动。

2. **数据架构层 (Data Layer)**
   - 核心数据采用模块化的 TypeScript 数据文件 (`/src/data/`) 静态打包，拆分为实词部分与核心虚词部分。
   - 数据模型采用 RawVocabularyEntry 接口与 VocabularyEntry 复合接口解耦设计，分类标签由 allVocabulary 统一映射并绑定。
   - allVocabulary 负责汇总全量数据并动态分配与保障每个词条的 ID 绝对唯一，彻底消除渲染重复 Key 警告。

3. **构建与持续集成 (CI/CD)**
   - 集成 ESLint (Flat Config) 严格规范与 Prettier 统一格式化 (`npm run lint`, `npm run pretty`)，保障项目代码质量与严谨规范。
   - 使用 Vite 进行 0 运行时的纯静态页面打包 (`npm run build`)，配置相对路径 base 设置，完美兼容根目录与任意二级目录托管。输出产物存放于 dist 目录。
   - 配置双 GitHub Actions 工作流文件：
     - `.github/workflows/ci.yml`：在 Push 和 Pull Request 时自动运行 TypeScript 类型检查 (`npm run typecheck`)、ESLint 校验与 Prettier 代码格式校验。
     - `.github/workflows/deploy.yml`：在推送到主分支时自动触发依赖安装、静态构建打包（`dist`）与 GitHub Pages 一键发布。
