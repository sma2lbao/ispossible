import prisma from "@/database";
import { UpdatePlaylistSchema } from "@/schemas/playlists";
import { inject } from "@/shared/inject";
import { NextRequest, NextResponse } from "next/server";

export const GET = inject(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) => {
    const userId = request.user?.id;

    const playlistId = (await params).id;
    const playlist = await prisma.playlist.findUnique({
      where: {
        id: playlistId,
      },
      include: {
        songs: {
          include: {
            song: true,
          },
        },
      },
    });

    let favoritedSongIds: string[] = [];
    const songIds = playlist?.songs.map((item) => item.songId);
    if (userId) {
      favoritedSongIds = await prisma.favoriteSong
        .findMany({
          where: {
            userId,
            songId: {
              in: songIds,
            },
          },
          select: {
            songId: true,
          },
        })
        .then((favorites) => favorites.map((item) => item.songId));
    }

    const nextSongs = playlist?.songs.map((item) => ({
      ...item.song,
      isFavorited: favoritedSongIds.includes(item.songId),
    }));
    const nextPlaylist = { ...playlist, songs: nextSongs };

    return NextResponse.json({ data: nextPlaylist });
  },
  { injectUser: true }
);

export const PUT = inject(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) => {
    const id = (await params).id;
    const payload = await request.json();
    const data = UpdatePlaylistSchema.parse(payload);
    const nextPlaylist = await prisma.playlist.update({
      where: {
        id,
      },
      data,
    });

    return NextResponse.json({ data: nextPlaylist });
  }
);

export const DELETE = inject(
  async (
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
  ) => {
    const id = (await params).id;
    const userId = request.user!.id!;
    await prisma.playlist.delete({
      where: {
        id,
        authorId: userId,
      },
    });

    return NextResponse.json({ message: "Remove Success" }, { status: 200 });
  },
  { login: true }
);
