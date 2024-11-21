import prisma from "@/database";
import { NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany({
    take: 10,
  });
  return NextResponse.json({ data: users });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const newUser = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
    },
  });
  return NextResponse.json({ data: newUser });
}
