import stylex from "@stylexjs/stylex";
import React from "react";
import { styles } from "./button.stylex";
import { ButtonProps } from "./button.types";
import "@design/icon/loading";
import { x } from "../../shared";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      block = false,
      color = "primary",
      theme = "light",
      disabled = false,
      icon,
      iconAlign = "start",
      loading = false,
      onClick,
      stylex: customStylex,
      style,
      className,
      type = "button",
      ...rest
    } = props;

    const onlyIcon = !!icon && !children;

    const handleClick: React.MouseEventHandler<Element> = (
      e: React.MouseEvent<Element, MouseEvent>
    ) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        onClick={handleClick}
        {...x(
          className,
          style,
          styles.button,
          styles.button$color(color),
          theme === "light" && styles.button$light(color),
          theme === "solid" && styles.button$solid(color),
          theme === "ghost" && styles.button$ghost(color),
          theme === "outline" &&
            styles.button$outline(color, disabled || loading),
          block && styles.button$block,
          onlyIcon && styles.button$onlyIcon,
          (disabled || loading) && styles.disabled,
          customStylex
        )}
        type={type}
        {...rest}
      >
        <span {...stylex.props(styles.button$content)}>
          {React.isValidElement(icon) && iconAlign === "start" ? (
            <span {...stylex.props(styles.button$icon)}>{icon}</span>
          ) : null}
          {loading ? <is-loading {...stylex.attrs(styles.loading)} /> : null}
          {children}
          {React.isValidElement(icon) && iconAlign === "end" ? (
            <span {...stylex.props(styles.button$icon)}>{icon}</span>
          ) : null}
        </span>
      </button>
    );
  }
);
