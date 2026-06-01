"use client";

import { usePathname } from "next/navigation";
import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  // Hide navbar/footer on admin routes and login page
  const isAdminRoute = pathname?.startsWith("/admin") || pathname === "/login";

  return (
    <>
      <SmoothScroll />
      {!isAdminRoute && <Navbar />}
      {children}
      {!isAdminRoute && <Footer />}
    </>
  );
}