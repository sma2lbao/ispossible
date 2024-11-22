import prisma from "@/database";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const artist = await prisma.artist.findUniqueOrThrow({
    where: {
      id: +id,
    },
  });

  return NextResponse.json({ data: artist });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const payload = await request.json();
  const newArtist = await prisma.artist.update({
    where: {
      id: +id,
    },
    data: {
      name: payload.name,
      bio: payload.bio,
      imageUrl: payload.imageUrl,
    },
  });

  return NextResponse.json({ data: newArtist });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  await prisma.artist.delete({
    where: {
      id: +id,
    },
  });

  return NextResponse.json({ data: true });
}
