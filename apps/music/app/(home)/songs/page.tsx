"use client";

import useSWR from "swr";
import { createFetcher } from "@/shared/fetcher";
import type { Song } from "@prisma/client";
import SongList from "@/components/song-list";
import { Pagination } from "@design/core";
import { useState } from "react";

export default function Songs() {
  const [page, setPage] = useState(1);
  const { data } = useSWR(
    `/api/songs?page=${page}&pageSize=10`,
    createFetcher<Song[]>(),
  );

  const handlePageChange = (nextPage: number) => {
    setPage(nextPage);
  };

  return (
    <div>
      <SongList songs={data?.data ?? []} />
      <Pagination
        total={data?.total}
        pageSize={10}
        page={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
