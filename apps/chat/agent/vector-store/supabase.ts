import { SupabaseVectorStore } from "@langchain/community/vectorstores/supabase";
import { client } from "@/database/supabase-client";
import { OllamaEmbeddings } from "@langchain/ollama";

const embeddings = new OllamaEmbeddings({
  model: "nomic-embed-text",
});
export const vectorStore = new SupabaseVectorStore(embeddings, {
  client: client,
  tableName: "documents",
  queryName: "match_documents",
});

const filter = { source: "https://example.com" };

const similaritySearchResults = await vectorStore.similaritySearch(
  "biology",
  2,
  filter
);

for (const doc of similaritySearchResults) {
  console.log(`* ${doc.pageContent} [${JSON.stringify(doc.metadata, null)}]`);
}
