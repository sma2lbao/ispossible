import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import { CheckboxProps } from "./checkbox.types";
import "@design/icon/check";
import { styles } from "./checkbox.stylex";

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
