import React from "react";

import styles from "./title-description-list.module.scss";
import { ListItem } from "../../molecules";

export interface TitleDescriptionListProps {
  content: { title: string; content: string[] }[];
}

export const TitleDescriptionList: React.FC<TitleDescriptionListProps> = ({
  content,
}) => {
  return (
    <ul className={styles.list}>
      {content.map((objective) => (
        <ListItem
          key={objective.title}
          title={objective.title}
          content={objective.content}
        />
      ))}
    </ul>
  );
};
