import prisma from "@/database";
import { CreateSongSchema } from "@/schemas/songs";
import { auth } from "@/shared/auth";
import { inject } from "@/shared/inject";
import { RoleName } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const GET = inject(async () => {
  const session = await auth();
  const userId = session?.user?.id;
  const songs = await prisma.song.findMany({
    take: 100,
    include: {
      favoritedBy: Boolean(userId)
        ? {
            where: { userId },
            select: { id: true },
          }
        : {},
    },
  });

  return NextResponse.json({
    data: songs.map((song) => ({
      ...song,
      isFavorited: userId ? song.favoritedBy.length > 0 : false,
    })),
  });
});

export const POST = inject(
  async (request: NextRequest) => {
    const payload = await request.json();
    const data = CreateSongSchema.parse(payload);
    const newSong = await prisma.song.create({
      data,
    });

    return NextResponse.json({ data: newSong });
  },
  {
    role: RoleName.ADMIN,
  }
);
