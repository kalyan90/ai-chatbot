import type { Message } from "../types";

interface ResponseBoxProps {
  messages: Message[];
}

export default function ResponseBox({ messages }: ResponseBoxProps) {
  return (
    <>
    {
      messages && messages.map((message, index) => (
        <div key={index} style={{ margin: '10px', padding: '10px', color: message.role === 'User' ? '#e0f7fa' : '#ffe0b2' }}>
          <strong>{message.role}:</strong> {message.content}
        </div>
      ))
    }
    </>
  );
}
