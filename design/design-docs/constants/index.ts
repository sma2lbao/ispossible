export const STORYBOOK_IFRAME_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:6006/iframe.html"
    : "https://design-core.sma1lbao.cn/iframe.html";
