import React, { useState, useEffect } from 'react';
import MessageBubble from './MessageBubble';

const ChatBox = ({ currentUser, otherUser }) => {
  const localKey = `chat_${currentUser.id}_to_${otherUser.id}`;
  const [messages, setMessages] = useState(() =>
    JSON.parse(localStorage.getItem(localKey)) || []
  );
  const [newMsg, setNewMsg] = useState('');

  const sendMessage = () => {
    if (!newMsg.trim()) return;
    const newMessage = {
      text: newMsg,
      timestamp: new Date().toLocaleTimeString(),
      avatar: currentUser.avatar,
      senderId: currentUser.id
    };
    const updatedMessages = [...messages, newMessage];
    setMessages(updatedMessages);
    localStorage.setItem(localKey, JSON.stringify(updatedMessages));
    setNewMsg('');
  };

  return (
    <div className="chat-container">
      <p className="status">Status: <span className={otherUser.online ? 'online' : 'offline'}>
        {otherUser.online ? 'Online' : 'Offline'}
      </span></p>

      <div className="chat-box">
        {messages.map((msg, i) => (
          <MessageBubble key={i} message={msg} sentByCurrentUser={msg.senderId === currentUser.id} />
        ))}
      </div>

      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
