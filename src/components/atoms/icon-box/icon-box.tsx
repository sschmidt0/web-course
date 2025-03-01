import React from "react";
import styles from "./icon-box.module.scss";

export interface IconBoxProps {
  icon: React.ReactNode;
}

export const IconBox: React.FC<IconBoxProps> = ({ icon }) => {
  return <div className={styles.icon}>{icon}</div>;
};
