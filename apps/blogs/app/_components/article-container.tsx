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
  toc: {
    maxHeight: 600,
    overflow: "auto",
    padding: "16px 8px",
    backgroundColor: "#fff",
  },
  page: {
    width: "1100px",
    margin: "0 auto",
    backgroundColor: "#fff",
  },
});

const ArticleContainer: React.FC<ArticleContainerProps> = (props) => {
  const { meta, content, headings } = props;

  return (
    <Layout stylex={styles.page}>
      <Layout.Content>
        <ArticleMdx meta={meta} content={content} />
      </Layout.Content>
      <Layout.Sider>
        <Anchor items={headings} stylex={styles.toc} />
      </Layout.Sider>
    </Layout>
  );
};

export default ArticleContainer;
