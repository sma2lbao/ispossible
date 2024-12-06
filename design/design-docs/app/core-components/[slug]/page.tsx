import StoryContainer from "@/app/_components/story-container";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  return <StoryContainer slug={slug} />;
}
