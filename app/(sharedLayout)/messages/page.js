import dynamic from 'next/dynamic';

// Update the import paths to match your project structure
const Messages = dynamic(() => import('../../../components/Messages'), { ssr: false });
const ChatHistory = dynamic(() => import('../../../components/ChatHistory'), { ssr: false });

export default function MessagesPage() {
  return (
    <div>
      <Messages />
      <ChatHistory />
    </div>
  );
}