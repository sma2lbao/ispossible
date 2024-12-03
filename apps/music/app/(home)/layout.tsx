import { PlayerStoreProvider } from "@/providers/player-store-provider";
import Continer from "./container";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PlayerStoreProvider>
      <Continer>{children}</Continer>
    </PlayerStoreProvider>
  );
}
