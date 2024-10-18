import React, { useContext, useState } from "react";
import { SubNavProps, isSubNavProps } from "./nav.types";
import { NavItem } from "./nav-item";
import stylex from "@stylexjs/stylex";
import { styles } from "./nav.stylex";
import { NavContext, NavContextType } from "./nav.context";
import { PathTrackerContext, useFullPath, useMeasure } from "./path.context";
import "@design/icon/down";
import "@design/icon/up";

export const SubNav: React.FC<SubNavProps> = (props) => {
  const {
    disabled,
    icon,
    expandIcon = <is-down />,
    isCollapsed,
    text,
    itemKey,
    items,
    children,
  } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  const context = useContext(NavContext);
  const fullPath = useFullPath(itemKey);
  const measure = useMeasure();
  const isSelected = measure?.isSelectedSubNav(context.selectedKeys, itemKey);

  const contextValue = React.useMemo<NavContextType>(
    () => ({
      ...context,
      firstLevel: false,
    }),
    [context]
  );

  const handleSubNavTitleClick = () => {
    setCollapsed(!collapsed);
  };

  return (
    <PathTrackerContext.Provider value={fullPath}>
      <NavContext.Provider value={contextValue}>
        <div key={itemKey} {...stylex.props(styles.subRoot)}>
          <div
            {...stylex.props(
              styles.subTitle,
              context.firstLevel && styles.firstLevel,
              isSelected && styles.selected
            )}
            onClick={handleSubNavTitleClick}
          >
            <i {...stylex.props(styles.icon)}>{icon}</i>
            <span {...stylex.props(styles.text)}>{text}</span>
            <i
              {...stylex.props(styles.toggleIcon, collapsed && styles.reverse)}
            >
              {expandIcon}
            </i>
          </div>
          {collapsed && (
            <div key={itemKey} {...stylex.props(styles.collapsibleWrap)}>
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
          )}
        </div>
      </NavContext.Provider>
    </PathTrackerContext.Provider>
  );
};
