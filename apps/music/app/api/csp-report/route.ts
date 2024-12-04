import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  console.log("payload", payload);
  return NextResponse.json({}, { status: 200 });
}
