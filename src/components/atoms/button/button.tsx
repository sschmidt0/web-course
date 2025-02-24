import React from "react";
import styles from "./button.module.scss";

export type ButtonProps = {
  className?: string;
  isDisabled?: boolean;
  secondary?: boolean;
  text: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  className,
  isDisabled,
  secondary,
  text,
  type = "button",
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={[styles.button, secondary && styles.secondary, className].join(
        " "
      )}
      disabled={isDisabled}
      type={type}
    >
      {text}
    </button>
  );
};
