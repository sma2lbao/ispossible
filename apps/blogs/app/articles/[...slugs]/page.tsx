import { notFound } from "next/navigation";
import matter from "gray-matter";
import { HeadingTreeNode, parseHeadings } from "@/shared/parse-headings";
import {
  ArticleMatterProps,
  existFile,
  readContent,
} from "@/shared/parse-article";
import Document from "../../_layouts/document";
import ArticleContainer from "../../_components/article-container";

export default function ArticlePage({
  params,
}: {
  params: { slugs: string[] };
}) {
  const { slugs } = params;
  const exist = existFile(slugs);
  if (!exist) {
    return notFound();
  }

  const fileContent = readContent(slugs);
  const source = matter(fileContent);

  const headings: HeadingTreeNode[] = parseHeadings(source.content);
  const meta: ArticleMatterProps = source.data;

  return (
    <Document>
      <ArticleContainer
        meta={meta}
        headings={headings}
        content={source.content}
      />
    </Document>
  );
}
