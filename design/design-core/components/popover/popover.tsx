import React from "react";
import stylex from "@stylexjs/stylex";
import { Tooltip } from "../tooltip";
import { TooltipProps } from "../tooltip/tooltip.types";

const styles = stylex.create({
  custom: {
    padding: 0,
  },
});

export interface PopoverProps extends Omit<TooltipProps, "title"> {
  children: React.ReactNode;
  content: () => React.ReactNode | React.ReactNode;
}

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
