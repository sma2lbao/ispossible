import React, { useContext } from "react";
import { NavItemProps } from "./nav.types";
import { NavContext } from "./nav.context";
import stylex from "@stylexjs/stylex";
import { styles } from "./nav.stylex";
import "@design/icon/down";
import "@design/icon/up";
import "@design/icon/home";

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { icon = <is-home />, itemKey, text, disabled = false } = props;
  const context = useContext(NavContext);

  return (
    <div key={itemKey} {...stylex.props(styles.item)}>
      <i {...stylex.props(styles.icon)}>{icon}</i>
      {text}
    </div>
  );
};
