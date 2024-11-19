import type { Metadata } from "next";
import "normalize.css";
import "./_styles/global.css";

export const metadata: Metadata = {
  title: "UI Design 系统",
  description: "Design 相关文档",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
