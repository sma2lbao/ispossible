import path from "path";
import { MDX_DIRNAME, MDX_SUFFIX } from "../constants";
import { existsSync, readFileSync, readdirSync } from "fs";
import matter from "gray-matter";

export interface ArticleMatterProps {
  title?: string;
  description?: string;
  date?: string;
  poster?: string;
  tags?: string[];
  summary?: string;
}

/**
 * 通过 slugs 获取原始内容
 * @param slugs
 * @returns
 */
export const readContent = (slugs: string[]) => {
  const filePath = path.join(
    process.cwd(),
    MDX_DIRNAME,
    `${slugs.join(path.sep)}${MDX_SUFFIX}`
  );
  return readFileSync(filePath, {
    encoding: "utf-8",
  });
};

/**
 * 是否存在该mdx
 * @param slugs
 * @returns
 */
export const existFile = (slugs: string[]) => {
  const filePath = path.join(
    process.cwd(),
    MDX_DIRNAME,
    `${slugs.join(path.sep)}${MDX_SUFFIX}`
  );
  return existsSync(filePath);
};

export interface ArticleMeta extends ArticleMatterProps {
  filePath: string;
  slug: string;
}

/**
 * 通过单个目录名获取该目录下的所有mdx文件的基础信息
 * @param dirname 目录名
 * @returns
 */
export const findArticleMetas = (dirname: string): ArticleMeta[] => {
  const result: ArticleMeta[] = [];
  const dirnamePath = path.join(process.cwd(), MDX_DIRNAME, dirname);
  if (!existsSync(dirnamePath)) {
    return result;
  }
  const files = readdirSync(dirnamePath, {
    recursive: false,
    encoding: "utf-8",
  }).filter((file) => file.endsWith(MDX_SUFFIX));

  files.forEach((file) => {
    const filePath = path.join(process.cwd(), MDX_DIRNAME, dirname, file);
    let fileName = path.basename(file, MDX_SUFFIX);
    const slug = `/articles/${dirname}/${fileName}`;
    const fileContent = readFileSync(filePath, {
      encoding: "utf-8",
    });
    const { data, content } = matter(fileContent);

    const nextContent = removeMarkdown(content);

    const MAX_WORDS = 240;

    // 获取纯文本内容
    const summary =
      nextContent.length > MAX_WORDS
        ? nextContent.slice(0, MAX_WORDS) + "..."
        : nextContent;

    result.push({
      filePath,
      slug,
      title: data["title"],
      description: data["description"],
      date: data["date"],
      poster: data["poster"],
      tags: data["tags"],
      summary,
    });
  });
  return result;
};

/**
 * 清理 Markdown 标签，保留纯文本
 * @param md
 * @returns
 */
const removeMarkdown = (md: string) =>
  md
    .replace(/```[\s\S]*?```/g, "") // 移除代码块
    .replace(/`.*?`/g, "") // 移除行内代码
    .replace(/!\[.*?\]\(.*?\)/g, "") // 移除图片
    .replace(/\[.*?\]\(.*?\)/g, "") // 移除链接
    .replace(/\|.*?\|/g, "") // 移除表格行
    .replace(/[#>*_`~\-]/g, "") // 移除 Markdown 特殊字符
    .replace(/\n+/g, "\n") // 保留段落分隔符
    .trim();
