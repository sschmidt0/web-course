import React from "react";
import styles from "./icon-button.module.scss";
import SpanishFlag from "../../../assets/spanish.svg";
import CatalanFlag from "../../../assets/catalan.svg";
import EnglishFlag from "../../../assets/english.svg";

const FLAGS = {
  spanish: SpanishFlag,
  catalan: CatalanFlag,
  english: EnglishFlag,
};

export interface IconButtonProps {
  icon: string;
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({ icon, onClick }) => {
  const buttonIcon = icon as keyof typeof FLAGS;
  const src = FLAGS[buttonIcon];

  return (
    <button onClick={onClick} className={styles.button}>
      <div className={styles["image-container"]}>
        <img
          className={styles.image}
          src={src}
          alt={`translate into ${icon}`}
        />
      </div>
    </button>
  );
};
