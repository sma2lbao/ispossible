import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import { type Theme, useTheme } from "../theme";
import MenuItem from "./menu-item";
import SubMenu from "./sub-menu";
import { type MenuProps, isSubMenuProps } from "./menu.types";

const styles = stylex.create({
  root: {},
});

const Menu: React.FC<MenuProps> = (props) => {
  const { mode = "y", items = [] } = props;
  const theme = useTheme();
  const [innerSelectedKeys, setInnerSelectedKeys] = useState<string[]>();

  const handleClickItem = (keys: string[]) => {
    setInnerSelectedKeys(keys);
  };

  return (
    <div {...stylex.props(styles.root)}>
      {items.map((item) => {
        return isSubMenuProps(item) ? (
          <SubMenu {...item} />
        ) : (
          <MenuItem {...item} />
        );
      })}
    </div>
  );
};

export default Menu;
