import React from "react";
import stylex from "@stylexjs/stylex";
import type { SpaceProps } from "./space.types";
import { styles } from "./space.stylex";
import { x } from "../../shared";

export const Space: React.FC<SpaceProps> = (props) => {
  const {
    children,
    stylex: customStylex,
    separator,
    size = 8,
    direction = "x",
  } = props;

  const isArray = Array.isArray(children);

  if (!isArray) {
    return children;
  }

  return (
    <div
      {...stylex.props(
        styles.space(size),
        direction === "y" && styles.space$vertical,
        customStylex
      )}
    >
      {React.Children.map(children, (child, index) => {
        const isLast = React.Children.count(children) - 1 === index;

        if (!child) return;
        return (
          <>
            <div key={index} {...x(styles.space$item)}>
              {child}
            </div>
            {!isLast && separator}
          </>
        );
      })}
    </div>
  );
};
