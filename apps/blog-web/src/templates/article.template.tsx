import React from "react";
import { Paper } from "@mui/material";
import { graphql, PageProps } from "gatsby";
import { MDXProvider } from "@mdx-js/react";

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
    <Paper>
      <MDXProvider>{children}</MDXProvider>
    </Paper>
  );
};

export default ArticleTemplate;
