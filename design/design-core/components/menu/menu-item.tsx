import React from "react";
import stylex from "@stylexjs/stylex";
import { type Theme, useTheme } from "../theme";
import { type MenuItemProps } from "./menu.types";

const styles = stylex.create({
  item: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    cursor: "pointer",
  },
  active: (theme: Theme) => ({
    color: theme.colors.primary,
  }),
  itemContent: (hasIcon: boolean) => ({
    marginLeft: hasIcon ? 10 : 0,
  }),
});

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { icon, label } = props;
  const theme = useTheme();

  return (
    <div {...stylex.props(styles.item, styles.active(theme))}>
      {icon}
      <span {...stylex.props(styles.itemContent(!!icon))}>{label}</span>
    </div>
  );
};

export default MenuItem;
