import React from "react";
import stylex from "@stylexjs/stylex";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { Space, Tag, Typography } from "@design/core";
import Toc from "./toc";
import { type ArticleMatterProps, readContent } from "@/shared/parse-article";
import { type HeadingTreeNode, parseHeadings } from "@/shared/parse-headings";
import "highlight.js/styles/atom-one-dark.min.css";

export interface ArticleMdxProps {
  slugs: string[];
}

const styles = stylex.create({
  image: {
    maxWidth: "100%",
  },
});

const ArticleMdx: React.FC<ArticleMdxProps> = (props) => {
  const { slugs } = props;
  const fileContent = readContent(slugs);
  const source = matter(fileContent);

  const headings: HeadingTreeNode[] = parseHeadings(source.content);
  const meta: ArticleMatterProps = source.data;

  return (
    <div>
      <Typography tagName={"h2"}>{meta.title}</Typography>
      <Typography>{meta.description}</Typography>
      <div>
        <Space>
          {meta.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Space>
        <span>{meta.date}</span>
      </div>
      <div>
        {headings.length > 0 && <Toc headings={headings!} />}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeSlug]}
          children={source.content}
          components={{
            img(props) {
              const src = props.src as string;
              const alt = props.alt || "";
              if (!src) return null;
              return (
                <img src={src} alt={alt} {...stylex.props(styles.image)} />
              );
            },
          }}
        ></ReactMarkdown>
      </div>
    </div>
  );
};

export default ArticleMdx;
