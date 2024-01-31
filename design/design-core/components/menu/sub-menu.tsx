import React, { useMemo, useState } from "react";
import stylex from "@stylexjs/stylex";
import { type SubMenuProps, isSubMenuProps } from "./menu.types";
import MenuItem from "./menu-item";
import { colors } from "../theme/tokens.stylex";
import { Popover } from "../popover";
import "@design/icon/down";
import "@design/icon/up";
import "@design/icon/right";
import "@design/icon/left";
import { MenuContext } from "./context";

const styles = stylex.create({
  item: {
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    cursor: "pointer",
    padding: "0 34px 0 16px",
    position: "relative",
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
  arrowIcon: {
    position: "absolute",
    right: 12,
    fontSize: 12,
    transform: "translateY(-50%)",
    top: "50%",
  },
});

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { icon, label, children, id } = props;
  const [visible, setVisible] = useState(true);
  const menuContext = React.useContext(MenuContext);
  const active = menuContext?.selectedIds?.includes(id);

  const renderPopup = () => {
    return (
      <div>
        {children?.map((item) =>
          isSubMenuProps(item) ? (
            <SubMenu {...item} key={item.id} />
          ) : (
            <MenuItem {...item} key={item.id} />
          )
        )}
      </div>
    );
  };

  return (
    <Popover content={renderPopup}>
      <div key={id} {...stylex.props(styles.item, active && styles.active)}>
        {icon}
        <span {...stylex.props(styles.itemContent(!!icon))}>{label}</span>
        <is-right {...stylex.attrs(styles.arrowIcon)} />
      </div>
    </Popover>
  );
};

export default SubMenu;
