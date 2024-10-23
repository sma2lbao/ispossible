import { StyleXStyles } from "@stylexjs/stylex";

export type IVariant = "display" | "headline" | "title" | "body" | "label";

export type ISize = "lg" | "md" | "sm";

export interface TypographyProps {
  children?: React.ReactNode;
  /**
   * 原生标签
   * @default "span"
   */
  as?: React.ElementType;
  /**
   * 样式
   */
  stylex?: StyleXStyles;
  /**
   * 文本类型
   * @default body
   */
  variant?: IVariant;

  /**
   * 文本大小
   * @default md
   */
  size?: ISize;

  /**
   * 是否需要间隔
   */
  gutterBottom?: boolean;

  dimmed?: boolean;

  /**
   * 是否截断
   */
  truncate?: boolean;
  truncateLines?: number;
}
