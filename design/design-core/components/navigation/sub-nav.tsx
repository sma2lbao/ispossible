import stylex from "@stylexjs/stylex";
import React, { useContext, useState } from "react";
import { NavItem } from "./nav-item";
import { NavContext, NavContextType } from "./nav.context";
import { styles } from "./nav.stylex";
import { SubNavProps, isSubNavProps } from "./nav.types";
import { PathTrackerContext, useFullPath, useMeasure } from "./path.context";
import { Popover } from "../popover";
import "@design/icon/down";
import "@design/icon/right";
import "@design/icon/caret-down-filled";
import "@design/icon/caret-right-filled";

export const SubNav: React.FC<SubNavProps> = (props) => {
  const context = useContext(NavContext);
  const {
    icon,
    expandIcon = context.mode === "inline" ||
    (context.mode === "x" && context.level === 0) ? (
      <is-caret-down-filled />
    ) : (
      <is-caret-right-filled />
    ),
    isCollapsed = true,
    text,
    itemKey,
    items,
    children,
  } = props;

  const [rawCollapsed, setRawCollapsed] = useState<boolean>(
    context.mode === "inline" ? isCollapsed : false
  );
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
    if (context.mode !== "inline") return;
    setRawCollapsed(!rawCollapsed);
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
        {Boolean(icon) && <i {...stylex.props(styles.icon)}>{icon}</i>}
        <span {...stylex.props(styles.text)}>{text}</span>
        <i {...stylex.props(styles.expandIcon, rawCollapsed && styles.reverse)}>
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
        {rawCollapsed && renderChildren()}
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
