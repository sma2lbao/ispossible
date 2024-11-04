import React from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./breadcrumb.stylex";
import type { BreadcrumbItemProps } from "./breadcrumb.types";

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const { children, icon, onClick, stylex: customStylex } = props;

  const handleClick = () => {
    onClick?.();
  };

  return (
    <span
      {...stylex.props(styles.breadcrumb$item, customStylex)}
      onClick={handleClick}
    >
      <span {...stylex.props(styles.breadcrumb$item$inner)}>
        {Boolean(icon) ? (
          <span {...stylex.props(styles.breadcrumb$item$icon)}>{icon}</span>
        ) : null}
        {Boolean(children) ? (
          <span {...stylex.props(styles.breadcrumb$item$title)}>
            {children}
          </span>
        ) : null}
      </span>
    </span>
  );
};
