
import { systemPrompt } from './prompts';
import { callOllama, callOllamaStream } from './ollamaClient';
import { Message } from './types';

import fs from 'fs';

const contextPath = './x-data.txt';

export async function askLLM(messages: Message[], model: string): Promise<string> {
  let context = '';
  if (fs.existsSync(contextPath)) {
    context = fs.readFileSync(contextPath, 'utf-8');
  }

  const formatted = messages.map(
    (m) => `${m.role}: ${m.content}`
  ).join('\n');

  const prompt = `${systemPrompt}
  Context: ${context}
  ${formatted}
  Assistant:`;

  return callOllamaStream(prompt, model);
}
