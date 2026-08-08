# 高中文言实虚词汇总平台 (Classical Chinese Vocabulary Hub)

针对高中文言文学习打造的纯静态实词、虚词与常见阅读难词检索整理工具。

## 项目特点与设计原则
1. **词条归一与去重整理**：梳理常见文言实词、核心虚词及常见阅读短语，合并义项，确保词条无重复 ID 冲突。
2. **规范释义与课文例句**：提供字义、词性、常见现代汉语翻译以及高中课文（如《鸿门宴》《廉颇蔺相如列传》《过秦论》《师说》《劝学》等）例句说明。
3. **多维检索与筛选**：支持按汉字、拼音、义项、例句或出处关键字检索，并支持按实词、虚词、难词分类筛选。
4. **纯静态部署**：无需后端或数据库支持，可在 GitHub Pages 或任何静态托管平台一键构建部署。

## 快速开始
- 开发运行：`npm run dev`
- 静态构建：`npm run build`
- 静态检查：`npm run lint`

## GitHub Actions 自动部署
项目包含 `.github/workflows/deploy.yml` 配置文件，只要将仓库推送到 GitHub 的 `main` 分支，GitHub Actions 将自动完成 TypeScript 检查、Vite 静态构建并发布到 GitHub Pages。
