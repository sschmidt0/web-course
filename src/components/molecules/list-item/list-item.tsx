import React from "react";
import styles from "./list-item.module.scss";

export interface ListItemProps {
  title: string;
  content: string[];
}

export const ListItem: React.FC<ListItemProps> = ({ content, title }) => {
  return (
    <li className={styles.container}>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <ul className={styles["list-item-container"]}>
          {content.map((objective) => (
            <li key={objective} className={styles["list-item"]}>
              {objective}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
