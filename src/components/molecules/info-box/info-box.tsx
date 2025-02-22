import React from "react";
import styles from "./info-box.module.scss";
import { APP_ICONS } from "../../../common/app-icons";

export interface InfoBoxProps {
  children?: React.ReactNode;
  duration?: string;
  icon?: React.ReactNode;
  text: string;
  title: string;
}

export const InfoBox: React.FC<InfoBoxProps> = ({
  icon,
  duration,
  text,
  title,
  children,
}) => {
  const itemIcon = APP_ICONS[icon as keyof typeof APP_ICONS];
  console.log({ itemIcon });

  return (
    <div className={styles.container}>
      {icon && <div className={styles.icon}>{itemIcon}</div>}
      {duration && <p className={styles.duration}>{duration}</p>}
      <h3 className={styles.title}>{title}</h3>
      <p>{text}</p>
      <div className={styles["child-container"]}>{children}</div>
    </div>
  );
};
