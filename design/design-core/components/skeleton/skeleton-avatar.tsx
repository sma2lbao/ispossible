import React from "react";
import { styles } from "./skeleton.stylex";
import { type SkeletonAvatarProps } from "./skeleton.types";
import { x } from "../../shared";

const SkeletonAvatar: React.FC<SkeletonAvatarProps> = (props) => {
  const { shape = "circle", size = 60, stylex, style } = props;

  return <div {...x(style, styles.skeleton$avatar(size, shape), stylex)}></div>;
};

export default SkeletonAvatar;
