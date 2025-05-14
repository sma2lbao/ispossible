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
   * 是否思考中
   */
  thinking?: boolean;

  /**
   * 思路
   */
  thought?: string;

  /**
   * 原始文本
   */
  rawContent?: string;

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
}

export interface IChatProps {
  className?: string;

  style?: React.CSSProperties;

  stylex?: StyleXStyles;

  messages?: IMessage[];

  /**
   * 输出中
   */
  loading?: boolean;

  /**
   * 发送消息时触发
   * @returns
   */
  onMessageSend?: (message: string) => void;
}

export interface IInputAreaProps {
  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * @param message 提问信息
   * @returns
   */
  onSend?: (message: string) => void;
}

export interface IMessageArea {
  messages: IMessageProps[];
}
