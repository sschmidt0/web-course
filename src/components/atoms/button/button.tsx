import React from "react";
import styles from "./button.module.scss";

export interface ButtonProps {
  className?: string;
  secondary?: boolean;
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  secondary,
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={[styles.button, secondary && styles.secondary, className].join(
        " "
      )}
    >
      {text}
    </button>
  );
};
