"use client";

import { motion } from "framer-motion";
import { FiHeart, FiAward, FiSmile, FiShield } from "react-icons/fi";

const values = [
  {
    icon: <FiHeart size={26} />,
    title: "Personalized Care",
    desc: "Every treatment is thoughtfully tailored to your unique beauty needs.",
  },
  {
    icon: <FiAward size={26} />,
    title: "Excellence",
    desc: "We focus on quality, precision, and exceptional service in every detail.",
  },
  {
    icon: <FiSmile size={26} />,
    title: "Client Experience",
    desc: "Creating a welcoming and relaxing environment for every guest.",
  },
  {
    icon: <FiShield size={26} />,
    title: "Premium Standards",
    desc: "Using trusted products and modern techniques to deliver lasting results.",
  },
];

export default function OurValuesSection() {
  return (
    <section className="py-32 px-6 bg-[var(--soft)] relative overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--accent)]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--primary)]">
            Our Values
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-[var(--font-dmserif)]">
            Principles that shape
            <br />
            our luxury experience
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 110 }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-[var(--accent)] mx-auto mt-6"
          />

          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Every detail in our salon is guided by care, precision, trust,
            and a commitment to timeless beauty experiences.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="relative group"
            >

              {/* glow border */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl" />

              {/* card */}
              <div className="relative bg-white/80 backdrop-blur-md p-8 border border-[var(--accent)] shadow-sm group-hover:shadow-xl transition-all duration-500">

                {/* icon bubble */}
                <div className="w-14 h-14 flex items-center justify-center bg-[var(--soft)] text-[var(--primary)] border border-[var(--accent)] group-hover:scale-110 transition">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold text-[var(--primary)]">
                  {value.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {value.desc}
                </p>

                {/* subtle line animation */}
                <div className="mt-6 h-[2px] w-0 bg-[var(--primary)] group-hover:w-full transition-all duration-500" />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}