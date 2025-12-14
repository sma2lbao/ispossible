import type { Metadata } from "next";
import localFont from "next/font/local";
import { SessionProvider } from "next-auth/react";
import "./globals.css";
import { SWRProvider } from "@/providers/swr-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Music",
  description: "个人网页",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          defer
          src="https://umami.sma1lbao.cn/script.js"
          data-website-id="ec46c34b-ca63-493c-9c87-e86e05d84bb9"
        ></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <SessionProvider>
          <SWRProvider>{children}</SWRProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
