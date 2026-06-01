"use client";

import { motion } from "framer-motion";

const images = [
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702",
  "https://images.unsplash.com/photo-1556228720-195a672e8a03",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  "https://images.unsplash.com/photo-1519741497674-611481863552",
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e",
  "https://images.unsplash.com/photo-1556228453-efd7c1ff04f6",
];

export default function FeaturedWork() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--accent)]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-[var(--primary)]">
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-[var(--font-dmserif)]">
            Signature Moments
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-[var(--accent)] mx-auto mt-6"
          />

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            A curated collection of our most beautiful transformations and salon artistry.
          </p>
        </motion.div>

        {/* MASONRY GRID */}
        <div className="columns-2 md:columns-3 gap-5 mt-20 space-y-5">

          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="relative overflow-hidden group break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500"
            >

              {/* IMAGE */}
              <img
                src={img}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />

              {/* SHINE EFFECT */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-40 top-0 h-full w-20 bg-white/20 rotate-12 group-hover:translate-x-[500%] transition-transform duration-1000" />
              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}