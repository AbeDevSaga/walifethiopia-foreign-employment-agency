// app/api/db-test/route.ts
import dbConnect from "@/app/lib/db";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {
  try {
    await dbConnect();
    return NextResponse.json({
      status: 'connected',
      dbName: mongoose.connection.db ? mongoose.connection.db.databaseName : null
    });
  } catch (error) {
    return NextResponse.json({
      status: 'failed',
      error: error
    }, { status: 500 });
  }
}