"use client";

import PlaylistGrids from "@/components/playlist-grids";
import { Typography } from "@design/core";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string) => {
  return fetch(url).then((response) => response.json());
};

export default function PopularPlaylists() {
  const { data } = useSWR("/api/playlists", fetcher);

  return (
    <div>
      <Typography variant="title" size="md">
        流行
      </Typography>
      <PlaylistGrids playlists={data?.data ?? []} />
    </div>
  );
}
