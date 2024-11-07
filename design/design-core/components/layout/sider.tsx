import React, { useContext } from "react";
import { styles } from "./layout.stylex";
import { x } from "../../shared";
import type { SiderProps } from "./layout.types";
import { LayoutContext } from "./layout.context";

export const Sider: React.FC<SiderProps> = (props) => {
  const context = useContext(LayoutContext);
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
