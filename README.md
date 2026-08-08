# 高中文言实虚词汇总平台 (Classical Chinese Vocabulary Hub)

针对高中文言文学习打造的纯静态实词、虚词与常见阅读难词检索整理工具。

## 项目特点与设计原则
1. **词条归一与去重整理**：梳理常见文言实词、核心虚词及常见阅读短语，合并义项，确保词条无重复 ID 冲突。
2. **规范释义与课文例句**：提供字义、词性、常见现代汉语翻译以及高中课文（如《鸿门宴》《廉颇蔺相如列传》《过秦论》《师说》《劝学》等）例句说明。
3. **多维检索与典雅排版**：支持按汉字、拼音、义项、例句或出处关键字检索；词条详情模态框采用古朴宣纸风排版与高质感字体衬面，并支持点击背景遮罩一键快捷关闭。
4. **纯静态部署与二级目录兼容**：配置相对路径资源引用（`base: './'`），既支持部署到根域名（如 `https://example.com/`），又天然兼容托管在任意二级目录（如 `https://example.com/wenyan/`）或本地直接预览。

## 快速开始
- 开发运行：`npm run dev`
- 静态构建：`npm run build`
- 静态检查：`npm run lint`

## GitHub Actions 自动部署
项目包含 `.github/workflows/deploy.yml` 配置文件，使用 Node.js 22 运行环境。只要将仓库推送到 GitHub 的 `main` 或 `master` 分支，GitHub Actions 将自动安装依赖、执行 TypeScript 检查、生成 Vite 静态页面打包（`./dist`）并自动部署至 GitHub Pages。
