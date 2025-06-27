import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { mockChats } from "../data/mockChat";

const mockUsers = [
  { id: "i1", name: "Ali Khan", role: "Investor", online: true, initials: "AK" },
  { id: "i2", name: "Sarah Malik", role: "Investor", online: true, initials: "SM" },
  { id: "i3", name: "David Chen", role: "Investor", online: false, initials: "DC" },
  { id: "i4", name: "Ayesha Noor", role: "Investor", online: false, initials: "AN" },
  { id: "i5", name: "Imran Qureshi", role: "Investor", online: true, initials: "IQ" },
  { id: "e1", name: "Hamza Rafiq", role: "Entrepreneur", online: true, initials: "HR" },
  { id: "e2", name: "Maria Tanveer", role: "Entrepreneur", online: false, initials: "MT" },
  { id: "e3", name: "Zainab Jamil", role: "Entrepreneur", online: true, initials: "ZJ" },
  { id: "e4", name: "Bilal Mehmood", role: "Entrepreneur", online: true, initials: "BM" },
  { id: "e5", name: "Fatima Nadeem", role: "Entrepreneur", online: false, initials: "FN" },
];

const getChatKey = (id1, id2) => [id1, id2].sort().join("_");

const ChatPage = () => {
  const { user } = useAuth();
  const { userId } = useParams();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const currentUserId = user?.uid;
  const currentUserCustomId = user?.customId;
  const recipient = mockUsers.find((u) => u.id === userId);
  const currentUser = {
    id: currentUserId,
    name: user?.displayName || "You",
    initials: "👤",
  };

  useEffect(() => {
    if (!currentUserId || !userId) return;

    const chatKey = getChatKey(currentUserCustomId, userId);
    const stored = localStorage.getItem(chatKey);

    if (stored) {
      setMessages(JSON.parse(stored));
    } else {
      const fallbackMsgs = mockChats?.[currentUserCustomId]?.[userId] || mockChats?.[userId]?.[currentUserCustomId] || [];
      setMessages(fallbackMsgs);
      localStorage.setItem(chatKey, JSON.stringify(fallbackMsgs));
    }
  }, [currentUserId, userId, currentUserCustomId]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      sender: currentUserCustomId,
      text: input,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    const updated = [...messages, newMsg];
    setMessages(updated);

    const chatKey = getChatKey(currentUserCustomId, userId);
    localStorage.setItem(chatKey, JSON.stringify(updated));
    setInput("");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-sm">
          {recipient?.initials || "?"}
        </div>
        <div className="truncate">
          <h2 className="text-base font-semibold truncate">{recipient?.name || "Unknown User"}</h2>
          <p className="text-xs text-gray-500">
            {recipient?.role || "User"} •{" "}
            <span className={recipient?.online ? "text-green-600" : "text-gray-400"}>
              {recipient?.online ? "Online" : "Offline"}
            </span>
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((msg, idx) => {
          const isMe = msg.sender === currentUserCustomId;
          return (
            <div key={idx} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
              <div
                className={`rounded-lg px-4 py-2 max-w-[75%] text-sm break-words ${isMe ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
                  }`}
              >
                <div>{msg.text}</div>
                <div className="text-[10px] mt-1 text-right opacity-70">{msg.timestamp}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="sticky bottom-0 w-full bg-white p-3 border-t flex flex-wrap items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // Prevent newline in some browsers
              sendMessage();
            }
          }}
          className="min-w-0 flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:border-blue-400"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatPage;
