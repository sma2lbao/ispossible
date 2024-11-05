import React from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./input.stylex";
import type { InputProps } from "./input.types";

export const Input: React.FC<InputProps> = (props) => {
  const { style, prefix, suffix, value, onChange, placeholder, ...rest } =
    props;

  return (
    <div {...stylex.props(styles.input)}>
      <input {...rest} {...stylex.props(styles.input$display)} />
    </div>
  );
};
