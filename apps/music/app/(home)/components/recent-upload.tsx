"use client";

import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import SongList from "@/components/song-list";
import { Toast, Typography } from "@design/core";
import React from "react";
import { Song } from "@prisma/client";
import { usePlayerStore } from "@/providers/player-store-provider";

const fetcher = (url: string) => {
  return fetch(url).then((response) => response.json());
};

const favorFetcher = (
  url: string,
  { arg }: { arg: { songId: string | number; toggle: boolean } }
) => {
  if (arg.toggle) {
    return fetch(url, {
      method: "POST",
      body: JSON.stringify({ songId: arg.songId }),
    }).then((response) => response.json());
  }
  return fetch(url + `/${arg.songId}`, {
    method: "DELETE",
  }).then((response) => response.json());
};

export default function RecentUpload() {
  const { data, mutate } = useSWR("/api/songs", fetcher);
  const { trigger } = useSWRMutation("/api/favorites", favorFetcher, {
    onSuccess: () => {
      Toast.success("操作成功");
      mutate();
    },
  });

  const { play } = usePlayerStore((state) => state);

  const hanldePlay = (song: Song) => {
    play(song);
  };

  return (
    <div>
      <Typography variant="title" size="md">
        最近更新
      </Typography>
      <SongList
        songs={data?.data ?? []}
        onPlay={hanldePlay}
        onFavor={(song) => trigger({ songId: song.id, toggle: true })}
        onUnfavor={(song) => trigger({ songId: song.id, toggle: false })}
      />
    </div>
  );
}
