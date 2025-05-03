// app/api/add-ngo/route.js

import dbConnect from "@/lib/mongodb";
import { NGO } from "@/models/NGO";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // ✅ Correct import
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { name, email, phone, location, focusArea, summary, darpanId } = body;

    // Validate required fields
    if (!name || !email || !phone || !location || !focusArea || !summary || !darpanId) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    await dbConnect();

    const newNGO = await NGO.create({
      name,
      email,
      phone,
      location,
      focusArea,
      summary,
      darpanId,
      createdBy: session.user.id, // ✅ Save user id
      createdAt: new Date(),       // ✅ Save timestamp
    });

    return NextResponse.json({ message: "NGO created successfully", ngo: newNGO }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
