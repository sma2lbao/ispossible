"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { Typography } from "@design/core";
import type { Playlist } from "@prisma/client";

export interface PlaylistItemProps {
  playlist: Playlist;
}

const styles = stylex.create({
  item: {},
  picture: {
    aspectRatio: 1,
    width: "100%",
    overflow: "hidden",
  },
});

const PlaylistItem: React.FC<PlaylistItemProps> = (props) => {
  const { playlist } = props;

  return (
    <div {...stylex.props(styles.item)}>
      <div {...stylex.props(styles.picture)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          width="100%"
          alt="poster"
          src={
            playlist.coverUrl ??
            "https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg"
          }
        />
      </div>
      <Typography as="div" variant="body" size="md" truncateLines={2}>
        {playlist.name}
      </Typography>
    </div>
  );
};

export default PlaylistItem;
