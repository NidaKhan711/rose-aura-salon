"use client";

import { useState, useEffect } from "react";
import { FiTrash2, FiDownload, FiMail, FiRefreshCw } from "react-icons/fi";

type Subscriber = {
  _id: string;
  email: string;
  subscribedAt: string;
  isActive: boolean;
};

export default function SubscriptionsPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSubscribers = async () => {
    setLoading(true);
    setError("");
    
    try {
      console.log("Fetching subscribers from API...");
      const response = await fetch("/api/admin/subscribe");
      
      console.log("Response status:", response.status);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Received data TYPE:", typeof data);
      console.log("Received data:", data);
      
      // IMPORTANT: Check if data is an array
      if (Array.isArray(data)) {
        setSubscribers(data);
      } else {
        console.error("Data is not an array:", data);
        setError("Invalid data format received from server");
        setSubscribers([]);
      }
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.message || "Failed to load subscribers");
      setSubscribers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscribers();
  }, []);

  const deleteSubscriber = async (id: string, email: string) => {
    if (!confirm(`Delete ${email}?`)) return;

    try {
      const response = await fetch("/api/admin/subscribe", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!response.ok) throw new Error("Delete failed");

      setSubscribers(subscribers.filter(s => s._id !== id));
      alert("Deleted successfully!");
    } catch (err) {
      alert("Delete failed");
    }
  };

  const exportEmails = () => {
    if (!subscribers || subscribers.length === 0) {
      alert("No subscribers");
      return;
    }

    const emails = subscribers.map(s => s.email).join("\n");
    const blob = new Blob([emails], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `subscribers_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="p-8">
        <div className="flex justify-center items-center h-64">
          <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Subscriptions</h1>
          <p className="text-gray-500 mt-1">
            Manage newsletter subscribers • Total: {subscribers?.length || 0}
          </p>
        </div>
        
        <div className="flex gap-3">
          <button
            onClick={fetchSubscribers}
            className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          >
            <FiRefreshCw size={16} />
            Refresh
          </button>
          
          <button
            onClick={exportEmails}
            className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition"
          >
            <FiDownload size={16} />
            Export CSV
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-200">
          <strong>Error:</strong> {error}
          <button onClick={fetchSubscribers} className="ml-4 underline">
            Try again
          </button>
        </div>
      )}

      {(!subscribers || subscribers.length === 0) && !error ? (
        <div className="bg-white rounded-xl border border-accent p-12 text-center">
          <FiMail className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <p className="text-gray-500">No subscribers yet</p>
          <p className="text-sm text-gray-400 mt-1">
            When users subscribe from the footer, they will appear here
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-accent overflow-hidden">
          <div className="divide-y divide-accent">
            {subscribers.map((sub) => (
              <div key={sub._id} className="flex items-center justify-between p-4 hover:bg-soft/50 transition">
                <div className="flex items-center gap-3">
                  <FiMail className="text-primary" />
                  <div>
                    <span className="font-medium">{sub.email}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400">
                    Joined {new Date(sub.subscribedAt).toLocaleDateString()}
                  </span>
                  <button
                    onClick={() => deleteSubscriber(sub._id, sub.email)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded transition"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}