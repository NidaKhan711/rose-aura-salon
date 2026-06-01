"use client";

import { FiCalendar, FiMessageSquare, FiMail, FiUsers } from "react-icons/fi";

export default function AdminDashboard() {
  // Demo stats — baad mein real API se connect karna
  const stats = [
    { title: "Total Bookings", value: "128", icon: FiCalendar, color: "bg-primary" },
    { title: "Contact Messages", value: "45", icon: FiMessageSquare, color: "bg-secondary" },
    { title: "Subscribers", value: "342", icon: FiMail, color: "bg-primary" },
    { title: "Total Clients", value: "567", icon: FiUsers, color: "bg-secondary" },
  ];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back, Admin</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-accent p-6 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-full text-white`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity Placeholder */}
      <div className="bg-white rounded-xl border border-accent p-6">
        <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex items-center gap-3 py-2 border-b border-soft">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <p className="text-sm text-gray-600">New booking received from Sarah</p>
              <span className="text-xs text-gray-400 ml-auto">2 min ago</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}