import React from "react";
import { SubNavProps, isSubNavProps } from "./nav.types";
import { NavItem } from "./nav-item";
import stylex from "@stylexjs/stylex";
import { styles } from "./nav.stylex";

export const SubNav: React.FC<SubNavProps> = (props) => {
  const {
    disabled,
    icon = <is-home />,
    expandIcon = <is-down />,
    isCollapsed,
    text,
    itemKey,
    items,
    children,
  } = props;

  return (
    <div key={itemKey} {...stylex.props(styles.subRoot)}>
      <div {...stylex.props(styles.subTitle)}>
        <i {...stylex.props(styles.icon)}>{icon}</i>
        {text}
        <i {...stylex.props(styles.toggleIcon)}>{expandIcon}</i>
      </div>
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
    </div>
  );
};
