"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Basic Glow",
    price: "$49",
    desc: "Essential beauty care for everyday freshness.",
    features: [
      "Basic Facial",
      "Hair Wash & Styling",
      "Skin Consultation",
    ],
  },
  {
    name: "Luxury Care",
    price: "$99",
    desc: "Perfect balance of skincare, hair & relaxation.",
    features: [
      "Advanced Facial",
      "Hair Styling",
      "Manicure & Pedicure",
      "Relaxing Spa Session",
    ],
    featured: true,
  },
  {
    name: "Royal Experience",
    price: "$149",
    desc: "Full premium salon experience with complete care.",
    features: [
      "Full Body Spa",
      "Luxury Facial",
      "Hair Styling & Coloring",
      "Makeup Session",
      "VIP Treatment",
    ],
  },
];

export default function PricingPage() {
  return (
    <section className="py-32 px-6 bg-[var(--soft)] relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--primary)]/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--accent)]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto text-center">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="uppercase tracking-[0.3em] text-xs text-[var(--primary)]">
            Our Packages
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-[var(--font-dmserif)]">
            Choose Your Experience
          </h2>

          <div className="w-24 h-[2px] bg-[var(--accent)] mx-auto mt-6" />

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Select the perfect beauty package designed to match your style,
            comfort, and luxury needs.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {packages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className={`relative bg-white border p-8 text-left shadow-sm transition-all duration-500 overflow-hidden group
                ${item.featured
                  ? "border-[var(--primary)] shadow-xl"
                  : "border-[var(--accent)]"
                }
              `}
            >

              {/* FEATURED BADGE */}
              {item.featured && (
                <div className="absolute top-4 right-4 text-xs bg-[var(--primary)] text-white px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* SHINE EFFECT */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-40 top-0 h-full w-20 bg-white/30 rotate-12 group-hover:translate-x-[500%] transition-transform duration-1000" />
              </div>

              <h3 className="text-2xl font-semibold text-[var(--primary)]">
                {item.name}
              </h3>

              <p className="mt-2 text-gray-500 text-sm">
                {item.desc}
              </p>

              <h4 className="mt-6 text-4xl font-bold text-black">
                {item.price}
              </h4>

              {/* FEATURES */}
              <ul className="mt-6 space-y-2 text-gray-600 text-sm">
                {item.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 hover:translate-x-1 transition"
                  >
                    <span className="text-[var(--primary)]">✔</span> {f}
                  </li>
                ))}
              </ul>

              {/* BUTTON - Changed to anchor tag with href="#book" */}
              <motion.a
                href="#booking"
                whileHover={{
                  y: -3,
                  scale: 1.03,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 w-full relative border border-[var(--primary)] text-[var(--primary)] py-3 overflow-hidden group transition block text-center cursor-pointer"
              >

                {/* BUTTON SHINE */}
                <span className="absolute inset-0 bg-[var(--primary)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <span className="relative group-hover:text-white transition">
                  Book Now
                </span>

              </motion.a>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}