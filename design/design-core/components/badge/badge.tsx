import React from "react";
import stylex from "@stylexjs/stylex";

export interface BadgeProps {
  color?: string;
  count?: React.ReactNode;
  dot?: boolean;
  overflowCount?: number;
}

const styles = stylex.create({
  root: {},
});

export const Badge: React.FC<BadgeProps> = (props) => {
  const { color = "" } = props;

  return <span></span>;
};
