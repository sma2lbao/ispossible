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
    nodes = ["title", "text"],
    children,
    stylex,
    loading = true,
    style,
  } = props;

  if (!loading) return children;
  return (
    <div {...x(style, styles.skeleton, stylex)}>
      {nodes.map((item, index) => {
        const nodeType = Array.isArray(item) ? item[0] : item;
        const nodeProps: any = Array.isArray(item) ? item[1] : {};
        const nodeConfig: Record<SkeletonNode, React.ReactNode> = {
          title: <SkeletonTitle key={index} {...nodeProps} />,
          text: <SkeletonText key={index} {...nodeProps} />,
          button: <SkeletonButton key={index} {...nodeProps} />,
          avatar: <SkeletonAvatar shape="square" {...nodeProps} key={index} />,
          image: <SkeletonImage key={index} {...nodeProps} />,
        };
        return nodeConfig[nodeType];
      })}
    </div>
  );
};

export default Skeleton;
