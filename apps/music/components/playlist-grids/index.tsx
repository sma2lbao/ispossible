"use client";

import React from "react";
import { Row, Col } from "@design/core";
import stylex from "@stylexjs/stylex";
import PlaylistItem from "./playlist-item";
import type { Playlist } from "@prisma/client";

export interface PlaylistGridsProps {
  playlists: Playlist[];
}

const styles = stylex.create({
  grids: {
    overflow: "hidden",
    padding: "20px",
  },
});

const PlaylistGrids: React.FC<PlaylistGridsProps> = (props) => {
  const { playlists } = props;

  return (
    <div {...stylex.props(styles.grids)}>
      <Row gutter={[16, 24]}>
        {playlists.map((item) => (
          <Col span={4} key={item.id}>
            <PlaylistItem playlist={item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PlaylistGrids;
