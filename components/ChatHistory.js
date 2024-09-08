import { useEffect } from 'react';

function ChatHistory() {
  useEffect(() => {
    // Any code that uses document should be here
    if (typeof window !== 'undefined') {
      // Now it's safe to use document
      // For example:
      // const chatContainer = document.getElementById('chat-container');
      // if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, []);

  return (
    // Your component JSX
  );
}

export default ChatHistory;