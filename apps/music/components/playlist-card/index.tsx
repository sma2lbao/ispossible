"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { Avatar, Space, Typography, Button } from "@design/core";
import type { Playlist } from "@prisma/client";
import "@design/icon/caret-right";
import "@design/icon/heart-filled";

export interface PlaylistCardProps {
  playlist?: Playlist;
  onUpdate?: () => void;
  onRemove?: () => void;
  onPlay?: () => void;
  onFavor?: () => void;
}

const styles = stylex.create({
  root: {
    display: "flex",
    gap: 8,
  },
  content: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  author$tools: {
    display: "flex",
  },
  author$buttons: {
    alignItems: "flex-start",
  },
  tools: {
    marginTop: "auto",
    marginBottom: 0,
  },
});

const PlaylistCard: React.FC<PlaylistCardProps> = (props) => {
  const { playlist, onUpdate, onRemove, onFavor, onPlay } = props;

  return (
    <div {...stylex.props(styles.root)}>
      <Avatar shape="square" src={playlist?.coverUrl ?? undefined} size={140} />
      <div {...stylex.props(styles.content)}>
        <Space direction="y">
          <div {...stylex.props(styles.author$tools)}>
            <Space direction="y">
              <Typography variant="title" size="md">
                {playlist?.name}
              </Typography>
              <div>
                <Avatar shape="circle" size={32} /> {playlist?.authorId}
              </div>
            </Space>
            <Space stylex={styles.author$buttons}>
              <Button theme="ghost" color="tertiary" onClick={onUpdate}>
                编辑
              </Button>
              <Button theme="ghost" color="tertiary" onClick={onRemove}>
                删除
              </Button>
            </Space>
          </div>
          <Typography variant="body" size="sm">
            {playlist?.description}
          </Typography>
        </Space>
        <Space stylex={styles.tools}>
          <Button theme="solid" icon={<is-caret-right />} onClick={onPlay}>
            播放
          </Button>
          <Button icon={<is-heart-filled />} onClick={onFavor}>
            收藏
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default PlaylistCard;
