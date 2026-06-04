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
  { name: "Subscriptions", path: "/admin/subscribe", icon: FiMail },
  { name: "Gallery", path: "/admin/gallery", icon: FiImage },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();


  const handleLogout = async () => {
  await fetch("/api/auth/logout", { method: "POST" });
  router.push("/login");
};

  return (
    <aside className="sticky top-0 z-30 flex w-full flex-col border-b border-accent bg-white md:min-h-screen md:w-72 md:border-b-0 md:border-r">
      {/* Brand */}
      <div className="border-b border-accent px-4 py-3 md:p-6">
        <h2 className="text-xl font-bold text-primary md:text-2xl">Rose Aura</h2>
        <p className="text-xs text-gray-500 mt-1">Admin Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex gap-2 overflow-x-auto p-3 md:flex-1 md:flex-col md:space-y-1 md:overflow-visible md:p-4">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm transition-all duration-200 md:gap-3 md:px-4 md:py-3 md:text-base ${
                isActive
                  ? "bg-primary text-white shadow-md"
                  : "text-gray-600 hover:bg-soft hover:text-primary"
              }`}
            >
              <Icon className="h-5 w-5 shrink-0" />
              <span className="font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="border-t border-accent p-3 md:p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm text-red-500 transition duration-200 hover:bg-red-50 md:justify-start md:gap-3 md:px-4 md:py-3 md:text-base"
        >
          <FiLogOut className="h-5 w-5 shrink-0" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
