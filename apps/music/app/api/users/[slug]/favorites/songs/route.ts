import prisma from "@/database";
import { auth } from "@/shared/auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) {
    return NextResponse.json({ error: "userId not exist" }, { status: 403 });
  }

  const songs = await prisma.song.findMany({
    take: 10,
  });

  return NextResponse.json({
    data: songs,
  });
}
