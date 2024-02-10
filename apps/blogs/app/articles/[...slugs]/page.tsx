import matter from "gray-matter";
import { notFound } from "next/navigation";
import { join, sep } from "path";
import { readFileSync } from "fs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeHighlight from "rehype-highlight";
import { MDX_DIRNAME, MDX_SUFFIX } from "../../../configs";
import Document from "../../_layouts/document";

interface ArticleMetaProps {
  title: string;
  description?: string;
  date?: string;
  poster?: string;
  tags?: string[];
}

export default function ArticlePage({
  params,
}: {
  params: { slugs: string[] };
}) {
  const { slugs } = params;
  const source = readFileSync(
    join(MDX_DIRNAME, `${slugs.join(sep)}${MDX_SUFFIX}`),
    {
      encoding: "utf-8",
    }
  );
  if (!source) {
    notFound();
  }
  const { data, content } = matter(source);
  return (
    <Document>
      <ReactMarkdown
        rehypePlugins={[rehypeHighlight]}
        remarkPlugins={[remarkGfm, remarkToc]}
      >
        {content}
      </ReactMarkdown>
    </Document>
  );
}
