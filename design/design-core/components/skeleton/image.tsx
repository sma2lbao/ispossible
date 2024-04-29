import React from "react";
import stylex from "@stylexjs/stylex";
import { type SkeletonImageProps } from "./skeleton.types";

const styles = stylex.create({
  image: (aspectRatio, width, height) => ({
    aspectRatio,
    width,
    height,
    display: "inline-block",
    backgroundColor: "#ddd",
    borderRadius: 6,
  }),
});

const SkeletonImage: React.FC<SkeletonImageProps> = (props) => {
  const { width = "100%", height, aspectRatio = 4 / 3 } = props;

  return (
    <div {...stylex.props(styles.image(aspectRatio, width, height))}></div>
  );
};

export default SkeletonImage;
