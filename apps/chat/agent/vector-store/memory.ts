import { OllamaEmbeddings } from "@langchain/ollama";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const embeddings = new OllamaEmbeddings({
  model: "nomic-embed-text",
});

const text =
  "LangChain is the framework for building context-aware reasoning applications";

const vectorStore = await MemoryVectorStore.fromDocuments(
  [{ pageContent: text, metadata: {} }],
  embeddings
);

const retriever = vectorStore.asRetriever(1);

export const retrievedDocuments = await retriever.invoke("What is LangChain?");
