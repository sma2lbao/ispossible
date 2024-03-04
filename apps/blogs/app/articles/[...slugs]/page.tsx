import { notFound } from "next/navigation";
import matter from "gray-matter";
import { Affix, Anchor, NoSsr } from "@design/core";
import stylex from "@stylexjs/stylex";
import { HeadingTreeNode, parseHeadings } from "@/shared/parse-headings";
import {
  ArticleMatterProps,
  existFile,
  readContent,
} from "@/shared/parse-article";
import Document from "../../_layouts/document";
import ArticleMdx from "../../_layouts/article-mdx";

const styles = stylex.create({
  toc: {
    maxHeight: 600,
    overflow: "auto",
    padding: "16px 8px",
  },
});

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
    <Document
      sidebar={
        !!headings.length && (
          <NoSsr>
            <Anchor items={headings} style={styles.toc} />
          </NoSsr>
        )
      }
    >
      <ArticleMdx meta={meta} content={source.content} />
    </Document>
  );
}
