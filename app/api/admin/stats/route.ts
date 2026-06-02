import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Booking from "@/models/Booking";
import Contact from "@/models/Contact";
import Subscription from "@/models/Subscribe";

export async function GET() {
  try {
    await connectDB();
    
    const [totalBookings, totalMessages, totalSubscribers] = await Promise.all([
      Booking.countDocuments(),
      Contact.countDocuments(),
      Subscription.countDocuments(),
    ]);

    const recentBookings = await Booking.find().sort({ createdAt: -1 }).limit(5);
    const recentMessages = await Contact.find().sort({ createdAt: -1 }).limit(5);

    return NextResponse.json({
      stats: { totalBookings, totalMessages, totalSubscribers },
      recentBookings,
      recentMessages,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}