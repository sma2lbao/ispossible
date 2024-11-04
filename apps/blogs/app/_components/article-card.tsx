"use client";

import React from "react";
import { useRouter } from "next/navigation";
import stylex, { type StyleXStyles } from "@stylexjs/stylex";
import { ArticleMeta } from "@/shared/parse-article";
import { Space, Tag, Typography } from "@design/core";

export interface ArticleCardProps {
  article: ArticleMeta;
  style?: StyleXStyles;
}

const styles = stylex.create({
  root: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    minHeight: 163,
    overflow: "hidden",
    borderBottom: `1px solid #ddd`,
  },
  content: {
    flex: 1,
  },
  image: {
    flexShrink: 0,
    marginLeft: 24,
    height: 130,
    aspectRatio: 4 / 3,
    overflow: "hidden",
    objectFit: "cover",
    borderRadius: 4,
  },
});

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const { style, article } = props;
  const { title, description, slug, date, tags, poster } = article;
  const router = useRouter();

  const handleClick = () => {
    router.push(slug, { scroll: true });
  };

  return (
    <div onClick={handleClick} {...stylex.props(styles.root, style)}>
      <Space direction="y" stylex={styles.content}>
        <Typography variant="title" size="lg">
          {title}
        </Typography>
        <Typography variant="body" size="md">
          {description || "这个人太懒了，什么也没写！"}
        </Typography>
        <Typography variant="label" size="sm">
          {date}
        </Typography>
        <Space size={8}>
          {tags?.map((text) => (
            <Tag key={text}>{text}</Tag>
          ))}
        </Space>
      </Space>

      {poster && (
        // eslint-disable-next-line @next/next/no-img-element
        <img {...stylex.props(styles.image)} src={poster} alt="poster" />
      )}
    </div>
  );
};

export default ArticleCard;
