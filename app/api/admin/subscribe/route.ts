import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Subscribe from "@/models/Subscribe";

// GET - Fetch all subscribers
export async function GET() {
  try {
    await connectDB();
    const subscribers = await Subscribe.find().sort({ subscribedAt: -1 });
    return NextResponse.json(subscribers || []);
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return NextResponse.json([], { status: 200 });
  }
}

// POST - Add new subscriber (YEH MISSING THA)
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    
    // Validation
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 }
      );
    }
    
    await connectDB();
    
    // Check if already subscribed
    const existingSubscriber = await Subscribe.findOne({ email: email.toLowerCase() });
    if (existingSubscriber) {
      return NextResponse.json(
        { error: "This email is already subscribed!" },
        { status: 400 }
      );
    }
    
    // Create new subscriber
    const subscriber = await Subscribe.create({
      email: email.toLowerCase(),
      subscribedAt: new Date(),
      isActive: true,
    });
    
    console.log(`New subscriber added: ${email}`);
    
    return NextResponse.json(
      { 
        success: true, 
        message: "Subscribed successfully! ✨" 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error("Error adding subscriber:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}

// DELETE - Remove subscriber
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    
    if (!id) {
      return NextResponse.json(
        { error: "Subscriber ID is required" },
        { status: 400 }
      );
    }

    await connectDB();
    const deleted = await Subscribe.findByIdAndDelete(id);
    
    if (!deleted) {
      return NextResponse.json(
        { error: "Subscriber not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Subscriber deleted successfully" });
  } catch (error) {
    console.error("Error deleting subscriber:", error);
    return NextResponse.json(
      { error: "Failed to delete subscriber" },
      { status: 500 }
    );
  }
}