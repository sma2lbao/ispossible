import stylex, { StyleXStyles } from "@stylexjs/stylex";
import React from "react";

export interface InputProps {
  /**
   * 带有前缀图标的 input
   */
  prefix?: React.ReactNode;
  /**
   * 带有后缀图标的 input
   */
  suffix?: React.ReactNode;
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
    border: "1px solid #ddd",
    display: "inline-flex",
    alignItems: "center",
    fontSize: 14,
    lineHeight: "20px",
    padding: "4px 8px",
    borderRadius: 4,
  },
  input: {
    outline: "none",
    border: "none",
    padding: "0 4px",
    width: "100%",
  },
});

export const Input: React.FC<InputProps> = (props) => {
  const { style, prefix, suffix, value, onChange, placeholder } = props;

  return (
    <div {...stylex.props(styles.root, style)}>
      {!!prefix && <span>{prefix}</span>}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...stylex.props(styles.input)}
      />
      {!!suffix && <span>{suffix}</span>}
    </div>
  );
};
