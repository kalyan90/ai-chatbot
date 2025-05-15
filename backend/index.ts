import express from 'express';
import cors from 'cors';
import { askLLM } from './promptEngine';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/prompt', async (req, res) => {
  const { prompt, model } = req.body;
  const answer = await askLLM(prompt, model);
  res.json({ answer });
});

app.listen(4000, () => console.log('Backend running on http://localhost:4000'));