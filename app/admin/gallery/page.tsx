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

  // ---------------- FETCH IMAGES ----------------
  const fetchImages = async () => {
    try {
      const res = await fetch("/api/admin/gallery");

      if (!res.ok) throw new Error("Failed to fetch images");

      const data = await res.json();
      setImages(data || []);
    } catch (error) {
      console.error("Fetch error:", error);
      setImages([]);
    } finally {
      setLoading(false);
    }
  };

  // ---------------- UPLOAD IMAGE ----------------
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("image", file);
      formData.append("title", title || file.name);
      formData.append("description", description);

      const res = await fetch("/api/admin/gallery", {
        method: "POST",
        body: formData,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Upload failed");
      }

      // instantly add new image
      setImages((prev) => [data, ...prev]);

      setTitle("");
      setDescription("");
      e.target.value = "";

      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload error:", error);
      alert(error instanceof Error ? error.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  // ---------------- DELETE IMAGE ----------------
  const deleteImage = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      const res = await fetch(`/api/admin/gallery/${id}`, {
        method: "DELETE",
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        throw new Error(data?.error || "Delete failed");
      }

      setImages((prev) => prev.filter((img) => img._id !== id));

      alert("Image deleted successfully!");
    } catch (error) {
      console.error("Delete error:", error);
      alert(error instanceof Error ? error.message : "Delete failed");
    }
  };

  // ---------------- LOADING ----------------
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Gallery Management
        </h1>
        <p className="text-gray-500 mt-1">
          Upload and manage salon images
        </p>
      </div>

      {/* ---------------- UPLOAD FORM ---------------- */}
      <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-4 sm:p-6">
        <h2 className="text-lg font-semibold mb-4">
          Upload New Image
        </h2>

        <div className="space-y-4">
          {/* TITLE */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Title
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Image title"
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              rows={2}
              placeholder="Image description"
            />
          </div>

          {/* FILE UPLOAD */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Image File
            </label>

            <label className="cursor-pointer inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg">
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

      {/* ---------------- IMAGES GRID ---------------- */}
      {images.length === 0 ? (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 text-center sm:p-12">
          <FiImage className="text-gray-400 text-5xl mx-auto mb-4" />
          <p className="text-gray-500">No images uploaded yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((img) => (
            <div
              key={img._id}
              className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              {/* IMAGE */}
              <div className="aspect-square bg-gray-100">
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* INFO */}
              <div className="p-3">
                <p className="font-medium text-sm truncate">
                  {img.title}
                </p>

                {img.description && (
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {img.description}
                  </p>
                )}

                {/* DELETE */}
                <div className="flex justify-end mt-2">
                  <button
                    onClick={() => deleteImage(img._id)}
                    className="p-1.5 text-red-500 hover:bg-red-50 rounded"
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
