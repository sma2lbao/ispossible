/**
 * 是否在思考中
 * @param answerContent
 * @returns
 */
export function isThinking(answerContent: string) {
  return !answerContent.includes("</think>");
}

export interface IAnswerMessage {
  /**
   * 是否思考中
   */
  isThinking: boolean;
  /**
   * 思路
   */
  thought?: string;

  /**
   * 答案
   */
  content?: string;

  /**
   * 原始回答
   */
  rawContent: string;
}

/**
 * 格式化消息
 * @param answerContent
 * @returns
 */
export function formatAnswerMessage(answerContent: string): IAnswerMessage {
  const thinking = isThinking(answerContent);
  const thinkContentClone = answerContent;
  const thinkContent =
    thinkContentClone.match(/<think>(.*?)(?=<think>|<\/think>|$)/s)?.[1] || "";
  const answerClone = answerContent;
  const answer = answerClone.match(/<think>.*?<\/think>(.*)/s)?.[1] || "";
  return {
    isThinking: thinking,
    thought: thinkContent,
    content: answer,
    rawContent: answerContent,
  };
}
