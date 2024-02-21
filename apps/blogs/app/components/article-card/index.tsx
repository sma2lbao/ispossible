"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArticleMeta } from "../../../shared/parse-article";

export interface ArticleCardProps {
  article: ArticleMeta;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const { article } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push(article.slug, { scroll: true });
  };

  return (
    <div onClick={handleClick}>
      <img src={article.poster} />
      <div>{article.title}</div>
      <div>{article.description}</div>
      <div>{article.date}</div>
      <div>{article.tags}</div>
    </div>
  );
};

export default ArticleCard;
