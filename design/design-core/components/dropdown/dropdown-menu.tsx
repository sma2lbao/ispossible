import React from "react";
import stylex from "@stylexjs/stylex";
import { DropdownMenuProps } from "./dropdown.types";
import { DropdownMenuItem } from "./dropdown-menu-item";
import { styles } from "./dropdown.stylex";

export const DropdownMenu: React.FC<DropdownMenuProps> = (props) => {
  const { menu } = props;

  return (
    <div {...stylex.props(styles.menu)}>
      {menu?.map((item, index) => {
        return <DropdownMenuItem {...item} key={item.name || "" + index} />;
      })}
    </div>
  );
};
