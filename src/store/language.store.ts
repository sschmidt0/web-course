import { create } from "zustand";
import { devtools } from "zustand/middleware";

type Language = "catalan" | "spanish" | "english";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  devtools((set) => ({
    language: "catalan",
    setLanguage: (language: Language) => set({ language }),
  }))
);
