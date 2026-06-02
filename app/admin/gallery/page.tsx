"use client";

import { useState, useEffect } from "react";
import { FiTrash2, FiUpload, FiImage } from "react-icons/fi";

type Image = {
  _id: string;
  imageUrl: string;
  title: string;
  description?: string;
};

export default function AdminGalleryPage() {
  const [images, setImages] = useState<Image[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/admin/gallery");
      const data = await res.json();
      setImages(data);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title || file.name);
    formData.append("description", description);

    try {
      const res = await fetch("/api/admin/gallery", {
        method: "POST",
        body: formData,
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Upload failed");
      }
      
      const newImage = await res.json();
      setImages([newImage, ...images]);
      setTitle("");
      setDescription("");
      e.target.value = "";
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  const deleteImage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    
    try {
      const res = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
      });
      
      if (!res.ok) throw new Error("Delete failed");
      
      setImages(images.filter(img => img._id !== id));
      alert("Image deleted successfully!");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete image");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-3 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gallery Management</h1>
        <p className="text-gray-500 mt-1">Upload and manage salon images</p>
      </div>

      {/* Upload Form */}
      <div className="mb-8 bg-gray-50 rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold mb-4">Upload New Image</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Image title"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description (Optional)
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
              rows={2}
              placeholder="Image description"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image File
            </label>
            <label className="cursor-pointer inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition disabled:opacity-50">
              <FiUpload size={16} />
              {uploading ? "Uploading..." : "Choose Image"}
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleUpload} 
                className="hidden" 
                disabled={uploading}
              />
            </label>
          </div>
        </div>
      </div>

      {/* Images Grid */}
      {images.length === 0 ? (
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-12 text-center">
          <FiImage className="text-gray-400 text-5xl mx-auto mb-4" />
          <p className="text-gray-500">No images uploaded yet</p>
          <p className="text-gray-400 text-sm mt-1">
            Upload your first image using the form above
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((img) => (
            <div key={img._id} className="group relative bg-white rounded-xl border border-accent overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="aspect-square bg-soft flex items-center justify-center overflow-hidden">
                <img 
                  src={img.imageUrl} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300" 
                />
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-600 font-medium truncate">{img.title}</p>
                {img.description && (
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">{img.description}</p>
                )}
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => deleteImage(img._id)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded transition"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}