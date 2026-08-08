# 核心功能模块 (Core Features)

1. **字词检索与分类列表 (Vocabulary Directory & Search)**
   - 支持拼音、汉字、释义、例句与课文出处实时模糊检索。
   - 分类筛选：常见实词、核心虚词、高频难词与固定结构。
   - 支持一键筛选高频重点字词。

2. **词条详解模态框 (Detailed Word Modal)**
   - 显示多音多义项、词性划分与词类活用。
   - 展现高中经典课文例句与准确汉语翻译对照。
   - 标注常见语法特征与使用提示。

3. **静态打包与 GitHub Pages 部署 (Static Build & GitHub Actions)**
   - 移除服务端与 API 依赖，构建产物均为纯静态 HTML/CSS/JS 文件。
   - 借助 `.github/workflows/deploy.yml` 实现推送主分支即自动发布。
