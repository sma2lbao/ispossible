import stylex from "@stylexjs/stylex";
import React from "react";
import { styles } from "./skeleton.stylex";
import { type SkeletonButtonProps } from "./skeleton.types";


const SkeletonButton: React.FC<SkeletonButtonProps> = (props) => {
  const { shape = "square", width = 80 } = props;

  return <div {...stylex.props(styles.skeleton$button(width), shape === 'circle' && styles.skeleton$button$circle(width))}></div>;
};

export default SkeletonButton;
