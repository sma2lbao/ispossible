"use client";

import React from "react";
import stylex from "@stylexjs/stylex";

export interface MiniPlayerProps {}

const styles = stylex.create({
  player: {
    height: "120px",
    width: "100%",
    background: "#000",
    display: "flex",
    alignItems: "center",
  },
});

const MiniPlayer: React.FC<MiniPlayerProps> = (props) => {
  const {} = props;

  return <div {...stylex.props(styles.player)}></div>;
};

export default MiniPlayer;
