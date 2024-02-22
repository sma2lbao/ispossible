import React, { useState } from "react";
import { TreeNode, TreeNodeProps } from "./tree-node";
import { TreeContext } from "./context";

export interface TreeProps {
  items: Omit<TreeNodeProps, "parentId" | "deep" | "className">[];
}

export const Tree: React.FC<TreeProps> = (props) => {
  const { items } = props;
  const [foldIds, setFoldIds] = useState<string[]>([]);

  const handleUpdateFoldIds = (id: string) => {
    const index = foldIds.findIndex((foldId) => foldId === id);
    if (index !== -1) {
      foldIds.splice(index, 1);
      setFoldIds([...foldIds]);
    } else {
      foldIds.push(id);
      setFoldIds([...foldIds]);
    }
  };

  return (
    <div>
      <TreeContext.Provider
        value={{ foldIds, updateFoldIds: handleUpdateFoldIds }}
      >
        {items.map((item) => {
          return <TreeNode key={item.id} {...item} deep={0} />;
        })}
      </TreeContext.Provider>
    </div>
  );
};
