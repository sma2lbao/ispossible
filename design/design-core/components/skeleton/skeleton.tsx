import React from "react";
import SkeletonTitle from "./title";
import SkeletonAvatar from "./avatar";
import SkeletonParagraph from "./paragraph";
import SkeletonImage from "./image";
import SkeletonButton from "./button";
import stylex from "@stylexjs/stylex";

import { type SkeletonNode, type SkeletonProps } from "./skeleton.types";

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
  const { nodes = ["title", "paragraph", "image"], children } = props;

  return (
    <div {...stylex.props(styles.root)}>
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
