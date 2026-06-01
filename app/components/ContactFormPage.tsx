"use client";

import { motion } from "framer-motion";

export default function ContactFormPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--soft)] px-6 py-24">

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.3em] text-xs text-[var(--primary)]">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-[var(--font-dmserif)]">
            Book Your Luxury Experience
          </h2>

          <div className="w-24 h-[2px] bg-[var(--accent)] mt-6" />

          <p className="mt-6 text-gray-600 leading-relaxed">
            We are here to give you a premium beauty experience.
            Send us a message and our team will contact you shortly.
          </p>

          <div className="mt-8 space-y-2 text-gray-700 text-sm">
            <p>📍 Rose Aura Salon</p>
            <p>📞 +92 300 0000000</p>
            <p>✉ info@roseaura.com</p>
          </div>
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-[var(--accent)] p-8 shadow-lg"
        >

          <h3 className="text-2xl font-semibold text-[var(--primary)] mb-6">
            Send Message
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none"
            />

            <select className="w-full p-3 border border-gray-200 text-gray-600">
              <option>Select Service</option>
              <option>Hair Styling</option>
              <option>Facial Treatment</option>
              <option>Makeup</option>
              <option>Spa & Relaxation</option>
            </select>

            <textarea
              rows={4}
              placeholder="Your Message"
              className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[var(--primary)] text-white py-3 border border-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)] transition"
            >
              Book Appointment
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}