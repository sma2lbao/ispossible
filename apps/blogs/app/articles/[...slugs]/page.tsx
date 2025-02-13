import { notFound } from "next/navigation";
import matter from "gray-matter";
import { HeadingTreeNode, parseHeadings } from "@/shared/parse-headings";
import {
  ArticleMatterProps,
  existFile,
  readContent,
} from "@/shared/parse-article";
import ArticleContainer from "../../_components/article-container";

async function ArticlePage({ params }: { params: { slugs: string[] } }) {
  const slugs = (await params).slugs;
  const exist = existFile(slugs);
  if (!exist) {
    return notFound();
  }

  const fileContent = readContent(slugs);
  const source = matter(fileContent);

  const headings: HeadingTreeNode[] = parseHeadings(source.content);
  const meta: ArticleMatterProps = source.data;

  return (
    <ArticleContainer
      meta={meta}
      headings={headings}
      content={source.content}
    />
  );
}

export default ArticlePage;
