import React from "react";
import { Tooltip } from "../tooltip";
import type { PopoverProps } from "./popover.types";

export const Popover: React.FC<PopoverProps> = (props) => {
  const {
    children,
    content,
    arrow = false,
    direction = "bottom",
    popupStylex,
    theme = "light",
    leaveDelay = 100,
    ...rest
  } = props;

  return (
    <Tooltip
      title={content}
      direction={direction}
      arrow={false}
      popupStylex={popupStylex}
      theme={theme}
      leaveDelay={leaveDelay}
      {...rest}
    >
      {children}
    </Tooltip>
  );
};
