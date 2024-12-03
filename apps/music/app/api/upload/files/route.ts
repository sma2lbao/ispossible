import { NextRequest, NextResponse } from "next/server";
import minio from "@/shared/minio";
import dayjs from "dayjs";
import { MINIO_BUCKET } from "@/constants";
import { auth } from "@/shared/auth";

export async function POST(request: NextRequest) {
  const session = await auth();
  const userId = session?.user?.id ?? "anonymous";
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const mimetype = file.type.split("/")?.[0] ?? "file";

  let filename = file.name;
  const filenameParts = filename.match(/^(.*?)(\.[^\.]+)$/);
  if (filenameParts) {
    filename = `${filenameParts?.[1]}_${dayjs().format("YYYYMMDDHHmmss")}${
      filenameParts?.[2]
    }`;
  }
  const objectId = `resources/${userId}/${mimetype}/${filename}`;

  const buffer = Buffer.from(await file.arrayBuffer());

  await minio.putObject(MINIO_BUCKET, objectId, buffer);

  return NextResponse.json({
    data: { objectId, url: "/api/upload/files/" + objectId },
  });
}
