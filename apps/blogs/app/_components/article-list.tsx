import { ArticleMeta } from "@/shared/parse-article";
import React, { useEffect, useState } from "react";
import ArticleCard from "./article-card";

export interface ArticleListPorps {
  category: string;
}

const ArticleList: React.FC<ArticleListPorps> = (props) => {
  const { category } = props;
  const [articles, setArticles] = useState<ArticleMeta[]>([]);

  useEffect(() => {
    fetch(`/api/articles?category=${category}`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.data || []);
      });
  }, [category]);

  return (
    <div>
      {articles.map((item) => {
        return <ArticleCard article={item} key={item.slug} />;
      })}
    </div>
  );
};

export default ArticleList;
