"use client";

import { motion } from "framer-motion";
import { FaCut, FaSpa, FaPalette, FaHandSparkles } from "react-icons/fa";
import Image from "next/image";

import hair from "../../../public/imges/hair.jpg";
import skin from "../../../public/imges/look.jpg";
import makeup from "../../../public/imges/eye.jpg";
import nails from "../../../public/imges/nails.jpg";

const services = [
  {
    title: "Hair Styling",
    desc: "Modern cuts, styling and treatments.",
    icon: <FaCut />,
    img: hair,
  },
  {
    title: "Skin Care",
    desc: "Facials and skin treatments for glowing skin.",
    icon: <FaSpa />,
    img: skin,
  },
  {
    title: "Makeup Art",
    desc: "Bridal and event makeup for every occasion.",
    icon: <FaPalette />,
    img: makeup,
  },
  {
    title: "Nail Care",
    desc: "Manicure and nail styling with premium finish.",
    icon: <FaHandSparkles />,
    img: nails,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-[var(--primary)] tracking-widest text-sm">
            WHAT WE OFFER
          </p>

          <h2 className="mt-3 text-3xl md:text-5xl font-[var(--font-dmserif)]">
            The Rose Experience
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Premium beauty services designed to enhance your natural elegance.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {services.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -12 }}
              className="group relative bg-gradient-to-b from-white to-[#FFFDF7] border border-[#E7E1B1] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >

              {/* SHINE EFFECT */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-40 top-0 h-full w-20 bg-white/30 rotate-12 group-hover:translate-x-[500%] transition-transform duration-1000" />
              </div>

              {/* IMAGE */}
              <div className="relative w-full h-40 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* CONTENT */}
              <div className="p-5 text-center">

                <div className="text-2xl text-[var(--primary)] flex justify-center mb-3 transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
                  {item.icon}
                </div>

                <h3 className="text-lg font-[var(--font-dmserif)] text-[var(--primary)] transition-all duration-300 group-hover:tracking-wider">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-600 text-sm">
                  {item.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}