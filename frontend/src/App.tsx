import { useState } from 'react';
import PromptInput from './components/PromptInput';
import ResponseBox from './components/ResponseBox';
import type { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div>
      <ResponseBox messages={messages}/>
      <PromptInput messages={messages} setMessages={setMessages} />
    </div>
  );
}

export default App;