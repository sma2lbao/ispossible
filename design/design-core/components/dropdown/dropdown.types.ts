export interface DropdownProps {
  /**
   * 是否自动在 active 的 Dropdown.Item 项左侧展示表示选中的勾
   * @default false
   */
  showTick?: boolean;

  /**
   * 通过传入 JSON Array 来快速配置 Dropdown 内容
   */
  menu?: DropdownMenuItemProps[];

  children: React.ReactNode;
}

export interface DropdownMenuProps {
  menu?: DropdownMenuItemProps[];
}

type MenuItemNodeType = "title" | "item" | "divider";

export interface DropdownMenuItemProps {
  node: MenuItemNodeType;
  children?: React.ReactNode;
  name?: string;
  active?: boolean;
  onClick?: () => void;
}

export interface DropdownContextProps {
  showTick: boolean;
  onClick: () => void;
}
