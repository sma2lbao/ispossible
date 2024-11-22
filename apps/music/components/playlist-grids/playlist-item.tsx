"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { Typography } from "@design/core";

export interface PlaylistItemProps {}

const styles = stylex.create({
  item: {},
});

const PlaylistItem: React.FC<PlaylistItemProps> = (props) => {
  const {} = props;

  return (
    <div {...stylex.props(styles.item)}>
      <div></div>
      <Typography as="div" variant="body" size="md" truncateLines={2}>
        歌单名称，最长可以容纳两行。比如我这个标题比较标题比较标题比较标题比较标题比较标题比较标题比较长就会截断
      </Typography>
    </div>
  );
};

export default PlaylistItem;
