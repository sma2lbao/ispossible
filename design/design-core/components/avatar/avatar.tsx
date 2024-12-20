import stylex from "@stylexjs/stylex";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AvatarContext } from "./avatar.context";
import { styles } from "./avatar.stylex";
import type { AvatarProps } from "./avatar.types";

export const Avatar: React.FC<AvatarProps> = (props) => {
  const context = useContext(AvatarContext);
  const {
    shape = "circle",
    src,
    size = 75,
    children,
    gap = 3,
    stylex: customStylex,
    onClick,
  } = props;
  const [isExist, setIsExist] = useState(!!src);
  const [scale, setScale] = useState<number>(1);
  const contentRef = useRef<HTMLSpanElement>(null);

  const handleClick = () => {
    onClick?.();
  };

  useEffect(() => {
    if (!src) {
      setIsExist(false);
      return;
    }
    const image = new Image(0, 0);
    image.src = src;
    image.onload = () => {
      setIsExist(true);
    };
    image.onerror = () => {
      setIsExist(false);
    };
    image.onabort = () => {
      setIsExist(false);
    };
  }, [src]);

  useEffect(() => {
    if (isExist || !contentRef.current) return;

    const stringNode = contentRef.current.firstChild as HTMLSpanElement;
    const contentWidth = contentRef.current.offsetWidth ?? 0;
    const stringWidth = stringNode.offsetWidth ?? 0;

    if (contentWidth !== 0 && stringWidth !== 0 && contentWidth > 2 * gap) {
      const nextScale =
        contentWidth - gap * 2 > stringWidth
          ? 1
          : (contentWidth - gap * 2) / stringWidth;
      setScale(nextScale);
    }
  }, [isExist, contentRef.current]);

  return (
    <div
      {...stylex.props(
        styles.avatar(size),
        styles.avatar$grey,
        styles.avatar$border,
        context && styles.avatar$margin$left(size / 4),
        shape === "circle" && styles.avatar$circle,
        customStylex
      )}
      onClick={handleClick}
    >
      {isExist ? (
        <img src={src} alt="avatar" {...stylex.props(styles.avatar$image)} />
      ) : (
        <span
          {...stylex.props(styles.avatar$content)}
          style={{ transform: `scale(${scale})` }}
          ref={contentRef}
        >
          <span {...stylex.props(styles.avatar$label)}>{children}</span>
        </span>
      )}
    </div>
  );
};
