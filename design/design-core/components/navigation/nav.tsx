import React, { useState } from "react";
import {
  ItemKey,
  NavProps,
  OnNavItemClickData,
  OnSelectData,
  isSubNavProps,
} from "./nav.types";
import { NavContext, NavContextType } from "./nav.context";
import { SubNav } from "./sub-nav";
import { NavItem } from "./nav-item";
import stylex from "@stylexjs/stylex";
import { styles } from "./nav.stylex";
import usePathRecords from "./use-path-records";
import { PathRegisterContext } from "./path.context";

export const Nav: React.FC<NavProps> = (props) => {
  const {
    mode = "inline",
    isCollapsed = false,
    onSelect,
    items,
    children,
  } = props;
  const [selectedKeys, setSelectedKeys] = useState<ItemKey[]>([]);
  const { register, isSelectedSubNav } = usePathRecords();
  const isHorizontal = mode === "x";
  const isVertical = mode === "y" || mode === "inline";

  const handleNavItemClick = (data: OnNavItemClickData) => {
    const { itemKey } = data;
    const exist = selectedKeys.includes(itemKey);
    const nextSelectedKeys = [itemKey];
    setSelectedKeys(nextSelectedKeys);
    if (exist) return;

    const onSelectData: OnSelectData = {
      itemKey,
      selectedKeys: nextSelectedKeys,
    };
    onSelect?.(onSelectData);
  };

  const context: NavContextType = {
    mode,
    isCollapsed,
    selectedKeys,
    firstLevel: true,
    level: 0,
    onNavItemClick: handleNavItemClick,
  };

  return (
    <NavContext.Provider value={context}>
      <PathRegisterContext.Provider
        value={{
          register,
          isSelectedSubNav,
        }}
      >
        <div {...stylex.props(styles.root, isHorizontal && styles.horizontal)}>
          <div
            {...stylex.props(
              isVertical && styles.yInner,
              isHorizontal && styles.xInner
            )}
          >
            {items?.length
              ? items.map((item) =>
                  isSubNavProps(item) ? (
                    <SubNav {...item} key={item.itemKey} />
                  ) : (
                    <NavItem {...item} key={item.itemKey} />
                  )
                )
              : children}
          </div>
        </div>
      </PathRegisterContext.Provider>
    </NavContext.Provider>
  );
};
