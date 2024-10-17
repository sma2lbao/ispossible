import React, { useContext } from "react";
import { NavItemProps } from "./nav.types";
import { NavContext } from "./nav.context";
import stylex from "@stylexjs/stylex";
import { styles } from "./nav.stylex";

export const NavItem: React.FC<NavItemProps> = (props) => {
  const { icon, toggleIcon, itemKey, text, disabled = false } = props;
  const context = useContext(NavContext);

  return (
    <div key={itemKey} {...stylex.props(styles.item)}>
      {text}
    </div>
  );
};
