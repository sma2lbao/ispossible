"use client";

import React from "react";
import { useRouter } from "next/navigation";
import stylex from "@stylexjs/stylex";
import { ArticleMeta } from "@/shared/parse-article";
import { Space, Tag } from "@design/core";

export interface ArticleCardProps {
  article: ArticleMeta;
}

const styles = stylex.create({
  root: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
    minHeight: 163,
    overflow: "hidden",
    marginBottom: 24,
    padding: 8,
    borderRadius: 8,
  },
  content: {
    flex: 1,
  },
  image: {
    flexShrink: 0,
    marginLeft: 12,
    width: 217,
    height: 163,
    overflow: "hidden",
    objectFit: "cover",
    borderRadius: 8,
  },
});

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const { article } = props;
  const router = useRouter();

  const handleClick = () => {
    router.push(article.slug, { scroll: true });
  };

  return (
    <div onClick={handleClick} {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.content)}>
        <div>{article.title}</div>
        <div>{article.description}</div>
        <div>{article.date}</div>
        <Space size={8}>
          {article.tags?.map((text) => (
            <Tag key={text}>{text}</Tag>
          ))}
        </Space>
      </div>
      <img {...stylex.props(styles.image)} src={article.poster} />
    </div>
  );
};

export default ArticleCard;
