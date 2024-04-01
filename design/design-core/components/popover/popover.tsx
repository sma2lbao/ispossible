import React from "react";
import stylex from "@stylexjs/stylex";
import { Tooltip, type Placement } from "../tooltip";

const styles = stylex.create({
  custom: {
    padding: 4,
  },
});

export interface PopoverProps {
  children: React.ReactNode;
  content: () => React.ReactNode | React.ReactNode;
  placement?: Placement;
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { children, content, placement = "bottom" } = props;

  return (
    <Tooltip
      title={content}
      placement={placement}
      arrow
      color="#333"
      backgroundColor="#fff"
      popupStyle={styles.custom}
    >
      {children}
    </Tooltip>
  );
};
