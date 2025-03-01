import React from "react";

import styles from "./box-list.module.scss";
import { BoxListItem } from "../../molecules";

export interface BoxListProps {
  content: { title: string; content: string[] }[];
}

export const BoxList: React.FC<BoxListProps> = ({ content }) => {
  return (
    <ul className={styles.list}>
      {content.map((objective) => (
        <BoxListItem
          key={objective.title}
          content={objective.content}
          title={objective.title}
        />
      ))}
    </ul>
  );
};
