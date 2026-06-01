"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const reviews = [
  {
    name: "Ayesha Khan",
    review:
      "Rose Aura is not just a salon, it’s a full luxury experience. Every detail feels carefully designed.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  },
  {
    name: "Sara Ali",
    review:
      "Everything feels calm, premium and professional. The best beauty experience I’ve ever had.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
  },
  {
    name: "Hira Noor",
    review:
      "They focus on detail and perfection. I always leave feeling more confident and beautiful.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--accent)]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <p className="text-[var(--primary)] tracking-[0.3em] text-xs uppercase">
            Testimonials
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-[var(--font-dmserif)]">
            What our clients say
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">

          {reviews.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group relative bg-white border border-[#E7E1B1] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >

              {/* SHINE EFFECT */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -left-40 top-0 h-full w-20 bg-white/30 rotate-12 group-hover:translate-x-[500%] transition-transform duration-1000" />
              </div>

              {/* QUOTE ICON */}
              <FaQuoteLeft className="text-[var(--primary)] text-xl mb-4 opacity-70 group-hover:scale-110 transition" />

              {/* IMAGE + NAME */}
              <div className="flex items-center gap-4 mb-5">

                <motion.img
                  src={item.img}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />

                <div>
                  <h4 className="font-semibold text-[var(--primary)] text-sm group-hover:tracking-wide transition-all duration-300">
                    {item.name}
                  </h4>

                  <div className="flex gap-1 text-yellow-500 text-xs mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>

              </div>

              {/* REVIEW TEXT */}
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition">
                “{item.review}”
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}