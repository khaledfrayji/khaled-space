'use client'
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // This will be executed on the client-side only
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.setAttribute('chatbotId', '9irXkWHJGjArAiFxYAMEw');
    script.setAttribute('domain', 'www.chatbase.co');
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      src="https://www.chatbase.co/chatbot-iframe/9irXkWHJGjArAiFxYAMEw"
      width="100%"
      style={{ height: '100%', minHeight: '700px',display:'none' }}
      frameBorder="0"
      title="Chatbot"
    ></iframe>
  );
};

export default Chatbot;
