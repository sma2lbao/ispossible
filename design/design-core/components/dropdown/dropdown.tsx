import React from "react";
import { DropdownProps } from "./dropdown.types";
import { Popover } from "../popover";
import { DropdownMenu } from "./dropdown-menu";
import { DropdownContext } from "./dropdown.context";
import { styles } from "./dropdown.stylex";

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const { children, menu, showTick = false } = props;

  const context = {
    showTick,
  };

  return (
    <Popover
      trigger="click"
      popupStylex={styles.dropdown}
      content={() => (
        <DropdownContext.Provider value={context}>
          <DropdownMenu menu={menu} />
        </DropdownContext.Provider>
      )}
    >
      {children}
    </Popover>
  );
};
