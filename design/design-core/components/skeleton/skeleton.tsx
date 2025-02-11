import React from "react";
import SkeletonAvatar from "./skeleton-avatar";
import SkeletonButton from "./skeleton-button";
import SkeletonImage from "./skeleton-image";
import SkeletonText from "./skeleton-text";
import SkeletonTitle from "./skeleton-title";
import { styles } from "./skeleton.stylex";
import { type SkeletonNode, type SkeletonProps } from "./skeleton.types";
import { x } from "../../shared";

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const {
    nodes = ["title", "text", "image"],
    children,
    stylex,
    loading = false,
  } = props;

  if (!loading) return children;
  return (
    <div {...x(styles.skeleton, stylex)}>
      {nodes.map((item, index) => {
        const nodeConfig: Record<SkeletonNode, React.ReactNode> = {
          title: <SkeletonTitle key={index} />,
          text: <SkeletonText key={index} />,
          button: <SkeletonButton key={index} />,
          avatar: <SkeletonAvatar shape="square" size={60} key={index} />,
          image: <SkeletonImage width={200} key={index} />,
        };
        return nodeConfig[item];
      })}
      {children}
    </div>
  );
};

export default Skeleton;
