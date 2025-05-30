import { ChatOllama } from "@langchain/ollama";
import { CalculatorTool } from "../tools";

export const llm = new ChatOllama({
  model: "llama3.2:1b",
  temperature: 0,
  maxRetries: 2,
});

llm.bindTools([new CalculatorTool()]);
