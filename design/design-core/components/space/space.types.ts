import { StyleXStyles } from "@stylexjs/stylex";

export interface SpaceProps {
  children: React.ReactNode;
  /**
   * 设置拆分符号
   */
  separator?: React.ReactNode;
  /**
   * 间距大小
   */
  size?: number;
  /**
   * 间距方向
   */
  direction?: "x" | "y";

  stylex?: StyleXStyles;

  style?: React.CSSProperties;
}
