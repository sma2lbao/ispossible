import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import { Theme, useTheme } from "../theme";
import "@design/icon/arrow-down";
import "@design/icon/arrow-up";
import "@design/icon/arrow-right";
import "@design/icon/arrow-left";
import { isSubMenuType } from "./menu.types";
import type { MenuProps } from "./menu.types";

const styles = stylex.create({
  root: {},
  active: (theme: Theme) => ({
    color: theme.colors.primary,
  }),
  item: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    cursor: "pointer",
  },
  itemContent: (hasIcon: boolean) => ({
    marginLeft: hasIcon ? 10 : 0,
  }),
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
      {items.map((item, index) => {
        return (
          <>
            <div
              key={item.key}
              {...stylex.props(
                styles.item,
                innerSelectedKeys?.[0] === item.key && styles.active(theme)
              )}
              onClick={() => handleClickItem([item.key])}
            >
              {item.icon}
              <span {...stylex.props(styles.itemContent(!!item.icon))}>
                {item.label}
              </span>
              {isSubMenuType(item) && item.children?.length && (
                <is-arrow-down />
              )}
            </div>
            {/* {isSubMenuType(item) && item.children?.map((item) => {})} */}
          </>
        );
      })}
    </div>
  );
};

export default Menu;
