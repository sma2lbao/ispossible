import prisma from "@/database";
import { CreatePlaylistSchema } from "@/schemas/playlists";
import { inject } from "@/shared/inject";
import { NextRequest, NextResponse } from "next/server";

export const GET = inject(async () => {
  const playlists = await prisma.playlist.findMany({
    take: 10,
  });

  return NextResponse.json({ data: playlists });
});

export const POST = inject(
  async (request: NextRequest) => {
    const userId = request.user!.id!;
    const payload = await request.json();
    const data = CreatePlaylistSchema.parse(payload);

    const newPlaylist = await prisma.playlist.create({
      data: {
        ...data,
        authorId: userId,
      },
    });

    return NextResponse.json({
      data: newPlaylist,
    });
  },
  { login: true }
);
