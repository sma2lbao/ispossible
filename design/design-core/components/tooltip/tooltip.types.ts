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

  /**
   * 触发展示的时机
   */
  trigger?: "hover" | "click" | "custom";

  /**
   * 鼠标移入后，延迟显示的时间，单位毫秒
   */
  enterDelay?: number;

  /**
   * 鼠标移出后，延迟消失的时间，单位毫秒
   */
  leaveDelay?: number;

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
   * 背景主题
   * @default dark
   */
  theme?: "dark" | "light";
  /**
   * 卡片样式 (使用StyleX)
   */
  popupStylex?: StyleXStyles;

  popupStyle?: React.CSSProperties;
}
