import React from "react";
import { styles } from "./skeleton.stylex";
import { type SkeletonTitleProps } from "./skeleton.types";
import { x } from "../../shared";

const SkeletonTitle: React.FC<SkeletonTitleProps> = (props) => {
  const { width = "30%", height, stylex, style } = props;

  return (
    <div {...x(style, styles.skeleton$title(width, height), stylex)}></div>
  );
};

export default SkeletonTitle;
