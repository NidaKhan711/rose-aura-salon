import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const { name, email, phone, service, message } = await req.json();

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }

    // Create contact message
    const contact = await Contact.create({
      name,
      email,
      phone: phone || "",
      service: service || "",
      message,
      isRead: false,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: "Message sent successfully!",
        contact 
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

// GET method to fetch all messages
export async function GET() {
  try {
    await connectDB();
    const messages = await Contact.find().sort({ createdAt: -1 });
    
    // Transform MongoDB documents to match your Message type
    const formattedMessages = messages.map(msg => ({
      id: msg._id.toString(),
      name: msg.name,
      email: msg.email,
      phone: msg.phone || "",
      service: msg.service || "",
      message: msg.message,
      date: msg.createdAt ? new Date(msg.createdAt).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      isRead: msg.isRead || false,
    }));
    
    return NextResponse.json(formattedMessages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}