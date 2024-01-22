import { GatsbyNode } from "gatsby";
import { createFilePath } from "gatsby-source-filesystem";
// @ts-ignore
import StylexPlugin from "@stylexjs/webpack-plugin";
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

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({
  actions,
  getConfig,
}) => {
  const config = getConfig();

  config.plugins.push(
    // Ensure that the stylex plugin is used before Babel
    new StylexPlugin({
      filename: "styles.[contenthash].css",
      // get webpack mode and set value for dev
      dev: config.mode === "development",
      // Use statically generated CSS files and not runtime injected CSS.
      // Even in development.
      // runtimeInjection: true,
      // optional. default: 'x'
      // classNamePrefix: "x",
      // Required for CSS variable support
      // unstable_moduleResolution: {
      //   // type: 'commonJS' | 'haste'
      //   // default: 'commonJS'
      //   type: "commonJS",
      //   // The absolute path to the root directory of your project
      //   rootDir: __dirname,
      // },
    })
  );

  actions.replaceWebpackConfig(config);
};

export const onCreateBabelConfig: GatsbyNode["onCreateBabelConfig"] = ({
  actions,
}) => {
  actions.setBabelPlugin({
    name: "@stylexjs/babel-plugin",
    options: {
      dev: true,
      // Set this to true for snapshot testing
      // default: false
      test: false,
      runtimeInjection: true,
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: "commonJS",
        // The absolute path to the root directory of your project
        rootDir: __dirname,
      },
    },
  });
};
