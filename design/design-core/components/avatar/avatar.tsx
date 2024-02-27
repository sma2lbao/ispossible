import React from "react";
import stylex from "@stylexjs/stylex";
import { colors, radiusSizes } from "../theme/tokens.stylex";

export interface AvatarProps {
  /**
   * 指定头像的形状
   * @default circle
   */
  shape?: "circle" | "square";
  /**
   * 图片类头像的资源地址或者图片元素
   */
  src?: string;
  /**
   * 设置头像的自定义图标
   */
  icon?: React.ReactNode;
  /**
   * 设置头像的大小
   * @default 80
   */
  size?: number;

  children?: React.ReactNode;
}

const styles = stylex.create({
  root: (size) => ({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    backgroundColor: colors.secondary,
    color: colors.textInverse,
    fontSize: size * 0.8 < 12 ? 12 : size * 0.6,
    borderRadius: radiusSizes.basic,
    overflow: "hidden",
  }),
  border: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.border,
  },
  circle: {
    borderRadius: "50%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundColor: "transparent",
  },
});

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { shape = "circle", src, icon, size = 80, children } = props;

  return (
    <div
      {...stylex.props(styles.root(size), shape === "circle" && styles.circle)}
    >
      {src ? (
        <img src={src} alt="avatar" {...stylex.props(styles.image)} />
      ) : icon ? (
        icon
      ) : (
        children
      )}
    </div>
  );
};
