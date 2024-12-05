import React, { useEffect, useState } from "react";
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
import { x } from "../../shared";

export const Nav: React.FC<NavProps> = (props) => {
  const {
    mode = "inline",
    isCollapsed = false,
    defaultSelectedKeys,
    selectedKeys,
    onSelect,
    items,
    children,
    className,
    style,
    stylex: customStylex,
  } = props;
  const isControl = "selectedKeys" in props;
  const [rawSelectedKeys, setRawSelectedKeys] = useState<ItemKey[]>(
    defaultSelectedKeys ?? []
  );
  const { register, isSelectedSubNav } = usePathRecords();
  const isHorizontal = mode === "x";
  const isVertical = mode === "y" || mode === "inline";

  const handleNavItemClick = (data: OnNavItemClickData) => {
    const { itemKey, domEvent, ...rest } = data;
    const exist = rawSelectedKeys.includes(itemKey);
    const nextSelectedKeys = [itemKey];
    !isControl ? setRawSelectedKeys(nextSelectedKeys) : null;
    if (exist) return;

    const onSelectData: OnSelectData = {
      ...rest,
      itemKey,
      selectedKeys: nextSelectedKeys,
    };
    onSelect?.(onSelectData);
  };

  const context: NavContextType = {
    mode,
    isCollapsed,
    selectedKeys: rawSelectedKeys,
    firstLevel: true,
    level: 0,
    onNavItemClick: handleNavItemClick,
  };

  useEffect(() => {
    if (selectedKeys !== rawSelectedKeys) {
      setRawSelectedKeys(selectedKeys ?? []);
    }
  }, [selectedKeys]);

  return (
    <NavContext.Provider value={context}>
      <PathRegisterContext.Provider
        value={{
          register,
          isSelectedSubNav,
        }}
      >
        <div
          {...x(
            className,
            style,
            styles.root,
            isHorizontal && styles.horizontal,
            isVertical && styles.vertical,
            customStylex
          )}
        >
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
