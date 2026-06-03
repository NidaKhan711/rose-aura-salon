"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import polish from "../../../public/imges/polishh.jpg";

const points = [
  {
    title: "Personalized Care",
    desc: "Every treatment is tailored to your skin, hair, and personal style.",
  },
  {
    title: "Skilled Professionals",
    desc: "Experienced beauty experts focused on precision and detail.",
  },
  {
    title: "Quality Products",
    desc: "We use safe, high-grade products for long-lasting results.",
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--primary)]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--accent)]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >

          <p className="text-[var(--primary)] tracking-[0.3em] text-xs uppercase">
            Why Choose Us
          </p>

          <h2 className="mt-5 text-3xl md:text-5xl font-[var(--font-dmserif)] leading-tight">
            Care, precision, and beauty in every detail
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed text-base md:text-lg">
            We believe beauty is a personal journey. Our team creates a calm,
            refined environment where every client feels confident and valued.
          </p>

          {/* POINTS */}
          <div className="mt-12 space-y-8">

            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ x: 8 }}
                className="group pl-6 border-l-2 border-[var(--accent)] hover:border-[var(--primary)] transition-all duration-300"
              >
                <h4 className="font-semibold text-[var(--primary)] text-lg group-hover:tracking-wide transition-all duration-300">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative group"
        >

          <div className="relative w-full h-[520px] overflow-hidden border border-[#E7E1B1] shadow-xl">

            {/* NEXT IMAGE */}
            <Image
              src={polish}
              alt="Salon Experience"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

            {/* LIGHT SWEEP EFFECT */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -left-40 top-0 h-full w-24 bg-white/20 rotate-12 group-hover:translate-x-[500%] transition-transform duration-1000" />
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}