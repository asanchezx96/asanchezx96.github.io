import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface iStoreMain {
  expanded: boolean;
  updateExpanded: (expanded: boolean) => void;
}

export const useStoreCount = create(
  persist<iStoreMain>(
    (set) => ({
      expanded: false,
      updateExpanded: (newValue) => set({ expanded: newValue }),
    }),
    {
      name: "main-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
