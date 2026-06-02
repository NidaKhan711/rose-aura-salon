"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear messages when user starts typing
    setSuccess("");
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.service || !formData.date || !formData.time) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/admin/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Appointment booked successfully! We'll contact you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

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

          {/* Success/Error Messages */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-200"
            >
              {success}
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-200"
            >
              {error}
            </motion.div>
          )}

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

            <form onSubmit={handleSubmit} className="space-y-5">

              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none bg-white/70 transition"
              />

              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none bg-white/70 transition"
              />

              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number *"
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none bg-white/70 transition"
              />

              <div className="grid grid-cols-2 gap-4">
                <motion.input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  required
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none bg-white/70 transition"
                />

                <motion.select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none bg-white/70"
                >
                  <option value="">Select Time *</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="01:00 PM">01:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                  <option value="05:00 PM">05:00 PM</option>
                </motion.select>
              </div>

              <motion.select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none bg-white/70"
              >
                <option value="">Choose Service *</option>
                <option value="Hair Styling">Hair Styling</option>
                <option value="Facial Treatment">Facial Treatment</option>
                <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                <option value="Spa Therapy">Spa Therapy</option>
                <option value="Makeup">Makeup</option>
                <option value="Full Beauty Package">Full Beauty Package</option>
              </motion.select>

              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Special requests or message (optional)"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileFocus={{ scale: 1.02 }}
                className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none h-24 resize-none bg-white/70 transition"
              />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.05, y: -3, boxShadow: "0px 20px 40px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.97 }}
                className="w-full relative bg-[var(--primary)] text-white py-3 border border-[var(--accent)] overflow-hidden group transition disabled:opacity-50 disabled:cursor-not-allowed"
              >

                {/* BUTTON SHINE */}
                <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <span className="relative">
                  {loading ? "Booking..." : "Confirm Appointment"}
                </span>

              </motion.button>

            </form>

          </div>

        </motion.div>

      </div>
    </section>
  );
}