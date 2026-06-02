"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type GalleryImage = {
  _id: string;
  imageUrl: string;
  title: string;
  description?: string;
};

export default function FeaturedWork() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch("/api/admin/gallery");
      const data = await response.json();
      // Ensure we only show images that exist in database
      if (Array.isArray(data) && data.length > 0) {
        setImages(data);
      } else {
        setImages([]);
      }
    } catch (error) {
      console.error("Failed to fetch gallery images:", error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  // Professional salon placeholder images (fallback when no images in DB)
  const placeholderImages = [
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800", // Hair styling
    "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800", // Salon treatment
    "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800", // Makeup
    "https://images.unsplash.com/photo-1633681926022-84c23e8cb3d0?w=800", // Hair color
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800", // Nail art
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800", // Hair drying
  ];

  // Show placeholder images if no images in database
  const displayImages = images.length > 0 
    ? images.map(img => img.imageUrl) 
    : placeholderImages;

  if (loading) {
    return (
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="w-12 h-12 border-3 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading gallery...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 px-6 bg-white relative overflow-hidden">

      {/* SOFT BACKGROUND GLOW */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[var(--primary)]/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[var(--accent)]/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-[var(--primary)]">
            Featured Work
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-[var(--font-dmserif)]">
            Signature Moments
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8 }}
            className="h-[2px] bg-[var(--accent)] mx-auto mt-6"
          />

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            A curated collection of our most beautiful transformations and salon artistry.
          </p>
        </motion.div>

        {/* MASONRY GRID */}
        {displayImages.length > 0 ? (
          <div className="columns-2 md:columns-3 gap-5 mt-20 space-y-5">
            {displayImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="relative overflow-hidden group break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => {
                  window.open(img, '_blank');
                }}
              >
                {/* IMAGE */}
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />

                {/* SHINE EFFECT */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -left-40 top-0 h-full w-20 bg-white/20 rotate-12 group-hover:translate-x-[500%] transition-transform duration-1000" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-20 text-center">
            <p className="text-gray-400">Gallery images coming soon...</p>
          </div>
        )}

        {/* No admin link here - this is client-facing only */}
      </div>
    </section>
  );
}