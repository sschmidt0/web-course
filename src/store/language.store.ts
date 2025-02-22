import { create } from "zustand";

type Language = "catalan" | "spanish" | "english";

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "catalan",
  setLanguage: (language) => set({ language }),
}));
