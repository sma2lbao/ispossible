export type TagType = "ghost" | "solid" | "light";
export type TagShape = "circle" | "square";

export interface TagProps {
  /**
   * React 需要的 key，作为每个标签的唯一标识，不允许重复
   */
  tagKey?: string | number;

  children: React.ReactNode;
  /**
   * 标签色
   */
  color?: string;

  /**
   * 标签的样式类型，可选 ghost、 solid、 light
   * @default light
   */
  type?: TagType;

  /**
   * 标签的形状，可选 square、 circle
   * @default square
   *
   */
  shape?: TagShape;

  /**
   * 前缀图标
   */
  prefixIcon?: React.ReactNode;

  /**
   * 后缀图标
   */
  suffixIcon?: React.ReactNode;

  /**
   * 标签是否可以关闭
   */
  closeable?: boolean;

  /**
   * 头像的资源地址
   */
  avatarSrc?: string;

  /**
   * 单击标签时的回调函数
   * @param e
   * @returns
   */
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;

  /**
   * 关闭标签时的回调函数
   * @param tagChildren
   * @param e
   * @param tagKey
   * @returns
   */
  onClose?: (
    tagChildren: React.ReactNode,
    e: React.MouseEvent<HTMLElement>,
    tagKey?: string | number
  ) => void;
}

export interface TagGroupProps {
  /**
   * 最大数量限制，超出后显示为 +N
   */
  maxTagCount?: number;

  tagList: ({ label: string } & Omit<TagProps, "children" | "closeable">)[];

  onTagClose?: (
    tagChildren: React.ReactNode,
    e: React.MouseEvent<HTMLElement>,
    tagKey?: string | number
  ) => void;
}
