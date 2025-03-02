import React from "react";
import styles from "./menu-button.module.scss";

export interface MenuButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ icon, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {icon}
    </button>
  );
};
