import React, { useState } from "react";
import stylex from "@stylexjs/stylex";

type ItemType = {
  id: string;
  label: string;
  children: React.ReactNode;
};

export interface CollapseProps {
  items: ItemType[];
}

const styles = stylex.create({
  root: {},
  item: {
    cursor: "pointer",
  },
  hidden: {
    display: "none",
  },
});

export const Collapse: React.FC<CollapseProps> = (props) => {
  const { items } = props;
  const [activeIds, setActiveIds] = useState<string[]>([]);

  const handleItemClick = (id: string) => {
    const index = activeIds.findIndex((activeId) => activeId === id);
    if (index !== -1) {
      activeIds.splice(index, 1);
      setActiveIds([...activeIds]);
    } else {
      activeIds.push(id);
      setActiveIds([...activeIds]);
    }
  };

  return (
    <div {...stylex.props(styles.root)}>
      {items.map((item) => {
        return (
          <div
            key={item.id}
            {...stylex.props(styles.item)}
            onClick={() => handleItemClick(item.id)}
          >
            <div>{item.label}</div>
            <div
              {...stylex.props(
                activeIds.includes(item.id) ? undefined : styles.hidden
              )}
            >
              {item.children}
            </div>
          </div>
        );
      })}
    </div>
  );
};
