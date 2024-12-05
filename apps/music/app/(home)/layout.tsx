import { PlayerStoreProvider } from "@/providers/player-store-provider";
import Continer from "./container";
import { PlaylistsStoreProvider } from "@/providers/playlists-store-provider";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PlayerStoreProvider>
      <PlaylistsStoreProvider>
        <Continer>{children}</Continer>
      </PlaylistsStoreProvider>
    </PlayerStoreProvider>
  );
}
