"use client";

import { motion } from "framer-motion";
import OurStorySection from "../components/aboutsec/OurStorySection";
import OurValuesSection from "../components/aboutsec/OurValuesSection";
import MeetOurExperts from "../components/aboutsec/MeetOurExperts";
import  BookingSection from "../components/homesec/BookingSection";

export default function AboutHero() {
  return (
    <>
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <p className="uppercase tracking-[0.35em] text-white/70 text-xs md:text-sm">
            Rose Aura Salon
          </p>

          <h1 className="mt-4 text-5xl md:text-7xl font-[var(--font-dmserif)] text-white">
            About Us
          </h1>

          <div className="w-24 h-[2px] bg-[var(--accent)] mx-auto mt-6" />

          <p className="mt-6 max-w-xl mx-auto text-white/80 text-sm md:text-base leading-relaxed">
            Creating confidence through beauty, elegance and personalized care
            with every experience.
          </p>
        </motion.div>

      </section>

      {/* OUR STORY SECTION */}
      <OurStorySection />
      <OurValuesSection/>
      <MeetOurExperts/>
      <BookingSection/>
    </>
  );
}