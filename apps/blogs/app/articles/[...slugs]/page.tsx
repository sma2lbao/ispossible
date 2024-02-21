import { notFound } from "next/navigation";
import stylex from "@stylexjs/stylex";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { parseHeadings, type HeadingTreeNode } from "@/shared/parse-headings";
import { existFile, readContent } from "@/shared/parse-article";
import Document from "../../_layouts/document";
import Toc from "../../_layouts/toc";

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
  const exist = existFile(slugs);
  if (!exist) {
    return notFound();
  }
  const fileContent = readContent(slugs);
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
