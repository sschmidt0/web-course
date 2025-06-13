import React from "react";
import styles from "./icon-button.module.scss";
import SpanishFlag from "../../../../public/assets/spanish.svg";
import CatalanFlag from "../../../../public/assets/catalan.svg";
import EnglishFlag from "../../../../public/assets/english.svg";
import Image from "next/image";

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
    <button
      onClick={onClick}
      className={styles.button}
      aria-label={`icon button with icon ${icon}`}
    >
      <div className={styles["image-container"]}>
        <Image
          className={styles.image}
          src={src}
          alt={`translate into ${icon}`}
        />
      </div>
    </button>
  );
};
