"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import sohil from "../../../public/imges/sohil.jpg";
import polor from "../../../public/imges/polor.jpg";
import aboutb from "../../../public/imges/aboutb.jpg";
import ensta from "../../../public/imges/ensta.jpg";

export default function GreenEditorialSection() {
  return (
    <>
      <section className="py-24 px-4 md:px-6 bg-[var(--primary)] text-white relative overflow-hidden">

        {/* Glow */}
        <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-white/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-black/10 blur-3xl rounded-full" />

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="tracking-[0.3em] text-xs text-white/60 uppercase">
              Premium Beauty Studio
            </p>

            <h2 className="mt-3 text-3xl md:text-5xl font-[var(--font-dmserif)] leading-tight">
              The Rose Aura Experience
            </h2>
          </motion.div>

          {/* GRID */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-5">

            {/* Left big image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 relative h-[420px] md:h-[520px] overflow-hidden group rounded-xl"
            >
              <Image src={sohil} alt="Facial" fill className="object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="absolute bottom-6 left-6 text-xl md:text-2xl font-[var(--font-dmserif)]">
                Luxury Facial Treatments
              </h3>
            </motion.div>

            {/* Right top */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative h-[420px] md:h-[520px] overflow-hidden group rounded-xl"
            >
              <Image src={polor} alt="Makeup" fill className="object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="absolute bottom-6 left-6 text-xl md:text-2xl font-[var(--font-dmserif)]">
                Makeup Artistry
              </h3>
            </motion.div>

            {/* Middle wide image */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-12 relative h-[280px] md:h-[360px] overflow-hidden group rounded-xl"
            >
              <Image src={aboutb} alt="Salon" fill className="object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="absolute bottom-6 left-6 text-xl md:text-2xl font-[var(--font-dmserif)]">
                Elegant Salon Space
              </h3>
            </motion.div>

            {/* Bottom left image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-5 relative h-[360px] overflow-hidden group rounded-xl"
            >
              <Image src={ensta} alt="Beauty" fill className="object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-black/20" />
              <h3 className="absolute bottom-6 left-6 text-xl md:text-2xl font-[var(--font-dmserif)]">
                Confidence & Beauty
              </h3>
            </motion.div>

            {/* TEXT BLOCK (FIXED) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-7 flex items-center"
            >
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-10 backdrop-blur-md">

                <p className="uppercase tracking-[0.3em] text-xs text-white/60">
                  Luxury Experience
                </p>

                <h3 className="mt-3 text-2xl md:text-4xl font-[var(--font-dmserif)] leading-snug">
                  A refined beauty experience designed for confidence
                </h3>

                <p className="mt-5 text-white/70 leading-relaxed text-sm md:text-base">
                  Step into a calm, elegant space where every detail is designed to relax you.
                  From skin care to makeup artistry, everything focuses on enhancing your natural
                  beauty with a soft, modern luxury feel. This is not just a salon visit — it's an experience.
                </p>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="w-full bg-white border-y border-[var(--primary)]/20 py-3 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap text-sm md:text-base font-medium text-[var(--primary)] px-6"
        >
          {Array(2)
            .fill([
              "Luxury Facial Treatment",
              "Professional Makeup",
              "Elegant Salon Experience",
              "Premium Care",
            ])
            .flat()
            .map((t, i) => (
              <span key={i}>{t}</span>
            ))}
        </motion.div>
      </div>
    </>
  );
}