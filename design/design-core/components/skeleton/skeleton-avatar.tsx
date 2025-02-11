import stylex from "@stylexjs/stylex";
import React from "react";
import { styles } from "./skeleton.stylex";
import { type SkeletonAvatarProps } from "./skeleton.types";


const SkeletonAvatar: React.FC<SkeletonAvatarProps> = (props) => {
  const { shape = "circle", size = 80 } = props;

  return (
    <div
      {...stylex.props(
        styles.skeleton$avatar(size, shape),
      )}
    ></div>
  );
};

export default SkeletonAvatar;
