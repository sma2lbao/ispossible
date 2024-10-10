import Document from "@/app/_layouts/document";
import StoryContainer from "@/app/_components/story-container";
import { stories } from "@/config";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return (
    <Document>
      <StoryContainer slug={slug} stories={stories} />
    </Document>
  );
}
