import React from "react";
import styles from "./box-list-item.module.scss";
import { IconBox } from "../../atoms";
import { APP_ICONS } from "../../../common/app-icons";

export interface BoxListItemProps {
  title: string;
  content: string[];
}

export const BoxListItem: React.FC<BoxListItemProps> = ({ content, title }) => {
  const itemIcon = APP_ICONS["construction" as keyof typeof APP_ICONS];

  return (
    <li>
      <div className={styles["title-container"]}>
        <IconBox icon={itemIcon} />
        <h4 className={styles.title}>{title}</h4>
      </div>

      <ul className={styles["list-item-container"]}>
        {content.map((objective) => (
          <li key={objective} className={styles["list-item"]}>
            {objective}
          </li>
        ))}
      </ul>
    </li>
  );
};
