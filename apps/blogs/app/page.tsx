"use client";

import { useState } from "react";
import { Tabs } from "@design/core";
import { menus } from "@/static/config";
import ArticleList from "./_components/article-list";
import Document from "./_layouts/document";

export default function Home() {
  const [category, setCategory] = useState<string>("algorithm");

  const handleTabChange = (dirname: string) => {
    setCategory(dirname);
  };

  return (
    <main>
      <Document>
        <Tabs
          activeId={category}
          items={menus.map((item) => ({
            id: item.dirname,
            label: item.label,
            children: <ArticleList key={item.dirname} category={category} />,
          }))}
          onChange={handleTabChange}
        />
      </Document>
    </main>
  );
}
