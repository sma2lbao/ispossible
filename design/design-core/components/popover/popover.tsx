import React from "react";
import { Tooltip, type TootipPlacement } from "../tooltip";

export interface PopoverProps {
  children: React.ReactNode;
  content: () => React.ReactNode | React.ReactNode;
  placement?: TootipPlacement;
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { children, content, placement = "bottom" } = props;

  return (
    <Tooltip title={content} placement={placement}>
      {children}
    </Tooltip>
  );
};
