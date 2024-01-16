import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
import path from "path";

type GqlQueryResult = {
  allMdx: {
    edges: {
      node: { id: string; frontmatter?: { title?: string } };
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
  const result = await graphql<GqlQueryResult>(`
    query ArticlesQuery {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  console.log("result:", result);

  result.data?.allMdx.edges.forEach((edge) => {
    createPage({
      path: `${edge.node.slug}`,
      component: articleTemplate,
      context: {
        title: edge.node.title,
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
    console.log("value:", value);
    actions.createNodeField({
      name: "slug",
      node,
      value: `${value}`,
    });
  }
};
