import { StyleXStyles } from "@stylexjs/stylex";

export interface SelectProps {
  /**
   * 前缀
   */
  prefix?: React.ReactNode;

  /**
   * 后缀
   */
  suffix?: React.ReactNode;

  style?: React.CSSProperties;

  className?: string;

  disabled?: boolean;

  loading?: boolean;

  children?: React.ReactNode;
}

export interface SelectOptionProps {
  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 展示的文本。渲染时优先取 label，若无则取 children、value，依次降级
   */
  label?: string;

  /**
   * 属性值
   */
  value?: string | number;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;

  className?: string;

  children?: React.ReactNode;

  [key: string]: any;
}
