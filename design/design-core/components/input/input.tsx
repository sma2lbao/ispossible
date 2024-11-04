import stylex from "@stylexjs/stylex";
import React from "react";
import type { InputProps } from "./input.types";
import { styles } from "./input.stylex";

export const Input: React.FC<InputProps> = (props) => {
  const { style, prefix, suffix, value, onChange, placeholder } = props;

  return (
    <div {...stylex.props(styles.input, style)}>
      {prefix}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...stylex.props(styles.input$display)}
      />
      {suffix}
    </div>
  );
};
