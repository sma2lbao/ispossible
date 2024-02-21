"use client";

import { useState } from "react";
import { Tabs } from "@design/core";
import { menus } from "@/mdxs/config";
import ArticleList from "./_components/article-list";

export default function Home() {
  const [category, setCategory] = useState<string>("algorithm");

  const handleTabChange = (dirname: string) => {
    setCategory(dirname);
  };

  return (
    <main>
      <Tabs
        activeId={category}
        items={menus.map((item) => ({
          id: item.dirname,
          label: item.label,
          children: <ArticleList category={category} />,
        }))}
        onChange={handleTabChange}
      />
    </main>
  );
}
