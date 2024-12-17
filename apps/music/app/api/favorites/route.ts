import prisma from "@/database";
import { inject } from "@/shared/inject";
import { NextRequest, NextResponse } from "next/server";

export const POST = inject(
  async (request: NextRequest) => {
    const userId = request.user!.id!;
    const payload = await request.json();

    const favorite = await prisma.favoriteSong.create({
      data: {
        userId,
        songId: payload.songId,
      },
    });

    return NextResponse.json({ data: favorite });
  },
  { login: true }
);
