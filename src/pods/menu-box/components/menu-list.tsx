import React from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { APP_ICONS } from "@/common/app-icons";
import { useOutsideClick } from "@/common/hooks";
import { NAVBAR_ITEMS, NAV_TEXT } from "@/db/navbar";
import { useLanguageStore, useMenuStore } from "@/store";
import styles from "./menu-list.module.scss";

export const MenuList = () => {
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const { language } = useLanguageStore();
  const { isOpen, setIsOpen } = useMenuStore();
  const pathname = usePathname();

  const handleChangeOpen = () => {
    setIsOpen(!isOpen);
  };

  useOutsideClick(menuRef, handleChangeOpen, isOpen);

  if (!isOpen) {
    return <></>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={styles.container}
      ref={menuRef}
    >
      <ul className={styles.list}>
        {NAVBAR_ITEMS.map((item) => {
          const itemIcon = APP_ICONS[item.icon as keyof typeof APP_ICONS];
          const navKey = item.text.toLowerCase() as keyof typeof NAV_TEXT;
          const textObj = NAV_TEXT[navKey];
          const itemText = textObj[language];
          const isActiveRoute = pathname === item.route;

          const handleClick = () => {
            setIsOpen(false);
          };

          return (
            <li key={item.id} className={styles.item}>
              <Link
                href={item.route}
                className={styles.link}
                style={isActiveRoute ? { color: "#0b062e" } : undefined}
                onClick={handleClick}
              >
                <span className={styles.icon}>{itemIcon}</span>
                <span>{itemText}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};
