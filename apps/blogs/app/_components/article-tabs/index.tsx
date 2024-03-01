"use client";

import { useState } from "react";
import { Tabs } from "@design/core";
import { menus } from "@/config/articles";
import ArticleList from "../article-list";

const ArticleTabs = () => {
  const [category, setCategory] = useState<string>("algorithm");
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
