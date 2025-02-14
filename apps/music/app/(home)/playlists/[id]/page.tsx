"use client";

import useSWR from "swr";
import stylex from "@stylexjs/stylex";
import { Button, TabPane, Tabs } from "@design/core";
import SongList from "@/components/song-list";
import { useRouter } from "next/navigation";
import useSWRMutation from "swr/mutation";
import { Playlist, Song } from "@prisma/client";
import { createFetcher, createMutater } from "@/shared/fetcher";
import { use } from "react";

const styles = stylex.create({
  page: {
    margin: "12px",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "6px",
  },
});

export default function PlaylistDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: playlistId } = use(params);
  const router = useRouter();
  const { data, mutate } = useSWR(
    playlistId ? `/api/playlists/${playlistId}` : null,
    createFetcher<Playlist & { songs: Song[] }>()
  );
  const { trigger } = useSWRMutation(
    playlistId ? `/api/playlists/${playlistId}` : null,
    createMutater("DELETE"),
    {
      onSuccess() {
        router.back();
      },
    }
  );

  const handleUpdate = () => {
    router.push(`/playlists/${playlistId}/update`);
  };

  const handleRemove = () => {
    trigger();
  };

  return (
    <div {...stylex.props(styles.page)}>
      <div>
        歌单区域
        <Button onClick={handleUpdate}>编辑</Button>
        <Button onClick={handleRemove}>删除</Button>
      </div>
      <Tabs defaultActiveKey="song">
        <TabPane tab="歌曲" itemKey="song">
          <SongList
            songs={data?.data?.songs ?? []}
            onFavor={() => mutate()}
            onUnfavor={() => mutate()}
          />
        </TabPane>
        <TabPane tab="其他" itemKey="playlist" disabled></TabPane>
      </Tabs>
    </div>
  );
}
