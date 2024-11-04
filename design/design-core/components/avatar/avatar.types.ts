import { StyleXStyles } from "@stylexjs/stylex";

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
   * 设置头像的大小
   * @default 80
   */
  size?: number;

  /**
   * 左右两边间隔
   * @default 3
   */
  gap?: number;

  stylex?: StyleXStyles;

  style?: React.CSSProperties;

  className?: string;

  children?: React.ReactNode;

  onClick?: () => void;
}

export interface AvatarGroupProps {
  /**
   * 设置最多显示相关配置
   */
  max?: number;

  /**
   * 设置头像的大小
   */
  size?: AvatarProps["size"];

  /**
   * 设置头像的形状
   */
  shape?: AvatarProps["shape"];

  children?: React.ReactNode;
}

export interface AvatarContextProps {}
