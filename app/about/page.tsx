"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import OurStorySection from "../components/aboutsec/OurStorySection";
import OurValuesSection from "../components/aboutsec/OurValuesSection";
import MeetOurExperts from "../components/aboutsec/MeetOurExperts";
import BookingSection from "../components/homesec/BookingSection";
import abouta from "../../public/imges/about.jpg";

export default function AboutHero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <Image
          src={abouta}
          alt="About Rose Aura Salon"
          fill
          priority
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

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

      {/* OTHER SECTIONS */}
      <OurStorySection />
      <OurValuesSection />
      <MeetOurExperts />
      <BookingSection />
    </>
  );
}