import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import { type SubMenuProps, isSubMenuProps } from "./menu.types";
import { useTheme, type Theme } from "../theme";
import MenuItem from "./menu-item";
import { Popover } from "../popover";
import "@design/icon/arrow-down";
import "@design/icon/arrow-up";
import "@design/icon/arrow-right";
import "@design/icon/arrow-left";

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

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { icon, label, children } = props;
  const theme = useTheme();
  const [visible, setVisible] = useState(true);

  const renderPopup = () => {
    return (
      <div>
        {children?.map((item) =>
          isSubMenuProps(item) ? <SubMenu {...item} /> : <MenuItem {...item} />
        )}
      </div>
    );
  };

  return (
    <Popover content={renderPopup}>
      <div {...stylex.props(styles.item, styles.active(theme))}>
        {icon}
        <span {...stylex.props(styles.itemContent(!!icon))}>{label}</span>
        -&gt;
      </div>
    </Popover>
  );
};

export default SubMenu;
