import { type ArticleMeta } from "@/shared/parse-article";
import { List } from "@design/core";
import React, { useEffect, useState } from "react";
import stylex from "@stylexjs/stylex";
import ArticleCard from "./article-card";

export interface ArticleListPorps {
  category: string;
}

const styles = stylex.create({
  card: {
    marginBottom: 0,
  },
});

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
      <List hasLoadMore finished>
        {articles.map((item) => {
          return (
            <List.Item key={item.slug}>
              <ArticleCard article={item} style={styles.card} />
            </List.Item>
          );
        })}
      </List>
    </div>
  );
};

export default ArticleList;
