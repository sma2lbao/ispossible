export interface MenuItem {
  id: string;
  label: string;
  dirname: string;
  icon?: string;
  order?: number;
}

export const menus: MenuItem[] = [
  {
    id: "algorithm",
    dirname: "algorithm",
    label: "算法",
  },
  {
    id: "browser",
    dirname: "browser",
    label: "浏览器",
  },
  {
    id: "css",
    dirname: "css",
    label: "样式",
  },
  {
    id: "engine",
    dirname: "engine",
    label: "工程化",
  },
  {
    id: "frame",
    dirname: "frame",
    label: "框架",
  },
  {
    id: "http",
    dirname: "http",
    label: "Http协议",
  },
  {
    id: "javascript",
    dirname: "javascript",
    label: "Javascript",
  },
  {
    id: "network",
    dirname: "network",
    label: "网络",
  },
  {
    id: "programming-questions",
    dirname: "programming-questions",
    label: "编程题",
  },
  {
    id: "typescript",
    dirname: "typescript",
    label: "Typescript",
  },
  {
    id: "sql",
    dirname: "sql",
    label: "SQL",
  },
];
