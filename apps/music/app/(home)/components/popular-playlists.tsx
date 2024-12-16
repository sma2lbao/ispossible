"use client";

import PlaylistGrids from "@/components/playlist-grids";
import type { ApiResponse } from "@/types/common";
import { Typography } from "@design/core";
import type { Playlist } from "@prisma/client";
import React from "react";
import useSWR from "swr";

export default function PopularPlaylists() {
  const { data } = useSWR<ApiResponse<Playlist[]>>("/api/playlists");

  return (
    <div>
      <Typography variant="title" size="md">
        流行
      </Typography>
      <PlaylistGrids playlists={data?.data ?? []} />
    </div>
  );
}
