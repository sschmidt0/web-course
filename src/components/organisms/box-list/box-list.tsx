import React from "react";
import { BoxListItem } from "../../molecules";
import styles from "./box-list.module.scss";

export interface BoxListProps {
  content: { title: string; content: string[] }[];
}

export const BoxList: React.FC<BoxListProps> = ({ content }) => {
  return (
    <ul className={styles.list}>
      {content.map((objective) => (
        <BoxListItem
          key={objective.title}
          className={styles["list-item"]}
          content={objective.content}
          title={objective.title}
        />
      ))}
    </ul>
  );
};
