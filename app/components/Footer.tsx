"use client";

import { useState, useEffect } from "react";
import { 
  FiInstagram, FiFacebook, FiTwitter, FiArrowUp, 
  FiMapPin, FiPhone, FiMail, FiClock, FiHeart,
  FiLinkedin, FiSend, FiGithub
} from "react-icons/fi";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Show/hide scroll button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage({ type: "error", text: "Please enter your email address" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      return;
    }
    
    if (!email.includes("@") || !email.includes(".")) {
      setMessage({ type: "error", text: "Please enter a valid email address" });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/admin/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: data.message || "Subscribed successfully! ✨" });
        setEmail("");
        setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      } else {
        setMessage({ type: "error", text: data.error || "Subscription failed. Please try again." });
        setTimeout(() => setMessage({ type: "", text: "" }), 3000);
      }
    } catch (error) {
      console.error("Network error:", error);
      setMessage({ type: "error", text: "Network error. Please check your connection." });
      setTimeout(() => setMessage({ type: "", text: "" }), 3000);
    } finally {
      setLoading(false);
    }
  };

  // Contact Information
  const contactInfo = [
    { icon: FiMapPin, text: "123 Luxury Street, Beverly Hills, CA 90210", link: "https://maps.google.com" },
    { icon: FiPhone, text: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: FiMail, text: "hello@roseaura.com", link: "mailto:hello@roseaura.com" },
  ];

  // Working Hours
  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM", closed: false },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM", closed: false },
    { day: "Sunday", hours: "Closed", closed: true },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 border-t border-[var(--accent)] pt-20 pb-16 px-6 overflow-hidden">

      {/* Background Decorations */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[var(--primary)]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND SECTION */}
          <div>
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] bg-clip-text text-transparent">
              Rose Aura
            </h2>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              A luxury beauty experience designed to enhance your natural elegance.
              Precision, care, and calm environment for every client.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              {[
                { icon: FiInstagram, link: "https://instagram.com", color: "hover:text-pink-600" },
                { icon: FiFacebook, link: "https://facebook.com", color: "hover:text-blue-600" },
                { icon: FiTwitter, link: "https://twitter.com", color: "hover:text-sky-500" },
                { icon: FiLinkedin, link: "https://linkedin.com", color: "hover:text-blue-700" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-500 ${social.color} transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-[var(--primary)] font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[var(--accent)]"></span>
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item, i) => (
                <li key={i}>
                  <a 
                    href={`/#${item.toLowerCase()}`} 
                    className="hover:text-[var(--primary)] transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-[var(--primary)] font-semibold mb-4 relative inline-block">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[var(--accent)]"></span>
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              {contactInfo.map((info, i) => (
                <li key={i}>
                  <a 
                    href={info.link} 
                    target={info.icon === FiMapPin ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-[var(--primary)] transition group"
                  >
                    <info.icon className="text-[var(--primary)] mt-0.5 flex-shrink-0 group-hover:scale-110 transition" size={14} />
                    <span className="group-hover:translate-x-1 transition">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* WORKING HOURS */}
          <div>
            <h4 className="text-[var(--primary)] font-semibold mb-4 relative inline-block">
              Working Hours
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[var(--accent)]"></span>
            </h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              {workingHours.map((schedule, i) => (
                <li key={i} className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <FiClock size={12} className="text-[var(--primary)]" />
                    {schedule.day}
                  </span>
                  <span className={schedule.closed ? "text-red-500 font-medium" : "text-gray-700"}>
                    {schedule.hours}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Appointment Button */}
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-[var(--primary)] text-white text-sm rounded-lg hover:bg-[var(--secondary)] transition-all duration-300 hover:scale-105 hover:shadow-lg w-full justify-center"
            >
              <FiSend size={14} />
              Book Appointment
            </a>
          </div>
        </div>

        {/* NEWSLETTER SECTION */}
        <div className="mt-12 pt-8 border-t border-[var(--accent)]">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold text-[var(--foreground)] mb-2">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-gray-500 text-sm mb-4">
              Get exclusive offers, beauty tips, and updates delivered to your inbox
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 border border-[var(--accent)] focus:outline-none focus:border-[var(--primary)] text-sm transition rounded-lg"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white text-sm rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>

            {/* Message Display */}
            {message.text && (
              <div className={`mt-3 p-3 rounded-lg text-sm text-center animate-fade-in ${
                message.type === "success" 
                  ? "bg-green-50 text-green-600 border border-green-200" 
                  : "bg-red-50 text-red-600 border border-red-200"
              }`}>
                {message.text}
              </div>
            )}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 pt-6 border-t border-[var(--accent)] flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-gray-500 text-xs flex items-center gap-1">
            © {new Date().getFullYear()} Rose Aura. All rights reserved.
            <FiHeart size={12} className="text-red-500 animate-pulse" />
          </p>

          {/* Footer Links */}
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="/privacy" className="hover:text-[var(--primary)] transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-[var(--primary)] transition">Terms of Service</a>
            <a href="/sitemap" className="hover:text-[var(--primary)] transition">Sitemap</a>
          </div>

          {/* Payment Methods */}
          <div className="flex gap-3">
            <span className="text-xs text-gray-400">Secure payments:</span>
            <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="h-5 opacity-60 hover:opacity-100 transition" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="Mastercard" className="h-5 opacity-60 hover:opacity-100 transition" />
            <img src="https://cdn-icons-png.flaticon.com/512/196/196539.png" alt="PayPal" className="h-5 opacity-60 hover:opacity-100 transition" />
          </div>
        </div>

        {/* SCROLL TO TOP BUTTON */}
        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] text-white flex items-center justify-center shadow-lg rounded-full transition-all duration-300 hover:scale-110 hover:shadow-xl ${
            showScrollButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <FiArrowUp size={20} />
        </button>

      </div>

      {/* Add animation keyframes to globals.css */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </footer>
  );
}