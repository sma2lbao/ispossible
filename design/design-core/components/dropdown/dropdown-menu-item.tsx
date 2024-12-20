import stylex from "@stylexjs/stylex";
import React, { useContext } from "react";
import { DropdownContext } from "./dropdown.context";
import { styles } from "./dropdown.stylex";
import { DropdownMenuItemProps } from "./dropdown.types";
import { Divider } from "../divider";
import "@design/icon/check";

export const DropdownMenuItem = React.forwardRef<
  HTMLDivElement,
  DropdownMenuItemProps
>((props, ref) => {
  const context = useContext(DropdownContext);
  const {
    node = "item",
    name,
    children,
    active = false,
    onClick,
    ...rest
  } = props;

  const handleClick = () => {
    onClick?.();
    context.onClick();
  };

  if (node === "divider") {
    return <Divider />;
  }

  if (node === "title") {
    return (
      <div
        {...stylex.props(
          styles.menu$title,
          context.showTick && styles.menu$title$tick
        )}
      >
        {name || children}
      </div>
    );
  }

  return (
    <div
      ref={ref}
      onClick={handleClick}
      {...stylex.props(
        styles.menu$item,
        context.showTick && styles.menu$item$tick
      )}
      {...rest}
    >
      {context.showTick ? (
        <span {...stylex.props(styles.item$tick$icon)}>
          {active ? <is-check /> : null}
        </span>
      ) : null}
      {name || children}
    </div>
  );
});
