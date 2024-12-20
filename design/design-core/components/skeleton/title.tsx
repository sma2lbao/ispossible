import stylex from "@stylexjs/stylex";
import React from "react";
import { type SkeletonTitleProps } from "./skeleton.types";

const styles = stylex.create({
  title: (width: string | number) => ({
    width,
    height: 18,
    backgroundColor: "#ddd",
  }),
});

const SkeletonTitle: React.FC<SkeletonTitleProps> = (props) => {
  const { width = "30%" } = props;

  return <div {...stylex.props(styles.title(width))}></div>;
};

export default SkeletonTitle;
