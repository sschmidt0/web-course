import React from "react";
import ReactDOM from "react-dom";
import { AnimatePresence } from "framer-motion";
import { MenuList } from "./components/menu-list";
import styles from "./menu-box.module.scss";

export const MenuBox: React.FC = () => {
  const portal = document.getElementById("portal");

  if (!portal) {
    console.error("El elemento con id 'portal' no se encontró en el DOM.");
    return null;
  }

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <AnimatePresence>
        <MenuList />
      </AnimatePresence>
    </div>,
    portal
  );
};
