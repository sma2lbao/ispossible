import type { Metadata } from "next";
import Continer from "../components/container";
import { SettingsStoreProvider } from "@/providers/settings-store-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat",
  description: "sma2lbao's chat app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SettingsStoreProvider>
          <Continer>{children}</Continer>
        </SettingsStoreProvider>
      </body>
    </html>
  );
}
