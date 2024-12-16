import prisma from "@/database";
import { inject } from "@/shared/inject";
import { NextResponse } from "next/server";

export const GET = inject(async () => {
  const users = await prisma.user.findMany({
    take: 10,
  });
  return NextResponse.json({ data: users });
});

export const POST = inject(async (request: Request) => {
  const payload = await request.json();
  const newUser = await prisma.user.create({
    data: {
      name: payload.name,
      email: payload.email,
    },
  });
  return NextResponse.json({ data: newUser });
});
