import { useState } from 'react';
import api from '../axios';
import { RoleEnum, type Message } from '../types';

interface PromptInputProps {
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export default function PromptInput({ messages, setMessages }: PromptInputProps) {
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState('deepseek-r1:1.5b');

  const handleSubmit = async () => {
    const newMessages = [...messages, { role: RoleEnum.User, content: input }];
      setMessages(newMessages);
    try {
      const res = await api.post('/prompt', { messages: newMessages, model: selectedModel });
      setMessages([...newMessages, { role: RoleEnum.Assistant, content: res.data.answer }]);
    } catch (error) {
      setMessages([...newMessages, { role: RoleEnum.Assistant, content: 'Something went wrong.' }]);
    }
    finally {
      setInput('');
    }
  };

  return (
    <div style={{ margin: '10px', padding: '10px'}}>
      <select style={{ marginBottom: '10px' }} onChange={(e) => setSelectedModel(e.target.value)} value={selectedModel}>
        <option value="deepseek-r1:1.5b">DeepSeek R1 1.5b</option>
        <option value="llama3.1:8b">Llama 3.1 8B</option>
      </select>
      <textarea
        style={{ width: '100%', height: '100px', borderRadius: '5px', border: '1px solid #ccc' }}
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message here..."
      />
      <button onClick={handleSubmit}>
        Ask
      </button>
    </div>
  );
}