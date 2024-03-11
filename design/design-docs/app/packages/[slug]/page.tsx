import Document from "@/app/_layouts/document";
import StoryContainer from "@/app/_components/story-container";
import { notFound } from "next/navigation";
import { stories } from "@/config";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  if (!stories.find((item) => item.id === decodeURIComponent(slug))) {
    return notFound();
  }

  return (
    <Document>
      <StoryContainer slug={slug} stories={stories} />
    </Document>
  );
}
