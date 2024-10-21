import React, { useContext, useState } from "react";
import { SubNavProps, isSubNavProps } from "./nav.types";
import { NavItem } from "./nav-item";
import stylex from "@stylexjs/stylex";
import { styles } from "./nav.stylex";
import { NavContext, NavContextType } from "./nav.context";
import { PathTrackerContext, useFullPath, useMeasure } from "./path.context";
import { Popover } from "../popover";
import "@design/icon/down";
import "@design/icon/right";

export const SubNav: React.FC<SubNavProps> = (props) => {
  const context = useContext(NavContext);
  const {
    disabled,
    icon,
    expandIcon = context.mode === "inline" ||
    (context.mode === "x" && context.level === 0) ? (
      <is-down />
    ) : (
      <is-right />
    ),
    isCollapsed,
    text,
    itemKey,
    items,
    children,
  } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const fullPath = useFullPath(itemKey);
  const measure = useMeasure();
  const isSelected = measure?.isSelectedSubNav(context.selectedKeys, itemKey);

  const contextValue = React.useMemo<NavContextType>(
    () => ({
      ...context,
      firstLevel: false,
      level: context.level + 1,
    }),
    [context]
  );

  const handleSubNavTitleClick = () => {
    setCollapsed(!collapsed);
  };

  const renderTitle = () => {
    return (
      <div
        {...stylex.props(
          styles.subTitle,
          context.firstLevel && styles.firstLevel,
          isSelected && styles.selected
        )}
        onClick={handleSubNavTitleClick}
      >
        {!!icon && <i {...stylex.props(styles.icon)}>{icon}</i>}
        <span {...stylex.props(styles.text)}>{text}</span>
        <i {...stylex.props(styles.expandIcon, collapsed && styles.reverse)}>
          {expandIcon}
        </i>
      </div>
    );
  };

  const renderChildren = () => {
    return (
      <div
        key={itemKey}
        {...stylex.props(
          styles.collapsibleWrap,
          context.mode === "inline" && styles.inlineCollapsibleWrap
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
    );
  };

  const renderInlineNode = () => {
    return (
      <>
        {renderTitle()}
        {collapsed && renderChildren()}
      </>
    );
  };

  const renderXNode = () => {
    return (
      <Popover
        direction={context.level > 0 ? "right-top" : "bottom"}
        gap={4}
        content={renderChildren}
      >
        {renderTitle()}
      </Popover>
    );
  };

  const renderYNode = () => {
    return (
      <Popover direction={"right-top"} gap={4} content={renderChildren}>
        {renderTitle()}
      </Popover>
    );
  };

  return (
    <PathTrackerContext.Provider value={fullPath}>
      <NavContext.Provider value={contextValue}>
        <div key={itemKey} {...stylex.props(styles.subRoot)}>
          {context.mode === "inline" && renderInlineNode()}
          {context.mode === "x" && renderXNode()}
          {context.mode === "y" && renderYNode()}
        </div>
      </NavContext.Provider>
    </PathTrackerContext.Provider>
  );
};
