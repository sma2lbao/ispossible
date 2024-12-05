"use client";

import useSWR from "swr";
import { useSession } from "next-auth/react";
import SongList from "@/components/song-list";
import { usePlayerStore } from "@/providers/player-store-provider";

const fetcher = (url: string) => {
  return fetch(url).then((response) => response.json());
};

export default function FavoriteSongs() {
  const session = useSession();
  const userId = session.data?.user?.id;
  const { play } = usePlayerStore((state) => state);

  const { data } = useSWR(
    userId ? `/api/users/${userId}/favorites/songs` : null,
    fetcher
  );

  return (
    <div>
      <SongList songs={data?.data ?? []} onPlay={(song) => play(song)} />
    </div>
  );
}
