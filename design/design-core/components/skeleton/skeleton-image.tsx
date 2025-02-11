import stylex from "@stylexjs/stylex";
import React from "react";
import { styles } from "./skeleton.stylex";
import { type SkeletonImageProps } from "./skeleton.types";

const SkeletonImage: React.FC<SkeletonImageProps> = (props) => {
  const { width = "100%", height, aspectRatio = 4 / 3 } = props;

  return (
    <div {...stylex.props(styles.skeleton$image(aspectRatio, width, height))}></div>
  );
};

export default SkeletonImage;
