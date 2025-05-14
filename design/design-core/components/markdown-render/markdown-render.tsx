import { evaluateSync } from "@mdx-js/mdx";
import React from "react";
import runtime from "react/jsx-runtime";
import remarkGfm from "remark-gfm";
import * as Components from "./components";
import type { IMarkdownRenderProps } from "./markdown-render.types";

export const MarkdownRender: React.FC<IMarkdownRenderProps> = (props) => {
  const { raw } = props;

  const Componet = evaluateSync(raw, {
    format: "mdx",
    remarkPlugins: [remarkGfm],
    ...runtime,
  }).default;

  return (
    <div>
      <Componet components={{ ...Components }} />
    </div>
  );
};
