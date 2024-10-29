export interface NotificationProps {
  /**
   * 自定义ID
   */
  id?: string;
  /**
   * 通知标题
   */
  title?: React.ReactNode;
  /**
   * 通知内容
   */
  content?: React.ReactNode;
  /**
   * 通知类型
   */
  type?: "info" | "error" | "warning" | "success";

  /**
   * 左上角 icon
   */
  icon?: React.ReactNode;

  /**
   * 左上角 icon 颜色
   */
  iconColor?: string;

  /**
   * 是否展示关闭按钮
   */
  showClose?: boolean;

  /**
   * 主动点击关闭按钮时的回调函数
   */
  onClickClose?: (id?: string) => void;
}

export type NotificationBuildFunc = (
  type: NotificationProps["type"],
  options?: Omit<NotificationProps, "type">
) => string;

export type NotificationBuiltInFunc = (
  options?: Omit<NotificationProps, "type"> & {
    duration?: number;
  }
) => string;
