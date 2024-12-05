import React from "react";
import { Tooltip } from "../tooltip";
import type { PopoverHandles, PopoverProps } from "./popover.types";

export const Popover = React.forwardRef<PopoverHandles, PopoverProps>(
  (props, ref) => {
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
        ref={ref}
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
  }
);
