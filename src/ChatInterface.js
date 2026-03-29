import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const handleSend = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  };

  return (
    <div>
      <h2>Chat Interface</h2>
      <div style={{
        border: '1px solid #000',
        height: '200px',
        overflowY: 'scroll',
        padding: '10px',
        marginBottom: '10px'
      }}>
        {messages.map((msg, index) => (
          <div key={index} style={{
            background: '#f1f1f1',
            margin: '5px 0',
            padding: '5px',
            borderRadius: '5px'
          }}>
            {msg}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        placeholder="Type a message..."
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInterface;