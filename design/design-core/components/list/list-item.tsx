import React from "react";
import { styles } from "./list.stylex";
import { x } from "../../shared";
import type { ListItemProps } from "./list.types";

export const ListItem: React.FC<ListItemProps> = (props) => {
  const { children, className, style, stylex } = props;

  return <li {...x(className, style, styles.list$item, stylex)}>{children}</li>;
};
