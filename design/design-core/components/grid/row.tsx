import React from "react";
import stylex from "@stylexjs/stylex";
import { GridContext } from "./grid.context";
import type {
  GridContextProps,
  RowAlignType,
  RowJustifyType,
  RowProps,
} from "./grid.types";
import { styles } from "./grid.stylex";

const alignConfig: Record<RowAlignType, React.CSSProperties["alignItems"]> = {
  top: "flex-start",
  middle: "center",
  bottom: "flex-end",
};

const justifyConfig: Record<
  RowJustifyType,
  React.CSSProperties["justifyContent"]
> = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  "space-around": "space-around",
  "space-between": "space-between",
};

export const Row: React.FC<RowProps> = (props) => {
  const { children, gutter = 0, type, align, justify } = props;
  const memoGutter: [number, number] =
    Array.isArray(gutter) && gutter.length === 2
      ? gutter
      : typeof gutter === "number"
      ? [gutter, 0]
      : [0, 0];

  const contextValue: GridContextProps = {
    gutter: memoGutter,
  };

  return (
    <GridContext.Provider value={contextValue}>
      <div
        {...stylex.props(
          styles.row,
          type === "flex" && styles.row$flex,
          type === "flex" && align && styles.row$flex$align(alignConfig[align]),
          type === "flex" &&
            justify &&
            styles.row$flex$justify(justifyConfig[justify]),
          styles.row$gutter(memoGutter)
        )}
      >
        {children}
      </div>
    </GridContext.Provider>
  );
};
