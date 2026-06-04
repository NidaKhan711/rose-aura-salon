"use client";

import { useEffect, useState } from "react";
import { FiCalendar, FiMessageSquare, FiMail, FiUsers } from "react-icons/fi";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBookings: 0,
    totalMessages: 0,
    totalSubscribers: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/admin/stats");
      const data = await res.json();
      setStats(data.stats);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    { title: "Total Bookings", value: stats.totalBookings, icon: FiCalendar, color: "bg-primary" },
    { title: "Contact Messages", value: stats.totalMessages, icon: FiMessageSquare, color: "bg-secondary" },
    { title: "Subscribers", value: stats.totalSubscribers, icon: FiMail, color: "bg-primary" },
    { title: "Total Clients", value: "Coming Soon", icon: FiUsers, color: "bg-secondary" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back to Rose Aura Admin</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-accent p-6 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="mt-1 break-words text-2xl font-bold text-gray-800 sm:text-3xl">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full text-white`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
