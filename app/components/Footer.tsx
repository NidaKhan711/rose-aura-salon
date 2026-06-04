"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiArrowUp,
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiHeart,
  FiLinkedin,
  FiSend,
} from "react-icons/fi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage({ type: "error", text: "Please enter your email address" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/admin/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: data.message || "Subscribed successfully ✨",
        });
        setEmail("");
      } else {
        setMessage({
          type: "error",
          text: data.error || "Subscription failed",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Network error. Try again.",
      });
    } finally {
      setLoading(false);
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    }
  };

  const contactInfo = [
    { icon: FiMapPin, text: "123 Luxury Street, Beverly Hills, CA", link: "https://maps.google.com" },
    { icon: FiPhone, text: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: FiMail, text: "hello@roseaura.com", link: "mailto:hello@roseaura.com" },
  ];

  const workingHours = [
    { day: "Mon - Fri", hours: "9:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  // Social media links - Update these with your actual URLs
  const socialLinks = [
    { 
      icon: FiInstagram, 
      url: "https://instagram.com/roseaura", 
      label: "Instagram",
      color: "hover:text-pink-600"
    },
    { 
      icon: FiFacebook, 
      url: "https://facebook.com/roseaura", 
      label: "Facebook",
      color: "hover:text-blue-700"
    },
    { 
      icon: FiTwitter, 
      url: "https://twitter.com/roseaura", 
      label: "Twitter",
      color: "hover:text-blue-400"
    },
    { 
      icon: FiLinkedin, 
      url: "https://linkedin.com/company/roseaura", 
      label: "LinkedIn",
      color: "hover:text-blue-800"
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t pt-20 pb-16 px-6">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-semibold text-[var(--primary)]">
            Rose Aura
          </h2>
          <p className="mt-4 text-gray-600 text-sm">
            Luxury beauty experience with elegance & care.
          </p>

          <div className="flex gap-4 mt-6 text-gray-500">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-transform hover:scale-110 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold text-[var(--primary)] mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Gallery", href: "/gallery" },
              { name: "Contact", href: "/contact" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="hover:text-[var(--primary)] transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="font-semibold text-[var(--primary)] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            {contactInfo.map((info, i) => (
              <li key={i} className="flex gap-2 items-start">
                <info.icon className="mt-1 text-[var(--primary)]" size={14} />
                <a href={info.link} className="hover:text-[var(--primary)] transition">
                  {info.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* HOURS */}
        <div>
          <h4 className="font-semibold text-[var(--primary)] mb-4">Working Hours</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {workingHours.map((h, i) => (
              <li key={i} className="flex justify-between">
                <span>{h.day}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/contact"
            className="mt-6 inline-block bg-[var(--primary)] text-white px-4 py-2 rounded-lg text-sm hover:bg-opacity-90 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="mt-12 border-t pt-8 text-center">
        <h3 className="text-lg font-semibold">Subscribe Newsletter</h3>

        <form onSubmit={handleSubscribe} className="flex gap-2 justify-center mt-4 flex-col sm:flex-row">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-4 py-2 rounded-lg text-sm w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            placeholder="Enter email"
            type="email"
          />
          <button 
            type="submit"
            className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Loading..." : "Subscribe"}
          </button>
        </form>

        {message.text && (
          <p className={`mt-3 text-sm ${message.type === "success" ? "text-green-600" : "text-red-600"}`}>
            {message.text}
          </p>
        )}
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-xs text-gray-500 flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Rose Aura
        <FiHeart className="text-red-500" />
      </div>

      {/* SCROLL TOP */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[var(--primary)] text-white flex items-center justify-center transition-all duration-300 hover:bg-opacity-90 hover:scale-110 ${
          showScrollButton ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </footer>
  );
}