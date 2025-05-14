"use client";

import { useStore } from "zustand";
import { createContext, useContext, useRef } from "react";
import {
  type SettingsStore,
  createSettingsStore,
} from "@/stores/settings-store";

export type SettingStoreApi = ReturnType<typeof createSettingsStore>;

export const SettingsStoreContext = createContext<SettingStoreApi | undefined>(
  undefined
);

export const SettingsStoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const storeRef = useRef<SettingStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createSettingsStore();
  }

  return (
    <SettingsStoreContext.Provider value={storeRef.current}>
      {children}
    </SettingsStoreContext.Provider>
  );
};

export const useSettingsStore = <T,>(
  selector: (store: SettingsStore) => T
): T => {
  const settingsStoreContext = useContext(SettingsStoreContext);

  if (!settingsStoreContext) {
    throw new Error(
      `useSettingsStore must be used within SettingsStoreProvider`
    );
  }

  return useStore(settingsStoreContext, selector);
};
