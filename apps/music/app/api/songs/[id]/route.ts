import prisma from "@/database";
import { UpdateSongSchema } from "@/schemas/songs";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const song = await prisma.song.findUniqueOrThrow({
    where: {
      id,
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
  const data = UpdateSongSchema.parse(payload);
  const newSong = await prisma.song.update({
    where: {
      id,
    },
    data,
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
      id,
    },
  });

  return NextResponse.json({ data: true });
}
