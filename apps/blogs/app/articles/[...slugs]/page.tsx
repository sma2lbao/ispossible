import matter from "gray-matter";
import { notFound } from "next/navigation";
import { join, sep } from "path";
import { existsSync, readFileSync } from "fs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { MDX_DIRNAME, MDX_SUFFIX } from "../../../configs";
import Document from "../../_layouts/document";
import Toc from "../../_layouts/toc";
import {
  parseHeadings,
  type HeadingTreeNode,
} from "../../../shared/parse-headings";
import stylex from "@stylexjs/stylex";

interface ArticleMetaProps {
  title: string;
  description?: string;
  date?: string;
  poster?: string;
  tags?: string[];
}

const styles = stylex.create({
  image: {
    maxWidth: "100%",
  },
});

export default function ArticlePage({
  params,
}: {
  params: { slugs: string[] };
}) {
  const { slugs } = params;
  const filePath = join(MDX_DIRNAME, `${slugs.join(sep)}${MDX_SUFFIX}`);
  const exist = existsSync(filePath);
  if (!exist) {
    notFound();
  }
  const fileContent = readFileSync(filePath, {
    encoding: "utf-8",
  });
  const source = matter(fileContent);

  let headings: HeadingTreeNode[] = parseHeadings(source.content);

  return (
    <Document>
      {headings.length && <Toc headings={headings!} />}
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight, rehypeSlug]}
        children={source.content}
        components={{
          img(props) {
            const src = props.src as string;
            const alt = props.alt || "";
            if (!src) return null;
            return <img src={src} alt={alt} {...stylex.props(styles.image)} />;
          },
        }}
      ></ReactMarkdown>
    </Document>
  );
}
