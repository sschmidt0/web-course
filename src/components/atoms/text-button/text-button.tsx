import React from "react";
import styles from "./text-button.module.scss";

export interface TextButtonProps {
  text: string;
  onClick: () => void;
}

export const TextButton: React.FC<TextButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};
