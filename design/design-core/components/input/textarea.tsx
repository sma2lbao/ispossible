import stylex, { StyleXStyles } from "@stylexjs/stylex";
import React from "react";

export interface TextareaProps {
  /**
   * @default 3
   */
  rows?: number;
  /**
   * 输入框内容
   */
  value?: string;
  placeholder?: string;
  style?: StyleXStyles;
  /**
   * 输入框内容变化时的回调
   * @param e
   * @returns
   */
  onChange?: React.ChangeEventHandler;
}

const styles = stylex.create({
  root: {
    fontSize: 14,
    lineHeight: "20px",
    border: "1px solid #ddd",
    width: "100%",
    alignItems: "center",
    borderRadius: 4,
    overflow: "hidden",
    padding: 8,
    boxSizing: "border-box",
    resize: "none",
  },
});

export const Textarea: React.FC<TextareaProps> = (props) => {
  const { rows = 3, style, value, onChange, placeholder } = props;

  return (
    <textarea
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      {...stylex.props(styles.root)}
    />
  );
};
