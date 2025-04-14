import { PlayerStoreProvider } from "@/providers/player-store-provider";
import Continer from "./container";
import { PlaylistsStoreProvider } from "@/providers/playlists-store-provider";
import { PendingPlaylistStoreProvider } from "@/providers/pending-playlist-store-provider";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PlayerStoreProvider>
      <PlaylistsStoreProvider>
        <PendingPlaylistStoreProvider>
          <Continer>{children}</Continer>
        </PendingPlaylistStoreProvider>
      </PlaylistsStoreProvider>
    </PlayerStoreProvider>
  );
}
