import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";

type GqlQueryResult = {
  allMdx: {
    edges: {
      node: {
        id: string;
        fields: { slug: string };
        frontmatter?: { title?: string };
        internal: { contentFilePath: string };
      };
      previous?: {
        id: string;
        fields: { slug: string };
        frontmatter?: { title?: string };
      };
      next?: {
        id: string;
        fields: { slug: string };
        frontmatter?: { title?: string };
      };
    }[];
  };
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(
    __dirname,
    `src/templates/article.template.tsx`
  );
  const { data } = await graphql<GqlQueryResult>(`
    query ArticlesQuery {
      allMdx {
        edges {
          previous {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            internal {
              contentFilePath
            }
          }
          next {
            id
            fields {
              slug
            }
            frontmatter {
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);

  data?.allMdx.edges.forEach((edge) => {
    createPage({
      path: edge.node.fields.slug,
      component: `${articleTemplate}?__contentFilePath=${edge.node.internal.contentFilePath}`,
      context: {
        title: edge.node.frontmatter?.title,
        id: edge.node.id,
      },
    });
  });
};

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  getNode,
  actions,
}) => {
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    actions.createNodeField({
      name: "slug",
      node,
      value: `/articles${value}`,
    });
  }
};
