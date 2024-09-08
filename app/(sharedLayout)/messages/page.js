import dynamic from 'next/dynamic';

// Dynamically import components that might be using document
const Messages = dynamic(() => import('@/components/Messages'), { ssr: false });
const ChatHistory = dynamic(() => import('@/components/ChatHistory'), { ssr: false });

function MessagesPage() {
  return (
    <div>
      <Messages />
      <ChatHistory />
    </div>
  );
}

export default MessagesPage;