import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Gallery from "@/models/Gallery";
import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ---------------- GET IMAGES ----------------
export async function GET() {
  try {
    await connectDB();

    const images = await Gallery.find().sort({ createdAt: -1 });

    return NextResponse.json(images);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}

// ---------------- UPLOAD IMAGE ----------------
export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const formData = await req.formData();

    const file = formData.get("image") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // 🔥 Upload to Cloudinary
    const uploadResult: any = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "gallery" },
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );

      const readable = new Readable();
      readable.push(buffer);
      readable.push(null);
      readable.pipe(stream);
    });

    // 🔥 SAVE TO DB (FIXED - ALL REQUIRED FIELDS)
    const image = await Gallery.create({
      title: title || file.name,
      description: description || "",
      imageUrl: uploadResult.secure_url,
      publicId: uploadResult.public_id,

      // REQUIRED FIELDS FIX
      filename: file.name,
      size: file.size,
      mimeType: file.type,
    });

    return NextResponse.json(image, { status: 201 });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      { error: "Upload failed" },
      { status: 500 }
    );
  }
}