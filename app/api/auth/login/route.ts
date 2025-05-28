// app/api/auth/login/route.ts
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";
import User from "@/app/models/user";
import jwt from "jsonwebtoken";

// CORS headers configuration
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(request: Request) {
  try {
    // Connect to MongoDB with error handling
    await dbConnect().catch((err) => {
      console.error("DB connection error:", err);
      throw new Error("Database connection failed");
    });

    const { email, password } = await request.json();
    console.log("Login attempt:", email); // Log email only for security

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required" },
        {
          status: 400,
          headers: corsHeaders,
        }
      );
    }

    // Find user with password field
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      console.log("User not found:", email);
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        {
          status: 401,
          headers: corsHeaders,
        }
      );
    }

    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      console.log("Password mismatch for:", email);
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        {
          status: 401,
          headers: corsHeaders,
        }
      );
    }

    // Verify JWT secret is configured
    if (!process.env.JWT_SECRET) {
      console.error("JWT_SECRET not configured");
      throw new Error("Server configuration error");
    }

    // Create token
    const token = jwt.sign(
      {
        userId: user._id,
        role: user.role,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Remove sensitive data before sending response
    const userData = user.toObject();
    delete userData.password;
    delete userData.__v;

    console.log("Login successful for:", email);
    return NextResponse.json(
      {
        success: true,
        token,
        user: userData,
      },
      {
        headers: corsHeaders,
      }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      {
        success: false,
        message:
          process.env.NODE_ENV === "development"
            ? error
            : "Internal server error",
      },
      {
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}
