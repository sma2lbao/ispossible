import prisma from "@/database";
import { inject } from "@/shared/inject";
import { NextRequest, NextResponse } from "next/server";

export const POST = inject(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) => {
    const playlistId = (await params).id;
    const payload = await request.json();
    const userId = request.user!.id;

    const playlist = await prisma.playlist.findFirst({
      where: { id: playlistId, authorId: userId },
    });

    if (!playlist) {
      return NextResponse.json(
        { message: "Playlist not found or access denied" },
        { status: 404 }
      );
    }

    // 检查歌曲是否已在歌单中
    const existingEntry = await prisma.playlistSong.findFirst({
      where: { playlistId, songId: payload.songId },
    });

    if (existingEntry) {
      return NextResponse.json(
        { message: "Song already in playlist" },
        { status: 400 }
      );
    }

    await prisma.playlistSong.create({
      data: {
        playlistId,
        songId: payload.songId,
      },
    });

    return NextResponse.json({
      message: "Song added to playlist successfully.",
    });
  },
  { login: true }
);
