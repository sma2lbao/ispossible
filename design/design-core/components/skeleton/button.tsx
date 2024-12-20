import stylex from "@stylexjs/stylex";
import React from "react";
import { type SkeletonButtonProps } from "./skeleton.types";

const styles = stylex.create({
  base: {
    display: "inline-block",
    borderRadius: 6,
    backgroundColor: "#ddd",
    height: 36,
  },
  square: (width?: string | number) => ({ width }),
  circle: (width: string | number) => ({
    width,
    height: width,
    borderRadius: "50%",
  }),
  round: (width: string | number) => ({ width, borderRadius: 36 }),
});

const SkeletonButton: React.FC<SkeletonButtonProps> = (props) => {
  const { shape = "square", width = 80 } = props;

  return <div {...stylex.props(styles.base, styles[shape](width))}></div>;
};

export default SkeletonButton;
