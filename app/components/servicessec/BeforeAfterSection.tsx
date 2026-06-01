"use client";

import { motion } from "framer-motion";

// TYPES
type ServiceItem = {
  title: string;
  img: string;
};

type SectionProps = {
  id: string;
  title: string;
  items: ServiceItem[];
};

const servicesData = {
  hair: [
    { title: "Hair Styling", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=800" },
    { title: "Hair Coloring", img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800" },
    { title: "Keratin Treatment", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800" },
    { title: "Hair Botox", img: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800" },
  ],

  facial: [
    { title: "Hydra Facial", img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800" },
    { title: "Deep Cleansing", img: "https://images.unsplash.com/photo-1594824475317-d0e0b1b5b5a5?w=800" },
    { title: "Skin Brightening", img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800" },
    { title: "Anti Aging", img: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800" },
  ],

  spa: [
    { title: "Full Body Massage", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800" },
    { title: "Aromatherapy", img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800" },
    { title: "Hot Stone Therapy", img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800" },
    { title: "Body Detox", img: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800" },
  ],

  makeup: [
    { title: "Bridal Makeup", img: "https://images.unsplash.com/photo-1526045478516-99145907023c?w=800" },
    { title: "Party Makeup", img: "https://images.unsplash.com/photo-1487412912498-0447578fcca8?w=800" },
    { title: "HD Makeup", img: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800" },
    { title: "Photoshoot Glam", img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800" },
  ],
};

// SECTION COMPONENT
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

        {/* underline animation */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.7 }}
          className="h-[2px] bg-[var(--accent)] mx-auto mt-4"
        />
      </motion.div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">

        {items.map((item: ServiceItem, i: number) => (
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
            <div className="overflow-hidden">
              <motion.img
                src={item.img}
                alt={item.title}
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full h-44 object-cover group-hover:scale-110 transition-transform duration-700"
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

        {/* SECTIONS */}
        <Section id="hair" title="Hair Services" items={servicesData.hair} />
        <Section id="facial" title="Facial & Skin Care" items={servicesData.facial} />
        <Section id="spa" title="Spa & Relaxation" items={servicesData.spa} />
        <Section id="makeup" title="Makeup Studio" items={servicesData.makeup} />

      </div>
    </section>
  );
}