import prisma from "@/database";
import { UpdateArtistSchema } from "@/schemas/artists";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  const artist = await prisma.artist.findUniqueOrThrow({
    where: {
      id,
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
  const data = UpdateArtistSchema.parse(payload);
  const newArtist = await prisma.artist.update({
    where: {
      id,
    },
    data,
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
      id,
    },
  });

  return NextResponse.json({ data: true });
}
