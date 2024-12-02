"use client";

import useSWR from "swr";
import SongList from "@/components/song-list";
import { Typography } from "@design/core";
import React from "react";

const fetcher = (url: string) => {
  return fetch(url).then((response) => response.json());
};

export default function RecentUpload() {
  const { data } = useSWR("/api/songs", fetcher);

  return (
    <div>
      <Typography variant="title" size="md">
        最近更新
      </Typography>
      <SongList songs={data?.data ?? []} />
    </div>
  );
}
