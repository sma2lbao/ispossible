"use server";

import { type ArticleMeta, findArticleMetas } from "../../shared/parse-article";

async function findArticle(category: string) {
  return findArticleMetas(category);
}

export default findArticle;
