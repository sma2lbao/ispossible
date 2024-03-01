"use client";

import { Tabs } from "@design/core";
import { menus } from "@/config/articles";
import ArticleList from "./article-list";
import { useCategory } from "./category-context";

const ArticleTabs = () => {
  const [category, setCategory] = useCategory();
  const handleTabChange = (dirname: string) => {
    setCategory(dirname);
  };

  return (
    <Tabs
      activeId={category}
      items={menus.map((item) => ({
        id: item.dirname,
        label: item.label,
        children: <ArticleList key={item.dirname} category={category} />,
      }))}
      onChange={handleTabChange}
    />
  );
};

export default ArticleTabs;
