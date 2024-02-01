import React from "react";
import { graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import stylex from "@stylexjs/stylex";
import { useTheme, type Theme } from "@design/core";
import Document from "../layouts/document";

import "normalize.css";
import { Tag } from "@design/core";

type TOCItem = {
  url: string;
  title: string;
  items?: TOCItem[];
};

interface QueryMDXPageData {
  mdx: {
    id: string;
    frontmatter: {
      title: string;
      description: string;
      date: string;
      poster: string;
      tags: string[];
    };
    tableOfContents: {
      items?: TOCItem[];
    };
  };
}

export const query = graphql`
  query MdxQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        description
        date
        poster
        tags
      }
      tableOfContents
    }
  }
`;

const styles = stylex.create({
  root: {
    backgroundColor: "#f6f6f6",
  },
  header: {
    width: "100%",
    fontSize: 0,
  },
  poster: {
    width: "100%",
    height: 450,
    objectFit: "cover",
  },
  content: {
    backgroundColor: "#fff",
    width: 900,
    overflow: "hidden",
    margin: "0 auto",
    padding: 24,
  },
  articleHeader: {},
  articleTitle: (theme: Theme) => ({
    fontSize: theme.typography.h1,
    lineHeight: 1.5,
  }),
  articleDescription: {
    margin: "8px 0",
  },
  date: {
    color: "#999",
    marginLeft: 4,
  },
});

const ArticleTemplate: React.FC<PageProps<QueryMDXPageData>> = (props) => {
  const {
    data: { mdx },
    children,
  } = props;
  const theme = useTheme();

  return (
    <Document>
      <div {...stylex.props(styles.header)}>
        <img {...stylex.props(styles.poster)} src={mdx.frontmatter.poster} />
      </div>
      <div {...stylex.props(styles.content)}>
        <div {...stylex.props(styles.articleHeader)}>
          <div {...stylex.props(styles.articleTitle(theme))}>
            {mdx.frontmatter.title}
          </div>
          <div {...stylex.props(styles.articleDescription)}>
            {mdx.frontmatter.description}
          </div>
          <div>
            {mdx.frontmatter.tags?.map((tag) => {
              return <Tag>{tag}</Tag>;
            })}
            <span {...stylex.props(styles.date)}>{mdx.frontmatter.date}</span>
          </div>
        </div>
        <MDXProvider>{children}</MDXProvider>
      </div>
    </Document>
  );
};

export default ArticleTemplate;
