import React, { useEffect, useRef, useState } from "react";
import { styles } from "./textarea.stylex";
import { TextareaProps } from "./textarea.types";
import { mergeRefs, x } from "../../shared";

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const {
      stylex,
      style,
      className,
      value,
      defaultValue,
      onChange,
      rows = 4,
      disabled,
      ...rest
    } = props;
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const isControl = "value" in props;

    const [rawValue, setRawValue] = useState<string>(defaultValue ?? "");
    const [isFocus, setIsFocus] = useState(false);

    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
      const newValue = e.target.value;
      setRawValue(newValue);
      onChange?.(newValue);
    };

    useEffect(() => {
      if (isControl && rawValue !== value) {
        setRawValue(value ?? "");
      }
    }, [value, rawValue]);

    return (
      <div
        {...x(
          className,
          style,
          styles.textarea,
          isFocus && styles.textarea$focus,
          stylex
        )}
      >
        <textarea
          value={rawValue}
          rows={rows}
          disabled={disabled}
          {...x(styles.textarea$host)}
          {...rest}
          ref={mergeRefs(textareaRef, ref)}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={handleChange}
        ></textarea>
      </div>
    );
  }
);
