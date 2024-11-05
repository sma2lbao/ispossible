import React, { useEffect, useRef, useState } from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./input.stylex";
import type { InputProps } from "./input.types";
import "@design/icon/close-circle-filled";

export const Input: React.FC<InputProps> = (props) => {
  const {
    style,
    disabled = false,
    clearable = false,
    prefix,
    suffix,
    defaultValue,
    value,
    onChange,
    placeholder,
    ...rest
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [rawValue, setRawValue] = useState<string>(defaultValue ?? "");
  const isControl = "value" in props;

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setIsFocus(true);
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setIsFocus(false);
  };

  const handleMouseEnter: React.MouseEventHandler<HTMLInputElement> = (e) => {
    setIsHover(true);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLInputElement> = (e) => {
    setIsHover(false);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newValue = e.target.value;
    if (!isControl) {
      setRawValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleClear = () => {
    setRawValue("");
    onChange?.("");
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (isControl) {
      setRawValue(value || "");
    }
  }, [value]);

  return (
    <div
      {...stylex.props(
        styles.input,
        isFocus && styles.input$focus,
        disabled && styles.input$disabled
      )}
    >
      {prefix ? (
        <div {...stylex.props(styles.input$stitch$container)}>{prefix}</div>
      ) : null}
      <input
        value={rawValue}
        ref={inputRef}
        disabled={disabled}
        {...stylex.props(
          styles.input$display(Boolean(prefix), Boolean(suffix)),
          disabled && styles.input$disabled
        )}
        {...rest}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {clearable && rawValue.length && (isHover || isFocus) ? (
        <div {...stylex.props(styles.input$clear)} onClick={handleClear}>
          <is-close-circle-filled />
        </div>
      ) : null}
      {suffix ? (
        <div {...stylex.props(styles.input$stitch$container)}>{suffix}</div>
      ) : null}
    </div>
  );
};
