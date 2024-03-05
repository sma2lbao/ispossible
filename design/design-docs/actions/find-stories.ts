"use server";

import { STORYBOOK_DATA_JSON_URL } from "@/constants";

export interface StoriesDocument {
  id: string;
  title: string;
  name: string;
  kind: string;
  story: string;
}

async function findStories(): Promise<StoriesDocument[]> {
  return fetch(STORYBOOK_DATA_JSON_URL, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      const stories = data.stories as Record<string, StoriesDocument>;
      const documents = Object.values(stories).filter(
        (item: StoriesDocument) => item.story === "Docs"
      );
      return documents || [];
    })
    .catch(() => {
      return [];
    });
}

export default findStories;
