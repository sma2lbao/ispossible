import React from "react";
import { styles } from "./layout.stylex";
import { x } from "../../shared";
import type { SiderProps } from "./layout.types";

export const Sider: React.FC<SiderProps> = (props) => {
  const {
    width = 200,
    children,
    className,
    style,
    stylex: customStylex,
  } = props;

  return (
    <aside {...x(className, style, styles.sider(width), customStylex)}>
      {children}
    </aside>
  );
};
