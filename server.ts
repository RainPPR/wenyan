import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { ALL_VOCABULARY } from './src/data/allVocabulary.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API 1: Health check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', vocabularyCount: ALL_VOCABULARY.length });
  });

  // API 2: Fetch vocabulary with search/filter/pagination
  app.get('/api/vocabulary', (req, res) => {
    const { category, query, isHighFrequency } = req.query;

    let result = ALL_VOCABULARY;

    if (category && typeof category === 'string') {
      result = result.filter((item) => item.category === category);
    }

    if (isHighFrequency === 'true') {
      result = result.filter((item) => item.isHighFrequency);
    }

    if (query && typeof query === 'string') {
      const q = query.trim().toLowerCase();
      result = result.filter((item) => {
        const matchWord = item.word.includes(q);
        const matchPinyin = Array.isArray(item.pinyin)
          ? item.pinyin.some((p) => p.toLowerCase().includes(q))
          : item.pinyin.toLowerCase().includes(q);
        const matchSense = item.senses.some(
          (s) =>
            s.meaning.includes(q) ||
            s.examples.some(
              (ex) => ex.text.includes(q) || ex.translation.includes(q)
            )
        );
        return matchWord || matchPinyin || matchSense;
      });
    }

    res.json({
      total: result.length,
      items: result
    });
  });

  // API 3: AI Classical Chinese AI Assistant via Gemini
  app.post('/api/ai/analyze', async (req, res) => {
    try {
      const { sentence, targetWord } = req.body;
      if (!sentence) {
        return res.status(400).json({ error: '请提供文言文例句或词语' });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.json({
          analysis: `【AI智能提示】当前未配置 GEMINI_API_KEY。针对句中“${
            targetWord || '关键词'
          }”的语法解析：
1. 句子：${sentence}
2. 解析建议：请查阅高中高考文言词典对应义项，或在AI Studio设置中配置 Gemni 密钥获得实时深度赏析。`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `你是一位高中文言文与高考语文教学专家。
请对以下高考文言文例句或词语进行精细化语法与义项赏析：

待解析句子/词语：${sentence}
重点目标词：${targetWord || '全句重点实词虚词'}

请用清晰简洁的 Markdown 格式输出：
1. **准确白话文翻译**
2. **目标词（或核心词）义项解析与词性**
3. **句式与语法现象**（如：宾语前置、使动用法、意动用法、通假字、古今异义、词类活用等，若有请指出）
4. **高考提分技巧/易错警示**`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      });

      res.json({
        analysis: response.text || '解析完成，未生成有效文本。'
      });
    } catch (error: any) {
      console.error('Gemini API error:', error);
      res.status(500).json({
        error: 'AI 赏析服务暂时不可用：' + (error.message || '系统繁忙')
      });
    }
  });

  // Vite middleware for dev / static for prod
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
