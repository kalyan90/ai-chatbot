interface ResponseBoxProps {
  text: string;
}

export default function ResponseBox({ text }: ResponseBoxProps) {
  return (
    <pre style={{ whiteSpace: 'pre-wrap', padding: '10px', maxWidth: '100%', overflowX: 'auto' }}>
      {text}
    </pre>
  );
}
