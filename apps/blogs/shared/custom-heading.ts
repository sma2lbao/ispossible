import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import type { Node } from "unist";
import {
  type HeadingTreeNode,
  type HeadingNode,
  buildTree,
} from "./parse-headings";

export { type HeadingTreeNode, type HeadingNode };

export interface CustomHeadingsProps {
  generate?: (value: HeadingTreeNode[]) => void;
  headings?: HeadingTreeNode[];
}

const customHeadings = (props: CustomHeadingsProps) => {
  const headings: HeadingNode[] = [];

  return (tree: Node) => {
    visit(tree, "heading", function (node) {
      const level: number = node["depth"];
      const label = toString(node);
      const headingNode: HeadingNode = {
        id: label,
        label,
        level,
        href: `#${label}`,
      };
      headings.push(headingNode);
    });
    const headingTree = buildTree(headings, 1)[0];
    props.generate?.(headingTree);
  };
};

export default customHeadings;
