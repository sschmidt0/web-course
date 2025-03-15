import React from "react";
import { AnimatePresence } from "framer-motion";
import { MenuList } from "./components/menu-list";
import styles from "./menu-box.module.scss";

export const MenuBox: React.FC = () => {
  return (
    <div className={styles.container}>
      <AnimatePresence>
        <MenuList />
      </AnimatePresence>
    </div>
  );
};
