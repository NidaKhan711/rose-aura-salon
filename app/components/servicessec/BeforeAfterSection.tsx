"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import haira from "../../../public/imges/haria.jpg";
import hairb from "../../../public/imges/harib.jpg";
import hairc from "../../../public/imges/haric.jpg";
import haird from "../../../public/imges/haird.jpg";

import skina from "../../../public/imges/skina.jpg";
import skinb from "../../../public/imges/skinb.jpg";
import skinc from "../../../public/imges/skinc.jpg";
import skind from "../../../public/imges/skind.jpg";

import eye from "../../../public/imges/eye.jpg";
import lip from "../../../public/imges/lip.jpg";
import face from "../../../public/imges/face.jpg";
import glam from "../../../public/imges/glam.jpg";

type ServiceItem = {
  title: string;
  img: StaticImageData;
};

type SectionProps = {
  id: string;
  title: string;
  items: ServiceItem[];
};

const servicesData = {
  hair: [
    { title: "Hair Styling", img: haira },
    { title: "Hair Coloring", img: hairb },
    { title: "Keratin Treatment", img: hairc },
    { title: "Hair Botox", img: haird },
  ],

  facial: [
    { title: "Hydra Facial", img: skina },
    { title: "Deep Cleansing", img: skinb },
    { title: "Skin Brightening", img: skinc },
    { title: "Anti Aging", img: skind },
  ],

  makeup: [
    { title: "Bridal Makeup", img: eye },
    { title: "Party Makeup", img: lip },
    { title: "HD Makeup", img: face },
    { title: "Photoshoot Glam", img: glam },
  ],
};

function Section({ id, title, items }: SectionProps) {
  return (
    <div id={id} className="scroll-mt-24 mt-32">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-[var(--font-dmserif)] text-[var(--primary)]">
          {title}
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.7 }}
          className="h-[2px] bg-[var(--accent)] mx-auto mt-4"
        />
      </motion.div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              y: -10,
              scale: 1.02,
            }}
            className="group bg-white border border-[var(--accent)] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            {/* IMAGE */}
            <div className="relative w-full h-44 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* TEXT */}
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 group-hover:text-[var(--primary)] transition">
                {item.title}
              </h3>

              <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-700 transition">
                Premium luxury service
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-[var(--primary)]">
            Our Expertise
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-[var(--font-dmserif)]">
            Luxury Beauty Services
          </h1>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            From hair transformations to skin rituals and spa relaxation,
            every service is designed to enhance your natural beauty.
          </p>
        </motion.div>

        <Section
          id="hair"
          title="Hair Services"
          items={servicesData.hair}
        />

        <Section
          id="facial"
          title="Facial & Skin Care"
          items={servicesData.facial}
        />

        <Section
          id="makeup"
          title="Makeup Studio"
          items={servicesData.makeup}
        />
      </div>
    </section>
  );
}