import React from "react";
import { Paper } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import Document from "../layouts/document";

interface QueryMDXPageData {
  mdx: {
    id: string;
  };
}

export const query = graphql`
  query MdxQuery($id: String!) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
      tableOfContents
    }
  }
`;

const ArticleTemplate: React.FC<PageProps<QueryMDXPageData>> = (props) => {
  const {
    data: { mdx },
    children,
  } = props;
  return (
    <Document>
      <Paper>
        <MDXProvider>{children}</MDXProvider>
      </Paper>
    </Document>
  );
};

export default ArticleTemplate;
