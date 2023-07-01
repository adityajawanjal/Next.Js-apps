import { NextResponse } from "next/server";

export async function GET(req) {
  // Do whatever you want
  return NextResponse.json({ message: "Hello Gun" }, { status: 200 });
}