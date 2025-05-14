import { createStore } from "zustand/vanilla";

export type SettingsState = {
  /**
   * 模型
   */
  model: string;
  /**
   * 随机性
   */
  temperature: number;
  /**
   * 核采样
   */
  topP: number;
  /**
   * 单次回复限制
   */
  maxTokens: number;
  /**
   * 话题新鲜度
   */
  presencePenalty: number;
  /**
   * 频率奖惩度
   */
  frequencyPenalty: number;
  /**
   * 本地部署的api地址
   */
  dsApi?: string;
};

export type SettingsActions = {
  update: (
    key: keyof SettingsState,
    value: SettingsState[keyof SettingsState]
  ) => void;
};

export type SettingsStore = SettingsState & SettingsActions;

export const createSettingsStore = (
  defaultState: SettingsState = {
    model: "",
    temperature: 0.5,
    topP: 1,
    maxTokens: 4000,
    presencePenalty: 0,
    frequencyPenalty: 0,
  }
) => {
  return createStore<SettingsStore>()((set) => ({
    ...defaultState,
    update(key, value) {
      return set(() => ({ [key]: value }));
    },
  }));
};
