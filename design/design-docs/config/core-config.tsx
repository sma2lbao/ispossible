import type { NavItemType } from "@design/core";

export type NavConfigItemType = NavItemType & {
  path?: string;
};

export const navConfig: NavConfigItemType[] = [
  // {
  //   itemKey: "begin",
  //   text: "开始",
  //   items: [

  //   ],
  // },
  {
    itemKey: "basic",
    text: "基础类",
    items: [
      {
        itemKey: "divider",
        path: "divider-分隔线--docs",
        text: "Divider 分隔线",
      },
      {
        itemKey: "button",
        path: "button-按钮--docs",
        text: "Button 按钮",
      },
      {
        itemKey: "space",
        path: "space-间距--docs",
        text: "Space 间距",
      },
      {
        itemKey: "typography",
        path: "typography-排版--docs",
        text: "Typography 排版",
      },
      {
        itemKey: "grid",
        path: "grid-栅格--docs",
        text: "Grid 栅格",
      },
    ],
  },
  {
    itemKey: "form",
    text: "表单类",
    items: [
      {
        itemKey: "form",
        path: "form-表单--docs",
        text: "Form 表单",
      },
      {
        itemKey: "upload",
        path: "upload-上传--docs",
        text: "Upload 上传",
      },
      {
        itemKey: "checkbox",
        path: "checkbox-多选框--docs",
        text: "Checkbox 多选框",
      },
      { itemKey: "input", path: "input-输入框--docs", text: "Input 输入框" },
      { itemKey: "select", path: "select-选择器--docs", text: "Select 选择器" },
      { itemKey: "radio", path: "radio-单选框--docs", text: "Radio 单选框" },
      { itemKey: "switch", path: "switch-开关--docs", text: "Switch 开关" },
    ],
  },
  {
    itemKey: "nav",
    text: "导航类",
    items: [
      { itemKey: "anchor", path: "anchor-锚点--docs", text: "Anchor 锚点" },
      {
        itemKey: "breadcrumb",
        path: "breadcrumb-面包屑--docs",
        text: "Breadcrumb 面包屑",
      },
      {
        itemKey: "navigation",
        path: "navigation-导航--docs",
        text: "Navigation 导航",
      },
      {
        itemKey: "pagination",
        path: "pagination-分页--docs",
        text: "Pagination 分页",
      },
      { itemKey: "tabs", path: "tabs-标签页--docs", text: "Tabs 标签页" },
      { itemKey: "affix", path: "affix-固钉--docs", text: "Affix 固钉" },
    ],
  },
  {
    itemKey: "feature",
    text: "展示类",
    items: [
      { itemKey: "avatar", path: "avatar-头像--docs", text: "Avatar 头像" },

      { itemKey: "tag", path: "tag-标签--docs", text: "Tag 标签" },
      {
        itemKey: "collapse",
        path: "collapse-折叠面板--docs",
        text: "Collapse 折叠面板",
      },
      {
        itemKey: "table",
        path: "table-表格--docs",
        text: "Table 表格",
      },
      {
        itemKey: "skeleton",
        path: "skeleton-骨架屏--docs",
        text: "Skeleton 骨架屏",
      },
      {
        itemKey: "watermark",
        path: "watermark-水印--docs",
        text: "Watermark 水印",
      },
      {
        itemKey: "dropdown",
        path: "dropdown-下拉框--docs",
        text: "Dropdown 下拉框",
      },
      {
        itemKey: "tooltip",
        path: "tooltip-文字提示--docs",
        text: "Tooltip 文字提示",
      },
      { itemKey: "drawer", path: "drawer-抽屉--docs", text: "Drawer 抽屉" },
      { itemKey: "list", path: "list-列表--docs", text: "List 列表" },
      { itemKey: "image", path: "image-图片--docs", text: "Image 图片" },
      {
        itemKey: "progress",
        path: "progress-进度条--docs",
        text: "Progress 进度条",
      },
    ],
  },
  {
    itemKey: "feedback",
    text: "反馈类",
    items: [
      {
        itemKey: "notification",
        path: "notification-消息通知--docs",
        text: "Notification 消息通知",
      },
      {
        itemKey: "popover",
        path: "popover-气泡卡片--docs",
        text: "Popover 气泡卡片",
      },
      {
        itemKey: "modal",
        path: "modal-模态对话框--docs",
        text: "Modal 模态对话框",
      },
      { itemKey: "toast", path: "toast-提示--docs", text: "Toast 提示" },
      { itemKey: "alert", path: "alert-提示--docs", text: "Alert 提示" },
    ],
  },
  {
    itemKey: "other",
    text: "其他",
    items: [
      { itemKey: "tree", path: "tree-树形控件--docs", text: "Tree 树形控件" },
    ],
  },
];
