"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { TreeContext } from "./context";
import "@design/icon/caret-right";
import "@design/icon/caret-bottom";

export interface TreeNodeProps {
  id: string;
  label: string;
  parentId?: string;
  deep?: number;
  className?: string;
  children?: TreeNodeProps[];
}

const styles = stylex.create({
  root: {},
  hidden: {
    display: "none",
  },
});

export const TreeNode: React.FC<TreeNodeProps> = (props) => {
  const context = React.useContext(TreeContext);
  const { id, label, children, deep = 0, className } = props;
  const hasChildren = !!children?.length;

  const handleNodeClick = () => {
    if (!children?.length) return;
    context?.updateFoldIds(id);
  };

  return (
    <div className={className} {...stylex.props(styles.root)}>
      <div onClick={handleNodeClick}>
        {hasChildren && (
          <>
            {context?.foldIds.includes(id) ? (
              <is-caret-right />
            ) : (
              <is-caret-bottom />
            )}
          </>
        )}
        {label}
      </div>
      {children?.map((item) => (
        <TreeNode
          {...stylex.props(context?.foldIds.includes(id) && styles.hidden)}
          key={item.id}
          {...item}
          parentId={id}
          deep={deep + 1}
        />
      ))}
    </div>
  );
};
