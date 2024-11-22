import prisma from "@/database";
import { NextResponse } from "next/server";

export async function GET() {
  const artists = await prisma.artist.findMany({
    take: 10,
  });

  return NextResponse.json({ data: artists });
}

export async function POST(request: Request) {
  const payload = await request.json();

  const newArtist = await prisma.artist.create({
    data: {
      name: payload.name,
      bio: payload.bio,
      imageUrl: payload.imageUrl,
    },
  });

  return NextResponse.json({ data: newArtist });
}
