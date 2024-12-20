import stylex from "@stylexjs/stylex";
import React, { useEffect, useRef, useState } from "react";
import { styles } from "./input.stylex";
import { mergeRefs } from "../../shared";
import type { InputProps } from "./input.types";
import "@design/icon/close-circle-filled";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      name,
      style,
      disabled = false,
      clearable = false,
      addonBefore,
      addonAfter,
      prefix,
      suffix,
      defaultValue,
      value,
      onChange,
      ...rest
    } = props;
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isHover, setIsHover] = useState(false);
    const [rawValue, setRawValue] = useState<string>(defaultValue ?? "");
    const isControl = "value" in props;
    const isClearable =
      clearable && Boolean(rawValue.length) && (isHover || isFocus);

    const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
      setIsFocus(true);
    };

    const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
      setIsFocus(false);
    };

    const handleWrapEnter = () => {
      setIsHover(true);
    };

    const handleWrapLeave = () => {
      setIsHover(false);
    };

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const newValue = e.target.value;
      setRawValue(newValue);
      onChange?.(newValue);
    };

    const handleClear = () => {
      setRawValue("");
      onChange?.("");
      inputRef.current?.focus();
    };

    useEffect(() => {
      if (isControl && rawValue !== value) {
        setRawValue(value || "");
      }
    }, [value, rawValue]);

    return (
      <div
        {...stylex.props(
          styles.input,
          isFocus && styles.input$focus,
          disabled && styles.input$disabled
        )}
      >
        {addonBefore ? (
          <div {...stylex.props(styles.input$addon$container)}>
            {addonBefore}
          </div>
        ) : null}
        {prefix ? (
          <div {...stylex.props(styles.input$stitch$container)}>{prefix}</div>
        ) : null}
        <div
          {...stylex.props(styles.input$display$wrap)}
          onMouseEnter={handleWrapEnter}
          onMouseLeave={handleWrapLeave}
        >
          <input
            value={rawValue}
            name={name}
            ref={mergeRefs(inputRef, ref)}
            disabled={disabled}
            {...stylex.props(
              styles.input$display(
                Boolean(prefix) || Boolean(addonBefore),
                isClearable || Boolean(suffix) || Boolean(addonAfter)
              ),
              disabled && styles.input$disabled
            )}
            {...rest}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {isClearable ? (
            <div {...stylex.props(styles.input$clear)} onClick={handleClear}>
              <is-close-circle-filled />
            </div>
          ) : null}
        </div>
        {suffix ? (
          <div {...stylex.props(styles.input$stitch$container)}>{suffix}</div>
        ) : null}
        {addonAfter ? (
          <div {...stylex.props(styles.input$addon$container)}>
            {addonAfter}
          </div>
        ) : null}
      </div>
    );
  }
);
