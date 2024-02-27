import { notFound } from "next/navigation";
import { existFile } from "@/shared/parse-article";
import Document from "../../_layouts/document";
import ArticleMdx from "../../_layouts/article-mdx";

export default function ArticlePage({
  params,
}: {
  params: { slugs: string[] };
}) {
  const { slugs } = params;
  const exist = existFile(slugs);
  if (!exist) {
    return notFound();
  }

  return (
    <Document>
      <ArticleMdx slugs={slugs} />
    </Document>
  );
}
