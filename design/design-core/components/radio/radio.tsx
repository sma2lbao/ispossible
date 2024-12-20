import stylex from "@stylexjs/stylex";
import React, { useContext, useEffect, useState } from "react";
import { RadioContext } from "./radio.context";
import { styles } from "./radio.stylex";
import type { RadioChangeEvent, RadioProps } from "./radio.types";

export const Radio: React.FC<RadioProps> = (props) => {
  const context = useContext(RadioContext);
  const { value, disabled = false, children, checked, onChange } = props;
  const [innerChecked, setInnerChecked] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const event: RadioChangeEvent = {
      nativeEvent: e.nativeEvent,
      preventDefault: () => {
        e.preventDefault();
      },
      stopPropagation: () => {
        e.stopPropagation();
      },
      target: {
        ...props,
        checked: true,
      },
    };
    onChange?.(event);
    context?.group.onChange?.(event);
    if (!context) {
      // 非 RadioGroup 条件下
      setInnerChecked(true);
    }
  };

  useEffect(() => {
    if (context?.group) {
      // 在 RadioGroup 组件下
      if (value === context?.group.value) {
        setInnerChecked(true);
      } else {
        setInnerChecked(false);
      }
      return;
    }

    if (typeof checked === "boolean") {
      setInnerChecked(checked);
    }
  }, [checked, context?.group.value, value]);

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
        <span
          {...stylex.props(
            styles.radio$inner$display,
            innerChecked && styles.radio$inner$display$checked
          )}
        ></span>
      </span>
      <div {...stylex.props(styles.radio$content)}>
        <span {...stylex.props(styles.radio$addon)}>{children}</span>
      </div>
    </label>
  );
};
