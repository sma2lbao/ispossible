import Document from "./_layouts/document";
import ArticleTabs from "./_components/article-tabs";
import stylex from "@stylexjs/stylex";

export default function Home() {
  return (
    <Document>
      <div style={{ width: "1280px", margin: "0 auto" }}>
        <ArticleTabs />
      </div>
    </Document>
  );
}
