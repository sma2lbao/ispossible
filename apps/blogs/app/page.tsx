import Document from "./_layouts/document";
import ArticleTabs from "./_components/article-tabs";
import stylex from "@stylexjs/stylex";

const styles = stylex.create({
  page: {
    width: "1100px",
    margin: "0 auto",
  },
});

export default function Home() {
  return (
    <Document>
      <div {...stylex.props(styles.page)}>
        <ArticleTabs />
      </div>
    </Document>
  );
}
