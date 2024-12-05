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

const fetcher = (
  key: string,
  { arg }: { arg: { playlistId: string; songId: string } }
) => {
  return fetch(`/api/playlists/${arg.playlistId}/songs`, {
    method: "POST",
    body: JSON.stringify({
      songId: arg.songId,
    }),
  });
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

const SongListItem: React.FC<SongListItemProps> = (props) => {
  const { play } = usePlayerStore((state) => state);
  const { song, onFavor, onUnfavor } = props;
  const { myPlaylists } = usePlaylistsStore((state) => state);
  const { trigger: favorTrigger } = useSWRMutation(
    "/api/favorites",
    favorFetcher,
    {
      onSuccess: () => {
        Toast.success("操作成功");
        if (song.isFavorited) {
          onUnfavor?.();
        } else {
          onFavor?.();
        }
      },
    }
  );
  const { trigger } = useSWRMutation(
    "/api/playlists/:playlistId/songs",
    fetcher,
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
    trigger({
      songId: song.id,
      playlistId: item.id,
    });
  };

  const handlePlay = () => {
    play(song);
  };

  const handleFavor = () => {
    favorTrigger({ songId: song.id, toggle: true });
  };

  const handleUnfavor = () => {
    favorTrigger({ songId: song.id, toggle: false });
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
        {dayjs.duration(song.duration ?? 0).format("mm:ss")}
      </Typography>
    </div>
  );
};

export default SongListItem;
