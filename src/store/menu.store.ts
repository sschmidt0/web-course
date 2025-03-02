import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface MenuState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useMenuStore = create<MenuState>()(
  devtools((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({ isOpen }),
  }))
);
