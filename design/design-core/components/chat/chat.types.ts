import type { StyleXStyles } from "@stylexjs/stylex";

export type Role = "user" | "assistant" | "system";

export interface IMessage {
  /**
   * 角色
   */
  role: Role | string;

  /**
   * 名称
   */
  name?: string;

  /**
   * 唯一标识
   */
  id: string;

  /**
   * 文本内容
   */
  content: string;

  /**
   * 创建时间
   */
  createAt?: string;
}

export interface IMessageProps extends IMessage {
  /**
   * 是否需要标识
   * @default 'true'
   */
  isIdentify?: boolean;

  /**
   * 是否思考中
   */
  thinking?: boolean;
}

export interface IChatProps {
  className?: string;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;

  /**
   * 发送消息时触发
   * @returns
   */
  onMessageSend?: () => void;
}

export interface IInputAreaProps {
  /**
   * @param message 提问信息
   * @returns
   */
  onSend?: (message?: string) => void;
}
