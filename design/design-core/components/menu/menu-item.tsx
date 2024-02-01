import React, { useMemo } from "react";
import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";
import { MenuContext } from "./context";
import { type MenuItemProps } from "./menu.types";

const styles = stylex.create({
  item: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    cursor: "pointer",
    padding: "0 16px",
    backgroundColor: {
      ":hover": colors.background,
    },
  },
  active: {
    color: colors.primary,
  },
  itemContent: (hasIcon: boolean) => ({
    marginLeft: hasIcon ? 10 : 0,
  }),
});

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { icon, label, id } = props;
  const menuContext = React.useContext(MenuContext);
  const active = menuContext?.selectedIds?.includes(id);

  const handleClick = () => {
    menuContext?.updateSelectedIds(id);
  };

  return (
    <div
      key={id}
      {...stylex.props(styles.item, active && styles.active)}
      onClick={handleClick}
    >
      {icon}
      <span {...stylex.props(styles.itemContent(!!icon))}>{label}</span>
    </div>
  );
};

export default MenuItem;
