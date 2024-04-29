import React from "react";
import stylex from "@stylexjs/stylex";

import { type SkeletonAvatarProps } from "./skeleton.types";

const styles = stylex.create({
  avatar: (size: number) => ({
    width: size || 80,
    height: size || 80,
    borderRadius: "50%",
    backgroundColor: "#ddd",
    display: "inline-block",
  }),
  square: {
    borderRadius: 6,
  },
});

const SkeletonAvatar: React.FC<SkeletonAvatarProps> = (props) => {
  const { shape = "circle", size = 80 } = props;

  return (
    <div
      {...stylex.props(
        styles.avatar(size),
        shape === "square" && styles.square
      )}
    ></div>
  );
};

export default SkeletonAvatar;
