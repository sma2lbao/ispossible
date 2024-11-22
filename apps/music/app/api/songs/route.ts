import prisma from "@/database";
import { NextResponse } from "next/server";

export async function GET() {
  const songs = await prisma.song.findMany({
    take: 10,
  });

  return NextResponse.json({ data: songs });
}

export async function POST(request: Request) {
  const payload = await request.json();

  const newSong = await prisma.song.create({
    data: {
      title: payload.title,
      duration: payload.duration,
      lyrics: payload.lyrics,
      artistId: payload.artistId,
    },
  });

  return NextResponse.json({ data: newSong });
}
