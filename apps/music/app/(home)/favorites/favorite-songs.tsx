"use client";

import useSWR from "swr";
import { useSession } from "next-auth/react";
import SongList from "@/components/song-list";
import { createFetcher } from "@/shared/fetcher";
import type { Song } from "@prisma/client";

export default function FavoriteSongs() {
  const session = useSession();
  const userId = session.data?.user?.id;

  const { data, mutate } = useSWR(
    userId ? `/api/users/${userId}/favorites/songs` : null,
    createFetcher<Song[]>()
  );

  return (
    <div>
      <SongList
        songs={data?.data ?? []}
        onFavor={() => mutate()}
        onUnfavor={() => mutate()}
      />
    </div>
  );
}
