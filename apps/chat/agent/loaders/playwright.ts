import {
  PlaywrightWebBaseLoader,
  Page,
} from "@langchain/community/document_loaders/web/playwright";

const loader = new PlaywrightWebBaseLoader("https://www.baidu.com/", {
  launchOptions: {
    headless: true,
  },
  gotoOptions: {
    waitUntil: "domcontentloaded",
  },
  async evaluate(page: Page) {
    const result = await page.evaluate(() => document.body.innerHTML);
    return result;
  },
});

export const docs = await loader.load();
