import React from "react";
import { x } from "../../shared";
import { styles } from "./layout.stylex";
import { LayoutContext } from "./layout.context";
import { Sider } from "./sider";
import type { LayoutProps } from "./layout.types";

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children, className, style, stylex: customStylex } = props;

  const hasSider = React.Children.toArray(children).some(
    (child) => React.isValidElement(child) && child.type === Sider
  );

  const contextValue = {};

  return (
    <div
      {...x(
        className,
        style,
        styles.layout,
        hasSider && styles.layout$has$sider,
        customStylex
      )}
    >
      <LayoutContext.Provider value={contextValue}>
        {children}
      </LayoutContext.Provider>
    </div>
  );
};
