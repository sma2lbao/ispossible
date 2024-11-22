import prisma from "@/database";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const song = await prisma.song.findUniqueOrThrow({
    where: {
      id: +id,
    },
  });

  return NextResponse.json({ data: song });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const payload = await request.json();
  const newSong = await prisma.song.update({
    where: {
      id: +id,
    },
    data: {
      title: payload.title,
      lyrics: payload.lyrics,
      artistId: payload.artistId,
    },
  });

  return NextResponse.json({ data: newSong });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  await prisma.song.delete({
    where: {
      id: +id,
    },
  });

  return NextResponse.json({ data: true });
}
