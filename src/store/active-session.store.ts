import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ActiveSessionStore {
  sessionIndex: number;
  setSessionIndex: (sessionIndex: number) => void;
}

export const useActiveSessionStore = create<ActiveSessionStore>()(
  devtools((set) => ({
    sessionIndex: 0,
    setSessionIndex: (sessionIndex) => set({ sessionIndex }),
  }))
);
