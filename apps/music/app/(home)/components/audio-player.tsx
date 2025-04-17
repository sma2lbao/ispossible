"use client";

import MiniPlayer, { type MiniSong } from "@/components/mini-player";
import { usePendingPlaylistStore } from "@/providers/pending-playlist-store-provider";
import { usePlayerStore } from "@/providers/player-store-provider";
import { useEffect } from "react";

export default function AudioPlayer() {
  const { song } = usePlayerStore((state) => state);
  const { songs, append } = usePendingPlaylistStore((state) => state);

  const nextSong: MiniSong | undefined = song
    ? {
        id: song.id,
        title: song.title ?? undefined,
        coverUrl: song.coverUrl ?? undefined,
        sourceUrl: song.sourceUrl ?? undefined,
      }
    : undefined;
  const list: MiniSong[] =
    songs.map((item) => ({
      id: item.id,
      title: item.title,
      coverUrl: item.coverUrl ?? undefined,
      sourceUrl: item.sourceUrl ?? undefined,
    })) ?? [];

  useEffect(() => {
    if (song) {
      const current = songs?.find((item) => item.id === song.id);
      if (!current) {
        append(song);
      }
    }
  }, [song, songs, append]);

  return <MiniPlayer song={nextSong} list={list} />;
}
