import React from "react";
import stylex from "@stylexjs/stylex";

import { type SkeletonAvatarProps } from "./skeleton.types";
import { shapes } from "../../themes/tokens/shape.stylex";

const styles = stylex.create({
  avatar: (size: number) => ({
    width: size || 80,
    height: size || 80,
    borderRadius: shapes.corner$circle,
    backgroundColor: "#ddd",
    display: "inline-block",
  }),
  square: {
    borderRadius: shapes.corner$sm,
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
