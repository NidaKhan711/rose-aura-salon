"use client";

import { motion } from "framer-motion";
import PricingPage from "../components/servicessec/PricingPage";
import BeforeAfterSection from "../components/servicessec/BeforeAfterSection";
import FinalCTASection from "../components/homesec/FinalCTASection";
import BookingSection from "../components/homesec/BookingSection";
import service from "../../public/imges/servic.jpg";
import Image from "next/image";

export default function ServicesHero() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative h-[75vh] min-h-[520px] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND IMAGE (Next.js Image instead of Unsplash) */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={service}
            alt="Services Hero"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* FLOATING LIGHT EFFECT */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-40 h-40 bg-white/10 blur-3xl rounded-full"
        />

        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-10 w-52 h-52 bg-[var(--accent)]/20 blur-3xl rounded-full"
        />

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[0.35em] text-white/70 text-xs md:text-sm"
          >
            Rose Aura Salon
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-4 text-5xl md:text-7xl font-[var(--font-dmserif)] text-white"
          >
            Our Services
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-[2px] bg-[var(--accent)] mx-auto mt-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-xl mx-auto text-white/80 text-sm md:text-base leading-relaxed"
          >
            Discover luxury beauty treatments designed to enhance your natural glow
            and elevate your confidence.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= SECTIONS ================= */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <BeforeAfterSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <PricingPage />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <FinalCTASection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <BookingSection />
      </motion.div>
    </>
  );
}