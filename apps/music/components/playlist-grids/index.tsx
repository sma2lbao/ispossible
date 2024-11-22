"use client";

import React from "react";
import { Row, Col } from "@design/core";
import stylex from "@stylexjs/stylex";
import PlaylistItem from "./playlist-item";

export interface PlaylistGridsProps {}

const styles = stylex.create({
  grids: {
    overflow: "hidden",
    padding: "20px",
  },
});

const PlaylistGrids: React.FC<PlaylistGridsProps> = (props) => {
  const {} = props;

  return (
    <div {...stylex.props(styles.grids)}>
      <Row gutter={[16, 24]}>
        <Col span={4}>
          <PlaylistItem />
        </Col>
        <Col span={4}>
          <PlaylistItem />
        </Col>
        <Col span={4}>
          <PlaylistItem />
        </Col>
        <Col span={4}>
          <PlaylistItem />
        </Col>
        <Col span={4}>
          <PlaylistItem />
        </Col>
        <Col span={4}>
          <PlaylistItem />
        </Col>
        <Col span={4}>
          <PlaylistItem />
        </Col>
        <Col span={4}>
          <PlaylistItem />
        </Col>
        <Col span={4}>
          <PlaylistItem />
        </Col>
        <Col span={4}>
          <PlaylistItem />
        </Col>
      </Row>
    </div>
  );
};

export default PlaylistGrids;
