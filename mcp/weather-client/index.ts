import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { ChatCompletionMessageParam, type ChatCompletionTool } from "openai/resources/chat/completions";
import readline from "readline/promises";
import dotenv from "dotenv";
import OpenAI from "openai";


dotenv.config();

class MCPClient {
  private mcp: Client;

  private openai: OpenAI;

  private transport: StdioClientTransport | null = null;

  private tools: ChatCompletionTool[] = [];

  constructor() {
    this.openai = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey: 'sk-38265eb1b8ba4f7fa129efa590754455'
    });

    this.mcp = new Client({ name: "mcp-client-cli", version: "1.0.0" });
  }

  async connectToServer(serverScriptPath: string) {
    try {
      const isJs = serverScriptPath.endsWith(".js");
      const isPy = serverScriptPath.endsWith(".py");
      if (!isJs && !isPy) {
        throw new Error("Server script must be a .js or .py file");
      }
      const command = isPy
        ? process.platform === "win32"
          ? "python"
          : "python3"
        : process.execPath;
      this.transport = new StdioClientTransport({
        command,
        args: [serverScriptPath],
      });
      this.mcp.connect(this.transport);

      const toolsResult = await this.mcp.listTools();
      this.tools = toolsResult.tools.map((tool) => {
        return {
          type: "function",
          function: {
            name: tool.name,
            description: tool.description,
            parameters: tool.inputSchema
          }
        };
      });
      console.log(JSON.stringify(toolsResult.tools.map(item => item.name)))
    } catch (error) {
      console.log("Failed to connect to MCP server: ", error);
      throw error;
    }
  }

  async processQuery(query: ChatCompletionMessageParam[] | string): Promise<string|null> {
    let messages: ChatCompletionMessageParam[] = [];
    if (!Array.isArray(query)) {
      messages = [
        {
          role: "user",
          content: query,
        }
      ]
    } else {
      messages = query
    }

    console.log('query: ', query)

    const completion = await this.openai.chat.completions.create({
      model: 'deepseek-chat',
      messages,
      tools: this.tools,
    })

    console.log('completion: ', completion)

    const content = completion.choices[0];

    console.log('content: ', content.message.content)
    messages.push(content.message);

    if (content.finish_reason === 'tool_calls') {
      // 使用 Tool
      for (const toolCall of content.message.tool_calls!) {
        const toolName = toolCall.function.name;
        const toolArgs = JSON.parse(toolCall.function.arguments);

        const result = await this.mcp.callTool({
          name: toolName,
          arguments: toolArgs
        }) as { content: Array<{ type: 'text', text: string }> }
        const content = result.content[0]
        messages.push({
          role: 'tool',
          content: content.text,
          tool_call_id: toolCall.id
        })
      }

      return await this.processQuery(messages)
    }


    return content.message.content;
  }

  async chatLoop() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    try {
      console.log("\nMCP Client Started!");
      console.log("Type your queries or 'quit' to exit.");

      while (true) {
        const message = await rl.question("\nQuery: ");
        if (message.toLowerCase() === "quit") {
          break;
        }
        const response = await this.processQuery(message);
        console.log("\n" + response);
      }
    } catch(error) {
      console.error(error)
    } finally {
      rl.close();
    }
  }

  async cleanup() {
    await this.mcp.close();
  }
}

async function main() {
  if (process.argv.length < 3) {
    console.log("Usage: node index.ts <path_to_server_script");
    return;
  }
  const mcpClient = new MCPClient();
  try {
    await mcpClient.connectToServer(process.argv[2]);
    await mcpClient.chatLoop();
  } finally {
    await mcpClient.cleanup();
    process.exit(0);
  }
}

main();
