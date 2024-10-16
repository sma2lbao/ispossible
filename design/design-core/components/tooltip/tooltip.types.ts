import { StyleXStyles } from "@stylexjs/stylex";

export type Direction =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "left-top"
  | "left-bottom"
  | "right-top"
  | "right-bottom";

export interface TooltipProps {
  title: (() => React.ReactNode) | React.ReactNode;
  children: React.ReactNode;
  /**
   * 气泡框位置
   */
  direction?: Direction;

  trigger?: "hover";

  /**
   * 用于手动控制浮层显隐
   */
  visible?: boolean;
  /**
   * 是否显示箭头
   * @default true
   */
  arrow?: boolean;
  /**
   * 卡片样式 (使用StyleX)
   */
  popupStyle?: StyleXStyles;
}
