import React from "react";
import { styles } from "./layout.stylex";
import { x } from "../../shared";
import type { FooterProps } from "./layout.types";

export const Footer: React.FC<FooterProps> = (props) => {
  const { children, className, style, stylex: customStylex } = props;

  return (
    <footer
      className={className}
      style={style}
      {...x(className, style, styles.footer, customStylex)}
    >
      {children}
    </footer>
  );
};
