"use client";

import { motion } from "framer-motion";

export default function BookingSection() {
  return (
    <section
      id="booking"
      className="relative py-32 px-6 bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9')",
      }}
    >

      {/* BACKGROUND OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-[var(--soft)]/70 to-[var(--accent)]/40" />

      {/* FLOATING GLOW */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-40 h-40 bg-white/30 blur-3xl rounded-full"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-10 w-52 h-52 bg-[var(--accent)]/20 blur-3xl rounded-full"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
        >

          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 0.8 }}
            className="text-[var(--primary)] tracking-[0.3em] text-xs uppercase"
          >
            Book Appointment
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1 }}
            className="mt-5 text-4xl md:text-6xl font-[var(--font-dmserif)] leading-tight text-black"
          >
            Luxury beauty <br /> crafted for you
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed"
          >
            Step into a refined beauty experience where elegance meets care.
            Every appointment is designed to enhance your natural glow.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 h-[2px] bg-[var(--primary)]"
          />

        </motion.div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative group"
        >

          {/* GLOW */}
          <div className="absolute -inset-2 bg-gradient-to-r from-[var(--accent)] to-[var(--primary)] blur-2xl opacity-20" />

          <div className="relative bg-white/90 backdrop-blur-md p-10 border border-[var(--accent)] shadow-xl overflow-hidden">

            <h3 className="text-xl font-semibold text-[var(--primary)] mb-6">
              Reserve Your Appointment
            </h3>

            <div className="space-y-5">

              {[
                { type: "text", placeholder: "Full Name" },
                { type: "email", placeholder: "Email Address" },
              ].map((input, i) => (
                <motion.input
                  key={i}
                  type={input.type}
                  placeholder={input.placeholder}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none bg-white/70 transition"
                />
              ))}

              <motion.select
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none bg-white/70"
              >
                <option>Choose Service</option>
                <option>Hair Styling</option>
                <option>Facial Treatment</option>
                <option>Manicure & Pedicure</option>
                <option>Full Beauty Package</option>
              </motion.select>

              <motion.textarea
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileFocus={{ scale: 1.02 }}
                placeholder="Message (optional)"
                className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none h-24 resize-none bg-white/70 transition"
              />

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
                }}
                whileTap={{ scale: 0.97 }}
                className="w-full relative bg-[var(--primary)] text-white py-3 border border-[var(--accent)] overflow-hidden group transition"
              >

                {/* BUTTON SHINE */}
                <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <span className="relative">
                  Confirm Appointment
                </span>

              </motion.button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}