export function formatBytes(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024; // 定义 KB、MB、GB 等转换系数
  const dm = decimals < 0 ? 0 : decimals; // 确保小数位数正确
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k)); // 计算适当的单位索引
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
}
