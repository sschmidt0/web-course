import { useMenuStore } from "@/store";
import { MenuBox } from "./menu-box.component";

export const MenuBoxContainer = () => {
  const { isOpen } = useMenuStore();
  return isOpen ? <MenuBox /> : null;
};
