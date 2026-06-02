import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Gallery from "@/models/Gallery";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    await connectDB();
    const images = await Gallery.find().sort({ createdAt: -1 });
    return NextResponse.json(images);
  } catch (error) {
    console.error("Gallery fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch gallery images" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const formData = await req.formData();
    const file = formData.get("image") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    
    if (!file) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 }
      );
    }
    
    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Upload to Cloudinary
    const uploadPromise = new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "gallery",
          resource_type: "image",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      
      // Convert buffer to stream
      const { Readable } = require("stream");
      const readableStream = new Readable();
      readableStream.push(buffer);
      readableStream.push(null);
      readableStream.pipe(uploadStream);
    });
    
    const result: any = await uploadPromise;
    
    // Save to database
    const galleryImage = await Gallery.create({
      title: title || "",
      description: description || "",
      imageUrl: result.secure_url,
      publicId: result.public_id,
      filename: file.name,
      size: file.size,
      mimeType: file.type,
    });
    
    return NextResponse.json(galleryImage, { status: 201 });
    
  } catch (error) {
    console.error("Gallery upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 }
    );
  }
}