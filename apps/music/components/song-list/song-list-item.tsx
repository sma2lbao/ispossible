"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import useSWRMutation from "swr/mutation";
import {
  Button,
  Dropdown,
  Space,
  Toast,
  Typography,
  type DropdownMenuItemProps,
} from "@design/core";
import type { Playlist, Song } from "@prisma/client";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { usePlaylistsStore } from "@/providers/playlists-store-provider";
import "@design/icon/heart-filled";
import "@design/icon/heart";
import "@design/icon/plus-circle";
import "@design/icon/play-circle-filled";
import { usePlayerStore } from "@/providers/player-store-provider";
import { createMutater } from "@/shared/fetcher";

dayjs.extend(duration);

export interface SongListItemProps {
  song: Song & {
    isFavorited?: boolean;
  };

  onFavor?: () => void;

  onUnfavor?: () => void;
}

const styles = stylex.create({
  item: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  item$main: {
    flex: 1,
  },
  item$tools: {
    flexBasis: "200px",
  },
  item$album: {
    flexBasis: "300px",
  },
  item$duration: {
    flexBasis: "200px",
  },
});

const SongListItem: React.FC<SongListItemProps> = (props) => {
  const { song, onFavor, onUnfavor } = props;
  const { play } = usePlayerStore((state) => state);
  const { myPlaylists } = usePlaylistsStore((state) => state);
  const { trigger: favor } = useSWRMutation(
    "/api/favorites",
    createMutater<{ songId: string }>("POST"),
    {
      onSuccess() {
        Toast.success(`已添加到"我喜欢"`);
        onFavor?.();
      },
    }
  );

  const { trigger: unFavor } = useSWRMutation(
    `/api/favorites`,
    createMutater<string, unknown, string>("DELETE", {
      endpoint: (key, songId) => [key, songId],
    }),
    {
      onSuccess: () => {
        Toast.success(`已从"我喜欢"移除`);
        onUnfavor?.();
      },
    }
  );
  const { trigger: addToPlaylist } = useSWRMutation(
    "/api/playlists/:playlistId/songs",
    createMutater<{ playlistId: string; songId: string }>("POST", {
      endpoint: (key, payload) =>
        key.replace(":playlistId", payload.playlistId),
      excludes: ["playlistId"],
    }),
    {
      onSuccess: () => {
        Toast.success("加入歌单成功");
      },
    }
  );

  const dropdownMenu: DropdownMenuItemProps[] =
    myPlaylists?.map((item) => ({
      node: "item",
      name: item.name,
      onClick: () => handleClick(item),
    })) ?? [];

  const handleClick = (item: Playlist) => {
    addToPlaylist({
      songId: song.id,
      playlistId: item.id,
    });
  };

  const handlePlay = () => {
    play(song);
  };

  const handleFavor = () => {
    favor({ songId: song.id });
  };

  const handleUnfavor = () => {
    unFavor(song.id);
  };

  return (
    <div {...stylex.props(styles.item)}>
      <div {...stylex.props(styles.item$main)}>
        <div>{song.title}</div>
      </div>
      <div {...stylex.props(styles.item$tools)}>
        <Space>
          <Button
            theme="ghost"
            icon={<is-play-circle-filled />}
            onClick={handlePlay}
          />
          {song.isFavorited ? (
            <Button
              theme="ghost"
              icon={<is-heart-filled />}
              onClick={handleUnfavor}
            />
          ) : (
            <Button theme="ghost" icon={<is-heart />} onClick={handleFavor} />
          )}
          <Dropdown menu={dropdownMenu}>
            <Button theme="ghost" icon={<is-plus-circle />} />
          </Dropdown>
        </Space>
      </div>
      <Typography variant="body" size="md" stylex={styles.item$album}>
        --
      </Typography>
      <Typography variant="body" size="md" stylex={styles.item$duration}>
        {dayjs.duration(song.duration ?? 0, "seconds").format("mm:ss")}
      </Typography>
    </div>
  );
};

export default SongListItem;
