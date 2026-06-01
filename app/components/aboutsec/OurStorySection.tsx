"use client";

import { motion } from "framer-motion";

export default function OurStorySection() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden relative">

      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--accent)]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative group"
        >

          {/* IMAGE */}
          <div className="overflow-hidden border border-[var(--accent)]">
            <motion.img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop"
              alt="Salon Interior"
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full h-[650px] object-cover group-hover:scale-105 transition duration-700"
            />
          </div>

          {/* FLOATING EXPERIENCE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute -bottom-10 -right-10 bg-[var(--soft)] border border-[var(--accent)] p-8 shadow-xl"
          >
            <h3 className="text-5xl font-bold text-[var(--primary)]">
              10+
            </h3>

            <p className="mt-2 text-gray-700 text-sm uppercase tracking-widest">
              Years Of Excellence
            </p>
          </motion.div>

          {/* LIGHT SHINE EFFECT */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -left-40 top-0 h-full w-20 bg-white/20 rotate-12 group-hover:translate-x-[500%] transition-transform duration-1000" />
          </div>

        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >

          <p className="uppercase tracking-[0.35em] text-xs text-[var(--primary)]">
            Our Story
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-[var(--font-dmserif)] text-black leading-tight">
            Beauty is more than a service,
            <br />
            it is an experience.
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-[var(--accent)] mt-8"
          />

          {/* TEXT STAGGER FEEL */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-gray-600 leading-relaxed"
          >
            At Rose Aura Salon, we believe beauty should feel effortless,
            personal, and empowering. Our journey began with a simple vision:
            to create a calm and luxurious space where every client receives
            exceptional care and attention.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-600 leading-relaxed"
          >
            Over the years, we have combined modern beauty techniques with
            timeless elegance to deliver experiences that go beyond expectations.
            From hair styling to skincare treatments, every detail is designed
            to help you look and feel your best.
          </motion.p>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-10 mt-14">

            {[
              { num: "5K+", label: "Happy Clients" },
              { num: "25+", label: "Beauty Experts" },
              { num: "10+", label: "Years Experience" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-[var(--primary)]">
                  {s.num}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{s.label}</p>
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}