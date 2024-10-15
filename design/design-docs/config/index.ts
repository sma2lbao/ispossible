export interface StoryItem {
  id: string;
  path: string;
  title: string;
}

export const stories: StoryItem[] = [
  { id: "button", path: "button-按钮--docs", title: "Button 按钮" },
  { id: "affix", path: "affix-固钉--docs", title: "Affix 固钉" },
  { id: "anchor", path: "anchor-锚点--docs", title: "Anchor 锚点" },
  { id: "avatar", path: "avatar-头像--docs", title: "Avatar 头像" },
  {
    id: "breadcrumb",
    path: "breadcrumb-面包屑--docs",
    title: "Breadcrumb 面包屑",
  },
  { id: "input", path: "input-输入框--docs", title: "Input 输入框" },
  { id: "checkbox", path: "checkbox-多选框--docs", title: "Checkbox 多选框" },
  { id: "switch", path: "switch-开关--docs", title: "Switch 开关" },
  {
    id: "collapse",
    path: "collapse-折叠面板--docs",
    title: "Collapse 折叠面板",
  },
  { id: "divider", path: "divider-分隔线--docs", title: "Divider 分隔线" },
  { id: "link", path: "link-链接--docs", title: "Link 链接" },
  { id: "menu", path: "menu-导航菜单--docs", title: "Menu 导航菜单" },
  { id: "popover", path: "popover-气泡卡片--docs", title: "Popover 气泡卡片" },
  { id: "space", path: "space-间距--docs", title: "Space 间距" },
  { id: "tabs", path: "tabs-标签页--docs", title: "Tabs 标签页" },
  { id: "tag", path: "tag-标签--docs", title: "Tag 标签" },
  { id: "tooltip", path: "tooltip-文字提示--docs", title: "Tooltip 文字提示" },
  { id: "tree", path: "tree-树形控件--docs", title: "Tree 树形控件" },
  { id: "typography", path: "typography-排版--docs", title: "Typography 排版" },
  { id: "watermark", path: "watermark-水印--docs", title: "Watermark 水印" },
];
