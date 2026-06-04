"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [servicesOpen, setServicesOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallary" },
    { name: "Contact", path: "/contact" },
  ];

  // ❌ Spa & Massage removed
  const services = [
    { name: "Hair Styling", path: "/services#hair" },
    { name: "Facial Care", path: "/services#facial" },
    { name: "Makeup", path: "/services#makeup" },
  ];

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const bookingSection = document.getElementById("booking");
      if (!bookingSection) return;

      const rect = bookingSection.getBoundingClientRect();

      if (rect.top <= 200 && rect.bottom >= 200) {
        setActiveSection("booking");
      } else {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isBookingActive = activeSection === "booking";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-[var(--accent)]">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          onClick={() => router.push("/")}
          className="cursor-pointer text-2xl md:text-3xl font-[var(--font-dmserif)] tracking-wide text-[var(--primary)]"
        >
          Rose Aura
        </motion.div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-10 font-medium text-gray-700">

          <a
            href="/"
            className={`relative transition ${
              isActive("/") ? "text-[var(--primary)]" : "hover:text-[var(--primary)]"
            }`}
          >
            Home
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--primary)] transition-all ${
                isActive("/") ? "w-full" : "w-0"
              }`}
            />
          </a>

          {/* SERVICES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[var(--primary)] transition">
              Services
              <motion.span
                animate={{ rotate: servicesOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-sm"
              >
                <FiChevronDown />
              </motion.span>
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-8 left-0 bg-white border border-[var(--accent)] shadow-lg w-52 rounded-md overflow-hidden"
                >
                  {services.map((s, i) => (
                    <a
                      key={i}
                      href={s.path}
                      className="block px-4 py-2 text-sm hover:bg-[var(--soft)] hover:text-[var(--primary)] transition"
                    >
                      {s.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* OTHER LINKS */}
          {links.map((item, i) => (
            <a
              key={i}
              href={item.path}
              className={`relative transition ${
                isActive(item.path)
                  ? "text-[var(--primary)]"
                  : "hover:text-[var(--primary)]"
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-[var(--primary)] transition-all ${
                  isActive(item.path) ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}
        </nav>

        {/* BOOK BUTTON */}
        <motion.a
          href="#booking"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`hidden md:block px-6 py-2 border font-medium tracking-wide transition
            ${
              isBookingActive
                ? "bg-[var(--primary)] text-white border-[var(--primary)] shadow-md"
                : "text-[var(--primary)] border-[var(--primary)]"
            }`}
        >
          Book Appointment
        </motion.a>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* MOBILE MENU (IMPROVED) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-white z-50 overflow-y-auto"
          >
            <div className="flex flex-col p-6">

              <a
                href="/"
                onClick={() => setOpen(false)}
                className="py-4 border-b text-lg font-medium hover:text-[var(--primary)]"
              >
                Home
              </a>

              <a
                href="/about"
                onClick={() => setOpen(false)}
                className="py-4 border-b text-lg font-medium hover:text-[var(--primary)]"
              >
                About
              </a>

              <div className="py-4 border-b">
                <p className="font-semibold text-lg text-[var(--primary)] mb-3">
                  Services
                </p>

                <div className="space-y-3 pl-4">
                  {services.map((s, i) => (
                    <a
                      key={i}
                      href={s.path}
                      onClick={() => setOpen(false)}
                      className="block text-gray-600 hover:text-[var(--primary)]"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="/gallary"
                onClick={() => setOpen(false)}
                className="py-4 border-b text-lg font-medium hover:text-[var(--primary)]"
              >
                Gallery
              </a>

              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="py-4 border-b text-lg font-medium hover:text-[var(--primary)]"
              >
                Contact
              </a>

              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-8 bg-[var(--primary)] text-white text-center py-3 rounded-lg font-medium"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}