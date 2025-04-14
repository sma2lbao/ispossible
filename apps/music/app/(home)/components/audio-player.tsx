"use client";

import MiniPlayer, { type MiniSong } from "@/components/mini-player";
import { usePendingPlaylistStore } from "@/providers/pending-playlist-store-provider";
import { usePlayerStore } from "@/providers/player-store-provider";

export default function AudioPlayer() {
  const { song } = usePlayerStore((state) => state);
  const { songs, current } = usePendingPlaylistStore((state) => state);
  console.log("current: ", current);
  console.log("songs: ", songs);

  const nextSong: MiniSong | undefined = song
    ? {
        title: song.title ?? undefined,
        coverUrl: song.coverUrl ?? undefined,
        sourceUrl: song.sourceUrl ?? undefined,
      }
    : undefined;

  return <MiniPlayer song={nextSong} />;
}
