import stylex from "@stylexjs/stylex";
import React from "react";
import { styles } from "./skeleton.stylex";
import { type SkeletonTitleProps } from "./skeleton.types";

const SkeletonTitle: React.FC<SkeletonTitleProps> = (props) => {
  const { width = "30%" } = props;

  return <div {...stylex.props(styles.skeleton$title(width))}></div>;
};

export default SkeletonTitle;
