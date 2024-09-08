import { useEffect } from 'react';

function Messages() {
  useEffect(() => {
    // Any code that uses document should be here
    if (typeof window !== 'undefined') {
      // Now it's safe to use document
      // For example:
      // document.title = 'Messages';
    }
  }, []);

  return (
    // Your component JSX
  );
}

export default Messages;