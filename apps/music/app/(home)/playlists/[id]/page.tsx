"use client";
import useSWR from "swr";
import stylex from "@stylexjs/stylex";
import { TabPane, Tabs } from "@design/core";
import SongList from "@/components/song-list";

const styles = stylex.create({
  page: {
    margin: "12px",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "6px",
  },
});

const fetcher = (url: string) => {
  return fetch(url).then((respose) => respose.json());
};

export default function PlaylistDetail({ params }: { params: { id: string } }) {
  const playlistId = params.id;
  const { data, mutate } = useSWR(
    playlistId ? `/api/playlists/${playlistId}` : null,
    fetcher
  );

  return (
    <div {...stylex.props(styles.page)}>
      <div>歌单区域</div>
      <Tabs defaultActiveKey="song">
        <TabPane tab="歌曲" itemKey="song">
          <SongList
            songs={data?.data?.songs ?? []}
            onFavor={mutate}
            onUnfavor={mutate}
          />
        </TabPane>
        <TabPane tab="其他" itemKey="playlist" disabled></TabPane>
      </Tabs>
    </div>
  );
}
