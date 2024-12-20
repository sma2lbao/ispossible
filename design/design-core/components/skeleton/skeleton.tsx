import stylex from "@stylexjs/stylex";
import React from "react";
import SkeletonAvatar from "./avatar";
import SkeletonButton from "./button";
import SkeletonImage from "./image";
import SkeletonParagraph from "./paragraph";

import { type SkeletonNode, type SkeletonProps } from "./skeleton.types";
import SkeletonTitle from "./title";

const styles = stylex.create({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 200px",
    gridTemplateRows: "30px 120px",
    gridAutoFlow: "column dense",
    gridGap: "10px 20px",
  },
});

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { nodes = ["title", "paragraph", "image"], children, style } = props;

  return (
    <div {...stylex.props(styles.root, style)}>
      {nodes.map((item, index) => {
        const nodeConfig: Record<SkeletonNode, React.ReactNode> = {
          title: <SkeletonTitle key={index} />,
          paragraph: <SkeletonParagraph key={index} />,
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
