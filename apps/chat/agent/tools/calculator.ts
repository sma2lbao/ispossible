import { z } from "zod";
import { StructuredTool } from "@langchain/core/tools";

export class CalculatorTool extends StructuredTool {
  name = "calculator";
  description = "Can perform mathematical operations.";
  schema = z.object({
    operation: z
      .enum(["add", "subtract", "multiply", "divide"])
      .describe("The type of operation to execute."),
    number1: z.number().describe("The first number to operate on."),
    number2: z.number().describe("The second number to operate on."),
  });

  constructor() {
    super();
  }

  async _call({
    operation,
    number1,
    number2,
  }: z.infer<typeof this.schema>): Promise<string> {
    if (operation === "add") {
      return `${number1 + number2}`;
    }
    if (operation === "subtract") {
      return `${number1 - number2}`;
    }
    if (operation === "multiply") {
      return `${number1 * number2}`;
    }
    if (operation === "divide") {
      return `${number1 / number2}`;
    }
    throw new Error("Invalid operation.");
  }
}
