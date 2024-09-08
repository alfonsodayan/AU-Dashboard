import dynamic from 'next/dynamic';

// Dynamically import components that might be using document
const Messages = dynamic(() => import('@/components/Messages'), { ssr: false });
const ChatHistory = dynamic(() => import('@/components/ChatHistory'), { ssr: false });

export default function MessagesPage() {
  return (
    <div>
      <Messages />
      <ChatHistory />
    </div>
  );
}