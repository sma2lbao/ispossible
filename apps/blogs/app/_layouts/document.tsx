import React from "react";
import { Footer, Topbar } from "@design/pro";
import stylex from "@stylexjs/stylex";
import { useTheme, Theme } from "@design/core";
import Logo from "./logo";

export interface DocumentProps {
  children?: React.ReactNode;
}

const styles = stylex.create({
  root: (theme: Theme) => ({
    backgroundColor: theme.colors.background,
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
  }),
  body: {
    flex: 1,
  },
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
    <main {...stylex.props(styles.root(theme))}>
      <Topbar logo={<Logo />} />
      <div {...stylex.props(styles.body)}>
        <div {...stylex.props(styles.article)}>{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default Document;
