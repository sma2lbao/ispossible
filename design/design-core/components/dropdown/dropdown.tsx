"use client";

import React, { useRef } from "react";
import { DropdownMenu } from "./dropdown-menu";
import { DropdownContext } from "./dropdown.context";
import { styles } from "./dropdown.stylex";
import { Popover, type PopoverHandles } from "../popover";
import type { DropdownProps } from "./dropdown.types";

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const { children, menu, showTick = false } = props;
  const popupRef = useRef<PopoverHandles>(null);
  const handleClick = () => {
    popupRef.current?.close();
  };

  const context = {
    showTick,
    onClick: handleClick,
  };

  return (
    <Popover
      trigger="click"
      popupStylex={styles.dropdown}
      ref={popupRef}
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
