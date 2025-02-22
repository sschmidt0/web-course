import React from "react";
import styles from "./info-box.module.scss";

export interface InfoBoxProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  text: string;
  title: string;
}

export const InfoBox: React.FC<InfoBoxProps> = ({
  icon,
  text,
  title,
  children,
}) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p>{text}</p>
      <div className={styles["child-container"]}>{children}</div>
    </div>
  );
};
