import * as Minio from "minio";

export const minio = new Minio.Client({
  endPoint: process.env.MINIO_END_POINT ?? "",
  port: process.env.MINIO_PORT ? Number(process.env.MINIO_PORT) : 9000,
  useSSL: false,
  accessKey: process.env.MINIO_ACCESS_KEY ?? "",
  secretKey: process.env.MINIO_SECRET_KEY ?? "",
});

export default minio;
