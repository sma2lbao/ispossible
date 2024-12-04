/**
 * 获取音频文件的时长
 * @param file - 用户选择的音频文件（File 对象）
 * @returns 一个 Promise，解析为音频的时长（秒）
 */
export function getAudioDuration(file: File): Promise<number> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith("audio/")) {
      reject(new Error("文件不是音频类型"));
      return;
    }

    const audio = new Audio();
    audio.src = URL.createObjectURL(file);

    // 监听元数据加载完成事件
    audio.addEventListener("loadedmetadata", () => {
      const duration = audio.duration; // 单位：秒
      URL.revokeObjectURL(audio.src); // 释放临时 URL
      resolve(duration);
    });

    audio.addEventListener("error", () => {
      reject(new Error("加载音频文件失败"));
    });
  });
}
