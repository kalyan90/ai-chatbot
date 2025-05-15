import { useState } from 'react';
import api from '../axios';

interface PromptInputProps {
  onResponse: (response: string) => void;
}

export default function PromptInput({ onResponse }: PromptInputProps) {
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState('deepseek-r1:1.5b');

  const handleSubmit = async () => {
    try {
      const res = await api.post('/prompt', { prompt: input, model: selectedModel });
      onResponse(res.data.answer);
    } catch (error) {
      onResponse('Something went wrong.');
    }
  };

  return (
    <div style={{ margin: '10px', padding: '10px'}}>
      <select style={{ marginBottom: '10px' }} onChange={(e) => setSelectedModel(e.target.value)} value={selectedModel}>
        <option value="deepseek-r1:1.5b">DeepSeek R1 1.5b</option>
        <option value="llama3.1:latest">Llama 3.1 8B</option>
      </select>
<textarea
        style={{ width: '100%', height: '100px', borderRadius: '5px', border: '1px solid #ccc' }}
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>
        Ask
      </button>
      
    </div>
  );
}