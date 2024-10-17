import { CSSProperties, ReactNode } from "react";

export interface NavProps {
  /**
   * 菜单类型，现在支持垂直、水平、和内嵌模式三种
   * @default inline
   */
  mode?: "x" | "y" | "inline";

  items?: ItemType[];
  /**
   * inline 模式时是否展开
   */
  isCollapsed?: boolean;

  onSelect?: (data: OnSelectData) => void;

  children?: ReactNode;

  style?: CSSProperties;
}

export type ItemType = SubNavProps | NavItemProps;

export type ItemKey = string | number;

export interface OnSelectData {
  itemKey: ItemKey;
  selectedKeys: any[];
}

/**
 * 子菜单和菜单项共用
 */
export interface BaseItemProps {
  /**
   * 唯一标识
   */
  itemKey: ItemKey;
  /**
   *
   */
  text?: React.ReactNode;
  /**
   * 图标
   */
  icon?: ReactNode;
  /**
   * 是否禁用
   */
  disabled?: boolean;
}
/**
 * 子菜单
 */
export interface SubNavProps extends BaseItemProps {
  /**
   * inline 模式时是否展开
   */
  isCollapsed?: boolean;

  children?: ReactNode;

  items?: (SubNavProps | NavItemProps)[];
}
/**
 * 菜单项
 */
export interface NavItemProps extends BaseItemProps {
  /**
   * 切换后图标
   */
  toggleIcon?: React.ReactNode;
}

export function isSubNavProps(config: ItemType): config is SubNavProps {
  return "items" in config || ("children" in config && !!config.children);
}
