import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    imageUrl: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    mimeType: {
      type: String,
      required: true,
    },
    publicId: {
      type: String, // For Cloudinary
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Gallery || mongoose.model("Gallery", GallerySchema);