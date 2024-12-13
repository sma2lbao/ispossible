import prisma from "@/database";
import { CreateArtistSchema } from "@/schemas/artists";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const keyword = searchParams.get("keyword");

  const artists = await prisma.artist.findMany({
    take: 10,
    where: {
      name: keyword?.length
        ? {
            contains: keyword,
          }
        : undefined,
    },
  });

  return NextResponse.json({ data: artists });
}

export async function POST(request: Request) {
  const payload = await request.json();
  const data = CreateArtistSchema.parse(payload);
  const newArtist = await prisma.artist.create({
    data,
  });

  return NextResponse.json({ data: newArtist });
}
