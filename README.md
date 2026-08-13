# 高中文言实虚词汇总平台 (Classical Chinese Vocabulary Hub)

针对高中文言文学习打造的纯静态实词、虚词与常见阅读难词检索整理工具。

## 项目特点与设计原则

1. **全量文言实词与难词深度整合**：将高频文言实词与阅读难词、常见固定结构深度整合，分设为模块化的六大部分（`/src/data/shiciPart1.ts` ~ `shiciPart6.ts`）与核心虚词（`xuci.ts`）。词条数据解耦分类属性，由 `allVocabulary.ts` 统一映射并绑定 `shici` 与 `xuci` 分类与标签。
2. **精细化虚词与实词义项解析**：彻底补全核心文言虚词（含18大核心虚词及扩充高频虚词与虚词句式）及全量重点实词的词性划分、兼词用法、复音虚词、典范课文例句（如《鸿门宴》《廉颇蔺相如列传》《过秦论》《师说》《劝学》《赤壁赋》等）、现代汉语译文及高频考点警示。
3. **词条归一与去重架构**：通过全局映射保障每一个词条拥有严格唯一的 ID 标识，彻底消除 React 渲染时的重复键警告。
4. **多维检索与典雅排版**：支持按汉字、拼音、义项、例句或出处关键字检索；词条详情模态框采用古朴宣纸风排版与高质感字体衬面，并支持点击背景遮罩一键快捷关闭。
5. **纯静态部署与二级目录兼容**：配置相对路径资源引用（`base: './'`），既支持部署到根域名（如 `https://example.com/`），又天然兼容托管在任意二级目录（如 `https://example.com/wenyan/`）或本地直接预览。

## 快速开始

- 开发运行：`npm run dev`
- 静态构建：`npm run build`
- 类型检查：`npm run typecheck`
- 代码 Lint 检查：`npm run lint`
- 代码 Lint 自动修复：`npm run lint:fix`
- Prettier 格式检查：`npm run pretty`
- Prettier 格式自动修复：`npm run pretty:fix`

## GitHub Actions CI 检查与自动部署

项目包含两个 GitHub Actions 工作流配置文件：

- **质量检查 (`.github/workflows/ci.yml`)**：在分支推送（`push`）或提交 Pull Request（`pull_request`）至 `main`/`master` 分支时自动触发，依次执行 TypeScript 类型检查 (`npm run typecheck`)、严格 ESLint 代码规范校验 (`npm run lint`) 与 Prettier 代码格式检查 (`npm run pretty`)，确保团队协作代码风格统一与质量可靠。
- **自动部署 (`.github/workflows/deploy.yml`)**：当推送到 `main`/`master` 主分支时，GitHub Actions 将自动安装依赖、生成 Vite 静态页面打包（`./dist`）并一键部署至 GitHub Pages。
