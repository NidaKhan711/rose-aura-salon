"use client";

import { motion } from "framer-motion";

export default function FinalCTASection() {
  return (
    <section className="relative py-32 px-6 bg-[var(--soft)] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent)]/20 blur-3xl rounded-full" />

      <div className="relative max-w-4xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.35em] text-xs text-[var(--primary)]"
        >
          Luxury Beauty Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-4xl md:text-6xl font-[var(--font-dmserif)] text-black leading-tight"
        >
          Beauty Refined,
          <br />
          Confidence Elevated
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg"
        >
          Step into a world of elegance where expert care, premium
          treatments, and personalized attention come together to create
          an unforgettable beauty experience. From stunning hair
          transformations to rejuvenating skincare rituals, every visit
          is designed to make you feel radiant and confident.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 140 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
          className="h-[2px] bg-[var(--accent)] mx-auto mt-10"
        />

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{
            y: -3,
            scale: 1.03,
          }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 px-10 py-4 border border-[var(--primary)] text-[var(--primary)] font-medium tracking-[0.15em] hover:bg-[var(--primary)] hover:text-white transition-all duration-300"
        >
          START YOUR BEAUTY JOURNEY
        </motion.button>

      </div>
    </section>
  );
}