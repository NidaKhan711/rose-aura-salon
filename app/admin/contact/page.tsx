"use client";

import { useState } from "react";
import { FiTrash2, FiMail, FiPhone, FiUser } from "react-icons/fi";

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
};

const mockMessages: Message[] = [
  { id: 1, name: "John Doe", email: "john@example.com", message: "I love your services!", date: "2024-03-19" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", message: "When are you open on weekends?", date: "2024-03-18" },
];

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>(mockMessages);

  const deleteMessage = (id: number) => {
    setMessages(messages.filter(m => m.id !== id));
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Contact Messages</h1>
        <p className="text-gray-500 mt-1">Messages from website visitors</p>
      </div>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white rounded-xl border border-accent p-5 hover:shadow-sm transition">
            <div className="flex justify-between items-start">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-4 flex-wrap">
                  <span className="flex items-center gap-1 text-gray-700">
                    <FiUser size={14} className="text-primary" />
                    <span className="font-medium">{msg.name}</span>
                  </span>
                  <span className="flex items-center gap-1 text-gray-500 text-sm">
                    <FiMail size={14} />
                    {msg.email}
                  </span>
                  <span className="text-xs text-gray-400">{msg.date}</span>
                </div>
                <p className="text-gray-600">{msg.message}</p>
              </div>
              <button
                onClick={() => deleteMessage(msg.id)}
                className="p-2 text-red-500 hover:bg-red-50 rounded transition"
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}