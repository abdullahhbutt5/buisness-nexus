import React from 'react';

const MessageBubble = ({ message, sentByCurrentUser }) => {
  return (
    <div className={`chat-message ${sentByCurrentUser ? 'sent' : 'received'}`}>
      <div className="avatar">{message.avatar}</div>
      <div className="msg-content">
        <div className="chat-bubble">{message.text}</div>
        <div className="chat-time">{message.timestamp}</div>
      </div>
    </div>
  );
};

export default MessageBubble;
