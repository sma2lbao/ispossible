import React, { useContext } from "react";
import { ColProps } from "./grid.types";
import stylex from "@stylexjs/stylex";
import { styles } from "./grid.stylex";
import { GridContext } from "./grid.context";

export const Col: React.FC<ColProps> = (props) => {
  const context = useContext(GridContext);
  const {
    span = 0,
    offset = 0,
    pull = 0,
    push = 0,
    children,
    stylex: customStylex,
  } = props;
  const gutter = context?.gutter ?? [0, 0];

  return (
    <div
      {...stylex.props(
        styles.col,
        styles.col$gutter(gutter),
        styles.col$span(span),
        styles.col$offset(offset),
        styles.col$pull(pull),
        styles.col$push(push),
        customStylex
      )}
    >
      {children}
    </div>
  );
};
