
// import { systemPrompt } from './prompts';
import { callOllama, callOllamaStream } from './ollamaClient';

export async function askLLM(prompt: string, model: string): Promise<string> {
  return callOllamaStream(`User: ${prompt}\nAssistant:`, model);
}
