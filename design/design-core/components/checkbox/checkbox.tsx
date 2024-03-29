import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";
import "@design/icon/check";

export interface CheckboxProps {
  /**
   * 指定当前是否选中
   */
  value?: boolean;
  /**
   * 变化时的回调函数
   */
  onChange?: (value: boolean) => void;
}

const styles = stylex.create({
  root: {
    height: 20,
    width: 20,
    borderRadius: 4,
    boxSizing: "border-box",
    border: "1px solid #ddd",
    outline: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    overflow: "hidden",
    backgroundColor: "transparent",
    margin: 0,
  },
  thumb: {
    flex: 1,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    fontSize: 12,
    color: colors.white,
    backgroundColor: colors.primary,
  },
});

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { value, onChange } = props;
  const [checkedInner, setCheckedInner] = useState<boolean>(value ?? false);

  const handleClick = () => {
    const nextValue = !checkedInner;
    setCheckedInner(nextValue);
    onChange?.(nextValue);
  };

  return (
    <button onClick={handleClick} {...stylex.props(styles.root)}>
      {checkedInner && (
        <span {...stylex.props(styles.thumb)}>
          <is-check />
        </span>
      )}
    </button>
  );
};
