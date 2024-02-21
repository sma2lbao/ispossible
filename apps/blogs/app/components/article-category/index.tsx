"use client";

import { Menu } from "@design/core";
import { menus } from "../../../mdxs/config";

export interface ArticleCategoryProps {
  category: string;
  onChange?: (dirname: string) => void;
}

const ArticleCategory: React.FC<ArticleCategoryProps> = (props) => {
  const { category, onChange } = props;
  const items = menus.map((item) => ({
    id: item.dirname,
    label: item.title,
  }));

  const handleSelect = (ids: string[]) => {
    const dirname = ids[0];
    if (category !== dirname) {
      onChange?.(dirname);
    }
    // if (dirname && category !== dirname) {
    //   const params = new URLSearchParams(searchParams.toString());
    //   params.set("category", dirname);
    //   window.history.replaceState(null, "", `?${params.toString()}`);
    // }
  };

  return (
    <div>
      <Menu mode="y" items={items} onSelect={handleSelect} />
    </div>
  );
};

export default ArticleCategory;
