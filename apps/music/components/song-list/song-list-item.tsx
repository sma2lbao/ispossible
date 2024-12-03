"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { Button, Space, Typography } from "@design/core";
import type { Song } from "@prisma/client";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import "@design/icon/heart-filled";
import "@design/icon/heart";
import "@design/icon/plus-circle";
import "@design/icon/play-circle-filled";

dayjs.extend(duration);

export interface SongListItemProps {
  song: Song & {
    isFavorited?: boolean;
  };

  onPlay?: () => void;

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
  const { song, onPlay, onFavor, onUnfavor } = props;

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
            onClick={onPlay}
          />
          {song.isFavorited ? (
            <Button
              theme="ghost"
              icon={<is-heart-filled />}
              onClick={onUnfavor}
            />
          ) : (
            <Button theme="ghost" icon={<is-heart />} onClick={onFavor} />
          )}

          <Button theme="ghost" icon={<is-plus-circle />} />
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
