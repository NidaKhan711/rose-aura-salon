import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();

    // Get admin credentials from environment variables
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
      console.error("Admin credentials not set in environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    if (!JWT_SECRET) {
      console.error("JWT_SECRET not set in environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Check if user exists in database
    let user = await User.findOne({ email });
    
    // Create default admin if no user exists (only for first time)
    if (!user) {
      const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);
      user = await User.create({
        email: ADMIN_EMAIL,
        password: hashedPassword,
        name: "Admin",
        role: "admin",
      });
      console.log("Default admin user created");
    }

    // Verify credentials
    if (email !== ADMIN_EMAIL) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Create JWT token
    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email,
        role: user.role || "admin" 
      },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({ 
      success: true, 
      message: "Login successful",
      user: { 
        id: user._id, 
        email: user.email, 
        name: user.name,
        role: user.role 
      } 
    });

    // Set cookie
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Login failed. Please try again." },
      { status: 500 }
    );
  }
}