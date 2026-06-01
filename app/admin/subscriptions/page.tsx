"use client";

import { useState } from "react";
import { FiTrash2, FiDownload, FiMail } from "react-icons/fi";

type Subscriber = {
  id: number;
  email: string;
  subscribedAt: string;
};

const mockSubscribers: Subscriber[] = [
  { id: 1, email: "sarah@example.com", subscribedAt: "2024-03-15" },
  { id: 2, email: "mike@example.com", subscribedAt: "2024-03-14" },
  { id: 3, email: "lisa@example.com", subscribedAt: "2024-03-13" },
];

export default function SubscriptionsPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>(mockSubscribers);

  const deleteSubscriber = (id: number) => {
    setSubscribers(subscribers.filter(s => s.id !== id));
  };

  const exportEmails = () => {
    const emails = subscribers.map(s => s.email).join("\n");
    const blob = new Blob([emails], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Subscriptions</h1>
          <p className="text-gray-500 mt-1">Manage newsletter subscribers</p>
        </div>
        <button
          onClick={exportEmails}
          className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
        >
          <FiDownload size={16} />
          Export CSV
        </button>
      </div>

      <div className="bg-white rounded-xl border border-accent overflow-hidden">
        <div className="divide-y divide-accent">
          {subscribers.map((sub) => (
            <div key={sub.id} className="flex items-center justify-between p-4 hover:bg-soft/50 transition">
              <div className="flex items-center gap-3">
                <FiMail className="text-primary" />
                <span className="font-medium">{sub.email}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400">Joined {sub.subscribedAt}</span>
                <button
                  onClick={() => deleteSubscriber(sub.id)}
                  className="p-1.5 text-red-500 hover:bg-red-50 rounded transition"
                >
                  <FiTrash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}