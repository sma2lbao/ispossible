import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import { SwitchProps } from "./switch.types";
import { styles } from "./switch.stylex";

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
