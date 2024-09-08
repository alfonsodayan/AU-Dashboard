'use client';

import { useEffect } from 'react';

export default function ChatHistory() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Now it's safe to use document
      // For example:
      // const chatContainer = document.getElementById('chat-container');
      // if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, []);

  return (
    <div>
      {/* Your ChatHistory component JSX */}
      <h2>Chat History</h2>
    </div>
  );
}