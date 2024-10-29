import React, { useContext, useEffect, useState } from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./radio.stylex";
import { RadioContext } from "./radio.context";
import type { RadioProps } from "./radio.types";

export const Radio: React.FC<RadioProps> = (props) => {
  const context = useContext(RadioContext);
  const { value, disabled = false, children, checked, onChange } = props;
  const [innerChecked, setInnerChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("radio event: ", e);
  };

  useEffect(() => {
    if (typeof checked === "boolean") {
      setInnerChecked(checked);
    }
  }, [checked]);

  useEffect(() => {
    if (value === context?.group.value) {
      setInnerChecked(true);
    } else {
      setInnerChecked(false);
    }
  }, [context?.group.value, value]);

  return (
    <label {...stylex.props(styles.radio)}>
      <span
        {...stylex.props(
          styles.radio$inner,
          innerChecked && styles.radio$inner$checked
        )}
      >
        <input
          type="radio"
          checked={Boolean(innerChecked)}
          disabled={disabled}
          onChange={handleChange}
          {...stylex.props(styles.radio$host)}
        />
        {/* <span
          {...stylex.props(
            styles.radio$inner$display,
            innerChecked && styles.radio$inner$display$checked
          )}
        ></span> */}
      </span>
      <div {...stylex.props(styles.radio$content)}>
        <span {...stylex.props(styles.radio$addon)}>{children}</span>
      </div>
    </label>
  );
};
