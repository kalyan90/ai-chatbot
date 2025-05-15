interface OllamaResponse {
  response: string;
  // You can add more fields here if needed, based on Ollama's actual response
}

export async function callOllama(prompt: string, model: string): Promise<string> {
  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, prompt, stream: false })
  });


  const data: OllamaResponse = await res.json();
  return data.response;
}

export async function callOllamaStream(prompt: string, model: string): Promise<string> {
  const res = await fetch('http://localhost:11434/api/generate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model, prompt })
  });

  const reader = res.body?.getReader();
  const decoder = new TextDecoder('utf-8');
  let result = '';

  if(!reader) {
    console.error('Reader is undefined');
    return '';
  }

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value, { stream: true });

    for (const line of chunk.split('\n')) {
      if (line.trim()) {
        try {
          const json = JSON.parse(line);
          result += json.response || '';
        } catch {
          console.warn('Failed to parse chunk:', line);
        }
      }
    }
  }

  return result.trim();
}