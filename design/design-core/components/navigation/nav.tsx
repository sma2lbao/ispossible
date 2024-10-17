import React, { useState } from "react";
import { NavProps, isSubNavProps } from "./nav.types";
import { NavContext, NavContextType } from "./nav.context";
import { SubNav } from "./sub-nav";
import { NavItem } from "./nav-item";
import stylex from "@stylexjs/stylex";
import { styles } from "./nav.stylex";

export const Nav: React.FC<NavProps> = (props) => {
  const {
    mode = "inline",
    isCollapsed = false,
    onSelect,
    items,
    children,
  } = props;
  const [selectedKeys, setSelectedKeys] = useState([]);
  const context: NavContextType = {
    mode,
    isCollapsed,
    selectedKeys,
  };

  return (
    <NavContext.Provider value={context}>
      <div {...stylex.props(styles.root)}>
        <div {...stylex.props(styles.inner)}>
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
    </NavContext.Provider>
  );
};
