"use client";

import { Tabs, TabPane } from "@design/core";
import { menus } from "@/config/articles";
import ArticleList from "./article-list";
import { useCategory } from "./category-context";

const ArticleTabs = () => {
  const [category, setCategory] = useCategory();
  const handleTabChange = (dirname: string) => {
    setCategory(dirname);
  };

  return (
    <Tabs activeKey={category} onChange={handleTabChange}>
      {menus.map((item) => {
        return (
          <TabPane key={item.dirname} tab={item.label} itemKey={item.dirname}>
            <ArticleList key={item.dirname} category={category} />
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default ArticleTabs;
