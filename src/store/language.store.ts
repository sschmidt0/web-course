import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Language } from "@/common/model/language";

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
