import prisma from "@/database";
import { auth } from "@/shared/auth";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ songId: string }> }
) {
  const songId = (await params).songId;
  const session = await auth();
  const userId = session?.user?.id;

  const deleteResult = await prisma.favoriteSong.deleteMany({
    where: {
      userId,
      songId: Number(songId),
    },
  });
  if (deleteResult.count === 0) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  return NextResponse.json({ data: null });
}
