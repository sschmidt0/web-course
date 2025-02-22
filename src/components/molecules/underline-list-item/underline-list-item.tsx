import React from "react";
import styles from "./underline-list-item.module.scss";
import { IconListItemModel } from "../../../common/model";
import { APP_ICONS } from "../../../common/app-icons";

export type UnderlineListItemProps = IconListItemModel;

export const UnderlineListItem: React.FC<UnderlineListItemProps> = ({
  icon,
  text,
  value,
}) => {
  const itemIcon = APP_ICONS[icon as keyof typeof APP_ICONS];

  return (
    <div className={styles.container}>
      <div className={styles.icon}>{itemIcon}</div>
      <div className={styles.innerContainer}>
        <div>{text}</div>
        <div>{value}</div>
      </div>
    </div>
  );
};
