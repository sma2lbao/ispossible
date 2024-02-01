import React from "react";
import { Footer } from "@design/pro";
import stylex from "@stylexjs/stylex";
import { useTheme, Theme } from "@design/core";

export interface DocumentProps {
  children?: React.ReactNode;
}

const styles = stylex.create({
  root: (theme: Theme) => ({
    backgroundColor: theme.colors.background,
  }),
});

const Document: React.FC<DocumentProps> = (props) => {
  const { children } = props;
  const theme = useTheme();
  return (
    <div {...stylex.props(styles.root(theme))}>
      {children}
      <Footer />
    </div>
  );
};

export default Document;
