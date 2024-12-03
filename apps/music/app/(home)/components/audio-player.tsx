"use client";

import MiniPlayer, { type MiniSong } from "@/components/mini-player";
import { usePlayerStore } from "@/providers/player-store-provider";

export default function AudioPlayer() {
  const { song } = usePlayerStore((state) => state);

  const nextSong: MiniSong | undefined = song
    ? {
        title: song.title ?? undefined,
        coverUrl: song.coverUrl ?? undefined,
        sourceUrl: song.sourceUrl ?? undefined,
      }
    : undefined;

  return <MiniPlayer song={nextSong} />;
}
