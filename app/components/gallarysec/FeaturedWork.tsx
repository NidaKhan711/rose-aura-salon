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

        {/* MASONRY GRID - Only backend images */}
        {images.length > 0 ? (
          <div className="columns-2 md:columns-3 gap-5 mt-20 space-y-5">
            {images.map((img, i) => (
              <motion.div
                key={img._id || i}
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
                  window.open(img.imageUrl, '_blank');
                }}
              >
                {/* IMAGE */}
                <img
                  src={img.imageUrl}
                  alt={img.title || `Gallery ${i + 1}`}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition duration-500" />

                {/* SHINE EFFECT */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute -left-40 top-0 h-full w-20 bg-white/20 rotate-12 group-hover:translate-x-[500%] transition-transform duration-1000" />
                </div>

                {/* OPTIONAL: Show title on hover */}
                {img.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm font-medium">{img.title}</p>
                    {img.description && (
                      <p className="text-white/80 text-xs mt-1">{img.description}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="mt-20 text-center">
            <p className="text-gray-400">No gallery images available. Please add some images from the admin panel.</p>
          </div>
        )}
      </div>
    </section>
  );
}