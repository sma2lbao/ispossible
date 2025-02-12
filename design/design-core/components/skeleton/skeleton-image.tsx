import React from "react";
import { styles } from "./skeleton.stylex";
import { type SkeletonImageProps } from "./skeleton.types";
import { x } from "../../shared";

const SkeletonImage: React.FC<SkeletonImageProps> = (props) => {
  const { width = 200, height, aspectRatio = 4 / 3, stylex, style } = props;

  return (
    <div
      {...x(style, styles.skeleton$image(aspectRatio, width, height), stylex)}
    ></div>
  );
};

export default SkeletonImage;
