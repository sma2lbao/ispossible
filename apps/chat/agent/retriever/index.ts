// import { SelfQueryRetriever } from "langchain/retrievers/self_query";
// import { SupabaseTranslator } from "@langchain/community/structured_query/supabase";
// import { vectorStore } from "../vector-store/supabase";
// import { llm } from "../llm";
// import type { SupabaseFilter } from "@langchain/community/vectorstores/supabase";

// export const selfQueryRetriever = SelfQueryRetriever.fromLLM({
//   llm: llm,
//   vectorStore: vectorStore,
//   documentContents: "Brief summary of a movie",
//   structuredQueryTranslator: new SupabaseTranslator(),
//   searchParams: {
//     filter: (rpc: SupabaseFilter) =>
//       rpc.filter("metadata->>type", "eq", "movie"),
//     mergeFiltersOperator: "and",
//   },
// });
