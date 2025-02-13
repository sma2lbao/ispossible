import { type ArticleMeta } from "@/shared/parse-article";
import { List, Skeleton } from "@design/core";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/articles?category=${category}`, {
      method: "GET",
      headers: {},
    })
      .then((res) => res.json())
      .then((res) => {
        setArticles(res.data || []);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      <List hasLoadMore finished>
        {!loading
          ? articles.map((item) => {
              return (
                <List.Item key={item.slug}>
                  <ArticleCard article={item} style={styles.card} />
                </List.Item>
              );
            })
          : Array(6)
              .fill(null)
              .map((_, index) => (
                <List.Item key={index}>
                  <Skeleton
                    loading
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 200px",
                      gridAutoRows: "auto",
                      gridGap: "10px",
                      width: "100%",
                    }}
                    nodes={[
                      ["title", { style: { gridColumn: 1, gridRow: 1 } }],
                      [
                        "text",
                        {
                          rootStyle: { gridColumn: 1, gridRow: 2 },
                        },
                      ],
                      [
                        "button",
                        {
                          width: 60,
                          height: 20,
                          repeat: 3,
                          rootStyle: { gridColumn: 1, gridRow: 3 },
                        },
                      ],
                      ["image", { style: { gridColumn: 2, gridRow: "1 / 4" } }],
                    ]}
                  />
                </List.Item>
              ))}
      </List>
    </div>
  );
};

export default ArticleList;
