import React from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};
