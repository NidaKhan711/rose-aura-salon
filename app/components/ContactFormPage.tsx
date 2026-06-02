"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear messages when user starts typing
    if (success || error) {
      setSuccess("");
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all required fields");
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/admin/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Message sent successfully! We'll get back to you soon. ✨");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
        // Clear success message after 5 seconds
        setTimeout(() => setSuccess(""), 5000);
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[var(--soft)] px-6 py-24">

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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
            <p>📍 Rose Aura Salon, Lahore</p>
            <p>📞 +92 300 1234567</p>
            <p>✉ info@roseaura.com</p>
          </div>

          {/* Success/Error Messages */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-100 text-green-700 rounded-lg border border-green-200 text-sm"
            >
              {success}
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-red-100 text-red-700 rounded-lg border border-red-200 text-sm"
            >
              {error}
            </motion.div>
          )}
        </motion.div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-[var(--accent)] p-8 shadow-lg"
        >

          <h3 className="text-2xl font-semibold text-[var(--primary)] mb-6">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name *"
              required
              className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none transition"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email *"
              required
              className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none transition"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (optional)"
              className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none transition"
            />

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 text-gray-600 focus:border-[var(--primary)] outline-none transition"
            >
              <option value="">Select Service (optional)</option>
              <option value="Hair Styling">Hair Styling</option>
              <option value="Facial Treatment">Facial Treatment</option>
              <option value="Makeup">Makeup</option>
              <option value="Spa & Relaxation">Spa & Relaxation</option>
              <option value="Manicure & Pedicure">Manicure & Pedicure</option>
            </select>

            <textarea
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              required
              className="w-full p-3 border border-gray-200 focus:border-[var(--primary)] outline-none transition resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--primary)] text-white py-3 border border-[var(--primary)] hover:bg-transparent hover:text-[var(--primary)] transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}