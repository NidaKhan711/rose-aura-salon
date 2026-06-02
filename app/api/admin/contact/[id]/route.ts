import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Contact from "@/models/Contact";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await connectDB();
    const deleted = await Contact.findByIdAndDelete(id);
    
    if (!deleted) {
      return NextResponse.json(
        { error: "Message not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting message:", error);
    return NextResponse.json(
      { error: "Failed to delete message" },
      { status: 500 }
    );
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { isRead } = await req.json();
    
    await connectDB();
    const updated = await Contact.findByIdAndUpdate(
      id,
      { isRead },
      { new: true }
    );
    
    if (!updated) {
      return NextResponse.json(
        { error: "Message not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, contact: updated });
  } catch (error) {
    console.error("Error updating message:", error);
    return NextResponse.json(
      { error: "Failed to update message" },
      { status: 500 }
    );
  }
}