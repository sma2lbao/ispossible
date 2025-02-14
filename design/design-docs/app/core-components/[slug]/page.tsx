import StoryContainer from "@/app/_components/story-container";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return <StoryContainer slug={slug} />;
}
