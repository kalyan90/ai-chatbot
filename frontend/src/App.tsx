import { useState } from 'react';
import PromptInput from './components/PromptInput';
import ResponseBox from './components/ResponseBox';

function App() {
  const [response, setResponse] = useState('');

  return (
    <div>
      <h1>Local Assistant</h1>
      <PromptInput onResponse={setResponse} />
      <ResponseBox text={response} />
    </div>
  );
}

export default App;