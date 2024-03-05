import Document from "@/app/_layouts/document";
import StoryContainer from "@/app/_components/story-container";
import findStories from "@/actions/find-stories";
import { notFound } from "next/navigation";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const stories = await findStories();

  if (!stories.find((item) => item.id === decodeURIComponent(slug))) {
    return notFound();
  }

  return (
    <Document>
      <StoryContainer slug={slug} stories={stories} />
    </Document>
  );
}
