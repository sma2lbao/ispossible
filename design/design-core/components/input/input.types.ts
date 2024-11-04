import { StyleXStyles } from "@stylexjs/stylex";

export interface InputProps {
  /**
   * 带有前缀图标的 input
   */
  prefix?: React.ReactNode;
  /**
   * 带有后缀图标的 input
   */
  suffix?: React.ReactNode;
  /**
   * 输入框内容
   */
  value?: string;

  placeholder?: string;

  style?: StyleXStyles;
  /**
   * 输入框内容变化时的回调
   * @param e
   * @returns
   */
  onChange?: React.ChangeEventHandler;
}

export interface InputTextareaProps {
  /**
   * @default 3
   */
  rows?: number;
  /**
   * 输入框内容
   */
  value?: string;
  placeholder?: string;
  style?: StyleXStyles;
  /**
   * 输入框内容变化时的回调
   * @param e
   * @returns
   */
  onChange?: React.ChangeEventHandler;
}
