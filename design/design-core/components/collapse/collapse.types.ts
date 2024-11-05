import { StyleXStyles } from "@stylexjs/stylex";

export interface CollapseProps {
  /**
   * 初始化选中面板的 key
   */
  defaultActiveKey?: string | string[];

  /**
   * 受控属性, 当前展开的面板的 key
   */
  activeKey?: string | string[];

  /**
   * 手风琴模式
   */
  accordion?: boolean;

  /**
   * 自定义折叠图标
   */
  collapseIcon?: React.ReactNode;

  /**
   * 自定义展开图标
   */
  expandIcon?: React.ReactNode;

  children?: React.ReactNode;

  onChange?: (activeItemKey: string[]) => void;
}

export interface CollapsePanelProps {
  /**
   * 面板是否被禁用
   */
  disabled?: boolean;

  /**
   * 必填且唯一，选中状态匹配
   */
  itemKey: string;

  /**
   * 面板头内容
   */
  header?: React.ReactNode;

  children?: React.ReactNode;

  stylex?: StyleXStyles;
}

export interface CollapseContextProps
  extends Pick<CollapseProps, "collapseIcon" | "expandIcon"> {
  activeItemKeySet: Set<string>;

  onClickItem: (itemKey: string) => void;
}
