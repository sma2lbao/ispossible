export interface ToastProps {
  /**
   * 自定义 ToastId
   */
  id?: string;

  /**
   * 提示类型
   */
  type?: "info" | "error" | "warning" | "success";

  /**
   * 提示内容
   */
  content: React.ReactNode;
  /**
   * 自定义图标
   */
  icon?: React.ReactNode;

  /**
   * 自定义图标颜色
   */
  iconColor?: string;

  /**
   * 是否展示关闭按钮
   */
  showClose?: boolean;

  /**
   *
   */
  onClickClose?: () => void;

  /**
   * toast 关闭的回调函数
   */
  onClose?: () => void;
}

export type ToastBuildFunc = (
  type: ToastProps["type"],
  message: string,
  options?: Omit<ToastProps, "type">
) => string;

export type ToastBuiltInFunc = (
  message: string,
  options?: Omit<ToastProps, "type">
) => string;
