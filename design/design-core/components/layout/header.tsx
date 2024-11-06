import React from "react";
import { styles } from "./layout.stylex";
import { x } from "../../shared";
import type { HeaderProps } from "./layout.types";

export const Header: React.FC<HeaderProps> = (props) => {
  const { children, className, style, stylex: customStylex } = props;

  return (
    <header {...x(className, style, styles.header, customStylex)}>
      {children}
    </header>
  );
};
