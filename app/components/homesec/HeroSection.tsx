"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import hero from "../../../public/imges/hero.jpg";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center bg-white px-6 pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[var(--primary)] tracking-widest text-sm">
            BEAUTY & WELLNESS STUDIO
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4">
            Enhance your natural beauty with care and style
          </h1>

          <p className="mt-5 text-gray-600 text-base md:text-lg">
            We provide professional hair styling, skincare, and makeup services.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#booking"
              className="bg-[var(--primary)] text-white px-6 py-3 border border-black hover:bg-white hover:text-black transition"
            >
              Book Appointment
            </a>

            <a
              href="/services"
              className="border border-[var(--accent)] px-6 py-3 hover:bg-[#FBF5DD] transition"
            >
              View Services
            </a>
          </div>
        </motion.div>

        {/* IMAGE (Next.js optimized) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full h-[500px] shadow-lg">
            <Image
              src={hero}
              alt="Hero Image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}