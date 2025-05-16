
// import { systemPrompt } from './prompts';
import { callOllama, callOllamaStream } from './ollamaClient';
import { Message } from './types';

export async function askLLM(messages: Message[], model: string): Promise<string> {
  const formatted = messages.map(
    (m) => `${m.role}: ${m.content}`
  ).join('\n');

  const prompt = `${formatted}\nAssistant:`;

  return callOllamaStream(prompt, model);
}
