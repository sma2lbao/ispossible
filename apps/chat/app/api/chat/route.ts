import { vectorStore } from "@/agent/vector-store/supabase";
import { NextResponse } from "next/server";

export const GET = async () => {
  const filter = { source: "https://example.com" };

  const retriever = vectorStore.asRetriever({
    // Optional filter
    filter: filter,
    k: 2,
  });
  const result = await retriever.invoke("biology");

  console.log("result: ", result);

  return NextResponse.json({ data: true });
};
