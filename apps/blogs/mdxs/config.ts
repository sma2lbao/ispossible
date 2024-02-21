export interface MenuItem {
  id: string;
  title: string;
  dirname: string;
  icon?: string;
  order?: number;
}

export const menus: MenuItem[] = [
  {
    id: "algorithm",
    dirname: "algorithm",
    title: "算法",
  },
  {
    id: "browser",
    dirname: "browser",
    title: "浏览器",
  },
  {
    id: "css",
    dirname: "css",
    title: "样式",
  },
  {
    id: "engine",
    dirname: "engine",
    title: "工程化",
  },
  {
    id: "frame",
    dirname: "frame",
    title: "框架",
  },
  {
    id: "http",
    dirname: "http",
    title: "Http协议",
  },
  {
    id: "javascript",
    dirname: "javascript",
    title: "Javascript",
  },
  {
    id: "network",
    dirname: "network",
    title: "网络",
  },
  {
    id: "programming-questions",
    dirname: "programming-questions",
    title: "编程题",
  },
  {
    id: "typescript",
    dirname: "typescript",
    title: "Typescript",
  },
];
