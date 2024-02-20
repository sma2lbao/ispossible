import { Anchor, NoSsr } from "@design/core";
import { HeadingTreeNode } from "../../shared/custom-heading";

export interface TocProps {
  headings: HeadingTreeNode[];
}

const Toc: React.FC<TocProps> = (props) => {
  const { headings = [] } = props;

  return (
    <div>
      <NoSsr>
        <Anchor items={headings} />
      </NoSsr>
    </div>
  );
};

export default Toc;
