import React from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
  secondary?: boolean;
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ secondary, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={[styles.button, secondary && styles.secondary].join(" ")}
    >
      {text}
    </button>
  );
};
