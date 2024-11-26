import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = request.body;
  console.log("body: ", body);

  return NextResponse.json(
    { data: "success" },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    }
  );
}
