import React from "react";
import { Footer, Topbar } from "@design/pro";
import stylex from "@stylexjs/stylex";
import { Affix } from "@design/core";
import Logo from "./logo";

export interface DocumentProps {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
}

const styles = stylex.create({
  root: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    minHeight: "100%",
  },
  body: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: "8px",
    alignItems: "flex-start",
  },
  article: {
    backgroundColor: "#fff",
    width: 1100,
    overflow: "auto",
    padding: 24,
  },
  sidebar: {
    width: 210,
    marginLeft: 8,
  },
});

const Document: React.FC<DocumentProps> = (props) => {
  const { children, sidebar } = props;
  return (
    <div {...stylex.props(styles.root)}>
      <Topbar logo={<Logo />} />
      <div {...stylex.props(styles.body)}>
        <div {...stylex.props(styles.article)}>{children}</div>
        {sidebar && (
          <div {...stylex.props(styles.sidebar)}>
            <Affix offset={8}>{sidebar}</Affix>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Document;
