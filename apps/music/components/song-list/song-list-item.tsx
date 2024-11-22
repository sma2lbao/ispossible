"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { Button, Space, Typography } from "@design/core";
import "@design/icon/heart-filled";
import "@design/icon/plus-circle";

export interface SongListItemProps {}

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
  const {} = props;

  return (
    <div {...stylex.props(styles.item)}>
      <div {...stylex.props(styles.item$main)}>
        <div></div>
      </div>
      <div {...stylex.props(styles.item$tools)}>
        <Space>
          <Button theme="ghost" icon={<is-heart-filled />}></Button>
          <Button theme="ghost" icon={<is-plus-circle />}></Button>
          <Button theme="ghost" icon={null}></Button>
        </Space>
      </div>
      <Typography variant="body" size="md" stylex={styles.item$album}>
        专辑名
      </Typography>
      <Typography variant="body" size="md" stylex={styles.item$duration}>
        3:42
      </Typography>
    </div>
  );
};

export default SongListItem;
