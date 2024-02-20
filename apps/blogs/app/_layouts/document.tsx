import React from "react";
import { Footer, Topbar } from "@design/pro";
import stylex from "@stylexjs/stylex";
import { useTheme, Theme } from "@design/core";
import "normalize.css";
import "highlight.js/styles/atom-one-dark.min.css";

export interface DocumentProps {
  children?: React.ReactNode;
}

const styles = stylex.create({
  root: (theme: Theme) => ({
    backgroundColor: theme.colors.background,
  }),
  article: {
    backgroundColor: "#fff",
    maxWidth: 900,
    margin: "8px auto",
    overflow: "auto",
    padding: 24,
  },
});

const Document: React.FC<DocumentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <div {...stylex.props(styles.root(theme))}>
      <Topbar />
      <div {...stylex.props(styles.article)}>{children}</div>
      <Footer />
    </div>
  );
};

export default Document;
