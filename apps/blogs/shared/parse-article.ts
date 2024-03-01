import { basename, join, sep } from "path";
import { MDX_DIRNAME, MDX_SUFFIX } from "../constants";
import { existsSync, readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

export interface ArticleMatterProps {
  title?: string;
  description?: string;
  date?: string;
  poster?: string;
  tags?: string[];
}

// 通过 slugs 获取原始内容
export const readContent = (slugs: string[]) => {
  const filePath = join(
    process.cwd(),
    MDX_DIRNAME,
    `${slugs.join(sep)}${MDX_SUFFIX}`
  );
  return readFileSync(filePath, {
    encoding: "utf-8",
  });
};

// 是否存在该mdx
export const existFile = (slugs: string[]) => {
  const filePath = join(
    process.cwd(),
    MDX_DIRNAME,
    `${slugs.join(sep)}${MDX_SUFFIX}`
  );
  return existsSync(filePath);
};

export interface ArticleMeta extends ArticleMatterProps {
  filePath: string;
  slug: string;
}

// 通过单个目录名获取该目录下的所有mdx文件的基础信息
export const findArticleMetas = (dirname: string): ArticleMeta[] => {
  const result: ArticleMeta[] = [];
  const dirnamePath = join(process.cwd(), MDX_DIRNAME, dirname);
  console.log("dirnamePath: ", dirnamePath);
  if (!existsSync(dirnamePath)) {
    return result;
  }
  const files = readdirSync(dirnamePath, {
    recursive: false,
    encoding: "utf-8",
  }).filter((file) => file.endsWith(MDX_SUFFIX));

  files.forEach((file) => {
    const filePath = join(process.cwd(), MDX_DIRNAME, dirname, file);
    let fileName = basename(file, MDX_SUFFIX);
    const slug = `/articles/${dirname}/${fileName}`;
    const fileContent = readFileSync(filePath, {
      encoding: "utf-8",
    });
    const { data } = matter(fileContent);
    result.push({
      filePath,
      slug,
      title: data["title"],
      description: data["description"],
      date: data["date"],
      poster: data["poster"],
      tags: data["tags"],
    });
  });
  return result;
};
