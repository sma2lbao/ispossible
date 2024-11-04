import stylex from "@stylexjs/stylex";
import React from "react";
import { InputTextareaProps } from "./input.types";
import { styles } from "./input.stylex";

export const InputTextarea: React.FC<InputTextareaProps> = (props) => {
  const { rows = 3, value, onChange, placeholder } = props;

  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...stylex.props(styles.textarea)}
    />
  );
};
