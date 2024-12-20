import stylex from "@stylexjs/stylex";
import React from "react";
import { RadioContext } from "./radio.context";
import { styles } from "./radio.stylex";
import type { RadioContextProps, RadioGroupProps } from "./radio.types";

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const { children, direction = "x" } = props;

  const context: RadioContextProps = {
    group: props,
  };

  return (
    <div
      {...stylex.props(
        styles.radio$group,
        direction === "x" && styles.radio$group$x,
        direction === "y" && styles.radio$group$y
      )}
    >
      <RadioContext.Provider value={context}>{children}</RadioContext.Provider>
    </div>
  );
};
