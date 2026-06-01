"use client";

import { useState } from "react";
import { FiTrash2, FiCheckCircle, FiClock } from "react-icons/fi";

type Booking = {
  id: number;
  name: string;
  service: string;
  date: string;
  time: string;
  status: "pending" | "confirmed" | "completed";
};

const mockBookings: Booking[] = [
  { id: 1, name: "Sarah Johnson", service: "Hair Styling", date: "2024-03-20", time: "10:00 AM", status: "pending" },
  { id: 2, name: "Emily Davis", service: "Facial Treatment", date: "2024-03-20", time: "2:00 PM", status: "confirmed" },
  { id: 3, name: "Jessica Lee", service: "Spa Therapy", date: "2024-03-21", time: "11:30 AM", status: "completed" },
];

export default function BookingsPage() {
  const [bookings, setBookings] = useState<Booking[]>(mockBookings);

  const updateStatus = (id: number, newStatus: Booking["status"]) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  const deleteBooking = (id: number) => {
    setBookings(bookings.filter(b => b.id !== id));
  };

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-700",
      confirmed: "bg-green-100 text-green-700",
      completed: "bg-blue-100 text-blue-700",
    };
    return styles[status as keyof typeof styles] || "bg-gray-100";
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Bookings</h1>
        <p className="text-gray-500 mt-1">Manage all appointments</p>
      </div>

      <div className="bg-white rounded-xl border border-accent overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-soft">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Client</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Service</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Time</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-accent">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-soft/50 transition">
                  <td className="px-6 py-4 font-medium">{booking.name}</td>
                  <td className="px-6 py-4 text-gray-600">{booking.service}</td>
                  <td className="px-6 py-4 text-gray-600">{booking.date}</td>
                  <td className="px-6 py-4 text-gray-600">{booking.time}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(booking.status)}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateStatus(booking.id, "confirmed")}
                        className="p-1.5 text-green-600 hover:bg-green-50 rounded transition"
                        title="Confirm"
                      >
                        <FiCheckCircle size={18} />
                      </button>
                      <button
                        onClick={() => deleteBooking(booking.id)}
                        className="p-1.5 text-red-500 hover:bg-red-50 rounded transition"
                        title="Delete"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}