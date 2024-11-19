"use client";

import React from "react";
import stylex from "@stylexjs/stylex";
import { Anchor, Layout } from "@design/core";
import ArticleMdx from "../_layouts/article-mdx";
import type { ArticleMatterProps } from "@/shared/parse-article";
import { HeadingTreeNode } from "@/shared/parse-headings";

export interface ArticleContainerProps {
  meta: ArticleMatterProps;

  content?: string;

  headings?: HeadingTreeNode[];
}

const styles = stylex.create({
  page: {
    width: "1280px",
    margin: "0 auto",
    backgroundColor: "#fff",
  },
  content: {
    padding: "16px",
    overflow: "hidden",
  },
  toc: {
    padding: "16px 10px",
    backgroundColor: "#fff",
  },
});

const ArticleContainer: React.FC<ArticleContainerProps> = (props) => {
  const { meta, content, headings } = props;

  return (
    <Layout stylex={styles.page}>
      <Layout.Content stylex={styles.content}>
        <ArticleMdx meta={meta} content={content} />
      </Layout.Content>
      <Layout.Sider sticky stylex={styles.toc} top={20}>
        <Anchor items={headings} />
      </Layout.Sider>
    </Layout>
  );
};

export default ArticleContainer;
