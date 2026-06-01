"use client";

import { FiInstagram, FiFacebook, FiTwitter, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-white border-t border-[var(--accent)] pt-20 pb-16 px-6 overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-semibold text-[var(--foreground)]">
            Rose Aura
          </h2>

          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            A luxury beauty experience designed to enhance your natural elegance.
            Precision, care, and calm environment for every client.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-[var(--primary)] font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-gray-600 text-sm">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item, i) => (
              <li key={i}>
                <a className="hover:text-[var(--primary)] transition cursor-pointer">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-[var(--primary)] font-semibold mb-4">
            Services
          </h4>

          <ul className="space-y-3 text-gray-600 text-sm">
            {[
              "Hair Styling",
              "Facial Treatments",
              "Skin Care",
              "Makeup",
              "Spa Therapy",
            ].map((item, i) => (
              <li key={i} className="hover:text-[var(--primary)] transition cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="text-[var(--primary)] font-semibold mb-4">
            Stay Updated
          </h4>

          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border border-[var(--accent)] focus:outline-none text-sm"
          />

          <button className="mt-3 w-full bg-[var(--accent)] text-black py-2 text-sm hover:bg-[#d8cc8a] transition">
            Subscribe
          </button>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto mt-16 border-t border-[var(--accent)] pt-6 flex flex-col md:flex-row items-center justify-between gap-6 relative">

        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} Rose Aura. All rights reserved.
        </p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-gray-600">
          <FiInstagram className="hover:text-[var(--primary)] cursor-pointer transition" />
          <FiFacebook className="hover:text-[var(--primary)] cursor-pointer transition" />
          <FiTwitter className="hover:text-[var(--primary)] cursor-pointer transition" />
        </div>

        {/* SCROLL TO TOP BUTTON (SAFE INSIDE FOOTER) */}
        <button
          onClick={scrollToTop}
          className="absolute right-0 -top-10 w-12 h-12 bg-[var(--primary)] text-white flex items-center justify-center shadow-lg border border-[var(--accent)] rounded-full transition-all duration-300 hover:scale-110"
        >
          <FiArrowUp size={18} />
        </button>

      </div>

    </footer>
  );
}