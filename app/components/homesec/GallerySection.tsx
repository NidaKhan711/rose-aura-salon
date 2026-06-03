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
      <section className="py-28 px-6 bg-[var(--primary)] text-white overflow-hidden relative">
        {/* Glow Effects */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-white/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-black/10 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="tracking-[0.3em] text-xs text-white/70 uppercase">
              Premium Beauty Studio
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-[var(--font-dmserif)]">
              The Rose Aura Beauty Experience
            </h2>
          </motion.div>

          {/* Editorial Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-6">

            {/* 1st Image - Facial */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 relative h-[500px] overflow-hidden group"
            >
              <Image
                src={sohil}
                alt="Facial Treatment"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-[var(--font-dmserif)]">
                  Luxury Facial Treatments
                </h3>
              </div>
            </motion.div>

            {/* 2nd Image - Makeup */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 relative h-[500px] overflow-hidden group"
            >
              <Image
                src={polor}
                alt="Makeup Art"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-[var(--font-dmserif)]">
                  Professional Makeup Artistry
                </h3>
              </div>
            </motion.div>

            {/* 3rd Image - Salon */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-12 relative h-[350px] overflow-hidden group"
            >
              <Image
                src={aboutb}
                alt="Salon Interior"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-[var(--font-dmserif)]">
                  Elegant Salon Environment
                </h3>
              </div>
            </motion.div>

            {/* 4th Image - Beauty */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-5 relative h-[420px] overflow-hidden group"
            >
              <Image
                src={ensta}
                alt="Beauty"
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-700" />

              <div className="absolute bottom-8 left-8">
                <h3 className="text-3xl font-[var(--font-dmserif)]">
                  Beauty, Style & Confidence
                </h3>
              </div>
            </motion.div>

            {/* Text Block */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7 flex items-center"
            >
              <div>
                <p className="uppercase tracking-[0.3em] text-xs text-white/60">
                  Luxury Experience
                </p>

                <h3 className="mt-4 text-4xl md:text-5xl font-[var(--font-dmserif)]">
                  The Rose Aura Beauty Experience
                </h3>

                <p className="mt-6 text-white/70 leading-relaxed text-lg">
                  Step into a world of elegance, relaxation, and expert beauty care.
                  From rejuvenating facial treatments and professional makeup artistry
                  to a luxurious salon atmosphere, every service is designed to enhance
                  your natural beauty and boost your confidence. Our commitment to
                  quality and comfort ensures a premium experience every time.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-white border-y border-[#E7E1B1] py-4 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="flex gap-20 whitespace-nowrap text-sm md:text-base font-medium text-[var(--primary)] px-6"
        >
          {Array(2)
            .fill([
              "Luxury Facial Treatment",
              "Professional Makeup Services",
              "Elegant Salon Experience",
              "Premium Beauty Care",
            ])
            .flat()
            .map((text, i) => (
              <span key={i}>{text}</span>
            ))}
        </motion.div>
      </div>
    </>
  );
}