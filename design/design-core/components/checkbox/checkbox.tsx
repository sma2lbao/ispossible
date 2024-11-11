import React, { useContext, useEffect, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./checkbox.stylex";
import { CheckboxGroupContext } from "./checkbox.context";
import type { CheckboxChangeEvent, CheckboxProps } from "./checkbox.types";

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const context = useContext(CheckboxGroupContext);
  const {
    value,
    checked = false,
    children,
    disabled = false,
    indeterminate = false,
    name,
    onChange,
    ...rest
  } = props;
  const prevValue = useRef(value);
  const [innerChecked, setInnerChecked] = useState(false);

  const nextDisabled = context?.disabled || disabled;
  const nextName = context?.name || name;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextChecked = e.target.checked;
    const event: CheckboxChangeEvent = {
      target: {
        ...props,
        checked: nextChecked,
      },
      stopPropagation: () => {
        e.stopPropagation();
      },
      preventDefault: () => {
        e.preventDefault();
      },
      nativeEvent: e.nativeEvent,
    };
    onChange?.(event);

    context?.toggleValue(value);
    if (!context) {
      setInnerChecked(nextChecked);
    }
  };

  useEffect(() => {
    context?.registerValue(value);
  }, []);

  useEffect(() => {
    if (value !== prevValue.current) {
      context?.cancelValue(prevValue.current);
      context?.registerValue(value);
      prevValue.current = value;
    }

    return () => context?.cancelValue(value);
  }, [value]);

  return (
    <label {...stylex.props(styles.checkbox)}>
      <span {...stylex.props(styles.checkbox$inner)}>
        <input
          type="checkbox"
          name={nextName}
          checked={innerChecked}
          disabled={nextDisabled}
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
