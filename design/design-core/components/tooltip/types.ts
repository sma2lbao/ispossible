import { StyleXStyles } from "@stylexjs/stylex";

export type Placement =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";

export type Direction = "top" | "right" | "bottom" | "left";

export interface TooltipProps {
  title: (() => React.ReactNode) | React.ReactNode;
  children: React.ReactNode;
  /**
   * 气泡框位置
   */
  placement?: Placement;
  /**
   * 用于手动控制浮层显隐
   */
  visible?: boolean;
  /**
   * 是否显示箭头
   */
  arrow?: boolean;
  /**
   * 卡片样式 (使用StyleX)
   */
  popupStyle?: StyleXStyles;
  /**
   * 背景颜色
   */
  backgroundColor?: string;
  /**
   * 字体颜色
   */
  color?: string;
}
