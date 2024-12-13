import prisma from "@/database";
import { CreateSongSchema } from "@/schemas/songs";
import { auth } from "@/shared/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  const userId = session?.user?.id;
  const songs = await prisma.song.findMany({
    take: 10,
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
}

export async function POST(request: Request) {
  const payload = await request.json();
  const data = CreateSongSchema.parse(payload);
  const newSong = await prisma.song.create({
    data,
  });

  return NextResponse.json({ data: newSong });
}
