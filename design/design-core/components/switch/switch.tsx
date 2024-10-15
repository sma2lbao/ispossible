import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import { colors } from "../theme/tokens.stylex";

export interface SwitchProps {
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
    width: 36,
    borderRadius: 4,
    border: "none",
    outline: "none",
    backgroundColor: colors.secondary,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 1,
    cursor: "pointer",
  },
  active: {
    backgroundColor: colors.primary,
    justifyContent: "flex-end",
  },
  thumb: {
    display: "inline-flex",
    height: 18,
    width: 18,
    borderRadius: 3,
    backgroundColor: colors.white,
  },
});

export const Switch: React.FC<SwitchProps> = (props) => {
  const { value, onChange } = props;
  const [checkedInner, setCheckedInner] = useState<boolean>(value ?? false);

  const handleClick = () => {
    const nextValue = !checkedInner;
    setCheckedInner(nextValue);
    onChange?.(nextValue);
  };

  return (
    <button
      onClick={handleClick}
      {...stylex.props(styles.root, checkedInner && styles.active)}
    >
      <span {...stylex.props(styles.thumb)}></span>
    </button>
  );
};
