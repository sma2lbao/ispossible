import React, { useContext } from "react";
import { LayoutContext } from "./layout.context";
import { styles } from "./layout.stylex";
import { x } from "../../shared";
import type { SiderProps } from "./layout.types";

export const Sider: React.FC<SiderProps> = (props) => {
  const context = useContext(LayoutContext);
  const {
    width = 200,
    sticky = false,
    top = 0,
    children,
    className,
    style,
    stylex: customStylex,
  } = props;

  return (
    <aside
      {...x(
        className,
        style,
        styles.sider(width),
        sticky && styles.sider$sticky(context?.headerRect?.height ?? top),
        customStylex
      )}
    >
      {children}
    </aside>
  );
};
