import React from "react";
import stylex from "@stylexjs/stylex";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import { Space, Tag, Typography } from "@design/core";
import { type ArticleMatterProps } from "@/shared/parse-article";
import "highlight.js/styles/atom-one-dark.min.css";

export interface ArticleMdxProps {
  meta: ArticleMatterProps;
  content?: string;
}

const styles = stylex.create({
  title: {
    marginBottom: 16,
  },
  image: {
    maxWidth: "100%",
  },
});

const ArticleMdx: React.FC<ArticleMdxProps> = (props) => {
  const { meta, content } = props;

  return (
    <div>
      <Typography tagName="h2" style={styles.title}>
        {meta.title}
      </Typography>
      <Typography tagName="div">{meta.description}</Typography>
      <Space>
        <Space>
          {meta.tags?.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Space>
        <span>{meta.date}</span>
      </Space>
      <div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeSlug]}
          components={{
            img(props) {
              const src = props.src as string;
              const alt = props.alt || "";
              if (!src) return null;
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={alt} {...stylex.props(styles.image)} />
              );
            },
            table(props) {
              return <table {...props} />;
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ArticleMdx;
