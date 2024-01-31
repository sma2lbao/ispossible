import React from "react";
import stylex from "@stylexjs/stylex";
import { Tooltip, type TootipPlacement } from "../tooltip";

const styles = stylex.create({
  custom: {
    color: "#333",
    backgroundColor: "#fff",
  },
});

export interface PopoverProps {
  children: React.ReactNode;
  content: () => React.ReactNode | React.ReactNode;
  placement?: TootipPlacement;
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { children, content, placement = "bottom" } = props;

  return (
    <Tooltip
      title={content}
      placement={placement}
      arrow={false}
      popupStyle={{ color: "#333", backgroundColor: "#fff", padding: 0 }}
    >
      {children}
    </Tooltip>
  );
};
