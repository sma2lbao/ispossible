import React from "react";
import { styles } from "./skeleton.stylex";
import { type SkeletonButtonProps } from "./skeleton.types";
import { x } from "../../shared";
import { Space } from "../space";

const SkeletonButton: React.FC<SkeletonButtonProps> = (props) => {
  const {
    shape = "square",
    width = 80,
    height = 36,
    repeat = 1,
    stylex,
    style,
    rootStyle,
    rootStylex,
  } = props;

  return (
    <Space stylex={rootStylex} style={rootStyle}>
      {Array(repeat)
        .fill(null)
        .map((_, index) => (
          <span
            key={index}
            {...x(
              style,
              styles.skeleton$button(width, height),
              shape === "circle" && styles.skeleton$button$circle(width),
              stylex
            )}
          ></span>
        ))}
    </Space>
  );
};

export default SkeletonButton;
