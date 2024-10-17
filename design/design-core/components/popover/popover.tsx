import React from "react";
import stylex from "@stylexjs/stylex";
import { Tooltip, type Direction } from "../tooltip";

const styles = stylex.create({
  custom: {
    padding: 10,
  },
});

export interface PopoverProps {
  children: React.ReactNode;
  content: () => React.ReactNode | React.ReactNode;
  direction?: Direction;
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { children, content, direction = "bottom" } = props;

  return (
    <Tooltip
      title={content}
      direction={direction}
      arrow={false}
      popupStylex={styles.custom}
      theme="light"
    >
      {children}
    </Tooltip>
  );
};
