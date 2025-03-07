import React from "react";
import Image from "next/image";
import styles from "./picture.module.scss";

export const Picture: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        src="/image.png"
        width={240}
        height={300}
        alt="Sarah Schmidt"
      />
    </div>
  );
};
