import React from "react";
import { Tooltip } from "../tooltip";

export interface PopoverProps {
  children: React.ReactNode;
  content: () => React.ReactNode | React.ReactNode;
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { children, content } = props;

  return <Tooltip title={content}>{children}</Tooltip>;
};
