import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import MenuItem from "./menu-item";
import SubMenu from "./sub-menu";
import { MenuContext } from "./context";
import { type MenuProps, type ItemProps, isSubMenuProps } from "./menu.types";

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  horizontal: {
    flexDirection: "row",
  },
});

const Menu: React.FC<MenuProps> = (props) => {
  const { mode = "y", items = [] } = props;
  const [innerSelectedIds, setInnerSelectedIds] = useState<string[]>();

  const findSelectedIds = (
    items: ItemProps[],
    id: string,
    selectedIds: string[] = []
  ): string[] => {
    if (!items?.length) {
      return selectedIds;
    }
    for (let item of items) {
      if (item.id === id) {
        selectedIds.unshift(item.id);
        return selectedIds;
      }
      if (isSubMenuProps(item)) {
        const subSelectedIds = findSelectedIds(item.children!, id, selectedIds);
        if (subSelectedIds.length) {
          selectedIds.unshift(item.id);
          return selectedIds;
        }
      }
    }
    return selectedIds;
  };

  const handleUpdateSelectedIds = (id: string) => {
    const selectedIds = findSelectedIds(items, id, []);
    setInnerSelectedIds(selectedIds);
  };

  return (
    <MenuContext.Provider
      value={{
        selectedIds: innerSelectedIds,
        updateSelectedIds: handleUpdateSelectedIds,
      }}
    >
      <div {...stylex.props(styles.root, mode === "x" && styles.horizontal)}>
        {items.map((item) => {
          return isSubMenuProps(item) ? (
            <SubMenu {...item} key={item.id} />
          ) : (
            <MenuItem {...item} key={item.id} />
          );
        })}
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
