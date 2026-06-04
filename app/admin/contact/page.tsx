"use client";

import { useState, useEffect } from "react";
import { FiTrash2, FiMail, FiPhone, FiUser, FiLoader } from "react-icons/fi";

type Message = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  date: string;
  isRead?: boolean;
};

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch messages from API
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/admin/contact");
      
      if (!response.ok) throw new Error("Failed to fetch messages");
      
      const data = await response.json();
      
      // Ensure data is an array
      if (Array.isArray(data)) {
        setMessages(data);
      } else {
        console.error("Unexpected data format:", data);
        setMessages([]);
        setError("Received invalid data format from server");
      }
    } catch (err) {
      console.error("Error fetching messages:", err);
      setError("Failed to load messages");
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/contact/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) throw new Error("Failed to delete message");
      
      // Remove from UI
      setMessages(messages.filter(m => m.id !== id));
    } catch (err) {
      console.error("Error deleting message:", err);
      alert("Failed to delete message");
    }
  };

  const markAsRead = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/contact/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isRead: true }),
      });
      
      if (!response.ok) throw new Error("Failed to update message");
      
      // Update UI
      setMessages(messages.map(msg => 
        msg.id === id ? { ...msg, isRead: true } : msg
      ));
    } catch (err) {
      console.error("Error marking as read:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="text-center">
          <FiLoader className="animate-spin text-primary text-4xl mx-auto mb-4" />
          <p className="text-gray-500">Loading messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-600">
          <p className="font-semibold">Error: {error}</p>
          <button 
            onClick={fetchMessages}
            className="mt-2 text-sm bg-red-100 px-3 py-1 rounded hover:bg-red-200"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Contact Messages</h1>
        <p className="text-gray-500 mt-1">
          Messages from website visitors ({messages.length} total)
        </p>
      </div>

      {messages.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center sm:p-12">
          <FiMail className="text-gray-400 text-5xl mx-auto mb-4" />
          <p className="text-gray-500">No messages yet</p>
          <p className="text-gray-400 text-sm mt-1">
            When visitors send messages, they'll appear here
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`cursor-pointer rounded-xl border bg-white p-4 transition hover:shadow-sm sm:p-5 ${
                !msg.isRead ? 'border-primary bg-primary/5' : 'border-gray-200'
              }`}
              onClick={() => !msg.isRead && markAsRead(msg.id)}
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1 space-y-2">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1 text-gray-700">
                      <FiUser size={14} className="text-primary" />
                      <span className="font-medium">{msg.name}</span>
                    </span>
                    <span className="flex min-w-0 items-center gap-1 text-sm text-gray-500">
                      <FiMail size={14} />
                      <span className="break-all">{msg.email}</span>
                    </span>
                    {msg.phone && (
                      <span className="flex items-center gap-1 text-gray-500 text-sm">
                        <FiPhone size={14} />
                        {msg.phone}
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{msg.date}</span>
                    {!msg.isRead && (
                      <span className="text-xs bg-primary text-white px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  {msg.service && (
                    <p className="text-sm text-primary font-medium">
                      Service: {msg.service}
                    </p>
                  )}
                  <p className="break-words text-gray-600">{msg.message}</p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteMessage(msg.id);
                  }}
                  className="self-end rounded p-2 text-red-500 transition hover:bg-red-50 sm:self-start"
                  aria-label="Delete message"
                >
                  <FiTrash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
