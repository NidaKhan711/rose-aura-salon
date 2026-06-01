"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  FiHome,
  FiCalendar,
  FiMessageSquare,
  FiMail,
  FiImage,
  FiLogOut,
} from "react-icons/fi";

const menuItems = [
  { name: "Dashboard", path: "/admin", icon: FiHome },
  { name: "Bookings", path: "/admin/bookings", icon: FiCalendar },
  { name: "Contact", path: "/admin/contact", icon: FiMessageSquare },
  { name: "Subscriptions", path: "/admin/subscriptions", icon: FiMail },
  { name: "Gallery", path: "/admin/gallery", icon: FiImage },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("adminName");
    router.push("/login");
  };

  return (
    <aside className="w-72 bg-white border-r border-accent flex flex-col">
      {/* Brand */}
      <div className="p-6 border-b border-accent">
        <h2 className="text-2xl font-bold text-primary">Rose Aura</h2>
        <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:bg-soft hover:text-primary"
              }`}
            >
              <Icon size={20} />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-accent">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-500 hover:bg-red-50 transition duration-200"
        >
          <FiLogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}