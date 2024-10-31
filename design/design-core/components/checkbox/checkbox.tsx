import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import { CheckboxProps } from "./checkbox.types";
import { styles } from "./checkbox.stylex";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const {
    checked = false,
    children,
    disabled = false,
    indeterminate = false,
    onChange,
    ...rest
  } = props;
  const [innerChecked, setInnerChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setInnerChecked(checked);
  };

  return (
    <label {...stylex.props(styles.checkbox)}>
      <span {...stylex.props(styles.checkbox$inner)}>
        <input
          type="checkbox"
          disabled={disabled}
          onChange={handleChange}
          {...rest}
          {...stylex.props(styles.checkbox$host)}
        />
        <span
          {...stylex.props(
            styles.checkbox$inner$display,
            innerChecked && styles.checkbox$inner$display$checked
          )}
        ></span>
      </span>
      <div {...stylex.props(styles.checkbox$content)}>
        <span {...stylex.props(styles.checkbox$addon)}>{children}</span>
      </div>
    </label>
  );
};
