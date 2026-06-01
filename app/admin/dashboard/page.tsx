"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      router.push("/login");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("auth");
    router.push("/login");
  };

  return (
    <div className="p-10">

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2"
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white p-6 shadow">
          <h2>Total Bookings</h2>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white p-6 shadow">
          <h2>Messages</h2>
          <p className="text-2xl font-bold">45</p>
        </div>

        <div className="bg-white p-6 shadow">
          <h2>Subscribers</h2>
          <p className="text-2xl font-bold">300</p>
        </div>

      </div>

    </div>
  );
}