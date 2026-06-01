"use client";

import { useState } from "react";
import { FiTrash2, FiUpload, FiImage } from "react-icons/fi";

type Image = {
  id: number;
  url: string;
  title: string;
};

const mockImages: Image[] = [
  { id: 1, url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300&h=300&fit=crop", title: "Hair Styling" },
  { id: 2, url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=300&h=300&fit=crop", title: "Facial Treatment" },
];

export default function GalleryPage() {
  const [images, setImages] = useState<Image[]>(mockImages);

  const deleteImage = (id: number) => {
    setImages(images.filter(img => img.id !== id));
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newImage: Image = {
        id: Date.now(),
        url: URL.createObjectURL(file),
        title: file.name,
      };
      setImages([newImage, ...images]);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Gallery</h1>
          <p className="text-gray-500 mt-1">Manage salon images</p>
        </div>

        <label className="cursor-pointer flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition">
          <FiUpload size={16} />
          Upload Image
          <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((img) => (
          <div key={img.id} className="group relative bg-white rounded-xl border border-accent overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="aspect-square bg-soft flex items-center justify-center overflow-hidden">
              {img.url ? (
                <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              ) : (
                <FiImage size={48} className="text-gray-300" />
              )}
            </div>
            <div className="p-3 flex justify-between items-center">
              <p className="text-sm text-gray-600 truncate">{img.title}</p>
              <button
                onClick={() => deleteImage(img.id)}
                className="p-1.5 text-red-500 hover:bg-red-50 rounded transition opacity-0 group-hover:opacity-100"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}