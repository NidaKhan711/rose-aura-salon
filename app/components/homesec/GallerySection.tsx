"use client";

import { motion } from "framer-motion";

export default function GreenEditorialSection() {
  return (
    <>
      {/* GREEN SECTION */}
      <section className="py-28 px-6 bg-[var(--primary)] text-white overflow-hidden relative">

        {/* SOFT BACKGROUND GLOW */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-black/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center"
          >
            <p className="tracking-[0.3em] text-xs text-white/70 uppercase">
              Signature Work
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-[var(--font-dmserif)]">
              Crafted beauty in every detail
            </h2>
          </motion.div>

          {/* GRID LAYOUT */}
          <div className="mt-20 relative min-h-[900px]">

            {/* LEFT BIG IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="absolute left-0 top-0 w-[45%] h-[520px] overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>

            {/* TOP RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 80, y: -40 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="absolute right-0 top-10 w-[40%] h-[320px] overflow-hidden shadow-xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
            </motion.div>

            {/* BOTTOM LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -60, y: 60 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="absolute left-[10%] bottom-0 w-[35%] h-[320px] overflow-hidden shadow-xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

            {/* BOTTOM RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 80, y: 80 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="absolute right-0 bottom-10 w-[50%] h-[460px] overflow-hidden shadow-2xl group"
            >
              <img
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>

          </div>

          {/* BOTTOM TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-16 text-white/70 text-sm max-w-2xl mx-auto"
          >
            Every look is carefully crafted to highlight natural beauty with precision and elegance.
          </motion.p>

        </div>
      </section>

      {/* 💎 MARQUEE BAR (SMOOTHER + PREMIUM) */}
      <div className="w-full bg-white border-y border-[#E7E1B1] py-4 overflow-hidden">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-20 whitespace-nowrap text-sm md:text-base font-medium text-[var(--primary)] px-6"
        >

          {Array(2).fill([
            "Hair Styling • Flat 20% Off",
            "Luxury Facial Treatment",
            "Nail Art & Spa Packages",
            "Organic Skincare Specials",
          ]).flat().map((text, i) => (
            <span key={i} className="opacity-80 hover:opacity-100 transition">
              {text}
            </span>
          ))}

        </motion.div>

      </div>
    </>
  );
}