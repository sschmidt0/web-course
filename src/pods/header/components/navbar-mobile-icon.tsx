import { APP_ICONS } from "@/common/app-icons";
import { MenuButton } from "@/components";
import { useMenuStore } from "@/store";
import styles from "./navbar-mobile-icon.module.scss";

export const NavbarMobileIcon = () => {
  const { isOpen, setIsOpen } = useMenuStore();
  const closeIcon = APP_ICONS["menu-close" as keyof typeof APP_ICONS];
  const openIcon = APP_ICONS["menu-open" as keyof typeof APP_ICONS];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.icon}>
      {isOpen ? (
        <MenuButton icon={closeIcon} onClick={handleClick} />
      ) : (
        <MenuButton icon={openIcon} onClick={handleClick} />
      )}
    </div>
  );
};
