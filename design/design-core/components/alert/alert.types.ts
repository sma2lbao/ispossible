import { StyleXStyles } from "@stylexjs/stylex";

export interface AlertProps {
  /**
   * 标题
   */
  title?: React.ReactNode;

  /**
   * 描述内容
   */
  description?: React.ReactNode;

  /**
   * 类型
   * @default info
   */
  type?: "info" | "success" | "warning" | "error";

  /**
   * 自定义 icon，为 null 时不显示 icon
   */
  icon?: React.ReactNode;

  /**
   * 是否展示边框
   * @default false
   */
  bordered?: boolean;

  /**
   * 水平排列方式
   * @default center
   */
  justify?: "start" | "center";

  /**
   * 可关闭配置
   */
  closable?: boolean;

  onClose?: () => void;

  className?: string;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;
}
