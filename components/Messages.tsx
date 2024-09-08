'use client';

import React, { useEffect } from 'react';

export default function Messages() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Now it's safe to use document
      // For example:
      // document.title = 'Messages';
    }
  }, []);

  return (
    <div>
      {/* Your Messages component JSX */}
      <h1>Messages</h1>
    </div>
  );
}