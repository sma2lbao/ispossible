"use server";

import { findArticleMetas } from "@/shared/parse-article";

async function findArticle(category: string) {
  return findArticleMetas(category);
}
// 导出bug问题（https://github.com/vercel/next.js/issues/57966）
export default findArticle;
