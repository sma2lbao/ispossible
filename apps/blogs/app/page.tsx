"use client";

import { type ArticleMeta } from "../shared/parse-article";
import ArticleCard from "./components/article-card";
import ArticleCategory from "./components/article-category";
import { useEffect, useState } from "react";
import findArticle from "./_actions/find-articles";

export default function Home() {
  const [category, setCategory] = useState<string>("javascript");
  const [articles, setArticles] = useState<ArticleMeta[]>([]);

  const handleCategoryChange = (dirname: string) => {
    setCategory(dirname);
  };

  useEffect(() => {
    findArticle(category).then((result) => {
      console.log("result: ", result);
      setArticles(result);
    });
  }, [category]);

  return (
    <main>
      <ArticleCategory category={category} onChange={handleCategoryChange} />
      <div>
        {articles.map((item) => {
          return <ArticleCard article={item} key={item.slug} />;
        })}
      </div>
    </main>
  );
}
