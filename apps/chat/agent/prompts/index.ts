// import { ChatPromptTemplate } from "@langchain/core/prompts";
// import {
//   RunnablePassthrough,
//   RunnableSequence,
// } from "@langchain/core/runnables";
// import { StringOutputParser } from "@langchain/core/output_parsers";
// import { selfQueryRetriever } from "../retriever";
// import { llm } from "../llm";
// import type { Document } from "@langchain/core/documents";

// const prompt = ChatPromptTemplate.fromTemplate(`
// Answer the question based only on the context provided.

// Context: {context}

// Question: {question}`);

// const formatDocs = (docs: Document[]) => {
//   return docs.map((doc) => JSON.stringify(doc)).join("\n\n");
// };

// export const ragChain = RunnableSequence.from([
//   {
//     context: selfQueryRetriever.pipe(formatDocs),
//     question: new RunnablePassthrough(),
//   },
//   prompt,
//   llm,
//   new StringOutputParser(),
// ]);
