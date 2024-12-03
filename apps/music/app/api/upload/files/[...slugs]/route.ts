import { MINIO_BUCKET } from "@/constants";
import minio from "@/shared/minio";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: Promise<{ slugs: string[] }>;
  }
) {
  const slugs = (await params).slugs;
  const id = slugs.join("/");

  const url = await minio.presignedGetObject(MINIO_BUCKET, id, 3600);

  console.log("url: ", url);

  return NextResponse.redirect(url);
}
