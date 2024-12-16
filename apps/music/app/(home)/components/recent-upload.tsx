"use client";

import useSWR from "swr";
import SongList from "@/components/song-list";
import { Typography } from "@design/core";
import React from "react";
import type { ApiResponse } from "@/types/common";
import type { Song } from "@prisma/client";

export default function RecentUpload() {
  const { data, mutate } = useSWR<ApiResponse<Song[]>>("/api/songs");

  return (
    <div>
      <Typography variant="title" size="md">
        最近更新
      </Typography>
      <SongList
        songs={data?.data ?? []}
        onFavor={() => mutate()}
        onUnfavor={() => mutate()}
      />
    </div>
  );
}
