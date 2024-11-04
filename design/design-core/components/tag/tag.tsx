import React, { useState } from "react";
import stylex from "@stylexjs/stylex";
import { styles } from "./tag.stylex";
import type { TagProps } from "./tag.types";

export const Tag = React.forwardRef<HTMLDivElement, TagProps>((props, ref) => {
  const {
    children,
    color,
    type = "light",
    shape = "square",
    prefixIcon,
    suffixIcon,
    closeable,
    avatarSrc,
    onClick,
    onClose,
    tagKey,
    ...rest
  } = props;

  const [visible, setVisible] = useState(true);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick?.(e);
  };

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(children, e, tagKey);
    setVisible(false);
  };

  const prefixNode = prefixIcon ? (
    <div {...stylex.props(styles.prefixIcon)}>{prefixIcon}</div>
  ) : null;
  const avatarNode = avatarSrc ? <div></div> : null;
  const suffixNode = suffixIcon ? (
    <div {...stylex.props(styles.suffixIcon)}>{suffixIcon}</div>
  ) : null;
  const closeNode = closeable ? (
    <div {...stylex.props(styles.closeIcon)} onClick={handleClose}>
      <is-close />
    </div>
  ) : null;

  return (
    <div
      ref={ref}
      onClick={handleClick}
      {...rest}
      {...stylex.props(
        styles.tag,
        !visible && styles.tag$hidden,
        shape === "square" && styles.tag$square,
        shape === "circle" && styles.tag$circle,
        type === "light" && styles.tag$light(color),
        type === "ghost" && styles.tag$ghost(color),
        type === "solid" && styles.tag$solid(color)
      )}
    >
      {prefixNode}
      {avatarNode}
      <div {...stylex.props(styles.content)}>{children}</div>
      {suffixNode}
      {closeNode}
    </div>
  );
});
