export interface IDeepSeek {}

export interface IChatMessage {
  role?: "user";

  content: string;

  onmessage?: (message: string) => void;
}

export class DeepSeek {
  constructor(props?: IDeepSeek) {}

  async chat(messsage: IChatMessage) {
    const { onmessage, content } = messsage;

    const response = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        model: "deepseek-r1:8b",
        prompt: content,
        stream: true,
      }),
    });
    const reader = response.body?.getReader();
    const decoder = new TextDecoder("utf-8");
    if (!reader) return;
    let message = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const decodeText = decoder.decode(value);
      const lines = decodeText
        .split("\n")
        .filter((item) => item.trim() === item);
      lines.forEach((line) => {
        try {
          const data = JSON.parse(line);
          message += data?.response;
          onmessage?.(message);
        } catch {
          // 忽略
        }
      });
    }
  }
}
