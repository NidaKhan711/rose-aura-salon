"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import pera from "../../../public/imges/pera.jpg";
import perb from "../../../public/imges/perb.jpg";
import perc from "../../../public/imges/perc.jpg";

const experts = [
  {
    name: "Sophia Bennett",
    role: "Creative Hair Stylist",
    image: pera,
    desc: "Specialist in modern luxury hair transformations and styling artistry.",
  },
  {
    name: "Emma Collins",
    role: "Skincare Specialist",
    image: perb,
    desc: "Focused on skin rejuvenation, glow therapy and advanced treatments.",
  },
  {
    name: "Olivia Carter",
    role: "Beauty Consultant",
    image: perc,
    desc: "Helps clients discover personalized beauty and confidence styles.",
  },
];

export default function MeetOurExperts() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--accent)]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-[var(--primary)]">
            Our Creative Team
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-[var(--font-dmserif)] leading-tight">
            Artists behind
            <br />
            your beauty experience
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 110 }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-[var(--accent)] mx-auto mt-6"
          />

          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Every transformation is crafted by experts who combine creativity,
            precision, and luxury care to deliver unforgettable results.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-24 grid lg:grid-cols-3 gap-12 items-end">

          {experts.map((expert, i) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group relative"
            >

              <div className="relative transition-all duration-500 group-hover:-translate-y-6">

                {/* IMAGE */}
                <div className="overflow-hidden border border-[var(--accent)]">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    width={600}
                    height={800}
                    className="w-full h-[480px] object-cover group-hover:scale-110 transition duration-700"
                  />
                </div>

                {/* TEXT */}
                <div className="bg-[var(--soft)] border border-[var(--accent)] p-6">

                  <p className="text-xs uppercase tracking-[0.3em] text-[var(--primary)]">
                    {expert.role}
                  </p>

                  <h3 className="mt-3 text-2xl font-[var(--font-dmserif)]">
                    {expert.name}
                  </h3>

                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {expert.desc}
                  </p>

                </div>

                {/* NUMBER BADGE */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-[var(--primary)] text-white flex items-center justify-center text-xs shadow-lg">
                  {String(i + 1).padStart(2, "0")}
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}